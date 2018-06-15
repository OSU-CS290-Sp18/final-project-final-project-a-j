var http = require('http');
var url = require('url');
var fs = require('fs');

var homeHTML;
fs.readFile('public/home.html', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   tweeterHTML = data;
   console.log("+++ home.html was read");
});

var homeStyle;
fs.readFile('public/home.css', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   tweeterStyle = data;
   console.log("+++ home.css was read");
});

var homeJS;
fs.readFile('public/home.js', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   tweeterJS = data;
   console.log("+++ home.js was read");
});

var profileHTML;
fs.readFile('public/profile.html', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   tweeterError = data;
   console.log("+++ profile.html was read");
});

var profileJS;
fs.readFile('public/profile.js', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   tweeterError = data;
   console.log("+++ profile.js was read");
});

var profileStyle;
fs.readFile('public/profile.css', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   tweeterError = data;
   console.log("+++ profile.css was read");
});

var profileError;
fs.readFile('public/404.html', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   tweeterError = data;
   console.log("+++ 404.html was read");
});

http.createServer(function(req, res){
   console.log("== Request Recieved");
   console.log(" - - method: ", req.method);
   console.log(" - - url: ", req.url);
   if(req.url === '/home.html'){
      res.write(homeHTML);
      res.statusCode = 200;
      //console.log("Writing index.html");
   }

   else if(req.url === '/'){
      res.write(homeHTML);
      res.statusCode = 200;
   }
   else if(req.url === '/home.css'){
      res.write(homeStyle);
      res.statusCode = 200;
      //console.log("Writing style.css");
   }
   else if(req.url === '/home.js'){
      res.write(homeJS);
      res.statusCode = 200;
      //console.log("Writing index.js");
   }
   else if(req.url === '/profile.html'){
      res.write(profileHTML);
      res.statusCode = 200;
   }
   else if(req.url === '/profile.css'){
      res.write(profileStyle);
      res.statusCode = 200;
      //console.log("Writing style.css");
   }
   else if(req.url === '/profile.js'){
      res.write(profileJS);
      res.statusCode = 200;
      //console.log("Writing index.js");
   }
   else{
      res.write(profileError);
      res.statusCode = 404;
   }

   res.end(); 
}).listen(3000);
