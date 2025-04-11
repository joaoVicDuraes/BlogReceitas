document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-contato"); 
  form.setAttribute("action", "#");
  const feedback = document.querySelector("#feedback");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();
  
    if (!nome || !email || !mensagem) {
      feedback.textContent = "Por favor, preencha todos os campos.";
      feedback.style.color = "yellow";
      return;
    }
  
   const emailVerificar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
   
    if (!emailVerificar.test(email)) {
      feedback.textContent = "Digite um e-mail válido.";
      feedback.style.color = "yellow";
      return;
  }
  
    feedback.textContent = "Mensagem enviada com sucesso!";
    feedback.style.color = "lightgreen";
  });
});




