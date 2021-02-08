function setCookie(cName, cValue, cDay){
  var date = new Date();
  date.setTime(date.getTime() + cDay*24*60*60*1000);
  document.cookie = cName + "=" + btoa(cValue) + ';expires=' + date.toUTCString() + ';path=/';
  console.log(cName + " / " + btoa(cValue) + " 가 cookie 에 저장됨!");
}

function getCookie(cName){
    var cookies = document.cookie.replace(" ", "").split(';');
    var user_id = cookies.find(element => element.split('=')[0] == cName);
    return user_id.split('=')[1];
}

function downTestFile() {
  // download test.txt file
  location.href = 'https://drive.google.com/u/0/uc?id=1mQwvPBx4rH68Hd0PeMuq0ywQEH4H4SJi&export=download';
}

function downREVFile() {
  var user_id = atob(getCookie('user_id'));
  if(user_id == "admin"){
    location.href = 'https://drive.google.com/u/0/uc?id=1dN_mvg2-QyyZLDLTeIzAapC5eskqtajJ&export=download';
  }
  else {
    alert("Access Denied :: YOU ARE NOT ADMIN");
  }
}
