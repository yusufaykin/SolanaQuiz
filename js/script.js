let baslik = document.title;
window.onblur = () =>
document.title = "Come Back ...";
window.onfocus = () =>
document.title = baslik;

function getAccount(){
    window.solana.connect
    window.solana.request({method:"connect"})
}