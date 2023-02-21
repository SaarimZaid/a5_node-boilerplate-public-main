var http = require("http");

const port = 8081;

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    const url = req.url;
    if (url === '/welcome' || url === '/') {
        res.end('Welcome to Dominos!')
        res.statusCode = 200;
    } else if (url === '/contact') {
        res.end(`
            {  
                phone: '18602100000', 
                email: 'guestcaredominos@jublfood.com' 
            }
        `)
        res.statusCode = 200;
    }else{
        res.statusCode = 404;
        res.end('404 not found')
    }
}

httpServer.listen(port, () => {
    console.log(`Server running at port ${port}`)
})

module.exports = httpServer;