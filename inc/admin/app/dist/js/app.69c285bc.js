(function (t) {
    function e(e) {
        for (var s, a, r = e[0], l = e[1], c = e[2], b = 0, d = []; b < r.length; b++) (a = r[b]), Object.prototype.hasOwnProperty.call(n, a) && n[a] && d.push(n[a][0]), (n[a] = 0);
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        u && u(e);
        while (d.length) d.shift()();
        return i.push.apply(i, c || []), o();
    }
    function o() {
        for (var t, e = 0; e < i.length; e++) {
            for (var o = i[e], s = !0, r = 1; r < o.length; r++) {
                var l = o[r];
                0 !== n[l] && (s = !1);
            }
            s && (i.splice(e--, 1), (t = a((a.s = o[0]))));
        }
        return t;
    }
    var s = {},
        n = { app: 0 },
        i = [];
    function a(e) {
        if (s[e]) return s[e].exports;
        var o = (s[e] = { i: e, l: !1, exports: {} });
        return t[e].call(o.exports, o, o.exports, a), (o.l = !0), o.exports;
    }
    (a.m = t),
        (a.c = s),
        (a.d = function (t, e, o) {
            a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
        }),
        (a.r = function (t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (a.t = function (t, e) {
            if ((1 & e && (t = a(t)), 8 & e)) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if ((a.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var s in t)
                    a.d(
                        o,
                        s,
                        function (e) {
                            return t[e];
                        }.bind(null, s)
                    );
            return o;
        }),
        (a.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t["default"];
                      }
                    : function () {
                          return t;
                      };
            return a.d(e, "a", e), e;
        }),
        (a.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (a.p = "");
    var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        l = r.push.bind(r);
    (r.push = e), (r = r.slice());
    for (var c = 0; c < r.length; c++) e(r[c]);
    var u = l;
    i.push([1, "chunk-vendors"]), o();
})({
    0: function (t, e) {},
    "0800": function (t, e, o) {},
    1: function (t, e, o) {
        t.exports = o("56d7");
    },
    1279: function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", { staticClass: "bby-style-flex bby-center" }, [
                    o(
                        "span",
                        {
                            staticClass: "bby-hint-pointer bby-style-flex bby-center",
                            on: {
                                click: function (e) {
                                    t.showHint = !t.showHint;
                                },
                            },
                        },
                        [
                            o("div", { staticClass: "bby-hint-place bby-hint-icon" }, [o("BaseIconBby", { attrs: { name: t.iconHintName, width: "18", height: "18", fill: t.fill } })], 1),
                            o(
                                "div",
                                { staticClass: "bby-hint-place bby-hint-content" },
                                [
                                    o("transition", { attrs: { name: "fromLeft" } }, [
                                        t.showHint
                                            ? o("div", { staticClass: "bby-hint-content-open" }, [
                                                  t._v(t._s(t.hintValue) + " "),
                                                  t.componentTitle ? o("div", [t._v("Read more in "), o("a", { attrs: { href: t.componentDocUrl, target: "_blank", rel: "noopener" } }, [t._v("documentation")])]) : t._e(),
                                              ])
                                            : t._e(),
                                    ]),
                                ],
                                1
                            ),
                        ]
                    ),
                ]);
            },
            n = [],
            i = (o("ba8c"), o("8daf")),
            a = o("1cec"),
            r = {
                props: { hintValue: String, iconHintName: { type: String, default: "bbyInfo" }, componentTitle: { type: String, default: "" }, fill: { color: String, default: "#444444" } },
                data: function () {
                    return { componentDocUrl: "", showHint: !1 };
                },
                created: function () {
                    this.componentTitle && (this.componentDocUrl = "".concat(a["b"].APP_DOCS_URL, "#").concat(i["a"].slugify(this.componentTitle)));
                },
            },
            l = r,
            c = (o("d192"), o("b0d7")),
            u = Object(c["a"])(l, s, n, !1, null, "5dfc2c07", null);
        e["default"] = u.exports;
    },
    1450: function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-box-component" },
                    [
                        o("BaseComponentTitle", { attrs: { title: t.title, hintObjectProps: t.firstComponentProps } }),
                        o("transition", { attrs: { name: "expand" }, on: { enter: t.enter, "after-enter": t.afterEnter, leave: t.leave } }, [
                            o("div", { directives: [{ name: "show", rawName: "v-show", value: t.showError, expression: "showError" }], staticClass: "bby-range-slider-error bby-error" }, [
                                o("p", [t._v("This value needs to be between " + t._s(t.rangeSliderMinValue) + " and " + t._s(t.rangeSliderMaxValue) + " ")]),
                            ]),
                        ]),
                        o(
                            "div",
                            { staticClass: "bby-component bby-range-slider" },
                            t._l(t.firstComponentProps.items, function (e, s) {
                                return o("div", { key: s, staticClass: "bby-component-wrapper", class: { inputError: t.showError } }, [
                                    o("input", {
                                        staticClass: "bby-range-slider-range",
                                        style: t.changeStyle,
                                        attrs: { type: "range", name: t.firstComponentProps.name, min: e.min, max: e.max, step: e.step },
                                        domProps: { value: t.rangeSliderValue },
                                        on: { input: t.rangeSlider },
                                    }),
                                    o("input", {
                                        staticClass: "bby-range-slider-input bby-input-text  bby-bg-primaryReverseWhite bby-stroke-primaryMediumGray",
                                        attrs: { type: "number", name: t.firstComponentProps.name, min: e.min, max: e.max },
                                        domProps: { value: t.rangeSliderValue },
                                        on: { input: t.rangeSlider },
                                    }),
                                ]);
                            }),
                            0
                        ),
                    ],
                    1
                );
            },
            n = [],
            i = o("3b7c"),
            a = (o("452c"), o("3a9c"), o("203f"), o("4fff"), o("65be")),
            r = o("5b8a"),
            l = o.n(r),
            c = {
                data: function () {
                    return { rangeSliderValue: "", rangeSliderMinValue: "", rangeSliderMaxValue: "", showError: !1 };
                },
                props: { firstComponentProps: Object, title: String },
                beforeMount: function () {
                    null == this.$store.state.values[this.firstComponentProps.name] && this.$store.commit("UPDATE_COMPONENT_VALUES", [{ name: this.firstComponentProps.name, value: this.firstComponentProps.selected_value }]),
                        (this.rangeSliderValue = this.rangeSliderState),
                        this.rangeSliderRanges();
                },
                watch: {
                    rangeSliderValue: l.a.throttle(function (t) {
                        t <= this.rangeSliderMaxValue && t >= this.rangeSliderMinValue && ("" == t && (t = 0), this.$store.commit("UPDATE_COMPONENT_VALUES", [{ value: t, name: this.firstComponentProps.name }]));
                    }, 5),
                    showError: function (t) {
                        this.$store.commit("UPDATE_COMPONENT_ERRORS", [{ value: t, name: this.firstComponentProps.name }]);
                    },
                },
                methods: {
                    rangeSliderRanges: function () {
                        for (var t in this.firstComponentProps.items) (this.rangeSliderMinValue = this.firstComponentProps.items[t].min), (this.rangeSliderMaxValue = this.firstComponentProps.items[t].max);
                    },
                    rangeSlider: function (t) {
                        (this.rangeSliderValue = t.target.value), t.target.value <= this.rangeSliderMaxValue && t.target.value >= this.rangeSliderMinValue && "" != t.target.value ? (this.showError = !1) : (this.showError = !0);
                    },
                    enter: function (t) {
                        t.style.height = "auto";
                        var e = getComputedStyle(t).height;
                        (t.style.height = 0),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = e;
                            }),
                            t.addEventListener("scroll", this.handleScroll);
                    },
                    afterEnter: function (t) {
                        t.style.height = "auto";
                    },
                    leave: function (t) {
                        (t.style.height = getComputedStyle(t).height),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = 0;
                            });
                    },
                },
                computed: Object(i["a"])(
                    {
                        changeStyle: function () {
                            var t;
                            return this.rangeSliderMinValue >= 0
                                ? ((t = ((this.rangeSliderValue - this.rangeSliderMinValue) / (this.rangeSliderMaxValue - this.rangeSliderMinValue)) * 100),
                                  t < 0 && (t = 0),
                                  { background: "linear-gradient(to right, #02f7f8 0%, #02f7f8 " + t + "%, #cccccc " + t + "%, #cccccc 100%)" })
                                : { background: "#cccccc" };
                        },
                    },
                    Object(a["b"])({
                        rangeSliderState: function (t) {
                            return t.values[this.firstComponentProps.name];
                        },
                    })
                ),
            },
            u = c,
            b = (o("8e07"), o("b0d7")),
            d = Object(b["a"])(u, s, n, !1, null, "7f514be8", null);
        e["default"] = d.exports;
    },
    "1cec": function (t, e, o) {
        "use strict";
        o.d(e, "f", function () {
            return h;
        }),
            o.d(e, "c", function () {
                return f;
            }),
            o.d(e, "d", function () {
                return m;
            }),
            o.d(e, "a", function () {
                return g;
            }),
            o.d(e, "e", function () {
                return p;
            }),
            o.d(e, "b", function () {
                return v;
            });
        var s = "",
            n = "/wp-admin/admin.php?page=bby_admin_logo_builder_main_page",
            i = n + "&action=getFonts",
            a = n + "&action=getIcons",
            r = n + "&action=getJSONvalues" || !1,
            l = "1.0.0",
            c = "http://builderboy.co/documentation/plugins/logobuilderboy/",
            u = "https://api.logo.builderboy.co/",
            b = "https://api.builderboy.co/",
            d = "https://builderboy.co",
            h = { JSON_HOST_ADDRESS: s, JSON_HOST_PATH: r, WP_MAIN_PAGE_URL: n, JSON_GOOGLE_FONTS: i, JSON_GOOGLE_ICONS: a },
            f = { API_LOGO_ENDPOINT: u },
            m = { API_NEWSLETTER_ENDPOINT: b },
            g = { APP_VERSION: l },
            p = { WEBSITE_URL: d },
            v = { APP_DOCS_URL: c };
    },
    2645: function (t, e, o) {},
    "281b": function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-box-component" },
                    [
                        o("BaseComponentTitle", { attrs: { title: t.title, hintObjectProps: t.firstComponentProps } }),
                        o("div", { staticClass: "bby-component bby-radio" }, [
                            o(
                                "div",
                                { staticClass: "bby-component-wrapper" },
                                t._l(t.firstComponentProps.items, function (e, s) {
                                    return o("div", { key: s }, [
                                        o("input", {
                                            staticClass: "bbyRadio",
                                            attrs: { type: "radio", id: e.value, name: t.firstComponentProps.name },
                                            domProps: { checked: t.checkedInputValue(e.value), value: e.value },
                                            on: { change: t.updateInput },
                                        }),
                                        o("label", { attrs: { for: e.value, id: e.value + "-label" } }, [o("BaseIconBby", { attrs: { name: e.iconSVG, width: "105", height: "105" } })], 1),
                                    ]);
                                }),
                                0
                            ),
                        ]),
                    ],
                    1
                );
            },
            n = [],
            i = o("3b7c"),
            a = (o("452c"), o("3a9c"), o("203f"), o("4fff"), o("65be")),
            r = {
                props: { firstComponentProps: Object, title: String },
                beforeMount: function () {
                    null == this.$store.state.values[this.firstComponentProps.name] && this.$store.commit("UPDATE_COMPONENT_VALUES", [{ name: this.firstComponentProps.name, value: this.firstComponentProps.selected_value }]);
                },
                computed: Object(i["a"])(
                    {},
                    Object(a["b"])({
                        radioButtonState: function (t) {
                            return t.values[this.firstComponentProps.name];
                        },
                    })
                ),
                methods: {
                    updateInput: function (t) {
                        this.$store.commit("UPDATE_COMPONENT_VALUES", [{ value: t.target.value, name: t.target.name }]);
                    },
                    checkedInputValue: function (t) {
                        return t === this.radioButtonState ? "checked" : "";
                    },
                    enter: function (t) {
                        t.style.height = "auto";
                        var e = getComputedStyle(t).height;
                        (t.style.height = 0),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = e;
                            });
                    },
                    afterEnter: function (t) {
                        t.style.height = "auto";
                    },
                    leave: function (t) {
                        (t.style.height = getComputedStyle(t).height),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = 0;
                            });
                    },
                },
            },
            l = r,
            c = (o("9e36"), o("b0d7")),
            u = Object(c["a"])(l, s, n, !1, null, "d745ecc8", null);
        e["default"] = u.exports;
    },
    "2bad": function (t, e, o) {},
    "3a71": function (t, e, o) {
        "use strict";
        o("0800");
    },
    "3d18": function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-component" },
                    [
                        o("BaseComponentTitle", { attrs: { title: t.title, hintObjectProps: t.firstComponentProps } }),
                        o("color-picker", {
                            attrs: { theme: "light", color: t.getColor(), "sucker-hide": !0 },
                            on: {
                                changeColor: function (e) {
                                    return t.changeColor(e, t.firstComponentProps.name);
                                },
                            },
                        }),
                    ],
                    1
                );
            },
            n = [],
            i = (o("ba8c"), o("203f"), o("452c"), o("3a9c"), o("ff2b")),
            a = o("5b8a"),
            r = o.n(a),
            l = {
                data: function () {
                    return { color: "", suckerCanvas: null, isSucking: !1 };
                },
                components: { colorPicker: i["a"] },
                methods: {
                    updateVuex: r.a.throttle(function (t, e) {
                        this.$store.commit("UPDATE_COLOR_PICKER", [{ rgba: t.rgba, hex: t.hex, name: e }]);
                    }, 10),
                    changeColor: function (t, e) {
                        var o = t.rgba,
                            s = o.r,
                            n = o.g,
                            i = o.b,
                            a = o.a;
                        (this.color = "rgba(".concat(s, ", ").concat(n, ", ").concat(i, ", ").concat(a, ")")), this.updateVuex(t, e);
                    },
                    getColor: function () {
                        var t = this.firstComponentProps.name,
                            e = this.$store.state.values[t],
                            o = { r: 255, g: 255, b: 255, a: 1 },
                            s = o.r,
                            n = o.g,
                            i = o.b,
                            a = o.a;
                        if (e) {
                            var r = this.$store.state.values[t][t + "_rgba"];
                            (s = r.r), (n = r.g), (i = r.b), (a = r.a);
                        } else {
                            var l = this.firstComponentProps.selected_value[t + "_rgba"];
                            (s = l.r), (n = l.g), (i = l.b), (a = l.a);
                        }
                        return "rgba(".concat(s, ", ").concat(n, ", ").concat(i, ", ").concat(a, ")");
                    },
                },
                props: { firstComponentProps: Object, propertyName: Object, title: String },
            },
            c = l,
            u = (o("cfe4"), o("b0d7")),
            b = Object(u["a"])(c, s, n, !1, null, "26887392", null);
        e["default"] = b.exports;
    },
    "3e88": function (t, e, o) {
        "use strict";
        o("a91a");
    },
    "44bd": function (t, e, o) {},
    4661: function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "row", attrs: { id: "previewRow" } },
                    [
                        t._l(t.firstComponentProps.items, function (e, s) {
                            return o(
                                "div",
                                { key: s, staticClass: "bby-components-left col-sm", attrs: { id: "previewColLeft" } },
                                [
                                    t._m(0, !0),
                                    t._l(e.options, function (e, s) {
                                        return o(
                                            "div",
                                            { key: s, staticClass: "bby-components-group" },
                                            [o("h4", [t._v(t._s(e.propertyName))]), o(e.component.type, { tag: "component", attrs: { firstComponentProps: e.component, title: e.propertyName } })],
                                            1
                                        );
                                    }),
                                ],
                                2
                            );
                        }),
                        o(
                            "div",
                            { staticClass: "bby-components-right col-sm" },
                            [
                                o("BaseFunctionalLogoPreview", {
                                    attrs: { logoUrl: t.imgURL.ImageURL },
                                    on: {
                                        generate: function (e) {
                                            return t.generatePNG();
                                        },
                                    },
                                }),
                            ],
                            1
                        ),
                    ],
                    2
                );
            },
            n = [
                function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", { staticClass: "bby-png-generator" }, [o("span", [o("img", { staticStyle: { display: "none" }, attrs: { id: "img" } })]), o("canvas", { staticStyle: { display: "none" }, attrs: { id: "canvas" } })]);
                },
            ],
            i = (o("4fff"), o("683e")),
            a = o("7dab"),
            r = o("fe6c"),
            l = o.n(r),
            c = o("1cec"),
            u = {
                data: function () {
                    return { imgURL: "", logoPNG: "" };
                },
                props: { firstComponentProps: Object },
                watch: {
                    logoPNG: function (t) {
                        var e = this;
                        l.a
                            .post(c["f"].WP_MAIN_PAGE_URL + "&action=uploadGeneratedLogo", t, { headers: i["a"].getAxiosHeadersConfig() })
                            .then(function (t) {
                                e.imgURL = t.data;
                                var o = t.data,
                                    s = "";
                                (s = o.error ? "error" : "success"), Object(a["a"])(o.message, s);
                            })
                            ["catch"](function (t) {
                                console.log(t);
                            });
                    },
                },
                methods: {
                    generatePNG: function () {
                        var t = document.getElementById("svgForPreview"),
                            e = document.getElementById("img"),
                            o = document.getElementById("canvas"),
                            s = (document.getElementById("newIMG"), new XMLSerializer().serializeToString(t)),
                            n = btoa(unescape(encodeURIComponent(s))),
                            i = "data:image/svg+xml;base64,",
                            a = i + n,
                            r = this,
                            l = e.cloneNode(!0);
                        (l.onload = function () {
                            document.fonts.ready.then(function () {
                                setTimeout(function () {
                                    var e = o.cloneNode(!0);
                                    (e.style.display = "inline-block"), (l.style.display = "inline-block"), (e.width = 12 * t.getAttribute("width")), (e.height = 12 * t.getAttribute("height"));
                                    var s = e.getContext("2d");
                                    s.scale(12, 12), s.drawImage(l, 0, 0), (r.logoPNG = e.toDataURL("image/png"));
                                }, 700);
                            });
                        }),
                            (l.src = a);
                    },
                },
            },
            b = u,
            d = (o("3a71"), o("b0d7")),
            h = Object(d["a"])(b, s, n, !1, null, "64160c82", null);
        e["default"] = h.exports;
    },
    "476c": function (t, e, o) {},
    "4bc7": function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-box-component" },
                    [
                        o("BaseComponentTitle", { attrs: { title: t.title, hintObjectProps: t.firstComponentProps } }),
                        o("div", { domProps: { innerHTML: t._s(t.ifIconsSprite) } }),
                        o(
                            "div",
                            { staticClass: "bby-component bby-dropdown" },
                            [
                                o(
                                    "div",
                                    {
                                        ref: "toggle",
                                        staticClass: "bby-f-dropdown-input bby-stroke-primaryMediumGray",
                                        on: {
                                            click: function (e) {
                                                t.toggleListShow = !t.toggleListShow;
                                            },
                                        },
                                    },
                                    [
                                        o("input", { staticClass: "bby-functional-input", attrs: { type: "text", readonly: "", placeholder: "Choose the icon" } }),
                                        o("span", [o("BaseIconBby", { attrs: { name: "bbyDown", width: "12", height: "12" } })], 1),
                                    ]
                                ),
                                o("transition", { attrs: { name: "expand" }, on: { enter: t.enter, "after-enter": t.afterEnter, leave: t.leave } }, [
                                    t.toggleListShow
                                        ? o(
                                              "div",
                                              {
                                                  directives: [{ name: "closable", rawName: "v-closable", value: { exclude: ["toggle"], handler: "onClose" }, expression: "{ exclude: ['toggle'], handler: 'onClose' }" }],
                                                  staticClass: "bby-f-dropdown",
                                              },
                                              [
                                                  o("div", { staticClass: "bby-f-dropdown-input-search" }, [
                                                      o("input", {
                                                          staticClass: "bby-f-dropdown-input-search",
                                                          attrs: { type: "text", placeholder: "Type here to search for the icon..." },
                                                          domProps: { value: t.searchIcon },
                                                          on: { input: t.searchIconsInput },
                                                      }),
                                                      o("button", { staticClass: "bby-icon-button bby-no-bg", on: { click: t.clearSearchBox } }, [o("BaseIconBby", { attrs: { name: "bbyDel", width: "12", height: "12" } })], 1),
                                                  ]),
                                                  o(
                                                      "div",
                                                      { staticClass: "bby-logo-icon-wrap" },
                                                      [
                                                          t.noContent ? o("div", { staticClass: "bby-logo-empty" }, [t._v(" Sorry, there are no local results for "), o("i", [t._v(" " + t._s(t.searchIcon))])]) : t._e(),
                                                          t._l(t.googleIcons.categories, function (e, s) {
                                                              return o("div", { key: s, staticClass: "bby-logo-icon" }, [
                                                                  o("h5", [t._v(t._s(s))]),
                                                                  o(
                                                                      "div",
                                                                      { staticClass: "bby-logo-icon-list-wrapper" },
                                                                      t._l(t.googleIcons.categories[s], function (e, s) {
                                                                          return o("div", { key: s, staticClass: "bby-logo-icon-single" }, [
                                                                              o(
                                                                                  "a",
                                                                                  {
                                                                                      staticClass: "chooseSingleIcon",
                                                                                      attrs: { href: "#" },
                                                                                      on: {
                                                                                          click: function (o) {
                                                                                              return o.preventDefault(), t.chooseInternalIcon(e.iconSet, e.iconName);
                                                                                          },
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                      o("svg", { attrs: { width: "35px", height: "35px", viewBox: "0 0 512 512", fill: "#4e4e4e" } }, [
                                                                                          o("use", { attrs: { "xlink:href": e.iconSpriteURL + "#" + e.iconName, id: e.iconName } }),
                                                                                      ]),
                                                                                  ]
                                                                              ),
                                                                          ]);
                                                                      }),
                                                                      0
                                                                  ),
                                                              ]);
                                                          }),
                                                          t.useSearch
                                                              ? o("div", { staticClass: "bby-use-search" }, [o("b", [t._v("Use searchbox on top for searching the icon")])])
                                                              : !t.useSearch && t.logoLicenseActive
                                                              ? o("div", { staticClass: "bby-load-more" }, [
                                                                    o(
                                                                        "button",
                                                                        {
                                                                            staticClass: "bby-button bby-button-small bby-bg-primaryIndigo",
                                                                            on: {
                                                                                click: function (e) {
                                                                                    return t.loadMoreIcons();
                                                                                },
                                                                            },
                                                                        },
                                                                        [t._v("Load more icons for '" + t._s(t.searchIcon) + "'")]
                                                                    ),
                                                                ])
                                                              : t.useSearch || t.logoLicenseActive
                                                              ? t._e()
                                                              : o("div", { staticClass: "bby-load-more" }, [
                                                                    o("b", { staticStyle: { color: "red !important" } }, [
                                                                        // t._v("Oh snap! You don't have an active license. You can fix it "),
                                                                        // o("a", { attrs: { href: t.buyLicenseLink } }, [t._v("here")]),
                                                                        t._v(" ")
                                                                    ]),
                                                                ]),
                                                          t.moreIcons
                                                              ? o("div", { staticClass: "bby-logo-icon-list" }, [
                                                                    t.ifIconsSpriteIDs.length
                                                                        ? o(
                                                                              "div",
                                                                              { staticClass: "bby-logo-icon-list-wrapper" },
                                                                              t._l(t.ifIconsSpriteIDs, function (e, s) {
                                                                                  return o("div", { key: s, staticClass: "bby-logo-icon-single" }, [
                                                                                      o(
                                                                                          "a",
                                                                                          {
                                                                                              staticClass: "chooseSingleIcon",
                                                                                              attrs: { href: "#" },
                                                                                              on: {
                                                                                                  click: function (o) {
                                                                                                      return o.preventDefault(), t.chooseIfIcon(e);
                                                                                                  },
                                                                                              },
                                                                                          },
                                                                                          [
                                                                                              o("svg", { attrs: { width: "35", height: "35", viewBox: "0 0 512 512", fill: "#4e4e4e" } }, [
                                                                                                  o("use", { attrs: { "xmlns:xlink": "http://www.w3.org/1999/xlink", "xlink:href": "#" + e } }),
                                                                                              ]),
                                                                                          ]
                                                                                      ),
                                                                                  ]);
                                                                              }),
                                                                              0
                                                                          )
                                                                        : t.noRemoteContent
                                                                        ? o("div", { staticClass: "bby-logo-empty" }, [t._v(" Sorry, there are no remote results for "), o("i", [t._v(" " + t._s(t.searchIcon))])])
                                                                        : o("div", { staticClass: "bby-spiner-wrap" }, [o("div", { staticClass: "bby-spinner" })]),
                                                                ])
                                                              : t._e(),
                                                      ],
                                                      2
                                                  ),
                                              ]
                                          )
                                        : t._e(),
                                ]),
                            ],
                            1
                        ),
                    ],
                    1
                );
            },
            n = [],
            i = o("cd20"),
            a = o("3b7c"),
            r = (o("203f"), o("a76d"), o("b98e"), o("0ec7"), o("9fa5"), o("71f6"), o("05d1"), o("254b"), o("ad5c"), o("04da"), o("452c"), o("3a9c"), o("ba8c"), o("442d"), o("4fff"), o("fe6c")),
            l = o.n(r),
            c = o("65be"),
            u = o("5b8a"),
            b = o.n(u),
            d = o("1cec"),
            h = o("683e"),
            f = {
                data: function () {
                    return {
                        searchIcon: "",
                        googleIcons: {},
                        selectedIcon: "",
                        toggleListShow: !1,
                        categoryEndPos: 3,
                        noContent: !1,
                        noRemoteContent: !1,
                        ifIconsSprite: "",
                        ifIconsSpriteIDs: [],
                        moreIcons: !1,
                        useSearch: !0,
                        choosenIfIcon: "",
                        buyLicenseLink: "".concat(d["e"].WEBSITE_URL, "/rd/buyLicense"),
                        appVersion: d["a"].APP_VERSION,
                    };
                },
                props: { firstComponentProps: Object, title: String },
                beforeMount: function () {
                    var t = JSON.parse(JSON.stringify(this.firstComponentProps.selected_value));
                    this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: t }]);
                },
                created: function () {
                    b.a.isEmpty(this.googleIconsState) && this.$store.dispatch("fetchIcons");
                },
                computed: Object(a["a"])(
                    {},
                    Object(c["b"])({
                        googleIconsState: function (t) {
                            return t.googleIcons;
                        },
                        ifIconsState: function (t) {
                            return t.ifIcons;
                        },
                        logoLicenseActive: function (t) {
                            return t.licenseActive;
                        },
                    })
                ),
                watch: {
                    googleIconsState: function (t, e) {
                        this.googleIcons = this.getIconsSubset(t);
                    },
                    searchIcon: b.a.debounce(function (t) {
                        var e = this.$el.getElementsByClassName("bby-f-dropdown")[0];
                        if (((e.scrollTop = 0), (this.ifIconsSprite = ""), (this.ifIconsSpriteIDs = []), t)) {
                            this.useSearch = !1;
                            var o = {};
                            for (var s in this.googleIconsState.categories)
                                for (var n = 0; n < this.googleIconsState.categories[s].length; n++) {
                                    var a = this.googleIconsState.categories[s][n].iconTags.filter(function (e) {
                                            return e.includes(t);
                                        }),
                                        r = this.googleIconsState.categories[s][n].iconName.includes(t);
                                    (b.a.isEmpty(a) && !r) || ((o = b.a.assign(Object(i["a"])({}, s, []), o)), o[s].push(this.googleIconsState.categories[s][n]));
                                }
                            b.a.isEmpty(o) && 0 != this.searchIcon ? (this.noContent = !0) : (this.noContent = !1);
                            var l = {};
                            Object.keys(o)
                                .sort()
                                .forEach(function (t) {
                                    l[t] = o[t];
                                }),
                                (this.googleIcons = { categories: l });
                        } else (this.useSearch = !0), (this.categoryEndPos = 3), (this.googleIcons = this.getIconsSubset(this.googleIconsState));
                    }, 250),
                },
                methods: {
                    loadMoreIcons: function () {
                        (this.moreIcons = !0), (this.noRemoteContent = !1), (this.ifIconsSprite = ""), (this.ifIconsSpriteIDs = []), this.searchIcon.length < 30 ? this.fetchIfIcons(this.searchIcon) : (this.noRemoteContent = !0);
                    },
                    fetchIfIcons: function (t) {
                        var e = this;
                        this.$nextTick(function () {
                            for (var t = e.$el.getElementsByClassName("bby-f-dropdown")[0], o = t.scrollHeight, s = t.scrollTop + t.clientHeight, n = s; n <= o; n += 1) t.scrollTo({ top: n, behavior: "smooth" });
                        }),
                            l.a
                                .post(d["c"].API_LOGO_ENDPOINT + "icons/getdetails", { search: t, appVersion: this.appVersion }, { headers: { "Content-Type": "application/json" } })
                                .then(function (o) {
                                    for (var s = o.data.message.Item.svgSprites, n = 0; n < s.length; n++)
                                        if ("" != s[n].svgSpriteURL) {
                                            for (var i = 0; i < s[n].svgSpriteIDs.length; i++) e.ifIconsSpriteIDs.push(s[n].svgSpriteIDs[i]);
                                            l.a.get(s[n].svgSpriteURL).then(function (t) {
                                                e.ifIconsSprite = e.ifIconsSprite + t.data;
                                            });
                                        } else
                                            l.a
                                                .post(d["c"].API_LOGO_ENDPOINT + "icons/getsprite", { search: t, svgSpriteID: "" + s[n].svgID, appVersion: e.appVersion }, { headers: { "Content-Type": "application/json" } })
                                                .then(function (t) {
                                                    for (var o = 0; o < t.data.message.Item.svgSprites.svgSpriteIDs.length; o++) e.ifIconsSpriteIDs.push(t.data.message.Item.svgSprites.svgSpriteIDs[o]);
                                                    l.a.get(t.data.message.Item.svgSprites.svgSpriteURL).then(function (t) {
                                                        e.ifIconsSprite = e.ifIconsSprite + t.data;
                                                    });
                                                });
                                })
                                ["catch"](function (t) {
                                    404 == t.response.status || 400 == t.response.status ? (e.noRemoteContent = !0) : (e.noRemoteContent = !1);
                                });
                    },
                    handleScroll: function () {
                        var t = this.$el.getElementsByClassName("bby-f-dropdown")[0],
                            e = t.scrollHeight,
                            o = t.scrollTop + t.clientHeight,
                            s = (o / e) * 100;
                        s.toFixed(0) > 80 && this.loadMore();
                    },
                    loadMore: function () {
                        (this.categoryEndPos = this.categoryEndPos + 3), this.searchIcon || (this.googleIcons = this.getIconsSubset(this.googleIconsState));
                    },
                    getIconsSubset: function (t) {
                        var e = Object.keys(t.categories);
                        e = e.slice(0, this.categoryEndPos);
                        for (var o = { categories: {} }, s = 0; s < e.length; s++) o.categories = b.a.assign(o.categories, Object(i["a"])({}, e[s], t.categories[e[s]]));
                        return o;
                    },
                    chooseIcon: function (t, e) {
                        e = Object(a["a"])(Object(a["a"])({}, e), {}, { iconClass: t.target.className });
                        var o = b.a.omit(this.$store.state.values.iconFunctionalLogoIcons, Object.keys(e)),
                            s = Object.keys(o);
                        s.forEach(function (t) {
                            e = Object(a["a"])(Object(a["a"])({}, e), {}, Object(i["a"])({}, t, ""));
                        }),
                            delete e.iconTags,
                            this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: e }]);
                    },
                    chooseInternalIcon: function (t, e) {
                        var o = this;
                        l.a.get(d["f"].WP_MAIN_PAGE_URL + "&action=getIconSVG&iconSet=".concat(t, "&iconName=").concat(e), { headers: h["a"].getAxiosHeadersConfig() }).then(function (t) {
                            var e = t.data.message,
                                s = { iconSvgCode: e };
                            o.$store.commit("UPDATE_LOGO_VALUES", [{ name: o.firstComponentProps.name, value: s }]);
                        });
                    },
                    chooseIfIcon: function (t, e) {
                        var o = document.getElementById(t).innerHTML.trim(),
                            s = o,
                            n = Object(a["a"])(Object(a["a"])({}, n), {}, { iconSvgCode: s });
                        this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: n }]);
                    },
                    searchIconsInput: function (t) {
                        (this.searchIcon = t.target.value), (this.moreIcons = !1);
                    },
                    clearSearchBox: function () {
                        (this.searchIcon = ""), (this.noContent = !1), (this.noRemoteContent = !1), (this.moreIcons = !1);
                    },
                    onClose: function () {
                        this.toggleListShow = !1;
                    },
                    enter: function (t) {
                        t.style.height = "auto";
                        var e = getComputedStyle(t).height;
                        (t.style.height = 0),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = e;
                            }),
                            t.addEventListener("scroll", this.handleScroll);
                    },
                    afterEnter: function (t) {
                        t.style.height = "auto";
                    },
                    leave: function (t) {
                        (t.style.height = getComputedStyle(t).height),
                            (this.categoryEndPos = 3),
                            (this.googleIcons = this.getIconsSubset(this.googleIconsState)),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = 0;
                            }, 200),
                            t.removeEventListener("scroll", this.handleScroll);
                    },
                },
            },
            m = f,
            g = (o("db99"), o("b0d7")),
            p = Object(g["a"])(m, s, n, !1, null, "3d3727eb", null);
        e["default"] = p.exports;
    },
    5012: function (t, e, o) {},
    "547d": function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-box-component" },
                    [
                        o("BaseComponentTitle", { attrs: { title: t.title, hintObjectProps: t.firstComponentProps } }),
                        o("transition", { attrs: { name: "expand" }, on: { enter: t.enter, "after-enter": t.afterEnter, leave: t.leave } }, [
                            o("div", { directives: [{ name: "show", rawName: "v-show", value: t.showError, expression: "showError" }], staticClass: "bby-range-slider-error bby-error" }, [o("p", [t._v("This value cannot be empty.")])]),
                        ]),
                        t._l(t.firstComponentProps.items, function (e, s) {
                            return o("div", { key: s, staticClass: "bby-component bby-text", class: { inputError: t.showError } }, [
                                o("textarea", {
                                    staticClass: "bby-input-text  bby-bg-primaryReverseWhite bby-stroke-primaryMediumGray",
                                    attrs: { cols: e.columns, rows: e.rows, name: t.firstComponentProps.name, placeholder: t.setPlaceHolder(t.firstComponentProps.name) },
                                    domProps: { value: t.getInputTextArea() },
                                    on: { input: t.updateInputTextArea },
                                }),
                            ]);
                        }),
                    ],
                    2
                );
            },
            n = [],
            i = o("3b7c"),
            a = (o("452c"), o("3a9c"), o("203f"), o("4fff"), o("65be")),
            r = {
                data: function () {
                    return { inputText: "", showError: !1 };
                },
                props: { firstComponentProps: Object, title: String },
                computed: Object(i["a"])(
                    {},
                    Object(a["b"])({
                        textAreaState: function (t) {
                            return t.values[this.firstComponentProps.name];
                        },
                    })
                ),
                beforeMount: function () {
                    null == this.$store.state.values[this.firstComponentProps.name] && this.$store.commit("UPDATE_COMPONENT_VALUES", [{ name: this.firstComponentProps.name, value: this.firstComponentProps.selected_value }]),
                        (this.inputText = this.firstComponentProps.selected_value);
                },
                watch: {
                    showError: function (t) {
                        this.$store.commit("UPDATE_COMPONENT_ERRORS", [{ value: t, name: this.firstComponentProps.name }]);
                    },
                },
                methods: {
                    enter: function (t) {
                        t.style.height = "auto";
                        var e = getComputedStyle(t).height;
                        (t.style.height = 0),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = e;
                            }),
                            t.addEventListener("scroll", this.handleScroll);
                    },
                    afterEnter: function (t) {
                        t.style.height = "auto";
                    },
                    leave: function (t) {
                        (t.style.height = getComputedStyle(t).height),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = 0;
                            });
                    },
                    updateInputTextArea: function (t) {
                        t.target.value ? ((this.showError = !1), (t.target.value = t.target.value), this.$store.commit("UPDATE_COMPONENT_VALUES", [{ value: t.target.value, name: t.target.name }])) : (this.showError = !0),
                            (this.inputText = t.target.value);
                    },
                    getInputTextArea: function (t) {
                        return "" == this.inputText ? ((this.showError = !0), this.inputText) : this.inputText;
                    },
                    setPlaceHolder: function (t) {
                        if (!this.$store.state.values[t] && "" == this.inputText && "" == this.firstComponentProps.selected_value) return this.firstComponentProps.items[0].value;
                    },
                },
                beforeDestroy: function () {
                    this.$store.commit("UPDATE_COMPONENT_ERRORS", [{ value: !1, name: this.firstComponentProps.name }]);
                },
            },
            l = r,
            c = o("b0d7"),
            u = Object(c["a"])(l, s, n, !1, null, "50ea1564", null);
        e["default"] = u.exports;
    },
    "56d7": function (t, e, o) {
        "use strict";
        o.r(e);
        o("333d"), o("884a"), o("3bcc"), o("1445"), o("9fa5"), o("71f6"), o("452c"), o("3a9c"), o("d3dd"), o("fa02"), o("a6c5");
        var s = o("eada"),
            n = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { attrs: { id: "app" } },
                    [
                        o("TabsHeader", { attrs: { headerValues: t.contentTabs.adminSettings } }),
                        t.firstInstall ? o("TabsInstall") : o("TabsSection"),
                        t.firstInstall ? t._e() : o("TabsFooter"),
                        o("notifications", { attrs: { group: "bby-notification", position: "center", classes: "bby-notification", duration: 1500, speed: 750 } }),
                    ],
                    1
                );
            },
            i = [],
            a = o("3b7c"),
            r = (o("82b7"), o("65be")),
            l = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-style-flex bby-column" },
                    [
                        o("div", { staticClass: "header container-fluid" }, [
                            o("header", { staticClass: "row" }, [
                                o("div", { staticClass: "bby-header col-sm bby-style-flex bby-row bby-space-between bby-center" }, [
                                    o("div", [o("a", { attrs: { href: "#" } }, [o("BaseIconBby", { attrs: { name: "bbyLogoCreatorWhite", height: "50", width: "200" } })], 1)]),
                                    o(
                                        "div",
                                        { staticClass: "bby-header-navigation" },
                                        [
                                            o("div", { staticClass: "bby-header-hamburger" }, [
                                                o(
                                                    "button",
                                                    { staticClass: "bby-icon-button bby-no-bg", attrs: { type: "button", name: "button" }, on: { click: t.openMenu } },
                                                    [o("BaseIconBby", { attrs: { name: "bbyMenu", width: "32", height: "32", fill: "#fff" } })],
                                                    1
                                                ),
                                            ]),
                                            o("transition", { attrs: { name: "menuAnimation" } }, [
                                                t.showMenu
                                                    ? o("div", { staticClass: "bby-header-menu", attrs: { id: "bbyMenu" } }, [
                                                          o(
                                                              "button",
                                                              { staticClass: "bby-header-menu-close bby-icon-button bby-no-bg", attrs: { type: "button", name: "button" }, on: { click: t.closeMenu } },
                                                              [o("BaseIconBby", { attrs: { name: "bbyDel", width: "32", height: "32", fill: "#fff" } })],
                                                              1
                                                          ),
                                                          o("nav", { staticClass: "bby-header-menu-nav" }, [
                                                              o("ul", { staticClass: "bby-header-menu-links bby-style-flex bby-column bby-space-evenly" }, [
                                                                  o("li", [o("a", { attrs: { href: t.WebsiteUrl + "/rd/documentation" } }, [t._v("Documentation")])]),
                                                                  t.licenseActiveState
                                                                      ? o("li", [o("a", { attrs: { href: "?page=bby_admin_logo_builder_advanced_settings" } }, [t._v("Advanced settings")])])
                                                                      : o("li", [
                                                                            o("span", [o("BaseHint", { attrs: { iconHintName: "bbyInfo", fill: "#ffffff", hintValue: "This option is not available in free version." } })], 1),
                                                                            o("a", { attrs: { href: "#" } }, [t._v("Advanced settings")]),
                                                                        ]),
                                                                  o("li", [o("a", { attrs: { href: t.WebsiteUrl + "/rd/contact" } }, [t._v("Contact")])]),
                                                              ]),
                                                          ]),
                                                          t.licenseActiveState
                                                              ? t._e()
                                                              : o(
                                                                    "button",
                                                                    {
                                                                        staticClass: "bby-button bby-button-medium  bby-bg-primaryAqua bby-color-primaryWhite",
                                                                        attrs: { type: "button", name: "button" },
                                                                        on: {
                                                                            click: function (e) {
                                                                                return t.buyNow();
                                                                            },
                                                                        },
                                                                    },
                                                                    [t._v("BUY LICENSE")]
                                                                ),
                                                          t.showSave
                                                              ? o(
                                                                    "button",
                                                                    {
                                                                        staticClass: "bby-button bby-button-medium  bby-bg-primaryIndigo bby-color-primaryWhite",
                                                                        attrs: { type: "button", name: "button" },
                                                                        on: {
                                                                            click: function (e) {
                                                                                return t.updateValues();
                                                                            },
                                                                        },
                                                                    },
                                                                    [t._v("SAVE CHANGES")]
                                                                )
                                                              : t._e(),
                                                          o(
                                                              "button",
                                                              {
                                                                  staticClass: "bby-button-stroke bby-button-small bby-stroke-primaryWhite",
                                                                  attrs: { type: "button", name: "button" },
                                                                  on: {
                                                                      click: function (e) {
                                                                          return t.executeButtonAction();
                                                                      },
                                                                  },
                                                              },
                                                              [t._v("Reset to defaults")]
                                                          ),
                                                      ])
                                                    : t._e(),
                                            ]),
                                        ],
                                        1
                                    ),
                                ]),
                            ]),
                        ]),
                        t._l(t.headerNotifications, function (e, s) {
                            return o(
                                "div",
                                { key: s, staticClass: "bby-subheader-notifications" },
                                [
                                    o("transition", { attrs: { name: "expand" }, on: { enter: t.enter, "after-enter": t.afterEnter, leave: t.leave } }, [
                                        o("div", { directives: [{ name: "show", rawName: "v-show", value: e.text, expression: "headerNotification.text" }], staticClass: "bby-subheader-notifications-single", attrs: { keys: s } }, [
                                            o("div", { staticClass: "bby-subheader-notifications-inner bby-style-flex bby-row bby-space-between bby-center" }, [
                                                o("div", { domProps: { innerHTML: t._s(e.text) } }),
                                                o(
                                                    "button",
                                                    {
                                                        staticClass: "bby-icon-button bby-no-bg",
                                                        attrs: { type: "button", name: "button" },
                                                        on: {
                                                            click: function (e) {
                                                                return t.closeNotification(s);
                                                            },
                                                        },
                                                    },
                                                    [o("BaseIconBby", { attrs: { name: "bbyDel", width: "12", height: "12", fill: "#000" } })],
                                                    1
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                ],
                                1
                            );
                        }),
                        o("BaseModal", { attrs: { modalDisplay: t.addLicense }, on: { clicked: t.onClickChild } }),
                    ],
                    2
                );
            },
            c = [],
            u = (o("4fff"), o("fe6c")),
            b = o.n(u),
            d = o("683e"),
            h = o("7dab"),
            f = o("1cec"),
            m = {
                data: function () {
                    return { showMenu: !1, licenseInfo: "", licenseActive: "", headerNotifications: [], addLicense: !1, formError: !1, WebsiteUrl: f["e"].WEBSITE_URL, firstInstall: null };
                },
                props: { headerValues: Object },
                updated: function () {
                    if (document.getElementById("licenseModal")) document.getElementById("licenseModal").onclick = this.licenseModal;
                },
                watch: {
                    headerValues: function (t) {
                        "true" == t.selected_value.init.toLowerCase() ? (this.firstInstall = !0) : "false" == t.selected_value.init.toLowerCase() && (this.firstInstall = !1),
                            this.firstInstall ? (this.showSave = !1) : (this.licenseStatusInstall(t.selected_value.license), (this.showSave = !0));
                    },
                    licenseValuesState: function (t) {
                        var e;
                        "true" == t.init.toLowerCase() ? (e = !0) : "false" == t.init.toLowerCase() && (e = !1), e ? (this.licenseStatusInstall(t.license), (this.showSave = !1)) : (this.showSave = !0);
                    },
                    licenseActiveState: function (t) {
                        this.licenseStatusInstall(t);
                    },
                    updateAvailable: function (t) {
                        if (t) {
                            var e = 'UPDATE IS AVAILABLE, YOU CAN DOWNLOAD IT HERE: <a href="'.concat(f["e"].WEBSITE_URL, '/rd/logobuilder/download"><b>LATEST VERSION</b></a>');
                            this.headerNotifications = Object(a["a"])(Object(a["a"])({}, this.headerNotifications), {}, { update: { text: e } });
                        }
                    },
                    showMenu: function (t) {
                        var e = document.getElementsByClassName("vue-notification-group")[0];
                        e.classList.toggle("menuIsOpen", t);
                    },
                },
                computed: Object(a["a"])(
                    {},
                    Object(r["b"])({
                        licenseActiveState: function (t) {
                            return t.licenseActive;
                        },
                        updateAvailable: function (t) {
                            return t.updateAvailable;
                        },
                        licenseValuesState: function (t) {
                            return t.values.licenseVerification;
                        },
                        licenseCodeState: function (t) {
                            return t.contentTabs.adminSettings.selected_value;
                        },
                        componentErrorsState: function (t) {
                            return t.componentErrors;
                        },
                    })
                ),
                methods: {
                    buyNow: function () {
                        window.open("".concat(f["e"].WEBSITE_URL, "/rd/logobuilder/buyLicense"), "_self");
                    },
                    updateValues: function () {
                        for (var t in this.componentErrorsState) if (((this.formError = this.componentErrorsState[t]), this.formError)) break;
                        this.formError ? Object(h["a"])("Ooops some fields are incorrect!", "errors") : this.$store.commit("replaceValues");
                    },
                    onClickChild: function () {
                        this.addLicense = !1;
                    },
                    licenseModal: function () {
                        this.addLicense = !0;
                    },
                    licenseStatusInstall: function (t) {
                        // var e = this;
                        // if ("" != t) {
                        //     var o = '<span class="active">license status:<b> ACTIVE</b></span>';
                        //     (this.headerNotifications = Object(a["a"])(Object(a["a"])({}, this.headerNotifications), {}, { licenseStat: { text: o } })),
                        //         setTimeout(function () {
                        //             e.headerNotifications.licenseStat = "";
                        //         }, 3e3);
                        // } else if (!this.firstInstall) {
                        //     o = '<span class="inactive">license status:<b> INACTIVE</b>, you can activate here: <button class="bby-icon-button bby-no-bg" id="licenseModal"><b>activate</b></button></span>';
                        //     this.headerNotifications = Object(a["a"])(Object(a["a"])({}, this.headerNotifications), {}, { licenseStat: { text: o } });
                        // }
                    },
                    closeNotification: function (t) {
                        this.headerNotifications[t].text = "";
                    },
                    enter: function (t) {
                        t.style.height = "auto";
                        var e = getComputedStyle(t).height;
                        (t.style.height = 0),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = e;
                            });
                    },
                    afterEnter: function (t) {
                        t.style.height = "auto";
                    },
                    leave: function (t) {
                        (t.style.height = getComputedStyle(t).height),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = 0;
                            });
                    },
                    openMenu: function () {
                        this.showMenu = !0;
                    },
                    closeMenu: function () {
                        this.showMenu = !1;
                    },
                    executeButtonAction: function () {
                        b.a
                            .get(f["f"].WP_MAIN_PAGE_URL + "&action=internalJSONupdate&force=true", { headers: d["a"].getAxiosHeadersConfig() })
                            .then(function (t) {
                                var e = t.data,
                                    o = "";
                                return (o = e.error ? "error" : "success"), Object(h["a"])(e.message, o), b.a.get(f["f"].WP_MAIN_PAGE_URL + "&action=internalSaveIcons&force=true", { headers: d["a"].getAxiosHeadersConfig() });
                            })
                            .then(function (t) {
                                var e = t.data,
                                    o = "";
                                return (o = e.error ? "error" : "success"), Object(h["a"])(e.message, o), b.a.get(f["f"].WP_MAIN_PAGE_URL + "&action=internalSaveGoogleFonts&force=true", { headers: d["a"].getAxiosHeadersConfig() });
                            })
                            .then(function (t) {
                                var e = t.data,
                                    o = "";
                                return (o = e.error ? "error" : "success"), Object(h["a"])(e.message, o), b.a.get(f["f"].WP_MAIN_PAGE_URL + "&action=internalSavePanelAssets&force=true", { headers: d["a"].getAxiosHeadersConfig() });
                            })
                            .then(function (t) {
                                var e = t.data,
                                    o = "";
                                (o = e.error ? "error" : "success"),
                                    Object(h["a"])(e.message, o),
                                    setTimeout(function () {
                                        location.reload();
                                    }, 1500);
                            })
                            ["catch"](function (t) {
                                var e = t.response.data,
                                    o = "";
                                (o = e.error ? "error" : "success"), Object(h["a"])(e.message, o);
                            });
                    },
                },
            },
            g = m,
            p = (o("9f72"), o("b0d7")),
            v = Object(p["a"])(g, l, c, !1, null, "79b01e64", null),
            y = v.exports,
            C = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", { staticClass: "bby-column" }, [
                    o("div", { staticClass: "footer container-fluid" }, [
                        o("footer", { staticClass: "row" }, [
                            o("div", { staticClass: "bby-footer col-sm bby-style-flex bby-space-between bby-center" }, [
                                o("div", { staticClass: "bby-footer-copyright" }, [t._v(" © All rights reserved. ")]),
                                // o("ul", { staticClass: "bby-footer-social-contact bby-row bby-center" }, [
                                //     o("li", [o("a", { attrs: { href: t.WebsiteUrl + "/rd/facebook" } }, [o("BaseIconBby", { attrs: { name: "facebook", height: "20", width: "20", fill: "#C2C2C2" } })], 1)]),
                                //     o("li", [o("a", { attrs: { href: t.WebsiteUrl + "/rd/instagram" } }, [o("BaseIconBby", { attrs: { name: "instagram", height: "20", width: "20", fill: "#C2C2C2" } })], 1)]),
                                //     o("li", [o("a", { attrs: { href: t.WebsiteUrl + "/rd/behance" } }, [o("BaseIconBby", { attrs: { name: "behance", height: "20", width: "20", fill: "#C2C2C2" } })], 1)]),
                                //     o("li", [o("a", { attrs: { href: t.WebsiteUrl + "/rd/contact" } }, [o("BaseIconBby", { attrs: { name: "bbyMail", height: "20", width: "20", fill: "#C2C2C2" } })], 1)]),
                                // ]),
                                o(
                                    "button",
                                    {
                                        staticClass: "bby-button bby-button-medium  bby-bg-primaryIndigo",
                                        on: {
                                            click: function (e) {
                                                return t.updateValues();
                                            },
                                        },
                                    },
                                    [t._v("Save changes")]
                                ),
                            ]),
                        ]),
                    ]),
                ]);
            },
            S = [],
            E = {
                data: function () {
                    return { formError: !1, WebsiteUrl: f["e"].WEBSITE_URL };
                },
                methods: {
                    updateValues: function () {
                        for (var t in this.componentErrorsState) if (((this.formError = this.componentErrorsState[t]), this.formError)) break;
                        this.formError ? Object(h["a"])("Ooops some fields are incorrect!", "errors") : this.$store.commit("replaceValues");
                    },
                },
                computed: Object(a["a"])(
                    {},
                    Object(r["b"])({
                        componentErrorsState: function (t) {
                            return t.componentErrors;
                        },
                    })
                ),
            },
            _ = E,
            T = Object(p["a"])(_, C, S, !1, null, "64b293dd", null),
            I = T.exports,
            x = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", { staticClass: "bby-section container-fluid" }, [o("TabsContent")], 1);
            },
            w = [],
            O = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-content" },
                    t._l(t.contentTabs.globalSettings, function (e, s) {
                        return o(
                            "div",
                            { key: s },
                            t._l(e.categoryPages, function (t, e) {
                                return o("div", { key: e }, [o("SingleTab", { attrs: { sPages: t.sectionPages } })], 1);
                            }),
                            0
                        );
                    }),
                    0
                );
            },
            P = [],
            L = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-single-tab", attrs: { id: "bby-single-tab" } },
                    t._l(t.sPages, function (e, s) {
                        return o(
                            "div",
                            { key: s },
                            [
                                o("div", { staticClass: "bby-heading" }, [
                                    o("div", { staticClass: "bby-heading-title" }, [o("h2", [t._v(t._s(e.title))])]),
                                    "true" == e.displayHint ? o("div", { staticClass: "bby-heading-hint" }, [o("BaseHint", { attrs: { hint: e.hint } })], 1) : t._e(),
                                ]),
                                t._l(e.properties, function (t, e) {
                                    return o("div", { key: e, staticClass: "bby-components-wrapper" }, [o(t.component.type, { tag: "component", attrs: { firstComponentProps: t.component, propertyName: t } })], 1);
                                }),
                            ],
                            2
                        );
                    }),
                    0
                );
            },
            A = [],
            N = { props: { sPages: Array } },
            B = N,
            V = (o("fd44"), Object(p["a"])(B, L, A, !1, null, "7aef7e1e", null)),
            k = V.exports,
            U = {
                components: { SingleTab: k },
                data: function () {
                    return {};
                },
                methods: {},
                computed: Object(a["a"])(
                    {},
                    Object(r["b"])({
                        contentTabs: function (t) {
                            return t.contentTabs;
                        },
                        selectedContentTabsId: function (t) {
                            return t.selectedContentTabsId;
                        },
                    })
                ),
            },
            F = U,
            j = Object(p["a"])(F, O, P, !1, null, "02ac0055", null),
            M = j.exports,
            R = { components: { TabsContent: M } },
            D = R,
            G = Object(p["a"])(D, x, w, !1, null, null, null),
            $ = G.exports,
            W = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", { staticClass: "bby-section container-fluid" }, [
                    o("div", { staticClass: "bby-content" }, [
                        o("div", { staticClass: "bby-single-tab" }, [
                            o("div", { staticClass: "bby-components-wrapper" }, [
                                o("div", { staticClass: "row justify-content-around" }, [
                                    o("div", { staticClass: "bby-components-left col-sm-8 col-xl-6" }, [
                                        o("div", { staticClass: "bby-box-margin bby-box-component" }, [
                                            o("div", { staticClass: "bby-box bby-bg-primaryReverseWhite" }, [
                                                o("div", { staticClass: "bby-box-install" }, [
                                                    o("h4", [t._v("INSTALLATION PROGRESS")]),
                                                    o("div", { staticClass: "bby-box-install-progress" }, [
                                                        o(
                                                            "ul",
                                                            { staticClass: "bby-style-flex bby-row bby-justify-center" },
                                                            t._l(t.tabs, function (e, s) {
                                                                return o("li", { key: s, staticClass: "progress-step" }, [t._v(t._s(e))]);
                                                            }),
                                                            0
                                                        ),
                                                    ]),
                                                    
                                                    o("div", { staticClass: "progress-step-tab" }, [
                                                        o("div", { staticClass: "progress-step-tab-content" }, [
                                                            o("h3", [t._v("Hello there!")]),
                                                            o("p", [
                                                                t._v(
                                                                    "Nice to finally see you here, we’ve been waiting for you! You are only a few steps away from your totally new, breathtaking experience in designing logos for your venture."
                                                                ),
                                                            ]),
                                                            o("h5", [t._v("LET'S GET STARTED!")]),
                                                            o("p", { staticClass: "bby-logo-in-content" }, [o("BaseIconBby", { attrs: { name: "bbyLogoColor", height: "43", width: "200" } })], 1),
                                                        ]),
                                                    ]),
                                                    
                                                    o("div", { staticClass: "progress-step-tab" }, [
                                                        o("div", { staticClass: "progress-step-tab-content" }, [
                                                            o("div", { staticClass: "bby-box-install-license" }, [
                                                                o("h3", [t._v("Hello there!")]),
                                                                o("h5", [t._v("CLICK INITIALIZE TO SETUP PLUGIN")]),
                                                                o("button", { staticClass: "bby-button bby-button-medium bby-bg-primaryIndigo skip-step", on: { click: t.nextStep } }, [t._v("INITIALIZE")]),
                                                            ]),
                                                            o("br"),
                                                            o("p", { staticClass: "bby-logo-in-content" }, [o("BaseIconBby", { attrs: { name: "bbyLogoColor", height: "43", width: "200" } })], 1),
                                                        ]),
                                                    ]),
                                                    
                                                    o("div", { staticClass: "progress-step-tab" }, [
                                                        o("div", { staticClass: "progress-step-tab-content" }, [
                                                            o("h5", [t._v("Now we need to prepare few important things:")]),
                                                            o(
                                                                "div",
                                                                { staticClass: "bby-box-install-elements" },
                                                                t._l(t.elementImport, function (e, s) {
                                                                    return o("div", { key: s, staticClass: "bby-box-install-elements-single", attrs: { id: "bby-box-install-elements-single" } }, [
                                                                        t._v(" " + t._s(e.title) + " " + t._s(t.elementImportText) + " "),
                                                                    ]);
                                                                }),
                                                                0
                                                            ),
                                                        ]),
                                                    ]),
                                                    o("div", { staticClass: "progress-step-tab" }, [
                                                        o("div", { staticClass: "progress-step-tab-content" }, [
                                                            o("h3", [t._v("All done!")]),
                                                            o("h5", [t._v("YOUR PLUGIN IS READY TO USE")]),
                                                            o("p", [t._v("We hope you will have an amazing experience, just like we promised. If you want to share your thoughts about our products, don't hesitate to contact us!")]),
                                                            o("p", [o("BaseIconBby", { attrs: { name: "bbyLogoColor", height: "43", width: "200" } })], 1),
                                                        ]),
                                                    ]),
                                                ]),
                                                o("div", { staticClass: "bby-box-install-buttons", attrs: { id: "bby-box-install-buttons" } }, [
                                                    o("div", { staticClass: "bby-box-install-button-single" }, [
                                                        t.prevButtonDisplay
                                                            ? o("button", { staticClass: "bby-button-stroke bby-button-small bby-stroke-primaryGray", attrs: { id: "prev" }, on: { click: t.prevStep } }, [t._v("BACK")])
                                                            : t._e(),
                                                    ]),
                                                    o("div", { staticClass: "bby-box-install-button-single" }, [
                                                        o("button", { staticClass: "bby-button bby-button-medium bby-bg-primaryIndigo", attrs: { id: "next" }, on: { click: t.nextStep } }, [t._v(t._s(t.nextStepButton))]),
                                                    ]),
                                                ]),
                                            ]),
                                            // Hide skip button by removing btn text
                                            t.skipStep ? o("button", { staticClass: "bby-icon-button bby-no-bg skip-step", on: { click: t.nextStep } }, [t._v(" ")]) : t._e(),
                                        ]),
                                    ]),
                                    o("div", { staticClass: "bby-components-right col-sm-8 col-xl-6" }, [
                                        o("div", { staticClass: "bby-box-margin bby-box-component" }, [
                                            // o("div", { staticClass: "bby-box bby-bg-primaryReverseWhite" }, [
                                            //     o("div", { staticClass: "bby-newsletter bby-style-flex bby-column" }, [
                                            //         t._m(0),
                                            //         o("div", { staticClass: "bby-style-flex bby-column", attrs: { id: "newsletter-info" } }, [
                                            //             o(
                                            //                 "div",
                                            //                 { staticClass: "bby-box-install-license-input-message" },
                                            //                 [
                                            //                     o("transition", { attrs: { name: "errMessage" } }, [
                                            //                         t.emailText.validEmail ? o("div", { staticClass: "input-message" }, [t._v(" " + t._s(t.emailText.validEmail) + " ")]) : t._e(),
                                            //                     ]),
                                            //                     o("transition", { attrs: { name: "errMessage" } }, [
                                            //                         t.emailText.errorEmail ? o("div", { staticClass: "input-message" }, [t._v(" " + t._s(t.emailText.errorEmail) + " ")]) : t._e(),
                                            //                     ]),
                                            //                     o("transition", { attrs: { name: "errMessage" } }, [
                                            //                         t.emailText.requestId ? o("div", { staticClass: "input-message" }, [t._v(" " + t._s(t.emailText.requestId) + " ")]) : t._e(),
                                            //                     ]),
                                            //                 ],
                                            //                 1
                                            //             ),
                                            //             o("div", { staticClass: "bby-style-flex bby-column bby-input-area" }, [
                                            //                 o("div", { staticClass: "bby-input-area-top bby-style-flex" }, [
                                            //                     o("input", {
                                            //                         staticClass: "bby-input-text bby-bg-primaryReverseWhite bby-stroke-primaryMediumGray",
                                            //                         attrs: { id: "newsletterInput", type: "text", placeholder: "Your e-mail" },
                                            //                         domProps: { value: t.email },
                                            //                         on: { input: t.newsletterEmail },
                                            //                     }),
                                            //                     o("div", { staticClass: "bby-button-newsletter bby-button-verify" }, [
                                            //                         o("button", {
                                            //                             staticClass: "disabled",
                                            //                             attrs: { id: "verifyNewsletter" },
                                            //                             on: {
                                            //                                 click: function (e) {
                                            //                                     return t.buttonNewsletter(t.email);
                                            //                                 },
                                            //                             },
                                            //                         }),
                                            //                     ]),
                                            //                 ]),
                                            //             ]),
                                            //             o("div", { staticClass: "bby-input-area-bottom bby-style-flex bby-row bby-center" }, [
                                            //                 o("input", { attrs: { type: "checkbox", id: "newsletter", name: "" }, on: { input: t.checkboxNewsletter } }),
                                            //                 o("label", { attrs: { for: "newsletter" } }, [t._v("Send me information about products, services, deals or recommendations by email.")]),
                                            //             ]),
                                            //         ]),
                                            //     ]),
                                            // ]),
                                            // o("div", { staticClass: "bby-box bby-bg-primaryReverseWhite" }, [
                                            //     o("div", { staticClass: "bby-contact-box" }, [
                                            //         t._m(1),
                                            //         o("ul", { staticClass: "contact-box-list bby-style-flex bby-row" }, [
                                            //             o("li", [o("a", { attrs: { href: t.WebsiteUrl + "/rd/facebook" } }, [o("BaseIconBby", { attrs: { name: "facebook", height: "20", width: "20" } })], 1)]),
                                            //             o("li", [o("a", { attrs: { href: t.WebsiteUrl + "/rd/instagram" } }, [o("BaseIconBby", { attrs: { name: "instagram", height: "20", width: "20" } })], 1)]),
                                            //             o("li", [o("a", { attrs: { href: t.WebsiteUrl + "/rd/behance" } }, [o("BaseIconBby", { attrs: { name: "behance", height: "20", width: "20" } })], 1)]),
                                            //             o("li", [o("a", { attrs: { href: t.WebsiteUrl + "/rd/contact" } }, [o("BaseIconBby", { attrs: { name: "bbyMail", height: "20", width: "20" } })], 1)]),
                                            //         ]),
                                            //     ]),
                                            // ]),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]),
                    ]),
                    // o("div", { staticClass: "bby-install-feature row justify-content-around" }, [
                    //     o("div", { staticClass: "bby-components-left col-sm-8 col-xl-6" }, [
                    //         o("h3", [t._v("OUR EXTENSIONS")]),
                    //         o("div", { staticClass: "bby-install-feature-list bby-style-flex" }, [
                    //             o("div", { staticClass: "bby-install-feature-list-single bby-box bby-bg-primaryReverseWhite" }, [
                    //                 t._m(2),
                    //                 o("div", { staticClass: "bby-install-feature-list-single-right" }, [
                    //                     o("span", [t._v("Modern approach for creating amazing logos without expensive graphic software.")]),
                    //                     o("div", { staticClass: "bby-install-feature-list-single-buy" }, [
                    //                         o(
                    //                             "button",
                    //                             {
                    //                                 staticClass: "bby-button bby-button-medium bby-bg-primaryIndigo",
                    //                                 on: {
                    //                                     click: function (e) {
                    //                                         return t.buyNow();
                    //                                     },
                    //                                 },
                    //                             },
                    //                             [t._v("BUY NOW")]
                    //                         ),
                    //                     ]),
                    //                 ]),
                    //             ]),
                    //             t._m(3),
                    //             t._m(4),
                    //             t._m(5),
                    //         ]),
                    //     ]),
                    //     o("div", { staticClass: "bby-components-right col-sm-8 col-xl-6" }, [o("img", { attrs: { src: "/wp-content/uploads/builderboy/assets/bby-builders-02.svg?ver=" + t.appVersion, alt: "" } })]),
                    // ]),
                ]);
            },
            H = [
                function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", { staticClass: "bby-style-flex bby-column" }, [o("h4", [t._v("NEWSLETTER")]), o("p", [t._v("Want to be up to date with our latest news? Leave your e-mail below.")])]);
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", { staticClass: "contact-box-text" }, [o("h4", [t._v("FIND US")]), o("p", [t._v("Check out our social media and stay in touch.")])]);
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", { staticClass: "bby-install-feature-list-single-left" }, [
                        o("p", [t._v("READY")]),
                        o("div", { staticClass: "bby-feature-title" }, [o("span", { staticClass: "bby-feature-title-name" }, [t._v("LOGO")]), o("br"), o("span", { staticClass: "bby-feature-title-subname" }, [t._v("Builder")])]),
                        o("ul", { staticClass: "bby-feature-list bby-style-flex bby-justify-center bby-row" }, [o("li", [t._v("SVG/PNG")]), o("li", [t._v("Limitless")])]),
                    ]);
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", { staticClass: "bby-install-feature-list-single bby-box bby-bg-primaryReverseWhite" }, [
                        o("div", { staticClass: "bby-install-feature-list-single-left" }, [
                            o("p", [t._v("IN PROGRESS")]),
                            o("div", { staticClass: "bby-feature-title" }, [
                                o("span", { staticClass: "bby-feature-title-name" }, [t._v("PERFORMANCE & SECURITY")]),
                                o("br"),
                                o("span", { staticClass: "bby-feature-title-subname" }, [t._v("Builder")]),
                            ]),
                            o("ul", { staticClass: "bby-feature-list bby-style-flex bby-justify-center bby-row" }, [o("li", [t._v("Safe")]), o("li", [t._v("Simple")])]),
                        ]),
                        o("div", { staticClass: "bby-install-feature-list-single-right" }, [
                            o("span", [t._v("Work fast & stay safe with your Wordpress and WooCommerce websites.")]),
                            o("div", { staticClass: "bby-install-feature-list-single-buy" }, [o("button", { staticClass: "bby-button bby-button-small bby-stroke-primaryGray" }, [t._v("AVAILABLE SOON")])]),
                        ]),
                    ]);
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", { staticClass: "bby-install-feature-list-single bby-box bby-bg-primaryReverseWhite" }, [
                        o("div", { staticClass: "bby-install-feature-list-single-left" }, [
                            o("p", [t._v("IN PROGRESS")]),
                            o("div", { staticClass: "bby-feature-title" }, [
                                o("span", { staticClass: "bby-feature-title-name" }, [t._v("HEADER & FOOTER")]),
                                o("br"),
                                o("span", { staticClass: "bby-feature-title-subname" }, [t._v("Builder")]),
                            ]),
                            o("ul", { staticClass: "bby-feature-list bby-style-flex bby-justify-center bby-row" }, [o("li", [t._v("Intuitive")]), o("li", [t._v("Lightweight")])]),
                        ]),
                        o("div", { staticClass: "bby-install-feature-list-single-right" }, [
                            o("span", [t._v("Build beautiful headers and footers without any programming knowledge.")]),
                            o("div", { staticClass: "bby-install-feature-list-single-buy" }, [o("button", { staticClass: "bby-button bby-button-small bby-stroke-primaryGray" }, [t._v("AVAILABLE SOON")])]),
                        ]),
                    ]);
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", { staticClass: "bby-install-feature-list-single bby-box bby-bg-primaryReverseWhite" }, [
                        o("div", { staticClass: "bby-install-feature-list-single-left" }, [
                            o("p", [t._v("IN PROGRESS")]),
                            o("div", { staticClass: "bby-feature-title" }, [o("span", { staticClass: "bby-feature-title-name" }, [t._v("THEME")]), o("br"), o("span", { staticClass: "bby-feature-title-subname" }, [t._v("All in one")])]),
                            o("ul", { staticClass: "bby-feature-list bby-style-flex bby-justify-center bby-row" }, [o("li", [t._v("Powerful")]), o("li", [t._v("Highend")])]),
                        ]),
                        o("div", { staticClass: "bby-install-feature-list-single-right" }, [
                            o("span", [t._v("All of our extensions in a single package. Made using cutting edge technologies.")]),
                            o("div", { staticClass: "bby-install-feature-list-single-buy" }, [o("button", { staticClass: "bby-button bby-button-small bby-stroke-primaryGray" }, [t._v("AVAILABLE SOON")])]),
                        ]),
                    ]);
                },
            ],
            z =
                (o("254b"),
                o("203f"),
                o("a619"),
                o("4991"),
                o("ebb5"),
                {
                    data: function () {
                        return {
                            appVersion: f["a"].APP_VERSION,
                            WebsiteUrl: f["e"].WEBSITE_URL,
                            checkbox: !1,
                            licenseCode: "",
                            count: 0,
                            nextStepButton: "NEXT",
                            prevButtonDisplay: !1,
                            skipStep: !1,
                            licenseInfo: "INACTIVE",
                            elementImport: { saveIcon: { title: "icons", active: !1 }, saveGoogleFonts: { title: "fonts", active: !1 }, saveAssets: { title: "assets", active: !1 } },
                            elementImportText: "",
                            errorText: { baseMessage: "", requestId: "", emptyValue: "", wrongFormat: "" },
                            licenseActive: !1,
                            tabs: ["WELCOME", "GETTING START", "INSTALLATION", "COMPLETED"],
                            email: "",
                            emailText: { validEmail: "", errorEmail: "", requestId: "" },
                        };
                    },
                    beforeMount: function () {
                        "" != this.licenseCodeState.license && this.licenseVerify(this.licenseCodeState.license);
                    },
                    mounted: function () {
                        document.getElementsByClassName("progress-step")[0].classList.add("active"), document.getElementsByClassName("progress-step-tab")[0].classList.add("active");
                    },
                    watch: {
                        elementImport: {
                            handler: function (t) {
                                var e = document.getElementById("next"),
                                    o = Object.keys(t);
                                for (var s in o) if (!1 === t[o[s]].active) return;
                                e.classList.remove("disabled"), (e.disabled = !1);
                            },
                            deep: !0,
                        },
                        count: function (t, e) {
                            var o,
                                s,
                                n = this,
                                i = document.getElementById("next"),
                                a = document.getElementsByClassName("progress-step"),
                                r = document.getElementsByClassName("progress-step-tab");
                            (t >= a.length - 1 ? (this.nextStepButton = "BUILD YOUR LOGO") : (this.nextStepButton = "NEXT"),
                            t > e && (a[t].classList.add("active"), r[t].classList.add("active"), r[e].classList.remove("active")),
                            t < e && (r[t].classList.add("active"), r[e].classList.remove("active")),
                            0 != t && (this.prevButtonDisplay = !0),
                            1 === t ? ((this.skipStep = !0), this.licenseActive || (i.classList.add("disabled"), (i.disabled = !0))) : ((this.skipStep = !1), i.classList.remove("disabled"), (i.disabled = !1)),
                            t <= 0 && (this.prevButtonDisplay = !1),
                            2 === t) &&
                                (function () {
                                    var t = ["saveIcon", "saveGoogleFonts", "saveAssets"];
                                    for (o in t)
                                        n.elementImport[t[o]].active ||
                                            ((s = document.getElementsByClassName("bby-box-install-elements-single")),
                                            s[o].classList.add("installActive"),
                                            i.classList.add("disabled"),
                                            (i.disabled = !0),
                                            (n.elementImportText = ""),
                                            setTimeout(
                                                function (e) {
                                                    d["a"][t[e]]().then(function (o) {
                                                        200 === o.status && ((n.elementImportText = "ready!"), s[e].classList.remove("installActive"), s[e].classList.add("installed"), (n.elementImport[t[e]].active = !0));
                                                    });
                                                },
                                                3e3,
                                                o
                                            ));
                                })();
                        },
                        licenseActive: function (t) {
                            var e = document.getElementById("next"),
                                o = document.getElementById("bby-box-install-status-box");
                            t
                                ? (e.classList.remove("disabled"), (e.disabled = !1), (this.licenseInfo = "ACTIVE"), o.classList.add("activePlugin"))
                                : (e.classList.add("disabled"), (e.disabled = !0), (this.licenseInfo = "INACTIVE"), o.classList.remove("activePlugin"));
                        },
                        checkbox: function (t) {
                            var e = document.getElementById("verifyNewsletter");
                            t ? e.classList.remove("disabled") : e.classList.add("disabled");
                        },
                    },
                    methods: {
                        checkboxNewsletter: function (t) {
                            this.checkbox = t.target.checked;
                        },
                        buyNow: function () {
                            window.open("".concat(f["e"].WEBSITE_URL, "/rd/logobuilder/buyLicense"), "_self");
                        },
                        updateValues: function () {
                            this.licenseActive
                                ? this.$store.commit("UPDATE_INSTALLATION", [{ value: { license: this.licenseCode, init: "false" }, name: this.contentTabs.adminSettings.name }])
                                : this.$store.commit("UPDATE_INSTALLATION", [{ value: { license: "", init: "false" }, name: this.contentTabs.adminSettings.name }]),
                                this.$store.commit("replaceValues");
                        },
                        nextStep: function () {
                            var t = document.getElementsByClassName("progress-step");
                            this.count++, this.count >= t.length && this.updateValues();
                        },
                        prevStep: function () {
                            var t = document.getElementsByClassName("progress-step");
                            t[this.count].classList.remove("active"), this.count--;
                        },
                        licenseCodeInput: function (t) {
                            (this.licenseCode = t.target.value), 0 != this.licenseCode && (this.errorText.emptyValue = "");
                        },
                        newsletterEmail: function (t) {
                            this.email = t.target.value;
                        },
                        callbackSuccess: function (t) {
                            var e = this,
                                o = document.getElementById("newsletter-info");
                            setTimeout(function () {
                                t.classList.remove("validate"), t.classList.remove("invalidate"), (e.errorText.baseMessage = ""), (e.emailText.validEmail = ""), o.classList.remove("emailSuccess");
                            }, 2e3);
                        },
                        callbackError: function (t, e) {
                            var o = this,
                                s = document.getElementById("newsletter-info");
                            setTimeout(function () {
                                t.classList.remove("validate"),
                                    t.classList.remove("invalidate"),
                                    e.classList.remove("error"),
                                    (o.emailText.errorEmail = ""),
                                    (o.emailText.requestId = ""),
                                    s.classList.remove("emailError"),
                                    (o.licenseError = !0),
                                    (o.errorText.requestId = "");
                            }, 2e3);
                        },
                        encodeHtmlChars: function (t) {
                            var e = t.length,
                                o = [];
                            while (e--) {
                                var s = t[e].charCodeAt();
                                o[e] = s < 48 || (s > 57 && s < 65) || (s > 90 && s < 97) || s > 123 ? "&#" + s + ";" : t[e];
                            }
                            return o.join("");
                        },
                        buttonNewsletter: function (t) {
                            var e = this,
                                o = document.getElementById("newsletter-info"),
                                s = document.getElementById("verifyNewsletter"),
                                n = document.getElementById("newsletterInput");
                            if ("" != this.email && this.checkbox) {
                                var i = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gm);
                                if (i.test(t)) {
                                    var a = new Date(),
                                        r = this.encodeHtmlChars(t);
                                    s.classList.add("onclick"),
                                        b.a
                                            .post(f["d"].API_NEWSLETTER_ENDPOINT + "newsletter/email/add", { email: r, date: a, appVersion: this.appVersion, product: "logoBuilder" }, { headers: { "Content-Type": "application/json" } })
                                            .then(function (t) {
                                                "200" == t.status &&
                                                    setTimeout(function () {
                                                        (e.emailText.validEmail = t.data.message), o.classList.add("emailSuccess"), s.classList.remove("onclick"), s.classList.add("validate"), e.callbackSuccess(s);
                                                    }, 3e3);
                                            })
                                            ["catch"](function (t) {
                                                setTimeout(function () {
                                                    o.classList.add("emailError"),
                                                        (e.emailText.errorEmail = t.response.data.message),
                                                        (e.emailText.requestId = "Your request ID: " + t.response.data.requestId),
                                                        s.classList.remove("onclick"),
                                                        s.classList.add("invalidate"),
                                                        n.classList.add("error"),
                                                        e.callbackError(s, n);
                                                }, 3e3);
                                            });
                                } else
                                    o.classList.add("emailError"),
                                        (this.emailText.errorEmail = "Email address is not valid. Please verify."),
                                        setTimeout(function () {
                                            (e.emailText.errorEmail = ""), o.classList.remove("emailError");
                                        }, 3e3);
                            } else
                                "" === this.email &&
                                    (o.classList.add("emailError"),
                                    (this.emailText.errorEmail = "Value cannot be empty."),
                                    setTimeout(function () {
                                        (e.emailText.errorEmail = ""), o.classList.remove("emailError");
                                    }, 3e3)),
                                    !1 === this.checkbox &&
                                        (o.classList.add("emailError"),
                                        (this.emailText.errorEmail = "You need to agree to our Privacy Policy by clicking checkbox below."),
                                        setTimeout(function () {
                                            (e.emailText.errorEmail = ""), o.classList.remove("emailError");
                                        }, 3e3));
                        },
                        licenseVerify: function (t) {
                            var e = this,
                                o = document.getElementById("buttonVerify");
                            if ("" != this.licenseCode) {
                                var s = new RegExp(/^([a-f0-9]{8})-(([a-f0-9]{4})-){3}([a-f0-9]{12})$/);
                                if (s.test(this.licenseCode)) {
                                    o.classList.add("onclick");
                                    var n = this.encodeHtmlChars(t);
                                    d["a"]
                                        .checkLicenseActive(n)
                                        .then(function (s) {
                                            "200" == s.status &&
                                                setTimeout(function () {
                                                    (e.errorText.baseMessage = s.data.message),
                                                        (e.licenseActive = !0),
                                                        o.classList.remove("onclick"),
                                                        o.classList.add("validate"),
                                                        e.callbackSuccess(o),
                                                        e.$store.commit("LICENSE_STATUS", { active: !0 }),
                                                        e.$store.commit("UPDATE_COMPONENT_VALUES", [{ value: { license: t, init: "false" }, name: e.contentTabs.adminSettings.name }]);
                                                }, 2e3);
                                        })
                                        ["catch"](function (t) {
                                            var s = document.getElementById("licenseCodeInput");
                                            t.response.data.error &&
                                                setTimeout(function () {
                                                    (e.licenseActive = !1),
                                                        (e.errorText.baseMessage = t.response.data.message),
                                                        (e.errorText.requestId = "Your request ID:" + t.response.data.requestId),
                                                        o.classList.remove("onclick"),
                                                        o.classList.add("invalidate"),
                                                        s.classList.add("error"),
                                                        e.callbackError(o, s),
                                                        e.$store.commit("LICENSE_STATUS", { active: !1 }),
                                                        e.$store.commit("UPDATE_COMPONENT_VALUES", [{ value: { license: "", init: "true" }, name: e.contentTabs.adminSettings.name }]);
                                                }, 3e3);
                                        });
                                } else
                                    (this.errorText.wrongFormat = "Wrong license format."),
                                        setTimeout(function () {
                                            e.errorText.wrongFormat = "";
                                        }, 3e3),
                                        this.$store.commit("LICENSE_STATUS", { active: !1 });
                            } else this.errorText.emptyValue = "Value cannot be empty.";
                        },
                    },
                    computed: Object(a["a"])(
                        {},
                        Object(r["b"])({
                            contentTabs: function (t) {
                                return t.contentTabs;
                            },
                            licenseCodeState: function (t) {
                                return t.contentTabs.adminSettings.selected_value;
                            },
                        })
                    ),
                }),
            q = z,
            Y = (o("e851"), Object(p["a"])(q, W, H, !1, null, "483d55ff", null)),
            J = Y.exports,
            X = {
                components: { TabsInstall: J, TabsHeader: y, TabsFooter: I, TabsSection: $ },
                created: function () {
                    this.$store.dispatch("fetchTabsContent");
                },
                data: function () {
                    return { firstInstall: !1 };
                },
                computed: Object(a["a"])(
                    {},
                    Object(r["b"])({
                        contentTabs: function (t) {
                            return t.contentTabs;
                        },
                        licenseActive: function (t) {
                            return t.licenseActive;
                        },
                    })
                ),
                methods: {
                    encodeHtmlChars: function (t) {
                        var e = t.length,
                            o = [];
                        while (e--) {
                            var s = t[e].charCodeAt();
                            o[e] = s < 48 || (s > 57 && s < 65) || (s > 90 && s < 97) || s > 123 ? "&#" + s + ";" : t[e];
                        }
                        return o.join("");
                    },
                },
                watch: {
                    "contentTabs.adminSettings.selected_value.init": function (t) {
                        "true" == t.toLowerCase() ? (this.firstInstall = !0) : "false" == t.toLowerCase() && (this.firstInstall = !1);
                    },
                    "contentTabs.appInfo.version": function (t) {
                        this.$store.dispatch("fetchCheckForUpdate");
                    },
                    "contentTabs.adminSettings.selected_value.license": function (t) {
                        var e = this;
                        if (t) {
                            var o = this.encodeHtmlChars(t);
                            d["a"]
                                .checkLicenseActive(o)
                                .then(function (t) {
                                    "200" == t.status && e.$store.commit("LICENSE_STATUS", { active: !0 });
                                })
                                ["catch"](function (t) {
                                    t.response.data.error && e.$store.commit("LICENSE_STATUS", { active: !1 });
                                });
                        } else this.$store.commit("LICENSE_STATUS", { active: !1 });
                    },
                },
            },
            Z = X,
            K = (o("5c0b"), Object(p["a"])(Z, n, i, !1, null, null, null)),
            Q = K.exports,
            tt = o("cd20"),
            et = (o("4972"), o("5b8a")),
            ot = o.n(et);
        s["default"].use(r["a"]);
        var st,
            nt = new r["a"].Store({
                strict: !0,
                state: { contentTabs: [], googleIcons: {}, googleFonts: [], selectedContentTabsId: "011", componentErrors: {}, values: {}, licenseActive: null, updateAvailable: !1 },
                mutations: {
                    SET_COMPONENT: function (t, e) {
                        t.contentTabs = e;
                    },
                    SET_ICONS: function (t, e) {
                        t.googleIcons = e;
                    },
                    SET_FONTS: function (t, e) {
                        t.googleFonts = e.items;
                    },
                    LICENSE_STATUS: function (t, e) {
                        t.licenseActive = e.active;
                    },
                    SET_IF_ICONS: function (t, e) {
                        t.ifIcons = e.message;
                    },
                    TOGGLE_TAB: function (t, e) {
                        t.selectedContentTabsId = e;
                    },
                    UPDATE_COMPONENT_VALUES: function (t, e) {
                        for (var o = 0; o < e.length; o++) t.values = Object.assign({}, t.values, Object(tt["a"])({}, e[o].name, e[o].value));
                    },
                    UPDATE_COMPONENT_ERRORS: function (t, e) {
                        for (var o = 0; o < e.length; o++) t.componentErrors = Object.assign({}, t.componentErrors, Object(tt["a"])({}, e[o].name, e[o].value));
                    },
                    UPDATE_SELECT_WEIGHT: function (t, e) {
                        for (var o = 0; o < e.length; o++) t.values = Object.assign({}, t.values, Object(tt["a"])({}, e[o].name, e[o].value));
                    },
                    UPDATE_SELECT_FONT_LOGO_URL: function (t, e) {
                        for (var o = 0; o < e.length; o++) t.values = Object.assign({}, t.values, { textLogoFontFaceUrl: e[o].value });
                    },
                    UPDATE_COLOR_PICKER: function (t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var s;
                            t.values = Object.assign({}, t.values, Object(tt["a"])({}, e[o].name, ((s = {}), Object(tt["a"])(s, e[o].name + "_hex", e[o].hex), Object(tt["a"])(s, e[o].name + "_rgba", e[o].rgba), s)));
                        }
                    },
                    UPDATE_ICON_CHECKBOX: function (t, e) {
                        for (var o = 0; o < e.length; o++) t.values = ot.a.merge(t.values, Object(tt["a"])({}, e[o].name, e[o].value));
                    },
                    UPDATE_LOGO_VALUES: function (t, e) {
                        for (var o = 0; o < e.length; o++) t.values[e[o].name] = Object(a["a"])(Object(a["a"])({}, t.values[e[o].name]), e[o].value);
                    },
                    UPDATE_LOGO_TEXT_FONT_FAMILY: function (t, e) {
                        for (var o = 0; o < e.length; o++) t.values = Object.assign({}, t.values, Object(tt["a"])({}, e[o].name, e[o].value));
                    },
                    UPDATE_INSTALLATION: function (t, e) {
                        for (var o = 0; o < e.length; o++) t.values[e[o].name] = ot.a.merge(t.values[e[o].name], e[o].value);
                    },
                    UPDATE_UPDATE_AVAILABLE: function (t, e) {
                        t.updateAvailable = e;
                    },
                    replaceValues: function (t) {
                        if (t.values) {
                            var e = d["a"].contentValues(t.contentTabs, t.values);
                            b.a
                                .post(f["f"].WP_MAIN_PAGE_URL + "&action=postJSONvalues", e, { headers: d["a"].getAxiosHeadersConfig() })
                                .then(function (t) {
                                    var e = t.data,
                                        o = "";
                                    (o = e.error ? "errors" : "success"), Object(h["a"])(e.message, o);
                                })
                                ["catch"](function (t) {
                                    var e = t.response.data,
                                        o = "";
                                    (o = e.error ? "errors" : "success"), Object(h["a"])(e.message, o);
                                });
                        }
                    },
                },
                actions: {
                    logoActions: function (t, e) {
                        var o = t.commit;
                        o("CREATE_LOGO", e);
                    },
                    fetchTabsContent: function (t) {
                        var e = t.commit;
                        t.dispatch;
                        d["a"]
                            .getTabContent()
                            .then(function (t) {
                                e("SET_COMPONENT", t.data);
                            })
                            ["catch"](function (t) {
                                console.log("Error getting JSON values: ", t.response);
                                var e = t.response.data,
                                    o = "";
                                (o = e.error ? "error" : "success"), Object(h["a"])("Something went wrong! Please contact our support team.", o);
                            });
                    },
                    fetchFonts: function (t) {
                        var e = t.commit;
                        d["a"]
                            .getFonts()
                            .then(function (t) {
                                var o = { kind: "webfonts#webfontList", items: [] };
                                (o.items = t.data.items.map(function (t) {
                                    for (var e in t.files) t.files[e] = t.files[e].replace(/http\:/g, "");
                                    return t;
                                })),
                                    e("SET_FONTS", o);
                            })
                            ["catch"](function (t) {
                                console.log("There was an error:", t.response);
                            });
                    },
                    fetchIcons: function (t) {
                        var e = t.commit;
                        d["a"]
                            .getIcons()
                            .then(function (t) {
                                e("SET_ICONS", t.data);
                            })
                            ["catch"](function (t) {
                                console.log("There was an error:", t.response);
                            });
                    },
                    fetchCheckForUpdate: function (t) {
                        var e = this,
                            o = t.commit;
                        d["a"]
                            .checkForUpdate()
                            .then(function (t) {
                                var s = e.state.contentTabs.appInfo,
                                    n = t.data,
                                    i = function (t, e) {
                                        for (var o = t.split("."), s = e.split("."), n = 0; n < s.length; n++) {
                                            var i = ~~s[n],
                                                a = ~~o[n];
                                            if (i > a) return !0;
                                            if (i < a) return !1;
                                        }
                                        return !1;
                                    },
                                    a = i(s.version, n.currentVersion);
                                a && (console.log("New version for Logo BuilderBoy is available!"), o("UPDATE_UPDATE_AVAILABLE", a));
                            })
                            ["catch"](function (t) {
                                console.log("There was an error:", t.response);
                            });
                    },
                },
            }),
            it = o("dc80"),
            at = o.n(it),
            rt = o("a5b3"),
            lt = o.n(rt),
            ct = o("92e3"),
            ut = o.n(ct),
            bt = o("ef13");
        bt.keys().forEach(function (t) {
            var e = bt(t),
                o = at()(
                    lt()(
                        t
                            .split("/")
                            .pop()
                            .replace(/\.\w+$/, "")
                    )
                );
            s["default"].component(o, e["default"] || e);
        }),
            s["default"].directive("closable", {
                bind: function (t, e, o) {
                    (st = function (s) {
                        s.stopPropagation();
                        var n = e.value,
                            i = n.handler,
                            a = n.exclude,
                            r = !1;
                        a.forEach(function (t) {
                            if (!r) {
                                var e = o.context.$refs[t];
                                r = e.contains(s.target);
                            }
                        }),
                            t.contains(s.target) || r || o.context[i]();
                    }),
                        document.addEventListener("click", st),
                        document.addEventListener("touchstart", st);
                },
                unbind: function () {
                    document.removeEventListener("click", st), document.removeEventListener("touchstart", st);
                },
            }),
            (s["default"].config.productionTip = !1),
            s["default"].use(ut.a),
            new s["default"]({
                store: nt,
                render: function (t) {
                    return t(Q);
                },
            }).$mount("#app");
    },
    "5b69": function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-functional-components" },
                    [
                        o("div", { staticClass: "bby-box bby-bg-primaryReverseWhite" }, [
                            o("div", { staticClass: "bby-box-component-title bby-style-flex bby-center" }, [
                                o("h5", [t._v(t._s(t.title))]),
                                o("div", { staticClass: "bby-heading-hint" }, [o("BaseHint", { attrs: { hintValue: "Once enabled you will be able to use icon in the logo", componentTitle: t.title } })], 1),
                            ]),
                            o("label", { attrs: { for: t.firstComponentProps.name } }, [
                                o("div", { staticClass: "switch-box-wrapper" }, [o("div", { staticClass: "switch-box", class: t.styleCheckbox() }, [o("div", { staticClass: "switch-box-circle" })])]),
                            ]),
                            o("input", { attrs: { hidden: "", id: t.firstComponentProps.name, type: "checkbox", name: "isIconTextLogoFunctionalLogoText" }, on: { change: t.haveIcon } }),
                        ]),
                        o("transition", { attrs: { name: "expand" }, on: { enter: t.enter, "after-enter": t.afterEnter, leave: t.leave } }, [
                            o(
                                "div",
                                { directives: [{ name: "show", rawName: "v-show", value: t.isLogoIcon, expression: "isLogoIcon" }] },
                                t._l(t.firstComponentProps.items, function (e, s) {
                                    return o(
                                        "div",
                                        { key: s, staticClass: "bby-box bby-bg-primaryReverseWhite", class: t.error(e.component.name) },
                                        [o(e.component.type, { tag: "component", attrs: { firstComponentProps: e.component, title: e.propertyName } })],
                                        1
                                    );
                                }),
                                0
                            ),
                        ]),
                    ],
                    1
                );
            },
            n = [],
            i = o("3b7c"),
            a = (o("452c"), o("3a9c"), o("203f"), o("4fff"), o("65be")),
            r = o("5b8a"),
            l = o.n(r),
            c =
                (o("8daf"),
                {
                    data: function () {
                        return { isLogoIcon: "", title: "use icon for your logo?" };
                    },
                    props: { firstComponentProps: Object },
                    beforeMount: function () {
                        if (null == this.$store.state.values.logoFunctionalLogoIcon) {
                            var t = JSON.parse(JSON.stringify(this.firstComponentProps.selected_value));
                            (t.iconSvgCode = t.iconSvgCode), this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: t }]);
                        } else this.isLogoIcon = "true" == this.logoIconUse.iconUse;
                    },
                    methods: {
                        styleCheckbox: function () {
                            return this.isLogoIcon ? "switchBoxOn" : "switchBoxOff";
                        },
                        error: function (t) {
                            if (this.$store.state.componentErrors[t]) return "bby-box-error";
                        },
                        haveIcon: function (t) {
                            (this.isLogoIcon = !this.isLogoIcon), this.$store.commit("UPDATE_ICON_CHECKBOX", [{ name: this.firstComponentProps.name, value: { iconUse: "" + this.isLogoIcon } }]);
                        },
                        enter: function (t) {
                            t.style.height = "auto";
                            var e = getComputedStyle(t).height;
                            (t.style.height = 0),
                                getComputedStyle(t),
                                setTimeout(function () {
                                    t.style.height = e;
                                });
                        },
                        afterEnter: function (t) {
                            t.style.height = "auto";
                        },
                        leave: function (t) {
                            (t.style.height = getComputedStyle(t).height),
                                getComputedStyle(t),
                                setTimeout(function () {
                                    t.style.height = 0;
                                });
                        },
                    },
                    watch: {
                        logoIconTypeState: function (t, e) {
                            l.a.isEqual(t, e) || this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: t }]);
                        },
                        logoIconSizeState: function (t, e) {
                            l.a.isEqual(t, e) || this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { iconSize: t } }]);
                        },
                        logoIconColorState: function (t, e) {
                            l.a.isEqual(t, e) || this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { iconColor: t } }]);
                        },
                        "logoIconUse.iconUse": function (t, e) {
                            l.a.isEqual(t, e) || (this.isLogoIcon = "true" == t);
                        },
                        logoIconTopOffsetState: function (t, e) {
                            l.a.isEqual(t, e) || this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { iconTopOffset: t } }]);
                        },
                        logoIconLeftOffsetState: function (t, e) {
                            l.a.isEqual(t, e) || this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { iconLeftOffset: t } }]);
                        },
                        logoIconPositionState: function (t, e) {
                            l.a.isEqual(t, e) || this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { iconPosition: t } }]);
                        },
                        logoIconOwnSVGState: function (t, e) {
                            l.a.isEqual(t, e) || (t && this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { iconSvgCode: t } }]));
                        },
                        logoIconUseOwnSVGState: function (t, e) {
                            l.a.isEqual(t, e) ||
                                ("true" === t.toLowerCase() && this.logoIconOwnSVGState
                                    ? this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { iconSvgCode: this.logoIconOwnSVGState } }])
                                    : this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: this.logoIconTypeState }]));
                        },
                    },
                    computed: Object(i["a"])(
                        {},
                        Object(a["b"])({
                            logoIconTypeState: function (t) {
                                return t.values.iconFunctionalLogoIcons;
                            },
                            logoIconSizeState: function (t) {
                                return t.values.iconSizeRangeSlider;
                            },
                            logoIconColorState: function (t) {
                                return t.values.iconColorColorPicker;
                            },
                            logoIconUse: function (t) {
                                return t.values.logoFunctionalLogoIcon;
                            },
                            logoIconTopOffsetState: function (t) {
                                return t.values.iconTopOffsetRangeSlider;
                            },
                            logoIconLeftOffsetState: function (t) {
                                return t.values.iconLeftOffsetRangeSlider;
                            },
                            logoIconPositionState: function (t) {
                                return t.values.iconPositionRadioButton;
                            },
                            logoIconUseOwnSVGState: function (t) {
                                return t.values.iconOwnSVGCheckbox;
                            },
                            logoIconOwnSVGState: function (t) {
                                return t.values.iconOwnSVGTextArea;
                            },
                            showError: function (t) {
                                return t.componentErrors.iconSizeRangeSlider;
                            },
                        })
                    ),
                }),
            u = c,
            b = (o("6f98"), o("b0d7")),
            d = Object(b["a"])(u, s, n, !1, null, "b2013e58", null);
        e["default"] = d.exports;
    },
    "5c0b": function (t, e, o) {
        "use strict";
        o("c96d");
    },
    6721: function (t, e, o) {},
    "683e": function (t, e, o) {
        "use strict";
        var s = o("4605"),
            n = (o("203f"), o("fe6c")),
            i = o.n(n),
            a = o("1cec"),
            r = { Accept: "application/json", "Content-Type": "application/json", "X-BuilderBoy": "QnVpbGRlckJveQ==" },
            l = i.a.create({ baseURL: a["f"].JSON_HOST_ADDRESS, withCredentials: !1, headers: r });
        e["a"] = {
            getTabContent: function () {
                return l.get(a["f"].JSON_HOST_PATH);
            },
            getFonts: function () {
                return l.get(a["f"].JSON_GOOGLE_FONTS);
            },
            getIcons: function () {
                return l.get(a["f"].JSON_GOOGLE_ICONS);
            },
            saveJson: function () {
                return l.get(a["f"].WP_MAIN_PAGE_URL + "&action=internalJSONupdate&force=true");
            },
            saveIcon: function () {
                return l.get(a["f"].WP_MAIN_PAGE_URL + "&action=internalSaveIcons&force=true");
            },
            saveGoogleFonts: function () {
                return l.get(a["f"].WP_MAIN_PAGE_URL + "&action=internalSaveGoogleFonts&force=true");
            },
            saveAssets: function () {
                return l.get(a["f"].WP_MAIN_PAGE_URL + "&action=internalSavePanelAssets&force=true");
            },
            checkForUpdate: function () {
                return l.get(a["c"].API_LOGO_ENDPOINT + "version/latest");
            },
            checkLicenseActive: function (t) {
                return l.post(a["c"].API_LOGO_ENDPOINT + "license/validate", { licenseCode: t, email: "test@remote.com", appVersion: a["a"].APP_VERSION });
            },
            contentValues: function (t, e) {
                var o = [];
                for (var n in t) for (var i in ("object" === Object(s["a"])(t[n]) && this.contentValues(t[n], e), e)) t[n].name === i && (t[n].selected_value = e[i]);
                return (o = t), o;
            },
            getAxiosHeadersConfig: function () {
                return r;
            },
        };
    },
    "6f98": function (t, e, o) {
        "use strict";
        o("befb");
    },
    "7dab": function (t, e, o) {
        "use strict";
        o.d(e, "a", function () {
            return n;
        });
        var s = o("eada");
        function n(t, e) {
            s["default"].notify({ group: "bby-notification", text: t, type: e });
        }
    },
    "82ea": function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    t._l(t.firstComponentProps.items, function (e, s) {
                        return o("div", { key: s }, [
                            o(
                                "button",
                                {
                                    attrs: { type: "button", id: t.firstComponentProps.name, value: "" },
                                    on: {
                                        click: function (e) {
                                            return t.executeButtonAction(t.firstComponentProps.selected_value);
                                        },
                                    },
                                },
                                [t._v(t._s(t.firstComponentProps.items[0].name))]
                            ),
                        ]);
                    }),
                    0
                );
            },
            n = [],
            i = {
                props: { firstComponentProps: Object },
                methods: {
                    executeButtonAction: function (t) {
                        console.log(t);
                    },
                },
            },
            a = i,
            r = o("b0d7"),
            l = Object(r["a"])(a, s, n, !1, null, "f2ec8d96", null);
        e["default"] = l.exports;
    },
    8782: function (t, e, o) {
        "use strict";
        o("b9e4");
    },
    "8b1b": function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", [
                    o("svg", { staticClass: "icon", attrs: { width: t.width, height: t.height, fill: t.fill } }, [
                        o("use", { attrs: { "xlink:href": "/wp-content/uploads/builderboy/assets/bby-icons.svg?ver=" + t.appVersion + "#" + t.name } }),
                    ]),
                ]);
            },
            n = [],
            i = (o("33ee"), o("1cec")),
            a = {
                data: function () {
                    return { appVersion: i["a"].APP_VERSION };
                },
                props: { name: String, width: { type: [Number, String], default: 24 }, height: { type: [Number, String], default: 24 }, fill: { color: String } },
            },
            r = a,
            l = o("b0d7"),
            c = Object(l["a"])(r, s, n, !1, null, "3198bc23", null);
        e["default"] = c.exports;
    },
    "8daf": function (t, e, o) {
        "use strict";
        o("d3dd"), o("fa02");
        var s = /[\u0000-\u001f]/g,
            n = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g,
            i = /[\u0300-\u036F]/g;
        e["a"] = {
            slugify: function (t) {
                return t
                    .normalize("NFKD")
                    .replace(i, "")
                    .replace(s, "")
                    .replace(n, "-")
                    .replace(/\-{2,}/g, "-")
                    .replace(/^\-+|\-+$/g, "")
                    .replace(/^(\d)/, "_$1")
                    .toLowerCase();
            },
        };
    },
    "8e07": function (t, e, o) {
        "use strict";
        o("fd73");
    },
    "93ee": function (t, e, o) {
        "use strict";
        o("2645");
    },
    9575: function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-box-component" },
                    [
                        o("BaseComponentTitle", { attrs: { title: t.title, hintObjectProps: t.firstComponentProps } }),
                        t.fontFamilyList ? o("link", { attrs: { href: "https://fonts.googleapis.com/css?family=" + t.fontFamilyList, rel: "stylesheet" } }) : t._e(),
                        o(
                            "div",
                            { staticClass: "bby-component bby-dropdown" },
                            [
                                o(
                                    "div",
                                    {
                                        ref: "toggle",
                                        staticClass: "bby-f-dropdown-input bby-stroke-primaryMediumGray",
                                        on: {
                                            click: function (e) {
                                                t.toggleListShow = !t.toggleListShow;
                                            },
                                        },
                                    },
                                    [
                                        o("input", { staticClass: "bby-functional-input", attrs: { type: "text", readonly: "" }, domProps: { value: t.searchFont } }),
                                        o("span", [o("BaseIconBby", { attrs: { name: "bbyDown", width: "12", height: "12" } })], 1),
                                    ]
                                ),
                                o("transition", { attrs: { name: "expand" }, on: { enter: t.enter, "after-enter": t.afterEnter, leave: t.leave } }, [
                                    t.toggleListShow
                                        ? o(
                                              "div",
                                              {
                                                  directives: [{ name: "closable", rawName: "v-closable", value: { exclude: ["toggle"], handler: "onClose" }, expression: "{ exclude: ['toggle'], handler: 'onClose' }" }],
                                                  staticClass: "bby-f-dropdown",
                                              },
                                              [
                                                  o("div", { staticClass: "bby-f-dropdown-input-search" }, [
                                                      o("input", {
                                                          staticClass: "bby-f-dropdown-input-search",
                                                          attrs: { type: "text", placeholder: "Start typing to search..." },
                                                          domProps: { value: t.searchFontValue },
                                                          on: { input: t.searchFontInput },
                                                      }),
                                                      o("button", { staticClass: "bby-icon-button bby-no-bg", on: { click: t.clearSearchBox } }, [o("BaseIconBby", { attrs: { name: "bbyDel", width: "12", height: "12" } })], 1),
                                                  ]),
                                                  o(
                                                      "div",
                                                      { staticClass: "bby-logo-font-wrap" },
                                                      [
                                                          t.noContent ? o("div", { staticClass: "bby-logo-empty" }, [t._v(" Sorry, there are no result for "), o("i", [t._v(" " + t._s(t.searchFontValue))])]) : t._e(),
                                                          t._l(t.googleFilteredFonts, function (e, s) {
                                                              return o("div", { key: s, staticClass: "bby-logo-font-single" }, [
                                                                  o(
                                                                      "a",
                                                                      {
                                                                          style: "font-family:" + e.family + "," + e.category,
                                                                          attrs: { href: "#" },
                                                                          on: {
                                                                              click: function (o) {
                                                                                  return o.preventDefault(), t.selectFont(e.family, t.firstComponentProps.name);
                                                                              },
                                                                          },
                                                                      },
                                                                      [t._v(" " + t._s(e.family) + " ")]
                                                                  ),
                                                              ]);
                                                          }),
                                                      ],
                                                      2
                                                  ),
                                              ]
                                          )
                                        : t._e(),
                                ]),
                            ],
                            1
                        ),
                    ],
                    1
                );
            },
            n = [],
            i = o("3b7c"),
            a = (o("452c"), o("3a9c"), o("203f"), o("b98e"), o("0ec7"), o("04da"), o("4fff"), o("ad5c"), o("65be")),
            r = o("5b8a"),
            l = o.n(r),
            c = {
                data: function () {
                    return { toggleListShow: !1, searchFont: "", searchFontValue: "", googleFilteredFonts: [], fontEndPos: 50, noContent: !1 };
                },
                props: { firstComponentProps: Object, title: String },
                beforeMount: function () {
                    null == this.$store.state.values[this.firstComponentProps.name]
                        ? this.$store.commit("UPDATE_LOGO_TEXT_FONT_FAMILY", [{ name: this.firstComponentProps.name, value: this.firstComponentProps.selected_value }])
                        : null != this.fontFamilyState
                        ? ((this.searchFont = this.fontFamilyState), (this.googleFilteredFonts = this.getFontsSubset(this.googleFontsState)))
                        : ((this.searchFont = this.firstComponentProps.selected_value), (this.googleFilteredFonts = this.getFontsSubset(this.googleFontsState)));
                },
                created: function () {
                    l.a.isEmpty(this.googleFontsState) && this.$store.dispatch("fetchFonts");
                },
                watch: {
                    searchFontValue: l.a.debounce(function (t) {
                        var e = this.$el.getElementsByClassName("bby-f-dropdown")[0];
                        if (((e.scrollTop = 0), t)) {
                            for (var o in ((this.googleFilteredFonts = []), this.googleFontsState)) this.googleFontsState[o].family.toLowerCase().includes(t) && this.googleFilteredFonts.push(this.googleFontsState[o]);
                            l.a.isEmpty(this.googleFilteredFonts) && 0 != this.searchFontValue ? (this.noContent = !0) : (this.noContent = !1);
                        } else (this.fontEndPos = 50), (this.googleFilteredFonts = this.getFontsSubset(this.googleFontsState));
                    }, 250),
                    googleFontsState: function (t) {
                        null != this.fontFamilyState
                            ? ((this.searchFont = this.fontFamilyState), (this.googleFilteredFonts = this.getFontsSubset(this.googleFontsState)))
                            : ((this.searchFont = this.firstComponentProps.selected_value), (this.googleFilteredFonts = this.getFontsSubset(this.googleFontsState)));
                    },
                },
                computed: Object(i["a"])(
                    {
                        fontFamilyList: function () {
                            var t = "";
                            for (var e in this.googleFontsState) t = t + this.googleFontsState[e].family + "|";
                            return (t = t.slice(0, -1)), t;
                        },
                    },
                    Object(a["b"])({
                        googleFontsState: function (t) {
                            return t.googleFonts;
                        },
                        fontFamilyState: function (t) {
                            return t.values.textFontFamilyDropDownList;
                        },
                        fontWeightState: function (t) {
                            return t.values.textFontWeightDropDownList;
                        },
                    })
                ),
                methods: {
                    clearSearchBox: function () {
                        (this.searchFontValue = ""), (this.noContent = !1);
                    },
                    searchFontInput: function (t) {
                        this.searchFontValue = t.target.value;
                    },
                    onClose: function () {
                        this.toggleListShow = !1;
                    },
                    selectFont: function (t) {
                        (this.searchFont = t), this.$store.commit("UPDATE_LOGO_TEXT_FONT_FAMILY", [{ name: this.firstComponentProps.name, value: t }]);
                    },
                    enter: function (t) {
                        (this.googleFilteredFonts = this.getFontsSubset(this.googleFontsState)), (this.searchIcon = ""), (t.style.height = "auto");
                        var e = getComputedStyle(t).height;
                        (t.style.height = 0),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = e;
                            }),
                            t.addEventListener("scroll", this.handleScroll);
                    },
                    afterEnter: function (t) {
                        t.style.height = "auto";
                    },
                    leave: function (t) {
                        (t.style.height = getComputedStyle(t).height),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = 0;
                            });
                    },
                    getFontsSubset: function (t) {
                        for (var e = t.slice(0, this.fontEndPos), o = [], s = 0; s < e.length; s++) o[s] = t[s];
                        return o;
                    },
                    handleScroll: function () {
                        var t = this.$el.getElementsByClassName("bby-f-dropdown")[0],
                            e = t.scrollHeight,
                            o = t.scrollTop,
                            s = (o / e) * 100;
                        s.toFixed(0) > 80 && this.loadMore();
                    },
                    loadMore: function () {
                        (this.fontEndPos = this.fontEndPos + 15), this.searchFontValue || (this.googleFilteredFonts = this.getFontsSubset(this.googleFontsState));
                    },
                },
            },
            u = c,
            b = o("b0d7"),
            d = Object(b["a"])(u, s, n, !1, null, "30f464af", null);
        e["default"] = d.exports;
    },
    9860: function (t, e, o) {},
    "9e36": function (t, e, o) {
        "use strict";
        o("6721");
    },
    "9f72": function (t, e, o) {
        "use strict";
        o("9860");
    },
    a91a: function (t, e, o) {},
    a94b: function (t, e, o) {
        "use strict";
        o("b715");
    },
    aa77: function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-box-component" },
                    [
                        o("BaseComponentTitle", { attrs: { title: t.title, hintObjectProps: t.firstComponentProps } }),
                        o("transition", { attrs: { name: "expand" }, on: { enter: t.enter, "after-enter": t.afterEnter, leave: t.leave } }, [
                            o("div", { directives: [{ name: "show", rawName: "v-show", value: t.showError, expression: "showError" }], staticClass: "bby-range-slider-error bby-error" }, [o("p", [t._v("This value cannot be empty.")])]),
                        ]),
                        t._l(t.firstComponentProps.items, function (e, s) {
                            return o("div", { key: s, staticClass: "bby-component bby-text", class: { inputError: t.showError } }, [
                                o("input", {
                                    staticClass: "bby-input-text  bby-bg-primaryReverseWhite bby-stroke-primaryMediumGray",
                                    attrs: { type: "text", name: t.firstComponentProps.name, autocomplete: "off" },
                                    domProps: { value: t.inputText },
                                    on: { input: t.updateInputText },
                                }),
                            ]);
                        }),
                    ],
                    2
                );
            },
            n = [],
            i = o("3b7c"),
            a = (o("452c"), o("3a9c"), o("203f"), o("4fff"), o("82b7"), o("d3dd"), o("fa02"), o("65be")),
            r = o("5b8a"),
            l = o.n(r),
            c = {
                data: function () {
                    return { inputText: "", showError: !1 };
                },
                props: { firstComponentProps: Object, title: String },
                beforeMount: function () {
                    null == this.$store.state.values[this.firstComponentProps.name]
                        ? this.$store.commit("UPDATE_COMPONENT_VALUES", [{ name: this.firstComponentProps.name, value: this.firstComponentProps.selected_value }])
                        : (this.inputText = this.decodeHtmlChars(this.inputTextState));
                },
                computed: Object(i["a"])(
                    {},
                    Object(a["b"])({
                        inputTextState: function (t) {
                            return t.values[this.firstComponentProps.name];
                        },
                    })
                ),
                watch: {
                    inputTextState: function (t) {
                        this.inputText = this.decodeHtmlChars(t);
                    },
                    showError: function (t) {
                        this.$store.commit("UPDATE_COMPONENT_ERRORS", [{ value: t, name: this.firstComponentProps.name }]);
                    },
                },
                methods: {
                    enter: function (t) {
                        t.style.height = "auto";
                        var e = getComputedStyle(t).height;
                        (t.style.height = 0),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = e;
                            }),
                            t.addEventListener("scroll", this.handleScroll);
                    },
                    afterEnter: function (t) {
                        t.style.height = "auto";
                    },
                    leave: function (t) {
                        (t.style.height = getComputedStyle(t).height),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = 0;
                            });
                    },
                    encodeHtmlChars: function (t) {
                        var e = t.length,
                            o = [];
                        while (e--) {
                            var s = t[e].charCodeAt();
                            o[e] = s < 48 || (s > 57 && s < 65) || (s > 90 && s < 97) || s > 123 ? "&#" + s + ";" : t[e];
                        }
                        return o.join("");
                    },
                    decodeHtmlChars: function (t) {
                        return t.replace(/(&#(\d+);)/g, function (t, e, o) {
                            return String.fromCharCode(o);
                        });
                    },
                    updateInputText: l.a.debounce(function (t) {
                        var e = "";
                        t.target.value ? (this.showError = !1) : (this.showError = !0), (e = this.encodeHtmlChars(t.target.value)), this.$store.commit("UPDATE_COMPONENT_VALUES", [{ value: e, name: t.target.name }]);
                    }, 50),
                },
            },
            u = c,
            b = o("b0d7"),
            d = Object(b["a"])(u, s, n, !1, null, "0fb071fd", null);
        e["default"] = d.exports;
    },
    b715: function (t, e, o) {},
    b9e4: function (t, e, o) {},
    befb: function (t, e, o) {},
    c1ec: function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("transition", { attrs: { name: "modal" } }, [
                    o("div", { directives: [{ name: "show", rawName: "v-show", value: t.modalDisplay, expression: "modalDisplay" }], staticClass: "bby-modal-open bby-style-flex bby-column bby-center bby-justify-center" }, [
                        o("div", { staticClass: "bby-modal-bg", attrs: { id: "bby-modal-bg" } }),
                        o("div", { staticClass: "bby-modal-inner", attrs: { id: "bby-modal-inner" } }, [
                            o("div", { staticClass: "bby-close-modal", on: { click: t.closeModal } }, [o("BaseIconBby", { attrs: { name: "bbyDel", width: "20", height: "20" } })], 1),
                            o("div", { staticClass: "bby-modal-inner-wrap" }, [
                                o("div", { staticClass: "bby-modal-inner-content bby-style-flex bby-center bby-column" }, [
                                    o("h5", [t._v("GET AN ACCESS TO ALMOST 350,000 ICONS AND PLUGIN ADVANCED SETTINGS")]),
                                    o("div", { staticClass: "bby-install-feature-list-single-buy" }, [
                                        o(
                                            "button",
                                            {
                                                staticClass: "bby-button bby-button-medium bby-bg-primaryIndigo",
                                                on: {
                                                    click: function (e) {
                                                        return t.buyNow();
                                                    },
                                                },
                                            },
                                            [t._v("BUY NOW")]
                                        ),
                                    ]),
                                    o("p", [t._v("or")]),
                                    o("h5", [t._v("ENTER YOUR LICENSE CODE FROM THEMEFOREST")]),
                                    o("div", { staticClass: "bby-box-install-license-input" }, [
                                        o(
                                            "div",
                                            { staticClass: "bby-box-install-license-input-message" },
                                            [
                                                o("transition", { attrs: { name: "errMessage" } }, [
                                                    t.errorText.baseMessage
                                                        ? o("div", { staticClass: "input-message", class: { active: t.licenseActive, inactive: !t.licenseActive } }, [t._v(" " + t._s(t.errorText.baseMessage) + " ")])
                                                        : t._e(),
                                                ]),
                                                o("transition", { attrs: { name: "errMessage" } }, [t.errorText.requestId ? o("div", { staticClass: "input-message" }, [t._v(" " + t._s(t.errorText.requestId) + " ")]) : t._e()]),
                                                o("transition", { attrs: { name: "errMessage" } }, [t.errorText.emptyValue ? o("div", { staticClass: "input-message" }, [t._v(" " + t._s(t.errorText.emptyValue) + " ")]) : t._e()]),
                                                o("transition", { attrs: { name: "errMessage" } }, [t.errorText.wrongFormat ? o("div", { staticClass: "input-message" }, [t._v(" " + t._s(t.errorText.wrongFormat) + " ")]) : t._e()]),
                                            ],
                                            1
                                        ),
                                        o("input", {
                                            staticClass: "bby-input-text bby-bg-primaryReverseWhite bby-stroke-primaryMediumGray",
                                            attrs: { id: "licenseCodeInput", type: "text", placeholder: "Your license code..." },
                                            domProps: { value: t.licenseCode },
                                            on: { input: t.licenseCodeInput },
                                        }),
                                        o("div", { staticClass: "bby-button-license bby-button-verify" }, [
                                            o("button", {
                                                attrs: { id: "buttonModalVerify" },
                                                on: {
                                                    click: function (e) {
                                                        return t.licenseVerify(t.licenseCode);
                                                    },
                                                },
                                            }),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]),
                    ]),
                ]);
            },
            n = [],
            i = (o("4fff"), o("82b7"), o("a619"), o("d3dd"), o("4991"), o("fe6c"), o("683e")),
            a = o("1cec"),
            r = {
                data: function () {
                    return { errorText: { baseMessage: "", requestId: "", emptyValue: "", wrongFormat: "" }, licenseCode: "" };
                },
                props: { modalDisplay: Boolean },
                updated: function () {
                    var t = document.getElementById("bby-modal-inner"),
                        e = t.offsetHeight / 2;
                    t.style.marginTop = -e + "px";
                },
                watch: {
                    modalDisplay: function (t) {
                        var e = this,
                            o = document.getElementById("bby-single-tab"),
                            s = document.getElementById("bby-modal-bg"),
                            n = document.getElementById("bby-modal-inner");
                        (s.onclick = function (t) {
                            t.target != n && e.closeModal();
                        }),
                            t
                                ? o.classList.add("modalOpen")
                                : setTimeout(function () {
                                      o.classList.remove("modalOpen");
                                  }, 500);
                    },
                },
                methods: {
                    buyNow: function () {
                        window.open("".concat(a["e"].WEBSITE_URL, "/rd/logobuilder/buyLicense"), "_self");
                    },
                    closeModal: function () {
                        this.$emit("clicked");
                    },
                    licenseCodeInput: function (t) {
                        (this.licenseCode = t.target.value), 0 != this.licenseCode && (this.errorText.emptyValue = "");
                    },
                    encodeHtmlChars: function (t) {
                        var e = t.length,
                            o = [];
                        while (e--) {
                            var s = t[e].charCodeAt();
                            o[e] = s < 48 || (s > 57 && s < 65) || (s > 90 && s < 97) || s > 123 ? "&#" + s + ";" : t[e];
                        }
                        return o.join("");
                    },
                    callbackSuccess: function (t) {
                        var e = this;
                        setTimeout(function () {
                            t.classList.remove("validate"), t.classList.remove("invalidate"), (e.errorText.baseMessage = "");
                        }, 2e3);
                    },
                    callbackError: function (t, e) {
                        var o = this;
                        setTimeout(function () {
                            t.classList.remove("validate"), t.classList.remove("invalidate"), e.classList.remove("error"), (o.licenseError = !0), (o.errorText.requestId = "");
                        }, 2e3);
                    },
                    licenseVerify: function (t) {
                        var e = this,
                            o = document.getElementById("buttonModalVerify");
                        if ("" != this.licenseCode) {
                            var s = new RegExp(/^([a-f0-9]{8})-(([a-f0-9]{4})-){3}([a-f0-9]{12})$/);
                            if (s.test(this.licenseCode)) {
                                o.classList.add("onclick");
                                var n = this.encodeHtmlChars(t);
                                i["a"]
                                    .checkLicenseActive(n)
                                    .then(function (s) {
                                        "200" == s.status &&
                                            setTimeout(function () {
                                                (e.errorText.baseMessage = s.data.message),
                                                    (e.licenseActive = !0),
                                                    o.classList.remove("onclick"),
                                                    o.classList.add("validate"),
                                                    e.callbackSuccess(o),
                                                    e.$store.commit("LICENSE_STATUS", { active: !0 }),
                                                    e.$store.commit("UPDATE_INSTALLATION", [{ value: { license: t, init: "false" }, name: "licenseVerification" }]),
                                                    e.$store.commit("replaceValues");
                                            }, 3e3);
                                    })
                                    ["catch"](function (t) {
                                        var s = document.getElementById("licenseCodeInput");
                                        t.response.data.error &&
                                            setTimeout(function () {
                                                (e.licenseActive = !1),
                                                    (e.errorText.baseMessage = t.response.data.message),
                                                    (e.errorText.requestId = "Your request ID:" + t.response.data.requestId),
                                                    o.classList.remove("onclick"),
                                                    o.classList.add("invalidate"),
                                                    s.classList.add("error"),
                                                    e.callbackError(o, s),
                                                    e.$store.commit("LICENSE_STATUS", { active: !1 }),
                                                    e.$store.commit("UPDATE_INSTALLATION", [{ value: { license: "", init: "false" }, name: "licenseVerification" }]),
                                                    e.$store.commit("replaceValues");
                                            }, 3e3);
                                    });
                            } else
                                (this.errorText.wrongFormat = "Wrong license format."),
                                    setTimeout(function () {
                                        e.errorText.wrongFormat = "";
                                    }, 3e3),
                                    this.$store.commit("LICENSE_STATUS", { active: !1 });
                        } else this.errorText.emptyValue = "Value cannot be empty.";
                    },
                },
            },
            l = r,
            c = (o("a94b"), o("b0d7")),
            u = Object(c["a"])(l, s, n, !1, null, "88c6e5da", null);
        e["default"] = u.exports;
    },
    c96d: function (t, e, o) {},
    cfe4: function (t, e, o) {
        "use strict";
        o("476c");
    },
    d192: function (t, e, o) {
        "use strict";
        o("2bad");
    },
    da04: function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", { staticClass: "bby-box-component-title bby-style-flex bby-center" }, [
                    o("h5", [t._v(t._s(t.title))]),
                    "true" == t.hintObjectProps.displayHint ? o("div", { staticClass: "bby-heading-hint" }, [o("BaseHint", { attrs: { hintValue: t.hintObjectProps.hint, componentTitle: t.title } })], 1) : t._e(),
                ]);
            },
            n = [],
            i = {
                data: function () {
                    return { hintValue: !1 };
                },
                props: { title: String, hintObjectProps: Object },
            },
            a = i,
            r = (o("93ee"), o("b0d7")),
            l = Object(r["a"])(a, s, n, !1, null, "4e145b5e", null);
        e["default"] = l.exports;
    },
    db99: function (t, e, o) {
        "use strict";
        o("5012");
    },
    e851: function (t, e, o) {
        "use strict";
        o("ebe7");
    },
    e91d: function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-component bby-functional-component" },
                    t._l(t.firstComponentProps.items, function (e, s) {
                        return o(
                            "div",
                            { key: s, staticClass: "bby-box bby-bg-primaryReverseWhite", class: t.error(e.component.name) },
                            [o(e.component.type, { tag: "component", attrs: { firstComponentProps: e.component, title: e.propertyName } })],
                            1
                        );
                    }),
                    0
                );
            },
            n = [],
            i = o("3b7c"),
            a = (o("452c"), o("3a9c"), o("203f"), o("d3dd"), o("fa02"), o("254b"), o("1041"), o("ba8c"), o("65be")),
            r = o("5b8a"),
            l = o.n(r),
            c = {
                data: function () {
                    return { svgText: "", parsedFontObject: {} };
                },
                props: { firstComponentProps: Object },
                beforeMount: function () {
                    null == this.$store.state.values[this.firstComponentProps.name] && this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: this.firstComponentProps.selected_value }]);
                },
                computed: Object(i["a"])(
                    {},
                    Object(a["b"])({
                        logoInputTextState: function (t) {
                            return t.values.textInputText;
                        },
                        logoTextSizeState: function (t) {
                            return t.values.textFontSizeRangeSlider;
                        },
                        logoTextFontFamilyState: function (t) {
                            return t.values.textFontFamilyDropDownList;
                        },
                        logoTextWeightState: function (t) {
                            return t.values.textFontWeightDropDownList;
                        },
                        logoTextLetterSpacingState: function (t) {
                            return t.values.textFontLetterSpacingRangeSlider;
                        },
                        logoTextColorState: function (t) {
                            return t.values.textColorColorPicker;
                        },
                        logoTextTopOffsetState: function (t) {
                            return t.values.textTopOffsetRangeSlider;
                        },
                    })
                ),
                methods: {
                    error: function (t) {
                        if (this.$store.state.componentErrors[t]) return "bby-box-error";
                    },
                    parseFontURLToObject: function (t) {
                        var e = o("4994"),
                            s = this;
                        e.load(t, function (t, e) {
                            t ? alert("Font could not be loaded: " + t) : ((s.parsedFontObject = e), s.generateLogoTextSVG());
                        });
                    },
                    decodeHtmlChars: function (t) {
                        return t.replace(/(&#(\d+);)/g, function (t, e, o) {
                            return String.fromCharCode(o);
                        });
                    },
                    generateLogoTextSVG: function () {
                        o("540c");
                        if (Object.keys(this.parsedFontObject).length) {
                            var t = [],
                                e = this.decodeHtmlChars(this.logoInputTextState);
                            for (var s in e) {
                                var n = this.parsedFontObject.charToGlyph(e[s]),
                                    i = n.getPath(0, parseInt(this.logoTextSizeState), parseInt(this.logoTextSizeState)),
                                    a = (i.getBoundingBox(), Math.floor(this.parsedFontObject.getAdvanceWidth(e[s], parseInt(this.logoTextSizeState)))),
                                    r = i.toSVG();
                                t.push({ glyphWidth: a, glyphSVG: r });
                            }
                            var l = "",
                                c = 0;
                            for (var u in t) (l = "".concat(l, '<svg x="').concat(c, '" y="0">').concat(t[u].glyphSVG, "</svg>")), (c = c + t[u].glyphWidth + parseInt(this.logoTextLetterSpacingState));
                            this.svgText = l;
                        }
                    },
                },
                watch: {
                    svgText: function (t, e) {
                        l.a.isEqual(t, e) || ((t = t), this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { logoTextSVG: t } }]));
                    },
                    logoInputTextState: l.a.throttle(function (t, e) {
                        l.a.isEqual(t, e) || (this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { logoText: t } }]), this.generateLogoTextSVG());
                    }, 150),
                    logoTextSizeState: function (t, e) {
                        l.a.isEqual(t, e) || (this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { logoFontSize: t } }]), this.generateLogoTextSVG());
                    },
                    logoTextFontFamilyState: function (t, e) {
                        l.a.isEqual(t, e) || (this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { logoFontFamily: t } }]), this.generateLogoTextSVG());
                    },
                    logoTextWeightState: function (t, e) {
                        l.a.isEqual(t, e) || this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: t }]);
                    },
                    "logoTextWeightState.logoFontUrl": function (t, e) {
                        l.a.isEqual(t, e) || this.parseFontURLToObject(t);
                    },
                    logoTextLetterSpacingState: function (t, e) {
                        l.a.isEqual(t, e) || (this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { logoFontLetterSpacing: t } }]), this.generateLogoTextSVG());
                    },
                    logoTextColorState: function (t, e) {
                        l.a.isEqual(t, e) || this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { logoFontColor: t } }]);
                    },
                    logoTextTopOffsetState: function (t, e) {
                        l.a.isEqual(t, e) || this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: { logoTextTopOffset: t } }]);
                    },
                },
            },
            u = c,
            b = o("b0d7"),
            d = Object(b["a"])(u, s, n, !1, null, "5f40ddf2", null);
        e["default"] = d.exports;
    },
    ebe7: function (t, e, o) {},
    ef13: function (t, e, o) {
        var s = {
            "./BaseButton.vue": "82ea",
            "./BaseCheckbox.vue": "f0a8",
            "./BaseColorpicker.vue": "3d18",
            "./BaseComponentTitle.vue": "da04",
            "./BaseFunctionalDropdown.vue": "fbbb",
            "./BaseFunctionalDropdownFonts.vue": "9575",
            "./BaseFunctionalLogoIcons.vue": "4bc7",
            "./BaseFunctionalLogoPreview.vue": "f4fa",
            "./BaseFunctionalLogoText.vue": "4661",
            "./BaseFunctionalLogoTextIcon.vue": "5b69",
            "./BaseFunctionalLogoTextType.vue": "e91d",
            "./BaseHint.vue": "1279",
            "./BaseIconBby.vue": "8b1b",
            "./BaseInputText.vue": "aa77",
            "./BaseInputTextArea.vue": "547d",
            "./BaseModal.vue": "c1ec",
            "./BaseRadio.vue": "281b",
            "./BaseRangeSlider.vue": "1450",
        };
        function n(t) {
            var e = i(t);
            return o(e);
        }
        function i(t) {
            if (!o.o(s, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
            }
            return s[t];
        }
        (n.keys = function () {
            return Object.keys(s);
        }),
            (n.resolve = i),
            (t.exports = n),
            (n.id = "ef13");
    },
    f0a8: function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-box-component" },
                    [
                        o("BaseComponentTitle", { attrs: { title: t.title, hintObjectProps: t.firstComponentProps } }),
                        o("transition", { attrs: { name: "expand" }, on: { enter: t.enterError, "after-enter": t.afterEnterError, leave: t.leaveError } }, [
                            o("div", { directives: [{ name: "show", rawName: "v-show", value: t.showError, expression: "showError" }], staticClass: "bby-range-slider-error bby-error" }, [
                                o("p", [t._v("Ooops! This option is not available in free plan.")]),
                            ]),
                        ]),
                        t._l(t.firstComponentProps.items, function (e, s) {
                            return o("div", { key: s, class: { inputError: t.showError } }, [
                                o("label", { attrs: { for: t.firstComponentProps.name } }, [
                                    o("div", { staticClass: "switch-box-wrapper" }, [o("div", { staticClass: "switch-box", class: t.styleCheckbox }, [o("div", { staticClass: "switch-box-circle" })])]),
                                ]),
                                o("input", { attrs: { hidden: "", type: "checkbox", id: t.firstComponentProps.name, name: t.firstComponentProps.name }, domProps: { checked: t.checkedInputValue }, on: { change: t.updateCheckbox } }),
                                0 != e.options
                                    ? o(
                                          "div",
                                          [
                                              o("transition", { attrs: { name: "expand" }, on: { enter: t.enter, "after-enter": t.afterEnter, leave: t.leave } }, [
                                                  t.checkedValue && !t.showError
                                                      ? o(
                                                            "div",
                                                            t._l(e.options, function (e, s) {
                                                                return o(
                                                                    "div",
                                                                    { key: s, staticClass: "bby-box-component" },
                                                                    t._l(e, function (t, s) {
                                                                        return o("div", { key: s }, [o(t.type, { tag: "component", attrs: { firstComponentProps: t, title: e.propertyName } })], 1);
                                                                    }),
                                                                    0
                                                                );
                                                            }),
                                                            0
                                                        )
                                                      : t._e(),
                                              ]),
                                          ],
                                          1
                                      )
                                    : t._e(),
                            ]);
                        }),
                    ],
                    2
                );
            },
            n = [],
            i = o("3b7c"),
            a = (o("452c"), o("3a9c"), o("203f"), o("4fff"), o("65be")),
            r = {
                data: function () {
                    return { checkedValue: "", checkedInputValue: "", styleCheckbox: "", showError: !1, licenseActive: null, licenseRequired: "true" === this.firstComponentProps.licenseRequired.toLowerCase() };
                },
                props: { firstComponentProps: Object, title: String },
                created: function () {
                    (this.licenseActive = this.$store.state.licenseActive),
                        null == this.$store.state.values[this.firstComponentProps.name]
                            ? this.$store.commit("UPDATE_COMPONENT_VALUES", [{ name: this.firstComponentProps.name, value: "" + this.firstComponentProps.selected_value }])
                            : (this.checkedValue = "true" == this.checkboxState);
                },
                computed: Object(i["a"])(
                    {},
                    Object(a["b"])({
                        checkboxState: function (t) {
                            return t.values[this.firstComponentProps.name];
                        },
                        licenseActiveState: function (t) {
                            return t.licenseActive;
                        },
                    })
                ),
                watch: {
                    licenseActive: function (t) {
                        this.setError();
                    },
                    showError: function (t) {
                        this.$store.commit("UPDATE_COMPONENT_ERRORS", [{ value: t, name: this.firstComponentProps.name }]);
                    },
                    licenseActiveState: function (t) {
                        this.licenseActive = t;
                    },
                    checkboxState: function (t) {
                        this.checkedValue = "true" === t;
                    },
                    checkedValue: function (t) {
                        t ? ((this.checkedInputValue = "checked"), (this.styleCheckbox = "switchBoxOn"), this.setError()) : ((this.checkedInputValue = ""), (this.styleCheckbox = "switchBoxOff"), this.setError());
                    },
                },
                methods: {
                    setError: function () {
                        null != this.licenseActive && (!this.licenseActive && this.licenseRequired && this.checkedValue ? (this.showError = !0) : (this.showError = !1));
                    },
                    enterError: function (t) {
                        t.style.height = "auto";
                        var e = getComputedStyle(t).height;
                        (t.style.height = 0),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = e;
                            }),
                            t.addEventListener("scroll", this.handleScroll);
                    },
                    afterEnterError: function (t) {
                        t.style.height = "auto";
                    },
                    leaveError: function (t) {
                        (t.style.height = getComputedStyle(t).height),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = 0;
                            });
                    },
                    updateCheckbox: function (t) {
                        this.$store.commit("UPDATE_COMPONENT_VALUES", [{ name: t.target.name, value: "" + t.target.checked }]);
                    },
                    enter: function (t) {
                        t.style.height = "auto";
                        var e = getComputedStyle(t).height;
                        (t.style.height = 0),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = e;
                            });
                    },
                    afterEnter: function (t) {
                        t.style.height = "auto";
                    },
                    leave: function (t) {
                        (t.style.height = getComputedStyle(t).height),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = 0;
                            });
                    },
                },
            },
            l = r,
            c = (o("3e88"), o("b0d7")),
            u = Object(c["a"])(l, s, n, !1, null, "28095d85", null);
        e["default"] = u.exports;
    },
    f4fa: function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", { staticClass: "bby-box-component", attrs: { id: "previewComponent" }, on: { scroll: t.handleScroll } }, [
                    Object.entries(t.logoIconValues).length
                        ? o("div", { staticClass: "bby-logo-preview", attrs: { id: "getPreviewHeight" } }, [
                              o(
                                  "div",
                                  { staticClass: "bby-logo-preview-wrapper", attrs: { id: "previewContent" } },
                                  [
                                      o("div", { staticClass: "bby-logo-preview-inner" }, [
                                          o("span", { staticClass: "bby-preview-inner-title" }, [t._v("logo preview")]),
                                          o("div", { staticClass: "logo-preview", attrs: { id: "previewSvg" } }, [
                                              o("div", { staticClass: "bby-bg-color-prev bby-style-flex bby-column bby-center bby-start" }, [
                                                  o(
                                                      "button",
                                                      {
                                                          staticClass: "bby-icon-button bby-no-bg bby-bg-color-prev-open",
                                                          on: {
                                                              click: function (e) {
                                                                  return t.bgSaturationToggle("bby-color-list-ul-svg");
                                                              },
                                                          },
                                                      },
                                                      [o("BaseIconBby", { attrs: { name: "bbyColorBucket", width: "15", height: "15", fill: "#ccc" } })],
                                                      1
                                                  ),
                                                  o(
                                                      "ul",
                                                      { staticClass: "bby-color-list-ul", attrs: { id: "bby-color-list-ul-svg" } },
                                                      t._l(t.prevBgColors, function (e, s) {
                                                          return o("li", { key: s }, [
                                                              o(
                                                                  "button",
                                                                  {
                                                                      staticClass: "bby-icon-button bby-no-bg",
                                                                      on: {
                                                                          click: function (o) {
                                                                              return t.bgSaturation(e, "previewSvg");
                                                                          },
                                                                      },
                                                                  },
                                                                  [o("span", { staticClass: "bby-color-list", style: "background:" + e })]
                                                              ),
                                                          ]);
                                                      }),
                                                      0
                                                  ),
                                              ]),
                                              o("div", { staticClass: "logo-preview-overflow" }, [
                                                  o(
                                                      "svg",
                                                      { staticClass: "svgPreview", attrs: { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", width: "176", height: "40", id: "svgForPreview", x: "0" } },
                                                      [
                                                          o("svg", { staticClass: "logoIcon", attrs: { height: t.logoIconValues.iconSize, width: t.logoIconValues.iconSize, x: "0", y: t.logoIconOffsetY, dy: t.logoIconOffsetY } }, [
                                                              o("svg", { attrs: { viewBox: "0 0 512 512", fill: t.logoIconValues.iconColor.iconColorColorPicker_hex }, domProps: { innerHTML: t._s(t.symbolSvg) } }, [
                                                                  o("rect", { attrs: { width: "100%", height: "100%", "fill-opacity": "0" } }),
                                                              ]),
                                                          ]),
                                                          o("svg", { staticClass: "logoText", attrs: { fill: t.logoTextValues.logoFontColor.textColorColorPicker_hex }, domProps: { innerHTML: t._s(t.logoTextSVG) } }),
                                                      ]
                                                  ),
                                              ]),
                                              o("button", { staticClass: "bby-button bby-button-small  bby-bg-primaryIndigo", on: { click: t.pngGenerate } }, [t._v("save to media library")]),
                                          ]),
                                      ]),
                                      o("transition", { attrs: { name: "expand" }, on: { enter: t.enter, "after-enter": t.afterEnter, leave: t.leave } }, [
                                          t.showPngLogo
                                              ? o("div", { staticClass: "bby-logo-buttons", attrs: { id: "bbyLogoButtons" } }, [
                                                    o("div", { staticClass: "bby-bg-color-prev" }, [
                                                        o(
                                                            "button",
                                                            {
                                                                staticClass: "bby-icon-button bby-no-bg bby-bg-color-prev-open",
                                                                on: {
                                                                    click: function (e) {
                                                                        return t.bgSaturationToggle("bby-color-list-ul-png");
                                                                    },
                                                                },
                                                            },
                                                            [o("BaseIconBby", { attrs: { name: "bbyColorBucket", width: "15", height: "15", fill: "#ccc" } })],
                                                            1
                                                        ),
                                                        o(
                                                            "ul",
                                                            { staticClass: "bby-color-list-ul", attrs: { id: "bby-color-list-ul-png" } },
                                                            t._l(t.prevBgColors, function (e, s) {
                                                                return o("li", { key: s }, [
                                                                    o(
                                                                        "button",
                                                                        {
                                                                            staticClass: "bby-icon-button bby-no-bg",
                                                                            on: {
                                                                                click: function (o) {
                                                                                    return t.bgSaturation(e, "bbyImgReadyChangeBg");
                                                                                },
                                                                            },
                                                                        },
                                                                        [o("span", { staticClass: "bby-color-list", style: "background:" + e })]
                                                                    ),
                                                                ]);
                                                            }),
                                                            0
                                                        ),
                                                    ]),
                                                    o("div", { staticClass: "bby-logo-buttons-close" }, [
                                                        o("button", { attrs: { type: "button" }, on: { click: t.closeLogoButtons } }, [o("BaseIconBby", { attrs: { name: "bbyDel", width: "20", height: "20" } })], 1),
                                                    ]),
                                                    o("div", { staticClass: "bby-logo-buttons-png-image" }, [
                                                        o("span", { staticClass: "bby-preview-png-title" }, [t._v("your logo is ready to use")]),
                                                        o("img", { staticClass: "logo-generated", attrs: { id: "bbyImgReadyChangeBg", src: t.logoUrl } }),
                                                    ]),
                                                    o("ul", { staticClass: "bby-logo-buttons-png-download" }, [
                                                        o("li", [o("a", { attrs: { href: t.logoUrl, title: "Download PNG", download: "" } }, [o("BaseIconBby", { attrs: { name: "bbyPng", width: "25", height: "25" } })], 1)]),
                                                        o("li", [
                                                            o("button", { attrs: { title: "Download SVG" }, on: { click: t.downloadSVG } }, [o("BaseIconBby", { attrs: { name: "bbySvg", width: "25", height: "25" } })], 1),
                                                            o("input", { attrs: { type: "hidden" } }),
                                                        ]),
                                                        o("li", [
                                                            o("button", { attrs: { title: "Copy URL to clipboard" }, on: { click: t.copyToClipboard } }, [o("BaseIconBby", { attrs: { name: "bbyCopyUrl", width: "25", height: "25" } })], 1),
                                                            o("input", { attrs: { type: "hidden", id: "ctc" }, domProps: { value: t.logoUrl } }),
                                                        ]),
                                                    ]),
                                                    o("div", { staticClass: "bby-logo-buttons-break" }, [t._v(" or ")]),
                                                    o("div", { staticClass: "bby-logo-buttons-png-download" }, [
                                                        o("a", { staticClass: "bby-button-stroke bby-button-medium bby-stroke-primaryGray", attrs: { href: "/wp-admin/upload.php" } }, [t._v("go to media library")]),
                                                    ]),
                                                    t.loading ? o("b", [o("img", { attrs: { src: "https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif", width: "25px", alt: "" } })]) : t._e(),
                                                ])
                                              : t._e(),
                                      ]),
                                  ],
                                  1
                              ),
                          ])
                        : t._e(),
                ]);
            },
            n = [],
            i = o("3b7c"),
            a = (o("452c"), o("3a9c"), o("ba8c"), o("6939"), o("d3dd"), o("fa02"), o("4fff"), o("1041"), o("65be")),
            r = (o("683e"), o("fe6c"), o("7dab")),
            l = {
                data: function () {
                    return {
                        logoPNG: "",
                        absoluteTop: 0,
                        childHeight: 0,
                        fBottom: !1,
                        parentBottom: 0,
                        childTop: 0,
                        logoIconValues: {},
                        logoTextValues: {},
                        textFontBase64: "",
                        logoTextSVG: "",
                        iconSizeX: 0,
                        iconPosition: "",
                        logoTextOffsetY: 0,
                        logoIconOffsetY: 0,
                        showIcon: !1,
                        loading: !1,
                        showPngLogo: !1,
                        fixedClass: "",
                        symbolSvg: "",
                        prevBgColors: ["#ffffff", "#000000", "#02f7f8"],
                        showBgSat: !1,
                    };
                },
                props: { logoUrl: String },
                created: function () {
                    window.addEventListener("scroll", this.handleScroll), (this.logoTextValues = this.$store.state.values.logoFunctionalLogoText);
                },
                destroyed: function () {
                    window.removeEventListener("scroll", this.handleScroll);
                },
                methods: {
                    bgSaturationToggle: function (t) {
                        this.showBgSat = !this.showBgSat;
                        var e = document.getElementById(t);
                        e.classList.toggle("animate");
                    },
                    bgSaturation: function (t, e) {
                        var o = document.getElementById(e);
                        o.style.background = t;
                    },
                    copyToClipboard: function () {
                        var t = document.getElementById("ctc");
                        t.removeAttribute("type", "hidden"), t.select(), t.setSelectionRange(0, 99999), document.execCommand("copy"), t.setAttribute("type", "hidden"), Object(r["a"])("Logo URL copied to clipboard", "success");
                    },
                    downloadSVG: function () {
                        var t = document.getElementById("svgForPreview"),
                            e = t.cloneNode(!0);
                        e.setAttribute("preserveAspectRatio", "xMidYMid meet");
                        var o = e.getAttribute("width"),
                            s = e.getAttribute("height");
                        e.setAttribute("viewBox", "0 0 ".concat(o, " ").concat(s)), e.removeAttribute("id"), e.removeAttribute("width"), e.removeAttribute("height"), e.removeAttribute("class"), (e = e.outerHTML);
                        var n = this.logoUrl.substring(this.logoUrl.lastIndexOf("/") + 1);
                        n = n.replace(".png", ".svg");
                        var i = document.createElement("a");
                        i.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(e)), i.setAttribute("download", n), (i.style.display = "none"), document.body.appendChild(i), i.click(), document.body.removeChild(i);
                    },
                    enter: function (t) {
                        t.style.height = "auto";
                        var e = getComputedStyle(t).height;
                        (t.style.height = 0),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = e;
                            });
                    },
                    afterEnter: function (t) {
                        t.style.height = "auto";
                    },
                    leave: function (t) {
                        (t.style.height = getComputedStyle(t).height),
                            getComputedStyle(t),
                            setTimeout(function () {
                                t.style.height = 0;
                            });
                    },
                    closeLogoButtons: function () {
                        this.showPngLogo = !1;
                    },
                    pngGenerate: function () {
                        var t = this,
                            e = window.matchMedia("(min-width: 599px)"),
                            o = (document.getElementById("getPreviewHeight"), document.getElementById("previewColLeft").getBoundingClientRect());
                        for (var s in this.componentErrorsState) if (((this.formError = this.componentErrorsState[s]), this.formError)) break;
                        this.formError
                            ? Object(r["a"])("Ooops some fields are incorrect!", "errors")
                            : (this.$store.commit("replaceValues"),
                              this.$emit("generate"),
                              (this.loading = !0),
                              (this.showPngLogo = !1),
                              e.matches || window.scrollTo({ behavior: "smooth", top: o.height }),
                              0 != this.logoUrl &&
                                  setTimeout(function () {
                                      (t.loading = !1), (t.showPngLogo = !0);
                                  }, 2e3));
                    },
                    recalculateSVGsizeIconPositionLeft: function (t, e) {
                        var o,
                            s,
                            n,
                            i = document.getElementById("svgForPreview"),
                            a = t.getBBox(),
                            r = e.getBBox(),
                            l = 5;
                        (this.iconSizeX = a.width + l), r.height + r.y >= a.height + a.y ? (o = r.height + r.y) : r.height + r.y < a.height + a.y && (o = this.logoIconValues.iconSize);
                        var c = Math.ceil(o);
                        if (this.showIcon) {
                            (c = c + Math.abs(parseInt(this.logoTextOffsetY, 10)) + Math.abs(parseInt(this.logoIconOffsetY, 10))), (n = this.iconSizeX + parseInt(this.logoIconValues.iconLeftOffset));
                            var u = parseInt(this.logoTextValues.logoTextTopOffset);
                            e.setAttributeNS(null, "x", n),
                                t.setAttributeNS(null, "transform", "translate(0)"),
                                t.setAttributeNS(null, "x", 0),
                                e.setAttributeNS(null, "y", u),
                                (s = Math.ceil(a.width + r.width + l + 3 + parseInt(this.logoIconValues.iconLeftOffset))),
                                (o = Math.ceil(o));
                        } else {
                            c += Math.abs(parseInt(this.logoTextOffsetY, 10));
                            var b = parseInt(this.logoTextValues.logoTextTopOffset);
                            e.setAttributeNS(null, "y", b),
                                e.setAttributeNS(null, "x", "0"),
                                t.setAttributeNS(null, "transform", "translate(-" + this.iconSizeX + ")"),
                                t.setAttributeNS(null, "x", -parseInt(this.iconSizeX)),
                                (s = Math.ceil(r.width + 3)),
                                (o = Math.ceil(o));
                        }
                        i.setAttribute("width", s), i.setAttribute("height", c);
                        var d = getPreviewHeight.getBoundingClientRect(),
                            h = document.getElementById("previewSvg"),
                            f = document.getElementById("previewContent"),
                            m = h.getBoundingClientRect();
                        (f.style.maxWidth = d.width + "px"), (d.width = m.width) ? f.classList.add("horizontalScroll") : f.classList.remove("horizontalScroll");
                    },
                    recalculateSVGsizeIconPositionTop: function (t, e) {
                        var o,
                            s,
                            n,
                            i = document.getElementById("svgForPreview"),
                            a = t.getBBox(),
                            r = e.getBBox(),
                            l = 5;
                        (this.iconSizeX = a.width + l), (o = r.height + r.y + parseInt(this.logoIconValues.iconSize) + l);
                        var c = r.width / 2 - parseInt(this.logoIconValues.iconSize) / 2,
                            u = parseInt(this.logoIconValues.iconSize) + parseInt(this.logoTextValues.logoTextTopOffset);
                        t.setAttributeNS(null, "x", c), (n = parseInt(this.logoIconValues.iconLeftOffset)), e.setAttributeNS(null, "x", "0"), t.setAttributeNS(null, "x", c + n), e.setAttributeNS(null, "y", u);
                        var b = Math.ceil(o);
                        this.showIcon
                            ? ((b = b + Math.abs(parseInt(this.logoTextOffsetY, 10)) + Math.abs(parseInt(this.logoIconOffsetY, 10))),
                              (n = this.iconSizeX + parseInt(this.logoIconValues.iconLeftOffset)),
                              t.setAttributeNS(null, "transform", "translate(0)"),
                              (s = Math.ceil(r.width + l + 3)),
                              (o = Math.ceil(o)))
                            : ((b += Math.abs(parseInt(this.logoTextOffsetY, 10))),
                              e.setAttributeNS(null, "y", "0"),
                              e.setAttributeNS(null, "x", "0"),
                              t.setAttributeNS(null, "transform", "translate(-" + this.iconSizeX + ")"),
                              t.setAttributeNS(null, "x", -parseInt(this.iconSizeX)),
                              (s = Math.ceil(r.width + 3)),
                              (o = Math.ceil(o))),
                            i.setAttribute("width", s),
                            i.setAttribute("height", b);
                        var d = getPreviewHeight.getBoundingClientRect(),
                            h = document.getElementById("previewSvg"),
                            f = document.getElementById("previewContent"),
                            m = h.getBoundingClientRect();
                        (f.style.maxWidth = d.width + "px"), (d.width = m.width) ? f.classList.add("horizontalScroll") : f.classList.remove("horizontalScroll");
                    },
                    handleScroll: function () {
                        var t = window.matchMedia("(min-width: 599px)"),
                            e = document.getElementById("previewColLeft").getBoundingClientRect(),
                            o = document.getElementById("getPreviewHeight"),
                            s = o.getBoundingClientRect(),
                            n = document.getElementById("previewContent"),
                            i = n.getBoundingClientRect(),
                            a = window.innerHeight;
                        if (!t.matches && this.showPngLogo)
                            var r = document.getElementById("bbyLogoButtons").getBoundingClientRect(),
                                l = a - s.bottom + r.height + 20;
                        else l = a - s.bottom;
                        (l < 0 && !t.matches) || (s.y < 0 && t.matches && e.bottom - i.height > 0)
                            ? (o.classList.add("fixedPrev"), o.classList.remove("nofixedPrev"), o.classList.remove("fixedBottom"))
                            : e.bottom - n.getBoundingClientRect().height < 0 && t.matches
                            ? (o.classList.add("fixedBottom"), o.classList.remove("nofixedPrev"), o.classList.remove("fixedPrev"))
                            : (o.classList.add("nofixedPrev"), o.classList.remove("fixedPrev"), o.classList.remove("fixedBottom"), (o.style.height = i.height + "px"));
                    },
                },
                computed: Object(i["a"])(
                    {},
                    Object(a["b"])({
                        logoIconValuesState: function (t) {
                            return t.values.logoFunctionalLogoIcon;
                        },
                        logoTextValuesState: function (t) {
                            return t.values.logoFunctionalLogoText;
                        },
                        logoIconTypeState: function (t) {
                            return t.values.iconFunctionalLogoIcons;
                        },
                        componentErrorsState: function (t) {
                            return t.componentErrors;
                        },
                    })
                ),
                watch: {
                    logoIconValuesState: function (t) {
                        this.logoIconValues = t;
                    },
                    logoTextValuesState: function (t) {
                        this.logoTextValues = t;
                    },
                    "logoIconValues.iconSize": function (t, e) {
                        var o = this;
                        _.isEqual(t, e) ||
                            this.$nextTick(function () {
                                var t = document.getElementsByClassName("logoIcon")[0],
                                    e = document.getElementsByClassName("logoText")[0];
                                t && e && ("left" == o.iconPosition.toLowerCase() ? o.recalculateSVGsizeIconPositionLeft(t, e) : "top" == o.iconPosition.toLowerCase() && o.recalculateSVGsizeIconPositionTop(t, e));
                            });
                    },
                    "logoIconValues.iconSvgCode": function (t, e) {
                        var o = this;
                        _.isEqual(t, e) ||
                            ((this.symbolSvg = t),
                            this.$nextTick(function () {
                                var t = document.getElementsByClassName("logoIcon")[0],
                                    e = document.getElementsByClassName("logoText")[0];
                                t && e && ("left" == o.iconPosition.toLowerCase() ? o.recalculateSVGsizeIconPositionLeft(t, e) : "top" == o.iconPosition.toLowerCase() && o.recalculateSVGsizeIconPositionTop(t, e));
                            }));
                    },
                    "logoIconValues.iconPosition": function (t, e) {
                        var o = this;
                        _.isEqual(t, e) ||
                            this.$nextTick(function () {
                                var e = document.getElementsByClassName("logoIcon")[0],
                                    s = document.getElementsByClassName("logoText")[0];
                                (o.iconPosition = t.toLowerCase()),
                                    e && s && ("left" == o.iconPosition.toLowerCase() ? o.recalculateSVGsizeIconPositionLeft(e, s) : "top" == o.iconPosition.toLowerCase() && o.recalculateSVGsizeIconPositionTop(e, s));
                            });
                    },
                    "logoIconValues.iconUse": function (t, e) {
                        var o = this;
                        if (!_.isEqual(t, e))
                            if ("true" == t)
                                (this.showIcon = !0),
                                    this.$nextTick(function () {
                                        document.getElementsByClassName("logoIcon")[0].style.visibility = "visible";
                                        var t = document.getElementsByClassName("logoIcon")[0],
                                            e = document.getElementsByClassName("logoText")[0];
                                        t && e && ("left" == o.iconPosition.toLowerCase() ? o.recalculateSVGsizeIconPositionLeft(t, e) : "top" == o.iconPosition.toLowerCase() && o.recalculateSVGsizeIconPositionTop(t, e));
                                    });
                            else {
                                this.showIcon = !1;
                                var s = document.getElementsByClassName("logoIcon")[0],
                                    n = document.getElementsByClassName("logoText")[0];
                                this.recalculateSVGsizeIconPositionLeft(s, n);
                            }
                    },
                    logoTextValues: function (t, e) {
                        var o = this;
                        _.isEqual(t, e) ||
                            this.$nextTick(function () {
                                var t = document.getElementsByClassName("logoIcon")[0],
                                    e = document.getElementsByClassName("logoText")[0];
                                t && e && ("left" == o.iconPosition.toLowerCase() ? o.recalculateSVGsizeIconPositionLeft(t, e) : "top" == o.iconPosition.toLowerCase() && o.recalculateSVGsizeIconPositionTop(t, e));
                            });
                    },
                    "logoTextValues.logoTextTopOffset": function (t, e) {
                        var o = this;
                        _.isEqual(t, e) ||
                            ((this.logoTextOffsetY = t),
                            this.$nextTick(function () {
                                var t = document.getElementsByClassName("logoIcon")[0],
                                    e = document.getElementsByClassName("logoText")[0];
                                t && e && ("left" == o.iconPosition.toLowerCase() ? o.recalculateSVGsizeIconPositionLeft(t, e) : "top" == o.iconPosition.toLowerCase() && o.recalculateSVGsizeIconPositionTop(t, e));
                            }));
                    },
                    "logoTextValues.logoTextSVG": function (t, e) {
                        var o = this;
                        _.isEqual(t, e) ||
                            ((this.logoTextSVG = t),
                            this.$nextTick(function () {
                                var t = document.getElementsByClassName("logoIcon")[0],
                                    e = document.getElementsByClassName("logoText")[0];
                                t && e && ("left" == o.iconPosition.toLowerCase() ? o.recalculateSVGsizeIconPositionLeft(t, e) : "top" == o.iconPosition.toLowerCase() && o.recalculateSVGsizeIconPositionTop(t, e));
                            }));
                    },
                    "logoIconValues.iconLeftOffset": function (t, e) {
                        var o = this;
                        _.isEqual(t, e) ||
                            this.$nextTick(function () {
                                var t = document.getElementsByClassName("logoIcon")[0],
                                    e = document.getElementsByClassName("logoText")[0];
                                t && e && ("left" == o.iconPosition.toLowerCase() ? o.recalculateSVGsizeIconPositionLeft(t, e) : "top" == o.iconPosition.toLowerCase() && o.recalculateSVGsizeIconPositionTop(t, e));
                            });
                    },
                    "logoIconValues.iconTopOffset": function (t, e) {
                        var o = this;
                        _.isEqual(t, e) ||
                            ((this.logoIconOffsetY = t || "0"),
                            this.$nextTick(function () {
                                var t = document.getElementsByClassName("logoIcon")[0],
                                    e = document.getElementsByClassName("logoText")[0];
                                t && e && ("left" == o.iconPosition.toLowerCase() ? o.recalculateSVGsizeIconPositionLeft(t, e) : "top" == o.iconPosition.toLowerCase() && o.recalculateSVGsizeIconPositionTop(t, e));
                            }));
                    },
                },
            },
            c = l,
            u = (o("8782"), o("b0d7")),
            b = Object(u["a"])(c, s, n, !1, null, "42f79888", null);
        e["default"] = b.exports;
    },
    fbbb: function (t, e, o) {
        "use strict";
        o.r(e);
        var s = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o(
                    "div",
                    { staticClass: "bby-box-component" },
                    [
                        o("BaseComponentTitle", { attrs: { title: t.title, hintObjectProps: t.firstComponentProps } }),
                        o("div", { staticClass: "bby-component bby-select" }, [
                            o(
                                "select",
                                { staticClass: "bby-stroke-primaryMediumGray", attrs: { name: t.firstComponentProps.name }, on: { change: t.updateSelect } },
                                t._l(t.fontsVariants, function (e, s) {
                                    return o("option", { key: s, domProps: { selected: t.selectedDropdown(e), value: e } }, [t._v(" " + t._s(e) + " ")]);
                                }),
                                0
                            ),
                        ]),
                    ],
                    1
                );
            },
            n = [],
            i = o("3b7c"),
            a = (o("452c"), o("3a9c"), o("203f"), o("d3dd"), o("fd75"), o("65be")),
            r = o("5b8a"),
            l = o.n(r),
            c = {
                data: function () {
                    return { selectedFont: "", fontsVariants: {} };
                },
                props: { firstComponentProps: Object, title: String },
                beforeMount: function () {
                    null == this.$store.state.values[this.firstComponentProps.name]
                        ? this.$store.commit("UPDATE_LOGO_VALUES", [{ name: this.firstComponentProps.name, value: this.firstComponentProps.selected_value }])
                        : (this.selectedFont = this.fontFamilyState);
                },
                watch: {
                    googleFonts: function (t, e) {
                        this.selectedFont = this.fontFamilyState;
                    },
                    fontFamilyState: function (t, e) {
                        l.a.isEqual(t, e) || ((this.selectedFont = t), this.updateSelect({ target: { value: "regular", name: this.firstComponentProps.name } }));
                    },
                    selectedFont: function (t, e) {
                        if (!l.a.isEqual(t, e)) for (var o in this.googleFonts) this.selectedFont === this.googleFonts[o].family && (this.fontsVariants = this.googleFonts[o].variants);
                    },
                },
                computed: Object(i["a"])(
                    {},
                    Object(a["b"])({
                        googleFonts: function (t) {
                            return t.googleFonts;
                        },
                        fontFamilyState: function (t) {
                            return t.values.textFontFamilyDropDownList;
                        },
                        fontWeightState: function (t) {
                            return t.values.textFontWeightDropDownList;
                        },
                    })
                ),
                methods: {
                    updateSelect: function (t) {
                        var e,
                            o,
                            s,
                            n = t.target.value,
                            i = {};
                        for (var a in ((e = n.match("[a-zA-Z]*$")),
                        (s = n.match("^[0-9]{3}")),
                        "regular" == e[0] && ((s = []), (e[0] = "normal"), (s[0] = "400")),
                        "italic" == e[0] && null == s && ((s = []), (s[0] = "400")),
                        "" == e && ((e = []), (e[0] = "normal")),
                        this.googleFonts))
                            this.googleFonts[a].family == this.fontFamilyState && ((o = this.googleFonts[a].files[n]), null == o && ((o = this.googleFonts[a].files["300"]), (s[0] = "300"), (e[0] = "normal")));
                        (i = { logoFontStyle: e[0], logoFontUrl: o, logoFontWeight: s[0] }), this.$store.commit("UPDATE_LOGO_VALUES", [{ name: t.target.name, value: i }]);
                    },
                    selectedDropdown: function (t) {
                        var e = this.fontWeightState.logoFontWeight,
                            o = this.fontWeightState.logoFontStyle;
                        return "400" == e && (e = "regular"), "italic" == o && (e += o), e == t ? "selected" : "";
                    },
                },
            },
            u = c,
            b = o("b0d7"),
            d = Object(b["a"])(u, s, n, !1, null, "8f7c43c8", null);
        e["default"] = d.exports;
    },
    fd44: function (t, e, o) {
        "use strict";
        o("44bd");
    },
    fd73: function (t, e, o) {},
});
//# sourceMappingURL=app.69c285bc.js.map