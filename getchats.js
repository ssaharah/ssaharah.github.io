auth.onAuthStateChanged(user => {
    //Checks to see if the user is signEd in.
    if(user){
        const chat = document.getElementById("chat");
        const chatstuff = document.getElementById("chatstuff");
        const chatgets = document.getElementById("chatgets");
        //Runs when a chat gets pressed.
        chat.addEventListener('click', function(){
            chatstuff.style.display ="block"
            if(chatgets.innerHTML == ""){
                //Gets all the messages
                firestore.collection("users").doc(user.uid).get().then(snapshot =>{
                    let data = snapshot.data();
                    let chats = data.Chatsin;
                    let array = chats.split("§");
                    for (let i = 0; i < array.length; i++) {
                        if(array[i] != ""){
                            firestore.collection(array[i]).doc("Chat_Info").get().then(snapshot =>{
                                let data = snapshot.data();
                                let uji = "";
                                if(data.WhoIsTheMessageFrom != undefined){
                                    if(data.WhoIsTheMessageFrom == user.uid){
                                        uji = "You: "
                                    }else{
                                        uji = data.Display_Name + ": "
                                    }
                                    if(data.ImageSrc != undefined){
                                        uji += "Image"
                                    }else{
                                        uji += data.Message
                                    }
                                }else{
                                    uji = "Start chatting!"
                                }
                                let chattoadd = `<div class="just" id="${array[i]}" style="border:none;  width:300px; height:70px; ">
                                    <img style="float: left; margin-left:10px; height: 3.125vw;width: 3.125vw; border-radius: 75px; "  src="${data.Image}" alt="Can not load">
                                    <div style="float: left; margin-top: 8px; padding-left: 8px;">
                                        <div style="font-size:14.5px; font-family: Lato; margin-left:5px;"> ${data.name}</div>
                                        <div style="font-size:14.5px;font-family:Lato; margin-left:5px;">${uji}</div>
                                    </div>
                                </div>`
                                chatgets.innerHTML += chattoadd
                                
                            });   
                        }
                    } 
                    setTimeout(function(){
                        for (let i = 0; i < array.length; i++) {
                            if(array[i].trim() != ""){   
                                document.getElementById(array[i]).addEventListener('click', function(){
                                    addmessages(array[i], user.uid)
                                    document.getElementById("add_chat").style.bottom= "600px"
                                    document.getElementById("add_chat").style.left= "212px"
                                    document.getElementById("chatiy").innerHTML = ``
                                });
                            }
                        }
                    }, 1500)              
                });
            }
        });
        
    }            
})