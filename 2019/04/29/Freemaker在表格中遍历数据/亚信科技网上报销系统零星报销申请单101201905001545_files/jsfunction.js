/*
trim
*/
String.prototype.Trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.LTrim = function () {
    return this.replace(/(^\s*)/g, "");
}
String.prototype.RTrim = function () {
    return this.replace(/(\s*$)/g, "");
}


function ShowNewWindow(url, width, height, scrollbars, resizable) {
    var top = (window.screen.availHeight - height) / 2;
    var left = (window.screen.availWidth - width) / 2;
    var win = window.open(url, "_blank","aisseNewWindow", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left + ",Status=no,toolbar=no,menubar=no,location=no,scrollbars=" + scrollbars + ",resizable=" + resizable + "");
    try {
        win.focus();
    }
    catch (e)
    { }
}

/*
在屏幕中央打开窗体
*/

function ShowCenterWindow(url, width, height, scrollbars, resizable) {
    var top = (window.screen.availHeight - height) / 2;
    var left = (window.screen.availWidth - width) / 2;
    var win = window.open(url, "aisseNewWindow", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left + ",Status=no,toolbar=no,menubar=no,location=no,scrollbars=" + scrollbars + ",resizable=" + resizable + "");
    try {
        win.focus();
        return win;
    }
    catch (e)
    { }
}

/*在屏幕中间位置打开页面*/
function ShowNoScrollWindow(url, width, height) {
    var top = (window.screen.availHeight - height) / 2;
    var left = (window.screen.availWidth - width) / 2;
    var win = window.open(url, "", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left + ",Status=no,toolbar=no,menubar=no,location=no,scrollbars=no,resizable=no");
    win.focus();
}

/*
在屏幕中间位置打开页面
可以指定是否可以控制大小
*/
function ShowNoScrollResizableWindow(url, width, height, resizable) {
    var top = (window.screen.availHeight - height) / 2;
    var left = (window.screen.availWidth - width) / 2;
    if (resizable == 'yes') {
        var win = window.open(url, "", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left + ",Status=no,toolbar=no,menubar=no,location=no,scrollbars=no,resizable=yes");
        win.focus();
    }
    else
        ShowNoScrollWindow(url, width, height);
}



/*
在屏幕中间位置打开页面
始终打开一个窗体
*/
function ShowNoScrollOneWindow(url, width, height) {
    var top = (window.screen.availHeight - height) / 2;
    var left = (window.screen.availWidth - width) / 2;
    var win = window.open(url, "JustOneWindow", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left + ",Status=no,toolbar=no,menubar=no,location=no,scrollbars=no,resizable=no");
    win.focus();
}


/*在屏幕中间位置打开页面*/
function ShowWindow(url, width, height) {
    var top = (window.screen.availHeight - height) / 2;
    var left = (window.screen.availWidth - width) / 2;
    var win = window.open(url, "", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left + ",Status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no");
    win.focus();
}

/*
在屏幕中间位置打开页面
*/
function ShowOneWindow(url, width, height) {
    var top = (window.screen.availHeight - height) / 2;
    var left = (window.screen.availWidth - width) / 2;
    var win = window.open(url, "JustOneWindow", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left + ",Status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no");
    win.focus();
}


