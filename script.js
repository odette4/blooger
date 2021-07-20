var close = document.getElementId("close");

var modal = document.getElementById("signinModal");
var signinButton = document.getElementById("signinshow");

close.onClick=function(){
    modal.style.display="none";

}
signinButton.onclick=function(){
    modal.style.display="block";
}