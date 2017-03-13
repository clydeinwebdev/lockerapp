"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.users = [{
			"id": 1,
			"usn": "admin",
			"password": "1234",
			"firstname": "Clyde",
			"lastname": "Balaman"
		}, {
			"id": 2,
			"usn": "15000871300",
			"password": "15000871300",
			"firstname": "Reese",
			"lastname": "Dela Cruz"
		}, {
			"id": 3,
			"usn": "15000779500",
			"password": "15000779500",
			"firstname": "John",
			"lastname": "Finney"
		}];

		this.lockers = [{
			"id": 1,
			"number": "001",
			"rate": "20.00"
		}, {
			"id": 2,
			"number": "002",
			"rate": "20.00"
		}, {
			"id": 3,
			"number": "003",
			"rate": "20.00"
		}, {
			"id": 4,
			"number": "004",
			"rate": "20.00"
		}, {
			"id": 5,
			"number": "005",
			"rate": "20.00"
		}, {
			"id": 6,
			"number": "006",
			"rate": "20.00"
		}, {
			"id": 7,
			"number": "007",
			"rate": "20.00"
		}, {
			"id": 8,
			"number": "008",
			"rate": "20.00"
		}, {
			"id": 9,
			"number": "009",
			"rate": "20.00"
		}, {
			"id": 10,
			"number": "010",
			"rate": "20.00"
		}, {
			"id": 11,
			"number": "011",
			"rate": "20.00"
		}, {
			"id": 12,
			"number": "012",
			"rate": "20.00"
		}, {
			"id": 13,
			"number": "013",
			"rate": "20.00"
		}, {
			"id": 14,
			"number": "014",
			"rate": "20.00"
		}, {
			"id": 15,
			"number": "015",
			"rate": "20.00"
		}, {
			"id": 16,
			"number": "016",
			"rate": "20.00"
		}];

		this.settings = {
			"current_user": {}
		};
	}

	_createClass(App, [{
		key: "render",
		value: function render(html, component) {

			component.innerHTML += html;
		}
	}, {
		key: "reRender",
		value: function reRender(html, component) {

			component.innerHTML = html;
		}
	}, {
		key: "initializeMaterialScripts",
		value: function initializeMaterialScripts() {
			$(function () {
				$('.button-collapse').sideNav({
					menuWidth: 300, // Default is 300
					edge: 'right', // Choose the horizontal origin
					closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
					draggable: true // Choose whether you can drag to open on touch screens
				});

				$('ul.tabs').tabs();
			});
		}
	}]);

	return App;
}();

