let deletr = document.querySelector('.outerdialog');
function openDeleter() {
    deletr.style.display = 'block';
}

function closeDeleter() {
    deletr.style.display = 'none';

}

let bar = document.getElementById('bar');

bar.style.width = '0%';
function move() {
    bar.innerHTML = '0%';

    deletr.style.display = 'none';

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