/*在屏幕中间位置打开页面*/
function ShowScrollResizeWindow(url, width, height) {
    var top = (window.screen.availHeight - height) / 2;
    var left = (window.screen.availWidth - width) / 2;
    var win = window.open(url, "", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left + ",Status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
    win.focus();
}

function SetShutOut(imgUrl) {
    var shut = window.document.getElementById("shutout");
    if (shut) {
        shut.style.display = "block";
    }
    else {
        var innerHTML = "<div class='bg' id='shutout'><iframe id ='iframeDivID' class='iframeDiv'></iframe></div>"
        var content = "<div id ='content' style='z-index:201'><img src='" + imgUrl + "'/></div>";
        window.document.body.insertAdjacentHTML("beforeEnd", innerHTML);
        window.document.body.insertAdjacentHTML("beforeEnd", content);
        window.document.body.style.position = "relative";

        var shut = window.document.getElementById("shutout");
        var w = window.document.body.offsetWidth > window.document.body.scrollWidth ? window.document.body.offsetWidth : window.document.body.scrollWidth;
        var h = window.document.body.offsetHeight > window.document.body.scrollHeight ? window.document.body.offsetHeight : window.document.body.scrollHeight;
        shut.style.width = w;
        shut.style.height = h;

        var iframeDiv = window.document.getElementById("iframeDivID");
        iframeDiv.style.width = w;
        iframeDiv.style.height = h;

        var content = window.document.getElementById("content");
        content.style.position = "absolute";
        //content.style.left = window.document.body.offsetWidth/2;
        //content.style.top = window.document.body.offsetHeight/2;

        content.style.top = h / 4;
        content.style.left = w / 2 - 50;
    }
}

function HiddenShutOut() {
    var shut = window.document.getElementById("shutout");

    if (shut)
        shut.style.display = "none";
}





/*	LTrim(string):去除左边的空格

==================================================================

*/

function LTrim(str) {

    var whitespace = new String(" \t\n\r");

    var s = new String(str);



    if (whitespace.indexOf(s.charAt(0)) != -1) {

        var j = 0, i = s.length;

        while (j < i && whitespace.indexOf(s.charAt(j)) != -1) {

            j++;

        }

        s = s.substring(j, i);

    }

    return s;

}



/*

==================================================================

RTrim(string):去除右边的空格

==================================================================

*/

function RTrim(str) {

    var whitespace = new String(" \t\n\r");

    var s = new String(str);



    if (whitespace.indexOf(s.charAt(s.length - 1)) != -1) {

        var i = s.length - 1;

        while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1) {

            i--;

        }

        s = s.substring(0, i + 1);

    }

    return s;

}



/*

==================================================================

Trim(string):去除前后空格

==================================================================

*/

function Trim(str) {

    return RTrim(LTrim(str));

}



//检查输入的是否是日期
function CheckDate(theObj) {
    if (theObj == null)
        return true;
    if (Trim(theObj.value) == "") {
        return true;
    }

    var inPutValue = Trim(theObj.value).split(" ");

    var theValue = inPutValue[0];

    var theData = theValue.split("-");

    if (theData.length != 3) {
        return false;
    }

    // Check is number
    if (isNaN(theData[0]) || isNaN(theData[1]) || isNaN(theData[2])) {
        return false;
    }
    if (theData[0] == '' || theData[1] == '' || theData[2] == '') {
        return false;
    }
    if (theData[0] == null || theData[1] == null || theData[2] == null) {
        return false;
    }
    // Check Year
    var year = parseInt(theData[0], 10);
    if (year < 1900 || year > 9999) {
        return false;
    }

    // Check Month
    var month = parseInt(theData[1], 10);
    if (month < 1 || month > 12) {
        return false;
    }

    // Check day
    var dayLength = 0;
    switch (month) {
        case 2:
            if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
                dayLength = 29;
            }
            else {
                dayLength = 28;
            }
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dayLength = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dayLength = 30;
            break;
    }
    var day = parseInt(theData[2], 10);
    if (day < 1 || day > dayLength) {
        return false;
    }

    var theTime;

    var inPutLength = inPutValue.length;

    if (inPutLength > 1) {
        theTime = inPutValue[inPutLength - 1].split(":");

        if (isNaN(theTime[0]) || isNaN(theTime[1]) || isNaN(theTime[2])) {
            return false;
        }
        if (theTime[0] == '' || theTime[1] == '' || theTime[2] == '') {
            return false;
        }
        if (theTime[0] == null || theTime[1] == null || theTime[2] == null) {

            return false;
        }

        var h = parseInt(theTime[0], 10);

        if (h < 0 || h >= 24) {
            return false;
        }

        var m = parseInt(theTime[1], 10);
        if (m < 0 || m >= 60) {
            return false;
        }

        var s = parseInt(theTime[2], 10);
        if (s < 0 || s >= 60) {
            return false;
        }

    }
    return true;
}

