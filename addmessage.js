function addmessages(name, user){ 
        document.getElementById("chatiy").innerHTML = ""
    localStorage.setItem("cth", name)
    document.getElementById("textarea").style.display = "block";
    document.getElementById("send").style.display = "block";
    document.getElementById("chattop").style.display = "block";
    document.getElementById("chatiy").style.display = "block";
    firestore.collection(name).doc("Chat_Info").get().then(snapshot =>{
        let data = snapshot.data();
        document.getElementById("chattop").innerHTML = ``
        let chatt = `<img style="border-radius:50px;  width:50px; height:50px; margin-top:5px; margin-left:10px; display:inline-block; vertical-align:middle;" src="${data.Image}"><p style="position: relative; top:5px; left:15px;padding-top:10px; display:inline-block; font-family:Roboto">${data.name}</p> <img id="videocall" style="width:35px; height:35px; position: relative; top:20px; left:255px; display:inline-block;" src="Images/video call.png"><img id="voicecall" style="width:35px; height:35px; position: relative; top:20px; left:275px; display:inline-block;" src="Images/voice call.png">`
        document.getElementById("chattop").innerHTML += chatt
    });
    firestore.collection(name).where("IsMessage", "==", false).limit(20).get().then(snapshot =>{
        let data = snapshot.docs;
        data.forEach(doc => {
            let data = doc.data()
            let themessage = data.Message;
            firestore.collection("users").doc(data.WhoIsTheMessageFrom).get().then(snapshot => {
                const thedata = snapshot.data()
                let image = thedata.Profile;
                localStorage.setItem("pi",image)
            })
            messageadd(localStorage.getItem("pi"), themessage, data.WhoIsTheMessageFrom, user, data.Message, data.ImageSrc); 
        })
    });
}
function messageadd(image,pessage, person, user, Type, src){
        if(person != user){
            firestore.collection("users").doc(person).get().then(snapshot => {
                const thedata = snapshot.data()
                let image = thedata.Profile;
                localStorage.setItem("pi",image)  
            })
            if(Type != undefined){
                let message = `<div  id="message" style="margin-top:5px; margin-left:20px; float:left; clear:both; display:block">
                <img style="width: 40px; height: 40px; display: inline-block; border-radius:50px; " src="${localStorage.getItem("pi")}" alt=""><div style="font-size: 11.52px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(212, 212, 212); border-radius: 10px; display: inline-block; color: black; width: auto; height: auto; padding-bottom: 10px; padding-left: 10px; margin-left: 10px; padding-right: 10px;  padding-top: 15px; word-wrap: break-word; max-width:300px; margin-top:10px;  ">${pessage}</div>
                </div>`
                document.getElementById("chatiy").innerHTML += message;
            }else{
                let message = `<div id="message" style="margin-top:5px;margin-left:20px; float:left; clear:both; display:block">
                <img style="width: 40px; height: 40px; display: inline-block; border-radius:50px; " src="${localStorage.getItem("pi")}" alt=""><img style="display:inline-block; width:100px; height:150px; border-radius:14px; margin-left:10px; margin-top:10px; " src="${src}">
                </div>`
                document.getElementById("chatiy").innerHTML += message;
            }
        }else{
            if(Type != undefined){
              
                let message = `<div  id="message" style="margin-top:5px;float:right; clear:both; display:inline-block; margin-right:10px;">
                <div style="font-size: 11.52px; font-family: Arial, Helvetica, sans-serif; background-image:linear-gradient( rgb(255, 196, 0),  orange); border-radius: 10px; display: inline-block; color: black; width: auto; height: auto; padding-bottom: 10px; padding-left: 10px; margin-left: 10px; padding-right: 10px;  padding-top: 15px; word-wrap: break-word; max-width:300px; margin-top:10px; color:white;  ">${pessage}</div>
                <img style = "float:right; clear:both; width: 40px; height: 40px; display: inline-block; border-radius:50px; margin-left:10px;  " src="${image}"></div>`
                document.getElementById("chatiy").innerHTML += message;
            
            }else{
                let message = `<div id="message" style="margin-top:5px;float:right; clear:both; display:inline-block;  margin-right:10px;">
                <img style="display:inline-block; width:100px; height:150px; border-radius:14px; margin-left:10px; margin-top:10px; " src="${src}">
                <img style = "float:right; clear:both; width: 40px; height: 40px; display: inline-block; border-radius:50px;margin-left:10px;   " src="${image}"></div>`
                document.getElementById("chatiy").innerHTML += message;
            }
        }
        var element = document.getElementById("chatiy");
        element.scrollTop = element.scrollHeight;
}

