const restify = require('restify');
const uuidv4 = require('uuid/v4');

var database = {}

function addContact(fields) {
    // Assign a random UUID
    var uuid = uuidv4()
    fields['id'] = uuid
    fields['link'] = '/contacts/' + uuid
    database[uuid] = fields
    return fields
}

addContact({name:"Alice", email:"alice.smith@gmail.com"})
addContact({name: "Bob", email: "bob@microsoft.com"})
addContact({name: "Carl", email: "carl@apple.com"})
addContact({name: "Diane", email: "djones@tesla.com"})



function homePage(req, res, next) {
    res.setHeader('content-type', 'text/html');
    var output = ""
    if(req.query.name) { // We already know your name.
        output += "Welcome, <b>" + req.query.name + "</b>" +
            "<br><a href='/'>(Not you?)</a>"
    }
    else {                      // We don't know your name.
        output += "<form>Welcome! Who are you? " +
            "<input type='text' name='name'></form>"
    }

    res.end(output)
    console.log("REQUEST", req.query)
    next()
}

function respond(req, res, next) {
    var obj = {message: 'hello ' + req.params.name,
               timestamp: new Date(),
               mood: 'lazy'}
    res.send(obj)
    next();
}

function listContacts(req, res, next) {
    var ls = Object.keys(database).map(k => {
        return database[k]
    })
    res.send(ls)
    next()
}

function createContact(req, res, next) {
    res.send(addContact(req.body))
    next()
}

function retrieveContact(req, res, next) {
    var c = database[req.params.id]
    res.send(c)
    next()
}

function deleteContact(req, res, next) {
    // console.log("TODO: DELETE", req.params.id)
    delete database[req.params.id]
    res.send({})
    next()
}

// Configuration and routing
var server = restify.createServer();

server.use(restify.plugins.queryParser());
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.jsonp());
server.use(restify.plugins.bodyParser({ mapParams: false }));

server.get('/', homePage);
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);
// REST API for contacts
server.get('/contacts/', listContacts)
server.get('/contacts/:id', retrieveContact)
server.post('/contacts/', createContact)
server.del('/contacts/:id', deleteContact)


server.listen(9005, function() {
  console.log('%s listening at %s', server.name, server.url);
});
