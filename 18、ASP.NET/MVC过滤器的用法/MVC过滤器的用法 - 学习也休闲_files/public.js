function headTabChange(tabID) {
    var oItem = document.getElementById("topwarp").getElementsByTagName("li");
    for (var i = 0; i < oItem.length; i++) {
        var k = oItem[i];
        k.className = "";
    }
    document.getElementById(tabID).className = "selected";
}

(function ($) {
    $(document).ready(function () {
        $("#downTab").aspxtabs({ focusClass: "now" });
        $("#updateTab").aspxtabs({ focusClass: "now" });
        $("#linkFilter").click(function () {
            var b = document.getElementById("filterBody");
            if (b.style.display == "") {
                b.style.display = "none";
                $("#linkFilter").text("+  展开");
            } else {
                b.style.display = "";
                $("#linkFilter").text("-  折起");
            }

            setCookie("code_list_filter", b.style.display == "" ? "show" : "hide");
        });
    });
})(jQuery);

(function ($) { $.extend($.fn, { aspxtabs: function (settings) { var args = $.extend({ focusClass: "focus" }, settings); var tabs = $(this).find("ul").first().children("li"); var $currentPanel = null; var $currentTab = null; tabs.each(function (index) { if (index == 0) { $currentTab = $(this); $currentTab.addClass(args.focusClass); $currentPanel = $("#" + $(this).attr("panel")); $currentPanel.show(); } else { $("#" + $(this).attr("panel")).hide(); } $(this).hover(function () { if ($(this).attr("panel") != $currentPanel.attr("id")) { $currentTab.removeClass(args.focusClass); $currentTab = $(this); $currentTab.addClass(args.focusClass); $currentPanel.hide(); $currentPanel = $("#" + $(this).attr("panel")); $currentPanel.show(); } }); }); } }); })(jQuery);

function createCookie(c, d, f, e) {
    var e = (e) ? e : "/";
    if (f) {
        var b = new Date();
        b.setTime(b.getTime() + (f * 24 * 60 * 60 * 1000));
        var a = "; expires=" + b.toGMTString()
    } else {
        var a = ""
    }
    document.cookie = c + "=" + d + a + "; path=" + e
}
function readCookie(b) {
    var e = b + "=";
    var a = document.cookie.split(";");
    for (var d = 0; d < a.length; d++) {
        var f = a[d];
        while (f.charAt(0) == " ") {
            f = f.substring(1, f.length)
        }
        if (f.indexOf(e) == 0) {
            return f.substring(e.length, f.length)
        }
    }
    return null
}



function addFav(myurl,title) {// 加入收藏  
    if (document.all) {
        window.external.addFavorite(myurl, title);
    }
    else if (window.sidebar) {
        window.sidebar.addPanel(title, myurl, "");
    }
}
function setHomepage(myurl) { // 设为首页  
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(myurl);
    }
    else if (window.sidebar) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            catch (e) {
                alert("该操作被浏览器拒绝，假如想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true");
            }
        }
        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
        prefs.setCharPref('browser.startup.homepage', myurl);
    }
} 

function isemail(email) {
    email = email.toLowerCase();
    if (new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(email) == false)
        return false
    else
        return true;
}

function keydownEvent(objId) {
    document.onkeydown = kp;
    function kp(e) {
        e = window.event || e;
        var k = e.keyCode || e.which;
        if (k == 13) {
            document.getElementById(objId).onclick();
        }
    }
}
