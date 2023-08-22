
function b() {
    var x = 10;
    a();
    function a() {
        // var x = 100;
        console.log(x)
    }

}


b();