function CheckDateValue(theObjValue) {

    if (Trim(theObjValue) == "") {
        return false;
    }

    var inPutValue = Trim(theObjValue).split(" ");

    var theValue = inPutValue[0];

    var theData = theValue.split("-");

    if (theData.length != 3) {
        return false;
    }

    // Check is number
    if (isNaN(theData[0]) || isNaN(theData[1]) || isNaN(theData[2])) {
        return false;
    }
    if (theData[0] == '' || theData[1] == '' || theData[2] == '') {
        return false;
    }
    if (theData[0] == null || theData[1] == null || theData[2] == null) {
        return false;
    }
    // Check Year
    var year = parseInt(theData[0], 10);
    if (year < 1900 || year > 9999) {
        return false;
    }

    // Check Month
    var month = parseInt(theData[1], 10);
    if (month < 1 || month > 12) {
        return false;
    }

    // Check day
    var dayLength = 0;
    switch (month) {
        case 2:
            if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
                dayLength = 29;
            }
            else {
                dayLength = 28;
            }
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dayLength = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dayLength = 30;
            break;
    }
    var day = parseInt(theData[2], 10);
    if (day < 1 || day > dayLength) {
        return false;
    }

    var theTime;

    var inPutLength = inPutValue.length;

    if (inPutLength > 1) {
        theTime = inPutValue[inPutLength - 1].split(":");

        if (isNaN(theTime[0]) || isNaN(theTime[1]) || isNaN(theTime[2])) {
            return false;
        }
        if (theTime[0] == '' || theTime[1] == '' || theTime[2] == '') {
            return false;
        }
        if (theTime[0] == null || theTime[1] == null || theTime[2] == null) {

            return false;
        }

        var h = parseInt(theTime[0], 10);

        if (h < 0 || h >= 24) {
            return false;
        }

        var m = parseInt(theTime[1], 10);
        if (m < 0 || m >= 60) {
            return false;
        }

        var s = parseInt(theTime[2], 10);
        if (s < 0 || s >= 60) {
            return false;
        }

    }
    return true;
}

//判断是否是钱的形式
function isMoney(pObj, errMsg) {
    var obj = eval(pObj);
    strRef = "1234567890.-";
    if (!isEmpty(pObj, errMsg)) return false;
    for (i = 0; i < obj.value.length; i++) {
        tempChar = obj.value.substring(i, i + 1);
        if (strRef.indexOf(tempChar, 0) == -1) {
            if (errMsg == null || errMsg == "")
                alert("数据不符合要求,请检查");
            else
                alert(errMsg);
            if (obj.type == "text")
                obj.focus();
            return false;
        }
        else {
            tempLen = obj.value.indexOf(".");
            if (tempLen != -1) {
                strLen = obj.value.substring(tempLen + 1, obj.value.length);
                if (strLen.length > 2) {
                    if (errMsg == null || errMsg == "")
                        alert("数据不符合要求,请检查");
                    else
                        alert(errMsg);
                    if (obj.type == "text")
                        obj.focus();
                    return false;
                }
            }
        }
    }
    return true;
}

/*
只能输入数字
在 onKeypress 时候调用
允许输入 0123456789.-
*/
function OnlyNumber() {
    if (!
	(((window.event.keyCode >= 48) && (window.event.keyCode <= 57))
	|| (window.event.keyCode == 13)
	|| (window.event.keyCode == 46)
	|| (window.event.keyCode == 45))
	) {
        window.event.keyCode = 0;
    }
}

/*

IsInt(string,string,int or string):(测试字符串,+ or - or empty,empty or 0)

功能：判断是否为整数、正整数、负整数、正整数+0、负整数+0

*/

function IsInt(objStr, sign, zero) {

    var reg;

    var bolzero;



    if (Trim(objStr) == "") {

        return false;

    }

    else {

        objStr = objStr.toString();

    }



    if ((sign == null) || (Trim(sign) == "")) {

        sign = "+-";

    }



    if ((zero == null) || (Trim(zero) == "")) {

        bolzero = false;

    }

    else {

        zero = zero.toString();

        if (zero == "0") {

            bolzero = true;

        }

        else {

            alert("检查是否包含0参数，只可为(空、0)");

        }

    }



    switch (sign) {

        case "+-":

            //整数

            reg = /(^-?|^\+?)\d+$/;

            break;

        case "+":

            if (!bolzero) {

                //正整数

                reg = /^\+?[0-9]*[1-9][0-9]*$/;

            }

            else {

                //正整数+0

                //reg=/^\+?\d+$/;

                reg = /^\+?[0-9]*[0-9][0-9]*$/;

            }

            break;

        case "-":

            if (!bolzero) {

                //负整数

                reg = /^-[0-9]*[1-9][0-9]*$/;

            }

            else {

                //负整数+0

                //reg=/^-\d+$/;

                reg = /^-[0-9]*[0-9][0-9]*$/;

            }

            break;

        default:

            alert("检查符号参数，只可为(空、+、-)");

            return false;

            break;

    }



    var r = objStr.match(reg);

    if (r == null) {

        return false;

    }

    else {

        return true;

    }

}

