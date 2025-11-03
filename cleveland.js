 function maineFunction() {
        var username = document.getElementById("username6").value;
        var pass = document.getElementById("password13").value;

        if(username === "PolyTrack" && pass === "What-The-Dog-Doin") {
            alert("Huh 2");
            window.location.href = "Retro.html";
            
        } else if(username === "TinyFishing" && pass === "Html-is-cool" ) {
            alert("Huh huh huh 3");
            window.location.href="Fishing.html";
            
        }
        else if(username === "MonkeyMan" && pass === "Full-Stack-better" ) {
            alert("Monki");
            window.location.href="Monkey.html";
            
        }
        else if(username === "Waitwhat" && pass === "Hello-World-Ahh") {
            alert("WhatWait")
            window.location.href="Waitwhat.html"
        }
        else if(username === "Man-what" && pass === "Python-more-popular") {
            alert("Really man?")
            window.location.href="Man-what.html"
        }
         else {
            alert("Nice Try");
        }
    }
    setInterval(() => {
        console.clear();
    }, 1000);
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
    });
    document.addEventListener('contextmenu', event => event.preventDefault());
