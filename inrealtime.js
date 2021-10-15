auth.onAuthStateChanged(user => {
    if(user){
        localStorage.setItem("cth", "xs")
        localStorage.setItem("user", user.uid)
        let info = localStorage.getItem("cth")
        const Ref = firestore.collection(info.trim()).doc("Messages");
        Ref.onSnapshot(function(doc){
            const data  = doc.data();
            if(data.WhoIsTheMessageFrom != user.uid){
                firestore.collection("users").doc(data.WhoIsTheMessageFrom).get().then(snapshot =>{
                    const thedata = snapshot.data()
                    messageadd(thedata.Profile, data.Message,  data.WhoIsTheMessageFrom, user.uid, data.Message, data.ImageSrc)
                });
            }
        });
    }
})