function formatCurrencyNoComma(num) {

    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
        num = num.substring(0, num.length - (4 * i + 3)) + num.substring(num.length - (4 * i + 3));
    }

    return (((sign) ? '' : '-') + num + '.' + cents);
}

function formatCurrency(num) {

    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
	num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num + '.' + cents);
}

//如果选择了现金入卡，则付款单位信息不能写
function ChangePaymentType() {
    var objtextBoxPayableTo = document.getElementById("PayToQuickQueryApprover_TextBoxEQInfo");
    var objtextboxPayableToTel = document.getElementById("textboxPayableToTel");
    //var objtextBoxBankAC = document.getElementById("textBoxBankAC");
    var objtextboxBankAccount = document.getElementById("textboxBankAccount");
    var objdropDownListPaymentType = document.getElementById("DropDownListPaymentType");

    var objTextboxLinkMen = document.getElementById("TextboxLinkMen");

    //新加的支行等信息
    var objtxtProvince = document.getElementById("txtProvince");
    var objtxtCity = document.getElementById("txtCity");
    var objtxtZhihang = document.getElementById("txtZhihang");
    var objHidVendor = document.getElementById("PayToQuickQueryApprover_HiddenEQVendorName");
    var objdropDownListBackType = document.getElementById("DropDownListBackType");
    var objtxtSerialNumber = document.getElementById("TextboxBankSerialNumber");
    if (objdropDownListPaymentType != null) {
        if (objdropDownListPaymentType.value == "CASHCARD") {
            if (objtextBoxPayableTo) {
                objtextBoxPayableTo.value = "";
                objtextBoxPayableTo.style.backgroundColor = "#d3d3d3";
                objtextBoxPayableTo.readOnly = "true"; //只读
                if (objHidVendor)
                objHidVendor.value="";
            }

            if (objtxtProvince) {
                objtxtProvince.value = "";
                objtxtProvince.style.backgroundColor = "#d3d3d3";
                objtxtProvince.readOnly = "true"; //只读

                objtxtCity.value = "";
                objtxtCity.style.backgroundColor = "#d3d3d3";
                objtxtCity.readOnly = "true"; //只读
            }
            if (objtxtZhihang) {
                objtxtZhihang.value = "";
                objtxtZhihang.style.backgroundColor = "#d3d3d3";
                objtxtZhihang.readOnly = "true"; //只读
            }
            //objtxtAccountName.value = "";
            //objtxtAccountName.style.backgroundColor = "#d3d3d3";
            //objtxtAccountName.readOnly = "true"; //只读
            if (objdropDownListBackType) {
                objdropDownListBackType.value = "";
                objdropDownListBackType.style.backgroundColor = "#d3d3d3";
                objdropDownListBackType.readOnly = "true"; //只读
                //objdropDownListBackType.setAttribute("disabled", "disabled");
            }

            if (objTextboxLinkMen) {
                objTextboxLinkMen.value = "";
                objTextboxLinkMen.style.backgroundColor = "#d3d3d3";
                objTextboxLinkMen.readOnly = "true"; //只读
            }

            if (objtextboxPayableToTel) {
                objtextboxPayableToTel.value = "";
                objtextboxPayableToTel.style.backgroundColor = "#d3d3d3";
                objtextboxPayableToTel.readOnly = "true"; //只读
            }

            //objtextBoxBankAC.value = "";
            //objtextBoxBankAC.style.backgroundColor = "#d3d3d3";
            //objtextBoxBankAC.readOnly = "true"; //只读
            if (objtextboxBankAccount) {
                objtextboxBankAccount.value = "";
                objtextboxBankAccount.style.backgroundColor = "#d3d3d3";
                objtextboxBankAccount.readOnly = "true"; //只读
            }
            if (objtxtSerialNumber)
                objtxtSerialNumber.style.display = "none";
            if (document.getElementById("serialNumberText"))
                document.getElementById("serialNumberText").style.display = "none";
        }
        else {
            if (objtextBoxPayableTo) {
                objtextBoxPayableTo.style.backgroundColor = "";
                objtextBoxPayableTo.readOnly = ""; //可写
            }
            if (objtextboxPayableToTel) {
                objtextboxPayableToTel.style.backgroundColor = "";
                objtextboxPayableToTel.readOnly = ""; //可写
            }

            //objtextBoxBankAC.style.backgroundColor = "";
            //objtextBoxBankAC.readOnly = ""; //可写

            if (objtextboxBankAccount) {
                objtextboxBankAccount.style.backgroundColor = "";
                objtextboxBankAccount.readOnly = ""; //可写
            }

            if (objtxtProvince) {
                // objtxtProvince.value = "";
                objtxtProvince.style.backgroundColor = "";
                objtxtProvince.readOnly = "";
            }
            if (objtxtCity) {
                // objtxtCity.value = "";
                objtxtCity.style.backgroundColor = "";
                objtxtCity.readOnly = "";
            }
            if (objtxtZhihang) {
                // objtxtZhihang.value = "";
                objtxtZhihang.style.backgroundColor = "";
                objtxtZhihang.readOnly = "";
            }
            //objtxtAccountName.style.backgroundColor = "";
            //objtxtAccountName.readOnly = "";
            if (objdropDownListBackType) {
                objdropDownListBackType.style.backgroundColor = "";
                objdropDownListBackType.readOnly = "";
               // objdropDownListBackType.setAttribute("disabled", "");
            }

            // objtxtSerialNumber.value = "";
            if (objdropDownListPaymentType.value == "BANKCOLLECTED") {
                if (objtxtSerialNumber)
                    objtxtSerialNumber.style.display = "block";
                if (document.getElementById("serialNumberText"))
                document.getElementById("serialNumberText").style.display = "block";
            }
            else {
                if (objtxtSerialNumber)
                    objtxtSerialNumber.style.display = "none";
                if (document.getElementById("serialNumberText"))
                    document.getElementById("serialNumberText").style.display = "none";
            }

            if (objTextboxLinkMen) {
                //  objTextboxLinkMen.value = "";
                objTextboxLinkMen.style.backgroundColor = "";
                objTextboxLinkMen.readOnly = "";
            }

        }
    }
    return false;
}

