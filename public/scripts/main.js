import Modal from './modal.js'

const modal = Modal();

// Pega os atributos da Modal que irão mudar
const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

// Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

// escuta o click no marcar como lida e abre a modal
checkButtons.forEach(button => {
    button.addEventListener('click', handleClick)
})

// escuta o click no deletar e abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})


// função que muda modal conforme o lugar que clica
function handleClick(event, check = true){

    event.preventDefault()

    const text = check ? "Marcar como lida" : "Excluir"
    //variáveis do form
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML= text;
    modalDescription.innerHTML= `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML= `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}