var Component = function (_App) {
	_inherits(Component, _App);

	function Component() {
		_classCallCheck(this, Component);

		return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this));
	}

	_createClass(Component, [{
		key: "loginPage",
		value: function loginPage() {
			var html = "\n\t\t\t<h3 class=\"app_name\">Locker App</h3>\n\t\t\t<h6 class=\"app_desc\">A Hybrid Demo App</h6>\n\t\t\t<div class=\"center-align\">\n\t\t\t\t<img class=\"app_logo\" src=\"img/clyde.png\" />\n\t\t\t</div>\n\t\t\t<div class=\"login_input\">\n\t\t\t\t<div class=\"row\">\t\t\t\t\n\t\t\t\t\t<div class=\"col s12 center-align\">\n\t\t\t\t\t\t<input id=\"txtUSN\" style=\"background-color:#303030;color:white;width:80%;padding-left:15px;padding-right:15px;font-size:18px;text-align:center;\" maxlength=\"11\" type=\"text\" placeholder=\"ENTER USN\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col s12 center-align\">\n\t\t\t\t\t\t<input id=\"txtPASS\" style=\"background-color:#303030;color:white;width:80%;padding-left:15px;padding-right:15px;font-size:18px;text-align:center;\" maxlength=\"20\" type=\"password\" placeholder=\"ENTER PASSWORD\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col s12 center-align\">\n\t\t\t\t\t\t<button onclick=\"component.verifyLogin()\" class=\"waves-effect waves-light btn\" >LOGIN</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t</div>\n\t\t";
			this.reRender(html, $('#app')[0]);
		}
	}, {
		key: "verifyLogin",
		value: function verifyLogin() {
			var txtUSN = $('#txtUSN').val();
			var txtPASS = $('#txtPASS').val();
			var msg = "Invalid Account";
			var errFlag = true;
			// console.log(this.users);
			for (var i = 0; i < this.users.length; i++) {
				// console.log(this.users[i].usn);
				if (txtUSN == this.users[i].usn) {
					if (txtPASS == this.users[i].password) {
						errFlag = false;
						this.settings.current_user = this.users[i];
						break;
					} else {
						errFlag = true;
						msg = "Invalid Password";
					}
				} else {
					errFlag = true;
				}
			}

			if (errFlag) {
				Materialize.toast(msg, 4000);
			} else {
				this.preloader();
				setTimeout(function () {
					component.studentDashboard();
				}, 1000);
			}
		}
	}, {
		key: "studentDashboard",
		value: function studentDashboard() {
			var html = "\t\t\t\n\t\t\t<div id=\"mainNav\"></div>\n\t\t\t<div id=\"sideNav\"></div>\n\t\t";
			this.reRender(html, $('#app')[0]);
			$('html, body').css('background-color', '#fff');
			this.mainNav();
			this.sideNav();
			this.initializeMaterialScripts();
		}
	}, {
		key: "mainNav",
		value: function mainNav() {
			var html = "\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<ul class=\"tabs\">\n\t\t\t\t\t\t<li class=\"tab col s3\"><a class=\"active\" href=\"#page1\"><i class=\"material-icons\">home</i></a></li>\n\t\t\t\t\t\t<li class=\"tab col s3\"><a href=\"#page2\"><i class=\"material-icons\">home</i></a></li>\n\t\t\t\t\t\t<li class=\"tab col s3\"><a href=\"#page3\"><i class=\"material-icons\">home</i></a></li>\n\t\t\t\t\t\t<li class=\"tab col s3 disabled\"><a href=\"#page4\" data-activates=\"slide-out\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"page1\" class=\"col s12\"></div>\n\t\t\t\t<div id=\"page2\" class=\"col s12\">Test 2</div>\n\t\t\t\t<div id=\"page3\" class=\"col s12\">Test 3</div>\n\t\t\t\t<div id=\"page4\" class=\"col s12\"></div>\n\t\t\t</div>\n\t\t";
			this.reRender(html, $('#mainNav')[0]);
			this.page1();
		}
	}, {
		key: "sideNav",
		value: function sideNav() {
			var html = "\n\t\t\t<ul id=\"slide-out\" class=\"side-nav\">\n\t\t\t\t<li><div class=\"userView\">\n\t\t\t\t\t<div class=\"background\">\n\t\t\t\t\t\t<img src=\"img/office.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"#!user\"><img class=\"circle\" src=\"img/yuna.jpg\"></a>\n\t\t\t\t\t<a href=\"#!name\"><span class=\"white-text name\">" + this.settings.current_user.firstname + "</span></a>\n\t\t\t\t\t<a href=\"#!email\"><span class=\"white-text email\">" + this.settings.current_user.usn + "</span></a>\n\t\t\t\t</div></li>\n\t\t\t\t<li><a href=\"#!\"><i class=\"material-icons\">&#xE88A;</i>First Link With Icon</a></li>\n\t\t\t\t<li><a href=\"#!\">Second Link</a></li>\n\t\t\t\t<li><div class=\"divider\"></div></li>\n\t\t\t\t<li><a class=\"subheader\">Subheader</a></li>\n\t\t\t\t<li><a class=\"waves-effect\" href=\"#!\">Third Link With Waves</a></li>\n\t\t\t</ul>\n\t\t";
			this.reRender(html, $('#sideNav')[0]);
		}
	}, {
		key: "preloader",
		value: function preloader() {
			var html = "\n\t\t\t<center style=\"margin-top:50%;\">\n\t\t\t<div class=\"preloader-wrapper big active\">\n\t\t\t<div class=\"spinner-layer spinner-blue\">\n\t\t\t<div class=\"circle-clipper left\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"gap-patch\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"circle-clipper right\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"spinner-layer spinner-red\">\n\t\t\t<div class=\"circle-clipper left\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"gap-patch\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"circle-clipper right\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"spinner-layer spinner-yellow\">\n\t\t\t<div class=\"circle-clipper left\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"gap-patch\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"circle-clipper right\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"spinner-layer spinner-green\">\n\t\t\t<div class=\"circle-clipper left\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"gap-patch\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"circle-clipper right\">\n\t\t\t<div class=\"circle\"></div>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t</center>\n\t\t";
			this.reRender(html, $('#app')[0]);
		}
	}, {
		key: "page1",
		value: function page1() {
			var html = "\n\t\t\t<nav>\n\t\t\t\t<div class=\"nav-wrapper\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t<input id=\"search\" type=\"search\" required>\n\t\t\t\t\t\t\t<label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n\t\t\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</nav>\n\n\t\t\t<div class=\"collection\" id=\"lockerList\"></div>\n\t\t";
			this.reRender(html, $('#page1')[0]);
			this.lockerList(0);
		}
	}, {
		key: "lockerList",
		value: function lockerList(start) {
			var items_pergroup = 5;
			var items_total = this.lockers.length;
			var html = "";
			var end = void 0;
			var item = start;
			while (item < items_total) {
				if (item == start + items_pergroup) break;
				html += "\n\t\t\t\t<a href=\"#!\" onclick=\"console.log('asdf')\" class=\"collection-item avatar hoverable\">\n\t\t\t\t\t\t<img src=\"img/yuna.jpg\" alt=\"\" class=\"circle\">\n\t\t\t\t\t\t<span class=\"title\">Locker " + this.lockers[item].number + "</span>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<div id=\"\">Lastname, Firstname</div>\n\t\t\t\t\t\t\t<div id=\"\">3 months left</div>\t\t\t\t\t\t\n\t\t\t\t\t\t</p>\n\t\t\t\t</a>\n\t\t\t";
				item++;
			}
			html += "\n\t\t\t<ul class=\"pagination center-align\">\n\t\t\t\t<li class=\"waves-effect\"><a href=\"#!\" onclick=\"component.lockerList(0)\"><i class=\"material-icons\">chevron_left</i></a></li>\n\t\t\t";

			var page = 1;
			var page_start = void 0;
			for (var i = 0; i < items_total; i++) {
				page_start = items_pergroup * page - items_pergroup;
				if (i % items_pergroup == 0) {
					var active = "";
					if (page_start == start) {
						active = "active";
					}
					html += "\n\t\t\t\t\t<li class=\"waves-effect " + active + "\" onclick=\"component.lockerList(" + page_start + ")\">\n\t\t\t\t\t\t<a href=\"#!\">" + page++ + "</a>\n\t\t\t\t\t</li>\n\t\t\t\t";
				}
			}
			html += "\n\t\t\t\t<li class=\"waves-effect\"><a href=\"#!\" onclick=\"component.lockerList(" + page_start + ")\"><i class=\"material-icons\">chevron_right</i></a></li>\n\t\t\t</ul>\n\t\t";
			this.reRender(html, $('#lockerList')[0]);
		}
	}]);

	return Component;
}(App);

var component = new Component();
component.loginPage();