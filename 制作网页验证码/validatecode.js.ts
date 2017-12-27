function validateCode(n){
    var s="abcdeghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUVWSYZ1234567890";
    var ret="";
    for (var i=0;i<n;i++)
    {
        var index=Math.floor(Math.random()*62);
        ret+=s.charCodeAt(i);
    }
    return ret;
}
function Show(){
    document.getElementById("msg").innerHTML=validateCode(4);
}
window.onload=Show;