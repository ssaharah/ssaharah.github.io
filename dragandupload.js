auth.onAuthStateChanged(user => {
    //If login
    if(user){
        const droparea = document.getElementById("droparea");
        const uploadmodel = document.getElementById("uploadmodel")
        const uploadtext = document.getElementById("uploadtext");
        const profilepicture  = document.getElementById("profilepicture");
        let sdf = false
        profilepicture.addEventListener("click", function(){
            document.getElementById("uploadimagep").style.display = "flex"
            sdf = true
        });
        document.getElementById("Everythingelse").style.display = "block"
        droparea.addEventListener("dragover", function(e){
            e.preventDefault();
            uploadmodel.classList.add("hover")
        }); 
        droparea.addEventListener("dragleave", function(){
            uploadmodel.classList.remove("hover")
        });
        droparea.addEventListener("drop", function(e){
            e.preventDefault();
            let data = e.dataTransfer.files[0]
            let type = data.type
            let filetype = type.split("/")
            uploadmodel.classList.remove("hover")
            if(filetype[0] == "image"){
                return save(data)
            }else{
                uploadtext.innerText = "Invalid file!"
            }
        });
        const save =(file)=>{
            uploadtext.innerText = file.name;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () =>{
                let results = reader.result;
               
                
                if(sdf == true){
                    document.getElementById("uploadimagep").style.display = "none";
                    firestore.collection("users").doc(user.uid).update({
                        Profile: results
                    })
                    document.getElementById("profilepicture").src = results
                    sdf = false
                }else{
                    document.getElementById("uploadimagep").style.display = "none";
                firestore.collection("users").doc(user.uid).get().then(snapshot =>{
                    const data = snapshot.data();
                    let message = `<div id="message" style="margin-top:5px;float:right; clear:both; display:inline-block;  margin-right:10px;">
                    <img style="display:inline-block; width:100px; height:150px; border-radius:14px; margin-left:10px; margin-top:10px; " src="${results}">
                    <img style = "float:right; clear:both; width: 40px; height: 40px; display: inline-block; border-radius:50px;margin-left:10px;   " src="${data.Profile}"></div>`
                    document.getElementById("chatiy").innerHTML += message;
                    
                    var element = document.getElementById("chatiy");
                    element.scrollTop = element.scrollHeight;
                });
                    firestore.collection(localStorage.getItem("cth")).doc("Messages").update({
                        Type: "Img",
                       
                        ImageSrc: results,
                        WhoIsTheMessageFrom: user.uid
                    });
                    let time = new Date
                    let yh = -time.getTime()
                    firestore.collection(localStorage.getItem("cth")).doc(String(yh)).set({
                        Type: "Img",
                        IsMessage: false,
                        ImageSrc: results,
                        WhoIsTheMessageFrom: user.uid
                    });
                    
                }
                
                
                
            } 
            
        }
        
    }
})