(function(e) {
    function t(t) { for (var r, i, c = t[0], s = t[1], u = t[2], b = 0, f = []; b < c.length; b++) i = c[b], Object.prototype.hasOwnProperty.call(a, i) && a[i] && f.push(a[i][0]), a[i] = 0; for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        l && l(t); while (f.length) f.shift()(); return o.push.apply(o, u || []), n() }

    function n() { for (var e, t = 0; t < o.length; t++) { for (var n = o[t], r = !0, c = 1; c < n.length; c++) { var s = n[c];
                0 !== a[s] && (r = !1) } r && (o.splice(t--, 1), e = i(i.s = n[0])) } return e } var r = {},
        a = { app: 0 },
        o = [];

    function i(t) { if (r[t]) return r[t].exports; var n = r[t] = { i: t, l: !1, exports: {} }; return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports } i.m = e, i.c = r, i.d = function(e, t, n) { i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, i.r = function(e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.t = function(e, t) { if (1 & t && (e = i(e)), 8 & t) return e; if (4 & t && "object" === typeof e && e && e.__esModule) return e; var n = Object.create(null); if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function(t) { return e[t] }.bind(null, r)); return n }, i.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return i.d(t, "a", t), t }, i.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, i.p = "/chain-puzzle/"; var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = c.push.bind(c);
    c.push = t, c = c.slice(); for (var u = 0; u < c.length; u++) t(c[u]); var l = s;
    o.push([0, "chunk-vendors"]), n() })({ 0: function(e, t, n) { e.exports = n("56d7") }, "016f": function(e, t, n) { "use strict";
        n("963e") }, "0547": function(e, t, n) { "use strict";
        n("a1d5") }, "13b5": function(e, t, n) {}, "30aa": function(e, t, n) { "use strict";
        n("ed46") }, 3454: function(e, t, n) { "use strict";
        n("b889") }, "34e9": function(e, t, n) {}, "3b96": function(e, t, n) { "use strict";
        n("4507") }, 4507: function(e, t, n) {}, "56d7": function(e, t, n) { "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d"); var r = n("7a23"),
            a = { class: "d-flex flex-column h-100" };

        function o(e, t, n, o, i, c) { var s = Object(r["o"])("Navbar"),
                u = Object(r["o"])("Viewport"); return Object(r["i"])(), Object(r["c"])("div", a, [Object(r["f"])(s), Object(r["f"])(u, { class: "flex-grow-1" })]) } var i = Object(r["t"])("data-v-273d1a4b");
        Object(r["k"])("data-v-273d1a4b"); var c = { class: "bar d-flex align-items-center px-3" },
            s = Object(r["f"])("h2", { class: "title m-0 flex-grow-1" }, "Chain Puzzle", -1),
            u = { class: "icon-buttons fs-3" },
            l = Object(r["f"])("a", { href: "https://github.com/UlikGames/chain-puzzle", target: "_blank", class: "text-reset mx-2" }, [Object(r["f"])("i", { class: "bi-github" })], -1),
            b = Object(r["f"])("i", { class: "bi-question-circle-fill" }, null, -1);
        Object(r["j"])(); var f = i((function(e, t, n, a, o, i) { var f = Object(r["o"])("info-modal"); return Object(r["i"])(), Object(r["c"])(r["a"], null, [Object(r["f"])("div", c, [s, Object(r["f"])("div", u, [l, Object(r["f"])("a", { href: "#", class: "text-reset", onClick: t[1] || (t[1] = function(e) { return i.openInfo() }) }, [b])])]), Object(r["f"])(f, { ref: "infoModal" }, null, 512)], 64) })),
            p = Object(r["t"])("data-v-70c807ba");
        Object(r["k"])("data-v-70c807ba"); var d = { class: "modal fade", tabindex: "-1" },
            h = { class: "modal-dialog modal-lg" },
            m = { class: "modal-content" },
            v = Object(r["f"])("div", { class: "modal-header" }, [Object(r["f"])("h5", { class: "modal-title" }, "Info"), Object(r["f"])("button", { type: "button", class: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" })], -1),
            O = { class: "modal-body" },
            j = Object(r["f"])("p", null, [Object(r["e"])(" The "), Object(r["f"])("a", { href: "https://www.myminifactory.com/users/makeanything", target: "_blank" }, "Chain Puzzle"), Object(r["e"])(" is a puzzle designed by "), Object(r["f"])("a", { href: "https://www.devinmontes.com/", target: "_blank" }, "Devin Montes"), Object(r["e"])(" and can be purchased at his "), Object(r["f"])("a", { href: "https://www.myminifactory.com/users/makeanything", target: "_blank" }, " store"), Object(r["e"])(" or can be 3D printed using the models on "), Object(r["f"])("a", { href: "https://www.myminifactory.com/object/3d-print-the-chain-puzzle-razor-118798", target: "_blank" }, " MyMiniFactory"), Object(r["e"])(". The puzzle consists of two inter-looping tracks which hold 30 marbles that mix up when you twist the halves into alternating positions. In a “symmetric” position, there is a large 18 marble track looping around a smaller 12 marble track, while in the “asymmetric” position there are two 15 marble tracks locked together. Rotate the two halves of the puzzle and shift the marbles along their tracks until all like colors touch. ")], -1),
            y = Object(r["f"])("p", null, [Object(r["e"])("This simulator was developed independently by "), Object(r["f"])("a", { href: "https://github.com/UlikGames", target: "_blank" }, " UlikGames"), Object(r["e"])(" who can be reached at "), Object(r["f"])("a", { href: "mailto:ulvin.oguzlu@gmail.com" }, "ulvin.oguzlu@gmail.com.")], -1),
            w = Object(r["f"])("p", null, [Object(r["e"])(" The simulator uses a heuristic-guided graph traversal algorithm known as the "), Object(r["f"])("a", { href: "https://en.wikipedia.org/wiki/A*_search_algorithm", target: "_blank" }, "A* search algorithm"), Object(r["e"])(" to solve the puzzle. It begins at a node representing the starting puzzle state and expands it by creating a new node for each puzzle state that is one transformation away from the parent node. The algorithm then uses a heuristic to judge the favorability of each new puzzle state, chooses the most favorable node from the graph, and continues the process of expanding until it reaches a solved state. ")], -1),
            g = Object(r["f"])("p", null, " The heuristic used by the simulator assesses the number of contiguous groups of color in the puzzle. A puzzle state with a lower score is a more favorable state than one with a higher score. For example, when the puzzle is solved, there are 6 groups of contiguous color (1 for each color), the highest score the heuristic can give. When each marble in the chain is different from the ones next to it (seemingly very scrambled), there are 30 contiguous groups, one for each marble. The intuition driving the heuristic is that the puzzle seems to be closer to being solved when the number of contiguous groups are low, and that it seems to be far away from being solved when this number is large. A brief statistical analysis has shown that this correlation does exist, but it’s not perfect and the heuristic will often overestimate or underestimate. ", -1),
            E = Object(r["f"])("p", null, " Because the heuristic often overestimates the favorability of certain chain states, the algorithm rarely finds the most efficient solution on its first pass. To improve the efficiency of the solutions generated, the algorithm is capped at a certain depth (a depth of 100 nodes was picked arbitrarily for the first pass) and run iteratively. When a solution is found, the algorithm repeats, this time with a depth capped lower than the solution below it. While this approach works, there is no way to guarantee that the algorithm has reached the best solution. A better solution would be to design a “consistent heuristic”, a heuristic never overestimates the favorability of a position. Achieving this would likely require a deeper mathematical analysis of the chain puzzle. ", -1);
        Object(r["j"])(); var S = p((function(e, t, n, a, o, i) { var c = Object(r["o"])("faq-question"); return Object(r["i"])(), Object(r["c"])("div", d, [Object(r["f"])("div", h, [Object(r["f"])("div", m, [v, Object(r["f"])("div", O, [Object(r["f"])(c, { question: "What is this?", show: 0 == o.selectedQuestion, onSelect: t[1] || (t[1] = function(e) { return i.selectQuestion(0) }) }, { default: p((function() { return [j, y] })), _: 1 }, 8, ["show"]), Object(r["f"])(c, { question: "How does the simulator work?", show: 1 == o.selectedQuestion, onSelect: t[2] || (t[2] = function(e) { return i.selectQuestion(1) }) }, { default: p((function() { return [w, g, E] })), _: 1 }, 8, ["show"])])])])]) })),
            I = n("7b17"),
            R = Object(r["t"])("data-v-204b23d2");
        Object(r["k"])("data-v-204b23d2"); var T = { class: "question-container" },
            k = { class: "question" },
            x = { class: "flex-grow-1" },
            _ = { key: 0, class: "bi-caret-down-fill" },
            N = { key: 1, class: "bi-caret-up-fill" },
            z = { class: "collapse", ref: "answerCollapse" },
            C = { class: "answer" };
        Object(r["j"])(); var A = R((function(e, t, n, a, o, i) { return Object(r["i"])(), Object(r["c"])("div", T, [Object(r["f"])("a", { href: "#", class: "text-reset text-decoration-none", onClick: t[1] || (t[1] = function(t) { return e.$emit("select") }) }, [Object(r["f"])("div", k, [Object(r["f"])("span", x, Object(r["q"])(n.question), 1), n.show ? (Object(r["i"])(), Object(r["c"])("i", N)) : (Object(r["i"])(), Object(r["c"])("i", _))])]), Object(r["f"])("div", z, [Object(r["f"])("div", C, [Object(r["n"])(e.$slots, "default", {}, void 0, !0)])], 512)]) })),
            F = { name: "FaqQuestion", props: { question: String, show: Boolean }, data: function() { return { collapse: null } }, mounted: function() { this.collapse = new I["a"](this.$refs.answerCollapse, { toggle: this.show }) }, watch: { show: function(e) { this.collapse && (e ? this.collapse.show() : this.collapse.hide()) } } };
        n("7765");
        F.render = A, F.__scopeId = "data-v-204b23d2"; var M = F,
            H = { name: "InfoModal", components: { FaqQuestion: M }, data: function() { return { modal: null, selectedQuestion: -1 } }, mounted: function() { this.modal = new I["b"](this.$el) }, methods: { toggle: function() { this.modal.toggle() }, selectQuestion: function(e) { e == this.selectedQuestion ? this.selectedQuestion = -1 : this.selectedQuestion = e } } };
        H.render = S, H.__scopeId = "data-v-70c807ba"; var V = H,
            P = { name: "Navbar", components: { InfoModal: V }, methods: { openInfo: function() { this.$refs.infoModal.toggle() } } };
        n("3b96");
        P.render = f, P.__scopeId = "data-v-273d1a4b"; var U = P,
            $ = Object(r["t"])("data-v-6c49c261");
        Object(r["k"])("data-v-6c49c261"); var q = { class: "d-flex flex-column" },
            Q = { ref: "viewport", class: "flex-grow-1 position-relative" },
            D = { class: "overlay position-absolute top-0 bottom-0 w-100 h-100" };
        Object(r["j"])(); var B, L = $((function(e, t, n, a, o, i) { var c = Object(r["o"])("puzzle-code-box"),
                    s = Object(r["o"])("playback-bar"),
                    u = Object(r["o"])("controls-guide"),
                    l = Object(r["o"])("viewport-controls"); return Object(r["i"])(), Object(r["c"])("div", q, [Object(r["f"])("div", Q, [Object(r["f"])("div", D, [Object(r["f"])(c, { code: a.puzzleCode, solved: a.isSolved }, null, 8, ["code", "solved"]), Object(r["f"])(s, { operations: e.playbackQueue, currentIndex: e.playbackQueueIndex - 1 }, null, 8, ["operations", "currentIndex"]), Object(r["f"])(u, { controlsType: i.controlsType }, null, 8, ["controlsType"])])], 512), Object(r["f"])(l, { showPlaybackControls: i.showPlaybackControls, playing: e.playing, operations: e.playbackQueue, currentIndex: e.playbackQueueIndex, speed: e.speed, onScramble: i.scramble, onReset: i.reset, onPlay: t[1] || (t[1] = function(t) { return e.play() }), onPause: t[2] || (t[2] = function(t) { return e.pause() }), onCancel: t[3] || (t[3] = function(t) { return e.stop() }), onNext: t[4] || (t[4] = function(t) { return e.next() }), onPrev: t[5] || (t[5] = function(t) { return e.prev() }), onUpdateSpeed: e.setSpeed, solving: a.isSolving, bestSolution: a.bestSolution, onFindSolutions: t[6] || (t[6] = function(e) { return i.findSolutions() }), onChooseSolution: t[7] || (t[7] = function(e) { return i.chooseSolution() }), onLoadPuzzleCode: t[8] || (t[8] = function(e) { return a.loadPuzzleCode(e) }), inputting: e.isInputting, inputSymmetric: e.inputSymmetric, onBeginMarbleInput: t[9] || (t[9] = function(t) { return e.beginMarbleInput() }), onCancelMarbleInput: t[10] || (t[10] = function(t) { return e.cancelMarbleInput() }), onUpdateInputSymmetric: t[11] || (t[11] = function(t) { return e.updateInputSymmetric(t) }) }, null, 8, ["showPlaybackControls", "playing", "operations", "currentIndex", "speed", "onScramble", "onReset", "onUpdateSpeed", "solving", "bestSolution", "inputting", "inputSymmetric"])]) })),
            W = n("1da1"),
            G = n("5530"),
            K = (n("96cf"), n("5a89")),
            J = n("ade3"),
            X = { ROTATE: 0, INNER_SHIFT: 1, OUTER_SHIFT: 2, INVERSE_ROTATE: 3, INVERSE_INNER_SHIFT: 4, INVERSE_OUTER_SHIFT: 5 },
            Y = (B = {}, Object(J["a"])(B, X.ROTATE, X.INVERSE_ROTATE), Object(J["a"])(B, X.INNER_SHIFT, X.INVERSE_INNER_SHIFT), Object(J["a"])(B, X.OUTER_SHIFT, X.INVERSE_OUTER_SHIFT), Object(J["a"])(B, X.INVERSE_ROTATE, X.ROTATE), Object(J["a"])(B, X.INVERSE_INNER_SHIFT, X.INNER_SHIFT), Object(J["a"])(B, X.INVERSE_OUTER_SHIFT, X.OUTER_SHIFT), B),
            Z = { Symmetric: {}, Asymmetric: {} };
        Z.Symmetric[X.ROTATE] = [23, 22, 21, 20, 19, 18, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8, 24, 25, 26, 27, 28, 29], Z.Symmetric[X.INNER_SHIFT] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], Z.Symmetric[X.OUTER_SHIFT] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 29, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], Z.Symmetric[X.INVERSE_ROTATE] = [18, 19, 20, 21, 22, 23, 9, 10, 11, 12, 13, 14, 15, 16, 17, 8, 7, 6, 5, 4, 3, 2, 1, 0, 24, 25, 26, 27, 28, 29], Z.Symmetric[X.INVERSE_INNER_SHIFT] = [17, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], Z.Symmetric[X.INVERSE_OUTER_SHIFT] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 18], Z.Asymmetric[X.ROTATE] = [23, 22, 21, 20, 19, 18, 17, 16, 15, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 1, 2, 3, 4, 5, 24, 25, 26, 27, 28, 29], Z.Asymmetric[X.INNER_SHIFT] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], Z.Asymmetric[X.OUTER_SHIFT] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 29, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], Z.Asymmetric[X.INVERSE_ROTATE] = [15, 16, 17, 18, 19, 20, 21, 22, 23, 6, 7, 8, 9, 10, 11, 12, 13, 14, 5, 4, 3, 2, 1, 0, 24, 25, 26, 27, 28, 29], Z.Asymmetric[X.INVERSE_INNER_SHIFT] = [14, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], Z.Asymmetric[X.INVERSE_OUTER_SHIFT] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 15]; var ee = [16007990, 16771899, 5025616, 2201331, 10233776, 16738740],
            te = [new K["sb"](.5, 0, 1.36), new K["sb"](1.5, 0, 1.36), new K["sb"](2.5, 0, 1.36), new K["sb"](3.368, 0, .918), new K["sb"](3.725, 0, 0), new K["sb"](3.368, 0, -.918), new K["sb"](2.5, 0, -1.36), new K["sb"](1.5, 0, -1.36), new K["sb"](.5, 0, -1.36), new K["sb"](-.5, 0, -1.36), new K["sb"](-1.5, 0, -1.36), new K["sb"](-2.5, 0, -1.36), new K["sb"](-3.368, 0, -.918), new K["sb"](-3.725, 0, 0), new K["sb"](-3.368, 0, .918), new K["sb"](-2.5, 0, 1.36), new K["sb"](-1.5, 0, 1.36), new K["sb"](-.5, 0, 1.36), new K["sb"](.5, 1.36, 0), new K["sb"](1.4611, 1.2296, 0), new K["sb"](2.145, .5, 0), new K["sb"](2.145, -.5, 0), new K["sb"](1.4611, -1.2296, 0), new K["sb"](.5, -1.36, 0), new K["sb"](-.5, -1.36, 0), new K["sb"](-1.4611, -1.2296, 0), new K["sb"](-2.145, -.5, 0), new K["sb"](-2.145, .5, 0), new K["sb"](-1.4611, 1.2296, 0), new K["sb"](-.5, 1.36, 0)],
            ne = [new K["sb"](.5, 0, 1.36), new K["sb"](1.4611, 0, 1.2296), new K["sb"](2.145, 0, .5), new K["sb"](2.145, 0, -.5), new K["sb"](1.4611, 0, -1.2296), new K["sb"](.5, 0, -1.36), new K["sb"](-.5, 0, -1.36), new K["sb"](-1.5, 0, -1.36), new K["sb"](-2.5, 0, -1.36), new K["sb"](-3.368, 0, -.918), new K["sb"](-3.725, 0, 0), new K["sb"](-3.368, 0, .918), new K["sb"](-2.5, 0, 1.36), new K["sb"](-1.5, 0, 1.36), new K["sb"](-.5, 0, 1.36), new K["sb"](.5, 1.36, 0), new K["sb"](1.5, 1.36, 0), new K["sb"](2.5, 1.36, 0), new K["sb"](3.368, .918, 0), new K["sb"](3.725, 0, 0), new K["sb"](3.368, -.918, 0), new K["sb"](2.5, -1.36, 0), new K["sb"](1.5, -1.36, 0), new K["sb"](.5, -1.36, 0), new K["sb"](-.5, -1.36, 0), new K["sb"](-1.4611, -1.2296, 0), new K["sb"](-2.145, -.5, 0), new K["sb"](-2.145, .5, 0), new K["sb"](-1.4611, 1.2296, 0), new K["sb"](-.5, 1.36, 0)],
            re = { FREE: 0, DEMONSTRATION: 1 },
            ae = Object(r["t"])("data-v-e9248e02");
        Object(r["k"])("data-v-e9248e02"); var oe = Object(r["f"])("i", { class: "bi-clipboard" }, null, -1),
            ie = { class: "position-fixed start-50 translate-middle-x p-3", style: { "z-index": "5" } },
            ce = { class: "toast align-items-center", role: "status", "aria-live": "polite", "aria-atomic": "true", ref: "toastElement" },
            se = Object(r["f"])("div", { class: "d-flex" }, [Object(r["f"])("div", { class: "toast-body" }, " Copied puzzle code to clipboard. "), Object(r["f"])("button", { type: "button", class: "btn-close me-2 m-auto", "data-bs-dismiss": "toast", "aria-label": "Close" })], -1);
        Object(r["j"])(); var ue = ae((function(e, t, n, a, o, i) { return Object(r["i"])(), Object(r["c"])(r["a"], null, [Object(r["f"])("span", { class: ["puzzleCode font-monospace", { solved: n.solved }] }, [Object(r["f"])("a", { href: "#", onClick: t[1] || (t[1] = function(e) { return i.copy() }) }, [oe]), Object(r["f"])("span", null, Object(r["q"])(n.code), 1)], 2), Object(r["f"])("div", ie, [Object(r["f"])("div", ce, [se], 512)])], 64) })),
            le = { props: { code: String, solved: Boolean }, data: function() { return { toast: null } }, setup: function() { return { toastElement: Object(r["l"])(null) } }, mounted: function() { this.toast = new I["c"](this.toastElement, { delay: 2500 }) }, methods: { copy: function() { navigator.clipboard.writeText(this.code), this.toast.show() } } };
        n("594b");
        le.render = ue, le.__scopeId = "data-v-e9248e02"; var be = le,
            fe = Object(r["t"])("data-v-dfdf713a");
        Object(r["k"])("data-v-dfdf713a"); var pe = { class: "bottom-bar container-fluid" },
            de = { key: 0, class: "row align-items-center h-100" },
            he = { class: "col d-flex justify-content-end" },
            me = { class: "col col-auto fs-1" },
            ve = Object(r["f"])("i", { class: "bi-skip-start-fill" }, null, -1),
            Oe = Object(r["f"])("i", { class: "bi-skip-backward-fill" }, null, -1),
            je = Object(r["f"])("i", { class: "bi-pause-circle-fill" }, null, -1),
            ye = Object(r["f"])("i", { class: "bi-play-circle-fill" }, null, -1),
            we = Object(r["f"])("i", { class: "bi-skip-forward-fill" }, null, -1),
            ge = Object(r["f"])("i", { class: "bi-skip-end-fill" }, null, -1),
            Ee = { class: "col d-flex justify-content-end align-items-center" },
            Se = { class: "flex-grow-1 text-center" },
            Ie = { class: "fw-bold" },
            Re = { class: "text-secondary" },
            Te = Object(r["f"])("i", { class: "bi-x fs-5" }, null, -1),
            ke = Object(r["f"])("span", null, "Cancel", -1),
            xe = { key: 1, class: "row align-items-center h-100" },
            _e = Object(r["f"])("div", { class: "col text-center" }, [Object(r["f"])("small", { class: "fw-light text-muted" }, "Solutions become iteratively better with time")], -1),
            Ne = { class: "col col-auto d-flex align-items-center justify-content-center" },
            ze = Object(r["f"])("div", { class: "button-loading-overlay", id: "solve-button-overlay" }, null, -1),
            Ce = { key: 0 },
            Ae = { key: 1 },
            Fe = Object(r["f"])("div", { class: "col" }, null, -1),
            Me = { key: 2, class: "row align-items-center h-100" },
            He = Object(r["f"])("div", { class: "col" }, null, -1),
            Ve = { class: "col col-auto d-flex flex-row" },
            Pe = { class: "btn-group", role: "group", "aria-label": "Symmetric toggle" },
            Ue = Object(r["f"])("label", { class: "btn btn-outline-dark", for: "input-symmetric" }, "Symmetric", -1),
            $e = Object(r["f"])("label", { class: "btn btn-outline-dark", for: "input-asymmetric" }, "Asymmetric", -1),
            qe = Object(r["f"])("p", { class: "vertical-separator" }, [Object(r["f"])("span", null, "or")], -1),
            Qe = { class: "col col-auto" },
            De = { class: "input-group" },
            Be = { class: "col d-flex justify-content-end" },
            Le = Object(r["f"])("i", { class: "bi-x fs-5" }, null, -1),
            We = Object(r["f"])("span", null, "Cancel", -1),
            Ge = { key: 3, class: "row align-items-center h-100" },
            Ke = { class: "col d-flex" },
            Je = Object(r["f"])("i", { class: "bi-arrow-clockwise fs-5" }, null, -1),
            Xe = Object(r["f"])("span", null, "Reset", -1),
            Ye = Object(r["f"])("i", { class: "bi-shuffle fs-5" }, null, -1),
            Ze = Object(r["f"])("span", null, "Scramble", -1),
            et = Object(r["f"])("i", { class: "bi-lightbulb fs-5" }, null, -1),
            tt = Object(r["f"])("span", null, "Solve", -1),
            nt = { class: "col d-flex justify-content-end" },
            rt = Object(r["f"])("i", { class: "bi-upload fs-5" }, null, -1),
            at = Object(r["f"])("span", null, "Load Puzzle", -1);
        Object(r["j"])(); var ot = fe((function(e, t, n, a, o, i) { return Object(r["i"])(), Object(r["c"])("div", pe, [n.showPlaybackControls ? (Object(r["i"])(), Object(r["c"])("div", de, [Object(r["f"])("div", he, [Object(r["f"])("input", { type: "range", class: "form-range w-25", onChange: t[1] || (t[1] = function() { return i.updateSpeed && i.updateSpeed.apply(i, arguments) }), value: i.sliderValue }, null, 40, ["value"])]), Object(r["f"])("div", me, [Object(r["f"])("a", { href: "#", class: "text-reset me-4", onClick: t[2] || (t[2] = function(t) { return e.$emit("skip-start") }) }, [ve]), Object(r["f"])("a", { href: "#", class: "text-reset", onClick: t[3] || (t[3] = function(t) { return e.$emit("prev") }) }, [Oe]), n.playing ? (Object(r["i"])(), Object(r["c"])("a", { key: 0, href: "#", class: "text-reset mx-4", onClick: t[4] || (t[4] = function(t) { return e.$emit("pause") }) }, [je])) : (Object(r["i"])(), Object(r["c"])("a", { key: 1, href: "#", class: "text-reset mx-4", onClick: t[5] || (t[5] = function(t) { return e.$emit("play") }) }, [ye])), Object(r["f"])("a", { href: "#", class: "text-reset", onClick: t[6] || (t[6] = function(t) { return e.$emit("next") }) }, [we]), Object(r["f"])("a", { href: "#", class: "text-reset ms-4", onClick: t[7] || (t[7] = function(t) { return e.$emit("skip-end") }) }, [ge])]), Object(r["f"])("div", Ee, [Object(r["f"])("div", Se, [Object(r["f"])("span", Ie, Object(r["q"])(n.currentIndex), 1), Object(r["f"])("span", Re, " / " + Object(r["q"])(n.operations.length) + " moves", 1)]), Object(r["f"])("button", { type: "button", class: "icon-button btn btn-outline-dark", onClick: t[8] || (t[8] = function(t) { return e.$emit("cancel") }) }, [Te, ke])])])) : Object(r["d"])("", !0), n.solving ? (Object(r["i"])(), Object(r["c"])("div", xe, [_e, Object(r["f"])("div", Ne, [Object(r["f"])("button", { class: ["btn position-relative", { "btn-success": o.solveReady, "btn-outline-success": !o.solveReady }], disabled: !o.solveReady || !n.bestSolution, onClick: t[9] || (t[9] = function(t) { return e.$emit("choose-solution") }) }, [ze, n.bestSolution ? (Object(r["i"])(), Object(r["c"])("span", Ce, "Solve in " + Object(r["q"])(n.bestSolution.length) + " steps", 1)) : (Object(r["i"])(), Object(r["c"])("span", Ae, "Finding solutions..."))], 10, ["disabled"])]), Fe])) : Object(r["d"])("", !0), n.inputting ? (Object(r["i"])(), Object(r["c"])("div", Me, [He, Object(r["f"])("div", Ve, [Object(r["f"])("div", Pe, [Object(r["f"])("input", { type: "radio", name: "input-symmetric", class: "btn-check", id: "input-symmetric", autocomplete: "off", onClick: t[10] || (t[10] = function(t) { return e.$emit("update-input-symmetric", !0) }), checked: n.inputSymmetric }, null, 8, ["checked"]), Ue, Object(r["f"])("input", { type: "radio", name: "input-symmetric", class: "btn-check", id: "input-asymmetric", autocomplete: "off", onClick: t[11] || (t[11] = function(t) { return e.$emit("update-input-symmetric", !1) }), checked: !n.inputSymmetric }, null, 8, ["checked"]), $e])]), qe, Object(r["f"])("div", Qe, [Object(r["f"])("div", De, [Object(r["s"])(Object(r["f"])("input", { type: "text", "onUpdate:modelValue": t[12] || (t[12] = function(e) { return o.puzzleCode = e }), class: "form-control", placeholder: "Puzzle Code", "aria-label": "Puzzle Code", "aria-describedby": "load-code-button" }, null, 512), [
                    [r["r"], o.puzzleCode]
                ]), Object(r["f"])("button", { class: "btn btn-outline-secondary", type: "button", onClick: t[13] || (t[13] = function(e) { return i.loadPuzzleCode() }), id: "load-code-button" }, "Load")])]), Object(r["f"])("div", Be, [Object(r["f"])("button", { type: "button", class: "icon-button btn btn-outline-dark", onClick: t[14] || (t[14] = function(t) { return e.$emit("cancel-marble-input") }) }, [Le, We])])])) : Object(r["d"])("", !0), n.inputting || n.solving || n.showPlaybackControls ? Object(r["d"])("", !0) : (Object(r["i"])(), Object(r["c"])("div", Ge, [Object(r["f"])("div", Ke, [Object(r["f"])("button", { type: "button", class: "icon-button btn btn-outline-dark", onClick: t[15] || (t[15] = function(t) { return e.$emit("reset") }) }, [Je, Xe]), Object(r["f"])("button", { type: "button", class: "icon-button btn btn-outline-dark ms-2", onClick: t[16] || (t[16] = function(t) { return e.$emit("scramble") }) }, [Ye, Ze]), Object(r["f"])("button", { type: "button", class: "icon-button btn btn-success ms-2", onClick: t[17] || (t[17] = function(t) { return e.$emit("find-solutions") }) }, [et, tt])]), Object(r["f"])("div", nt, [Object(r["f"])("button", { type: "button", class: "icon-button btn btn-outline-dark", onClick: t[18] || (t[18] = function(t) { return e.$emit("begin-marble-input") }) }, [rt, at])])]))]) })),
            it = (n("a9e3"), n("1157")),
            ct = n.n(it),
            st = 1,
            ut = .1,
            lt = 7500,
            bt = { name: "ViewportControls", props: { showPlaybackControls: Boolean, playing: Boolean, operations: Array, currentIndex: Number, speed: Number, solving: Boolean, bestSolution: Array, inputting: Boolean, inputSymmetric: Boolean }, data: function() { return { puzzleCode: "", solveReady: !1 } }, methods: { updateSpeed: function(e) { var t = parseInt(e.target.value),
                            n = (100 - t) / 100 * (st - ut) + ut;
                        this.$emit("updateSpeed", n) }, loadPuzzleCode: function() { this.$emit("load-puzzle-code", this.puzzleCode) } }, computed: { sliderValue: function() { var e = 100 - (this.speed - ut) / (st - ut) * 100; return e } }, watch: { solving: function(e, t) { var n = this; return Object(W["a"])(regeneratorRuntime.mark((function a() { return regeneratorRuntime.wrap((function(a) { while (1) switch (a.prev = a.next) {
                                    case 0:
                                        if (e != t) { a.next = 2; break } return a.abrupt("return");
                                    case 2:
                                        if (!e) { a.next = 7; break } return n.solveReady = !1, a.next = 6, Object(r["g"])();
                                    case 6:
                                        ct()("#solve-button-overlay").animate({ height: "100%" }, lt, "linear", (function() { n.solveReady = !0, ct()("#solve-button-overlay").height("0%") }));
                                    case 7:
                                    case "end":
                                        return a.stop() } }), a) })))() } } };
        n("3454");
        bt.render = ot, bt.__scopeId = "data-v-dfdf713a"; var ft = bt,
            pt = Object(r["t"])("data-v-0e82b333");
        Object(r["k"])("data-v-0e82b333"); var dt = { key: 0, class: "playback-bar d-flex flex-row", ref: "playbackBar" };
        Object(r["j"])(); var ht, mt, vt, Ot = pt((function(e, t, n, a, o, i) { var c = Object(r["o"])("operation-icon"); return n.operations.length > 0 ? (Object(r["i"])(), Object(r["c"])("div", dt, [Object(r["f"])("div", { class: "operations d-flex flex-row", style: { marginLeft: i.margin }, ref: "operationsContainer" }, [(Object(r["i"])(!0), Object(r["c"])(r["a"], null, Object(r["m"])(n.operations, (function(e, t) { return Object(r["i"])(), Object(r["c"])(c, { op: e, key: t, selected: t == n.currentIndex }, null, 8, ["op", "selected"]) })), 128))], 4)], 512)) : Object(r["d"])("", !0) })),
            jt = Object(r["t"])("data-v-9d0c702c"),
            yt = jt((function(e, t, n, a, o, i) { return Object(r["i"])(), Object(r["c"])("div", { class: ["op-icon", i.opClass] }, Object(r["q"])(i.opText), 3) })),
            wt = (ht = {}, Object(J["a"])(ht, X.ROTATE, "rotate"), Object(J["a"])(ht, X.INNER_SHIFT, "inner-shift"), Object(J["a"])(ht, X.OUTER_SHIFT, "outer-shift"), Object(J["a"])(ht, X.INVERSE_ROTATE, "inv-rotate"), Object(J["a"])(ht, X.INVERSE_INNER_SHIFT, "inv-inner-shift"), Object(J["a"])(ht, X.INVERSE_OUTER_SHIFT, "inv-outer-shift"), ht),
            gt = (mt = {}, Object(J["a"])(mt, X.ROTATE, "R"), Object(J["a"])(mt, X.INNER_SHIFT, "I"), Object(J["a"])(mt, X.OUTER_SHIFT, "O"), Object(J["a"])(mt, X.INVERSE_ROTATE, " R`"), Object(J["a"])(mt, X.INVERSE_INNER_SHIFT, " I`"), Object(J["a"])(mt, X.INVERSE_OUTER_SHIFT, " O`"), mt),
            Et = (vt = {}, Object(J["a"])(vt, X.ROTATE, "Rotate"), Object(J["a"])(vt, X.INNER_SHIFT, "Inner Shift"), Object(J["a"])(vt, X.OUTER_SHIFT, "Outer Shift"), Object(J["a"])(vt, X.INVERSE_ROTATE, "Inverse Rotate"), Object(J["a"])(vt, X.INVERSE_INNER_SHIFT, "Inverse Inner Shift"), Object(J["a"])(vt, X.INVERSE_OUTER_SHIFT, "Inverse Outer Shift"), vt),
            St = { name: "OperationIcon", props: { op: Number, selected: Boolean }, mounted: function() { new I["d"](this.$el, { title: Et[this.op] }) }, computed: { opClass: function() { var e; return e = {}, Object(J["a"])(e, wt[this.op], !0), Object(J["a"])(e, "selected", this.selected), e }, opText: function() { return gt[this.op] } } };
        n("016f");
        St.render = yt, St.__scopeId = "data-v-9d0c702c"; var It = St,
            Rt = 16,
            Tt = 40,
            kt = 4,
            xt = { name: "PlaybackBar", components: { OperationIcon: It }, props: { operations: Array, currentIndex: Number }, methods: { calculateMargin: function() { if (!this.$refs.playbackBar || !this.$refs.operationsContainer) return "0px;"; var e = this.$refs.playbackBar.offsetWidth,
                            t = this.$refs.operationsContainer.offsetWidth; if (t <= e) return "0px"; var n = Rt + (this.currentIndex + .5) * Tt + this.currentIndex * kt; return n <= e / 2 ? "0px" : "".concat(n >= t - e / 2 ? e - t - 2 * Rt + kt : e / 2 - n, "px") } }, computed: { margin: function() { return this.currentIndex, this.calculateMargin() } } };
        n("30aa");
        xt.render = Ot, xt.__scopeId = "data-v-0e82b333"; var _t = xt,
            Nt = Object(r["t"])("data-v-da62bb4a");
        Object(r["k"])("data-v-da62bb4a"); var zt = { class: "title" },
            Ct = { key: 0, class: "puzzle-controls" },
            At = { class: "key-desc" },
            Ft = Object(r["f"])("small", null, "Shift outer ring counter-clockwise", -1),
            Mt = { class: "key-desc" },
            Ht = Object(r["f"])("small", null, "Shift outer ring clockwise", -1),
            Vt = { class: "key-desc" },
            Pt = Object(r["f"])("small", null, "Shift inner ring clockwise", -1),
            Ut = { class: "key-desc" },
            $t = Object(r["f"])("small", null, "Shift inner ring counter-clockwise", -1),
            qt = { class: "key-desc" },
            Qt = Object(r["f"])("small", null, "Rotate right-half clockwise", -1),
            Dt = { class: "key-desc" },
            Bt = Object(r["f"])("small", null, "Rotate right-half counter-clockwise", -1),
            Lt = { key: 1, class: "input-marbles-controls d-flex flex-column" },
            Wt = Object(r["f"])("small", { class: "mb-3" }, "Input a marble into the highlighted position by pressing the key associated with the color of the marble.", -1),
            Gt = { class: "d-flex flex-row" },
            Kt = { key: 2, class: "playback-controls" },
            Jt = { class: "key-desc" },
            Xt = Object(r["f"])("small", null, "Step back", -1),
            Yt = { class: "key-desc" },
            Zt = Object(r["f"])("small", null, "Step forward", -1),
            en = { class: "key-desc" },
            tn = Object(r["f"])("small", null, "Toggle playback", -1);
        Object(r["j"])(); var nn = Nt((function(e, t, n, a, o, i) { var c = Object(r["o"])("key-icon"); return Object(r["i"])(), Object(r["c"])("div", { class: ["controls-guide", { playback: i.showPlaybackControls }] }, [Object(r["f"])("h5", zt, Object(r["q"])(i.title), 1), i.showPuzzleControls ? (Object(r["i"])(), Object(r["c"])("div", Ct, [Object(r["f"])("div", At, [Object(r["f"])(c, { char: "Q", tooltip: "Inverse Outer Shift" }), Ft]), Object(r["f"])("div", Mt, [Object(r["f"])(c, { char: "E", tooltip: "Outer Shift" }), Ht]), Object(r["f"])("div", Vt, [Object(r["f"])(c, { char: "A", tooltip: "Inner Shift" }), Pt]), Object(r["f"])("div", Ut, [Object(r["f"])(c, { char: "D", tooltip: "Inverse Inner Shift" }), $t]), Object(r["f"])("div", qt, [Object(r["f"])(c, { char: "W", tooltip: "Rotate" }), Qt]), Object(r["f"])("div", Dt, [Object(r["f"])(c, { char: "S", tooltip: "Inverse Rotate" }), Bt])])) : Object(r["d"])("", !0), i.showInputMarbleControls ? (Object(r["i"])(), Object(r["c"])("div", Lt, [Wt, Object(r["f"])("div", Gt, [(Object(r["i"])(!0), Object(r["c"])(r["a"], null, Object(r["m"])(i.keyColors, (function(e, t) { return Object(r["i"])(), Object(r["c"])("div", { class: "d-flex flex-grow-1 justify-content-center", key: t }, [Object(r["f"])(c, { char: String(t + 1), color: e }, null, 8, ["char", "color"])]) })), 128))])])) : Object(r["d"])("", !0), i.showPlaybackControls ? (Object(r["i"])(), Object(r["c"])("div", Kt, [Object(r["f"])("div", Jt, [Object(r["f"])(c, { icon: "bi-caret-left-fill", tooltip: "Arrow Left" }), Xt]), Object(r["f"])("div", Yt, [Object(r["f"])(c, { icon: "bi-caret-right-fill", tooltip: "Arrow Right" }), Zt]), Object(r["f"])("div", en, [Object(r["f"])(c, { char: " ", tooltip: "Spacebar" }), tn])])) : Object(r["d"])("", !0)], 2) })),
            rn = (n("d81d"), n("6149")),
            an = n.n(rn),
            on = Object(r["t"])("data-v-51f9887a"),
            cn = on((function(e, t, n, a, o, i) { return Object(r["i"])(), Object(r["c"])("div", { class: "key-icon d-flex justify-content-center align-items-center fw-bold", style: i.colorStyle }, [n.icon ? (Object(r["i"])(), Object(r["c"])("i", { key: 0, class: n.icon }, null, 2)) : (Object(r["i"])(), Object(r["c"])("span", { key: 1, class: { spacebar: " " == n.char } }, Object(r["q"])(i.displayChar), 3))], 4) })),
            sn = { name: "KeyIcon", props: { char: String, icon: String, tooltip: String, color: String }, mounted: function() { this.tooltip && new I["d"](this.$el, { title: this.tooltip }) }, computed: { colorStyle: function() { if (!this.color) return {}; var e = {}; return an()(this.color).luminance() < .179 && (e.color = "#fff"), e.backgroundColor = this.color, e.borderColor = an()(this.color).darken().css(), e }, displayChar: function() { switch (this.char) {
                            case " ":
                                return "]";
                            default:
                                return this.char } } } };
        n("0547");
        sn.render = cn, sn.__scopeId = "data-v-51f9887a"; var un = sn,
            ln = { name: "ControlsGuide", components: { KeyIcon: un }, props: { controlsType: String }, computed: { keyColors: function() { return ee.map((function(e) { return an()(e).css() })) }, title: function() { switch (this.controlsType) {
                            case "puzzle":
                                return "Puzzle Controls";
                            case "input-marbles":
                                return "Input Controls";
                            case "playback":
                                return "Playback Controls";
                            default:
                                return "Controls" } }, showPuzzleControls: function() { return "puzzle" == this.controlsType }, showInputMarbleControls: function() { return "input-marbles" == this.controlsType }, showPlaybackControls: function() { return "playback" == this.controlsType } } };
        n("f2f2");
        ln.render = nn, ln.__scopeId = "data-v-da62bb4a"; var bn, fn, pn, dn, hn = ln,
            mn = 75,
            vn = function() { var e = Object(r["l"])(null),
                    t = Object(r["p"])(null),
                    n = Object(r["p"])(null),
                    a = Object(r["p"])(null),
                    o = [],
                    i = function() { var r = e.value.offsetWidth,
                            o = e.value.offsetHeight;
                        t.value = new K["fb"], n.value = new K["W"](mn, r / o, .1, 1e3), a.value = new K["ub"]({ antialias: !0 }), a.value.setSize(r, o), a.value.setClearColor(16777215, 1), e.value.appendChild(a.value.domElement), new ResizeObserver(u).observe(e.value) },
                    c = function(e) { "function" === typeof e && o.push(e) },
                    s = function e() { requestAnimationFrame(e), o.forEach((function(e) { return e() })), a.value.render(t.value, n.value) },
                    u = function() { var t = e.value.offsetWidth,
                            r = e.value.offsetHeight;
                        n.value.aspect = t / r, n.value.updateProjectionMatrix(), a.value.setSize(t, r) }; return Object(r["h"])(i), { viewport: e, scene: t, camera: n, renderer: a, initRenderer: i, onResize: u, onAnimate: c, animate: s } },
            On = vn,
            jn = n("4721"),
            yn = 20,
            wn = 5,
            gn = function(e, t, n) { var a = Object(r["p"])(null),
                    o = function() { e.value.position.x = 7.2284025, e.value.position.z = 5.80743, e.value.position.y = 5.2753425, e.value.lookAt(new K["sb"](0, 0, 0)), a.value = new jn["a"](e.value, t.value), a.value.maxDistance = yn, a.value.minDistance = wn }; return n((function() { a.value.update() })), Object(r["h"])(o), { controls: a, initCameraControls: o } },
            En = gn,
            Sn = (n("159b"), function(e) { var t = new K["a"](16777215, .2),
                    n = new K["k"](16777215, 1),
                    a = new K["k"](16777215, .4),
                    o = new K["k"](16777215, .4);
                n.position.set(10, 10, 10), a.position.set(-10, -10, 10), o.position.set(0, -2, -10); var i = function() { e.value.add(t), [n, a, o].forEach((function(t) { t.target.position.set(0, 0, 0), e.value.add(t) })) }; return Object(r["h"])(i), { initLighting: i } }),
            In = Sn,
            Rn = n("34ad"),
            Tn = 14737632,
            kn = 870305,
            xn = function(e, t) { var n = new Rn["a"],
                    a = new K["M"]({ color: Tn }),
                    o = new K["M"]({ color: kn }),
                    i = Object(r["p"])(null),
                    c = Object(r["p"])(null),
                    s = Object(r["l"])(t.value.symmetric),
                    u = !1,
                    l = [],
                    b = function(e) { return l.push(e) },
                    f = function() { var t = Object(W["a"])(regeneratorRuntime.mark((function t() { var r, s; return regeneratorRuntime.wrap((function(t) { while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, n.loadAsync("./chain.glb");
                                    case 2:
                                        r = t.sent, s = r.scene.children[0].geometry, i.value = new K["K"](s, a), c.value = new K["K"](s, o), c.value.rotation.y = Math.PI, p(), d(!1), e.value.add(i.value), e.value.add(c.value), l.forEach((function(e) { return e() }));
                                    case 12:
                                    case "end":
                                        return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }(),
                    p = function(e) { null == e && (e = s.value), c.value.rotation.x = e ? 0 : Math.PI / 2 },
                    d = function(e) { u = e, e ? [a, o].forEach((function(e) { e.transparent = !0, e.color = new K["j"](16777215), e.opacity = .4 })) : ([a, o].forEach((function(e) { e.transparent = !1, e.opacity = 1 })), a.color = new K["j"](Tn), o.color = new K["j"](kn)) },
                    h = function() { d(!u) }; return t.value.onReset((function() { s.value = t.value.symmetric, p(), d(!1) })), Object(r["h"])(f), { chainLeft: i, chainRight: c, chainSymmetric: s, initChain: f, onChainLoad: b, updateChainOrientation: p, setChainTransparent: d, toggleChainTransparent: h } },
            _n = xn,
            Nn = n("b85c"),
            zn = 16777215,
            Cn = .6,
            An = function(e, t) { var n, a = new K["jb"](.5, 32, 32),
                    o = [],
                    i = Object(Nn["a"])(ee); try { for (i.s(); !(n = i.n()).done;) { var c = n.value;
                        o.push(new K["O"]({ color: c, roughness: .05 })) } } catch (h) { i.e(h) } finally { i.f() } var s = Object(r["p"])([]),
                    u = Object(r["p"])(null),
                    l = new K["O"]({ color: zn, roughness: .05 });
                l.transparent = !0, l.opacity = Cn, u.value = new K["K"](a, l); var b = function(t, n) { var r = t ? te : ne;
                        n.forEach((function(t, n) { var i = r[n],
                                c = new K["K"](a, o[t]);
                            c.position.x = i.x, c.position.y = i.y, c.position.z = i.z, s.value[n] && e.value.remove(s.value[n]), e.value.add(c), s.value[n] = c })) },
                    f = function() { s.value.forEach((function(t) { e.value.remove(t) })) },
                    p = function(t) { t ? e.value.add(u.value) : e.value.remove(u.value) },
                    d = function() { b(t.value.symmetric, t.value.marbles) }; return Object(r["h"])(d), t.value.onReset(d), { marbles: s, markerMarble: u, initMarbles: d, setMarbleOrientation: b, clearMarbles: f, setMarkerVisibility: p } },
            Fn = An,
            Mn = (n("fb6a"), n("d3b7"), n("4c53"), n("7db0"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 20, 21, 22, 23]),
            Hn = [0, 1, 2, 3, 4, 5, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            Vn = function(e, t) { return function(n) { return e.clone().add(t.clone().sub(e).multiplyScalar(n)) } },
            Pn = function(e, t) { return function(n) { return new K["m"](e.x + (t.x - e.x) * n, e.y + (t.y - e.y) * n, e.z + (t.z - e.z) * n) } },
            Un = function(e) { return function(t) { var n = Math.max(Math.abs(t.y), Math.abs(t.z)),
                        r = 0; return r = 0 == t.y ? t.z > 0 ? 0 : Math.PI : t.y > 0 ? Math.PI / 2 : 3 * Math.PI / 2,
                        function(a) { var o = a * Math.PI / 2; return e || (o = -o), o += r, new K["sb"](t.x, Math.sin(o) * n, Math.cos(o) * n) } } },
            $n = { Symmetric: (bn = {}, Object(J["a"])(bn, X.ROTATE, Dn(X.ROTATE, !0)), Object(J["a"])(bn, X.INNER_SHIFT, Qn(X.INNER_SHIFT, !0)), Object(J["a"])(bn, X.OUTER_SHIFT, Qn(X.OUTER_SHIFT, !0)), Object(J["a"])(bn, X.INVERSE_ROTATE, Dn(X.INVERSE_ROTATE, !0)), Object(J["a"])(bn, X.INVERSE_INNER_SHIFT, Qn(X.INVERSE_INNER_SHIFT, !0)), Object(J["a"])(bn, X.INVERSE_OUTER_SHIFT, Qn(X.INVERSE_OUTER_SHIFT, !0)), bn), Asymmetric: (fn = {}, Object(J["a"])(fn, X.ROTATE, Dn(X.ROTATE, !1)), Object(J["a"])(fn, X.INNER_SHIFT, Qn(X.INNER_SHIFT, !1)), Object(J["a"])(fn, X.OUTER_SHIFT, Qn(X.OUTER_SHIFT, !1)), Object(J["a"])(fn, X.INVERSE_ROTATE, Dn(X.INVERSE_ROTATE, !1)), Object(J["a"])(fn, X.INVERSE_INNER_SHIFT, Qn(X.INVERSE_INNER_SHIFT, !1)), Object(J["a"])(fn, X.INVERSE_OUTER_SHIFT, Qn(X.INVERSE_OUTER_SHIFT, !1)), fn) },
            qn = { Symmetric: (pn = {}, Object(J["a"])(pn, X.ROTATE, Pn(new K["m"](0, Math.PI, 0), new K["m"](-Math.PI / 2, Math.PI, 0))), Object(J["a"])(pn, X.INVERSE_ROTATE, Pn(new K["m"](0, Math.PI, 0), new K["m"](Math.PI / 2, Math.PI, 0))), pn), Asymmetric: (dn = {}, Object(J["a"])(dn, X.ROTATE, Pn(new K["m"](Math.PI / 2, Math.PI, 0), new K["m"](0, Math.PI, 0))), Object(J["a"])(dn, X.INVERSE_ROTATE, Pn(new K["m"](-Math.PI / 2, Math.PI, 0), new K["m"](0, Math.PI, 0))), dn) };

        function Qn(e, t) { var n, r = [],
                a = t ? Z.Symmetric : Z.Asymmetric,
                o = t ? te : ne; return n = e == X.ROTATE || e == X.INVERSE_ROTATE ? t ? ne : te : o, a[e].forEach((function(e, t) { t == e && (r[t] = null); var a = o[e],
                    i = n[t];
                r[e] = Vn(a, i) })), r }

        function Dn(e, t) { var n = (t ? Z.Symmetric : Z.Asymmetric)[e],
                r = t ? Mn : Hn,
                a = Un(e == X.ROTATE),
                o = [],
                i = t ? te : ne,
                c = t ? ne : te; return r.forEach((function(e) { var t = i[e],
                    r = c[n.find((function(t) { return t == e }))];
                o[e] = a(t, r) })), o } var Bn = .25,
            Ln = function(e, t, n, r) { var a = t.chainRight,
                    o = t.chainSymmetric,
                    i = t.updateChainOrientation,
                    c = function() { return o.value ? Z.Symmetric : Z.Asymmetric },
                    s = function(e) { switch (e) {
                            case X.ROTATE:
                                return h();
                            case X.INNER_SHIFT:
                                return b();
                            case X.OUTER_SHIFT:
                                return p();
                            case X.INVERSE_ROTATE:
                                return m();
                            case X.INVERSE_INNER_SHIFT:
                                return f();
                            case X.INVERSE_OUTER_SHIFT:
                                return d() } },
                    u = function(e) { for (var t = n.value.slice(0), r = 0; r < 30; r++) n.value[r] = t[e[r]] },
                    l = function() { var e = o.value ? te : ne;
                        n.value.forEach((function(t, n) { var r = e[n];
                            t.position.x = r.x, t.position.y = r.y, t.position.z = r.z })) },
                    b = function() { u(c()[X.INNER_SHIFT]), l() },
                    f = function() { u(c()[X.INVERSE_INNER_SHIFT]), l() },
                    p = function() { u(c()[X.OUTER_SHIFT]), l() },
                    d = function() { u(c()[X.INVERSE_OUTER_SHIFT]), l() },
                    h = function() { u(c()[X.ROTATE]), o.value = !o.value, i(), l() },
                    m = function() { u(c()[X.INVERSE_ROTATE]), o.value = !o.value, i(), l() },
                    v = null,
                    O = function() {},
                    j = function() { var e = Object(W["a"])(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function(e) { while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (!v) { e.next = 5; break } return e.next = 3, v.cancel();
                                    case 3:
                                        l(), i();
                                    case 5:
                                    case "end":
                                        return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(),
                    y = function() { var e = Object(W["a"])(regeneratorRuntime.mark((function e(t) { var r, i, c, s, u, l, b = arguments; return regeneratorRuntime.wrap((function(e) { while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return r = b.length > 1 && void 0 !== b[1] ? b[1] : Bn, i = new K["i"], i.start(), c = !1, s = (o.value ? $n.Symmetric : $n.Asymmetric)[t], u = null, t != X.ROTATE && t != X.INVERSE_ROTATE || (u = (o.value ? qn.Symmetric : qn.Asymmetric)[t]), l = n.value.slice(0), v = new Promise((function(e) { O = function() { if (c) return v = null, O = function() {}, e(); var t = i.getElapsedTime(),
                                                    n = Math.min(t / r, 1);
                                                s.forEach((function(e, t) { e && l[t].position.copy(e(n)) })), u && a.value.rotation.copy(u(n)), t >= r && (v = null, O = function() {}, e()) } })), v.cancel = Object(W["a"])(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function(e) { while (1) switch (e.prev = e.next) {
                                                    case 0:
                                                        return c = !0, e.next = 3, this;
                                                    case 3:
                                                    case "end":
                                                        return e.stop() } }), e, this) }))), e.abrupt("return", v);
                                    case 11:
                                    case "end":
                                        return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(); return r.onAnimate((function() { return O() })), { cancelAnimation: j, animateOperation: y, transform: s } },
            Wn = Ln,
            Gn = { a: X.INNER_SHIFT, d: X.INVERSE_INNER_SHIFT, q: X.INVERSE_OUTER_SHIFT, e: X.OUTER_SHIFT, w: X.ROTATE, s: X.INVERSE_ROTATE },
            Kn = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3, Digit5: 4, Digit6: 5 },
            Jn = function(e, t, n) { Object(r["h"])((function() { window.addEventListener("keypress", (function(r) { var a = r.code; if ("KeyT" == a) return n.toggleChainTransparent(); if (t.isInputting.value) { if (a in Kn) return t.inputMarble(Kn[a]) } else { var o = r.key.toLowerCase(); if (o in Gn) return e.pushOperation(Gn[o]) } })), window.addEventListener("keydown", (function(t) { "ArrowRight" == t.code ? e.next() : "ArrowLeft" == t.code ? e.prev() : "Space" == t.code && e.togglePlay() })) })) },
            Xn = Jn,
            Yn = .25,
            Zn = function(e, t) { var n = Object(r["l"])([]),
                    a = Object(r["l"])(0),
                    o = Object(r["l"])(re.FREE),
                    i = Object(r["l"])(!1),
                    c = Object(r["l"])(Yn),
                    s = function() { var n = Object(W["a"])(regeneratorRuntime.mark((function n(r) { return regeneratorRuntime.wrap((function(n) { while (1) switch (n.prev = n.next) {
                                    case 0:
                                        if (o.value != re.DEMONSTRATION) { n.next = 9; break } if (!i.value) { n.next = 7; break } return n.next = 4, b();
                                    case 4:
                                        return n.abrupt("return", n.sent);
                                    case 7:
                                        return n.next = 9, p();
                                    case 9:
                                        return e.value.transform(r), n.next = 12, t.cancelAnimation();
                                    case 12:
                                        t.animateOperation(r, c.value), t.transform(r);
                                    case 14:
                                    case "end":
                                        return n.stop() } }), n) }))); return function(e) { return n.apply(this, arguments) } }(),
                    u = function() { var e = Object(W["a"])(regeneratorRuntime.mark((function e(t) { return regeneratorRuntime.wrap((function(e) { while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, b();
                                    case 2:
                                        n.value = t.slice(0), a.value = 0, o.value = re.DEMONSTRATION;
                                    case 5:
                                    case "end":
                                        return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(),
                    l = function() { if (o.value != re.FREE && !i.value) { i.value = !0; var e = function() { var t = Object(W["a"])(regeneratorRuntime.mark((function t() { return regeneratorRuntime.wrap((function(t) { while (1) switch (t.prev = t.next) {
                                            case 0:
                                                if (i.value) { t.next = 2; break } return t.abrupt("return");
                                            case 2:
                                                if (!(a.value >= n.value.length)) { t.next = 4; break } return t.abrupt("return", b());
                                            case 4:
                                                return t.next = 6, d();
                                            case 6:
                                                e();
                                            case 7:
                                            case "end":
                                                return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }();
                            e() } },
                    b = function() { var e = Object(W["a"])(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function(e) { while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return i.value = !1, e.next = 3, t.cancelAnimation();
                                    case 3:
                                    case "end":
                                        return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(),
                    f = function() { var e = Object(W["a"])(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function(e) { while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (!i.value) { e.next = 5; break } return e.next = 3, b();
                                    case 3:
                                        e.next = 7; break;
                                    case 5:
                                        return e.next = 7, l();
                                    case 7:
                                    case "end":
                                        return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(),
                    p = function() { var e = Object(W["a"])(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function(e) { while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return o.value = re.FREE, n.value = [], i.value = !1, e.next = 5, t.cancelAnimation();
                                    case 5:
                                    case "end":
                                        return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(),
                    d = function() { var r = Object(W["a"])(regeneratorRuntime.mark((function r() { var i, s; return regeneratorRuntime.wrap((function(r) { while (1) switch (r.prev = r.next) {
                                    case 0:
                                        if (!(o.value == re.FREE || a.value >= n.value.length)) { r.next = 2; break } return r.abrupt("return");
                                    case 2:
                                        return i = n.value[a.value++], e.value.transform(i), r.next = 6, t.cancelAnimation();
                                    case 6:
                                        return s = t.animateOperation(i, c.value), t.transform(i), r.next = 10, s;
                                    case 10:
                                    case "end":
                                        return r.stop() } }), r) }))); return function() { return r.apply(this, arguments) } }(),
                    h = function() { var e = Object(W["a"])(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function(e) { while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (!i.value) { e.next = 2; break } return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, d();
                                    case 4:
                                    case "end":
                                        return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(),
                    m = function() { var r = Object(W["a"])(regeneratorRuntime.mark((function r() { var s, u; return regeneratorRuntime.wrap((function(r) { while (1) switch (r.prev = r.next) {
                                    case 0:
                                        if (!(o.value == re.FREE || a.value <= 0)) { r.next = 2; break } return r.abrupt("return");
                                    case 2:
                                        if (!i.value) { r.next = 6; break } return r.next = 5, b();
                                    case 5:
                                        return r.abrupt("return", r.sent);
                                    case 6:
                                        return s = Y[n.value[--a.value]], e.value.transform(s), r.next = 10, t.cancelAnimation();
                                    case 10:
                                        return u = t.animateOperation(s, c.value), t.transform(s), r.next = 14, u;
                                    case 14:
                                    case "end":
                                        return r.stop() } }), r) }))); return function() { return r.apply(this, arguments) } }(),
                    v = function(e) { c.value = e }; return { playbackQueue: n, playbackQueueIndex: a, playbackMode: o, playing: i, speed: c, pushOperation: s, setPlaybackSequence: u, play: l, pause: b, togglePlay: f, stop: p, next: h, prev: m, setSpeed: v } },
            er = Zn,
            tr = n("2909"),
            nr = (n("ac1f"), n("1276"), [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5]),
            rr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij",
            ar = 60;

        function or() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nr.slice(0);
            this.symmetric = e, this.marbles = t, this.listeners = { transform: [], reset: [], solve: [] } }

        function ir(e) { var t = 14; while (e[t] == e[0]) t--; for (var n = 15 - t, r = 1; r <= t; r++)
                if (e[r] != e[r - 1]) { if (5 != n) return !1;
                    n = 1 } else n++; return !0 }

        function cr(e, t) { if (e === t) return !0; if (null == e || null == t) return !1; if (e.length !== t.length) return !1; for (var n = 0; n < e.length; ++n)
                if (e[n] !== t[n]) return !1; return !0 } or.prototype.encode = function() { for (var e = this.symmetric ? "S" : "A", t = 0; t < 30; t += 2) { var n = 6 * this.marbles[t] + this.marbles[t + 1];
                e += rr[n] } return e }, or.decode = function(e) { var t = "S" == e[0],
                n = []; return e.slice(1).split("").forEach((function(e, t) { var r = rr.indexOf(e);
                n[2 * t] = Math.floor(r / 6), n[2 * t + 1] = r % 6 })), new or(t, n) }, or.prototype.map = function(e) { for (var t = this.marbles.slice(0), n = 0; n < 30; n++) this.marbles[n] = t[e[n]]; return this }, or.prototype.equals = function(e) { return this.symmetric == e.symmetric && cr(this.marbles, e.marbles) }, or.prototype.copy = function() { return new or(this.symmetric, Object(tr["a"])(this.marbles)) }, or.prototype.isSolved = function() { return !this.symmetric && ir(this.marbles.slice(0, 15)) && ir(this.marbles.slice(15)) }, or.prototype.normalize = function() { for (var e = {}, t = 0, n = 0; n < 30; n++) { var r = this.marbles[n];
                null == e[r] && (e[r] = t++), this.marbles[n] = e[r] } return this }, or.prototype.scramble = function(e) { e || (e = ar); for (var t = X.INNER_SHIFT, n = 0; n < e; n++) { var r = void 0;
                do { r = Math.floor(6 * Math.random()) } while (r != t && r % 3 == t % 3);
                this.transform(r), t = r } return this }, or.prototype.operationMappings = function() { return this.symmetric ? Z.Symmetric : Z.Asymmetric }, or.prototype.transform = function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; return this.map(this.operationMappings()[e]), e != X.ROTATE && e != X.INVERSE_ROTATE || (this.symmetric = !this.symmetric), this.fireEvent("transform", [e]), t && this.isSolved() && this.fireEvent("solve", []), this }, or.prototype.rotate = function() { return this.transform(X.ROTATE) }, or.prototype.innerShift = function() { return this.transform(X.INNER_SHIFT) }, or.prototype.outerShift = function() { return this.transform(X.OUTER_SHIFT) }, or.prototype.inverseRotate = function() { return this.transform(X.INVERSE_ROTATE) }, or.prototype.inverseInnerShift = function() { return this.transform(X.INVERSE_INNER_SHIFT) }, or.prototype.inverseOuterShift = function() { return this.transform(X.INVERSE_OUTER_SHIFT) }, or.prototype.reset = function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nr.slice(0); return this.symmetric = e, this.marbles = t, this.fireEvent("reset", []), this }, or.prototype.loadPuzzleCode = function(e) { var t = or.decode(e); return this.reset(t.symmetric, t.marbles) }, or.prototype.fireEvent = function() { var e = Object(W["a"])(regeneratorRuntime.mark((function e(t, n) { return regeneratorRuntime.wrap((function(e) { while (1) switch (e.prev = e.next) {
                        case 0:
                            this.listeners[t].forEach(function() { var e = Object(W["a"])(regeneratorRuntime.mark((function e(t) { return regeneratorRuntime.wrap((function(e) { while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", t.apply(void 0, Object(tr["a"])(n)));
                                            case 1:
                                            case "end":
                                                return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }());
                        case 1:
                        case "end":
                            return e.stop() } }), e, this) }))); return function(t, n) { return e.apply(this, arguments) } }(), or.prototype.onTransform = function(e) { this.listeners.transform.push(e) }, or.prototype.onReset = function(e) { this.listeners.reset.push(e) }, or.prototype.onSolve = function(e) { this.listeners.solve.push(e) }; var sr, ur = or,
            lr = function(e, t, n, a) { var o = Object(r["l"])(!1),
                    i = Object(r["l"])(!1),
                    c = [],
                    s = n.value.encode(),
                    u = function(t) { var n = i.value ? te : ne;
                        e.markerMarble.value.position.copy(n[t]) },
                    l = function(n) { i.value = n, o.value && (u(c.length), t.updateChainOrientation(n), e.setMarbleOrientation(n, c)) },
                    b = function() { s = n.value.encode(), i.value = n.value.symmetric, c = [], o.value = !0, t.updateChainOrientation(i.value), e.clearMarbles(), u(0), e.setMarkerVisibility(!0) },
                    f = function() { o.value = !1, e.setMarkerVisibility(!1), a(s) },
                    p = function(t) { if (o.value)
                            if (c[c.length] = t, e.setMarbleOrientation(i.value, c), 30 == c.length) { o.value = !1, e.setMarkerVisibility(!1); var n = new ur(i.value, c);
                                a(n.encode()) } else u(c.length) }; return { isInputting: o, inputSymmetric: i, updateInputSymmetric: l, beginMarbleInput: b, cancelMarbleInput: f, inputMarble: p } },
            br = lr,
            fr = (n("99af"), n("4e82"), 60),
            pr = (sr = {}, Object(J["a"])(sr, X.INNER_SHIFT, 0), Object(J["a"])(sr, X.INVERSE_INNER_SHIFT, 1), Object(J["a"])(sr, X.OUTER_SHIFT, 2), Object(J["a"])(sr, X.INVERSE_OUTER_SHIFT, 3), sr),
            dr = { scramble: function() { for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fr, t = [], n = X.INNER_SHIFT, r = 0; r < e; r++) { var a = void 0;
                        do { a = Math.floor(6 * Math.random()) } while (a != n && a % 3 == n % 3);
                        t.push(a), n = a } return t }, reorder: function(e) { for (var t = [], n = 0, r = function(e, t) { return pr[e] - pr[t] }, a = 0; a < e.length; a++) e[a] != X.ROTATE && e[a] != X.INVERSE_ROTATE || (t = t.concat(e.slice(n, a).sort(r)), t.push(e[a]), n = a + 1); return t = t.concat(e.slice(n).sort(r)), t } },
            hr = dr,
            mr = (n("130f"), n("175a")),
            vr = n.n(mr),
            Or = function(e) { var t = e.length - 1; while (e[t] == e[0]) t--; for (var n = 1, r = 1; r <= t; r++) e[r] != e[r - 1] && n++; return n },
            jr = { ContiguousGroups: function(e) { return e.symmetric ? Or(e.marbles.slice(0, 18)) + Or(e.marbles.slice(18)) : Or(e.marbles.slice(0, 15)) + Or(e.marbles.slice(15)) } },
            yr = jr;

        function wr(e, t, n, r, a) { this.position = e, this.parent = t, this.operation = n, this.priority = r, this.depth = a, this.children = [] } var gr = function(e) { var t = []; while (e.parent) t.unshift(e.operation), e = e.parent; return t },
            Er = function(e, t) { var n = new vr.a((function(e, t) { return e.priority - t.priority })); return e.toArray().forEach((function(e) { e.depth <= t && n.push(e) })), n },
            Sr = { initialDepth: 100 },
            Ir = { solve: function(e, t) { var n = new wr(e.copy().normalize().encode(), null, -1, yr.ContiguousGroups(e), 0),
                        r = new vr.a((function(e, t) { return e.priority - t.priority }));
                    r.push(n); var a = {}; while (r.size() > 0) { var o = r.pop(); if (!a[o.position]) { var i = ur.decode(o.position); if (i.isSolved()) return gr(o); if (!(o.depth >= t)) { for (var c = 0; c < 6; c++)
                                    if (c == o.operation || c % 3 != o.operation % 3) { var s = i.copy().transform(c).normalize(),
                                            u = s.encode(); if (!a[u]) { var l = new wr(u, o, c, yr.ContiguousGroups(s), o.depth + 1);
                                            o.children.push(l), r.push(l) } } a[o.position] = !0 } } } return null }, generateSolutions: function(e, t, n) { var r = Object.assign({}, Sr, n),
                        a = r.initialDepth,
                        o = !1,
                        i = null,
                        c = new wr(e.copy().normalize().encode(), null, -1, yr.ContiguousGroups(e), 0),
                        s = new vr.a((function(e, t) { return e.priority - t.priority }));
                    s.push(c); var u = {},
                        l = new Promise((function(e) { var n = function() { var r = Object(W["a"])(regeneratorRuntime.mark((function r() { var c, l, b, f, p, d, h; return regeneratorRuntime.wrap((function(r) { while (1) switch (r.prev = r.next) {
                                            case 0:
                                                if (!s.empty() && !o) { r.next = 2; break } return r.abrupt("return", e());
                                            case 2:
                                                if (c = s.pop(), !u[c.position]) { r.next = 5; break } return r.abrupt("return", setImmediate(n));
                                            case 5:
                                                if (l = ur.decode(c.position), !l.isSolved()) { r.next = 13; break } return b = hr.reorder(gr(c)), t(b), i = b, s = Er(s, c.depth - 1), a = c.depth - 1, r.abrupt("return", setImmediate(n));
                                            case 13:
                                                if (!(c.depth >= a)) { r.next = 15; break } return r.abrupt("return", setImmediate(n));
                                            case 15:
                                                f = 0;
                                            case 16:
                                                if (!(f < 6)) { r.next = 29; break } if (f == c.operation || f % 3 != c.operation % 3) { r.next = 19; break } return r.abrupt("continue", 26);
                                            case 19:
                                                if (p = l.copy().transform(f).normalize(), d = p.encode(), !u[d]) { r.next = 23; break } return r.abrupt("continue", 26);
                                            case 23:
                                                h = new wr(d, c, f, yr.ContiguousGroups(p), c.depth + 1), c.children.push(h), s.push(h);
                                            case 26:
                                                f++, r.next = 16; break;
                                            case 29:
                                                u[c.position] = !0, setImmediate(n);
                                            case 31:
                                            case "end":
                                                return r.stop() } }), r) }))); return function() { return r.apply(this, arguments) } }();
                            n() })); return Object(W["a"])(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function(e) { while (1) switch (e.prev = e.next) {
                                case 0:
                                    return o = !0, e.next = 3, l;
                                case 3:
                                    return e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop() } }), e) }))) } },
            Rr = Ir,
            Tr = { components: { ViewportControls: ft, PuzzleCodeBox: be, PlaybackBar: _t, ControlsGuide: hn }, setup: function() { var e = Object(r["p"])(new ur),
                        t = Object(r["l"])(e.value.encode()),
                        n = Object(r["l"])(e.value.isSolved()),
                        a = Object(r["l"])(!1),
                        o = Object(r["l"])(null),
                        i = Object(r["p"])(null),
                        c = function(t) { return e.value.loadPuzzleCode(t) };
                    e.value.onTransform((function() { t.value = e.value.encode(), n.value = e.value.isSolved() })), e.value.onReset((function() { h.isInputting.value = !1, f.setMarkerVisibility(!1), t.value = e.value.encode(), n.value = e.value.isSolved() })); var s = On(),
                        u = En(s.camera, s.viewport, s.onAnimate),
                        l = In(s.scene),
                        b = _n(s.scene, e),
                        f = Fn(s.scene, e),
                        p = Wn(e, b, f.marbles, s),
                        d = er(e, p),
                        h = br(f, b, e, c); return Xn(d, h, b), Object(G["a"])(Object(G["a"])(Object(G["a"])(Object(G["a"])(Object(G["a"])(Object(G["a"])(Object(G["a"])(Object(G["a"])({ puzzle: e, puzzleCode: t, isSolved: n, isSolving: a, bestSolution: o, stopSolvingFunc: i, loadPuzzleCode: c }, s), u), l), b), f), p), d), h) }, mounted: function() { this.animate() }, methods: { scramble: function() { var e = this; return Object(W["a"])(regeneratorRuntime.mark((function t() { return regeneratorRuntime.wrap((function(t) { while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.setPlaybackSequence(hr.scramble());
                                    case 2:
                                        e.play();
                                    case 3:
                                    case "end":
                                        return t.stop() } }), t) })))() }, reset: function() { this.puzzle.reset() }, findSolutions: function() { var e = this; return Object(W["a"])(regeneratorRuntime.mark((function t() { return regeneratorRuntime.wrap((function(t) { while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e.isSolving = !0, e.stopSolvingFunc = Rr.generateSolutions(e.puzzle, (function(t) { e.bestSolution = t }));
                                    case 2:
                                    case "end":
                                        return t.stop() } }), t) })))() }, chooseSolution: function() { var e = this; return Object(W["a"])(regeneratorRuntime.mark((function t() { return regeneratorRuntime.wrap((function(t) { while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.stopSolvingFunc();
                                    case 2:
                                        return e.bestSolution = t.sent, t.next = 5, e.setPlaybackSequence(e.bestSolution);
                                    case 5:
                                        e.isSolving = !1, e.bestSolution = null;
                                    case 7:
                                    case "end":
                                        return t.stop() } }), t) })))() } }, computed: { showPlaybackControls: function() { return this.playbackMode == re.DEMONSTRATION }, controlsType: function() { return this.isInputting ? "input-marbles" : this.showPlaybackControls ? "playback" : "puzzle" } } };
        Tr.render = L, Tr.__scopeId = "data-v-6c49c261"; var kr = Tr,
            xr = { name: "App", components: { Navbar: U, Viewport: kr } };
        n("d70b");
        xr.render = o; var _r = xr;
        n("ab8b"), n("cd74");
        Object(r["b"])(_r).mount("#app") }, "594b": function(e, t, n) { "use strict";
        n("13b5") }, 7765: function(e, t, n) { "use strict";
        n("f61b") }, "963e": function(e, t, n) {}, a1d5: function(e, t, n) {}, b889: function(e, t, n) {}, d70b: function(e, t, n) { "use strict";
        n("f98c") }, ed46: function(e, t, n) {}, f2f2: function(e, t, n) { "use strict";
        n("34e9") }, f61b: function(e, t, n) {}, f98c: function(e, t, n) {} });
//# sourceMappingURL=app.030149bd.js.map