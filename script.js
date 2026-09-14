let pontos = 0;

function responder(botao, correta) {

  const pergunta = botao.closest(".pergunta");

  // Impede responder a mesma pergunta mais de uma vez
  if (pergunta.dataset.respondida === "true") {
    return;
  }

  pergunta.dataset.respondida = "true";

  // Desativa todos os botões dessa pergunta
  const botoes = pergunta.querySelectorAll("button");

  botoes.forEach(function(botao) {
    botao.disabled = true;
  });

  const resultado = pergunta.querySelector(".resultado");

  if (correta) {

    pontos++;

    resultado.textContent = "✅ Correto! Muito bem!";

  } else {

    resultado.textContent = "❌ Resposta incorreta!";

  }

  // Atualiza a pontuação
  document.getElementById("pontuacao").textContent =
    "Pontuação: " + pontos + "/5";
}