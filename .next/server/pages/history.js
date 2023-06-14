/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/history";
exports.ids = ["pages/history"];
exports.modules = {

/***/ "./styles/History.module.css":
/*!***********************************!*\
  !*** ./styles/History.module.css ***!
  \***********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"historyListItem\": \"History_historyListItem__2_I8Z\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSGlzdG9yeS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlhcHAvLi9zdHlsZXMvSGlzdG9yeS5tb2R1bGUuY3NzPzE3MTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGlzdG9yeUxpc3RJdGVtXCI6IFwiSGlzdG9yeV9oaXN0b3J5TGlzdEl0ZW1fXzJfSThaXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/History.module.css\n");

/***/ }),

/***/ "./pages/history.js":
/*!**************************!*\
  !*** ./pages/history.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ History)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai */ \"jotai\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ \"./store.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_History_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/History.module.css */ \"./styles/History.module.css\");\n/* harmony import */ var _styles_History_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_History_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__]);\n([jotai__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction History() {\n    const [searchHistory, setSearchHistory] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_2__.searchHistoryAtom);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    let parsedHistory = [];\n    searchHistory.forEach((h)=>{\n        let params = new URLSearchParams(h);\n        let entries = params.entries();\n        parsedHistory.push(Object.fromEntries(entries));\n    });\n    function historyClicked(e, index) {\n        e.stopPropagation();\n        router.push(`/artwork?${searchHistory[index]}`);\n    }\n    function removeHistoryClicked(e, index) {\n        e.stopPropagation(); // stop the event from trigging other events\n        setSearchHistory((current)=>{\n            let x = [\n                ...current\n            ];\n            x.splice(index, 1);\n            return x;\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: parsedHistory.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Body, {\n                children: \"Nothing Here. Try searching for some artwork.\"\n            }, void 0, false, {\n                fileName: \"/Users/kelvinvora/Desktop/Seneca files/SEM-4/BTI 425 - Web programming/Assingments/A5/myapp/pages/history.js\",\n                lineNumber: 37,\n                columnNumber: 25\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kelvinvora/Desktop/Seneca files/SEM-4/BTI 425 - Web programming/Assingments/A5/myapp/pages/history.js\",\n            lineNumber: 36,\n            columnNumber: 21\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ListGroup, {\n            children: parsedHistory.map((historyItem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ListGroup.Item, {\n                    onClick: (e)=>historyClicked(e, index),\n                    className: (_styles_History_module_css__WEBPACK_IMPORTED_MODULE_5___default().historyListItem),\n                    children: [\n                        Object.keys(historyItem).map((key, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    key,\n                                    \": \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: historyItem[key]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kelvinvora/Desktop/Seneca files/SEM-4/BTI 425 - Web programming/Assingments/A5/myapp/pages/history.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 48\n                                    }, this),\n                                    \"\\xa0\"\n                                ]\n                            }, i, true, {\n                                fileName: \"/Users/kelvinvora/Desktop/Seneca files/SEM-4/BTI 425 - Web programming/Assingments/A5/myapp/pages/history.js\",\n                                lineNumber: 46,\n                                columnNumber: 37\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            className: \"float-end\",\n                            variant: \"danger\",\n                            size: \"sm\",\n                            onClick: (e)=>removeHistoryClicked(e, index),\n                            children: \"\\xd7\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kelvinvora/Desktop/Seneca files/SEM-4/BTI 425 - Web programming/Assingments/A5/myapp/pages/history.js\",\n                            lineNumber: 50,\n                            columnNumber: 33\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/kelvinvora/Desktop/Seneca files/SEM-4/BTI 425 - Web programming/Assingments/A5/myapp/pages/history.js\",\n                    lineNumber: 44,\n                    columnNumber: 29\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/kelvinvora/Desktop/Seneca files/SEM-4/BTI 425 - Web programming/Assingments/A5/myapp/pages/history.js\",\n            lineNumber: 42,\n            columnNumber: 21\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oaXN0b3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNZO0FBQ0o7QUFDUztBQUNRO0FBRTFDLFNBQVNPLFVBQVU7SUFDOUIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1QsOENBQU9BLENBQUNDLHFEQUFpQkE7SUFDbkUsTUFBTVMsU0FBU1Isc0RBQVNBO0lBRXhCLElBQUlTLGdCQUFnQixFQUFFO0lBRXRCSCxjQUFjSSxPQUFPLENBQUNDLENBQUFBLElBQUs7UUFDdkIsSUFBSUMsU0FBUyxJQUFJQyxnQkFBZ0JGO1FBQ2pDLElBQUlHLFVBQVVGLE9BQU9FLE9BQU87UUFDNUJMLGNBQWNNLElBQUksQ0FBQ0MsT0FBT0MsV0FBVyxDQUFDSDtJQUMxQztJQUVBLFNBQVNJLGVBQWVDLENBQUMsRUFBRUMsS0FBSyxFQUFFO1FBQzlCRCxFQUFFRSxlQUFlO1FBQ2pCYixPQUFPTyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUVULGFBQWEsQ0FBQ2MsTUFBTSxDQUFDLENBQUM7SUFDbEQ7SUFFQSxTQUFTRSxxQkFBcUJILENBQUMsRUFBRUMsS0FBSyxFQUFFO1FBQ3BDRCxFQUFFRSxlQUFlLElBQUksNENBQTRDO1FBQ2pFZCxpQkFBaUJnQixDQUFBQSxVQUFXO1lBQ3hCLElBQUlDLElBQUk7bUJBQUlEO2FBQVE7WUFDcEJDLEVBQUVDLE1BQU0sQ0FBQ0wsT0FBTztZQUNoQixPQUFPSTtRQUNYO0lBQ0o7SUFDQSxxQkFDSTtrQkFDS2YsY0FBY2lCLE1BQU0sS0FBSyxrQkFFbEIsOERBQUN2QixpREFBSUE7c0JBQ0QsNEVBQUNBLHNEQUFTOzBCQUFDOzs7Ozs7Ozs7O2lDQUtmLDhEQUFDRCxzREFBU0E7c0JBQ0xPLGNBQWNtQixHQUFHLENBQUMsQ0FBQ0MsYUFBYVQsc0JBQzdCLDhEQUFDbEIsMkRBQWM7b0JBQWE2QixTQUFTLENBQUNaLElBQU1ELGVBQWVDLEdBQUdDO29CQUFRWSxXQUFXL0IsbUZBQXNCOzt3QkFDbEdlLE9BQU9rQixJQUFJLENBQUNMLGFBQWFELEdBQUcsQ0FBQyxDQUFDTyxLQUFLQyxrQkFDaEMsOERBQUNDOztvQ0FDSUY7b0NBQUk7a0RBQUUsOERBQUNHO2tEQUFRVCxXQUFXLENBQUNNLElBQUk7Ozs7OztvQ0FBVTs7K0JBRG5DQzs7Ozs7c0NBSWYsOERBQUNoQyxtREFBTUE7NEJBQUM0QixXQUFVOzRCQUFZTyxTQUFROzRCQUFTQyxNQUFLOzRCQUFLVCxTQUFTLENBQUNaLElBQU1HLHFCQUFxQkgsR0FBR0M7c0NBQVE7Ozs7Ozs7bUJBTnhGQTs7Ozs7Ozs7O2dCQVloQzs7QUFJakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwLy4vcGFnZXMvaGlzdG9yeS5qcz9mNjI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUF0b20gfSBmcm9tIFwiam90YWlcIjtcbmltcG9ydCB7IHNlYXJjaEhpc3RvcnlBdG9tIH0gZnJvbSBcIkAvc3RvcmVcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSGlzdG9yeS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBMaXN0R3JvdXAsIENhcmQsIEJ1dHRvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaXN0b3J5KCkge1xuICAgIGNvbnN0IFtzZWFyY2hIaXN0b3J5LCBzZXRTZWFyY2hIaXN0b3J5XSA9IHVzZUF0b20oc2VhcmNoSGlzdG9yeUF0b20pXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBsZXQgcGFyc2VkSGlzdG9yeSA9IFtdO1xuXG4gICAgc2VhcmNoSGlzdG9yeS5mb3JFYWNoKGggPT4ge1xuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhoKTtcbiAgICAgICAgbGV0IGVudHJpZXMgPSBwYXJhbXMuZW50cmllcygpO1xuICAgICAgICBwYXJzZWRIaXN0b3J5LnB1c2goT2JqZWN0LmZyb21FbnRyaWVzKGVudHJpZXMpKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGhpc3RvcnlDbGlja2VkKGUsIGluZGV4KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvYXJ0d29yaz8ke3NlYXJjaEhpc3RvcnlbaW5kZXhdfWApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlSGlzdG9yeUNsaWNrZWQoZSwgaW5kZXgpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gc3RvcCB0aGUgZXZlbnQgZnJvbSB0cmlnZ2luZyBvdGhlciBldmVudHNcbiAgICAgICAgc2V0U2VhcmNoSGlzdG9yeShjdXJyZW50ID0+IHtcbiAgICAgICAgICAgIGxldCB4ID0gWy4uLmN1cnJlbnRdO1xuICAgICAgICAgICAgeC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7cGFyc2VkSGlzdG9yeS5sZW5ndGggPT09IDAgP1xuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5Pk5vdGhpbmcgSGVyZS4gVHJ5IHNlYXJjaGluZyBmb3Igc29tZSBhcnR3b3JrLjwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VkSGlzdG9yeS5tYXAoKGhpc3RvcnlJdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoZSkgPT4gaGlzdG9yeUNsaWNrZWQoZSwgaW5kZXgpfSBjbGFzc05hbWU9e3N0eWxlcy5oaXN0b3J5TGlzdEl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoaGlzdG9yeUl0ZW0pLm1hcCgoa2V5LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtrZXl9OiA8c3Ryb25nPntoaXN0b3J5SXRlbVtrZXldfTwvc3Ryb25nPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJmbG9hdC1lbmRcIiB2YXJpYW50PVwiZGFuZ2VyXCIgc2l6ZT1cInNtXCIgb25DbGljaz17KGUpID0+IHJlbW92ZUhpc3RvcnlDbGlja2VkKGUsIGluZGV4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUF0b20iLCJzZWFyY2hIaXN0b3J5QXRvbSIsInVzZVJvdXRlciIsInN0eWxlcyIsIkxpc3RHcm91cCIsIkNhcmQiLCJCdXR0b24iLCJIaXN0b3J5Iiwic2VhcmNoSGlzdG9yeSIsInNldFNlYXJjaEhpc3RvcnkiLCJyb3V0ZXIiLCJwYXJzZWRIaXN0b3J5IiwiZm9yRWFjaCIsImgiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJlbnRyaWVzIiwicHVzaCIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiaGlzdG9yeUNsaWNrZWQiLCJlIiwiaW5kZXgiLCJzdG9wUHJvcGFnYXRpb24iLCJyZW1vdmVIaXN0b3J5Q2xpY2tlZCIsImN1cnJlbnQiLCJ4Iiwic3BsaWNlIiwibGVuZ3RoIiwiQm9keSIsIm1hcCIsImhpc3RvcnlJdGVtIiwiSXRlbSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJoaXN0b3J5TGlzdEl0ZW0iLCJrZXlzIiwia2V5IiwiaSIsInNwYW4iLCJzdHJvbmciLCJ2YXJpYW50Iiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/history.js\n");

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"favouritesAtom\": () => (/* binding */ favouritesAtom),\n/* harmony export */   \"searchHistoryAtom\": () => (/* binding */ searchHistoryAtom)\n/* harmony export */ });\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai */ \"jotai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);\njotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst favouritesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)([]);\nconst searchHistoryAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)([]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFFckIsTUFBTUMsaUJBQWlCRCwyQ0FBSUEsQ0FBQyxFQUFFLEVBQUU7QUFFaEMsTUFBTUUsb0JBQW9CRiwyQ0FBSUEsQ0FBQyxFQUFFLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uL3N0b3JlLmpzPzQwZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gJ2pvdGFpJ1xuXG5leHBvcnQgY29uc3QgZmF2b3VyaXRlc0F0b20gPSBhdG9tKFtdKTtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaEhpc3RvcnlBdG9tID0gYXRvbShbXSk7Il0sIm5hbWVzIjpbImF0b20iLCJmYXZvdXJpdGVzQXRvbSIsInNlYXJjaEhpc3RvcnlBdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "jotai":
/*!************************!*\
  !*** external "jotai" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("jotai");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/history.js"));
module.exports = __webpack_exports__;

})();