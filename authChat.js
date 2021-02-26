const User_info = document.querySelector("#user_info");
const MessageBoxr = document.querySelector("#Bottom");
const User_Info = document.querySelector("#user_info");
const Login_button =  document.querySelector("#Login");
const SignUpButton = document.querySelector("#Signup");
const Welcome = document.querySelector("#Welcome");
const SendButton1 = document.querySelector("#Chat_Button");
const t3erdt = document.getElementById("3erdt"); 
const ytghfvbdcsdzq = document.getElementById("ytghfvbdcsdzq");
const edsz = document.getElementById('edsz');
const t4erdt = document.getElementById("4erdt");
const Whole = document.querySelector("#chat");
const DropdownButton = document.querySelector("#dropdow");
const Sidebar = document.querySelector("#sidebar");
const Side_arrow = document.querySelector("#side_arrow");
const hides = document.getElementById("chat");
const yuij = document.getElementById('yuij');
const Chat = document.getElementById("chatts");
const School = document.getElementById("school");
const body = document.getElementById('body')
const addfriend = document.getElementById('addfriend')
const Notes = document.getElementById("notes");
const Timer = document.getElementById("timer");
const tyuij = document.getElementById('tyuij');
const noti = document.getElementById('noti');
const TimerStuff = document.getElementById("countdownTimer");
const MessageForTimer =  document.getElementById("Messages");
const catchErrorLogin = document.getElementById("catchErrorLogin");
const catchErrorSignup = document.getElementById("catchErrorSignup");
const Delete = document.getElementById("ClearButton"); 
const Bold = document.getElementById("BlodButton");
const I = document.getElementById("IButton");
const textarea = document.getElementById('textarea');
const Save = document.getElementById('SaveButton');
const All_The_Notepad_stuff = document.getElementById("All_The_Notepad_stuff");
const CreateAChat = document.getElementById('CreateChat');
const Add_User = document.getElementById('Add_User');
const All_The_chats = document.getElementById('StuffInChat');
const Invite = document.getElementById('Invite');
const addfriendU  = document.getElementById('addfriendU');
const InviteUsername = document.getElementById('InviteUsername');
const AddPicture = document.getElementById('AddPicture');
const StuffTOHide = document.getElementById('StuffTOHide');
const Emoji_Picker = document.getElementById('Emoji_Picker');
const fileAddBackground = document.getElementById('fileAddBackground');
const ChatGoTo  = document.getElementById('ChatGoTo');
const FriendGoTo = document.getElementById('FriendGoTo');
const chatf = document.getElementById('chatf');
const friendif = document.getElementById('friendif');
const notiup= document.getElementById('notiup');
const enteraddfriend = document.getElementById('enteraddfriend');

sessionStorage.setItem("Chat_Name", "")
sessionStorage.setItem("Chat_currently_in", "")

