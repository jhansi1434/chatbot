
  function Receive(){
   
    var know={
        "Hi":"hello",
        "How are you?":"good",
        "What are you doing?":"nothing",
        "ok":"thank you",
        "bye":"okay!bye"
    };
    var txtarea=document.getElementById('txt_area');
var user=txtarea.value;
   // document.getElementById('miniDiv').innerHTML=user+"<br>";
   var miniDiv = document.getElementById("miniDiv");
    var msgDiv = document.createElement("div");
    msgDiv.style.backgroundColor="pink";
    msgDiv.style.marginTop="10px";
    msgDiv.style.marginLeft="30px";
    msgDiv.style.padding="10px";
    msgDiv.style.border="2px solid blue";
    msgDiv.style.borderRadius="10px";
    msgDiv.style.width="fit-content";
    msgDiv.innerHTML=user;
    miniDiv.appendChild(msgDiv);
    
        var botDiv= document.createElement("div");
        botDiv.style.backgroundColor="blue";
        botDiv.style.float="center";
        botDiv.style.marginTop="20px";
        botDiv.style.marginLeft="10px";
        botDiv.style.padding="10px";
        botDiv.style.border="2px solid pink";
        botDiv.style.borderRadius="10px";
        botDiv.style.width="fit-content";
        
        if (user in know){
            console.log(user);
        botDiv.innerHTML = know[user] + "<br>";
        miniDiv.appendChild(botDiv);
       
    }else{
        botDiv.innerHTML =  "Sorry,I didn't understand <br>"; + "<br>";
        miniDiv.appendChild(botDiv);
    //document.getElementById('miniDiv').innerHTML = "Sorry,I didn't understand <br>";
    }
    var mainDiv = document.getElementById("mainDiv");
    mainDiv.appendChild(miniDiv);
    document.body.append(mainDiv);
    txtarea.value = "";
    txtarea.focus();
    let time=gettime();
    document.getElementById("timeing").innerHTML=time;
}

    


function gettime(){
     
    let today=new Date()
     hours=today.getHours();
     min=today.getMinutes();

     if (hours == 0) hrs = 12;
      if (hours > 12) {
        hours = hours - 12;
        period = "PM";
      }

     if(hours<10){
        hours="0"+hours;
     }
     if (min<10){
        min="0"+min;
     }
     let time=hours+":"+min+":"+period;
     return time;
    


}


