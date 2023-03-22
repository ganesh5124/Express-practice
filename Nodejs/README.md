Node js

Requests can be:

Querying for data
Deleting data 
Updating the data, etc.
    Node.js adds the requests to the Event Queue
    Event Loop checks if the requests are simple enough not to require any external resources
    Event Loop processes simple requests and returns the responses to the corresponding clients
    A single thread from Thread Pool is assigned to a single complex request
    Thread Pool performs the required task and returns the response to Event Loop, which in turn, returns the response to the client


Core Modules of Node
http
util
fs
url
querystring
stream
zlib

http module
methods
http==> createServer
        write('')
        end()
        listen(port)