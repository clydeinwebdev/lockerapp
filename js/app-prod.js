"use strict";var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var App=function(){function a(){_classCallCheck(this,a),this.users=[{id:1,usn:"admin",password:"1234",firstname:"Clyde",lastname:"Balaman"},{id:2,usn:"15000871300",password:"15000871300",firstname:"Reese",lastname:"Dela Cruz"},{id:3,usn:"15000779500",password:"15000779500",firstname:"John",lastname:"Finney"}],this.lockers=[{id:1,number:"001",rate:"20.00"},{id:2,number:"002",rate:"20.00"},{id:3,number:"003",rate:"20.00"},{id:4,number:"004",rate:"20.00"},{id:5,number:"005",rate:"20.00"},{id:6,number:"006",rate:"20.00"},{id:7,number:"007",rate:"20.00"},{id:8,number:"008",rate:"20.00"},{id:9,number:"009",rate:"20.00"},{id:10,number:"010",rate:"20.00"},{id:11,number:"011",rate:"20.00"},{id:12,number:"012",rate:"20.00"},{id:13,number:"013",rate:"20.00"},{id:14,number:"014",rate:"20.00"},{id:15,number:"015",rate:"20.00"},{id:16,number:"016",rate:"20.00"}],this.settings={current_user:{}}}return _createClass(a,[{key:"render",value:function render(b,c){c.innerHTML+=b}},{key:"reRender",value:function reRender(b,c){c.innerHTML=b}},{key:"initializeMaterialScripts",value:function initializeMaterialScripts(){$(function(){$(".button-collapse").sideNav({menuWidth:300,edge:"right",closeOnClick:!0,draggable:!0}),$("ul.tabs").tabs()})}}]),a}(),Component=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this))}return _inherits(b,a),_createClass(b,[{key:"loginPage",value:function loginPage(){this.reRender("\n\t\t\t<h3 class=\"app_name\">Locker App</h3>\n\t\t\t<h6 class=\"app_desc\">A Hybrid Demo App</h6>\n\t\t\t<div class=\"center-align\">\n\t\t\t\t<img class=\"app_logo\" src=\"img/clyde.png\" />\n\t\t\t</div>\n\t\t\t<div class=\"login_input\">\n\t\t\t\t<div class=\"row\">\t\t\t\t\n\t\t\t\t\t<div class=\"col s12 center-align\">\n\t\t\t\t\t\t<input id=\"txtUSN\" style=\"background-color:#303030;color:white;width:80%;padding-left:15px;padding-right:15px;font-size:18px;text-align:center;\" maxlength=\"11\" type=\"text\" placeholder=\"ENTER USN\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col s12 center-align\">\n\t\t\t\t\t\t<input id=\"txtPASS\" style=\"background-color:#303030;color:white;width:80%;padding-left:15px;padding-right:15px;font-size:18px;text-align:center;\" maxlength=\"20\" type=\"password\" placeholder=\"ENTER PASSWORD\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col s12 center-align\">\n\t\t\t\t\t\t<button onclick=\"component.verifyLogin()\" class=\"waves-effect waves-light btn\" >LOGIN</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t</div>\n\t\t",$("#app")[0])}},{key:"verifyLogin",value:function verifyLogin(){for(var c=$("#txtUSN").val(),d=$("#txtPASS").val(),e="Invalid Account",f=!0,g=0;g<this.users.length;g++)if(c!=this.users[g].usn)f=!0;else if(d==this.users[g].password){f=!1,this.settings.current_user=this.users[g];break}else f=!0,e="Invalid Password";f?Materialize.toast(e,4e3):(this.preloader(),setTimeout(function(){component.studentDashboard()},1e3))}},{key:"studentDashboard",value:function studentDashboard(){this.reRender("\t\t\t\n\t\t\t<div id=\"mainNav\"></div>\n\t\t\t<div id=\"sideNav\"></div>\n\t\t",$("#app")[0]),$("html, body").css("background-color","#fff"),this.mainNav(),this.sideNav(),this.initializeMaterialScripts()}},{key:"mainNav",value:function mainNav(){this.reRender("\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<ul class=\"tabs\">\n\t\t\t\t\t\t<li class=\"tab col s3\"><a class=\"active\" href=\"#page1\"><i class=\"material-icons\">home</i></a></li>\n\t\t\t\t\t\t<li class=\"tab col s3\"><a href=\"#page2\"><i class=\"material-icons\">home</i></a></li>\n\t\t\t\t\t\t<li class=\"tab col s3\"><a href=\"#page3\"><i class=\"material-icons\">home</i></a></li>\n\t\t\t\t\t\t<li class=\"tab col s3 disabled\"><a href=\"#page4\" data-activates=\"slide-out\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"page1\" class=\"col s12\"></div>\n\t\t\t\t<div id=\"page2\" class=\"col s12\">Test 2</div>\n\t\t\t\t<div id=\"page3\" class=\"col s12\">Test 3</div>\n\t\t\t\t<div id=\"page4\" class=\"col s12\"></div>\n\t\t\t</div>\n\t\t",$("#mainNav")[0]),this.page1()}},{key:"sideNav",value:function sideNav(){var c="\n\t\t\t<ul id=\"slide-out\" class=\"side-nav\">\n\t\t\t\t<li><div class=\"userView\">\n\t\t\t\t\t<div class=\"background\">\n\t\t\t\t\t\t<img src=\"img/office.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"#!user\"><img class=\"circle\" src=\"img/yuna.jpg\"></a>\n\t\t\t\t\t<a href=\"#!name\"><span class=\"white-text name\">"+this.settings.current_user.firstname+"</span></a>\n\t\t\t\t\t<a href=\"#!email\"><span class=\"white-text email\">"+this.settings.current_user.usn+"</span></a>\n\t\t\t\t</div></li>\n\t\t\t\t<li><a href=\"#!\"><i class=\"material-icons\">cloud</i>First Link With Icon</a></li>\n\t\t\t\t<li><a href=\"#!\">Second Link</a></li>\n\t\t\t\t<li><div class=\"divider\"></div></li>\n\t\t\t\t<li><a class=\"subheader\">Subheader</a></li>\n\t\t\t\t<li><a class=\"waves-effect\" href=\"#!\">Third Link With Waves</a></li>\n\t\t\t</ul>\n\t\t";this.reRender(c,$("#sideNav")[0])}},{key:"preloader",value:function preloader(){this.reRender("\n\t\t\t<center style=\"margin-top:50%;\">\n\t\t\t<div class=\"preloader-wrapper big active\">\n\t\t\t<div class=\"spinner-layer spinner-blue\">\n\t\t\t<div class=\"circle-clipper left\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"gap-patch\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"circle-clipper right\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"spinner-layer spinner-red\">\n\t\t\t<div class=\"circle-clipper left\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"gap-patch\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"circle-clipper right\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"spinner-layer spinner-yellow\">\n\t\t\t<div class=\"circle-clipper left\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"gap-patch\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"circle-clipper right\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"spinner-layer spinner-green\">\n\t\t\t<div class=\"circle-clipper left\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"gap-patch\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"circle-clipper right\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t</center>\n\t\t",$("#app")[0])}},{key:"page1",value:function page1(){this.reRender("\n\t\t\t<nav>\n\t\t\t\t<div class=\"nav-wrapper\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t<input id=\"search\" type=\"search\" required>\n\t\t\t\t\t\t\t<label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n\t\t\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</nav>\n\n\t\t\t<div class=\"collection\" id=\"lockerList\"></div>\n\t\t",$("#page1")[0]),this.lockerList(0)}},{key:"lockerList",value:function lockerList(c){for(var e=this.lockers.length,f="",h=c;h<e&&h!=c+5;)f+="\n\t\t\t\t<a href=\"#!\" onclick=\"console.log('asdf')\" class=\"collection-item avatar hoverable\">\n\t\t\t\t\t\t<img src=\"img/yuna.jpg\" alt=\"\" class=\"circle\">\n\t\t\t\t\t\t<span class=\"title\">Locker "+this.lockers[h].number+"</span>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<div id=\"\">Lastname, Firstname</div>\n\t\t\t\t\t\t\t<div id=\"\">3 months left</div>\t\t\t\t\t\t\n\t\t\t\t\t\t</p>\n\t\t\t\t</a>\n\t\t\t",h++;f+="\n\t\t\t<ul class=\"pagination center-align\">\n\t\t\t\t<li class=\"waves-effect\"><a href=\"#!\" onclick=\"component.lockerList(0)\"><i class=\"material-icons\">chevron_left</i></a></li>\n\t\t\t";for(var j=1,k=void 0,l=0;l<e;l++)if(k=d*j-d,0==l%d){var m="";k==c&&(m="active"),f+="\n\t\t\t\t\t<li class=\"waves-effect "+m+"\" onclick=\"component.lockerList("+k+")\">\n\t\t\t\t\t\t<a href=\"#!\">"+j++ +"</a>\n\t\t\t\t\t</li>\n\t\t\t\t"}f+="\n\t\t\t\t<li class=\"waves-effect\"><a href=\"#!\" onclick=\"component.lockerList("+k+")\"><i class=\"material-icons\">chevron_right</i></a></li>\n\t\t\t</ul>\n\t\t",this.reRender(f,$("#lockerList")[0])}}]),b}(App),component=new Component;component.loginPage();