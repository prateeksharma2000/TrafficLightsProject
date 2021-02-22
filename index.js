function counter()
{
  var count = 1;
  var intervalId = setInterval(function(){
    document.querySelector(".counter").innerText = count;
    count++;
    if(count>20)
    {
      clearInterval(intervalId);
    }
  },1000)
}

function lights(){
  document.querySelector(".redt").classList.add("red");
  counter();
  setTimeout(function(){
    counter();
    document.querySelector(".redt").classList.remove("red");
    document.querySelector(".yellowt").classList.add("yellow");
    setTimeout(function(){
      counter();
      document.querySelector(".yellowt").classList.remove("yellow");
      document.querySelector(".greent").classList.add("green");
      setTimeout(function(){
        document.querySelector(".greent").classList.remove("green");
      },21000)
    },21000)
  },21000)
}
lights();
setInterval(function(){
  lights();
},63000);
