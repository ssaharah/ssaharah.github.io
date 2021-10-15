auth.onAuthStateChanged(user => {
    if(user){
        const logout = document.getElementById("logout")
        const all = document.getElementById("all")
        const chatstuff = document.getElementById("chatstuff")
        const emojipicker = document.getElementById("emojipicker");
        var inputmessage = document.getElementById("inputmessage");
        var emojipick = new EmojiButton({
            posistion : 'left-top'
        });
        emojipick.on('emoji', function(emoji){
            inputmessage.value += emoji;
        });
        emojipicker.addEventListener('click', function(){
            emojipick.pickerVisible ? emojipick.hidePicker(): emojipick.showPicker(inputmessage)
        });
        logout.addEventListener('click', function(){
            auth.signOut()
        })
        //Notes
        const deletememo = document.getElementById("deletememo");
        const notes = document.getElementById("notes");
        const savememo = document.getElementById("savememo");
        const boldmemo = document.getElementById("boldmemo");
        const italicmemo = document.getElementById("italicmemo");
        let bold;
        let T = 0;
        let italic;
        notes.addEventListener('click', function(){
            const notepad = document.getElementById("notepad");
            boldmemo.addEventListener('click', function(){
                firestore.collection("users").doc(user.uid).get().then(snapshot =>{
                    let data = snapshot.data();
                    if(data.fontWeight == "bold"){
                        notepad.style.fontWeight = "normal";
                        bold = "normal"
                    }else{
                        notepad.style.fontWeight = "bold";
                        bold = "bold" 
                    }
                    firestore.collection("users").doc(user.uid).update({
                        fontWeight: bold
                    })
                })
            });
            italicmemo.addEventListener('click', function(){
                firestore.collection("users").doc(user.uid).get().then(snapshot =>{
                    let data = snapshot.data();
                    if(data.fontWeight == "bold"){
                        notepad.style.fontStyle = "normal";
                        italic = "normal"
                    }else{
                        notepad.style.fontStyle = "italic";
                        italic = "italic"
                    }
                    firestore.collection("users").doc(user.uid).update({
                        fontWeight: bold
                    })
                })
            });
            deletememo.addEventListener('click', function(){
                notepad.value = ""
            });
            savememo.addEventListener('click', function(){
                firestore.collection("users").doc(user.uid).update({
                    Notes: document.getElementById("notepad").value
                })
            });
            notepad.style.display = "block"
            document.getElementById("notestuff").style.display = "block";
            firestore.collection("users").doc(user.uid).get().then(snapshot =>{
                let data = snapshot.data();
                let notes = data.Notes;
                notepad.innerText = notes
                notepad.style.fontWeight = data.fontWeight;
                notepad.style.fontStyle = data.fontStyle;
            });
            setInterval(function(){
                firestore.collection("users").doc(user.uid).update({
                    Notes: document.getElementById("notepad").value
                })
            }, 3000);
        });
        const chat = document.getElementById("chat")
        chat.addEventListener('click', function(){
            chatstuff.style.display = "block";
            document.getElementById("notestuff").style.display = "none"
            document.getElementById("timerstuff").style.display = "none"
        })
       
        notes.addEventListener('click', function(){
            document.getElementById("chatstuff").style.display = "none"
            document.getElementById("notestuff").style.display = "block"
            document.getElementById("timerstuff").style.display = "none"
        })
        const timer = document.getElementById("timer")
        timer.addEventListener('click', function(){
            chatstuff.style.display = "none";
            document.getElementById("notestuff").style.display = "none"
            document.getElementById("timerstuff").style.display = "block"
        })

        //Timer
        const starttimer=document.getElementById("starttimer")
        const canceltimer=document.getElementById("canceltimer")
        const countdown = document.getElementById("timert");
        const inputtime = document.getElementById("inputtime");
        var intervalId;
        var isPaused = false;
        var container = document.getElementsByClassName("inputgh")[0];
        //Get the user input on the timer
        container.onkeyup = function(e) {
            var target = e.srcElement || e.target;
            var maxLength = parseInt(target.attributes["maxlength"].value, 10);
            var myLength = target.value.length;
            if (myLength >= maxLength) {
                var next = target;
                while (next = next.nextElementSibling) {
                    if (next == null)
                        break;
                    if (next.tagName.toLowerCase() === "input") {
                        next.focus();
                        break;
                    }
                }
            }else if (myLength === 0) {
                var previous = target;
                while (previous = previous.previousElementSibling) {
                    if (previous == null)
                        break;
                    if (previous.tagName.toLowerCase() === "input") {
                        previous.focus();
                        break;
                    }
                }
            }
        }
        //End
        canceltimer.addEventListener("click", function(){
            inputtime.style.display = "block";
            countdown.style.display = "none";
            document.getElementById("edre").style.display = "block";
            document.getElementById("eeed").style.display = "block";
            document.getElementById("pausetimer").style.display = "none";
            document.getElementById("starttimer").style.display = "inline-block";
            document.getElementById("inputtimehour").value = ""
            document.getElementById("inputtimeminute").value = ""
            document.getElementById("inputtimesecond").value = ""
            clearInterval(intervalId)  
        });

        document.getElementById("pausetimer").addEventListener("click", function(){
            if(document.getElementById("pausetimer").innerText == "Pause"){
                document.getElementById("pausetimer").innerText = "Unpause"
                isPaused = true
            }else{
                isPaused = false
                document.getElementById("pausetimer").innerText = "Pause"
            }
        })

        starttimer.addEventListener("click", function(){
            if(inputtime.value == ""){
                inputtime.style.border = "1px solid red"
            }else{
                document.getElementById("edre").style.display = "none"
                document.getElementById("eeed").style.display = "none"
                document.getElementById("timerbutton").style.display = "block"
                document.getElementById("pausetimer").style.display = "inline-block";
                document.getElementById("starttimer").style.display = "none";
                countdown.style.display = "block";
                times = 0
                if(intervalId){
                    clearInterval(intervalId)
                }
                var totalhours = document.getElementById("inputtimehour").value * 3600 
                
                var totalminutes = document.getElementById("inputtimeminute").value * 60 
                
                var totalseconds = document.getElementById("inputtimesecond").value * 1
                var totalseconds = totalhours + totalminutes + totalseconds
                intervalId =  setInterval(function() {
                    UpdateCo(totalseconds)
                }, 1000);
            }
        });
        function UpdateCo(totalseconds){
            if(isPaused == false){
                
                if(totalseconds - times <= 0){
                    countdown.innerHTML = `Times Up`;
                    return;
                }else{
                    var timeleft = totalseconds - times;
                    var hours = Math.floor((timeleft/3600))
                    var hourss = timeleft - hours*3600
                    var minutes = Math.floor((hourss /60));
                    var secondss = hourss - minutes * 60
                    var seconds = Math.floor((secondss));
                    if(seconds < 10){
                        seconds = "0" + seconds
                    }
                    if(minutes < 10){
                        minutes = "0" + minutes
                    }
                    countdown.innerHTML = `${hours + "h"} ${minutes + "m"} ${seconds + "s"}`  
                    times += 1
                }   
            }
            }
            
    }
})
