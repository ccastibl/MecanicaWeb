// ---- DIAGNÓSTICO ----
var btnDiagnosticar = document.getElementById("btnDiagnosticar");
if (btnDiagnosticar) {
  btnDiagnosticar.addEventListener("click", function() {
    var sintomas = [];
    if (document.getElementById("s1").checked) sintomas.push("La moto no enciende");
    if (document.getElementById("s2").checked) sintomas.push("Sale humo excesivo");
    if (document.getElementById("s3").checked) sintomas.push("Ruido extraño al frenar");
    if (document.getElementById("s4").checked) sintomas.push("Pierde potencia");
    if (document.getElementById("s5").checked) sintomas.push("Se recalienta el motor");

    if (sintomas.length === 0) {
      alert("Selecciona al menos un síntoma.");
      return;
    }

    var mensaje = "Síntomas seleccionados:\n";
    for (var i = 0; i < sintomas.length; i++) {
      mensaje += "- " + sintomas[i] + "\n";
    }
    mensaje += "\nPosible causa: revisar batería, bujía y sistema eléctrico.";
    alert(mensaje);
  });
}

// ---- MANTENIMIENTO ----
var btnCalcular = document.getElementById("btnCalcular");
if (btnCalcular) {
  btnCalcular.addEventListener("click", function() {
    var km = parseInt(document.getElementById("km").value);
    var kmAceite = parseInt(document.getElementById("km-aceite").value);

    if (!km || !kmAceite) {
      alert("Por favor ingresa todos los datos.");
      return;
    }

    var diferencia = km - kmAceite;
    var mensaje = "Resumen de mantenimiento:\n\n";

    if (diferencia >= 3000) {
      mensaje += "- Cambio de aceite: VENCIDO\n";
    } else {
      mensaje += "- Cambio de aceite: faltan " + (3000 - diferencia) + " km\n";
    }

    alert(mensaje);
  });
}

// ---- GUÍA ----
var btnGuia = document.getElementById("btnGuia");
if (btnGuia) {
  btnGuia.addEventListener("click", function() {
    var seleccion = document.getElementById("guia-select").value;

    if (!seleccion) {
      alert("Selecciona una guía.");
      return;
    }

    var guias = {
      aceite: "Cambio de aceite:\n1. Calienta el motor 3 minutos.\n2. Drena el aceite viejo.\n3. Cambia el filtro.\n4. Agrega aceite nuevo.",
      cadena: "Tensión de cadena:\n1. Afloja la tuerca del eje.\n2. Ajusta los tensores.\n3. Verifica la alineación.\n4. Aprieta la tuerca.",
      llantas: "Revisión de llantas:\n1. Mide la presión en frío.\n2. Ajusta según el manual.\n3. Revisa el labrado y cortes."
    };

    alert(guias[seleccion]);
  });
}

// ---- CHECKLIST ----
var btnChecklist = document.getElementById("btnChecklist");
if (btnChecklist) {
  btnChecklist.addEventListener("click", function() {
    var total = 8;
    var marcados = 0;

    for (var i = 1; i <= total; i++) {
      if (document.getElementById("c" + i).checked) marcados++;
    }

    var mensaje = "Revisaste " + marcados + " de " + total + " ítems.\n\n";

    if (marcados === total) {
      mensaje += "¡Moto lista para salir!";
    } else {
      mensaje += "Faltan " + (total - marcados) + " ítems por revisar.";
    }

    alert(mensaje);
  });
}