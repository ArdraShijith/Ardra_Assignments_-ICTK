
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
    {
        if(this.readyState==4&&this.status==200)
        {
            var response=JSON.parse(this.responseText);
            var output ="";

            for(var i=0;i<response.length;i++)
            {
             output += "<input type ='checkbox'>"+ response[i].title+ "<br>"; ;
             console.log(response[i].completed );
            }
            document.getElementById("main").innerHTML=output;
        
        }
    }
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();


