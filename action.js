function ChangeTo(a){
    if(a==='Login'){
        document.getElementsByClassName("login-form")[0].style.display='block';
    document.getElementsByClassName("register-form")[0].style.display='none';
    }
    if(a==='register'){ 
      document.getElementsByClassName("login-form")[0].style.display='none';
    document.getElementsByClassName("register-form")[0].style.display='block';
    }
   }
  