let userpassword = document.querySelector("[name='password']");
//check for log in
function check ()
{
 var _username=document.getElementById('idforusername').value;
var _password=document.getElementById('idforpassword').value;
var x = localStorage.getItem(_username);
if(x==null)
{
    var z='@gmail.com';
  var b=_username.indexOf(z) ;
   if (b==-1)
   {
       window.alert("please,check if you write your @gmail.com correct ");
       document.getElementById('idforusername').value="@gmail.com";
   }
   else
   {
   window.alert("please,check if you write your username correct ");
   }
}
else if (x==_password)
{
    if (_username=="admin12345678@gmail.com")
    {
        window.alert("  Hello,admin  ");
       window.open("http://127.0.0.1:5500/admin.html");
    }
    else
    {
        window.alert("  Hello,there we hope you will have good time in our web site  ");

    window.open("http://127.0.0.1:5500/home.html");
    }
   
}
else
{
    window.alert("please,check if you write your password correct ");
    
}
}
//check for sign up
function enter ()
{
    var q=1;
    var username1=document.getElementById('idfornewusername').value;
    var password1=document.getElementById('idfornewpassword').value; 
    var x1 = localStorage.getItem(username1);
    if (x1!=null)
    {
    window.alert("please enter another user name");
    q=0;
    }
    else
    {
        var z1='@gmail.com';
       var b1=username1.indexOf(z1);
       if (b1==-1)
       {
       window.alert("please,check if you write  @gmail.com correct");
       q=0;
       }
    if(username1.length<=16)
    {
        window.alert("please,enter another username that is more than 6 characters ");
        q=0;
    }
     if(password1.length<=8)
    {
        window,alert("please enter another password that is more than 8");
        q=0;
    }
    if (q==1)
    {
    localStorage.setItem( username1,password1);
    window.alert("regestration is sucessfull ");
    }
    else
    {
       document.getElementById('idfornewusername').value=" @gmail.com";
       document.getElementById('idfornewpassword').value=" ";
    }
    }
}
function logout()
{
    window.open('http://127.0.0.1:5500/login.html?');

}
function gotohomepage()
{
    window.open('http://127.0.0.1:5500/home.html');
}
 
//get the key and value of picture from admin page
function  fun(){
  var x= document.getElementById("id").value;
  var y=document.getElementById("src1").value;
  localStorage.setItem(`${x}`,`${y}`);
}

//display  first  picture in egyption food
function showPicture1()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image1");
    img.src = s;
    var block = document.getElementById("x1");
    block.appendChild(img);
}

//display  second  picture in egyption food
function showPicture2()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image2");
    img.src = s;
    var block = document.getElementById("x2");
    block.appendChild(img);
}

//display  third  picture in egyption food
function showPicture3()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image3");
    img.src = s;
    var block = document.getElementById("x3");
    block.appendChild(img);
}

//display  4th  picture in egyption food
function showPicture4()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image4");
    img.src = s;
    var block = document.getElementById("x4");
    block.appendChild(img);
}

//display  5th  picture in egyption food
function showPicture5()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image5");
    img.src = s;
    var block = document.getElementById("x5");
    block.appendChild(img);
}

//display  1th  picture in italian food
function showPicture6()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image6");
    img.src = s;
    var block = document.getElementById("x6");
    block.appendChild(img);
}

//display  2th  picture in italian food
function showPicture7()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image7");
    img.src = s;
    var block = document.getElementById("x7");
    block.appendChild(img);
}

//display  3th  picture in italian food
function showPicture8()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image8");
    img.src = s;
    var block = document.getElementById("x8");
    block.appendChild(img);
}

//display  4th  picture in italian food
function showPicture9()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image9");
    img.src = s;
    var block = document.getElementById("x9");
    block.appendChild(img);
}
//display  5th  picture in italian food
function showPicture10()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image10");
    img.src = s;
    var block = document.getElementById("x10");
    block.appendChild(img);
}
//display  1th  picture in indian food
function showPicture11()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image11");
    img.src = s;
    var block = document.getElementById("x11");
    block.appendChild(img);
}
//display  2th  picture in indian food
function showPicture12()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image12");
    img.src = s;
    var block = document.getElementById("x12");
    block.appendChild(img);
}

//display  3th  picture in indian food
function showPicture13()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image13");
    img.src = s;
    var block = document.getElementById("x13");
    block.appendChild(img);
}

//display  4th  picture in indian food
function showPicture14()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image14");
    img.src = s;
    var block = document.getElementById("x14");
    block.appendChild(img);
}


//display  5th  picture in indian food
function showPicture15()
{
    var img = document.createElement("img");
    var s=localStorage.getItem("image15");
    img.src = s;
    var block = document.getElementById("x15");
    block.appendChild(img);
}

function backtologin()
{
    window.open("http://127.0.0.1:5500/login.html");
}
 function request()
 {
     window.alert("if you saved your password in your gmail account .please,login with your gmail accunt ");
     window.open("https://www.google.com");
 }















let showPassword = document.getElementById("my-btn");
showPassword.onclick = function (event) {
    

  event.preventDefault();
  if (this.innerHTML === `<i class="fa-solid fa-eye"></i>`) {
    userpassword.setAttribute("type", "text");
    this.innerHTML = `<i class="fa-solid fa-eye-low-vision"></i>`;
  } else {
    userpassword.setAttribute("type", "password");
    this.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
};

