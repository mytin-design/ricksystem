let deletr = document.querySelector('.outerdialog');
function openDeleter() {
    deletr.style.display = 'block';
}

function closeDeleter() {
    deletr.style.display = 'none';
}
function move() {
    deletr.style.display = 'none';
    let bar = document.getElementById('bar');

    var width = 38;

    var id = setInterval(frame, 10);

    function frame() {
        if(width >= 100) {
            clearInterval(id);
        }else {
            width++;
            bar.style.width = width + '%';
            bar.innerHTML = width * 1 + '%';
        }
    }
} 