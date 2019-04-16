window.onbeforeinstallprompt=function(evevt){
    console.log(evevt)
    e.preventDefault()
    return false;
}
self.addEventListener('beforeinstallprompt', function (e) {
    console.log(e)
    d=e;
    console.log(d)
    e.preventDefault()
    return false;
});