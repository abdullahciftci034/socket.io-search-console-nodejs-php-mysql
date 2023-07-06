const http = require('http')
const socket = require('socket.io')
const server = http.createServer();


const io = socket(server, {
  cors: {
    origin: '*'
  }
});
io.on('connection',(socket) =>{
    console.log(socket.id)
    socket.on('typing',data => {
      // mysql_date_get(data, (error, val) => {
      //   if (error) {
      //     socket.emit('typing',error);
      //   }else{
      //     socket.emit('typing',error);
      //   }
      // });




      mysql_search_request(data)
        .then(result => {
          socket.emit('typing',result);
        })
        .catch(error => {
           socket.emit('typing',error);
      });





    })
})
server.listen(3000)
const request = require('request');







function mysql_search_request(val){
  return new Promise((resolve, reject) => {
    const options = {
      url: 'http://php_apache_server/search.php',
      method: 'POST',
      form: { search:val }
    };

    request(options, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve({
          statusCode: response.statusCode,
          headers: response.headers,
          body: JSON.parse(body) 
        });
      }
    });
  });
}


  /*
function mysql_search_request(val){
  request('php_apache_server/search.php', {
      search: val
    }, (response, error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(response.statusCode);
        console.log(response.headers);
        console.log(response.body);
      }
  });
}




/* const superagent = require('superagent');

function mysql_date_get(val, callback) {
  
  superagent
    .get('php_apache_server/search.php')
    .query({ search: val })
    .end((err, res) => {
      if (err) {
        console.error(err);
        callback(err, null); // Pass the error to the callback function
        return;
      }
      const result = {
        url: res.body.url,
        explanation: res.body.explanation
      };
      callback(null, result); // Pass the result to the callback function
    });
}
/*const options = {
  hostname: 'php_apache_server', // The hostname of the server you want to send the request to
  port: 80, // The port number of the server
  path: '/search.php', // The path (endpoint) you want to send the request to
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }, // The HTTP method you want to use
};

function mysql_date_get(val, callback) {
  const postData = JSON.stringify({ search: val });
  console.log(val);
  console.log(postData);
  const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      callback(data); // Call the callback function with the received data
    });
  });

  req.on('error', (error) => {
    console.error(error); // Handle request errors
  });

  req.write(postData); // Write the data to the request body
  req.end();
}
*/