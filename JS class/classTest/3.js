function check(){
    let pass = document.querySelector('#password').value;
    if(!pass === ""){
          window.alert("Enter password");
          document.querySelector('#password').focus;
          return false;
    }else if(!pass.match(/[1234567890]/)){
          window.alert("Enter one numeric password");
          document.querySelector('#password').focus;
          return false;
    }else if(!pass.match(/[poiuytrewqlkjhgfdsamnbvcxz]/)){
          window.alert("Enter lower case password");
          document.querySelector('#password').focus;
          return false;
    }else if(!pass.match(/[POIUYTREWQLKJHGFDSAMNBVCXZ]/)){
          window.alert("Enter one upper case password");
          document.querySelector('#password').focus;
          return false;
    }else if(!pass.match(/[*&^%$#@!]/)){
          window.alert("Enter one special character password");
          document.querySelector('#password').focus;
          return false;
    }
    else {
          window.alert("Password is valid and successful submit");
          return true;
    }
    }