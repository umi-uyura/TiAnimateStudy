var NavigationWindow = function(args) {
    this.args = args;
};

NavigationWindow.prototype.open = function(params) {
    params = params || {};
    params.displayHomeAsUp = false;
    return this.openWindow(this.args.window, params);
};

NavigationWindow.prototype.close = function(params) {
    return this.closeWindow(this.args.window, params);
};

NavigationWindow.prototype.openWindow = function(window, options) {
    var that = this;
    options = options || {};
    options.swipeBack = "boolean" == typeof options.swipeBack ? options.swipeBack : that.args.swipeBack;
    options.displayHomeAsUp = "boolean" == typeof options.displayHomeAsUp ? options.displayHomeAsUp : that.args.displayHomeAsUp;
    if (true && false !== options.animated) {
        options.activityEnterAnimation = Ti.Android.R.anim.slide_in_left;
        options.activityExitAnimation = Ti.Android.R.anim.slide_out_right;
    }
    false !== options.swipeBack && window.addEventListener("swipe", function(e) {
        "right" === e.direction && that.closeWindow(window, options);
    });
    true && false !== options.displayHomeAsUp && !window.navBarHidden && window.addEventListener("open", function() {
        var activity = window.getActivity();
        if (activity) {
            var actionBar = activity.actionBar;
            if (actionBar) {
                actionBar.displayHomeAsUp = true;
                actionBar.onHomeIconItemSelected = function() {
                    that.closeWindow(window, options);
                };
            }
        }
    });
    return window.open(options);
};

NavigationWindow.prototype.closeWindow = function(window, options) {
    options = options || {};
    if (true && false !== options.animated) {
        options.activityEnterAnimation = Ti.Android.R.anim.slide_in_left;
        options.activityExitAnimation = Ti.Android.R.anim.slide_out_right;
    }
    return window.close(options);
};

exports.createNavigationWindow = function(args) {
    return new NavigationWindow(args);
};