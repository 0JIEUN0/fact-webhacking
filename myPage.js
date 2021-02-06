function setCookie(cName, cValue, cDay){
  var date = new Date();
  date.setTime(date.getTime() + cDay*24*60*60*1000);
  document.cookie = cName + "=" + cValue + ';expires=' + date.toUTCString() + ';path=/';
  console.log(cName + " / " + cValue + " 가 cookie 에 저장됨!");
}

function getCookie(cName){
    var cookies = document.cookie.replace(" ", "").split(';');
    var user_id = cookies.find(element => element.split('=')[0] == cName);
    return user_id.split('=')[1];
}

function downTestFile() {
  //location.href = 'https://drive.google.com/u/0/uc?id=1mQwvPBx4rH68Hd0PeMuq0ywQEH4H4SJi&export=download';
  console.log(document.cookie);
  console.log(getCookie("user_id"));
}

function downREVFile() {
  var user_id = getCookie("user_id");
  if(user_id === "guest"){
    alert("Access Denied :: YOU ARE NOT ADMIN");
  }
  else {
    location.href = 'https://drive.google.com/u/0/uc?id=1mQwvPBx4rH68Hd0PeMuq0ywQEH4H4SJi&export=download';
  }
}
