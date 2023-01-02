let homescore = 0
let resultElHome = document.getElementById("result-el-home")

function home_one() {
    homescore = homescore+1
    resultElHome.textContent = homescore
}

function home_two() {
    homescore = homescore+2
    resultElHome.textContent = homescore
}

function home_three() {
    homescore = homescore+3
    resultElHome.textContent = homescore
}


function home_reset() {
    resultElHome.textContent = 0 
    homescore =0
}




let guestscore =0
let resultElGuest = document.getElementById("result-el-guest")

function guest_one() {
    guestscore = guestscore+1
    resultElGuest.textContent = guestscore
}

function guest_two() {
    guestscore = guestscore+2
    resultElGuest.textContent = guestscore
}

function guest_three() {
    guestscore = guestscore+3
    resultElGuest.textContent = guestscore
}


function guest_reset() {
    resultElGuest.textContent = 0 
    guestscore =0
}
