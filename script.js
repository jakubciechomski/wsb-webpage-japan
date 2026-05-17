window.pokazPowitanie = function () {
    var imie = document.getElementById("imie").value;

    document.getElementById("tekst-powitania").innerHTML =
        "Konnichiwa " + imie + "! Nihon no peji e youkoso.";
};
