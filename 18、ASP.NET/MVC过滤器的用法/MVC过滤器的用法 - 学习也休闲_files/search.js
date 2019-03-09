function startsearch(field, e)
{
    var keystr = field;
    if (keystr == "" || keystr == "请输入关键字")
    {
        alert("请输入要搜索的关键字！");
        return false;
    }
    else if (keystr.length > 30)
    {
        alert("搜索的关键字不能大于30字符！");
        return false;
    }
    var url = "http://search.studyofnet.com/news?wd=" + encodeURI(keystr.replace("<", "").replace(">", "")).toLowerCase()+"&lg=1";
    window.location.href = url;
    if (window.event)
    {
        window.event.returnValue = false;
    }
    else e.preventDefault();
}

function checkswd(e)
{
    var field = document.getElementById("wd").value;
    var eve = e || window.event;
    if (field == "" && eve.keyCode == 13)
    {
        alert("请输入需要搜索的关键字！");
        return false;
    }
    else if (eve.keyCode == 13)
    {
        startsearch(field);
        return false;
    }
}

function checkbottomsearch(e, field)
{
    var eve = e || window.event;
    if (field == "" && eve.keyCode == 13)
    {
        alert("请输入搜索内容！");
        return false;
    }
    else if (eve.keyCode == 13)
    {
        startsearch(field);
        return false;
    }
}

function getSearchDropDown()
{
    $(function ()
    {
        $('#wd').autocomplete("http://search.studyofnet.com/ajax/getSearchTip?r=" + Math.random(),
        {
            dataType: "jsonp",
            max: 10,    //列表里的条目数
            minChars: 1,    //自动完成激活之前填入的最小字符
            width: 400,     //提示的宽度，溢出隐藏
            scrollHeight: 300,   //提示的高度，溢出显示滚动条
            selectFirst: 0,   //在用户键入tab或return键时下拉列表的第一个值是否被自动选择
            parse: function (data)
            {
                return $.map(eval(data), function (row)
                {
                    var strnickname = row.kindname.replace(/<\/?[^>]*>/g, '');
                    strnickname = strnickname.replace(/&nbsp;/ig, '');
                    return { data: row, value: strnickname, result: strnickname }
                });
            },
            formatItem: function (data, i, total)
            {
                return data.kindname;
            }
        }).flushCache().result(function (event, row, formatted)
        {
            var strnickname = row.kindname.replace(/<\/?[^>]*>/g, '');
            strnickname = strnickname.replace(/&nbsp;/ig, '');
            startsearch(strnickname);
        });
    });
}
$(document).ready(function ()
{
    getSearchDropDown();
});