//This function will check if a user is logged in or not.
auth.onAuthStateChanged(user => {
    if(user){
        yuij.addEventListener('click', function(e){
           
            e.preventDefault();
            
            if(tyuij.style.display == "none"){
                document.getElementById('FHYUHDFIS').style.display = "block";
                tyuij.style.display = "block"
                
                
            }else{
                document.getElementById('FHYUHDFIS').style.display = "none";
                tyuij.style.display = "none"
            }
            
           
        });
        //The user is logged in.
        //First we hide some stuff that we dont't want to show.

        document.querySelector(".modal-boss-s").style.display = "none"
        document.getElementById("signup-first-name").value = "";
        document.getElementById("signup-last-name").value = "";
        document.getElementById("signup-email").value = "";
        document.getElementById("signup-password").value = "";
        sessionStorage.setItem('SignedIn', "true");
        
            
        
        
        edsz.addEventListener('click', (e) =>{
            e.preventDefault();
            document.getElementById('showInClick').style.display = "none";
            document.getElementById("All_The_chats").style.display = "block";
            document.getElementById("Bottom").style.display = "none";
            document.getElementById('chat').style.display = "none";
            document.getElementById('scroll').style.display = "none";
            document.getElementById('FHYUHDFIS').style.display = "none"
            document.getElementById('StuffTOHide').style.display = "none";
            document.getElementById('Add_User').style.display = "none";
            document.getElementById('AddPicture').style.display = "none";
            document.getElementById("Chat_input").style.display = "none";
            document.getElementById("Chat_Button").style.display = "none";
            document.getElementById("Back_button").style.display = "none";
            document.getElementById("ffg").style.display = "block"
            document.getElementById('Plus_Sign').style.display = "inline-block"; 
            document.getElementById('allchatpic').style.display = "block"
           
            
            document.getElementById('ChatGoTo').style.display = "inline-block"
            document.getElementById('FriendGoTo').style.display = "inline-block"
        })
        

        FriendGoTo.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('Plus_Sign').style.display = "none";
            document.getElementById("All_The_chats").style.display = "none";
            document.getElementById('allchatpic').style.display = "none";
            
            addfriend.style.display = "block"
            friendif.style.display = "block";
            


        });
        
        
        firestore.collection("users").doc(user.uid).get().then(snapshot=>{
           
            const  data = snapshot.data();
            let notifi = data.notifi;
            if(notifi.trim() == ""){
                document.getElementById('etuy').src = "Images/2294246a-0052-4f8d-a5dc-462d939efafd_200x200.png";
            }else{
                
                document.getElementById('etuy').src = "Images/e86b08e4-9c6e-40af-9c4b-13560509464c_200x200.png";
            }
            let rty = "";
            let rtx = "";
            if(notifi != undefined){
                let arrayu = notifi.split('/');
                for (let index = 0; index < arrayu.length; index++) {
                    let r = arrayu[index]
                   
                    firestore.collection('users').doc(arrayu[index]).get().then(snapshot =>{
                       
                        const data = snapshot.data();
                        let usernamei = data.Username;
                        let image = data.Profile;
                        let acccept = "accept" + usernamei;
                        let decline = "decline" + usernamei;
                        let notification = `<div id="${usernamei}" style="display:inline-block;"><img style="width: 50px; height: 50px; display:inline-block;" src="${image}"></div><p style="display:inline; padding-bottome:10px; font-size:12px;">${usernamei} sent you a friend request. </p><button style="background-color:green; border:none; border-radius:4px; color:white; font-size:10px; height:20px;" id="${acccept}">Accept</button><button style="margin-left:5px; color:white; border-radius:4px; font-size:10px; height:20px; background-color:red; border:none;" name="${r}" id="${decline}">Decline</button><hr>`
                        document.getElementById('notiuj').innerHTML += notification
                        
                        localStorage.setItem('rtg', snapshot.uid)
                        rty += acccept + "/"
                        localStorage.setItem("rty", rty)
                        rtx += decline + "/"
                        localStorage.setItem("rtx", rtx)
                        
                        
                    });
                    
                    
                }   
            } 
        });
        noti.addEventListener('click', function(e){
            e.preventDefault();
            firestore.collection('users').doc(user.uid).get().then(s=>{
                let gh = s.data();
                let bnj  = gh.notifi
                if(bnj != ""){
                    let rty = localStorage.getItem('rty');
            let rtx = localStorage.getItem('rtx');
          
            let rtyu = rty.split("/");
            let rtxu = rtx.split("/");
            for (let iu = 0; iu < rtyu.length - 1; iu++) {
                const accepty = document.getElementById(rtyu[iu]);
                const decliney = document.getElementById(rtxu[iu]);
                if(decliney != null){
                    let nui = decliney.name;
                    
                accepty.addEventListener('click', function(e){
                        e.preventDefault();
                        firestore.collection("users").doc(user.uid).get().then(snapshot=>{
                            const data = snapshot.data();
                            const not = data.notifi
                            let fr = data.fr;
                            let arrayu = not.split("/");
                            fr +=   nui + "/"
                            
                           
                            if(arrayu != not){
                                let indexi = arrayu.indexOf(nui)
                                arrayu = arrayu.splice(indexi, 1);
                                if(arrayu.length == 1){
                                    arrayu = [ ]
                                }
                                firestore.collection("users").doc(user.uid).update({
                                    notifi: arrayu.join(""),
                                    fr: fr
                                });
                                firestore.collection("users").doc(nui).get().then(snapshot =>{
                                    const data = snapshot.data();
                                    let fr = data.fr;
                                    if(fr == undefined){
                                        fr = "";
                                    }
                                    fr += user.uid + "/"
                                  
                                    firestore.collection("users").doc(nui).update({
                                        fr: fr
                                    })

                                });
                                
                               

                            } 
                        });
                });
                decliney.addEventListener('click', function(e){
                        e.preventDefault();
                        
                        firestore.collection("users").doc(user.uid).get().then(snapshot=>{
                            const data = snapshot.data();
                            const not = data.notifi
                            let arrayu = not.split("/");
                            if(arrayu != not){
                                let indexi = arrayu.indexOf(nui)
                                arrayu = arrayu.splice(indexi, 1);
                                if(arrayu.length == 1){
                                    arrayu = [ ]
                                }
                                firestore.collection("users").doc(user.uid).update({
                                    notifi: arrayu.join("")
                                });

                            }
                            
                           
                           
                              
                            
                        });
                        
                        
                        
                    });
                }
                }
            
                }
            })
    
                
                
            if(notiup.style.display == "block"){
                
                notiup.style.display = "none";
            }else{
                notiup.style.display = "block";
                
            }
        });
       
        ChatGoTo.addEventListener('click', (e)=>{
            e.preventDefault();
            friendif.style.display = "none";
            document.getElementById('allchatpic').style.display = "inline-block"
            document.getElementById('Plus_Sign').style.display = "inline-block";
            document.getElementById("All_The_chats").style.display = "block";
            document.getElementById('yuiut').style.display = "block";
            
            addfriend.style.display = "none"
            

        });
   
        addfriend.addEventListener('click', function(e){
            e.preventDefault()
            
            addfriendU.style.display = "flex";
            enteraddfriend.addEventListener('click', function(){
                let thedatas = document.getElementById('friendentername').value;
               
                if(thedatas != user.uid || thedatas != ""){
                   
                    firestore.collection('users').where("Username", "==", thedatas).get().then(snapshot =>{
                        const yui = snapshot.docs;
                        yui.forEach(doc=>{
                            let name = doc.id;
                           
                            firestore.collection('users').doc(name).get().then(snapshot=>{
                                const yuhg = snapshot.data();
                                let notifi = yuhg.notifi;
                                if(notifi == undefined){
                                    notifi = "";
                                }
                                notifi += user.uid + "/"
                                firestore.collection('users').doc(name).update({
                                    notifi: notifi
                                });
                                
                            });
                            
                        });
                    });
                    firestore.collection('users').doc().set({
                    });
                }else{
                    alert("Invalid answer");
                }
            });

        }); 
        fileAddBackground.addEventListener('change', function(){
            const files = this.files[0];
                if (files) {
                    fileAddBackground.style.display = "none";
                    document.getElementById('BackgroundU').style.display = "none";
                    const Base64Reader = new  FileReader();
                    Base64Reader.addEventListener('load', function(e){
                        e.preventDefault();
                        firestore.collection('users').doc(user.uid).update({
                            Background:  this.result
                        });
                        let Data = 'url('
                        Data += this.result
                        Data += ')'
                        body.style.backgroundImage = Data
                       
                    });
                    Base64Reader.readAsDataURL(files);   
                 }
        });
        
        //What this function does is gets a document in the collection users with the name of the unique id of the user signed in.
        firestore.collection('users').doc(user.uid).get().then(function(doc){
            //Getting the profile picture of that user and displaying it.
            const Data = doc.data();
            let Profile = Data.Profile;
            let User = Data.Display_Name
            const htmlForProfile = `
            <img  class="inline" id="ProfilePicture" src="${Profile}" alt="Profile Picture">
            `;
            document.getElementById("edfvcd").src  = Profile
            document.getElementById("FVdcv").innerText =  User
            const Button = document.getElementById('ButtonTo');
           
            
            
            Button.addEventListener('click', function(e){
                e.preventDefault();
                
                const Chat_Data= document.getElementById('Chat_Data');
                if(Chat_Data.style.display == "none"){
                    Chat_Data.style.display = "flex"

                }else{
                    notiup.style.display = "none";
                    Chat_Data.style.display = "none";
                    

                }
            });
            
            const Take_Picture = document.getElementById('Take_Picture');
            Take_Picture.innerHTML = htmlForProfile;
            Take_Picture.style.display ="inline";
            const ProfilePicture = document.getElementById('ProfilePicture');
            ProfilePicture.addEventListener('click', function(e){  
                e.preventDefault();
                //When the profile picture is clicked this function will run.
                //Opens up a modal.
                document.getElementById('ProfilePictureModal').style.display = "flex";
            });
        });
        
       
        const UploadAProfielPicture = document.getElementById('UploadAProfielPicture');
        UploadAProfielPicture.addEventListener('click',function(e){
            e.preventDefault();
             //If the user clicks upload an image this function will run.
             //This cloes the modal and opens up a new one.
            document.getElementById('ProfilePictureModal').style.display = "none";
            document.getElementById('ProfilePictureModalU').style.display = "flex";
            //This function gets the file that is chosen and saves it as the users profile.
            document.getElementById('file').addEventListener('change', function() {
                const files = this.files[0];
                if (files) {
                    const Image = document.getElementById('ProfilePicture');
                    const ImageSrc = this.files[0];
                    Image.src = URL.createObjectURL(ImageSrc); 
                    document.getElementById('file').style.display = "none";
                    document.getElementById('ProfilePictureModalU').style.display = "none";
                    const Base64Reader = new  FileReader();
                    Base64Reader.addEventListener('load', function(e){
                        e.preventDefault();
                        firestore.collection('users').doc(user.uid).update({
                            Profile:  this.result
                        });
                    });
                    Base64Reader.readAsDataURL(files);   
                 }
            });
            
        });
        
        //This just displays the username of the user currently signed in.
        const html_for_info = `
        <a>${user.email}</button>
        `;
        //Then it is saved in local storage.
        localStorage.setItem("user", user.uid);
        
        Chat.addEventListener('click', (e) =>{
            e.preventDefault();
            //This function runs when the user has clicked chat.
            All_The_chats.style.display = "inline";
            All_The_Notepad_stuff.style.display = "none";
            TimerStuff.style.display = "none";
            document.getElementById("stopwatchgotostuff").style.display = "none";
            document.getElementById("zsdcx").style.display = "none" 
            document.getElementById("yuiut").style.display = "block";
            document.getElementById("ChatGoTo").style.display = "inline-block";
            document.getElementById("FriendGoTo").style.display = "inline-block";
            document.getElementById("StuffTOHide").style.display = "none"
            document.getElementById('All_The_chats').style.display = "block";
            document.getElementById('allchatpic').style.display ="block";
            document.getElementById('yuiut').style.display = "block";
            friendif.style.display = "none";
            if(NotInChat == true){
                Emoji_Picker.style.display = "inline";
                AddPicture.style.display = "inline";
                //document.getElementById('Chat_Button').style.display = "inline";
                //document.getElementById('textarea').style.display = "inline";
                document.getElementById('Gp').style.display = "inline";
                document.getElementById("chat").style.display = "none";
                document.getElementById('Plus_Sign').style.display = "inline-block";
                
                    firestore.collection('users').doc(user.uid).get().then(snapshot =>{
                        const Data = snapshot.data();
                        let Chatsin = Data.Chatsin
                        ChatGoTo.style.display ="inline-block";
                        FriendGoTo.style.display ="inline-block";
                        GetAllChats(Chatsin);
                        Back_button(Chatsin);
                       
                       
                        
                    });
                    
                    AddPicture.addEventListener('click',function(e){
                        e.preventDefault();
                        document.getElementById('AddPictureModal').style.display = "flex";
                        document.getElementById('AddPictureModal').style.position = "fixed";
                        const UploadAAdd = document.getElementById('UploadAAdd');
                        UploadAAdd.addEventListener('click', function(e){
                            e.preventDefault();
                            document.getElementById('AddPictureModal').style.display = "none";
                            const AddModalU = document.getElementById('AddModalU');
                            AddModalU.style.display = "flex";
                            document.getElementById('fileAdd').style.display ="flex";
                            document.getElementById('fileAdd').style.marginLeft ="30px";
                            AddModalU.style.position = "fixed";
                            const fileAdd = document.getElementById('fileAdd');
                            fileAdd.addEventListener('change', function(e){
                               
                                e.preventDefault();
                                const files = this.files[0];
                                if (files) {
                                    document.getElementById('fileAdd').style.display = "none";
                                    document.getElementById('AddPictureModal').style.display = "none";
                                    const Base64Reader = new  FileReader();
                                    DATE = new Date().getTime();
                                    let Date_Send = new Date();
                                    let Chat_currently_in = sessionStorage.getItem('Chat_Name');
                                    Base64Reader.addEventListener('load', function(e){
                                        e.preventDefault();
                                        let Date_mili = Date_Send.getTime();
                                       
                                        let Date = Date_Send.getSeconds() + "/" + Date_Send.getMinutes() + "/" + Date_Send.getHours() + "/" +
                                        Date_Send.getDay() + "/" + Date_Send.getMonth() +"/" +  Date_Send.getFullYear();
                                        const Ref2 = firestore.collection(Chat_currently_in).doc(DATE.toString());
                                        const Ref = firestore.collection(Chat_currently_in).doc("Messages");
                                        const ImageSrc = this.result;
                                        const Refd = firestore.collection(Chat_currently_in).doc("Chat_Info");
                                        firestore.collection('users').doc(user.uid).get().then(snapshot =>{
                                            const Data = snapshot.data();
                                            const Display_Name = Data.Display_Name;
                                            Ref2.set({
                                                WhoIsTheMessageFrom: user.uid,
                                                IsMessage:false,
                                                Type: "Img",
                                                ImageSrc: ImageSrc,
                                                Display_Name: Display_Name,
                                                Date_mili: -Date_mili,
                                                Date: Date,
                                            });
                                            Refd.update({
                                                WhoIsTheMessageFrom: user.uid,
                                                IsMessage: true,
                                                Type: "Img",
                                                ImageSrc: ImageSrc,
                                                Display_Name:  Display_Name,
                                                Date: Date,
                                                Message: ""
                    
                                            })
                                            //Updating the last message send.Which then triggers a method to run
                                            Ref.set({
                                                WhoIsTheMessageFrom: user.uid,
                                                IsMessage: true,
                                                Type: "Img",
                                                ImageSrc: ImageSrc,
                                                Display_Name:  Display_Name,
                                                Date: Date,
                                            });
                                            AddModalU.style.display = "none";
                                        });
                                    });
                                    Base64Reader.readAsDataURL(files);
                                }
                            });
                        });
                    });      
            }
        });
        const prty = document.getElementById('4erdt')
        const orty = document.getElementById("3erdt")
        orty.addEventListener('click', function(){
            open("html.html");
            document.getElementById('audio').pause();
            let Chat_currently_in = sessionStorage.getItem('Chat_currently_in')
            firestore.collection(Chat_currently_in).doc('Chat_Info').get().then(snapshot=>{
                const data = snapshot.data();
                let yui = data.pim;
                let rf = yui.split("/");
                if(!rf.includes(user.uid)){
                    yui += user.uid + "/"
                   
                    firestore.collection(Chat_currently_in).doc('Chat_Info').update({
                        pim: yui
                    });
                }
            });
        });
        prty.addEventListener('click', function(e){
            e.preventDefault();
            document.getElementById('audio').pause()
            let rtf = sessionStorage.getItem("Chat_Name");
            firestore.collection(rtf).doc("Chat_Info").get().then(snapshot=>{
                const sy = snapshot.data();
                let y = sy.Iscall;
               
                if(y ==false){
                    firestore.collection(rtf).doc("Chat_Info").update({
                        Iscall:true,
                        started: localStorage.getItem("user.uid")
                    });
                    
                }
            })
            
        })
        School.addEventListener('click', (e) =>{
            e.preventDefault();
            //This function runs when the user has clicked school.
            Add_User.style.display = 'none';
            TimerStuff.style.display = "none";
            All_The_Notepad_stuff.style.display = "none";
            All_The_chats.style.display = "none";
            document.getElementById("zsdcx").style.display = "none"
            document.getElementById('trty').style.display = "none";
            document.getElementById('allchatpic').style.display ="none";
            document.getElementById('scroll').style.display = "none";
            document.getElementById('addfriend').style.display = "none";
            document.getElementById('StuffTOHide').style.display = "none";
             


            document.getElementById("chat").style.display = "none";
            document.getElementById('Plus_Sign').style.display = "none";
            document.getElementById('All_The_chats').style.display = "none";
            document.getElementById('friendif').style.display = "none";
            document.getElementById('yuiut').style.display = "none";
            document.getElementById("stopwatchgotostuff").style.display = "none";

        });
        Notes.addEventListener('click',(e)=>{
            e.preventDefault();
            document.getElementById("stopwatchgotostuff").style.display = "none";
            //This function runs when the user has clicked notes.
            Add_User.style.display = 'none';
            document.getElementById("zsdcx").style.display = "none"
            TimerStuff.style.display = "none";
            All_The_chats.style.display = "none";
           
            document.getElementById('friendif').style.display = "none";
            document.getElementById('yuiut').style.display = "none";
            document.getElementById('All_The_chats').style.display = "none";
            document.getElementById('trty').style.display = "none";
            document.getElementById('addfriend').style.display = "none";
            document.getElementById('allchatpic').style.display ="none";
            
            
            //document.getElementById('StuffTOHide').style.display = "none";
            
            textarea.style.display = "block"
            //document.getElementById("chat").style.display = "none";
            document.getElementById('Plus_Sign').style.display = "none";
            All_The_Notepad_stuff.style.display = "block";
            console.log( All_The_Notepad_stuff.style.display)
            Delete.addEventListener('click', function(){
                textarea.value = "";
              });
            Bold.addEventListener('click', function(e){
                e.preventDefault();
                if(textarea.style.fontWeight == "bold"){
                    textarea.style.fontWeight = "normal"
                }else{
                  textarea.style.fontWeight = "bold"
                }
              });
              I.addEventListener('click', function(e){
                if(textarea.style.fontStyle == "italic"){
                  textarea.style.fontStyle = "normal"
                }else{
                  textarea.style.fontStyle = "italic"
                }
              });
              function save(){
                if(textarea.value.length <= 5000){
                    const Gp = document.getElementById('Gp');
                    Gp.innerText="Successfully saved"
                     
                     firestore.collection('users').doc(user.uid).update({
                         Notes: textarea.value,
                         fontStyle: textarea.style.fontStyle,
                         fontWeight: textarea.style.fontWeight
                     }).then(function(){
                       const fadeTarget = document.getElementById("Gp");
                      
                       Gp.innerText
                       fadeTarget.style.display ="block";
                       fadeTarget.style.opacity ="1";
                       var effect = setInterval(function () {
                           if (!fadeTarget.style.opacity) {
                               fadeTarget.style.opacity = 1;
                           }
                           if (fadeTarget.style.opacity > 0) {
                               fadeTarget.style.opacity -= 0.2;
                           } else {    
                               clearInterval(effect);
                           }
                       }, 150);
                     });

                
                   
               }else{
                   alert("To long");
               }  
              }
              Save.addEventListener('click', function(){
                  save();
              });
              setInterval(() => {
                  save();
              }, 12000); 
            firestore.collection('users').doc(user.uid).get().then(snapshot =>{
                const snapshotData = snapshot.data();
                if(snapshotData.Notes == undefined){
                    textarea.value = "";
                }else{
                    textarea.value = snapshotData.Notes
                }
               if(snapshot.fontStyle == ""){
                   textarea.style.fontStyle = "normal"
               }else{
                textarea.style.fontStyle = snapshotData.fontStyle;
               }
               if(snapshot.fontWeight == ""){
                textarea.style.fontWeight = "normal";
               }else{
                    textarea.style.fontWeight  = snapshotData.fontWeight;   
               }
            });
        });
        
        Timer.addEventListener('click',(e)=>{
            //This function runs when the user has clicked timer.
            document.getElementById('All_The_chats').style.display = "none";
            document.getElementById('addfriend').style.display = "none";
             Add_User.style.display = 'none';
            
            document.getElementById('allchatpic').style.display = "none"
            document.getElementById('friendif').style.display = "none";
            document.getElementById('yuiut').style.display = "none";
            document.getElementById('All_The_chats').style.display = "none";
            document.getElementById('trty').style.display = "none";
            document.getElementById('addfriend').style.display = "none";
            document.getElementById('allchatpic').style.display ="none";
            document.getElementById('scroll').style.display = "none";
            document.getElementById('StuffTOHide').style.display = "none";
            
            document.getElementById("chat").style.display = "none";
            document.getElementById('Plus_Sign').style.display = "none";
            All_The_chats.style.display = "none";
            const countdown = document.getElementById("countdown");
            let ShouldItShow = "";
            if(countdown.style.display == "inline-block"){
                ShouldItShow = "inline-block"
            }else{
                ShouldItShow = "none";
            }
            
            All_The_Notepad_stuff.style.display = "none";
            
            const stopwatchgotostuff = document.getElementById("stopwatchgotostuff")
            stopwatchgotostuff.style.display = "inline-block";
            
            TimerStuff.style.display = "inline-block";
            document.getElementById("zsdcx").style.display = "block"
            document.getElementById('Plus_Sign').style.display = "none";
            document.getElementById("ShowNotFirstTime").style.display = ShouldItShow;
            document.getElementById("chat").style.display = "none";
            const Start = document.getElementById("start");
            const Pause = document.getElementById("pause");
            const cancelStart = document.getElementById("cancelStart");
            const cancelNotStart = document.getElementById("cancelNotStart");
            const unPause = document.getElementById("unPause");
            const Timer = document.getElementById("Timer");
            let IsItPause = false;
            Start.addEventListener('click',function(){
                
                const Message = document.getElementById("Messages").value;
                
                if(Message == ""  || isNaN(Message) ){
                    alert("Invalid Input!")
                }else{
                    const Starting = (Message %10000 -  Message %100)/100;
                    const Hours = Math.floor((Message%1000000)/10000);
                    let time = Starting * 60  + Message%100 + Hours*3600;
                    if(time  >359999){
                        alert("Result exceeds space available.");
                    }else{
                        countdown.style.display = "inline-block"
                        localStorage.setItem("Time", time);
                        localStorage.setItem("Real_Hour", Hours);
                        Start.style.display = "none";
                        cancelStart.style.display = "none";
                        Timer.style.display = "none";
                        document.getElementById("ShowNotFirstTime").style.display = "inline-block";
                        Pause.style.display = "inline-block";
                        cancelNotStart.style.display = "inline-block";
                        IsItPause = false;
                        var myInterval =  setInterval(UpdateCo, 1000); 
                        cancelNotStart.addEventListener('click', function(){
                            clearInterval(myInterval);
                            IsItPause = true;
                            MessageForTimer.value =  "";
                            countdown.value = ""
                            document.getElementById("ShowNotFirstTime").style.display = "none";
                            Pause.style.display = "none";
                            cancelNotStart.style.display = "none"
                            countdown.style.display = "none";
                            document.getElementById("Timer").style.display = "inline-block";
                            //Not Work
                            TimerStuff.style.display = "inline-block";
                            cancelStart.style.display = "inline-block";
                            Start.style.display = "inline-block";
                            MessageForTimer.style.display = "block";
                        });
                    }  
                } 
                
            });
            Pause.addEventListener('click',function(e){
                e.preventDefault();
                Pause.style.display = "none";
                unPause.style.display = "inline-block";
                IsItPause = true;
            });
            unPause.addEventListener('click', function(e){
                e.preventDefault();
                Pause.style.display = "inline-block";
                unPause.style.display = "none";
                IsItPause = false;
            });
            cancelStart.addEventListener('click', function(e){
                e.preventDefault();
                
                Pause.style.display = "none";
                unPause.style.display = "none";
                
                document.getElementById('countdownTimer').style.display = "none";
                

            });
            let control1= false;//Can't click start to times in a row
            let control2 = false;//Can't click stop if it was not started
            let control3 = true;//Stop when you click stop 
            const startis = document.getElementById("startis")
            const stopis = document.getElementById("stopis")
            const resetis = document.getElementById("resestis")
            let milisecondsfirst = document.getElementById("milisecondsfirst");
            let secondsfirst  = document.getElementById("secondsfirst")
            let minfirst = document.getElementById("minfirst");
            let qsdfghj = parseInt(milisecondsfirst.innerText)
            let azertyu = parseInt(secondsfirst.innerText)
            let wxcvbn = parseInt(minfirst.innerText)
            
            startis.addEventListener("click", function(){
                control2 = true
                if(control1 == false){
                    stopis.addEventListener("click", function(){
                        clearInterval(nbv)
                        control1 = false
                    })
                    resetis.addEventListener("click",function(){
                        clearInterval(nbv)
                        qsdfghj  = 0
                        azertyu = 0
                        wxcvbn = 0
                        control1 = false
                        milisecondsfirst.innerText = "00"
                        secondsfirst.innerText = "00"
                        minfirst.innerText = "00"
    
                    })
                    control1 = true
                    let nbv = setInterval(function(){
                        
                        if(qsdfghj != 100){
                            qsdfghj += 1
                        }else{
                            qsdfghj = 00
                            if(azertyu != 59){
                                azertyu += 1
                            }else{
                                azertyu = 00
                                wxcvbn += 1
                                
                            }
                            
                        }
                        let poiuytr = qsdfghj.toString()
                        let mlkjhgf = azertyu.toString()
                        let nbvcxw = wxcvbn.toString()
                        if(poiuytr.length == 1){
                            poiuytr = "0" + poiuytr
                        }
                        if(mlkjhgf.length == 1){
                            mlkjhgf = "0" + mlkjhgf
                        }
                        if(nbvcxw.length == 1){
                            nbvcxw = "0" + nbvcxw
                        }
                        milisecondsfirst.innerText = poiuytr
                        secondsfirst.innerText = mlkjhgf
                        minfirst.innerText = nbvcxw
                    }, 10)
                }

                
            }) 
            function UpdateCo(){
            if(IsItPause == false){
                let timeS = localStorage.getItem("Time")
                if(timeS <= 0){
                    countdown.innerHTML = `Times Up`;
                   
                    return;
                }else{
                    let OtherNumber = timeS;
                    let Hour = Math.floor(timeS/3600);
                    OtherNumber = OtherNumber%3600;
                    Minutes = Math.floor(OtherNumber/60)
                    let LetMinutes = Minutes;
                    if(localStorage.getItem("Real_Hour") == 0){
                        Hour = "00"
                    }
                    let Seconds = timeS%60;
                    if(Seconds < 10){
                    Seconds =  "0" + Seconds;
                    }
                    if(Minutes >= 60){
                    LetMinutes = Minutes - 50;
                    }
                    if(Minutes < 10){
                    LetMinutes = "0" + LetMinutes;
                    }
                    countdown.innerHTML = `${Hour}:${LetMinutes}:${Seconds}`
                    let T = timeS - 1
                    localStorage.setItem("Time",T);  
                }   
            }
            }
        });
        
        User_info.innerHTML = html_for_info;
        StuffTOHide.style.display = "none";
        Sidebar.style.display = "none";
        Login_button.style.display ="none";
        SignUpButton.style.display ="none";
        Welcome.style.display ="none";
        Sidebar.style.display = "block";
        User_info.style.display = "inline";
        Whole.style.display = "inline";
        
        Side_arrow.style.display = "inline";
        hides.style.display = "block";
        
        
        
        //-----------------------------------------------------
        //send the message
        firestore.collection('users').doc(user.uid).get().then(snapshot =>{
            const Data = snapshot.data();
            let Display_Name = Data.Display_Name;
            let Chatsin = Data.Chatsin;
            let Notes = Data.Notes;
            let friends = Data.fr;
           
            SendButton(Display_Name);
            CreateChat(Chatsin);
            InviteAFriend();
            getallfriends(friends)
        });

        call = function(){
            
            const red = sessionStorage.getItem('Chat_Name'); 
            if(red == ""){
                const Refi = firestore.collection(red.trim()).doc("Chat_Info");
            Refi.onSnapshot(function(doc){
                const data  = doc.data();
                const uio = data.started
                if(data.Iscall == true){
                    firestore.collection('users').doc(user.uid).get().then(snapshot=>{
                        const data = snapshot.data();
                        let call = data.calls;  
                        let decline = data.decline
                        let yu = call.split("§");
                        let yh = decline.split("§");
                        var n = yu.includes(red)
                        let yui = call + red + "§"
                        var r = yh.includes(red)
                        if(n == false &&  r== false){
                            
                            firestore.collection('users').doc(user.uid).update({
                                calls: yui
                            });
                        }
                        if( r== false){
                            
                            if(uio == user.uid ){ 
                                
                                
                                document.getElementById("erg").style.display = "block";
                                document.getElementById("ety").style.display = "block";
                                setTimeout(function(){
                                    document.getElementById('audio').play()
                                }, 200)
                                firestore.collection("users").doc(uio).get().then(snapshot=>{
                                    const data = snapshot.data();
                                    let user = data.Display_Name;
                                    let yu = data.Profile;
                                    document.getElementById('rts').src = yu;
                                    document.getElementById("ro").innerText = user
                                });
                                t3erdt.addEventListener('click', function(){
                                    document.getElementById("erg").style.display = "none";
                                    firestore.collection("users").doc(user.uid).update({
                                        incall: true
                                    });
                                });
                                t4erdt.addEventListener('click', function(){
                                    document.getElementById("erg").style.display = "none";
                                    firestore.collection('users').doc(user.uid).get().then(snapshot=>{
                                        const data = snapshot.data();
                                        let ty = data.decline;
                                        let yuii = ty.split("§");
                                        yuii += red + "§"
                                        firestore.collection('users').doc(user.uid).update({
                                            decline: yuii
                                        });
                                    })
                                });
                            }
                            setTimeout(function(){
                                firestore.collection('users').doc(user.uid).get().then(snapshot=>{
                                    const data = snapshot.data();
                                    let ty = data.decline;
                                    let yuii = ty.split("§");
                                    yuii += red + "§"
                                    firestore.collection('users').doc(user.uid).update({
                                        decline: yuii
                                    });
                                })
                                document.getElementById("erg").style.display = "none";
                                document.getElementById("ety").style.display = "none";
                                
                            }, 25200)
                            

                        }
                    })
                    
                }else{
                    firestore.collection('users').doc(user.uid).get().then(snapshot=>{
                        const data = snapshot.data();
                        let ty = data.decline;
                        let rf = ty.split("§");
                        const index = rf.indexOf(red);
                        if (index > -1) {
                            rf.splice(index, 1);
                        }
                        if(rf.length  == 1){
                            rf=[]
                        }
                        firestore.collection('users').doc(user.uid).update({
                            decline: rf.join(" ")
                        })
                    });

                }
            })

            }
            
                
            
        }
        call()
        
        //When the last message send update this method runs.
        
        localStorage.setItem("user.uid", user.uid);
        localStorage.setItem('user.email', user.email);
        function Seperate(){
            Whole_cut_string = [];
            Number_Of_Time_repeat = Math.ceil(Message.length/30);
            for (let index = 0; index < Number_Of_Time_repeat; index++) {
                Whole_part =  Message.split("", 30).join('')
                Whole_cut_string.push((Whole_part));
                for (let i = 0; i < 30; i++) {
                    Message = Message.substring(1);
                }
            }  
            return Whole_cut_string;
        }
        function getallfriends(fr){
            
            let thefriends = fr.split("/");
            let frtf = thefriends;
            let ui = 0
            let marray = [];
            let name = [];
            friendif.innerHTML = "";
            Plus_button.style.display = "none";
            for(i = 0; i < thefriends.length; i++){
                let frtfi = thefriends[i]
                firestore.collection('users').doc(thefriends[i]).get().then(function(snapshoty){
                    const data = snapshoty.data();
                    const friendname = data.Username;
                    let thing = friendname + "close"
                    text = `<div class="iq"><button style="margin-top:0.0320644216691069vh; display:inline; background-color:transparent; border:none; font-size:1.171303074670571vw; margin-left:12.445095168374817vw;" id=${thing}>x</button> <img style="width:9.882869692532942vw; height:9.882869692532942vw; border-radius:0.8784773060029283vw; margin-left:2.1961932650073206vw;" src="${data.Profile}" alt=""><p style=" display:inline; padding-left:1.4641288433382138vw;">${friendname}</p></div>`
                    friendif.innerHTML += text;
                    ui += 1
                    marray.push(thing)
                    name.push(friendname)
                    let uis = "unfriend"  + frtfi
                    let uit = uis + "t"
                    let uise = uis + uit
                    let textfg = `<div id="${uis}" class="modal-boss-s">
                    <div class="modal-signup" style="height: 15.6vw;">
                        <form class="list">
                            <h1 style="font-size: 27px;" id="${uit}"> 
                            </h1>
                            <div id="${uise}"></div>
                        </form>
                    </div>`
                    
                        trty.innerHTML += textfg;
                    
                    let yesiu = uis + "yes";
                    let noiu = uis + "no"
                    let yesbuttonano = `<button id="${yesiu}"   style="width:120px; height: 35px; background-color: green; color: white; border: none; border-radius: 5px;">Yes</button>
                    <button id="${noiu}"  style="width:120px; height: 35px; background-color: red; color: white; border: none; border-radius: 5px;">No</button>`
                    console.log(uise)
                    if(document.getElementById(uise).innerHTML == "" ){
                      
                        document.getElementById(uise).innerHTML += yesbuttonano;
                    }
                    
                    for (let index = 0; index < marray.length; index++) {
                        
                        document.getElementById(marray[index]).addEventListener('click', function (){
                            document.getElementById(uis).style.display = "none";
                            document.getElementById('trty').style.display = "flex"
                            document.getElementById(uis).style.display = "flex";
                            document.getElementById(uis).style.position = "fixed";
                            document.getElementById(uit).innerText = "Are you sure you want to unfriend " + name[index]  + "?"
                        });
                    }
                    
                    const yesunfr = document.getElementById(yesiu);
                    const nounfr = document.getElementById(noiu);
                        yesunfr.addEventListener('click', function(e){
                            e.preventDefault();
                               
                                let oelete = thefriends.indexOf(frtfi)
                                
                                if (oelete > -1) {
                                    thefriends.splice(oelete, 1);
                                }
                                firestore.collection('users').doc(user.uid).update({
                                    fr: thefriends.join()
                                })
                                firestore.collection('users').doc(frtfi).get().then(snapshot=>{
                                    const data = snapshot.data();
                                    let fr = data.fr;
                                    let orty = fr.split("/");
                                    let rty = orty.indexOf(user.uid);
                                    if(rty > -1){
                                        orty.splice(rty, 1);

                                    }
                                    firestore.collection('users').doc(frtfi).update({
                                        fr: orty.join("")

                                    });
                                });
                            document.getElementById(uis).style.display = "none";
                        });
                        nounfr.addEventListener('click', function(e){
                            e.preventDefault()
                            document.getElementById(uis).style.display = "none";
                        }); 
                });
            }
        }
        function InviteAFriend(){
            Invite.addEventListener('click', function(){
                let Friend = InviteUsername.value;
                
                firestore.collection('users').where("Username", "==",  Friend).get().then(snap=>{
                    let data = snap.docs
                    data.forEach(doc => {
                        let polm = doc.id
                        localStorage.setItem("efg", polm)
                        
                    })
                })
                firestore.collection('users').doc(user.uid).get().then(snapshot=>{
                    const data = snapshot.data();
                    let yut = data.fr;
                    let rfgt = yut.split("/");
                    if(yut != ""){
                       
                   
                    const Chat_currently_in = sessionStorage.getItem('Chat_Name');
                    
                    if(Chat_currently_in == undefined){
                        alert('Error')
                        
                    }else{
                       let polm = localStorage.getItem('efg')
                        if(rfgt.includes(polm) == false){
                            alert("Friend not found");
                        }else{
                            
                            firestore.collection('users').where("Username", "==", Friend).get().then(function(snapshot){
                                snapshot.forEach(doc => {
                                    const Data = doc.data();
                                    DocId = doc.id;
                                    let ChatOfThatFriend = Data.Chatsin;
                                    let NewChatOfThatFriend = ChatOfThatFriend  + Chat_currently_in + "§";
                                    firestore.collection('users').doc(DocId).update({
                                        Chatsin: NewChatOfThatFriend
                                    }); 
                                
                                    firestore.collection(Chat_currently_in).doc('Chat_Info').get().then(snapshot =>{
                                        const InviteFriendData = snapshot.data();
                                        
                                        const User = InviteFriendData.User_In_Chat;
                                        firestore.collection(Chat_currently_in).doc('Chat_Info').update({
                                            User_In_Chat: User + Friend  + " "
                                        });
                                    });
                                });
                            });
                        }
                    }

                    }else{
                        alert('No friends found.')
                    }
                    
                    
                });
            });
        }
        
        function SendButton(Display_Name){
            //This runs when the user clicks send
            SendButton1.addEventListener('click' ,(e) =>{
                //Stops the page from reloading.
                e.preventDefault();
                DATE = new Date().getTime();
                let Date_Send = new Date();
                //Getting the message that the user send.
                const Message = document.querySelector("#Chat_input").value;
                //If the message is not equal to nothing the follwing runs else it just says to send a message that is not empty
                
                if (Message != null && Message.trim() != "")
                {   
                       const Chat_currently_in = sessionStorage.getItem('Chat_Name')
                        const Ref2 = firestore.collection(Chat_currently_in).doc(DATE.toString());
                        let Date_mili = Date_Send.getTime();
                        let Date = Date_Send.getSeconds() + "/" + Date_Send.getMinutes() + "/" + Date_Send.getHours() + "/" +
                        Date_Send.getDay() + "/" + Date_Send.getMonth() +"/" +  Date_Send.getFullYear();
                        let Number_Of_Characters = Math.round((Message.length * 30 +  30)/7 + 42);
                        let Number_Of_Words = Message.split(' ').length-1;
                        const Ref = firestore.collection(Chat_currently_in).doc("Messages");
                        const Refd = firestore.collection(Chat_currently_in).doc("Chat_Info");
                        if(Number_Of_Words == 0 ){
                            Number_Of_Words = 1;
                        }
                        //Setting the value on a new message.
                        Ref2.set({
                            Message: Message,
                            WhoIsTheMessageFrom: user.uid,
                            IsMessage:false,
                            Display_Name: Display_Name,
                            Number_Of_Characters: Number_Of_Characters/ Math.ceil(Message.length / 30),
                            Date_mili: -Date_mili,
                            Date: Date,
                        });
                        Refd.update({
                            Message: Message,
                            WhoIsTheMessageFrom: user.uid,
                            Display_Name: Display_Name,
                            Number_Of_Characters: Number_Of_Characters/ Math.ceil(Message.length / 30),
                            Date_mili: -Date_mili,
                            Date: Date,

                        })
                        //Updating the last message send.Which then triggers a method to run
                        Ref.set({
                            Message: Message,
                            WhoIsTheMessageFrom: user.uid,
                            IsMessage: true,
                            Display_Name:  Display_Name,
                            Number_Of_Characters: Number_Of_Characters/ Math.ceil(Message.length / 30),
                            Date: Date,
                        });
                    //saving some stuff to local storage.
                    Chat_name = sessionStorage.getItem('Chat_Name');
                    sessionStorage.setItem('Message', Message);
                    sessionStorage.setItem('WhoIsTheMessageFrom', user.email);
                    document.querySelector("#Chat_input").value = ""
                    scrollSmoothToBottom("scroll")
                        function scrollSmoothToBottom (id) { 
                            setTimeout(function(){
                                var div = document.getElementById(id);
                                $('#' + id).animate({
                                    scrollTop: div.scrollHeight - div.clientHeight
                                }, 500);    
                            }, 500)
                            
                         }
                }else{
                    //same
                    console.log("Please enter a text!");
                //same
                }
            });
        }
        function getRealTimeUpdate   () {
          
            const Chat_currently_in = sessionStorage.getItem('Chat_Name');   
            const Ref = firestore.collection(Chat_currently_in).doc("Messages");
            //When the page is loaded this method runs.
            if (document.readyState == "complete") {
                Ref.set({
                    Message: "",
                });
            }
            
            Ref.onSnapshot(function (doc){
                
                        Ref.get().then(function(doc) {
                            //Getting some data
                            const NewDates = new Date
                                const Dates = NewDates.getTime()
                            Chat_name = sessionStorage.getItem('Chat_Name');
                            Message = document.getElementById("Chat_input").value
                            WhoIsTheMessageFrom = sessionStorage.getItem('WhoIsTheMessageFrom');
                            let htmlForText = '';
                            const Texts = doc.data();
                            const Display_Name = Texts.Display_Name;
                           
                            if(Texts.Type){
                                
                                firestore.collection("users").doc(user.uid).get().then(function(doc){
                                    const Data = doc.data();
                                    const Profile_bas64 = Data.Profile;
                                    //Sending the message.
                                      htmlForText = '';
                                        if(Texts.WhoIsTheMessageFrom == user.uid){  //Change to user.uid at the end                                     
                                        const htmlForTexth = `
                                        <div class="Go"><img class="inline" src=${Profile_bas64} alt="User Profile"><p class="real_inline">You:</p></div>
                                        <div  id="Message_SendLC1" class="left" style = "height: 15.6vw; width:15.6vw;"><p class="go_to_spot">Just Now</p><p class="Center"><img style="width: 150px; height: 150px;" src="${Texts.ImageSrc}" alt="Profile Picture"></img>
                                        </p> <br></div>
                                        `;
                                        
                                        htmlForText += htmlForTexth
                                        MessageBoxr.innerHTML += htmlForText;
                                        const Message_SendLC1  = document.getElementById("Message_SendLC1");
                                        Message_SendLC1.style.display = "block";
                                       
                                        }else{  
                                            htmlForText = '';
                                           
                                                    firestore.collection('users').doc(Texts.WhoIsTheMessageFrom).get().then(snapshot =>{
                                                        const MoreData = snapshot.data();
                                                        const WSX = MoreData.Display_Name
                                                        const Profile_bas64NY = MoreData.Profile;
                                                        const htmlForTexth = `
                                                        <div class="GoR" "><img class="inline" src=${Profile_bas64NY} alt="User Profile"><p class="inlineR">${WSX}</p></div>
                                                        <div  id="Message_SendRC1" class="right" style = "heigth: 15.6vw; width:15.6vw;"></p><img style="width: 150px; height: 150px;" src="${Texts.ImageSrc}" alt="Profile Picture"></img>
                                                        <br></div> 
                                                    
                                                    `;
                                                        htmlForText += htmlForTexth
                                                    MessageBoxr.innerHTML += htmlForText;
                                                    const Message_SendRC1  = document.getElementById("Message_SendRC1");
                                                    Message_SendRC1.style.display = "block";
                                                    document.getElementById("Chat_input").value = "";
                                                    
                                                    
                                                    
                                            });
                                        }//End of the else statement  
                                    //End of the if statement
                                });//End of the get method
                            }else{
                                firestore.collection("users").doc(user.uid).get().then(function(doc){
                                    const Number_Of_CharactersR= document.getElementById("Chat_input").value;
                                    const Number_Of_Characters = Math.round(Number_Of_CharactersR.length * 30 +  30)/7 + 42;
                                    const Data = doc.data();
                                    const Profile_bas64 = Data.Profile;
                                    //Sending the message.
                                    if(Texts.Message != ""){
                                        htmlForText = ""
                                        console.log(Texts.WhoIsTheMessageFrom)
                                        if(Texts.WhoIsTheMessageFrom == user.uid){
                                        const htmlForTexth = `
                                        <div class="Go"><img class="inline" src=${Profile_bas64} alt="User Profile"><p class="real_inline">You:</p></div>
                                        <div  id="Message_SendLC1" class="left" style = "height: auto; width:auto;"><p class="go_to_spot">Just Now</p><p class="Center">${Texts.Message}
                                        </p><br></div>
                                        `;
                                        htmlForText += htmlForTexth
                                        
                                        MessageBoxr.innerHTML += htmlForText;
                                        const Message_SendLC1  = document.getElementById("Message_SendLC1");
                                        Message_SendLC1.style.display = "block";
                                        
                                        }else{
                                            htmlForText = ""
                                                
                                                        firestore.collection('users').doc(Texts.WhoIsTheMessageFrom).get().then(snapshot =>{
                                                            const moreData =snapshot.data();
                                                            const Profile_bas64Ny = moreData.Profile
                                                           const SDF = moreData.Display_Name
                                                           
                                                            const htmlForTexth = `
                                                            <div class="GoR" "><img class="inline" src=${Profile_bas64Ny} alt="User Profile"><p class="inlineR">${SDF}</p></div>
                                                            <div  id="Message_SendRC1" class="right" ></p style="margin-top:10px;">${Texts.Message}
                                                            <p></div> 
                                                        
                                                        `;
                                                        
                                                            htmlForText += htmlForTexth
                                                        MessageBoxr.innerHTML += htmlForText;
                                                        const Message_SendRC1  = document.getElementById("Message_SendRC1");
                                                        Message_SendRC1.style.display = "block";
                                                        document.getElementById("Chat_input").value = "";
                                                        
                                                        });
                                                   
                                        }//End of the else statement  
                                    }//End of the if statement
                                });//End of the get method  
                            }  
                        });//End of the get method
                        
            });//End of on snapshot
            
            
        }//End of function
        
        function GetAllChats(Chatsin){
            let allthechatsarei = []
           
            let ChatsinArray = Chatsin.split("§");
            let All_The_chats = document.getElementById('All_The_chats');
            let Chat_all = '';
        
            let Chat_currently_in = "";
            const allchatpic = document.getElementById('allchatpic');
            allchatpic.innerHTML = ``
            for (let i = 0; i < ChatsinArray.length - 1; i++) {
                if(ChatsinArray[i] != ""){
                   
                    
                    firestore.collection(ChatsinArray[i]).doc('Chat_Info').get().then(function(snapshot){
                        const Data = snapshot.data();
                        let message = Data.Message;
                        let WhoIsTheMessageFrom= Data.WhoIsTheMessageFrom;
                        let g = Data.Date
                       
                       if(message != undefined &&  WhoIsTheMessageFrom != undefined && g != undefined ){
                        
                        let f = g.split("/")
                        if(message == ""){
                            message = "Image"
                        }
                        
                        let time = f[3] + "/" + f[4] + "/" + f[5]
                        let rf = Data.Display_Name
                        let textiscool = ""
                        
                        if(WhoIsTheMessageFrom.trim() == user.uid){
                            textiscool = "You:"
                        }else{
                           textiscool = rf + ":"
                        }
                        localStorage.setItem("texto", textiscool)
                        
                }else{
                        message = ""
                        textiscool = ""
                        localStorage.setItem("texto", textiscool)
                       }
                       
                        allchatpic.innerHTML += `<img style="width:3.1vw; height:3.1vw; margin-left:20px; margin-right:20px; margin-top:10px; display:inline-block; border-radius:50px;" src="${Data.Image}" alt="Can't load"> `
                        const Chatsin = ` <br><button  id="${ChatsinArray[i]}"class="Inline_vertical"  onclick="JoinChat1(this.id);     " style="margin-left:70px; border:none;   background-color: transparent;"><img style="float: left;  
                          border-radius: 75px; " class="inline" src="${Data.Image}" alt="Can not load"><p style="display:inline; margin-right:710px; text-align: justify;    "> ${ChatsinArray[i]} </p> <br><p style="margin-right:650px;">${localStorage.getItem("texto")}${message}</p> </p>  </button> `;
                          Chat_all+= Chatsin
                          
                          allthechatsarei.push(ChatsinArray[i])
                         
                        All_The_chats.innerHTML = Chat_all; 
                        addtheEventlistener(allthechatsarei)
                        Chat_currently_in +=  "," + ChatsinArray[i];
                        Chat_currently_in.split(",");
                        
                        
                    });
                    
                }
                
                
                document.querySelector("#Bottom").style.display = "none";
                document.getElementById('Plus_Sign').style.display = "inline-block";
            }
            
        }
        
        
        
        
        function Back_button(Chatsin){
            const Back_butto1n = document.getElementById('Back_button');
            Back_butto1n.addEventListener('click', function(e){
            e.preventDefault();
                window.history.go(-1)
            });
        }
        function addtheEventlistener(allthechatsarei){
            
        for (let i = 0; i < allthechatsarei.length; i++) {
           
            document.getElementById(allthechatsarei[i]).addEventListener('click', function(e){
                e.preventDefault()
               
                getRealTimeUpdate()
            })
            
        }
        }
        function CreateChat(Chatsin){
            const CreateChat= document.getElementById('CreateChat');
            const ChatFiles = document.getElementById('CreateChatFile');
                                ChatFiles.addEventListener('change', function(){
                                    const files = this.files[0];
                                    if(files){
                                            const Base64Reader = new  FileReader();
                                            Base64Reader.addEventListener('load', function(){
                                                localStorage.setItem('Chat_Image', this.result)
                                            });
                                            Base64Reader.readAsDataURL(files);   
                                        
                                    }else{
                                        alert("Please pick a chat image")
                                    }

                                    });
                                    function ooop(){
                                        getRealTimeUpdate()
                                    }
            CreateChat.addEventListener('click',function(e){
                e.preventDefault();
                let Chat_Name = document.getElementById('CreateChatFirstName').value;
                if(Chat_Name.length >= 5 && Chat_Name.length <= 30){
                    if(Chat_Name != "users"){
                        sessionStorage.setItem("Chat_Name", Chat_Name);
                        firestore.collection(Chat_Name).doc("Messages").get().then(function(doc){
                            
                            if(doc.exists){
                                document.getElementById("CreateChatFirstName").value = "Chat Already exists"
                            }else{
                                let Time = new Date().getTime();
                                firestore.collection(Chat_Name).doc("Messages").set({
                                    Message: ""
                                });
                                
                                firestore.collection(Chat_Name).doc("Chat_Info").set({
                                    Created: Time,
                                    User_In_Chat: user.email + " ",
                                    IsMessage: true,
                                    Iscall:false,
                                    started:"",
                                    pim:"",
                                    Image: localStorage.getItem('Chat_Image')
                                });
                                
                                
                                
                                
                                ooop()
                                JoinChatData = Chatsin +  Chat_Name + "§"
                                firestore.collection('users').doc(user.uid).update({
                                    Chatsin: JoinChatData
                                });
                                
                                JoinChat1(Chat_Name);
                            }
                        });
                    }else{
                        alert("Invalid Name")
                    }
                }else{
                    alert("Chat Name Should be between 5 to 30 charcters");
                }      
            });
        }
    }else{
        document.getElementById('Chat_Data').style.display ="none";
        User_info.innerHTML = '';
        Sidebar.style.display = "none";
        Side_arrow.style.display = "none";
        document.getElementById('etuy').style.display = "none"
        MessageBoxr.style.display ="none";
        User_info.style.display = "none";
        Whole.style.display = "none";
        Login_button.style.display = "inline";
        SignUpButton.style.display = "inline";
        Welcome.style.display ="inline";
        
        document.getElementById('edsz').style.display = "none";
        document.getElementById('ffg').style.display = "none";
    }
});
const Sign_up_whole = document.querySelector("#signup");
Sign_up_whole.addEventListener('submit',(e)=> {
    e.preventDefault();
   
    //Get the info that the user has inputed.
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#signup-password").value;
    //sign up the user
    
    if(email.length <= 24){
        auth.createUserWithEmailAndPassword(email,password).then(cred=>{
            const Display_Name  =  document.getElementById("signup-first-name").value + " " +  document.getElementById("signup-last-name").value;
            return firestore.collection('users').doc(cred.user.uid).set({
                Username: document.getElementById("signup-email").value,
                password: document.getElementById("signup-password").value,
                Display_Name: Display_Name,
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
                Profile: "Images/cd16e45f-600d-4327-88cc-9d6748277f24_200x200.png"
            });
        }).catch(function(error){
          if(error.message == "The email address is already in use by another account."){
            catchErrorSignup.innerHTML = "The email address is already in use by another account."
          }else if(error.message == "Password should be at least 6 characters"){
            catchErrorSignup.innerHTML = "Password should be at least 6 characters."
          } else{
            catchErrorSignup.innerHTML = error.message
          }
        });
    }else{
        alert("Username can only be 24 charcters or less");
    }
});
//logout user.
const logout = document.getElementById("Logout");
logout.addEventListener('click', (e)=>{
    e.preventDefault;
    auth.signOut();
    sessionStorage.setItem('SignedIn', "false");
    const Take_Picture = document.getElementById('Take_Picture').style.display = "none";
    myVar = setTimeout(function(){ location.reload();  clearTimeout(myVar);}, 2100);
    StuffTOHide.style.display = "none";
    body.backgroundColor = "white";
    Chat_UID.style.display = "none";
    
    
});
//login users in.
const Login_whole = document.querySelector("#login");
Login_whole.addEventListener('submit',(e) =>
{
    
    e.preventDefault;
    //Get the users information.
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;
    auth.signInWithEmailAndPassword(email,password).then(cred =>{
        document.querySelector(".modal-boss-l").style.display = "none";
        document.getElementById("login-email").value = "";
        document.getElementById("login-password").value = "";
        sessionStorage.setItem('SignedIn', "true");
        myVar = setTimeout(function(){ location.reload();  clearTimeout(myVar);}, 1500);
    }).catch(function(error){
        if(error.message == "There is no user record corresponding to this identifier. The user may have been deleted."){
            catchErrorLogin.innerHTML = "Invalid username or password."
        }else{
            catchErrorLogin.innerHTML = error.message;
        }
    });
    
  
    
});