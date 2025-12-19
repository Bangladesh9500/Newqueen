<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login / Signup</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body{
    font-family:Arial;
    background:#f4f6f8;
}
.box{
    max-width:360px;
    margin:100px auto;
    background:white;
    padding:20px;
    border-radius:8px;
}
input,button{
    width:100%;
    padding:10px;
    margin:8px 0;
}
button{
    background:#0d6efd;
    color:white;
    border:none;
}
</style>
</head>
<body>

<div class="box">
    <h2>Login / Signup</h2>
    <input id="email" type="email" placeholder="Email">
    <input id="password" type="password" placeholder="Password">
    <button onclick="login()">Login</button>
    <button onclick="signup()">Signup</button>
</div>

<!-- Firebase -->
<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function(){
    signInWithEmailAndPassword(auth,
        email.value, password.value)
    .then(()=>location.href="home.html")
    .catch(e=>alert(e.message));
}

window.signup = function(){
    createUserWithEmailAndPassword(auth,
        email.value, password.value)
    .then(()=>location.href="home.html")
    .catch(e=>alert(e.message));
}

onAuthStateChanged(auth,(user)=>{
    if(user) location.href="home.html";
});
</script>

</body>
</html>