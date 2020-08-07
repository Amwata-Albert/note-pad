$(document).ready(function(){
  $("#mail").hide();
  $("#write-note").hide();  
      $("#display-edit-button").hide();
    $("#new-user").click(function(){
      // $("#hidden").toggle();
      $("#register").show();
      $("#new-user").hide();
      $("#mail").show();

      $("#write-note").hide();  
      $("#display-edit-button").hide();
    
    
    });
    $("#log-in").click(function(){
        $("#hidden").hide();
        $("#write-note").show();  
      $("#display-edit-button").show();
        // $("show").hide();

        // $("#logout").hide();
    });
  });
  
  var users=[
    {
      username:"amwata",
      Email:"amwata@gmail.com",
      password:"123456789"
      
    },
    {
      username:"b",
      Email:"b@gmail.com",
      password:"1234567890"
      
    },
    {
      username:"cindy",
      Email:"cindy@gmail.com",
      password:"cindy"
      
    },
    {
      username:"zawadi",
      Email:"zawadi@gmail.com",
      password:"zawadi"
      
    },
    {
      username:"k",
      Email:"k@gmail.com",
      password:"0123456789"
      
    }
  ]

  function register1(){
    let Email=document.getElementById("mail").value;
    let password=document.getElementById("pass").value;
    let username=document.getElementById("username").value;

    let newUsers={
      username:username,
      Email:Email,
      password:password
     }
  
for(var reg=0;reg<=users.length;reg++){
  if(username!="" && password!="" && Email!=""){
    
    if(username==users[reg].username ||  Email==users[reg].Email){
      // $("#hidden").show();
      // alert("username already exixts");
      return;
    }else{
      users.push(newUsers);
      console.log(users);
      alert("added :"+username);
      return;

      }
     
  }    
  alert("please enter your credentials");
       return;
  
  
}
     

  

}
function login(){
    let password=document.getElementById("pass").value;
    let username=document.getElementById("username").value;


 for(var p=0;p<users.length;p++){
  if(username==users[p].username && password==users[p].password){
    $("#logout").show();
    $("#new-user").hide();
    $("#log-in").hide();
    $("#write-note").show();  
      $("#display-edit-button").show();
    var code=' Hello ,'+username+' You have succesfully logged in';

    $("#show").text(function(){
      alert(code);
      return
    });
    // window.location.href="sample.html";
    return;
  }

   
  }
  alert("username not found");

}

function logout1(){
  $("#logout").click(function(){
    $("#log-in").show();
    $("#new-user").show();
    $("#logout").hide();

    $("#write-note").hide();  
      $("#display-edit-button").hide();
  });
}