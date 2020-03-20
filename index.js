const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const favicon = require('serve-favicon');

const port = process.env.PORT || 1337;

app.use(express.static(__dirname + "/public"));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/map.html'));
});

router.get('/map',function(req,res){
  res.sendFile(path.join(__dirname+'/public/map.html'));
});

router.get('/farmer-report',function(req,res){
  res.sendFile(path.join(__dirname+'/public/farmerReport.html'));
});

router.get('/farmer-summary',function(req,res){
  res.sendFile(path.join(__dirname+'/public/farmerSummary.html'));
});

router.get('/buyer-summary',function(req,res){
  res.sendFile(path.join(__dirname+'/public/buyerSummary.html'));
});

router.get('/forest-catalog',function(req,res){
  res.sendFile(path.join(__dirname+'/public/forestCatalog.html'));
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// const http = require('http');


// const server = http.createServer((request, response) => {
//   var pathname = url.parse(request.url).pathname;
//   switch (pathname) {
//     case '/map':
//       fs.readFile('./content/map.html', function (err, data) {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write(data);
//         response.end();
//       });
//       break;
//     case '/farmerreport':
//       fs.readFile('./content/farmerReport.html', function (err, data) {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write(data);
//         response.end();
//       });
//       break;
//     case '/farmersummary':
//       fs.readFile('./content/farmerSummary.html', function (err, data) {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write(data);
//         response.end();
//       });
//       break;
//     case '/buyersummary':
//       fs.readFile('./content/buyerSummary.html', function (err, data) {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write(data);
//         response.end();
//       });
//       break;
//     case '/forestcatalog':
//       fs.readFile('./content/forestCatalog.html', function (err, data) {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write(data);
//         response.end();
//       });
//       break;
//     default:
//       fs.readFile('./content/map.html', function (err, data) {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write(data);
//         response.end();
//       });
//       break;
//   }
// });

// const port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);
