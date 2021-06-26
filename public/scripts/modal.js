export default function Modal(){


    const modalWrapper = document.querySelector('.modal-wrapper')
// escuta o click no botão cancelar e fecha a modal
    const cancelButton = document.querySelector(".button.cancel")

    cancelButton.addEventListener('click', close)

        function open(){
            // funcionalidade de atribuir a classe active a modal
            modalWrapper.classList.add("active")
        }

        function close(){
            // funcionalidade de remover a classe active a modal
            modalWrapper.classList.remove("active")
        }
            
    return{
        open,
        close
    }
}