function ChangePaymentTypePurchasing() {
    var objtextBoxPayableTo = document.all["textBoxPayableTo"];
    var objtextboxPayableToTel = document.all["textboxPayableToTel"];
    // var objtextBoxBankAC = document.all["textBoxBankAC"];
    var objtextboxBankAccount = document.all["textboxBankAccount"];
    var objTextboxLinkMen = document.all["TextboxLinkMen"];

    if (document.all["DropDownListPaymentType"].value == "CASHCARD") {
        if (objtextBoxPayableTo) {
            objtextBoxPayableTo.value = "";
            objtextBoxPayableTo.style.backgroundColor = "#d3d3d3";
            objtextBoxPayableTo.readOnly = "true"; //只读
        }

        objtextboxPayableToTel.value = "";
        objtextboxPayableToTel.style.backgroundColor = "#d3d3d3";
        objtextboxPayableToTel.readOnly = "true"; //只读

        //objtextBoxBankAC.value = "";
        //objtextBoxBankAC.style.backgroundColor = "#d3d3d3";
        //objtextBoxBankAC.readOnly = "true"; //只读

        objtextboxBankAccount.value = "";
        objtextboxBankAccount.style.backgroundColor = "#d3d3d3";
        objtextboxBankAccount.readOnly = "true"; //只读

        objTextboxLinkMen.value = "";
        objTextboxLinkMen.style.backgroundColor = "#d3d3d3";
        objTextboxLinkMen.readOnly = "true"; //只读

    }
    else {

        if (objtextBoxPayableTo) {
            objtextBoxPayableTo.style.backgroundColor =
				"";
            objtextBoxPayableTo.readOnly = ""; //可写
        }

        objtextboxPayableToTel.style.backgroundColor = "";
        objtextboxPayableToTel.readOnly = ""; //可写

        //objtextBoxBankAC.style.backgroundColor = "";
        //objtextBoxBankAC.readOnly = ""; //可写

        objtextboxBankAccount.style.backgroundColor = "";
        objtextboxBankAccount.readOnly = ""; //可写

        objTextboxLinkMen.style.backgroundColor = "";
        objTextboxLinkMen.readOnly = ""; //可写
    }
    return false;
}

