let ad = prompt("Adinizi Giriniz!");
let isim = document.querySelector("#myName");



let emoji = `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" class="bi bi-emoji-smile-upside-down" viewBox="0 0 16 16">
<path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0z"/>
<path d="M4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5z"/>
</svg>`

ad == '' || ad == null ? ad = "İsimsiz " + emoji + " " : ad;

isim.innerHTML = ad;

function showTime(){
    let now = new Date();
    let saat = now.getHours();
    let dakika = now.getMinutes();
    let saniye = now.getSeconds();
    let gun = now.getDay();


    if(saat < 10){
        saat = "0" + saat;
    }
    if(dakika < 10){
        dakika = "0" + dakika;
    }
    if(saniye < 10){
        saniye = "0" + saniye; 
    }
    
    switch(gun){
        case 0:
            gun = "Pazar";
            break;
        case 1:
            gun="Pazartesi";
            break;
        case 2:
            gun="Salı";
            break;
        case 3:
            gun="Çarşamba";
            break;
        case 4:
            gun="Perşembe";
            break;
        case 5:
            gun = "Cuma";
            break;
        case 6:
            gun="Cumartesi";
            break;
    }

    if(saniye % 2 == 1){
        document.querySelector('#myClock').classList.replace("renk2","renk1")
    }
    else{
        document.querySelector('#myClock').classList.replace("renk1","renk2")
    }

    let zaman = saat + ":" + dakika + ":" + saniye + " " + gun;
    document.querySelector('#myClock').innerHTML = zaman;
    

}



setInterval(showTime, 1000);

