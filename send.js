function handleKeyPress(e) {
    13 == (e.keyCode || e.which) && send.click();
}
const add_chat = document.getElementById("add_chat"),
    uploadimagei = document.getElementById("uploadimagei"),
    getsfriend = document.getElementById("getsfriend");
document.getElementById("closeaddchat").addEventListener("click", function () {
    document.getElementById("addchat").style.display = "none";
}),
    uploadimagei.addEventListener("click", function () {
        document.getElementById("uploadimagep").style.display = "flex";
    });
let yhj = [],
    friendinchat = [];
add_chat.addEventListener("click", function () {
    (document.getElementById("addchat").style.display = "flex"),
        "" == getsfriend.innerHTML &&
            firestore.collection("users").doc(localStorage.getItem("user")).get().then((e) => {
                    let t = e.data().fr.split("/");
                    for (let e = 0; e < t.length; e++)
                        "" != t[e] &&
                            firestore
                                .collection("users")
                                .doc(t[e])
                                .get()
                                .then((e) => {
                                    const t = e.data();
                                    yhj.push(e.id);
                                    let n = `\n\n                        <div class="button just1" id="${e.id}" style=" width:490px; height:60px;   " >\n                            <img src="${t.Profile}" style="display:inline-block; margin-left:30px;   height: 3.125vw;width: 3.125vw; border-radius: 75px;">\n                            <div style="display:inline-block; margin-top: 8px; padding-left: 8px;">\n                                <div style="font-size:14.5px; font-family: Lato; margin-left:5px;"> ${t.Display_Name}</div>\n                                <div style="font-size:14.5px;font-family:Lato; margin-left:5px;">${t.Username}</div>\n                             </div>\n                        </div>`;
                                    getsfriend.innerHTML += n;
                                });
                }),
        setTimeout(function () {
            for (let e = 0; e < yhj.length; e++)
                document.getElementById(yhj[e]).addEventListener("click", function () {
                    if (document.getElementById(yhj[e]).classList.contains("selected")) {
                        let t = yhj.indexOf(yhj[e]);
                        t > -1 && friendinchat.splice(t, 1), document.getElementById(yhj[e]).classList.add("just1"), document.getElementById(yhj[e]).classList.remove("selected");
                    } else friendinchat.push(yhj[e]), document.getElementById(yhj[e]).classList.add("selected"), document.getElementById(yhj[e]).classList.remove("just1");
                });
        }, 1700);
});
const createbutton = document.getElementById("createbutton"),
    namechat = document.getElementById("namechat");


function generatepass(e){
    return Array(e).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz._").map(function(e){return e[Math.floor(Math.random()*e.length)]}).join("")
}
createbutton.addEventListener("click",function(){if(""!=namechat.value.trim()){let e=generatepass(30);firestore.collection(e).doc("Chat_Info").set({pim:"",started:"",name:namechat.value,User_In_Chat:friendinchat.join("§"),Iscall:!1,Image:"Images/noprofile.png",IsMessage:!0}),firestore.collection(e).doc("Messages").set({Message:""}),friendinchat.push(localStorage.getItem("user"));for(let t=0;t<friendinchat.length;t++)firestore.collection("users").doc(friendinchat[t]).get().then(n=>{let i=n.data().Chatsin.split("§");i.push(e),firestore.collection("users").doc(friendinchat[t]).update({Chatsin:i.join("§")})});let t=`<div class="just" id="${e}" style="border:none;  width:300px; height:70px; ">\n                                    <img style="float: left; margin-left:10px; height: 3.125vw;width: 3.125vw; border-radius: 75px; "  src="Images/noprofile.png" alt="Can not load">\n                                    <div style="float: left; margin-top: 8px; padding-left: 8px;">\n                                        <div style="font-size:14.5px; font-family: Lato; margin-left:5px;"> ${namechat.value}</div>\n                                        <div style="font-size:14.5px;font-family:Lato; margin-left:5px;">Start chatting</div>\n                                    </div>\n                                </div>`;chatgets.innerHTML+=t,document.getElementById("addchat").style.display="none"}else namechat.style.border="1px solid red",namechat.style.color="red",namechat.value="Invalid Input!"});



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