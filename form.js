var record1 =/^([a-zA-Z0-9]([a-zA-Z0-9_\.]+)?[a-zA-Z0-9])$/                 //+ it is equal to {1,}
var username= "Nikhil_.123"
var ans = record1.test(username)
console.log(ans);
//document.write("username= ",ans)

flag=1;
function valid(){
    if(username.value=="")
    {
        document.getElementById("NameError").innerHTML="Field cannot be empty";
        flag=0;
    }
    else if(username.value==ans)
    {
        document.getElementsById("NameError").innerHTML="Not a valid email";
        flag=0;
    }
    if(flag==0)
    {
        return false;
        
    }
    else{
        return true;
    }
}

