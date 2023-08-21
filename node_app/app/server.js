const http = require('http')
const socket = require('socket.io')
const server = http.createServer();

console.log("Hello, Node.js!");
const io = socket(server, {
  cors: {
    origin: '*'
  }
});
io.on('connection',(socket) =>{
    console.log(socket.id)
    socket.on('typing',data => {
      
      mysql_search_request(data)
        .then(result => {
          console.log(result);
          socket.emit('typing',result);
        })
        .catch(error => {
           socket.emit('typing',error);
      });
    })
})
server.listen(3000)
const axios = require('axios');
const { Console } = require('console');

function mysql_search_request(val) {
  return axios.post('http://php_apache_server/search.php', { "search": val })
    .then(response => {
      return {
        body: response.data
      };
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}


  