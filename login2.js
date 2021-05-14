
    var username=document.getElementById("user");
    var password=document.getElementById("pass");
    function validate()
    {
    if(username.value=="admin"&& password.value=="12345")
    {
        alert("Login is Successful")
        return true;
    }
    else
    {
      
        alert("Login is failed")
        return false;
    }
}