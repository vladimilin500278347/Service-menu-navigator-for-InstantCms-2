/**!
 * FooNav - A jQuery navigation menu.
 * @version 0.0.6
 * @link http://fooplugins.github.io/foonav/
 * @copyright Steven Usher & Brad Vincent 2014
 * @license Released under the MIT license.
 */

(function (n, t) {
    t.FooNav = {
        defaults: {
            after: null,
            before: null,
            buttons: null,
            classes: null,
            deeplinking: !1,
            icons: {
                back: {family: "fon-icon", icon: "fon-icon-back"},
                expand: {family: "fon-icon", icon: "fon-icon-expand"},
                home: {family: "fon-icon", icon: "fon-icon-home"},
                menu: {family: "fon-icon", icon: "fon-icon-menu"},
                top: {family: "fon-icon", icon: "fon-icon-top"}
            },
            items: "body",
            position: "fon-top-right",
            theme: "fon-light",
            title: null,
            top: !0,
            transition: "slide",
            scroll: 0,
            speed: 200,
            smart: {enable: !0, anchors: !0, close: !0, open: !1, remember: !0, scroll: !0, url: !0}
        }, instances: []
    }, jQuery.Event.prototype.allow = !1, FooNav.fetch = function (n) {
        return n = n > FooNav.instances.length - 1 ? FooNav.instances.length - 1 : 0 > n ? 0 : n, FooNav.instances[n]
    }, FooNav.init = function (n) {
        return new FooNav.Instance(n)
    }, FooNav.reinit = function (n, t) {
        FooNav.fetch(n).reinit(t)
    }, FooNav.destroy = function (n) {
        FooNav.fetch(n).destroy()
    }, FooNav.destroyAll = function () {
        for (var n = 0; FooNav.instances.length > n; n++) {
            var t = FooNav.instances[n];
            null != t && t.destroy()
        }
    }, FooNav.items = function (t, e, o) {
        function i(t) {
            for (var e = 0; f.length > e; e++) if (n(t).is(f[e])) return e;
            return -1
        }

        function s(n) {
            for (var t = [], e = 0; n > e; e++) t.push(f[e]);
            return t.join(",")
        }

        function a(n, t) {
            for (var e = 0; t.length > e; e++) {
                if (t[e].href == "#" + n) return t[e];
                if (t[e].children) {
                    var o = a(n, t[e].children);
                    if (null != o) return o
                }
            }
            return null
        }

        function r(t, e) {
            return null == o || "" == o ? !0 : 0 == n(e).closest(o).length
        }

        function l() {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        }

        t = t || "body", e = e || "h1,h2,h3,h4,h5,h6", o = o || "";
        var c = [], f = e.split(","), u = null, h = null, d = null, p = null, m = null;
        return n(t).find(e).filter(r).each(function () {
            if (h = this, m = n(h), ("" == h.id || null == h.id) && (h.id = l()), u = {
                    text: m.text(),
                    href: "#" + h.id
                }, p = s(i(h)), null != p && "" != p) if (d = m.prevAll(p).first(), d.length > 0) {
                var t = a(d.attr("id"), c);
                null != t ? (t.children = t.children || [], t.children.push(u)) : c.push(u)
            } else c.push(u); else c.push(u)
        }), c
    }, FooNav.Timer = function () {
        this.id = null;
        var n = this;
        return this.start = function (t, e) {
            n.stop(), n.id = setTimeout(function () {
                n.id = null, t()
            }, e)
        }, this.stop = function () {
            null != n.id && (clearTimeout(n.id), n.id = null)
        }, this
    }, FooNav.Instance = function (e) {
        this.id = FooNav.instances.push(this), this.index = this.id - 1, this.o = n.extend(!0, {}, FooNav.defaults), this.nav = null, this.inner = null, this.buttons = null, this.back = null, this.top = null, this.toggle_button = null, this.menu = null, this.initialized = !1;
        var o = this, i = {}, s = function () {
        };
        return i.ready = null, this.init = function (e) {
            return o.o = n.extend(!0, o.o, e), o.b.items(), o.b.nav(), o.b.buttons(), o.b.menu(), o.b.extra(), o.o.smart.enable && (o.o.smart.url && o.m.set(location.href, o.o.smart.open), o.o.smart.close && n(t).on("click", o.w.clicked), o.o.smart.anchors && n(t).on("scroll", o.a.check)), n(t).on("scroll", o.w.scrolled).on("resize", o.w.resized), 0 == o.o.scroll && o.nav.show(), setTimeout(function () {
                o.m.position(!1), o.initialized = !0, n.isFunction(i.ready) && i.ready.call(o, o)
            }, 500), o
        }, this.reinit = function (n) {
            o.destroy(!0), o.init(n)
        }, this.destroy = function (e) {
            o.initialized = !1, e = e || !1, n(t).off("scroll", o.a.check).off("scroll", o.w.scrolled).off("click", o.w.clicked).off("resize", o.w.resized), o.nav.remove(), o.o = n.extend(!0, {}, FooNav.defaults), o.nav = o.inner = o.back = o.top = o.toggle_button = o.menu = null, e || (FooNav.instances[o.index] = null)
        }, this.ready = function (t) {
            n.isFunction(t) && (1 == o.initialized ? t.call(o, o) : i.ready = t)
        }, this.toggle = function () {
            o.m.toggle({allow: !0})
        }, this.u = {
            _a: document.createElement("a"), qualify: function (n) {
                return o.u._a.href = n, o.u._a.href
            }, isCurrent: function (n) {
                return o.u.qualify(n) == [location.protocol, "//", location.host, location.pathname].join("")
            }, concat: function () {
                return Array.prototype.slice.call(arguments).join(" ")
            }, position: function () {
                var n = o.o.position.split("-");
                return {v: n[1], h: n[2]}
            }, exists: function (t, e, o) {
                if (e = e || s, o = o || s, "string" == typeof t && "#" == t.substring(0, 1)) {
                    var i = n(t);
                    return i.length > 0 ? (e(i), !0) : (o(), !1)
                }
                return o(), !1
            }, viewportSize: function () {
                var n = t.devicePixelRatio !== void 0 ? t.devicePixelRatio : 1;
                return {
                    width: (t.innerWidth || document.documentElement.clientWidth || (document.body ? document.body.offsetWidth : 0)) / n,
                    height: (t.innerHeight || document.documentElement.clientHeight || (document.body ? document.body.offsetHeight : 0)) / n
                }
            }, _supportsTransitions: null, supportsTransitions: function () {
                if (null != o.u._supportsTransitions) return o.u._supportsTransitions;
                var n, t = document.body || document.documentElement, e = t.style, i = "transition";
                if ("string" == typeof e[i]) return !0;
                n = ["Moz", "Webkit", "Khtml", "O", "ms"], i = i.charAt(0).toUpperCase() + i.substr(1);
                for (var s = 0; n.length > s; s++) if ("string" == typeof e[n[s] + i]) return o.u._supportsTransitions = !0;
                return o.u._supportsTransitions = !1
            }
        }, this.b = {
            items: function () {
                if (!n.isArray(o.o.items)) {
                    var t = typeof o.o.items;
                    "string" == t ? o.o.items = FooNav.items(o.o.items) : "object" == t && (o.o.items = FooNav.items(o.o.items.container, o.o.items.selector, o.o.items.exclude))
                }
            }, nav: function () {
                o.nav = n("<div></div>", {
                    "class": o.u.concat("fon-nav", o.o.position, o.o.theme, o.o.classes),
                    css: {display: "none"}
                }).on("click", ".fon-item-link", o.m.clicked).on("click", ".fon-item-back", o.m.back).appendTo("body")
            }, buttons: function () {
                function t(t) {
                    var e = o.o.icons[t];
                    return e ? n("<span></span>", {"class": o.u.concat("fon-button-icon", e.family, e.icon)}) : n()
                }

                if (o.buttons = n("<div></div>", {"class": "fon-buttons"}).appendTo(o.nav), o.top = n("<a></a>", {
                        "class": "fon-button fon-button-top",
                        href: "#top",
                        on: {click: o.w.top}
                    }).append(t("top")).appendTo(o.buttons), o.toggle_button = n("<a></a>", {
                        "class": "fon-button",
                        href: "#toggle",
                        on: {click: o.m.toggle}
                    }).append(t("menu")).appendTo(o.buttons), "object" == typeof o.o.buttons) for (var e in o.o.buttons) if (o.o.buttons.hasOwnProperty(e) && o.o.icons.hasOwnProperty(e)) {
                    var i = o.o.buttons[e];
                    if ("string" == typeof i) {
                        if ("home" == e && o.u.isCurrent(i)) continue;
                        n("<a></a>", {
                            "class": "fon-button",
                            href: i
                        }).append(t(e)).appendTo(o.buttons)
                    } else if ("object" == typeof i) {
                        if ("string" != typeof i.href || "home" == e && o.u.isCurrent(i.href)) continue;
                        i["class"] = "string" == typeof i["class"] ? o.u.concat("fon-button", i["class"]) : "fon-button", n("<a></a>", i).append(t(e)).appendTo(o.buttons)
                    }
                }
                var s = o.toggle_button.outerHeight() * o.buttons.children().length,
                    a = parseInt(o.buttons.css("top"), 0), r = parseInt(o.buttons.css("bottom"), 0),
                    l = isNaN(a) ? isNaN(r) ? 0 : r : a;
                o.nav.css("min-height", s + l)
            }, menu: function () {
                function t(t) {
                    var e = o.o.icons[t];
                    return e ? n("<span></span>", {"class": o.u.concat("fon-item-icon", e.family, e.icon)}) : n()
                }

                function e(i, s, a) {
                    var r, l, c, f, u, h = a.length;
                    for (null != s ? (c = n("<li></li>").appendTo(i), f = n("<a></a>", {
                        "class": "fon-item fon-item-back",
                        href: s.href,
                        text: s.text
                    }).prepend(t("back")).appendTo(c), o.u.exists(s.href) && f.addClass("fon-anchored")) : "string" == typeof o.o.title && (c = n("<li></li>").appendTo(i), f = n("<span></span>", {
                        "class": "fon-item fon-item-title fon-anchored",
                        text: o.o.title
                    }).appendTo(c)), r = 0; h > r; r++) u = a[r], c = n("<li></li>").appendTo(i), f = n("<a></a>", {
                        "class": "fon-item fon-item-link",
                        href: u.href,
                        text: u.text
                    }).appendTo(c), o.u.exists(u.href) && f.addClass("fon-anchored"), n.isArray(u.children) && (f.addClass("fon-has-menu").prepend(t("expand")), l = n("<ul></ul>", {"class": "fon-menu"}).appendTo(c), e(l, u, u.children))
                }

                o.inner = n("<div></div>", {"class": "fon-nav-inner"}).appendTo(o.nav), o.menu = n("<ul></ul>", {"class": "fon-menu"}), e(o.menu, null, o.o.items), o.inner.append(o.menu.clone())
            }, extra: function () {
                null != o.o.before && o.nav.prepend(n("<div></div>", {"class": "fon-before"}).append(o.o.before)), null != o.o.after && o.nav.append(n("<div></div>", {"class": "fon-after"}).append(o.o.after))
            }
        }, this.m = {
            position: function (n) {
                n = n || !1;
                var t = o.u.position();
                n ? (o.nav.css(t.h, 0), o.nav.removeClass("fon-closed fon-user-closed").addClass("fon-open")) : (o.nav.css(t.h, -o.nav.outerWidth(!0)), o.nav.removeClass("fon-open").addClass("fon-closed"))
            }, exists: function (t, e, i) {
                if (e = e || o.menu, i = i || !1, null == t && i) return e.find("li > .fon-item-title").first();
                if (t = o.u.qualify(t), i) {
                    var s = e.find("li > .fon-item-back").filter(function () {
                        return t == o.u.qualify(n(this).attr("href"))
                    }).first();
                    if (s.length > 0) return s
                }
                return e.find("li > .fon-item-link").filter(function () {
                    return t == o.u.qualify(n(this).attr("href"))
                }).first()
            }, active: function (n, t, e) {
                e = e || !1, t.find("li > .fon-active").removeClass("fon-active");
                var i = o.m.exists(n, t, e);
                0 != i.length && i.addClass("fon-active")
            }, size: function (t) {
                var e = n(".fon-nav-size"), i = o.nav.find(".fon-before"), s = o.nav.find(".fon-after");
                0 == e.length && (e = n("<div></div>", {"class": "fon-nav-size"}).appendTo("body"), n("<div></div>", {"class": "fon-nav-inner"}).appendTo(e)), e.removeClass().addClass(o.u.concat("fon-nav-size", o.o.theme, o.o.classes, o.o.position));
                var a = e.find(".fon-nav-inner").empty().append(t.clone());
                return {
                    height: a.height(),
                    width: a.width(),
                    before: {height: i.height(), width: i.width()},
                    after: {height: s.height(), width: s.width()}
                }
            }, resize: function () {
                var n = o.inner.children(".fon-menu:first");
                0 != n.length && o.m.setSize(o.m.size(n))
            }, setSize: function (n) {
                if ("number" == typeof n.width && "number" == typeof n.height) {
                    var t = o.u.viewportSize(), e = o.nav.height(),
                        i = (n.before.height ? n.before.height : 0) + (n.after.height ? n.after.height : 0) + 7;
                    640 > t.width && (n.height = e - i), o.inner.css({
                        width: n.width,
                        height: n.height
                    })
                }
            }, get: function (n, t) {
                return "string" == typeof n ? o.m.exists(n, o.menu, t).closest(".fon-menu").clone() : o.menu.clone()
            }, set: function (n, t) {
                t = t || !1;
                var e = o.m.get(n, !0);
                0 != e.length && (o.inner.empty(), o.m.setSize(o.m.size(e)), o.inner.append(e), o.m.active(n, e, !0), o.m.position(t))
            }, transition: function (n, t, e, i) {
                i = i || s;
                var a, r = o.m.size(t), l = {
                        height: o.inner.height(),
                        width: o.inner.width()
                    }, c = {}, f = {}, u = {},
                    h = {}, d = o.u.viewportSize(), p = o.nav.height(),
                    m = (r.before.height ? r.before.height : 0) + (r.after.height ? r.after.height : 0) + 7;
                640 > d.width && (r.height = p - m);
                var v = r.width != l.width || r.height != l.height ? o.o.speed : 0;
                switch (o.o.transition) {
                    case"fade":
                        a = "opacity", c[a] = f[a] = 0, u[a] = 1, h[a] = "";
                        break;
                    default:
                        a = "left", c[a] = e ? l.width : -l.width, f[a] = e ? -l.width : l.width, u[a] = 0, h[a] = ""
                }
                o.inner.stop(), n.stop().animate(c, o.o.speed, function () {
                    n.remove(), o.inner.animate(r, v, function () {
                        o.inner.empty().append(t.css(f)), t.animate(u, o.o.speed, function () {
                            t.css(h), i()
                        })
                    })
                })
            }, toggle: function (n) {
                n.allow || (n.preventDefault(), n.stopPropagation()), o.nav.toggleClass("fon-open");
                var t = o.nav.outerWidth(!0), e = o.nav.hasClass("fon-open"), i = o.u.position(), s = 0, a = 0, r = {};
                e ? s = -t : a = -t, r[i.h] = a, e ? o.nav.removeClass("fon-closed fon-user-closed") : o.nav.addClass("fon-closing"), o.nav.css(i.h, s).animate(r, o.o.speed, function () {
                    if (!e && null != o.nav) {
                        if (o.o.smart.enable && !o.o.smart.remember) {
                            var n = o.menu.clone();
                            o.inner.empty(), o.m.setSize(o.m.size(n)), o.inner.append(n), o.m.position(!1)
                        }
                        o.nav.removeClass("fon-closing").addClass("fon-closed fon-user-closed")
                    }
                })
            }, back: function (t) {
                var e = n(this), i = e.attr("href"), s = o.inner.find("> .fon-menu:last"), a = o.m.get(i),
                    r = e.hasClass("fon-anchored");
                o.m.transition(s, a, !0, function () {
                    o.m.active(i, a)
                }), r && o.o.smart.enable && o.o.smart.scroll && (t.preventDefault(), t.stopPropagation(), o.w.scroll(i), o.d.set(i.substring(1, i.length)))
            }, clicked: function (t) {
                var e = n(this), i = e.hasClass("fon-anchored"), s = e.hasClass("fon-has-menu"), a = e.attr("href");
                if (e.parents(".fon-menu:first").find("li > .fon-active").removeClass("fon-active"), e.addClass("fon-active"), s) {
                    var r = o.inner.find("> .fon-menu:last"), l = o.m.get(a, !0);
                    o.m.transition(r, l, !1, function () {
                        o.m.active(a, l, !0)
                    })
                }
                i && o.o.smart.enable && o.o.smart.scroll ? (t.preventDefault(), t.stopPropagation(), o.w.scroll(a), o.d.set(a.substring(1, a.length))) : "#" == a.substring(0, 1) && o.o.smart.enable && o.o.smart.scroll && (t.preventDefault(), t.stopPropagation())
            }
        }, this.d = {
            set: function (n) {
                o.o.deeplinking && (t.history && t.history.pushState ? t.history.replaceState(null, document.title, t.location.pathname + t.location.search + "#" + n) : t.location.replace(("" + t.location).split("#")[0] + "#" + n))
            }, clear: function () {
                o.o.deeplinking && (t.history && t.history.pushState ? t.history.replaceState(null, document.title, t.location.pathname + t.location.search) : t.location.replace(("" + t.location).split("#")[0] + "#/"))
            }
        }, this.a = {
            _check: new FooNav.Timer, tracked: {
                elements: [], build: function (t) {
                    var e, i;
                    for (e = 0; t.length > e; e++) if (i = t[e], n.isArray(i.children) && o.a.tracked.build(i.children), "string" == typeof i.href && "#" == i.href.substring(0, 1)) {
                        var s = n(i.href);
                        if (0 == s.length) continue;
                        o.a.tracked.elements.push(s.addClass("fon-tracked"))
                    }
                }, get: function () {
                    return o.a.tracked.elements.length > 0 ? o.a.tracked.elements : (o.a.tracked.elements = [], o.a.tracked.build(o.o.items), o.a.tracked.elements)
                }
            }, visible: function (n) {
                var t = n.getBoundingClientRect(), e = 20;
                return t.top >= -e && t.left >= -e
            }, check: function () {
                o.a._check.start(function () {
                    var e = n(t).scrollTop();
                    if (o.o.scroll >= e) o.m.set(null, o.nav.hasClass("fon-open")); else {
                        var i, s, a, r, l = o.a.tracked.get(), c = [], f = 0, u = n();
                        for (i = 0; l.length > i; i++) o.a.visible(l[i].get(0)) && c.push(l[i]);
                        for (i = 0; c.length > i; i++) s = c[i], a = s.offset(), (0 == f || f > a.top) && (f = a.top, u = s);
                        if (0 == u.length) return;
                        r = u.attr("id"), o.m.set("#" + r, o.nav.hasClass("fon-open") || !o.nav.hasClass("fon-user-closed") && o.o.smart.open), o.d.set(r)
                    }
                }, 100)
            }
        }, this.w = {
            _scroll: new FooNav.Timer,
            _scrolled: new FooNav.Timer,
            _resized: new FooNav.Timer,
            scroll: function (e) {
                o.a._check.stop();
                var i = n(e), s = i.offset().top;
                n(t).off("scroll", o.a.check), o.w._scroll.stop(), n("html, body").stop().animate({scrollTop: s}, 800, function () {
                    o.w._scroll.start(function () {
                        o.w._to = null, n(t).on("scroll", o.a.check)
                    }, 100)
                }), o.o.smart.enable && o.o.smart.scroll
            },
            scrolled: function () {
                o.w._scrolled.start(function () {
                    var e = n(t).scrollTop();
                    o.o.top && (e > 0 ? o.top.addClass("fon-show") : o.top.removeClass("fon-show"), o.u.supportsTransitions() || (e > 0 ? o.top.slideDown(500) : o.top.slideUp(500))), 0 != o.o.scroll && (e > o.o.scroll ? o.nav.fadeIn(o.o.speed) : o.nav.fadeOut(o.o.speed))
                }, 100)
            },
            clicked: function (t) {
                !o.nav.hasClass("fon-open") || o.nav.hasClass("fon-closing") || n(t.target).is("fon-nav") || 0 != n(t.target).closest(".fon-nav").length || (t.allow = !0, o.m.toggle.call(o.toggle_button.get(0), t))
            },
            top: function (t) {
                t.preventDefault(), t.stopPropagation(), o.o.smart.enable && o.o.smart.scroll ? n("html, body").stop().animate({scrollTop: 0}, 1e3) : n("html, body").scrollTop(0)
            },
            resized: function () {
                o.w._resized.start(function () {
                    o.m.resize()
                }, 100)
            }
        }, this.init(e)
    }
})(jQuery, window);
