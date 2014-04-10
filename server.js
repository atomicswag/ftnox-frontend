var http =  require("http"),
    url =   require("url"),
    path =  require("path"),
    fs =    require("fs"),
    mime =  require("mime"),
    port =  process.argv[2] || 8889;

if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str){
        return this.slice(0, str.length) == str;
    };
}
 
http.createServer(function(request, response) {
 
    var uri = url.parse(request.url).pathname;
    var fileName;
    if (uri.startsWith("/treasury")) {
        fileName = path.join(process.cwd(), "static", uri);
    } else {
        fileName = path.join(process.cwd(), "static/main", uri);
    }
    console.log(fileName);
    
    path.exists(fileName, function(exists) {
        if(!exists) {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("404 Not Found\n");
            response.end();
            return;
        }
 
        if (fs.statSync(fileName).isDirectory()) fileName += '/index.html';
 
        // Read & serve file.
        fs.readFile(fileName, "binary", function(err, file) {
            if(err) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(err + "\n");
                response.end();
                return;
            }
 
            var mimeType = mime.lookup(fileName);
            var charset =  mime.charsets.lookup(mimeType);
            response.writeHead(200, {
                "Content-Type":     mimeType,
                "Content-Encoding": charset
            });
            response.write(file, "binary");
            response.end();
        });
    });
}).listen(parseInt(port, 10));
 
console.log("Static file server running at\n    => http://localhost:" + port + "/\nCTRL + C to shutdown");
