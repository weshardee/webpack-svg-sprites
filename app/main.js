require("./style.scss");
var id = require("svg-sprite!./icons/star.svg");

console.log(id);
document.write('<svg class="svg-icon"><use xlink:href=#"' + id + '"></use></svg>');
