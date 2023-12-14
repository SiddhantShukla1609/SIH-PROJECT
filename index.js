

function showmodal(){
    document.querySelector('.overlay').classList.add('showoverlay')
    document.querySelector('.loginform').classList.add('showloginform')

}
function closemodal(){
    document.querySelector('.overlay').classList.remove('showoverlay')
    document.querySelector('.loginform').classList.remove('showloginform')

}

function backgroundconverter(){
    document.querySelector(".switch").classList.toggle('backgroundconverter')
}