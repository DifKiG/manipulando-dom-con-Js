const btn = document.querySelector("[data-form-btn]");
//Arrow function o funciones anonimas "const createTask = (evento) => {""
const createTask = (evento) => {
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}
//listener
    console.log(btn);
    
    btn.addEventListener("click", createTask );
    
    