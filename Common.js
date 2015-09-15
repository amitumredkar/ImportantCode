document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        $("#loadingDivPost").hide();
    }
}
$(window).bind("beforeunload", function (e) {    
    ShowWaitingPostDiv();
});

function ShowWaitingPostDiv() {
    $("#loadingDivPost").css({
        position: "absolute",
        left: 0,
        top: 0,
        width: $(document).width(),
        height: $(document).height()
    });
    $("#centerDivPostImg").css({
        position: "absolute",
        left: $(window).scrollLeft(),
        top: $(window).scrollTop(),
        width: $(window).width(),
        height: $(window).height()
    });
    $("#loadingDivPost").show();
}
function ShowWaitingDiv() {   
    $("#loadingDiv").css({
        position: "absolute",
        left: $(window).scrollLeft(),
        top: $(window).scrollTop(),
        width: $(window).width(),
        height: $(window).height()
    });
    
    $("#loadingDiv").show();
}

$.ajaxSetup({
    beforeSend: function () {
        ShowWaitingDiv();
    }
});
$(document).ajaxComplete(function (e, xhr, o) { $("#loadingDiv").hide(); });

//--------SET Timer For loading Icon functions ---------
function SetExcelTimerLoadingStatus() {
    window.setInterval("CheckExcelLoadingStatus()", 1000);
}

function CheckExcelLoadingStatus() {
    if (document.readyState == 'complete' || document.readyState == "interactive") {
        $("#loadingDivPost").hide();
    }
}

//-----------------------------------------UI--------------------------------------------
<div id="loadingDivPost">
        <div style="filter: alpha(opacity=20); -moz-opacity: 0.2; opacity: 0.2;  width: 100%;height: 100%;background-color: #999988;position: absolute;top: 0px;left: 0px; z-index: 9999;"></div>
        <div id="centerDivPostImg" style="width: 100%;height: 100%; position: absolute;top: 0px;left: 0px;z-index: 9999;">
            <table style="width:100%;height:100%;">
                <tr>
                    <td align="center" valign="middle">
                        <img id="waiting" alt="" src='@Url.Content("~/Content/images/loading1.gif")' />
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div id="loadingDiv" style="display: none;position: absolute;width: 100%;height: 100%; position: absolute; top: 0px;left: 0px;z-index: 9999;">
        <table style="width:100%;height:100%;">
            <tr>
                <td align="center" valign="middle">
                    <img id="waitimg" alt="" src='@Url.Content("~/Content/images/loading1.gif")' />
                </td>
            </tr>
        </table>
    </div>
