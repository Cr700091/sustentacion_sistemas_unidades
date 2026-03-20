function calcular() {
    let e_util = parseFloat(document.getElementById("e_util").value);
    let e_total = parseFloat(document.getElementById("e_total").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(e_util) || isNaN(e_total)) {
        resultado.innerHTML = "⚠️ Ingresa valores válidos.";
        return;
    }

    if (e_util > e_total) {
        resultado.innerHTML = "❌ La energía útil no puede ser mayor que la total.";
        return;
    }

    if (e_total === 0) {
        resultado.innerHTML = "❌ La energía total no puede ser 0.";
        return;
    }

    let n = (e_util / e_total) * 100;

    resultado.innerHTML = "✅ Eficiencia energética: " + n.toFixed(2) + "%";
}