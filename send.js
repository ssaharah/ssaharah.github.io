function handleKeyPress(e){
    var key=e.keyCode || e.which;
    if (key==13){
        send.click()
    }
}
const add_chat = document.getElementById("add_chat");
const uploadimagei = document.getElementById("uploadimagei");
const getsfriend = document.getElementById("getsfriend");
document.getElementById("closeaddchat").addEventListener('click', function(){
    document.getElementById("addchat").style.display = "none"
});
uploadimagei.addEventListener('click', function(){
    document.getElementById("uploadimagep").style.display = "flex";
});
let yhj = []
let friendinchat = []
add_chat.addEventListener('click', function(){
    document.getElementById("addchat").style.display = "flex"
   
    
    if(getsfriend.innerHTML == ""){
        firestore.collection("users").doc(localStorage.getItem("user")).get().then(snapshot =>{
            const data = snapshot.data()
            let friend = data.fr
            let friey = friend.split("/")
    
            for (let i = 0; i < friey.length; i++) {
                if(friey[i] != ""){
                    firestore.collection("users").doc(friey[i]).get().then(snap=>{
                        const ghb = snap.data()
                        yhj.push(snap.id)
                       
                        let chatit = `

                        <div class="button just1" id="${snap.id}" style=" width:490px; height:60px;   " >
                            <img src="${ghb.Profile}" style="display:inline-block; margin-left:30px;   height: 3.125vw;width: 3.125vw; border-radius: 75px;">
                            <div style="display:inline-block; margin-top: 8px; padding-left: 8px;">
                                <div style="font-size:14.5px; font-family: Lato; margin-left:5px;"> ${ghb.Display_Name}</div>
                                <div style="font-size:14.5px;font-family:Lato; margin-left:5px;">${ghb.Username}</div>
                             </div>
                        </div>`
                        getsfriend.innerHTML += chatit
                    })
                }
            }
                
            
            
        })
        
    }
    setTimeout(function(){
        
        for (let i = 0; i < yhj.length; i++) {
            
            document.getElementById(yhj[i]).addEventListener('click', function(){
                
                if(document.getElementById(yhj[i]).classList.contains("selected")){
                    let findgh = yhj.indexOf(yhj[i])
                    if (findgh > -1) {
                        friendinchat.splice(findgh, 1);
                    }
                    document.getElementById(yhj[i]).classList.add("just1")
                    document.getElementById(yhj[i]).classList.remove("selected")
                }else{
                    
                    friendinchat.push(yhj[i])
                    document.getElementById(yhj[i]).classList.add("selected")
                    document.getElementById(yhj[i]).classList.remove("just1")
                }
            });
            
        }
    }, 1700)
    
    
});

const createbutton = document.getElementById("createbutton");
const namechat = document.getElementById("namechat");
createbutton.addEventListener("click", function(){
    if(namechat.value.trim() != ""){
        let uidf = generatepass(30);
        firestore.collection(uidf).doc("Chat_Info").set({
            pim: "",
            started: "",
            name: namechat.value,
            User_In_Chat: friendinchat.join("§"),
            Iscall:false,
            Image: "Images/noprofile.png",
            IsMessage:true,
        })
        firestore.collection(uidf).doc("Messages").set({
            Message: ""
        })
        friendinchat.push(localStorage.getItem("user"))
        for (let i = 0; i < friendinchat.length; i++) {
           firestore.collection("users").doc(friendinchat[i]).get().then(snapshot =>{
                const data = snapshot.data()
                let chat = data.Chatsin;
                let hj = chat.split("§")
                hj.push(uidf);
                firestore.collection("users").doc(friendinchat[i]).update({
                    Chatsin: hj.join("§")
                })
           });
        }
        
        let chattoadd = `<div class="just" id="${uidf}" style="border:none;  width:300px; height:70px; ">
                                    <img style="float: left; margin-left:10px; height: 3.125vw;width: 3.125vw; border-radius: 75px; "  src="Images/noprofile.png" alt="Can not load">
                                    <div style="float: left; margin-top: 8px; padding-left: 8px;">
                                        <div style="font-size:14.5px; font-family: Lato; margin-left:5px;"> ${namechat.value}</div>
                                        <div style="font-size:14.5px;font-family:Lato; margin-left:5px;">Start chatting</div>
                                    </div>
                                </div>`
        chatgets.innerHTML += chattoadd
        document.getElementById("addchat").style.display = "none";
        
    }else{
        namechat.style.border = "1px solid red"
        namechat.style.color = "red"
        namechat.value = "Invalid Input!"
    }
    
});
function generatepass(pwdLen){
    var pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz._";
    var randPassword = Array(pwdLen).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return randPassword;
}




auth.onAuthStateChanged(user => {
    if(user){
        const send = document.getElementById("send");
        firestore.collection("users").doc(user.uid).get().then(snapshot =>{
            const data = snapshot.data();
            let image = data.Profile;
            localStorage.setItem("pi",image)
        });
        send.addEventListener('click', function(){
            let messagei = document.getElementById("inputmessage").value;
            message(messagei)
        });
        function message(mes){
            if(mes.trim() != "" ){
                let message = `<div  id="message" style="margin-top:5px;float:right; clear:both; display:inline-block; margin-right:10px;">
                <div style="font-size: 11.52px; font-family: Arial, Helvetica, sans-serif; background-image:linear-gradient( rgb(255, 196, 0),  orange); border-radius: 10px; display: inline-block; color: black; width: auto; height: auto; padding-bottom: 10px; padding-left: 10px; margin-left: 10px; padding-right: 10px;  padding-top: 15px; word-wrap: break-word; max-width:300px; margin-top:10px; color:white;  ">${document.getElementById("inputmessage").value}</div>
                <img style = "float:right; clear:both; width: 40px; height: 40px; display: inline-block; border-radius:50px; margin-left:10px;  " src="${localStorage.getItem("profilepic")}"></div>`
                document.getElementById("chatiy").innerHTML += message;
                var element = document.getElementById("chatiy");
                element.scrollTop = element.scrollHeight;
                var time = new Date();
                let mili = -time.getTime();     
                firestore.collection(localStorage.getItem("cth")).doc(String(mili)).set({
                    Date_mili: -mili,
                    Display_Name: document.getElementById("name").innerText,
                    IsMessage: false,
                    Message: document.getElementById("inputmessage").value,
                    WhoIsTheMessageFrom: user.uid
                });
                firestore.collection(localStorage.getItem("cth")).doc("Messages").set({
                    Date_mili: -mili,
                    Display_Name: document.getElementById("name").innerText,
                    IsMessage: false,
                    Message: document.getElementById("inputmessage").value,
                    WhoIsTheMessageFrom: user.uid
                });
            }else{
                document.getElementById("textarea").style.border = " 1px solid red";
            }
            document.getElementById("inputmessage").value = "";
        }
    }
})