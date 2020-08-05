$(document).ready(function(){
    $("#new-user").click(function(){
      $("#register").toggle();
      $("#new-user").toggle();
    });
  });
  var users=[
    {
      username:"a",
      Email:"a@gmail.com",
      password:"123456789"
      
    },
    {
      username:"b",
      Email:"b@gmail.com",
      password:"1234567890"
      
    }
  ]

  function register(){
    let Email=document.getElementById("mail").value;
    let password=document.getElementById("pass").value;
    let username=document.getElementById("username").value;

    let newUsers={
      username:username,
      Email:Email,
      password:password
     }
  
    for(var reg=0;reg<=users.length;reg++){
    if(username==users[reg].username && password==users[reg].password && Email==users[reg].Email)
      {
      alert("username already exixts");
      return;

      }
       
      }
      users.push(newUsers);
      console.log(users);

  

}
function login(){
    let password=document.getElementById("pass").value;
    let username=document.getElementById("username").value;


 for(var p=0;p<users.length;p++){
  if(username==users[p].username && password==users[p].password){
    alert("username available to login");
    // window.location.href="sample.html";
    return;
  }
   
  }
  alert("username not found")
}

