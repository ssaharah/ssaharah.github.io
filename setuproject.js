var firebaseConfig = {
    apiKey: "AIzaSyCoK1APEkbi7HzfGekPgAVX8l8q6BLmL50",
    authDomain: "sahara-8bfbe.firebaseapp.com",
    databaseURL: "https://sahara-8bfbe.firebaseio.com",
    projectId: "sahara-8bfbe",
    storageBucket: "sahara-8bfbe.appspot.com",
    messagingSenderId: "247681289351",
    appId: "1:247681289351:web:c75c7b2fc405a19e1e3c22",
    measurementId: "G-Q1E5WQHV8G"
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();
auth.onAuthStateChanged(user => {    
    if(user){
        //If login
        const Everythingelse = document.getElementById("Everythingelse");
        const chatstuff = document.getElementById("chatstuff");
        const body = document.getElementById("body");
        const profilepicture = document.getElementById("profilepicture");
        const username = document.getElementById("username");
        const name = document.getElementById("name");
        const spin = document.getElementById("spin");
        const circle = document.querySelector(".circle");
        const sidebar = document.querySelector(".sidebar");
        const chatgets = document.getElementById("chatgets");
        const textarea = document.getElementById("textarea");
        const inputmessage = document.getElementById("inputmessage");
        const send = document.getElementById("send");
        const chatiy = document.getElementById("chatiy");
        const chattop = document.getElementById("chattop");
        const videocall =document.getElementById("videocall");
        const voicecall =document.getElementById("voicecall");
        body.style.backgroundImage = "none";
        body.style.backgroundColor = "whitesmoke";
        Everythingelse.style.display= "block";
        username.innerText = user.email;
        firestore.collection("users").doc(user.uid).get().then(snapshot=>{
            let data = snapshot.data();
            name.innerText = data.Display_Name
            profilepicture.src = data.Profile
            localStorage.setItem("profilepic", data.Profile)
        });
        circle.addEventListener('click', function(){
            if(sidebar.style.display == "none"){
                for (let i = 0; i < 90; i++) {
                    spiner(i * 2)   
                }
                sidebar.style.display = "block";
            }else{
                for (let i = 0; i < 180; i++) {
                    spiner(i * 2)   
                }
                sidebar.style.display = "none";
            }
        });
        function spiner(i){
            setTimeout(()=>{
                    rotate = "rotate(" + i  + "deg)"
                    spin.style.transform = rotate  
            }, 25)  
            if(i >= 180){
                //When big
                circle.style.marginLeft = "10px"
                spin.style.marginLeft = "15px"
                chatstuff.style.width = "1100px"
                chatstuff.style.marginLeft = "100px"
                chatgets.style.width = "400px"
                textarea.style.left = "405px";
                textarea.style.width = "650px";
                inputmessage.style.width = "590px";
                send.style.left = "1060px";
                chatiy.style.width = "700px";
                chatiy.style.left = "400px";
                chattop.style.left = "400px"
                chattop.style.width = "700px"
            }else{
                //When small
                circle.style.marginLeft = "300px"
                spin.style.marginLeft = "10px"
                chatstuff.style.width = "800px"
                chatstuff.style.marginLeft = "390px"
                chatgets.style.width = "300px"
                textarea.style.left = "305px";
                textarea.style.width = "450px";
                inputmessage.style.width = "390px";
                send.style.left = "760px";
                chatiy.style.width = "500px";
                chatiy.style.left = "300px";
                chattop.style.left = "300px"
                chattop.style.width = "500px";
            }
        }
    }else{
        body.style.backgroundImage = "linear-gradient(to bottom right, rgb(255, 115, 0), yellow)"
        Loginpage.style.display= "block";
        Everythingelse.style.display = "none";
    }
});
