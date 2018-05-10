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

addContact({name:"Alice", email:"alice.smith@gmail.com", password: "asfafdaf"})
addContact({name: "Bob", email: "bob@microsoft.com", password: "sadgasdgasdg"})
addContact({name: "Carl", email: "carl@apple.com", password: "anvcxn"})
addContact({name: "Diane", email: "djones@tesla.com", password: "dxcnvzn"})



function homePage(req, res, next) {
    res.setHeader('content-type', 'text/html');
    var output = ""
    if(req.query.name) { // We already know your name.
        output += "Welcome, <b>" + req.query.name + "</b>" +
            "<br><a href='/'>(Not you?)</a>" +
			"<br><a href='/secret'>(Secret Page?)</a>"
		
    }
    else {                      // We don't know your name.
        output += "<form>Welcome! Who are you? " +
            "<input type='text' name='name'> <br> Password <input type='password' name='Password'</form> <input type ='submit' name='Log In Button'>"
    }
	 
    res.end(output)
    console.log("REQUEST", req.query)
    next()
}



function secretPage(req, res, next) {
    console.log("COOKIES ON SECRET PAGE", req.cookies)
    const sessionId = req.cookies.session
    const username = sessions[sessionId]
    if(username == "Chris") {
        res.end("WELCOME SUPER ADMIN! You rule!!!")
    }
    else if(username) {
        res.end("Welcome to your profile page, " + username)
    }
    else {
        res.end("YOU must log in first")
    }
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
vavar server = restify.createServer();

server.use(restify.plugins.queryParser());
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.jsonp());
server.use(restify.plugins.bodyParser({ mapParams: false }));
server.use(cookieParser.parse);

server.get('/', homePage);
server.get('/secret', secretPage);
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);
// REST API for contacts
server.get('/contacts/', listContacts)
server.get('/contacts/:id', retrieveContact)
server.post('/contacts/', createContact)
server.del('/contacts/:id', deleteContact)


server.listen(9005, function() {
  console.log('%s listening at %s', server.name, server.url);
r server = restify.createServer();

server.use(restify.plugins.queryParser());
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.jsonp());
server.use(restify.plugins.bodyParser({ mapParams: false }));

server.get('/', homePage);
server.post('/', homePage);
//server.get('/', secret);
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
