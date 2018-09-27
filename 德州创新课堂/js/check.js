  function check(){  

    var userName = document.getElementById("userName").value;
    var regUserName=/^[\u0391-\uFFE5]+$/;
    if (!regUserName.test(userName)){
        alert("请输入中文");
        return false;
    } 
    var userMail = document.getElementById("userMail").value;
    //至少包含@和.
    var regUserMail = /^\w{2,}@\w{2,}.(cn|com|net)$/;
    if(!regUserMail.test(userMail)){
        alert("请输入正确的邮箱地址");
        return false;
    }

        
}