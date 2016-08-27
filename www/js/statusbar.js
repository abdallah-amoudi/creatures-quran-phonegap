document.addEventListener("deviceready", statusbarAPI, false);

function statusbarAPI() {

    $(function () {
        StatusBar.overlaysWebView(false);
    });

}