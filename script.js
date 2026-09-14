function responder(correta) {
  const resultado = document.getElementById("resultado");

  if (correta) {
    resultado.textContent = "✅ Correto! O transporte fluvial é essencial para transportar pessoas e mercadorias na Amazônia.";
  } else {
    resultado.textContent = "❌ Essa não é a resposta. Tente novamente!";
  }
} 