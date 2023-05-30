const pictures = ["img1.png", "img2.png", "img3.png"]
const szoveg = ["Leves", "Főétel", "Sütemény"]
const url = ["levesek.html", "foetelek.html", "cookie.html"]
let cunt = 0
function Slide(where){
    if(where=="balra"&&cunt>0){
        document.getElementById("keps").innerHTML = '<img src="' + pictures[cunt-1] + '" id="kep"><div class="top-left">' + szoveg[cunt-1] + '</div><div class="bottom-right"><a href="' + url[cunt-1] + '">Tovább>></a></div>'
        cunt--
    }
    if(where=="jobbra"&&cunt<=3){
        document.getElementById("keps").innerHTML = '<img src="' + pictures[cunt+1] + '" id="kep"><div class="top-left">' + szoveg[cunt+1] + '</div><div class="bottom-right"><a href="' + url[cunt+1] + '">Tovább>></a></div>'
        cunt++
    }
}
