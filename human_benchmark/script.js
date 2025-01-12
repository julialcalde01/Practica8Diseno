document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("benchmark-container");
    const message = document.getElementById("state-message");
  
    let startTime;
    let timeoutId;
  
    function startWaitState() {
      message.textContent = "Espera...";
      container.style.backgroundColor = "#f1c40f";
  
      const delay = Math.random() * 3000 + 2000;
  
      timeoutId = setTimeout(() => {
        startReactionState();
      }, delay);
    }
  
    function startReactionState() {
      message.textContent = "¡Haz clic ahora!";
      container.style.backgroundColor = "red";
      startTime = Date.now();
    }
  
    function showResult(success) {
      clearTimeout(timeoutId);
  
      if (success) {
        const reactionTime = Date.now() - startTime;
        message.textContent = `Tu tiempo de reacción: ${reactionTime} ms`;
        container.style.backgroundColor = "#27ae60";
      } else {
        message.textContent = "¡Demasiado pronto! Haz clic para intentarlo de nuevo.";
        container.style.backgroundColor = "#e74c3c";
      }
    }
  
    container.addEventListener("click", () => {
      if (message.textContent === "Haz clic para empezar") {
        startWaitState();
      } else if (message.textContent === "¡Haz clic ahora!") {
        showResult(true);
      } else if (message.textContent === "Espera...") {
        showResult(false);
      } else {
        message.textContent = "Haz clic para empezar";
        container.style.backgroundColor = "#333";
      }
    });
  });
  