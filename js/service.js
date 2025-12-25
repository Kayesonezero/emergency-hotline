// heart react 
function heartTotalCounter(){
    const totalHeart = document.getElementById("heart-numbers").innerText;
    const total = Number(totalHeart)+1;
    document.getElementById("heart-numbers").innerText= total;
}
document.getElementById("heart-logo1").addEventListener('click',function(){
  heartTotalCounter();
})
document.getElementById("heart-logo2").addEventListener('click',function(){
  heartTotalCounter();
})
document.getElementById("heart-logo3").addEventListener('click',function(){
  heartTotalCounter();
})
document.getElementById("heart-logo4").addEventListener('click',function(){
  heartTotalCounter();
})
document.getElementById("heart-logo5").addEventListener('click',function(){
  heartTotalCounter();
})
document.getElementById("heart-logo6").addEventListener('click',function(){
  heartTotalCounter();
})
document.getElementById("heart-logo7").addEventListener('click',function(){
  heartTotalCounter();
})
document.getElementById("heart-logo8").addEventListener('click',function(){
  heartTotalCounter();
})
document.getElementById("heart-logo9").addEventListener('click',function(){
  heartTotalCounter();
})

// call button 
function emergencyCall(name , callNum, seviceName){
 const coinNum= document.getElementById("coin").innerText;
 const coinNumber=Number(coinNum);
 if(coinNumber<20){
  alert("You don't have enough coins, you need at least 20 coins to make a call");
  return;
 }
  totalCoin=coinNumber - 20;
  document.getElementById("coin").innerText=totalCoin;
  alert(`Calling ${name} Service ${callNum}...`);
  const history=[];
   const Data={
    name:seviceName,
    number:callNum,
    date:new Date().toLocaleTimeString()
  }
  history.push(Data);

const newdiv = document.getElementById("container-list")
for(const hist of history){
  const div = document.createElement("div");
  div.innerHTML=`
   <div class="call-history-rec">
                    <div class="call-history-text">
                        <h1 class="history-sevice-name">${hist.name}</h1>
                        <p>${hist.number}</p>
                    </div>
                    <div>
                        <p>${hist.date}</p>
                    </div>
                </div>
  `
  newdiv.appendChild(div);
}

}
// history list store 
document.getElementById("National-Emergency-call").addEventListener('click',function(){
  const name="National Emergency";
  const callNum="999";
  const seviceName = "National Emergency Number";
  emergencyCall(name,callNum,seviceName);
  
});
document.getElementById("Police-call").addEventListener('click',function(){
  const name="Police";
  const callNum=999;
  const seviceName = "Police Helpline Number";
  emergencyCall(name,callNum,seviceName);
});
document.getElementById("Fire-Service-call").addEventListener('click',function(){
  const name="Fire";
  const callNum=999;
   const seviceName = "Fire Service Number";
  emergencyCall(name,callNum,seviceName);
});
document.getElementById("Ambulance-call").addEventListener('click',function(){
  const name="Ambulance";
  const callNum="1994-999999";
  const seviceName = "Ambulance Service";
  emergencyCall(name,callNum,seviceName);
});
document.getElementById("Women-&-Child-Helpline-call").addEventListener('click',function(){
  const name="Women & Child Helpline";
  const callNum=109;
  const seviceName = "Women & Child Helpline";
  emergencyCall(name,callNum,seviceName);
});
document.getElementById("Anti-Corruption-call").addEventListener('click',function(){
  const name="Anti Corruption";
  const callNum=106;
  const seviceName = "Anti-Corruption Helpline";
  emergencyCall(name,callNum,seviceName);
});
document.getElementById("Electricity-Outage-call").addEventListener('click',function(){
  const name="Electricity Outage";
  const callNum=16216;
   const seviceName = "Electricity Helpline";
  emergencyCall(name,callNum,seviceName);
});
document.getElementById("Brac-call").addEventListener('click',function(){
  const name="Brac";
  const callNum=16445;
  const seviceName = "Brac Helpline";
  emergencyCall(name,callNum,seviceName);
});
document.getElementById("Bangladesh-Railway-call").addEventListener('click',function(){
  const name="Bangladesh Railway";
  const callNum=163;
   const seviceName = "Bangladesh Railway Helpline";
  emergencyCall(name,callNum,seviceName);
});

document.getElementById("clear-button").addEventListener('click',function(){
 const newdiv = document.getElementById("container-list").innerText=" ";});

// copy button
function copyTotalCounter(callNumber){
    const totalCopy = document.getElementById("copy-number").innerText;
    const total = Number(totalCopy)+1;
    document.getElementById("copy-number").innerText= total;
  
    navigator.clipboard.writeText(`${callNumber}`)
    .then(()=>{
      alert(`Number copied : ${callNumber}`);
    })
    .catch(err =>{
      console.error("Failed to copy",err);
    })
}
document.getElementById("copy-button1").addEventListener('click',function(){
  const callNumber="999";
  copyTotalCounter(callNumber);
})
document.getElementById("copy-button2").addEventListener('click',function(){
  const callNumber="999";
  copyTotalCounter(callNumber);
})
document.getElementById("copy-button3").addEventListener('click',function(){
  const callNumber="999";
  copyTotalCounter(callNumber);
})
document.getElementById("copy-button4").addEventListener('click',function(){
  const callNumber="1994-999999";
  copyTotalCounter(callNumber);
})
document.getElementById("copy-button5").addEventListener('click',function(){
  const callNumber="109";
  copyTotalCounter(callNumber);
})
document.getElementById("copy-button6").addEventListener('click',function(){
  const callNumber="106";
  copyTotalCounter(callNumber);
})
document.getElementById("copy-button7").addEventListener('click',function(){
  const callNumber="16216";
  copyTotalCounter(callNumber);
})
document.getElementById("copy-button8").addEventListener('click',function(){
  const callNumber="16445";
  copyTotalCounter(callNumber);
})
document.getElementById("copy-button9").addEventListener('click',function(){
  const callNumber="163";
  copyTotalCounter(callNumber);
})