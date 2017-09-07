//START HEADER
//Indholdet er kopieret

//Add jquery
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//Create cookie script
var createCookie = function (name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
//END HEADER

if (window.location.href.indexOf("quiz1") > -1 && !(window.location.href.indexOf("quiz10") > -1)) {
    console.log("starting if statement...");
    var ans = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var ans_json = JSON.stringify(ans);
    createCookie('arrCookie', ans_json);
}

if (window.location.href.indexOf("quiz10") > -1) {
    boolQuiz10 = 1;
}
else {
    boolQuiz10 = 0;
}

if (window.location.href.indexOf("quizresult") > -1) {
    var n = 1;
    var w = "Forkert";
    var r = "Rigtigt";

    var ansNewArr = getCookie('arrCookie');
    var arr = JSON.parse(ansNewArr);
    console.log(ansNewArr);
    window.onload = function () {
        for (i = 0; i < arr.length; i++) {
            if (arr[n - 1] == 1) {
                document.getElementById("ans".concat(n)).innerHTML = r;
                n++
            }
            else {
                document.getElementById("ans".concat(n)).innerHTML = w;
                n++
            }
        }
	
		var sum = arr.reduce(add, 0);
		function add(a, b) {
			return a + b;
		};
		
		document.getElementById("resultTotal").innerHTML = sum;
	}
    /*
    if (ansNewArr[n-1] == 1) {
        document.getElementById("ans" + n).innerHTML = r;
    }
    else {
        document.getElementById("ans".concat(n)).innerHTML = w;
    }
    */
}

var boolQuiz10;
var rightAns = 0;
var url = "http://rasmuscomputer.science/quiz";
//var url = "file:///C:/Users/Rasmus%20Kirk/Downloads/Programmering%20opgave/quiz"
var linkEnd = ".html";

function storeArrayCookie(n) {
    console.log("storeArrayCookie");

    var arr_str = getCookie('arrCookie');
    console.log(arr_str);
    var myArr = JSON.parse(arr_str);

    myArr[n] = 1;

    console.log("FUNCTION")
    console.log(myArr)

    var ans_json = JSON.stringify(myArr);
    createCookie('arrCookie', ans_json);

    printCookieValue()
}

function printCookieValue() {
    var ansNewArr = getCookie('arrCookie');
    var arr = JSON.parse(ansNewArr);
    console.log("The cookie array:");
    console.log(arr);
}

function getLink(pageNumber) {
    console.log("getLink");

    var temp = url.concat(pageNumber);
    return temp.concat(linkEnd);
}

function rAnswer(n) {
    console.log("rAnswer");

    if (window.location.href.indexOf("quiz1") > -1 && !(window.location.href.indexOf("quiz10") > -1)) {
        storeArrayCookie(0);
    }
    else if (window.location.href.indexOf("quiz2") > -1) {
        storeArrayCookie(1);
    }
    else if (window.location.href.indexOf("quiz3") > -1) {
        storeArrayCookie(2);
    }
    else if (window.location.href.indexOf("quiz4") > -1) {
        storeArrayCookie(3);
    }
    else if (window.location.href.indexOf("quiz5") > -1) {
        storeArrayCookie(4);
    }
    else if (window.location.href.indexOf("quiz6") > -1) {
        storeArrayCookie(5);
    }
    else if (window.location.href.indexOf("quiz7") > -1) {
        storeArrayCookie(6);
    }
    else if (window.location.href.indexOf("quiz8") > -1) {
        storeArrayCookie(7);
    }
    else if (window.location.href.indexOf("quiz9") > -1) {
        storeArrayCookie(8);
    }
    else if (window.location.href.indexOf("quiz10") > -1) {
        storeArrayCookie(9);
    }

    if (boolQuiz10 == 1) {
        window.open(url.concat("result.html"), "_self");
    }
    else {
        window.open(getLink(n), "_self");
        console.log(boolQuiz10);
    }
    printCookieValue();
    console.log(boolQuiz10);
}

function wAnswer(n) {
    if (boolQuiz10 == 1) {
        window.open(url.concat("result.html"), "_self");
    }
    else {
        window.open(getLink(n), "_self");
        console.log(boolQuiz10);
    }
    console.log();
}