var temp;
function changeColor(font,fcolor) {
    var elem = document.getElementById('para');
    elem.style.fontSize=font;
    elem.style.color=fcolor;
    alert("Hello I am clicked");
  }
 
function inputChecker(input1)
{
    var elem2=document.getElementById('input1');
    console.log(elem2.value);
    alert("Hello I am clicked");
    if(elem2.value.length<10)
    {
        console.log("Wrong Input");
    }
    else
    {
        console.log("Recieved");
    }
}
 function Checker1()
 {
     var elem4=document.getElementById('NameChecker');
     if(elem4.value.length<5)
     {
         alert("Name Must be Greater than 5 characters");
     }
     
 }
 function Checker3()
 {
     var elem6=document.getElementById('EmailChecker');
     if(elem6.value.length<10)
     {
         alert("Wrong Input, Try Again")
     }
 }
 function Checker4()
 {
     var elem7=document.getElementById('PasswordChecker');
     if(elem7.value.length<8)
     {
         alert("Password Must be Greater than 8 characters");
     }
     temp=elem7;
 }
 function Checker5()
 {
     var elem8=document.getElementById('P2Checker');
     if(elem8.value!=temp.value)
     {
         alert("Please Enter Same Password");
     }
 }
 function output()
 {
     if(temp==null)
     {
         alert("Need to fill data first");
     }
     else
     {
     alert("SIGNED UP");
     }
 }
function inputjs()
{
    var elem3=document.
  document.write("<br>");
}
