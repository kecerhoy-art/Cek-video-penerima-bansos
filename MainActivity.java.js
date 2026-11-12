WebView webView = findViewById(R.id.webview);
webView.getSettings().setJavaScriptEnabled(true);
webView.getSettings().setMediaPlaybackRequiresUserGesture(false);
webView.setWebChromeClient(new WebChromeClient(){
    @Override
    public void onPermissionRequest(PermissionRequest request) {
        request.grant(request.getResources());
    }
});
webView.loadUrl("https://https://cek-video-penerima-bansos.vercel.app");


