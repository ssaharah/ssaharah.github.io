
const closeuploadimage = document.getElementById("closeuploadimage");
closeuploadimage.addEventListener('click', function(){
    document.getElementById("uploadimagep").style.display = "none";
});
document.getElementById("profilepicture").addEventListener("click", function(){
    
});
const gotosignin = document.getElementById("gotosignin");
const Loginpage = document.getElementById("Loginpage"); 
const Signinpage = document.getElementById("Signinpage");
const gotologin = document.getElementById("gotologin");
gotosignin.addEventListener('click', function(e){
    e.preventDefault()
    Loginpage.style.display = "none";
    Signinpage.style.display = "block";
});
gotologin.addEventListener('click', function(e){
    e.preventDefault()
    Signinpage.style.display = "none";
    Loginpage.style.display = "block";
});
const Sign_up_whole = document.getElementById("signup");
Sign_up_whole.addEventListener('click',(e)=> {
    e.preventDefault();
    const email = document.getElementById("signupusername").value;
    const password = document.getElementById("signuppassword").value;
    auth.createUserWithEmailAndPassword(email,password).then(cred=>{
        return firestore.collection('users').doc(cred.user.uid).set({
            Username: document.getElementById("signupusername").value,
            First_Name: document.getElementById("signupfirstname").value,
            Last_Name: document.getElementById("signuplastname").value,
            Display_Name: document.getElementById("signupfirstname").value + " " +  document.getElementById("signuplastname").value,
            profile: "Images/noprofile.png",
            Chatsin: "",
            notifi: "",
            incall:false,
            sound:"",
            fr:"",
            frs:"",
            mute:false,
            camera: false,
            getcall: false,
            calls:"", 
            decline:"",
            webcame: "", 
        }).catch(function(error){
            alert(error.message)
          });
    });
    document.getElementById("signupusername").value = ""
    document.getElementById("signupfirstname").value = ""
    document.getElementById("signuppassword").value = ""
    document.getElementById("signuplastname").value = ""
});
const Login_whole = document.getElementById("login");
const catcherrorlog = document.getElementById("catcherrorlog");
Login_whole.addEventListener('click',(e) =>{
    e.preventDefault;
    const email = document.getElementById("loginusername").value;
    const password = document.getElementById("loginpassword").value;
    auth.signInWithEmailAndPassword(email,password).then(cred =>{
        Loginpage.style.display = "none";
        document.getElementById("loginusername").value = ""
        document.getElementById("loginpassword").value = ""
    }).catch(function(error){
        if(error.message == "There is no user record corresponding to this identifier. The user may have been deleted."){
            catcherrorlog.innerText = "Invalid username or password."
        }else if(error.message == "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.") {
            catcherrorlog.innerText = "Access to this account has been temporarily disabled due to many failed login attempts."
        }else{
            catcherrorlog.innerText =error.message
        }
    });
});