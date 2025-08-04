function cekJawaban() {
    let skor = 0;

    let jawaban1 = document.getElementById("jawaban1").value;
    if (jawaban1.toLowerCase() === "jakarta") {
    skor++;
    }

    let jawaban2 = document.getElementById("jawaban2").value;
    if (jawaban2 === "8") {
    skor++;
    }

    document.getElementById("hasil").innerText = "Skor kamu: " + skor + "/10";
}
