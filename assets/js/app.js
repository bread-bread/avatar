/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _graph = __webpack_require__(1);

var _graph2 = _interopRequireDefault(_graph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// расчет процентов
var numArr = [0, 0, 115, 389, 532],
    // массив кол-ва каждой оценки
percents = [],
    // пустой массив для записи процентного соотношения каждой оценки
numsSum = 0; // общее кол-во оценок для расчета процентов
//
for (var i = 0; i < numArr.length; i++) {
  numsSum += parseInt(numArr[i]);
}
function perc(nums) {
  for (var j = 0; j < nums.length; j++) {
    percents.push(Math.round(parseInt(nums[j]) / numsSum * 100));
  }
  return percents;
}
perc(numArr);

window.onload = function () {
  (0, _graph2.default)(percents);
};
$(document).ready(function () {
  $('.graph').addClass('graph_animate'); // навешиваем класс для проигрывания анимации графика
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (percents) {
  var grade = document.querySelectorAll('.grade__graph'),
      gradePercents = document.querySelectorAll('.grade__percent');
  for (var i = 0; i < grade.length; i++) {
    grade[i].style.height = percents[i] + '%';
    gradePercents[i].innerHTML = percents[i] + '%';
  };

  new Morris.Line({
    // ID элемента в который встраиваем графим.
    element: 'graph',
    // максимальное значение по оси У
    ymax: [5],
    // вкл/выкл осей координат
    axes: false,
    // задаем координаты
    data: [{
      month: '2017 W34',
      value: 2.3
    }, {
      month: '2017 W35',
      value: 2.4
    }, {
      month: '2017 W36',
      value: 2.6
    }, {
      month: '2017 W37',
      value: 2.87
    }, {
      month: '2017 W38',
      value: 3.1
    }, {
      month: '2017 W39',
      value: 2.98
    }, {
      month: '2017 W40',
      value: 4.6
    }, {
      month: '2017 W41',
      value: 4.65
    }, {
      month: '2017 W42',
      value: 4.13
    }, {
      month: '2017 W43',
      value: 3.89
    }],
    // The name of the data record attribute that contains x-values.
    xkey: 'month',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    xLabels: 'day',
    xLabelFormat: function xLabelFormat(d) {
      var weekdays = new Array(7);
      weekdays[0] = "ВСК";
      weekdays[1] = "ПНД";
      weekdays[2] = "ВТР";
      weekdays[3] = "СРД";
      weekdays[4] = "ЧТВ";
      weekdays[5] = "ПТН";
      weekdays[6] = "СБТ";

      return weekdays[d.getDay()] + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + ("0" + d.getDate()).slice(-2);
    },
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    //labels: ['Rating'],
    lineColors: ['rgb(77, 136, 255)'],
    lineWidth: 2,
    pointSize: 3.5,
    pointFillColors: ['#fff'],
    grid: false,
    gridTextColor: ['#fff'],
    resize: true
  });
};

/***/ })
/******/ ]);