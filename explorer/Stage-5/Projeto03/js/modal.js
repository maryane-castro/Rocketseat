export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),
    erroAlert : document.querySelector('.alert'),
    open() {
      this.wrapper.classList.add('open');
    },
    close() {
      this.wrapper.classList.remove('open');
    },
  };
  
Modal.buttonClose.onclick = () => {
    Modal.close();
};


window.addEventListener('keydown', handlwKeydown)
function handlwKeydown(event){
  if (event.key === 'Escape'){
    Modal.close()
  }
}