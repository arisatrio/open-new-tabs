var counter = 0;
function run() {
    var tab = document.getElementById('tab').value;
    var num = parseInt(tab);

    var i = setInterval(function () {

        counter++;
        if (counter === num) {
            clearInterval(i);
        }
        var url = document.getElementById('link').value;
        window.open(url, '_blank').focus();
    }, 1000);

};