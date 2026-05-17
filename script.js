window.pokazPowitanie = function () {
    var imie = document.getElementById("imie").value;

    document.getElementById("tekst-powitania").innerHTML =
        "Czesc " + imie + "! Witaj na stronie o Japonii.";
};
