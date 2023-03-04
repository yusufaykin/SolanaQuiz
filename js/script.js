let baslik = document.title;
window.onblur = () =>
document.title = "Come Back ...";
window.onfocus = () =>
document.title = baslik;