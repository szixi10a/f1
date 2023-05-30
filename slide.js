const pictures = ["img1.png", "img2.png", "img3.png"]
let cunt = 0
function Slide(where){
    if(where=="balra"&&cunt>0){
        document.getElementById("kep").innerHTML = '<img src="' + pictures[cunt-1] + '" alt="" class="w-100"></img>'
        cunt--
    }
    if(where=="jobbra"&&cunt<3){
        document.getElementById("kep").innerHTML = '<img src="' + pictures[cunt+1] + '" alt="" class="w-100"></img>'
        cunt++
    }
}
