 function maineFunction() {
        var username = document.getElementById("username6").value;
        var pass = document.getElementById("password13").value;

        
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
     else if(username === "hello83" && pass === "PeteZah") {
            alert("Really?");
            window.location.href="hello3.html";
    });
    document.addEventListener('contextmenu', event => event.preventDefault());
