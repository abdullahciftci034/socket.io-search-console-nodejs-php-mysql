const socket = io.connect('http://localhost:3000')

const search1 = document.getElementById('search1')
const output = document.getElementById('search_list');
search1.addEventListener('keypress',() =>{
    socket.emit('typing',search1.value)
})
socket.on('typing',(data) =>{
  console.log(data)
  output.innerHTML = "";
  data.body.forEach((val)=>{
    output.innerHTML += '<li class="list-group-item">'+val["title"] +' | '+val["description"]+'</li>';
  });
  if (data.body.length === 0){
    output.innerHTML = "";
  }
})
