
    function ohioFunction() {
                var user = document.getElementById("a").value;
                var pass= document.getElementById("c").value;

                if(user === "Krishang-isn't-cool" && pass === "Carrots-gasoline-fire") {
                    alert("correct")
                   window.location.href="Ultimate.html";
                }
                else{
                    alert("Recorded");
                }
            }
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
    });
    document.addEventListener('contextmenu', event => event.preventDefault());
