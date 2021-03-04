
const Sign_Up= document.querySelector("#Signup");
    Sign_Up.addEventListener('click',function(){
        
        document.querySelector(".modal-boss-s").style.display = "flex"
        document.querySelector(".modal-boss-s").style.position = "fixed";
});
const Closes= document.querySelector("#modal-boss-sc");
    Closes.addEventListener('click',function(){
        
        document.querySelector(".modal-boss-s").style.display = "none"
});

const addfriendcloseU = document.getElementById('addfriendcloseU');
addfriendcloseU.addEventListener('click', function(){
    document.getElementById('addfriendU').style.display = "none";
    
})
const Closel= document.querySelector("#modal-boss-lc");
    Closel.addEventListener('click',function(){
        document.querySelector(".modal-boss-l").style.display = "none"
});
const Login= document.querySelector("#Login");
    Login.addEventListener('click',function(){
        document.querySelector(".modal-boss-l").style.display = "flex"
        document.querySelector(".modal-boss-l").style.position = "fixed";
});
const Plus_button = document.getElementById("Plus_Sign");
Plus_button.addEventListener('click', function(){
    document.getElementById("Back_buttonModal").style.display = "flex"
    document.querySelector("#Back_buttonModal").style.position = "fixed";
});
const CloseBackButton = document.getElementById("CloseBack_button");
CloseBackButton.addEventListener('click',function(){
    document.getElementById("Back_buttonModal").style.display = "none";
});
const Submit = document.getElementById('CreateChat');
Submit.addEventListener('submit', function(){
    if(document.getElementById('CreateChatFirstName') != ""){
        document.getElementById('Back_buttonModal').style.display = "none";
    }
});
const CloseInviteFriend = document.getElementById('CloseInviteFriend');
CloseInviteFriend.addEventListener('click', function(){
    document.getElementById('InviteFriendModal').style.display = "none";
});

const Add_UserToChat = document.getElementById('Add_User');
Add_UserToChat.addEventListener('click', function(){
    document.getElementById('InviteFriendModal').style.display = "flex";
    document.querySelector("#InviteFriendModal").style.position = "fixed";
    
});
const CloseProfilePicture = document.getElementById('CloseProfilePicture');
CloseProfilePicture.addEventListener('click', function(){
    document.getElementById('ProfilePictureModal').style.display = "none";
});
const TakeAProfielPicture = document.getElementById('TakeAProfielPicture');
TakeAProfielPicture.addEventListener('click', function(){
    window.open("Take_Picture.html")
});

const CloseProfilePictureU = document.getElementById('CloseProfilePictureU');
CloseProfilePictureU.addEventListener('click',function(){
    document.getElementById('ProfilePictureModalU').style.display = "none";
});

const CloseAddU = document.getElementById('CloseAddPicture');
CloseAddU.addEventListener('click', function(){
    document.getElementById('AddPictureModal').style.display = "none";
});
const CloseAddUU = document.getElementById('CloseAddU');
CloseAddUU.addEventListener('click', function(){
    document.getElementById('AddModalU').style.display = "none";
});


   

