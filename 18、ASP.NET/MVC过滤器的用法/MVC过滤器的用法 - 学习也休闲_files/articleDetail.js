function AddUsefullArticle(articleId) {
    var oldUsefullCount = $("#ddUsefullCount")[0].innerHTML;
    $.ajax({
        type: "POST",
        url: "/ajax/AddUsefullArticle",
        data: { articleId: articleId },
        success: function (result) {
            result = eval("("+result+")");
            alert(result.msg);
            if (result.status == "ok") {
                $("#ddUsefullCount")[0].innerHTML = parseInt(oldUsefullCount) + 1;
            }
        }
    });
}
function scpopup(articleId) {
    $.ajax({
        type: "POST",
        url: "/ajax/AddFavoriteArticle",
        data: { articleId: articleId },
        success: function (result) {
            result = eval("(" + result + ")");
            switch (result.status) {
                case "nologin":
                    loginFrame(1, "articleSupport", "");
                    break;
                case "error":
                    alert(result.msg);
                    break;
                case "ok":
                    alert(result.msg);
                    var oldFavoriteCount = $("#ddFavoriteCount")[0].innerHTML;
                    $("#ddFavoriteCount")[0].innerHTML = parseInt(oldFavoriteCount) + 1;
                    break;
            }
        }
    });
};
function initCopyCode()
{
$(".spanCopyCode").each(function () {
        var id = $(this).attr("id");
        id=id.replace("copy","");
        var velement = document.getElementById(id);
        var copyText = "";
        if (window.clipboardData) {
            $("#copy" + id).bind("click", function () {
                copyText = velement.innerText;
                copyText = copyText.replace(/\.\.\./g, "");
                window.clipboardData.setData("Text", copyText);
                alert("代码复制成功！");
            });
        }
        else {
            copyText = $("#" + id).text();
            copyText = copyText.replace(/\.\.\./g, "");
            var clip = new ZeroClipboard.Client();
            clip.setHandCursor(true);
            clip.setText(copyText);
            clip.addEventListener('complete', function (client, text) {
                alert("代码复制成功!");
            });
            clip.glue("copy" + id);
        }
    });
}