webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/avatar/avatar */ "./node_modules/antd/lib/avatar/avatar.js");
/* harmony import */ var antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostImages */ "./components/PostImages.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");



var _jsxFileName = "C:\\Users\\dlgyd\\OneDrive\\\uBB38\uC11C\\GitHub\\nodeBird\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();










var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var id = me && me.id; // == me?.id <optional chaining>

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      commentFormOpend = _useState2[0],
      setCommentFormOpend = _useState2[1]; // toggle code


  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function () {
    setCommentFormOpend(function (prev) {
      return !prev;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginBottom: "20px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
          images: post.Images
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 36
        }, _this),
        actions: [
        /*#__PURE__*/
        // jsx에서 배열을 작성할 때는 key를 항상 작성
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {}, "retweet", false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
          twoToneColor: "#eb2f96",
          onClick: onToggleLike
        }, "heart", false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
          onClick: onToggleLike
        }, "heart", false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
          onClick: onToggleComment
        }, "comment", false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"] // 마우스를 갖다 대면 항목이 보여지게 하는 컴포넌트
        , {
          content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
            children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                children: "Update"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                type: "danger",
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 23
              }, _this)]
            }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "\uC2E0\uACE0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 17
          }, _this),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, _this)
        }, "more", false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, _this)],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
            children: post.User.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 21
          }, _this),
          title: post.User.nickname,
          description: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), commentFormOpend && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
          post: post
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
          header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
          itemLayout: "horizontal",
          dataSource: post.Comments,
          renderItem: function renderItem(item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
                author: item.User.nickname,
                avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  children: item.User.nickname[0]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 31
                }, _this),
                content: item.content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 19
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(PostCard, "mO2vV9GSCrX2O6e85GKqApGOeoc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    createAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@ant-design/icons/CheckOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/DoubleLeftOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/DoubleRightOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/DownOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/LeftOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/RightOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/SearchOutlined.js":
false,

/***/ "./node_modules/antd/lib/_util/reactNode.js":
false,

/***/ "./node_modules/antd/lib/_util/type.js":
false,

/***/ "./node_modules/antd/lib/grid/RowContext.js":
false,

/***/ "./node_modules/antd/lib/grid/col.js":
false,

/***/ "./node_modules/antd/lib/grid/index.js":
false,

/***/ "./node_modules/antd/lib/grid/row.js":
false,

/***/ "./node_modules/antd/lib/list/Item.js":
false,

/***/ "./node_modules/antd/lib/list/index.js":
false,

/***/ "./node_modules/antd/lib/pagination/MiniSelect.js":
false,

/***/ "./node_modules/antd/lib/pagination/Pagination.js":
false,

/***/ "./node_modules/antd/lib/pagination/index.js":
false,

/***/ "./node_modules/antd/lib/select/index.js":
false,

/***/ "./node_modules/antd/lib/select/utils/iconUtil.js":
false,

/***/ "./node_modules/antd/lib/spin/index.js":
false,

/***/ "./node_modules/rc-util/lib/omit.js":
false,

/***/ "./node_modules/rc-util/node_modules/@babel/runtime/helpers/defineProperty.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiaWQiLCJ1c2VTdGF0ZSIsImxpa2VkIiwic2V0TGlrZWQiLCJjb21tZW50Rm9ybU9wZW5kIiwic2V0Q29tbWVudEZvcm1PcGVuZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uVG9nZ2xlQ29tbWVudCIsIm1hcmdpbkJvdHRvbSIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZUF0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEscUJBQ2RDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBREc7QUFBQSxNQUNyQkMsRUFEcUIsZ0JBQ3JCQSxFQURxQjs7QUFFN0IsTUFBTUMsRUFBRSxHQUFHRCxFQUFFLElBQUlBLEVBQUUsQ0FBQ0MsRUFBcEIsQ0FGNkIsQ0FFTDs7QUFGSyxrQkFJSEMsc0RBQVEsQ0FBQyxLQUFELENBSkw7QUFBQSxNQUl0QkMsS0FKc0I7QUFBQSxNQUlmQyxRQUplOztBQUFBLG1CQUttQkYsc0RBQVEsQ0FBQyxLQUFELENBTDNCO0FBQUEsTUFLdEJHLGdCQUxzQjtBQUFBLE1BS0pDLG1CQUxJLGtC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RUFBVTtBQUNwQixnQ0FDRTtBQUFBLHFDQUNFLHFFQUFDLDRDQUFEO0FBQ0Usc0JBQU0sRUFBRUEsSUFBSSxDQUFDTCxJQUFMLENBQVVDLFFBRHBCO0FBRUUsc0JBQU0sZUFBRSxxRUFBQyw2REFBRDtBQUFBLDRCQUFTSSxJQUFJLENBQUNMLElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRlY7QUFHRSx1QkFBTyxFQUFFSSxJQUFJLENBQUNIO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBU0Q7QUFkSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXNFRCxDQXJGRDs7R0FBTXBCLFE7VUFDV0UsdUQ7OztLQURYRixRO0FBdUZOQSxRQUFRLENBQUN3QixTQUFULEdBQXFCO0FBQ25CdkIsTUFBSSxFQUFFd0IsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUNwQnBCLE1BQUUsRUFBRW1CLGlEQUFTLENBQUNFLE1BRE07QUFFcEJULFFBQUksRUFBRU8saURBQVMsQ0FBQ0csTUFGSTtBQUdwQlIsV0FBTyxFQUFFSyxpREFBUyxDQUFDSSxNQUhDO0FBSXBCQyxZQUFRLEVBQUVMLGlEQUFTLENBQUNHLE1BSkE7QUFLcEJQLFlBQVEsRUFBRUksaURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUIsQ0FMVTtBQU1wQlgsVUFBTSxFQUFFUSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QjtBQU5ZLEdBQWhCLEVBT0hJO0FBUmdCLENBQXJCO0FBV2VoQyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMjlhOGU0NjZkYzBkYWY4ZDRmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBQb3BvdmVyLCBMaXN0LCBDb21tZW50IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtcclxuICBSZXR3ZWV0T3V0bGluZWQsXHJcbiAgSGVhcnRPdXRsaW5lZCxcclxuICBIZWFydFR3b1RvbmUsXHJcbiAgTWVzc2FnZU91dGxpbmVkLFxyXG4gIEVsbGlwc2lzT3V0bGluZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiYW50ZC9saWIvYXZhdGFyL2F2YXRhclwiO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBpZCA9IG1lICYmIG1lLmlkOyAvLyA9PSBtZT8uaWQgPG9wdGlvbmFsIGNoYWluaW5nPlxyXG5cclxuICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZCwgc2V0Q29tbWVudEZvcm1PcGVuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIHRvZ2dsZSBjb2RlXHJcbiAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0TGlrZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Q29tbWVudEZvcm1PcGVuZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxyXG4gICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAvLyBqc3jsl5DshJwg67Cw7Je07J2EIOyekeyEse2VoCDrlYzripQga2V566W8IO2VreyDgSDsnpHshLFcclxuICAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCI+PC9SZXR3ZWV0T3V0bGluZWQ+LFxyXG4gICAgICAgICAgICBsaWtlZCA/IChcclxuICAgICAgICAgICAgICA8SGVhcnRUd29Ub25lXHJcbiAgICAgICAgICAgICAgICB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCJcclxuICAgICAgICAgICAgICAgIGtleT1cImhlYXJ0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfT48L0hlYXJ0T3V0bGluZWQ+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWRcclxuICAgICAgICAgICAgICBrZXk9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9XHJcbiAgICAgICAgICAgID48L01lc3NhZ2VPdXRsaW5lZD4sXHJcbiAgICAgICAgICAgIDxQb3BvdmVyIC8vIOuniOyasOyKpOulvCDqsJbri6Qg64yA66m0IO2VreuqqeydtCDrs7Tsl6zsp4Dqsowg7ZWY64qUIOy7tO2PrOuEjO2KuFxyXG4gICAgICAgICAgICAgIGtleT1cIm1vcmVcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+VXBkYXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIj5EZWxldGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQ+PC9FbGxpcHNpc091dGxpbmVkPlxyXG4gICAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuY29udGVudH1cclxuICAgICAgICAgID48L0NhcmQuTWV0YT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAge2NvbW1lbnRGb3JtT3BlbmQgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA+PC9Db21tZW50PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY3JlYXRlQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==