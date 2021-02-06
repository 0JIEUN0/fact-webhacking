function setCookie(cName, cValue, cDay){
  var date = new Date();
  date.setTime(date.getTime() + cDay*24*60*60*1000);
  document.cookie = cName + "=" + cValue + ';expires=' + date.toUTCString() + ';path=/';
  console.log(cName + " / " + cValue + " 가 cookie 에 저장됨!");
}

function getCookie(cName){
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value;
}

function downTestFile() {
  //location.href = 'https://drive.google.com/u/0/uc?id=1mQwvPBx4rH68Hd0PeMuq0ywQEH4H4SJi&export=download';
  setCookie("user_id", "guest", "1");
  console.log(document.cookie);
  console.log(getCookie("user_id"));
}

function downREVFile() {

}
