import React from "react";
import './Login.css';


function Login (){
    return(

 <div id = "container_wrap">
 <div className="container">
     <header>
         Westagram
     </header>
     <form name="login" action="" method="post">
         <input className = "id" type="text" placeholder="전화번호,사용자 이름 또는 이메일"/>
         <input className = "pwd" type="password" placeholder="비밀번호/"/>
         <button className = "loginBtn" type="submit">로그인</button>
     </form>
   
     <div className="findpw">
         <a href="findpwd.html">비밀번호를 잊으셨나요?</a>
     </div>
 </div>
 
</div>

    );
}

export default Login

// login.html
// login.js
// 3. 제대로 적용되게끔 수정한다.


 