"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var addBag = document.querySelectorAll(".product_col_card_btn");
var fixedClose = document.querySelector(".fixed_close");
var clearCart = document.querySelector(".clear-cart");
var menuFixed = document.querySelector(".fixed");
var ul = document.querySelector("ul");
/* let openCloseFixed=() =>{
   menuFixed.classList.toggle("open");
}

addBag.forEach((element) => {
  console.log(element);
  // console.log(this)
   return element.addEventListener("click",openCloseFixed);
   
} ,console.log(this));

//   fixedClose.addEventListener("click",openCloseFixed);*/

/* cart*/
// 1

var cart = [];
/*getting the products*/

var products =
/*#__PURE__*/
function () {
  function products() {
    _classCallCheck(this, products);
  }

  _createClass(products, [{
    key: "getProducts",
    value: function getProducts() {
      var result, data, _products;

      return regeneratorRuntime.async(function getProducts$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(fetch("products.json"));

            case 3:
              result = _context.sent;
              _context.next = 6;
              return regeneratorRuntime.awrap(result.json());

            case 6:
              data = _context.sent;
              _products = data.items;

              _products.map(function (element) {
                var id = element.sys.id;
                var _element$fields = element.fields,
                    title = _element$fields.title,
                    price = _element$fields.price;
                var image = element.fields.image.fields.file.url.image;
                return {
                  title: title,
                  price: price,
                  id: id,
                  image: image
                };
              });

              return _context.abrupt("return", _products);

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }]);

  return products;
}();
/*display products*/


var UI =
/*#__PURE__*/
function () {
  function UI() {
    _classCallCheck(this, UI);
  }

  _createClass(UI, [{
    key: "diplayProducts",
    value: function diplayProducts(products) {
      console.log(products);
    }
  }]);

  return UI;
}(); // local storage


var Storage = function Storage() {
  _classCallCheck(this, Storage);
}; // 2


document.addEventListener("DOMContentLoaded", function () {
  var ui = new UI();
  var product = new products(); // get All products
  // product.getProducts().then(products=> console.log(products) );

  product.getProducts().then(function (products) {
    return ui.diplayProducts(products);
  });
});