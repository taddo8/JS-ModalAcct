var modal = document.getElementById('modalBox');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementById('close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideModal);

function openModal(){
    modal.style.display = 'block';
}
function closeModal(){
    modal.style.display = 'none';
}
function outsideModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}
