const closeuploadimage=document.getElementById("closeuploadimage");closeuploadimage.addEventListener("click",function(){document.getElementById("uploadimagep").style.display="none"}),document.getElementById("profilepicture").addEventListener("click",function(){});const gotosignin=document.getElementById("gotosignin"),Loginpage=document.getElementById("Loginpage"),Signinpage=document.getElementById("Signinpage"),gotologin=document.getElementById("gotologin");gotosignin.addEventListener("click",function(e){e.preventDefault(),Loginpage.style.display="none",Signinpage.style.display="block"}),gotologin.addEventListener("click",function(e){e.preventDefault(),Signinpage.style.display="none",Loginpage.style.display="block"});const Sign_up_whole=document.getElementById("signup");Sign_up_whole.addEventListener("click",e=>{e.preventDefault();const n=document.getElementById("signupusername").value,t=document.getElementById("signuppassword").value;auth.createUserWithEmailAndPassword(n,t).then(e=>firestore.collection("users").doc(e.user.uid).set({Username:document.getElementById("signupusername").value,First_Name:document.getElementById("signupfirstname").value,Last_Name:document.getElementById("signuplastname").value,Display_Name:document.getElementById("signupfirstname").value+" "+document.getElementById("signuplastname").value,profile:"Images/noprofile.png",Chatsin:"",notifi:"",incall:!1,sound:"",fr:"",frs:"",mute:!1,camera:!1,getcall:!1,calls:"",decline:"",webcame:""}).catch(function(e){alert(e.message)})),document.getElementById("signupusername").value="",document.getElementById("signupfirstname").value="",document.getElementById("signuppassword").value="",document.getElementById("signuplastname").value=""});const Login_whole=document.getElementById("login"),catcherrorlog=document.getElementById("catcherrorlog");Login_whole.addEventListener("click",e=>{e.preventDefault;const n=document.getElementById("loginusername").value,t=document.getElementById("loginpassword").value;auth.signInWithEmailAndPassword(n,t).then(e=>{Loginpage.style.display="none",document.getElementById("loginusername").value="",document.getElementById("loginpassword").value=""}).catch(function(e){"There is no user record corresponding to this identifier. The user may have been deleted."==e.message?catcherrorlog.innerText="Invalid username or password.":"Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."==e.message?catcherrorlog.innerText="Access to this account has been temporarily disabled due to many failed login attempts.":catcherrorlog.innerText=e.message})});