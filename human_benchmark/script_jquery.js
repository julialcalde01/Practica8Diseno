$(document).ready(function () {
    const $container = $("#benchmark-container");
    const $message = $("#state-message");
  
    let startTime;
    let timeoutId;
  
    function startWaitState() {
      $message.text("Espera...");
      $container.css("background-color", "#f1c40f");
  
      const delay = Math.random() * 3000 + 2000;
  
      timeoutId = setTimeout(() => {
        startReactionState();
      }, delay);
    }
  
    function startReactionState() {
      $message.text("¡Haz clic ahora!");
      $container.css("background-color", "red");
      startTime = Date.now();
    }
  
    function showResult(success) {
      clearTimeout(timeoutId);
  
      if (success) {
        const reactionTime = Date.now() - startTime;
        $message.text(`Tu tiempo de reacción: ${reactionTime} ms`);
        $container.css("background-color", "#27ae60");
      } else {
        $message.text("¡Demasiado pronto! Haz clic para intentarlo de nuevo.");
        $container.css("background-color", "#e74c3c");
      }
    }
  
    $container.on("click", function () {
      if ($message.text() === "Haz clic para empezar") {
        startWaitState();
      } else if ($message.text() === "¡Haz clic ahora!") {
        showResult(true);
      } else if ($message.text() === "Espera...") {
        showResult(false);
      } else {
        $message.text("Haz clic para empezar");
        $container.css("background-color", "#333");
      }
    });
  });
  