//只能输入数字、-、backspace、del
function CheckNumber(str) {
    if ((str > 47) && (str < 58) || (str == 8) || (str == 45))
        return true;
    else
        return false;
}
//只能输入数字、字母
var strMatch = /^[A-Za-z0-9]*$/;
function CheckInputValid(str) {
    return strMatch.test(str);
}

var strIDMatch = /^[A-Za-z0-9*]*$/;
function CheckIDCardInputValid(str) {
    return strIDMatch.test(str);
}

//添加Cookie
function addCookie(c_name, value, expiredays) {
    if (expiredays > 0) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : "; expires=" + exdate.toUTCString());
    }
}

//取得Cookie值
function getCookie(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == name) return arr[1];
    }
    return "";
}

//通过设置Cookie的过期时间已删除Cookie
function deleteCookie(name) {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=v; expire=" + date.toGMTString();
}

//检查浏览器是否允许使用Cookie
function NavigatorCookieEnable() {
    var result = false;
    if (navigator.cookiesEnabled) return true;
    document.cookie = "aissetestcookie=yes;";
    var cookieSet = document.cookie;
    if (cookieSet.indexOf("aissetestcookie=yes") > -1) result = true;
    document.cookie = "";
    return result;
}

//获取控件对象
function c(obj) {
    var objName = getObjName(obj);
    if (document.getElementById(objName) != null)
        return document.getElementById(objName);
    else if (document.getElementById(obj) != null)
        return document.getElementById(obj);
    else
        return null;
}

//获取控件内容，只用于Textbox、Hidden
function getVal(obj) {
    return Trim(c(obj).value);
}
//设置控件内容，只用于Textbox、Hidden
function setVal(obj, value) {
    c(obj).value = value;
}

function FixWidth(selectObj) {
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > 0)
        return;

    //1. 重新生成一个下拉框
    var newSelectObj = selectObj.cloneNode(true);
    newSelectObj.selectedIndex = selectObj.selectedIndex;
    newSelectObj.id = "newSelectObj";

    //2. 找准当前下拉框的屏幕位置
    var e = selectObj;
    var absTop = e.offsetTop;
    var absLeft = e.offsetLeft;
    while (e = e.offsetParent) {
        absTop += e.offsetTop;
        absLeft += e.offsetLeft;
    }

    //3. 设定新下拉框的屏幕位置
    with (newSelectObj.style) {
        position = "absolute";
        top = absTop + "px";
        left = absLeft + "px";
        width = "auto";
    }

    //4. 老下拉框还原
    var rollback = function () {
        RollbackWidth(selectObj, newSelectObj);
    };

    //5. 添加还原事件
    if (window.addEventListener) {
        newSelectObj.addEventListener("blur", rollback, false);
        newSelectObj.addEventListener("change", rollback, false);
    } else {
        newSelectObj.attachEvent("onblur", rollback);
        newSelectObj.attachEvent("onchange", rollback);
    }

    //6. 隐藏老的下拉框
    selectObj.style.visibility = "hidden";
    document.body.appendChild(newSelectObj);

    if (newSelectObj.offsetWidth < selectObj.offsetWidth) {
        selectObj.style.visibility = "visible";
        document.body.removeChild(newSelectObj);
        return;
    }

    newSelectObj.focus();
    var enterSel = "false";
    var enter = function () {
        enterSel = enterSelect();
    };
    newSelectObj.onmouseover = enter;
}



function enterSelect() {
    return "true";
}

//------------------- 还原下拉框函数 -----------------------
function RollbackWidth(selectObj, newSelectObj) {
    selectObj.selectedIndex = newSelectObj.selectedIndex;
    selectObj.style.visibility = "visible";
    if (document.getElementById("newSelectObj") != null) {
        document.body.removeChild(newSelectObj);
    }
}
//----------------------判断是否海外公司--------------------
function IsCompanyOverseas(idList, companyID) {
    var isOverseas = false;
    for (var i = 0; i < idList.split(';').length; i++) {
        if (companyID == idList.split(';')[i]) {
            isOverseas = true;
            break;
        }
    }
    return isOverseas;
}

