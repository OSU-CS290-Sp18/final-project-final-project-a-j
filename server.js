var http = require('http');
var url = require('url');
var fs = require('fs');

var homeHTML;
fs.readFile('home.html', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   homeHTML = data;
   console.log("+++ home.html was read");
});

var homeStyle;
fs.readFile('home.css', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   homeStyle = data;
   console.log("+++ home.css was read");
});

var homeJS;
fs.readFile('home.js', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   homeJS = data;
   console.log("+++ home.js was read");
});

var trumpHTML;
fs.readFile('trump.html', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   trumpHTML = data;
   console.log("+++ trump.html was read");
});

var kanyeHTML;
fs.readFile('kanye.html', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   kanyeHTML = data;
   console.log("+++ kanye.html was read");
});

var billHTML;
fs.readFile('bill.html', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   billHTML = data;
   console.log("+++ bill.html was read");
});

var elonHTML;
fs.readFile('elon.html', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   elonHTML = data;
   console.log("+++ elon.html was read");
});
var profileJS;
fs.readFile('profile.js', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   profileJS = data;
   console.log("+++ profile.js was read");
});

var profileStyle;
fs.readFile('profile.css', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   profileStyle = data;
   console.log("+++ profile.css was read");
});

var profileError;
fs.readFile('404.html', 'utf8', function read(err, data){
   if(err){
      throw err;
   }
   profileError = data;
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
   else if(req.url === '/trump.html'){
      res.write(trumpHTML);
      res.statusCode = 200;
   }
   else if(req.url === '/bill.html'){
      res.write(billHTML);
      res.statusCode = 200;
   }
   else if(req.url === '/kanye.html'){
      res.write(kanyeHTML);
      res.statusCode = 200;
   }
   else if(req.url === '/elon.html'){
      res.write(elonHTML);
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
