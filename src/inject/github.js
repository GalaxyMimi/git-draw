define("github-rollup-github-bootstrap", ["github/metadata", "invariant", "github/document-ready", "github/failbot", "github/query-selector", "github/onfocus", "selector-observer", "delegated-events", "github/typecast", "github/debounce", "github/remote-form", "github/form", "github/navigation", "github/throttled-input", "github/sliding-promise-queue", "github/fetch", "github/history", "github/proxy-site-detection", "github/send-beacon", "github/feature-detection", "github/updatable-content", "github/has-interactions", "github/menu", "github/hotkey", "github/facebox", "github/jquery", "github/eventloop-tasks", "github/emoji-detection", "github/visible", "github/session-storage", "github/dimensions", "@github/lit-html", "github/parse-html", "github/fragment-target", "github/pjax", "github/sudo", "github/hash-change", "github/google-analytics", "github/number-helpers", "github/text", "github/inflector", "github/details", "github/select-menu/loading", "github/inspect", "github/restrict-tab-behavior", "github/preserve-position", "github/code-editor", "form-data-entries", "@github/sortablejs", "github/sso", "github/pjax/prefetch", "github/html-safe", "github/timers", "github/timezone", "github/task-list"], function(e, t, n, r, a, o, s, i, c, u, l, d, m, f, v, p, h, g, y, b, j, L, w, x, k, E, T, S, q, A, M, H, C, I, _, R, F, P, O, N, D, B, U, z, W, V, $, J, K, G, Y, X, Q, Z, ee) {
	"use strict";
	t = t && t.hasOwnProperty("default") ? t.default : t, c = c && c.hasOwnProperty("default") ? c.default : c, u = u && u.hasOwnProperty("default") ? u.default : u, v = v && v.hasOwnProperty("default") ? v.default : v, g = g && g.hasOwnProperty("default") ? g.default : g, b = b && b.hasOwnProperty("default") ? b.default : b, x = x && x.hasOwnProperty("default") ? x.default : x;
	var te = "default" in k ? k.default : k;
	E = E && E.hasOwnProperty("default") ? E.default : E, q = q && q.hasOwnProperty("default") ? q.default : q;
	var ne = "default" in _ ? _.default : _;
	R = R && R.hasOwnProperty("default") ? R.default : R, F = F && F.hasOwnProperty("default") ? F.default : F, z = z && z.hasOwnProperty("default") ? z.default : z, W = W && W.hasOwnProperty("default") ? W.default : W, J = J && J.hasOwnProperty("default") ? J.default : J, K = K && K.hasOwnProperty("default") ? K.default : K, G = G && G.hasOwnProperty("default") ? G.default : G, Z = Z && Z.hasOwnProperty("default") ? Z.default : Z;
	var re = void 0;

	function ae(t) {
		return re || (re = e.getMetadataByName(document, "enabled-features").split(",")), -1 !== re.indexOf(t)
	}

	function oe(e, t, n) {
		var r = {};

		function a(e) {
			var n = e.name;
			r[n] = r[n] || [], r[n].push(e), t(e)
		}
		var o = !0,
			s = !1,
			i = void 0;
		try {
			for (var c, u = e.querySelectorAll("img")[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
				var l = c.value;
				l.hasAttribute("alt") || a(new ie(l))
			}
		} catch (e) {
			s = !0, i = e
		} finally {
			try {
				!o && u.return && u.return()
			} finally {
				if (s) throw i
			}
		}
		var d = !0,
			m = !1,
			f = void 0;
		try {
			for (var v, p = e.querySelectorAll("a")[Symbol.iterator](); !(d = (v = p.next()).done); d = !0) {
				var h = v.value;
				h.hasAttribute("name") || ve(h) || (null == h.getAttribute("href") && "button" !== h.getAttribute("role") ? a(new ue(h)) : he(h) || a(new ce(h)))
			}
		} catch (e) {
			m = !0, f = e
		} finally {
			try {
				!d && p.return && p.return()
			} finally {
				if (m) throw f
			}
		}
		var g = !0,
			y = !1,
			b = void 0;
		try {
			for (var j, L = e.querySelectorAll("button")[Symbol.iterator](); !(g = (j = L.next()).done); g = !0) {
				var w = j.value;
				ve(w) || he(w) || a(new me(w))
			}
		} catch (e) {
			y = !0, b = e
		} finally {
			try {
				!g && L.return && L.return()
			} finally {
				if (y) throw b
			}
		}
		var x = !0,
			k = !1,
			E = void 0;
		try {
			for (var T, S = e.querySelectorAll("label")[Symbol.iterator](); !(x = (T = S.next()).done); x = !0) {
				var q = T.value;
				q.control || document.getElementById(q.getAttribute("for")) || q.querySelector("input") || ve(q) || a(new le(q))
			}
		} catch (e) {
			k = !0, E = e
		} finally {
			try {
				!x && S.return && S.return()
			} finally {
				if (k) throw E
			}
		}
		var A = !0,
			M = !1,
			H = void 0;
		try {
			for (var C, I = e.querySelectorAll("input[type=text], input[type=url], input[type=search], input[type=number], textarea")[Symbol.iterator](); !(A = (C = I.next()).done); A = !0) {
				var _ = C.value;
				(_.labels ? _.labels[0] : _.closest("label") || document.querySelector('label[for="' + _.id + '"]')) || ve(_) || _.hasAttribute("aria-label") || a(new de(_))
			}
		} catch (e) {
			M = !0, H = e
		} finally {
			try {
				!A && I.return && I.return()
			} finally {
				if (M) throw H
			}
		}
		if (n && n.ariaPairs)
			for (var R in n.ariaPairs) {
				var F = n.ariaPairs[R],
					P = !0,
					O = !1,
					N = void 0;
				try {
					for (var D, B = e.querySelectorAll(R)[Symbol.iterator](); !(P = (D = B.next()).done); P = !0) {
						var U = D.value,
							z = [],
							W = !0,
							V = !1,
							$ = void 0;
						try {
							for (var J, K = F[Symbol.iterator](); !(W = (J = K.next()).done); W = !0) {
								var G = J.value;
								U.hasAttribute(G) || z.push(G)
							}
						} catch (e) {
							V = !0, $ = e
						} finally {
							try {
								!W && K.return && K.return()
							} finally {
								if (V) throw $
							}
						}
						z.length > 0 && a(new fe(U, z.join(", ")))
					}
				} catch (e) {
					O = !0, N = e
				} finally {
					try {
						!P && B.return && B.return()
					} finally {
						if (O) throw N
					}
				}
			}
		return r
	}

	function se(e) {
		e.prototype = new Error, e.prototype.constructor = e
	}

	function ie(e) {
		this.name = "ImageWithoutAltAttributeError", this.stack = (new Error).stack, this.element = e, this.message = "Missing alt attribute on " + ge(e)
	}

	function ce(e) {
		this.name = "ElementWithoutLabelError", this.stack = (new Error).stack, this.element = e, this.message = "Missing text, title, or aria-label attribute on " + ge(e)
	}

	function ue(e) {
		this.name = "LinkWithoutLabelOrRoleError", this.stack = (new Error).stack, this.element = e, this.message = "Missing href or role=button on " + ge(e)
	}

	function le(e) {
		this.name = "LabelMissingControlError", this.stack = (new Error).stack, this.element = e, this.message = "Label missing control on " + ge(e)
	}

	function de(e) {
		this.name = "InputMissingLabelError", this.stack = (new Error).stack, this.element = e, this.message = "Missing label for or aria-label attribute on " + ge(e)
	}

	function me(e) {
		this.name = "ButtonWithoutLabelError", this.stack = (new Error).stack, this.element = e, this.message = "Missing text or aria-label attribute on " + ge(e)
	}

	function fe(e, t) {
		this.name = "ARIAAttributeMissingError", this.stack = (new Error).stack, this.element = e, this.message = "Missing " + t + " attribute on " + ge(e)
	}

	function ve(e) {
		return null != e.closest('[aria-hidden="true"], [hidden], [style*="display: none"]')
	}

	function pe(e) {
		return "string" == typeof e && !!e.trim()
	}

	function he(e) {
		switch (e.nodeType) {
			case Node.ELEMENT_NODE:
				if (pe(e.getAttribute("alt")) || pe(e.getAttribute("aria-label")) || pe(e.getAttribute("title"))) return !0;
				for (var t = 0; t < e.childNodes.length; t++)
					if (he(e.childNodes[t])) return !0;
				break;
			case Node.TEXT_NODE:
				return pe(e.data)
		}
	}

	function ge(e) {
		var t = e.outerHTML;
		e.innerHTML && (t = t.replace(e.innerHTML, "..."));
		for (var n = []; e && "BODY" !== e.nodeName && (n.push(ye(e)), !e.id);) e = e.parentNode;
		return '"' + n.reverse().join(" > ") + '". \n\n' + t
	}

	function ye(e) {
		var t = [e.nodeName.toLowerCase()];
		if (e.id && t.push("#" + e.id), e.hasAttribute("class")) {
			var n = !0,
				r = !1,
				a = void 0;
			try {
				for (var o, s = e.getAttribute("class").split(/\s+/)[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
					var i = o.value;
					i.match(/^js-/) && t.push("." + i)
				}
			} catch (e) {
				r = !0, a = e
			} finally {
				try {
					!n && s.return && s.return()
				} finally {
					if (r) throw a
				}
			}
		}
		return t.join("")
	}
	se(ie), se(ce), se(ue), se(le), se(de), se(me), se(fe);
	var be = !1;

	function je(e) {
		if (! function(e) {
				var n = document.body;
				return t(n, "null.js:11"), n.classList.contains("zhio") || e.element.classList.contains("zh-login-status") || e.element.closest("#window-resizer-tooltip") || e.element.closest(".octotree_sidebar") || e.element.closest(".markdown-body")
			}(e)) {
			be && console.warn(e.name + ": " + e.message);
			var n = "Accessibility: " + e.name + "\n" + e.message;
			(ae("ACCESSIBILITY_UI_WARNING") || window.testEnvA11yErrors) && (e.element.classList.add("accessibility-error"), window.testEnvA11yErrors || e.element.addEventListener("click", function() {
				alert(n + "\n\nFor more information see https://styleguide.github.com/primer/principles/accessibility\nSlack #accessibility if you need help resolving this")
			})), window.testEnvA11yErrors && window.testEnvA11yErrors.push(n), ae("LOG_ACCESSIBILITY") && r.reportError(e, {
				bucket: "github-accessibility"
			})
		}
	}
	var Le = {
		ariaPairs: {
			".js-menu-target": ["aria-expanded", "aria-haspopup"],
			".js-details-target": ["aria-expanded"]
		}
	};
	n.ready.then(function() {
		((be = null != document.querySelector(".js-header-wrapper.stats-ui-enabled")) || window.testEnvA11yErrors || ae("ACCESSIBILITY_UI_WARNING") || ae("LOG_ACCESSIBILITY")) && (requestIdleCallback(function() {
			return oe(document, je, Le)
		}), document.addEventListener("pjax:end", function(e) {
			requestIdleCallback(function() {
				return oe(e.target, je, Le)
			})
		}), document.addEventListener("facebox:reveal", function() {
			var e = document.querySelector(".facebox");
			requestIdleCallback(function() {
				return oe(e, je, Le)
			})
		}))
	});
	var we, xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		ke = function(e) {
			return function() {
				var t = e.apply(this, arguments);
				return new Promise(function(e, n) {
					return function r(a, o) {
						try {
							var s = t[a](o),
								i = s.value
						} catch (e) {
							return void n(e)
						}
						if (!s.done) return Promise.resolve(i).then(function(e) {
							r("next", e)
						}, function(e) {
							r("throw", e)
						});
						e(i)
					}("next")
				})
			}
		},
		Ee = function(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		},
		Te = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		Se = function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		},
		qe = function(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		},
		Ae = function() {
			return function(e, t) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return function(e, t) {
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							!r && i.return && i.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		Me = function(e, t) {
			return Object.freeze(Object.defineProperties(e, {
				raw: {
					value: Object.freeze(t)
				}
			}))
		},
		He = function(e) {
			if (Array.isArray(e)) {
				for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
				return n
			}
			return Array.from(e)
		};

	function Ce() {
		var e = a.querySelectorAll(document, "input[type=text].js-advanced-search-prefix", HTMLInputElement),
			t = a.querySelectorAll(document, "select.js-advanced-search-prefix", HTMLSelectElement),
			n = a.querySelectorAll(document, ".js-advanced-search-prefix:checked", HTMLInputElement),
			r = [].concat(He(_e(e)), He(_e(t)), He(_e(n))),
			o = r.reduce(function(e, t) {
				return t.value && t.type && e[t.type]++, e
			}, {
				Repositories: 0,
				Users: 0,
				Code: 0,
				Issues: 0
			}),
			s = r.reduce(function(e, t) {
				return (e + " " + (n = t, r = n.prefix, a = n.value, "" === r ? "" : a ? "" + r + a : "")).trim();
				var n, r, a
			}, ""),
			i = a.query(document, ".js-advanced-search-input", HTMLInputElement).value;
		a.query(document, ".js-type-value", HTMLInputElement).value = function(e) {
			var t = 0,
				n = "Repositories";
			for (var r in e) e[r] > t && (t = e[r], n = r);
			return n
		}(o), a.query(document, ".js-search-query", HTMLInputElement).value = (i + " " + s).trim();
		var c = a.query(document, ".js-advanced-query");
		c.innerHTML = "", c.textContent = s;
		var u = document.createElement("span");
		u.textContent = i.trim(), c.prepend(u, " ")
	}

	function Ie(e) {
		return -1 !== e.search(/\s/g) ? '"' + e + '"' : e
	}

	function _e(e) {
		return e.map(function(e) {
			var n = e.value.trim(),
				r = e.getAttribute("data-search-prefix");
			t(null != r, "null.js:82");
			var a = e.getAttribute("data-search-type");
			return "" === r ? {
				prefix: r,
				value: n,
				type: a
			} : -1 !== n.search(/,/g) && "location" !== r ? n.split(/,/).map(function(e) {
				return {
					prefix: r,
					value: Ie(e.trim()),
					type: a
				}
			}) : {
				prefix: r,
				value: Ie(n),
				type: a
			}
		}).reduce(function(e, t) {
			return e.concat(t)
		}, [])
	}

	function Re(e, t) {
		var n = e.querySelector(".js-app-logo-with-bgcolor");
		n && (n.style.backgroundColor = "#" + t)
	}

	function Fe(e, t) {
		if (e.nextElementSibling) {
			var n = c(e.nextElementSibling, HTMLElement);
			return n.classList.contains(t) ? n : Fe(n, t)
		}
	}

	function Pe(e, t) {
		t.classList.remove("is-loading", "successed", "errored", "warn"), e.classList.remove("is-autocheck-loading", "is-autocheck-successful", "is-autocheck-errored");
		var n = t.querySelector("p.note");
		n && n.classList.remove("d-none");
		var r = t.querySelector("dd.error");
		r && r.remove();
		var a = t.querySelector("dd.warning");
		a && a.remove()
	}

	function Oe(e) {
		t(e instanceof CustomEvent, "null.js:29");
		var n = e.target;
		t(n instanceof AutocompleteElement, "null.js:32");
		var r = e.detail,
			a = r.input,
			o = r.results;
		a.classList.toggle("js-navigation-enable", n.open);
		var s = o.querySelector(".js-navigation-container");
		s && (n.open ? (m.push(s), a.matches("[data-autocomplete-autofocus]") && m.focus(s)) : m.pop(s))
	}

	function Ne(e, t) {
		if (!e.classList.contains("disabled")) {
			var n = e.getAttribute("data-autocomplete-value");
			n && (t.value = n, t.open = !1, e.classList.remove("active"))
		}
	}
	o.onInput(".js-advanced-search-prefix", function() {
		Ce()
	}), i.on("change", ".js-advanced-search-prefix", Ce), o.onFocus(".js-advanced-search-input", function(e) {
		var t = a.closest(e, ".js-advanced-search-label");
		t.classList.add("focus"), e.addEventListener("blur", function() {
			return t.classList.remove("focus")
		}, {
			once: !0
		})
	}), i.on("click", ".js-see-all-search-cheatsheet", function(e) {
		e.preventDefault();
		var t = !0,
			n = !1,
			r = void 0;
		try {
			for (var a, o = document.querySelectorAll(".js-more-cheatsheet-info")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
				a.value.classList.remove("d-none")
			}
		} catch (e) {
			n = !0, r = e
		} finally {
			try {
				!t && o.return && o.return()
			} finally {
				if (n) throw r
			}
		}
	}), s.observe(".js-advanced-search-input", function() {
		Ce()
	}), l.remoteForm(".js-app-bgcolor-form", (we = ke(regeneratorRuntime.mark(function e(t, n) {
		var r, a;
		return regeneratorRuntime.wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					if (r = t.querySelector(".js-app-bgcolor-save-notice")) {
						e.next = 3;
						break
					}
					return e.abrupt("return");
				case 3:
					return a = void 0, e.prev = 4, e.next = 7, n.html();
				case 7:
					a = e.sent, e.next = 13;
					break;
				case 10:
					e.prev = 10, e.t0 = e.catch(4), r.classList.remove("visible");
				case 13:
					a && (r.classList.add("visible"), setTimeout(function() {
						return r.classList.remove("visible")
					}, 1500));
				case 14:
				case "end":
					return e.stop()
			}
		}, e, this, [
			[4, 10]
		])
	})), function(e, t) {
		return we.apply(this, arguments)
	})), o.onInput(".js-app-bgcolor-input", function(e) {
		var t = c(e.target, HTMLInputElement),
			n = a.closest(t, "form", HTMLFormElement),
			r = t.value.replace(/^#/, "");
		if (r.length < 1) return t.classList.remove("text-red"), void Re(n, t.defaultValue);
		t.checkValidity() ? (t.classList.remove("text-red"), Re(n, r), n.classList.contains("js-app-bgcolor-form") && u(function() {
			return function(e, t) {
				t.checkValidity() && d.submit(e)
			}(n, t)
		}, 400)()) : (t.classList.add("text-red"), Re(n, t.defaultValue))
	}), i.on("click", ".js-banner .js-next", function(e) {
		var t = a.closest(e.currentTarget, ".js-banner"),
			n = a.query(t, ".js-dismiss", HTMLButtonElement),
			r = a.query(t, ".js-next", HTMLButtonElement),
			o = a.query(t, ".js-page.d-block"),
			s = c(Fe(o, "js-page"), HTMLElement);
		o.classList.remove("d-block"), o.classList.add("d-none"), s.classList.remove("d-none"), s.classList.add("d-block"), Fe(s, "js-page") || (r.classList.add("d-none"), n.classList.remove("d-none"))
	}), s.observe(".js-banner", function(e) {
		var t = c(e, HTMLDivElement),
			n = a.query(t, ".js-dismiss", HTMLButtonElement);
		if (t.querySelectorAll(".js-page").length > 0) {
			var r = a.query(t, ".js-next", HTMLButtonElement),
				o = a.query(t, ".js-page.d-block", HTMLDivElement);
			o && !Fe(o, "js-page") ? n.classList.remove("d-none") : r.classList.remove("d-none")
		} else n.classList.remove("d-none")
	}), l.remoteForm("form.js-ajax-pagination, .js-ajax-pagination form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = a.closest(t, ".js-ajax-pagination"), o = void 0, e.prev = 2, e.next = 5, n.html();
					case 5:
						o = e.sent, e.next = 16;
						break;
					case 8:
						if (e.prev = 8, e.t0 = e.catch(2), !e.t0.response || 404 !== e.t0.response.status) {
							e.next = 15;
							break
						}
						return r.remove(), e.abrupt("return");
					case 15:
						throw e.t0;
					case 16:
						r.replaceWith(o.html), i.fire(t, "page:loaded");
					case 18:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[2, 8]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), s.observe("auto-check", function(e) {
		var t = a.query(e, "input", HTMLInputElement),
			n = a.closest(t, "dl.form-group");
		e.addEventListener("loadstart", function() {
			Pe(t, n), n.classList.add("is-loading"), t.classList.add("is-autocheck-loading")
		}), e.addEventListener("loadend", function() {
			n.classList.remove("is-loading"), t.classList.remove("is-autocheck-loading")
		}), t.addEventListener("autocheck:success", function(e) {
			t.classList.add("is-autocheck-successful"), n.classList.add("successed");
			var r = e.detail.warning;
			if (r) {
				var a = document.createElement("dd");
				a.classList.add("warning"), a.innerHTML = r, n.append(a), n.classList.add("warn")
			}
		}), t.addEventListener("autocheck:error", function(e) {
			t.classList.add("is-autocheck-errored"), n.classList.add("errored");
			var r = n.querySelector("p.note");
			r && r.classList.add("d-none");
			var a = e.detail.message || "Something went wrong",
				o = document.createElement("dd");
			o.classList.add("error"), o.innerHTML = a, n.append(o)
		}), t.addEventListener("input", function() {
			t.value || Pe(t, n)
		})
	}), s.observe(".js-autocomplete-container auto-complete", function(e) {
		var t = a.closest(e, ".js-autocomplete-container");
		e.addEventListener("loadstart", function() {
			return t.classList.add("is-sending")
		}), e.addEventListener("loadend", function() {
			return t.classList.remove("is-sending")
		})
	}), s.observe("auto-complete", {
		add: function(e) {
			e.addEventListener("toggle", Oe)
		},
		remove: function(e) {
			e.removeEventListener("toggle", Oe)
		}
	}), i.on("navigation:keydown", "auto-complete", function(e) {
		t(e instanceof CustomEvent, "null.js:51");
		var n = e.currentTarget;
		t(n instanceof AutocompleteElement, "null.js:54"), null !== e.target.getAttribute("data-autocomplete-value") && "Tab" === e.detail.hotkey && (Ne(e.target, e.currentTarget), e.preventDefault())
	}), i.on("navigation:open", "auto-complete", function(e) {
		var n = e.currentTarget;
		t(n instanceof AutocompleteElement, "null.js:65"), Ne(e.target, n)
	});
	var De = function() {
			var e = ke(regeneratorRuntime.mark(function e(n) {
				var r, a, o, s, i, c;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return r = n.form, t(r, "null.js:34"), r.classList.add("is-sending"), e.prev = 3, a = d.serialize(r), o = (r.action + "&" + a).replace(/[?&]/, "?"), e.next = 8, Be.push(p.fetchText(o));
						case 8:
							s = e.sent, i = r.getAttribute("data-results-container"), (c = i ? document.getElementById(i) : null) && (c.innerHTML = s), h.replaceState(null, "", "?" + a);
						case 13:
							return e.prev = 13, r.classList.remove("is-sending"), e.finish(13);
						case 16:
						case "end":
							return e.stop()
					}
				}, e, this, [
					[3, , 13, 16]
				])
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}(),
		Be = new v;
	o.onFocus(".js-autosearch-field", function(e) {
		var n = e;
		t(n instanceof HTMLInputElement, "null.js:54"), f.addThrottledInputEventListener(n, De), n.addEventListener("blur", function() {
			return f.removeThrottledInputEventListener(n, De)
		}, {
			once: !0
		})
	}), i.on("change", "form[data-autosubmit]", function(e) {
		var t = c(e.currentTarget, HTMLFormElement);
		d.submit(t)
	});
	var Ue = function() {
			var e = ke(regeneratorRuntime.mark(function e() {
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.next = 2, n.loaded;
						case 2:
							null == Ve && (Ve = requestIdleCallback($e));
						case 3:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function() {
				return e.apply(this, arguments)
			}
		}(),
		ze = [];

	function We(e) {
		void 0 === e.timestamp && (e.timestamp = (new Date).getTime()), ze.push(e), Ue()
	}
	var Ve = null;

	function $e() {
		if (Ve = null, !g(document)) {
			var t = e.getMetadataByName(document, "browser-stats-url");
			t && (y.guaranteedPost(t, JSON.stringify({
				stats: ze
			}), "application/json"), ze = [])
		}
	}

	function Je(e) {
		e.preventDefault(), e.stopPropagation()
	}
	We({
		features: b
	}), s.observe("a.btn.disabled", {
		add: function(e) {
			e.addEventListener("click", Je)
		},
		remove: function(e) {
			e.removeEventListener("click", Je)
		}
	});

	function Ke(e) {
		try {
			return JSON.parse(window.localStorage.getItem(e))
		} catch (e) {
			return {}
		}
	}

	function Ge(e, t) {
		try {
			window.localStorage.setItem(e, JSON.stringify(t))
		} catch (e) {}
	}

	function Ye() {
		var e = {},
			t = !0,
			n = !1,
			r = void 0;
		try {
			for (var a, o = document.getElementsByTagName("script")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
				var s = a.value;
				(m = s.src.match(/\/([\w-]+)-[0-9a-f]{32,}\.js$/)) && (e[m[1] + ".js"] = s.src)
			}
		} catch (e) {
			n = !0, r = e
		} finally {
			try {
				!t && o.return && o.return()
			} finally {
				if (n) throw r
			}
		}
		var i = !0,
			c = !1,
			u = void 0;
		try {
			for (var l, d = document.getElementsByTagName("link")[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
				var m, f = l.value;
				(m = f.href.match(/\/([\w-]+)-[0-9a-f]{32,}\.css$/)) && (e[m[1] + ".css"] = f.href)
			}
		} catch (e) {
			c = !0, u = e
		} finally {
			try {
				!i && d.return && d.return()
			} finally {
				if (c) throw u
			}
		}
		return e
	}

	function Xe(e) {
		var n = e.closest(".js-check-all-container") || document.body;
		return t(n, "null.js:33"), n
	}

	function Qe(e, t, n, r) {
		null == r && (r = !1), t.indeterminate = r, t.checked !== n && (t.checked = n, setTimeout(function() {
			var n = new CustomEvent("change", {
				bubbles: !0,
				cancelable: !1,
				detail: {
					relatedTarget: e
				}
			});
			t.dispatchEvent(n)
		}))
	}
	ke(regeneratorRuntime.mark(function e() {
		var t, r, a;
		return regeneratorRuntime.wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					return e.next = 2, n.loaded;
				case 2:
					t = Ke("bundle-urls") || {}, Ge("bundle-urls", r = Ye()), (a = Object.keys(r).filter(function(e) {
						var n = r[e];
						return t[e] !== n
					})).length && We({
						downloadedBundles: a
					});
				case 7:
				case "end":
					return e.stop()
			}
		}, e, void 0)
	}))(), i.on("change", ".js-check-all", function(e) {
		t(e instanceof Event, "null.js:57");
		var n = e.currentTarget,
			r = e.detail && e.detail.relatedTarget;
		if (!r || !r.classList.contains("js-check-all-item")) {
			var o = Xe(n),
				s = !0,
				i = !1,
				c = void 0;
			try {
				for (var u, l = a.querySelectorAll(o, ".js-check-all-item", HTMLInputElement)[Symbol.iterator](); !(s = (u = l.next()).done); s = !0) {
					var d = u.value;
					d.classList.remove("is-last-changed"), Qe(n, d, n.checked)
				}
			} catch (e) {
				i = !0, c = e
			} finally {
				try {
					!s && l.return && l.return()
				} finally {
					if (i) throw c
				}
			}
		}
	});
	var Ze, et, tt, nt, rt, at = null;

	function ot(e) {
		var t = e.querySelector(".js-comment-form-error");
		t && (t.style.display = "none")
	}

	function st(e, t) {
		var n = "You can't comment at this time";
		if (t.response && 422 === t.response.status) {
			var r = t.response.json;
			r.errors && (n += " — your comment " + r.errors.join(", "))
		}
		n += ". ";
		var a = e.querySelector(".js-comment-form-error");
		a && (a.style.display = "block", a.classList.remove("d-none"), a.textContent = n)
	}

	function it(e, t) {
		var n = e.closest(".js-write-bucket");
		n && n.classList.toggle("focused", t)
	}

	function ct(e) {
		var t = e.currentTarget;
		t instanceof Element && it(t, !1)
	}

	function ut() {
		return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
	}
	i.on("mousedown", ".js-check-all-item", function(e) {
		t(e instanceof MouseEvent, "null.js:74"), at = e.shiftKey
	}), i.on("change", ".js-check-all-item", function(e) {
		t(e instanceof Event, "null.js:79");
		var n = e.target,
			r = e.detail && e.detail.relatedTarget;
		if (!r || !r.classList.contains("js-check-all") && !r.classList.contains("js-check-all-item")) {
			var o = Xe(n),
				s = a.query(o, ".js-check-all", HTMLInputElement),
				i = Array.from(a.querySelectorAll(o, ".js-check-all-item", HTMLInputElement)),
				c = i.filter(function(e) {
					return e.classList.contains("is-last-changed")
				})[0];
			if (at && c) {
				var u = [i.indexOf(c), i.indexOf(n)].sort(),
					l = Ae(u, 2),
					d = l[0],
					m = l[1],
					f = !0,
					v = !1,
					p = void 0;
				try {
					for (var h, g = i.slice(d, +m + 1 || 9e9)[Symbol.iterator](); !(f = (h = g.next()).done); f = !0) {
						Qe(n, h.value, n.checked)
					}
				} catch (e) {
					v = !0, p = e
				} finally {
					try {
						!f && g.return && g.return()
					} finally {
						if (v) throw p
					}
				}
			}
			at = null;
			var y = !0,
				b = !1,
				j = void 0;
			try {
				for (var L, w = i[Symbol.iterator](); !(y = (L = w.next()).done); y = !0) {
					L.value.classList.remove("is-last-changed")
				}
			} catch (e) {
				b = !0, j = e
			} finally {
				try {
					!y && w.return && w.return()
				} finally {
					if (b) throw j
				}
			}
			n.classList.add("is-last-changed");
			var x = i.length,
				k = i.filter(function(e) {
					return e.checked
				}).length;
			Qe(n, s, k === x, x > k && k > 0)
		}
	}), i.on("change", ".js-check-all-item", function(e) {
		var t = Xe(e.currentTarget),
			n = t.querySelector(".js-check-all-count");
		if (n) {
			var r = t.querySelectorAll(".js-check-all-item:checked").length;
			n.textContent = r.toString()
		}
	}), l.remoteForm(".js-new-comment-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s, i, c, u, l, m, f, v, p;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = void 0, ot(t), e.prev = 2, e.next = 5, n.json();
					case 5:
						r = e.sent, e.next = 11;
						break;
					case 8:
						e.prev = 8, e.t0 = e.catch(2), st(t, e.t0);
					case 11:
						if (r) {
							e.next = 13;
							break
						}
						return e.abrupt("return");
					case 13:
						for (t.reset(), o = !0, s = !1, i = void 0, e.prev = 17, c = a.querySelectorAll(t, ".js-resettable-field", HTMLInputElement)[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) l = u.value, d.changeValue(l, l.getAttribute("data-reset-value") || "");
						e.next = 25;
						break;
					case 21:
						e.prev = 21, e.t1 = e.catch(17), s = !0, i = e.t1;
					case 25:
						e.prev = 25, e.prev = 26, !o && c.return && c.return();
					case 28:
						if (e.prev = 28, !s) {
							e.next = 31;
							break
						}
						throw i;
					case 31:
						return e.finish(28);
					case 32:
						return e.finish(25);
					case 33:
						for (f in a.query(t, ".js-write-tab").click(), m = r.json.updateContent) v = m[f], (p = document.querySelector(f)) ? j.replaceContent(p, v) : console.warn("couldn't find " + f + " for immediate update");
					case 37:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[2, 8],
				[17, 21, 25, 33],
				[26, , 28, 32]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), s.observe(".js-comment-and-button", function(e) {
		var t = e.form.querySelector(".js-comment-field"),
			n = e.textContent,
			r = !1;

		function a(t) {
			var a = t.currentTarget.value.trim();
			a !== r && (r = a, e.textContent = a ? e.getAttribute("data-comment-text") : n)
		}
		return {
			add: function() {
				t.addEventListener("input", a), t.addEventListener("change", a)
			},
			remove: function() {
				t.removeEventListener("input", a), t.removeEventListener("change", a)
			}
		}
	}), i.on("click", ".js-comment-edit-button", function(e) {
		var n = a.closest(e.currentTarget, ".js-comment");
		n.classList.add("is-comment-editing"), a.query(n, ".js-write-tab").click();
		var r = a.query(n, ".js-comment-field");
		t(r instanceof HTMLTextAreaElement, "null.js:17"), r.focus(), i.fire(r, "change");
		var o = e.currentTarget.closest(".js-dropdown-details");
		o && o.removeAttribute("open")
	}), i.on("click", ".js-comment-hide-button", function(e) {
		var t = a.closest(e.currentTarget, ".js-comment").querySelector(".js-minimize-comment");
		t && t.classList.remove("d-none");
		var n = e.currentTarget.closest(".js-dropdown-details");
		n && n.removeAttribute("open")
	}), i.on("click", ".js-comment-hide-minimize-form", function(e) {
		a.closest(e.currentTarget, ".js-minimize-comment").classList.add("d-none")
	}), i.on("click", ".js-comment-cancel-button", function(e) {
		var n = a.closest(e.currentTarget, "form", HTMLFormElement),
			r = e.currentTarget.getAttribute("data-confirm-text") || "";
		if (L.hasDirtyFields(n) && !confirm(r)) return !1;
		var o = !0,
			s = !1,
			i = void 0;
		try {
			for (var c, u = n.querySelectorAll("input, textarea")[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
				var l = c.value;
				t(l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement, "null.js:54"), l.value = l.defaultValue
			}
		} catch (e) {
			s = !0, i = e
		} finally {
			try {
				!o && u.return && u.return()
			} finally {
				if (s) throw i
			}
		}
		var d = e.currentTarget.closest(".js-comment");
		d && d.classList.remove("is-comment-editing")
	}), l.remoteForm(".js-comment-delete, .js-comment .js-comment-update, .js-issue-update, .js-comment-minimize, .js-comment-unminimize", function(e, t, n) {
		var r = a.closest(e, ".js-comment");
		r.classList.add("is-comment-loading");
		var o = r.getAttribute("data-body-version");
		o && n.headers.set("X-Body-Version", o)
	}), l.remoteForm(".js-comment .js-comment-update", function() {
		var e = ke(regeneratorRuntime.mark(function e(n, r) {
			var o, s, i, c, u, l, d, m, f, v, p, h, g, y;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return o = void 0, s = a.closest(n, ".js-comment"), e.prev = 2, e.next = 5, r.json();
					case 5:
						o = e.sent, e.next = 19;
						break;
					case 8:
						if (e.prev = 8, e.t0 = e.catch(2), 422 !== e.t0.response.status) {
							e.next = 18;
							break
						}
						if (!(i = JSON.parse(e.t0.response.text)).errors) {
							e.next = 16;
							break
						}
						return (c = s.querySelector(".js-comment-update-error")) && (c.textContent = "There was an error posting your comment: " + i.errors.join(", "), c.style.display = "block"), e.abrupt("return");
					case 16:
						e.next = 19;
						break;
					case 18:
						throw e.t0;
					case 19:
						if (o) {
							e.next = 21;
							break
						}
						return e.abrupt("return");
					case 21:
						for (u = o.json, (l = s.querySelector(".js-comment-body")) && (l.innerHTML = u.body), (d = s.querySelector(".js-comment-update-error")) && (d.style.display = "none"), s.setAttribute("data-body-version", u.newBodyVersion), (m = s.querySelector(".js-body-version")) instanceof HTMLInputElement && (m.value = u.newBodyVersion), f = !0, v = !1, p = void 0, e.prev = 32, h = s.querySelectorAll("input, textarea")[Symbol.iterator](); !(f = (g = h.next()).done); f = !0) y = g.value, t(y instanceof HTMLInputElement || y instanceof HTMLTextAreaElement, "null.js:118"), y.defaultValue = y.value;
						e.next = 40;
						break;
					case 36:
						e.prev = 36, e.t1 = e.catch(32), v = !0, p = e.t1;
					case 40:
						e.prev = 40, e.prev = 41, !f && h.return && h.return();
					case 43:
						if (e.prev = 43, !v) {
							e.next = 46;
							break
						}
						throw p;
					case 46:
						return e.finish(43);
					case 47:
						return e.finish(40);
					case 48:
						s.classList.remove("is-comment-stale", "is-comment-editing");
					case 49:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[2, 8],
				[32, 36, 40, 48],
				[41, , 43, 47]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-comment .js-comment-delete, .js-comment .js-comment-update, .js-comment-minimize, .js-comment-unminimize", (Ze = ke(regeneratorRuntime.mark(function e(t, n) {
		var r, o;
		return regeneratorRuntime.wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					return r = a.closest(t, ".js-comment"), e.prev = 1, e.next = 4, n.text();
				case 4:
					e.next = 15;
					break;
				case 6:
					if (e.prev = 6, e.t0 = e.catch(1), 422 !== e.t0.response.status) {
						e.next = 14;
						break
					}
					o = void 0;
					try {
						o = JSON.parse(e.t0.response.text)
					} catch (e) {}
					o && o.stale && r.classList.add("is-comment-stale"), e.next = 15;
					break;
				case 14:
					throw e.t0;
				case 15:
					r.classList.remove("is-comment-loading");
				case 16:
				case "end":
					return e.stop()
			}
		}, e, this, [
			[1, 6]
		])
	})), function(e, t) {
		return Ze.apply(this, arguments)
	})), l.remoteForm(".js-comment-delete", (et = ke(regeneratorRuntime.mark(function e(n, r) {
		var o;
		return regeneratorRuntime.wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					return e.next = 2, r.json();
				case 2:
					(o = n.closest(".js-comment-delete-container")) || (o = n.closest(".js-comment-container") || n.closest(".js-line-comments")) && 1 !== o.querySelectorAll(".js-comment").length && (o = a.closest(n, ".js-comment")), t(o, "null.js:164"), o.remove();
				case 6:
				case "end":
					return e.stop()
			}
		}, e, this)
	})), function(e, t) {
		return et.apply(this, arguments)
	})), l.remoteForm(".js-issue-update", (tt = ke(regeneratorRuntime.mark(function e(t, n) {
		var r, o, s, i, c, u, l, d, m, f, v;
		return regeneratorRuntime.wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					return (r = a.closest(t, ".js-details-container")).classList.remove("open"), e.next = 4, n.json();
				case 4:
					for (o = e.sent, null != (s = o.json).issue_title && (a.query(r, ".js-issue-title").textContent = s.issue_title, (i = r.closest(".js-issues-results")) && (c = i.querySelector(".js-merge-pull-request textarea")) instanceof HTMLTextAreaElement && c.value === c.defaultValue && (c.value = c.defaultValue = s.issue_title)), document.title = s.page_title, u = !0, l = !1, d = void 0, e.prev = 11, m = t.elements[Symbol.iterator](); !(u = (f = m.next()).done); u = !0)((v = f.value) instanceof HTMLInputElement || v instanceof HTMLTextAreaElement) && (v.defaultValue = v.value);
					e.next = 19;
					break;
				case 15:
					e.prev = 15, e.t0 = e.catch(11), l = !0, d = e.t0;
				case 19:
					e.prev = 19, e.prev = 20, !u && m.return && m.return();
				case 22:
					if (e.prev = 22, !l) {
						e.next = 25;
						break
					}
					throw d;
				case 25:
					return e.finish(22);
				case 26:
					return e.finish(19);
				case 27:
				case "end":
					return e.stop()
			}
		}, e, this, [
			[11, 15, 19, 27],
			[20, , 22, 26]
		])
	})), function(e, t) {
		return tt.apply(this, arguments)
	})), l.remoteForm(".js-comment-minimize", (nt = ke(regeneratorRuntime.mark(function e(t, n) {
		var r, o, s, i, c;
		return regeneratorRuntime.wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					return e.next = 2, n.json();
				case 2:
					r = a.closest(t, ".js-comment"), (o = r.querySelector(".js-minimize-comment")) && o.classList.add("d-none"), (s = a.closest(t, ".unminimized-comment")).classList.add("d-none"), s.classList.remove("js-comment"), i = a.closest(t, ".js-minimizable-comment-group"), (c = i.querySelector(".minimized-comment")) && c.classList.remove("d-none"), c && c.classList.add("js-comment");
				case 12:
				case "end":
					return e.stop()
			}
		}, e, this)
	})), function(e, t) {
		return nt.apply(this, arguments)
	})), l.remoteForm(".js-comment-unminimize", (rt = ke(regeneratorRuntime.mark(function e(t, n) {
		var r, o, s;
		return regeneratorRuntime.wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					return e.next = 2, n.json();
				case 2:
					r = a.closest(t, ".js-minimizable-comment-group"), (o = r.querySelector(".unminimized-comment")) && o.classList.remove("d-none"), o && o.classList.add("js-comment"), (s = r.querySelector(".minimized-comment")) && s.classList.add("d-none"), s && s.classList.remove("js-comment");
				case 9:
				case "end":
					return e.stop()
			}
		}, e, this)
	})), function(e, t) {
		return rt.apply(this, arguments)
	})), o.onFocus(".js-comment-field", function(e) {
		it(e, !0), e.addEventListener("blur", ct, {
			once: !0
		})
	}), Object.setPrototypeOf(ut.prototype, HTMLElement.prototype), Object.setPrototypeOf(ut, HTMLElement);
	var lt = navigator.userAgent.match(/Macintosh/) ? "Meta" : "Control",
		dt = "Meta" === lt ? "cmd" : "ctrl",
		mt = document.createElement("template");
	mt.innerHTML = '\n  <div class="toolbar-group">\n    <div class="toolbar-item dropdown js-menu-container">\n      <button type="button" tabindex="-1" class="js-menu-target menu-target tooltipped tooltipped-n" aria-label="Add header text" aria-expanded="false" aria-haspopup="true">\n        <span data-octicon="text-size"></span>\n        <span class="dropdown-caret"></span>\n      </button>\n\n      <div class="dropdown-menu-content js-menu-content">\n        <ul class="dropdown-menu dropdown-menu-s">\n          <button type="button" class="dropdown-item dropdown-header1" data-prefix="# " data-ga-click="Markdown Toolbar, click, header1">\n            Header\n          </button>\n          <button type="button" class="dropdown-item dropdown-header2" data-prefix="## " data-ga-click="Markdown Toolbar, click, header2">\n            Header\n          </button>\n          <button type="button" class="dropdown-item dropdown-header3" data-prefix="### " data-ga-click="Markdown Toolbar, click, header3">\n            Header\n          </button>\n        </ul>\n      </div>\n    </div>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add bold text <' + dt + '+b>" data-prefix="**" data-suffix="**" data-toolbar-hotkey="b" data-ga-click="Markdown Toolbar, click, bold" data-trim-first>\n      <span data-octicon="bold"></span>\n    </button>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add italic text <' + dt + '+i>" data-prefix="_" data-suffix="_" data-toolbar-hotkey="i" data-ga-click="Markdown Toolbar, click, italic" data-trim-first>\n      <span data-octicon="italic"></span>\n    </button>\n  </div>\n\n  <div class="toolbar-group">\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Insert a quote" data-prefix="> " data-multiline="true" data-ga-click="Markdown Toolbar, click, quote" data-surround-with-newlines>\n      <span data-octicon="quote"></span>\n    </button>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Insert code" data-prefix="`" data-suffix="`" data-block-prefix="```" data-block-suffix="```" data-ga-click="Markdown Toolbar, click, code">\n      <span data-octicon="code"></span>\n    </button>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add a link <' + dt + '+k>" data-prefix="[" data-suffix="](url)" data-replace-next="url" data-toolbar-hotkey="k" data-scan-for="https?://" data-ga-click="Markdown Toolbar, click, link">\n      <span data-octicon="link"></span>\n    </button>\n  </div>\n\n  <div class="toolbar-group">\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add a bulleted list" data-multiline="true" data-prefix="- " data-multiline="true" data-ga-click="Markdown Toolbar, click, unordered list" data-surround-with-newlines>\n      <span data-octicon="list-unordered"></span>\n    </button>\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add a numbered list" data-prefix="1. " data-multiline="true" data-ga-click="Markdown Toolbar, click, ordered list" data-ordered-list>\n      <span data-octicon="list-ordered"></span>\n    </button>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add a task list" data-prefix="- [ ] " data-toolbar-hotkey="L" data-multiline data-ga-click="Markdown Toolbar, click, task list" data-surround-with-newlines>\n      <span data-octicon="tasklist"></span>\n    </button>\n  </div>\n\n  <div class="toolbar-group">\n\n    <div class="toolbar-item select-menu select-menu-modal-right js-menu-container js-select-menu js-load-contents js-saved-reply-container"\n        data-feature="saved_replies">\n\n      <button type="button" tabindex="-1" class="js-menu-target menu-target tooltipped tooltipped-nw"\n         aria-label="Insert a reply" aria-expanded="false" aria-haspopup="true" data-ga-click="Markdown Toolbar, click, saved reply">\n        <span data-octicon="reply"></span>\n        <span class="dropdown-caret"></span>\n      </button>\n\n      <div class="select-menu-modal-holder js-menu-content js-navigation-container">\n        <div class="select-menu-modal">\n          <div class="select-menu-header d-flex">\n            <span class="select-menu-title flex-auto">Select a reply</span>\n            <code><span class="border rounded-1 p-1 mr-2">ctrl .</span></code>\n            <span data-octicon="x"></span>\n          </div>\n          <div class="js-select-menu-deferred-content"></div>\n          <div class="select-menu-loading-overlay anim-pulse">\n            <span data-octicon="octoface"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-nw" aria-label="Directly mention a user or team" data-prefix="@" data-prefix-space data-ga-click="Markdown Toolbar, click, mention">\n      <span data-octicon="mention"></span>\n    </button>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-nw" aria-label="Reference an issue or pull request" data-prefix="#" data-prefix-space data-ga-click="Markdown Toolbar, click, reference">\n      <span data-octicon="bookmark"></span>\n    </button>\n  </div>\n';
	var ft = function(e) {
		function n() {
			Ee(this, n);
			var e = qe(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
			return e.classList.contains("toolbar-commenting") || (e.appendChild(mt.content.cloneNode(!0)), function(e) {
				var n = !0,
					r = !1,
					o = void 0;
				try {
					for (var s, i = e.querySelectorAll("[data-octicon]")[Symbol.iterator](); !(n = (s = i.next()).done); n = !0) {
						var c = s.value,
							u = c.getAttribute("data-octicon");
						t(u, "null.js:172");
						var l = a.query(e, ".octicon-" + u, Element).cloneNode(!0);
						l.classList.remove("d-none"), c.replaceWith(l)
					}
				} catch (e) {
					r = !0, o = e
				} finally {
					try {
						!n && i.return && i.return()
					} finally {
						if (r) throw o
					}
				}
			}(e), e.classList.add("toolbar-commenting")), e
		}
		return Se(n, ut), Te(n, [{
			key: "connectedCallback",
			value: function() {
				var e, n;
				! function(e) {
					var n = {},
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var s, i = e.querySelectorAll("[data-toolbar-hotkey]")[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
							var c = s.value,
								u = c.getAttribute("data-toolbar-hotkey");
							t(u, "null.js:184"), n[lt + "+" + u] = c
						}
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							!r && i.return && i.return()
						} finally {
							if (a) throw o
						}
					}
					vt.set(e.field, n)
				}(this), n = (e = this).getAttribute("data-saved-reply-contents-url"), t(n, "null.js:207"), a.query(e, '[data-feature="saved_replies"]').setAttribute("data-contents-url", n), this.field.addEventListener("keydown", pt);
				var r = !0,
					o = !1,
					s = void 0;
				try {
					for (var i, c = this.buttons[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
						i.value.addEventListener("click", Lt)
					}
				} catch (e) {
					o = !0, s = e
				} finally {
					try {
						!r && c.return && c.return()
					} finally {
						if (o) throw s
					}
				}
			}
		}, {
			key: "disconnectedCallback",
			value: function() {
				var e = this.buttons;
				if (e) {
					var t = !0,
						n = !1,
						r = void 0;
					try {
						for (var a, o = e[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
							a.value.removeEventListener("click", Lt)
						}
					} catch (e) {
						n = !0, r = e
					} finally {
						try {
							!t && o.return && o.return()
						} finally {
							if (n) throw r
						}
					}
				}
			}
		}, {
			key: "field",
			get: function() {
				var e = this.getAttribute("for");
				t(e, "null.js:149");
				var n = document.getElementById(e);
				return t(n instanceof HTMLTextAreaElement, "null.js:151"), n
			}
		}, {
			key: "buttons",
			get: function() {
				return this.querySelectorAll("button")
			}
		}, {
			key: "features",
			get: function() {
				var e = this.getAttribute("features");
				return e ? e.split(" ").map(function(e) {
					return e.trim()
				}) : []
			}
		}, {
			key: "supportSavedReplyShortcut",
			get: function() {
				return this.hasAttribute("saved-reply-shortcut")
			}
		}]), n
	}();
	var vt = new WeakMap;

	function pt(e) {
		var n = vt.get(e.currentTarget);
		t(n, "null.js:192");
		var r = n[x(e)];
		r && (wt(r), e.preventDefault())
	}

	function ht(e) {
		return e.trim().split("\n").length > 1
	}

	function gt(e, t) {
		return Array(t + 1).join(e)
	}
	window.customElements.get("markdown-toolbar") || (window.MarkdownToolbarElement = ft, window.customElements.define("markdown-toolbar", ft));
	var yt = null;

	function bt(e, n) {
		var r = e.value.slice(e.selectionStart, e.selectionEnd),
			a = void 0;
		a = n.orderedList ? function(e) {
				var t = /^\d+\.\s+/,
					n = void 0,
					r = void 0,
					a = e.value.slice(e.selectionStart, e.selectionEnd),
					o = a.split("\n");
				if (o.every(function(e) {
						return t.test(e)
					})) o = o.map(function(e) {
					return e.replace(t, "")
				}), a = o.join("\n");
				else {
					o = function() {
						var e = void 0,
							t = void 0,
							n = void 0,
							r = [];
						for (n = e = 0, t = o.length; e < t; n = ++e) {
							var a = o[n];
							r.push(n + 1 + ". " + a)
						}
						return r
					}(), a = o.join("\n");
					var s = jt(e),
						i = s.newlinesToAppend,
						c = s.newlinesToPrepend;
					r = e.selectionStart + i.length, n = r + a.length, a = i + a + c
				}
				return {
					text: a,
					selectionStart: r,
					selectionEnd: n
				}
			}(e) : n.multiline && ht(r) ? function(e, t) {
				var n = t.prefix,
					r = t.suffix,
					a = t.surroundWithNewlines,
					o = e.value.slice(e.selectionStart, e.selectionEnd),
					s = e.selectionStart,
					i = e.selectionEnd,
					c = o.split("\n");
				if (c.every(function(e) {
						return e.startsWith(n) && e.endsWith(r)
					})) o = c.map(function(e) {
					return e.slice(n.length, e.length - r.length)
				}).join("\n"), i = s + o.length;
				else if (o = c.map(function(e) {
						return n + e + r
					}).join("\n"), a) {
					var u = jt(e),
						l = u.newlinesToAppend,
						d = u.newlinesToPrepend;
					s += l.length, i = s + o.length, o = l + o + d
				}
				return {
					text: o,
					selectionStart: s,
					selectionEnd: i
				}
			}(e, n) : function(e, n) {
				var r = void 0,
					a = void 0,
					o = n.prefix,
					s = n.suffix,
					i = n.blockPrefix,
					c = n.blockSuffix,
					u = n.replaceNext,
					l = n.prefixSpace,
					d = n.scanFor,
					m = n.surroundWithNewlines,
					f = e.selectionStart,
					v = e.selectionEnd,
					p = e.value.slice(e.selectionStart, e.selectionEnd),
					h = ht(p) && i.length > 0 ? i + "\n" : o,
					g = ht(p) && c.length > 0 ? "\n" + c : s;
				if (l) {
					var y = e.value[e.selectionStart - 1];
					0 === e.selectionStart || null == y || y.match(/\s/) || (h = " " + h)
				}
				p = function(e, t, n) {
					if (e.selectionStart === e.selectionEnd) e.selectionStart = function(e, t) {
						for (; e[t] && null != e[t - 1] && !e[t - 1].match(/\s/);) t--;
						return t
					}(e.value, e.selectionStart), e.selectionEnd = function(e, t) {
						for (; e[t] && !e[t].match(/\s/);) t++;
						return t
					}(e.value, e.selectionEnd);
					else {
						var r = e.selectionStart - t.length,
							a = e.selectionEnd + n.length,
							o = e.value.slice(r, e.selectionStart) === t,
							s = e.value.slice(e.selectionEnd, a) === n;
						o && s && (e.selectionStart = r, e.selectionEnd = a)
					}
					return e.value.slice(e.selectionStart, e.selectionEnd)
				}(e, h, g);
				var b = e.selectionStart,
					j = e.selectionEnd,
					L = u.length > 0 && g.indexOf(u) > -1 && p.length > 0;
				if (m) {
					var w = jt(e);
					r = w.newlinesToAppend, a = w.newlinesToPrepend, h = r + o, g += a
				}
				if (p.startsWith(h) && p.endsWith(g)) {
					var x = p.slice(h.length, p.length - g.length);
					if (f === v) {
						var k = f - h.length;
						k = Math.max(k, b), k = Math.min(k, b + x.length), b = j = k
					} else j = b + x.length;
					return {
						text: x,
						selectionStart: b,
						selectionEnd: j
					}
				}
				if (L) {
					if (d.length > 0 && p.match(d)) {
						g = g.replace(u, p);
						var E = h + g;
						return b = j = b + h.length, {
							text: E,
							selectionStart: b,
							selectionEnd: j
						}
					}
					var T = h + p + g;
					return b = b + h.length + p.length + g.indexOf(u), j = b + u.length, {
						text: T,
						selectionStart: b,
						selectionEnd: j
					}
				}
				var S = h + p + g;
				if (b = f + h.length, j = v + h.length, n.trimFirst) {
					var q = p.match(/^\s*|\s*$/g);
					t(q, "null.js:397");
					var A = q[0] || "",
						M = q[1] || "";
					S = A + h + p.trim() + g + M, b += A.length, j -= M.length
				}
				return {
					text: S,
					selectionStart: b,
					selectionEnd: j
				}
			}(e, n),
			function(e, t) {
				var n = t.text,
					r = t.selectionStart,
					a = t.selectionEnd,
					o = e.selectionStart,
					s = e.value.slice(0, o),
					c = e.value.slice(e.selectionEnd);
				if (null === yt || !0 === yt) {
					e.contentEditable = "true";
					try {
						yt = document.execCommand("insertText", !1, n)
					} catch (e) {
						yt = !1
					}
					e.contentEditable = "false"
				}
				if (yt && !e.value.slice(0, e.selectionStart).endsWith(n) && (yt = !1), !yt) {
					try {
						document.execCommand("ms-beginUndoUnit")
					} catch (e) {}
					e.value = s + n + c;
					try {
						document.execCommand("ms-endUndoUnit")
					} catch (e) {}
					i.fire(e, "input")
				}
				null != r && null != a ? e.setSelectionRange(r, a) : e.setSelectionRange(o, e.selectionEnd)
			}(e, a)
	}

	function jt(e) {
		var t = e.value.slice(0, e.selectionStart),
			n = e.value.slice(e.selectionEnd),
			r = t.match(/\n*$/),
			a = n.match(/^\n*/),
			o = r ? r[0].length : 0,
			s = a ? a[0].length : 0,
			i = void 0,
			c = void 0;
		return t.match(/\S/) && o < 2 && (i = gt("\n", 2 - o)), n.match(/\S/) && s < 2 && (c = gt("\n", 2 - s)), null == i && (i = ""), null == c && (c = ""), {
			newlinesToAppend: i,
			newlinesToPrepend: c
		}
	}

	function Lt(e) {
		var n = e.currentTarget;
		t(n instanceof HTMLButtonElement, "null.js:478"), w.deactivate(n.closest(".js-menu-container")), wt(n)
	}

	function wt(e) {
		var t = a.closest(e, "markdown-toolbar", ft),
			n = {
				prefix: e.getAttribute("data-prefix") || "",
				suffix: e.getAttribute("data-suffix") || "",
				blockPrefix: e.getAttribute("data-block-prefix") || "",
				blockSuffix: e.getAttribute("data-block-suffix") || "",
				multiline: e.hasAttribute("data-multiline"),
				replaceNext: e.getAttribute("data-replace-next") || "",
				prefixSpace: e.hasAttribute("data-prefix-space"),
				scanFor: e.getAttribute("data-scan-for") || "",
				surroundWithNewlines: e.hasAttribute("data-surround-with-newlines"),
				orderedList: e.hasAttribute("data-ordered-list"),
				trimFirst: e.hasAttribute("data-trim-first")
			};
		t.field.focus(), bt(t.field, n)
	}
	var xt = function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, a, o, s;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						if (r = {
								url: t.getAttribute("data-preview-url") || "",
								data: {
									text: n,
									authenticity_token: kt(t)
								},
								headers: {
									"content-type": "application/x-www-form-urlencoded; charset=UTF-8"
								}
							}, !!t.dispatchEvent(new CustomEvent("preview:setup", {
								bubbles: !0,
								cancelable: !0,
								detail: r
							}))) {
							e.next = 6;
							break
						}
						throw new Error("preview canceled");
					case 6:
						n = JSON.stringify(r);
					case 7:
						return a = St.get(t), o = void 0, s = void 0, a && (o = a[0], s = a[1]), o !== n && (qt = !1, (s = Tt.push(At(r))).then(function() {
							qt = !0
						}), St.set(t, [n, s])), e.abrupt("return", s);
					case 13:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}();

	function kt(e) {
		var t = e.getAttribute("data-preview-authenticity-token"),
			n = a.closest(e, "form", HTMLFormElement).elements.namedItem("authenticity_token");
		return null != t ? t : n instanceof HTMLInputElement ? n.value : void 0
	}

	function Et(e) {
		var t = a.closest(e, ".js-previewable-comment-form"),
			n = e.classList.contains("js-preview-tab");
		if (n) {
			var r = a.query(t, ".js-write-bucket");
			a.query(t, ".js-preview-body").style.minHeight = r.clientHeight + "px"
		}
		t.classList.toggle("preview-selected", n), t.classList.toggle("write-selected", !n);
		var o = a.query(t, ".tabnav-tab.selected");
		o.setAttribute("aria-selected", "false"), o.classList.remove("selected"), e.classList.add("selected"), e.setAttribute("aria-selected", "true");
		var s = a.query(t, ".js-write-tab");
		return n ? s.setAttribute("data-hotkey", "Control+P,Meta+P") : s.removeAttribute("data-hotkey"), Promise.resolve(t)
	}
	i.on("click", ".js-write-tab", function(e) {
		var t = e.currentTarget;
		Et(t).then(function(e) {
			return a.query(e, ".js-comment-field").focus()
		});
		var n = a.closest(t, ".js-previewable-comment-form").querySelector("markdown-toolbar");
		null != n && n.classList.remove("d-none")
	}), i.on("click", ".js-preview-tab", function(e) {
		var t = e.currentTarget;
		Et(t).then(function(e) {
			Mt(e)
		});
		var n = a.closest(t, ".js-previewable-comment-form").querySelector("markdown-toolbar");
		null != n && n.classList.add("d-none"), e.stopPropagation(), e.preventDefault()
	}), i.on("preview:render", ".js-previewable-comment-form", function(e) {
		Et(a.query(e.target, ".js-preview-tab")).then(function(e) {
			Mt(e)
		})
	});
	var Tt = new v,
		St = new WeakMap,
		qt = !1;

	function At(e) {
		var t = new URLSearchParams;
		for (var n in e.data) t.set(n, e.data[n]);
		return p.fetchText(e.url, {
			method: "post",
			body: t.toString(),
			headers: e.headers
		})
	}

	function Mt(e) {
		var t = a.query(e, ".js-comment-field", HTMLTextAreaElement),
			n = a.query(e, ".comment-body");
		xt(e, t.value).then(function(e) {
			n.innerHTML = e || "<p>Nothing to preview</p>"
		}), qt || (n.innerHTML = "<p>Loading preview&hellip;</p>")
	}
	s.observe(".js-preview-tab", function(e) {
		var t = void 0,
			n = void 0;
		e.addEventListener("mouseenter", function() {
			t || (t = e.closest(".js-previewable-comment-form"), n = t.querySelector(".js-comment-field")), xt(t, n.value)
		})
	}), o.onKey("keydown", ".js-comment-field", function(e) {
		var n = e.target;
		if (t(n instanceof HTMLTextAreaElement, "null.js:209"), (e.ctrlKey || e.metaKey) && "P" === e.key) {
			var r = a.closest(n, ".js-previewable-comment-form");
			r.classList.contains("write-selected") && (n.blur(), r.dispatchEvent(new CustomEvent("preview:render", {
				bubbles: !0,
				cancelable: !1
			})), e.preventDefault(), e.stopImmediatePropagation())
		}
	}), i.on("menu:activate", ".js-select-menu", function(e) {
		e.currentTarget.classList.add("is-dirty")
	}), i.on("menu:deactivate", ".js-select-menu", function(e) {
		e.currentTarget.classList.remove("is-dirty")
	});
	var Ht = {
		OS: "Meta",
		Win: "Meta",
		Windows: "Meta",
		Scroll: "ScrollLock",
		SpaceBar: " ",
		Left: "ArrowLeft",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Up: "ArrowUp",
		Del: "Delete",
		Esc: "Escape"
	};
	var Ct = {
			3: "Cancel",
			6: "Help",
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			28: "Convert",
			29: "NonConvert",
			30: "Accept",
			31: "ModeChange",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			41: "Select",
			42: "Print",
			43: "Execute",
			44: "PrintScreen",
			45: "Insert",
			46: "Delete",
			91: "OS",
			93: "ContextMenu",
			106: "*",
			107: "+",
			109: "-",
			110: ".",
			111: "/",
			144: "NumLock",
			145: "ScrollLock",
			181: "VolumeMute",
			182: "VolumeDown",
			183: "VolumeUp",
			186: ";",
			187: "=",
			188: ",",
			189: "-",
			190: ".",
			191: "/",
			192: "`",
			219: "[",
			220: "\\",
			221: "]",
			222: "'",
			224: "Meta",
			225: "AltGraph",
			246: "Attn",
			247: "CrSel",
			248: "ExSel",
			249: "EraseEof",
			250: "Play",
			251: "ZoomOut"
		},
		It = {
			48: ")",
			49: "!",
			50: "@",
			51: "#",
			52: "$",
			53: "%",
			54: "^",
			55: "&",
			56: "*",
			57: "(",
			186: ":",
			187: "+",
			188: "<",
			189: "_",
			190: ">",
			191: "?",
			192: "~",
			219: "{",
			220: "|",
			221: "}",
			222: '"'
		};

	function _t(e, t) {
		return t && /^[a-z]$/.test(e) ? e.toUpperCase() : e
	}
	var Rt = null,
		Ft = Object.getOwnPropertyDescriptor(KeyboardEvent.prototype, "key");
	if (Ft)
		if (Rt = function(e) {
				return Ft.get.apply(e)
			}, /Macintosh.*Chrome/.test(navigator.userAgent)) {
			var Pt = /^Key[A-Z]$/;
			Rt = function(e) {
				var t = Ft.get.apply(e);
				if (e.metaKey && Pt.test(e.code) && e.code !== "Key" + t.toUpperCase()) {
					var n = String.fromCharCode(e.which);
					return e.shiftKey ? n.toUpperCase() : n.toLowerCase()
				}
				return _t(t, e.shiftKey)
			}
		} else /Macintosh.*Safari/.test(navigator.userAgent) && (Rt = function(e) {
			return _t(Ft.get.apply(e), e.shiftKey)
		});
	Object.defineProperty(KeyboardEvent.prototype, "key", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Rt ? (e = Rt(this), Ht[e] || e) : function(e) {
				var t = String.fromCharCode(e.which),
					n = e.which;
				return !e.shiftKey && n >= 49 && n <= 57 ? t : !e.shiftKey && n >= 96 && n <= 105 ? String(n - 95) : n >= 65 && n <= 90 ? e.shiftKey ? t : t.toLowerCase() : n >= 112 && n <= 123 ? "F" + (n - 111) : e.shiftKey ? It[n] || "Unidentified" : Ct[n] || "Unidentified"
			}(this);
			var e
		}
	}), i.on("click", "[data-facebox]", function() {
		te({
			div: this.getAttribute("data-facebox")
		}, this.getAttribute("data-facebox-class"))
	});
	var Ot = new WeakMap;

	function Nt(e) {
		return Ot.has(e)
	}

	function Dt(e, n, r) {
		var o = r.limit,
			s = a.query(e, "template", HTMLTemplateElement),
			i = {},
			c = !0,
			u = !1,
			l = void 0;
		try {
			for (var d, m = a.querySelectorAll(e, "input[type=hidden]", HTMLInputElement)[Symbol.iterator](); !(c = (d = m.next()).done); c = !0) {
				var f = d.value;
				i["" + f.name + f.value] = f
			}
		} catch (e) {
			u = !0, l = e
		} finally {
			try {
				!c && m.return && m.return()
			} finally {
				if (u) throw l
			}
		}
		for (var v = s.nextElementSibling; v;) {
			var p = v;
			v = p.nextElementSibling, p.classList.contains("selected") || p.classList.contains("select-menu-divider") ? p.classList.add("d-none") : p.remove()
		}
		var h = Ot.get(e);
		t(null != h, "null.js:51");
		var g = 0,
			y = document.createDocumentFragment(),
			b = e.querySelector(".js-divider-suggestions"),
			j = e.querySelector(".js-divider-rest");

		function L(e) {
			var t = !(null != o && g >= o) && function(e) {
				return (e.login + " " + e.name).toLowerCase().trim()
			}(e).indexOf(n) >= 0;
			if (t || e.selected) {
				var r = function(e, t, n) {
					if (null != e.element) return e.element;
					var r = t.content.cloneNode(!0),
						o = a.query(r, "input[type=checkbox]", HTMLInputElement);
					e.type && (o.name = "reviewer_" + e.type + "_ids[]");
					o.value = e.id;
					var s = "" + o.name + e.id,
						i = e.selected;
					n[s] && (i = !0, n[s].remove(), delete n[s]);
					var c = a.query(r, ".js-navigation-item");
					i && (c.classList.add("selected"), o.checked = !0);
					e.disabled && c.classList.add("disabled");
					var u = r.querySelector(".js-username");
					u && (u.textContent = e.login);
					var l = r.querySelector(".js-description");
					l && (l.textContent = e.name);
					var d = r.querySelector(".js-extended-description");
					d && (e.description ? d.textContent = e.description : d.remove());
					return a.query(r, ".js-avatar", HTMLImageElement).src = e.avatar, e.element = c, e.element
				}(e, s, i);
				r.classList.toggle("d-none", !t), t && g++, y.appendChild(r)
			}
		}
		if (b && h.suggestions) {
			var w = !0,
				x = !1,
				k = void 0;
			try {
				for (var E, T = h.suggestions[Symbol.iterator](); !(w = (E = T.next()).done); w = !0) {
					L(E.value)
				}
			} catch (e) {
				x = !0, k = e
			} finally {
				try {
					!w && T.return && T.return()
				} finally {
					if (x) throw k
				}
			}
			y.childNodes.length && (b.after(y), b.classList.toggle("d-none", 0 === g), y = document.createDocumentFragment())
		}
		var S = g,
			q = !0,
			A = !1,
			M = void 0;
		try {
			for (var H, C = h.users[Symbol.iterator](); !(q = (H = C.next()).done); q = !0) {
				L(H.value)
			}
		} catch (e) {
			A = !0, M = e
		} finally {
			try {
				!q && C.return && C.return()
			} finally {
				if (A) throw M
			}
		}
		return e.append(y), j && j.classList.toggle("d-none", g === S || 0 === S), g
	}

	function Bt(e, t, n) {
		var r = $t(e, t);
		r && -1 === t.indexOf("/") && (r += $t(e.substring(e.lastIndexOf("/") + 1), t));
		return r
	}

	function Ut(e, t) {
		var n = function() {
			for (var n = [], r = 0, a = e.length; r < a; r++) {
				var o = e[r],
					s = Bt(o, t);
				s && n.push([o, s])
			}
			return n
		}();
		n.sort(zt);
		for (var r = [], a = 0, o = n.length; a < o; a++) {
			var s = n[a];
			r.push(s[0])
		}
		return r
	}

	function zt(e, t) {
		var n = e[0],
			r = t[0],
			a = e[1],
			o = t[1];
		return a > o ? -1 : a < o ? 1 : n < r ? -1 : n > r ? 1 : 0
	}

	function Wt(e) {
		var t = e.toLowerCase(),
			n = "+.*?[]{}()^$|\\".replace(/(.)/g, "\\$1"),
			r = new RegExp("\\(([" + n + "])\\)", "g");
		return e = t.replace(/(.)/g, "($1)(.*?)").replace(r, "(\\$1)"), new RegExp("(.*)" + e + "$", "i")
	}

	function Vt(e, t, n) {
		var r = e.innerHTML.trim();
		if (t) {
			null == n && (n = Wt(t));
			var a = r.match(n);
			if (!a) return;
			var o = !1;
			r = [];
			var s, i = void 0,
				c = void 0;
			for (i = c = 1, s = a.length; 1 <= s ? c < s : c > s; i = 1 <= s ? ++c : --c) {
				var u = a[i];
				u && (i % 2 == 0 ? o || (r.push("<mark>"), o = !0) : o && (r.push("</mark>"), o = !1), r.push(u))
			}
			e.innerHTML = r.join("")
		} else {
			var l = r.replace(/<\/?mark>/g, "");
			r !== l && (e.innerHTML = l)
		}
	}

	function $t(e, t) {
		if (e === t) return 1;
		var n, r = e.length,
			a = 0,
			o = 0,
			s = void 0,
			i = void 0;
		for (s = i = 0, n = t.length; i < n; s = ++i) {
			var c = t[s],
				u = e.indexOf(c.toLowerCase()),
				l = e.indexOf(c.toUpperCase()),
				d = Math.min(u, l),
				m = d > -1 ? d : Math.max(u, l);
			if (-1 === m) return 0;
			a += .1, e[m] === c && (a += .1), 0 === m && (a += .8, 0 === s && (o = 1)), " " === e.charAt(m - 1) && (a += .8), e = e.substring(m + 1, r)
		}
		var f = t.length,
			v = a / f,
			p = (v * (f / r) + v) / 2;
		return o && p + .1 < 1 && (p += .1), p
	}
	var Jt = new WeakMap,
		Kt = new WeakMap,
		Gt = new WeakMap;

	function Yt(e, t, n) {
		var r = void 0;
		if (null == n && (n = {}), !e) return 0;
		t = t.toLowerCase();
		var a = null != n.content ? n.content : Qt,
			o = null != n.text ? n.text : Zt,
			s = null != n.score ? n.score : Bt,
			i = n.limit;
		!0 === n.mark ? r = en : null != n.mark && null != n.mark.call && (r = n.mark);
		var c = Jt.get(e),
			u = Array.from(e.children);
		c || (c = Array.from(e.children), Jt.set(e, c));
		var l = !0,
			d = !1,
			m = void 0;
		try {
			for (var f, v = u[Symbol.iterator](); !(l = (f = v.next()).done); l = !0) {
				var p = f.value;
				e.removeChild(p), p.style.display = ""
			}
		} catch (e) {
			d = !0, m = e
		} finally {
			try {
				!l && v.return && v.return()
			} finally {
				if (d) throw m
			}
		}
		var h = document.createDocumentFragment(),
			g = 0,
			y = 0;
		if (t) {
			var b = Array.from(c),
				j = !0,
				L = !1,
				w = void 0;
			try {
				for (var x, k = b[Symbol.iterator](); !(j = (x = k.next()).done); j = !0) {
					var E = x.value;
					null == Kt.get(E) && Kt.set(E, o(a(E))), Gt.set(E, String(s(Kt.get(E) || "", t, E)))
				}
			} catch (e) {
				L = !0, w = e
			} finally {
				try {
					!j && k.return && k.return()
				} finally {
					if (L) throw w
				}
			}
			b.sort(Xt);
			var T = Wt(t),
				S = !0,
				q = !1,
				A = void 0;
			try {
				for (var M, H = b[Symbol.iterator](); !(S = (M = H.next()).done); S = !0) {
					var C = M.value;
					if ((null == i || g < i) && parseFloat(Gt.get(C)) > 0) {
						if (y++, r instanceof Function) {
							var I = a(C);
							r(I), r(I, t, T)
						}
						h.appendChild(C)
					}
					g++
				}
			} catch (e) {
				q = !0, A = e
			} finally {
				try {
					!S && H.return && H.return()
				} finally {
					if (q) throw A
				}
			}
		} else {
			var _ = !0,
				R = !1,
				F = void 0;
			try {
				for (var P, O = c[Symbol.iterator](); !(_ = (P = O.next()).done); _ = !0) {
					var N = P.value;
					(null == i || g < i) && (y++, r instanceof Function && r(a(N)), h.appendChild(N)), g++
				}
			} catch (e) {
				R = !0, F = e
			} finally {
				try {
					!_ && O.return && O.return()
				} finally {
					if (R) throw F
				}
			}
		}
		e.appendChild(h);
		var D = e.querySelectorAll(".js-divider"),
			B = !0,
			U = !1,
			z = void 0;
		try {
			for (var W, V = D[Symbol.iterator](); !(B = (W = V.next()).done); B = !0) {
				W.value.classList.toggle("d-none", Boolean(t && t.trim().length > 0))
			}
		} catch (e) {
			U = !0, z = e
		} finally {
			try {
				!B && V.return && V.return()
			} finally {
				if (U) throw z
			}
		}
		return y
	}

	function Xt(e, t) {
		var n = parseFloat(Gt.get(e)),
			r = parseFloat(Gt.get(t)),
			a = Kt.get(e) || "",
			o = Kt.get(t) || "";
		return n > r ? -1 : n < r ? 1 : a < o ? -1 : a > o ? 1 : 0
	}

	function Qt(e) {
		return e
	}

	function Zt(e) {
		return e.hasAttribute("data-filter-value") ? (e.getAttribute("data-filter-value") || "").toLowerCase().trim() : e.textContent.toLowerCase().trim()
	}
	var en = Vt;

	function tn(e) {
		return e.textContent.toLowerCase().trim()
	}

	function nn(e, t) {
		var n = e.innerHTML;
		if (t) {
			var r = new RegExp(t, "i");
			e.innerHTML = n.replace(r, "<mark>$&</mark>")
		} else {
			var a = n.replace(/<\/?mark>/g, "");
			n !== a && (e.innerHTML = a)
		}
	}

	function rn(e) {
		return e.textContent.toLowerCase().trim()
	}

	function an(e, t) {
		var n = e.innerHTML;
		if (t) {
			var r = new RegExp(t, "i");
			e.innerHTML = n.replace(r, "<mark>$&</mark>")
		} else {
			var a = n.replace(/<\/?mark>/g, "");
			n !== a && (e.innerHTML = a)
		}
	}

	function on(e, t) {
		var n = e.hasAttribute("data-filterable-highlight"),
			r = parseInt(e.getAttribute("data-filterable-limit"), 10) || null,
			a = 0;
		switch (e.getAttribute("data-filterable-type")) {
			case "fuzzy":
				a = Yt(e, t, {
					mark: n,
					limit: r
				});
				break;
			case "substring":
				a = function(e, t, n) {
					var r = void 0;
					if (null == n && (n = {}), e) {
						t = t.toLowerCase();
						var a = null != n.text ? n.text : rn,
							o = n.limit,
							s = Array.from(e.children).filter(function(e) {
								return !e.classList.contains("select-menu-no-results")
							});
						!0 === n.mark ? r = an : "function" == typeof n.mark && (r = n.mark);
						var i = 0,
							c = !0,
							u = !1,
							l = void 0;
						try {
							for (var d, m = s[Symbol.iterator](); !(c = (d = m.next()).done); c = !0) {
								var f = d.value; - 1 !== a(f).indexOf(t) ? null != o && i >= o ? f.style.display = "none" : (i++, f.style.display = "", r && (r(f), r(f, t))) : f.style.display = "none"
							}
						} catch (e) {
							u = !0, l = e
						} finally {
							try {
								!c && m.return && m.return()
							} finally {
								if (u) throw l
							}
						}
						return i
					}
				}(e, t, {
					mark: n,
					limit: r
				});
				break;
			case "substring-memory":
				a = Dt(e, t, {
					limit: r
				});
				break;
			default:
				a = function(e, t, n) {
					var r, a = void 0,
						o = void 0;
					if (null == n && (n = {}), e) {
						t = t.toLowerCase();
						var s = null != n.text ? n.text : tn,
							i = E(e).children(),
							c = n.limit;
						!0 === n.mark ? o = nn : null != n.mark && null != n.mark.call && (o = n.mark);
						var u = 0;
						for (a = 0, r = i.length; a < r; a++) {
							var l = i[a];
							0 === s(l).indexOf(t) ? null != c && u >= c ? l.style.display = "none" : (u++, l.style.display = "", o && (o(l), o(l, t))) : l.style.display = "none"
						}
						return u
					}
				}(e, t, {
					mark: n,
					limit: r
				})
		}
		e.classList.toggle("filterable-active", t.length > 0), e.classList.toggle("filterable-empty", 0 === a)
	}
	s.observe(".js-filterable-field", function(e) {
		var t, n, r = (t = ke(regeneratorRuntime.mark(function e(t) {
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (o !== t.value) {
								e.next = 2;
								break
							}
							return e.abrupt("return");
						case 2:
							return o = t.value, e.next = 5, T.microtask();
						case 5:
							i.fire(t, "filterable:change");
						case 6:
						case "end":
							return e.stop()
					}
				}, e, this)
			})), function(e) {
				return t.apply(this, arguments)
			}),
			a = (n = ke(regeneratorRuntime.mark(function e(t) {
				var n;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return n = t.currentTarget, e.next = 3, T.microtask();
						case 3:
							i.fire(n, "filterable:change");
						case 4:
						case "end":
							return e.stop()
					}
				}, e, this)
			})), function(e) {
				return n.apply(this, arguments)
			}),
			o = e.value;
		return {
			add: function(e) {
				e.addEventListener("focus", a), f.addThrottledInputEventListener(e, r), document.activeElement === e && a({
					currentTarget: e
				})
			},
			remove: function(e) {
				e.removeEventListener("focus", a), f.removeThrottledInputEventListener(e, r)
			}
		}
	}), i.on("filterable:change", ".js-filterable-field", function(e) {
		var t = c(e.currentTarget, HTMLInputElement),
			n = t.value.trim().toLowerCase(),
			r = document.querySelectorAll("[data-filterable-for=" + t.id + "]"),
			a = !0,
			o = !1,
			s = void 0;
		try {
			for (var i, u = r[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
				var l = i.value;
				if ("substring-memory" !== l.getAttribute("data-filterable-type") || Nt(l)) {
					on(l, n);
					var d = new CustomEvent("filterable:change", {
						bubbles: !0,
						cancelable: !1,
						detail: {
							inputField: t
						}
					});
					l.dispatchEvent(d)
				}
			}
		} catch (e) {
			o = !0, s = e
		} finally {
			try {
				!a && u.return && u.return()
			} finally {
				if (o) throw s
			}
		}
	}), document.addEventListener("selectmenu:data", function(e) {
		t(e instanceof CustomEvent, "null.js:135");
		var n = c(e.target, HTMLElement),
			r = n.querySelector('[data-filterable-type="substring-memory"]');
		if (r) {
			! function(e, t) {
				Ot.set(e, t)
			}(r, e.detail.data);
			var a = n.querySelector(".js-filterable-field");
			a && a === document.activeElement && i.fire(a, "filterable:change")
		}
	}), i.on("click", ".js-flash-close", function(e) {
		var n = e.currentTarget.closest(".flash-messages"),
			r = e.currentTarget.closest(".flash");
		t(r, "null.js:24"), r.remove(), n && !n.querySelector(".flash") && n.remove()
	});
	var sn = new WeakMap;

	function cn() {
		return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
	}
	document.addEventListener("focus", function(e) {
		var t = e.target;
		sn.get(t) || (i.fire(t, "focusin:delay"), sn.set(t, !0))
	}, {
		capture: !0
	}), document.addEventListener("blur", function(e) {
		setTimeout(function() {
			var t = e.target;
			t !== document.activeElement && (i.fire(t, "focusout:delay"), sn.delete(e.target))
		}, 200)
	}, {
		capture: !0
	}), Object.setPrototypeOf(cn.prototype, HTMLElement.prototype), Object.setPrototypeOf(cn, HTMLElement);
	var un = function(e) {
		function t() {
			return Ee(this, t), qe(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return Se(t, cn), Te(t, [{
			key: "connectedCallback",
			value: function() {
				if (null === this.image && !S.isEmojiSupported()) {
					this.textContent = "";
					var e = function(e) {
						var t = document.createElement("img");
						return t.className = "emoji", t.alt = e.getAttribute("alias") || "", t.height = 20, t.width = 20, t
					}(this);
					e.src = this.getAttribute("fallback-src") || "", this.appendChild(e)
				}
			}
		}, {
			key: "image",
			get: function() {
				return this.firstElementChild instanceof HTMLImageElement ? this.firstElementChild : null
			}
		}]), t
	}();
	window.customElements.get("g-emoji") || (window.GEmojiElement = un, window.customElements.define("g-emoji", un)),
		function() {
			var e = document.createElement("input");
			if (!("checkValidity" in e && "setCustomValidity" in e && (e.required = !0, e.value = "hi", e.cloneNode().checkValidity()))) {
				var t = new WeakMap,
					n = !0,
					r = !1,
					a = void 0;
				try {
					for (var o, s = ["HTMLFormElement", "HTMLInputElement", "HTMLTextAreaElement", "HTMLSelectElement", "HTMLButtonElement", "HTMLFieldSetElement", "HTMLOutputElement"][Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
						var i = o.value;
						window[i] && (window[i].prototype.checkValidity = c, "HTMLFormElement" !== i && (window[i].prototype.setCustomValidity = u))
					}
				} catch (e) {
					r = !0, a = e
				} finally {
					try {
						!n && s.return && s.return()
					} finally {
						if (r) throw a
					}
				}
			}

			function c() {
				var e = function() {
					if (this instanceof HTMLFormElement || this instanceof HTMLFieldSetElement) {
						var e = !0,
							n = !1,
							r = void 0;
						try {
							for (var a, o = this.elements[Symbol.iterator](); !(e = (a = o.next()).done); e = !0)
								if (!a.value.checkValidity()) return !1
						} catch (e) {
							n = !0, r = e
						} finally {
							try {
								!e && o.return && o.return()
							} finally {
								if (n) throw r
							}
						}
						return !0
					}
					if (this instanceof HTMLInputElement && "hidden" === this.type) return !0;
					if (t.get(this)) return !1;
					if (this.hasAttribute("required") && !this.value) return !1;
					var s = this.getAttribute("pattern");
					if (null != s && this.value) {
						var i = new RegExp("^(?:" + s + ")$");
						if (0 !== this.value.search(i)) return !1
					}
					return !0
				}.call(this);
				if (!e) {
					var n = new CustomEvent("invalid", {
						bubbles: !1,
						cancelable: !0
					});
					this.dispatchEvent(n)
				}
				return e
			}

			function u(e) {
				t.set(this, e)
			}
		}();
	var ln = ["input[pattern]", "input[required]", "textarea[required]", "[data-required-change]"].join(",");
	o.onFocus(ln, function(e) {
		var t = e.checkValidity();

		function n() {
			var n = e.checkValidity();
			n !== t && e.form && mn(e.form), t = n
		}
		e.addEventListener("input", n), e.addEventListener("blur", function t() {
			e.removeEventListener("input", n), e.removeEventListener("blur", t)
		})
	});
	var dn = new WeakMap;

	function mn(e) {
		var t = e.checkValidity(),
			n = !0,
			r = !1,
			o = void 0;
		try {
			for (var s, i = a.querySelectorAll(e, "button[data-disable-invalid]", HTMLButtonElement)[Symbol.iterator](); !(n = (s = i.next()).done); n = !0) {
				s.value.disabled = !t
			}
		} catch (e) {
			r = !0, o = e
		} finally {
			try {
				!n && i.return && i.return()
			} finally {
				if (r) throw o
			}
		}
	}

	function fn(e, t) {
		e.closest("label").classList.toggle("selected", t)
	}
	s.observe("button[data-disable-invalid]", {
		constructor: HTMLButtonElement,
		initialize: function(e) {
			var t = e.form;
			t && (! function(e) {
				dn.get(e) || (e.addEventListener("change", function() {
					return mn(e)
				}), dn.set(e, !0))
			}(t), e.disabled = !t.checkValidity())
		}
	}), s.observe("[data-required-change]", function(e) {
		function t() {
			e.setCustomValidity(e.value === e.defaultValue ? "unchanged" : "")
		}
		e.addEventListener("input", t), e.addEventListener("change", t), t(), e.form && mn(e.form)
	}), document.addEventListener("reset", function(e) {
		if (e.target instanceof HTMLFormElement) {
			var t = e.target;
			setTimeout(function() {
				return mn(t)
			})
		}
	}), i.on("submit", ".js-normalize-submit", function(e) {
		this.checkValidity() || e.preventDefault()
	}), s.observe(".labeled-button:checked", {
		add: function(e) {
			fn(e, !0)
		},
		remove: function(e) {
			fn(e, !1)
		}
	}), o.onKey("keydown", "div.btn-sm, span.btn-sm", function(e) {
		t(e.target instanceof HTMLElement, "null.js:7"), "Enter" === e.key && (e.target.click(), e.preventDefault())
	}), l.remoteForm(".js-notice-dismiss", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.text();
					case 2:
						a.closest(t, ".js-notice").remove();
					case 4:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), n.ready.then(function() {
		var e = document.getElementById("js-pjax-loader-bar");
		if (e) {
			var t = e.firstElementChild;
			if (t instanceof HTMLElement) {
				var n = 0,
					r = null,
					a = null;
				document.addEventListener("pjax:start", function() {
					o(0), e.classList.add("is-loading"), r = setTimeout(s, 0)
				}), document.addEventListener("pjax:end", function() {
					r && clearTimeout(r), o(100), e.classList.remove("is-loading")
				}), document.addEventListener("pjax:timeout", function(e) {
					e.preventDefault()
				})
			}
		}

		function o(e) {
			0 === e && (null == a && (a = getComputedStyle(t).transition), t.style.transition = "none"), n = e, t.style.width = n + "%", 0 === e && (t.clientWidth, t.style.transition = a || "")
		}

		function s() {
			0 === n && (n = 12), o(Math.min(n + 3, 95)), r = setTimeout(s, 500)
		}
	});
	var vn = function() {
			var e = ke(regeneratorRuntime.mark(function e() {
				var t, n, r;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.next = 2, T.microtask();
						case 2:
							if (window.performance.getEntriesByName(gn).length) {
								e.next = 4;
								break
							}
							return e.abrupt("return");
						case 4:
							if (window.performance.mark(yn), window.performance.measure(hn, gn, yn), t = window.performance.getEntriesByName(hn), n = t.pop(), r = n ? n.duration : null) {
								e.next = 11;
								break
							}
							return e.abrupt("return");
						case 11:
							pn && We({
								requestUrl: pn,
								pjaxDuration: Math.round(r)
							}), bn();
						case 13:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function() {
				return e.apply(this, arguments)
			}
		}(),
		pn = null,
		hn = "last_pjax_request",
		gn = "pjax_start",
		yn = "pjax_end";

	function bn() {
		window.performance.clearMarks(gn), window.performance.clearMarks(yn), window.performance.clearMeasures(hn)
	}

	function jn(e) {
		for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
		return n.some(function(t) {
			return e.classList.contains(t)
		})
	}

	function Ln(e) {
		t(null != e.parentNode && e.parentNode instanceof HTMLElement, "null.js:10");
		for (var n = e.parentNode.children, r = 0; r < n.length; ++r)
			if (n[r] === e) return r;
		return 0
	}
	document.addEventListener("pjax:start", function(e) {
		e instanceof CustomEvent && e.detail && e.detail.url && (window.performance.mark(gn), pn = e.detail.url)
	}), document.addEventListener("pjax:end", vn), document.addEventListener("pjax:click", function(e) {
		if (window.onbeforeunload) return e.preventDefault()
	}), o.onKey("keydown", ".js-quick-submit", function(e) {
		var n = e.target;
		if (t(n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement, "null.js:14"), (e.ctrlKey || e.metaKey) && "Enter" === e.key) {
			var r = n.form;
			t(r instanceof HTMLFormElement, "null.js:18");
			var a = r.querySelector("input[type=submit], button[type=submit]");
			(a instanceof HTMLInputElement || a instanceof HTMLButtonElement) && a.disabled || d.submit(r), e.preventDefault()
		}
	});
	var wn = 0;
	var xn = {
		INPUT: function(e) {
			return e instanceof HTMLInputElement && e.checked ? "[x] " : "[ ] "
		},
		CODE: function(e) {
			var n = e.textContent;
			return t(null != e.parentNode, "null.js:54"), "PRE" === e.parentNode.nodeName ? (e.textContent = n.replace(/^/gm, "    "), e.textContent) : n.indexOf("`") >= 0 ? "`` " + n + " ``" : "`" + n + "`"
		},
		PRE: function(e) {
			t(null != e.parentNode && e.parentNode instanceof HTMLElement, "null.js:66");
			var n = e.parentNode;
			return "DIV" === n.nodeName && n.classList.contains("highlight") && (e.textContent = e.textContent.replace(/^/gm, "    "), e.append("\n\n")), e
		},
		STRONG: function(e) {
			return "**" + e.textContent + "**"
		},
		EM: function(e) {
			return "_" + e.textContent + "_"
		},
		BLOCKQUOTE: function(e) {
			var t = e.textContent.trim().replace(/^/gm, "> "),
				n = document.createElement("pre");
			return n.textContent = t + "\n\n", n
		},
		A: function(e) {
			var n = e.textContent;
			if (jn(e, "issue-link", "user-mention", "team-mention")) return n;
			if (/^https?:/.test(n) && n === e.getAttribute("href")) return n;
			var r = e.getAttribute("href");
			return t(null != r, "null.js:96"), "[" + n + "](" + r + ")"
		},
		IMG: function(e) {
			var n = e.getAttribute("alt");
			if (t(null != n, "null.js:104"), jn(e, "emoji")) return n;
			var r = e.getAttribute("src");
			return t(null != r, "null.js:111"), "![" + n + "](" + r + ")"
		},
		LI: function(e) {
			var n, r, a, o = e.parentNode;
			if (t(null != o, "null.js:119"), r = (n = e).childNodes[0], a = n.childNodes[1], !(r && n.childNodes.length < 3) || ("OL" !== r.nodeName && "UL" !== r.nodeName || a && (a.nodeType !== Node.TEXT_NODE || a.textContent.trim()))) switch (o.nodeName) {
				case "UL":
					e.prepend("* ");
					break;
				case "OL":
					if (wn > 0 && !o.previousSibling) {
						var s = Ln(e) + wn + 1;
						e.prepend(s + "\\. ")
					} else e.prepend(Ln(e) + 1 + ". ")
			}
			return e
		},
		OL: function(e) {
			var t = document.createElement("li");
			return t.appendChild(document.createElement("br")), e.append(t), e
		},
		H1: function(e) {
			var t = parseInt(e.nodeName.slice(1));
			return e.prepend(Array(t + 1).join("#") + " "), e
		},
		UL: function(e) {
			return e
		}
	};
	xn.UL = xn.OL;
	for (var kn = 2; kn <= 6; ++kn) xn["H" + kn] = xn.H1;

	function En(e, t) {
		for (var n = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, function(e) {
				return e.nodeName in xn && (function(e) {
					return "IMG" === e.nodeName || null != e.firstChild
				}(e) || function(e) {
					return "INPUT" === e.nodeName && e instanceof HTMLInputElement && "checkbox" === e.type
				}(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
			}), r = [], a = n.nextNode(); a;) a instanceof HTMLElement && r.push(a), a = n.nextNode();
		r.reverse();
		var o = !0,
			s = !1,
			i = void 0;
		try {
			for (var c, u = r[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) t(a = c.value, xn[a.nodeName](a))
		} catch (e) {
			s = !0, i = e
		} finally {
			try {
				!o && u.return && u.return()
			} finally {
				if (s) throw i
			}
		}
	}
	i.on("quote:selection", ".js-quote-markdown", function(e) {
		t(e instanceof CustomEvent, "null.js:36");
		var n = e.detail.selection;
		try {
			var r = function(e, n) {
				var r = document.body;
				t(r, "null.js:15");
				var a = document.createElement("div");
				a.appendChild(n), a.style.cssText = "position:absolute;left:-9999px;", r.appendChild(a);
				var o = void 0;
				try {
					var s = document.createRange();
					s.selectNodeContents(a), e.removeAllRanges(), e.addRange(s), o = e.toString(), e.removeAllRanges()
				} finally {
					r.removeChild(a)
				}
				return o
			}(n, function(e) {
				var n = e.getRangeAt(0).cloneContents();
				wn = 0, t(null != e.anchorNode && null != e.anchorNode.parentNode && e.anchorNode.parentNode instanceof HTMLElement, "selection's anchorNode and parentNode must not be null -- null.js:190");
				var r = e.anchorNode.parentNode.closest("li");
				if (r && (t(null != r.parentNode, "null.js:199"), "OL" === r.parentNode.nodeName && (wn = Ln(r)), !n.querySelector("li"))) {
					var a = document.createElement("li");
					t(null != r.parentNode, "null.js:207");
					var o = document.createElement(r.parentNode.nodeName);
					a.appendChild(n), o.appendChild(a), (n = document.createDocumentFragment()).appendChild(o)
				}
				return En(n, function(e, t) {
					return e.replaceWith(t)
				}), n
			}(n));
			e.detail.selectionText = r.replace(/^\n+/, "").replace(/\s+$/, "")
		} catch (e) {
			setTimeout(function() {
				throw e
			})
		}
	}), document.addEventListener("keydown", function(e) {
		if (!(e.defaultPrevented || "r" !== x(e) || e.target instanceof Node && d.isFormField(e.target))) {
			var t = window.getSelection();
			t && function(e) {
				var t = e.toString().trim();
				if (!t) return !1;
				var n = e.focusNode;
				if (!n) return !1;
				if (n.nodeType !== Node.ELEMENT_NODE && (n = n.parentNode), !(n instanceof Element)) return !1;
				var r = n.closest(".js-quote-selection-container");
				if (!r) return !1;
				var o = {
					selection: e,
					selectionText: t
				};
				if (!i.fire(r, "quote:selection", o)) return !0;
				t = o.selectionText;
				var s = a.querySelectorAll(r, ".js-quote-selection-target", HTMLTextAreaElement).filter(q)[0];
				if (!s) return !1;
				var c = "> " + t.replace(/\n/g, "\n> ") + "\n\n";
				return s.value && (c = s.value + "\n\n" + c), d.changeValue(s, c), s.focus(), s.selectionStart = s.value.length, s.scrollTop = s.scrollHeight, !0
			}(t) && e.preventDefault()
		}
	}), s.observe(".has-removed-contents", function() {
		var e = void 0;
		return {
			add: function(t) {
				e = Array.from(t.childNodes);
				var n = !0,
					r = !1,
					a = void 0;
				try {
					for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
						var c = o.value;
						t.removeChild(c)
					}
				} catch (e) {
					r = !0, a = e
				} finally {
					try {
						!n && s.return && s.return()
					} finally {
						if (r) throw a
					}
				}
				var u = t.closest("form");
				u && i.fire(u, "change")
			},
			remove: function(t) {
				var n = !0,
					r = !1,
					a = void 0;
				try {
					for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
						var c = o.value;
						t.appendChild(c)
					}
				} catch (e) {
					r = !0, a = e
				} finally {
					try {
						!n && s.return && s.return()
					} finally {
						if (r) throw a
					}
				}
				var u = t.closest("form");
				u && i.fire(u, "change")
			}
		}
	});
	var Tn = function() {
		var e = ke(regeneratorRuntime.mark(function e(t) {
			var n, r, a, o, s, c, u, l, d, m, f, v, p, h, g, y, b, j, L;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						if (n = "session-resume:" + t, r = A.getItem(n)) {
							e.next = 4;
							break
						}
						return e.abrupt("return");
					case 4:
						for (A.removeItem(n), a = [], o = !0, s = !1, c = void 0, e.prev = 9, u = JSON.parse(r)[Symbol.iterator](); !(o = (l = u.next()).done); o = !0) d = l.value, m = Ae(d, 2), f = m[0], v = m[1], i.fire(document, "session:resume", {
							targetId: f,
							targetValue: v
						}) && (p = document.getElementById(f)) && (p instanceof HTMLInputElement || p instanceof HTMLTextAreaElement) && p.value === p.defaultValue && (p.value = v, a.push(p));
						e.next = 17;
						break;
					case 13:
						e.prev = 13, e.t0 = e.catch(9), s = !0, c = e.t0;
					case 17:
						e.prev = 17, e.prev = 18, !o && u.return && u.return();
					case 20:
						if (e.prev = 20, !s) {
							e.next = 23;
							break
						}
						throw c;
					case 23:
						return e.finish(20);
					case 24:
						return e.finish(17);
					case 25:
						return e.next = 27, T.microtask();
					case 27:
						for (h = !0, g = !1, y = void 0, e.prev = 30, b = a[Symbol.iterator](); !(h = (j = b.next()).done); h = !0) L = j.value, i.fire(L, "change");
						e.next = 38;
						break;
					case 34:
						e.prev = 34, e.t1 = e.catch(30), g = !0, y = e.t1;
					case 38:
						e.prev = 38, e.prev = 39, !h && b.return && b.return();
					case 41:
						if (e.prev = 41, !g) {
							e.next = 44;
							break
						}
						throw y;
					case 44:
						return e.finish(41);
					case 45:
						return e.finish(38);
					case 46:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[9, 13, 17, 25],
				[18, , 20, 24],
				[30, 34, 38, 46],
				[39, , 41, 45]
			])
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}();

	function Sn(t) {
		return t = t || window.location, e.getMetadataByName(document, "session-resume-id") || t.pathname
	}
	var qn = null;

	function An(e) {
		var t = "session-resume:" + e,
			n = [],
			r = !0,
			a = !1,
			o = void 0;
		try {
			for (var s, i = document.querySelectorAll(".js-session-resumable")[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
				var c = s.value;
				(c instanceof HTMLInputElement || c instanceof HTMLTextAreaElement) && n.push(c)
			}
		} catch (e) {
			a = !0, o = e
		} finally {
			try {
				!r && i.return && i.return()
			} finally {
				if (a) throw o
			}
		}
		var u = n.filter(function(e) {
			return function(e) {
				return e.id && e.value !== e.defaultValue && e.form !== qn
			}(e)
		}).map(function(e) {
			return [e.id, e.value]
		});
		u.length && A.setItem(t, JSON.stringify(u))
	}
	window.addEventListener("submit", function() {
		var e = ke(regeneratorRuntime.mark(function e(t) {
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return qn = t.target, e.next = 3, T.microtask();
					case 3:
						t.defaultPrevented && (qn = null);
					case 4:
					case "end":
						return e.stop()
				}
			}, e, void 0)
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}(), {
		capture: !0
	}), window.addEventListener("pageshow", function() {
		Tn(Sn())
	}), window.addEventListener("pjax:end", function() {
		Tn(Sn())
	}), window.addEventListener("pagehide", function() {
		An(Sn())
	}), window.addEventListener("pjax:beforeReplace", function(e) {
		var t = e.detail.previousState,
			n = t ? t.url : null;
		if (n) An(Sn(new URL(n)));
		else {
			var r = new Error("pjax:beforeReplace event.detail.previousState.url is undefined");
			setTimeout(function() {
				throw r
			})
		}
	});
	var Mn = new WeakMap;

	function Hn(e) {
		var t = c(e.currentTarget, HTMLTextAreaElement),
			n = Cn(t);
		if (n.x !== e.clientX || n.y !== e.clientY) {
			var r = t.style.height;
			n.height && n.height !== r && (t.classList.add("is-user-resized"), t.style.maxHeight = "", t.removeEventListener("mousemove", Hn)), n.height = r
		}
		n.x = e.clientX, n.y = e.clientY
	}

	function Cn(e) {
		var t = Mn.get(e) || {};
		return Mn.set(e, t), t
	}
	i.on("reset", "form", function(e) {
		var t = e.target.querySelector(".js-size-to-fit");
		t && (t.classList.remove("is-user-resized"), t.style.height = "", t.style.maxHeight = "")
	}), s.observe("textarea.js-size-to-fit", function(e) {
		var t = c(e, HTMLTextAreaElement),
			n = null;

		function r() {
			if (!t.classList.contains("is-user-resized") && t.value !== n && q(t)) {
				var e = M.overflowOffset(t);
				if (!(null == e || e.top < 0 || e.bottom < 0)) {
					var r = Number(getComputedStyle(t).height.replace(/px/, "")) + e.bottom;
					t.style.maxHeight = r - 100 + "px";
					var a = t.parentElement;
					if (a instanceof HTMLElement) {
						var o = a.style.height;
						a.style.height = getComputedStyle(a).height, t.style.height = "auto", t.style.height = t.scrollHeight + "px", a.style.height = o, Cn(t).height = t.style.height
					}
					n = t.value
				}
			}
		}
		return {
			add: function() {
				t.addEventListener("mousemove", Hn), t.addEventListener("input", r), t.addEventListener("change", r), t.value && r()
			},
			remove: function() {
				t.removeEventListener("mousemove", Hn), t.removeEventListener("input", r), t.removeEventListener("change", r)
			}
		}
	}), l.remoteForm(".js-social-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s, i, c, u, l;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.json();
					case 2:
						for (r = e.sent, o = a.closest(t, ".js-social-container"), s = !0, i = !1, c = void 0, e.prev = 7, u = o.querySelectorAll(".js-social-count")[Symbol.iterator](); !(s = (l = u.next()).done); s = !0) l.value.textContent = r.json.count;
						e.next = 15;
						break;
					case 11:
						e.prev = 11, e.t0 = e.catch(7), i = !0, c = e.t0;
					case 15:
						e.prev = 15, e.prev = 16, !s && u.return && u.return();
					case 18:
						if (e.prev = 18, !i) {
							e.next = 21;
							break
						}
						throw c;
					case 21:
						return e.finish(18);
					case 22:
						return e.finish(15);
					case 23:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[7, 11, 15, 23],
				[16, , 18, 22]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}());
	var In = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
		_n = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
		Rn = new WeakMap;

	function Fn(e) {
		var n = function(e, n) {
				var r = e.nodeName.toLowerCase();
				if ("textarea" !== r && "input" !== r) throw new Error("expected textField to a textarea or input");
				var a = Rn.get(e);
				if (a && a.parentElement === e.parentElement) a.innerHTML = "";
				else {
					a = document.createElement("div"), Rn.set(e, a);
					var o = window.getComputedStyle(e),
						s = In.slice(0);
					"textarea" === r ? s.push("white-space:pre-wrap;") : s.push("white-space:nowrap;");
					for (var i = 0, c = _n.length; i < c; i++) {
						var u = _n[i];
						s.push(u + ":" + o.getPropertyValue(u) + ";")
					}
					a.style.cssText = s.join(" ")
				}
				var l = void 0;
				!1 !== n && ((l = document.createElement("span")).style.cssText = "position: absolute;", l.className = "text-field-mirror-marker", l.innerHTML = "&nbsp;");
				var d = void 0,
					m = void 0;
				if ("number" == typeof n) {
					var f = e.value.substring(0, n);
					f && (d = document.createTextNode(f)), (f = e.value.substring(n)) && (m = document.createTextNode(f))
				} else {
					var v = e.value;
					v && (d = document.createTextNode(v))
				}
				return d && a.appendChild(d), l && a.appendChild(l), m && a.appendChild(m), a.parentElement || (t(e.parentElement, "textField must have a parentElement to mirror -- null.js:111"), e.parentElement.insertBefore(a, e)), a.scrollTop = e.scrollTop, a.scrollLeft = e.scrollLeft, a
			}(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.selectionEnd),
			r = E(n).find(".text-field-mirror-marker").position();
		return r.top += parseInt(E(n).css("border-top-width"), 10), r.left += parseInt(E(n).css("border-left-width"), 10), setTimeout(function() {
			E(n).remove()
		}, 5e3), r
	}
	var Pn = Me(["", ""], ["", ""]),
		On = Me(['\n        <li class="js-navigation-item"\n          data-value="', '"\n          data-text="', '"\n          data-mentionable-type="', '"\n          data-mentionable-id="', '">\n          <span>', "</span>\n          <small>", "</small>\n        </li>"], ['\n        <li class="js-navigation-item"\n          data-value="', '"\n          data-text="', '"\n          data-mentionable-type="', '"\n          data-mentionable-id="', '">\n          <span>', "</span>\n          <small>", "</small>\n        </li>"]),
		Nn = new WeakMap,
		Dn = {},
		Bn = function() {
			function e(t) {
				Ee(this, e), this.setup = this.setup.bind(this), this.teardown = this.teardown.bind(this), this.textarea = t.input, this.types = t.types, this.suggester = t.suggester, this.repositionManually = t.repositionManually, this.teardownManually = t.teardownManually, this.onActivate = t.onActivate, this.suggestions = t.suggestions || document.createElement("div"), this.disable = t.disable, this.deactivateHandler = this.deactivate.bind(this), this.pasteHandler = this.onPaste.bind(this), this.inputHandler = this.onInput.bind(this), this.keyDownHandler = this.onNavigationKeyDown.bind(this), this.navigationOpenHandler = this.onNavigationOpen.bind(this)
			}
			return Te(e, [{
				key: "setup",
				value: function() {
					var e = this.textarea.form;
					t(e, "null.js:130"), e.addEventListener("reset", this.deactivateHandler), this.textarea.addEventListener("paste", this.pasteHandler), this.textarea.addEventListener("input", this.inputHandler), this.suggester.addEventListener("navigation:keydown", this.keyDownHandler), this.suggester.addEventListener("navigation:open", this.navigationOpenHandler), null == this.teardownManually && this.textarea.addEventListener("focusout:delay", this.teardown), this.loadSuggestions()
				}
			}, {
				key: "teardown",
				value: function() {
					this.deactivate();
					var e = this.textarea.form;
					t(e, "null.js:149"), e.removeEventListener("reset", this.deactivateHandler), this.textarea.removeEventListener("paste", this.pasteHandler), this.textarea.removeEventListener("input", this.inputHandler), this.suggester.removeEventListener("navigation:keydown", this.keyDownHandler), this.suggester.removeEventListener("navigation:open", this.navigationOpenHandler), this.textarea.removeEventListener("focusout:delay", this.teardown), this.onSuggestionsLoaded = function() {
						return null
					}
				}
			}, {
				key: "onPaste",
				value: function() {
					this.deactivate(), this.justPasted = !0
				}
			}, {
				key: "onInput",
				value: function() {
					if (!this.justPasted) return !this.checkQuery() && void 0;
					this.justPasted = !1
				}
			}, {
				key: "onNavigationKeyDown",
				value: function(e) {
					var t = e.detail;
					if (e.target instanceof HTMLElement && e.target.hasAttribute("data-value")) switch (t.hotkey) {
						case "Tab":
							this.onNavigationOpen(e), e.preventDefault();
							break;
						case "Escape":
							this.deactivate(), e.stopImmediatePropagation(), e.preventDefault()
					}
				}
			}, {
				key: "_getDataValue",
				value: function(e) {
					return this.currentSearch.type.getValue ? this.currentSearch.type.getValue(e) : e.getAttribute("data-value")
				}
			}, {
				key: "_findIndexOfPick",
				value: function(e, t) {
					var n = 1,
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
							var c = s.value;
							if (this._getDataValue(c) === t) return n;
							n++
						}
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							!r && i.return && i.return()
						} finally {
							if (a) throw o
						}
					}
					return -1
				}
			}, {
				key: "logMention",
				value: function(e, t, n, r) {
					var a = n.getAttribute("data-mentionable-type");
					if (a) {
						var o = n.getAttribute("data-mentionable-id");
						if (o) {
							var s = new FormData;
							s.append("authenticity_token", t), s.append("mentionable_type", a), s.append("mentionable_id", o), s.append("query_string", r), p.fetch(e, {
								method: "POST",
								body: s
							})
						}
					}
				}
			}, {
				key: "onNavigationOpen",
				value: function(e) {
					var t = this,
						n = c(e.target, HTMLElement);
					if (n.hasAttribute("data-value")) {
						var r = this._getDataValue(n),
							a = this.textarea.value.substring(0, this.currentSearch.endIndex),
							o = this.textarea.value.substring(this.currentSearch.endIndex);
						this.currentSearch.type.onSelection ? this.currentSearch.type.onSelection(r) : (a = a.replace(this.currentSearch.type.match, this.currentSearch.type.replace.replace("$value", r)), this.textarea.value = a + o), this.deactivate(), this.textarea.focus(), this.textarea.selectionStart = a.length, this.textarea.selectionEnd = a.length;
						var s = this.suggester.getAttribute("data-log-mention-url");
						if (s) {
							var i = this.suggester.getAttribute("data-log-mention-authenticity-token");
							i && requestIdleCallback(function() {
								return t.logMention(s, i, n, t.currentSearch.query)
							})
						}
					}
				}
			}, {
				key: "mentionData",
				value: function() {
					var e = this.suggestions.querySelector("[data-mentions-json]");
					if (e) {
						var n = Nn.get(e);
						if (!n) {
							var r = e.getAttribute("data-mentions-json");
							t(r, "null.js:283"), n = JSON.parse(r), Nn.set(e, n)
						}
						return n
					}
				}
			}, {
				key: "checkQuery",
				value: function() {
					var e = this,
						t = this.searchQuery();
					if (t) {
						var n = "mention" === t.type.typeid ? this.mentionData() : null;
						if (this.currentSearch && this.currentSearch === t.query) return;
						return this.currentSearch = t, this.search(t.type, t.query, n).then(function(n) {
							n ? e.activate(t.startIndex) : e.deactivate()
						}), this.currentSearch.query
					}
					this.currentSearch = null, this.deactivate()
				}
			}, {
				key: "renderResults",
				value: function(e, t) {
					var n, r = function(e) {
						var t = "user" === e.type ? e.login : e.name,
							n = "user" === e.type ? e.name : e.description,
							r = t + " " + n;
						return H.html(On, t, r, e.type, e.id, t, n)
					};
					H.render((n = t, H.html(Pn, n.map(r))), e)
				}
			}, {
				key: "activate",
				value: function(e) {
					if (this.textarea === document.activeElement) {
						if (this.onActivate && this.onActivate(this.suggester), null == this.repositionManually) {
							var t = Fn(this.textarea, e + 1),
								n = t.top,
								r = t.left;
							this.suggester.style.top = n + "px", this.suggester.style.left = r + "px"
						}
						this.suggester.classList.contains("active") || (this.suggester.classList.add("active"), this.textarea.classList.add("js-navigation-enable"), m.push(this.suggester), m.focus(this.suggester))
					}
				}
			}, {
				key: "deactivate",
				value: function() {
					if (this.suggester.classList.contains("active")) {
						this.suggester.classList.remove("active");
						var e = this.suggester.querySelector(".suggestions");
						e && (e.style.display = "none"), this.textarea.classList.remove("js-navigation-enable"), m.pop(this.suggester)
					}
				}
			}, {
				key: "search",
				value: function() {
					var e = ke(regeneratorRuntime.mark(function e(t, n, r) {
						var a, o, s, i;
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, t.search(this.suggestions, n, r);
								case 2:
									if (a = e.sent, o = a.element, s = a.results, !((s && Array.isArray(s) ? s.length : s) > 0 && o)) {
										e.next = 16;
										break
									}
									return i = o.cloneNode(!0), r && Array.isArray(s) && this.renderResults(i, s), this.suggester.innerHTML = "", this.suggester.appendChild(i), i.style.display = "block", m.focus(this.suggester), e.abrupt("return", !0);
								case 16:
									return e.abrupt("return", !1);
								case 17:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function(t, n, r) {
						return e.apply(this, arguments)
					}
				}()
			}, {
				key: "searchQuery",
				value: function() {
					var e = this.textarea.selectionEnd,
						t = this.textarea.value.substring(0, e);
					if (!this.disable || !this.disable(t))
						for (var n in this.types) {
							var r = this.types[n],
								a = t.match(r.match);
							if (a) return r.normalizeMatch ? r.normalizeMatch(r, e, a) : this.normalizeMatch(r, e, a)
						}
				}
			}, {
				key: "normalizeMatch",
				value: function(e, t, n) {
					var r = n[2];
					return {
						type: e,
						text: r,
						query: n[3],
						startIndex: t - r.length,
						endIndex: t
					}
				}
			}, {
				key: "loadSuggestions",
				value: function() {
					var e = ke(regeneratorRuntime.mark(function e() {
						var t, n, r;
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (!this.suggestions.hasChildNodes()) {
										e.next = 2;
										break
									}
									return e.abrupt("return");
								case 2:
									if (t = this.suggester.getAttribute("data-url")) {
										e.next = 5;
										break
									}
									return e.abrupt("return");
								case 5:
									return n = Dn[t] || (Dn[t] = p.fetchText(t)), e.next = 8, n;
								case 8:
									return r = e.sent, e.abrupt("return", this.onSuggestionsLoaded(r));
								case 10:
								case "end":
									return e.stop()
							}
						}, e, this)
					}));
					return function() {
						return e.apply(this, arguments)
					}
				}()
			}, {
				key: "onSuggestionsLoaded",
				value: function(e) {
					var t = C.parseHTML(document, e);
					if (this.suggestions.appendChild(t), document.activeElement === this.textarea) return this.currentSearch = null, this.checkQuery()
				}
			}]), e
		}(),
		Un = function() {
			function e(t) {
				Ee(this, e), this.container = t.container, this.selections = t.selections, this.inputWrap = t.inputWrap, this.input = t.input, this.suggestions = t.suggestions, this.tagTemplate = t.tagTemplate, this.form = this.input.closest("form"), this.delayTimer = null
			}
			return Te(e, [{
				key: "setup",
				value: function() {
					var e = this;
					this.container.addEventListener("click", function(t) {
						c(t.target, HTMLElement).matches(".js-remove") ? e.removeTag(t) : e.onFocus()
					}), this.input.addEventListener("focus", this.onFocus.bind(this)), this.input.addEventListener("blur", this.onBlur.bind(this)), this.input.addEventListener("keydown", this.onKeyDown.bind(this)), this.form.addEventListener("submit", this.onSubmit.bind(this)), this.setupSuggester()
				}
			}, {
				key: "setupSuggester",
				value: function() {
					var e = this.suggestions.cloneNode(!0);
					this.container.appendChild(e), this.suggester = new Bn({
						input: this.input,
						suggester: this.suggestions,
						suggestions: e,
						repositionManually: !0,
						teardownManually: !0,
						onActivate: this.repositionSuggester.bind(this),
						types: {
							tag: {
								match: /.+/i,
								onSelection: this.selectTag.bind(this),
								search: this.filterSuggestions.bind(this),
								normalizeMatch: this.normalizeSuggestionMatch.bind(this)
							}
						}
					}), this.suggester.setup(), this.container.classList.add("js-suggester-container"), this.suggestions.classList.add("js-navigation-container", "suggester")
				}
			}, {
				key: "onFocus",
				value: function() {
					this.inputWrap.classList.add("focus"), this.input !== document.activeElement && this.input.focus()
				}
			}, {
				key: "onBlur",
				value: function() {
					this.inputWrap.classList.remove("focus"), this.isSuggesterVisible() || this.onSubmit()
				}
			}, {
				key: "onSubmit",
				value: function() {
					this.val() && (this.selectTag(this.val()), this.suggester.deactivate())
				}
			}, {
				key: "onKeyDown",
				value: function(e) {
					switch (x(e)) {
						case "Backspace":
							this.onBackspace();
							break;
						case "Enter":
						case "Tab":
							this.taggifyValueWhenSuggesterHidden(e);
							break;
						case ",":
						case " ":
							this.taggifyValue(e)
					}
				}
			}, {
				key: "taggifyValueWhenSuggesterHidden",
				value: function(e) {
					!this.isSuggesterVisible() && this.val() && (e.preventDefault(), this.selectTag(this.val()))
				}
			}, {
				key: "taggifyValue",
				value: function(e) {
					this.val() && (e.preventDefault(), this.selectTag(this.val()), this.suggester.deactivate())
				}
			}, {
				key: "selectTag",
				value: function(e) {
					var t = this.normalizeTag(e),
						n = this.selectedTags();
					t && n.indexOf(t) < 0 && (this.selections.appendChild(this.templateTag(t)), this.input.value = "", i.fire(this.form, "tags:changed"))
				}
			}, {
				key: "removeTag",
				value: function(e) {
					var t = c(e.target, HTMLElement);
					e.preventDefault(), a.closest(t, ".js-tag-input-tag").remove(), i.fire(this.form, "tags:changed")
				}
			}, {
				key: "templateTag",
				value: function(e) {
					var t = this.tagTemplate.cloneNode(!0);
					return a.query(t, "input", HTMLInputElement).value = e, a.query(t, ".js-placeholder-tag-name").replaceWith(e), t.classList.remove("d-none", "js-template"), t
				}
			}, {
				key: "normalizeTag",
				value: function(e) {
					return e.toLowerCase().trim().replace(/[\s,']+/g, "-")
				}
			}, {
				key: "onBackspace",
				value: function() {
					if (!this.val()) {
						var e = this.selections.querySelector("li:last-child .js-remove");
						e && e.click()
					}
				}
			}, {
				key: "val",
				value: function() {
					return this.input.value
				}
			}, {
				key: "repositionSuggester",
				value: function(e) {
					e.style.position = "absolute", e.style.top = this.container.clientHeight + "px"
				}
			}, {
				key: "filterSuggestions",
				value: function(e, n) {
					var r = this,
						o = a.query(e, ".js-tag-suggestions", HTMLElement);
					if (o.hasAttribute("data-url")) return new Promise(function(e) {
						null !== r.delayTimer && clearTimeout(r.delayTimer), r.delayTimer = setTimeout(ke(regeneratorRuntime.mark(function s() {
							var i, c, u, l, d;
							return regeneratorRuntime.wrap(function(s) {
								for (;;) switch (s.prev = s.next) {
									case 0:
										if (!(r.input.value.trim().length < 1) && o) {
											s.next = 2;
											break
										}
										return s.abrupt("return", e({
											element: o,
											results: 0
										}));
									case 2:
										return i = o.getAttribute("data-url"), t(i, "null.js:304"), c = new URL(i, window.location.origin), (u = new URLSearchParams(c.search.slice(1))).append("q", n), c.search = u.toString(), s.next = 10, p.fetchSafeDocumentFragment(document, c);
									case 10:
										if (l = s.sent, !(r.input.value.trim().length < 1)) {
											s.next = 13;
											break
										}
										return s.abrupt("return", e({
											element: o,
											results: 0
										}));
									case 13:
										o.innerHTML = "", o.appendChild(l), d = a.querySelectorAll(o, "li", HTMLLIElement).length, e({
											element: o,
											results: d
										});
									case 17:
									case "end":
										return s.stop()
								}
							}, s, r)
						})), 300)
					});
					var s = this.selectedTags(),
						i = Yt(o, n, {
							limit: 5,
							score: function(e, t) {
								return s.indexOf(e) >= 0 ? 0 : s.indexOf(r.normalizeTag(e)) >= 0 ? 0 : Bt(e, t)
							}
						});
					return Promise.resolve({
						element: o,
						results: i
					})
				}
			}, {
				key: "normalizeSuggestionMatch",
				value: function(e, t, n) {
					return {
						type: e,
						text: n[0],
						query: n[0]
					}
				}
			}, {
				key: "selectedTags",
				value: function() {
					var e = a.querySelectorAll(this.selections, "input", HTMLInputElement);
					return Array.from(e).map(function(e) {
						return e.value
					}).filter(function(e) {
						return e.length > 0
					})
				}
			}, {
				key: "isSuggesterVisible",
				value: function() {
					return !!this.suggestions.offsetParent
				}
			}]), e
		}();
	s.observe(".js-tag-input-container", function(e) {
		new Un({
			container: e,
			inputWrap: e.querySelector(".js-tag-input-wrapper"),
			input: e.querySelector('input[type="text"]'),
			suggestions: e.querySelector(".js-tag-input-options"),
			selections: e.querySelector(".js-tag-input-selected-tags"),
			tagTemplate: e.querySelector(".js-template")
		}).setup()
	});
	var zn = function() {
		var e = ke(regeneratorRuntime.mark(function e(n) {
			var r, a, o, s, i, c, u, l, d, m, f, v, h;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						if (r = n.currentTarget, t(r instanceof HTMLElement, "null.js:10"), a = r.getAttribute("data-url")) {
							e.next = 5;
							break
						}
						return e.abrupt("return");
					case 5:
						for (o = p.fetchJSON(a), s = r.getAttribute("data-id"), t(s, "null.js:17"), i = document.querySelectorAll(".js-team-mention[data-id='" + s + "']"), c = !0, u = !1, l = void 0, e.prev = 12, d = i[Symbol.iterator](); !(c = (m = d.next()).done); c = !0) m.value.removeAttribute("data-url");
						e.next = 20;
						break;
					case 16:
						e.prev = 16, e.t0 = e.catch(12), u = !0, l = e.t0;
					case 20:
						e.prev = 20, e.prev = 21, !c && d.return && d.return();
					case 23:
						if (e.prev = 23, !u) {
							e.next = 26;
							break
						}
						throw l;
					case 26:
						return e.finish(23);
					case 27:
						return e.finish(20);
					case 28:
						return e.prev = 28, e.next = 31, o;
					case 31:
						0 === (f = e.sent).total ? f.members.push("This team has no members") : f.total > f.members.length && f.members.push(f.total - f.members.length + " more"), Wn(i, Vn(f.members)), e.next = 42;
						break;
					case 36:
						e.prev = 36, e.t1 = e.catch(28), v = e.t1.response ? e.t1.response.status : 500, h = r.getAttribute(404 === v ? "data-permission-text" : "data-error-text"), t(h, "null.js:35"), Wn(i, h);
					case 42:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[12, 16, 20, 28],
				[21, , 23, 27],
				[28, 36]
			])
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}();

	function Wn(e, t) {
		var n = !0,
			r = !1,
			a = void 0;
		try {
			for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
				var i = o.value;
				i.setAttribute("aria-label", t), i.classList.add("tooltipped", "tooltipped-s", "tooltipped-multiline")
			}
		} catch (e) {
			r = !0, a = e
		} finally {
			try {
				!n && s.return && s.return()
			} finally {
				if (r) throw a
			}
		}
	}

	function Vn(e) {
		if (0 === e.length) return "";
		if (1 === e.length) return e[0];
		if (2 === e.length) return e.join(" and ");
		var t = e[e.length - 1];
		return e.slice(0, -1).concat("and " + t).join(", ")
	}

	function $n(e) {
		return new Promise(function(t) {
			function n() {
				e.hasFocus() && (t(), e.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n), window.removeEventListener("blur", n))
			}
			e.addEventListener("visibilitychange", n), window.addEventListener("focus", n), window.addEventListener("blur", n), n()
		})
	}
	s.observe(".js-team-mention", function(e) {
		e.addEventListener("mouseenter", zn)
	});
	var Jn = 0,
		Kn = -1;

	function Gn(e) {
		var t = e.getBoundingClientRect(),
			n = window.innerHeight,
			r = window.innerWidth;
		if (0 === t.height) return !1;
		if (t.height < n) return t.top >= 0 && t.left >= 0 && t.bottom <= n && t.right <= r;
		var a = Math.ceil(n / 2);
		return t.top >= 0 && t.top + a < n
	}

	function Yn(e) {
		var t = !0,
			n = !1,
			r = void 0;
		try {
			for (var a, o = e.elements[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
				var s = a.value;
				Gn(s) ? e.in.call(s, s, e) : e.out && e.out.call(s, s, e)
			}
		} catch (e) {
			n = !0, r = e
		} finally {
			try {
				!t && o.return && o.return()
			} finally {
				if (n) throw r
			}
		}
	}

	function Xn(e, t) {
		var n = {
			id: Jn++,
			selector: e,
			in: t,
			out: null,
			elements: [],
			checkPending: !1,
			scrollHandler: function() {
				! function(e) {
					document.hasFocus() && window.scrollY !== Kn && (Kn = window.scrollY, e.checkPending || (e.checkPending = !0, window.requestAnimationFrame(function() {
						e.checkPending = !1, Yn(e)
					})))
				}(n)
			}
		};
		s.observe(e, {
			add: function(e) {
				! function(e, t) {
					0 === t.elements.length && (window.addEventListener("scroll", t.scrollHandler, {
						capture: !0,
						passive: !0
					}), $n(document).then(function() {
						return Yn(t)
					})), t.elements.push(e)
				}(e, n)
			},
			remove: function(e) {
				! function(e, t) {
					var n = t.elements.indexOf(e); - 1 !== n && t.elements.splice(n, 1), 0 === t.elements.length && window.removeEventListener("scroll", t.scrollHandler, {
						capture: !0,
						passive: !0
					})
				}(e, n)
			}
		})
	}
	var Qn = 0;

	function Zn(e) {
		return e.classList.remove("js-unread-item", "unread-item")
	}
	Xn(".js-unread-item", function(e) {
		Zn(e)
	}), s.observe(".js-unread-item", {
		add: function() {
			Qn++
		},
		remove: function() {
			0 === --Qn && function() {
				if (document.hasFocus()) {
					var e = document.querySelector(".js-timeline-marker-form");
					e && e instanceof HTMLFormElement && d.submit(e)
				}
			}()
		}
	}), i.on("socket:message", ".js-discussion", function(e) {
		if (e.currentTarget === e.target) {
			var t = !0,
				n = !1,
				r = void 0;
			try {
				for (var a, o = document.querySelectorAll(".js-unread-item")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
					Zn(a.value)
				}
			} catch (e) {
				n = !0, r = e
			} finally {
				try {
					!t && o.return && o.return()
				} finally {
					if (n) throw r
				}
			}
		}
	});
	var er = 0,
		tr = /^\(\d+\)\s+/;

	function nr() {
		var e = er ? "(" + er + ") " : "";
		document.title.match(tr) ? document.title = document.title.replace(tr, e) : document.title = "" + e + document.title
	}

	function rr() {
		if (!document.querySelector(":target")) {
			var e = I.decodeFragmentValue(location.hash),
				t = I.findElementByFragmentName(document, "user-content-" + e);
			t && t.scrollIntoView()
		}
	}

	function ar(e) {
		return e.target.classList.remove("will-transition-once")
	}
	s.observe(".js-unread-item", {
		add: function() {
			er++, nr()
		},
		remove: function() {
			er--, nr()
		}
	}), window.addEventListener("hashchange", rr), document.addEventListener("pjax:success", rr), i.on("click", "a[href]", function(e) {
		this.href === location.href && location.hash.length > 1 && setTimeout(function() {
			e.defaultPrevented || rr()
		})
	}), n.ready.then(rr), s.observe(".will-transition-once", {
		add: function(e) {
			e.addEventListener("transitionend", ar)
		},
		remove: function(e) {
			e.removeEventListener("transitionend", ar)
		}
	});
	var or = new v;

	function sr(e) {
		var t = e.getAttribute("data-item-name") || "items",
			n = parseInt(e.getAttribute("data-item-minimum")) || 0,
			r = parseInt(e.getAttribute("data-item-count")) || 0,
			a = Math.max(n, parseInt(e.value) || 0),
			o = a > 300,
			s = document.querySelector(".js-purchase-button");
		s instanceof HTMLButtonElement && (s.disabled = 0 === a || o);
		var i = document.querySelector(".js-downgrade-button");
		i instanceof HTMLButtonElement && (i.disabled = a === r);
		var c = new URL(e.getAttribute("data-url"), window.location.origin),
			u = new URLSearchParams(c.search.slice(1));
		u.append(t, a.toString()), c.search = u.toString(), or.push(p.fetchJSON(c)).then(function(e) {
			var t = document.querySelector(".js-contact-us");
			t && t.classList.toggle("d-none", !o);
			var n = document.querySelector(".js-payment-summary");
			n && n.classList.toggle("d-none", o);
			var r = document.querySelector(".js-billing-section");
			r && r.classList.toggle("has-removed-contents", e.free);
			var s = document.querySelector(".js-upgrade-info");
			s && s.classList.toggle("d-none", a <= 0);
			var i = document.querySelector(".js-downgrade-info");
			i && i.classList.toggle("d-none", a >= 0);
			var c = document.querySelector(".js-extra-seats-line-item");
			c && c.classList.toggle("d-none", e.no_additional_seats);
			var u = e.selectors;
			for (var l in u) {
				var d = !0,
					m = !1,
					f = void 0;
				try {
					for (var v, p = document.querySelectorAll(l)[Symbol.iterator](); !(d = (v = p.next()).done); d = !0) {
						var g = v.value;
						g.textContent = u[l]
					}
				} catch (e) {
					m = !0, f = e
				} finally {
					try {
						!d && p.return && p.return()
					} finally {
						if (m) throw f
					}
				}
			}
			return h.replaceState(_.getState(), "", e.url)
		})
	}
	s.observe(".js-addon-purchase-field", function(e) {
		q(e) && sr(e), f.addThrottledInputEventListener(e, function() {
			sr(e)
		})
	}), s.observe(".js-addon-downgrade-field", function(e) {
		q(e) && sr(e), e.addEventListener("change", function() {
			sr(e)
		})
	}), s.observe(".js-repo-health", function(e) {
		var t = a.closest(e, "form", HTMLFormElement),
			n = a.query(t, ".js-comment-field", HTMLTextAreaElement),
			r = a.query(t, ".js-repo-name", HTMLInputElement);

		function o() {
			! function(e, t, n) {
				var r = a.query(document, ".js-repo-health-check", HTMLFormElement);
				a.query(r, ".js-repo-health-name", HTMLInputElement).value = n, e.classList.remove("d-none"), e.classList.add("is-loading"), t.setCustomValidity("checking"), i.fire(t, "change"), p.fetchSafeDocumentFragment(document, r.action, {
					method: "POST",
					body: new FormData(r)
				}).then(function(n) {
					var r = a.query(e, ".js-repo-health-results");
					r.innerHTML = "", r.appendChild(n), e.classList.remove("is-loading"), t.setCustomValidity(""), i.fire(t, "change")
				})
			}(e, n, r.value)
		}
		"hidden" === r.type ? n.addEventListener("focus", o) : r.addEventListener("change", o)
	});
	var ir = null,
		cr = 300,
		ur = [".", ".", "."],
		lr = 0,
		dr = new WeakMap;

	function mr() {
		var e = a.query(document, ".js-audit-log-export-status");
		return dr.set(e, e.textContent), ir = setInterval(function() {
			var t = ur.slice(0, lr).join("");
			e.textContent = "Exporting" + t, lr >= 3 ? lr = 0 : lr += 1
		}, cr), a.query(document, ".js-audit-log-export-button").classList.add("disabled")
	}

	function fr() {
		a.query(document, ".js-audit-log-export-button").classList.remove("disabled");
		var e = a.query(document, ".js-audit-log-export-status");
		e.textContent = dr.get(e) || "", null !== ir && clearInterval(ir), lr = 0
	}

	function vr() {
		fr();
		var e = document.getElementById("ajax-error-message");
		e && e.classList.add("visible")
	}
	l.remoteForm(".js-audit-log-export-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, a;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return mr(), r = void 0, e.prev = 2, e.next = 5, n.json();
					case 5:
						r = e.sent, e.next = 12;
						break;
					case 8:
						return e.prev = 8, e.t0 = e.catch(2), vr(), e.abrupt("return");
					case 12:
						return a = r.json, e.prev = 13, e.next = 16, p.fetchPoll(a.job_url);
					case 16:
						e.next = 22;
						break;
					case 18:
						return e.prev = 18, e.t1 = e.catch(13), vr(), e.abrupt("return");
					case 22:
						t = a.export_url, fr(), window.location = t;
					case 23:
					case "end":
						return e.stop()
				}
				var t
			}, e, this, [
				[2, 8],
				[13, 18]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), i.on("navigation:open", ".audit-search-form .js-suggester", function(e) {
		var t = c(e.currentTarget.closest("form"), HTMLFormElement);
		d.submit(t)
	});
	var pr = null,
		hr = new v;

	function gr(e) {
		var n = e.form;
		t(n, "null.js:44");
		var r = a.closest(n, ".js-branches"),
			o = r.querySelectorAll(".js-branches-subnav .js-subnav-item"),
			s = r.querySelector(".js-branches-subnav .js-subnav-item.selected"),
			i = a.query(r, ".js-branches-subnav .js-branches-all"),
			c = n.getAttribute("data-results-container");
		pr || (pr = s);
		var u = e.value.trim().length > 0,
			l = function(e) {
				var n = e.form;
				if (t(n, "null.js:23"), e.value.trim()) {
					var r = new URL(n.action, window.location.origin),
						a = new URLSearchParams(r.search.slice(1)),
						o = n.elements.namedItem("utf8");
					return o instanceof HTMLInputElement && a.append("utf8", o.value), a.append("query", e.value), r.search = a.toString(), r.toString()
				}
				var s = n.getAttribute("data-reset-url");
				return t(s, "null.js:38"), s
			}(e);

		function d() {
			r.classList.remove("is-loading")
		}
		hr.push(p.fetchSafeDocumentFragment(document, l)).then(function(e) {
			h.replaceState(null, "", l);
			var t = c ? document.getElementById(c) : null;
			t && (t.innerHTML = "", t.appendChild(e))
		}).then(d, d), r.classList.toggle("is-search-mode", u), r.classList.add("is-loading");
		var m = !0,
			f = !1,
			v = void 0;
		try {
			for (var g, y = o[Symbol.iterator](); !(m = (g = y.next()).done); m = !0) {
				g.value.classList.remove("selected")
			}
		} catch (e) {
			f = !0, v = e
		} finally {
			try {
				!m && y.return && y.return()
			} finally {
				if (f) throw v
			}
		}
		u ? i.classList.add("selected") : pr && (pr.classList.add("selected"), pr = null)
	}

	function yr(e) {
		var t = a.closest(e, ".js-branch-row").getAttribute("data-branch-name"),
			n = a.closest(e, ".js-branches").querySelectorAll(".js-branch-row");
		return Array.from(n).filter(function(e) {
			return e.getAttribute("data-branch-name") === t
		})
	}
	s.observe(".js-branch-search-field", function(e) {
		f.addThrottledInputEventListener(e, gr), e.addEventListener("keyup", function(t) {
			var n, r;
			"Escape" === x(t) && (r = (n = e).value.trim(), n.value = "", r && gr(n), e.blur())
		})
	}), i.on("submit", ".js-branch-search", function(e) {
		return e.preventDefault()
	}), i.on("click", ".js-clear-branch-search", function(e) {
		var n = c(e.currentTarget, HTMLButtonElement);
		t(n.form, "null.js:113");
		var r = a.query(n.form, ".js-branch-search-field", HTMLInputElement);
		r.focus(), r.value = "", i.fire(r, "input")
	}), l.remoteForm(".js-branch-destroy, .js-branch-restore", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s, i, c, u, l, d, m, f, v, p, h, g, y, b, j, L, w;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						for ((r = a.query(t, "button[type=submit]")).blur(), r.classList.remove("tooltipped"), o = yr(t), s = !0, i = !1, c = void 0, e.prev = 7, u = o[Symbol.iterator](); !(s = (l = u.next()).done); s = !0) l.value.classList.add("loading");
						e.next = 15;
						break;
					case 11:
						e.prev = 11, e.t0 = e.catch(7), i = !0, c = e.t0;
					case 15:
						e.prev = 15, e.prev = 16, !s && u.return && u.return();
					case 18:
						if (e.prev = 18, !i) {
							e.next = 21;
							break
						}
						throw c;
					case 21:
						return e.finish(18);
					case 22:
						return e.finish(15);
					case 23:
						return d = !1, e.prev = 24, e.next = 27, n.text();
					case 27:
						e.next = 33;
						break;
					case 29:
						e.prev = 29, e.t1 = e.catch(24), d = !0, location.reload();
					case 33:
						for (e.prev = 33, r.classList.add("tooltipped"), m = !0, f = !1, v = void 0, e.prev = 38, p = o[Symbol.iterator](); !(m = (h = p.next()).done); m = !0) h.value.classList.remove("loading");
						e.next = 46;
						break;
					case 42:
						e.prev = 42, e.t2 = e.catch(38), f = !0, v = e.t2;
					case 46:
						e.prev = 46, e.prev = 47, !m && p.return && p.return();
					case 49:
						if (e.prev = 49, !f) {
							e.next = 52;
							break
						}
						throw v;
					case 52:
						return e.finish(49);
					case 53:
						return e.finish(46);
					case 54:
						return e.finish(33);
					case 55:
						if (d) {
							e.next = 76;
							break
						}
						for (g = t.classList.contains("js-branch-destroy"), y = !0, b = !1, j = void 0, e.prev = 60, L = o[Symbol.iterator](); !(y = (w = L.next()).done); y = !0) w.value.classList.toggle("is-deleted", g);
						e.next = 68;
						break;
					case 64:
						e.prev = 64, e.t3 = e.catch(60), b = !0, j = e.t3;
					case 68:
						e.prev = 68, e.prev = 69, !y && L.return && L.return();
					case 71:
						if (e.prev = 71, !b) {
							e.next = 74;
							break
						}
						throw j;
					case 74:
						return e.finish(71);
					case 75:
						return e.finish(68);
					case 76:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[7, 11, 15, 23],
				[16, , 18, 22],
				[24, 29, 33, 55],
				[38, 42, 46, 54],
				[47, , 49, 53],
				[60, 64, 68, 76],
				[69, , 71, 75]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}());
	var br = function() {
			var e = ke(regeneratorRuntime.mark(function e(t) {
				var n, r, a, o, s, i, c, u, l;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return n = t.target, r = n.querySelector(".js-bulk-actions"), a = Array.from(n.querySelectorAll(".js-bulk-actions-toggle:checked")), o = a.map(function(e) {
								return e.closest(".js-bulk-actions-item").getAttribute("data-bulk-actions-id")
							}).sort(), s = n.getAttribute("data-bulk-actions-url"), i = n.getAttribute("data-bulk-actions-parameter"), c = o.map(function(e) {
								return i + "[]=" + e
							}).join("&"), u = s + "?" + c, e.next = 10, jr.push(p.fetchText(u));
						case 10:
							l = e.sent, 0 === a.length ? (r.innerHTML = l, Lr(n)) : (Lr(n), r.innerHTML = l);
						case 12:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}(),
		jr = new v;

	function Lr(e) {
		var t = document.querySelector(".js-membership-tabs");
		if (t) {
			var n = e.querySelectorAll(".js-bulk-actions-toggle:checked");
			t.classList.toggle("d-none", n.length > 0)
		}
	}
	i.on("change", ".js-bulk-actions-toggle", function(e) {
		var t = e.currentTarget,
			n = a.closest(t, ".js-bulk-actions-container");
		i.fire(n, "bulk-actions:update")
	}), i.on("bulk-actions:update", ".js-bulk-actions-container", u(br, 100)), top !== window && (alert("For security reasons, framing is not allowed."), top.location.replace(document.location));
	var wr = /\bChrome\//.test(navigator.userAgent) && !/\bEdge\//.test(navigator.userAgent),
		xr = /Macintosh.*Safari/.test(navigator.userAgent),
		kr = void 0,
		Er = !1;

	function Tr() {
		kr = document.activeElement, document.body && (wr || xr) && document.body.classList.toggle("intent-mouse", Er)
	}
	document.addEventListener("mousedown", function() {
		Er = !0, kr === document.activeElement && Tr()
	}, {
		capture: !0
	}), document.addEventListener("keydown", function() {
		Er = !1
	}, {
		capture: !0
	}), document.addEventListener("focusin", Tr, {
		capture: !0
	}), i.on("click", ".js-new-user-contrib-example", function() {
		var e = ke(regeneratorRuntime.mark(function e(n) {
			var r, o, s, i, c;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						if (!(r = a.query(document, ".js-calendar-graph")).classList.contains("sample-graph")) {
							e.next = 3;
							break
						}
						return e.abrupt("return");
					case 3:
						return r.classList.add("sample-graph"), o = n.currentTarget.getAttribute("data-url"), t(o, "null.js:16"), s = void 0, e.prev = 7, e.next = 10, p.fetchText(o);
					case 10:
						s = e.sent, e.next = 17;
						break;
					case 13:
						return e.prev = 13, e.t0 = e.catch(7), r.classList.remove("sample-graph"), e.abrupt("return");
					case 17:
						(i = document.createElement("div")).innerHTML = s, c = r.querySelector(".js-calendar-graph-svg"), t(c, "null.js:33"), c.replaceWith(i.children[0]);
					case 22:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[7, 13]
			])
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}()), i.on("click", ".js-open-check-run-summary", function() {
		var e = ke(regeneratorRuntime.mark(function e(n) {
			var r, o, s, i, c;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = a.closest(n.currentTarget, ".js-checks-index-item"), (o = a.query(document, ".js-checks-index-selected-item")).classList.remove("selected"), o.classList.remove("js-checks-index-selected-item"), r.classList.add("selected"), r.classList.add("js-checks-index-selected-item"), s = n.currentTarget.getAttribute("data-check-run-url"), t(s, "null.js:19"), i = a.query(document, ".js-check-run-summary-container"), e.next = 11, p.fetchSafeDocumentFragment(document, s);
					case 11:
						c = e.sent, i.innerHTML = "", i.append(c);
					case 14:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}());
	var Sr = {}.hasOwnProperty,
		qr = [].slice;

	function Ar(e) {
		if (console && console.warn) return console.warn(e)
	}
	var Mr = {
		host: "collector.githubapp.com",
		type: "page_view",
		dimensions: {},
		measures: {},
		context: {},
		actor: {},
		image: new Image,
		performance: {},
		expectedPerformanceTimingKeys: ["connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart"],
		recordPageView: function() {
			return this.applyMetaTags(), null != this.app && (null == this.host ? (Ar("Host not set, you are doing something wrong"), !1) : (this.image.src = this._src(), this._clearPerformance(), !0))
		},
		setHost: function(e) {
			this.host = e
		},
		setApp: function(e) {
			this.app = e
		},
		setDimensions: function(e) {
			this.dimensions = e
		},
		addDimensions: function(e) {
			var t = void 0;
			null == this.dimensions && (this.dimensions = {});
			var n = [];
			for (t in e)
				if (Sr.call(e, t)) {
					var r = e[t];
					n.push(this.dimensions[t] = r)
				}
			return n
		},
		setMeasures: function(e) {
			this.measures = e
		},
		addMeasures: function(e) {
			var t = void 0;
			null == this.measures && (this.measures = {});
			var n = [];
			for (t in e)
				if (Sr.call(e, t)) {
					var r = e[t];
					n.push(this.measures[t] = r)
				}
			return n
		},
		setContext: function(e) {
			this.context = e
		},
		addContext: function(e) {
			var t = void 0;
			null == this.context && (this.context = {});
			var n = [];
			for (t in e)
				if (Sr.call(e, t)) {
					var r = e[t];
					n.push(this.context[t] = r)
				}
			return n
		},
		setActor: function(e) {
			this.actor = e
		},
		push: function(e) {
			return this.applyCall(e)
		},
		enablePerformance: function() {
			this.performance = this._performanceTiming()
		},
		_recordSrc: function(e, t, n, r) {
			return "//" + this.host + "/" + this.app + "/" + e + "?" + this._queryString(t, n, r)
		},
		_src: function() {
			return "//" + this.host + "/" + this.app + "/" + this.type + "?" + this._queryString()
		},
		_queryString: function(e, t, n) {
			var r = void 0,
				a = void 0,
				o = function() {
					var e = this._params(),
						t = [];
					for (r in e) a = e[r], t.push("dimensions[" + r + "]=" + a);
					return t
				}.call(this);
			return o.push(this._encodeObject("dimensions", this._merge(this.dimensions, e))), o.push(this._encodeObject("measures", this._merge(this.measures, t))), null != this.performance && o.push(this._encodeObject("measures", {
				performance_timing: this.performance
			})), o.push(this._encodeObject("context", this._merge(this.context, n))), o.push(this._actor()), o.push(this._encodeObject("dimensions", {
				cid: this._clientId()
			})), o.join("&")
		},
		_clearPerformance: function() {
			this.performance = null
		},
		_performanceTiming: function() {
			var e, t = void 0,
				n = void 0;
			if (null == window.performance || null == window.performance.timing || null == window.performance.timing.navigationStart) return null;
			var r = {},
				a = this.expectedPerformanceTimingKeys;
			for (t = 0, e = a.length; t < e; t++) {
				var o = a[t];
				r[o] = null != (n = window.performance.timing[o]) ? n : 0
			}
			var s = [],
				i = r.navigationStart;
			for (var c in r) {
				var u = r[c],
					l = 0 === u ? null : u - i;
				s.push(l)
			}
			return "1-" + s.join("-")
		},
		_params: function() {
			return {
				page: this._encode(this._page()),
				title: this._encode(this._title()),
				referrer: this._encode(this._referrer()),
				user_agent: this._encode(this._agent()),
				screen_resolution: this._encode(this._screenResolution()),
				pixel_ratio: this._encode(this._pixelRatio()),
				browser_resolution: this._encode(this._browserResolution()),
				tz_seconds: this._encode(this._tzSeconds()),
				timestamp: (new Date).getTime()
			}
		},
		_page: function() {
			try {
				return document.location.href
			} catch (e) {}
		},
		_title: function() {
			try {
				return document.title
			} catch (e) {}
		},
		_referrer: function() {
			var e = void 0;
			e = "";
			try {
				e = window.top.document.referrer
			} catch (t) {
				if (window.parent) try {
					e = window.parent.document.referrer
				} catch (e) {}
			}
			return "" === e && (e = document.referrer), e
		},
		_agent: function() {
			try {
				return navigator.userAgent
			} catch (e) {}
		},
		_screenResolution: function() {
			try {
				return screen.width + "x" + screen.height
			} catch (e) {
				return "unknown"
			}
		},
		_pixelRatio: function() {
			return window.devicePixelRatio
		},
		_browserResolution: function() {
			var e = void 0,
				t = void 0;
			try {
				return t = 0, e = 0, "number" == typeof window.innerWidth ? (t = window.innerWidth, e = window.innerHeight) : null != document.documentElement && null != document.documentElement.clientWidth ? (t = document.documentElement.clientWidth, e = document.documentElement.clientHeight) : null != document.body && null != document.body.clientWidth && (t = document.body.clientWidth, e = document.body.clientHeight), t + "x" + e
			} catch (e) {
				return "unknown"
			}
		},
		_tzSeconds: function() {
			try {
				return -60 * (new Date).getTimezoneOffset()
			} catch (e) {
				return ""
			}
		},
		_merge: function() {
			var e, t = void 0,
				n = void 0,
				r = 1 <= arguments.length ? qr.call(arguments, 0) : [],
				a = {};
			for (t = 0, e = r.length; t < e; t++) {
				var o = r[t];
				for (n in o) {
					var s = o[n];
					a[n] = s
				}
			}
			return a
		},
		_encodeObject: function(e, t) {
			var n = void 0,
				r = void 0,
				a = void 0,
				o = [];
			if (null != Array.isArray && Array.isArray(t) || "[object Array]" === Object.prototype.toString.call(t))
				for (n = 0, r = t.length; n < r; n++) {
					var s = t[n];
					o.push(this._encodeObject(e + "[]", s))
				} else if (t === Object(t))
					for (a in t) o.push(this._encodeObject(e + "[" + a + "]", t[a]));
				else o.push(e + "=" + this._encode(t));
			return o.join("&")
		},
		_actor: function() {
			var e = void 0,
				t = void 0,
				n = void 0,
				r = [],
				a = this.actor;
			for (t in a) {
				var o = a[t],
					s = "dimensions[actor_" + t + "]";
				if (o.join)
					for (e = 0, n = o.length; e < n; e++) {
						var i = o[e];
						r.push(s + "[]=" + this._encode(i))
					} else r.push(s + "=" + this._encode(o))
			}
			return r.join("&")
		},
		_getCookie: function(e) {
			var t, n = void 0,
				r = [],
				a = document.cookie.split(";");
			for (n = 0, t = a.length; n < t; n++) {
				var o = a[n].trim().split("=");
				if (!(o.length < 2)) {
					var s = o[0],
						i = o[1];
					s === e && r.push({
						key: s,
						value: i
					})
				}
			}
			return r
		},
		_clientId: function() {
			var e = void 0;
			return "" === (e = this._getClientId()) && (e = this._setClientId()), e
		},
		_getClientId: function() {
			var e, t = void 0,
				n = void 0,
				r = this._getCookie("_octo"),
				a = [];
			for (n = 0, e = r.length; n < e; n++) {
				var o = r[n].value.split(".");
				if ("GH1" === o.shift() && o.length > 1) {
					var s = o.shift().split("-");
					1 === s.length && (s[1] = "1"), s[0] *= 1, s[1] *= 1, t = o.join("."), a.push([s, t])
				}
			}
			return t = "", a.length > 0 && (t = a.sort().reverse()[0][1]), t
		},
		_setClientId: function() {
			var e = (new Date).getTime(),
				t = Math.round(Math.random() * (Math.pow(2, 31) - 1)) + "." + Math.round(e / 1e3),
				n = "GH1.1." + t,
				r = new Date(e + 63072e6).toUTCString(),
				a = document.domain;
			if (null == a) throw new Error("Unable to get document domain");
			var o = "." + a.split(".").reverse().slice(0, 2).reverse().join(".");
			return document.cookie = "_octo=" + n + "; expires=" + r + "; path=/; domain=" + o, t
		},
		_encode: function(e) {
			return null != e ? window.encodeURIComponent(e) : ""
		},
		applyQueuedCalls: function(e) {
			var t, n = void 0,
				r = [];
			for (n = 0, t = e.length; n < t; n++) {
				var a = e[n];
				r.push(this.applyCall(a))
			}
			return r
		},
		applyCall: function(e) {
			var t = e[0],
				n = e.slice(1);
			return this[t] ? this[t].apply(this, n) : Ar(t + " is not a valid method")
		},
		applyMetaTags: function() {
			var e = this.loadMetaTags();
			return e.host && this.setHost(e.host), e.app && this.setApp(e.app), this._objectIsEmpty(e.actor) || this.setActor(e.actor), this.addDimensions(e.dimensions), this.addMeasures(e.measures), this.addContext(e.context)
		},
		loadMetaTags: function() {
			var e, t = void 0,
				n = {
					dimensions: {},
					measures: {},
					context: {},
					actor: {}
				},
				r = document.getElementsByTagName("meta");
			for (t = 0, e = r.length; t < e; t++) {
				var a = r[t];
				if (a.name && a.content) {
					var o = a.name.match(this.octolyticsMetaTagName);
					if (o) switch (o[1]) {
						case "host":
							n.host = a.content;
							break;
						case "app-id":
						case "app":
							n.app = a.content;
							break;
						case "dimension":
							this._addField(n.dimensions, o[2], a);
							break;
						case "measure":
							this._addField(n.measures, o[2], a);
							break;
						case "context":
							this._addField(n.context, o[2], a);
							break;
						case "actor":
							this._addField(n.actor, o[2], a)
					}
				}
			}
			return n
		},
		_addField: function(e, t, n) {
			n.attributes["data-array"] ? (null == e[t] && (e[t] = []), e[t].push(n.content)) : e[t] = n.content
		},
		_objectIsEmpty: function(e) {
			var t = void 0;
			for (t in e)
				if (Sr.call(e, t)) return !1;
			return !0
		},
		octolyticsMetaTagName: /^octolytics-(host|app-id|app|dimension|measure|context|actor)-?(.*)/
	};
	if (window._octo) {
		if (window._octo.slice) {
			var Hr = window._octo.slice(0);
			window._octo = Mr, window._octo.applyQueuedCalls(Hr)
		}
	} else window._octo = Mr;

	function Cr(e) {
		var n = e.getAttribute("data-fieldname");
		return t("string" == typeof n, "null.js:12"), document.querySelectorAll('span[data-fieldname="' + n + '"]')
	}

	function Ir(e, t) {
		if (e.value) {
			var n = !0,
				r = !1,
				a = void 0;
			try {
				for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
					o.value.textContent = e.value
				}
			} catch (e) {
				r = !0, a = e
			} finally {
				try {
					!n && s.return && s.return()
				} finally {
					if (r) throw a
				}
			}
		}
	}
	o.onFocus(".js-template-form-input", function(e) {
		var t = c(e, HTMLInputElement),
			n = Cr(t);

		function r() {
			Ir(t, n)
		}

		function a(e) {
			var t = !0,
				r = !1,
				a = void 0;
			try {
				for (var o, s = n[Symbol.iterator](); !(t = (o = s.next()).done); t = !0) {
					o.value.classList.toggle("CommunityTemplate-highlight--focus", e)
				}
			} catch (e) {
				r = !0, a = e
			} finally {
				try {
					!t && s.return && s.return()
				} finally {
					if (r) throw a
				}
			}
		}
		a(!0), t.addEventListener("input", r), t.addEventListener("blur", function e() {
			a(!1), t.removeEventListener("input", r), t.removeEventListener("blur", e)
		})
	}), i.on("click", ".js-template-highlight", function(e) {
		var n, r;
		(n = e.currentTarget, r = n.getAttribute("data-fieldname"), t("string" == typeof r, "null.js:18"), a.query(document, 'input[data-fieldname="' + r + '"]', HTMLInputElement)).focus()
	}), s.observe(".js-templates", function() {
		var e = !0,
			t = !1,
			n = void 0;
		try {
			for (var r, o = a.querySelectorAll(document, ".js-template-form-input", HTMLInputElement)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
				var s = r.value;
				Ir(s, Cr(s))
			}
		} catch (e) {
			t = !0, n = e
		} finally {
			try {
				!e && o.return && o.return()
			} finally {
				if (t) throw n
			}
		}
	});

	function _r(e, t, n) {
		var r = a.query(n, ".js-commit-access-submit");
		r.textContent = "branch" === t ? "Create and update " + e : r.getAttribute("data-default") || ""
	}

	function Rr(e, t, n) {
		a.query(n, ".js-commit-access-input").classList.toggle("d-none", "branch" !== t), _r(e, t, n)
	}

	function Fr(e) {
		e.target.classList.contains("js-commit-access-radio") && Rr(a.query(e.currentTarget, ".js-commit-access-ref").value, e.target.value, e.currentTarget)
	}

	function Pr(e) {
		e.target.classList.contains("js-commit-access-ref-input") && (a.query(e.currentTarget, ".js-commit-access-submit", HTMLButtonElement).setAttribute("disabled", !0), Or())
	}
	var Or = u(ke(regeneratorRuntime.mark(function e() {
		var n, r, o, s, i, c, u, l, d, m, f, v;
		return regeneratorRuntime.wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					if (n = a.query(document, ".js-commit-access-container"), "" !== (r = a.query(n, ".js-commit-access-ref-input", HTMLInputElement)).value) {
						e.next = 4;
						break
					}
					return e.abrupt("return");
				case 4:
					return o = r.value, s = a.query(n, ".js-commit-access-ref", HTMLInputElement), i = r.getAttribute("data-check-url"), c = r.getAttribute("data-check-authenticity-token"), u = a.query(n, ".js-commit-access-result"), l = a.query(n, ".js-commit-access-submit", HTMLButtonElement), t(i, "null.js:51"), t(c, "null.js:52"), (d = new FormData).append("ref", o), d.append("authenticity_token", c), e.prev = 15, e.next = 18, p.fetchJSON(i, {
						method: "post",
						body: d
					});
				case 18:
					m = e.sent, f = m.message_html, v = m.normalized_ref, s.value = v, u.innerHTML = f, _r(v, "branch", n), l.removeAttribute("disabled"), e.next = 30;
					break;
				case 27:
					e.prev = 27, e.t0 = e.catch(15), u.innerHTML = "";
				case 30:
				case "end":
					return e.stop()
			}
		}, e, void 0, [
			[15, 27]
		])
	})), 300);

	function Nr(e) {
		var n = e.getAttribute("data-hydro-view"),
			r = e.getAttribute("data-hydro-view-hmac");
		t(n, "null.js:22"), t(r, "null.js:23"), We({
			hydroEventPayload: n,
			hydroEventHmac: r
		})
	}

	function Dr(e) {
		a.query(e.currentTarget, ".js-dismiss-repository-recommendation").classList.remove("d-none")
	}

	function Br(e) {
		a.query(e.currentTarget, ".js-dismiss-repository-recommendation").classList.add("d-none")
	}

	function Ur(e) {
		var t = e.currentTarget,
			n = a.query(t, ".js-hover-popover");
		if (n.classList.remove("d-none"), !n.hasAttribute("data-positioned")) {
			var r = n.clientHeight / 2 - t.clientHeight / 2,
				o = a.closest(n, ".js-hover-popover-container"),
				s = "-" + (n.clientWidth + 5) + "px";
			"left" === o.getAttribute("data-sidebar-position") ? n.style.right = s : n.style.left = s, n.style.top = "-" + r + "px", n.setAttribute("data-positioned", "")
		}
		n.classList.remove("v-hidden")
	}

	function zr(e) {
		var t = e.currentTarget,
			n = a.query(t, ".js-hover-popover");
		n.classList.add("v-hidden"), n.classList.add("d-none")
	}
	s.observe(".js-commit-access-container", {
		add: function(e) {
			e.addEventListener("change", Fr), e.addEventListener("keyup", Pr);
			var t = e.querySelector(".js-commit-access-radio:checked"),
				n = a.query(e, ".js-commit-access-ref-input");
			t ? Rr(n.value, t.value, e) : _r(n.value, "branch", e)
		},
		remove: function(e) {
			e.removeEventListener("change", Fr), e.removeEventListener("keyup", Pr)
		}
	}), i.on("click", "[data-hydro-click]", function(e) {
		var n = e.currentTarget,
			r = n.getAttribute("data-hydro-click"),
			a = n.getAttribute("data-hydro-click-hmac");
		t(r, "null.js:12"), t(a, "null.js:13"), We({
			hydroEventPayload: r,
			hydroEventHmac: a
		})
	}), s.observe(".js-dashboard-deferred-module-content", function(e) {
		p.fetchSafeDocumentFragment(document, e.getAttribute("data-src")).then(function(t) {
			e.replaceWith(t)
		})
	}), i.on("navigation:open", ".js-dashboard-content-options", function(e) {
		var n = e.target.getAttribute("data-src");
		t(n, "null.js:18");
		var r = document.createElement("div");
		r.classList.add("js-dashboard-deferred-module-content"), r.setAttribute("data-src", n), r.textContent = "Loading...";
		var a = e.target.closest(".js-dashboard-module");
		t(a, "null.js:25");
		var o = a.querySelector(".js-dashboard-content-container");
		t(o, "null.js:27"), o.innerHTML = "", o.appendChild(r)
	}), i.on("details:toggled", ".js-news-feed-event-group", function(e) {
		if (t(e instanceof CustomEvent, "null.js:34"), e.detail.open) {
			var n = e.currentTarget,
				r = !0,
				a = !1,
				o = void 0;
			try {
				for (var s, i = n.querySelectorAll("[data-hydro-view]")[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
					Nr(s.value)
				}
			} catch (e) {
				a = !0, o = e
			} finally {
				try {
					!r && i.return && i.return()
				} finally {
					if (a) throw o
				}
			}
		}
	}), Xn(".js-discover-repositories .js-ajax-pagination", function(e) {
		e.classList.contains("is-loading") || (e.classList.add("is-loading"), d.submit(c(e, HTMLFormElement)))
	}), s.observe(".js-repository-recommendation", {
		add: function(e) {
			e.addEventListener("mouseover", Dr), e.addEventListener("mouseout", Br)
		},
		remove: function(e) {
			e.removeEventListener("mouseover", Dr), e.removeEventListener("mouseout", Br)
		}
	}), l.remoteForm(".js-dismiss-repository-recommendation", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = a.closest(t, ".js-repository-recommendation-and-restore"), o = a.query(r, ".js-restore-repo-rec-container"), s = a.query(r, ".js-repository-recommendation"), e.next = 5, n.html();
					case 5:
						e.sent && (s.classList.add("d-none"), o.classList.remove("d-none"), o.style.display = "block");
					case 7:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-restore-repo-rec-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = a.closest(t, ".js-repository-recommendation-and-restore"), o = a.query(r, ".js-restore-repo-rec-container"), s = a.query(r, ".js-repository-recommendation"), e.next = 5, n.html();
					case 5:
						e.sent && (o.classList.add("d-none"), s.classList.remove("d-none"), s.style.display = "block");
					case 7:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), s.observe(".js-hover-popover-container", {
		add: function(e) {
			e.addEventListener("mouseover", Ur), e.addEventListener("mouseout", zr)
		},
		remove: function(e) {
			e.removeEventListener("mouseover", Ur), e.removeEventListener("mouseout", zr)
		}
	}), i.on("click", ".js-show-more-recent-items", function(e) {
		c(e.currentTarget, HTMLButtonElement).classList.add("d-none")
	});
	var Wr = function() {
			var e = ke(regeneratorRuntime.mark(function e(t) {
				var n, r, o, s;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return n = a.query(document, ".js-delegated-account-recovery-submit", HTMLButtonElement), r = a.query(document, ".js-create-recovery-token-form", HTMLFormElement), t.classList.remove("failed"), t.classList.add("loading"), n.disabled = !0, e.prev = 5, e.next = 8, p.fetchForm(r);
						case 8:
							return o = e.sent, e.next = 11, o.json();
						case 11:
							s = e.sent, d.fillFormValues(t, {
								token: s.token,
								state: s.state_url
							}), t.submit(), e.next = 21;
							break;
						case 16:
							e.prev = 16, e.t0 = e.catch(5), t.classList.remove("loading"), t.classList.add("failed"), n.disabled = !1;
						case 21:
						case "end":
							return e.stop()
					}
				}, e, this, [
					[5, 16]
				])
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}(),
		Vr = function() {
			var e = ke(regeneratorRuntime.mark(function e(n) {
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							t(n instanceof HTMLFormElement, "null.js:39"), n.submit();
						case 2:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}();
	i.on("submit", ".js-post-recovery-token", function(e) {
		e.preventDefault();
		var t = this;
		R("high").then(function() {
			Wr(t)
		})
	}), s.observe("form.js-recovery-provider-auto-redirect", {
		constructor: HTMLFormElement,
		initialize: function(e) {
			Vr(e)
		}
	}), i.on("click", ".js-sub-dependencies", function(e) {
		t(e.currentTarget instanceof HTMLElement, "null.js:9");
		var n = e.currentTarget,
			r = n.getAttribute("data-loaded"),
			a = n.querySelector(".js-expanded"),
			o = n.querySelector(".js-collapsed"),
			s = n.closest(".js-details-container");
		if (a && a.classList.toggle("d-none"), o && o.classList.toggle("d-none"), s && s.classList.toggle("bg-gray-light"), !r) {
			n.setAttribute("data-loaded", "true");
			var i = n.getAttribute("data-sub-dependency-url"),
				c = n.closest(".js-dependency");
			t(i, "null.js:24"), p.fetchSafeDocumentFragment(document, i).then(function(e) {
				c && c.after(e)
			})
		}
	});
	var $r = null;

	function Jr(e) {
		var t = e.currentTarget;
		t.hasAttribute("open") ? ($r && $r !== t && ($r.open = !1), $r = t) : t === $r && ($r = null)
	}

	function Kr(e) {
		var t = e.currentTarget.hasAttribute("open") ? "menu:activate" : "menu:deactivate";
		i.fire(e.currentTarget, t)
	}
	document.addEventListener("keydown", function(e) {
		"Escape" === e.key && $r && ($r.open = !1)
	}), s.observe(".js-dropdown-details", {
		add: function(e) {
			e.addEventListener("toggle", Jr)
		},
		remove: function(e) {
			e.removeEventListener("toggle", Jr)
		}
	}), s.observe("details.js-select-menu", {
		add: function(e) {
			e.addEventListener("toggle", Kr)
		},
		remove: function(e) {
			e.removeEventListener("toggle", Kr)
		}
	}), i.on("menu:deactivate", "details.js-select-menu", function(e) {
		e.currentTarget.hasAttribute("open") && e.currentTarget.removeAttribute("open")
	}), s.observe("[data-deferred-details-content-url]", function(e) {
		e.addEventListener("toggle", function(t) {
			var n = e.getAttribute("data-deferred-details-content-url");
			a.query(t.currentTarget, "include-fragment").src = n
		}, {
			once: !0
		})
	});
	var Gr = !1,
		Yr = [];

	function Xr() {
		Yr.length ? Gr || (window.addEventListener("resize", Qr, {
			passive: !0
		}), document.addEventListener("scroll", Qr, {
			passive: !0
		}), Gr = !0) : (window.removeEventListener("resize", Qr, {
			passive: !0
		}), document.removeEventListener("scroll", Qr, {
			passive: !0
		}), Gr = !1)
	}

	function Qr() {
		Yr.forEach(function(e) {
			if (e.element.offsetHeight > 0) {
				var t = e.element,
					n = e.placeholder,
					r = e.top,
					a = t.getBoundingClientRect();
				if (n) {
					var o = n.getBoundingClientRect();
					t.classList.contains("is-stuck") ? o.top > parseInt(r) ? ea(e) : function(e) {
						var t = e.element,
							n = e.placeholder,
							r = e.offsetParent,
							a = e.top;
						if (n) {
							var o = t.getBoundingClientRect(),
								s = n.getBoundingClientRect();
							if (t.style.left = s.left + "px", t.style.width = s.width + "px", r) {
								var i = r.getBoundingClientRect();
								i.bottom < o.height + parseInt(a) && (t.style.top = i.bottom - o.height + "px")
							}
						}
					}(e) : a.top <= parseInt(r) && Zr(e)
				} else a.top <= parseInt(r) ? Zr(e) : ea(e)
			}
		})
	}

	function Zr(e) {
		var t = e.element,
			n = e.placeholder,
			r = e.top;
		if (n) {
			var a = t.getBoundingClientRect();
			t.style.top = r.toString(), t.style.left = a.left + "px", t.style.width = a.width + "px", t.style.marginTop = "0", t.style.position = "fixed", n.style.display = "block"
		}
		t.classList.add("is-stuck")
	}

	function ea(e) {
		var t = e.element,
			n = e.placeholder;
		n && (t.style.position = "static", t.style.marginTop = n.style.marginTop, n.style.display = "none"), t.classList.remove("is-stuck")
	}

	function ta(e) {
		if (function(e) {
				var t = window.getComputedStyle(e).position;
				return /sticky/.test(t)
			}(e)) return null;
		var n = e.previousElementSibling;
		if (n && n.classList.contains("is-placeholder")) return t(n instanceof HTMLElement, "previousElement must be an HTMLElement -- null.js:129"), n;
		var r = document.createElement("div");
		return r.style.visibility = "hidden", r.style.display = "none", r.style.height = window.getComputedStyle(e).height, r.className = e.className, r.classList.remove("js-sticky"), r.classList.add("is-placeholder"), t(e.parentNode, "Element must be inserted into the dom -- null.js:142"), e.parentNode.insertBefore(r, e)
	}

	function na(e) {
		var t = e.ownerDocument;
		e.scrollIntoView(), t.defaultView.scrollBy(0, -ra(t))
	}

	function ra(e) {
		Qr();
		var t = e.querySelectorAll(".js-sticky-offset-scroll");
		return Math.max.apply(Math, He(Array.from(t).map(function(e) {
			var t = e.getBoundingClientRect(),
				n = t.top,
				r = t.height;
			return 0 === n ? r : 0
		})))
	}

	function aa(e) {
		var t = oa();
		if (t) {
			sa(e, t);
			var n = function(e, t) {
				var n = function(e, t) {
					var n = /^(diff-[0-9a-f]{32})(?:[L|R]\d+)?$/.exec(t);
					if (!n) return;
					var r = n[1],
						a = e.querySelector("a[name='" + r + "']");
					if (!a) return;
					var o = a.nextElementSibling;
					if (!o.querySelector(".js-diff-load-container")) return;
					return o
				}(e, t);
				if (n) return n;
				return function(e, t) {
					var n = /^(?:r|commitcomment-)(\d+)$/.exec(t);
					if (!n) return;
					var r = n[1],
						a = e.querySelector("#diff-with-comment-" + r);
					if (!a) return;
					return a.closest(".js-file")
				}(e, t)
			}(e, t);
			n && (na(n), ca(n))
		}
	}

	function oa() {
		return window.location.hash.slice(1)
	}

	function sa(e, t) {
		var n = I.findElementByFragmentName(e.ownerDocument, t);
		n && e.contains(n) && na(n)
	}

	function ia() {
		this.querySelector(".js-diff-progressive-spinner").classList.add("d-none"), this.querySelector(".js-diff-progressive-retry").classList.remove("d-none")
	}

	function ca(e) {
		var t = a.query(e, ".js-diff-entry-loader"),
			n = a.query(e, ".js-diff-placeholder", Element),
			r = a.query(e, "button.js-diff-load", HTMLButtonElement),
			o = a.query(e, ".js-button-text");
		n.setAttribute("fill", "url('#animated-diff-gradient')"), o.textContent = r.getAttribute("data-disable-with") || "", r.disabled = !0;
		var s = new URL(t.getAttribute("data-fragment-url") || "", window.location.origin);
		return t.src = s.toString(), t.data
	}

	function ua() {
		this.querySelector(".js-diff-load-button-container").classList.add("d-none"), this.querySelector(".js-diff-load-retry").classList.remove("d-none")
	}

	function la() {
		this.setAttribute("data-url", this.src), this.removeAttribute("src")
	}

	function da(e) {
		e.src = e.getAttribute("data-url"), e.removeAttribute("data-url")
	}

	function ma() {
		var e = document.querySelector(".js-get-repo-modal");
		if (e) {
			e.classList.remove("is-downloading");
			var t = !0,
				n = !1,
				r = void 0;
			try {
				for (var a, o = e.querySelectorAll(".js-modal-download-mac, .js-modal-download-windows, .js-modal-download-xcode, .js-modal-download-visual-studio")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
					var s = a.value;
					s.classList.remove("d-block"), s.classList.add("d-none")
				}
			} catch (e) {
				n = !0, r = e
			} finally {
				try {
					!t && o.return && o.return()
				} finally {
					if (n) throw r
				}
			}
		}
	}

	function fa(e) {
		var t = document.querySelectorAll(e);
		if (t.length > 0) return t[t.length - 1]
	}

	function va() {
		return ((e = fa("meta[name=analytics-location]")) ? e.content : window.location.pathname) + function() {
			var e = "";
			fa("meta[name=analytics-location-query-strip]") || (e = window.location.search);
			var t = fa("meta[name=analytics-location-params]");
			t && (e += (e ? "&" : "?") + t.content);
			var n = !0,
				r = !1,
				a = void 0;
			try {
				for (var o, s = document.querySelectorAll("meta[name=analytics-param-rename]")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
					var i = o.value,
						u = c(i, HTMLMetaElement).content.split(":", 2);
					e = e.replace(new RegExp("(^|[?&])" + u[0] + "($|=)", "g"), "$1" + u[1] + "$2")
				}
			} catch (e) {
				r = !0, a = e
			} finally {
				try {
					!n && s.return && s.return()
				} finally {
					if (r) throw a
				}
			}
			return e
		}();
		var e
	}

	function pa() {
		var e = window.location.protocol + "//" + window.location.host + va();
		P.setGlobalLocation(e), P.setGlobalTitle(fa("meta[name=analytics-location]") ? "(masked)" : document.title);
		var t = fa("meta[name=analytics-ec-payload]");
		t && ha(t.content);
		var n = A.getItem("ga-deferred");
		n && (ha(n), A.removeItem("ga-deferred"));
		var r = !0,
			a = !1,
			o = void 0;
		try {
			for (var s, i = document.querySelectorAll("meta.js-ga-set")[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
				var u = s.value,
					l = c(u, HTMLMetaElement);
				P.setDimension(l.name, l.content)
			}
		} catch (e) {
			a = !0, o = e
		} finally {
			try {
				!r && i.return && i.return()
			} finally {
				if (a) throw o
			}
		}
	}

	function ha(e) {
		if (e) {
			var t = !0,
				n = !1,
				r = void 0;
			try {
				for (var a, o = JSON.parse(e)[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
					var s = a.value;
					window.ga.apply(null, s)
				}
			} catch (e) {
				n = !0, r = e
			} finally {
				try {
					!t && o.return && o.return()
				} finally {
					if (n) throw r
				}
			}
		}
	}

	function ga() {
		var e = !0,
			t = !1,
			n = void 0;
		try {
			for (var r, a = document.querySelectorAll("meta[name=analytics-virtual-pageview]")[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
				var o = r.value;
				P.trackPageview(c(o, HTMLMetaElement).content, {
					title: ""
				})
			}
		} catch (e) {
			t = !0, n = e
		} finally {
			try {
				!e && a.return && a.return()
			} finally {
				if (t) throw n
			}
		}
		P.trackPageview()
	}

	function ya(e) {
		var t = e.trim().split(/\s*,\s*/);
		return {
			category: t[0],
			action: t[1],
			label: t[2],
			value: t[3]
		}
	}
	s.observe(".js-sticky", {
		constructor: HTMLElement,
		add: function(e) {
			! function(e) {
				var t = ta(e),
					n = window.getComputedStyle(e).position;
				e.style.position = "static";
				var r = e.offsetParent;
				e.style.position = "fixed";
				var a = window.getComputedStyle(e).top,
					o = {
						element: e,
						placeholder: t,
						offsetParent: r,
						top: "auto" == a ? 0 : a
					};
				e.style.position = n, Yr.push(o)
			}(e), Qr(), Xr()
		},
		remove: function(e) {
			! function(e) {
				var t = Yr.map(function(e) {
					return e.element
				}).indexOf(e);
				Yr.splice(t, 1)
			}(e), Xr()
		}
	}), s.observe(".js-diff-progressive-container", function(e) {
		aa(e);
		var t = e.querySelector(".js-diff-progressive-loader");
		t && (t.addEventListener("load", function() {
			aa(e)
		}), t.addEventListener("error", la), t.addEventListener("error", ia))
	}), i.on("click", ".js-diff-progressive-retry .js-retry-button", function() {
		var e = this.closest(".js-diff-progressive-loader");
		! function(e) {
			e.querySelector(".js-diff-progressive-spinner").classList.remove("d-none"), e.querySelector(".js-diff-progressive-retry").classList.add("d-none")
		}(e), da(e)
	}), s.observe(".js-diff-load-container", function(e) {
		var t = e.querySelector(".js-diff-entry-loader");
		t && (t.addEventListener("load", function() {
			e.closest(".js-file").classList.remove("hide-file-notes-toggle");
			var t = oa();
			t && sa(e, t)
		}), t.addEventListener("error", la), t.addEventListener("error", ua))
	}), i.on("click", ".js-diff-load", function(e) {
		e.target.classList.contains("js-ignore-this") || ca(this.closest(".js-diff-load-container"))
	}), i.on("click", ".js-diff-load-retry .js-retry-button", function() {
		var e = this.closest(".js-diff-entry-loader");
		! function(e) {
			e.querySelector(".js-diff-load-button-container").classList.remove("d-none"), e.querySelector(".js-diff-load-retry").classList.add("d-none")
		}(e), da(e)
	}), i.on("click", ".js-rendered, .js-source", function(e) {
		var n = e.currentTarget;
		n.classList.contains("selected") ? e.preventDefault() : (function(e) {
			var n = new URL(window.location.href, window.location.origin),
				r = a.closest(e, ".js-file-header"),
				o = e.classList.contains("js-rendered"),
				s = e.classList.contains("js-source"),
				i = r.getAttribute("data-short-path");
			t(i, "null.js:40");
			var c = r.getAttribute("data-anchor");
			t(c, "null.js:42"), n.hash = c, o ? n.searchParams.set("short_path", i) : s && n.searchParams.delete("short_path");
			h.replaceState(null, "", n.toString())
		}(n), function(e) {
			var t = !0,
				n = !1,
				r = void 0;
			try {
				for (var a, o = document.querySelectorAll(".js-rendered, .js-source")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
					var s = a.value;
					s.classList.remove("selected")
				}
			} catch (e) {
				n = !0, r = e
			} finally {
				try {
					!t && o.return && o.return()
				} finally {
					if (n) throw r
				}
			}
			e.classList.add("selected")
		}(n))
	}), l.remoteForm(".js-prose-diff-toggle-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = a.closest(t, ".js-details-container"), o = a.query(r, ".js-file-content"), e.next = 4, n.html();
					case 4:
						for (s = e.sent; o.lastChild;) o.removeChild(o.lastChild);
						o.append(s.html), r.classList.toggle("display-rich-diff"), r.classList.toggle("show-inline-notes");
					case 9:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), i.on("change", ".js-diff-style-toggle input", function(e) {
		var t = a.closest(e.target, ".js-diff-settings"),
			n = !0,
			r = !1,
			o = void 0;
		try {
			for (var s, i = a.querySelectorAll(t, ".js-diff-style-toggle label")[Symbol.iterator](); !(n = (s = i.next()).done); n = !0) {
				s.value.classList.toggle("selected")
			}
		} catch (e) {
			r = !0, o = e
		} finally {
			try {
				!n && i.return && i.return()
			} finally {
				if (r) throw o
			}
		}
	}), i.on("click", ".js-toc-retry", function(e) {
		var t = e.target.closest(".js-select-menu");
		null != t && (t.classList.add("js-load-contents", "is-loading"), t.classList.remove("has-error"))
	}), F(function() {
		ra(document) && function(e) {
			var t = I.findFragmentTarget(e);
			t && na(t)
		}(document)
	}), i.on("click", ".email-hidden-toggle", function(e) {
		var t = this.nextElementSibling;
		t.style.display = "", t.classList.toggle("expanded"), e.preventDefault()
	}), i.on("click", ".js-git-clone-help-container .js-git-clone-help-switcher", function(e) {
		var t = e.currentTarget,
			n = a.closest(t, ".js-git-clone-help-container"),
			r = t.getAttribute("data-url") || "";
		if (a.query(n, ".js-git-clone-help-field", HTMLInputElement).value = r, t.matches(".js-git-protocol-clone-url")) {
			var o = !0,
				s = !1,
				i = void 0;
			try {
				for (var c, u = n.querySelectorAll(".js-git-clone-help-text")[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
					c.value.textContent = r
				}
			} catch (e) {
				s = !0, i = e
			} finally {
				try {
					!o && u.return && u.return()
				} finally {
					if (s) throw i
				}
			}
		}
		var l = n.querySelector(".js-clone-url-button.selected");
		l && l.classList.remove("selected"), a.closest(t, ".js-clone-url-button").classList.add("selected")
	}), i.on("click", ".js-get-repo", function(e) {
		var n = e.currentTarget.getAttribute("data-open-app");
		t(n, "null.js:31"),
			function(e, t) {
				e.classList.add("is-downloading");
				var n = void 0;
				switch (t) {
					case "mac":
						n = e.querySelector(".js-modal-download-mac");
						break;
					case "windows":
						n = e.querySelector(".js-modal-download-windows");
						break;
					case "xcode":
						n = e.querySelector(".js-modal-download-xcode");
						break;
					case "visual-studio":
						n = e.querySelector(".js-modal-download-visual-studio")
				}
				n && (n.classList.remove("d-none"), n.classList.add("d-block"))
			}(a.closest(e.currentTarget, ".js-get-repo-modal"), n)
	}), i.on("toggle", ".js-get-repo-select-menu", ma, {
		capture: !0
	}), i.on("click", ".js-get-repo-modal-download-back", ma), P.providePlugin("octolyticsPlugin", function(e) {
		var t = e.get("sendHitTask");
		e.set("sendHitTask", function(e) {
			t(e), "event" === e.get("hitType") && null != window._octo && y.guaranteedPost("//" + window._octo.host + "/collect", e.get("hitPayload"), "application/x-www-form-urlencoded")
		})
	});
	var ba = document.querySelector("meta[name=google-analytics]");

	function ja(e) {
		if (window._octo) {
			var t = Math.floor((new Date).getTime() / 1e3);
			e.timestamp = t;
			if (document.head && document.head.querySelector('meta[name="octolytics-event-url"]')) {
				var n = a.query(document.head, 'meta[name="octolytics-event-url"]', HTMLMetaElement).content;
				y.guaranteedPost(n, JSON.stringify(e), "text/plain")
			}
		}
	}
	ba && (P.setGlobalAccount(c(ba, HTMLMetaElement).content, "auto"), P.requirePlugin("octolyticsPlugin"), P.requirePlugin("ec"), pa()), n.ready.then(function() {
		return ga()
	}), document.addEventListener("pjax:complete", function() {
		setTimeout(function() {
			pa(), ga()
		}, 20)
	}, !1), s.observe("[data-ga-load]", function(e) {
		var t = ya(e.getAttribute("data-ga-load"));
		t.interactive = !1, P.trackEvent(t)
	}), s.observe("meta[name=analytics-event]", function(e) {
		var t = ya(e.content);
		t.interactive = !1, P.trackEvent(t)
	}), i.on("click", "[data-ga-click]", function() {
		ha(this.getAttribute("data-ga-ec"));
		var e = ya(this.getAttribute("data-ga-click"));
		P.trackEvent(e)
	}, {
		capture: !0
	}), i.on("click", "[data-ga-deferred]", function() {
		A.setItem("ga-deferred", this.getAttribute("data-ga-deferred"))
	}, {
		capture: !0
	}), i.on("change", "[data-ga-change]", function() {
		ha(this.getAttribute("data-ga-ec"));
		var e = ya(this.getAttribute("data-ga-change"));
		P.trackEvent(e)
	}, {
		capture: !0
	}), i.on("click", ".js-video-play, .js-video-close, .is-expanded", function(e) {
		e.preventDefault();
		var t = e.currentTarget,
			n = t.classList.contains("js-video-play"),
			r = a.closest(t, ".js-video-container"),
			o = a.query(r, ".js-video-iframe", HTMLIFrameElement),
			s = document.querySelector(".js-video-bg");
		n ? o.src = o.getAttribute("data-src") || "" : o.removeAttribute("src"), r.classList.toggle("is-expanded", n), null != s && s.classList.toggle("is-expanded", n),
			function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					n = e.getBoundingClientRect(),
					r = n.top - t,
					a = n.bottom - window.innerHeight + t;
				r < 0 ? window.scrollBy(0, r) : a > 0 && window.scrollBy(0, a)
			}(o, 20)
	}), i.on("click", "[data-octo-click]", function(e) {
		if (window._octo) {
			var t = e.currentTarget,
				n = t.getAttribute("data-octo-click"),
				r = {};
			r.event_type = n;
			var a = {},
				o = {},
				s = {},
				i = [];
			t.hasAttribute("data-octo-dimensions") && (i = (t.getAttribute("data-octo-dimensions") || "").split(","));
			var u = document.head ? document.head.querySelectorAll('meta[name^="octolytics-"]') : [],
				l = !0,
				d = !1,
				m = void 0;
			try {
				for (var f, v = u[Symbol.iterator](); !(l = (f = v.next()).done); l = !0) {
					var p = f.value,
						h = c(p, HTMLMetaElement);
					if (h.name.startsWith("octolytics-dimension-")) a[h.name.replace(/^octolytics-dimension-/, "")] = h.content;
					else if (h.name.startsWith("octolytics-measure-")) {
						o[h.name.replace(/^octolytics-measure-/, "")] = h.content
					} else if (h.name.startsWith("octolytics-context-")) {
						s[h.name.replace(/^octolytics-context-/, "")] = h.content
					} else if (h.name.startsWith("octolytics-actor-")) {
						a[h.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = h.content
					} else if (h.name.startsWith("octolytics-")) {
						r[h.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = h.content
					}
				}
			} catch (e) {
				d = !0, m = e
			} finally {
				try {
					!l && v.return && v.return()
				} finally {
					if (d) throw m
				}
			}
			if (t.hasAttribute("data-ga-click")) {
				var g = (t.getAttribute("data-ga-click") || "").split(",").map(function(e) {
					return e.trim()
				});
				a.category = g[0], a.action = g[1]
			}
			var y = !0,
				b = !1,
				j = void 0;
			try {
				for (var L, w = i[Symbol.iterator](); !(y = (L = w.next()).done); y = !0) {
					var x = L.value.split(":");
					a[x.shift()] = x.join(":")
				}
			} catch (e) {
				b = !0, j = e
			} finally {
				try {
					!y && w.return && w.return()
				} finally {
					if (b) throw j
				}
			}
			r.dimensions = a, r.measures = o, r.context = s, ja(r)
		}
	});
	var La = function() {
			var e = ke(regeneratorRuntime.mark(function e(t, n, r) {
				var a;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return ka[a = "/hovercards?user_id=" + t + "&subject=" + n] || (ka[a] = p.fetchSafeDocumentFragment(document, a)), e.next = 4, new Promise(function(e) {
								return setTimeout(e, r)
							});
						case 4:
							return e.next = 6, ka[a];
						case 6:
							return e.abrupt("return", e.sent);
						case 7:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t, n, r) {
				return e.apply(this, arguments)
			}
		}(),
		wa = function() {
			var e = ke(regeneratorRuntime.mark(function e(t, n) {
				var r, a, o, s;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (r = t.currentTarget, Ea !== r) {
								e.next = 3;
								break
							}
							return e.abrupt("return");
						case 3:
							if (!r.closest(".js-hovercard-content")) {
								e.next = 5;
								break
							}
							return e.abrupt("return");
						case 5:
							return Ra(), Ea = r, Ta = document.activeElement, a = Oa(r) || "", o = r.getAttribute("data-hovercard-user-id") || "", e.next = 12, La(o, a, n || 0);
						case 12:
							s = e.sent, r === Ea && (Pa(s, r), t instanceof KeyboardEvent && xa && xa.focus());
						case 14:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t, n) {
				return e.apply(this, arguments)
			}
		}(),
		xa = document.querySelector(".js-hovercard-content"),
		ka = {},
		Ea = void 0,
		Ta = void 0,
		Sa = void 0,
		qa = 12,
		Aa = 24,
		Ma = Aa - 7,
		Ha = 16,
		Ca = 100,
		Ia = 250;

	function _a(e) {
		return "Popover-message--" + e
	}

	function Ra() {
		xa && (xa.style.display = "none", xa.children[0].innerHTML = "", Ta = null, Ea = null)
	}

	function Fa(e, t) {
		if (xa) {
			xa.style.visibility = "hidden", xa.style.display = "block", t.classList.remove(_a("bottom-left"), _a("bottom-right"), _a("right-top"), _a("right-bottom"), _a("top-left"), _a("top-right"));
			var n = function(e) {
					if (!xa) return {};
					var t = xa.getBoundingClientRect(),
						n = t.width,
						r = t.height,
						a = e.getBoundingClientRect(),
						o = a.x,
						s = a.y,
						i = a.height,
						c = a.width,
						u = s > r;
					if (e.classList.contains("js-hovercard-left")) {
						var l = s + i / 2;
						return {
							containerTop: u ? l - r + Ma + Ha / 2 : l - Ma - Ha / 2,
							containerLeft: o - n - qa,
							contentClassSuffix: u ? "right-bottom" : "right-top"
						}
					}
					var d = window.innerWidth - o > n,
						m = o + c / 2;
					return {
						containerTop: u ? s - r - qa : s + i + qa,
						containerLeft: d ? m - Aa : m - n + Aa,
						contentClassSuffix: u ? d ? "bottom-left" : "bottom-right" : d ? "top-left" : "top-right"
					}
				}(e),
				r = n.containerTop,
				a = n.containerLeft,
				o = n.contentClassSuffix;
			t.classList.add(_a(o)), xa.style.top = r + window.pageYOffset + "px", xa.style.left = a + window.pageXOffset + "px", xa.style.visibility = ""
		}
	}

	function Pa(e, t) {
		if (xa) {
			var n = xa.children[0];
			n.innerHTML = "";
			var r = document.createElement("div"),
				o = !0,
				s = !1,
				i = void 0;
			try {
				for (var c, u = e.children[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
					var l = c.value;
					r.appendChild(l.cloneNode(!0))
				}
			} catch (e) {
				s = !0, i = e
			} finally {
				try {
					!o && u.return && u.return()
				} finally {
					if (s) throw i
				}
			}
			n.appendChild(r), Fa(t, n),
				function(e) {
					setTimeout(function() {
						if (document.body && document.body.contains(e)) {
							var t = a.query(e, "[data-hovercard-tracking]").getAttribute("data-hovercard-tracking");
							if (t) {
								var n = {
									event_type: "user-hovercard-load"
								};
								n.dimensions = JSON.parse(t), ja(n)
							}
							Nr(a.query(e, "[data-hydro-view]"))
						}
					}, 500)
				}(r), xa.style.display = "block"
		}
	}

	function Oa(e) {
		var t = e.closest("[data-hovercard-subject-tag]");
		if (t) return t.getAttribute("data-hovercard-subject-tag");
		var n = document.head && document.head.querySelector('meta[name="hovercard-subject-tag"]');
		return n ? n.getAttribute("content") : void 0
	}

	function Na(e) {
		wa(e, Ia)
	}

	function Da(e) {
		Ea && (e.relatedTarget && (e.relatedTarget.closest(".js-hovercard-content") || e.relatedTarget.closest("[data-hovercard-user-id]")) || (e instanceof KeyboardEvent && Ta && Ta.focus(), Ra()))
	}

	function Ba(e) {
		var t = Ea;
		Sa = setTimeout(function() {
			Ea === t && Da(e)
		}, Ca)
	}

	function Ua(e) {
		switch (e.key) {
			case "h":
			case "H":
				wa(e);
				break;
			case "Escape":
				Da(e)
		}
	}

	function za() {
		Sa && clearTimeout(Sa)
	}

	function Wa(e) {
		var t = new FormData,
			n = e.getAttribute("data-authenticity-token"),
			r = a.closest(e, ".js-bookmark-toggler-container"),
			o = a.query(document, ".js-bookmarking-error"),
			s = a.query(o, ".js-bookmarking-error-message");
		return t.append("authenticity_token", n), r.classList.toggle("on"), p.fetch(e.getAttribute("data-url"), {
			method: "post",
			body: t
		}).catch(function(e) {
			if (e.response) return r.classList.toggle("on"), o.classList.add("visible"), e.response.json().then(function(e) {
				s.textContent = e.error
			})
		}).catch(function() {
			r.classList.toggle("on"), o.classList.add("visible"), s.textContent = "Something went wrong."
		})
	}

	function Va(e) {
		var t = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(function(e) {
			return String(e).toLowerCase().replace(/[^0-9a-f]/g, "")
		}(e));
		if (t) return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
	}
	xa && (s.observe("[data-hovercard-user-id]", {
		add: function(e) {
			! function(e) {
				var t = [].concat(He(e.querySelectorAll("a")));
				"A" === e.tagName && t.push(e);
				var n = !0,
					r = !1,
					a = void 0;
				try {
					for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) o.value.setAttribute("aria-describedby", "hovercard-aria-description")
				} catch (e) {
					r = !0, a = e
				} finally {
					try {
						!n && s.return && s.return()
					} finally {
						if (r) throw a
					}
				}
			}(e), e.addEventListener("mouseover", Na), e.addEventListener("mouseout", Ba), e.addEventListener("keyup", Ua)
		},
		remove: function(e) {
			e.removeEventListener("mouseover", Na), e.removeEventListener("mouseout", Ba), e.removeEventListener("keyup", Ua), Ea === e && Ra()
		}
	}), s.observe(".js-hovercard-content", {
		add: function(e) {
			e.addEventListener("mouseover", za), e.addEventListener("mouseout", Da), e.addEventListener("keyup", Ua)
		},
		remove: function(e) {
			e.removeEventListener("mouseover", za), e.removeEventListener("mouseout", Da), e.removeEventListener("keyup", Ua)
		}
	}), i.on("menu:activated", ".js-select-menu", Ra), window.addEventListener("statechange", Ra)), s.observe(".js-scrollnav-listener", function(e) {
		window.addEventListener("scroll", function() {
			! function(e) {
				var t = E(document).scrollTop() + E(".js-scrollnav").height(),
					n = !0,
					r = !1,
					a = void 0;
				try {
					for (var o, s = e.querySelectorAll(".js-section")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
						var i = o.value,
							c = E(i),
							u = t >= c.position().top,
							l = t <= c.position().top + c.height();
						if (u && l) {
							var d = e.querySelector('.js-scrollnav-item[href="#' + i.id + '"]');
							if (d && !d.classList.contains("selected")) {
								var m = !0,
									f = !1,
									v = void 0;
								try {
									for (var p, h = e.querySelectorAll(".js-scrollnav-item")[Symbol.iterator](); !(m = (p = h.next()).done); m = !0) p.value.classList.remove("selected")
								} catch (e) {
									f = !0, v = e
								} finally {
									try {
										!m && h.return && h.return()
									} finally {
										if (f) throw v
									}
								}
								d.classList.add("selected")
							}
						}
					}
				} catch (e) {
					r = !0, a = e
				} finally {
					try {
						!n && s.return && s.return()
					} finally {
						if (r) throw a
					}
				}
			}(e)
		}, {
			passive: !0
		})
	}), i.on("click", ".js-bookmark-toggler-container .js-unbookmark-target", function() {
		Wa(this)
	}), i.on("click", ".js-bookmark-toggler-container .js-bookmark-target", function() {
		Wa(this)
	});
	var $a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

	function Ja(e, t) {
		return e(t = {
			exports: {}
		}, t.exports), t.exports
	}
	var Ka = Ja(function(e, t) {
			var n;
			n = function() {
				var e = null,
					t = {};
				o("monochrome", null, [
					[0, 0],
					[100, 0]
				]), o("red", [-26, 18], [
					[20, 100],
					[30, 92],
					[40, 89],
					[50, 85],
					[60, 78],
					[70, 70],
					[80, 60],
					[90, 55],
					[100, 50]
				]), o("orange", [19, 46], [
					[20, 100],
					[30, 93],
					[40, 88],
					[50, 86],
					[60, 85],
					[70, 70],
					[100, 70]
				]), o("yellow", [47, 62], [
					[25, 100],
					[40, 94],
					[50, 89],
					[60, 86],
					[70, 84],
					[80, 82],
					[90, 80],
					[100, 75]
				]), o("green", [63, 178], [
					[30, 100],
					[40, 90],
					[50, 85],
					[60, 81],
					[70, 74],
					[80, 64],
					[90, 50],
					[100, 40]
				]), o("blue", [179, 257], [
					[20, 100],
					[30, 86],
					[40, 80],
					[50, 74],
					[60, 60],
					[70, 52],
					[80, 44],
					[90, 39],
					[100, 35]
				]), o("purple", [258, 282], [
					[20, 100],
					[30, 87],
					[40, 79],
					[50, 70],
					[60, 65],
					[70, 59],
					[80, 52],
					[90, 45],
					[100, 42]
				]), o("pink", [283, 334], [
					[20, 100],
					[30, 90],
					[40, 86],
					[60, 84],
					[80, 80],
					[90, 75],
					[100, 73]
				]);
				var n = function(o) {
					if (void 0 !== (o = o || {}).seed && null !== o.seed && o.seed === parseInt(o.seed, 10)) e = o.seed;
					else if ("string" == typeof o.seed) e = function(e) {
						for (var t = 0, n = 0; n !== e.length && !(t >= Number.MAX_SAFE_INTEGER); n++) t += e.charCodeAt(n);
						return t
					}(o.seed);
					else {
						if (void 0 !== o.seed && null !== o.seed) throw new TypeError("The seed value must be an integer or string");
						e = null
					}
					var c, u, l;
					if (null !== o.count && void 0 !== o.count) {
						var d = o.count,
							m = [];
						for (o.count = null; d > m.length;) e && o.seed && (o.seed += 1), m.push(n(o));
						return o.count = d, m
					}
					return c = function(e) {
							var n = a(function(e) {
								if ("number" == typeof parseInt(e)) {
									var n = parseInt(e);
									if (n < 360 && n > 0) return [n, n]
								}
								if ("string" == typeof e)
									if (t[e]) {
										var r = t[e];
										if (r.hueRange) return r.hueRange
									} else if (e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
									var a = function(e) {
										e = 3 === (e = e.replace(/^#/, "")).length ? e.replace(/(.)/g, "$1$1") : e;
										var t = parseInt(e.substr(0, 2), 16) / 255,
											n = parseInt(e.substr(2, 2), 16) / 255,
											r = parseInt(e.substr(4, 2), 16) / 255,
											a = Math.max(t, n, r),
											o = a - Math.min(t, n, r),
											s = a ? o / a : 0;
										switch (a) {
											case t:
												return [(n - r) / o % 6 * 60 || 0, s, a];
											case n:
												return [60 * ((r - t) / o + 2) || 0, s, a];
											case r:
												return [60 * ((t - n) / o + 4) || 0, s, a]
										}
									}(e)[0];
									return [a, a]
								}
								return [0, 360]
							}(e.hue));
							n < 0 && (n = 360 + n);
							return n
						}(o), u = function(e, t) {
							if ("monochrome" === t.hue) return 0;
							if ("random" === t.luminosity) return a([0, 100]);
							var n = function(e) {
									return r(e).saturationRange
								}(e),
								o = n[0],
								s = n[1];
							switch (t.luminosity) {
								case "bright":
									o = 55;
									break;
								case "dark":
									o = s - 10;
									break;
								case "light":
									s = 55
							}
							return a([o, s])
						}(c, o), l = function(e, t, n) {
							var o = function(e, t) {
									for (var n = r(e).lowerBounds, a = 0; a < n.length - 1; a++) {
										var o = n[a][0],
											s = n[a][1],
											i = n[a + 1][0],
											c = n[a + 1][1];
										if (t >= o && t <= i) {
											var u = (c - s) / (i - o),
												l = s - u * o;
											return u * t + l
										}
									}
									return 0
								}(e, t),
								s = 100;
							switch (n.luminosity) {
								case "dark":
									s = o + 20;
									break;
								case "light":
									o = (s + o) / 2;
									break;
								case "random":
									o = 0, s = 100
							}
							return a([o, s])
						}(c, u, o),
						function(e, t) {
							switch (t.format) {
								case "hsvArray":
									return e;
								case "hslArray":
									return i(e);
								case "hsl":
									var n = i(e);
									return "hsl(" + n[0] + ", " + n[1] + "%, " + n[2] + "%)";
								case "hsla":
									var r = i(e),
										a = t.alpha || Math.random();
									return "hsla(" + r[0] + ", " + r[1] + "%, " + r[2] + "%, " + a + ")";
								case "rgbArray":
									return s(e);
								case "rgb":
									var o = s(e);
									return "rgb(" + o.join(", ") + ")";
								case "rgba":
									var c = s(e),
										a = t.alpha || Math.random();
									return "rgba(" + c.join(", ") + ", " + a + ")";
								default:
									return function(e) {
										var t = s(e);

										function n(e) {
											var t = e.toString(16);
											return 1 == t.length ? "0" + t : t
										}
										return "#" + n(t[0]) + n(t[1]) + n(t[2])
									}(e)
							}
						}([c, u, l], o)
				};

				function r(e) {
					for (var n in e >= 334 && e <= 360 && (e -= 360), t) {
						var r = t[n];
						if (r.hueRange && e >= r.hueRange[0] && e <= r.hueRange[1]) return t[n]
					}
					return "Color not found"
				}

				function a(t) {
					if (null === e) return Math.floor(t[0] + Math.random() * (t[1] + 1 - t[0]));
					var n = t[1] || 1,
						r = t[0] || 0,
						a = (e = (9301 * e + 49297) % 233280) / 233280;
					return Math.floor(r + a * (n - r))
				}

				function o(e, n, r) {
					var a = r[0][0],
						o = r[r.length - 1][0],
						s = r[r.length - 1][1],
						i = r[0][1];
					t[e] = {
						hueRange: n,
						lowerBounds: r,
						saturationRange: [a, o],
						brightnessRange: [s, i]
					}
				}

				function s(e) {
					var t = e[0];
					0 === t && (t = 1), 360 === t && (t = 359), t /= 360;
					var n = e[1] / 100,
						r = e[2] / 100,
						a = Math.floor(6 * t),
						o = 6 * t - a,
						s = r * (1 - n),
						i = r * (1 - o * n),
						c = r * (1 - (1 - o) * n),
						u = 256,
						l = 256,
						d = 256;
					switch (a) {
						case 0:
							u = r, l = c, d = s;
							break;
						case 1:
							u = i, l = r, d = s;
							break;
						case 2:
							u = s, l = r, d = c;
							break;
						case 3:
							u = s, l = i, d = r;
							break;
						case 4:
							u = c, l = s, d = r;
							break;
						case 5:
							u = r, l = s, d = i
					}
					var m = [Math.floor(255 * u), Math.floor(255 * l), Math.floor(255 * d)];
					return m
				}

				function i(e) {
					var t = e[0],
						n = e[1] / 100,
						r = e[2] / 100,
						a = (2 - n) * r;
					return [t, Math.round(n * r / (a < 1 ? a : 2 - a) * 1e4) / 100, a / 2 * 100]
				}
				return n
			}(), e && e.exports && (t = e.exports = n), t.randomColor = n
		}),
		Ga = (Ka.randomColor, function() {
			var e = ke(regeneratorRuntime.mark(function e(n) {
				var r, o, s, i, c, u, l, d, m, f, v, h, g;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (r = n.closest(".js-label-preview-container")) {
								e.next = 3;
								break
							}
							return e.abrupt("return");
						case 3:
							if (o = a.closest(n, ".js-label-form", HTMLFormElement), s = o.querySelector(".js-new-label-error"), i = o.getAttribute("data-label-id"), c = a.query(r, ".js-label-preview", HTMLElement), u = lo(o, c), l = uo(o), d = co(o), m = c.getAttribute("data-url-template"), t("string" == typeof m, "null.js:265"), f = io(m, u, l, d, i), !r.hasAttribute("data-last-preview-url")) {
								e.next = 18;
								break
							}
							if (v = r.getAttribute("data-last-preview-url"), t("string" == typeof v, "null.js:270"), f !== v) {
								e.next = 18;
								break
							}
							return e.abrupt("return");
						case 18:
							return h = void 0, e.prev = 19, e.next = 22, p.fetchSafeDocumentFragment(document, f);
						case 22:
							h = e.sent, e.next = 33;
							break;
						case 25:
							return e.prev = 25, e.t0 = e.catch(19), e.next = 29, e.t0.response.json();
						case 29:
							return g = e.sent, ao(o, g), s && (s.textContent = g.message, s.classList.remove("d-none")), e.abrupt("return");
						case 33:
							s && (s.textContent = "", s.classList.add("d-none")), oo(o), c.innerHTML = "", c.appendChild(h), r.setAttribute("data-last-preview-url", f);
						case 38:
						case "end":
							return e.stop()
					}
				}, e, this, [
					[19, 25]
				])
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}()),
		Ya = new WeakMap;

	function Xa(e, t) {
		var n = function(e) {
			var t = Va(e);
			if (t) return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3
		}(t);
		null != n && (n < 150 ? (e.classList.remove("text-gray-dark"), e.classList.add("text-white")) : (e.classList.remove("text-white"), e.classList.add("text-gray-dark")))
	}

	function Qa(e, t) {
		var n = t;
		"#" !== n.charAt(0) && (n = "#" + n), e.style.backgroundColor = n;
		var r = e.querySelector(".js-new-label-color-icon");
		r && Xa(r, t)
	}

	function Za() {
		var e = document.querySelector(".js-discussion-sidebar-item.sidebar-labels");
		if (e) {
			var t = document.querySelector(".js-issue-sidebar-form .js-filterable-issue-labels");
			if (t) {
				var n = Ya.get(e);
				if (n) {
					var r = Object.keys(n),
						o = !0,
						s = !1,
						c = void 0;
					try {
						for (var u, l = a.querySelectorAll(t, 'input[type="checkbox"][name="issue[labels][]"]', HTMLInputElement)[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
							var d = u.value,
								m = d.value;
							if (r.indexOf(m) > -1) {
								d.checked = n[m];
								var f = a.closest(d, ".js-navigation-item");
								f.classList.toggle("selected", d.checked), i.fire(f, "selectmenu:selected")
							}
						}
					} catch (e) {
						s = !0, c = e
					} finally {
						try {
							!o && l.return && l.return()
						} finally {
							if (s) throw c
						}
					}
					Ya.delete(e)
				}
			}
		}
	}

	function eo(e, t) {
		e.blur();
		var n = a.closest(e, "form");
		a.query(n, ".js-new-label-color-input", HTMLInputElement).value = t, Qa(a.query(n, ".js-new-label-color", HTMLButtonElement), t)
	}

	function to(e) {
		var t = Array.from(e.querySelectorAll(".js-navigation-item")).filter(function(e) {
			return "" === e.style.display
		});
		if (!(t.length > 2) && t.every(function(e) {
				return e.classList.contains("js-label-options")
			})) {
			var n = t.filter(function(e) {
				return e.classList.contains("js-add-label-button")
			})[0];
			if (n) {
				var r = !0,
					a = !1,
					o = void 0;
				try {
					for (var s, i = e.querySelectorAll(".navigation-focus")[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
						s.value.classList.remove("navigation-focus")
					}
				} catch (e) {
					a = !0, o = e
				} finally {
					try {
						!r && i.return && i.return()
					} finally {
						if (a) throw o
					}
				}
				n.classList.add("navigation-focus")
			}
		}
	}

	function no(e) {
		var t = function(e) {
			return e.hasAttribute("data-maxlength") ? parseInt(e.getAttribute("data-maxlength")) : e.maxLength
		}(e);
		! function(e, t, n) {
			var r = n.closest(".js-label-characters-remaining-container");
			if (r) {
				var o = a.query(r, ".js-label-characters-remaining"),
					s = String(o.getAttribute("data-suffix")),
					i = t - N.getUtf8StringLength(e);
				i <= 20 ? (o.textContent = i + " " + s, o.classList.toggle("text-red", i <= 5), o.classList.remove("d-none")) : o.classList.add("d-none")
			}
		}(e.value, t, e)
	}

	function ro(e, t, n) {
		var r = t.querySelector(e);
		r && (n ? function(e, t) {
			a.closest(e, ".js-label-error-container").classList.add("errored"), e.textContent = t, e.classList.remove("d-none")
		}(r, n[0]) : function(e) {
			a.closest(e, ".js-label-error-container").classList.remove("errored"), e.classList.add("d-none")
		}(r))
	}

	function ao(e, t) {
		ro(".js-label-name-error", e, t.name), ro(".js-label-description-error", e, t.description), ro(".js-label-color-error", e, t.color)
	}

	function oo(e) {
		ro(".js-label-name-error", e, null), ro(".js-label-description-error", e, null), ro(".js-label-color-error", e, null)
	}

	function so(e) {
		var t = e.querySelectorAll(".js-label-characters-remaining-container"),
			n = !0,
			r = !1,
			o = void 0;
		try {
			for (var s, i = t[Symbol.iterator](); !(n = (s = i.next()).done); n = !0) {
				var c = s.value;
				no(a.query(c, ".js-label-characters-remaining-field", HTMLInputElement))
			}
		} catch (e) {
			r = !0, o = e
		} finally {
			try {
				!n && i.return && i.return()
			} finally {
				if (r) throw o
			}
		}
	}

	function io(e, t, n, r, a) {
		var o = new URL("" + e + encodeURIComponent(t), window.location.origin),
			s = new URLSearchParams(o.search.slice(1));
		return s.append("color", n), r && s.append("description", r), a && s.append("id", a), o.search = s.toString(), o.toString()
	}

	function co(e) {
		var t = e.querySelector(".js-new-label-description-input");
		t && (t = c(t, HTMLInputElement));
		var n = null;
		return t && t.value.trim().length > 0 && (n = t.value.trim()), n
	}

	function uo(e) {
		var t = a.query(e, ".js-new-label-color-input", HTMLInputElement);
		return t.checkValidity() ? t.value.trim().replace(/^#/, "") : "ededed"
	}

	function lo(e, n) {
		var r = a.query(e, ".js-new-label-name-input", HTMLInputElement).value.trim();
		return r.length < 1 && (r = n.getAttribute("data-default-name"), t("string" == typeof r, "null.js:245")), r
	}

	function mo(e, t) {
		a.closest(e, ".js-details-container").classList.toggle("is-empty", t)
	}

	function fo(e) {
		var t = a.query(document, ".js-labels-count"),
			n = O.parseFormattedNumber(t.textContent) + e;
		t.textContent = O.formatNumber(n);
		var r = a.query(document, ".js-labels-label");
		return D.pluralizeNode(n, r), n
	}

	function vo() {
		return document.querySelector(".js-issue-sidebar-form .js-issue-labels-container .js-menu-container") || document.querySelector(".js-issue-sidebar-form .js-new-issue-labels-container .js-menu-container")
	}

	function po() {
		var e = vo();
		e && w.activate(e)
	}

	function ho(e) {
		var t = document.querySelector(".js-discussion-sidebar-item.sidebar-labels");
		if (t) {
			var n = 'input[type="checkbox"][name="issue[labels][]"][data-label-name="' + e.replace(/"/g, '\\"') + '"]',
				r = document.querySelector(n);
			if (r instanceof HTMLInputElement) {
				var a = r.value,
					o = Ya.get(t) || {};
				o[a] = !0, Ya.set(t, o)
			}
		}
	}
	o.onInput(".js-label-filter-field", function(e) {
		var t = c(e.target, HTMLInputElement),
			n = a.closest(t, ".js-menu-content").querySelector(".js-new-label-name");
		if (n) {
			var r = t.value.trim();
			n.textContent = r
		}
	}), s.observe(".js-label-characters-remaining-field", function(e) {
		no(c(e, HTMLInputElement))
	}), i.on("filterable:change", ".js-filterable-issue-labels", function(e) {
		t(e instanceof CustomEvent, "null.js:393");
		var n = e.target,
			r = n.querySelector(".js-add-label-button");
		if (r) {
			var a = e.detail.inputField.value.trim().toLowerCase(),
				o = Array.from(n.querySelectorAll(".js-navigation-item")).filter(function(e) {
					return "" === e.style.display
				}),
				s = a.length > 0;
			if (s) {
				var i = !0,
					c = !1,
					u = void 0;
				try {
					for (var l, d = o[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
						var m = l.value.querySelector('input[type="checkbox"][name="issue[labels][]"]');
						if (m)
							if (m.getAttribute("data-label-name").toLowerCase() === a) {
								s = !1;
								break
							}
					}
				} catch (e) {
					c = !0, u = e
				} finally {
					try {
						!i && d.return && d.return()
					} finally {
						if (c) throw u
					}
				}
			}
			r.classList.toggle("d-block", s), r.classList.toggle("d-none", !s), to(n)
		}
	}), i.on("navigation:focus", ".js-label-options", function(e) {
		var t = e.target.closest(".js-filterable-issue-labels");
		t && to(c(t, HTMLElement))
	}), o.onFocus(".js-new-label-color-input", function(e) {
		var t = a.closest(e, "form"),
			n = a.query(t, ".js-new-label-swatches");
		n.classList.remove("d-none"), e.addEventListener("blur", function() {
			n.classList.add("d-none")
		}, {
			once: !0
		})
	}), o.onInput(".js-new-label-color-input", function(e) {
		var t = c(e.target, HTMLInputElement),
			n = t.value.trim();
		if (!(n.length < 1))
			if (0 !== n.indexOf("#") && (n = "#" + n, t.value = n), t.checkValidity()) {
				t.classList.remove("text-red");
				var r = a.closest(t, "form");
				Qa(a.query(r, ".js-new-label-color", HTMLButtonElement), n)
			} else t.classList.add("text-red")
	}), o.onKey("keyup", ".js-new-label-color-input", function(e) {
		var t = c(e.target, HTMLInputElement),
			n = t.value.trim();
		if (0 !== n.indexOf("#") && (n = "#" + n, t.value = n), t.checkValidity()) {
			var r = a.closest(t, "form");
			Qa(a.query(r, ".js-new-label-color", HTMLButtonElement), n)
		}
		i.fire(t, "change", !1), oo(a.closest(t, "form", HTMLFormElement))
	}), o.onKey("keyup", ".js-new-label-description-input", function(e) {
		var n = c(e.target, HTMLInputElement).form;
		t(n, "null.js:497"), oo(n)
	}), o.onKey("keyup", ".js-new-label-color-input", function(e) {
		var n = c(e.target, HTMLInputElement).form;
		t(n, "null.js:504"), oo(n)
	}), o.onKey("keydown", ".js-label-filter-field", function(e) {
		if ("Enter" === e.key) {
			var t = a.query(document, ".js-issue-sidebar-form .js-filterable-issue-labels").querySelector(".js-navigation-item.navigation-focus");
			if (t)
				if (t.classList.contains("js-add-label-button")) document.getElementById("label-creation-modal") && te({
					div: "#label-creation-modal"
				}, "label-creation-modal");
				else if ("A" === t.tagName) {
				var n = c(t, HTMLAnchorElement);
				window.location.href = n.href
			}
		}
	}), i.on("click", ".js-new-label-color", function(e) {
		var t = c(e.currentTarget, HTMLButtonElement);
		eo(t, Ka()), Ga(t)
	}), i.on("mousedown", ".js-new-label-color-swatch", function(e) {
		var n = c(e.currentTarget, HTMLButtonElement),
			r = n.getAttribute("data-color");
		t(r, "must have data-color attribute -- null.js:542"), eo(n, r), Ga(n), a.closest(n, ".js-new-label-swatches").classList.add("d-none")
	}), document.addEventListener("facebox:reveal", function() {
		var e = document.querySelector("#facebox .js-new-label-name-input");
		if (e) {
			var t, n;
			e = c(e, HTMLInputElement), (t = a.query(document, ".js-issue-sidebar-form .js-label-filter-field", HTMLInputElement)).value = t.defaultValue, (n = vo()) && w.deactivate(n);
			var r = a.query(document, ".js-issue-sidebar-form .js-new-label-name").textContent;
			e.value = r, no(e);
			var o = a.query(document, "#facebox .js-new-label-color-input", HTMLInputElement),
				s = Ka();
			if (o.value.length > 0)
				for (; o.value === s;) s = Ka();
			o.value = s;
			var i = a.query(document, "#facebox .js-new-label-color", HTMLButtonElement);
			Qa(i, s), Ga(i);
			var u = document.querySelector(".js-issue-sidebar-form .js-filterable-issue-labels");
			if (u) {
				var l = {},
					d = !0,
					m = !1,
					f = void 0;
				try {
					for (var v, p = a.querySelectorAll(u, 'input[type="checkbox"][name="issue[labels][]"]', HTMLInputElement)[Symbol.iterator](); !(d = (v = p.next()).done); d = !0) {
						var h = v.value;
						l[h.value] = h.checked
					}
				} catch (e) {
					m = !0, f = e
				} finally {
					try {
						!d && p.return && p.return()
					} finally {
						if (m) throw f
					}
				}
				var g = a.closest(u, ".js-discussion-sidebar-item.sidebar-labels");
				Ya.set(g, l)
			}
		}
	}), l.remoteForm(".js-new-label-modal-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s, i, c, u, l;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = a.query(t, ".js-new-label-error"), o = void 0, e.prev = 2, e.next = 5, n.html();
					case 5:
						o = e.sent, e.next = 13;
						break;
					case 8:
						e.prev = 8, e.t0 = e.catch(2), s = e.t0.response.json, r.textContent = s.message, r.classList.remove("d-none");
					case 13:
						if (o) {
							e.next = 15;
							break
						}
						return e.abrupt("return");
					case 15:
						return r.classList.add("d-none"), i = a.query(document, "#facebox .js-new-label-name-input", HTMLInputElement), c = i.value.trim(), k.close(), (u = document.getElementById("issue-labels-style")) && u.replaceWith(o.html), l = a.query(document, ".js-issue-labels-menu-content"), e.next = 24, j.updateContent(l);
					case 24:
						ho(c), Za(), po();
					case 27:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[2, 8]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), o.onInput(".js-label-characters-remaining-field", function(e) {
		no(c(e.target, HTMLInputElement))
	}), i.on("navigation:keydown", ".js-label-emoji-suggester", function(e) {
		var t = a.closest(e.target, ".js-suggester-container", HTMLElement);
		no(a.query(t, ".js-suggester-field", HTMLInputElement))
	}), i.on("click", ".js-edit-label-cancel", function(e) {
		var t = a.closest(e.target, "form", HTMLFormElement);
		oo(t), t.reset();
		var n = a.query(t, ".js-new-label-color-input", HTMLInputElement),
			r = n.value;
		a.query(t, ".js-new-label-color", HTMLButtonElement).style.backgroundColor = r, so(t), Ga(n);
		var o = e.currentTarget.closest(".labels-list-item");
		if (o) {
			a.query(o, ".js-update-label", HTMLElement).classList.add("d-none");
			var s = o.querySelector(".js-label-preview");
			if (s) s.classList.add("d-none"), a.query(o, ".js-label-link", HTMLElement).classList.remove("d-none");
			var i = o.querySelectorAll(".js-hide-on-label-edit.d-none"),
				c = !0,
				u = !1,
				l = void 0;
			try {
				for (var d, m = i[Symbol.iterator](); !(c = (d = m.next()).done); c = !0) {
					d.value.classList.remove("d-none")
				}
			} catch (e) {
				u = !0, l = e
			} finally {
				try {
					!c && m.return && m.return()
				} finally {
					if (u) throw l
				}
			}
		}
	}), l.remoteForm(".js-update-label", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = void 0, e.prev = 1, e.next = 4, n.html();
					case 4:
						r = e.sent, e.next = 12;
						break;
					case 7:
						return e.prev = 7, e.t0 = e.catch(1), o = e.t0.response.json, ao(t, o), e.abrupt("return");
					case 12:
						oo(t), a.closest(t, ".labels-list-item").replaceWith(r.html);
					case 15:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[1, 7]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-create-label", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = void 0, e.prev = 1, e.next = 4, n.html();
					case 4:
						r = e.sent, e.next = 12;
						break;
					case 7:
						return e.prev = 7, e.t0 = e.catch(1), o = e.t0.response.json, ao(t, o), e.abrupt("return");
					case 12:
						t.reset(), oo(t), a.query(document, ".js-label-list").prepend(r.html), fo(1), mo(t, !1), eo(a.query(t, ".js-new-label-color", HTMLButtonElement), Ka()), Ga(a.query(t, ".js-new-label-name-input", HTMLInputElement)), so(t), (s = t.closest(".js-details-container")) && B.toggleDetailsTarget(c(s, HTMLElement));
					case 23:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[1, 7]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), i.on("click", ".js-toggle-label-delete", function(e) {
		var t = a.closest(e.currentTarget, ".labels-list-item"),
			n = a.query(t, ".js-label-delete-container", HTMLElement),
			r = a.querySelectorAll(t, ".js-hide-on-label-delete", HTMLElement),
			o = n.classList.contains("d-none");
		n.classList.toggle("d-none");
		var s = !0,
			i = !1,
			c = void 0;
		try {
			for (var u, l = r[Symbol.iterator](); !(s = (u = l.next()).done); s = !0) {
				u.value.classList.toggle("d-none", o)
			}
		} catch (e) {
			i = !0, c = e
		} finally {
			try {
				!s && l.return && l.return()
			} finally {
				if (i) throw c
			}
		}
	}), i.on("click", ".js-details-target-new-label", function() {
		var e = a.query(document, ".js-create-label");
		a.query(e, ".js-new-label-name-input", HTMLInputElement).focus()
	}), i.on("click", ".js-edit-label", function(e) {
		var t = a.closest(e.currentTarget, ".labels-list-item"),
			n = a.query(t, ".js-update-label", HTMLElement);
		n.classList.remove("d-none"), a.query(n, ".js-new-label-name-input", HTMLInputElement).focus();
		var r = t.querySelector(".js-label-preview");
		r && (r.classList.remove("d-none"), a.query(t, ".js-label-link", HTMLElement).classList.add("d-none"));
		var o = a.querySelectorAll(t, ".js-hide-on-label-edit", HTMLElement),
			s = !0,
			i = !1,
			c = void 0;
		try {
			for (var u, l = o[Symbol.iterator](); !(s = (u = l.next()).done); s = !0) {
				u.value.classList.add("d-none")
			}
		} catch (e) {
			i = !0, c = e
		} finally {
			try {
				!s && l.return && l.return()
			} finally {
				if (i) throw c
			}
		}
	}), l.remoteForm(".js-delete-label", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return t.classList.add("loading"), e.next = 3, n.text();
					case 3:
						t.classList.remove("loading"), r = fo(-1), mo(t, 0 === r), a.closest(t, ".labels-list-item").remove();
					case 7:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}());
	var go = u(function(e) {
		var t = c(e.target, HTMLInputElement);
		Ga(t)
	}, 500);
	o.onInput(".js-new-label-name-input", go), o.onInput(".js-new-label-description-input", go), o.onInput(".js-new-label-color-input", go), i.on("navigation:keydown", ".js-label-emoji-suggester", function(e) {
		var t = a.closest(e.target, ".js-suggester-container", HTMLElement),
			n = a.query(t, ".js-suggester-field", HTMLInputElement);
		Ga(n)
	}), i.on("click", ".js-label-emoji-suggester .js-navigation-item", function(e) {
		var t = a.closest(e.target, ".js-suggester-container", HTMLElement),
			n = a.query(t, ".js-suggester-field", HTMLInputElement);
		Ga(n)
	}), o.onKey("keypress", ".js-new-label-name-input", function(e) {
		var t = c(e.target, HTMLInputElement),
			n = parseInt(t.getAttribute("data-maxlength"));
		N.getUtf8StringLength(t.value) >= n && e.preventDefault()
	}), i.on("change", ".js-issues-list-check", function() {
		var e = !!document.querySelector(".js-issues-list-check:checked");
		a.query(document, "#js-issues-toolbar").classList.toggle("triage-mode", e)
	}), i.on("change", ".js-issues-list-check", function() {
		var e = a.querySelectorAll(document, ".js-issues-list-check:checked", HTMLInputElement).map(function(e) {
				return [e.name, e.value]
			}),
			t = document.querySelectorAll("#js-issues-toolbar .js-issues-toolbar-triage .js-select-menu"),
			n = !0,
			r = !1,
			o = void 0;
		try {
			for (var s, i = t[Symbol.iterator](); !(n = (s = i.next()).done); n = !0) {
				var c = s.value;
				U.setLoadingData(c, e), c.classList.add("js-load-contents")
			}
		} catch (e) {
			r = !0, o = e
		} finally {
			try {
				!n && i.return && i.return()
			} finally {
				if (r) throw o
			}
		}
	}), i.on("selectmenu:selected", ".js-issues-toolbar-triage .js-navigation-item", function(e) {
		var n = e.currentTarget,
			r = a.closest(n, ".js-menu-container").hasAttribute("data-submits-hash"),
			o = a.closest(n, "form"),
			s = n.classList.contains("selected"),
			i = n.getAttribute("data-name");
		t(i, "null.js:43");
		var c = n.getAttribute("data-value");
		t(c, "null.js:45");
		var u = document.createElement("input");
		u.setAttribute("type", "hidden"), r ? (u.setAttribute("name", i + "[" + c + "]"), u.setAttribute("value", s ? "1" : "0")) : (u.setAttribute("name", i), u.setAttribute("value", s ? c : "")), Promise.resolve().then(function() {
			w.deactivate(n.closest(".js-menu-container"))
		}), a.query(o, ".js-issues-triage-fields").appendChild(u), o.classList.add("will-submit")
	}), i.on("menu:deactivate", ".js-issues-toolbar-triage .js-menu-container", function(e) {
		var t = e.currentTarget,
			n = t.querySelector("form.will-submit");
		if (n instanceof HTMLFormElement) {
			t.classList.add("is-loading");
			var r = n.action,
				a = n.method;
			p.fetchJSON(r, {
				method: a,
				body: new FormData(n)
			}).then(function(e) {
				return p.fetchPoll(e.job.url, {
					headers: {
						accept: "application/json"
					}
				})
			}).then(function() {
				w.deactivate(t), location.reload()
			}).catch(function() {
				t.classList.add("has-error")
			}), n.classList.remove("will-submit"), e.preventDefault()
		}
	});
	l.remoteForm(".js-undo-issue-event-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(n, r) {
			var a, o, s;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, r.text();
					case 2:
						for (a = n.getAttribute("action"), t("string" == typeof a, "null.js:8"), n.remove(), o = document.querySelectorAll('.js-undo-issue-event-form[action="' + a + '"]'), s = 0; s < o.length; s++) o[s].remove();
					case 7:
					case "end":
						return e.stop()
				}
			}, e, void 0)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}());
	var yo = "jump_to:page_views",
		bo = /^\/orgs\/([a-z0-9-]+)\/teams\/([a-z0-9-]+)/,
		jo = [/^\/([^/]+)\/([^/]+)\/?$/, /^\/([^/]+)\/([^/]+)\/blob/, /^\/([^/]+)\/([^/]+)\/tree/, /^\/([^/]+)\/([^/]+)\/issues/, /^\/([^/]+)\/([^/]+)\/pulls?/, /^\/([^/]+)\/([^/]+)\/pulse/],
		Lo = [
			["organization", /^\/orgs\/([a-z0-9-]+)\/projects\/([0-9-]+)/],
			["repository", /^\/([^/]+)\/([^/]+)\/projects\/([0-9-]+)/]
		];

	function wo() {
		var e = window.localStorage.getItem(yo);
		return e ? e.split(" ") : []
	}

	function xo(e, t) {
		return "team:" + e + "/" + t
	}

	function ko(e, t) {
		return "repository:" + e + "/" + t
	}

	function Eo(e, t) {
		return "project:" + e + "/" + t
	}

	function To(e) {
		var t = window.localStorage.getItem(yo) || "";
		t += " " + e, window.localStorage.setItem(yo, t.trim())
	}
	var So = {};

	function qo(e) {
		var n = So.dimensions && So.dimensions.session_id,
			r = So.dimensions && So.dimensions.actor_id;
		return ("menu-activation" !== e || !n) && (!("menu-activation" !== e && !n) && ("menu-activation" === e && Ao({
			dimensions: {
				session_id: n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
					var t = 16 * Math.random() | 0,
						n = "x" === e ? t : 3 & t | 8;
					return n.toString(16)
				})
			}
		}), So.event_type = "jump-to-" + e, t(null !== r && void 0 !== r, "null.js:32"), t(n, "null.js:33"), function(e) {
			ae("JUMP_TO_LOGGING") && console.log(JSON.stringify(e));
			ja(e)
		}(So), "menu-deactivation" !== e && "click" !== e && "search" !== e || (So = {}), !0))
	}

	function Ao(e) {
		e.context && (So = Object.assign(So, e.context)), e.dimensions && (So.dimensions = Object.assign(So.dimensions || {}, e.dimensions)), e.measures && (So.measures = Object.assign(So.measures || {}, e.measures))
	}

	function Mo(e, t) {
		var n = e.value.replace(/\s/g, "");
		if (!n) return t;
		for (var r = Ut(t.map(function(e) {
				return e.name
			}), n), a = {}, o = 0, s = t.length; o < s; o++) a[t[o].name] = t[o];
		return r.map(function(e) {
			return a[e]
		})
	}
	var Ho = function e(n, r, a, o) {
			Ee(this, e), this.name = n.name;
			var s = void 0;
			switch (n.type) {
				case "Project":
					t(n.owner, "null.js:103"), t(null !== n.number && void 0 !== n.number, "null.js:104"), s = Eo(n.owner.name, "" + n.number);
					break;
				case "Repository":
					s = ko.apply(void 0, He(this.name.split("/")));
					break;
				case "Team":
					s = xo.apply(void 0, He(this.name.split("/")));
					break;
				default:
					throw new Error("Invalid Suggestion type: " + n.type)
			}
			t(s, "null.js:119"), this.frequency = a.get(s) || 0, this.recency = o.get(s) || 0, this.score = this.frequency * r.frequency + this.recency * r.recency
		},
		Co = {
			frequency: .6,
			recency: .4
		};

	function Io(e) {
		var t = function() {
				for (var e = wo(), t = e.length, n = e.reduce(function(e, t) {
						return e[t] = (e[t] || 0) + 1, e
					}, {}), r = Object.keys(n), a = new Map, o = 0, s = r.length; o < s; o++) a.set(r[o], n[r[o]] / t);
				return a
			}(),
			n = function() {
				for (var e = wo(), t = e.length, n = new Set(e), r = n.size, a = [], o = t - 1; o >= 0; o--) n.has(e[o]) && (a.unshift(e[o]), n.delete(e[o]));
				for (var s = new Map, i = 0, c = a.length; i < c; i++) s.set(a[i], (i + 1) / r);
				return s
			}(),
			r = e.reduce(function(e, r) {
				return e.push({
					suggestion: r,
					vector: new Ho(r, Co, t, n)
				}), e
			}, []);
		return r.sort(function(e, t) {
			return e.vector.score > t.vector.score ? -1 : e.vector.score < t.vector.score ? 1 : 0
		}), r.map(function(e) {
			return e.suggestion
		})
	}
	var _o = function() {
			var e = ke(regeneratorRuntime.mark(function e(t) {
				var n, r, a, o, s, i, c, u, l, d, m, f, v, h;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (ae("JUMP_TO")) {
								e.next = 2;
								break
							}
							return e.abrupt("return");
						case 2:
							if (n = t.getAttribute("data-jump-to-suggestions-path")) {
								e.next = 5;
								break
							}
							return e.abrupt("return");
						case 5:
							for ((r = new URL(n, window.location.origin)).search = window.location.search.substring(1), a = new Set(wo()), o = new FormData, s = !0, i = !1, c = void 0, e.prev = 12, u = a[Symbol.iterator](); !(s = (l = u.next()).done); s = !0) d = l.value, o.append("variables[pageViews][]", d);
							e.next = 20;
							break;
						case 16:
							e.prev = 16, e.t0 = e.catch(12), i = !0, c = e.t0;
						case 20:
							e.prev = 20, e.prev = 21, !s && u.return && u.return();
						case 23:
							if (e.prev = 23, !i) {
								e.next = 26;
								break
							}
							throw c;
						case 26:
							return e.finish(23);
						case 27:
							return e.finish(20);
						case 28:
							return e.next = 30, p.fetchJSON(p.csrfRequest(r.toString(), {
								method: "POST",
								body: o
							}));
						case 30:
							if ((m = e.sent) && m.data.suggestions.nodes)
								for (f = m.data.suggestions.nodes, v = 0, h = f.length; v < h; v++) f[v].rank = v + 1;
							return e.abrupt("return", m);
						case 33:
						case "end":
							return e.stop()
					}
				}, e, this, [
					[12, 16, 20, 28],
					[21, , 23, 27]
				])
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}(),
		Ro = function() {
			var e = ke(regeneratorRuntime.mark(function e(n) {
				var r, o, s, i, u, l, d, f, v, p, h, g, y;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (ae("JUMP_TO")) {
								e.next = 2;
								break
							}
							return e.abrupt("return");
						case 2:
							return e.next = 4, Fo;
						case 4:
							if (r = e.sent) {
								e.next = 7;
								break
							}
							return e.abrupt("return");
						case 7:
							if (o = r.data.suggestions.nodes) {
								e.next = 10;
								break
							}
							return e.abrupt("return");
						case 10:
							for (n.classList.add("js-navigation-enable"), n.classList.add("jump-to-field-active"), s = n.value.trim(), i = Io(Mo(n, o)), u = i.slice(0, 7), Ao({
									dimensions: {
										actor_id: r.data.viewer.databaseId
									},
									measures: {
										result_count: i.length,
										display_count: u.length,
										filter_count: o.length - i.length
									},
									context: {
										query: s,
										display_set: u.map(function(e) {
											return [e.type, e.databaseId]
										})
									}
								}), t(n.form, "undefined -- null.js:154"), l = n.form.getAttribute("data-scoped-search-url"), s && l && u.unshift({
									avatarUrl: null,
									databaseId: 0,
									name: s,
									number: null,
									owner: null,
									path: l + "%20" + s,
									rank: 0,
									type: "Search"
								}), d = a.query(document, ".js-jump-to-suggestions-container"), f = c(a.query(d, ".js-jump-to-suggestions-template-container").firstElementChild, HTMLElement), v = document.createDocumentFragment(), p = 0, h = u.length; p < h; p++) g = s && l ? p : p + 1, v.appendChild(Oo(d, f, u[p], g, s));
							(y = a.query(d, ".js-jump-to-suggestions-results-container")).innerHTML = "", y.appendChild(v), u.length ? (n.classList.add("jump-to-field-active-non-empty"), d.classList.remove("d-none"), m.activate(y)) : (n.classList.remove("jump-to-field-active-non-empty"), d.classList.add("d-none")), qo("menu-activation") || qo("query");
						case 28:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}(),
		Fo = void 0;

	function Po() {
		ae("JUMP_TO") && (a.query(document, ".js-jump-to-suggestions-container").classList.add("d-none"), a.query(document, ".js-jump-to-field").classList.remove("jump-to-field-active"), qo("menu-deactivation"))
	}

	function Oo(e, n, r, o, s) {
		var i = n.cloneNode(!0),
			c = a.query(i, ".js-jump-to-suggestion-path", HTMLAnchorElement);
		c.href = r.path, c.setAttribute("data-target-type", r.type), c.setAttribute("data-target-id", "" + r.databaseId), c.setAttribute("data-client-rank", "" + o), c.setAttribute("data-server-rank", "" + r.rank);
		var u = a.query(i, ".js-jump-to-suggestion-avatar", HTMLImageElement),
			l = r.name;
		switch (r.type) {
			case "Team":
				l = "@" + r.name, u.alt = l, u.src = r.avatarUrl ? r.avatarUrl : "", u.classList.remove("d-none");
				break;
			default:
				u.classList.add("d-none")
		}
		var d = a.query(i, ".js-jump-to-suggestion-name", HTMLDivElement);
		d.textContent = l, Vt(d, s.replace(/\s/g, ""));
		var m = void 0;
		switch (r.type) {
			case "Project":
				m = ".js-jump-to-project-octicon-template";
				break;
			case "Repository":
				m = ".js-jump-to-repo-octicon-template";
				break;
			case "Search":
				m = ".js-jump-to-search-octicon-template"
		}
		if (m) {
			var f = e.querySelector(m);
			t(f, "null.js:256");
			var v = a.query(i, ".js-jump-to-octicon", HTMLDivElement),
				p = f.cloneNode(!0);
			v.appendChild(p), v.classList.remove("d-none")
		}
		return "Search" === r.type && a.query(i, ".js-jump-to-search-scope").classList.remove("d-none"), i
	}

	function No(e) {
		var n = e.getAttribute("data-target-type");
		if (t(n, "null.js:274"), "Search" === n) {
			var r = a.query(document, ".js-site-search-form", HTMLFormElement),
				o = r.getAttribute("data-scope-type");
			t(o, "null.js:279"), Ao({
				dimensions: {
					scope_id: parseInt(r.getAttribute("data-scope-id")),
					scope_type: o
				}
			}), qo("search")
		} else Ao({
			dimensions: {
				target_id: parseInt(e.getAttribute("data-target-id")),
				target_type: n
			},
			measures: {
				client_rank: parseInt(e.getAttribute("data-client-rank")),
				server_rank: parseInt(e.getAttribute("data-server-rank"))
			}
		}), qo("click")
	}
	s.observe(".js-jump-to-field", function(e) {
		ae("JUMP_TO") && (! function() {
			var e = window.location.pathname,
				n = e.match(bo);
			if (n) To(xo(n[1], n[2]));
			else {
				for (var r = void 0, a = 0, o = Lo.length; a < o; a++) {
					var s = Ae(Lo[a], 2),
						i = s[0],
						c = s[1];
					if (r = e.match(c)) {
						var u = void 0,
							l = void 0;
						switch (i) {
							case "organization":
								u = r[1], l = r[2];
								break;
							case "repository":
								u = r[1] + "/" + r[2], l = r[3]
						}
						return t(u, "null.js:100"), t(l, "null.js:101"), void To(Eo(u, l))
					}
				}
				for (var d = void 0, m = 0, f = jo.length; m < f; m++)
					if (d = e.match(jo[m])) return void To(ko(d[1], d[2]))
			}
		}(), Fo = _o(e), f.addThrottledInputEventListener(e, function() {
			Ro(e)
		}))
	}), o.onFocus(".js-jump-to-field", function(e) {
		Ro(c(e, HTMLInputElement))
	}), i.on("navigation:keydown", ".js-site-search-form", function(e) {
		t(e instanceof CustomEvent, "null.js:47");
		var n = e.currentTarget.querySelector(".js-navigation-item.navigation-focus");
		switch (e.detail.hotkey) {
			case "Enter":
				n ? No(a.query(n, ".js-jump-to-suggestion-path", HTMLElement)) : d.submit(c(e.currentTarget, HTMLFormElement));
				break;
			case "Escape":
				a.query(e.currentTarget, ".js-jump-to-field", HTMLInputElement).blur(), Po()
		}
	}), i.on("focusout:delay", ".js-jump-to-field", function() {
		Po()
	}), i.on("click", ".js-jump-to-suggestion-path", function(e) {
		No(e.currentTarget)
	}), i.on("click", ".js-details-target-new-label", function(e) {
		var t = Fe(c(e.target, HTMLElement), "Popover");
		if (t) {
			var n = a.query(t, "form", HTMLFormElement);
			d.submit(n)
		}
	});
	var Do = function() {
		var e = ke(regeneratorRuntime.mark(function e() {
			var t, n, r, a;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						if (t = document.querySelector(".js-launch-configuration-file-validation-container")) {
							e.next = 3;
							break
						}
						return e.abrupt("return");
					case 3:
						if (n = t.getAttribute("data-url")) {
							e.next = 6;
							break
						}
						return e.abrupt("return");
					case 6:
						return e.next = 8, p.fetchSafeDocumentFragment(document, n);
					case 8:
						if (r = e.sent) {
							e.next = 11;
							break
						}
						return e.abrupt("return");
					case 11:
						if (a = t.querySelector(".js-launch-configuration-validation")) {
							e.next = 14;
							break
						}
						return e.abrupt("return");
					case 14:
						a.replaceWith(r);
					case 15:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function() {
			return e.apply(this, arguments)
		}
	}();
	s.observe(".js-launch-credz-form", function() {
		var e;
		l.remoteForm(".js-launch-credz-form", (e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, a;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = void 0, e.prev = 1, e.next = 4, n.json();
					case 4:
						r = e.sent, e.next = 10;
						break;
					case 7:
						return e.prev = 7, e.t0 = e.catch(1), e.abrupt("return");
					case 10:
						if (r) {
							e.next = 12;
							break
						}
						return e.abrupt("return");
					case 12:
						if (!r.json.success) {
							e.next = 17;
							break
						}
						i.fire(document, "facebox:close"), Do(), e.next = 21;
						break;
					case 17:
						if (a = document.querySelector(".js-launch-credz-form-error-message")) {
							e.next = 20;
							break
						}
						return e.abrupt("return");
					case 20:
						a.textContent = r.json.error_message;
					case 21:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[1, 7]
			])
		})), function(t, n) {
			return e.apply(this, arguments)
		}))
	});
	var Bo = function(e) {
		function t(e) {
			Ee(this, t);
			var n = qe(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.name = "DataRemoteError", n.message = e, n
		}
		return Se(t, e), t
	}(Error);

	function Uo() {
		var e = document.getElementById("ajax-error-message");
		e && e.classList.add("visible")
	}

	function zo() {
		var e = document.getElementById("ajax-error-message");
		e && e.classList.remove("visible")
	}
	E(document).on("ajaxError", "[data-remote]", function(e, t, n, a) {
		var o, s, i, c;
		if (this === e.target && "abort" !== a && "canceled" !== a) {
			var u = "." + this.className.split(" ").sort().join("."),
				l = new Bo(a + " (" + t.status + ") from " + u);
			if (r.reportError(l, {
					dataRemoteTarget: z(this),
					dataRemoteMethod: null != (o = this.getAttribute("method")) ? o : "GET",
					dataRemoteUrl: null != (s = null != (i = this.href) ? i : this.action) ? s : window.location.href,
					dataRemoteType: null != (c = this.getAttribute("data-type")) ? c : "intelligent guess"
				}), /<html/.test(t.responseText)) throw Uo(), e.stopImmediatePropagation(), l;
			return setTimeout(function() {
				if (!e.isDefaultPrevented()) throw Uo(), l
			}, 0)
		}
	}), E(document).on("ajaxSend", "[data-remote]", function() {
		zo()
	}), i.on("click", ".js-ajax-error-dismiss", function() {
		zo()
	}), E(document).on("ajaxSend", "[data-remote]", function(e) {
		if (this === e.target && !e.isDefaultPrevented()) return E(this).addClass("loading")
	}), E(document).on("ajaxComplete", "[data-remote]", function(e) {
		if (this === e.target) return E(this).removeClass("loading")
	}), n.ready.then(function() {
		window._octo.push(["enablePerformance"]), window._octo.push(["recordPageView"])
	}), document.addEventListener("pjax:complete", function() {
		window._octo.push(["recordPageView"])
	});
	var Wo = new WeakMap;

	function Vo(e) {
		return Wo.get(e)
	}
	var $o = function() {
		function e(t) {
			Ee(this, e), this.input = t, this.container = a.closest(this.input, ".js-autocomplete-container"), this.results = a.query(this.container, ".js-autocomplete"), this.input.setAttribute("autocomplete", "off"), this.results.hidden = !0, this.onNavigationOpen = this.onNavigationOpen.bind(this), this.onNavigationKeyDown = this.onNavigationKeyDown.bind(this), this.onInputChange = this.onInputChange.bind(this), this.onResultsMouseDown = this.onResultsMouseDown.bind(this), this.onInputBlur = this.onInputBlur.bind(this), this.onInputFocus = this.onInputFocus.bind(this), this.mouseDown = !1, this.inputValue = null, this.fetchQueue = new v, this.input.addEventListener("focus", this.onInputFocus), document.activeElement === this.input && this.onInputFocus()
		}
		return Te(e, [{
			key: "destroy",
			value: function() {
				this.input.removeEventListener("focus", this.onInputFocus)
			}
		}, {
			key: "bindEvents",
			value: function() {
				this.input.addEventListener("blur", this.onInputBlur), f.addThrottledInputEventListener(this.input, this.onInputChange), this.results.addEventListener("mousedown", this.onResultsMouseDown), this.results.addEventListener("navigation:open", this.onNavigationOpen), this.results.addEventListener("navigation:keydown", this.onNavigationKeyDown)
			}
		}, {
			key: "unbindEvents",
			value: function() {
				this.input.removeEventListener("blur", this.onInputBlur), f.removeThrottledInputEventListener(this.input, this.onInputChange), this.results.removeEventListener("mousedown", this.onResultsMouseDown), this.results.removeEventListener("navigation:open", this.onNavigationOpen), this.results.removeEventListener("navigation:keydown", this.onNavigationKeyDown)
			}
		}, {
			key: "onInputFocus",
			value: function() {
				this.bindEvents(), this.fetchResults()
			}
		}, {
			key: "onInputBlur",
			value: function() {
				var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).keepResultsOpen;
				this.mouseDown || (e || this.hideResults(), this.inputValue = null, this.unbindEvents())
			}
		}, {
			key: "onResultsMouseDown",
			value: function() {
				var e = this;
				this.mouseDown = !0;
				document.addEventListener("mouseup", function() {
					e.mouseDown = !1
				}, {
					once: !0
				})
			}
		}, {
			key: "onInputChange",
			value: function() {
				this.inputValue !== this.input.value && (Wo.delete(this.input), i.fire(this.input, "autocomplete:autocompleted:changed")), this.fetchResults()
			}
		}, {
			key: "fetchResults",
			value: function() {
				var e = ke(regeneratorRuntime.mark(function e() {
					var t, n, r, a, o, s, i;
					return regeneratorRuntime.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (t = this.input.value.trim(), n = this.results.getAttribute("data-search-url")) {
									e.next = 4;
									break
								}
								return e.abrupt("return");
							case 4:
								if (r = null, !t) {
									e.next = 14;
									break
								}
								a = new URL(n, window.location.origin), (o = new URLSearchParams(a.search.slice(1))).append("q", t), a.search = o.toString(), this.container.classList.add("is-sending"), r = p.fetchText(a), e.next = 18;
								break;
							case 14:
								if (!this.results.querySelector("[data-autocomplete-value]")) {
									e.next = 17;
									break
								}
								return this.hideResults(), e.abrupt("return");
							case 17:
								r = Promise.resolve("");
							case 18:
								return e.next = 20, this.fetchQueue.push(r);
							case 20:
								s = e.sent, (i = this.results.querySelector(".js-autocomplete-results")) && (i.innerHTML = s), this.onResultsChange(t), this.container.classList.remove("is-sending");
							case 25:
							case "end":
								return e.stop()
						}
					}, e, this)
				}));
				return function() {
					return e.apply(this, arguments)
				}
			}()
		}, {
			key: "onResultsChange",
			value: function(e) {
				if (this.results.querySelector("[data-autocomplete-value]")) {
					if (this.inputValue !== e && (this.inputValue = e, this.showResults(), this.input.matches("[data-autocomplete-autofocus]"))) {
						var t = this.results.querySelector(".js-navigation-container");
						t && m.focus(t)
					}
				} else this.hideResults()
			}
		}, {
			key: "onNavigationKeyDown",
			value: function(e) {
				if (null !== e.target.getAttribute("data-autocomplete-value")) switch (e.detail.hotkey) {
					case "Tab":
						this.onNavigationOpen(e), e.preventDefault();
						break;
					case "Escape":
						this.hideResults(), e.preventDefault()
				}
			}
		}, {
			key: "onNavigationOpen",
			value: function(e) {
				if (null !== e.target.getAttribute("data-autocomplete-value")) {
					var t = e.target;
					if (t.classList.contains("disabled")) this.input !== document.activeElement && this.onInputBlur({
						keepResultsOpen: !0
					});
					else {
						var n = this.inputValue,
							r = t.getAttribute("data-autocomplete-value");
						this.inputValue = r, this.input.value = r, Wo.set(this.input, r), i.fire(this.input, "autocomplete:autocompleted:changed"), i.fire(this.input, "autocomplete:result", {
							text: r,
							query: n
						}), t.classList.remove("active"), this.input === document.activeElement ? this.hideResults() : this.onInputBlur()
					}
				}
			}
		}, {
			key: "showResults",
			value: function() {
				if (this.results.hidden) {
					! function(e, t) {
						var n = e.getBoundingClientRect(),
							r = n.height,
							a = n.width;
						t.hidden = !1, t.style.position = "absolute", t.style.width = a + "px";
						var o = Jo(e) + r;
						s = t, i = o + 5, c = Jo(s), u = parseInt(getComputedStyle(s).top, 10), s.style.top = i - c + u + "px";
						var s, i, c, u
					}(this.input, this.results), this.input.classList.add("js-navigation-enable");
					var e = this.results.querySelector(".js-navigation-container");
					e && m.push(e)
				}
			}
		}, {
			key: "hideResults",
			value: function() {
				if (this.inputValue = null, !this.results.hidden) {
					this.input.classList.remove("js-navigation-enable");
					var e = this.results.querySelector(".js-navigation-container");
					e && m.pop(e), this.results.hidden = !0
				}
			}
		}]), e
	}();

	function Jo(e) {
		return e.getBoundingClientRect().top + window.pageYOffset
	}
	var Ko = new WeakMap;
	s.observe(".js-autocomplete-field", {
		constructor: HTMLInputElement,
		add: function(e) {
			Ko.set(e, new $o(e))
		},
		remove: function(e) {
			var t = Ko.get(e);
			t && (t.destroy(), Ko.delete(e))
		}
	});
	var Go = new WeakMap,
		Yo = ["input[type=submit][data-disable-with]", "button[data-disable-with]"].join(", ");

	function Xo(e, t) {
		e instanceof HTMLInputElement ? e.value = t : e.innerHTML = t
	}

	function Qo(e) {
		var n = !0,
			r = !1,
			a = void 0;
		try {
			for (var o, s = e.querySelectorAll(Yo)[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
				var i = o.value,
					c = Go.get(i);
				null != c && (t(i instanceof HTMLInputElement || i instanceof HTMLButtonElement, "null.js:58"), Xo(i, c), i.hasAttribute("data-disable-invalid") && !e.checkValidity() || (i.disabled = !1), Go.delete(i))
			}
		} catch (e) {
			r = !0, a = e
		} finally {
			try {
				!n && s.return && s.return()
			} finally {
				if (r) throw a
			}
		}
	}

	function Zo() {
		var e = window.location.hash.slice(1);
		if (e) {
			var t = !0,
				n = !1,
				r = void 0;
			try {
				for (var a, o = document.querySelectorAll("[data-hashchange-activated]")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
					var s = a.value;
					if (s.getAttribute("data-hashchange-activated") === e) return s
				}
			} catch (e) {
				n = !0, r = e
			} finally {
				try {
					!t && o.return && o.return()
				} finally {
					if (n) throw r
				}
			}
		}
	}

	function es() {
		var e = this.getAttribute("data-url");
		if (e) {
			var t = p.fetchJSON(e),
				n = this.getAttribute("data-id"),
				r = this.textContent,
				a = document.querySelectorAll(".js-issue-link[data-id='" + n + "']"),
				o = !0,
				s = !1,
				i = void 0;
			try {
				for (var c, u = a[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
					c.value.removeAttribute("data-url")
				}
			} catch (e) {
				s = !0, i = e
			} finally {
				try {
					!o && u.return && u.return()
				} finally {
					if (s) throw i
				}
			}
			var l, d = (l = this, function(e) {
				var t = (null != e.response ? e.response.status : void 0) || 500,
					n = function() {
						switch (t) {
							case 404:
								return this.getAttribute("data-permission-text");
							default:
								return this.getAttribute("data-error-text")
						}
					}.call(l);
				return ts(a, n)
			});
			return t.then(function(e) {
				return ts(a, r + ", " + e.title)
			}, d)
		}
	}

	function ts(e, t) {
		var n = !0,
			r = !1,
			a = void 0;
		try {
			for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
				var i = o.value;
				i.classList.add("tooltipped"), i.classList.add("tooltipped-ne"), i.setAttribute("aria-label", t)
			}
		} catch (e) {
			r = !0, a = e
		} finally {
			try {
				!n && s.return && s.return()
			} finally {
				if (r) throw a
			}
		}
	}

	function ns(e) {
		return null == e.getAttribute("data-pjax-preserve-scroll") && 0
	}

	function rs(e) {
		var t = E(e),
			n = t.add(t.parents("[data-pjax]")).map(function() {
				var e = this.getAttribute("data-pjax");
				if (null != e && "true" !== e) return e
			})[0];
		return n ? document.querySelector(n) : E(e).closest("[data-pjax-container]")[0]
	}

	function as(e, t) {
		return e.split("/", 3).join("/") === t.split("/", 3).join("/")
	}
	i.on("submit", "form", function(e) {
		var n, r = !0,
			a = !1,
			o = void 0;
		try {
			for (var s, i = e.currentTarget.querySelectorAll(Yo)[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
				var c = s.value;
				t(c instanceof HTMLInputElement || c instanceof HTMLButtonElement, "null.js:42"), Go.set(c, (n = c) instanceof HTMLInputElement ? n.value || "Submit" : n.innerHTML || "");
				var u = c.getAttribute("data-disable-with");
				u && Xo(c, u), c.disabled = !0
			}
		} catch (e) {
			a = !0, o = e
		} finally {
			try {
				!r && i.return && i.return()
			} finally {
				if (a) throw o
			}
		}
	}, {
		capture: !0
	}), E(document).on("ajaxComplete", "form", function(e) {
		e.currentTarget === e.target && Qo(e.currentTarget)
	}), l.afterRemote(Qo), F(function() {
		var e = Zo();
		e && setTimeout(function() {
			e.click()
		}, 0)
	}), document.addEventListener("facebox:close", function() {
		var e = Zo();
		e && /facebox/.test(e.rel) && h.replaceState(h.getState(), "", window.location.href.split("#")[0])
	}), document.addEventListener("facebox:reveal", function() {
		var e = document.getElementById("facebox");
		setTimeout(function() {
			var t, n;
			t = e.querySelectorAll("input[autofocus], textarea[autofocus]"), (n = t[t.length - 1]) && document.activeElement !== n && n.focus()
		}, 0), E(e).on("keydown", W)
	}), document.addEventListener("facebox:afterClose", function() {
		E("#facebox").off("keydown", W), E("#facebox :focus").blur()
	}), s.observe("a[rel*=facebox]", function(e) {
		k.addFaceboxEventListener(e)
	}), document.addEventListener("facebox:close", k.teardownOnClose), i.on("click", ".js-facebox-close", function(e) {
		e.preventDefault(), k.close()
	}), s.observe(".js-issue-link", function(e) {
		e.addEventListener("mouseenter", es)
	}), E(document).on("ajaxSuccess", ".js-immediate-updates", function(e, t, n, r) {
		var a = void 0;
		if (this === e.target) {
			var o = r.updateContent;
			for (a in o) {
				var s = o[a],
					i = document.querySelector(a);
				i && j.replaceContent(i, s)
			}
		}
	}), i.on("click", ".js-permalink-shortcut", function(e) {
		window.location = this.href + window.location.hash, e.preventDefault()
	}), i.on("click", "[data-pjax] a, a[data-pjax]", function(e) {
		t(e instanceof MouseEvent, "null.js:67");
		var n = e.currentTarget;
		if (n instanceof HTMLAnchorElement) {
			if (null != n.getAttribute("data-skip-pjax")) return;
			if (null != n.getAttribute("data-remote")) return;
			var r = rs(n);
			r && _.click(e, {
				container: r,
				scrollTo: ns(n)
			})
		}
	}), E(document).on("submit", "form[data-pjax]", function(e) {
		var t = rs(this);
		t && _.submit(e, {
			container: t,
			scrollTo: ns(this)
		})
	}), i.on("pjax:click", "#js-repo-pjax-container a[href]", function(e) {
		t(e.currentTarget instanceof HTMLAnchorElement, "null.js:21");
		var n = e.currentTarget.pathname;
		as(n, location.pathname) ? function(e) {
			return "projects" === e.split("/")[3] && as(e, location.pathname)
		}(n) && e.preventDefault() : e.preventDefault()
	}), i.on("pjax:click", ".js-comment-body", function(e) {
		t(e.target instanceof HTMLAnchorElement, "null.js:33"), "files" === e.target.pathname.split("/")[3] && e.preventDefault()
	});
	var os = {};
	n.ready.then(function() {
		os[document.location.pathname] = E("head [data-pjax-transient]")
	}), document.addEventListener("pjax:beforeReplace", function(e) {
		t(e instanceof CustomEvent, "null.js:19");
		var n, r = void 0,
			a = void 0,
			o = e.detail.contents;
		for (r = a = 0, n = o.length; a < n; r = ++a) {
			var s = o[r];
			s && ("pjax-head" === s.id ? (os[document.location.pathname] = E(s).children(), o[r] = null) : "js-flash-container" === s.id && (E("#js-flash-container").replaceWith(s), o[r] = null))
		}
	}), document.addEventListener("pjax:end", function() {
		var e = os[document.location.pathname];
		if (e) {
			E("head [data-pjax-transient]").remove();
			var t = E(e).not("title, script, link[rel='stylesheet']"),
				n = E(e).filter("link[rel='stylesheet']");
			return E(document.head).append(t.attr("data-pjax-transient", !0)), E(document.head).append(n)
		}
	}), n.ready.then(function() {
		var e = document.body;
		t(e, "null.js:8"), e.classList.contains("js-print-popup") && (window.print(), setTimeout(window.close, 1e3))
	});
	var ss = new v;
	o.onFocus(".js-quicksearch-field", function(e) {
		t(e instanceof HTMLInputElement, "null.js:43");
		var n = c(e.form, HTMLFormElement);
		m.push(n.querySelector(".js-quicksearch-results"))
	}), o.onInput(".js-quicksearch-field", function(e) {
		var n = c(e.target, HTMLInputElement),
			r = n.value.replace(/^\s+|\s+$/g, ""),
			o = a.closest(n, "form"),
			s = a.query(o, ".js-quicksearch-results").getAttribute("data-quicksearch-url");
		t(s, "null.js:77");
		var i = void 0;
		if (r.length) {
			var u = new URL(s, window.location.origin),
				l = new URLSearchParams(u.search.slice(1));
			l.append("q", r), u.search = l.toString(), o.classList.add("is-sending"), i = p.fetchText(u)
		} else i = Promise.resolve("");

		function d() {
			o.classList.remove("is-sending")
		}
		t(ss, "null.js:95"), ss.push(i).then(function(e) {
			var t = a.query(o, ".js-quicksearch-results");
			t.innerHTML = e, t.classList.toggle("active", "" !== r)
		}).then(d, d)
	}), i.on("navigation:keydown", ".js-quicksearch-results", function(e) {
		t(e instanceof CustomEvent, "null.js:58");
		var n = e.target,
			r = a.closest(n, "form", HTMLFormElement);
		if ("Escape" === e.detail.hotkey) {
			var o = a.query(r, ".js-quicksearch-results");
			o.classList.remove("active"), m.clear(o)
		} else "Enter" !== e.detail.hotkey || n.classList.contains("js-navigation-item") || (d.submit(r), e.preventDefault())
	}), i.on("submit", ".js-quicksearch-form", function(e) {
		t(e.currentTarget instanceof HTMLFormElement, "null.js:49");
		var n = e.currentTarget.querySelector(".js-quicksearch-results");
		n && (n.classList.remove("active"), m.pop(n))
	});
	var is = document.querySelector("meta[name=user-login]");

	function cs(e, t) {
		var n = e.fuzzyFilterScoreCache,
			r = t.fuzzyFilterScoreCache,
			a = e.fuzzyFilterTextCache,
			o = t.fuzzyFilterTextCache;
		return n > r ? -1 : n < r ? 1 : a < o ? -1 : a > o ? 1 : 0
	}

	function us(e, t, n) {
		var r = n[3],
			a = n[4];
		return {
			type: e,
			text: r,
			query: a,
			startIndex: t - a.length,
			endIndex: t
		}
	}! function() {
		if (is instanceof HTMLMetaElement) {
			var e = is.content,
				t = String(!!e.length);
			try {
				localStorage.setItem("logged-in", t)
			} catch (e) {
				return
			}
			window.addEventListener("storage", function(e) {
				if (e.storageArea === localStorage && "logged-in" === e.key && ("true" === e.newValue || "false" === e.newValue) && e.newValue !== t) {
					t = e.newValue;
					var n = a.query(document, ".js-stale-session-flash");
					n.classList.toggle("is-signed-in", "true" === t), n.classList.toggle("is-signed-out", "false" === t), n.classList.remove("d-none"), window.addEventListener("popstate", function(e) {
						null != e.state.container && location.reload()
					}), i.on("submit", "form", function(e) {
						e.preventDefault()
					})
				}
			})
		}
	}();
	var ls = {
			mention: {
				typeid: "mention",
				match: /(^|\s|\()(@([a-z0-9\-_/]*))$/i,
				replace: "$1@$value ",
				search: function(e, t, n) {
					var r = ys(t),
						a = e.querySelector("ul.mention-suggestions"),
						o = void 0;
					return o = n ? function(e, t, n) {
						t = t.toLowerCase();
						var r = n.text,
							a = null != n.score ? n.score : Bt,
							o = e;
						if (t) {
							o = [];
							var s = !0,
								i = !1,
								c = void 0;
							try {
								for (var u, l = e[Symbol.iterator](); !(s = (u = l.next()).done); s = !0) {
									var d = u.value;
									null == d.fuzzyFilterTextCache && (d.fuzzyFilterTextCache = r(d)), d.fuzzyFilterScoreCache = a(d.fuzzyFilterTextCache, t, d), d.fuzzyFilterScoreCache > 0 && o.push(d)
								}
							} catch (e) {
								i = !0, c = e
							} finally {
								try {
									!s && l.return && l.return()
								} finally {
									if (i) throw c
								}
							}
							o.sort(cs)
						}
						return null != n.limit ? o.slice(0, n.limit) : o
					}(n, t, {
						limit: 5,
						score: function(e, t, n) {
							var a = r.score(e),
								o = n.score;
							return "number" == typeof o ? a * o : a
						},
						text: function(e) {
							return e.login ? (e.login + " " + e.name).trim().toLowerCase() : (e.name + " " + e.description).trim().toLowerCase()
						}
					}) : Yt(a, t, {
						limit: 5,
						text: fs,
						score: function(e, t, n) {
							var a = r.score(e, t, n),
								o = n.getAttribute("data-mentionable-score");
							return null !== o ? a * parseFloat(o) : a
						}
					}), Promise.resolve({
						element: a,
						results: o
					})
				}
			},
			auditLogUser: {
				typeid: "auditLogUser",
				match: /(^|\s)((-?actor:|-?user:)([a-z0-9\-+_]*))$/i,
				replace: "$1$3$value ",
				search: function(e, t) {
					var n = e.querySelector("ul.user-suggestions"),
						r = Yt(n, t, {
							limit: 5
						});
					return Promise.resolve({
						element: n,
						results: r
					})
				},
				normalizeMatch: us
			},
			auditLogOrg: {
				typeid: "auditLogOrg",
				match: /(^|\s)((-?org:)([a-z0-9\-+_]*))$/i,
				replace: "$1$3$value ",
				search: function(e, t) {
					var n = e.querySelector("ul.org-suggestions"),
						r = Yt(n, t, {
							limit: 5
						});
					return Promise.resolve({
						element: n,
						results: r
					})
				},
				normalizeMatch: us
			},
			auditLogAction: {
				typeid: "auditLogAction",
				match: /(^|\s)((-?action:)([a-z0-9.\-+_]*))$/i,
				replace: "$1$3$value ",
				search: function(e, t) {
					var n = e.querySelector("ul.action-suggestions"),
						r = Yt(n, t, {
							limit: 5
						});
					return Promise.resolve({
						element: n,
						results: r
					})
				},
				normalizeMatch: us
			},
			auditLogRepo: {
				typeid: "auditLogRepo",
				match: /(^|\s)((-?repo:)([a-z0-9/\-+_]*))$/i,
				replace: "$1$3$value ",
				search: function(e, t) {
					var n = e.querySelector("ul.repo-suggestions"),
						r = Yt(n, t, {
							limit: 5
						});
					return Promise.resolve({
						element: n,
						results: r
					})
				},
				normalizeMatch: us
			},
			auditLogCountry: {
				typeid: "auditLogCountry",
				match: /(^|\s)((-?country:)([a-z0-9\-+_]*))$/i,
				replace: "$1$3$value ",
				search: function(e, t) {
					var n = e.querySelector("ul.country-suggestions"),
						r = Yt(n, t, {
							limit: 5
						});
					return Promise.resolve({
						element: n,
						results: r
					})
				},
				normalizeMatch: us
			},
			emoji: {
				typeid: "emoji",
				match: /(^|\s|\()(:([a-z0-9\-+_]*))$/i,
				replace: "$1$value ",
				getValue: function(e) {
					if (e.hasAttribute("data-use-colon-emoji")) return e.getAttribute("data-value");
					var t = e.firstElementChild;
					return t && "G-EMOJI" === t.tagName && !t.firstElementChild ? t.textContent : e.getAttribute("data-value")
				},
				search: function(e, t) {
					var n = e.querySelector("ul.emoji-suggestions"),
						r = Yt(n, t = " " + t.toLowerCase().replace(/_/g, " "), {
							limit: 5,
							text: ms,
							score: ps
						});
					return Promise.resolve({
						element: n,
						results: r
					})
				}
			},
			search: {
				typeid: "search",
				match: /(^|\s)([a-z-]*)$/i,
				replace: "$1$value",
				getValue: function(e) {
					return e.getAttribute("data-value")
				},
				search: function(e, t) {
					var n = e.querySelector("ul.search-suggestions"),
						r = Yt(n, t, {
							limit: 10,
							text: function(e) {
								return e.getAttribute("data-text")
							},
							score: vs
						});
					return Promise.resolve({
						element: n,
						results: r
					})
				},
				normalizeMatch: function(e, t, n) {
					var r = n[2];
					return {
						type: e,
						text: r,
						query: r,
						startIndex: t - r.length,
						endIndex: t
					}
				}
			},
			hashed: {
				typeid: "issue",
				match: /(^|\s|\()(#([a-z0-9\-_/]*))$/i,
				replace: "$1#$value ",
				search: function(e, t) {
					var n = void 0,
						r = e.querySelector("ul.hashed-suggestions"),
						a = Yt(r, t, {
							limit: 5,
							text: fs,
							score: /^\d+$/.test(t) ? (n = new RegExp("\\b" + t), function(e) {
								return function(e, t) {
									var n = e.search(t);
									return n > -1 ? 1e3 - n : 0
								}(e, n)
							}) : ys(t).score
						});
					return Promise.resolve({
						element: r,
						results: a
					})
				}
			}
		},
		ds = {};

	function ms(e) {
		var t = e.getAttribute("data-emoji-name");
		return ds[t] = " " + fs(e).replace(/_/g, " "), t
	}

	function fs(e) {
		return e.getAttribute("data-text").trim().toLowerCase()
	}

	function vs(e, t) {
		var n = e.indexOf(t);
		return -1 === n ? 0 : 1 / (n + 1)
	}

	function ps(e, t) {
		var n = ds[e].indexOf(t);
		return n > -1 ? 1e3 - n : 0
	}

	function hs(e, t, n) {
		var r, a = void 0,
			o = void 0,
			s = [];
		for (a = o = 1, r = t.length; 1 <= r ? o < r : o > r; a = 1 <= r ? ++o : --o) {
			if (-1 === (n = e.indexOf(t[a], n))) return;
			s.push(n++)
		}
		return s
	}

	function gs() {
		return 2
	}

	function ys(e) {
		var t = void 0;
		if (e) {
			var n = e.toLowerCase().split("");
			t = function(t) {
				if (!t) return 0;
				var r = function(e, t) {
					var n, r = void 0,
						a = void 0,
						o = void 0,
						s = function(e, t) {
							for (var n = 0, r = [];
								(n = e.indexOf(t, n)) > -1;) r.push(n++);
							return r
						}(e, t[0]);
					if (0 !== s.length) {
						if (1 === t.length) return [s[0], 1, []];
						for (o = null, a = 0, n = s.length; a < n; a++) {
							var i = s[a];
							if (r = hs(e, t, i + 1)) {
								var c = r[r.length - 1] - i;
								(!o || c < o[1]) && (o = [i, c, r])
							}
						}
						return o
					}
				}(t, n);
				if (!r) return 0;
				var a = e.length / r[1];
				return a /= r[0] / 2 + 1
			}
		} else t = gs;
		return {
			score: t
		}
	}

	function bs(e) {
		var t = e.match(/`{3,}/g);
		return t || (t = function(e) {
			return e.replace(/`{3,}[^`]*\n(.+)?\n`{3,}/g, "")
		}(e).match(/`/g)), null != t && t.length % 2
	}

	function js(e) {
		var n = e.options[e.selectedIndex];
		t(n, "null.js:9");
		var r = n.hasAttribute("data-already-member"),
			a = e.form;
		t(a, "null.js:13"), a.classList.toggle("is-member", r), a.classList.toggle("is-not-member", !r)
	}

	function Ls(e) {
		var n = e.closest("form").querySelector(".js-redeem-button");
		t(n instanceof HTMLButtonElement, "null.js:69"), n.disabled = e.classList.contains("free-plan")
	}

	function ws(e) {
		var t = e.getAttribute("data-login"),
			n = e.getAttribute("data-plan");
		if (t && n) {
			var r = !0,
				o = !1,
				s = void 0;
			try {
				for (var i, c = document.querySelectorAll(".js-account-row, .js-choose-account")[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
					i.value.classList.remove("selected")
				}
			} catch (e) {
				o = !0, s = e
			} finally {
				try {
					!r && c.return && c.return()
				} finally {
					if (o) throw s
				}
			}
			e.classList.add("selected");
			var u = e.querySelector(".js-choose-account");
			u && u.classList.add("selected");
			var l = a.query(document, ".js-account", HTMLInputElement);
			l && (l.value = t);
			var d = document.querySelector(".js-plan-section");
			d && d.classList.remove("d-none");
			var m = !0,
				f = !1,
				v = void 0;
			try {
				for (var p, h = document.querySelectorAll(".js-billing-plans")[Symbol.iterator](); !(m = (p = h.next()).done); m = !0) {
					p.value.classList.add("d-none")
				}
			} catch (e) {
				f = !0, v = e
			} finally {
				try {
					!m && h.return && h.return()
				} finally {
					if (f) throw v
				}
			}
			var g = document.querySelector(".js-billing-plans[data-login='" + t + "']");
			if (g) {
				g.classList.remove("d-none");
				var y = g.querySelectorAll(".js-plan-row"),
					b = 1 === y.length ? y[0] : g.querySelector("[data-name='" + n + "']");
				b && xs(b)
			}
		}
	}

	function xs(e) {
		var t = e.getAttribute("data-name"),
			n = e.closest(".js-billing-plans");
		if (n) {
			var r = n.getAttribute("data-login");
			if (r) {
				var o = "true" === n.getAttribute("data-has-billing"),
					s = parseInt(e.getAttribute("data-cost"), 10),
					i = !0,
					c = !1,
					u = void 0;
				try {
					for (var l, d = document.querySelectorAll(".js-plan-row, .js-choose-plan")[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
						l.value.classList.remove("selected")
					}
				} catch (e) {
					c = !0, u = e
				} finally {
					try {
						!i && d.return && d.return()
					} finally {
						if (c) throw u
					}
				}
				e.classList.add("selected");
				var m = e.querySelector(".js-choose-plan");
				m && m.classList.add("selected");
				var f = e.querySelector(".js-choose-plan-radio");
				f instanceof HTMLInputElement && (f.checked = !0);
				var v = a.query(document, ".js-plan", HTMLInputElement);
				if (v && (v.value = t || ""), 0 === s || o) {
					var p = document.querySelector(".js-billing-section");
					p && p.classList.add("has-removed-contents")
				} else if (r) {
					var h = document.querySelector(".js-billing-section[data-login='" + r + "']");
					h && h.classList.remove("has-removed-contents")
				}
			}
		}
	}

	function ks(e, t) {
		var n = e.closest(".js-survey-question-form"),
			r = n.querySelector(".js-survey-other-text");
		n.classList.toggle("is-other-selected", t), t ? (r.addAttribute("required", "required"), r.focus()) : r.removeAttribute("required"), i.fire(r, "change")
	}

	function Es(e) {
		var t = e.match(/#?(?:L)(\d+)/g);
		return t ? t.map(function(e) {
			return parseInt(e.replace(/\D/g, ""))
		}) : []
	}

	function Ts(e) {
		return {
			lineRange: Es(e),
			anchorPrefix: function(e) {
				var t = e.match(/(file-.+?-)L\d+?/i);
				return t ? t[1] : ""
			}(e)
		}
	}

	function Ss(e, t) {
		return e - t
	}
	i.on("focusin:delay", ".js-suggester-field", function() {
		new Bn({
			input: this,
			suggester: this.closest(".js-suggester-container").querySelector(".js-suggester"),
			types: ls,
			disable: bs
		}).setup()
	}), E(document).on("ajaxSend", function(e, t, n) {
		if (!n.crossDomain && !/[?&]_pjax=/.test(n.url)) {
			var r = document.querySelector(".js-timeline-marker");
			r && t.setRequestHeader("X-Timeline-Last-Modified", r.getAttribute("data-last-modified"))
		}
	}), l.remoteForm(".js-needs-timeline-marker-header", function(e, t, n) {
		var r = document.querySelector(".js-timeline-marker");
		if (r) {
			var a = r.getAttribute("data-last-modified");
			a && n.headers.set("X-Timeline-Last-Modified", a)
		}
	}), s.observe(".js-account-membership", function(e) {
		var t = c(e, HTMLSelectElement);
		js(t), t.addEventListener("change", function() {
			js(t)
		})
	}), i.on("submit", ".js-find-coupon-form", function(e) {
		var t = c(e.target, HTMLFormElement).action,
			n = c(document.getElementById("code"), HTMLInputElement);
		window.location = t + "/" + encodeURIComponent(n.value), e.preventDefault()
	}), i.on("click", ".js-choose-account", function(e) {
		var t = !0,
			n = !1,
			r = void 0;
		try {
			for (var o, s = document.querySelectorAll(".js-plan-row, .js-choose-plan")[Symbol.iterator](); !(t = (o = s.next()).done); t = !0) {
				o.value.classList.remove("selected")
			}
		} catch (e) {
			n = !0, r = e
		} finally {
			try {
				!t && s.return && s.return()
			} finally {
				if (n) throw r
			}
		}
		a.query(document, ".js-plan", HTMLInputElement).value = "";
		var i = !0,
			c = !1,
			u = void 0;
		try {
			for (var l, d = document.querySelectorAll(".js-billing-section")[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
				l.value.classList.add("has-removed-contents")
			}
		} catch (e) {
			c = !0, u = e
		} finally {
			try {
				!i && d.return && d.return()
			} finally {
				if (c) throw u
			}
		}
		var m = e.currentTarget.closest(".js-account-row");
		m && ws(m)
	}), i.on("click", ".js-choose-plan", function(e) {
		xs(a.closest(e.target, ".js-plan-row"))
	}), s.observe(".js-choose-plan-radio:checked", {
		add: function(e) {
			xs(e.closest(".js-plan-row"))
		}
	}), s.observe(".js-plan-row.selected", {
		add: function(e) {
			Ls(e)
		}
	}), s.observe(".js-choose-account.selected", {
		add: function(e) {
			Ls(e)
		}
	}), n.ready.then(function() {
		var e = document.querySelector(".js-account-row.selected");
		e && ws(e);
		var t = document.querySelector(".js-plan-row.selected");
		t && xs(t)
	}), i.on("change", ".js-survey-select", function() {
		ks(this, this.options[this.selectedIndex].classList.contains("js-survey-option-other"))
	}), i.on("change", ".js-survey-radio", function() {
		ks(this, this.classList.contains("js-survey-radio-other"))
	});
	var qs = !1;

	function As(e) {
		null == e && (e = Ts(window.location.hash)),
			function(e) {
				var t = e.lineRange,
					n = e.anchorPrefix,
					r = document.querySelectorAll(".js-file-line");
				if (0 !== r.length) {
					var a = !0,
						o = !1,
						s = void 0;
					try {
						for (var i, c = r[Symbol.iterator](); !(a = (i = c.next()).done); a = !0) i.value.classList.remove("highlighted")
					} catch (e) {
						o = !0, s = e
					} finally {
						try {
							!a && c.return && c.return()
						} finally {
							if (o) throw s
						}
					}
					for (var u = t[0]; u <= t[t.length - 1]; u++) {
						var l = document.querySelector("#" + n + "LC" + u);
						l && l.classList.add("highlighted")
					}
				}
			}(e),
			function() {
				var e = document.querySelector(".js-file-line-actions");
				if (!e) return;
				var t = document.querySelectorAll(".js-file-line.highlighted"),
					n = t[0];
				if (n) {
					! function(e) {
						for (var t = [], n = 0; n < e.length; n++) t.push(e[n].textContent);
						t = t.join("\n");
						var r = document.getElementById("js-copy-lines");
						if (r instanceof ClipboardCopyElement) {
							r.textContent = "Copy " + D.pluralize(e.length, "line"), r.value = t;
							var a = "Blob, copyLines, numLines:" + e.length.toString();
							r.setAttribute("data-ga-click", a)
						}
					}(t);
					var r = function(e) {
						var t = document.getElementsByClassName("js-permalink-shortcut")[0];
						if (t instanceof HTMLAnchorElement) {
							var n = "" + t.href + window.location.hash,
								r = document.getElementById("js-copy-permalink");
							if (r instanceof ClipboardCopyElement) {
								r.value = n;
								var a = "Blob, copyPermalink, numLines:" + e.toString();
								r.setAttribute("data-ga-click", a)
							}
							return n
						}
					}(t.length);
					! function(e) {
						var t = document.getElementById("js-view-git-blame");
						if (t) {
							var n = "Blob, viewGitBlame, numLines:" + e.toString();
							t.setAttribute("data-ga-click", n)
						}
					}(t),
					function(e, t) {
						var n = document.getElementById("js-new-issue");
						if (n instanceof HTMLAnchorElement && e) {
							var r = n.getAttribute("href");
							if (r) {
								var a = new URL(r, window.location.origin),
									o = new URLSearchParams(a.search.slice(1));
								o.set("permalink", e), a.search = o.toString(), n.setAttribute("href", a.toString());
								var s = "Blob, newIssue, numLines:" + t.toString();
								n.setAttribute("data-ga-click", s)
							}
						}
					}(r, t.length), e.style.top = n.offsetTop - 2 + "px", e.classList.remove("d-none")
				} else e.classList.add("d-none")
			}();
		var t = e,
			n = t.lineRange,
			r = t.anchorPrefix,
			o = document.querySelector("#" + r + "LC" + n[0]);
		!qs && o && (o.scrollIntoView(), a.closest(o, ".blob-wrapper").scrollLeft = 0);
		qs = !1
	}

	function Ms(e, t) {
		var n = "FORM" === e.nodeName ? "action" : "href",
			r = e.getAttribute(n);
		if (r) {
			var a = r.indexOf("#");
			a >= 0 && (r = r.substr(0, a)), r += t, e.setAttribute(n, r)
		}
	}

	function Hs(e) {
		var t = e.target.getAttribute("data-original-text");
		t && (e.target.textContent = "Copied!", setTimeout(function() {
			e.target.textContent = t
		}, 2e3))
	}

	function Cs(e) {
		var t = e.match(/#(diff-[a-f0-9]+)([L|R])(\d+)-?([L|R])?(\d+)?$/i);
		if (null != t && 6 === t.length) return t;
		var n = e.match(/#(discussion-diff-[0-9]+)([L|R])(\d+)-?([L|R])?(\d+)$/i);
		return null != n && 6 === n.length ? n : null
	}
	F(function() {
		if (document.querySelector(".js-file-line-container")) {
			setTimeout(As, 0);
			var e = window.location.hash,
				t = !0,
				n = !1,
				r = void 0;
			try {
				for (var a, o = document.querySelectorAll(".js-update-url-with-hash")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
					Ms(a.value, e)
				}
			} catch (e) {
				n = !0, r = e
			} finally {
				try {
					!t && o.return && o.return()
				} finally {
					if (n) throw r
				}
			}
		}
	}), i.on("click", "#js-copy-permalink", Hs), i.on("click", "#js-copy-lines", Hs), i.on("click", ".js-line-number", function(e) {
		t(e.currentTarget instanceof Element, "null.js:175");
		var n, r, a = Ts(e.currentTarget.id);
		if (e instanceof MouseEvent && e.shiftKey) {
			var o = Es(window.location.hash);
			o.length > 0 && a.lineRange.unshift(o[0])
		}
		n = function() {
			window.location.hash = function(e) {
				var t = e.lineRange,
					n = e.anchorPrefix;
				switch (t.sort(Ss), t.length) {
					case 1:
						return "#" + n + "L" + t[0];
					case 2:
						return "#" + n + "L" + t[0] + "-L" + t[1];
					default:
						return "#"
				}
			}(a)
		}, r = window.scrollY, qs = !0, n(), window.scrollTo(0, r)
	}), i.on("submit", ".js-jump-to-line-form", function(e) {
		var t = c(e.currentTarget, HTMLFormElement),
			n = a.query(t, ".js-jump-to-line-field", HTMLInputElement).value.replace(/[^\d-]/g, "").split("-").map(function(e) {
				return parseInt(e, 10)
			}).filter(function(e) {
				return e > 0
			}).sort(function(e, t) {
				return e - t
			});
		return n.length && (window.location.hash = "L" + n.join("-L")), i.fire(document, "facebox:close"), !1
	}), o.onInput(".js-csv-filter-field", function(e) {
		var t = c(e.target, HTMLInputElement).value;
		if (t) {
			t = t.toLowerCase();
			var n = !0,
				r = !1,
				a = void 0;
			try {
				for (var o, s = document.querySelectorAll(".js-csv-data tbody tr")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
					var i = o.value; - 1 === i.textContent.toLowerCase().indexOf(t) ? i.classList.add("d-none") : i.classList.remove("d-none")
				}
			} catch (e) {
				r = !0, a = e
			} finally {
				try {
					!n && s.return && s.return()
				} finally {
					if (r) throw a
				}
			}
		}
	}), i.on("navigation:keyopen", ".commits-list-item", function(e) {
		var t = e.target.querySelector(".commit-title > a");
		t && t.click()
	}), i.on("navigation:keydown", ".commits-list-item", function(e) {
		t(e instanceof CustomEvent, "null.js:14");
		var n = e.target.querySelector(".commit-title > a");
		"c" === e.detail.hotkey && n && (n.click(), e.preventDefault(), e.stopPropagation())
	}), i.on("menu:activated", ".js-diffbar-commits-menu", function(e) {
		var t = e.target.querySelector(".in-range");
		t && m.focus(e.target, t)
	});
	var Is = function() {
			var e = ke(regeneratorRuntime.mark(function e(t, n) {
				var r, a, o, s, i, c, u, l, d, m, f, v, p, h;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (r = t.anchor, a = t.side, o = t.line, s = t.lastLine, i = t.hashFragment, c = t.partialHashFragment, u = I.findElementByFragmentName(document, r)) {
								e.next = 4;
								break
							}
							return e.abrupt("return");
						case 4:
							if (l = u.nextElementSibling) {
								e.next = 7;
								break
							}
							return e.abrupt("return");
						case 7:
							if ((d = Fs(l, a, o, s)).length) {
								e.next = 27;
								break
							}
							if (!(m = I.findElementByFragmentName(document, i))) {
								e.next = 13;
								break
							}
							return na(m), e.abrupt("return");
						case 13:
							if (f = l.querySelector(".js-diff-load-container")) {
								e.next = 16;
								break
							}
							return e.abrupt("return");
						case 16:
							return e.prev = 16, e.next = 19, ca(f);
						case 19:
							(v = I.findElementByFragmentName(document, i)) instanceof HTMLElement && na(v), e.next = 26;
							break;
						case 23:
							e.prev = 23, e.t0 = e.catch(16), na(l);
						case 26:
							return e.abrupt("return");
						case 27:
							return e.next = 29, Rs(d, c);
						case 29:
							p = 1, h = I.findElementByFragmentName(document, i), Fs(l, a, o, s).length ? Is(t, n) : h ? na(h) : n < p && Is(t, n + 1);
						case 33:
						case "end":
							return e.stop()
					}
				}, e, this, [
					[16, 23]
				])
			}));
			return function(t, n) {
				return e.apply(this, arguments)
			}
		}(),
		_s = function() {
			var e = ke(regeneratorRuntime.mark(function e(n, r) {
				var o, s, i, c, u, l, d, m, f, v;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return o = void 0, r ? (s = "R" === r.slice(-1) ? "data-right-range" : "data-left-range", i = n.getAttribute(s) || "", c = parseInt(i.split("-")[0], 10), o = r + c) : o = n.hash.slice(1), u = n.getAttribute("data-url"), t(u, "null.js:136"), l = new URL(u, window.location.origin), (d = new URLSearchParams(l.search.slice(1))).append("anchor", o), l.search = d.toString(), e.next = 10, p.fetchSafeDocumentFragment(document, l);
						case 10:
							m = e.sent, f = a.closest(n, ".js-expandable-line"), h = ".file-diff-line", g = void 0, g = f.nextElementSibling, v = g && g.matches(h) ? g : null, V.preservingScrollPosition(v, function() {
								f.replaceWith(m)
							});
						case 14:
						case "end":
							return e.stop()
					}
					var h, g
				}, e, this)
			}));
			return function(t, n) {
				return e.apply(this, arguments)
			}
		}();

	function Rs(e, t) {
		return Promise.all(e.map(function(e) {
			return _s(e, t)
		}))
	}

	function Fs(e, t, n, r) {
		var o = parseInt(n, 10),
			s = parseInt(r, 10);
		return a.querySelectorAll(e, ".js-expand", HTMLAnchorElement).filter(function(e) {
			var n = "R" === t ? "data-right-range" : "data-left-range",
				r = (e.getAttribute(n) || "").split("-"),
				a = parseInt(r[0], 10),
				i = parseInt(r[1], 10);
			return a <= o && o <= i || (o <= a && i <= s || a <= s && s <= i)
		})
	}

	function Ps(e) {
		var t = a.query(e, ".js-inline-comment-form-container");
		t.classList.add("open"), a.query(t, ".js-write-tab").click(), a.query(t, ".js-comment-field").focus()
	}

	function Os(e) {
		e.reset();
		var t = a.closest(e, ".js-inline-comment-form-container");
		t.classList.remove("open"), i.fire(t, "inlinecomment:collapse")
	}

	function Ns(e, t) {
		var n = e.nextElementSibling;
		return n && n.matches(t) ? n : null
	}

	function Ds(e, t) {
		var n = a.query(e, ".js-comment-form-error"),
			r = void 0;
		r = t.errors ? Array.isArray(t.errors) ? t.errors.join(", ") : t.errors : "There was an error posting your comment.", n.textContent = r, n.style.display = "block", n.classList.remove("d-none")
	}

	function Bs(e) {
		var t = e.querySelector(".js-toggle-file-notes");
		t instanceof HTMLInputElement && d.changeValue(t, !0)
	}

	function Us() {
		var e = !0,
			t = !1,
			n = void 0;
		try {
			for (var r, a = document.querySelectorAll(".file .js-inline-comments-container")[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
				var o = r.value,
					s = o.querySelectorAll(".js-comments-holder > *").length > 0,
					i = o.querySelector(".js-inline-comment-form-container"),
					c = !!i && i.classList.contains("open");
				s || c || o.remove()
			}
		} catch (e) {
			t = !0, n = e
		} finally {
			try {
				!e && a.return && a.return()
			} finally {
				if (t) throw n
			}
		}
	}

	function zs(e) {
		var n = a.query(document, e).firstElementChild;
		t(n, "null.js:213");
		var r = n.cloneNode(!0),
			o = r.querySelector("textarea");
		return o instanceof HTMLTextAreaElement && (o.value = ""), r
	}

	function Ws(e, t) {
		var n = !0,
			r = !1,
			o = void 0;
		try {
			for (var s, i = ["type", "path", "position", "line", "side"][Symbol.iterator](); !(n = (s = i.next()).done); n = !0) {
				var c = s.value,
					u = e.elements.namedItem(c);
				if (u instanceof HTMLInputElement) {
					var l = t.getAttribute("data-" + c) || "";
					u.value = l
				}
			}
		} catch (e) {
			r = !0, o = e
		} finally {
			try {
				!n && i.return && i.return()
			} finally {
				if (r) throw o
			}
		}
		var d = t.getAttribute("data-position") || "",
			m = t.getAttribute("data-anchor") || "",
			f = a.query(e, ".js-comment-field"),
			v = f.id.replace(/^r\d+ /, "").replace("${anchor}", m).replace("${position}", d),
			p = !0,
			h = !1,
			g = void 0;
		try {
			for (var y, b = e.querySelectorAll('[for="' + f.id + '"]')[Symbol.iterator](); !(p = (y = b.next()).done); p = !0) {
				y.value.setAttribute("for", v)
			}
		} catch (e) {
			h = !0, g = e
		} finally {
			try {
				!p && b.return && b.return()
			} finally {
				if (h) throw g
			}
		}
		f.id = v
	}

	function Vs(e) {
		return Math.floor(e / 2)
	}

	function $s(e, t) {
		var n = e.parentElement;
		if (n) {
			var r = n.children,
				a = void 0;
			if (4 === r.length)
				for (var o = 0, s = r.length; o < s; o++) {
					r[o] === e && (a = Vs(o))
				}
			for (var i = 0, c = r.length; i < c; i++) {
				var u = r[i];
				null != a && Vs(i) !== a || u.classList.toggle("is-hovered", t)
			}
		}
	}
	F(function() {
		var e = function(e) {
			if (!e) return;
			var t = Cs(e);
			if (!t) return;
			var n = t[1],
				r = t[2],
				a = t[3],
				o = t[5];
			return {
				anchor: n,
				side: r,
				line: a,
				lastLine: o,
				hashFragment: n + r + a,
				partialHashFragment: n + r
			}
		}(window.location.hash);
		e && (I.findElementByFragmentName(document, e.hashFragment) && !e.lastLine || Is(e, 0))
	}), i.on("click", ".js-expand", function(e) {
		e.preventDefault(), t(e.currentTarget instanceof HTMLAnchorElement, "null.js:116"), _s(e.currentTarget, null)
	}), i.on("click", ".js-toggle-inline-comment-form", function(e) {
		Ps(a.closest(e.currentTarget, ".js-line-comments"))
	}), i.on("quote:selection", ".js-line-comments", function(e) {
		Ps(e.currentTarget)
	}), o.onKey("keydown", ".js-inline-comment-form-container form .js-comment-field", function(e) {
		var n = e.target;
		(t(n instanceof HTMLTextAreaElement, "null.js:36"), n.classList.contains("js-navigation-enable")) || "Escape" === e.key && 0 === n.value.length && (Os(a.closest(n, "form", HTMLFormElement)), e.preventDefault())
	}), i.on("click", ".js-hide-inline-comment-form", function(e) {
		Os(a.closest(e.currentTarget, "form", HTMLFormElement))
	}), i.on("click", ".js-add-single-line-comment", function(e) {
		var n = e.currentTarget;
		t(n instanceof Element, "null.js:17"), Bs(a.closest(n, ".file"));
		var r = function(e) {
			var n = a.closest(e, "tr"),
				r = Ns(n, ".js-inline-comments-container");
			if (r instanceof Element) {
				var o = a.query(n, "button.js-add-line-comment"),
					s = Array.from(r.querySelectorAll(".js-inline-comment-form")).pop();
				return t(s instanceof HTMLFormElement, "null.js:50"), Ws(s, o), r
			}
		}(n) || function(e) {
			var t = a.closest(e, "tr"),
				n = zs("#js-inline-comments-single-container-template"),
				r = n.querySelector(".js-inline-comment-form");
			r instanceof HTMLFormElement && Ws(r, e);
			return t.after(n), n
		}(n);
		Ps(Array.from(r.querySelectorAll(".js-line-comments")).pop())
	}), i.on("click", ".js-toggle-new-thread-form", function(e) {
		var n = a.closest(e.currentTarget, "tr"),
			r = Array.from(n.querySelectorAll(".js-line-comments")).pop(),
			o = a.query(r, ".js-inline-comment-form", HTMLFormElement),
			s = n.previousElementSibling;
		t(s, "null.js:34"), Ws(o, a.query(s, "button.js-add-line-comment")), Ps(r)
	}), i.on("click", ".js-add-split-line-comment", function(e) {
		var n = e.currentTarget;
		Bs(a.closest(n, ".file"));
		var r, o, s = a.closest(n, "tr"),
			i = "addition" === n.getAttribute("data-type") ? "js-addition" : "js-deletion",
			c = function(e, n, r) {
				var a = e.querySelector(".js-line-comments." + n);
				if (a) {
					var o = Array.from(a.querySelectorAll(".js-inline-comment-form")).pop();
					return t(o instanceof HTMLFormElement, "null.js:245"), Ws(o, r), a
				}
				var s = zs("#js-inline-comments-split-form-container-template");
				s.classList.add(n);
				var i = s.querySelector(".js-inline-comment-form");
				i instanceof HTMLFormElement && Ws(i, r);
				var c = e.querySelectorAll("." + n);
				c[c.length - 1].after(s);
				var u = !0,
					l = !1,
					d = void 0;
				try {
					for (var m, f = c[Symbol.iterator](); !(u = (m = f.next()).done); u = !0) {
						var v = m.value;
						v.remove()
					}
				} catch (e) {
					l = !0, d = e
				} finally {
					try {
						!u && f.return && f.return()
					} finally {
						if (l) throw d
					}
				}
				return s
			}((o = Ns(r = s, ".js-inline-comments-container")) || (o = zs("#js-inline-comments-split-container-template"), r.after(o), o), i, n);
		Ps(Array.from(c.querySelectorAll(".js-line-comments")).pop())
	}), l.remoteForm(".js-inline-comment-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(n, r) {
			var o, s, i, c, u, l;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return o = void 0, e.prev = 1, e.next = 4, r.json();
					case 4:
						o = e.sent, e.next = 16;
						break;
					case 7:
						if (e.prev = 7, e.t0 = e.catch(1), !e.t0.response) {
							e.next = 15;
							break
						}
						s = void 0;
						try {
							s = e.t0.response.json
						} catch (e) {}
						if (!s) {
							e.next = 15;
							break
						}
						return Ds(n, s), e.abrupt("return");
					case 15:
						throw e.t0;
					case 16:
						i = o.json, c = i.inline_comment, u = n.closest(".js-line-comments"), c && (t(u, "null.js:117"), a.query(u, ".js-comments-holder").append(C.parseHTML(document, c))), (l = i.inline_comment_thread) && (t(u, "null.js:124"), u.replaceWith(C.parseHTML(document, l))), Os(n);
					case 23:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[1, 7]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), document.addEventListener("session:resume", function(e) {
		t(e instanceof CustomEvent, "null.js:181"),
			function(e) {
				var t = e.match(/^new_inline_comment_(?:discussion|diff)_(?:[\w-]+)_(\d+)_(\d+)$/) || [],
					n = Ae(t, 2),
					r = n[0],
					a = n[1];
				if (r) {
					var o = document.querySelector(".js-inline-comment-form input[name='in_reply_to'][value='" + a + "']");
					if (o) {
						var s = o.closest(".js-line-comments");
						s && Ps(s)
					}
				}
			}(e.detail.targetId),
			function(e) {
				var t = e.match(/^new_inline_comment_diff_(?:[\w-]+)_(\d+)$/) || [],
					n = Ae(t, 2),
					r = n[0],
					a = n[1];
				if (r) {
					var o = document.querySelector(".js-add-line-comment[data-anchor='" + r + "'][data-position='" + a + "']");
					o && o.click()
				}
			}(e.detail.targetId)
	}), s.observe(".js-comment", {
		remove: Us
	}), document.addEventListener("inlinecomment:collapse", function() {
		Us()
	}), s.observe(".diff-table", function(e) {
		var t = null;

		function n() {
			t && $s(t, !1), t = null
		}

		function r(e) {
			t && $s(t, !1), (t = e.target.closest("td.blob-code")) && $s(t, !0)
		}
		return {
			add: function() {
				e.addEventListener("mouseenter", n), e.addEventListener("mouseleave", n), e.addEventListener("mouseover", r)
			},
			remove: function() {
				e.removeEventListener("mouseenter", n), e.removeEventListener("mouseleave", n), e.removeEventListener("mouseover", r)
			}
		}
	}), i.on("click", ".js-linkable-line-number", function(e) {
		window.location.hash = this.id, e.preventDefault()
	});
	var Js = null;

	function Ks(e) {
		return Math.floor(e / 2)
	}

	function Gs() {
		var e = void 0,
			t = void 0,
			n = void 0,
			r = void 0,
			a = void 0,
			o = void 0,
			s = void 0,
			i = void 0;
		if (Js) {
			for (n = 0, a = Js.length; n < a; n++)(e = Js[n]).classList.remove("selected-line");
			Js = null
		}
		var c = Cs(window.location.hash);
		if (c) {
			var u = c[1] + c[2] + c[3];
			if (u && (s = I.findElementByFragmentName(document, u)), s && s.classList.contains("js-linkable-line-number")) {
				var l = s.parentNode.children;
				if (4 === l.length)
					for (t = r = 0, o = l.length; r < o; t = ++r)(e = l[t]) === s && (i = Ks(t));
				Js = function() {
					var n, r = void 0,
						a = [];
					for (t = r = 0, n = l.length; r < n; t = ++r) e = l[t], null != i && Ks(t) !== i || (e.classList.toggle("selected-line"), a.push(e));
					return a
				}()
			}
		}
	}

	function Ys() {
		var e = document.body;
		t(e, "null.js:8");
		var n = document.querySelector("meta[name=diff-view]"),
			r = n && n instanceof HTMLMetaElement ? n.content : "",
			a = document.querySelector(".file-diff-split"),
			o = document.querySelector(".CommunityTemplate-header"),
			s = !!("split" === r && a || document.querySelector(".wants-full-width-container"));
		e.classList.toggle("full-width", s);
		var i = !!o;
		e.classList.toggle("full-width-p0", i)
	}

	function Xs(e) {
		var t = e.parentElement,
			n = t.querySelectorAll("td.js-line-comments").length,
			r = t.querySelectorAll("td.js-line-comments.is-collapsed").length;
		t.classList.toggle("is-collapsed", r > 0 && n === r)
	}

	function Qs(e, t) {
		var n = t.querySelector(".js-repo-access-error");
		return n.textContent = e, n.classList.remove("d-none")
	}

	function Zs() {
		var e, t = void 0,
			n = document.querySelectorAll(".js-repo-access-error"),
			r = [];
		for (t = 0, e = n.length; t < e; t++) {
			var a = n[t];
			a.textContent = "", r.push(a.classList.add("d-none"))
		}
		return r
	}

	function ei(e) {
		return e.classList.toggle("is-empty", !e.querySelector(".js-repo-access-entry"))
	}

	function ti() {
		var e = document.getElementById("collaborators");
		e && (a.query(e, ".js-add-new-collab", HTMLButtonElement).disabled = !0)
	}

	function ni(e) {
		var t = e.querySelector(".js-authorized-pushers"),
			n = parseInt(t.getAttribute("data-limit")),
			r = t.querySelectorAll(".js-authorized-user-or-team").length;
		t.classList.toggle("at-limit", r >= n)
	}

	function ri(e) {
		var t = e.querySelector(".js-value"),
			n = e.closest("form");
		return n.querySelector(".js-item-value").value = t.textContent, n
	}

	function ai() {
		document.removeEventListener("facebox:afterClose", ai);
		var e = a.query(document, ".js-permission-options").getAttribute("data-current-form");
		if (e) {
			var t = a.query(document, ".js-permission-options form." + e + " .js-navigation-container");
			if (t) {
				var n = t.querySelector(".js-original-selected");
				if (n) {
					var r = n.querySelector(".js-value"),
						o = n.querySelector(".js-select-button-text"),
						s = t.querySelector(".js-item-value"),
						i = t.querySelector(".js-navigation-item.selected"),
						c = t.closest(".Box-row");
					if (r && o && s && s instanceof HTMLInputElement && i && c) {
						var u = c.querySelector(".js-select-button");
						u && (s.value = r.textContent, i.classList.remove("selected"), n.classList.add("selected"), u.textContent = o.textContent)
					}
				}
			}
		}
	}
	F(Gs), s.observe(".blob-expanded", Gs), s.observe(".js-diff-progressive-loader", function(e) {
		e.addEventListener("load", Gs)
	}), s.observe(".js-diff-entry-loader", function(e) {
		e.addEventListener("load", Gs)
	}), i.on("click", ".js-rich-diff.collapsed .js-expandable", function(e) {
		e.preventDefault();
		var n = e.target.closest(".js-rich-diff");
		t(n, "null.js:9"), n.classList.remove("collapsed")
	}), i.on("click", ".js-show-rich-diff", function(e) {
		var n = e.currentTarget.closest(".js-warn-no-visible-changes");
		if (n) {
			n.classList.add("d-none");
			var r = n.parentElement;
			t(r, "null.js:20");
			var a = r.querySelector(".js-no-rich-changes");
			a && a.classList.remove("d-none")
		}
	}), s.observe("meta[name=diff-view]", {
		add: Ys,
		remove: Ys
	}), s.observe(".file-diff-split", {
		add: Ys,
		remove: Ys
	}), s.observe(".js-compare-tab.selected", {
		add: Ys,
		remove: Ys
	}), s.observe(".wants-full-width-container", {
		add: Ys,
		remove: Ys
	}), s.observe(".CommunityTemplate-header", {
		add: Ys,
		remove: Ys
	}), i.on("change", ".js-toggle-file-notes", function() {
		this.closest(".file").classList.toggle("show-inline-notes", this.checked)
	}), i.on("click", ".js-toggle-all-file-notes", function(e) {
		var t = a.querySelectorAll(document, ".js-toggle-file-notes", HTMLInputElement),
			n = t.some(function(e) {
				return e.checked
			}),
			r = !0,
			o = !1,
			s = void 0;
		try {
			for (var i, c = t[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
				var u = i.value;
				d.changeValue(u, !n)
			}
		} catch (e) {
			o = !0, s = e
		} finally {
			try {
				!r && c.return && c.return()
			} finally {
				if (o) throw s
			}
		}
		e.preventDefault()
	}), s.observe(".js-inline-comments-container", function(e) {
		var t = void 0,
			n = e.closest(".file");
		if (n) return {
			add: t = function() {
				var e = null != n.querySelector(".js-inline-comments-container");
				n.classList.toggle("has-inline-notes", e)
			},
			remove: t
		}
	}), s.observe("td.js-line-comments.is-collapsed", {
		add: function(e) {
			Xs(e)
		},
		remove: function(e) {
			Xs(e)
		}
	}), E(document).on("focusin", ".js-url-field", function() {
		var e = this;
		return setTimeout(function() {
			return E(e).select()
		}, 0)
	}), document.querySelector(".js-account-membership-form") && (E(document).one("change.early-access-tracking", ".js-account-membership-form", function() {
		P.trackEvent({
			category: "Large File Storage",
			action: "attempt",
			label: "location: early access form"
		})
	}), E(document).on("submit.early-access-tracking", ".js-account-membership-form", function() {
		P.trackEvent({
			category: "Large File Storage",
			action: "submit",
			label: "location: early access form"
		})
	})), i.on("autocheck:send", ".js-edit-repo-container .js-repo-name", function(e) {
		var n = c(e.currentTarget, HTMLInputElement);
		t(n.form, "null.js:11"), a.query(n.form, ".js-rename-repository-button", HTMLButtonElement).disabled = !0
	}), i.on("autocheck:error", ".js-edit-repo-container .js-repo-name", function(e) {
		var n = c(e.currentTarget, HTMLInputElement);
		t(n.form, "null.js:17"), a.query(n.form, ".js-rename-repository-button", HTMLButtonElement).disabled = !0
	}), i.on("autocheck:success", ".js-edit-repo-container .js-repo-name", function(e) {
		var n = c(e.currentTarget, HTMLInputElement);
		t(n.form, "null.js:23"), a.query(n.form, ".js-rename-repository-button", HTMLButtonElement).disabled = !1
	}), i.on("click", ".js-repo-team-suggestions-view-all", function() {
		var e = ke(regeneratorRuntime.mark(function e(n) {
			var r, o, s, i, c, u, l, d, m, f;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = a.closest(n.currentTarget, "ul"), o = n.currentTarget.getAttribute("data-url"), t(o, "null.js:30"), s = a.querySelectorAll(document, ".js-repo-toggle-team:checked", HTMLInputElement).map(function(e) {
							return e.value
						}), e.next = 6, p.fetchSafeDocumentFragment(document, o);
					case 6:
						for (i = e.sent, r.innerHTML = "", r.append(i), c = !0, u = !1, l = void 0, e.prev = 12, d = s[Symbol.iterator](); !(c = (m = d.next()).done); c = !0) f = m.value, a.query(r, '.js-repo-toggle-team[value="' + f + '"]', HTMLInputElement).checked = !0;
						e.next = 20;
						break;
					case 16:
						e.prev = 16, e.t0 = e.catch(12), u = !0, l = e.t0;
					case 20:
						e.prev = 20, e.prev = 21, !c && d.return && d.return();
					case 23:
						if (e.prev = 23, !u) {
							e.next = 26;
							break
						}
						throw l;
					case 26:
						return e.finish(23);
					case 27:
						return e.finish(20);
					case 28:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[12, 16, 20, 28],
				[21, , 23, 27]
			])
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}()), s.observe(".js-add-new-collab", ti), i.on("change", ".js-add-repo-access-completer", function(e) {
		if (e.target === e.currentTarget)
			if (t(e.target instanceof AutocompleteElement, "null.js:87"), e.target.value) {
				var n = a.closest(e.target, ".js-add-repo-access-form");
				a.query(n, ".js-add-new-collab", HTMLButtonElement).disabled = !1
			} else ti()
	}), i.on("selectmenu:selected", ".js-repo-access-team-select", function() {
		var e = this.querySelector(".js-repo-access-team-select-option.selected").getAttribute("data-team-id"),
			t = this.closest(".js-repo-access-group").querySelector(".js-add-repo-access-field");
		t.value = e, d.submit(t.form)
	}), E(document).on("ajaxSend", ".js-add-repo-access-form", function() {
		Zs()
	}), E(document).on("ajaxSuccess", ".js-add-repo-access-form", function(e, t, n, r) {
		var o = void 0,
			s = this.closest(".js-repo-access-group"),
			i = this.querySelector(".js-add-repo-access-field");
		o = "teams" === s.id || "project-collaborators" === s.id ? s.querySelector(".js-repo-access-list") : s.querySelector(".js-repo-access-list-invites");
		var c = i.value;
		if (i.value = "", r.error) return Qs(r.error, s);
		if (ti(), o.insertAdjacentHTML("beforeend", r.html), ei(s), r.seats || 0 === r.seats) {
			var u = 1 === r.seats ? "seat" : "seats",
				l = document.getElementById("available-seats");
			l && (l.innerHTML = r.seats + " " + u)
		}
		return "teams" === s.id ? function(e) {
			var t = void 0,
				n = void 0,
				r = document.querySelector(".js-repo-access-team-select");
			if (r) {
				var o = 0,
					s = r.querySelectorAll(".js-repo-access-team-select-option");
				for (t = 0, n = s.length; t < n; t++) {
					var i = s[t],
						c = i.classList;
					e === i.getAttribute("data-team-id") && (c.add("has-access"), c.remove("selected")), c.contains("has-access") || o++
				}
				if (0 === o) return a.closest(r, ".js-repo-access-group").classList.add("no-form")
			}
		}(c) : void 0
	}), E(document).on("ajaxSuccess", ".js-remove-repo-access-form", function() {
		Zs();
		var e = this.closest(".js-repo-access-entry"),
			t = this.closest(".js-repo-access-group");
		return "teams" === t.id && function(e) {
			var t = document.querySelector(".js-repo-access-team-select");
			if (t) {
				var n = t.querySelector("[data-team-id='" + e + "']");
				n && n.classList.remove("has-access"), a.closest(t, ".js-repo-access-group").classList.remove("no-form")
			}
		}(e.getAttribute("data-team-id")), e.remove(), ei(t)
	}), E(document).on("ajaxError", ".js-remove-repo-access-form", function() {
		return Qs(this.getAttribute("data-error-message"), this.closest(".js-repo-access-group")), !1
	}), i.on("change", ".js-repo-data-opt-in", function() {
		var e = this.closest(".js-repo-data-services"),
			t = this.checked,
			n = !0,
			r = !1,
			a = void 0;
		try {
			for (var o, s = e.querySelectorAll(".js-repo-data-options")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
				o.value.classList.toggle("active", t)
			}
		} catch (e) {
			r = !0, a = e
		} finally {
			try {
				!n && s.return && s.return()
			} finally {
				if (r) throw a
			}
		}
		var i = !0,
			c = !1,
			u = void 0;
		try {
			for (var l, d = e.querySelectorAll(".js-repo-data-option")[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
				var m = l.value;
				t ? m.removeAttribute("disabled") : (m.setAttribute("disabled", "disabled"), m.removeAttribute("checked"))
			}
		} catch (e) {
			c = !0, u = e
		} finally {
			try {
				!i && d.return && d.return()
			} finally {
				if (c) throw u
			}
		}
	}), i.on("change", ".js-default-branch", function() {
		var e = a.query(document, ".js-default-branch-confirmation", HTMLInputElement);
		a.query(document, ".js-change-default-branch-button", HTMLButtonElement).disabled = this.value === e.getAttribute("data-original-value"), e.value = this.value
	}), i.on("change", ".js-repo-features-form input[type=checkbox]", function() {
		var e = this.closest(".js-repo-option").querySelector(".js-status-indicator");
		e.classList.remove("status-indicator-success", "status-indicator-failed"), e.classList.add("status-indicator-loading")
	}), E(document).on("ajaxSuccess", ".js-repo-features-form", function(e, t, n, r) {
		Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) {
			e.classList.remove("status-indicator-loading"), e.classList.add("status-indicator-success")
		}), /^\s*</.test(r) && E(document.querySelector(".js-repo-nav")).replaceWith(r)
	}), E(document).on("ajaxError", ".js-repo-features-form", function() {
		Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) {
			e.classList.remove("status-indicator-loading"), e.classList.add("status-indicator-failed");
			var t = e.closest(".js-repo-option").querySelector("input[type=checkbox]");
			t.checked = !t.checked
		})
	}), i.on("change", ".js-merge-features-form input[type=checkbox]", function() {
		Array.from(this.form.querySelectorAll(".errored")).forEach(function(e) {
			return e.classList.remove("errored")
		});
		var e = this.closest(".js-repo-option").querySelector(".js-status-indicator");
		e.classList.remove("status-indicator-success", "status-indicator-failed"), e.classList.add("status-indicator-loading")
	}), E(document).on("ajaxSuccess", ".js-merge-features-form", function() {
		Array.from(this.querySelectorAll(".errored")).forEach(function(e) {
			return e.classList.remove("errored")
		}), Array.from(this.querySelectorAll(".js-select-one-warning")).forEach(function(e) {
			e.classList.add("d-none")
		}), Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) {
			e.classList.remove("status-indicator-loading"), e.classList.add("status-indicator-success")
		})
	}), E(document).on("ajaxError", ".js-merge-features-form", function(e) {
		Array.from(this.querySelectorAll(".js-select-one-warning")).forEach(function(e) {
			e.classList.remove("d-none")
		}), Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) {
			e.classList.remove("status-indicator-loading"), e.classList.add("status-indicator-failed");
			var t = e.closest(".js-repo-option");
			t.classList.add("errored");
			var n = t.querySelector("input[type=checkbox]");
			n.checked = !n.checked
		}), Array.from(this.querySelectorAll(".status-indicator-success")).forEach(function(e) {
			e.classList.remove("status-indicator-success")
		}), e.preventDefault()
	}), i.on("change", ".js-protect-branch", function() {
		var e = this.closest(".js-protected-branch-settings"),
			t = this.checked;
		Array.from(e.querySelectorAll(".js-protected-branch-options")).forEach(function(e) {
			e.classList.toggle("active", t)
		}), Array.from(e.querySelectorAll(".js-protected-branch-option")).forEach(function(e) {
			t ? e.removeAttribute("disabled") : e.setAttribute("disabled", "disabled")
		})
	}), i.on("change", ".js-required-status-toggle", function() {
		this.closest(".js-protected-branch-settings").querySelector(".js-required-statuses").classList.toggle("d-none", !this.checked)
	}), i.on("change", ".js-required-status-checkbox", function() {
		this.closest(".js-protected-branches-item").querySelector(".js-required-status-badge").classList.toggle("d-none", !this.checked)
	}), i.on("change", ".js-authorized-branch-pushers-toggle, .js-authorized-review-dismisser-toggle", function() {
		var e = this.closest(".js-protected-branch-options").querySelector(".js-authorized-pushers");
		e.classList.toggle("d-none", !this.checked), e.querySelector(".js-autocomplete-field").focus()
	}), i.on("change", ".js-protected-branch-include-admin-toggle", function() {
		var e = this.closest(".js-protected-branch-settings").querySelectorAll(".js-protected-branch-admin-permission");
		Array.from(e).forEach(function(e) {
			e.classList.toggle("d-none"), e.classList.toggle("active", !e.classList.contains("d-none"))
		})
	}), i.on("autocomplete:result", ".js-add-protected-branch-user-or-team", function(e) {
		t(e instanceof CustomEvent, "null.js:178");
		var n = e.detail.text,
			r = this.closest(".js-protected-branch-options"),
			a = this.closest(".js-autocomplete-container"),
			o = new URL(a.getAttribute("data-url"), window.location.origin),
			s = new URLSearchParams(o.search.slice(1));
		s.append("item", n), o.search = s.toString();
		var i = r.querySelector(".js-authorized-users-and-teams"),
			c = i.querySelector("div[data-user-or-team-name='" + n + "']");
		c ? (a.querySelector(".js-autocomplete-field").value = "", c.querySelector(".js-protected-branch-pusher").classList.add("user-already-added")) : p.fetchText(o).then(function(e) {
			a.querySelector(".js-autocomplete-field").value = "", i.insertAdjacentHTML("beforeend", e), ni(r)
		})
	}), i.on("click", ".js-remove-authorized-user-or-team", function() {
		var e = this.closest(".js-protected-branch-options");
		this.closest(".js-authorized-user-or-team").remove(), ni(e)
	}), s.observe("#pages-cname-field", function(e) {
		f.addThrottledInputEventListener(e, function() {
			a.query(document, ".js-pages-cname-save-btn", HTMLButtonElement).disabled = e.value === e.defaultValue
		})
	}), i.on("selectmenu:selected", ".js-pages-source", function() {
		var e = a.query(document, ".js-pages-source-btn-text"),
			n = e.getAttribute("data-original-text") === e.textContent;
		a.query(document, ".js-pages-source-save-btn", HTMLButtonElement).disabled = n;
		var r = document.querySelector(".js-pages-theme-source-value");
		if (r && r instanceof HTMLInputElement) {
			var o = this.querySelector(".selected input").value,
				s = a.query(document, ".js-pages-theme-source-note"),
				i = a.query(document, ".js-pages-theme-source-note-value");
			if ("none" === o) {
				var c = r.getAttribute("data-original-value"),
					u = i.getAttribute("data-original-text");
				t(null != c && null != u, "Missing attributes [`data-original-value`, `data-original-text`] -- null.js:237"), r.value = c, i.textContent = u, s.classList.remove("hide-note")
			} else r.value = o, i.textContent = e.textContent, n ? s.classList.add("hide-note") : s.classList.remove("hide-note")
		}
	}), s.observe(".js-enable-btn", function(e) {
		e.disabled = !1, e.classList.remove("tooltipped"), e.removeAttribute("aria-label")
	}), i.on("click", ".js-edit-repository-settings-select", function() {
		var e = ri(this);
		d.submit(e)
	}), i.on("click", ".js-edit-repository-settings-select-with-confirm", function() {
		var e = ri(this);
		e.closest(".js-permission-options").setAttribute("data-current-form", e.getAttribute("class")), document.addEventListener("facebox:afterClose", ai)
	});
	var oi = function() {
			var e = ke(regeneratorRuntime.mark(function e(t, n, r, a, o) {
				var s, c, u, l, d, m, f, v, h, g, y, b, j, L, w, x, k, E, T;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							e.t0 = a, e.next = "tokenRefresh" === e.t0 ? 3 : "hello" === e.t0 ? 19 : "error" === e.t0 ? 28 : "error:fatal" === e.t0 ? 29 : "error:invalid" === e.t0 ? 31 : "loading" === e.t0 ? 33 : "loaded" === e.t0 ? 35 : "ready" === e.t0 ? 37 : "resize" === e.t0 ? 43 : "data" === e.t0 ? 49 : 51;
							break;
						case 3:
							if (l = di(t)) {
								e.next = 6;
								break
							}
							return e.abrupt("return");
						case 6:
							if (d = t.getAttribute("data-host"), -1 !== mi.indexOf(d)) {
								e.next = 9;
								break
							}
							return e.abrupt("return");
						case 9:
							if (m = t.getAttribute("data-token-url")) {
								e.next = 12;
								break
							}
							return e.abrupt("return");
						case 12:
							return e.next = 14, p.fetchJSON(p.csrfRequest(m, {
								method: "POST",
								body: a
							}));
						case 14:
							return f = e.sent, v = f.token, h = JSON.stringify({
								type: "render:token",
								body: {
									value: v
								}
							}), l.postMessage(h, d), e.abrupt("break", 52);
						case 19:
							return (ii.get(t) || {
								untimed: !0
							}).hello = Date.now(), g = {
								type: "render:cmd",
								body: {
									cmd: "ack",
									ack: !0
								}
							}, y = {
								type: "render:cmd",
								body: {
									cmd: "branding",
									branding: !1
								}
							}, (b = di(t)) && "function" == typeof b.postMessage && b.postMessage(JSON.stringify(g), "*"), b && "function" == typeof b.postMessage && b.postMessage(JSON.stringify(y), "*"), t.classList.contains("is-local") && b && "function" == typeof b.postMessage && (j = b, L = t.closest(".js-code-editor"), w = L instanceof HTMLElement ? $.getCodeEditor(L) : null, x = t.getAttribute("data-data"), w ? (k = null, E = function() {
								var e = w.code();
								if (e !== k) {
									k = e;
									var t = JSON.stringify({
										type: "render:data",
										body: e
									});
									j.postMessage(t, "*")
								}
							}, w.textarea.addEventListener("change", E), E()) : x && (T = JSON.stringify({
								type: "render:data",
								body: x
							}), j.postMessage(T, "*"))), e.abrupt("break", 52);
						case 28:
							return e.abrupt("return", ui(t));
						case 29:
							return ui(t), e.abrupt("return", t.classList.add("is-render-failed-fatal"));
						case 31:
							return ui(t), e.abrupt("return", t.classList.add("is-render-failed-invalid"));
						case 33:
							return (s = t.classList).remove.apply(s, si), e.abrupt("return", t.classList.add("is-render-loading"));
						case 35:
							return (c = t.classList).remove.apply(c, si), e.abrupt("return", t.classList.add("is-render-loaded"));
						case 37:
							if ((u = t.classList).remove.apply(u, si), t.classList.add("is-render-ready"), null == o || null == o.height) {
								e.next = 42;
								break
							}
							return t.style.height = o.height + "px", e.abrupt("return");
						case 42:
							return e.abrupt("break", 52);
						case 43:
							if (null == o || null == o.height || !t.classList.contains("is-render-ready")) {
								e.next = 48;
								break
							}
							return t.style.height = o.height + "px", e.abrupt("return");
						case 48:
							return e.abrupt("return", console.error("Resize event sent without height or before ready"));
						case 49:
							return i.fire(t, "render:data", o), e.abrupt("break", 52);
						case 51:
							return e.abrupt("return", console.error("Unknown message [" + n + "]=>'" + a + "'"));
						case 52:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t, n, r, a, o) {
				return e.apply(this, arguments)
			}
		}(),
		si = ["is-render-pending", "is-render-ready", "is-render-loading", "is-render-loaded"],
		ii = new WeakMap;

	function ci(e) {
		if (null != e) {
			var t = ii.get(e);
			null != t && (t.load = t.hello = null, t.helloTimer && (clearTimeout(t.helloTimer), t.helloTimer = null), t.loadTimer && (clearTimeout(t.loadTimer), t.loadTimer = null))
		}
	}

	function ui(e) {
		var t;
		if (null != e) return (t = e.classList).remove.apply(t, si), e.classList.add("is-render-failed"), ci(e)
	}

	function li(e, t) {
		return null == t && (t = function() {
				return !0
			}),
			function() {
				if (q(e) && !e.classList.contains("is-render-ready") && !e.classList.contains("is-render-failed") && !e.classList.contains("is-render-failed-fatally") && (!t || t())) {
					var n = ii.get(e);
					return n ? (console.error("Render timeout: " + JSON.stringify(n) + " Now: " + Date.now()), ui(e)) : console.error("No timing data on $:", e)
				}
			}
	}

	function di(e) {
		var t = e.querySelector("iframe");
		return t instanceof HTMLIFrameElement ? t.contentWindow : null
	}
	s.observe(".js-render-target", function(e) {
		var t = ii.get(e);
		null != t && t.load || (ci(e), function(e) {
			if (!ii.get(e)) {
				var t = {
					load: null,
					hello: null,
					helloTimer: null,
					loadTimer: null
				};
				t.load = Date.now(), t.helloTimer = setTimeout(li(e, function() {
					return !t.hello
				}), 1e4), t.loadTimer = setTimeout(li(e), 45e3), ii.set(e, t)
			}
		}(e), e.classList.add("is-render-automatic"), e.classList.add("is-render-requested"))
	}), window.addEventListener("message", function(e) {
		var t = e.data,
			n = e.origin;
		if (t && n) {
			var r = function() {
					try {
						return JSON.parse(t)
					} catch (e) {
						return t
					}
				}(),
				a = r.type,
				o = r.identity,
				s = r.body,
				i = r.payload,
				c = function(e) {
					return Array.from(document.querySelectorAll(".js-render-target")).filter(function(t) {
						return !e || t.getAttribute("data-identity") === e
					})[0]
				}(o);
			a && s && c && n === c.getAttribute("data-host") && "render" === a && oi(c, a, o, s, i)
		}
	});
	var mi = ["http://127.0.0.1:4000", "https://launch-editor-production.breadsticks.kube-service.github.net", "https://launch-editor.github.com"];

	function fi() {
		var e = !0,
			t = !1,
			n = void 0;
		try {
			for (var r, o = document.querySelectorAll(".js-newsletter-frequency-choice.selected")[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
				r.value.classList.remove("selected")
			}
		} catch (e) {
			t = !0, n = e
		} finally {
			try {
				!e && o.return && o.return()
			} finally {
				if (t) throw n
			}
		}
		var s = a.query(document, ".js-newsletter-frequency-radio:enabled:checked");
		a.closest(s, ".js-newsletter-frequency-choice").classList.add("selected")
	}
	s.observe(".js-subscription-toggle", function() {
		fi()
	}), i.on("change", ".js-newsletter-frequency-radio", function() {
		fi()
	}), l.remoteForm(".js-subscription-toggle", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.text();
					case 2:
						(r = a.query(t, ".selected .notice")).classList.add("visible"), setTimeout(function() {
							r.classList.remove("visible")
						}, 2e3);
					case 5:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-explore-newsletter-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.html();
					case 2:
						r = e.sent, a.closest(t, ".js-explore-newsletter-container").replaceWith(r.html);
					case 5:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), i.on("navigation:open", ".js-create-branch", function(e) {
		return t(e.currentTarget instanceof HTMLFormElement, "null.js:8"), d.submit(e.currentTarget), !1
	}), i.on("click", ".js-toggle-lang-stats", function(e) {
		var t = document.querySelector(".js-stats-switcher-viewport");
		if (null != t) {
			var n = 0 !== t.scrollTop ? "is-revealing-overview" : "is-revealing-lang-stats";
			t.classList.toggle(n), e.preventDefault()
		}
	});
	var vi = function() {
			function e(t) {
				Ee(this, e);
				var n = E(t);
				this.name = n.attr("data-theme-name"), this.slug = n.attr("data-theme-slug"), this.gem = n.attr("data-theme-gem"), this.selected = n.hasClass("selected"), this.baseHref = n.attr("href")
			}
			return Te(e, [{
				key: "wrappedKey",
				value: function(e, t) {
					return null == t && (t = null), t ? t + "[" + e + "]" : e
				}
			}, {
				key: "params",
				value: function(e) {
					null == e && (e = null);
					var t = {};
					return t[this.wrappedKey("theme_slug", e)] = this.slug, t
				}
			}, {
				key: "previewSrc",
				value: function() {
					return [this.baseHref, E.param(this.params())].join("&")
				}
			}]), e
		}(),
		pi = function() {
			function e() {
				var t = this;
				Ee(this, e), this.$pagePreview = E("#page-preview"), this.$contextLoader = E(".theme-picker-spinner"), this.$fullPicker = E(".theme-picker-thumbs"), this.$miniPicker = E(".theme-picker-controls"), this.$scrollBackwardsLinks = E(".theme-toggle-full-left"), this.$scrollForwardsLinks = E(".theme-toggle-full-right"), this.$prevLinks = E(".theme-picker-prev"), this.$nextLinks = E(".theme-picker-next"), this.themeLinksContainer = this.$fullPicker.find(".js-theme-selector"), this.themeLinks = this.themeLinksContainer.find(".theme-selector-thumbnail"), this.themes = [], this.themeLinks.each(function(e, n) {
					var r = new vi(n);
					r.selected && (t.selectedTheme = r), t.themes.push(r)
				}), this.scrolledPage = 0, this.selectedTheme = this.selectedTheme || this.themes[0], this.$pagePreview.on("load", function() {
					return t.onPagePreviewLoad()
				}), this.$scrollBackwardsLinks.click(function() {
					return t.scrollThemeLinksContainer(-1)
				}), this.$scrollForwardsLinks.click(function() {
					return t.scrollThemeLinksContainer(1)
				}), this.$prevLinks.click(function() {
					return t.onThemeNavPrevClick()
				}), this.$nextLinks.click(function() {
					return t.onThemeNavNextClick()
				}), this.themeLinks.click(function(e) {
					return t.onThemeLinkClick(e)
				}), E(".theme-picker-view-toggle").click(function(e) {
					return t.onHideClick(e)
				}), E("#page-edit").click(this.onEditClick), E("#page-publish").click(function() {
					return t.onPublishClick()
				}), this.theme(this.selectedTheme), this.updateScrollLinks()
			}
			return Te(e, [{
				key: "onPagePreviewLoad",
				value: function() {
					this.$contextLoader.removeClass("visible")
				}
			}, {
				key: "onThemeNavPrevClick",
				value: function() {
					return this.theme(this.prevTheme())
				}
			}, {
				key: "onThemeNavNextClick",
				value: function() {
					return this.theme(this.nextTheme())
				}
			}, {
				key: "onThemeLinkClick",
				value: function(e) {
					return this.theme(this.themeForLink(e.currentTarget)), !1
				}
			}, {
				key: "onHideClick",
				value: function(e) {
					return this.$fullPicker.toggle(), this.$miniPicker.toggle(), this.scrollToTheme(this.theme(), !1), E(e.currentTarget).toggleClass("open")
				}
			}, {
				key: "onEditClick",
				value: function() {
					return d.submit(c(document.getElementById("page-edit-form"), HTMLFormElement)), !1
				}
			}, {
				key: "onPublishClick",
				value: function() {
					var e = E("#page-publish-form"),
						t = this.theme();
					return t && e.find('input[name="page[theme_slug]"]').val(t.slug), d.submit(c(document.getElementById("page-publish-form"), HTMLFormElement)), !1
				}
			}, {
				key: "scrollThemeLinksContainer",
				value: function(e) {
					this.scrollToTheme(this.themes[e < 0 ? 0 : 6]), this.updateScrollLinks()
				}
			}, {
				key: "updateScrollLinks",
				value: function() {
					var e = 0 === this.scrolledPage,
						t = this.$scrollBackwardsLinks[0],
						n = this.$scrollForwardsLinks[0];
					t.disabled = e, t.classList.toggle("disabled", e), n.disabled = !e, n.classList.toggle("disabled", !e)
				}
			}, {
				key: "selectedThemeIndex",
				value: function() {
					return this.themes.indexOf(this.selectedTheme)
				}
			}, {
				key: "prevTheme",
				value: function() {
					var e = (this.selectedThemeIndex() - 1) % this.themes.length;
					return e < 0 && (e += this.themes.length), this.themes[e]
				}
			}, {
				key: "nextTheme",
				value: function() {
					return this.themes[(this.selectedThemeIndex() + 1) % this.themes.length]
				}
			}, {
				key: "themeForLink",
				value: function(e) {
					return this.themes[this.themeLinks.index(E(e))]
				}
			}, {
				key: "linkForTheme",
				value: function(e) {
					return E(this.themeLinks[this.themes.indexOf(e)])
				}
			}, {
				key: "scrollToTheme",
				value: function(e) {
					var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					this.scrolledPage = Math.floor(this.themes.indexOf(e) / 6);
					var n = 0;
					if (this.scrolledPage > 0) {
						var r = this.linkForTheme(this.themes[6 * this.scrolledPage])[0];
						n = r.offsetLeft
					}
					var a, o = this.themeLinksContainer[0],
						s = n - o.scrollLeft;
					if (t && 0 !== s) {
						a = function(e) {
							if (!(e < 0)) {
								var t = o.scrollLeft;
								return o.scrollLeft = Math[n - t > 0 ? "min" : "max"](t + s * (e / 150), n), t !== o.scrollLeft && void 0
							}
						}, new Promise(function(e) {
							var t = performance.now();
							! function n() {
								window.requestAnimationFrame(function(r) {
									!1 !== a(r - t) ? (t = r, n()) : e()
								})
							}()
						})
					} else o.scrollLeft = n
				}
			}, {
				key: "theme",
				value: function(e) {
					return null == e && (e = null), e ? (this.selectedTheme = e, this.showPreviewFor(e), this.themeLinks.removeClass("selected"), this.linkForTheme(e).addClass("selected"), this.scrollToTheme(e), this.$miniPicker.find(".js-theme-name").text(e.name), !1) : this.selectedTheme
				}
			}, {
				key: "showPreviewFor",
				value: function(e) {
					if (this.$contextLoader.addClass("visible"), e.gem) this.$pagePreview.attr("src", e.baseHref);
					else {
						var t = this.$fullPicker.find("form");
						t.find('input[name="theme_slug"]').val(e.slug), d.submit(t[0])
					}
				}
			}]), e
		}();

	function hi(e) {
		a.query(document, ".js-gist-dropzone").classList.remove("d-none"), e.stopPropagation(), e.preventDefault()
	}

	function gi(e) {
		null != e.target.classList && e.target.classList.contains("js-gist-dropzone") && e.target.classList.add("d-none")
	}

	function yi(e) {
		var n, r = void 0,
			o = e.dataTransfer.files,
			s = function() {
				var n = o[r];
				P.trackEvent({
						category: "Interaction",
						action: "File Drop",
						label: n.type
					}),
					function(e) {
						return new Promise(function(n, r) {
							var a = new FileReader;
							return a.onload = function() {
								t("string" == typeof a.result, "null.js:80");
								var o = a.result;
								return o && !/\0/.test(o) ? n({
									file: e,
									data: o
								}) : r(new Error("invalid file"))
							}, a.readAsText(e)
						})
					}(n).then(function(t) {
						n = t.file;
						var r = t.data;
						return e.target.dispatchEvent(new CustomEvent("gist:filedrop", {
							bubbles: !0,
							cancelable: !0,
							detail: {
								file: n,
								text: r
							}
						}))
					}, function() {})
			};
		for (r = 0, n = o.length; r < n; r++) s();
		a.query(document, ".js-gist-dropzone").classList.add("d-none"), e.stopPropagation(), e.preventDefault()
	}

	function bi(e) {
		var n, r, a = void 0,
			o = void 0,
			s = void 0,
			i = e.querySelector(".js-gist-files"),
			c = document.getElementById("js-gist-file-template");
		t(c, "null.js:27");
		var u = document.createElement("div");
		u.innerHTML = c.textContent;
		var l = u.querySelectorAll("[id]");
		for (o = 0, n = l.length; o < n; o++)(a = l[o]).removeAttribute("id");
		var d = u.querySelector(".js-code-textarea");
		null != d && d.setAttribute("id", "blob_contents_" + Date.now());
		var m = u.children;
		for (s = 0, r = m.length; s < r; s++) a = m[s], i.append(a);
		return i.lastElementChild
	}

	function ji(e) {
		return $.getAsyncCodeEditor(e.closest(".js-code-editor"))
	}

	function Li(e) {
		var t, n = void 0,
			r = e.querySelectorAll(".js-code-textarea");
		for (n = 0, t = r.length; n < t; n++) {
			if (r[n].value.trim().length > 0) return !0
		}
		return !1
	}

	function wi() {
		var e, n = void 0,
			r = document.querySelectorAll(".js-gist-create"),
			a = [];
		for (n = 0, e = r.length; n < e; n++) {
			var o = r[n];
			t(o instanceof HTMLButtonElement, "`.js-gist-create` must be HTMLButtonElement -- null.js:89"), a.push(o.disabled = !Li(o.form))
		}
		return a
	}

	function xi(e) {
		var t = e.getAttribute("data-language-detection-url");
		if (t) return p.fetchJSON(t + "?filename=" + encodeURIComponent(e.value)).then(function(t) {
			return ji(e).then(function(e) {
				return e.setMode(t.language)
			})
		})
	}

	function ki(e) {
		var t, n = void 0,
			r = e.querySelectorAll(".js-remove-gist-file"),
			a = [];
		for (n = 0, t = r.length; n < t; n++) {
			var o = r[n];
			a.push(o.classList.toggle("d-none", r.length < 2))
		}
		return a
	}
	n.ready.then(function() {
		document.getElementById("theme-picker-wrap") && new pi
	}), s.observe(".js-gist-dropzone", {
		add: function() {
			var e = document.body;
			t(e, "null.js:59"), e.addEventListener("dragenter", hi), e.addEventListener("dragleave", gi), e.addEventListener("dragover", hi), e.addEventListener("drop", yi)
		},
		remove: function() {
			var e = document.body;
			t(e, "null.js:67"), e.removeEventListener("dragenter", hi), e.removeEventListener("dragleave", gi), e.removeEventListener("dragover", hi), e.removeEventListener("drop", yi)
		}
	}), i.on("change", ".js-code-textarea", function() {
		wi()
	}), o.onFocus(".js-gist-filename", function(e) {
		ji(e.closest(".js-code-editor")).then(function() {
			f.addThrottledInputEventListener(e, xi)
		}), e.addEventListener("blur", function() {
			return f.removeThrottledInputEventListener(e, xi)
		}, {
			once: !0
		})
	}), i.on("click", ".js-add-gist-file", function(e) {
		e.preventDefault(), bi(this.closest(".js-blob-form")).scrollIntoView()
	}), E(document).on("gist:filedrop", ".js-blob-form", function(e) {
		var t = e.originalEvent.detail,
			n = t.file,
			r = t.text,
			a = function(e) {
				var t, n = void 0,
					r = e.querySelectorAll(".js-gist-file");
				for (n = 0, t = r.length; n < t; n++) {
					var a = r[n],
						o = a.querySelector(".js-gist-filename"),
						s = a.querySelector(".js-blob-contents");
					if (!o.value && !s.value) return a
				}
				return bi(e)
			}(this),
			o = a.querySelector(".js-gist-filename");
		return o.value = n.name, xi(o), ji(o).then(function(e) {
			return e.setCode(r)
		}), a.scrollIntoView()
	}), i.on("click", ".js-remove-gist-file", function(e) {
		e.preventDefault();
		var t, n = void 0,
			r = this.closest(".js-gist-file"),
			a = r.querySelectorAll(".js-gist-deleted input");
		for (n = 0, t = a.length; n < t; n++) {
			a[n].disabled = !1
		}
		r.querySelector(".js-code-editor").remove()
	}), n.ready.then(function() {
		wi()
	}), s.observe(".js-remove-gist-file", function(e) {
		var t = e.closest(".js-gist-files");
		return {
			add: function() {
				return ki(t)
			},
			remove: function() {
				return ki(t)
			}
		}
	}), E(document).on("ajaxComplete", ".js-gist-file-update-container .js-comment-update", function(e, t) {
		if (200 === t.status) {
			var n = JSON.parse(t.responseText);
			if (this.action = n.url, n.authenticity_token) this.querySelector("input[name=authenticity_token]").value = n.authenticity_token
		}
	}), i.on("click", ".js-skip-to-content", function(e) {
		var t = document.getElementById("start-of-content");
		if (t) {
			var n = t.nextElementSibling;
			n instanceof HTMLElement && (n.setAttribute("tabindex", "-1"), n.focus())
		}
		e.preventDefault()
	});
	var Ei = new WeakMap;

	function Ti(e) {
		var t = a.querySelectorAll(document, ".js-hook-event-checkbox", HTMLInputElement),
			n = !0,
			r = !1,
			o = void 0;
		try {
			for (var s, i = t[Symbol.iterator](); !(n = (s = i.next()).done); n = !0) {
				var c = s.value;
				c.checked = c.matches(e)
			}
		} catch (e) {
			r = !0, o = e
		} finally {
			try {
				!n && i.return && i.return()
			} finally {
				if (r) throw o
			}
		}
	}

	function Si() {
		var e = document.getElementById("js-update-integration-permissions");
		null != e && e.removeAttribute("disabled")
	}
	s.observe(".js-hook-url-field", function(e) {
		function t() {
			var t = void 0;
			try {
				t = new URL(e.value)
			} catch (e) {}
			e.form.classList.toggle("is-invalid-url", !("" === e.value || t && /^https?:/.test(t.protocol))), e.form.classList.toggle("is-ssl", !(!t || "https:" !== t.protocol))
		}
		f.addThrottledInputEventListener(e, t), t()
	}), i.on("click", ".js-hook-toggle-ssl-verification", function(e) {
		e.preventDefault();
		var t = a.query(document, ".js-ssl-hook-fields"),
			n = a.query(document, ".js-hook-ssl-verification-field", HTMLInputElement);
		t.classList.toggle("is-not-verifying-ssl"), t.classList.contains("is-not-verifying-ssl") ? (n.value = "1", i.fire(document, "facebox:close")) : n.value = "0"
	}), i.on("change", ".js-hook-event-choice", function(e) {
		var t = c(e.currentTarget, HTMLInputElement),
			n = t.checked && "custom" === t.value,
			r = t.closest(".js-hook-events-field");
		(r && r.classList.toggle("is-custom", n), t.checked) && (n ? a.query(document, ".js-hook-wildcard-event", HTMLInputElement).checked = !1 : "push" === t.value ? Ti('[value="push"]') : "all" === t.value && Ti(".js-hook-wildcard-event"))
	}), i.on("details:toggled", ".js-hook-secret", function(e) {
		var t = e.currentTarget,
			n = a.query(t, "input[type=password]", HTMLInputElement);
		t.classList.contains("open") ? (n.disabled = !1, n.focus()) : n.disabled = !0
	}), i.on("details:toggled", ".js-hook-delivery-item", function(e) {
		var n = e.currentTarget,
			r = n.querySelector(".js-hook-delivery-details");
		r && !Ei.get(n) && R("low").then(function() {
			Ei.set(n, !0), r.classList.add("is-loading");
			var e = r.getAttribute("data-url");
			t(e, "null.js:119"), p.fetchText(e).then(function(e) {
				r.outerHTML = e, r.classList.remove("is-loading")
			}, function() {
				r.classList.add("has-error"), r.classList.remove("is-loading")
			})
		})
	}), i.on("click", ".js-hook-delivery-details .js-tabnav-tab", function(e) {
		var n = e.currentTarget,
			r = a.closest(n, ".js-hook-delivery-details"),
			o = !0,
			s = !1,
			i = void 0;
		try {
			for (var c, u = r.querySelectorAll(".js-tabnav-tab, .js-tabnav-tabcontent")[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
				c.value.classList.remove("selected")
			}
		} catch (e) {
			s = !0, i = e
		} finally {
			try {
				!o && u.return && u.return()
			} finally {
				if (s) throw i
			}
		}
		n.classList.add("selected");
		var l = n.getAttribute("data-tab-target");
		t(l, "null.js:135");
		var d = r.querySelector('.js-tabnav-tabcontent[data-tab-name="' + l + '"]');
		d && d.classList.add("selected")
	}), i.on("click", ".js-hook-deliveries-pagination-button", function(e) {
		e.preventDefault();
		var n = e.currentTarget,
			r = n.parentElement;
		t(r, "null.js:146"), R("low").then(function() {
			r.classList.add("loading");
			var e = n.getAttribute("href");
			t(e, "null.js:152"), p.fetchText(e).then(function(e) {
				r.outerHTML = e
			})
		})
	}), i.on("click", ".js-redeliver-hook-delivery-init-button", function(e) {
		e.preventDefault();
		var t = e.currentTarget.getAttribute("href");
		R("low").then(function() {
			te({
				div: t
			})
		})
	}), E(document).on("ajaxSuccess", ".js-redeliver-hook-form", function(e, n) {
		var r = e.currentTarget.getAttribute("data-delivery-guid"),
			o = a.query(document, '.js-hook-delivery-details[data-delivery-guid="' + r + '"]'),
			s = o.parentElement;
		t(s, "null.js:178"), i.fire(document, "facebox:close"), o.outerHTML = n.responseText, a.query(s, "poll-include-fragment").addEventListener("load", function() {
			var e = a.query(s, ".js-hook-delivery-details"),
				t = a.query(s, ".js-item-status"),
				n = e.getAttribute("data-status-class");
			t.classList.remove("success", "pending", "failure"), n && t.classList.add(n);
			var r = s.querySelector(".js-item-status-tooltip"),
				o = e.getAttribute("data-status-message");
			r && o && r.setAttribute("aria-label", o)
		})
	}), E(document).on("ajaxError", ".js-redeliver-hook-form", function(e) {
		e.currentTarget.parentElement.querySelector(".js-redelivery-dialog").classList.add("failed")
	}), i.on("submit", ".js-test-hook-form", function(e) {
		e.preventDefault();
		var t = c(e.currentTarget, HTMLFormElement);
		R("low").then(function() {
			var e = a.query(document, ".js-test-hook-message");

			function n() {
				t.dispatchEvent(new CustomEvent("ajaxComplete", {
					bubbles: !0
				}))
			}
			e.classList.remove("error", "success"), p.fetch(t.action, {
				method: t.method,
				body: new FormData(t)
			}).then(function() {
				e.classList.add("success")
			}, function(t) {
				e.classList.add("error");
				var n = a.query(e, ".js-test-hook-message-errors");
				null != t.response ? t.response.json().then(function(e) {
					n.textContent = e.errors
				}) : n.textContent = "Network request failed"
			}).then(n, n)
		})
	}), i.on("click", ".js-hook-enforcement-select .js-navigation-item", function(e) {
		var t = e.currentTarget,
			n = a.query(e.currentTarget, ".js-value"),
			r = a.closest(t, "form", HTMLFormElement),
			o = a.query(r, ".js-enforcement-value", HTMLInputElement),
			s = n.textContent.split("_"),
			i = Ae(s, 2),
			u = i[0],
			l = i[1];
		o.value = u;
		var m = r.querySelector(".js-final-value");
		m && ((m = c(m, HTMLInputElement)).value = l ? "false" : "true"), d.submit(r)
	}), s.observe(".js-integration-permissions-selector", function() {
		i.on("change", "[id^=integration_permission_]", function() {
			var e = this.getAttribute("data-permission"),
				t = this.getAttribute("data-resource"),
				n = a.querySelectorAll(document, '.js-integration-hook-event[data-resource="' + t + '"]', HTMLInputElement),
				r = a.querySelectorAll(document, ".js-integration-single-file-resource", HTMLInputElement),
				o = a.querySelectorAll(document, '.js-dropdown-container[data-resource="' + t + '"]', HTMLElement);
			Si(), "none" !== e ? (E(".js-integration-hook-event-permission-error[data-resource='" + t + "']").addClass("d-none"), E(".js-integration-single-file-permission-error").addClass("d-none"), n.forEach(function(e) {
				e.readOnly = !1
			}), r.forEach(function(e) {
				e.readOnly = !1
			}), this.closest(".js-list-group-item").classList.remove("disabled"), o.forEach(function(e) {
				return e.classList.remove("d-none")
			})) : (o.forEach(function(e) {
				return e.classList.add("anim-fade-in")
			}), o.forEach(function(e) {
				return e.classList.add("d-none")
			}), this.closest(".js-list-group-item").classList.add("disabled"), n.forEach(function(e) {
				e.readOnly = !0, e.checked = !1
			}), "single_file" === t && r.forEach(function(e) {
				e.readOnly = !0, e.value = ""
			}))
		}), i.on("change", "[name^=integration]", Si), i.on("click", ".js-integration-hook-event", function(e) {
			var t = c(e.currentTarget, HTMLInputElement);
			if (t.readOnly) {
				var n = a.closest(t, ".js-send-events");
				a.query(n, ".js-integration-hook-event-permission-error").classList.remove("d-none"), e.preventDefault()
			}
		}), i.on("click", ".js-integration-single-file-resource", function(e) {
			var t = c(e.currentTarget, HTMLInputElement);
			if (t.readOnly) {
				var n = a.closest(t, ".js-single-file");
				a.query(n, ".js-integration-single-file-permission-error").classList.remove("d-none"), e.preventDefault()
			}
		})
	}), i.on("navigation:open", ".js-issues-custom-filter", function(e) {
		var n = c(e.currentTarget, HTMLFormElement),
			r = document.createElement("input");
		r.type = "hidden";
		var a = n.getAttribute("data-name");
		t(a, "null.js:13"), r.name = a;
		var o = n.querySelector(".js-new-item-name");
		t(o, "null.js:17"), r.value = o.textContent, n.appendChild(r), d.submit(n)
	}), F(function(e) {
		var t = e.newURL,
			n = t.match(/\/issues#issue\/(\d+)$/);
		if (n) {
			var r = n[1];
			window.location = t.replace(/\/?#issue\/.+/, "/" + r)
		}
	}), F(function(e) {
		var t = e.newURL,
			n = t.match(/\/issues#issue\/(\d+)\/comment\/(\d+)$/);
		if (n) {
			var r = n[1],
				a = n[2];
			window.location = t.replace(/\/?#issue\/.+/, "/" + r + "#issuecomment-" + a)
		}
	}), s.observe(".js-issues-list-check:checked", {
		add: function(e) {
			e.closest(".js-issue-row").classList.add("selected")
		},
		remove: function(e) {
			e.closest(".js-issue-row").classList.remove("selected")
		}
	}), i.on("navigation:keydown", ".js-issue-row", function(e) {
		var n, r;
		t(e instanceof CustomEvent, "null.js:27"), "x" === e.detail.hotkey && (n = e.currentTarget, (r = n.querySelector(".js-issues-list-check")) && d.changeValue(r, !r.checked), e.preventDefault(), e.stopPropagation())
	}), o.onFocus("#js-issues-search", function(e) {
		t(e instanceof HTMLInputElement, "null.js:39"), e.value = e.value
	}), i.on("selectmenu:selected", ".js-saved-reply-container", function(e) {
		var t = a.query(e.target, ".js-saved-reply-body"),
			n = t.textContent.trim(),
			r = this.closest(".js-previewable-comment-form"),
			o = r.querySelector(".js-comment-field");
		N.insertText(o, n), r.querySelector(".js-saved-reply-id").value = t.getAttribute("data-saved-reply-id")
	}), o.onKey("keydown", ".js-saved-reply-shortcut-comment-field", function(e) {
		if ("Control+." === x(e)) {
			t(e.target instanceof HTMLElement, "null.js:26");
			var n = a.closest(e.target, ".js-previewable-comment-form"),
				r = a.query(n, ".js-saved-reply-container");
			w.activate(r), e.preventDefault(), P.trackEvent({
				category: "Markdown Toolbar",
				action: "shortcut",
				label: "saved reply"
			})
		}
	}), o.onKey("keydown", ".js-saved-reply-filter-input", function(e) {
		if (/^Control\+[1-9]$/.test(x(e))) {
			t(e.target instanceof HTMLElement, "null.js:41");
			var n = a.closest(e.target, ".js-previewable-comment-form").querySelectorAll(".js-navigation-item"),
				r = Number(e.key),
				o = n[r - 1];
			o && (o.click(), e.preventDefault(), P.trackEvent({
				category: "Saved Replies",
				action: "shortcut",
				label: "saved reply number " + r
			}))
		}
	});
	var qi = function() {
		var e = ke(regeneratorRuntime.mark(function e(n, r) {
			var o, s, i, c, u;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return o = Ci(n), r && o.append(r.name, r.value), null == (s = n.getAttribute("data-authenticity-token")) && (i = a.closest(n, "form", HTMLFormElement).elements.namedItem("authenticity_token")) instanceof HTMLInputElement && (s = i.value), t(s, "null.js:106"), o.append("authenticity_token", s), c = n.getAttribute("data-url"), t(c, "null.js:112"), e.next = 10, p.fetchText(c, {
							method: "post",
							body: o
						});
					case 10:
						u = e.sent, Hi(a.closest(n, ".js-discussion-sidebar-item"), u);
					case 12:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}();

	function Ai(e) {
		e instanceof HTMLFormElement ? d.submit(e) : qi(e)
	}

	function Mi(e) {
		Ai(c(e.currentTarget, Element))
	}

	function Hi(e, t) {
		e.replaceWith(C.parseHTML(document, t))
	}

	function Ci(e) {
		var t = a.closest(e, "form", HTMLFormElement),
			n = J(t),
			r = new FormData,
			o = !0,
			s = !1,
			i = void 0;
		try {
			for (var c, u = n[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
				var l = c.value,
					d = Ae(l, 2),
					m = d[0],
					f = d[1];
				e.contains(Ii(t, m, f)) && r.append(m, f)
			}
		} catch (e) {
			s = !0, i = e
		} finally {
			try {
				!o && u.return && u.return()
			} finally {
				if (s) throw i
			}
		}
		return r
	}

	function Ii(e, t, n) {
		var r = !0,
			a = !1,
			o = void 0;
		try {
			for (var s, i = e.elements[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
				var c = s.value;
				if (c.name === t && c.value === n) return c
			}
		} catch (e) {
			a = !0, o = e
		} finally {
			try {
				!r && i.return && i.return()
			} finally {
				if (a) throw o
			}
		}
	}

	function _i(e) {
		return e.querySelectorAll(".js-integrations-install-repo-picked .js-repository-picker-result").length
	}

	function Ri(e) {
		var t = +e.getAttribute("data-max-repos");
		if (t) return _i(e) >= t
	}

	function Fi(e) {
		var t = e.querySelector(".js-no-repositories-radio"),
			n = e.querySelector(".js-all-repositories-radio");
		return t && t.checked || n.checked || function(e) {
			return _i(e) > 0
		}(e)
	}

	function Pi() {
		var e = 0;
		0 !== document.querySelectorAll(".js-integrations-install-repo-picked:not(.d-none)").length && (e = document.querySelectorAll(".js-repository-picker-result:not(.d-none)").length);
		var t = "";
		e > 0 && (t = "Selected " + e + " " + (e > 1 ? "repositories" : "repository"));
		return E(".js-integration-total-repos").text(t)
	}

	function Oi() {
		var e = document.querySelector(".js-org-reinstate-forms"),
			n = document.querySelectorAll(".js-org-reinstate-option:checked");
		if (e && 1 === n.length) {
			var r = n[0].getAttribute("data-form");
			t(null != r, "Missing attribute `data-form` -- null.js:19");
			var a = e.getElementsByClassName("js-togglable-form"),
				o = !0,
				s = !1,
				i = void 0;
			try {
				for (var c, u = a[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
					c.value.classList.add("d-none")
				}
			} catch (e) {
				s = !0, i = e
			} finally {
				try {
					!o && u.return && u.return()
				} finally {
					if (s) throw i
				}
			}
			var l = document.getElementById(r);
			t(l, "undefined -- null.js:29"), l.classList.remove("d-none")
		}
	}
	i.on("selectmenu:selected", ".js-issue-sidebar-form", function(e) {
		var t = e.currentTarget,
			n = e.target,
			r = a.closest(n, ".js-select-menu"),
			o = r.hasAttribute("data-multiple");
		if (n.hasAttribute("data-clear-assignees")) {
			var s = a.closest(n, ".js-menu-content"),
				i = a.querySelectorAll(s, 'input[name="issue[user_assignee_ids][]"]:checked', HTMLInputElement),
				c = !0,
				u = !1,
				l = void 0;
			try {
				for (var d, m = i[Symbol.iterator](); !(c = (d = m.next()).done); c = !0) {
					var f = d.value;
					f.disabled = !1, f.checked = !1
				}
			} catch (e) {
				u = !0, l = e
			} finally {
				try {
					!c && m.return && m.return()
				} finally {
					if (u) throw l
				}
			}
			Ai(t)
		} else if (o) {
			var v = Number(r.getAttribute("data-max-options"));
			if (v) {
				var p = r.querySelectorAll('input[type="checkbox"]:checked').length;
				a.query(r, ".js-max-warning").classList.toggle("d-none", p <= v)
			}
			t.addEventListener("menu:deactivate", Mi, {
				once: !0
			})
		} else Ai(t)
	}), E(document).on("ajaxSuccess", ".js-discussion-sidebar-item", function(e, t, n, r) {
		e.target.classList.contains("js-issue-sidebar-form") && Hi(e.currentTarget, r)
	}), i.on("click", "div.js-issue-sidebar-form .js-suggested-reviewer", function(e) {
		var t = c(e.currentTarget, HTMLButtonElement),
			n = a.closest(t, ".js-issue-sidebar-form");
		qi(n, {
			name: t.name,
			value: t.value
		}), e.preventDefault()
	}), i.on("click", "div.js-issue-sidebar-form .js-issue-assign-self", function(e) {
		var t = c(e.currentTarget, HTMLButtonElement),
			n = a.closest(t, ".js-issue-sidebar-form");
		qi(n, {
			name: t.name,
			value: t.value
		}), e.preventDefault()
	}), E(document).on("ajaxSuccess", ".js-pages-preview-toggle-form", function(e, t, n, r) {
		200 !== t.status && 201 !== t.status || (a.query(e.currentTarget, "button.btn").textContent = r.new_button_value)
	}), i.on("change", ".js-project-menu-checkbox", function(e) {
		var t = c(e.currentTarget, HTMLInputElement),
			n = a.closest(t, ".js-project-menu-container"),
			r = !0,
			o = !1,
			s = void 0;
		try {
			for (var i, u = a.querySelectorAll(n, ".js-project-menu-checkbox", HTMLInputElement)[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) {
				var l = i.value;
				l !== t && (l.name === t.name && (l.checked = t.checked, a.closest(l, ".select-menu-item").classList.toggle("selected", l.checked)))
			}
		} catch (e) {
			o = !0, s = e
		} finally {
			try {
				!r && u.return && u.return()
			} finally {
				if (o) throw s
			}
		}
	}), i.on("click", ".js-prompt-dismiss", function(e) {
		a.closest(e.currentTarget, ".js-prompt").remove()
	}), E(document).on("ajaxSend", ".js-toggler-container .js-set-approval-state", function() {
		return this.closest(".js-toggler-container").classList.add("loading")
	}), E(document).on("ajaxComplete", ".js-toggler-container .js-set-approval-state", function() {
		return this.closest(".js-toggler-container").classList.remove("loading")
	}), E(document).on("ajaxSuccess", ".js-toggler-container .js-set-approval-state", function(e, t, n, r) {
		if (1 === r.approval_state) this.closest(".js-toggler-container").classList.add("on");
		else if (2 === r.approval_state) {
			var a = this.closest(".js-toggler-container");
			a.classList.add("revoked"), a.classList.remove("on")
		}
	}), E(document).on("ajaxSuccess", ".js-request-approval-facebox-form", function() {
		var e = this.getAttribute("data-container-id");
		return c(document.getElementById(e), HTMLElement).classList.add("on"), i.fire(document, "facebox:close")
	}), s.observe(".js-integrations-install-form", function(e) {
		var n = e.querySelector(".js-integrations-install-form-submit"),
			r = e.querySelector(".js-autocomplete"),
			o = r.getAttribute("data-search-url"),
			s = e.querySelector(".js-autocomplete-field");

		function u() {
			if (n.disabled = !Fi(this), null !== e.querySelector(".flash")) return s.disabled = Ri(this), e.querySelector(".flash").classList.toggle("d-none", !Ri(this))
		}
		e.addEventListener("change", u), i.on("click", ".js-repository-picker-remove", function() {
			return this.closest(".js-repository-picker-result").remove(), 0 === a.query(document, ".js-integrations-install-repo-picked").children.length && a.query(document, ".js-min-repository-error").classList.remove("d-none"), Pi(), u.call(e)
		}), E(document).on("focus", ".js-integrations-install-repo-picker .js-autocomplete-field", function() {
			return a.query(document, ".js-select-repositories-radio", HTMLInputElement).checked = !0, u.call(e)
		}), i.on("autocomplete:autocompleted:changed", ".js-integrations-install-repo-picker", function() {
			var e, t = void 0,
				n = o,
				a = document.querySelectorAll(".js-integrations-install-repo-picked .js-selected-repository-field");
			for (t = 0, e = a.length; t < e; t++) {
				var s = c(a[t], HTMLInputElement);
				n += ~n.indexOf("?") ? "&" : "?", n += s.name + "=" + encodeURIComponent(s.value)
			}
			r.setAttribute("data-search-url", n)
		}), i.on("autocomplete:result", ".js-integrations-install-repo-picker", function(n) {
			t(n instanceof CustomEvent, "null.js:126");
			var r = n.detail.text,
				o = this.querySelector("#repo-result-" + r),
				i = e.querySelector(".js-integrations-install-repo-picked");
			o.classList.remove("d-none"), i.insertBefore(o, i.firstChild), s.value = "", e.querySelector(".js-autocomplete-results").innerHTML = "", a.query(document, ".js-min-repository-error").classList.add("d-none"), Pi(), u.call(e)
		}), i.on("click", ".js-no-repositories-radio", function() {
			a.query(document, ".js-integrations-install-repo-picked, .js-min-repository-error").classList.add("d-none"), Pi()
		}), i.on("click", ".js-all-repositories-radio", function() {
			a.query(document, ".js-integrations-install-repo-picked, .js-min-repository-error").classList.add("d-none"), Pi()
		}), i.on("click", ".js-select-repositories-radio", function() {
			a.query(document, ".js-integrations-install-repo-picked").classList.remove("d-none"), Pi()
		}), E(document).on("submit", ".js-integrations-install-form", function() {
			this.querySelector(".js-all-repositories-radio").checked ? Array.from(this.querySelectorAll('input[name="repository_ids[]"]')).forEach(function(e) {
				return e.remove()
			}) : E(".js-autocomplete-results").empty()
		})
	}), i.on("submit", ".org form[data-results-container]", function(e) {
		e.preventDefault()
	}), i.on("click", ".js-invitations-team-suggestions-view-all", function(e) {
		e.preventDefault();
		var t = c(e.currentTarget, HTMLAnchorElement);
		p.fetchSafeDocumentFragment(document, t.href).then(function(e) {
			var n = a.closest(t, "ul");
			n.innerHTML = "", n.appendChild(e);
			var r = !0,
				o = !1,
				s = void 0;
			try {
				for (var i, c = a.querySelectorAll(document, ".js-invitation-toggle-team:checked", HTMLInputElement)[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
					var u = i.value.value;
					a.query(n, ".js-invitation-toggle-team[value=" + u + "]", HTMLInputElement).setAttribute("checked", "true")
				}
			} catch (e) {
				o = !0, s = e
			} finally {
				try {
					!r && c.return && c.return()
				} finally {
					if (o) throw s
				}
			}
		})
	}), i.on("change", ".js-org-reinstate-option", Oi), s.observe(".js-org-reinstate-forms", Oi), i.on("change", ".js-change-org-role-selector", function(e) {
		var n = e.target;
		if (t(n instanceof HTMLInputElement, "null.js:7"), n.form) {
			var r = n.form.querySelector(".js-change-org-role-submit");
			r instanceof HTMLButtonElement && (r.disabled = !1)
		}
	}), i.on("click", ".js-member-remove-confirm-button", function(e) {
		e.preventDefault();
		var t = new URL(this.getAttribute("data-url"), window.location.origin),
			n = new URLSearchParams(t.search.slice(1)),
			r = this.getAttribute("data-member-id");
		if (r) n.append("member_ids[]", r);
		else {
			var a = !0,
				o = !1,
				s = void 0;
			try {
				for (var i, c = Array.from(document.querySelectorAll(".js-bulk-actions-container .js-bulk-actions-toggle:checked")).map(function(e) {
						return e.closest(".js-bulk-actions-item").getAttribute("data-bulk-actions-id")
					}).sort()[Symbol.iterator](); !(a = (i = c.next()).done); a = !0) {
					var u = i.value;
					n.append("member_ids[]", u)
				}
			} catch (e) {
				o = !0, s = e
			} finally {
				try {
					!a && c.return && c.return()
				} finally {
					if (o) throw s
				}
			}
		}
		t.search = n.toString(), te(function() {
			p.fetchText(t).then(te)
		})
	}), i.on("click", ".js-membership-tab", function() {
		var e = this.getAttribute("data-membership"),
			t = a.query(document, ".js-member-filter-field", HTMLInputElement),
			n = t.value,
			r = new RegExp("membership:[a-z-]+"),
			o = n.toString().trim().replace(r, "");
		t.value = (o + " " + e).replace(/\s\s/, " "), t.focus(), f.dispatchThrottledInputEvent(t), a.query(document, ".js-membership-tabs").classList.remove("selected"), this.classList.add("selected")
	}), i.on("click", ".js-member-search-filter", function(e) {
		e.preventDefault();
		var t = this.getAttribute("data-filter"),
			n = this.closest(".js-select-menu").getAttribute("data-filter-on"),
			r = a.query(document, ".js-member-filter-field", HTMLInputElement),
			o = r.value,
			s = new RegExp(n + ":[a-z]+"),
			i = o.toString().trim().replace(s, "");
		r.value = (i + " " + t).replace(/\s\s/, " "), r.focus(), f.dispatchThrottledInputEvent(r)
	}), o.onKey("keydown", ".js-auto-submit-on-select .js-autocomplete-field", function(e) {
		"Enter" === e.key && e.preventDefault()
	}), i.on("autocomplete:result", ".js-auto-submit-on-select", function() {
		var e = this;
		Promise.resolve().then(function() {
			return d.submit(e)
		})
	}), i.on("autocomplete:result", ".js-bulk-add-team-form .js-autocomplete-field", function(e) {
		var t = Vo(this);
		if (t && t.indexOf("/") > 0) {
			var n = this.form.action,
				r = this.form.method,
				a = new FormData(this.form);
			R("low").then(function() {
				te(function() {
					p.fetchText(n, {
						method: r,
						body: a
					}).then(te)
				})
			}), e.stopPropagation()
		}
	});
	var Ni = "";

	function Di(e) {
		var n = this,
			r = e.target;
		t(r instanceof HTMLElement, "null.js:133");
		var a = e.currentTarget;
		t(a instanceof HTMLElement, "null.js:136");
		var o = r.getAttribute("data-member-name") || r.value;
		if (o) {
			var s = a.getAttribute("data-action-type");
			if (s) {
				var i = a.closest(".js-add-members-container");
				if (i) {
					var c = parseInt(i.getAttribute("data-accessible-repositories-count"));
					if (isNaN(c) || c < 1) Promise.resolve().then(function() {
						return d.submit(n)
					});
					else {
						e.preventDefault();
						var u = new URL(i.getAttribute("data-url"), window.location.origin),
							l = new URLSearchParams(u.search.slice(1));
						l.append("member", o), l.append("action_type", s);
						var m = a.getAttribute("data-return-to");
						m && l.append("return_to", m), u.search = l.toString(), i.classList.add("loading"), p.fetchSafeDocumentFragment(document, u).then(function(e) {
							i.classList.remove("loading"), i.innerHTML = null, i.appendChild(e)
						}).catch()
					}
				}
			}
		}
	}

	function Bi() {
		a.query(document, ".js-save-member-privileges-button-container").classList.toggle("member-privilege-radios-preserved", Ui() && zi() && Wi())
	}

	function Ui() {
		return "" === a.query(document, ".js-customize-member-privileges-default-repository-permission-radio:checked", HTMLInputElement).value
	}

	function zi() {
		return "0" === a.query(document, ".js-customize-member-privileges-repository-creation-radio:checked", HTMLInputElement).value
	}

	function Wi() {
		return "secret" === a.query(document, ".js-customize-member-privileges-team-privacy-radio:checked", HTMLInputElement).value
	}

	function Vi(e, t) {
		"" === t && (a.query(document, ".js-rename-owners-team-errors").innerHTML = ""), a.query(document, ".js-rename-owners-team-button").classList.toggle("disabled", !e), a.query(document, ".js-rename-owners-team-note").classList.toggle("d-none", "" !== t)
	}

	function $i(e) {
		for (var t in e.selectors) {
			var n = e.selectors[t],
				r = document.querySelector(t);
			n && r && (r.textContent = n)
		}
		var o = 100 === e.filled_seats_percent;
		a.query(document, ".js-live-update-seats-percent").style.width = e.filled_seats_percent + "%", a.query(document, ".js-need-more-seats").classList.toggle("d-none", !o), a.query(document, ".js-add-org-member-form").classList.toggle("d-none", o)
	}

	function Ji(e, t) {
		e.preventDefault();
		var n = a.query(document, t, HTMLFormElement);
		d.submit(n)
	}

	function Ki(e) {
		var t = e.querySelector("input.is-submit-button-value");
		return t instanceof HTMLInputElement ? t : null
	}

	function Gi(e) {
		var t = e.closest("form");
		if (t instanceof HTMLFormElement) {
			var n = Ki(t);
			if (e.name) {
				var r = e.matches("input[type=submit]") ? "Submit" : "",
					a = e.value || r;
				n || ((n = document.createElement("input")).type = "hidden", n.classList.add("is-submit-button-value"), t.prepend(n)), n.name = e.name, n.value = a
			} else n && n.remove()
		}
	}

	function Yi() {
		var e;
		L.hasDirtyFields(this) ? (e = this.getAttribute("data-warn-unsaved-changes") || "Changes you made may not be saved.", window.onbeforeunload = function(t) {
			return t.returnValue = e, e
		}) : Xi()
	}

	function Xi() {
		window.onbeforeunload = null
	}

	function Qi() {
		return a.query(document, ".js-saml-provider-settings-form", HTMLFormElement)
	}

	function Zi() {
		return Qi().querySelector(".js-saml-form-inputs")
	}

	function ec() {
		return a.query(document, ".js-org-saml-confirm-enforcement-hidden", HTMLInputElement)
	}

	function tc(e) {
		e && e.classList.remove("d-none")
	}

	function nc() {
		return !a.query(document, ".js-org-enable-saml", HTMLInputElement).checked
	}

	function rc() {
		return a.query(document, ".is-submit-button-value", HTMLInputElement)
	}

	function ac() {
		return a.query(document, ".js-org-saml-enforce", HTMLInputElement).checked && "0" === ec().value && !("1" === a.query(document, ".js-org-saml-previously-enforced", HTMLInputElement).value) && "1" === a.query(document, ".js-org-has-unlinked-saml-members", HTMLInputElement).value
	}

	function oc() {
		Qi().submit()
	}
	n.ready.then(function() {
		var e = document.querySelector(".js-add-members-container");
		e && (Ni = e.innerHTML)
	}), i.on("click", ".js-approve-membership-request", Di), i.on("autocomplete:result", ".js-add-team-member-form", Di), document.addEventListener("facebox:close", function() {
		var e = document.querySelector(".js-add-members-container");
		e && (e.innerHTML = Ni)
	}), l.remoteForm(".js-add-org-member-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s, i, c, u, l, d, m, f, v;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = void 0, o = a.query(document, ".js-member-list"), t.classList.add("is-sending"), (s = document.querySelector(".flash-messages")) && s.remove(), e.prev = 5, e.next = 8, n.json();
					case 8:
						r = e.sent, e.next = 16;
						break;
					case 11:
						if (e.prev = 11, e.t0 = e.catch(5), e.t0.response || e.t0.response.json) {
							e.next = 15;
							break
						}
						return e.abrupt("return");
					case 15:
						o.insertAdjacentHTML("beforebegin", e.t0.response.json.message_html);
					case 16:
						if (!r) {
							e.next = 50;
							break
						}
						if (t.classList.remove("is-sending"), t.querySelector(".js-autocomplete-field").value = "", i = a.query(C.parseHTML(document, r.json.list_item_html), "*"), !(c = i.getAttribute("data-login"))) {
							e.next = 49;
							break
						}
						u = !0, l = !1, d = void 0, e.prev = 25, m = o.children[Symbol.iterator]();
					case 27:
						if (u = (f = m.next()).done) {
							e.next = 35;
							break
						}
						if ((v = f.value).getAttribute("data-login") !== c) {
							e.next = 32;
							break
						}
						return v.remove(), e.abrupt("break", 35);
					case 32:
						u = !0, e.next = 27;
						break;
					case 35:
						e.next = 41;
						break;
					case 37:
						e.prev = 37, e.t1 = e.catch(25), l = !0, d = e.t1;
					case 41:
						e.prev = 41, e.prev = 42, !u && m.return && m.return();
					case 44:
						if (e.prev = 44, !l) {
							e.next = 47;
							break
						}
						throw d;
					case 47:
						return e.finish(44);
					case 48:
						return e.finish(41);
					case 49:
						o.prepend(i);
					case 50:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[5, 11],
				[25, 37, 41, 49],
				[42, , 44, 48]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), i.on("change", ".js-customize-member-privileges-default-repository-permission-radio", function() {
		a.query(document, ".js-migrate-ability-list-item-default-repository-permission").classList.toggle("migrate-ability-not-possible", Ui()), Bi()
	}), i.on("change", ".js-customize-member-privileges-repository-creation-radio", function() {
		a.query(document, ".js-migrate-ability-list-item-members-can-create-repositories").classList.toggle("migrate-ability-not-possible", zi()), Bi()
	}), i.on("change", ".js-customize-member-privileges-team-privacy-radio", function() {
		a.query(document, ".js-migrate-ability-list-item-team-privacy").classList.toggle("migrate-ability-not-possible", Wi()), Bi()
	}), n.ready.then(function() {
		var e = document.querySelector(".js-org-migration-settings-sidebar");
		if (null != e) {
			var t = e.getBoundingClientRect();
			if (null != t) {
				var n = t.top + window.pageYOffset - 16,
					r = e.style.position,
					a = e.style.top,
					o = e.style.left,
					s = e.style.width,
					i = u(function() {
						var i = e.parentNode;
						if (null != i && i instanceof HTMLElement) {
							var c = i.getBoundingClientRect().right - t.width;
							window.pageYOffset >= n ? (e.style.position = "fixed", e.style.top = "16px", e.style.left = c + "px", e.style.width = "250px") : (e.style.position = r, e.style.top = a, e.style.left = o, e.style.width = s)
						}
					}, 5);
				window.addEventListener("scroll", i, {
					passive: !0
				}), window.addEventListener("resize", i, {
					passive: !0
				}), Bi()
			}
		}
	}), s.observe(".js-rename-owners-team-input", function(e) {
		f.addThrottledInputEventListener(e, function() {
			! function(e) {
				var t = e.value.trim().toLowerCase(),
					n = e.form;
				n.classList.add("is-sending"), n.classList.remove("is-name-check-fail", "is-name-check-success");
				var r = new URL(e.getAttribute("data-check-url"), window.location.origin),
					o = new URLSearchParams(r.search.slice(1));
				o.append("name", t), r.search = o.toString(), p.fetchText(r).then(function(e) {
					if (n.classList.remove("is-sending"), "owners" === t || "" === t) return Vi(!1, "");
					a.query(n, ".js-rename-owners-team-errors").innerHTML = e || "";
					var r = !!document.querySelector(".js-error");
					return Vi(!(r || !t), e), n.classList.toggle("is-name-check-fail", r), n.classList.toggle("is-name-check-success", !r && t)
				})
			}(e)
		})
	}), s.observe(".js-org-signup-duration-change", function(e) {
		e.addEventListener("click", function(t) {
			var n = a.query(document, ".js-plan-choice:checked", HTMLInputElement),
				r = a.query(document, "#js-pjax-container"),
				o = new URLSearchParams;
			o.append("plan_duration", e.getAttribute("data-plan-duration")), o.append("plan", n.value);
			var s = a.query(document, ".js-new-organization-name", HTMLInputElement);
			s.value && o.append("login", s.value);
			var i = a.query(document, ".js-new-organization-billing-email", HTMLInputElement);
			i.value && o.append("billing_email", i.value), c(t.currentTarget, HTMLAnchorElement).search = "?" + o.toString(), _.click(t, {
				scrollTo: !1,
				container: r
			})
		})
	}), o.onInput(".js-new-organization-name", function(e) {
		var t = e.target,
			n = a.closest(t, "dd").querySelector(".js-field-hint-name");
		n && ("innerText" in n ? n.innerText = t.value : n.textContent = t.value)
	}), o.onInput(".js-company-name-input", function(e) {
		var t = c(e.target.form, HTMLFormElement),
			n = t.querySelector(".js-company-name-text");
		if (n) {
			var r = a.query(t, ".js-corp-tos-link"),
				o = t.querySelector(".js-tos-link");
			o && (o.classList.add("d-none"), o.setAttribute("aria-hidden", "true")), r.classList.remove("d-none"), r.setAttribute("aria-hidden", "false");
			var s = " on behalf of your company, " + e.target.value;
			"innerText" in n ? n.innerText = s : n.textContent = s
		}
	}), s.observe(".js-company-owned:not(:checked)", {
		add: function(e) {
			var t = c(e.form, HTMLFormElement),
				n = a.query(t, ".js-company-name-input", HTMLInputElement),
				r = a.query(document, ".js-company-name-text"),
				o = a.query(document, ".js-corp-tos-link"),
				s = a.query(document, ".js-tos-link");
			e.getAttribute("data-optional") && n.removeAttribute("required"), d.changeValue(n, ""), s.classList.remove("d-none"), s.setAttribute("aria-hidden", "false"), o.classList.add("d-none"), o.setAttribute("aria-hidden", "true"), "innerText" in r ? r.innerText = "" : r.textContent = ""
		}
	}), s.observe(".js-company-owned:checked", {
		add: function(e) {
			var t = c(e.form, HTMLFormElement),
				n = a.query(t, ".js-company-name-input", HTMLElement);
			n.setAttribute("required", "required"), i.fire(n, "change")
		}
	}), s.observe(".js-company-owned-autoselect", function(e) {
		var t = c(e, HTMLInputElement);

		function n() {
			if (t.checked && t.form) {
				var e = a.query(t.form, ".js-company-owned", HTMLInputElement);
				d.changeValue(e, !0)
			}
		}
		t.addEventListener("change", n), n()
	}), l.remoteForm(".js-org-list-item .js-org-remove-item", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return t.closest(".js-org-list-item").classList.add("d-none"), e.prev = 1, e.next = 4, n.text();
					case 4:
						e.next = 12;
						break;
					case 6:
						if (e.prev = 6, e.t0 = e.catch(1), t.closest(".js-org-list-item").classList.remove("d-none"), !(r = t.getAttribute("data-error-message"))) {
							e.next = 12;
							break
						}
						return e.abrupt("return", alert(r));
					case 12:
						t.closest(".js-org-list-item").remove();
					case 13:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[1, 6]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-per-seat-invite-field, .js-per-seat-invite .js-org-remove-item", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.json();
					case 2:
						$i(e.sent.json);
					case 4:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), s.observe(".js-repository-fallback-search", function(e) {
		e.addEventListener("keypress", function(e) {
			if ("Enter" === x(e)) {
				var t = new URL(this.getAttribute("data-url"), window.location.origin),
					n = new URLSearchParams(t.search.slice(1)),
					r = n.get("q") || "";
				n.set("q", r + " " + this.value), t.search = n.toString(), window.location = t.toString()
			}
		})
	}), i.on("selectmenu:selected", ".js-select-repo-permission", function(e) {
		d.submit(c(e.currentTarget, HTMLFormElement))
	}), l.remoteForm(".js-select-repo-permission", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, a, o;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return t.classList.remove("was-successful"), e.next = 3, n.json();
					case 3:
						r = e.sent, a = r.json, t.classList.add("was-successful"), (o = t.closest(".js-org-repo")) && o.classList.toggle("with-higher-access", a.members_with_higher_access);
					case 8:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), s.observe(".js-two-factor-needs-enforced", function(e) {
		e.addEventListener("submit", function(e) {
			e.target.querySelector("input[type=checkbox]").checked && (e.preventDefault(), te({
				div: "#confirm-2fa-requirement"
			}))
		})
	}), s.observe(".js-two-factor-enforcement-poller", function(e) {
		var t = e.getAttribute("data-redirect-url");
		e.addEventListener("load", function() {
			window.location.href = t
		})
	}), i.on("click", ".js-change-default-permission-members-confirm", function(e) {
		Ji(e, ".js-change-default-permission-members-form")
	}), i.on("click", ".js-change-default-permission-users-confirm", function(e) {
		Ji(e, ".js-change-default-permission-users-form")
	}), i.on("change", ".js-auto-submit-on-change", function(e) {
		e.preventDefault();
		var t = a.closest(e.target, "form", HTMLFormElement);
		t && d.submit(t)
	}), s.observe("[data-warn-unsaved-changes]", function(e) {
		e.addEventListener("input", Yi), e.addEventListener("change", Yi), e.addEventListener("submit", Xi)
	}), i.on("click", ".js-org-enable-saml", function(e) {
		var n;
		t(e.currentTarget instanceof HTMLInputElement, "null.js:104"), e.currentTarget.checked ? tc(Zi()) : (n = Zi()) && n.classList.add("d-none")
	}), i.on("click", ".js-saml-submit", function(e) {
		e.preventDefault(), t(e.currentTarget instanceof HTMLButtonElement, "null.js:121"), Gi(e.currentTarget), d.submit(Qi())
	}), i.on("click", ".js-org-saml-confirm-enforce-button", function() {
		ec().value = "true", d.submit(Qi())
	}), i.on("submit", ".js-saml-provider-settings-form", function(e) {
		e.preventDefault(), "test_settings" === rc().name ? oc() : "save_settings" === rc().name && (nc() ? te({
			div: "#disable-saml-confirmation"
		}) : ac() ? te({
			div: "#enforce-saml-confirmation"
		}) : oc())
	}), document.addEventListener("facebox:close", function() {
		if (document.querySelector("#facebox .js-disable-saml-confirmation")) {
			var e = document.querySelector(".js-org-enable-saml");
			e && e instanceof HTMLInputElement && (e.checked = !0, tc(Zi()))
		}
	}), i.on("autocomplete:autocompleted:changed", ".js-team-add-user-name", function() {
		E(".js-team-add-user-button")[0].disabled = !Vo(this)
	}), i.on("click", ".js-team-remove-user", function(e) {
		e.preventDefault(), E(".js-team-add-user-form").removeClass("d-none"), E(".js-team-add-user-name").focus(), this.closest("li").remove()
	}), i.on("click", ".js-team-add-user-button", function(e) {
		e.preventDefault();
		var t = this.closest(".js-team-add-user-form"),
			n = t.querySelector(".js-team-add-user-name"),
			r = n.value;
		if (r && Vo(n)) {
			n.value = "";
			var o = a.query(document, ".js-team-user-logins"),
				s = !0,
				i = !1,
				c = void 0;
			try {
				for (var u, l = o.querySelectorAll("li")[Symbol.iterator](); !(s = (u = l.next()).done); s = !0) {
					if (u.value.getAttribute("data-login") === r) return
				}
			} catch (e) {
				i = !0, c = e
			} finally {
				try {
					!s && l.return && l.return()
				} finally {
					if (i) throw c
				}
			}
			R("low").then(function() {
				var e = new URL(t.getAttribute("data-template-url"), window.location.origin),
					a = new URLSearchParams(e.search.slice(1));
				a.append("member", r), e.search = a.toString(), p.fetchSafeDocumentFragment(document, e).then(function(e) {
					o.appendChild(e), E(".js-login-field").prop("disabled", !1), t.classList.add("d-none")
				}), n.focus()
			})
		}
	}), i.on("change", ".js-change-team-visibility-selector", function(e) {
		var n = e.target;
		if (t(n instanceof HTMLInputElement, "null.js:7"), n.form) {
			var r = n.form.querySelector(".js-change-team-visibility-submit");
			r instanceof HTMLButtonElement && (r.disabled = !1)
		}
	});
	var sc = new v;

	function ic(e, t) {
		var n = e.querySelector(".js-save-button"),
			r = e.closest(".js-team").querySelector(".js-slug");
		e.classList.remove("is-checking"), t.error ? (n.disabled = !0, "exists" === t.error && (e.classList.add("is-exists"), t.slug && (r.textContent = t.slug))) : (n.disabled = !1, t.slug && (r.textContent = t.slug))
	}

	function cc(e) {
		var t = e.value.trim(),
			n = e.form;
		n.classList.add("is-sending"), n.classList.remove("is-name-check-fail"), n.classList.remove("is-name-check-success");
		var r = new URL(e.getAttribute("data-check-url"), window.location.origin),
			a = new URLSearchParams(r.search.slice(1));
		a.append("name", t), r.search = a.toString(), p.fetchText(r).then(function(r) {
			var a = void 0;
			n.classList.remove("is-sending"), n.querySelector(".js-team-name-errors").innerHTML = r || "";
			var o = null != (a = e.getAttribute("data-original")) ? a.trim() : void 0,
				s = o && t === o,
				i = !!n.querySelector(".js-error"),
				c = (i || !t) && !s;
			return n.querySelector(".js-create-team-button").disabled = c, n.classList.toggle("is-name-check-fail", i), n.classList.toggle("is-name-check-success", !i && t)
		})
	}

	function uc(e) {
		var t = a.closest(e, "form", HTMLFormElement),
			n = t.querySelector(".js-selected-team-id"),
			r = n && c(n, HTMLInputElement).value,
			o = a.query(t, ".js-team-privacy-closed"),
			s = a.query(t, ".js-team-privacy-secret"),
			i = a.query(o, "input", HTMLInputElement),
			u = a.query(s, "input", HTMLInputElement);
		s.classList.toggle("tooltipped", !!r), s.classList.toggle("text-gray", !!r), u.disabled = !!r, r && (i.checked = !0)
	}

	function lc(e, t) {
		var n = e.value;
		e.value = t.textContent, t.textContent = n
	}

	function dc() {
		E(".pull-request-ref-restore").removeClass("last").last().addClass("last")
	}

	function mc() {
		var e = E("#js-pull-restorable").length;
		E(".js-pull-discussion-timeline").toggleClass("is-pull-restorable", e)
	}
	E(document).on("ajaxSend", ".js-ldap-import-groups-container", function(e, t) {
		return t.setRequestHeader("X-Context", "import")
	}), i.on("autocomplete:autocompleted:changed", ".js-team-ldap-group-field", function() {
		var e = this.closest(".js-ldap-group-adder");
		e && (e.classList.remove("is-exists"), e.querySelector(".js-ldap-group-adder-button").disabled = !Vo(this))
	}), i.on("navigation:open", ".js-team-ldap-group-autocomplete-results .js-navigation-item", function(e) {
		var t = e.currentTarget,
			n = this.closest(".js-ldap-group-adder"),
			r = t.getAttribute("data-dn"),
			o = a.closest(t, ".js-ldap-import-groups-container");
		n.querySelector(".js-team-ldap-dn-field").value = r;
		var s = !0,
			i = !1,
			c = void 0;
		try {
			for (var u, l = o.querySelectorAll(".js-ldap-group-dn")[Symbol.iterator](); !(s = (u = l.next()).done); s = !0) {
				u.value.textContent === r && (n.classList.add("is-exists"), n.querySelector(".js-ldap-group-adder-button").disabled = !0)
			}
		} catch (e) {
			i = !0, c = e
		} finally {
			try {
				!s && l.return && l.return()
			} finally {
				if (i) throw c
			}
		}
	}), E(document).on("ajaxSend", ".js-import-container", function() {
		this.classList.add("is-importing"), this.querySelector(".js-ldap-group-adder-button").disabled = !0
	}), E(document).on("ajaxComplete", ".js-import-container", function() {
		return this.classList.remove("is-importing")
	}), E(document).on("ajaxSuccess", ".js-ldap-group-adder", function(e, t, n, r) {
		var a = this.closest(".js-ldap-import-groups-container"),
			o = document.querySelector(".js-import-form-actions");
		a.classList.remove("is-empty"), a.querySelector(".js-ldap-imported-groups").insertAdjacentHTML("afterbegin", r), this.reset(), this.querySelector(".js-team-ldap-group-field").focus();
		var s = this.querySelector(".js-ldap-group-adder-button");
		s && (s.disabled = !0), o && o.classList.remove("d-none")
	}), E(document).on("submit", ".js-team-remove-group", function() {
		this.closest(".js-team").classList.add("is-removing"), a.query(document, ".js-team-ldap-group-field").focus()
	}), E(document).on("ajaxSuccess", ".js-team-remove-group", function() {
		this.closest(".js-team").remove(), document.querySelector(".js-team:not(.is-removing)") || (a.query(document, ".js-ldap-import-groups-container").classList.add("is-empty"), a.query(document, ".js-import-form-actions").classList.add("d-none"))
	}), E(document).on("ajaxError", ".js-team-remove-group", function() {
		this.closest(".js-team").classList.remove("is-removing")
	}), i.on("click", ".js-edit-team", function() {
		var e = this.closest(".js-team");
		e.classList.contains("is-removing") || (e.classList.add("is-editing"), e.querySelector(".js-team-name-field").focus())
	}), i.on("click", ".js-cancel-team-edit", function() {
		var e = this.closest(".js-team"),
			t = e.querySelector(".js-team-form"),
			n = e.querySelector(".js-slug");
		e.classList.remove("is-editing"), t.classList.remove("is-exists"), n.textContent = n.getAttribute("data-original-slug"), t.reset()
	}), E(document).on("ajaxSuccess", ".js-team-form:not(.is-checking)", function(e, t, n, r) {
		var a = this.closest(".js-team");
		a.classList.remove("is-editing"), a.outerHTML = r
	}), s.observe(".js-team-name-field", function(e) {
		f.addThrottledInputEventListener(e, function() {
			var t = e.closest(".js-team-form");
			t.classList.remove("is-exists"), t.classList.add("is-checking"), t.querySelector(".js-save-button").disabled = !0;
			var n = new URL(e.getAttribute("data-check-url"), window.location.origin),
				r = new URLSearchParams(n.search.slice(1));
			r.append("name", e.value), n.search = r.toString(), sc.push(p.fetchJSON(n, {
				headers: {
					"X-Context": "import"
				}
			})).then(function(e) {
				ic(t, e)
			}, function(e) {
				ic(t, {
					error: e
				})
			})
		})
	}), i.on("click", ".js-team-search-filter", function(e) {
		e.preventDefault();
		var t = this.getAttribute("data-filter"),
			n = this.closest(".js-select-menu").getAttribute("data-filter-on"),
			r = a.query(document, ".js-team-search-field", HTMLInputElement),
			o = r.value,
			s = new RegExp(n + ":[a-z]+"),
			i = o.toString().trim().replace(s, "");
		r.value = (i + " " + t).replace(/\s\s/, " "), r.focus(), f.dispatchThrottledInputEvent(r)
	}), s.observe(".js-new-team", function(e) {
		f.addThrottledInputEventListener(e, function() {
			cc(e)
		})
	}), s.observe(".js-new-org-team", function(e) {
		var t = e.querySelector(".js-new-team");
		t.value && cc(t)
	}), s.observe(".js-select-team-menu", function(e) {
		uc(e)
	}), i.on("selectmenu:selected", ".js-select-team-menu", function(e) {
		uc(e.currentTarget)
	}), i.on("click", ".js-create-team-button", function(e) {
		var n = a.closest(e.currentTarget, "form"),
			r = c(n.querySelector(".js-already-selected-team-name"), HTMLInputElement),
			o = n.querySelector(".js-original-team-visibility"),
			s = a.query(n, ".js-team-privacy-secret"),
			i = a.query(s, "input", HTMLInputElement),
			u = function(e) {
				return e.value !== e.getAttribute("data-original-team-name")
			}(r),
			l = function(e, t) {
				return null != e && t.checked && !["", "SECRET"].includes(e.getAttribute("data-original-team-visibility"))
			}(o, i);
		if (u || l) {
			e.preventDefault();
			var d = n.getAttribute("data-important-changes-summary-url");
			t(d, "null.js:103");
			var m = new URL(d, window.location.origin),
				f = new URLSearchParams(m.search.slice(1));
			f.append("parent_team", r.value), l && f.append("visibility_changed", l.toString()), u && f.append("parent_changed", u.toString()), m.search = f.toString(), te(function() {
				p.fetchSafeDocumentFragment(document, m).then(function(e) {
					te(e, "js-org-team-edit-change-parent-summary")
				})
			})
		}
	}), i.on("click", ".js-org-team-edit-change-parent-summary .js-confirm-change-parent", function() {
		a.query(document, ".js-org-team-form", HTMLFormElement).submit()
	}), i.on("click", ".js-rename-owners-team-next-btn", function() {
		a.query(document, ".js-rename-owners-team-about-content").classList.toggle("migrate-owners-content-hidden"), a.query(document, ".js-rename-owners-team-rename-form").classList.toggle("migrate-owners-content-hidden")
	}), s.observe(".js-org-transform-poller", function(e) {
		var t = e.getAttribute("data-redirect-url");
		e.addEventListener("load", function() {
			window.location.href = t
		})
	}), i.on("click", "#load-readme", function(e) {
		var n = c(document.getElementById("gollum-editor-body"), HTMLTextAreaElement),
			r = document.getElementById("editor-body-buffer"),
			a = document.getElementById("undo-load-readme");
		t(r && a, "null.js:11");
		var o = r.textContent,
			s = e.currentTarget.getAttribute("data-readme-name");
		t(s, "null.js:14"), lc(n, r), t(e.currentTarget instanceof HTMLButtonElement, "null.js:17"), e.currentTarget.disabled = !0, e.currentTarget.textContent = s + " loaded", a.classList.remove("d-none"), n.addEventListener("input", function e() {
			n.value !== o && (a.classList.add("d-none"), n.removeEventListener("input", e))
		})
	}), i.on("click", "#undo-load-readme", function(e) {
		var n = c(document.getElementById("gollum-editor-body"), HTMLTextAreaElement),
			r = document.getElementById("editor-body-buffer");
		t(r, "null.js:35"), lc(n, r);
		var a = document.getElementById("load-readme");
		t(a instanceof HTMLButtonElement, "null.js:38");
		var o = a.getAttribute("data-readme-name");
		t(o, "null.js:40"), a.disabled = !1, a.textContent = "Load " + o, e.currentTarget.classList.add("d-none")
	}), i.on("change", ".js-collab-checkbox", function() {
		Array.from(this.form.querySelectorAll(".errored")).forEach(function(e) {
			return e.classList.remove("errored")
		});
		var e = this.closest(".js-collab-option").querySelector(".js-status-indicator");
		e.classList.remove("status-indicator-success", "status-indicator-failed"), e.classList.add("status-indicator-loading")
	}), E(document).on("ajaxSuccess", ".js-collab-form", function() {
		Array.from(this.querySelectorAll(".errored")).forEach(function(e) {
			return e.classList.remove("errored")
		}), Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) {
			e.classList.remove("status-indicator-loading"), e.classList.add("status-indicator-success")
		})
	}), E(document).on("ajaxError", ".js-collab-form", function(e) {
		Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) {
			e.classList.remove("status-indicator-loading"), e.classList.add("status-indicator-failed");
			var t = e.closest(".js-collab-option");
			t.classList.add("errored");
			var n = t.querySelector(".js-collab-checkbox");
			n.checked = !n.checked
		}), Array.from(this.querySelectorAll(".status-indicator-success")).forEach(function(e) {
			e.classList.remove("status-indicator-success")
		}), e.preventDefault()
	}), s.observe(".js-timeline-item > .discussion-item.discussion-commits", {
		add: function(e) {
			if (!e.querySelector(".discussion-item-header")) {
				var t = e.closest(".js-timeline-item");
				if (t) {
					var n, r, a, o = t.previousElementSibling;
					if (o)
						if (o.querySelector(".discussion-item.discussion-commits")) n = t, r = o.querySelector(".timeline-commits"), a = n.querySelectorAll(".timeline-commits > .commit"), Array.from(a).forEach(function(e) {
							r.appendChild(e)
						}), n.remove()
				}
			}
		}
	}), i.on("details:toggled", ".js-pull-merging", function() {
		var e = E(this).find(".js-merge-pull-request");
		e.toggleClass("is-dirty", Array.from(e).some(q))
	}), E(document).on("ajaxSuccess", ".js-merge-pull-request", function(e, t, n, r) {
		var a = void 0;
		this.reset(), E(this).removeClass("is-dirty");
		var o = r.updateContent;
		for (a in o) {
			var s = o[a],
				i = document.querySelector(a);
			i && j.replaceContent(i, s)
		}
	}), document.addEventListener("session:resume", function(e) {
		t(e instanceof CustomEvent, "null.js:46");
		var n = document.getElementById(e.detail.targetId);
		n && E(n).closest(".js-merge-pull-request").closest(".js-details-container").addClass("open")
	}), i.on("change", ".js-merge-method", function() {
		var e = this.closest(".js-merge-pr");
		e.classList.toggle("is-merging", "merge" === this.value), e.classList.toggle("is-squashing", "squash" === this.value), e.classList.toggle("is-rebasing", "rebase" === this.value);
		var t = e.querySelectorAll(".js-merge-pull-request .js-merge-commit-button"),
			n = !0,
			r = !1,
			a = void 0;
		try {
			for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
				var i = o.value;
				i.type = this.value === i.value ? "submit" : "button"
			}
		} catch (e) {
			r = !0, a = e
		} finally {
			try {
				!n && s.return && s.return()
			} finally {
				if (r) throw a
			}
		}
		var c = e.closest(".js-pull-merging"),
			u = c.getAttribute("data-url");
		u = u.replace(/merge_type=(\w+)/, "merge_type=" + this.value), c.setAttribute("data-url", u)
	}), i.on("change", ".js-merge-button-toggle", function() {
		var e, t = void 0,
			n = this.closest(".js-merge-pr"),
			r = !this.checked,
			a = n.querySelectorAll(".js-merge-commit-button");
		for (t = 0, e = a.length; t < e; t++) {
			a[t].disabled = r
		}
	}), i.on("navigation:open", ".js-merge-method-menu .js-navigation-item", function(e) {
		var t = e.currentTarget,
			n = a.closest(t, ".js-merge-pr"),
			r = a.query(n, ".js-merge-title", HTMLInputElement),
			o = a.query(n, ".js-merge-message", HTMLTextAreaElement);
		r.defaultValue === r.value && (r.defaultValue = t.getAttribute("data-input-title-value") || ""), o.defaultValue === o.value && (o.defaultValue = t.getAttribute("data-input-message-value") || "")
	}), i.on("details:toggled", ".js-merge-pr", function(e) {
		var t = e.currentTarget.querySelector(".js-merge-message");
		t && i.fire(t, "change")
	}), i.on("click", ".js-pull-merging a[href]", function(e) {
		var n = e.currentTarget;
		t(n instanceof HTMLElement, "null.js:107"), Er && n.blur()
	}), E(document).on("ajaxError", ".js-handle-pull-merging-errors", function(e, t) {
		var n = void 0,
			r = this.closest(".js-pull-merging");
		if (r.classList.add("is-error"), 422 === t.status && (n = t.responseText)) {
			var a = r.querySelector(".js-pull-merging-error");
			E(a).replaceWith(n)
		}
		return !1
	}), i.on("click", ".js-pull-merging-refresh", function() {
		var e = this.closest(".js-pull-merging"),
			t = new URL(e.getAttribute("data-url"), window.location.origin),
			n = new URLSearchParams(t.search.slice(1)),
			r = document.getElementById("merge_title_field");
		if (r instanceof HTMLInputElement) {
			var a = r.value;
			n.set("commit_title", a)
		}
		var o = document.getElementById("merge_message_field");
		if (o instanceof HTMLTextAreaElement) {
			var s = o.value;
			n.set("commit_message", s)
		}
		return t.search = n.toString(), p.fetchText(t.toString()).then(function(t) {
			return E(e).replaceWith(t)
		}), !1
	}), s.observe(".pull-request-ref-restore", {
		add: dc,
		remove: dc
	}), s.observe("#js-pull-restorable", {
		add: mc,
		remove: mc
	}), document.addEventListener("pjax:end", function() {
		var e = !0,
			t = !1,
			n = void 0;
		try {
			for (var r, a = document.querySelectorAll(".js-pull-refresh-on-pjax")[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
				var o = r.value;
				i.fire(o, "socket:message", {})
			}
		} catch (e) {
			t = !0, n = e
		} finally {
			try {
				!e && a.return && a.return()
			} finally {
				if (t) throw n
			}
		}
	}), document.addEventListener("facebox:reveal", function() {
		var e = document.querySelector("#facebox .js-fork-select-fragment");
		if (e) {
			var n = e.getAttribute("data-url");
			t(n, "Missing attribute `data-url` -- null.js:13"), e.setAttribute("src", n)
		}
	});
	var fc = !1;

	function vc() {
		return "false" === a.query(document, ".js-privacy-toggle:checked", HTMLInputElement).value
	}

	function pc() {
		var e = a.query(document, ".js-repo-name");
		i.fire(e, "change");
		var t = E(".js-owner-container").find(".select-menu-item.selected");
		if (!fc) {
			var n = a.query(document, ".js-privacy-toggle[value=false]", HTMLInputElement),
				r = a.query(document, ".js-privacy-toggle[value=true]", HTMLInputElement);
			"private" === t.attr("data-default") ? (n.checked = !0, i.fire(n, "change")) : (r.checked = !0, i.fire(r, "change"))
		}
		"yes" === t.attr("data-permission") ? (E(".with-permission-fields").show(), E(".without-permission-fields").hide(), E(".errored").show(), E("dl.warn").show()) : (E(".with-permission-fields").hide(), E(".without-permission-fields").show(), E(".errored").hide(), E("dl.warn").hide()),
			function() {
				var e = document.querySelector("#js-upgrade-container");
				if (!e) return;
				var t = a.query(document, "#js-payment-methods-form");
				e.firstElementChild && t.appendChild(e.firstElementChild);
				var n = a.query(document, "input[name=owner]:checked", HTMLInputElement).value,
					r = t.querySelector('.js-upgrade[data-login="' + n + '"]');
				r && e.appendChild(r)
			}(), hc();
		var o = E(".js-quick-install-container");
		if (o) {
			o.find(".js-quick-install-divider").addClass("d-none");
			var s = a.query(document, "input[name=owner]:checked", HTMLInputElement).value,
				c = Array.from(o.find(".js-quick-install-list")),
				u = !0,
				l = !1,
				d = void 0;
			try {
				for (var m, f = c[Symbol.iterator](); !(u = (m = f.next()).done); u = !0) {
					var v = m.value;
					v.getAttribute("data-login") === s ? (v.classList.remove("d-none"), o.find(".js-quick-install-divider").removeClass("d-none")) : v.classList.add("d-none")
				}
			} catch (e) {
				l = !0, d = e
			} finally {
				try {
					!u && f.return && f.return()
				} finally {
					if (l) throw d
				}
			}
		}
	}

	function hc(e) {
		var n = E("#js-upgrade-container"),
			r = E("#new_repository"),
			a = e ? e.target : null;
		a || (a = document.querySelector(".js-privacy-toggle:checked")), t(a instanceof HTMLInputElement, "null.js:86");
		var o = n.find(".js-billing-section");
		"false" === a.value ? (n.show(), o.removeClass("has-removed-contents"), n.find("input[type=checkbox]").prop("checked", "checked")) : (n.hide(), o.addClass("has-removed-contents"), n.find("input[type=checkbox]").prop("checked", null), r.attr("action", r.attr("data-url"))), gc()
	}

	function gc() {
		var e = a.query(document, "#new_repository"),
			t = a.query(e, ".js-repo-name").classList.contains("is-autocheck-successful");
		vc() && (t = t && function() {
			var e = document.querySelector("#js-upgrade-container");
			if (!e) return !0;
			var t = e.querySelector("input[type=checkbox]");
			if (t instanceof HTMLInputElement && !t.checked) return !1;
			var n = e.querySelector(".js-zuora-billing-info");
			if (n && n.classList.contains("d-none")) return !1;
			return !0
		}()), a.query(e, "button[type=submit]", HTMLButtonElement).disabled = !t
	}

	function yc() {
		var e = this.querySelector(".js-repository-import-author-autocomplete");
		e.focus(), e.select()
	}
	s.observe("#js-upgrade-container .js-zuora-billing-info:not(.d-none)", gc), s.observe(".page-new-repo", function() {
		fc = vc(), E("#js-upgrade-container").hide(), pc()
	}), i.on("click", ".js-reponame-suggestion", function() {
		var e = a.query(document, ".js-repo-name", HTMLInputElement);
		e.value = this.textContent, i.fire(e, "input", !1)
	}), i.on("click", ".js-privacy-toggle", function() {
		fc = !0
	}), i.on("change", ".js-privacy-toggle", hc), i.on("navigation:open", ".js-owner-container", pc), i.on("change", "#js-upgrade-container input", gc), o.onInput("#js-upgrade-container input", gc), i.on("autocheck:send", "#repository_name", function(e) {
		t(e instanceof CustomEvent, "null.js:179");
		var n = c(e.currentTarget, HTMLInputElement).form;
		t(n, "null.js:182");
		var r = a.query(n, "input[name=owner]:checked", HTMLInputElement).value;
		e.detail.body.append("owner", r)
	}), i.on("autocheck:complete", "#repository_name", function() {
		gc()
	}), i.on("change", ".js-repository-import-owner-container input", function() {
		var e = this.getAttribute("data-upsell"),
			t = this.getAttribute("data-billing-url");
		a.query(document, ".js-repository-import-billing-url", HTMLAnchorElement).href = t, a.query(document, ".js-repository-import-upsell").classList.toggle("d-none", "false" == e), a.query(document, ".js-repository-import-no-upsell").classList.toggle("d-none", "true" == e)
	}), i.on("socket:message", ".repository-import", function(e) {
		t(e instanceof CustomEvent, "null.js:23");
		var n = e.detail.data;
		n.redirect_to && (document.location.href = n.redirect_to, e.stopImmediatePropagation())
	}), i.on("change", ".js-repository-import-lfs-opt", function() {
		var e = this.getAttribute("data-percent-used"),
			t = this.closest(".js-repository-import-lfs-container"),
			n = this.getAttribute("data-used");
		t.querySelector(".js-repository-import-lfs-warn").classList.toggle("d-none", !(e > 100)), t.querySelector(".js-usage-bar").classList.toggle("exceeded", e >= 100), t.querySelector(".js-usage-bar").setAttribute("aria-label", e + "%"), t.querySelector(".js-repository-import-lfs-progress").style.width = e + "%", t.querySelector("span.js-usage-text").textContent = n
	}), i.on("menu:activated", ".js-repository-import-author-select-menu", yc), i.on("selectmenu:load", ".js-repository-import-author-select-menu", yc), i.on("autocomplete:result", ".js-repository-import-author-autocomplete", function() {
		var e = this.closest(".js-repository-import-author").querySelector(".js-author-login-info");
		d.changeValue(e, this.value)
	}), E(document).on("ajaxSuccess", ".js-repository-import-author-form", function(e, t, n, r) {
		var a = C.parseHTML(document, r.trim());
		this.closest(".js-repository-import-author").replaceWith(a)
	}), i.on("click", ".js-repository-import-projects-cancel-button", function() {
		var e = a.query(document, ".js-repository-import-projects-cancel-form", HTMLFormElement);
		d.submit(e)
	}), l.remoteForm(".js-saved-reply-delete", function() {
		var e = ke(regeneratorRuntime.mark(function e(n, r) {
			var a, o, s;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, r.text();
					case 2:
						a = n.closest(".js-saved-reply-container"), t(a, "null.js:10"), o = a.querySelectorAll(".js-saved-reply-list-item").length, a.classList.toggle("has-replies", o > 1), s = n.closest(".js-saved-reply-list-item"), t(s, "null.js:16"), s.remove();
					case 9:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}());
	var bc = function() {
		var e = ke(regeneratorRuntime.mark(function e(t) {
			var n, r;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						if (t) {
							e.next = 2;
							break
						}
						return e.abrupt("return");
					case 2:
						if (n = t.getAttribute("data-url")) {
							e.next = 5;
							break
						}
						return e.abrupt("return");
					case 5:
						return r = void 0, e.prev = 6, e.next = 9, p.fetchSafeDocumentFragment(document, n);
					case 9:
						r = e.sent, t.innerHTML = "", t.append(r), e.next = 17;
						break;
					case 14:
						e.prev = 14, e.t0 = e.catch(6), window.location.reload();
					case 17:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[6, 14]
			])
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}();

	function jc(e, t) {
		a.query(e, ".js-add-new-blocked-user", HTMLButtonElement).disabled = !t
	}

	function Lc(e, n) {
		var r = a.query(document, ".js-site-search-form", HTMLFormElement);
		a.query(document, ".js-site-search").classList.toggle("scoped-search", n);
		var o = void 0,
			s = void 0;
		n ? (o = r.getAttribute("data-scoped-search-url"), s = e.getAttribute("data-scoped-placeholder")) : (o = r.getAttribute("data-unscoped-search-url"), s = e.getAttribute("data-unscoped-placeholder")), t("string" == typeof o, "null.js:28"), t("string" == typeof s, "null.js:29"), r.setAttribute("action", o), e.setAttribute("placeholder", s)
	}

	function wc() {
		var e = "/site/keyboard_shortcuts?url=" + window.location.pathname;
		return te(function() {
			return p.fetchText(e).then(function(e) {
				return te(e, "shortcuts")
			})
		})
	}
	s.observe(".js-email-global-unsubscribe-form", function(e) {
		e.querySelector(".js-email-global-unsubscribe-submit").disabled = !0
	}), i.on("change", ".js-email-global-unsubscribe-form", function(e) {
		var t = e.currentTarget,
			n = a.query(t, ".js-email-global-unsubscribe-submit", HTMLInputElement),
			r = a.querySelectorAll(t, ".js-email-global-unsubscribe", HTMLInputElement),
			o = Array.from(r).some(function(e) {
				return e.checked !== e.defaultChecked
			});
		n.disabled = !o
	}), l.remoteForm(".js-verify-ssh-key", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.html();
					case 2:
						r = a.closest(t, "li"), a.query(r, ".js-unverified-user-key-notice").remove(), a.query(r, ".js-user-key-icon").classList.remove("unverified-user-key"), t.remove();
					case 6:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), E(document).on("ajaxSuccess", ".js-leave-collaborated-repo", function(e) {
		var t = e.target.getAttribute("data-repo-id");
		a.query(document, ".js-collab-repo[data-repo-id='" + t + "']").remove(), k.close()
	}), E(document).on("ajaxSuccess", ".js-newsletter-unsubscribe-form", function() {
		var e, t = void 0,
			n = document.querySelectorAll(".js-newsletter-unsubscribe-message"),
			r = [];
		for (t = 0, e = n.length; t < e; t++) {
			var a = n[t];
			r.push(a.classList.toggle("d-none"))
		}
		return r
	}), E(document).on("ajaxSuccess", ".js-revoke-access-form", function() {
		var e = this.getAttribute("data-id"),
			t = this.getAttribute("data-type-name"),
			n = a.query(document, ".js-revoke-item[data-type='" + t + "'][data-id='" + e + "']");
		k.close(), n.remove(), n.classList.contains("new-token") && a.query(document, ".js-flash-new-token").remove()
	}), i.on("click", ".js-delete-oauth-application-image", function() {
		var e = a.query(document, ".js-delete-oauth-application-image-form", HTMLFormElement);
		d.submit(e)
	}), i.on("click", ".js-new-callback", function(e) {
		e.preventDefault();
		var t = e.currentTarget,
			n = a.closest(t, ".js-callback-urls"),
			r = a.query(n, ".js-callback-url").cloneNode(!0);
		r.classList.remove("is-default-callback"), a.query(r, "input", HTMLInputElement).value = "", n.classList.add("has-many"), c(t.parentNode, HTMLElement).insertBefore(r, t)
	}), i.on("click", ".js-delete-callback", function(e) {
		e.preventDefault();
		var t = c(e.currentTarget, HTMLElement);
		a.closest(t, ".js-callback-url").remove();
		var n = a.closest(t, ".js-callback-urls");
		a.querySelectorAll(n, ".js-callback-url", HTMLElement).length <= 1 && n.classList.remove("has-many")
	}), i.on("click", ".js-oauth-application-whitelist .js-deny-this-request", function(e) {
		var t = c(e.currentTarget, HTMLElement);
		c(t.nextElementSibling, HTMLInputElement).value = "denied", d.submit(a.closest(t, ".js-org-application-access-form", HTMLFormElement))
	}), E(document).on("ajaxSuccess", ".js-org-application-access-form", function() {
		return window.location.reload()
	}), i.on("click", ".js-user-rename-warning-continue", function() {
		var e = document.querySelectorAll(".js-user-rename-warning, .js-user-rename-form"),
			t = !0,
			n = !1,
			r = void 0;
		try {
			for (var a, o = e[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
				a.value.classList.toggle("d-none")
			}
		} catch (e) {
			n = !0, r = e
		} finally {
			try {
				!t && o.return && o.return()
			} finally {
				if (n) throw r
			}
		}
	}), i.on("change", ".js-checkbox-scope", function(e) {
		var t = c(e.currentTarget, HTMLInputElement),
			n = a.closest(t, ".js-check-scope-container"),
			r = a.querySelectorAll(n, ".js-checkbox-scope", HTMLInputElement),
			o = !0,
			s = !1,
			i = void 0;
		try {
			for (var u, l = r[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
				var d = u.value;
				d !== t && (d.checked = t.checked, d.disabled = t.checked)
			}
		} catch (e) {
			s = !0, i = e
		} finally {
			try {
				!o && l.return && l.return()
			} finally {
				if (s) throw i
			}
		}
	}), i.on("click", ".js-generate-integration-key", function() {
		i.fire(document, "facebox:close");
		var e = a.query(document, ".js-integration-key-management-wrapper");
		e.classList.add("downloading"), e.classList.contains("js-integration-key-multi") && (e.classList.add("has-keys"), setTimeout(function() {
			var e = a.query(document, ".js-integration-keys-container", HTMLElement);
			e && bc(e)
		}, 1e3))
	}), E(document).on("ajaxSuccess", ".js-remove-integration-key", function() {
		i.fire(document, "facebox:close");
		var e = this.getAttribute("data-key-id"),
			t = document.getElementById(e);
		if (t) {
			var n = a.closest(t, ".js-integration-keys-container", HTMLElement);
			n && bc(n)
		}
	}), E(document).on("ajaxError", ".js-remove-integration-key", function(e, t) {
		i.fire(document, "facebox:close");
		var n = a.query(document, ".js-integration-key-management-wrapper"),
			r = a.query(n, ".js-error-container"),
			o = a.query(r, ".js-error-message");
		switch (t.status) {
			case 500:
				o.innerHTML = "Oops, something went wrong.";
				break;
			case 404:
				o.innerHTML = "Oops, that key could not be found.";
				break;
			default:
				o.innerHTML = t.responseJSON.message
		}
		return n.classList.add("error"), !1
	}), i.on("click", ".js-error-dismiss", function() {
		var e = a.query(document, ".js-integration-keys-container", HTMLElement);
		e && bc(e)
	}), s.observe(".js-block-users-form", function(e) {
		jc(e, !1)
	}), E(document).on("ajaxSuccess", ".js-block-users-form", function(e, t, n, r) {
		var o = a.query(document, ".js-user-block-settings-list"),
			s = a.query(o, ".js-blocked-list");
		jc(this, !1);
		var i, c = this.querySelector(".js-add-blocked-user-field");
		d.changeValue(c, ""), i = o, document.querySelector(".js-blocked-user-list") || a.query(i, ".blankslate").classList.add("d-none"), s.insertAdjacentHTML("afterbegin", r)
	}), i.on("change", ".js-add-blocked-user-completer", function(e) {
		if (e.target === e.currentTarget) {
			var n = e.target;
			t(n instanceof AutocompleteElement, "null.js:258"), jc(a.closest(n, ".js-block-users-form"), !!n.value)
		}
	}), l.remoteForm(".js-user-sessions-revoke", function() {
		var e = ke(regeneratorRuntime.mark(function e(n, r) {
			var a, o, s;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, r.text();
					case 2:
						a = n.closest(".js-user-sessions-container"), o = n.closest(".js-user-session"), t(o, "null.js:12"), o.remove(), a && (s = a.querySelectorAll(".js-user-session").length, a.classList.toggle("has-active-sessions", s > 0));
					case 7:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), o.onKey("keyup", ".js-site-search-field", function(e) {
		var t = c(e.target, HTMLInputElement),
			n = 0 === t.value.length;
		n && "Backspace" === e.key && t.classList.contains("is-clearable") && Lc(t, !1), n && "Escape" === e.key && Lc(t, !0), t.classList.toggle("is-clearable", n)
	}), o.onFocus(".js-site-search-focus", function(e) {
		var n = a.closest(e, ".js-chromeless-input-container");
		n.classList.add("focus"), e.addEventListener("blur", function r() {
			n.classList.remove("focus"), t(e instanceof HTMLInputElement, "null.js:53"), 0 === e.value.length && e.classList.contains("js-site-search-field") && Lc(e, !0), e.removeEventListener("blur", r)
		})
	}), i.on("submit", ".js-site-search-form", function(e) {
		if (a.query(c(e.target, HTMLFormElement), ".js-site-search-type-field", HTMLInputElement).value = new URLSearchParams(window.location.search).get("type"), ae("JUMP_TO")) {
			var t = a.query(document, ".js-site-search-form", HTMLFormElement);
			t.getAttribute("data-scoped-search-url") && Ao({
				scope_type: t.getAttribute("data-scope-type"),
				scope_id: t.getAttribute("data-scope-id")
			}), qo("search")
		}
	}), s.observe(".js-contact-javascript-flag", function(e) {
		e.value = "true"
	}), i.on("click", ".js-segmented-nav-button", function(e) {
		e.preventDefault();
		var n = e.currentTarget,
			r = n.getAttribute("data-selected-tab");
		t(r, "null.js:12");
		var o = a.closest(n, ".js-segmented-nav"),
			s = o.parentElement;
		t(s, "null.js:16");
		var i = !0,
			c = !1,
			u = void 0;
		try {
			for (var l, d = a.querySelectorAll(o, ".js-segmented-nav-button")[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
				l.value.classList.remove("selected")
			}
		} catch (e) {
			c = !0, u = e
		} finally {
			try {
				!i && d.return && d.return()
			} finally {
				if (c) throw u
			}
		}
		n.classList.add("selected");
		var m = !0,
			f = !1,
			v = void 0;
		try {
			for (var p, h = a.querySelectorAll(s, ".js-selected-nav-tab")[Symbol.iterator](); !(m = (p = h.next()).done); m = !0) {
				p.value.classList.remove("active")
			}
		} catch (e) {
			f = !0, v = e
		} finally {
			try {
				!m && h.return && h.return()
			} finally {
				if (f) throw v
			}
		}
		a.query(document, "." + r).classList.add("active")
	}), i.on("click", ".js-keyboard-shortcuts", function(e) {
		wc(), e.preventDefault()
	}), i.on("click", ".js-see-all-keyboard-shortcuts", function(e) {
		e.currentTarget.remove(), a.query(document, ".facebox .js-hidden-pane").style.display = "table-row-group", e.preventDefault()
	}), n.ready.then(function() {
		document.body && document.body.addEventListener("keypress", function(e) {
			if (e.target instanceof HTMLElement) {
				var t = e.target === document.body,
					n = e.target.classList.contains("facebox-header");
				(t || n) && "?" === e.key && (Array.from(document.querySelectorAll(".facebox")).some(q) ? k.close() : wc(), e.preventDefault())
			}
		})
	}), s.observe(".js-site-status-container", function(e) {
		var t = e.querySelector(".js-site-status-message"),
			n = e.querySelector(".js-site-status-time"),
			r = e.querySelector(".flash"),
			o = a.query(document, "meta[name=site-status-api-url]", HTMLMetaElement).content;
		window.fetch(o).then(function(e) {
			return e.json()
		}).then(function(a) {
			if (null != a.status && "good" !== a.status) {
				t.textContent = a.body, n.setAttribute("datetime", a.created_on);
				var o = "major" === a.status ? "error" : "warn";
				r.classList.add("flash-" + o), e.classList.remove("d-none")
			}
		})
	}), E(document).on("ajaxSend", ".js-action-ldap-create", function() {
		return E(this).find(".btn-sm").addClass("disabled")
	}), E(document).on("ajaxError", ".js-action-ldap-create", function() {
		return !1
	}), E(document).on("ajaxComplete", ".js-action-ldap-create", function(e, t) {
		var n = E(this),
			r = 500 === t.status ? "Oops, something went wrong." : t.responseText;
		return n.find(".js-message").show().html(" &ndash; " + r), 200 === t.status && n.find(".btn").hide(), !1
	});
	var xc = null,
		kc = new WeakMap;
	o.onKey("keydown", ".js-tree-finder-field", function(e) {
		"Escape" === e.key && (e.preventDefault(), history.back())
	}), s.observe(".js-tree-finder-field", {
		constructor: HTMLInputElement,
		initialize: function(e) {
			function n() {
				! function e(n, r) {
					var o = n.getAttribute("data-results");
					if (o) {
						var s = document.getElementById(o);
						if (s) {
							var i = kc.get(s);
							if (i) {
								var u = c(a.query(s, ".js-tree-browser-result-template").firstElementChild, HTMLElement),
									l = a.query(s, ".js-tree-finder-results");
								null == r && (r = n.value);
								var d = void 0,
									f = void 0;
								r ? (d = Wt(r), f = Ut(i, r)) : f = i, s.classList.toggle("filterable-empty", !f.length);
								for (var v = document.createDocumentFragment(), h = f.slice(0, 50), g = 0, y = h.length; g < y; g++) {
									var b = h[g],
										j = u.cloneNode(!0),
										L = c(j.getElementsByClassName("js-tree-finder-path")[0], HTMLAnchorElement),
										w = new URL(L.href);
									w.pathname = w.pathname + "/" + encodeURI(b), L.href = w.href, L.textContent = b, Vt(L, r, d), v.appendChild(j)
								}
								l.innerHTML = "", l.appendChild(v), m.focus(l)
							} else if (null == xc) {
								var x = s.getAttribute("data-url");
								t(x, "null.js:34"), xc = p.fetchJSON(x).then(function(t) {
									kc.set(s, t.paths), e(n), xc = null
								}).catch(function() {
									xc = null
								})
							}
						}
					}
				}(e)
			}
			return n(), {
				add: function(e) {
					f.addThrottledInputEventListener(e, n), e.focus()
				},
				remove: function(e) {
					f.removeThrottledInputEventListener(e, n)
				}
			}
		}
	});
	var Ec = function() {
			var e = ke(regeneratorRuntime.mark(function e(n, r) {
				var o, s, i, c, u;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return o = a.query(document, ".js-calendar-graph"), s = o.getAttribute("data-graph-url"), t(s, "null.js:122"), i = new URL(s, window.location.origin), (c = new URLSearchParams(i.search.slice(1))).append("from", Nc(n)), c.append("to", Nc(r)), c.append("full_graph", "1"), i.search = c.toString(), e.next = 11, p.fetchSafeDocumentFragment(document, i.toString());
						case 11:
							u = e.sent, a.query(document, ".js-contribution-graph").replaceWith(u);
						case 13:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t, n) {
				return e.apply(this, arguments)
			}
		}(),
		Tc = null,
		Sc = null,
		qc = null,
		Ac = null;

	function Mc() {
		var e = a.query(document, ".js-calendar-graph").getAttribute("data-url");
		return t(e, "null.js:24"), new URL(e, window.location.origin)
	}

	function Hc(e) {
		e.target.matches("rect.day") && (Cc(), function(e) {
			var n = document.body;
			t(n, "null.js:91");
			var r = e.getAttribute("data-date");
			t(r, "null.js:94");
			var a = function(e, t) {
				var n = Ic[t.getUTCMonth()].slice(0, 3) + " " + t.getUTCDate() + ", " + t.getUTCFullYear(),
					r = 0 === e ? "No" : O.formatNumber(e),
					a = document.createElement("div");
				a.classList.add("svg-tip", "svg-tip-one-line");
				var o = document.createElement("strong");
				return o.textContent = r + " " + D.pluralize(e, "contribution"), a.append(o, " on " + n), a
			}(parseInt(e.getAttribute("data-count")), Dc(r));
			n.appendChild(a);
			var o = e.getBoundingClientRect(),
				s = o.left + window.pageXOffset - a.offsetWidth / 2 + o.width / 2,
				i = o.bottom + window.pageYOffset - a.offsetHeight - 2 * o.height;
			a.style.top = i + "px", a.style.left = s + "px"
		}(e.target))
	}

	function Cc() {
		var e = document.querySelector(".svg-tip");
		e && e.remove()
	}
	i.on("pjax:send", "#js-contribution-activity", function(e) {
		e.currentTarget.classList.add("loading")
	}), i.on("pjax:complete", "#js-contribution-activity", function(e) {
		e.currentTarget.classList.remove("loading")
	}), s.observe(".js-calendar-graph-svg", function(e) {
		var t = e.closest(".js-calendar-graph");
		t.addEventListener("mouseover", Hc), t.addEventListener("mouseout", Cc);
		var n = t.getAttribute("data-from");
		n && (n = Sc = Dc(n));
		var r = t.getAttribute("data-to");
		r && (r = Dc(r))
	}), i.on("click", ".js-calendar-graph rect.day", function(e) {
		t(e instanceof MouseEvent, "null.js:54");
		var n = e.currentTarget.getAttribute("data-date");
		t(n, "null.js:56"),
			function(e, t, n) {
				var r = void 0,
					a = void 0,
					o = void 0,
					s = void 0,
					i = Mc(),
					c = new URLSearchParams(i.search.slice(1));
				if (c.append("tab", "overview"), e >= qc && e <= Ac) return void
				function(e) {
					Tc = e, qc = null, Ac = null;
					var t = Mc(),
						n = new URLSearchParams(t.search.slice(1));
					n.append("tab", "overview"), n.append("period", Tc), t.search = n.toString(), Pc(), _c(t.toString())
				}("weekly");
				"object" === (void 0 === t ? "undefined" : xe(t)) && (Sc = t, t = !0);
				if (Sc && t) {
					var u = new Date(Sc.getTime() - 26784e5),
						l = new Date(Sc.getTime() + 26784e5),
						d = e > Sc ? [Sc, e] : [e, Sc];
					a = d[1], (r = d[0]) < u && (r = u), a > l && (a = l), qc = (o = [r, a])[0], Ac = o[1], c.append("from", Nc(r)), c.append("to", Nc(a))
				} else qc = (s = [r = e, null])[0], Ac = s[1], c.append("from", Nc(r));
				Sc = e, Tc = "custom", Pc(r, a), n || (i.search = c.toString(), _c(i.toString()))
			}(Dc(n), e.shiftKey, !1)
	});
	var Ic = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	function _c(e) {
		var t = document.getElementById("js-contribution-activity");
		t && ne({
			url: e,
			container: t,
			scrollTo: !1,
			replace: !0
		})
	}

	function Rc(e, t) {
		var n = (e.getAttribute("class") || "").trim().split(" ").filter(function(e) {
			return e !== t
		});
		e.setAttribute("class", n.join(" "))
	}

	function Fc(e, t) {
		var n = (e.getAttribute("class") || "") + " " + t;
		e.setAttribute("class", n.trim())
	}

	function Pc(e, t) {
		var n = a.query(document, ".js-calendar-graph"),
			r = n.querySelectorAll("rect.day"),
			o = !0,
			s = !1,
			i = void 0;
		try {
			for (var c, u = r[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
				Rc(c.value, "active")
			}
		} catch (e) {
			s = !0, i = e
		} finally {
			try {
				!o && u.return && u.return()
			} finally {
				if (s) throw i
			}
		}
		if (n.classList.remove("days-selected"), e || t) {
			n.classList.add("days-selected");
			var l = !0,
				d = !1,
				m = void 0;
			try {
				for (var f, v = r[Symbol.iterator](); !(l = (f = v.next()).done); l = !0) {
					var p = f.value;
					h(p) && Fc(p, "active")
				}
			} catch (e) {
				d = !0, m = e
			} finally {
				try {
					!l && v.return && v.return()
				} finally {
					if (d) throw m
				}
			}
		}

		function h(n) {
			var r = Dc(n.getAttribute("data-date")).getTime();
			return e && t ? e.getTime() <= r && r <= t.getTime() : r === e.getTime()
		}
	}

	function Oc(e) {
		return ("0" + e).slice(-2)
	}

	function Nc(e) {
		return e.getUTCFullYear() + "-" + Oc(e.getUTCMonth() + 1) + "-" + Oc(e.getUTCDate())
	}

	function Dc(e) {
		var t = e.split("-").map(function(e) {
				return parseInt(e, 10)
			}),
			n = Ae(t, 3),
			r = n[0],
			a = n[1],
			o = n[2];
		return new Date(Date.UTC(r, a - 1, o))
	}

	function Bc(e) {
		var t = e.closest(".js-details-container");
		t && t.classList.add("open");
		var n = e.getBoundingClientRect(),
			r = window.scrollY + n.top - 62 - 10;
		window.scrollTo(0, r)
	}

	function Uc(e) {
		var n = a.querySelectorAll(e, "input[type=checkbox]", HTMLInputElement),
			r = n.filter(function(e) {
				return e.checked
			}).length,
			o = parseInt(e.getAttribute("data-max-repo-count"), 10),
			s = !0,
			i = !1,
			c = void 0;
		try {
			for (var u, l = n[Symbol.iterator](); !(s = (u = l.next()).done); s = !0) {
				var d = u.value;
				d.disabled = r === o && !d.checked
			}
		} catch (e) {
			i = !0, c = e
		} finally {
			try {
				!s && l.return && l.return()
			} finally {
				if (i) throw c
			}
		}! function(e, n, r) {
			var o = a.query(e, ".js-remaining-pinned-repos-count"),
				s = o.getAttribute("data-remaining-label");
			t(s, "null.js:28");
			var i = r - n;
			o.textContent = i + " " + s, o.classList.toggle("text-red", i < 1)
		}(a.closest(e, ".js-pinned-repos-selection-form", HTMLFormElement), r, o)
	}

	function zc(e) {
		return {
			name: a.query(e, ".js-repo").textContent.toLowerCase().trim(),
			pinned: a.query(e, 'input[type="checkbox"]', HTMLInputElement).checked,
			owner: e.classList.contains("js-owned-repo"),
			contributor: e.classList.contains("js-contributed-repo"),
			element: e
		}
	}

	function Wc(e) {
		var t = c(e.target, Element),
			n = a.closest(t, ".js-pinned-repos-selection-form"),
			r = a.query(n, ".js-pinned-repos-filter", HTMLInputElement).value.toLowerCase().trim(),
			o = function(e) {
				if (function(e) {
						return !e.querySelector(".js-pinned-repo-source")
					}(e)) return {
					owners: !0,
					contributors: !0
				};
				var t = a.querySelectorAll(e, ".js-pinned-repo-source:checked", HTMLInputElement),
					n = t.map(function(e) {
						return e.value
					}),
					r = n.indexOf("owned") > -1,
					o = n.indexOf("contributed") > -1,
					s = !0,
					i = !1,
					c = void 0;
				try {
					for (var u, l = t[Symbol.iterator](); !(s = (u = l.next()).done); s = !0) u.value.disabled = r !== o
				} catch (e) {
					i = !0, c = e
				} finally {
					try {
						!s && l.return && l.return()
					} finally {
						if (i) throw c
					}
				}
				return {
					owners: r,
					contributors: o
				}
			}(n),
			s = Array.from(n.querySelectorAll(".js-pinned-repos-selection")).map(zc).map(function(e) {
				return {
					matched: function(e, t, n) {
						if (e.pinned) return !0;
						var r = !t || e.name.indexOf(t) > -1,
							a = e.owner && n.owners,
							o = e.contributor && n.contributors;
						return r && (a || o)
					}(e, r, o),
					candidate: e
				}
			}),
			i = !0,
			u = !1,
			l = void 0;
		try {
			for (var d, m = s[Symbol.iterator](); !(i = (d = m.next()).done); i = !0) {
				var f = d.value,
					v = f.matched;
				f.candidate.element.classList.toggle("d-none", !v)
			}
		} catch (e) {
			u = !0, l = e
		} finally {
			try {
				!i && m.return && m.return()
			} finally {
				if (u) throw l
			}
		}
		var p = s.some(function(e) {
			return e.matched
		});
		a.query(n, ".js-no-repos-message").classList.toggle("d-none", p)
	}

	function Vc(e, t) {
		i.on("click", e + " .js-sortable-button", function() {
			var n = this.closest(e),
				r = this.getAttribute("data-direction"),
				a = Array.from(n.parentElement.children).indexOf(n);
			"up" === r ? n.previousElementSibling.insertAdjacentElement("beforebegin", n) : "down" === r && n.nextElementSibling && n.nextElementSibling.insertAdjacentElement("afterend", n);
			var o = Array.from(n.parentElement.children).indexOf(n);
			this.focus(), t({
				oldIndex: a,
				newIndex: o,
				item: n
			})
		})
	}
	i.on("click", ".js-year-link", function(e) {
			e.stopPropagation();
			var t = a.query(document, ".js-year-link.selected"),
				n = e.target;
			t.classList.remove("selected"), n.classList.add("selected");
			var r = n.textContent,
				o = new Date,
				s = o.getUTCFullYear();
			if (parseInt(s) === parseInt(r)) {
				var i = o.getUTCMonth(),
					c = new Date(s, i, 1);
				Ec(c, o)
			} else ! function(e, t) {
				var n = new Date(Date.parse("1 " + e + " " + t + " 00:00:00 UTC")),
					r = new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth() + 1, 0));
				Ec(n, r)
			}("December", r)
		}),
		function() {
			var e = window.location.hash;
			if (e && !(e.indexOf("#event-") < 0)) {
				var t = e.slice(1, e.length),
					n = document.getElementById(t);
				n && Bc(n)
			}
		}(), window.addEventListener("hashchange", function(e) {
			var t = e.newURL || window.location.href,
				n = t.slice(t.indexOf("#") + 1, t.length),
				r = document.getElementById(n);
			r && (e.stopPropagation(), Bc(r))
		}), s.observe(".js-profile-timeline-year-list.js-sticky", function(e) {
			c(document.getElementById("js-contribution-activity"), HTMLElement).style.minHeight = e.offsetHeight + "px"
		}), l.remoteForm(".js-show-more-timeline-form", function() {
			var e = ke(regeneratorRuntime.mark(function e(n, r) {
				var o, s, i, u;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.next = 2, r.text();
						case 2:
							(o = document.querySelector(".js-show-more-timeline-form")) && (s = o.getAttribute("data-year"), t(null != s, "Missing attribute `data-year` -- null.js:355"), i = a.query(document, ".js-year-link.selected"), u = c(document.getElementById("year-link-" + s), HTMLElement), i.classList.remove("selected"), u.classList.add("selected")), document.title = n.getAttribute("data-title"), h.pushState(null, "", n.action);
						case 6:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t, n) {
				return e.apply(this, arguments)
			}
		}()), i.on("change", ".js-pinned-repos-selection-list input[type=checkbox]", function(e) {
			var t = c(e.currentTarget, HTMLInputElement),
				n = a.closest(t, ".js-pinned-repos-selection");
			n.classList.toggle("selected", t.checked), Uc(a.closest(n, ".js-pinned-repos-selection-list"))
		}), o.onKey("keydown", ".js-pinned-repos-filter", function(e) {
			t(e instanceof KeyboardEvent, "null.js:133"), "Enter" === x(e) && e.preventDefault()
		}), o.onInput(".js-pinned-repos-filter", Wc), i.on("change", ".js-pinned-repos-filter", Wc), i.on("search", ".js-pinned-repos-filter", Wc), i.on("change", ".js-pinned-repo-source", Wc), document.addEventListener("facebox:reveal", function() {
			var e = document.querySelector("#facebox .js-pinned-repos-settings-fragment");
			if (e) {
				var n = e.getAttribute("data-url");
				t(n, "`data-url` must exist -- null.js:149"), e.setAttribute("src", n)
			}
		});
	var $c = function() {
			var e = ke(regeneratorRuntime.mark(function e(t) {
				var n, r, o, s, i, c, u, l;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (n = t.oldIndex, r = t.newIndex, o = t.item, n !== r) {
								e.next = 3;
								break
							}
							return e.abrupt("return");
						case 3:
							return s = a.closest(o, ".js-pinned-repos-reorder-form"), i = a.closest(s, ".js-pinned-repos-reorder-container"), c = a.query(i, ".js-pinned-repos-spinner"), (u = a.query(i, ".js-pinned-repos-reorder-message")).textContent = "", c.style.display = "inline-block", Jc.option("disabled", !0), e.prev = 10, e.next = 13, p.fetchText(s.action, {
								method: s.method,
								body: new FormData(s)
							});
						case 13:
							u.textContent = u.getAttribute("data-success-text"), c.style.display = "none", Jc.option("disabled", !1), e.next = 23;
							break;
						case 18:
							e.prev = 18, e.t0 = e.catch(10), u.textContent = u.getAttribute("data-error-text"), l = o.parentNode, Kc ? l.insertBefore(o, Kc) : l.appendChild(o);
						case 23:
						case "end":
							return e.stop()
					}
				}, e, this, [
					[10, 18]
				])
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}(),
		Jc = null,
		Kc = null;

	function Gc(e) {
		var t = e.item,
			n = e.oldIndex;
		Kc = t.parentNode.children[n + 1]
	}

	function Yc() {
		var e = parseInt(this.getAttribute("data-input-max-length"), 10),
			t = parseInt(this.getAttribute("data-warning-length"), 10) || 5,
			n = this.value.replace(/(\r\n|\n|\r)/g, "\r\n"),
			r = e - n.length;
		if (r <= 0) {
			var a = n.substr(0, e);
			a.endsWith("\r") ? (a = a.substr(0, e - 1), r = 1) : r = 0, this.value = a
		}
		var o = this.getAttribute("data-warning-text"),
			s = this.closest(".js-length-limited-input-container").querySelector(".js-length-limited-input-warning");
		r <= t ? (s.textContent = o.replace(new RegExp("{{remaining}}", "g"), r), s.classList.remove("d-none")) : (s.textContent = "", s.classList.add("d-none"))
	}

	function Xc(e) {
		var t = e.currentTarget,
			n = a.query(t, ".js-milestone-edit-cancel"),
			r = n.getAttribute("data-confirm-changes");
		r && (L.hasDirtyFields(t) ? n.setAttribute("data-confirm", r) : n.removeAttribute("data-confirm"))
	}
	s.observe(".js-pinned-repos-reorder-list", function(e) {
		Jc = K.create(e, {
			animation: 150,
			item: ".js-pinned-repo-list-item",
			handle: ".js-pinned-repository-reorder",
			onUpdate: $c,
			onStart: Gc,
			chosenClass: "is-dragging"
		})
	}), i.on("submit", ".js-pinned-repos-reorder-form", function(e) {
		e.preventDefault()
	}), Vc(".js-pinned-repo-list-item", $c), i.on("click", ".js-user-profile-bio-toggle", function() {
		a.query(document, ".js-user-profile-bio").classList.toggle("d-none"), a.query(document, ".js-user-profile-bio-form").classList.toggle("d-none"), a.query(document, ".js-update-bio-error").classList.add("d-none")
	}), l.remoteForm(".js-user-profile-bio-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s, i, c, u, l, d;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = a.query(t, ".js-update-bio-error"), o = void 0, e.prev = 2, e.next = 5, n.json();
					case 5:
						o = e.sent, e.next = 14;
						break;
					case 8:
						return e.prev = 8, e.t0 = e.catch(2), s = e.t0.response.json, r.textContent = s.message, r.classList.remove("d-none"), e.abrupt("return");
					case 14:
						if (o) {
							e.next = 16;
							break
						}
						return e.abrupt("return");
					case 16:
						i = o.json.bioHtml, c = a.query(document, ".js-user-profile-bio"), u = a.query(c, ".js-user-profile-bio-contents"), l = a.query(c, ".js-user-profile-bio-toggle"), u.innerHTML = i, l.textContent = i ? "Edit bio" : "Add a bio", u.classList.toggle("d-none", !i), (d = a.query(document, ".js-user-profile-bio-field", HTMLTextAreaElement)).defaultValue = d.value, c.classList.toggle("d-none"), t.classList.toggle("d-none");
					case 27:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[2, 8]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), s.observe(".js-user-profile-sticky-fields.is-stuck", function() {
		var e = a.query(document, ".js-user-profile-sticky-bar");
		return {
			add: function() {
				e.classList.add("is-stuck")
			},
			remove: function() {
				e.classList.remove("is-stuck")
			}
		}
	}), s.observe(".js-user-profile-follow-button.is-stuck", function() {
		var e = a.query(document, ".js-user-profile-sticky-bar");
		return {
			add: function() {
				e.classList.add("is-follow-stuck")
			},
			remove: function() {
				e.classList.remove("is-follow-stuck")
			}
		}
	}), s.observe(".js-user-profile-following-toggle .js-toggler-container.on", function() {
		var e = a.query(document, ".js-user-profile-following-mini-toggle .js-toggler-container");
		return {
			add: function() {
				e.classList.add("on")
			},
			remove: function() {
				e.classList.remove("on")
			}
		}
	}), s.observe(".js-user-profile-following-mini-toggle .js-toggler-container.on", function() {
		var e = a.query(document, ".js-user-profile-following-toggle .js-toggler-container");
		return {
			add: function() {
				e.classList.add("on")
			},
			remove: function() {
				e.classList.remove("on")
			}
		}
	}), s.observe(".js-length-limited-input", {
		add: function(e) {
			e.addEventListener("input", Yc), e.addEventListener("change", Yc)
		},
		remove: function(e) {
			e.removeEventListener("input", Yc), e.removeEventListener("change", Yc)
		}
	}), s.observe("link[rel=prefetch-viewed]", {
		initialize: function() {
			requestIdleCallback(function() {
				fetch(location.href, {
					method: "HEAD",
					credentials: "same-origin",
					headers: {
						Purpose: "prefetch-viewed"
					}
				})
			})
		}
	}), s.observe(".js-manage-requests-tabs-item", function(e) {
		e.addEventListener("click", function() {
			var e = this.closest(".js-manage-memberships-container");
			e.querySelector(".js-manage-invitations-tabs-item").classList.remove("selected"), this.classList.add("selected");
			var t = e.querySelector(".js-manage-invitations-list"),
				n = e.querySelector(".js-manage-requests-list");
			t.classList.add("d-none"), n.classList.remove("d-none")
		})
	}), s.observe(".js-manage-invitations-tabs-item", function(e) {
		e.addEventListener("click", function() {
			var e = this.closest(".js-manage-memberships-container");
			e.querySelector(".js-manage-requests-tabs-item").classList.remove("selected"), this.classList.add("selected");
			var t = e.querySelector(".js-manage-requests-list"),
				n = e.querySelector(".js-manage-invitations-list");
			t.classList.add("d-none"), n.classList.remove("d-none")
		})
	}), i.on("change", ".js-milestone-edit-form", Xc), i.on("click", ".js-milestone-edit-form", Xc);
	var Qc = function() {
			var e = ke(regeneratorRuntime.mark(function e(n) {
				var r, a;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (!L.hasInteractions(n)) {
								e.next = 2;
								break
							}
							return e.abrupt("return");
						case 2:
							return r = n.getAttribute("data-url"), t(r, "null.js:27"), e.next = 6, p.fetchSafeDocumentFragment(document, r);
						case 6:
							a = e.sent, V.preserveInteractivePosition(function() {
								n.replaceWith(a)
							});
						case 8:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}(),
		Zc = new WeakMap;
	i.on("socket:message", ".js-milestone-issues", function() {
		var e = ke(regeneratorRuntime.mark(function e(t) {
			var n, r;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						if (n = t.currentTarget, "1" !== (r = a.query(n, ".js-draggable-issues-container")).getAttribute("data-is-sorting")) {
							e.next = 5;
							break
						}
						return r.removeAttribute("data-is-sorting"), e.abrupt("return");
					case 5:
						return e.next = 7, G();
					case 7:
						Qc(n);
					case 8:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-milestone-sort-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.json();
					case 2:
						r = e.sent, o = r.json, (s = a.query(t, ".js-milestone-reorder-feedback")).textContent = "", o.error ? a.query(t, ".js-milestone-changed").classList.remove("d-none") : (a.query(t, ".js-timestamp", HTMLInputElement).value = o.updated_at, s.textContent = s.getAttribute("data-success-text") || "");
					case 7:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}());
	var eu = u(function(e) {
		var t = e.newIndex,
			n = e.item,
			r = a.closest(n, ".js-draggable-issues-container"),
			o = n.getAttribute("data-id"),
			s = function(e, t) {
				return e.querySelectorAll(".js-draggable-issue")[t]
			}(r, t - 1),
			i = s && s.getAttribute("data-id"),
			c = a.closest(r, ".js-milestone-sort-form");
		a.query(c, ".js-item-id", HTMLInputElement).value = o, a.query(c, ".js-prev-id", HTMLInputElement).value = i || "", P.trackEvent({
			category: "Milestone",
			action: "reorder",
			label: e.trackingLabel || "drag-and-drop"
		}), r.setAttribute("data-is-sorting", "1"), d.submit(c)
	}, 200);

	function tu(e, t) {
		eu({
			item: t,
			newIndex: Array.from(e.querySelectorAll(".js-draggable-issue")).indexOf(t),
			trackingLabel: "keyboard-shortcut"
		}), m.refocus(t.closest(".js-navigation-container"), t)
	}

	function nu(e, t) {
		var n = !0,
			r = !1,
			a = void 0;
		try {
			for (var o, s = document.querySelectorAll(".js-setting-toggle .js-status-indicator")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
				o.value.classList.remove("status-indicator-success", "status-indicator-loading", "status-indicator-failed")
			}
		} catch (e) {
			r = !0, a = e
		} finally {
			try {
				!n && s.return && s.return()
			} finally {
				if (r) throw a
			}
		}
		e.classList.add(t)
	}
	Vc(".js-draggable-issue", eu), i.on("navigation:keydown", ".js-draggable-issue", function(e) {
		t(e instanceof CustomEvent, "null.js:105");
		var n = e.currentTarget,
			r = a.closest(n, ".js-draggable-issues-container");
		if ("J" === e.detail.hotkey) {
			var o = n.nextElementSibling;
			o && (o.after(n), tu(r, n), e.preventDefault(), e.stopPropagation())
		} else if ("K" === e.detail.hotkey) {
			var s = n.previousElementSibling;
			s && (s.before(n), tu(r, n), e.preventDefault(), e.stopPropagation())
		}
	}), s.observe(".js-draggable-issues-container", {
		add: function(e) {
			if (!Zc.has(e)) {
				var t = K.create(e, {
					animation: 150,
					item: ".js-draggable-issue",
					handle: ".js-drag-handle",
					onUpdate: eu,
					chosenClass: "is-dragging"
				});
				Zc.set(e, t)
			}
		},
		remove: function(e) {
			var t = Zc.get(e);
			t && t.destroy()
		}
	}), i.on("submit", ".js-mobile-preference-form", function() {
		this.querySelector(".js-mobile-preference-anchor-field").value = window.location.hash.substr(1)
	}), l.remoteForm(".js-setting-toggle", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return nu(r = a.query(t, ".js-status-indicator"), "status-indicator-loading"), e.prev = 2, e.next = 5, n.text();
					case 5:
						e.next = 10;
						break;
					case 7:
						e.prev = 7, e.t0 = e.catch(2), nu(r, "status-indicator-failed");
					case 10:
						nu(r, "status-indicator-success");
					case 11:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[2, 7]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), i.on("change", ".js-toggle-email-settings input", function() {
		var e = a.query(document, ".js-notification-emails"),
			t = document.querySelector(".js-toggle-email-settings input:checked");
		e.classList.toggle("d-none", !t)
	}), l.remoteForm(".js-unignore-form, .js-ignore-form, .js-unsubscribe-form, .js-subscribe-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return (r = a.closest(t, ".js-subscription-row")).classList.add("loading"), e.prev = 2, e.next = 5, n.text();
					case 5:
						e.next = 13;
						break;
					case 7:
						e.prev = 7, e.t0 = e.catch(2), r.classList.remove("loading"), (o = a.query(t, ".btn-sm")).classList.add("btn-danger"), o.setAttribute("title", r.getAttribute("data-error-message") || "");
					case 13:
						r.classList.remove("loading"), t.classList.contains("js-unignore-form") || t.classList.contains("js-unsubscribe-form") ? r.classList.add("unsubscribed") : (t.classList.contains("js-ignore-form") || t.classList.contains("js-subscribe-form")) && r.classList.remove("unsubscribed");
					case 15:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[2, 7]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-thread-subscribe-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.text();
					case 2:
						r = e.sent, o = a.closest(t, ".js-thread-subscription-status"), r && j.replaceContent(o, r.text);
					case 5:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), s.observe("#js-oauth-authorize-btn", function(e) {
		$n(document).then(function() {
			setTimeout(function() {
				t(e instanceof HTMLButtonElement, "null.js:10"), e.disabled = !1
			}, 1e3)
		})
	});
	var ru, au, ou = (ru = ke(regeneratorRuntime.mark(function e() {
		var t;
		return regeneratorRuntime.wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					return e.next = 2, n.loaded;
				case 2:
					(t = document.querySelector(".js-show-discussion .js-mark-notification-form")) instanceof HTMLFormElement && d.submit(t);
				case 4:
				case "end":
					return e.stop()
			}
		}, e, this)
	})), function() {
		return ru.apply(this, arguments)
	});

	function su(e) {
		var n = e.closest(".js-teams-write-a-post");
		return n ? function(e) {
			var t = a.query(e, ".js-team-discussions-post-compose");
			t.classList.contains("d-none") || (t.classList.add("d-none"), a.query(e, ".js-post-placeholder").classList.remove("d-none"), e.classList.remove("active")), a.query(e, ".js-comment-form-error").classList.add("d-none")
		}(n) : e.closest(".js-teams-reply-to-post") ? function(e) {
			t(e instanceof HTMLFormElement, "null.js:30"), Os(e)
		}(e) : void 0
	}

	function iu(e) {
		var n = fu(e);
		if (n) {
			t(/\[private\]/.test(n.name), "null.js:66");
			var r = n.getAttribute("data-original-value"),
				a = e.querySelector("1" === r ? ".js-discussion-post-select-private" : ".js-discussion-post-select-public");
			a && i.fire(a, "navigation:open")
		}
	}

	function cu(e) {
		var t = e.closest(".js-teams-reply-to-post"),
			n = t && t.querySelector(".js-comment-form-error");
		n && n.classList.add("d-none")
	}

	function uu(e, t) {
		e.textContent = (parseInt(e.textContent) + t).toString()
	}

	function lu(e) {
		e.addEventListener("transitionend", function(t) {
			"opacity" === t.propertyName && e.remove()
		}, {
			once: !0
		}), e.classList.add("fade-out")
	}

	function du(e, n) {
		e.classList.add("d-none"), t(e.parentElement, "null.js:217"), a.query(e.parentElement, n).classList.remove("d-none")
	}

	function mu(e, n) {
		var r = fu(c(e.target.closest(".js-comment-update") || e.target.closest(".js-new-comment-form"), HTMLFormElement));
		t(r, "null.js:251"), t(/\[private\]/.test(r.name), "null.js:252"), r.value = n;
		var o = e.target.closest(".js-discussion-post");
		if (o) {
			var s = a.query(o, ".js-discussion-post-privacy-icon");
			"1" === n ? (o.classList.add("discussion-post-private"), s.classList.remove("d-none")) : (o.classList.remove("discussion-post-private"), s.classList.add("d-none"))
		}
	}

	function fu(e) {
		var n = e.querySelector(".js-discussion-post-privacy-select");
		if (n) {
			var r = n.querySelector("input");
			if (r) return t(r instanceof HTMLInputElement, "null.js:275"), r
		}
	}

	function vu(e) {
		if (!e.currentTarget.classList.contains("disabled")) {
			var t = a.query(e.currentTarget, ".js-team-project-suggestion-form", HTMLFormElement);
			d.submit(t)
		}
	}

	function pu(e) {
		e.classList.contains("read") || (e.classList.toggle("unread"), e.classList.toggle("read"))
	}
	i.on("click", ".js-team-discussions-team-description-toggle", function() {
		a.query(document, ".js-team-discussions-team-description").classList.toggle("d-none"), a.query(document, ".js-team-discussions-team-description-form").classList.toggle("d-none")
	}), i.on("click", ".js-team-discussions-post-toggle", function(e) {
		var t = a.closest(e.target, ".js-teams-write-a-post");
		t.classList.contains("active") || (t.classList.add("active"), a.query(t, ".js-team-discussions-post-compose").classList.remove("d-none"), a.query(t, ".js-post-placeholder").classList.add("d-none"), a.query(t, ".js-title-field").focus())
	}), i.on("click", ".js-hide-post-form", function(e) {
		su(e.target), iu(a.closest(e.target, ".js-new-comment-form", HTMLFormElement))
	}), i.on("click", ".js-hide-inline-comment-form", function(e) {
		cu(e.target)
	}), l.remoteForm(".js-new-comment-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.text();
					case 2:
						su(t), iu(t), cu(t);
					case 5:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-team-discussions-team-description-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.prev = 0, e.next = 3, n.text();
					case 3:
						e.next = 7;
						break;
					case 5:
						e.prev = 5, e.t0 = e.catch(0);
					case 7:
						r = a.query(document, ".js-team-discussions-team-description"), o = a.query(r, ".description"), s = a.query(document, ".js-team-discussions-team-description-field", HTMLTextAreaElement), r.classList.toggle("d-none"), t.classList.toggle("d-none"), s.value.trim() ? (o.textContent = s.value, s.defaultValue = s.value) : (o.textContent = "This team has no description", s.defaultValue = "");
					case 13:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[0, 5]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-comment-pin", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s, i, c, u, l;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return (r = a.query(t, "button[type=submit]")).blur(), e.next = 4, n.text();
					case 4:
						o = a.query(t, 'input[name="team_discussion[pinned]"]', HTMLInputElement), s = document.querySelector("#pinned_posts_counter"), i = r.getAttribute("aria-label") || "", c = r.getAttribute("data-alternate-aria-label") || "", r.setAttribute("data-alternate-aria-label", i), r.setAttribute("aria-label", c), r.classList.toggle("pinned"), u = r.classList.contains("pinned"), s && (uu(s, u ? 1 : -1), l = a.closest(s, ".js-pinned-post-tab"), !u && l.classList.contains("selected") && lu(a.closest(t, ".js-comment-delete-container"))), o.value = u ? "0" : "1";
					case 14:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-comment-delete", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, a, o;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.text();
					case 2:
						r = t.closest(".discussion-post"), (a = r && r.querySelector(".js-comment-pin button[type=submit]")) && a.classList.contains("pinned") && (o = document.querySelector("#pinned_posts_counter")) && uu(o, -1);
					case 5:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), i.on("quote:selection", ".js-discussion-post", function(e) {
		var t = a.query(e.target, ".js-inline-comment-form-container");
		t.classList.add("open"), a.query(t, ".js-write-tab").click(), a.query(t, ".js-comment-field").focus()
	}), l.remoteForm(".js-comment-subscribe", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.text();
					case 2:
						du(t, ".js-comment-unsubscribe");
					case 3:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-comment-unsubscribe", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.text();
					case 2:
						du(t, ".js-comment-subscribe");
					case 3:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-discussion-post-update", (au = ke(regeneratorRuntime.mark(function e(t, n) {
		var r, a, o;
		return regeneratorRuntime.wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					if (r = t.closest(".js-comment")) {
						e.next = 3;
						break
					}
					return e.abrupt("return");
				case 3:
					if (a = r.querySelector(".js-comment-title")) {
						e.next = 6;
						break
					}
					return e.abrupt("return");
				case 6:
					return e.next = 8, n.json();
				case 8:
					o = e.sent, a.textContent = o.json.title;
				case 10:
				case "end":
					return e.stop()
			}
		}, e, this)
	})), function(e, t) {
		return au.apply(this, arguments)
	})), i.on("selectmenu:selected", ".js-discussion-post-select-private", function(e) {
		mu(e, "1")
	}), i.on("selectmenu:selected", ".js-discussion-post-select-public", function(e) {
		mu(e, "0")
	}), ou(), i.on("click", ".js-team-project-suggestion", vu), i.on("navigation:keyopen", ".js-team-project-suggestion", vu), i.on("click", ".js-notification-target", function(e) {
		(t(e instanceof MouseEvent, "null.js:19"), 0 === e.button) && pu(a.closest(e.currentTarget, ".js-notification"))
	}), l.remoteForm(".js-delete-notification", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.html();
					case 2:
						pu(a.closest(t, ".js-notification"));
					case 4:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-mute-notification", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.html();
					case 2:
						pu(r = a.closest(t, ".js-notification")), r.classList.toggle("muted");
					case 5:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-unmute-notification", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.html();
					case 2:
						a.closest(t, ".js-notification").classList.toggle("muted");
					case 4:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-mark-visible-as-read", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s, i, c, u, l, d, m, f;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.html();
					case 2:
						for (r = a.closest(t, ".js-notifications-browser"), o = r.querySelectorAll(".unread"), s = !0, i = !1, c = void 0, e.prev = 7, u = o[Symbol.iterator](); !(s = (l = u.next()).done); s = !0)(d = l.value).classList.remove("unread"), d.classList.add("read");
						e.next = 15;
						break;
					case 11:
						e.prev = 11, e.t0 = e.catch(7), i = !0, c = e.t0;
					case 15:
						e.prev = 15, e.prev = 16, !s && u.return && u.return();
					case 18:
						if (e.prev = 18, !i) {
							e.next = 21;
							break
						}
						throw c;
					case 21:
						return e.finish(18);
					case 22:
						return e.finish(15);
					case 23:
						(m = r.querySelector(".js-mark-visible-as-read")) && m.classList.add("mark-all-as-read-confirmed"), (f = r.querySelector(".js-mark-as-read-confirmation")) && f.classList.add("mark-all-as-read-confirmed");
					case 27:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[7, 11, 15, 23],
				[16, , 18, 22]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-mark-remaining-as-read", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.html();
					case 2:
						r = a.closest(t, ".js-notifications-browser"), (o = r.querySelector(".js-mark-remaining-as-read")) && o.classList.add("d-none"), (s = r.querySelector(".js-mark-remaining-as-read-confirmation")) && s.classList.remove("d-none");
					case 7:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), i.on("navigation:keydown", ".js-notification", function(e) {
		t(e instanceof CustomEvent, "null.js:85");
		var n = e.currentTarget;
		switch (e.detail.hotkey) {
			case "I":
			case "e":
			case "y":
				d.submit(n.querySelector(".js-delete-notification")), e.preventDefault(), e.stopPropagation();
				break;
			case "M":
			case "m":
				d.submit(n.querySelector(".js-mute-notification")), e.preventDefault(), e.stopPropagation()
		}
	}), i.on("navigation:keyopen", ".js-notification", function(e) {
		pu(e.currentTarget)
	}), l.remoteForm(".js-notifications-subscription", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return (r = a.query(t, ".js-spinner")).classList.remove("d-none"), e.prev = 2, e.next = 5, n.html();
					case 5:
						e.next = 9;
						break;
					case 7:
						e.prev = 7, e.t0 = e.catch(2);
					case 9:
						r.classList.add("d-none");
					case 10:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[2, 7]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), i.on("change", ".js-pulse-period", function(e) {
		var n = e.target.getAttribute("data-url");
		t(n, "null.js:9");
		var r = document.getElementById("js-repo-pjax-container");
		t(r, "null.js:11"), ne({
			url: n,
			container: r
		})
	}), document.addEventListener("pjax:end", function() {
		setTimeout(function() {
			var e = a.query(document, 'meta[name="selected-link"]', HTMLMetaElement).getAttribute("value");
			if (null != e) {
				var t = !0,
					n = !1,
					r = void 0;
				try {
					for (var o, s = a.querySelectorAll(document, ".js-sidenav-container-pjax .js-selected-navigation-item")[Symbol.iterator](); !(t = (o = s.next()).done); t = !0) {
						var i = o.value,
							c = (i.getAttribute("data-selected-links") || "").split(" ").some(function(t) {
								return t === e
							});
						i.classList.toggle("selected", c)
					}
				} catch (e) {
					n = !0, r = e
				} finally {
					try {
						!t && s.return && s.return()
					} finally {
						if (n) throw r
					}
				}
			}
		})
	}), o.onFocus(".js-email-notice-trigger", function(e) {
		var t = a.querySelectorAll(document, ".js-email-notice"),
			n = !0,
			r = !1,
			o = void 0;
		try {
			for (var s, i = t[Symbol.iterator](); !(n = (s = i.next()).done); n = !0) {
				s.value.classList.add("notice-highlight")
			}
		} catch (e) {
			r = !0, o = e
		} finally {
			try {
				!n && i.return && i.return()
			} finally {
				if (r) throw o
			}
		}
		e.addEventListener("blur", function() {
			var e = !0,
				n = !1,
				r = void 0;
			try {
				for (var a, o = t[Symbol.iterator](); !(e = (a = o.next()).done); e = !0) {
					a.value.classList.remove("notice-highlight")
				}
			} catch (e) {
				n = !0, r = e
			} finally {
				try {
					!e && o.return && o.return()
				} finally {
					if (n) throw r
				}
			}
		})
	}), s.observe(".js-plan-choice:checked", {
		add: function(e) {
			var t = e.closest(".plan-row");
			t && t.classList.add("selected")
		},
		remove: function(e) {
			var t = e.closest(".plan-row");
			t && t.classList.remove("selected")
		}
	}), s.observe(".js-setup-organization:checked", {
		add: function() {
			var e = a.query(document, ".js-choose-plan-submit");
			e.getAttribute("data-default-text") || e.setAttribute("data-default-text", e.textContent), e.textContent = e.getAttribute("data-org-text") || ""
		},
		remove: function() {
			var e = a.query(document, ".js-choose-plan-submit");
			e.textContent = e.getAttribute("data-default-text") || ""
		}
	});
	var hu = new WeakMap;
	s.observe(".js-signup-form", function(e) {
		e.addEventListener("input", function(t) {
			if (t.target.closest("input[type=text]") && !hu.get(e)) {
				var n = e.querySelector(".js-signup-source");
				P.trackEvent({
					category: "Signup",
					action: "Attempt",
					label: n.value
				}), hu.set(e, !0)
			}
		})
	}), s.observe(".js-octocaptcha-parent", function(e) {
		var t = a.query(e, ".js-octocaptcha-spinner"),
			n = a.query(e, ".js-octocaptcha-success"),
			r = a.query(e, ".js-octocaptcha-token", HTMLInputElement),
			o = a.query(e, "#signup_button"),
			s = a.query(e, ".js-octocaptcha-frame-container"),
			i = a.query(e, ".js-octocaptcha-frame"),
			c = r.getAttribute("data-octocaptcha-url"),
			u = !1,
			l = function() {
				u || (u = !0, t.classList.add("d-none"), n.classList.remove("d-none"), o.disabled = !1)
			};
		setTimeout(l, 2e4), i.addEventListener("error", l), window.addEventListener("message", function(e) {
			if (e.origin === c) {
				var n = e.data && e.data.event;
				"captcha-loaded" === n ? u || (u = !0, t.classList.add("d-none"), s.classList.remove("v-hidden", "position-absolute")) : "captcha-complete" === n && (r.value = e.data.sessionToken, o.disabled = !1)
			}
		})
	}), i.on("socket:message", ".js-notification-indicator", function(e) {
		t(e instanceof CustomEvent, "null.js:9");
		var n = e.currentTarget,
			r = e.detail.data;
		n.setAttribute("aria-label", r.aria_label), n.setAttribute("data-ga-click", r.ga_click), n.querySelector("span").setAttribute("class", r.span_class)
	});
	var gu = null;
	i.on("pjax:click", ".js-pjax-capture-input", function() {
		gu = function(e) {
			var n = e.createElement("textarea");
			return n.style.position = "fixed", n.style.top = "0", n.style.left = "0", n.style.opacity = "0", t(e.body, "null.js:18"), e.body.appendChild(n), n.focus(),
				function() {
					return n.blur(), n.remove(), n.value
				}
		}(document)
	}), i.on("pjax:end", "#js-repo-pjax-container", function() {
		if (gu) {
			var e = gu(),
				t = document.querySelector(".js-pjax-restore-captured-input");
			t instanceof HTMLInputElement && e && d.changeValue(t, e), gu = null
		}
	}), i.on("pjax:click", ".js-pjax-history-navigate", function(e) {
		t(e instanceof CustomEvent, "null.js:15"), this.href === h.getBackURL() ? (history.back(), e.detail.relatedEvent.preventDefault(), e.preventDefault()) : this.href === h.getForwardURL() && (history.forward(), e.detail.relatedEvent.preventDefault(), e.preventDefault())
	}), s.observe("link[rel=pjax-prefetch]", {
		initialize: function(e) {
			var t = _.fetch(e, {
				headers: {
					Purpose: "prefetch"
				}
			});
			Y.setPrefetchResponse(e, t)
		}
	});
	var yu = document.querySelector("meta[name=js-proxy-site-detection-payload]"),
		bu = document.querySelector("meta[name=expected-hostname]");
	if (yu instanceof HTMLMetaElement && bu instanceof HTMLMetaElement && g(document)) {
		var ju = {
				url: window.location.href,
				expectedHostname: bu.content,
				documentHostname: document.location.hostname,
				proxyPayload: yu.content
			},
			Lu = new Error,
			wu = {};
		wu.$__ = btoa(JSON.stringify(ju)), r.reportError(Lu, wu)
	}
	i.on("selectmenu:select", ".js-pull-base-branch-item", function(e) {
		var t = a.closest(e.currentTarget, ".js-select-menu");
		w.deactivate(t), e.preventDefault(), a.query(t, ".js-pull-change-base-branch-field", HTMLInputElement).value = e.currentTarget.getAttribute("data-branch") || "";
		var n = a.query(t, ".js-change-base-facebox");
		te(n.innerHTML)
	});
	var xu = function() {
		var e = ke(regeneratorRuntime.mark(function e(n) {
			var r, a;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						if (a = function(e) {
								t(e.target instanceof HTMLElement, "null.js:61"), ku(n, r, e.target)
							}, r = n.querySelector(".js-navigation-item.navigation-focus")) {
							e.next = 4;
							break
						}
						return e.abrupt("return");
					case 4:
						return ku(n, r, r), n.addEventListener("navigation:focus", a), e.next = 8, new Promise(function(e) {
							return window.addEventListener("keyup", e, {
								once: !0
							})
						});
					case 8:
						n.removeEventListener("navigation:focus", a), Eu(n);
					case 10:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}();

	function ku(e, t, n) {
		var r = Array.from(e.querySelectorAll(".js-navigation-item")),
			a = r.indexOf(t),
			o = r.indexOf(n);
		if (-1 === a) throw new Error("Couldn't find startIndex in container");
		if (-1 === o) throw new Error("Couldn't find endItem in container");
		if (Eu(e), r[o].classList.add("is-last-in-range"), a > o) {
			var s = [o, a];
			a = s[0], o = s[1]
		}
		var i = !0,
			c = !1,
			u = void 0;
		try {
			for (var l, d = r[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
				l.value.classList.add("js-navigation-open")
			}
		} catch (e) {
			c = !0, u = e
		} finally {
			try {
				!i && d.return && d.return()
			} finally {
				if (c) throw u
			}
		}
		var m = !0,
			f = !1,
			v = void 0;
		try {
			for (var p, h = r.slice(a, o + 1)[Symbol.iterator](); !(m = (p = h.next()).done); m = !0) {
				var g = p.value;
				g.classList.add("is-range-selected"), g.classList.remove("js-navigation-open")
			}
		} catch (e) {
			f = !0, v = e
		} finally {
			try {
				!m && h.return && h.return()
			} finally {
				if (f) throw v
			}
		}
	}

	function Eu(e) {
		var t = !0,
			n = !1,
			r = void 0;
		try {
			for (var a, o = e.querySelectorAll(".js-navigation-item")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
				a.value.classList.remove("is-range-selected", "is-last-in-range")
			}
		} catch (e) {
			n = !0, r = e
		} finally {
			try {
				!t && o.return && o.return()
			} finally {
				if (n) throw r
			}
		}
	}
	i.on("navigation:open", ".js-diffbar-commits-list .js-navigation-item", function(e) {
		if (t(e instanceof CustomEvent, "null.js:83"), e.detail.shiftKey) {
			e.preventDefault();
			var n = e.currentTarget.closest(".js-diffbar-commits-menu");
			if (e.currentTarget.classList.contains("is-range-selected")) {
				e.stopPropagation();
				var r = n.querySelectorAll(".js-navigation-item.is-range-selected"),
					a = r[0],
					o = r[r.length - 1],
					s = n.getAttribute("data-range-url"),
					i = a.getAttribute("data-parent-commit"),
					c = o.getAttribute("data-commit"),
					u = i && c ? i + ".." + c : c,
					l = s.replace("$range", u),
					d = document.getElementById("js-repo-pjax-container");
				t(d, "null.js:105"), ne({
					url: l,
					container: d
				})
			} else e.stopImmediatePropagation(), xu(n)
		}
	}), i.on("click", ".js-compare-tab", function(e) {
		var n = !0,
			r = !1,
			o = void 0;
		try {
			for (var s, i = document.querySelectorAll(".js-compare-tab.selected")[Symbol.iterator](); !(n = (s = i.next()).done); n = !0) {
				s.value.classList.remove("selected")
			}
		} catch (e) {
			r = !0, o = e
		} finally {
			try {
				!n && i.return && i.return()
			} finally {
				if (r) throw o
			}
		}
		e.currentTarget.classList.add("selected");
		var c = !0,
			u = !1,
			l = void 0;
		try {
			for (var d, m = document.querySelectorAll("#commits_bucket, #files_bucket, #commit_comments_bucket")[Symbol.iterator](); !(c = (d = m.next()).done); c = !0) {
				d.value.classList.add("d-none")
			}
		} catch (e) {
			u = !0, l = e
		} finally {
			try {
				!c && m.return && m.return()
			} finally {
				if (u) throw l
			}
		}
		t(e.currentTarget instanceof HTMLAnchorElement, "null.js:21");
		var f = e.currentTarget.hash;
		a.query(document, f).classList.remove("d-none"), e.preventDefault()
	}), F(function(e) {
		var t = e.target;
		if (t instanceof HTMLElement) {
			var n = t.closest("#commits_bucket, #files_bucket, #commit_comments_bucket");
			n && n instanceof HTMLElement && !q(n) && a.query(document, '.js-compare-tab[href="#' + n.id + '"]').click()
		}
	}), i.on("click", ".js-toggle-range-editor-cross-repo", function() {
		a.query(document, ".js-range-editor").classList.toggle("is-cross-repo")
	}), i.on("pjax:click", ".js-range-editor", function(e) {
		var n = document.querySelector(".js-compare-pr");
		if (n && n.classList.contains("open")) {
			t(e instanceof CustomEvent, "null.js:52");
			var r = e.detail.options,
				a = new URL(r.url);
			a.search.match(/expand=1/) || (a.search += (a.search ? "&" : "") + "expand=1", r.url = a.toString())
		}
	}), i.on("navigation:open", ".js-commitish-form", function(e) {
		var n = e.currentTarget;
		t(n instanceof HTMLFormElement, "null.js:64");
		var r = document.createElement("input");
		r.type = "hidden", r.name = "new_compare_ref";
		var a = n.querySelector(".js-new-item-name");
		t(a, "null.js:69"), r.value = a.textContent, n.appendChild(r), d.submit(n)
	}), s.observe(".js-compare-pr.open", {
		add: function() {
			var e = document.body;
			t(e, "null.js:79"), e.classList.add("is-pr-composer-expanded")
		},
		remove: function() {
			var e = document.body;
			t(e, "null.js:84"), e.classList.remove("is-pr-composer-expanded")
		}
	});
	var Tu = void 0;

	function Su(e) {
		var t = document.querySelector("head .js-site-favicon");
		t instanceof HTMLLinkElement && (null == Tu && (Tu = t.href), t.href = e)
	}

	function qu() {
		var e = document.querySelector(".js-reviews-container");
		e && setTimeout(function() {
			return function(e) {
				var t = a.closest(e, ".js-review-state-classes"),
					n = t.querySelectorAll(".js-pending-review-comment").length;
				t.classList.toggle("is-review-pending", n > 0);
				var r = !0,
					o = !1,
					s = void 0;
				try {
					for (var i, c = document.querySelectorAll(".js-pending-review-comment-count")[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) i.value.textContent = String(n)
				} catch (e) {
					o = !0, s = e
				} finally {
					try {
						!r && c.return && c.return()
					} finally {
						if (o) throw s
					}
				}
				var u = !0,
					l = !1,
					d = void 0;
				try {
					for (var m, f = document.querySelectorAll(".js-pending-comment-count-type")[Symbol.iterator](); !(u = (m = f.next()).done); u = !0) {
						var v = m.value;
						D.pluralizeNode(n, v)
					}
				} catch (e) {
					l = !0, d = e
				} finally {
					try {
						!u && f.return && f.return()
					} finally {
						if (l) throw d
					}
				}
				if (n > 0) {
					var p = a.query(e, ".js-menu-target");
					p.classList.add("anim-pulse-in"), p.addEventListener("animationend", function() {
						return p.classList.remove("anim-pulse-in")
					}, {
						once: !0
					})
				}
			}(e)
		})
	}

	function Au(e) {
		var n = e.target;
		t(n instanceof HTMLElement, "null.js:29");
		var r = n.getAttribute("data-reaction-label");
		t(r, "null.js:32");
		var o = a.closest(n, ".js-add-reaction-popover");
		a.query(o, ".js-reaction-description").textContent = r
	}

	function Mu(e) {
		t(e.target instanceof HTMLElement, "null.js:40");
		var n = a.closest(e.target, ".js-add-reaction-popover");
		a.query(n, ".js-reaction-description").textContent = "Pick your reaction"
	}
	s.observe("[data-favicon-override]", {
		add: function(e) {
			var n = e.getAttribute("data-favicon-override");
			t("string" == typeof n, "null.js:27"), setTimeout(function() {
				return Su(n)
			})
		},
		remove: function() {
			null != Tu && Su(Tu)
		}
	}), F(function() {
		if ("submit-review" === window.location.hash.slice(1)) {
			var e = document.querySelector(".js-reviews-container");
			w.activate(e)
		}
	}), l.remoteForm(".js-inline-comment-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.text();
					case 2:
						qu();
					case 3:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-pending-review-comment .js-comment-delete", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.text();
					case 2:
						qu();
					case 3:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), l.remoteForm(".js-pick-reaction", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o, s, i, c, u;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.json();
					case 2:
						r = e.sent, w.deactivate(t.closest(".js-menu-container")), o = a.closest(t, ".js-comment"), s = a.query(o, ".js-reactions-container"), i = a.query(o, ".js-comment-header-reaction-button"), c = C.parseHTML(document, r.json.reactions_container.trim()), u = C.parseHTML(document, r.json.comment_header_reaction_button.trim()), s.replaceWith(c), i.replaceWith(u), o.classList.remove("is-reacting");
					case 12:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), i.on("toggle", ".js-reaction-popover-container", function(e) {
		var t = e.currentTarget.hasAttribute("open"),
			n = !0,
			r = !1,
			o = void 0;
		try {
			for (var s, i = e.target.querySelectorAll(".js-reaction-option-item")[Symbol.iterator](); !(n = (s = i.next()).done); n = !0) {
				var c = s.value;
				t ? (c.addEventListener("mouseenter", Au), c.addEventListener("mouseleave", Mu)) : (c.removeEventListener("mouseenter", Au), c.removeEventListener("mouseleave", Mu))
			}
		} catch (e) {
			r = !0, o = e
		} finally {
			try {
				!n && i.return && i.return()
			} finally {
				if (r) throw o
			}
		}
		a.closest(e.target, ".js-comment").classList.toggle("is-reacting", t)
	}, {
		capture: !0
	});
	var Hu = function() {
			var e = ke(regeneratorRuntime.mark(function e(t) {
				var n, r, o;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (t.value) {
								e.next = 2;
								break
							}
							return e.abrupt("return");
						case 2:
							if (t.value !== Pu.get(t)) {
								e.next = 4;
								break
							}
							return e.abrupt("return");
						case 4:
							return Fu("is-loading"), Pu.set(t, t.value), n = new URL(t.getAttribute("data-url"), window.location.origin), (r = new URLSearchParams(n.search.slice(1))).append("tag_name", t.value), n.search = r.toString(), e.prev = 10, e.next = 13, p.fetchJSON(n);
						case 13:
							"duplicate" === (o = e.sent).status && parseInt(t.getAttribute("data-existing-id")) === parseInt(o.release_id) ? Fu("is-valid") : (a.query(document, ".js-release-tag .js-edit-release-link").setAttribute("href", o.url), Fu("is-" + o.status)), e.next = 20;
							break;
						case 17:
							e.prev = 17, e.t0 = e.catch(10), Fu("is-invalid");
						case 20:
						case "end":
							return e.stop()
					}
				}, e, this, [
					[10, 17]
				])
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}(),
		Cu = function() {
			var e = ke(regeneratorRuntime.mark(function e(t) {
				var n, r;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return n = c(t.form, HTMLFormElement), a.query(n, "#release_draft", HTMLInputElement).value = "1", _u(t, "is-saving"), e.prev = 4, e.next = 7, p.fetchJSON(n.action, {
								method: n.method,
								body: new FormData(n)
							});
						case 7:
							return r = e.sent, _u(t, "is-saved"), setTimeout(_u, 5e3, t, "is-default"), i.fire(n, "release:saved", {
								release: r
							}), e.abrupt("return", r);
						case 14:
							throw e.prev = 14, e.t0 = e.catch(4), _u(t, "is-failed"), e.t0;
						case 18:
						case "end":
							return e.stop()
					}
				}, e, this, [
					[4, 14]
				])
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}();
	i.on("click", ".js-save-draft", function(e) {
		var t = c(e.currentTarget, HTMLButtonElement);
		Cu(t), e.preventDefault()
	}), i.on("click", ".js-timeline-tags-expander", function(e) {
		var t = c(e.currentTarget, HTMLElement);
		a.closest(t, ".js-timeline-tags").classList.remove("is-collapsed")
	});
	var Iu = ["is-default", "is-saving", "is-saved", "is-failed"];

	function _u(e, t) {
		var n;
		(n = e.classList).remove.apply(n, Iu), e.classList.add(t), e.disabled = "is-saving" === t
	}
	i.on("release:saved", ".js-release-form", function(e) {
		t(e instanceof CustomEvent, "null.js:59");
		var n = e.detail.release,
			r = e.currentTarget,
			o = r.getAttribute("data-repo-url"),
			s = n.update_url || Ou("tag", o, n.tag_name);
		(r.setAttribute("action", s), n.update_authenticity_token) && (r.querySelector("input[name=authenticity_token]").value = n.update_authenticity_token);
		var i = n.edit_url || Ou("edit", o, n.tag_name);
		h.replaceState(_.getState(), document.title, i);
		var c = document.querySelector("#delete_release_confirm form");
		if (c) {
			var u = n.delete_url || Ou("tag", o, n.tag_name);
			if (c.setAttribute("action", u), n.delete_authenticity_token) a.query(c, "input[name=authenticity_token]", HTMLInputElement).value = n.delete_authenticity_token
		}
		var l = r.querySelector("#release_id");
		if (!l.value) {
			l.value = n.id;
			var d = document.createElement("input");
			d.type = "hidden", d.name = "_method", d.value = "put", r.appendChild(d)
		}
	}), i.on("click", ".js-publish-release", function() {
		a.query(document, "#release_draft", HTMLInputElement).value = "0"
	});
	var Ru = ["is-loading", "is-empty", "is-valid", "is-invalid", "is-duplicate", "is-pending"];

	function Fu(e) {
		var t, n = document.querySelector(".release-target-wrapper"),
			r = document.querySelector(".js-release-tag");
		if (null != n && null != r) {
			switch (e) {
				case "is-valid":
					n.classList.add("d-none");
					break;
				case "is-loading":
					break;
				default:
					n.classList.remove("d-none")
			}(t = r.classList).remove.apply(t, Ru), r.classList.add(e)
		}
	}
	var Pu = new WeakMap;

	function Ou(e, t, n) {
		return t + "/releases/" + e + "/" + n
	}

	function Nu(e) {
		var t = a.closest(e, "form", HTMLFormElement).querySelector(".js-previewable-comment-form");
		if (t) {
			var n = t.getAttribute("data-base-preview-url");
			n || (n = String(t.getAttribute("data-preview-url")), t.setAttribute("data-base-preview-url", n));
			var r = a.querySelectorAll(e, 'input[name="release[tag_name]"], input[name="release[target_commitish]"]:checked', HTMLInputElement),
				o = new URL(n, window.location.origin),
				s = new URLSearchParams(o.search.slice(1)),
				i = !0,
				c = !1,
				u = void 0;
			try {
				for (var l, d = r[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
					var m = l.value;
					m.value && s.append(m.name, m.value)
				}
			} catch (e) {
				c = !0, u = e
			} finally {
				try {
					!i && d.return && d.return()
				} finally {
					if (c) throw u
				}
			}
			o.search = s.toString(), t.setAttribute("data-preview-url", o.toString())
		}
	}
	s.observe(".js-release-tag-field", function(e) {
		Hu(e), e.addEventListener("blur", function() {
			Hu(e)
		})
	}), i.on("change", ".js-release-tag", function(e) {
		Nu(e.currentTarget)
	}), s.observe(".js-release-form .js-previewable-comment-form", function(e) {
		Nu(e.closest("form").querySelector(".js-release-tag"))
	});
	var Du = new WeakMap,
		Bu = 100;

	function Uu(e) {
		var t = Du.get(e) || 0;
		if (!(t > Bu)) {
			var n = e.querySelector(".js-more-repos-form");
			n && (Du.set(e, t + 1), d.submit(c(n, HTMLFormElement)))
		}
	}

	function zu(e, t, n) {
		var r = new URL(e, window.location.origin),
			a = new URLSearchParams(r.search.slice(1));
		return t.length < 1 ? a.delete(n) : a.set(n, t), r.search = a.toString(), r.toString()
	}

	function Wu(e) {
		var t = e.querySelector(".js-your-repositories-search");
		return !!t && (document.activeElement === t || c(t, HTMLInputElement).defaultValue.trim().length > 0)
	}

	function Vu(e) {
		var t = e.querySelector(".js-your-repositories-search");
		t && i.fire(t, "filterable:change")
	}
	o.onFocus(".js-your-repositories-search", function(e) {
		Uu(a.closest(e, ".js-repos-container"))
	}), s.observe(".js-your-repositories-search", function(e) {
		e.defaultValue.trim().length > 0 && Vu(e.closest(".js-repos-container"))
	}), o.onInput(".js-your-repositories-search", function(e) {
		var n = c(e.target, HTMLInputElement);
		! function(e) {
			var n = a.closest(e, ".js-repos-container"),
				r = e.getAttribute("data-query-name");
			t("string" == typeof r, "null.js:86");
			var o = !0,
				s = !1,
				i = void 0;
			try {
				for (var c, u = a.querySelectorAll(n, ".js-repo-filter-link", HTMLAnchorElement)[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
					var l = c.value;
					l.href = zu(l.href, e.value.trim(), r)
				}
			} catch (e) {
				s = !0, i = e
			} finally {
				try {
					!o && u.return && u.return()
				} finally {
					if (s) throw i
				}
			}
		}(n),
		function(e) {
			var n = e.getAttribute("data-url"),
				r = e.getAttribute("data-query-name");
			t("string" == typeof n && "string" == typeof r, "null.js:78"), h.replaceState(null, "", zu(n, e.value.trim(), r))
		}(n)
	}), E(document).on("ajaxSend", ".js-more-repos-form", function(e) {
		a.query(e.target, ".js-more-repos-link", HTMLButtonElement).classList.add("is-loading")
	}), E(document).on("ajaxSuccess", ".js-more-repos-form", function(e) {
		var t = e.target.querySelector(".js-more-repos-link");
		t && t.classList.remove("is-loading");
		var n = a.closest(e.target, ".js-repos-container");
		Wu(n) && Uu(n)
	}), s.observe(".js-more-repos-form", function(e) {
		var t = a.closest(e, ".js-repos-container");
		Wu(t) && Uu(t), e.addEventListener("page:loaded", function() {
			Vu(t)
		})
	}), i.on("pjax:end", ".js-repos-container", function(e) {
		var t = c(e.target, HTMLElement);
		! function(e) {
			Du.set(e, 0)
		}(t), Vu(t)
	});
	var $u = function() {
		var e = ke(regeneratorRuntime.mark(function e(t) {
			var n, r, o, s, i, u, l, d, f, v, h;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						if (n = t.getAttribute("data-contents-url"), r = ae("SEARCH_SUGGESTIONS"), n) {
							e.next = 4;
							break
						}
						return e.abrupt("return");
					case 4:
						return o = a.query(document, ".js-search-suggester"), s = t.value.slice(0, t.selectionEnd).match(/\S*$/), i = s ? s[0] : "", u = new URL(n, window.location.origin), (l = new URLSearchParams).append("query", i), u.search = l.toString(), e.next = 13, p.fetchText(u.toString());
					case 13:
						if ("" !== (d = e.sent).trim()) {
							e.next = 17;
							break
						}
						return Ku(), e.abrupt("return");
					case 17:
						o.innerHTML = d, r && o.classList.remove("d-none"), m.activate(o.querySelector(".js-navigation-container")), f = a.query(o, ".js-search-suggester-helper"), v = t.value.match(/(^|\s)[^\s:]+$/), h = c(f.parentElement, HTMLElement), v && (f.textContent = t.value), h.classList.toggle("d-none", r && !v);
					case 25:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}();

	function Ju(e) {
		var t = e.value.slice(0, e.selectionEnd),
			n = e.value.slice(e.selectionEnd),
			r = 0 === e.value.trim().length,
			a = t.match(/(^|\s+)[^\s:]+$/) && n.match(/^(\s|$)/);
		return r || a
	}

	function Ku() {
		a.query(document, ".js-search-suggester").classList.add("d-none")
	}

	function Gu(e) {
		var t = e.target,
			n = a.closest(t, ".js-navigation-item"),
			r = a.query(document, ".js-search-suggester-field", HTMLInputElement),
			o = a.query(document, ".js-search-suggester"),
			s = n.getAttribute("data-value") || "",
			i = r.value.slice(0, r.selectionEnd).replace(/\S+$/, ""),
			c = r.value.slice(r.selectionEnd);
		o.classList.contains("d-none") ? d.submit(a.query(document, "#search_form", HTMLFormElement)) : (e.preventDefault(), r.value = i + s + c, Ju(r) ? $u(r) : Ku())
	}

	function Yu() {
		var e = this.querySelector(".js-filterable-field");
		e && e.focus()
	}

	function Xu(e) {
		var t = a.closest(e.currentTarget, ".js-select-menu").querySelector(".js-navigation-container");
		t && m.refocus(t, e.currentTarget)
	}

	function Qu() {
		var e = this.querySelectorAll(".js-select-menu-tab"),
			t = e[0],
			n = !0,
			r = !1,
			a = void 0;
		try {
			for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
				var i = o.value;
				if (i.classList.contains("selected")) {
					t = i;
					break
				}
			}
		} catch (e) {
			r = !0, a = e
		} finally {
			try {
				!n && s.return && s.return()
			} finally {
				if (r) throw a
			}
		}
		t && Zu(t)
	}

	function Zu(e) {
		var t = !0,
			n = !1,
			r = void 0;
		try {
			for (var a, o = e.closest(".js-select-menu").querySelectorAll(".js-select-menu-tab")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
				var s = a.value;
				s !== e && (s.classList.remove("selected"), s.setAttribute("aria-current", !1))
			}
		} catch (e) {
			n = !0, r = e
		} finally {
			try {
				!t && o.return && o.return()
			} finally {
				if (n) throw r
			}
		}
		e.classList.add("selected"), e.setAttribute("aria-current", !0)
	}

	function el(e, t) {
		var n = e.getAttribute("data-tab-filter"),
			r = e.closest(".js-select-menu").querySelectorAll(".js-select-menu-tab-bucket"),
			a = !0,
			o = !1,
			s = void 0;
		try {
			for (var c, u = r[Symbol.iterator](); !(a = (c = u.next()).done); a = !0) {
				var l = c.value;
				l.getAttribute("data-tab-filter") === n && (l.classList.toggle("selected", t), t && i.fire(l, "selectmenu:tabchange"))
			}
		} catch (e) {
			o = !0, s = e
		} finally {
			try {
				!a && u.return && u.return()
			} finally {
				if (o) throw s
			}
		}
	}
	s.observe(".js-search-suggester-field", function(e) {
		$u(e), f.addThrottledInputEventListener(e, function() {
			Ju(e) ? $u(e) : Ku()
		})
	}), i.on("focusin", ".js-search-suggester-field", function(e) {
		var t = c(e.currentTarget, HTMLInputElement);
		Ju(t) ? $u(t) : Ku()
	}), i.on("focusout", ".js-search-suggester-field", function() {
		Ku()
	}), i.on("mousedown", ".js-search-suggester", Gu), i.on("navigation:keydown", ".js-search-suggester", function(e) {
		t(e instanceof CustomEvent, "null.js:101");
		var n = e.currentTarget.querySelector(".js-search-suggester .js-navigation-item.navigation-focus");
		switch (e.detail.hotkey) {
			case "Enter":
				n ? Gu(e) : d.submit(a.query(document, "#search_form", HTMLFormElement));
				break;
			case "Tab":
				n && Gu(e);
				break;
			case "ArrowLeft":
			case "ArrowRight":
			case "Escape":
				Ku()
		}
	}), E(document).on("ajaxSuccess", ".js-select-menu:not([data-multiple])", function(e) {
		w.deactivate(e.currentTarget)
	}), E(document).on("ajaxSend", ".js-select-menu:not([data-multiple])", function(e) {
		e.currentTarget.classList.add("is-loading")
	}), E(document).on("ajaxComplete", ".js-select-menu", function(e) {
		e.currentTarget.classList.remove("is-loading")
	}), E(document).on("ajaxError", ".js-select-menu", function(e) {
		e.currentTarget.classList.add("has-error")
	}), i.on("menu:deactivate", ".js-select-menu", function(e) {
		e.currentTarget.classList.remove("is-loading", "has-error")
	}), i.on("navigation:open", ".js-select-menu:not([data-multiple]) .js-navigation-item", function(e) {
		var t = e.currentTarget;
		if (i.fire(t, "selectmenu:select")) {
			var n = a.closest(t, ".js-select-menu"),
				r = n.querySelector(".js-navigation-item.selected");
			r && r.classList.remove("selected"), t.classList.add("selected"), t.classList.remove("indeterminate");
			var o = !0,
				s = !1,
				c = void 0;
			try {
				for (var u, l = a.querySelectorAll(t, "input[type=radio], input[type=checkbox]", HTMLInputElement)[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
					var m = u.value;
					d.changeValue(m, !0)
				}
			} catch (e) {
				s = !0, c = e
			} finally {
				try {
					!o && l.return && l.return()
				} finally {
					if (s) throw c
				}
			}
			i.fire(t, "selectmenu:selected"), n.classList.contains("is-loading") || w.deactivate(n)
		}
	}), i.on("navigation:open", ".js-select-menu[data-multiple] .js-navigation-item", function(e) {
		var t = e.currentTarget;
		if (i.fire(t, "selectmenu:select")) {
			var n = t.classList.contains("selected");
			t.classList.toggle("selected"), t.classList.remove("indeterminate");
			var r = !0,
				o = !1,
				s = void 0;
			try {
				for (var c, u = a.querySelectorAll(t, "input[type=radio], input[type=checkbox]", HTMLInputElement)[Symbol.iterator](); !(r = (c = u.next()).done); r = !0) {
					var l = c.value;
					d.changeValue(l, !n)
				}
			} catch (e) {
				o = !0, s = e
			} finally {
				try {
					!r && u.return && u.return()
				} finally {
					if (o) throw s
				}
			}
			i.fire(t, "selectmenu:selected")
		}
	}), i.on("selectmenu:select", ".js-select-menu .js-navigation-item.disabled", function(e) {
		e.preventDefault()
	}), i.on("selectmenu:selected", ".js-select-menu .js-navigation-item", function(e) {
		var t = e.currentTarget,
			n = a.closest(t, ".js-select-menu"),
			r = t.querySelector(".js-select-button-text");
		if (r) {
			var o = n.querySelector(".js-select-button");
			o && (o.innerHTML = r.innerHTML)
		}
		var s = t.querySelector(".js-select-menu-item-gravatar");
		if (s) {
			var i = n.querySelector(".js-select-button-gravatar");
			i && (i.innerHTML = s.innerHTML)
		}
	}), i.on("selectmenu:change", ".js-select-menu .select-menu-list", function(e) {
		var t = e.currentTarget,
			n = Array.from(t.querySelectorAll(".js-navigation-item")),
			r = !0,
			a = !1,
			o = void 0;
		try {
			for (var s, i = n[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
				s.value.classList.remove("last-visible")
			}
		} catch (e) {
			a = !0, o = e
		} finally {
			try {
				!r && i.return && i.return()
			} finally {
				if (a) throw o
			}
		}
		var c = n.filter(q).pop();
		if (c && c.classList.add("last-visible"), !t.hasAttribute("data-filterable-for")) {
			var u = e.target.classList.contains("filterable-empty");
			t.classList.toggle("filterable-empty", u)
		}
	}), i.on("menu:activated", ".js-select-menu", Yu), i.on("selectmenu:load", ".js-select-menu", Yu), i.on("menu:deactivate", ".js-select-menu", function() {
		var e = this.querySelector(".js-filterable-field");
		e && (e.value = "", i.fire(e, "filterable:change"));
		var t = !0,
			n = !1,
			r = void 0;
		try {
			for (var a, o = this.querySelectorAll(".js-navigation-item.selected")[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
				var s = a.value,
					c = s.querySelector("input[type=radio], input[type=checkbox]");
				c && s.classList.toggle("selected", c.checked)
			}
		} catch (e) {
			n = !0, r = e
		} finally {
			try {
				!t && o.return && o.return()
			} finally {
				if (n) throw r
			}
		}
		var u = document.activeElement;
		if (u && this.contains(u)) try {
			u.blur()
		} catch (e) {}
	}), i.on("menu:activate", ".js-select-menu", function(e) {
		var t = e.currentTarget.querySelector(":focus");
		t && t.blur();
		var n = e.currentTarget.querySelector(".js-menu-target");
		n && n.classList.add("selected");
		var r = e.currentTarget.querySelector(".js-navigation-container");
		r && m.push(r)
	}), i.on("menu:deactivate", ".js-select-menu", function(e) {
		var t = e.currentTarget.querySelector(".js-menu-target");
		t && t.classList.remove("selected");
		var n = e.currentTarget.querySelector(".js-navigation-container");
		n && m.pop(n)
	}), i.on("filterable:change", ".js-select-menu .select-menu-list", Xu), i.on("selectmenu:tabchange", ".js-select-menu .select-menu-list", Xu), i.on("filterable:change", ".js-select-menu .select-menu-list", function(e) {
		t(e instanceof CustomEvent, "null.js:22");
		var n = e.currentTarget,
			r = n.querySelector(".js-new-item-form");
		r && function(e, t, n) {
			var r = n.length > 0 && ! function(e, t) {
				var n = !0,
					r = !1,
					a = void 0;
				try {
					for (var o, s = e.querySelectorAll(".js-select-button-text, .js-select-menu-filter-text")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
						var i = o.value,
							c = i.textContent.toLowerCase().trim();
						if (c === t.toLowerCase()) return !0
					}
				} catch (e) {
					r = !0, a = e
				} finally {
					try {
						!n && s.return && s.return()
					} finally {
						if (r) throw a
					}
				}
				return !1
			}(e, n);
			if (e.classList.toggle("is-showing-new-item-form", r), !r) return;
			var o = a.query(t, ".js-new-item-name");
			"innerText" in o ? o.innerText = n : o.textContent = n;
			var s = t.querySelector(".js-new-item-value");
			s instanceof HTMLInputElement && (s.value = n)
		}(n, r, e.detail.inputField.value), i.fire(e.target, "selectmenu:change")
	}), i.on("menu:activate", ".js-select-menu", Qu), i.on("selectmenu:load", ".js-select-menu", Qu), i.on("click", ".js-select-menu .js-select-menu-tab", function(e) {
		Zu(this);
		var t = this.closest(".js-select-menu").querySelector(".js-filterable-field");
		if (t) {
			var n = this.getAttribute("data-filter-placeholder");
			n && t.setAttribute("placeholder", n), t.focus()
		}
		e.stopPropagation(), e.preventDefault()
	}), s.observe(".js-select-menu .js-select-menu-tab.selected", {
		add: function(e) {
			el(e, !0)
		},
		remove: function(e) {
			el(e, !1)
		}
	});

	function tl() {
		var e = document.body;
		t(e, "null.js:12"), e.classList.add("is-sending"), e.classList.remove("is-sent", "is-not-sent")
	}

	function nl() {
		var e = document.body;
		t(e, "null.js:20"), e.classList.add("is-sent"), e.classList.remove("is-sending")
	}

	function rl(e) {
		var n = document.body;
		t(n, "null.js:28"), e && (a.query(document, ".js-sms-error").textContent = e), n.classList.add("is-not-sent"), n.classList.remove("is-sending")
	}
	l.remoteForm(".js-send-auth-code", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return tl(), r = void 0, e.prev = 2, e.next = 5, n.text();
					case 5:
						r = e.sent, e.next = 11;
						break;
					case 8:
						e.prev = 8, e.t0 = e.catch(2), rl(e.t0.response.text);
					case 11:
						r && nl();
					case 12:
					case "end":
						return e.stop()
				}
			}, e, void 0, [
				[2, 8]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), i.on("click", ".js-send-two-factor-code", function() {
		var e = ke(regeneratorRuntime.mark(function e(n) {
			var r, o, s, i, u, l, d, m, f, v, h, g, y, b, j, L, w, x, k, E, T;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = c(n.currentTarget, HTMLButtonElement), o = r.form, t(o, "null.js:56"), s = a.query(o, ".js-country-code-select", HTMLSelectElement).value, i = a.query(o, ".js-sms-number", HTMLInputElement).value, u = s + " " + i, tl(), null == (l = r.getAttribute("data-authenticity-token")) && (d = c(o.elements.namedItem("authenticity_token"), HTMLInputElement), l = d.value), (m = new FormData).append("number", u), m.append("authenticity_token", l), e.prev = 12, f = r.getAttribute("data-url"), t(f, "null.js:77"), e.next = 17, p.fetch(f, {
							method: "post",
							body: m
						});
					case 17:
						for (nl(), v = !0, h = !1, g = void 0, e.prev = 21, y = o.querySelectorAll(".js-2fa-enable")[Symbol.iterator](); !(v = (b = y.next()).done); v = !0)((j = b.value) instanceof HTMLInputElement || j instanceof HTMLButtonElement) && (j.disabled = !1);
						e.next = 29;
						break;
					case 25:
						e.prev = 25, e.t0 = e.catch(21), h = !0, g = e.t0;
					case 29:
						e.prev = 29, e.prev = 30, !v && y.return && y.return();
					case 32:
						if (e.prev = 32, !h) {
							e.next = 35;
							break
						}
						throw g;
					case 35:
						return e.finish(32);
					case 36:
						return e.finish(29);
					case 37:
						a.query(o, ".js-2fa-otp").focus(), e.next = 66;
						break;
					case 40:
						if (e.prev = 40, e.t1 = e.catch(12), !e.t1.response) {
							e.next = 47;
							break
						}
						return e.next = 45, e.t1.response.text();
					case 45:
						rl(e.sent);
					case 47:
						for (L = !0, w = !1, x = void 0, e.prev = 50, k = o.querySelectorAll(".js-2fa-enable")[Symbol.iterator](); !(L = (E = k.next()).done); L = !0)((T = E.value) instanceof HTMLInputElement || T instanceof HTMLButtonElement) && (T.disabled = !0);
						e.next = 58;
						break;
					case 54:
						e.prev = 54, e.t2 = e.catch(50), w = !0, x = e.t2;
					case 58:
						e.prev = 58, e.prev = 59, !L && k.return && k.return();
					case 61:
						if (e.prev = 61, !w) {
							e.next = 64;
							break
						}
						throw x;
					case 64:
						return e.finish(61);
					case 65:
						return e.finish(58);
					case 66:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[12, 40],
				[21, 25, 29, 37],
				[30, , 32, 36],
				[50, 54, 58, 66],
				[59, , 61, 65]
			])
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}()), i.on("click", ".js-enable-enable-two-factor-auth-button", function() {
		var e = a.query(document, ".js-enable-two-factor-auth-button", HTMLButtonElement);
		e.disabled = !1, e.removeAttribute("aria-label"), e.classList.remove("tooltipped")
	}), document.addEventListener("facebox:reveal", function() {
		if (document.querySelector("#facebox .js-two-factor-set-sms-fallback")) {
			var e = a.query(document, "#facebox .js-configure-sms-fallback .facebox-alert");
			e.textContent = "", e.classList.add("d-none"), a.query(document, "#facebox .js-configure-sms-fallback").classList.remove("d-none"), a.query(document, "#facebox .js-verify-sms-fallback").classList.add("d-none")
		}
	}), l.remoteForm(".js-two-factor-set-sms-fallback", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r, o;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = void 0, e.prev = 1, e.next = 4, n.text();
					case 4:
						r = e.sent, e.next = 11;
						break;
					case 7:
						switch (e.prev = 7, e.t0 = e.catch(1), o = a.query(t, ".js-verify-sms-fallback .facebox-alert"), e.t0.response.status) {
							case 422:
							case 429:
								o.textContent = e.t0.response.text, o.classList.remove("d-none")
						}
					case 11:
						if (!r) {
							e.next = 21;
							break
						}
						e.t1 = r.status, e.next = 200 === e.t1 ? 15 : 201 === e.t1 ? 15 : 202 === e.t1 ? 17 : 21;
						break;
					case 15:
						return window.location.reload(), e.abrupt("break", 21);
					case 17:
						return a.query(t, ".js-configure-sms-fallback").classList.add("d-none"), a.query(t, ".js-verify-sms-fallback").classList.remove("d-none"), a.query(t, ".js-fallback-otp").focus(), e.abrupt("break", 21);
					case 21:
					case "end":
						return e.stop()
				}
			}, e, void 0, [
				[1, 7]
			])
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), o.onFocus(".js-skip-password-autofill", function(e) {
		t(e instanceof HTMLInputElement, "null.js:9"), e.type = "password"
	}), i.on("click", ".js-smoothscroll-anchor", function(e) {
		var t = e.currentTarget;
		if (t instanceof HTMLAnchorElement) {
			var n = I.findFragmentTarget(document, t.hash);
			n && (n.scrollIntoView({
				behavior: "smooth"
			}), e.preventDefault())
		}
	});
	var al = void 0;
	ke(regeneratorRuntime.mark(function e() {
		return regeneratorRuntime.wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					if (!ae("SERVICE_WORKER") || !navigator.serviceWorker) {
						e.next = 11;
						break
					}
					return e.prev = 1, e.next = 4, navigator.serviceWorker.register("/service-worker.js");
				case 4:
					al = e.sent, e.next = 10;
					break;
				case 7:
					e.prev = 7, e.t0 = e.catch(1), console.error(e.t0);
				case 10:
					al && console.log("Service worker registration successful: ", al);
				case 11:
				case "end":
					return e.stop()
			}
		}, e, this, [
			[1, 7]
		])
	}))(), i.on("click", ".js-subscribe-to-web-push", function(e) {
		if (window.PushManager) {
			e.preventDefault();
			var n = c(e.currentTarget, HTMLButtonElement);
			t(n.form, "null.js:37");
			var r = a.query(n.form, "[name=authenticity_token]", HTMLInputElement).value;
			al.pushManager.subscribe({
				userVisibleOnly: !0
			}).then(function(e) {
				console.log(e);
				var t = new FormData;
				return t.append("authenticity_token", r), t.append("endpoint", e.endpoint), fetch("/web-push-subscription", {
					method: "POST",
					body: t,
					credentials: "same-origin"
				})
			}).then(function(e) {
				return console.log(e)
			}).catch(function(e) {
				console.error(e)
			})
		}
	});
	var ol = Ja(function(e, t) {
			var n, r;
			n = function(e, t) {
				var n = function(r, a, o) {
					var s, i, c = {
							close: function() {}
						},
						u = this,
						l = 0,
						d = -1,
						m = !1,
						f = !1,
						v = Object.assign({}, n.defaultOptions, "function" == typeof o ? {
							shouldReconnect: o
						} : o);
					if ("number" != typeof v.timeout) throw new Error("timeout must be the number of milliseconds to timeout a connection attempt");
					if ("function" != typeof v.shouldReconnect) throw new Error("shouldReconnect must be a function that returns the number of milliseconds to wait for a reconnect attempt, or null or undefined to not reconnect.");

					function p() {
						i && (clearTimeout(i), i = null)
					}["bufferedAmount", "url", "readyState", "protocol", "extensions"].forEach(function(e) {
						Object.defineProperty(u, e, {
							get: function() {
								return c[e]
							}
						})
					});
					var h = function(e) {
							m && (p(), j(e))
						},
						g = function() {
							m = !0, c.close(1e3)
						},
						y = !1;

					function b() {
						y && (e.removeEventListener("online", h), e.removeEventListener("offline", g), y = !1)
					}

					function j(e) {
						if (!v.shouldReconnect.handle1000 && 1e3 === e.code || f) l = 0;
						else if (!1 !== t.onLine) {
							var n = v.shouldReconnect(e, u);
							"number" == typeof n && (i = setTimeout(L, n))
						} else m = !0
					}

					function L() {
						i = null, (c = new WebSocket(r, a || void 0)).binaryType = u.binaryType, l++, u.dispatchEvent(Object.assign(new CustomEvent("connecting"), {
							attempts: l,
							reconnects: d
						})), s = setTimeout(function() {
							s = null, b(), u.dispatchEvent(Object.assign(new CustomEvent("timeout"), {
								attempts: l,
								reconnects: d
							}))
						}, v.timeout), ["open", "close", "message", "error"].forEach(function(e) {
							c.addEventListener(e, function(t) {
								u.dispatchEvent(t);
								var n = u["on" + e];
								if ("function" == typeof n) return n.apply(u, arguments)
							})
						}), v.ignoreConnectivityEvents || y || (e.addEventListener("online", h), e.addEventListener("offline", g), y = !0)
					}
					u.send = function() {
						return c.send.apply(c, arguments)
					}, u.close = function(e, t) {
						return "number" != typeof e && (t = e, e = 1e3), p(), m = !1, f = !0, b(), c.close(e, t)
					}, u.open = function() {
						c.readyState !== WebSocket.OPEN && c.readyState !== WebSocket.CONNECTING && (p(), m = !1, f = !1, L())
					}, Object.defineProperty(u, "listeners", {
						value: {
							open: [function(e) {
								s && (clearTimeout(s), s = null), e.reconnects = ++d, e.attempts = l, l = 0, m = !1
							}],
							close: [j]
						}
					}), Object.defineProperty(u, "attempts", {
						get: function() {
							return l
						},
						enumerable: !0
					}), Object.defineProperty(u, "reconnects", {
						get: function() {
							return d
						},
						enumerable: !0
					}), v.automaticOpen && L()
				};
				return n.defaultOptions = {
					timeout: 4e3,
					shouldReconnect: function(e, t) {
						if (1008 !== e.code && 1011 !== e.code) return [0, 3e3, 1e4][t.attempts]
					},
					ignoreConnectivityEvents: !1,
					automaticOpen: !0
				}, n.prototype.binaryType = "blob", n.prototype.addEventListener = function(e, t) {
					e in this.listeners || (this.listeners[e] = []), this.listeners[e].push(t)
				}, n.prototype.removeEventListener = function(e, t) {
					if (e in this.listeners)
						for (var n = this.listeners[e], r = 0, a = n.length; r < a; r++)
							if (n[r] === t) return void n.splice(r, 1)
				}, n.prototype.dispatchEvent = function(e) {
					if (e.type in this.listeners)
						for (var t = this.listeners[e.type], n = 0, r = t.length; n < r; n++) t[n].call(this, e)
				}, n
			}, r = "undefined" != typeof window ? window : $a, e.exports = n(r, navigator)
		}),
		sl = {},
		il = {},
		cl = null;

	function ul(e) {
		var t = e.getAttribute("data-channel");
		return t ? t.split(/\s+/) : []
	}
	s.observe(".js-socket-channel[data-channel]", {
		add: function(e) {
			cl || (cl = function() {
				var e = document.head && document.head.querySelector("link[rel=web-socket]");
				if (e) {
					t(e instanceof HTMLLinkElement, "Link must be of type HTMLLinkElement -- null.js:36");
					var n = new ol(e.href, void 0, {
						shouldReconnect: function(e, t) {
							if (!(t.reconnects <= 5) && 1008 !== e.code && 1011 !== e.code) {
								if (1013 === e.code) return 6e3;
								if (1012 === e.code) return 5e3;
								var n = 5 * Math.random();
								return 1e3 * Math.pow(2, t.attempts) * n
							}
						}
					});
					return n.addEventListener("open", function() {
						for (var e in sl) n.send("subscribe:" + e)
					}), n.addEventListener("message", function(e) {
						var t = JSON.parse(e.data),
							n = t[0],
							r = t[1];
						if (n && r) {
							var a = il[n] || [],
								o = !0,
								s = !1,
								c = void 0;
							try {
								for (var u, l = a[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
									var d = u.value;
									i.fire(d, "socket:message", {
										data: r,
										name: n
									})
								}
							} catch (e) {
								s = !0, c = e
							} finally {
								try {
									!o && l.return && l.return()
								} finally {
									if (s) throw c
								}
							}
						}
					}), n
				}
			}());
			var n = cl;
			if (n) {
				var r = !0,
					a = !1,
					o = void 0;
				try {
					for (var s, c = ul(e)[Symbol.iterator](); !(r = (s = c.next()).done); r = !0) {
						var u = s.value;
						n.readyState !== WebSocket.OPEN || sl[u] || n.send("subscribe:" + u), sl[u] = !0, null == il[u] && (il[u] = []), il[u].push(e)
					}
				} catch (e) {
					a = !0, o = e
				} finally {
					try {
						!r && c.return && c.return()
					} finally {
						if (a) throw o
					}
				}
			}
		},
		remove: function(e) {
			var t = !0,
				n = !1,
				r = void 0;
			try {
				for (var a, o = ul(e)[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
					var s = a.value,
						i = il[s];
					if (i) {
						var c = i.indexOf(e); - 1 !== c && i.splice(c, 1)
					}
				}
			} catch (e) {
				n = !0, r = e
			} finally {
				try {
					!t && o.return && o.return()
				} finally {
					if (n) throw r
				}
			}
		}
	}), s.observe("form.js-auto-replay-enforced-sso-request", function(e) {
		d.submit(e)
	});
	var ll = !1;

	function dl(e, t) {
		function n(e) {
			ll || (e.preventDefault(), e.stopImmediatePropagation(), R(t).then(function() {
				ll = !0, d.submit(e.target), ll = !1
			}).catch(function(t) {
				i.fire(e.target, "sudo:failed", {
					error: t
				})
			}))
		}
		s.observe(e, {
			add: function(e) {
				e.addEventListener("submit", n)
			},
			remove: function(e) {
				e.removeEventListener("submit", n)
			}
		})
	}
	dl("form.js-sudo-required", "low"), dl("form.js-high-risk-sudo-required", "high");
	var ml = function() {
			var e = ke(regeneratorRuntime.mark(function e() {
				var n, r, o, s, i, c, u, l, d, m, f, v, h, g;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (n = a.query(document, ".js-tagsearch-popover"), r = a.query(n, ".js-tagsearch-popover-content"), o = a.query(n, ".js-tagsearch-popover-loader"), s = document.getSelection(), t(null != s, "Selection must not be null -- null.js:17"), !s.isCollapsed) {
								e.next = 9;
								break
							}
							return n.classList.add("d-none"), w.deactivate(n), e.abrupt("return");
						case 9:
							if ((i = s.toString().trim()) && !i.match(/\n|\s|[();&.=",]/)) {
								e.next = 12;
								break
							}
							return e.abrupt("return");
						case 12:
							if (null != s.anchorNode && s.anchorNode.parentNode instanceof HTMLElement) {
								e.next = 14;
								break
							}
							return e.abrupt("return");
						case 14:
							if (s.anchorNode.parentNode.closest(".js-file-line-container")) {
								e.next = 17;
								break
							}
							return e.abrupt("return");
						case 17:
							if (c = s.getRangeAt(0).getClientRects()[0], n.style.position = "absolute", n.style.top = window.scrollY + c.bottom + 6 + "px", n.style.left = window.scrollX + c.left + c.width / 2 + "px", r.innerHTML = "", o.classList.remove("d-none"), n.classList.remove("d-none"), w.activate(n), u = n.getAttribute("data-tagsearch-url"), l = n.getAttribute("data-tagsearch-path"), d = n.getAttribute("data-tagsearch-ref"), null != u && null != l && null != d) {
								e.next = 30;
								break
							}
							throw new Error("Missing attribute `data-tagsearch-url");
						case 30:
							return m = new URL(u, window.location.origin), (f = new URLSearchParams).set("q", i), f.set("context", l), f.set("ref", d), m.search = f.toString(), e.prev = 36, e.next = 39, p.fetchPoll(m);
						case 39:
							return v = e.sent, X.verifyResponseHtmlSafeNonce(X.getDocumentHtmlSafeNonce(document), v), e.t0 = C.parseHTML, e.t1 = document, e.next = 45, v.text();
						case 45:
							e.t2 = e.sent, h = (0, e.t0)(e.t1, e.t2), o.classList.add("d-none"), r.innerHTML = "", r.append(h), e.next = 57;
							break;
						case 52:
							e.prev = 52, e.t3 = e.catch(36), g = a.query(n, ".js-tagsearch-popover-error"), o.classList.add("d-none"), g.classList.remove("d-none");
						case 57:
						case "end":
							return e.stop()
					}
				}, e, this, [
					[36, 52]
				])
			}));
			return function() {
				return e.apply(this, arguments)
			}
		}(),
		fl = u(ml, 200);

	function vl(e, t) {
		a.query(e, ".js-add-child-team-loading-state").classList.toggle("d-none", !t), a.query(e, ".js-add-child-team-modal-content").classList.toggle("d-none", t)
	}
	s.observe(".js-tagsearch-popover", {
		add: function() {
			document.addEventListener("selectionchange", fl)
		},
		remove: function() {
			document.removeEventListener("selectionchange", fl)
		}
	}), i.on("autocomplete:result", ".js-add-child-team-form", function(e) {
		t(e instanceof CustomEvent, "null.js:16");
		var n = e.detail.text,
			r = e.detail.query,
			o = c(e.currentTarget, HTMLFormElement),
			s = o.closest(".js-add-team-container");
		if (s) {
			if (vl(s, !0), "_new" === n) {
				var i = o.getAttribute("data-new-child-team-path");
				if (i) {
					var u = new URL(i, window.location.origin),
						l = new URLSearchParams(u.search.slice(1));
					return l.append("name", r), u.search = l.toString(), void(window.location.href = u)
				}
			}
			var d = o.getAttribute("data-change-parent-summary-path");
			t(d, "null.js:40"), p.fetchSafeDocumentFragment(document, d).then(function(e) {
				a.query(o, ".js-add-team-search").classList.add("d-none"), a.query(o, ".js-add-team-warning").appendChild(e), vl(s, !1)
			})
		}
	}), i.on("click", ".js-add-child-team-form .js-confirm-change-parent", function(e) {
		var t = c(e.currentTarget, HTMLButtonElement).form,
			n = e.currentTarget.closest(".js-add-team-container");
		n && vl(n, !0), t && t.submit()
	}), i.on("click", ".js-expandable-team-breadcrumbs .js-team-breadcrumb-trigger", function(e) {
		t(e.target instanceof HTMLElement, "null.js:10");
		var n = a.closest(e.target, ".js-expandable-team-breadcrumbs");
		n && (n.classList.add("is-loading"), j.updateContent(n).catch().then(function() {
			n.classList.remove("is-loading")
		}))
	});
	var pl = function() {
			var e = ke(regeneratorRuntime.mark(function e(t, n, r) {
				var a, o, s, i, c, u;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (!n.length) {
								e.next = 24;
								break
							}
							for (a = !0, o = !1, s = void 0, e.prev = 4, i = n[Symbol.iterator](); !(a = (c = i.next()).done); a = !0) c.value.classList.remove("d-none");
							e.next = 12;
							break;
						case 8:
							e.prev = 8, e.t0 = e.catch(4), o = !0, s = e.t0;
						case 12:
							e.prev = 12, e.prev = 13, !a && i.return && i.return();
						case 15:
							if (e.prev = 15, !o) {
								e.next = 18;
								break
							}
							throw s;
						case 18:
							return e.finish(15);
						case 19:
							return e.finish(12);
						case 20:
							t.classList.add("is-open"), gl = !1, e.next = 30;
							break;
						case 24:
							return e.next = 26, p.fetchSafeDocumentFragment(document, r);
						case 26:
							u = e.sent, t.after(u), t.classList.add("is-open"), gl = !1;
						case 30:
						case "end":
							return e.stop()
					}
				}, e, this, [
					[4, 8, 12, 20],
					[13, , 15, 19]
				])
			}));
			return function(t, n, r) {
				return e.apply(this, arguments)
			}
		}(),
		hl = function() {
			var e = ke(regeneratorRuntime.mark(function e(n) {
				var r, o, s, i, c;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return r = n.getAttribute("data-contents-url"), t(r, "null.js:87"), o = new URL(r, window.location.origin), (s = new URLSearchParams(o.search.slice(1))).append("query", n.value.trim()), o.search = s.toString(), i = a.query(document, ".js-select-team-results"), e.next = 9, p.fetchSafeDocumentFragment(document, o);
						case 9:
							c = e.sent, i.innerHTML = "", i.append(c);
						case 12:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}(),
		gl = !1;
	i.on("click", ".js-open-child-team", function(e) {
		if (!gl) {
			gl = !0;
			var n = e.currentTarget.getAttribute("data-parent-team-slug");
			if (n) {
				var r = document.querySelectorAll('.js-child-team[data-parent-team-slug="' + n + '"]'),
					o = a.closest(e.currentTarget, ".js-team-row");
				if (o.classList.contains("is-open")) e.currentTarget.setAttribute("aria-expanded", "false"),
					function(e, t) {
						(function e(t) {
							var n = !0;
							var r = !1;
							var a = void 0;
							try {
								for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
									var i = o.value,
										c = String(i.getAttribute("data-team-slug")),
										u = document.querySelectorAll('.js-child-team[data-parent-team-slug="' + c + '"]');
									e(u), i.classList.remove("is-open"), i.classList.add("d-none")
								}
							} catch (e) {
								r = !0, a = e
							} finally {
								try {
									!n && s.return && s.return()
								} finally {
									if (r) throw a
								}
							}
						})(t), e.classList.remove("is-open"), gl = !1
					}(o, r);
				else {
					e.currentTarget.setAttribute("aria-expanded", "true");
					var s = e.currentTarget.getAttribute("data-child-team-url");
					t(s, "null.js:29"), pl(o, r, s)
				}
			}
		}
	}), i.on("click", ".js-show-more-child-teams", function() {
		var e = ke(regeneratorRuntime.mark(function e(n) {
			var r, o, s, i, c;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						if (!gl) {
							e.next = 2;
							break
						}
						return e.abrupt("return");
					case 2:
						return gl = !0, r = n.currentTarget, o = a.closest(r, ".js-team-row"), s = r.getAttribute("data-child-team-url"), t(s, "null.js:74"), i = o.parentNode, e.next = 10, p.fetchSafeDocumentFragment(document, s);
					case 10:
						c = e.sent, o.before(c), i && i.removeChild(o), gl = !1;
					case 14:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}()), s.observe(".js-selected-team-field", function(e) {
		f.addThrottledInputEventListener(e, hl)
	}), i.on("menu:activated", ".js-select-team-menu", function(e) {
		var t = e.target.querySelector(".js-selected-team-field");
		t && t.focus()
	}), i.on("selectmenu:selected", ".js-select-team", function(e) {
		var t = e.currentTarget,
			n = t.getAttribute("data-selected-team-id") || "",
			r = a.query(document, "#selected-team-id", HTMLInputElement),
			o = a.query(t, ".js-selected-team-name").innerHTML,
			s = a.query(document, "#selected-team-name", HTMLInputElement);
		n !== r.value && (r.value = n, s.value = o)
	}), i.on("selectmenu:selected", ".js-clear-team-selection", function() {
		var e = a.query(document, ".js-select-button");
		e.textContent = e.getAttribute("data-placeholder") || "Select team"
	});
	var yl = function() {
			var e = ke(regeneratorRuntime.mark(function e() {
				var n, r, o, s, i, c, u, l, d, m, f;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (c = function() {
									r === n.value && Ll && (Ll.value = r)
								}, i = function(e) {
									if (r === n.value) {
										var t = e.normalized_ref;
										if (s.innerHTML = null == e.message_html ? "" : e.message_html, !t) a.query(s, "code").textContent = o;
										Ll && (Ll.value = t)
									}
								}, n = a.query(document, ".js-quick-pull-new-branch-name", HTMLInputElement), r = n.value, null != (o = n.getAttribute("data-generated-branch"))) {
								e.next = 7;
								break
							}
							throw new Error("Missing attribute `data-generated-branch`");
						case 7:
							return s = a.query(document, ".js-quick-pull-normalization-info"), u = n.getAttribute("data-check-authenticity-token") || "", (l = new FormData).append("ref", r), l.append("authenticity_token", u), d = n.getAttribute("data-check-url"), t(d, "null.js:57"), m = p.fetchJSON(d, {
								method: "post",
								body: l
							}), e.next = 17, jl.push(m);
						case 17:
							f = e.sent;
							try {
								i(f)
							} catch (e) {
								c()
							}
						case 19:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function() {
				return e.apply(this, arguments)
			}
		}(),
		bl = function() {
			var e = ke(regeneratorRuntime.mark(function e(t) {
				var n, r, o, s, i;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return t.classList.add("is-loading"), Tl(), n = d.serialize(t), e.next = 5, p.fetchJSON((t.action + "&" + n).replace(/[?&]/, "?"), {
								method: "POST"
							});
						case 5:
							r = e.sent, o = C.parseHTML(document, r.html), a.closest(t, ".js-template-preview").replaceWith(o), s = a.query(document, ".js-hidden-template-fields"), (i = s.querySelector('[data-filename="' + r.filename + '"]')) instanceof HTMLInputElement ? i.value = r.markdown : ((i = document.createElement("input")).type = "hidden", i.name = r.filename, i.value = r.markdown, s.append(i)), t.classList.remove("is-loading"), Tl();
						case 13:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}(),
		jl = new v,
		Ll = null,
		wl = u(yl, 200);

	function xl() {
		return document.querySelectorAll(".js-template-editor").length > 0
	}

	function kl(e) {
		e.classList.toggle("section-focus")
	}

	function El() {
		return document.querySelectorAll(".js-template-form.is-loading").length > 0 ? "loading" : document.querySelectorAll(".js-template-form.is-errored").length > 0 ? "error" : "ok"
	}

	function Tl() {
		var e = a.query(document, ".js-commit-templates-form", HTMLFormElement),
			t = a.query(e, ".js-blob-submit", HTMLButtonElement),
			n = a.query(document, ".js-template-commit-form-error-message"),
			r = a.query(document, ".js-template-commit-form-loading-message");
		switch (El()) {
			case "loading":
				n.classList.add("d-none"), r.classList.remove("d-none"), e.setAttribute("disabled", "disabled"), t.setAttribute("disabled", "disabled");
				break;
			case "error":
				n.classList.remove("d-none"), r.classList.add("d-none"), e.setAttribute("disabled", "disabled"), t.setAttribute("disabled", "disabled");
				break;
			default:
				n.classList.add("d-none"), r.classList.add("d-none"), e.removeAttribute("disabled"), t.removeAttribute("disabled")
		}
	}

	function Sl() {
		var e = !0,
			t = !1,
			n = void 0;
		try {
			for (var r, o = a.querySelectorAll(document, ".js-template-form", HTMLFormElement)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
				var s = r.value;
				bl(s)
			}
		} catch (e) {
			t = !0, n = e
		} finally {
			try {
				!e && o.return && o.return()
			} finally {
				if (t) throw n
			}
		}
	}
	s.observe(".js-custom-fields-drag-container", function(e) {
		K.create(e, {
			draggable: ".js-custom-field-draggable",
			handle: ".js-draggable-box-icon"
		})
	}), i.on("change", ".js-quick-pull-choice-option", function(e) {
		if (xl()) {
			var n = e.currentTarget;
			t(n instanceof HTMLInputElement, "null.js:86"), a.query(document, ".js-commit-branch-name").classList.toggle("d-none", "quick-pull" !== n.value);
			var r = a.query(document, ".js-quick-pull-new-branch-name");
			"quick-pull" === n.value ? r.setAttribute("required", "required") : r.removeAttribute("required")
		}
	}), o.onInput(".js-quick-pull-new-branch-name", function(e) {
		if (xl()) {
			var t = c(e.target, HTMLInputElement).value;
			a.query(document, ".js-quick-pull-target-branch", HTMLInputElement).value = t, t.length && wl()
		}
	}), o.onInput(".js-synced-input", function(e) {
		var t = c(e.target, HTMLInputElement),
			n = t.getAttribute("data-sync");
		if (n) {
			var r = a.closest(t, ".js-sync-container"),
				o = a.querySelectorAll(r, '[data-sync-with="' + n + '"]');
			if ("" !== t.value.trim()) {
				var s = !0,
					i = !1,
					u = void 0;
				try {
					for (var l, d = o[Symbol.iterator](); !(s = (l = d.next()).done); s = !0) {
						l.value.textContent = t.value
					}
				} catch (e) {
					i = !0, u = e
				} finally {
					try {
						!s && d.return && d.return()
					} finally {
						if (i) throw u
					}
				}
			} else {
				var m = !0,
					f = !1,
					v = void 0;
				try {
					for (var p, h = o[Symbol.iterator](); !(m = (p = h.next()).done); m = !0) {
						var g = p.value,
							y = g.getAttribute("data-sync-blank");
						y && (g.innerHTML = '<span class="text-gray">' + y + "</span>")
					}
				} catch (e) {
					f = !0, v = e
				} finally {
					try {
						!m && h.return && h.return()
					} finally {
						if (f) throw v
					}
				}
			}
		}
	}), i.on("submit", ".js-template-form", function(e) {
		e.preventDefault();
		var t = c(e.currentTarget, HTMLFormElement);
		bl(t)
	}), i.on("click", ".js-toggle-template-commit", function() {
		var e = a.query(document, ".js-template-commit-pane");
		e.classList.toggle("d-none"), e.classList.contains("d-none") || Sl()
	}), i.on("submit", ".js-commit-templates-form", function(e) {
		"ok" !== El() && e.preventDefault(), Tl()
	}), i.on("click", ".js-custom-template-toggle", function(e) {
		var t = e.target,
			n = a.closest(t, ".js-template-preview"),
			r = !n.classList.contains("expand-preview");
		if (function() {
				var e = document.querySelectorAll(".js-template-preview"),
					t = !0,
					n = !1,
					r = void 0;
				try {
					for (var a, o = e[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) a.value.classList.remove("expand-preview")
				} catch (e) {
					n = !0, r = e
				} finally {
					try {
						!t && o.return && o.return()
					} finally {
						if (n) throw r
					}
				}
			}(), r) n.classList.add("expand-preview"), n.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
		else {
			var o = a.query(n, ".js-template-form", HTMLFormElement);
			bl(o)
		}
	}), i.on("click", ".js-remove-template-button", function(e) {
		var t = a.closest(e.target, ".js-template-preview"),
			n = t.getAttribute("data-filename");
		if (!n) throw new Error("No template filename");
		var r = a.query(document, ".js-hidden-template-fields"),
			o = a.query(r, '[data-filename="' + n + '"]');
		t.remove(), o.remove(), Sl()
	}), i.on("click", ".js-append-custom-field-option", function(e) {
		var t = e.target,
			n = t.getAttribute("data-source");
		if (n) {
			var r = a.query(document, "#" + n);
			t.insertAdjacentHTML("beforebegin", r.innerHTML)
		}
	}), i.on("click", ".js-remove-custom-field-option", function(e) {
		a.closest(e.target, ".js-custom-field-option").remove()
	}), i.on("click", ".js-edit-custom-field", function(e) {
		kl(a.closest(e.target, ".js-custom-field-editor"))
	}), i.on("click", ".js-edit-custom-field-header", function(e) {
		a.closest(e.target, ".js-custom-field-header").classList.toggle("section-focus")
	}), i.on("click", ".js-remove-custom-field", function(e) {
		a.closest(e.target, ".js-custom-field-editor").remove()
	}), i.on("click", ".js-add-template-button", function(e) {
		var t = e.currentTarget,
			n = a.query(document, ".js-templates-container"),
			r = t.getAttribute("data-source");
		if (r) {
			var o = a.query(document, "#" + r);
			n.insertAdjacentHTML("beforeend", o.innerHTML)
		}
	}), i.on("click", ".js-add-custom-field-button", function(e) {
		var t = e.currentTarget,
			n = a.closest(t, ".js-template-preview"),
			r = t.getAttribute("data-source");
		if (r) {
			var o = a.query(document, "#" + r),
				s = C.parseHTML(document, o.innerHTML).firstElementChild;
			if (s instanceof HTMLElement) kl(s), a.query(n, ".js-custom-fields-container").insertAdjacentElement("beforeend", s)
		}
	});
	var ql = function() {
		var e = ke(regeneratorRuntime.mark(function e(t) {
			var n, r, o, s, i, c, u, l, d;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						if (n = document.getElementById("js-timeline-progressive-loader")) {
							e.next = 3;
							break
						}
						return e.abrupt("return");
					case 3:
						if (r = n.getAttribute("data-timeline-item-src")) {
							e.next = 6;
							break
						}
						return e.abrupt("return");
					case 6:
						return o = new URL(r, window.location.origin), (s = new URLSearchParams(o.search.slice(1))).append("anchor", t), o.search = s.toString(), e.next = 12, p.fetchSafeDocumentFragment(document, o);
					case 12:
						if (i = e.sent, c = i.querySelector(".js-timeline-item")) {
							e.next = 16;
							break
						}
						return e.abrupt("return");
					case 16:
						if (u = c.getAttribute("data-gid")) {
							e.next = 19;
							break
						}
						return e.abrupt("return");
					case 19:
						(l = document.querySelector(".js-timeline-item[data-gid='" + u + "']")) ? (l.replaceWith(c), (d = document.getElementById(t)) && Al(d)) : a.query(document, "#progressive-timeline-item-container").replaceWith(i);
					case 21:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}();

	function Al(e) {
		! function(e) {
			var n = e.closest(".js-details-container");
			if (!n) return;
			t(n instanceof HTMLElement, "null.js:78"), B.isDetailsTargetExpanded(n) || B.toggleDetailsTarget(n)
		}(e),
		function(e) {
			e.classList.add("timeline-item-highlight")
		}(e), na(e)
	}

	function Ml() {
		return window.location.hash.slice(1)
	}
	ke(regeneratorRuntime.mark(function e() {
		var t;
		return regeneratorRuntime.wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					return e.next = 2, n.ready;
				case 2:
					if (t = Ml()) {
						e.next = 5;
						break
					}
					return e.abrupt("return");
				case 5:
					document.getElementById(t) || ql(t);
				case 7:
				case "end":
					return e.stop()
			}
		}, e, void 0)
	}))(), s.observe(".js-timeline-progressive-focus-container", function(e) {
		var t = Ml();
		if (t) {
			var n = document.getElementById(t);
			n && e.contains(n) && Al(n)
		}
	}), i.on("socket:message", ".js-timeline-container", function(e) {
		t(e instanceof CustomEvent, "null.js:8");
		var n = e.detail.data;
		if (e.currentTarget === e.target && n.type && n.id) {
			var r = n && n.wait,
				o = n.type.toLowerCase() + "-" + n.id,
				s = a.query(e.target, '[data-timeline-entry="' + o + '"]');
			null == r ? j.updateContent(s) : setTimeout(function() {
				j.updateContent(s)
			}, r)
		}
	});
	var Hl = "navigationStart";

	function Cl() {
		var e = {};
		e.crossBrowserLoadEvent = Date.now();
		var t = window.performance && window.performance.timing;
		if (t)
			for (var n in t) {
				var r = t[n];
				"number" == typeof r && (e[n] = r)
			} else {
				var a = function() {
					var e = A.getItem(Hl);
					if (e) return parseInt(e, 10)
				}();
				null != a && (e.simulatedNavigationStart = a)
			}
		var o = function() {
			if (window.performance && "timeOrigin" in window.performance && window.performance.getEntriesByType) {
				var e = window.performance.getEntriesByType("paint");
				if (e.length) {
					var t = e.find(function(e) {
						return "first-paint" === e.name
					});
					if (t) return Math.round((performance.timeOrigin + t.startTime) / 1e6)
				}
			}
		}();
		return null != o && (e.chromeFirstPaintTime = o), e
	}

	function Il() {
		var e = [],
			t = window.performance;
		if (t) {
			var n = !0,
				r = !1,
				a = void 0;
			try {
				for (var o, s = t.getEntriesByType("resource")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
					var i = o.value,
						c = {};
					for (var u in e.push(c), i) {
						var l = i[u];
						"number" != typeof l && "string" != typeof l || (c[u] = l)
					}
				}
			} catch (e) {
				r = !0, a = e
			} finally {
				try {
					!n && s.return && s.return()
				} finally {
					if (r) throw a
				}
			}
		}
		return e
	}

	function _l() {
		var e = [],
			t = window.performance;
		if (t) {
			var n = !0,
				r = !1,
				a = void 0;
			try {
				for (var o, s = t.getEntriesByType("navigation")[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
					var i = o.value,
						c = {};
					for (var u in e.push(c), i) {
						var l = i[u];
						"number" != typeof l && "string" != typeof l || (c[u] = l)
					}
				}
			} catch (e) {
				r = !0, a = e
			} finally {
				try {
					!n && s.return && s.return()
				} finally {
					if (r) throw a
				}
			}
		}
		var d = Cl();
		return d && 0 === e.length && e.push({
			name: location.href,
			entryType: "navigation",
			startTime: 0,
			duration: d.loadEventEnd - d.navigationStart,
			initiatorType: "navigation",
			nextHopProtocol: "http/1.1",
			type: "navigate",
			redirectStart: d.redirectStart,
			redirectEnd: d.redirectEnd,
			fetchStart: d.fetchStart,
			domainLookupStart: d.domainLookupStart,
			domainLookupEnd: d.domainLookupEnd,
			connectStart: d.connectStart,
			connectEnd: d.connectEnd,
			secureConnectionStart: d.secureConnectionStart,
			requestStart: d.requestStart,
			responseStart: d.responseStart,
			responseEnd: d.responseEnd,
			unloadEventStart: d.unloadEventStart,
			unloadEventEnd: d.unloadEventEnd,
			domInteractive: d.domInteractive,
			domContentLoadedEventStart: d.domContentLoadedEventStart,
			domContentLoadedEventEnd: d.domContentLoadedEventEnd,
			domComplete: d.domComplete,
			loadEventStart: d.loadEventStart,
			loadEventEnd: d.loadEventEnd
		}), e
	}
	window.performance || window.performance.timing || window.addEventListener("pagehide", function() {
			A.setItem(Hl, Date.now().toString())
		}),
		function() {
			var e = ke(regeneratorRuntime.mark(function e() {
				var t, r;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.next = 2, n.loaded;
						case 2:
							return e.next = 4, Q.delay(0);
						case 4:
							(t = Il()).length && We({
								resourceTimings: t
							}), (r = _l()).length && We({
								navigationTimings: r
							});
						case 8:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function() {
				return e.apply(this, arguments)
			}
		}()(), i.on("click", ".js-toggler-container .js-toggler-target", function(e) {
			(t(e instanceof MouseEvent, "null.js:43"), 0 === e.button) && this.closest(".js-toggler-container").classList.toggle("on")
		}), E(document).on("ajaxSend", ".js-toggler-container", function() {
			this.classList.remove("success", "error"), this.classList.add("loading")
		}), E(document).on("ajaxComplete", ".js-toggler-container", function() {
			this.classList.remove("loading")
		}), E(document).on("ajaxSuccess", ".js-toggler-container", function() {
			this.classList.add("success")
		}), E(document).on("ajaxError", ".js-toggler-container", function() {
			this.classList.add("error")
		});
	var Rl = function() {
			var e = ke(regeneratorRuntime.mark(function e() {
				var n, r, o;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return Nl(!1), n = a.query(document, "#topics-list-container"), r = n.getAttribute("data-url"), t(r, "`data-url` must exist -- null.js:55"), e.next = 6, p.fetchSafeDocumentFragment(document, r);
						case 6:
							o = e.sent, n.innerHTML = "", n.appendChild(o);
						case 9:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function() {
				return e.apply(this, arguments)
			}
		}(),
		Fl = function() {
			var e = ke(regeneratorRuntime.mark(function e(n) {
				var r, a, o;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (r = n.querySelector(".js-topic-suggestions-container")) {
								e.next = 3;
								break
							}
							return e.abrupt("return");
						case 3:
							return a = r.getAttribute("data-url"), t(a, "`data-url` must exist -- null.js:69"), e.next = 7, p.fetchSafeDocumentFragment(document, a);
						case 7:
							o = e.sent, r.innerHTML = "", r.appendChild(o);
						case 10:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}();

	function Pl(e) {
		var t = a.closest(e, ".js-topic-save-notice-container"),
			n = a.query(t, ".js-repo-topics-save-notice");
		n.classList.remove("d-none"), n.classList.add("d-inline-block", "anim-fade-in"), setTimeout(function() {
			n.classList.remove("d-inline-block"), n.classList.add("d-none")
		}, 1900)
	}

	function Ol(e) {
		var t = a.query(e, ".js-topic-suggestions-box");
		t.querySelector(".js-topic-suggestion") || t.remove()
	}

	function Nl(e) {
		var t = a.query(document, ".js-repo-meta-container"),
			n = a.query(document, "#topics-list-container"),
			r = a.query(t, ".js-repo-meta-edit");
		a.query(t, ".js-edit-repo-meta-button").classList.toggle("d-none", e), n.classList.toggle("d-none", e), r.classList.toggle("d-none", e)
	}

	function Dl() {}

	function Bl() {
		return !!window.u2f || "true" === e.getMetadataByName(document, "u2f-support")
	}

	function Ul() {
		var e = a.query(document, ".js-u2f-auth-form", HTMLFormElement),
			t = a.query(e, ".js-u2f-auth-response", HTMLInputElement),
			n = e.getAttribute("data-app-id"),
			r = e.getAttribute("data-challenge"),
			o = e.getAttribute("data-sign-requests");
		if (null != o) {
			var s = JSON.parse(o);
			Array.from(document.querySelectorAll(".js-u2f-error")).forEach(function(e) {
				return e.classList.add("d-none")
			});
			var c = document.querySelector(".js-u2f-login-waiting");
			null != c && c.classList.remove("d-none"),
				function() {
					for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return new Promise(function(e, n) {
						var r;
						(r = window.u2f).sign.apply(r, t.concat([function(t) {
							if (null != t.errorCode && 0 !== t.errorCode) {
								var r = new Error("Signing request failed");
								r.code = t.errorCode, n(r)
							} else e(t)
						}]))
					})
				}(n, r, s).then(function(n) {
					t.value = JSON.stringify(n), i.fire(e, "submit") && e.submit()
				}, function(e) {
					var t = ".js-u2f-auth-error";
					switch (e.code) {
						case 4:
							t = ".js-u2f-auth-not-registered-error";
							break;
						case 5:
							t = ".js-u2f-auth-timeout"
					}
					var n = document.querySelector(t);
					null != n && n.classList.remove("d-none"), null != c && c.classList.add("d-none")
				})
		}
	}

	function zl(e, t, n) {
		if (null == n) {
			var r = e.getAttribute(t);
			return null == r ? null : JSON.parse(r)
		}
		e.setAttribute(t, JSON.stringify(n))
	}

	function Wl(e) {
		return zl(a.query(document, ".js-add-u2f-registration-form", HTMLFormElement), "data-sign-requests", e)
	}

	function Vl(e) {
		return zl(a.query(document, ".js-add-u2f-registration-form", HTMLFormElement), "data-register-requests", e)
	}

	function $l(e) {
		e.register_requests && Vl(e.register_requests), e.sign_requests && Wl(e.sign_requests)
	}

	function Jl(e, t) {
		var n = a.query(document, ".js-new-u2f-registration");
		n.classList.add("is-showing-error"), n.classList.remove("is-sending"), Array.from(n.querySelectorAll(".js-u2f-error")).forEach(function(e) {
			return e.classList.add("d-none")
		});
		var r = a.query(n, e);
		null != t && (r.textContent = t), r.classList.remove("d-none")
	}

	function Kl(e) {
		R("high").then(function() {
			var t = a.query(document, ".js-add-u2f-registration-form", HTMLFormElement);
			c(t.elements.namedItem("response"), HTMLInputElement).value = JSON.stringify(e), p.fetchJSON(t.action, {
				method: t.method,
				body: new FormData(t)
			}).then(function(e) {
				$l(e), a.query(document, ".js-new-u2f-registration").classList.remove("is-sending", "is-active"), a.query(document, ".js-u2f-registration-nickname-field", HTMLInputElement).value = "",
					function(e) {
						var t = document.createElement("div");
						t.innerHTML = e;
						var n = t.firstChild;
						null != n && a.query(document, ".js-u2f-registrations").appendChild(n)
					}(e.registration)
			}).catch(function(e) {
				e.response ? e.response.json().then(function(e) {
					$l(e), Jl(".js-u2f-server-error", e.error)
				}) : Jl(".js-u2f-network-error")
			})
		})
	}

	function Gl() {
		var e = a.query(document, ".js-new-u2f-registration");
		e.classList.add("is-sending"), e.classList.remove("is-showing-error");
		var t = a.query(document, ".js-add-u2f-registration-form").getAttribute("data-app-id");
		if (null == t) throw new Error("invalid appId");
		(function() {
			for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return new Promise(function(e, n) {
				var r;
				(r = window.u2f).register.apply(r, t.concat([function(t) {
					if (null != t.errorCode && 0 !== t.errorCode) {
						var r = new Error("Device registration failed");
						r.code = t.errorCode, n(r)
					} else e(t)
				}]))
			})
		})(t, Vl(), Wl()).then(Kl).catch(function(e) {
			var t = ".js-u2f-other-error";
			switch (e.code) {
				case 4:
					t = ".js-u2f-registered-error";
					break;
				case 5:
					t = ".js-u2f-timeout-error"
			}
			Jl(t)
		})
	}
	l.remoteForm(".js-accept-topic-form", function() {
			var e = ke(regeneratorRuntime.mark(function e(t, n) {
				var r, o, s, i, c, u;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.next = 2, n.html();
						case 2:
							r = a.closest(t, ".js-topic-form-area"), o = a.closest(t, ".js-topic-suggestion"), s = a.query(r, ".js-template"), i = a.query(r, ".js-tag-input-selected-tags"), c = s.cloneNode(!0), u = a.query(o, 'input[name="input[name]"]', HTMLInputElement).value, a.query(c, "input", HTMLInputElement).value = u, a.query(c, ".js-placeholder-tag-name").replaceWith(u), c.classList.remove("d-none", "js-template"), i.appendChild(c), o.remove(), Fl(r), Ol(r), Pl(t);
						case 16:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t, n) {
				return e.apply(this, arguments)
			}
		}()), i.on("click", ".js-repo-topics-form-done", function(e) {
			t(e.target instanceof HTMLElement, "null.js:103"), B.toggleDetailsTarget(e.target), Rl()
		}), l.remoteForm(".js-decline-topic-form", function() {
			var e = ke(regeneratorRuntime.mark(function e(t, n) {
				var r;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.next = 2, n.html();
						case 2:
							Pl(t), r = a.closest(t, ".js-topic-form-area"), a.closest(t, ".js-topic-suggestion").remove(), Fl(r), Ol(r);
						case 8:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t, n) {
				return e.apply(this, arguments)
			}
		}()), l.remoteForm(".js-repo-topics-edit-form", function() {
			var e = ke(regeneratorRuntime.mark(function e(t, n) {
				var r, o, s, i, c, u, l, d, m, f, v, p, h, g, y, b, j, L, w, x;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							for ((r = a.closest(t, ".js-topic-form-area")).classList.remove("errored"), a.query(r, ".js-topic-error").textContent = "", o = !0, s = !1, i = void 0, e.prev = 6, c = r.querySelectorAll(".js-tag-input-tag.invalid-topic")[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) u.value.classList.remove("invalid-topic");
							e.next = 14;
							break;
						case 10:
							e.prev = 10, e.t0 = e.catch(6), s = !0, i = e.t0;
						case 14:
							e.prev = 14, e.prev = 15, !o && c.return && c.return();
						case 17:
							if (e.prev = 17, !s) {
								e.next = 20;
								break
							}
							throw i;
						case 20:
							return e.finish(17);
						case 21:
							return e.finish(14);
						case 22:
							return e.prev = 22, e.next = 25, n.json();
						case 25:
							Pl(t), Fl(r), e.next = 78;
							break;
						case 29:
							if (e.prev = 29, e.t1 = e.catch(22), (l = e.t1.response.json).message && (r.classList.add("errored"), a.query(r, ".js-topic-error").textContent = l.message), !l.invalidTopics) {
								e.next = 78;
								break
							}
							d = a.querySelectorAll(t, ".js-topic-input", HTMLInputElement), m = !0, f = !1, v = void 0, e.prev = 38, p = l.invalidTopics[Symbol.iterator]();
						case 40:
							if (m = (h = p.next()).done) {
								e.next = 64;
								break
							}
							for (g = h.value, y = !0, b = !1, j = void 0, e.prev = 45, L = d[Symbol.iterator](); !(y = (w = L.next()).done); y = !0)(x = w.value).value === g && a.closest(x, ".js-tag-input-tag").classList.add("invalid-topic");
							e.next = 53;
							break;
						case 49:
							e.prev = 49, e.t2 = e.catch(45), b = !0, j = e.t2;
						case 53:
							e.prev = 53, e.prev = 54, !y && L.return && L.return();
						case 56:
							if (e.prev = 56, !b) {
								e.next = 59;
								break
							}
							throw j;
						case 59:
							return e.finish(56);
						case 60:
							return e.finish(53);
						case 61:
							m = !0, e.next = 40;
							break;
						case 64:
							e.next = 70;
							break;
						case 66:
							e.prev = 66, e.t3 = e.catch(38), f = !0, v = e.t3;
						case 70:
							e.prev = 70, e.prev = 71, !m && p.return && p.return();
						case 73:
							if (e.prev = 73, !f) {
								e.next = 76;
								break
							}
							throw v;
						case 76:
							return e.finish(73);
						case 77:
							return e.finish(70);
						case 78:
						case "end":
							return e.stop()
					}
				}, e, this, [
					[6, 10, 14, 22],
					[15, , 17, 21],
					[22, 29],
					[38, 66, 70, 78],
					[45, 49, 53, 61],
					[54, , 56, 60],
					[71, , 73, 77]
				])
			}));
			return function(t, n) {
				return e.apply(this, arguments)
			}
		}()), i.on("tags:changed", ".js-repo-topics-edit-form", function(e) {
			d.submit(c(e.target, HTMLFormElement))
		}), i.on("click", ".js-repo-topics-form-toggle", function(e) {
			var n = a.closest(e.target, ".js-repo-meta-container"),
				r = n.querySelector(".js-repo-topics-form-fragment");
			if (r) {
				r.classList.remove("d-none");
				var o = r.getAttribute("data-url");
				t(o, "`data-url` must exist -- null.js:173"), r.setAttribute("src", o)
			}
			a.query(n, ".js-repository-topics-container").classList.contains("open") ? Nl(!0) : Rl()
		}), i.on("click", ".js-edit-repo-meta-toggle", function(e) {
			var t = a.closest(e.target, ".js-repo-meta-container"),
				n = a.query(t, ".js-repo-meta-edit").classList.contains("open"),
				r = t.querySelector(".js-repository-topics-container");
			r && r.classList.toggle("d-none", n)
		}), i.on("click", ".js-reveal-hidden-topics", function(e) {
			var t = e.target,
				n = c(t.closest(".js-hidden-topics-container"), HTMLElement).querySelector(".js-hidden-topics");
			n && (n.classList.remove("d-none"), t.remove())
		}), s.observe(".js-touch-events", {
			add: function(e) {
				e.addEventListener("click", Dl)
			},
			remove: function(e) {
				e.removeEventListener("click", Dl)
			}
		}), requestIdleCallback(function() {
			var e = Z();
			if (e) {
				var t = "https:" === location.protocol ? "secure" : "";
				document.cookie = "tz=" + encodeURIComponent(e) + "; path=/; " + t
			}
		}),
		function() {
			var e = "chrome" in window && window.navigator.userAgent.indexOf("Edge") < 0;
			if (!("u2f" in window) && e) {
				var t, n = window.u2f = {};
				n.EXTENSION_ID = "kmendfapggjehodndflmmgagdbamhnfd", n.MessageTypes = {
					U2F_REGISTER_REQUEST: "u2f_register_request",
					U2F_REGISTER_RESPONSE: "u2f_register_response",
					U2F_SIGN_REQUEST: "u2f_sign_request",
					U2F_SIGN_RESPONSE: "u2f_sign_response",
					U2F_GET_API_VERSION_REQUEST: "u2f_get_api_version_request",
					U2F_GET_API_VERSION_RESPONSE: "u2f_get_api_version_response"
				}, n.ErrorCodes = {
					OK: 0,
					OTHER_ERROR: 1,
					BAD_REQUEST: 2,
					CONFIGURATION_UNSUPPORTED: 3,
					DEVICE_INELIGIBLE: 4,
					TIMEOUT: 5
				}, n.getMessagePort = function(e) {
					if ("undefined" != typeof chrome && chrome.runtime) {
						var t = {
							type: n.MessageTypes.U2F_SIGN_REQUEST,
							signRequests: []
						};
						chrome.runtime.sendMessage(n.EXTENSION_ID, t, function() {
							chrome.runtime.lastError ? n.getIframePort_(e) : n.getChromeRuntimePort_(e)
						})
					} else n.isAndroidChrome_() ? n.getAuthenticatorPort_(e) : n.isIosChrome_() ? n.getIosPort_(e) : n.getIframePort_(e)
				}, n.isAndroidChrome_ = function() {
					var e = navigator.userAgent;
					return -1 != e.indexOf("Chrome") && -1 != e.indexOf("Android")
				}, n.isIosChrome_ = function() {
					return ["iPhone", "iPad", "iPod"].indexOf(navigator.platform) > -1
				}, n.getChromeRuntimePort_ = function(e) {
					var t = chrome.runtime.connect(n.EXTENSION_ID, {
						includeTlsChannelId: !0
					});
					setTimeout(function() {
						e(new n.WrappedChromeRuntimePort_(t))
					}, 0)
				}, n.getAuthenticatorPort_ = function(e) {
					setTimeout(function() {
						e(new n.WrappedAuthenticatorPort_)
					}, 0)
				}, n.getIosPort_ = function(e) {
					setTimeout(function() {
						e(new n.WrappedIosPort_)
					}, 0)
				}, n.WrappedChromeRuntimePort_ = function(e) {
					this.port_ = e
				}, n.formatSignRequest_ = function(e, r, a, o, s) {
					if (void 0 === t || t < 1.1) {
						for (var i = [], c = 0; c < a.length; c++) i[c] = {
							version: a[c].version,
							challenge: r,
							keyHandle: a[c].keyHandle,
							appId: e
						};
						return {
							type: n.MessageTypes.U2F_SIGN_REQUEST,
							signRequests: i,
							timeoutSeconds: o,
							requestId: s
						}
					}
					return {
						type: n.MessageTypes.U2F_SIGN_REQUEST,
						appId: e,
						challenge: r,
						registeredKeys: a,
						timeoutSeconds: o,
						requestId: s
					}
				}, n.formatRegisterRequest_ = function(e, r, a, o, s) {
					if (void 0 === t || t < 1.1) {
						for (var i = 0; i < a.length; i++) a[i].appId = e;
						var c = [];
						for (i = 0; i < r.length; i++) c[i] = {
							version: r[i].version,
							challenge: a[0],
							keyHandle: r[i].keyHandle,
							appId: e
						};
						return {
							type: n.MessageTypes.U2F_REGISTER_REQUEST,
							signRequests: c,
							registerRequests: a,
							timeoutSeconds: o,
							requestId: s
						}
					}
					return {
						type: n.MessageTypes.U2F_REGISTER_REQUEST,
						appId: e,
						registerRequests: a,
						registeredKeys: r,
						timeoutSeconds: o,
						requestId: s
					}
				}, n.WrappedChromeRuntimePort_.prototype.postMessage = function(e) {
					this.port_.postMessage(e)
				}, n.WrappedChromeRuntimePort_.prototype.addEventListener = function(e, t) {
					var n = e.toLowerCase();
					"message" == n || "onmessage" == n ? this.port_.onMessage.addListener(function(e) {
						t({
							data: e
						})
					}) : console.error("WrappedChromeRuntimePort only supports onMessage")
				}, n.WrappedAuthenticatorPort_ = function() {
					this.requestId_ = -1, this.requestObject_ = null
				}, n.WrappedAuthenticatorPort_.prototype.postMessage = function(e) {
					var t = n.WrappedAuthenticatorPort_.INTENT_URL_BASE_ + ";S.request=" + encodeURIComponent(JSON.stringify(e)) + ";end";
					document.location = t
				}, n.WrappedAuthenticatorPort_.prototype.getPortType = function() {
					return "WrappedAuthenticatorPort_"
				}, n.WrappedAuthenticatorPort_.prototype.addEventListener = function(e, t) {
					if ("message" == e.toLowerCase()) {
						window.addEventListener("message", this.onRequestUpdate_.bind(this, t), !1)
					} else console.error("WrappedAuthenticatorPort only supports message")
				}, n.WrappedAuthenticatorPort_.prototype.onRequestUpdate_ = function(e, t) {
					var n = JSON.parse(t.data),
						r = (n.intentURL, n.errorCode, null);
					n.hasOwnProperty("data") && (r = JSON.parse(n.data)), e({
						data: r
					})
				}, n.WrappedAuthenticatorPort_.INTENT_URL_BASE_ = "intent:#Intent;action=com.google.android.apps.authenticator.AUTHENTICATE", n.WrappedIosPort_ = function() {}, n.WrappedIosPort_.prototype.postMessage = function(e) {
					var t = JSON.stringify(e),
						n = "u2f://auth?" + encodeURI(t);
					location.replace(n)
				}, n.WrappedIosPort_.prototype.getPortType = function() {
					return "WrappedIosPort_"
				}, n.WrappedIosPort_.prototype.addEventListener = function(e, t) {
					"message" !== e.toLowerCase() && console.error("WrappedIosPort only supports message")
				}, n.getIframePort_ = function(e) {
					var t = "chrome-extension://" + n.EXTENSION_ID,
						r = document.createElement("iframe");
					r.src = t + "/u2f-comms.html", r.setAttribute("style", "display:none"), document.body.appendChild(r);
					var a = new MessageChannel,
						o = function(t) {
							"ready" == t.data ? (a.port1.removeEventListener("message", o), e(a.port1)) : console.error('First event on iframe port was not "ready"')
						};
					a.port1.addEventListener("message", o), a.port1.start(), r.addEventListener("load", function() {
						r.contentWindow.postMessage("init", t, [a.port2])
					})
				}, n.EXTENSION_TIMEOUT_SEC = 30, n.port_ = null, n.waitingForPort_ = [], n.reqCounter_ = 0, n.callbackMap_ = {}, n.getPortSingleton_ = function(e) {
					n.port_ ? e(n.port_) : (0 == n.waitingForPort_.length && n.getMessagePort(function(e) {
						for (n.port_ = e, n.port_.addEventListener("message", n.responseHandler_); n.waitingForPort_.length;) n.waitingForPort_.shift()(n.port_)
					}), n.waitingForPort_.push(e))
				}, n.responseHandler_ = function(e) {
					var t = e.data,
						r = t.requestId;
					if (r && n.callbackMap_[r]) {
						var a = n.callbackMap_[r];
						delete n.callbackMap_[r], a(t.responseData)
					} else console.error("Unknown or missing requestId in response.")
				}, n.sign = function(e, r, a, o, s) {
					void 0 === t ? n.getApiVersion(function(i) {
						t = void 0 === i.js_api_version ? 0 : i.js_api_version, console.log("Extension JS API Version: ", t), n.sendSignRequest(e, r, a, o, s)
					}) : n.sendSignRequest(e, r, a, o, s)
				}, n.sendSignRequest = function(e, t, r, a, o) {
					n.getPortSingleton_(function(s) {
						var i = ++n.reqCounter_;
						n.callbackMap_[i] = a;
						var c = void 0 !== o ? o : n.EXTENSION_TIMEOUT_SEC,
							u = n.formatSignRequest_(e, t, r, c, i);
						s.postMessage(u)
					})
				}, n.register = function(e, r, a, o, s) {
					void 0 === t ? n.getApiVersion(function(i) {
						t = void 0 === i.js_api_version ? 0 : i.js_api_version, console.log("Extension JS API Version: ", t), n.sendRegisterRequest(e, r, a, o, s)
					}) : n.sendRegisterRequest(e, r, a, o, s)
				}, n.sendRegisterRequest = function(e, t, r, a, o) {
					n.getPortSingleton_(function(s) {
						var i = ++n.reqCounter_;
						n.callbackMap_[i] = a;
						var c = void 0 !== o ? o : n.EXTENSION_TIMEOUT_SEC,
							u = n.formatRegisterRequest_(e, r, t, c, i);
						s.postMessage(u)
					})
				}, n.getApiVersion = function(e, t) {
					n.getPortSingleton_(function(r) {
						if (r.getPortType) {
							var a;
							switch (r.getPortType()) {
								case "WrappedIosPort_":
								case "WrappedAuthenticatorPort_":
									a = 1.1;
									break;
								default:
									a = 0
							}
							e({
								js_api_version: a
							})
						} else {
							var o = ++n.reqCounter_;
							n.callbackMap_[o] = e;
							var s = {
								type: n.MessageTypes.U2F_GET_API_VERSION_REQUEST,
								timeoutSeconds: void 0 !== t ? t : n.EXTENSION_TIMEOUT_SEC,
								requestId: o
							};
							r.postMessage(s)
						}
					})
				}
			}
		}(), i.on("click", ".js-u2f-auth-retry", function() {
			Ul()
		}), s.observe(".js-u2f-auth-form-body", function(e) {
			e.classList.toggle("unavailable", !Bl()), Bl() && Ul()
		}), E(document).on("ajaxSend", ".js-u2f-registration-delete", function() {
			this.closest(".js-u2f-registration").classList.add("is-sending")
		}), E(document).on("ajaxSuccess", ".js-u2f-registration-delete", function(e, t) {
			$l(t.responseJSON), this.closest(".js-u2f-registration").remove()
		}), i.on("click", ".js-add-u2f-registration-link", function() {
			var e = a.query(document, ".js-new-u2f-registration");
			e.classList.add("is-active"), e.classList.remove("is-showing-error"), a.query(document, ".js-u2f-registration-nickname-field", HTMLInputElement).focus()
		}), i.on("click", ".js-u2f-register-retry", function() {
			Gl()
		}), i.on("submit", ".js-add-u2f-registration-form", function(e) {
			e.preventDefault(), Gl()
		}), s.observe(".js-u2f-box", function(e) {
			e.classList.toggle("available", Bl())
		}), i.on("socket:message", ".js-updatable-content", function(e) {
			t(e instanceof CustomEvent, "null.js:18");
			var n = e.detail.data;
			if (this === e.target) {
				var r = n && n.wait;
				null == r ? j.updateContent(e.target) : setTimeout(function() {
					t(e.target instanceof HTMLElement, "null.js:28"), j.updateContent(e.target)
				}, r)
			}
		}), i.on("upload:setup", ".js-upload-avatar-image", function(e) {
			t(e instanceof CustomEvent, "null.js:9");
			var n = e.detail.policyRequest,
				r = e.currentTarget.getAttribute("data-alambic-organization"),
				a = e.currentTarget.getAttribute("data-alambic-owner-type"),
				o = e.currentTarget.getAttribute("data-alambic-owner-id");
			r && n.body.append("organization_id", r), a && n.body.append("owner_type", a), o && n.body.append("owner_id", o)
		}), i.on("upload:complete", ".js-upload-avatar-image", function(e) {
			t(e instanceof CustomEvent, "null.js:26");
			var n = "/settings/avatars/" + e.detail.result.id;
			te(ke(regeneratorRuntime.mark(function e() {
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.t0 = te, e.next = 3, p.fetchText(n);
						case 3:
							e.t1 = e.sent, (0, e.t0)(e.t1);
						case 5:
						case "end":
							return e.stop()
					}
				}, e, this)
			})))
		});
	var Yl = function() {
			function e(t) {
				Ee(this, e), this.dataview = new DataView(t), this.pos = 0
			}
			return Te(e, null, [{
				key: "fromFile",
				value: function(n) {
					return new Promise(function(r, a) {
						var o = new FileReader;
						o.onload = function() {
							t(o.result instanceof ArrayBuffer, "null.js:38"), r(new e(o.result))
						}, o.onerror = function() {
							a(o.error)
						}, o.readAsArrayBuffer(n)
					})
				}
			}]), Te(e, [{
				key: "advance",
				value: function(e) {
					this.pos += e
				}
			}, {
				key: "readInt",
				value: function(e) {
					var t = this,
						n = function() {
							switch (e) {
								case 1:
									return t.dataview.getUint8(t.pos);
								case 2:
									return t.dataview.getUint16(t.pos);
								case 4:
									return t.dataview.getUint32(t.pos);
								default:
									throw new Error("bytes parameter must be 1, 2 or 4")
							}
						}();
					return this.advance(e), n
				}
			}, {
				key: "readChar",
				value: function() {
					return this.readInt(1)
				}
			}, {
				key: "readShort",
				value: function() {
					return this.readInt(2)
				}
			}, {
				key: "readLong",
				value: function() {
					return this.readInt(4)
				}
			}, {
				key: "readString",
				value: function(e) {
					for (var t = [], n = 0; n < e; n++) t.push(String.fromCharCode(this.readChar()));
					return t.join("")
				}
			}, {
				key: "scan",
				value: function(e) {
					if (2303741511 !== this.readLong()) throw new Error("invalid PNG");
					for (this.advance(4);;) {
						var t = this.readLong(),
							n = this.readString(4),
							r = this.pos + t + 4;
						if (!1 === e.call(this, n, t) || "IEND" === n) break;
						this.pos = r
					}
				}
			}]), e
		}(),
		Xl = function() {
			var e = ke(regeneratorRuntime.mark(function e(t) {
				var n, r, a;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if ("image/png" === t.type) {
								e.next = 2;
								break
							}
							return e.abrupt("return", null);
						case 2:
							return n = t.slice(0, 10240, t.type), e.next = 5, Yl.fromFile(n);
						case 5:
							return r = e.sent, a = {
								width: 0,
								height: 0,
								ppi: 1
							}, r.scan(function(e) {
								switch (e) {
									case "IHDR":
										return a.width = this.readLong(), a.height = this.readLong(), !0;
									case "pHYs":
										var t = this.readLong(),
											n = this.readLong(),
											r = void 0;
										return 1 === this.readChar() && (r = .0254), r && (a.ppi = Math.round((t + n) / 2 * r)), !1;
									case "IDAT":
										return !1
								}
								return !0
							}), e.abrupt("return", a);
						case 9:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}();

	function Ql(e) {
		return (Zl(e) ? "!" : "") + "[Uploading " + e.name + "…]()"
	}

	function Zl(e) {
		return ["image/gif", "image/png", "image/jpg", "image/jpeg"].indexOf(e.type) > -1
	}

	function ed(e) {
		return e.textContent.trim().replace(/\|/g, "\\|").replace(/\n/g, " ") || " "
	}

	function td(e) {
		var t, n = Array.from(e.querySelectorAll("tr")),
			r = (t = n.shift(), Array.from(t.querySelectorAll("td, th")).map(ed)),
			a = r.map(function() {
				return "--"
			});
		return "\n" + (r.join(" | ") + "\n" + a.join(" | ") + "\n") + n.map(function(e) {
			return Array.from(e.querySelectorAll("td")).map(ed).join(" | ")
		}).join("\n") + "\n\n"
	}

	function nd(e) {
		var t = a.closest(e, "form", HTMLFormElement);
		return a.query(t, "#release_id", HTMLInputElement).value
	}
	i.on("upload:setup", ".js-upload-markdown-image", function(e) {
		t(e instanceof CustomEvent, "null.js:49");
		var n = a.query(e.currentTarget, ".js-comment-field", HTMLTextAreaElement);
		n.setCustomValidity("uploading"), N.insertText(n, Ql(e.detail.file) + "\n")
	}), i.on("upload:complete", ".js-upload-markdown-image", function() {
		var e = ke(regeneratorRuntime.mark(function e(n) {
			var r, o, s, i, c;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return c = function(e) {
							var t = "[" + r.file.name + "](" + r.policy.asset.href + ")";
							if (Zl(r.file)) {
								var n = function(e) {
										return e.toLowerCase().replace(/[^a-z0-9\-_]+/gi, ".").replace(/\.{2,}/g, ".").replace(/^\.|\.$/gi, "")
									}(r.policy.asset.name).replace(/\.[^.]+$/, "").replace(/\./g, " "),
									a = r.policy.asset.href;
								if (e && 144 === e.ppi) t = '<img width="' + Math.round(e.width / 2) + '" alt="' + n + '" src="' + a + '">';
								else t = "![" + n + "](" + a + ")"
							}
							s.setCustomValidity(""), N.replaceText(s, i, t)
						}, t(n instanceof CustomEvent, "null.js:56"), r = n.detail, o = n.currentTarget, s = a.query(o, ".js-comment-field", HTMLTextAreaElement), i = Ql(r.file), e.prev = 6, e.t0 = c, e.next = 10, Xl(r.file);
					case 10:
						e.t1 = e.sent, (0, e.t0)(e.t1), e.next = 18;
						break;
					case 14:
						e.prev = 14, e.t2 = e.catch(6), c(), setTimeout(function() {
							throw e.t2
						});
					case 18:
					case "end":
						return e.stop()
				}
			}, e, this, [
				[6, 14]
			])
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}()), i.on("upload:error", ".js-upload-markdown-image", function(e) {
		t(e instanceof CustomEvent, "null.js:91");
		var n = a.query(e.currentTarget, ".js-comment-field", HTMLTextAreaElement),
			r = Ql(e.detail.file);
		n.setCustomValidity(""), N.replaceText(n, r, "")
	}), i.on("upload:invalid", ".js-upload-markdown-image", function(e) {
		t(e instanceof CustomEvent, "null.js:99");
		var n = a.query(e.currentTarget, ".js-comment-field", HTMLTextAreaElement),
			r = Ql(e.detail.file);
		n.setCustomValidity(""), N.replaceText(n, r, "")
	}), i.on("upload:drop:links", ".js-upload-markdown-image", function(e) {
		t(e instanceof CustomEvent, "null.js:115");
		var n, r = a.query(e.currentTarget, ".js-comment-field", HTMLTextAreaElement),
			o = !0,
			s = !1,
			i = void 0;
		try {
			for (var c, u = e.detail.links[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
				var l = c.value,
					d = (void 0, n = l.split(".").pop().toLowerCase(), ["gif", "png", "jpg", "jpeg"].indexOf(n) > -1 ? "\n![](" + l + ")\n" : l);
				N.insertText(r, d)
			}
		} catch (e) {
			s = !0, i = e
		} finally {
			try {
				!o && u.return && u.return()
			} finally {
				if (s) throw i
			}
		}
	}), i.on("upload:drop:text", ".js-upload-markdown-image", function(e) {
		t(e instanceof CustomEvent, "null.js:124");
		var n = a.query(e.currentTarget, ".js-comment-field", HTMLTextAreaElement);
		N.insertText(n, e.detail.text)
	}), i.on("upload:drop:table", ".js-upload-markdown-image", function(e) {
		t(e instanceof CustomEvent, "null.js:161");
		var n = a.query(e.currentTarget, ".js-comment-field", HTMLTextAreaElement);
		N.insertText(n, td(e.detail.node))
	}), i.on("upload:setup", ".js-upload-marketplace-listing-screenshot", function(e) {
		t(e instanceof CustomEvent, "null.js:9");
		var n = e.detail.policyRequest,
			r = e.currentTarget.getAttribute("data-marketplace-listing-id");
		r && n.body.append("marketplace_listing_id", r)
	}), i.on("upload:complete", ".js-upload-marketplace-listing-screenshot", function() {
		var e = ke(regeneratorRuntime.mark(function e(n) {
			var r, o, s;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return r = n.currentTarget.getAttribute("data-screenshots-url"), t(r, "`data-screenshots-url` must exist -- null.js:21"), o = a.query(document, ".js-marketplace-listing-screenshots-container"), e.next = 5, p.fetchSafeDocumentFragment(document, r);
					case 5:
						s = e.sent, o.innerHTML = "", o.appendChild(s);
					case 8:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}()), i.on("upload:setup", ".js-upload-marketplace-listing-hero-card-background", function(e) {
		t(e instanceof CustomEvent, "null.js:8");
		var n = e.detail.policyRequest,
			r = e.currentTarget.getAttribute("data-marketplace-listing-id");
		r && n.body.append("marketplace_listing_id", r)
	}), i.on("upload:complete", ".js-upload-marketplace-listing-hero-card-background", function(e) {
		t(e instanceof CustomEvent, "null.js:19");
		var n = e.detail,
			r = n.policy;
		a.query(document, ".js-marketplace-listing-hero-card-background-id", HTMLInputElement).value = r.asset.id || n.result.id;
		var o = a.query(document, ".js-hero-listing-container"),
			s = r.asset.href || n.result.href;
		o.style.backgroundImage = "url(" + s + ")"
	}), i.on("click", ".js-release-remove-file", function(e) {
		var t = a.closest(e.currentTarget, ".js-release-file");
		t.classList.add("delete"), a.query(t, "input.destroy", HTMLInputElement).value = "true"
	}), i.on("click", ".js-release-undo-remove-file", function(e) {
		var t = a.closest(e.currentTarget, ".js-release-file");
		t.classList.remove("delete"), a.query(t, "input.destroy", HTMLInputElement).value = ""
	});
	var rd = null;

	function ad(e, t) {
		var n = c(t.body, FormData);
		n.append("release_id", nd(e));
		var r = a.querySelectorAll(document, ".js-releases-field .js-release-file.delete .id", HTMLInputElement);
		if (r.length) {
			var o = r.map(function(e) {
				return e.value
			});
			n.append("deletion_candidates", o.join(","))
		}
	}
	i.on("release:saved", ".js-release-form", function(e) {
		var t = e.currentTarget;
		rd = null;
		var n = !1,
			r = !0,
			o = !1,
			s = void 0;
		try {
			for (var i, c = t.querySelectorAll(".js-releases-field .js-release-file")[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
				var u = i.value;
				u.classList.contains("delete") ? u.remove() : u.classList.contains("js-template") || (n = !0)
			}
		} catch (e) {
			o = !0, s = e
		} finally {
			try {
				!r && c.return && c.return()
			} finally {
				if (o) throw s
			}
		}
		var l = a.query(t, ".js-releases-field");
		l.classList.toggle("not-populated", !n), l.classList.toggle("is-populated", n)
	}), i.on("upload:setup", ".js-upload-release-file", function(e) {
		t(e instanceof CustomEvent, "null.js:60");
		var n = e.detail,
			r = n.policyRequest,
			o = n.preprocess,
			s = e.currentTarget;
		if (nd(s)) ad(s, r);
		else {
			if (!rd) {
				var i = a.query(document, ".js-save-draft", HTMLButtonElement);
				rd = Cu(i)
			}
			var c = ad.bind(null, s, r);
			o.push(rd.then(c))
		}
	}), i.on("upload:start", ".js-upload-release-file", function(e) {
		t(e instanceof CustomEvent, "null.js:83");
		var n = e.detail.policy;
		a.query(e.currentTarget, ".js-upload-meter").classList.remove("d-none");
		var r = n.asset.replaced_asset;
		if (r) {
			var o = !0,
				s = !1,
				i = void 0;
			try {
				for (var c, u = a.querySelectorAll(document, ".js-releases-field .js-release-file .id", HTMLInputElement)[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
					var l = c.value;
					Number(l.value) === r && a.closest(l, ".js-release-file").remove()
				}
			} catch (e) {
				s = !0, i = e
			} finally {
				try {
					!o && u.return && u.return()
				} finally {
					if (s) throw i
				}
			}
		}
	}), i.on("upload:complete", ".js-upload-release-file", function(e) {
		t(e instanceof CustomEvent, "null.js:100");
		var n = e.detail,
			r = n.policy,
			o = a.query(document, ".js-releases-field"),
			s = a.query(o, ".js-template").cloneNode(!0);
		s.classList.remove("template", "js-template"), a.query(s, "input.id", HTMLInputElement).value = r.asset.id || n.result.id;
		var i = r.asset.name || r.asset.href.split("/").pop(),
			c = !0,
			u = !1,
			l = void 0;
		try {
			for (var d, m = s.querySelectorAll(".filename")[Symbol.iterator](); !(c = (d = m.next()).done); c = !0) {
				var f = d.value;
				f instanceof HTMLInputElement ? f.value = i : f.textContent = i
			}
		} catch (e) {
			u = !0, l = e
		} finally {
			try {
				!c && m.return && m.return()
			} finally {
				if (u) throw l
			}
		}
		var v = r.asset.size ? "(" + (r.asset.size / 1048576).toFixed(2) + " MB)" : "";
		a.query(s, ".filesize").textContent = v, o.appendChild(s), o.classList.remove("not-populated"), o.classList.add("is-populated"), a.query(e.currentTarget, ".js-upload-meter").classList.add("d-none")
	}), i.on("upload:progress", ".js-upload-release-file", function(e) {
		t(e instanceof CustomEvent, "null.js:133"), a.query(e.currentTarget, ".js-upload-meter").style.width = e.detail.percent + "%"
	});
	var od = function() {
			var e = ke(regeneratorRuntime.mark(function e(t) {
				var n;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return n = t.getAttribute("data-redirect-url"), e.prev = 1, e.next = 4, p.fetchPoll(t.getAttribute("data-poll-url"));
						case 4:
							window.location = n, e.next = 11;
							break;
						case 7:
							e.prev = 7, e.t0 = e.catch(1), a.query(document, ".js-manifest-ready-check").classList.add("d-none"), a.query(document, ".js-manifest-ready-check-failed").classList.remove("d-none");
						case 11:
						case "end":
							return e.stop()
					}
				}, e, this, [
					[1, 7]
				])
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}(),
		sd = null,
		id = new WeakMap;

	function cd(e, t) {
		var n = a.closest(e, ".js-upload-manifest-file-container"),
			r = a.query(n, ".js-upload-progress");
		r.classList.add("active"), e.classList.add("is-progress-bar");
		var o = a.query(r, ".js-upload-meter-text");
		a.query(o, ".js-upload-meter-range-start").textContent = String(t.batch.uploaded + 1), a.query(o, ".js-upload-meter-range-end").textContent = String(t.batch.size)
	}

	function ud(e) {
		e.classList.remove("is-progress-bar");
		var t = a.closest(e, ".js-upload-manifest-file-container");
		a.query(t, ".js-upload-progress").classList.remove("active"), a.query(t, ".js-upload-meter-text .js-upload-meter-filename").textContent = ""
	}

	function ld() {
		var e = void 0,
			n = void 0,
			r = new Promise(function(t, r) {
				e = t, n = r
			});
		return t(e, "null.js:139"), t(n, "null.js:140"), [r, e, n]
	}

	function dd(e) {
		return e._path ? e._path + "/" + e.name : e.name
	}

	function md(e) {
		ud(e.currentTarget)
	}
	i.on("upload:drop:setup", ".js-upload-manifest-file", function(e) {
		t(e instanceof CustomEvent, "null.js:54");
		var n = e.detail.files,
			r = parseInt(e.currentTarget.getAttribute("data-directory-upload-max-files"), 10);
		n.length > r && (e.preventDefault(), e.currentTarget.classList.add("is-too-many"))
	}), i.on("upload:drop:setup", ".js-upload-manifest-tree-view", function(e) {
		t(e instanceof CustomEvent, "null.js:64"), e.preventDefault();
		var n = e.detail.upload,
			r = a.query(document, "#js-repo-pjax-container");
		r.addEventListener("pjax:success", function() {
			n(r.querySelector(".js-uploadable-container"))
		}, {
			once: !0
		});
		var o = e.currentTarget.getAttribute("data-drop-url");
		t(o, "null.js:80"), ne({
			url: o,
			container: r
		})
	}), i.on("upload:setup", ".js-upload-manifest-file", function() {
		var e = ke(regeneratorRuntime.mark(function e(n) {
			var r, o, s, i, u, l, d, m, f, v, h, g, y;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						if (u = function() {
								o.body.append("upload_manifest_id", id.get(i))
							}, t(n instanceof CustomEvent, "null.js:85"), r = n.detail, o = r.policyRequest, s = r.preprocess, cd(i = n.currentTarget, n.detail), !id.get(i)) {
							e.next = 8;
							break
						}
						return u(), e.abrupt("return");
					case 8:
						if (!sd) {
							e.next = 11;
							break
						}
						return s.push(sd.then(u)), e.abrupt("return");
					case 11:
						return l = a.closest(i, ".js-upload-manifest-file-container"), d = l.querySelector(".js-upload-manifest-form"), sd = p.fetchJSON(d.action, {
							method: d.method,
							body: new FormData(d)
						}), m = ld(), f = Ae(m, 2), v = f[0], h = f[1], s.push(v.then(u)), e.next = 18, sd;
					case 18:
						g = e.sent, y = a.query(document, ".js-manifest-commit-form", HTMLFormElement), c(y.elements.namedItem("manifest_id"), HTMLInputElement).value = g.upload_manifest.id, id.set(i, g.upload_manifest.id), sd = null, h();
					case 24:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t) {
			return e.apply(this, arguments)
		}
	}()), i.on("upload:start", ".js-upload-manifest-file", function(e) {
		t(e instanceof CustomEvent, "null.js:153");
		var n = e.detail,
			r = a.closest(e.currentTarget, ".js-upload-manifest-file-container"),
			o = a.query(r, ".js-upload-progress"),
			s = a.query(o, ".js-upload-meter-text");
		a.query(s, ".js-upload-meter-range-start").textContent = n.batch.uploaded + 1, a.query(s, ".js-upload-meter-filename").textContent = dd(n.file)
	}), i.on("upload:complete", ".js-upload-manifest-file", function(e) {
		t(e instanceof CustomEvent, "null.js:168");
		var n = e.detail,
			r = a.query(document, ".js-manifest-commit-file-template", HTMLTableElement).rows[0].cloneNode(!0);
		a.query(r, ".name").textContent = dd(n.file);
		var o = n.policy.asset.id || n.result.id,
			s = a.query(r, ".js-remove-manifest-file-form", HTMLFormElement);
		c(s.elements.namedItem("file_id"), HTMLInputElement).value = o;
		var i = a.query(document, ".js-manifest-file-list");
		i.classList.remove("d-none"), e.currentTarget.classList.add("is-file-list"), a.query(document, ".js-upload-progress").classList.add("is-file-list"), a.query(i, ".js-manifest-file-list-root").appendChild(r), n.batch.isFinished() && ud(e.currentTarget)
	}), i.on("upload:progress", ".js-upload-manifest-file", function(e) {
		t(e instanceof CustomEvent, "null.js:201");
		var n = e.detail,
			r = a.closest(e.currentTarget, ".js-upload-manifest-file-container");
		a.query(r, ".js-upload-meter").style.width = n.batch.percent() + "%"
	}), i.on("upload:error", ".js-upload-manifest-file", md), i.on("upload:invalid", ".js-upload-manifest-file", md), l.remoteForm(".js-remove-manifest-file-form", function() {
		var e = ke(regeneratorRuntime.mark(function e(t, n) {
			var r;
			return regeneratorRuntime.wrap(function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2, n.html();
					case 2:
						r = a.closest(t, ".js-manifest-file-list-root"), a.closest(t, ".js-manifest-file-entry").remove(), r.hasChildNodes() || (a.closest(r, ".js-manifest-file-list").classList.add("d-none"), a.query(document, ".js-upload-manifest-file").classList.remove("is-file-list"), a.query(document, ".js-upload-progress").classList.remove("is-file-list"));
					case 6:
					case "end":
						return e.stop()
				}
			}, e, this)
		}));
		return function(t, n) {
			return e.apply(this, arguments)
		}
	}()), s.observe(".js-manifest-ready-check", {
		initialize: function(e) {
			od(e)
		}
	});
	var fd = function() {
			var e = ke(regeneratorRuntime.mark(function e(t, n) {
				var r, a, o, s, c, u, l, d, m, f, v, h, g;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							r = !0, a = !1, o = void 0, e.prev = 3, s = t.files[Symbol.iterator]();
						case 5:
							if (r = (c = s.next()).done) {
								e.next = 37;
								break
							}
							if (u = c.value, l = kd(u, n), d = [], i.fire(n, "upload:setup", {
									batch: t,
									file: u,
									policyRequest: l.options,
									preprocess: d
								})) {
								e.next = 11;
								break
							}
							return e.abrupt("return");
						case 11:
							return e.prev = 11, e.next = 14, Promise.all(d);
						case 14:
							return e.next = 16, p.fetchJSON(l.url, l.options);
						case 16:
							m = e.sent, wd.upload(Td(t, u, m, n)), e.next = 34;
							break;
						case 20:
							if (e.prev = 20, e.t0 = e.catch(11), i.fire(n, "upload:invalid", {
									batch: t,
									file: u,
									error: e.t0
								}), !e.t0.response) {
								e.next = 32;
								break
							}
							return e.next = 26, e.t0.response.text();
						case 26:
							f = e.sent, v = e.t0.response.status, h = Ed({
								status: v,
								body: f
							}, u), Ld(n, h), e.next = 34;
							break;
						case 32:
							g = Ed({
								status: 0,
								body: ""
							}), Ld(n, g);
						case 34:
							r = !0, e.next = 5;
							break;
						case 37:
							e.next = 43;
							break;
						case 39:
							e.prev = 39, e.t1 = e.catch(3), a = !0, o = e.t1;
						case 43:
							e.prev = 43, e.prev = 44, !r && s.return && s.return();
						case 46:
							if (e.prev = 46, !a) {
								e.next = 49;
								break
							}
							throw o;
						case 49:
							return e.finish(46);
						case 50:
							return e.finish(43);
						case 51:
						case "end":
							return e.stop()
					}
				}, e, this, [
					[3, 39, 43, 51],
					[11, 20],
					[44, , 46, 50]
				])
			}));
			return function(t, n) {
				return e.apply(this, arguments)
			}
		}(),
		vd = function() {
			var e = ke(regeneratorRuntime.mark(function e(t, n) {
				var r, a;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (!n.getFilesAndDirectories) {
								e.next = 8;
								break
							}
							return e.next = 3, n.getFilesAndDirectories();
						case 3:
							return r = e.sent, a = Cd(r).map(function(e) {
								return vd(n.path, e)
							}), e.abrupt("return", Promise.all(a));
						case 8:
							return n._path = t, e.abrupt("return", Promise.resolve(n));
						case 10:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t, n) {
				return e.apply(this, arguments)
			}
		}(),
		pd = function() {
			var e = ke(regeneratorRuntime.mark(function e(t) {
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.t0 = Hd, e.next = 3, vd("", t);
						case 3:
							return e.t1 = e.sent, e.abrupt("return", (0, e.t0)(e.t1));
						case 5:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}(),
		hd = function() {
			var e = ke(regeneratorRuntime.mark(function e(t, n) {
				var r, a, o;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (!n.isDirectory) {
								e.next = 8;
								break
							}
							return e.next = 3, _d(n);
						case 3:
							return r = e.sent, a = Cd(r).map(function(e) {
								return hd(n.fullPath, e)
							}), e.abrupt("return", Promise.all(a));
						case 8:
							return e.next = 10, Id(n);
						case 10:
							return (o = e.sent)._path = t, e.abrupt("return", o);
						case 13:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t, n) {
				return e.apply(this, arguments)
			}
		}(),
		gd = function() {
			var e = ke(regeneratorRuntime.mark(function e(t) {
				var n, r;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return n = Array.from(t.items).map(function(e) {
								return e.webkitGetAsEntry()
							}), r = Cd(n).map(function(e) {
								return hd("", e)
							}), e.t0 = Hd, e.next = 5, Promise.all(r);
						case 5:
							return e.t1 = e.sent, e.abrupt("return", (0, e.t0)(e.t1));
						case 7:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t) {
				return e.apply(this, arguments)
			}
		}(),
		yd = function() {
			var e = ke(regeneratorRuntime.mark(function e(t, n) {
				var r, a, o;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return r = null, r = t.hasAttribute("data-directory-upload") && n.getFilesAndDirectories ? pd(n) : t.hasAttribute("data-directory-upload") && Rd(n) ? gd(n) : Promise.resolve(Cd(Array.from(n.files))), e.next = 4, r;
						case 4:
							if ((a = e.sent).length) {
								e.next = 8;
								break
							}
							return Ld(t, "is-hidden-file"), e.abrupt("return");
						case 8:
							o = Fd.bind(null, a), !i.fire(t, "upload:drop:setup", {
								upload: o,
								files: a
							}) || Fd(a, t);
						case 11:
						case "end":
							return e.stop()
					}
				}, e, this)
			}));
			return function(t, n) {
				return e.apply(this, arguments)
			}
		}();

	function bd(e) {
		var t = a.closest(e, "form", HTMLFormElement);
		return c(t.elements.namedItem("authenticity_token"), HTMLInputElement).value
	}
	var jd = ["is-default", "is-uploading", "is-bad-file", "is-duplicate-filename", "is-too-big", "is-too-many", "is-hidden-file", "is-failed", "is-bad-dimensions", "is-empty", "is-bad-permissions", "is-repository-required", "is-bad-format"];

	function Ld(e, t) {
		var n;
		(n = e.classList).remove.apply(n, jd), e.classList.add(t)
	}
	var wd = new(function() {
			function e() {
				Ee(this, e), this.uploads = [], this.busy = !1
			}
			return Te(e, [{
				key: "upload",
				value: function(e) {
					this.uploads.push(e), this.process()
				}
			}, {
				key: "process",
				value: function() {
					var e = this;
					if (!this.busy && 0 !== this.uploads.length) {
						var t = this.uploads.shift();
						this.busy = !0;
						var n = new XMLHttpRequest;
						for (var r in n.open("POST", t.to, !0), t.header) n.setRequestHeader(r, t.header[r]);
						n.onloadstart = function() {
							t.start()
						}, n.onload = function() {
							204 === n.status ? t.complete({}) : 201 === n.status ? t.complete(JSON.parse(n.responseText)) : t.error({
								status: n.status,
								body: n.responseText
							}), e.busy = !1, e.process()
						}, n.onerror = function() {
							t.error({
								status: 0,
								body: ""
							}), e.busy = !1, e.uploads = []
						}, n.upload.onprogress = function(e) {
							if (e.lengthComputable) {
								var n = Math.round(e.loaded / e.total * 100);
								t.progress(n)
							}
						};
						var a = new FormData;
						for (var o in t.sameOrigin && a.append("authenticity_token", t.csrf), t.form) a.append(o, t.form[o]);
						a.append("file", t.file), n.send(a)
					}
				}
			}]), e
		}()),
		xd = function() {
			function e(t) {
				Ee(this, e), this.files = Array.from(t), this.percentages = this.files.map(function() {
					return 0
				}), this.size = this.files.length, this.total = this.files.reduce(function(e, t) {
					return e + t.size
				}, 0), this.uploaded = 0
			}
			return Te(e, [{
				key: "percent",
				value: function() {
					var e = this,
						t = this.files.map(function(t, n) {
							return t.size * e.percentages[n] / 100
						}).reduce(function(e, t) {
							return e + t
						});
					return Math.round(t / this.total * 100)
				}
			}, {
				key: "progress",
				value: function(e, t) {
					var n = this.files.indexOf(e);
					this.percentages[n] = t
				}
			}, {
				key: "completed",
				value: function() {
					this.uploaded += 1
				}
			}, {
				key: "isFinished",
				value: function() {
					return this.uploaded === this.files.length
				}
			}]), e
		}();

	function kd(e, n) {
		var r = n.getAttribute("data-upload-policy-url");
		t(r, "null.js:302");
		var a = n.getAttribute("data-upload-repository-id"),
			o = n.getAttribute("data-upload-policy-authenticity-token");
		null == o && (o = bd(n));
		var s = new FormData;
		return s.append("name", e.name), s.append("size", String(e.size)), s.append("content_type", e.type), s.append("authenticity_token", o), a && s.append("repository_id", a), e._path && s.append("directory", String(e._path)), {
			url: r,
			options: {
				method: "post",
				body: s,
				headers: {}
			}
		}
	}

	function Ed(e, t) {
		if (400 === e.status) return "is-bad-file";
		if (422 !== e.status) return "is-failed";
		var n = JSON.parse(e.body);
		if (!n || !n.errors) return "is-failed";
		var r = !0,
			a = !1,
			o = void 0;
		try {
			for (var s, i = n.errors[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
				var c = s.value;
				switch (c.field) {
					case "size":
						var u = t ? t.size : null;
						return null != u && 0 === parseInt(u) ? "is-empty" : "is-too-big";
					case "file_count":
						return "is-too-many";
					case "width":
					case "height":
						return "is-bad-dimensions";
					case "name":
						return "already_exists" === c.code ? "is-duplicate-filename" : "is-bad-file";
					case "content_type":
						return "is-bad-file";
					case "uploader_id":
						return "is-bad-permissions";
					case "repository_id":
						return "is-repository-required";
					case "format":
						return "is-bad-format"
				}
			}
		} catch (e) {
			a = !0, o = e
		} finally {
			try {
				!r && i.return && i.return()
			} finally {
				if (a) throw o
			}
		}
		return "is-failed"
	}

	function Td(e, t, n, r) {
		var a = n.upload_authenticity_token;
		null == a && (a = bd(r));
		var o = n.asset_upload_authenticity_token;
		return null == o && (o = bd(r)), {
			file: t,
			to: n.upload_url,
			form: n.form,
			header: n.header,
			sameOrigin: n.same_origin,
			csrf: a,
			start: function() {
				Ld(r, "is-uploading"), i.fire(r, "upload:start", {
					batch: e,
					file: t,
					policy: n
				})
			},
			progress: function(n) {
				e.progress(t, n), i.fire(r, "upload:progress", {
					batch: e,
					file: t,
					percent: n
				})
			},
			complete: function(a) {
				if (e.completed(), a && a.href && (n.asset || (n.asset = {}), n.asset.href = a.href), n.asset_upload_url && n.asset_upload_url.length > 0) {
					var s = new FormData;
					s.append("authenticity_token", o), p.fetchJSON(n.asset_upload_url, {
						method: "put",
						body: s
					})
				}
				i.fire(r, "upload:complete", {
					batch: e,
					file: t,
					policy: n,
					result: a
				}), Ld(r, "is-default")
			},
			error: function(a) {
				i.fire(r, "upload:error", {
					batch: e,
					file: t,
					policy: n
				});
				var o = Ed(a);
				Ld(r, o)
			}
		}
	}

	function Sd(e) {
		return Array.from(e.types).indexOf("Files") >= 0
	}

	function qd(e) {
		return Array.from(e.types).indexOf("text/uri-list") >= 0
	}

	function Ad(e) {
		return Array.from(e.types).indexOf("text/plain") >= 0
	}

	function Md(e) {
		if (-1 !== Array.from(e.types).indexOf("text/html")) {
			var t = e.getData("text/html");
			if (/<table/i.test(t)) {
				var n = C.parseHTML(document, t).querySelector("table");
				if (n && !n.closest(".js-comment")) return /\b(js|blob|diff)-./.test(n.className) ? null : n
			}
		}
	}

	function Hd(e) {
		return e.reduce(function(e, t) {
			return e.concat(Array.isArray(t) ? Hd(t) : t)
		}, [])
	}

	function Cd(e) {
		return Array.from(e).filter(function(e) {
			return ! function(e) {
				return e.name.startsWith(".")
			}(e)
		})
	}

	function Id(e) {
		return new Promise(function(t, n) {
			e.file(t, n)
		})
	}

	function _d(e) {
		return new Promise(function(t, n) {
			e.createReader().readEntries(t, n)
		})
	}

	function Rd(e) {
		return e.items && Array.from(e.items).some(function(e) {
			return e.webkitGetAsEntry && e.webkitGetAsEntry().isDirectory
		})
	}

	function Fd(e, t) {
		var n = new xd(e);
		fd(n, t)
	}

	function Pd(e) {
		e.preventDefault()
	}

	function Od(e) {
		e.preventDefault()
	}
	var Nd = null;

	function Dd(e) {
		if (!Kd) {
			var t = c(e.currentTarget, Element);
			Nd && clearTimeout(Nd), Nd = setTimeout(function() {
				return t.classList.remove("dragover")
			}, 200);
			var n = e.dataTransfer;
			n && (n.dropEffect = function(e) {
				return Sd(e) ? "copy" : qd(e) ? "link" : Ad(e) ? "copy" : "none"
			}(n)), t.classList.add("dragover"), e.stopPropagation(), e.preventDefault()
		}
	}

	function Bd(e) {
		e.dataTransfer && (e.dataTransfer.dropEffect = "none"), c(e.currentTarget, Element).classList.remove("dragover"), e.stopPropagation(), e.preventDefault()
	}

	function Ud(e) {
		e.target instanceof Element && e.target.classList.contains("js-document-dropzone") && c(e.currentTarget, Element).classList.remove("dragover")
	}

	function zd(e) {
		var n = document.body;
		t(n, "null.js:676");
		var r = c(e.currentTarget, Element);
		r.classList.remove("dragover"), n.classList.remove("dragover");
		var a = e.dataTransfer;
		t(a, "null.js:684");
		var o = Md(a);
		if (Sd(a)) yd(r, a);
		else if (qd(a)) {
			var s = (a.getData("text/uri-list") || "").split("\r\n");
			s.length && i.fire(r, "upload:drop:links", {
				links: s
			})
		} else o ? i.fire(r, "upload:drop:table", {
			node: o
		}) : Ad(a) && i.fire(r, "upload:drop:text", {
			text: a.getData("text/plain")
		});
		e.stopPropagation(), e.preventDefault()
	}

	function Wd(e) {
		if (e.clipboardData) {
			var t = Md(e.clipboardData);
			if (t) return i.fire(e.currentTarget, "upload:drop:table", {
				node: t
			}), void e.preventDefault();
			if (e.clipboardData.items) {
				var n = Array.from(e.clipboardData.items).map(function(e) {
					return [e, function(e) {
						switch (e) {
							case "image/gif":
								return "image.gif";
							case "image/png":
								return "image.png";
							case "image/jpeg":
								return "image.jpg"
						}
					}(e.type)]
				}).filter(function(e) {
					return e[1]
				}).shift();
				if (n) Fd([Ae(n, 1)[0].getAsFile()], e.currentTarget), e.preventDefault()
			}
		}
	}

	function Vd(e) {
		e.target.classList.contains("js-manual-file-chooser") && (Fd(e.target.files, e.currentTarget), e.target.value = "")
	}

	function $d(e) {
		Ld(e.currentTarget.classList.contains("js-uploadable-container") ? e.currentTarget : e.currentTarget.querySelector(".js-uploadable-container"), "is-default")
	}
	var Jd = 0,
		Kd = !1;

	function Gd() {
		Kd = !0
	}

	function Yd() {
		Kd = !1
	}
	s.observe(".js-document-dropzone", {
		add: function(e) {
			var n = document.body;
			t(n, "null.js:791"), n.addEventListener("dragstart", Gd), n.addEventListener("dragend", Yd), n.addEventListener("dragenter", Dd), n.addEventListener("dragover", Dd), n.addEventListener("dragleave", Ud), e.addEventListener("drop", zd)
		},
		remove: function(e) {
			var n = document.body;
			t(n, "null.js:802"), n.removeEventListener("dragstart", Gd), n.removeEventListener("dragend", Yd), n.removeEventListener("dragenter", Dd), n.removeEventListener("dragover", Dd), n.removeEventListener("dragleave", Ud), e.removeEventListener("drop", zd)
		}
	}), s.observe(".js-uploadable-container", {
		add: function(e) {
			0 == Jd++ && (document.addEventListener("drop", Pd), document.addEventListener("dragover", Od)), e.addEventListener("dragenter", Dd), e.addEventListener("dragover", Dd), e.addEventListener("dragleave", Bd), e.addEventListener("drop", zd), e.addEventListener("paste", Wd), e.addEventListener("change", Vd);
			var t = e.closest("form");
			null != t && t.addEventListener("reset", $d)
		},
		remove: function(e) {
			0 == --Jd && (document.removeEventListener("drop", Pd), document.removeEventListener("dragover", Od)), e.removeEventListener("dragenter", Dd), e.removeEventListener("dragover", Dd), e.removeEventListener("dragleave", Bd), e.removeEventListener("drop", zd), e.removeEventListener("paste", Wd), e.removeEventListener("change", Vd);
			var t = e.closest("form");
			null != t && t.removeEventListener("reset", $d)
		}
	}), ! function() {
		var e = document.createElement("div");
		e.style.cssText = "-ms-user-select: element; user-select: contain;";
		var t = e;
		return "element" === t.msUserSelect || "contain" === t.userSelect
	}() && window.getSelection && i.on("click", ".user-select-contain", function() {
		var e = window.getSelection();
		if (e.rangeCount) {
			var t = e.getRangeAt(0).commonAncestorContainer;
			this.contains(t) || e.selectAllChildren(this)
		}
	}), i.on("click", ["form button:not([type])", "form button[type=submit]", "form input[type=submit]"].join(", "), function(e) {
		t(this instanceof HTMLButtonElement || this instanceof HTMLInputElement, "null.js:201"), this.form && !e.defaultPrevented && Gi(this)
	}), l.remoteForm("form[data-remote]", function(e, t, n) {
		"json" === e.getAttribute("data-type") && n.headers.set("Accept", "application/json");
		var r = {
				status: 0,
				statusText: null,
				responseText: null,
				responseJSON: null,
				setRequestHeader: function(e, t) {
					n.headers.set(e, t)
				}
			},
			a = void 0;
		try {
			a = new URL(n.url)
		} catch (e) {}
		var o = {
				url: n.url,
				type: n.method,
				crossDomain: a && a.host !== window.location.host
			},
			s = E(e);
		s.trigger("ajaxSend", [r, o]), t.text().catch(function(e) {
			if (e.response) return e.response;
			throw e
		}).then(function(e) {
			r.status = e.status, r.statusText = e.statusText;
			var t = void 0;
			t = r.responseText = e.text, /[/+]json($|;)/.test(e.headers.get("content-type")) && (t = r.responseJSON = e.json), r.status < 300 ? s.trigger("ajaxSuccess", [r, o, t]) : s.trigger("ajaxError", [r, o, r.statusText])
		}, function(e) {
			s.trigger("ajaxError", [r, o, e.message])
		}).then(function() {
			s.trigger("ajaxComplete", [r, o])
		})
	}), E(document).on("ajaxComplete", "form", function(e) {
		var t = Ki(e.currentTarget);
		t && t.remove()
	}), l.afterRemote(function(e) {
		var t = Ki(e);
		t && t.remove()
	})
});