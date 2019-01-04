const relogio = ()=>{
    var data = new Date();
    var hrs = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    if (hrs < 10) {
        hrs = "0"+hrs;
    }
    if (min < 10) {
        min = "0"+min;
    }
    if (seg < 10) {
        seg = "0"+seg;
    }

    var horaF = hora_formatada(hrs, min, seg);
    document.getElementById("rel").value = horaF;
};

const hora_formatada = (hrs, min, seg) => hrs+":"+min+":"+seg;

const tempo = setInterval(relogio, 1000);