//counter code
var button=document.getElementById('counter');
var currentLocation = window.location.href;

button.onclick=function() {
     
     //creat request
     var request= new XMLHttpRequest();
     
     //capture the response and store it in a variable
     request.onreadystatechange=function() {
         if (request.readyState===XMLHttpRequest.DONE) {
             //take some action
             if (request.status===200) {
             var counter =request.responseText;
             var span = document.getElementById('count');
             span.innerHTML=counter.toString();
                 
             }
         }
     };
     
     request.open('GET', currentLocation+'counter',true);
     request.send(null);

};