function loginFrame(flag, eventId, backurl) {
    $.XYTipsWindow({
        ___title: "登录",
        ___content: "iframe:" + userStudyofnet + "/Login/PopupLogin?flag=" + flag + "&eventId=" + eventId + "&backurl=" + (backurl == "" ? escape(window.location) : escape(backurl)),
        ___width: "460",
        ___height: "150",
        ___showbg: true,
        ___drag: "___boxTitle"

    });
}