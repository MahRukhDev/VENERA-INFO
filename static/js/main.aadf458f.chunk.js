(this["webpackJsonp@fastswap/info"] =
  this["webpackJsonp@fastswap/info"] || []).push([
  [0],
  {
    252: function (e, t, n) {
      e.exports = n.p + "static/media/logo.c061552c.png";
    },
    417: function (e, t) {
      e.exports = "/logo.svg";
    },
    418: function (e, t, n) {
      e.exports = n.p + "static/media/eth.73dabb37.png";
    },
    456: function (e, t, n) {
      e.exports = n(977);
    },
    496: function (e, t) {},
    504: function (e, t) {},
    521: function (e, t) {},
    523: function (e, t) {},
    538: function (e, t) {},
    539: function (e, t) {},
    626: function (e, t) {},
    627: function (e, t) {},
    676: function (e, t) {},
    678: function (e, t) {},
    695: function (e, t) {},
    697: function (e, t) {},
    977: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        i = n(122),
        o = n.n(i),
        c = n(2),
        l = n(4),
        u = n(3),
        s = n(77),
        d = n(18),
        m = n(15),
        p = [
          "DARK_MODE",
          "DISMISSED_PATHS",
          "SAVED_ACCOUNTS",
          "SAVED_PAIRS",
          "SAVED_TOKENS",
        ],
        f = Object(a.createContext)();
      function v() {
        return Object(a.useContext)(f);
      }
      function b(e, t) {
        var n = t.type,
          a = t.payload;
        switch (n) {
          case "UPDATE_KEY":
            var r = a.key,
              i = a.value;
            if (
              p.some(function (e) {
                return e === r;
              })
            )
              return Object(m.a)({}, e, Object(d.a)({}, r, i));
            throw Error(
              "Unexpected key in LocalStorageContext reducer: '".concat(r, "'.")
            );
          default:
            throw Error(
              "Unexpected action type in LocalStorageContext reducer: '".concat(
                n,
                "'."
              )
            );
        }
      }
      function y() {
        var e,
          t =
            ((e = {}),
            Object(d.a)(e, "VERSION", 0),
            Object(d.a)(e, "DARK_MODE", !0),
            Object(d.a)(e, "DISMISSED_PATHS", {}),
            Object(d.a)(e, "SAVED_ACCOUNTS", []),
            Object(d.a)(e, "SAVED_TOKENS", {}),
            Object(d.a)(e, "SAVED_PAIRS", {}),
            e);
        try {
          var n = JSON.parse(window.localStorage.getItem("UNISWAP"));
          return 0 !== n.VERSION ? t : Object(m.a)({}, t, {}, n);
        } catch (a) {
          return t;
        }
      }
      function h(e) {
        var t = e.children,
          n = Object(a.useReducer)(b, void 0, y),
          i = Object(l.a)(n, 2),
          o = i[0],
          c = i[1],
          u = Object(a.useCallback)(function (e, t) {
            c({ type: "UPDATE_KEY", payload: { key: e, value: t } });
          }, []);
        return r.a.createElement(
          f.Provider,
          {
            value: Object(a.useMemo)(
              function () {
                return [o, { updateKey: u }];
              },
              [o, u]
            ),
          },
          t
        );
      }
      function E() {
        var e = v(),
          t = Object(l.a)(e, 1)[0];
        return (
          Object(a.useEffect)(function () {
            window.localStorage.setItem(
              "UNISWAP",
              JSON.stringify(
                Object(m.a)(
                  {},
                  t,
                  Object(d.a)({}, "LAST_SAVED", Math.floor(Date.now() / 1e3))
                )
              )
            );
          }),
          null
        );
      }
      function x() {
        var e = v(),
          t = Object(l.a)(e, 2),
          n = t[0],
          r = t[1].updateKey,
          i = n.DARK_MODE,
          o = Object(a.useCallback)(
            function (e) {
              r("DARK_MODE", !1 === e || !0 === e ? e : !i);
            },
            [r, i]
          );
        return [i, o];
      }
      function g(e) {
        var t,
          n = v(),
          a = Object(l.a)(n, 2),
          r = a[0],
          i = a[1].updateKey;
        return [
          null === r || void 0 === r
            ? void 0
            : null === (t = r.DISMISSED_PATHS) || void 0 === t
            ? void 0
            : t[e],
          function () {
            var t = null === r || void 0 === r ? void 0 : r.DISMISSED_PATHS;
            (t[e] = !0), i("DISMISSED_PATHS", t);
          },
        ];
      }
      function k() {
        var e = v(),
          t = Object(l.a)(e, 2),
          n = t[0],
          r = t[1].updateKey,
          i = null === n || void 0 === n ? void 0 : n.SAVED_ACCOUNTS,
          o = Object(a.useCallback)(
            function (e) {
              r(
                "SAVED_ACCOUNTS",
                [].concat(Object(s.a)(null !== i && void 0 !== i ? i : []), [e])
              );
            },
            [i, r]
          ),
          c = Object(a.useCallback)(
            function (e) {
              var t,
                n =
                  null !==
                    (t = null === i || void 0 === i ? void 0 : i.indexOf(e)) &&
                  void 0 !== t
                    ? t
                    : -1;
              n > -1 &&
                r(
                  "SAVED_ACCOUNTS",
                  [].concat(
                    Object(s.a)(i.slice(0, n)),
                    Object(s.a)(i.slice(n + 1, i.length))
                  )
                );
            },
            [i, r]
          );
        return [i, o, c];
      }
      function O() {
        var e = v(),
          t = Object(l.a)(e, 2),
          n = t[0],
          a = t[1].updateKey;
        return [
          null === n || void 0 === n ? void 0 : n.SAVED_PAIRS,
          function (e, t, r, i, o) {
            var c = null === n || void 0 === n ? void 0 : n.SAVED_PAIRS;
            (c[e] = {
              address: e,
              token0Address: t,
              token1Address: r,
              token0Symbol: i,
              token1Symbol: o,
            }),
              a("SAVED_PAIRS", c);
          },
          function (e) {
            var t = null === n || void 0 === n ? void 0 : n.SAVED_PAIRS;
            (t[e] = null), a("SAVED_PAIRS", t);
          },
        ];
      }
      function j() {
        var e = v(),
          t = Object(l.a)(e, 2),
          n = t[0],
          a = t[1].updateKey;
        return [
          null === n || void 0 === n ? void 0 : n.SAVED_TOKENS,
          function (e, t) {
            var r = null === n || void 0 === n ? void 0 : n.SAVED_TOKENS;
            (r[e] = { symbol: t }), a("SAVED_TOKENS", r);
          },
          function (e) {
            var t = null === n || void 0 === n ? void 0 : n.SAVED_TOKENS;
            (t[e] = null), a("SAVED_TOKENS", t);
          },
        ];
      }
      var S = n(9);
      function w() {
        var e = Object(c.a)([
          "\n  @import url('https://rsms.me/inter/inter.css');\n  html { font-family: 'Inter', sans-serif; }\n  @supports (font-variation-settings: normal) {\n    html { font-family: 'Inter var', sans-serif; }\n  }\n\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    font-size: 14px;\n    background-color: ",
          ";\n  }\n\n  a {\n    text-decoration: none;\n\n    :hover {\n      text-decoration: none\n    }\n  }\n\n\n.three-line-legend {\n\twidth: 100%;\n\theight: 70px;\n\tposition: absolute;\n\tpadding: 8px;\n\tfont-size: 12px;\n\tcolor: #20262E;\n\tbackground-color: rgba(255, 255, 255, 0.23);\n\ttext-align: left;\n\tz-index: 10;\n  pointer-events: none;\n}\n\n.three-line-legend-dark {\n\twidth: 100%;\n\theight: 70px;\n\tposition: absolute;\n\tpadding: 8px;\n\tfont-size: 12px;\n\tcolor: white;\n\tbackground-color: rgba(255, 255, 255, 0.23);\n\ttext-align: left;\n\tz-index: 10;\n  pointer-events: none;\n}\n\n@media screen and (max-width: 800px) {\n  .three-line-legend {\n    display: none !important;\n  }\n}\n\n.tv-lightweight-charts{\n  width: 100% !important;\n\n\n  & > * {\n    width: 100% !important;\n  }\n}\n\n\n  html {\n    font-size: 1rem;\n    font-variant: none;\n    color: 'black';\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    height: 100%;\n  }\n",
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = Object(c.a)([
          "\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  max-width: 100vw !important;\n  height: 200vh;\n  mix-blend-mode: color;\n  background: ",
          ";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 9999;\n\n  transform: translateY(-110vh);\n",
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      function T() {
        var e = Object(c.a)([
          "\n  text-decoration: none;\n  cursor: pointer;\n  color: ",
          ";\n  font-weight: 500;\n  :hover {\n    text-decoration: underline;\n  }\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n  :active {\n    text-decoration: none;\n  }\n",
        ]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      function U() {
        var e = Object(c.a)(["\n  :hover {\n    cursor: pointer;\n  }\n"]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      var F = function (e, t) {
          return {
            customColor: t,
            textColor: e ? t : "black",
            panelColor: "rgba(255, 255, 255, 0)",
            backgroundColor: e ? "#191326" : "#f5f3f3",
            uniswapPink: e ? "red" : "black",
            concreteGray: e ? "#292C2F" : "#fffdfa",
            inputBackground: e ? "#1F1F1F" : "#fffdfa",
            shadowColor: e ? "#000" : "#2F80ED",
            mercuryGray: e ? "#333333" : "#E1E1E1",
            text1: e ? "#fffdfa" : "#1F1F1F",
            text2: e ? "#C3C5CB" : "#565A69",
            text3: e ? "#6C7284" : "#888D9B",
            text4: e ? "#565A69" : "#C3C5CB",
            text5: e ? "#2C2F36" : "#EDEEF2",
            white: "#FFFFFF",
            bg1: e ? "#212429" : "#fffdfa",
            bg2: e ? "#2C2F36" : "#F7F8FA",
            bg3: e ? "#40444F" : "#EDEEF2",
            bg4: e ? "#565A69" : "#CED0D9",
            bg5: e ? "#565A69" : "#888D9B",
            bg6: e ? "#000" : "#FFFFFF",
            modalBG: e ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.6)",
            advancedBG: e ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.4)",
            onlyLight: e ? "#0a171f" : "transparent",
            divider: e ? "rgba(43, 43, 43, 0.435)" : "rgba(43, 43, 43, 0.035)",
            primary1: e ? "#2172E5" : "#4FD8DE",
            primary2: e ? "#3680E7" : "#FF8CC3",
            primary3: e ? "#4D8FEA" : "#FF99C9",
            primary4: e ? "#376bad70" : "#F6DDE8",
            primary5: e ? "#153d6f70" : "#FDEAF1",
            primaryText1: e ? "#6da8ff" : "#4FD8DE",
            secondary1: e ? "#2172E5" : "#4FD8DE",
            secondary2: e ? "#17000b26" : "#F6DDE8",
            secondary3: e ? "#17000b26" : "#FDEAF1",
            shadow1: e ? "#000" : "#2F80ED",
            red1: "#FF6871",
            green1: "#27AE60",
            yellow1: "#FFE270",
            yellow2: "#F3841E",
            link: "#12aab5",
            blue: "2f80ed",
            background: e
              ? "black"
              : "radial-gradient(50% 50% at 50% 50%, #4FD8DE 30 0%, #fff 0%)",
          };
        },
        A = Object(u.default)(S.d)(C(), function (e) {
          var t = e.color;
          return e.theme[t];
        }),
        P = function (e) {
          return r.a.createElement(
            A,
            Object.assign({ fontWeight: 500, fontSize: 14, color: "text1" }, e)
          );
        },
        I = function (e) {
          return r.a.createElement(
            A,
            Object.assign({ fontWeight: 400, fontSize: 14, color: "text1" }, e)
          );
        },
        L = function (e) {
          return r.a.createElement(
            A,
            Object.assign({ fontWeight: 500, fontSize: 11, color: "text1" }, e)
          );
        },
        q = function (e) {
          return r.a.createElement(
            A,
            Object.assign({ fontWeight: 600, color: "text1" }, e)
          );
        },
        _ = function (e) {
          return r.a.createElement(
            A,
            Object.assign({ fontWeight: 500, color: "text1", fontSize: 24 }, e)
          );
        },
        R = function (e) {
          return r.a.createElement(
            A,
            Object.assign({ fontWeight: 400, color: "text3", fontSize: 14 }, e)
          );
        },
        z =
          (u.default.div(U()),
          u.default.a.attrs({ target: "_blank", rel: "noopener noreferrer" })(
            T(),
            function (e) {
              return e.theme.primary1;
            }
          ),
          u.default.div(D(), function (e) {
            var t = e.backgroundColor;
            return "radial-gradient(50% 50% at 50% 50%, ".concat(
              t,
              " 0%, rgba(255, 255, 255, 0) 100%)"
            );
          })),
        M = Object(u.createGlobalStyle)(w(), function (e) {
          return e.theme.bg6;
        }),
        V = n(5),
        H = n.n(V),
        B = n(10),
        N = n(128),
        W = n(129),
        K = n(130),
        Y = new N.a({
          link: new K.a({
            uri: "https://api.thegraph.com/subgraphs/name/polaris-labs/fastswap",
          }),
          cache: new W.a(),
          shouldBatch: !0,
        }),
        Q = new N.a({
          link: new K.a({ uri: "https://api.thegraph.com/index-node/graphql" }),
          cache: new W.a(),
          shouldBatch: !0,
        }),
        G =
          (new N.a({
            link: new K.a({
              uri: "https://api.thegraph.com/subgraphs/name/ianlapham/uniswap",
            }),
            cache: new W.a(),
            shouldBatch: !0,
          }),
          new N.a({
            link: new K.a({
              uri: "https://api.thegraph.com/subgraphs/name/way2rach/talisman",
            }),
            cache: new W.a(),
            shouldBatch: !0,
          })),
        J = new N.a({
          link: new K.a({
            uri: "https://api.thegraph.com/subgraphs/name/pancakeswap/blocks",
          }),
          cache: new W.a(),
        }),
        X = n(30),
        $ = n.n(X),
        Z = Math.round(+new Date() / 1e3),
        ee = { WEEK: "1 week", MONTH: "1 month", ALL_TIME: "All time" },
        te = [
          "https://raw.githubusercontent.com/pancakeswap/pancake-swap-interface/master/src/constants/token/pancakeswap.json",
        ],
        ne = [
          "0x495c7f3a713870f68f8b418b355c085dfdc412c3",
          "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea",
          "0xe31debd7abff90b06bca21010dd860d8701fd901",
          "0xfc989fbb6b3024de5ca0144dc23c18a063942ac1",
          "0xe40fc6ff5f2895b44268fd2e1a421e07f567e007",
          "0xfd158609228b43aa380140b46fff3cdf9ad315de",
          "0xc00af6212fcf0e6fd3143e692ccd4191dc308bea",
          "0x205969b3ad459f7eba0dee07231a6357183d3fb6",
          "0x0bd67d358636fd7b0597724aa4f20beedbf3073a",
          "0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075",
          "0x702b0789a3d4dade1688a0c8b7d944e5ba80fc30",
          "0x041929a760d7049edaef0db246fa76ec975e90cc",
          "0xba098df8c6409669f5e6ec971ac02cd5982ac108",
          "0x1bbed115afe9e8d6e9255f18ef10d43ce6608d94",
          "0xe99512305bf42745fae78003428dcaf662afb35d",
          "0xbE609EAcbFca10F6E5504D39E3B113F808389056",
        ],
        ae = ["0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5"],
        re = ["0xd46ba6d942050d489dbd938a2c909a5d5039a161"];
      function ie() {
        var e = Object(c.a)([
          "\n  query($allPairs: [Bytes]!) {\n    mints(first: 20, where: { pair_in: $allPairs }, orderBy: timestamp, orderDirection: desc) {\n      transaction {\n        id\n        timestamp\n      }\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      liquidity\n      amount0\n      amount1\n      amountUSD\n    }\n    burns(first: 20, where: { pair_in: $allPairs }, orderBy: timestamp, orderDirection: desc) {\n      transaction {\n        id\n        timestamp\n      }\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      liquidity\n      amount0\n      amount1\n      amountUSD\n    }\n    swaps(first: 30, where: { pair_in: $allPairs }, orderBy: timestamp, orderDirection: desc) {\n      transaction {\n        id\n        timestamp\n      }\n      id\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      amount0In\n      amount0Out\n      amount1In\n      amount1Out\n      amountUSD\n      to\n    }\n  }\n",
        ]);
        return (
          (ie = function () {
            return e;
          }),
          e
        );
      }
      function oe() {
        var e = Object(c.a)([
          "\n  ",
          "\n  query tokens {\n    tokens(first: 200, orderBy: tradeVolumeUSD, orderDirection: desc) {\n      ...TokenFields\n    }\n  }\n",
        ]);
        return (
          (oe = function () {
            return e;
          }),
          e
        );
      }
      function ce() {
        var e = Object(c.a)([
          "\n  query tokenDayDatas($tokenAddr: String!, $skip: Int!) {\n    tokenDayDatas(first: 1000, skip: $skip, orderBy: date, orderDirection: asc, where: { token: $tokenAddr }) {\n      id\n      date\n      priceUSD\n      totalLiquidityToken\n      totalLiquidityUSD\n      totalLiquidityETH\n      dailyVolumeETH\n      dailyVolumeToken\n      dailyVolumeUSD\n    }\n  }\n",
        ]);
        return (
          (ce = function () {
            return e;
          }),
          e
        );
      }
      function le() {
        var e = Object(c.a)([
          "\n  ",
          "\n  query pairs($allPairs: [Bytes]!) {\n    pairs(where: { id_in: $allPairs }, orderBy: trackedReserveETH, orderDirection: desc) {\n      ...PairFields\n    }\n  }\n",
        ]);
        return (
          (le = function () {
            return e;
          }),
          e
        );
      }
      function ue() {
        var e = Object(c.a)([
          "\n  query pairs {\n    pairs(first: 200, orderBy: trackedReserveETH, orderDirection: desc) {\n      id\n    }\n  }\n",
        ]);
        return (
          (ue = function () {
            return e;
          }),
          e
        );
      }
      function se() {
        var e = Object(c.a)([
          "\n  query pairs($skip: Int!) {\n    pairs(first: 100, skip: $skip, orderBy: trackedReserveETH, orderDirection: desc) {\n      id\n      token0 {\n        id\n        symbol\n        name\n      }\n      token1 {\n        id\n        symbol\n        name\n      }\n    }\n  }\n",
        ]);
        return (
          (se = function () {
            return e;
          }),
          e
        );
      }
      function de() {
        var e = Object(c.a)([
          "\n  query pairs($tokens: [Bytes]!, $id: String) {\n    as0: pairs(where: { token0_in: $tokens }) {\n      id\n      token0 {\n        id\n        symbol\n        name\n      }\n      token1 {\n        id\n        symbol\n        name\n      }\n    }\n    as1: pairs(where: { token1_in: $tokens }) {\n      id\n      token0 {\n        id\n        symbol\n        name\n      }\n      token1 {\n        id\n        symbol\n        name\n      }\n    }\n    asAddress: pairs(where: { id: $id }) {\n      id\n      token0 {\n        id\n        symbol\n        name\n      }\n      token1 {\n        id\n        symbol\n        name\n      }\n    }\n  }\n",
        ]);
        return (
          (de = function () {
            return e;
          }),
          e
        );
      }
      function me() {
        var e = Object(c.a)([
          "\n  query tokens($value: String, $id: String) {\n    asSymbol: tokens(where: { symbol_contains: $value }, orderBy: totalLiquidity, orderDirection: desc) {\n      id\n      symbol\n      name\n      totalLiquidity\n    }\n    asName: tokens(where: { name_contains: $value }, orderBy: totalLiquidity, orderDirection: desc) {\n      id\n      symbol\n      name\n      totalLiquidity\n    }\n    asAddress: tokens(where: { id: $id }, orderBy: totalLiquidity, orderDirection: desc) {\n      id\n      symbol\n      name\n      totalLiquidity\n    }\n  }\n",
        ]);
        return (
          (me = function () {
            return e;
          }),
          e
        );
      }
      function pe() {
        var e = Object(c.a)([
          "\n  query tokens($skip: Int!) {\n    tokens(first: 100, skip: $skip) {\n      id\n      name\n      symbol\n      totalLiquidity\n    }\n  }\n",
        ]);
        return (
          (pe = function () {
            return e;
          }),
          e
        );
      }
      function fe() {
        var e = Object(c.a)([
          "\n  query transactions {\n    transactions(first: 50, orderBy: timestamp, orderDirection: desc) {\n      mints(orderBy: timestamp, orderDirection: desc) {\n        transaction {\n          id\n          timestamp\n        }\n        pair {\n          token0 {\n            id\n            symbol\n          }\n          token1 {\n            id\n            symbol\n          }\n        }\n        to\n        liquidity\n        amount0\n        amount1\n        amountUSD\n      }\n      burns(orderBy: timestamp, orderDirection: desc) {\n        transaction {\n          id\n          timestamp\n        }\n        pair {\n          token0 {\n            id\n            symbol\n          }\n          token1 {\n            id\n            symbol\n          }\n        }\n        sender\n        liquidity\n        amount0\n        amount1\n        amountUSD\n      }\n      swaps(orderBy: timestamp, orderDirection: desc) {\n        transaction {\n          id\n          timestamp\n        }\n        pair {\n          token0 {\n            id\n            symbol\n          }\n          token1 {\n            id\n            symbol\n          }\n        }\n        amount0In\n        amount0Out\n        amount1In\n        amount1Out\n        amountUSD\n        to\n      }\n    }\n  }\n",
        ]);
        return (
          (fe = function () {
            return e;
          }),
          e
        );
      }
      function ve() {
        var e = Object(c.a)([
          "\n  query uniswapDayDatas($startTime: Int!, $skip: Int!) {\n    uniswapDayDatas(first: 1000, skip: $skip, where: { date_gt: $startTime }, orderBy: date, orderDirection: asc) {\n      id\n      date\n      totalVolumeUSD\n      dailyVolumeUSD\n      dailyVolumeETH\n      totalLiquidityUSD\n      totalLiquidityETH\n    }\n  }\n",
        ]);
        return (
          (ve = function () {
            return e;
          }),
          e
        );
      }
      function be() {
        var e = Object(c.a)([
          "\n  query pairDayDatas($pairAddress: Bytes!, $date: Int!) {\n    pairDayDatas(first: 1, orderBy: date, orderDirection: desc, where: { pairAddress: $pairAddress, date_lt: $date }) {\n      id\n      date\n      dailyVolumeToken0\n      dailyVolumeToken1\n      dailyVolumeUSD\n      totalSupply\n      reserveUSD\n    }\n  }\n",
        ]);
        return (
          (be = function () {
            return e;
          }),
          e
        );
      }
      function ye() {
        var e = Object(c.a)([
          "\n  query pairDayDatas($pairAddress: Bytes!, $skip: Int!) {\n    pairDayDatas(first: 1000, skip: $skip, orderBy: date, orderDirection: asc, where: { pairAddress: $pairAddress }) {\n      id\n      date\n      dailyVolumeToken0\n      dailyVolumeToken1\n      dailyVolumeUSD\n      reserve0\n      reserve1\n      reserveUSD\n    }\n  }\n",
        ]);
        return (
          (ye = function () {
            return e;
          }),
          e
        );
      }
      function he() {
        var e = Object(c.a)([
          "\n  query transactions($user: Bytes!) {\n    mints(orderBy: timestamp, orderDirection: desc, where: { to: $user }) {\n      id\n      transaction {\n        id\n        timestamp\n      }\n      pair {\n        id\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      liquidity\n      amount0\n      amount1\n      amountUSD\n    }\n    burns(orderBy: timestamp, orderDirection: desc, where: { sender: $user }) {\n      id\n      transaction {\n        id\n        timestamp\n      }\n      pair {\n        id\n        token0 {\n          symbol\n        }\n        token1 {\n          symbol\n        }\n      }\n      sender\n      to\n      liquidity\n      amount0\n      amount1\n      amountUSD\n    }\n    swaps(orderBy: timestamp, orderDirection: desc, where: { to: $user }) {\n      id\n      transaction {\n        id\n        timestamp\n      }\n      pair {\n        token0 {\n          symbol\n        }\n        token1 {\n          symbol\n        }\n      }\n      amount0In\n      amount0Out\n      amount1In\n      amount1Out\n      amountUSD\n      to\n    }\n  }\n",
        ]);
        return (
          (he = function () {
            return e;
          }),
          e
        );
      }
      function Ee() {
        var e = Object(c.a)([
          "\n  query liquidityPositions($user: Bytes!) {\n    liquidityPositions(where: { user: $user }) {\n      pair {\n        id\n        reserve0\n        reserve1\n        reserveUSD\n        token0 {\n          id\n          symbol\n          derivedETH\n        }\n        token1 {\n          id\n          symbol\n          derivedETH\n        }\n        totalSupply\n      }\n      liquidityTokenBalance\n    }\n  }\n",
        ]);
        return (
          (Ee = function () {
            return e;
          }),
          e
        );
      }
      function xe() {
        var e = Object(c.a)([
          "\n  query snapshots($user: Bytes!, $skip: Int!) {\n    liquidityPositionSnapshots(first: 1000, skip: $skip, where: { user: $user }) {\n      timestamp\n      reserveUSD\n      liquidityTokenBalance\n      liquidityTokenTotalSupply\n      reserve0\n      reserve1\n      token0PriceUSD\n      token1PriceUSD\n      pair {\n        id\n        reserve0\n        reserve1\n        reserveUSD\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (xe = function () {
            return e;
          }),
          e
        );
      }
      function ge() {
        var e = Object(c.a)([
          "\n  query snapshots($user: Bytes!) {\n    liquidityPositionSnapshots(first: 1, where: { user: $user }, orderBy: timestamp, orderDirection: asc) {\n      timestamp\n    }\n  }\n",
        ]);
        return (
          (ge = function () {
            return e;
          }),
          e
        );
      }
      function ke() {
        var e = Object(c.a)([
          "\n  query events($user: Bytes!, $pair: Bytes!) {\n    mints(where: { to: $user, pair: $pair }) {\n      amountUSD\n      amount0\n      amount1\n      timestamp\n      pair {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n    burns(where: { sender: $user, pair: $pair }) {\n      amountUSD\n      amount0\n      amount1\n      timestamp\n      pair {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (ke = function () {
            return e;
          }),
          e
        );
      }
      function Oe() {
        var e = Object(c.a)([
          "\n  query lps($pair: Bytes!) {\n    liquidityPositions(where: { pair: $pair }, orderBy: liquidityTokenBalance, orderDirection: desc, first: 10) {\n      user {\n        id\n      }\n      pair {\n        id\n      }\n      liquidityTokenBalance\n    }\n  }\n",
        ]);
        return (
          (Oe = function () {
            return e;
          }),
          e
        );
      }
      function je() {
        var e = Object(c.a)([
          "\n  query blocks($timestampFrom: Int!, $timestampTo: Int!) {\n    blocks(\n      first: 1\n      orderBy: timestamp\n      orderDirection: asc\n      where: { timestamp_gt: $timestampFrom, timestamp_lt: $timestampTo }\n    ) {\n      id\n      number\n      timestamp\n    }\n  }\n",
        ]);
        return (
          (je = function () {
            return e;
          }),
          e
        );
      }
      function Se() {
        var e = Object(c.a)([
          '\n  query uniswap($date: Int!, $date2: Int!) {\n    current: uniswap(id: "1") {\n      totalVolumeUSD\n      totalLiquidityUSD\n      txCount\n    }\n    oneDay: uniswapHistoricalDatas(where: { timestamp_lt: $date }, first: 1, orderBy: timestamp, orderDirection: desc) {\n      totalVolumeUSD\n      totalLiquidityUSD\n      txCount\n    }\n    twoDay: uniswapHistoricalDatas(\n      where: { timestamp_lt: $date2 }\n      first: 1\n      orderBy: timestamp\n      orderDirection: desc\n    ) {\n      totalVolumeUSD\n      totalLiquidityUSD\n      txCount\n    }\n    exchanges(first: 200, orderBy: ethBalance, orderDirection: desc) {\n      ethBalance\n    }\n  }\n',
        ]);
        return (
          (Se = function () {
            return e;
          }),
          e
        );
      }
      function we() {
        var e = Object(c.a)([
          '\n  query health {\n    indexingStatusForCurrentVersion(subgraphName: "',
          '") {\n      synced\n      health\n      chains {\n        chainHeadBlock {\n          number\n        }\n        latestBlock {\n          number\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (we = function () {
            return e;
          }),
          e
        );
      }
      var De = $()(we(), "integralteam/fastswap"),
        Te = ($()(Se()), $()(je())),
        Ue = function (e) {
          var t = "query blocks {";
          return (
            (t += e.map(function (e) {
              return "t"
                .concat(
                  e,
                  ":blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: "
                )
                .concat(e, ", timestamp_lt: ")
                .concat(e + 600, " }) {\n      number\n    }");
            })),
            (t += "}"),
            $()(t)
          );
        },
        Ce = function (e, t) {
          var n = "query blocks {";
          return (
            (n += t.map(function (t) {
              return "\n      t"
                .concat(t.timestamp, ':token(id:"')
                .concat(e, '", block: { number: ')
                .concat(t.number, " }) { \n        derivedETH\n      }\n    ");
            })),
            (n += ","),
            (n += t.map(function (e) {
              return "\n      b"
                .concat(e.timestamp, ': bundle(id:"1", block: { number: ')
                .concat(e.number, " }) { \n        ethPrice\n      }\n    ");
            })),
            (n += "}"),
            $()(n)
          );
        },
        Fe = $()(Oe()),
        Ae = function (e, t) {
          var n = "query blocks {";
          return (
            (n += t.map(function (t) {
              return "\n      t"
                .concat(t.timestamp, ': pair(id:"')
                .concat(e, '", block: { number: ')
                .concat(
                  t.number,
                  " }) { \n        token0Price\n        token1Price\n      }\n    "
                );
            })),
            (n += "}"),
            $()(n)
          );
        },
        Pe = function (e, t) {
          var n = "query blocks {";
          return (
            (n += t.map(function (t) {
              return "\n      t"
                .concat(t.timestamp, ':pair(id:"')
                .concat(e, '", block: { number: ')
                .concat(
                  t.number,
                  " }) { \n        reserve0\n        reserve1\n        reserveUSD\n        totalSupply \n        token0{\n          derivedETH\n        }\n        token1{\n          derivedETH\n        }\n      }\n    "
                );
            })),
            (n += ","),
            (n += t.map(function (e) {
              return "\n      b"
                .concat(e.timestamp, ': bundle(id:"1", block: { number: ')
                .concat(e.number, " }) { \n        ethPrice\n      }\n    ");
            })),
            (n += "}"),
            $()(n)
          );
        },
        Ie = function (e) {
          var t = e
            ? "\n    query bundles {\n      bundles(where: { id: "
                .concat("1", " } block: {number: ")
                .concat(
                  e,
                  "}) {\n        id\n        ethPrice\n      }\n    }\n  "
                )
            : " query bundles {\n      bundles(where: { id: ".concat(
                "1",
                " }) {\n        id\n        ethPrice\n      }\n    }\n  "
              );
          return $()(t);
        },
        Le = $()(ke()),
        qe = ($()(ge()), $()(xe())),
        _e = $()(Ee()),
        Re = $()(he()),
        ze = $()(ye()),
        Me =
          ($()(be()),
          function (e, t) {
            var n = "[";
            e.map(function (e) {
              return (n += '"'.concat(e, '"'));
            });
            var a =
              "\n    query days {\n      pairDayDatas(first: 1000, orderBy: date, orderDirection: asc, where: { pairAddress_in: "
                .concat((n += "]"), ", date_gt: ")
                .concat(
                  t,
                  " }) {\n        id\n        pairAddress\n        date\n        dailyVolumeToken0\n        dailyVolumeToken1\n        dailyVolumeUSD\n        totalSupply\n        reserveUSD\n      }\n    } \n"
                );
            return $()(a);
          }),
        Ve = $()(ve()),
        He = function (e) {
          var t = " query uniswapFactories {\n      uniswapFactories(\n       "
            .concat(
              e ? "block: { number: ".concat(e, "}") : "",
              ' \n       where: { id: "'
            )
            .concat(
              "0x59DA12BDc470C8e85cA26661Ee3DCD9B85247C88",
              '" }) {\n        id\n        totalVolumeUSD\n        totalVolumeETH\n        untrackedVolumeUSD\n        totalLiquidityUSD\n        totalLiquidityETH\n        txCount\n        pairCount\n      }\n    }'
            );
          return $()(t);
        },
        Be = $()(fe()),
        Ne = $()(pe()),
        We = $()(me()),
        Ke = $()(de()),
        Ye = $()(se()),
        Qe =
          "\n  fragment PairFields on Pair {\n    id\n    txCount\n    token0 {\n      id\n      symbol\n      name\n      totalLiquidity\n      derivedETH\n    }\n    token1 {\n      id\n      symbol\n      name\n      totalLiquidity\n      derivedETH\n    }\n    reserve0\n    reserve1\n    volumeToken0\n    volumeToken1\n    reserveUSD\n    totalSupply\n    trackedReserveETH\n    reserveETH\n    volumeUSD\n    untrackedVolumeUSD\n    token0Price\n    token1Price\n    createdAtTimestamp\n  }\n",
        Ge = $()(ue()),
        Je = function (e, t) {
          var n = "\n    "
            .concat(Qe, "\n    query pairs {\n      pairs(")
            .concat(
              t ? "block: {number: ".concat(t, "}") : "",
              ' where: { id: "'
            )
            .concat(e, '"} ) {\n        ...PairFields\n      }\n    }');
          return $()(n);
        },
        Xe = function (e) {
          var t = '\n    query users {\n      user(id: "'.concat(
            e,
            '") {\n        miningPosition {\n          id\n          user {\n            id\n          }\n          miningPool {\n              pair {\n                id\n                token0\n                token1\n              }\n          }\n          balance\n        }\n      }\n    }\n'
          );
          return $()(t);
        },
        $e = $()(le(), Qe),
        Ze = function (e, t) {
          var n = "[";
          t.map(function (e) {
            return (n += '"'.concat(e, '"'));
          });
          var a = "\n  query pairs {\n    pairs(first: 200, where: {id_in: "
            .concat((n += "]"), "}, block: {number: ")
            .concat(
              e,
              "}, orderBy: trackedReserveETH, orderDirection: desc) {\n      id\n      reserve0\n      reserve1\n      reserveUSD\n      trackedReserveETH\n      volumeToken0\n      volumeToken1\n      volumeUSD\n      untrackedVolumeUSD\n    }\n  }\n  "
            );
          return $()(a);
        },
        et = $()(ce()),
        tt =
          "\n  fragment TokenFields on Token {\n    id\n    name\n    symbol\n    derivedETH\n    tradeVolume\n    tradeVolumeUSD\n    untrackedVolumeUSD\n    totalLiquidity\n    txCount\n  }\n",
        nt = $()(oe(), tt),
        at = function (e) {
          var t = "\n    "
            .concat(tt, "\n    query tokens {\n      tokens(block: {number: ")
            .concat(
              e,
              "} first: 200, orderBy: tradeVolumeUSD, orderDirection: desc) {\n        ...TokenFields\n      }\n    }\n  "
            );
          return $()(t);
        },
        rt = function (e, t) {
          var n = "\n    "
            .concat(tt, "\n    query tokens {\n      tokens(")
            .concat(
              t ? "block : {number: ".concat(t, "}") : "",
              ' where: {id:"'
            )
            .concat(
              e,
              '"}) {\n        ...TokenFields\n      }\n      pairs0: pairs(where: {token0: "'
            )
            .concat(
              e,
              '"}, first: 50, orderBy: reserveUSD, orderDirection: desc){\n        id\n      }\n      pairs1: pairs(where: {token1: "'
            )
            .concat(
              e,
              '"}, first: 50, orderBy: reserveUSD, orderDirection: desc){\n        id\n      }\n    }\n  '
            );
          return $()(n);
        },
        it = $()(ie()),
        ot = n(13),
        ct = n.n(ot),
        lt = n(55),
        ut = n.n(lt),
        st = n(185),
        dt = n.n(st),
        mt = n(186),
        pt = n.n(mt),
        ft = "0x733a3D80779BFB68e0C57B94f393145DF2d9F52f",
        vt = [
          {
            inputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
            ],
            name: "Burn",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
              },
            ],
            name: "Mint",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount0In",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount1In",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
            ],
            name: "Swap",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint112",
                name: "reserve0",
                type: "uint112",
              },
              {
                indexed: !1,
                internalType: "uint112",
                name: "reserve1",
                type: "uint112",
              },
            ],
            name: "Sync",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            constant: !0,
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "MINIMUM_LIQUIDITY",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "PERMIT_TYPEHASH",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "address", name: "", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ internalType: "address", name: "to", type: "address" }],
            name: "burn",
            outputs: [
              { internalType: "uint256", name: "amount0", type: "uint256" },
              { internalType: "uint256", name: "amount1", type: "uint256" },
            ],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "factory",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getReserves",
            outputs: [
              { internalType: "uint112", name: "_reserve0", type: "uint112" },
              { internalType: "uint112", name: "_reserve1", type: "uint112" },
              {
                internalType: "uint32",
                name: "_blockTimestampLast",
                type: "uint32",
              },
            ],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { internalType: "address", name: "_token0", type: "address" },
              { internalType: "address", name: "_token1", type: "address" },
            ],
            name: "initialize",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "kLast",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ internalType: "address", name: "to", type: "address" }],
            name: "mint",
            outputs: [
              { internalType: "uint256", name: "liquidity", type: "uint256" },
            ],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "nonces",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "permit",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "price0CumulativeLast",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "price1CumulativeLast",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ internalType: "address", name: "to", type: "address" }],
            name: "skim",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { internalType: "uint256", name: "amount0Out", type: "uint256" },
              { internalType: "uint256", name: "amount1Out", type: "uint256" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            name: "swap",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [],
            name: "sync",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "token0",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "token1",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        bt = n(40),
        yt = n.n(bt);
      function ht(e) {
        var t, n;
        switch (e.split(":")[0].toLowerCase()) {
          case "https":
            return [e];
          case "http":
            return ["https" + e.substr(4), e];
          case "ipfs":
            var a =
              null === (t = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === t
                ? void 0
                : t[2];
            return [
              "https://cloudflare-ipfs.com/ipfs/".concat(a, "/"),
              "https://ipfs.io/ipfs/".concat(a, "/"),
            ];
          case "ipns":
            var r =
              null === (n = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === n
                ? void 0
                : n[2];
            return [
              "https://cloudflare-ipfs.com/ipns/".concat(r, "/"),
              "https://ipfs.io/ipns/".concat(r, "/"),
            ];
          default:
            return [];
        }
      }
      function Et(e) {
        return xt.apply(this, arguments);
      }
      function xt() {
        return (xt = Object(B.a)(
          H.a.mark(function e(t) {
            var n, a, r, i, o, c;
            return H.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = ht(t)), (a = 0);
                    case 2:
                      if (!(a < n.length)) {
                        e.next = 29;
                        break;
                      }
                      return (
                        (r = n[a]),
                        (i = a === n.length - 1),
                        (o = void 0),
                        (e.prev = 6),
                        (e.next = 9),
                        fetch(r)
                      );
                    case 9:
                      (o = e.sent), (e.next = 18);
                      break;
                    case 12:
                      if (
                        ((e.prev = 12),
                        (e.t0 = e.catch(6)),
                        console.debug("Failed to fetch list", t, e.t0),
                        !i)
                      ) {
                        e.next = 17;
                        break;
                      }
                      throw new Error("Failed to download list ".concat(t));
                    case 17:
                      return e.abrupt("continue", 26);
                    case 18:
                      if (o.ok) {
                        e.next = 22;
                        break;
                      }
                      if (!i) {
                        e.next = 21;
                        break;
                      }
                      throw new Error("Failed to download list ".concat(t));
                    case 21:
                      return e.abrupt("continue", 26);
                    case 22:
                      return (e.next = 24), o.json();
                    case 24:
                      return (c = e.sent), e.abrupt("return", c);
                    case 26:
                      a++, (e.next = 2);
                      break;
                    case 29:
                      throw new Error("Unrecognized list URL protocol.");
                    case 30:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[6, 12]]
            );
          })
        )).apply(this, arguments);
      }
      ct.a.extend(yt.a);
      var gt = Object(a.createContext)();
      function kt() {
        return Object(a.useContext)(gt);
      }
      function Ot(e, t) {
        var n = t.type,
          a = t.payload;
        switch (n) {
          case "UPDATE":
            var r = a.currency;
            return Object(m.a)({}, e, Object(d.a)({}, "CURRENCY", r));
          case "UPDATE_TIMEFRAME":
            var i = a.newTimeFrame;
            return Object(m.a)({}, e, Object(d.a)({}, "TIME_KEY", i));
          case "UPDATE_SESSION_START":
            var o = a.timestamp;
            return Object(m.a)({}, e, Object(d.a)({}, "SESSION_START", o));
          case "UPDATE_LATEST_BLOCK":
            var c = a.block;
            return Object(m.a)({}, e, Object(d.a)({}, "LATEST_BLOCK", c));
          case "UPDATE_HEAD_BLOCK":
            var l = a.block;
            return Object(m.a)({}, e, Object(d.a)({}, "HEAD_BLOCK", l));
          case "UPDATED_SUPPORTED_TOKENS":
            var u = a.supportedTokens;
            return Object(m.a)({}, e, Object(d.a)({}, "SUPPORTED_TOKENS", u));
          default:
            throw Error(
              "Unexpected action type in DataContext reducer: '".concat(n, "'.")
            );
        }
      }
      var jt = { CURRENCY: "USD", TIME_KEY: ee.ALL_TIME };
      function St(e) {
        var t = e.children,
          n = Object(a.useReducer)(Ot, jt),
          i = Object(l.a)(n, 2),
          o = i[0],
          c = i[1],
          u = Object(a.useCallback)(function (e) {
            c({ type: "UPDATE", payload: { currency: e } });
          }, []),
          s = Object(a.useCallback)(function (e) {
            c({ type: "UPDATE_TIMEFRAME", payload: { newTimeFrame: e } });
          }, []),
          d = Object(a.useCallback)(function (e) {
            c({ type: "UPDATE_SESSION_START", payload: { timestamp: e } });
          }, []),
          m = Object(a.useCallback)(function (e) {
            c({
              type: "UPDATED_SUPPORTED_TOKENS",
              payload: { supportedTokens: e },
            });
          }, []),
          p = Object(a.useCallback)(function (e) {
            c({ type: "UPDATE_LATEST_BLOCK", payload: { block: e } });
          }, []),
          f = Object(a.useCallback)(function (e) {
            c({ type: "UPDATE_HEAD_BLOCK", payload: { block: e } });
          }, []);
        return r.a.createElement(
          gt.Provider,
          {
            value: Object(a.useMemo)(
              function () {
                return [
                  o,
                  {
                    update: u,
                    updateSessionStart: d,
                    updateTimeframe: s,
                    updateSupportedTokens: m,
                    updateLatestBlock: p,
                    updateHeadBlock: f,
                  },
                ];
              },
              [o, u, s, d, m, p, f]
            ),
          },
          t
        );
      }
      function wt() {
        var e = kt(),
          t = Object(l.a)(e, 2),
          n = t[0],
          r = t[1],
          i = r.updateLatestBlock,
          o = r.updateHeadBlock,
          c = null === n || void 0 === n ? void 0 : n.LATEST_BLOCK,
          u = null === n || void 0 === n ? void 0 : n.HEAD_BLOCK;
        return (
          Object(a.useEffect)(
            function () {
              function e() {
                return (e = Object(B.a)(
                  H.a.mark(function e() {
                    return H.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            Q.query({ query: De })
                              .then(function (e) {
                                var t =
                                    e.data.indexingStatusForCurrentVersion
                                      .chains[0].latestBlock.number,
                                  n =
                                    e.data.indexingStatusForCurrentVersion
                                      .chains[0].chainHeadBlock.number;
                                t && n && (i(t), o(n));
                              })
                              .catch(function (e) {
                                console.log(e);
                              });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              c ||
                (function () {
                  e.apply(this, arguments);
                })();
            },
            [c, o, i]
          ),
          [c, u]
        );
      }
      function Dt() {
        var e = kt(),
          t = Object(l.a)(e, 2),
          n = t[0],
          a = t[1].updateTimeframe;
        return [null === n || void 0 === n ? void 0 : n.TIME_KEY, a];
      }
      function Tt() {
        var e = kt(),
          t = Object(l.a)(e, 2),
          n = t[0],
          r = t[1].updateSupportedTokens,
          i = null === n || void 0 === n ? void 0 : n.SUPPORTED_TOKENS;
        return (
          Object(a.useEffect)(
            function () {
              function e() {
                return (e = Object(B.a)(
                  H.a.mark(function e() {
                    var t, n;
                    return H.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              te.reduce(
                                (function () {
                                  var e = Object(B.a)(
                                    H.a.mark(function e(t, n) {
                                      var a;
                                      return H.a.wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (e.next = 2), Et(n);
                                            case 2:
                                              return (
                                                (a = e.sent),
                                                e.abrupt(
                                                  "return",
                                                  Promise.resolve(
                                                    Object(s.a)(a.tokens)
                                                  )
                                                )
                                              );
                                            case 4:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  );
                                  return function (t, n) {
                                    return e.apply(this, arguments);
                                  };
                                })(),
                                Promise.resolve([])
                              )
                            );
                          case 2:
                            (t = e.sent),
                              (n =
                                null === t || void 0 === t
                                  ? void 0
                                  : t.map(function (e) {
                                      return e.address.toLowerCase();
                                    })),
                              r(n);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              i ||
                (function () {
                  e.apply(this, arguments);
                })();
            },
            [r, i]
          ),
          i
        );
      }
      var Ut = n(257),
        Ct = n(413),
        Ft = n(180),
        At = n.n(Ft),
        Pt = n(414),
        It = n.n(Pt),
        Lt = n(258),
        qt = n.n(Lt),
        _t = "https://app.veneraswap.com/";
      It()(At.a);
      function Rt(e) {
        var t,
          n = ct.a.utc();
        switch (e) {
          case ee.WEEK:
            t = n.subtract(1, "week").endOf("day").unix() - 1;
            break;
          case ee.MONTH:
            t = n.subtract(1, "month").endOf("day").unix() - 1;
            break;
          case ee.ALL_TIME:
            t = n.subtract(1, "year").endOf("day").unix() - 1;
            break;
          default:
            t = n.subtract(1, "year").startOf("year").unix() - 1;
        }
        return t;
      }
      function zt(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return t
          ? "".concat(_t, "/#/") +
              (n ? "remove" : "add") +
              "/"
                .concat(
                  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" === e
                    ? "ETH"
                    : e,
                  "/"
                )
                .concat(
                  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" === t ? "ETH" : t
                )
          : "".concat(_t, "/#/") +
              (n ? "remove" : "add") +
              "/".concat(
                "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" === e ? "ETH" : e,
                "/",
                "ETH"
              );
      }
      function Mt(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return t
          ? ""
              .concat(_t, "/#/swap?inputCurrency=")
              .concat(
                "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" === e ? "ETH" : e,
                "&outputCurrency="
              )
              .concat(
                "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" === t ? "ETH" : t
              )
          : "".concat(_t, "/#/swap?inputCurrency=").concat(e);
      }
      function Vt(e) {
        return e
          ? "".concat("https://app.uniswap.org/#/uni", "/ETH/").concat(e)
          : "https://app.uniswap.org/#/uni";
      }
      function Ht(e) {
        return qt()(e).format("0,0");
      }
      Ut.BigNumber.set({ EXPONENTIAL_AT: 50 }), ct.a.extend(yt.a);
      var Bt = function (e) {
        return ct.a.utc(ct.a.unix(e)).format("MMM DD");
      };
      function Nt() {
        var e = ct.a.unix(Z);
        return [
          e.subtract(1, "day").startOf("minute").unix(),
          e.subtract(2, "day").startOf("minute").unix(),
          e.subtract(3, "day").startOf("minute").unix(),
        ];
      }
      function Wt(e, t, n, a) {
        return Kt.apply(this, arguments);
      }
      function Kt() {
        return (Kt = Object(B.a)(
          H.a.mark(function e(t, n, a, r) {
            var i,
              o,
              c,
              l,
              u,
              d,
              p,
              f = arguments;
            return H.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (i = f.length > 4 && void 0 !== f[4] ? f[4] : 100),
                      (o = {}),
                      (c = !1),
                      (l = 0);
                  case 4:
                    if (c) {
                      e.next = 15;
                      break;
                    }
                    return (
                      (u = r.length),
                      l + i < r.length && (u = l + i),
                      (d = r.slice(l, u)),
                      (e.next = 10),
                      n.query({
                        query: t.apply(void 0, Object(s.a)(a).concat([d])),
                        fetchPolicy: "cache-first",
                      })
                    );
                  case 10:
                    (p = e.sent),
                      (o = Object(m.a)({}, o, {}, p.data)),
                      Object.keys(p.data).length < i || l + i > r.length
                        ? (c = !0)
                        : (l += i),
                      (e.next = 4);
                    break;
                  case 15:
                    return e.abrupt("return", o);
                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Yt(e) {
        return Qt.apply(this, arguments);
      }
      function Qt() {
        return (Qt = Object(B.a)(
          H.a.mark(function e(t) {
            var n, a, r, i;
            return H.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      J.query({
                        query: Te,
                        variables: { timestampFrom: t, timestampTo: t + 600 },
                        fetchPolicy: "cache-first",
                      })
                    );
                  case 2:
                    return (
                      (i = e.sent),
                      e.abrupt(
                        "return",
                        null === i || void 0 === i
                          ? void 0
                          : null === (n = i.data) || void 0 === n
                          ? void 0
                          : null === (a = n.blocks) || void 0 === a
                          ? void 0
                          : null === (r = a[0]) || void 0 === r
                          ? void 0
                          : r.number
                      )
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Gt(e) {
        return Jt.apply(this, arguments);
      }
      function Jt() {
        return (Jt = Object(B.a)(
          H.a.mark(function e(t) {
            var n,
              a,
              r,
              i,
              o = arguments;
            return H.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = o.length > 1 && void 0 !== o[1] ? o[1] : 500),
                      0 !== (null === t || void 0 === t ? void 0 : t.length))
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return", []);
                  case 3:
                    return (e.next = 5), Wt(Ue, J, [], t, n);
                  case 5:
                    if (((a = e.sent), (r = []), a))
                      for (i in a)
                        a[i].length > 0 &&
                          r.push({
                            timestamp: i.split("t")[1],
                            number: a[i][0].number,
                          });
                    return e.abrupt("return", r);
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Xt(e, t) {
        return $t.apply(this, arguments);
      }
      function $t() {
        return ($t = Object(B.a)(
          H.a.mark(function e(t, n) {
            var a, r, i, o, c, l, u, s, d, m, p, f;
            return H.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      n ||
                        ((a = ct.a.unix(Z)),
                        (r = a.subtract(8, "day").unix()),
                        (n = Zt(r, 86400, 7))),
                      (e.next = 3),
                      Gt(n)
                    );
                  case 3:
                    return (
                      (i = e.sent),
                      (e.next = 6),
                      Y.query({ query: Pe(t, i), fetchPolicy: "cache-first" })
                    );
                  case 6:
                    for (l in ((o = e.sent),
                    (c = []),
                    null === o || void 0 === o ? void 0 : o.data))
                      (d = l.split("t")[1]),
                        (m =
                          parseFloat(
                            null === (u = o.data[l]) || void 0 === u
                              ? void 0
                              : u.reserveUSD
                          ) /
                          parseFloat(
                            null === (s = o.data[l]) || void 0 === s
                              ? void 0
                              : s.totalSupply
                          )),
                        d &&
                          c.push({
                            timestamp: d,
                            sharePriceUsd: m,
                            totalSupply: o.data[l].totalSupply,
                            reserve0: o.data[l].reserve0,
                            reserve1: o.data[l].reserve1,
                            reserveUSD: o.data[l].reserveUSD,
                            token0DerivedETH: o.data[l].token0.derivedETH,
                            token1DerivedETH: o.data[l].token1.derivedETH,
                            roiUsd: c && c[0] ? m / c[0].sharePriceUsd : 1,
                            ethPrice: 0,
                            token0PriceUSD: 0,
                            token1PriceUSD: 0,
                          });
                    for (f in ((p = 0),
                    null === o || void 0 === o ? void 0 : o.data))
                      f.split("b")[1] &&
                        ((c[p].ethPrice = o.data[f].ethPrice),
                        (c[p].token0PriceUSD =
                          o.data[f].ethPrice * c[p].token0DerivedETH),
                        (c[p].token1PriceUSD =
                          o.data[f].ethPrice * c[p].token1DerivedETH),
                        (p += 1));
                    return e.abrupt("return", c);
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Zt(e, t, n) {
        for (var a = [], r = 0; r <= n; r++) a.push(e + r * t);
        return a;
      }
      var en = function (e) {
          return ct.a.utc(ct.a.unix(e)).format("MMMM DD, YYYY");
        },
        tn = function (e) {
          try {
            return Ct.ethers.utils.getAddress(e.toLowerCase());
          } catch (t) {
            return !1;
          }
        },
        nn = function (e) {
          return qt()(e).format("0.[00]a");
        },
        an = function (e) {
          return "https://bscscan.com/tx/".concat(e, "/");
        },
        rn = function (e, t) {
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: t,
            maximumFractionDigits: t,
          }).format(e);
        },
        on = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (isNaN(e) || "" === e || void 0 === e) return t ? "$0" : 0;
          var n = parseFloat(e);
          return n > 5e8
            ? (t ? "$" : "") + nn(n.toFixed(0))
            : 0 === n
            ? t
              ? "$0"
              : 0
            : n < 1e-4 && n > 0
            ? t
              ? "< $0.0001"
              : "< 0.0001"
            : n > 1e3
            ? t
              ? rn(n, 0)
              : Number(parseFloat(n).toFixed(0)).toLocaleString()
            : t
            ? rn(n, n < 0.1 ? 4 : 2)
            : Number(parseFloat(n).toFixed(5)).toLocaleString();
        };
      function cn(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!(e = parseFloat(e)) || 0 === e)
          return r.a.createElement(S.d, { fontWeight: 500 }, "0%");
        if (e < 1e-4 && e > 0)
          return r.a.createElement(
            S.d,
            { fontWeight: 500, color: "green" },
            "< 0.0001%"
          );
        if (e < 0 && e > -1e-4)
          return r.a.createElement(
            S.d,
            { fontWeight: 500, color: "red" },
            "< 0.0001%"
          );
        var t,
          n = e.toFixed(2);
        return "0.00" === n
          ? "0%"
          : n > 0
          ? n > 100
            ? r.a.createElement(
                S.d,
                { fontWeight: 500, color: "green" },
                "+".concat(
                  null === (t = e) || void 0 === t
                    ? void 0
                    : t.toFixed(0).toLocaleString(),
                  "%"
                )
              )
            : r.a.createElement(
                S.d,
                { fontWeight: 500, color: "green" },
                "+".concat(n, "%")
              )
          : r.a.createElement(
              S.d,
              { fontWeight: 500, color: "red" },
              "".concat(n, "%")
            );
      }
      var ln = function (e, t, n) {
          var a = parseFloat(e) - parseFloat(t),
            r = parseFloat(t) - parseFloat(n),
            i = (parseFloat(a - r) / parseFloat(r)) * 100;
          return isNaN(i) || !isFinite(i) ? [a, 0] : [a, i];
        },
        un = function (e, t) {
          var n = ((parseFloat(e) - parseFloat(t)) / parseFloat(t)) * 100;
          return isNaN(n) || !isFinite(n) ? 0 : n;
        };
      var sn = n(415),
        dn = n.n(sn),
        mn = {
          "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": {
            name: "Ether (Wrapped)",
            symbol: "ETH",
          },
          "0x1416946162b1c2c871a73b07e932d2fb6c932069": {
            name: "Energi",
            symbol: "NRGE",
          },
        };
      function pn(e) {
        var t, n;
        return (
          (null === e || void 0 === e
            ? void 0
            : null === (t = e.token0) || void 0 === t
            ? void 0
            : t.id) &&
            Object.keys(mn).includes(e.token0.id) &&
            ((e.token0.name = mn[e.token0.id].name),
            (e.token0.symbol = mn[e.token0.id].symbol)),
          (null === e || void 0 === e
            ? void 0
            : null === (n = e.token1) || void 0 === n
            ? void 0
            : n.id) &&
            Object.keys(mn).includes(e.token1.id) &&
            ((e.token1.name = mn[e.token1.id].name),
            (e.token1.symbol = mn[e.token1.id].symbol)),
          e
        );
      }
      var fn = new dt.a("pk_live_6915101F43BD8C1D", {
          rpcUrl: "https://bsc-dataseed.binance.org/",
          chainId: 56,
        }),
        vn = new pt.a(fn.getProvider()),
        bn = vt,
        yn = ft,
        hn = 0;
      function En(e, t) {
        return e
          ? t.reduce(function (e, t) {
              return e && e[t] ? e[t] : null;
            }, e)
          : null;
      }
      ct.a.extend(yt.a);
      var xn = Object(a.createContext)();
      function gn() {
        return Object(a.useContext)(xn);
      }
      function kn(e, t) {
        var n = t.type,
          a = t.payload;
        switch (n) {
          case "UPDATE":
            var r = a.pairAddress,
              i = a.data;
            return Object(m.a)(
              {},
              e,
              Object(d.a)(
                {},
                r,
                Object(m.a)(
                  {},
                  null === e || void 0 === e ? void 0 : e[r],
                  {},
                  i
                )
              )
            );
          case "UPDATE_TOP_PAIRS":
            var o = a.topPairs,
              c = {};
            return (
              o.map(function (e) {
                return (c[e.id] = e);
              }),
              Object(m.a)({}, e, {}, c)
            );
          case "UPDATE_PAIR_TXNS":
            var l = a.address,
              u = a.transactions;
            return Object(m.a)(
              {},
              e,
              Object(d.a)({}, l, Object(m.a)({}, En(e, [l]) || {}, { txns: u }))
            );
          case "UPDATE_CHART_DATA":
            var s = a.address,
              p = a.chartData;
            return Object(m.a)(
              {},
              e,
              Object(d.a)(
                {},
                s,
                Object(m.a)({}, En(e, [s]) || {}, { chartData: p })
              )
            );
          case "UPDATE_HOURLY_DATA":
            var f,
              v = a.address,
              b = a.hourlyData,
              y = a.timeWindow;
            return Object(m.a)(
              {},
              e,
              Object(d.a)(
                {},
                v,
                Object(m.a)({}, null === e || void 0 === e ? void 0 : e[v], {
                  hourlyData: Object(m.a)(
                    {},
                    null === e || void 0 === e
                      ? void 0
                      : null === (f = e[v]) || void 0 === f
                      ? void 0
                      : f.hourlyData,
                    Object(d.a)({}, y, b)
                  ),
                })
              )
            );
          default:
            throw Error(
              "Unexpected action type in DataContext reducer: '".concat(n, "'.")
            );
        }
      }
      function On(e) {
        var t = e.children,
          n = Object(a.useReducer)(kn, {}),
          i = Object(l.a)(n, 2),
          o = i[0],
          c = i[1],
          u = Object(a.useCallback)(function (e, t) {
            c({ type: "UPDATE", payload: { pairAddress: e, data: t } });
          }, []),
          s = Object(a.useCallback)(function (e) {
            c({ type: "UPDATE_TOP_PAIRS", payload: { topPairs: e } });
          }, []),
          d = Object(a.useCallback)(function (e, t) {
            c({
              type: "UPDATE_PAIR_TXNS",
              payload: { address: e, transactions: t },
            });
          }, []),
          m = Object(a.useCallback)(function (e, t) {
            c({
              type: "UPDATE_CHART_DATA",
              payload: { address: e, chartData: t },
            });
          }, []),
          p = Object(a.useCallback)(function (e, t, n) {
            c({
              type: "UPDATE_HOURLY_DATA",
              payload: { address: e, hourlyData: t, timeWindow: n },
            });
          }, []);
        return r.a.createElement(
          xn.Provider,
          {
            value: Object(a.useMemo)(
              function () {
                return [
                  o,
                  {
                    update: u,
                    updatePairTxns: d,
                    updateChartData: m,
                    updateTopPairs: s,
                    updateHourlyData: p,
                  },
                ];
              },
              [o, u, d, m, s, p]
            ),
          },
          t
        );
      }
      function jn(e, t) {
        return Sn.apply(this, arguments);
      }
      function Sn() {
        return (Sn = Object(B.a)(
          H.a.mark(function e(t, n) {
            var a,
              r,
              i,
              o,
              c,
              u,
              s,
              p,
              f,
              v,
              b,
              y,
              h,
              E,
              x,
              g,
              k,
              O,
              j,
              S,
              w,
              D,
              T,
              U,
              C,
              F,
              A,
              P,
              I,
              L,
              q,
              _,
              R,
              z,
              M,
              V,
              N,
              W,
              K;
            return H.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = Nt()),
                        (r = Object(l.a)(a, 3)),
                        (i = r[0]),
                        (o = r[1]),
                        (c = r[2]),
                        (e.next = 3),
                        Gt([i, o, c])
                      );
                    case 3:
                      return (
                        (u = e.sent),
                        (s = Object(l.a)(u, 3)),
                        (p = s[0].number),
                        (f = s[1].number),
                        (v = s[2].number),
                        (e.prev = 8),
                        (e.next = 11),
                        Y.query({
                          query: $e,
                          variables: { allPairs: t },
                          fetchPolicy: "cache-first",
                        })
                      );
                    case 11:
                      return (
                        (E = e.sent),
                        (e.next = 14),
                        ut.a.get(
                          "https://api.coingecko.com/api/v3/coins/fastswap?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                        )
                      );
                    case 14:
                      return (
                        (x = e.sent),
                        (g = x.data.market_data.current_price.usd),
                        (e.next = 18),
                        ut.a.get(
                          "https://api.coingecko.com/api/v3/coins/duke-inu-token?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                        )
                      );
                    case 18:
                      return (
                        (k = e.sent),
                        (O = k.data.market_data.current_price.usd),
                        (j = new vn.eth.Contract(bn, yn)),
                        (e.next = 23),
                        j.methods.getReserves().call()
                      );
                    case 23:
                      return (
                        (S = e.sent),
                        (w = (Number(S._reserve0) / 1e18).toFixed(17)),
                        (D = (Number(S._reserve1) / 1e18).toFixed(17)),
                        (T = S._blockTimestampLast),
                        (e.t0 = Number),
                        (e.next = 30),
                        j.methods.totalSupply().call()
                      );
                    case 30:
                      return (
                        (e.t1 = e.sent),
                        (e.t2 = (0, e.t0)(e.t1)),
                        (U = (e.t2 / 1e18).toFixed(17)),
                        (e.next = 35),
                        j.methods.token0().call()
                      );
                    case 35:
                      return (
                        (C = e.sent), (e.next = 38), j.methods.token1().call()
                      );
                    case 38:
                      return (
                        (F = e.sent),
                        (A = {
                          id: yn,
                          txCount: null,
                          token0: {
                            id: C,
                            symbol: "VSW",
                            name: "Venera",
                            totalLiquidity: null,
                            derivedETH: null,
                          },
                          token1: {
                            id: F,
                            symbol: "WBNB",
                            name: "Wrapped BNB",
                            totalLiquidity: null,
                            derivedETH: null,
                          },
                          reserve0: w,
                          reserve1: D,
                          volumeToken0: null,
                          volumeToken1: null,
                          reserveUSD: null,
                          totalSupply: U,
                          trackedReserveETH: null,
                          liquidityChangeUSD: null,
                          oneDayVolumeUSD: null,
                          oneDayVolumeUntracked: null,
                          oneWeekVolumeUSD: null,
                          reserveETH: null,
                          token0Price: n / g,
                          token1Price: g / n,
                          trackedReserveUSD: null,
                          untrackedVolumeUSD: null,
                          volumeChangeUSD: null,
                          volumeChangeUntracked: null,
                          volumeUSD: null,
                          createdAtTimestamp: T,
                        }),
                        E.data.pairs.unshift(A),
                        (e.next = 45),
                        Promise.all(
                          [p, f, v].map(
                            (function () {
                              var e = Object(B.a)(
                                H.a.mark(function e(n) {
                                  var a;
                                  return H.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (a = Y.query({
                                              query: Ze(n, t),
                                              fetchPolicy: "cache-first",
                                            })),
                                            e.abrupt("return", a)
                                          );
                                        case 2:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                        )
                      );
                    case 45:
                      return (
                        (P = e.sent),
                        (I = Object(l.a)(P, 3)),
                        (L = I[0]),
                        (q = I[1]),
                        (_ = I[2]),
                        (R = {
                          id: yn,
                          reserve0: w,
                          reserve1: D,
                          reserveUSD: null,
                          trackedReserveETH: null,
                          untrackedVolumeUSD: null,
                          volumeToken0: null,
                          volumeToken1: null,
                          volumeUSD: null,
                        }),
                        L.data.pairs.unshift(R),
                        (z = {
                          id: yn,
                          reserve0: w,
                          reserve1: D,
                          reserveUSD: null,
                          trackedReserveETH: null,
                          untrackedVolumeUSD: null,
                          volumeToken0: null,
                          volumeToken1: null,
                          volumeUSD: null,
                        }),
                        q.data.pairs.unshift(z),
                        (M = {
                          id: yn,
                          reserve0: w,
                          reserve1: D,
                          reserveUSD: null,
                          trackedReserveETH: null,
                          untrackedVolumeUSD: null,
                          volumeToken0: null,
                          volumeToken1: null,
                          volumeUSD: null,
                        }),
                        _.data.pairs.unshift(M),
                        (V =
                          null === L || void 0 === L
                            ? void 0
                            : null === (b = L.data) || void 0 === b
                            ? void 0
                            : b.pairs.reduce(function (e, t, n) {
                                return Object(m.a)(
                                  {},
                                  e,
                                  Object(d.a)({}, t.id, t)
                                );
                              }, {})),
                        (N =
                          null === q || void 0 === q
                            ? void 0
                            : null === (y = q.data) || void 0 === y
                            ? void 0
                            : y.pairs.reduce(function (e, t, n) {
                                return Object(m.a)(
                                  {},
                                  e,
                                  Object(d.a)({}, t.id, t)
                                );
                              }, {})),
                        (W =
                          null === _ || void 0 === _
                            ? void 0
                            : null === (h = _.data) || void 0 === h
                            ? void 0
                            : h.pairs.reduce(function (e, t, n) {
                                return Object(m.a)(
                                  {},
                                  e,
                                  Object(d.a)({}, t.id, t)
                                );
                              }, {})),
                        (e.next = 61),
                        Promise.all(
                          E &&
                            E.data.pairs.map(
                              (function () {
                                var e = Object(B.a)(
                                  H.a.mark(function e(t) {
                                    var a, r, i, o, c, l, u, s;
                                    return H.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (
                                              ((a = t),
                                              (r =
                                                null === V || void 0 === V
                                                  ? void 0
                                                  : V[t.id]),
                                              "0x93424537b8Df0d0dfd7970A8C2B306790951C94f" !==
                                                a.id)
                                            ) {
                                              e.next = 7;
                                              break;
                                            }
                                            return (
                                              (e.next = 5),
                                              Y.query({
                                                query: Je(t.id, p),
                                                fetchPolicy: "cache-first",
                                              })
                                            );
                                          case 5:
                                            (i = e.sent), (r = i.data.pairs[0]);
                                          case 7:
                                            if (r) {
                                              e.next = 12;
                                              break;
                                            }
                                            return (
                                              (e.next = 10),
                                              Y.query({
                                                query: Je(t.id, p),
                                                fetchPolicy: "cache-first",
                                              })
                                            );
                                          case 10:
                                            (o = e.sent), (r = o.data.pairs[0]);
                                          case 12:
                                            if (
                                              (c =
                                                null === N || void 0 === N
                                                  ? void 0
                                                  : N[t.id])
                                            ) {
                                              e.next = 18;
                                              break;
                                            }
                                            return (
                                              (e.next = 16),
                                              Y.query({
                                                query: Je(t.id, f),
                                                fetchPolicy: "cache-first",
                                              })
                                            );
                                          case 16:
                                            (l = e.sent), (c = l.data.pairs[0]);
                                          case 18:
                                            if (
                                              (u =
                                                null === W || void 0 === W
                                                  ? void 0
                                                  : W[t.id])
                                            ) {
                                              e.next = 24;
                                              break;
                                            }
                                            return (
                                              (e.next = 22),
                                              Y.query({
                                                query: Je(t.id, v),
                                                fetchPolicy: "cache-first",
                                              })
                                            );
                                          case 22:
                                            (s = e.sent), (u = s.data.pairs[0]);
                                          case 24:
                                            return (
                                              "0x733a3D80779BFB68e0C57B94f393145DF2d9F52f" ===
                                                a.id &&
                                                (a.token0.symbol = "VSW"),
                                              "0x31623095480409266bE826a36C20BfF4c367cF4C" ===
                                                a.id &&
                                                (a.token0.symbol = "VSW"),
                                              "0xbCBA10ab3a3C6515A7c54705AE7F161AAcdce10c" ===
                                                a.id &&
                                                (a.token1.symbol = "VSW"),
                                              "0x8027B248538aC7FB407C302348d91753C067b059" ===
                                                a.id &&
                                                ((a.token0.symbol = "VSW"),
                                                (hn =
                                                  parseFloat(O) /
                                                  parseFloat(a.token0Price)),
                                                (a.reserveUSD = String(
                                                  hn * parseFloat(a.reserve0) +
                                                    O * parseFloat(a.reserve1)
                                                )),
                                                (a.volumeUSD = String(
                                                  hn *
                                                    parseFloat(a.volumeToken0)
                                                )),
                                                (r.reserveUSD = String(
                                                  hn * parseFloat(r.reserve0) +
                                                    O * parseFloat(r.reserve1)
                                                )),
                                                (r.volumeUSD = String(
                                                  hn *
                                                    parseFloat(r.volumeToken0)
                                                ))),
                                              "0x733a3D80779BFB68e0C57B94f393145DF2d9F52f" ===
                                                a.id &&
                                                ((a.reserveUSD = String(
                                                  g * parseFloat(a.reserve0) +
                                                    n * parseFloat(a.reserve1)
                                                )),
                                                (a.volumeUSD = String(
                                                  g * parseFloat(a.volumeToken0)
                                                )),
                                                (r.reserveUSD = String(
                                                  g * parseFloat(r.reserve0) +
                                                    n * parseFloat(r.reserve1)
                                                )),
                                                (r.volumeUSD = String(
                                                  g * parseFloat(r.volumeToken0)
                                                )),
                                                (c.reserveUSD = String(
                                                  g * parseFloat(c.reserve0) +
                                                    n * parseFloat(c.reserve1)
                                                )),
                                                (c.volumeUSD = String(
                                                  g * parseFloat(c.volumeToken0)
                                                )),
                                                (u.reserveUSD = String(
                                                  g * parseFloat(u.reserve0) +
                                                    n * parseFloat(u.reserve1)
                                                )),
                                                (u.volumeUSD = String(
                                                  g * parseFloat(u.volumeToken0)
                                                ))),
                                              "0xeEdB250636eac748e3a746A9bbEFE98Da906E13A" ===
                                                a.id &&
                                                ((a.reserveUSD = String(
                                                  g * parseFloat(a.reserve0) +
                                                    O * parseFloat(a.reserve1)
                                                )),
                                                (a.volumeUSD = String(
                                                  g * parseFloat(a.volumeToken0)
                                                )),
                                                (r.reserveUSD = String(
                                                  g * parseFloat(r.reserve0) +
                                                    O * parseFloat(r.reserve1)
                                                )),
                                                (r.volumeUSD = String(
                                                  g * parseFloat(r.volumeToken0)
                                                )),
                                                (c.reserveUSD = String(
                                                  g * parseFloat(c.reserve0) +
                                                    O * parseFloat(c.reserve1)
                                                )),
                                                (c.volumeUSD = String(
                                                  g * parseFloat(c.volumeToken0)
                                                )),
                                                (u.reserveUSD = String(
                                                  g * parseFloat(u.reserve0) +
                                                    O * parseFloat(u.reserve1)
                                                )),
                                                (u.volumeUSD = String(
                                                  g * parseFloat(u.volumeToken0)
                                                ))),
                                              (a = wn(a, r, c, u, n, p)),
                                              e.abrupt("return", a)
                                            );
                                          case 32:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                        )
                      );
                    case 61:
                      return (K = e.sent), e.abrupt("return", K);
                    case 65:
                      (e.prev = 65), (e.t3 = e.catch(8)), console.log(e.t3);
                    case 68:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[8, 65]]
            );
          })
        )).apply(this, arguments);
      }
      function wn(e, t, n, a, r, i) {
        var o = ln(
            null === e || void 0 === e ? void 0 : e.volumeUSD,
            (null === t || void 0 === t ? void 0 : t.volumeUSD)
              ? t.volumeUSD
              : 0,
            (null === n || void 0 === n ? void 0 : n.volumeUSD)
              ? n.volumeUSD
              : 0
          ),
          c = Object(l.a)(o, 2),
          u = c[0],
          s = c[1],
          d = ln(
            null === e || void 0 === e ? void 0 : e.untrackedVolumeUSD,
            (null === t || void 0 === t ? void 0 : t.untrackedVolumeUSD)
              ? parseFloat(
                  null === t || void 0 === t ? void 0 : t.untrackedVolumeUSD
                )
              : 0,
            (null === n || void 0 === n ? void 0 : n.untrackedVolumeUSD)
              ? null === n || void 0 === n
                ? void 0
                : n.untrackedVolumeUSD
              : 0
          ),
          m = Object(l.a)(d, 2),
          p = m[0],
          f = m[1],
          v = parseFloat(
            a
              ? (null === e || void 0 === e ? void 0 : e.volumeUSD) -
                  (null === a || void 0 === a ? void 0 : a.volumeUSD)
              : e.volumeUSD
          );
        return (
          (e.oneDayVolumeUSD = parseFloat(u)),
          (e.oneWeekVolumeUSD = v),
          (e.volumeChangeUSD = s),
          (e.oneDayVolumeUntracked = p),
          (e.volumeChangeUntracked = f),
          (e.trackedReserveUSD = e.trackedReserveETH * r),
          (e.liquidityChangeUSD = un(
            e.reserveUSD,
            null === t || void 0 === t ? void 0 : t.reserveUSD
          )),
          !t &&
            e &&
            e.createdAtBlockNumber > i &&
            (e.oneDayVolumeUSD = parseFloat(e.volumeUSD)),
          !t && e && (e.oneDayVolumeUSD = parseFloat(e.volumeUSD)),
          !a && e && (e.oneWeekVolumeUSD = parseFloat(e.volumeUSD)),
          pn(e),
          e
        );
      }
      var Dn = (function () {
          var e = Object(B.a)(
            H.a.mark(function e(t) {
              var n, a, r, i, o, c;
              return H.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = {}),
                          (e.next = 3),
                          ut.a.get(
                            "https://api.coingecko.com/api/v3/coins/fastswap?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                          )
                        );
                      case 3:
                        return (
                          (a = e.sent),
                          (r = a.data.market_data.current_price.usd),
                          (e.next = 7),
                          ut.a.get(
                            "https://api.coingecko.com/api/v3/coins/duke-inu-token?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                          )
                        );
                      case 7:
                        return (
                          (i = e.sent),
                          (o = i.data.market_data.current_price.usd),
                          (e.prev = 9),
                          (e.next = 12),
                          Y.query({
                            query: it,
                            variables: { allPairs: [t] },
                            fetchPolicy: "no-cache",
                          })
                        );
                      case 12:
                        (c = e.sent),
                          "0xeEdB250636eac748e3a746A9bbEFE98Da906E13A" === t &&
                            (c.data.burns.forEach(function (e) {
                              parseFloat(e.amount0) < parseFloat(e.amount1)
                                ? (e.amountUSD =
                                    r * parseFloat(e.amount0) * 1.02)
                                : (e.amountUSD =
                                    r * parseFloat(e.amount1) * 1.02);
                            }),
                            c.data.mints.forEach(function (e) {
                              parseFloat(e.amount0) < parseFloat(e.amount1)
                                ? (e.amountUSD =
                                    r * parseFloat(e.amount0) * 1.02)
                                : (e.amountUSD =
                                    r * parseFloat(e.amount1) * 1.02);
                            }),
                            c.data.swaps.forEach(function (e) {
                              0 === parseFloat(e.amount0In)
                                ? parseFloat(e.amount0Out) <
                                  parseFloat(e.amount1In)
                                  ? (e.amountUSD =
                                      r * parseFloat(e.amount0Out) * 1.02)
                                  : (e.amountUSD =
                                      r * parseFloat(e.amount1In) * 1.02)
                                : 0 === parseFloat(e.amount0Out) &&
                                  (parseFloat(e.amount0In) <
                                  parseFloat(e.amount1Out)
                                    ? (e.amountUSD =
                                        r * parseFloat(e.amount0In) * 1.02)
                                    : (e.amountUSD =
                                        r * parseFloat(e.amount1Out) * 1.02));
                            })),
                          "0x8027B248538aC7FB407C302348d91753C067b059" === t &&
                            (0 !== c.data.burns.length &&
                              c.data.burns.forEach(function (e) {
                                (e.pair.token0.symbol = "VSW"),
                                  parseFloat(e.amount0) < parseFloat(e.amount1)
                                    ? (e.amountUSD =
                                        o * parseFloat(e.amount1) * 1.02)
                                    : (e.amountUSD =
                                        o * parseFloat(e.amount0) * 1.02);
                              }),
                            c.data.mints.forEach(function (e) {
                              (e.pair.token0.symbol = "VSW"),
                                parseFloat(e.amount0) < parseFloat(e.amount1)
                                  ? (e.amountUSD =
                                      o * parseFloat(e.amount1) * 1.02)
                                  : (e.amountUSD =
                                      o * parseFloat(e.amount0) * 1.02);
                            }),
                            c.data.swaps.forEach(function (e) {
                              (e.pair.token0.symbol = "VSW"),
                                0 === parseFloat(e.amount1In)
                                  ? parseFloat(e.amount1Out) <
                                    parseFloat(e.amount0In)
                                    ? (e.amountUSD =
                                        o * parseFloat(e.amount0In) * 1.02)
                                    : (e.amountUSD =
                                        o * parseFloat(e.amount1Out) * 1.02)
                                  : 0 === parseFloat(e.amount1Out)
                                  ? parseFloat(e.amount1In) <
                                    parseFloat(e.amount0Out)
                                    ? (e.amountUSD =
                                        o * parseFloat(e.amount0Out) * 1.02)
                                    : (e.amountUSD =
                                        o * parseFloat(e.amount1In) * 1.02)
                                  : 0 === parseFloat(e.amoun0In)
                                  ? parseFloat(e.amount1In) <
                                    parseFloat(e.amount0Out)
                                    ? (e.amountUSD =
                                        o * parseFloat(e.amount0Out) * 1.02)
                                    : (e.amountUSD =
                                        o * parseFloat(e.amount1In) * 1.02)
                                  : 0 === parseFloat(e.amount0Out) &&
                                    (parseFloat(e.amount1Out) <
                                    parseFloat(e.amount0In)
                                      ? (e.amountUSD =
                                          o * parseFloat(e.amount0In) * 1.02)
                                      : (e.amountUSD =
                                          o * parseFloat(e.amount1Out) * 1.02));
                            })),
                          ("0xbb609bd6179c6ab5ac9e73db6661b0cfed876c04" !== t &&
                            "0x14bfaacd9e661f4b7090685a4c5d820399510171" !==
                              t) ||
                            (0 !== c.data.burns.length &&
                              c.data.burns.forEach(function (e) {
                                e.pair.token0.symbol = "VSW";
                              }),
                            c.data.mints.forEach(function (e) {
                              e.pair.token0.symbol = "VSW";
                            }),
                            c.data.swaps.forEach(function (e) {
                              e.pair.token0.symbol = "VSW";
                            })),
                          "0xec72475fdf85473b347c963bba3f6b9c92424542" === t &&
                            (0 !== c.data.burns.length &&
                              c.data.burns.forEach(function (e) {
                                e.pair.token1.symbol = "VSW";
                              }),
                            c.data.mints.forEach(function (e) {
                              e.pair.token1.symbol = "VSW";
                            }),
                            c.data.swaps.forEach(function (e) {
                              e.pair.token1.symbol = "VSW";
                            })),
                          (n.mints = c.data.mints),
                          (n.burns = c.data.burns),
                          (n.swaps = c.data.swaps),
                          (e.next = 25);
                        break;
                      case 22:
                        (e.prev = 22), (e.t0 = e.catch(9)), console.log(e.t0);
                      case 25:
                        return e.abrupt("return", n);
                      case 26:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[9, 22]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Tn = (function () {
          var e = Object(B.a)(
            H.a.mark(function e(t) {
              var n, a, r, i, o, c, l, u, s, d, m, p, f, v, b, y, h, E;
              return H.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = []),
                          (a = ct.a.utc()),
                          (r = a.subtract(1, "year").startOf("minute")),
                          (i = r.unix() - 1),
                          (e.next = 6),
                          ut.a.get(
                            "https://api.coingecko.com/api/v3/coins/fastswap?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                          )
                        );
                      case 6:
                        return (
                          (o = e.sent),
                          (c = o.data.market_data.current_price.usd),
                          (e.next = 10),
                          ut.a.get(
                            "https://api.coingecko.com/api/v3/coins/duke-inu-token?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                          )
                        );
                      case 10:
                        (l = e.sent),
                          (u = l.data.market_data.current_price.usd),
                          (e.prev = 12),
                          (s = !1),
                          (d = 0);
                      case 15:
                        if (s) {
                          e.next = 24;
                          break;
                        }
                        return (
                          (e.next = 18),
                          Y.query({
                            query: ze,
                            variables: { pairAddress: t, skip: d },
                            fetchPolicy: "cache-first",
                          })
                        );
                      case 18:
                        (m = e.sent),
                          (d += 1e3),
                          (n = n.concat(m.data.pairDayDatas)),
                          m.data.pairDayDatas.length < 1e3 && (s = !0),
                          (e.next = 15);
                        break;
                      case 24:
                        if (
                          ("0xeEdB250636eac748e3a746A9bbEFE98Da906E13A" === t
                            ? n.forEach(function (e) {
                                (e.dailyVolumeUSD =
                                  c * parseFloat(e.dailyVolumeToken0)),
                                  (e.reserveUSD =
                                    c * parseFloat(e.reserve0) +
                                    u * parseFloat(e.reserve1));
                              })
                            : "0x8027B248538aC7FB407C302348d91753C067b059" ===
                                t &&
                              n.forEach(function (e) {
                                (e.dailyVolumeUSD =
                                  u * parseFloat(e.dailyVolumeToken1)),
                                  (e.reserveUSD =
                                    hn * parseFloat(e.reserve0) +
                                    u * parseFloat(e.reserve1));
                              }),
                          (p = new Set()),
                          (f = []),
                          86400,
                          n.forEach(function (e, t) {
                            p.add((n[t].date / 86400).toFixed(0)),
                              f.push(n[t]),
                              (e.dailyVolumeUSD = parseFloat(e.dailyVolumeUSD)),
                              (e.reserveUSD = parseFloat(e.reserveUSD));
                          }),
                          n[0])
                        )
                          for (
                            v = n[0].date ? n[0].date : i,
                              b = n[0].reserveUSD,
                              y = 1;
                            v < a.unix() - 86400;

                          )
                            (E = ((h = v + 86400) / 86400).toFixed(0)),
                              p.has(E)
                                ? ((b = f[y].reserveUSD), (y += 1))
                                : n.push({
                                    date: h,
                                    dayString: h,
                                    dailyVolumeUSD: 0,
                                    reserveUSD: b,
                                  }),
                              (v = h);
                        (n = n.sort(function (e, t) {
                          return parseInt(e.date) > parseInt(t.date) ? 1 : -1;
                        })),
                          (e.next = 36);
                        break;
                      case 33:
                        (e.prev = 33), (e.t0 = e.catch(12)), console.log(e.t0);
                      case 36:
                        return e.abrupt("return", n);
                      case 37:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[12, 33]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Un = (function () {
          var e = Object(B.a)(
            H.a.mark(function e(t, n, a) {
              var r, i, o, c, l, u, s, d, m, p, f, v, b, y;
              return H.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (
                          e.prev = 0, i = ct.a.utc(), o = n, c = [];
                          o <= i.unix() - 3600;

                        )
                          c.push(o), (o += 3600);
                        if (0 !== c.length) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt("return", []);
                      case 7:
                        return (e.next = 9), Gt(c, 100);
                      case 9:
                        if (
                          (l = e.sent) &&
                          0 !==
                            (null === (r = l) || void 0 === r
                              ? void 0
                              : r.length)
                        ) {
                          e.next = 12;
                          break;
                        }
                        return e.abrupt("return", []);
                      case 12:
                        return (
                          a &&
                            (l = l.filter(function (e) {
                              return parseFloat(e.number) <= parseFloat(a);
                            })),
                          (e.next = 15),
                          Wt(Ae, Y, [t], l, 100)
                        );
                      case 15:
                        for (d in ((u = e.sent), (s = []), u))
                          (m = d.split("t")[1]) &&
                            s.push({
                              timestamp: m,
                              rate0: parseFloat(
                                null === (p = u[d]) || void 0 === p
                                  ? void 0
                                  : p.token0Price
                              ),
                              rate1: parseFloat(
                                null === (f = u[d]) || void 0 === f
                                  ? void 0
                                  : f.token1Price
                              ),
                            });
                        for (v = [], b = [], y = 0; y < s.length - 1; y++)
                          v.push({
                            timestamp: s[y].timestamp,
                            open: parseFloat(s[y].rate0),
                            close: parseFloat(s[y + 1].rate0),
                          }),
                            b.push({
                              timestamp: s[y].timestamp,
                              open: parseFloat(s[y].rate1),
                              close: parseFloat(s[y + 1].rate1),
                            });
                        return e.abrupt("return", [v, b]);
                      case 24:
                        return (
                          (e.prev = 24),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          e.abrupt("return", [[], []])
                        );
                      case 28:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 24]]
              );
            })
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })();
      function Cn() {
        var e = gn(),
          t = Object(l.a)(e, 2)[1].updateTopPairs,
          n = ea(),
          r = Object(l.a)(n, 1)[0];
        return (
          Object(a.useEffect)(
            function () {
              function e() {
                return (e = Object(B.a)(
                  H.a.mark(function e() {
                    var n, a, i, o;
                    return H.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              Y.query({ query: Ge, fetchPolicy: "cache-first" })
                            );
                          case 2:
                            return (
                              (n = e.sent),
                              (a = n.data.pairs),
                              (i = a.map(function (e) {
                                return e.id;
                              })).unshift(
                                "0x733a3D80779BFB68e0C57B94f393145DF2d9F52f"
                              ),
                              (e.next = 8),
                              jn(i, r)
                            );
                          case 8:
                            (o = e.sent) && t(o);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              r &&
                (function () {
                  e.apply(this, arguments);
                })();
            },
            [r, t]
          ),
          null
        );
      }
      function Fn(e) {
        var t = gn(),
          n = Object(l.a)(t, 2),
          r = n[0],
          i = n[1].update,
          o = ea(),
          c = Object(l.a)(o, 1)[0],
          u = null === r || void 0 === r ? void 0 : r[e];
        return (
          Object(a.useEffect)(
            function () {
              function t() {
                return (t = Object(B.a)(
                  H.a.mark(function t() {
                    var n;
                    return H.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (u || !e) {
                              t.next = 5;
                              break;
                            }
                            return (t.next = 3), jn([e], c);
                          case 3:
                            (n = t.sent),
                              "0x8027B248538aC7FB407C302348d91753C067b059" !==
                                e &&
                                n &&
                                i(e, n[0]);
                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )).apply(this, arguments);
              }
              !u &&
                e &&
                c &&
                tn(e) &&
                (function () {
                  t.apply(this, arguments);
                })();
            },
            [e, u, i, c]
          ),
          u || {}
        );
      }
      function An() {
        var e = gn();
        return Object(l.a)(e, 1)[0] || {};
      }
      var Pn = new dt.a("pk_live_6915101F43BD8C1D", {
          rpcUrl: "https://bsc-dataseed.binance.org/",
          chainId: 56,
        }),
        In = new pt.a(Pn.getProvider()),
        Ln = vt,
        qn = ft,
        _n = 0;
      ct.a.extend(yt.a), ct.a.extend(dn.a);
      var Rn = Object(a.createContext)();
      function zn() {
        return Object(a.useContext)(Rn);
      }
      function Mn(e, t) {
        var n = t.type,
          a = t.payload;
        switch (n) {
          case "UPDATE":
            var r = a.data;
            return Object(m.a)({}, e, { globalData: r });
          case "UPDATE_TXNS":
            var i = a.transactions;
            return Object(m.a)({}, e, { transactions: i });
          case "UPDATE_CHART":
            var o = a.daily,
              c = a.weekly;
            return Object(m.a)({}, e, { chartData: { daily: o, weekly: c } });
          case "UPDATE_ETH_PRICE":
            var l,
              u = a.ethPrice,
              s = a.oneDayPrice,
              p = a.ethPriceChange;
            return (
              (l = {}),
              Object(d.a)(l, "ETH_PRICE_KEY", u),
              Object(d.a)(l, "oneDayPrice", s),
              Object(d.a)(l, "ethPriceChange", p),
              l
            );
          case "UPDAUPDATE_ALL_PAIRS_IN_UNISWAPTE_TOP_PAIRS":
            var f = a.allPairs;
            return Object(m.a)({}, e, { allPairs: f });
          case "UPDATE_ALL_TOKENS_IN_UNISWAP":
            var v = a.allTokens;
            return Object(m.a)({}, e, { allTokens: v });
          case "UPDATE_TOP_LPS":
            var b = a.topLps;
            return Object(m.a)({}, e, { topLps: b });
          default:
            throw Error(
              "Unexpected action type in DataContext reducer: '".concat(n, "'.")
            );
        }
      }
      function Vn(e) {
        var t = e.children,
          n = Object(a.useReducer)(Mn, {}),
          i = Object(l.a)(n, 2),
          o = i[0],
          c = i[1],
          u = Object(a.useCallback)(function (e) {
            c({ type: "UPDATE", payload: { data: e } });
          }, []),
          s = Object(a.useCallback)(function (e) {
            c({ type: "UPDATE_TXNS", payload: { transactions: e } });
          }, []),
          d = Object(a.useCallback)(function (e, t) {
            c({ type: "UPDATE_CHART", payload: { daily: e, weekly: t } });
          }, []),
          m = Object(a.useCallback)(function (e, t, n) {
            c({
              type: "UPDATE_ETH_PRICE",
              payload: { ethPrice: e, oneDayPrice: t, ethPriceChange: n },
            });
          }, []),
          p = Object(a.useCallback)(function (e) {
            c({
              type: "UPDAUPDATE_ALL_PAIRS_IN_UNISWAPTE_TOP_PAIRS",
              payload: { allPairs: e },
            });
          }, []),
          f = Object(a.useCallback)(function (e) {
            c({
              type: "UPDATE_ALL_TOKENS_IN_UNISWAP",
              payload: { allTokens: e },
            });
          }, []),
          v = Object(a.useCallback)(function (e) {
            c({ type: "UPDATE_TOP_LPS", payload: { topLps: e } });
          }, []);
        return r.a.createElement(
          Rn.Provider,
          {
            value: Object(a.useMemo)(
              function () {
                return [
                  o,
                  {
                    update: u,
                    updateTransactions: s,
                    updateChart: d,
                    updateEthPrice: m,
                    updateTopLps: v,
                    updateAllPairsInUniswap: p,
                    updateAllTokensInUniswap: f,
                  },
                ];
              },
              [o, u, s, v, d, m, p, f]
            ),
          },
          t
        );
      }
      function Hn(e, t) {
        return Bn.apply(this, arguments);
      }
      function Bn() {
        return (Bn = Object(B.a)(
          H.a.mark(function e(t, n) {
            var a,
              r,
              i,
              o,
              c,
              u,
              s,
              p,
              f,
              v,
              b,
              y,
              h,
              E,
              x,
              g,
              k,
              O,
              j,
              S,
              w,
              D,
              T,
              U,
              C,
              F,
              A,
              P,
              I,
              L,
              q,
              _,
              R,
              z,
              M,
              V,
              N,
              W,
              K,
              Q,
              G,
              J,
              X,
              $,
              ee,
              te,
              ne,
              ae,
              re,
              ie,
              oe,
              ce,
              le,
              ue,
              se,
              de,
              me,
              pe,
              fe,
              ve,
              be,
              ye,
              he,
              Ee,
              xe,
              ge,
              ke,
              Oe,
              je,
              Se,
              we,
              De,
              Te,
              Ue;
            return H.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = {}),
                        (r = {}),
                        (i = {}),
                        (e.prev = 3),
                        (o = ct.a.unix(Z)),
                        (c = o.subtract(1, "day").unix()),
                        (u = o.subtract(2, "day").unix()),
                        (s = o.subtract(1, "day").unix()),
                        (p = o.subtract(2, "day").unix()),
                        (e.next = 11),
                        Gt([c, u, s, p])
                      );
                    case 11:
                      return (
                        (f = e.sent),
                        (v = Object(l.a)(f, 4)),
                        (b = v[0]),
                        (y = v[1]),
                        (h = v[2]),
                        (E = v[3]),
                        (e.next = 19),
                        Y.query({ query: He(), fetchPolicy: "cache-first" })
                      );
                    case 19:
                      return (
                        (x = e.sent),
                        (a = x.data.uniswapFactories[0]),
                        (e.next = 23),
                        Y.query({
                          query: He(
                            null === b || void 0 === b ? void 0 : b.number
                          ),
                          fetchPolicy: "cache-first",
                        })
                      );
                    case 23:
                      return (
                        (g = e.sent),
                        (r = g.data.uniswapFactories[0]),
                        (e.next = 27),
                        Y.query({
                          query: He(
                            null === y || void 0 === y ? void 0 : y.number
                          ),
                          fetchPolicy: "cache-first",
                        })
                      );
                    case 27:
                      return (
                        (k = e.sent),
                        (i = k.data.uniswapFactories[0]),
                        (e.next = 31),
                        Y.query({
                          query: He(
                            null === h || void 0 === h ? void 0 : h.number
                          ),
                          fetchPolicy: "cache-first",
                        })
                      );
                    case 31:
                      return (
                        (O = e.sent),
                        (j = O.data.uniswapFactories[0]),
                        (e.next = 35),
                        Y.query({
                          query: He(
                            null === E || void 0 === E ? void 0 : E.number
                          ),
                          fetchPolicy: "cache-first",
                        })
                      );
                    case 35:
                      if (
                        ((S = e.sent),
                        (w = S.data.uniswapFactories[0]),
                        !(a && r && i && w))
                      ) {
                        e.next = 123;
                        break;
                      }
                      return (
                        (T = ln(
                          a.totalVolumeUSD,
                          r.totalVolumeUSD ? r.totalVolumeUSD : 0,
                          i.totalVolumeUSD ? i.totalVolumeUSD : 0
                        )),
                        (U = Object(l.a)(T, 2)),
                        U[0],
                        (C = U[1]),
                        (F = ln(
                          a.totalVolumeUSD,
                          j.totalVolumeUSD,
                          w.totalVolumeUSD
                        )),
                        (A = Object(l.a)(F, 2)),
                        (P = A[0]),
                        (I = A[1]),
                        (L = ln(
                          a.txCount,
                          r.txCount ? r.txCount : 0,
                          i.txCount ? i.txCount : 0
                        )),
                        (q = Object(l.a)(L, 2)),
                        (_ = q[0]),
                        (R = q[1]),
                        (z = Nt()),
                        (M = Object(l.a)(z, 3)),
                        (V = M[0]),
                        (N = M[1]),
                        (W = M[2]),
                        (e.next = 44),
                        Gt([V, N, W])
                      );
                    case 44:
                      return (
                        (K = e.sent),
                        (Q = Object(l.a)(K, 3)),
                        (G = Q[0].number),
                        (J = Q[1].number),
                        (X = Q[2].number),
                        (e.next = 51),
                        Y.query({ query: Ge, fetchPolicy: "cache-first" })
                      );
                    case 51:
                      return (
                        ($ = e.sent),
                        (ee = $.data.pairs.map(function (e) {
                          return e.id;
                        })).unshift(
                          "0x733a3D80779BFB68e0C57B94f393145DF2d9F52f"
                        ),
                        (e.next = 56),
                        Y.query({
                          query: $e,
                          variables: { allPairs: ee },
                          fetchPolicy: "cache-first",
                        })
                      );
                    case 56:
                      return (
                        (te = e.sent),
                        (e.next = 59),
                        Promise.all(
                          [G, J, X].map(
                            (function () {
                              var e = Object(B.a)(
                                H.a.mark(function e(t) {
                                  var n;
                                  return H.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (n = Y.query({
                                              query: Ze(t, ee),
                                              fetchPolicy: "cache-first",
                                            })),
                                            e.abrupt("return", n)
                                          );
                                        case 2:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                        )
                      );
                    case 59:
                      return (
                        (ne = e.sent),
                        (ae = Object(l.a)(ne, 3)),
                        (re = ae[0]),
                        ae[1],
                        ae[2],
                        null === re || void 0 === re
                          ? void 0
                          : null === (D = re.data) || void 0 === D
                          ? void 0
                          : D.pairs.reduce(function (e, t, n) {
                              return Object(m.a)(
                                {},
                                e,
                                Object(d.a)({}, t.id, t)
                              );
                            }, {}),
                        (e.next = 67),
                        ut.a.get(
                          "https://api.coingecko.com/api/v3/coins/fastswap?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                        )
                      );
                    case 67:
                      return (
                        (ie = e.sent),
                        (oe = ie.data.market_data.current_price.usd),
                        (e.next = 71),
                        ut.a.get(
                          "https://api.coingecko.com/api/v3/coins/duke-inu-token?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                        )
                      );
                    case 71:
                      return (
                        (ce = e.sent),
                        (le = ce.data.market_data.current_price.usd),
                        (ue = new In.eth.Contract(Ln, qn)),
                        (e.next = 76),
                        ue.methods.getReserves().call()
                      );
                    case 76:
                      return (
                        (se = e.sent),
                        (de = (Number(se._reserve0) / 1e18).toFixed(17)),
                        (me = (Number(se._reserve1) / 1e18).toFixed(17)),
                        (pe = se._blockTimestampLast),
                        (e.t0 = Number),
                        (e.next = 83),
                        ue.methods.totalSupply().call()
                      );
                    case 83:
                      return (
                        (e.t1 = e.sent),
                        (e.t2 = (0, e.t0)(e.t1)),
                        (fe = (e.t2 / 1e18).toFixed(17)),
                        (e.next = 88),
                        ue.methods.token0().call()
                      );
                    case 88:
                      return (
                        (ve = e.sent), (e.next = 91), ue.methods.token1().call()
                      );
                    case 91:
                      return (
                        (be = e.sent),
                        (ye = {
                          id: qn,
                          txCount: null,
                          token0: {
                            id: ve,
                            symbol: "VSW",
                            name: "Venera",
                            totalLiquidity: null,
                            derivedETH: null,
                          },
                          token1: {
                            id: be,
                            symbol: "WBNB",
                            name: "Wrapped BNB",
                            totalLiquidity: null,
                            derivedETH: null,
                          },
                          reserve0: de,
                          reserve1: me,
                          volumeToken0: null,
                          volumeToken1: null,
                          reserveUSD: null,
                          totalSupply: fe,
                          trackedReserveETH: null,
                          liquidityChangeUSD: null,
                          oneDayVolumeUSD: null,
                          oneDayVolumeUntracked: null,
                          oneWeekVolumeUSD: null,
                          reserveETH: null,
                          token0Price: t / oe,
                          token1Price: oe / t,
                          trackedReserveUSD: null,
                          untrackedVolumeUSD: null,
                          volumeChangeUSD: null,
                          volumeChangeUntracked: null,
                          volumeUSD: null,
                          createdAtTimestamp: pe,
                        }),
                        te.data.pairs.unshift(ye),
                        (he = 0),
                        (Ee = 0),
                        (xe = 0),
                        (ge = 0),
                        (ke = 0),
                        (Oe = 0),
                        (je = 0),
                        (Se = 0),
                        (we = 0),
                        (De = 0),
                        (Te = 0),
                        (e.next = 109),
                        Promise.all(
                          te &&
                            te.data.pairs.map(
                              (function () {
                                var e = Object(B.a)(
                                  H.a.mark(function e(n) {
                                    var a, r, i, o;
                                    return H.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (a = n),
                                              (e.next = 3),
                                              Y.query({
                                                query: Je(n.id, G),
                                                fetchPolicy: "cache-first",
                                              })
                                            );
                                          case 3:
                                            return (
                                              (r = e.sent),
                                              (i = r.data.pairs[0]),
                                              "0x733a3D80779BFB68e0C57B94f393145DF2d9F52f" ===
                                                a.id &&
                                                ((a.reserveUSD = String(
                                                  oe * parseFloat(a.reserve0) +
                                                    t * parseFloat(a.reserve1)
                                                )),
                                                (a.volumeUSD = String(
                                                  oe *
                                                    parseFloat(a.volumeToken0)
                                                )),
                                                (xe = a.reserveUSD),
                                                void 0 !== i &&
                                                  ((i.reserveUSD = String(
                                                    oe *
                                                      parseFloat(i.reserve0) +
                                                      t * parseFloat(i.reserve1)
                                                  )),
                                                  (i.volumeUSD = String(
                                                    oe *
                                                      parseFloat(i.volumeToken0)
                                                  )),
                                                  (ge =
                                                    parseFloat(a.volumeUSD) -
                                                    parseFloat(i.volumeUSD)),
                                                  (Te =
                                                    parseFloat(Te) +
                                                    parseFloat(ge)))),
                                              "0xeEdB250636eac748e3a746A9bbEFE98Da906E13A" ===
                                                a.id &&
                                                ((a.reserveUSD = String(
                                                  oe * parseFloat(a.reserve0) +
                                                    le * parseFloat(a.reserve1)
                                                )),
                                                (a.volumeUSD = String(
                                                  oe *
                                                    parseFloat(a.volumeToken0)
                                                )),
                                                (ke = a.reserveUSD),
                                                void 0 !== i &&
                                                  ((i.reserveUSD = String(
                                                    oe *
                                                      parseFloat(i.reserve0) +
                                                      le *
                                                        parseFloat(i.reserve1)
                                                  )),
                                                  (i.volumeUSD = String(
                                                    oe *
                                                      parseFloat(i.volumeToken0)
                                                  )),
                                                  (Oe =
                                                    parseFloat(a.volumeUSD) -
                                                    parseFloat(i.volumeUSD)),
                                                  (Te =
                                                    parseFloat(Te) +
                                                    parseFloat(Oe)))),
                                              "0x8027B248538aC7FB407C302348d91753C067b059" ===
                                                a.id &&
                                                ((a.token0.symbol = "VSW"),
                                                (_n =
                                                  parseFloat(le) /
                                                  parseFloat(a.token0Price)),
                                                (a.reserveUSD = String(
                                                  _n * parseFloat(a.reserve0) +
                                                    le * parseFloat(a.reserve1)
                                                )),
                                                (a.volumeUSD = String(
                                                  _n *
                                                    parseFloat(a.volumeToken0)
                                                )),
                                                (we = a.reserveUSD),
                                                void 0 !== i &&
                                                  ((i.reserveUSD = String(
                                                    _n *
                                                      parseFloat(i.reserve0) +
                                                      le *
                                                        parseFloat(i.reserve1)
                                                  )),
                                                  (i.volumeUSD = String(
                                                    _n *
                                                      parseFloat(i.volumeToken0)
                                                  )),
                                                  (De =
                                                    parseFloat(a.volumeUSD) -
                                                    parseFloat(i.volumeUSD)),
                                                  (Te =
                                                    parseFloat(Te) +
                                                    parseFloat(De)))),
                                              ("0xbb609bd6179c6ab5ac9e73db6661b0cfed876c04" !==
                                                a.id &&
                                                "0x14bfaacd9e661f4b7090685a4c5d820399510171" !==
                                                  a.id) ||
                                                (a.token0.symbol = "VSW"),
                                              "0xec72475fdf85473b347c963bba3f6b9c92424542" ===
                                                a.id &&
                                                (a.token1.symbol = "VSW"),
                                              void 0 !==
                                                (null === a || void 0 === a
                                                  ? void 0
                                                  : a.volumeUSD) &&
                                                void 0 !==
                                                  (null === i || void 0 === i
                                                    ? void 0
                                                    : i.volumeUSD) &&
                                                ((o =
                                                  parseFloat(a.volumeUSD) -
                                                  parseFloat(i.volumeUSD)),
                                                (Te =
                                                  parseFloat(Te) +
                                                  parseFloat(o))),
                                              Nn(a, i, G),
                                              e.abrupt("return", a)
                                            );
                                          case 13:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                        )
                      );
                    case 109:
                      e.sent,
                        parseFloat(
                          parseFloat(Ee) +
                            parseFloat(ge) +
                            parseFloat(Oe) +
                            parseFloat(Se) +
                            parseFloat(De)
                        ),
                        (a.totalLiquidityETH =
                          parseFloat(a.totalLiquidityETH) +
                          parseFloat(
                            (parseInt(he) +
                              parseInt(xe) +
                              parseInt(ke) +
                              parseInt(je) +
                              parseInt(we)) /
                              t
                          )),
                        (a.totalLiquidityUSD = a.totalLiquidityETH * t),
                        (r.totalLiquidityETH =
                          parseFloat(r.totalLiquidityETH) +
                          parseFloat(
                            (parseInt(he) +
                              parseInt(xe) +
                              parseInt(ke) +
                              parseInt(je) +
                              parseInt(we)) /
                              n
                          )),
                        (Ue = un(
                          a.totalLiquidityETH * t,
                          r.totalLiquidityETH * n
                        )),
                        (a.pairCount = a.pairCount + 1),
                        (a.oneDayVolumeUSD = Te),
                        (a.oneWeekVolume = P),
                        (a.weeklyVolumeChange = I),
                        (a.volumeChangeUSD = C),
                        (a.liquidityChangeUSD = Ue),
                        (a.oneDayTxns = _),
                        (a.txnChange = R);
                    case 123:
                      e.next = 128;
                      break;
                    case 125:
                      (e.prev = 125), (e.t3 = e.catch(3)), console.log(e.t3);
                    case 128:
                      return e.abrupt("return", a);
                    case 129:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[3, 125]]
            );
          })
        )).apply(this, arguments);
      }
      function Nn(e, t, n, a) {
        var r = ln(
            null === e || void 0 === e ? void 0 : e.volumeUSD,
            (null === t || void 0 === t ? void 0 : t.volumeUSD)
              ? t.volumeUSD
              : 0,
            (null === n || void 0 === n ? void 0 : n.volumeUSD)
              ? n.volumeUSD
              : 0
          ),
          i = Object(l.a)(r, 2),
          o = i[0];
        i[1];
        return (
          (e.oneDayVolumeUSD = o),
          !t &&
            e &&
            e.createdAtBlockNumber > a &&
            (e.oneDayVolumeUSD = parseFloat(e.volumeUSD)),
          !t && e && (e.oneDayVolumeUSD = parseFloat(e.volumeUSD)),
          e
        );
      }
      var Wn = (function () {
          var e = Object(B.a)(
            H.a.mark(function e(t) {
              var n,
                a,
                r,
                i,
                o,
                c,
                l,
                u,
                s,
                d,
                m,
                p,
                f,
                v,
                b,
                y,
                h,
                E,
                x,
                g,
                k,
                O,
                j,
                S,
                w,
                D,
                T,
                U,
                C,
                F,
                A,
                P,
                I,
                L,
                q,
                _,
                R,
                z,
                M,
                V,
                N;
              return H.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = []),
                          (a = []),
                          (r = ct.a.utc()),
                          (i = 0),
                          (o = !1),
                          (e.prev = 5);
                      case 6:
                        if (o) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.next = 9),
                          Y.query({
                            query: Ve,
                            variables: { startTime: t, skip: i },
                            fetchPolicy: "cache-first",
                          })
                        );
                      case 9:
                        (c = e.sent),
                          (i += 1e3),
                          (n = n.concat(c.data.uniswapDayDatas)),
                          c.data.uniswapDayDatas.length < 1e3 && (o = !0),
                          (e.next = 6);
                        break;
                      case 15:
                        if (!n) {
                          e.next = 77;
                          break;
                        }
                        return (
                          (l = new Set()),
                          (u = []),
                          (s = 86400),
                          (e.next = 21),
                          Y.query({ query: Ge, fetchPolicy: "cache-first" })
                        );
                      case 21:
                        return (
                          (d = e.sent),
                          (m = d.data.pairs.map(function (e) {
                            return e.id;
                          })).unshift(
                            "0x733a3D80779BFB68e0C57B94f393145DF2d9F52f"
                          ),
                          (e.next = 26),
                          Y.query({
                            query: $e,
                            variables: { allPairs: m },
                            fetchPolicy: "cache-first",
                          })
                        );
                      case 26:
                        return (
                          (p = e.sent),
                          (e.next = 29),
                          ut.a.get(
                            "https://api.coingecko.com/api/v3/coins/fastswap?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                          )
                        );
                      case 29:
                        return (
                          (f = e.sent),
                          (v = f.data.market_data.current_price.usd),
                          (e.next = 33),
                          ut.a.get(
                            "https://api.coingecko.com/api/v3/coins/duke-inu-token?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                          )
                        );
                      case 33:
                        return (
                          (b = e.sent),
                          (y = b.data.market_data.current_price.usd),
                          (e.next = 37),
                          ut.a.get(
                            "https://api.coingecko.com/api/v3/coins/binancecoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                          )
                        );
                      case 37:
                        return (
                          (h = e.sent),
                          (E = h.data.market_data.current_price.usd),
                          (x = new In.eth.Contract(Ln, qn)),
                          (e.next = 42),
                          x.methods.getReserves().call()
                        );
                      case 42:
                        return (
                          (g = e.sent),
                          (k = (Number(g._reserve0) / 1e18).toFixed(17)),
                          (O = (Number(g._reserve1) / 1e18).toFixed(17)),
                          (j = g._blockTimestampLast),
                          (e.t0 = Number),
                          (e.next = 49),
                          x.methods.totalSupply().call()
                        );
                      case 49:
                        return (
                          (e.t1 = e.sent),
                          (e.t2 = (0, e.t0)(e.t1)),
                          (S = (e.t2 / 1e18).toFixed(17)),
                          (e.next = 54),
                          x.methods.token0().call()
                        );
                      case 54:
                        return (
                          (w = e.sent), (e.next = 57), x.methods.token1().call()
                        );
                      case 57:
                        return (
                          (D = e.sent),
                          (T = {
                            id: qn,
                            txCount: null,
                            token0: {
                              id: w,
                              symbol: "VSW",
                              name: "VeneraSwap Token",
                              totalLiquidity: null,
                              derivedETH: null,
                            },
                            token1: {
                              id: D,
                              symbol: "WBNB",
                              name: "Wrapped BNB",
                              totalLiquidity: null,
                              derivedETH: null,
                            },
                            reserve0: k,
                            reserve1: O,
                            volumeToken0: null,
                            volumeToken1: null,
                            reserveUSD: null,
                            totalSupply: S,
                            trackedReserveETH: null,
                            liquidityChangeUSD: null,
                            oneDayVolumeUSD: null,
                            oneDayVolumeUntracked: null,
                            oneWeekVolumeUSD: null,
                            reserveETH: null,
                            token0Price: E / v,
                            token1Price: v / E,
                            trackedReserveUSD: null,
                            untrackedVolumeUSD: null,
                            volumeChangeUSD: null,
                            volumeChangeUntracked: null,
                            volumeUSD: null,
                            createdAtTimestamp: j,
                          }),
                          p.data.pairs.unshift(T),
                          (U = 0),
                          (C = 0),
                          (F = 0),
                          (A = 0),
                          (P = 0),
                          (e.next = 69),
                          Promise.all(
                            p &&
                              p.data.pairs.map(
                                (function () {
                                  var e = Object(B.a)(
                                    H.a.mark(function e(t) {
                                      var n;
                                      return H.a.wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                "0x733a3D80779BFB68e0C57B94f393145DF2d9F52f" ===
                                                  (n = t).id &&
                                                  ((n.reserveUSD = String(
                                                    v * parseFloat(n.reserve0) +
                                                      E * parseFloat(n.reserve1)
                                                  )),
                                                  (n.volumeUSD = String(
                                                    v *
                                                      parseFloat(n.volumeToken0)
                                                  )),
                                                  (C = n.reserveUSD)),
                                                "0xeEdB250636eac748e3a746A9bbEFE98Da906E13A" ===
                                                  n.id &&
                                                  ((n.reserveUSD = String(
                                                    v * parseFloat(n.reserve0) +
                                                      y * parseFloat(n.reserve1)
                                                  )),
                                                  (n.volumeUSD = String(
                                                    v *
                                                      parseFloat(n.volumeToken0)
                                                  )),
                                                  (F = n.reserveUSD)),
                                                "0x8027B248538aC7FB407C302348d91753C067b059" ===
                                                  n.id &&
                                                  ((_n =
                                                    parseFloat(y) /
                                                    parseFloat(n.token0Price)),
                                                  (n.reserveUSD = String(
                                                    _n *
                                                      parseFloat(n.reserve0) +
                                                      y * parseFloat(n.reserve1)
                                                  )),
                                                  (n.volumeUSD = String(
                                                    _n *
                                                      parseFloat(n.volumeToken0)
                                                  )),
                                                  (P = n.reserveUSD)),
                                                e.abrupt("return", n)
                                              );
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  );
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )
                          )
                        );
                      case 69:
                        for (
                          e.sent,
                            I =
                              parseInt(U) +
                              parseInt(C) +
                              parseInt(F) +
                              parseInt(A) +
                              parseInt(P),
                            n.forEach(function (e, t) {
                              l.add((n[t].date / s).toFixed(0)),
                                u.push(n[t]),
                                (e.dailyVolumeUSD = parseFloat(
                                  e.dailyVolumeUSD
                                )),
                                (e.totalLiquidityUSD =
                                  parseFloat(e.totalLiquidityUSD) +
                                  parseFloat(I));
                            }),
                            L = n[0].date ? n[0].date : t,
                            q = n[0].totalLiquidityUSD,
                            _ = n[0].mostLiquidTokens,
                            R = 1;
                          L < r.unix() - s;

                        )
                          (M = ((z = L + s) / s).toFixed(0)),
                            l.has(M)
                              ? ((q = u[R].totalLiquidityUSD),
                                (_ = u[R].mostLiquidTokens),
                                (R += 1))
                              : n.push({
                                  date: z,
                                  dailyVolumeUSD: 0,
                                  totalLiquidityUSD: q,
                                  mostLiquidTokens: _,
                                }),
                            (L = z);
                      case 77:
                        (n = n.sort(function (e, t) {
                          return parseInt(e.date) > parseInt(t.date) ? 1 : -1;
                        })),
                          (V = -1),
                          (N = -1),
                          n.forEach(function (e, t) {
                            var r,
                              i = ct.a.utc(ct.a.unix(n[t].date)).week();
                            i !== N && ((N = i), V++),
                              (a[V] = a[V] || {}),
                              (a[V].date = n[t].date),
                              (a[V].weeklyVolumeUSD =
                                (null !== (r = a[V].weeklyVolumeUSD) &&
                                void 0 !== r
                                  ? r
                                  : 0) + n[t].dailyVolumeUSD);
                          }),
                          (e.next = 86);
                        break;
                      case 83:
                        (e.prev = 83), (e.t3 = e.catch(5)), console.log(e.t3);
                      case 86:
                        return e.abrupt("return", [n, a]);
                      case 87:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[5, 83]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Kn = (function () {
          var e = Object(B.a)(
            H.a.mark(function e() {
              var t, n, a, r, i, o, c, l, u;
              return H.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = {}),
                          (e.prev = 1),
                          (e.next = 4),
                          Y.query({ query: Be, fetchPolicy: "cache-first" })
                        );
                      case 4:
                        return (
                          (a = e.sent),
                          (e.next = 7),
                          ut.a.get(
                            "https://api.coingecko.com/api/v3/coins/fastswap?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                          )
                        );
                      case 11:
                        return (
                          (o = e.sent),
                          (c = o.data.market_data.current_price.usd),
                          (e.next = 15),
                          ut.a.get(
                            "https://api.coingecko.com/api/v3/coins/tether?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                          )
                        );
                      case 15:
                        (l = e.sent),
                          (u = l.data.market_data.current_price.usd),
                          (t.mints = []),
                          (t.burns = []),
                          (t.swaps = []),
                          (null === a || void 0 === a
                            ? void 0
                            : null === (n = a.data) || void 0 === n
                            ? void 0
                            : n.transactions) &&
                            a.data.transactions.map(function (e) {
                              return (
                                e.mints.length > 0 &&
                                  e.mints.map(function (e) {
                                    return (
                                      "0x94174f59c009f49b6aBC362706fdA402616b0427" ===
                                        e.pair.token0.id &&
                                        (e.pair.token0.symbol = "VSW"),
                                      "0x94174f59c009f49b6aBC362706fdA402616b0427" ===
                                        e.pair.token1.id &&
                                        (e.pair.token1.symbol = "VSW"),
                                      t.mints.push(e)
                                    );
                                  }),
                                e.burns.length > 0 &&
                                  e.burns.map(function (e) {
                                    return (
                                      "0x94174f59c009f49b6aBC362706fdA402616b0427" ===
                                        e.pair.token0.id &&
                                        (e.pair.token0.symbol = "VSW"),
                                      "0x94174f59c009f49b6aBC362706fdA402616b0427" ===
                                        e.pair.token1.id &&
                                        (e.pair.token1.symbol = "VSW"),
                                      t.burns.push(e)
                                    );
                                  }),
                                e.swaps.length > 0 &&
                                  e.swaps.map(function (e) {
                                    return (
                                      "0x94174f59c009f49b6aBC362706fdA402616b0427" ===
                                        e.pair.token0.id &&
                                        (e.pair.token0.symbol = "VSW"),
                                      "0x94174f59c009f49b6aBC362706fdA402616b0427" ===
                                        e.pair.token1.id &&
                                        (e.pair.token1.symbol = "VSW"),
                                      "0x4d338614fc25afe6edf3994f331b4bad32fb3c6a" ===
                                        e.pair.token0.id &&
                                        ("0" === e.amount0In
                                          ? (e.amountUSD =
                                              i *
                                              parseFloat(e.amount0Out) *
                                              1.02)
                                          : (e.amountUSD =
                                              i *
                                              parseFloat(e.amount0In) *
                                              1.02)),
                                      "ETH" === e.pair.token0.symbol &&
                                        "VSW" === e.pair.token1.symbol &&
                                        ("0" === e.amount1In
                                          ? (e.amountUSD =
                                              i *
                                              parseFloat(e.amount1Out) *
                                              1.02)
                                          : (e.amountUSD =
                                              i *
                                              parseFloat(e.amount1In) *
                                              1.02)),
                                      "Cake" === e.pair.token0.symbol &&
                                        "VSW" === e.pair.token1.symbol &&
                                        ("0" === e.amount1In
                                          ? (e.amountUSD =
                                              i *
                                              parseFloat(e.amount1Out) *
                                              1.02)
                                          : (e.amountUSD =
                                              i *
                                              parseFloat(e.amount1In) *
                                              1.02)),
                                      t.swaps.push(e)
                                    );
                                  }),
                                !0
                              );
                            }),
                          (e.next = 26);
                        break;
                      case 23:
                        (e.prev = 23), (e.t0 = e.catch(1)), console.log(e.t0);
                      case 26:
                        return e.abrupt("return", t);
                      case 27:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 23]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Yn = (function () {
          var e = Object(B.a)(
            H.a.mark(function e() {
              var t, n, a, r, i, o, c, l, u, s, d, m, p, f;
              return H.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = ct.a.unix(Z)),
                          (n = t.subtract(1, "day").startOf("minute").unix()),
                          (a = 0),
                          (r = 0),
                          (i = 0),
                          (e.prev = 5),
                          (e.next = 8),
                          Yt(n)
                        );
                      case 8:
                        return (
                          (s = e.sent),
                          (e.next = 11),
                          Y.query({ query: Ie(), fetchPolicy: "cache-first" })
                        );
                      case 11:
                        return (
                          (d = e.sent),
                          (e.next = 14),
                          Y.query({ query: Ie(s), fetchPolicy: "cache-first" })
                        );
                      case 14:
                        (m = e.sent),
                          (p =
                            null === d || void 0 === d
                              ? void 0
                              : null === (o = d.data) || void 0 === o
                              ? void 0
                              : null === (c = o.bundles[0]) || void 0 === c
                              ? void 0
                              : c.ethPrice),
                          (f =
                            null === m || void 0 === m
                              ? void 0
                              : null === (l = m.data) || void 0 === l
                              ? void 0
                              : null === (u = l.bundles[0]) || void 0 === u
                              ? void 0
                              : u.ethPrice),
                          (i = un(p, f)),
                          (a = p),
                          (r = f),
                          (e.next = 25);
                        break;
                      case 22:
                        (e.prev = 22), (e.t0 = e.catch(5)), console.log(e.t0);
                      case 25:
                        return e.abrupt("return", [a, r, i]);
                      case 26:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[5, 22]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
      function Qn() {
        return Gn.apply(this, arguments);
      }
      function Gn() {
        return (Gn = Object(B.a)(
          H.a.mark(function e() {
            var t, n, a, r, i, o;
            return H.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (e.prev = 0), (t = !1), (n = []), (a = 0);
                    case 4:
                      if (t) {
                        e.next = 13;
                        break;
                      }
                      return (
                        (e.next = 7),
                        Y.query({
                          query: Ye,
                          variables: { skip: a },
                          fetchPolicy: "cache-first",
                        })
                      );
                    case 7:
                      (o = e.sent),
                        (a += 500),
                        (n = n.concat(
                          null === o || void 0 === o
                            ? void 0
                            : null === (r = o.data) || void 0 === r
                            ? void 0
                            : r.pairs
                        )),
                        ((null === o || void 0 === o
                          ? void 0
                          : null === (i = o.data) || void 0 === i
                          ? void 0
                          : i.pairs.length) < 500 ||
                          n.length > 500) &&
                          (t = !0),
                        (e.next = 4);
                      break;
                    case 13:
                      return e.abrupt("return", n);
                    case 16:
                      (e.prev = 16), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 16]]
            );
          })
        )).apply(this, arguments);
      }
      function Jn() {
        return Xn.apply(this, arguments);
      }
      function Xn() {
        return (Xn = Object(B.a)(
          H.a.mark(function e() {
            var t, n, a, r, i, o, c;
            return H.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (e.prev = 0), (t = !1), (n = 0), (a = []);
                    case 4:
                      if (t) {
                        e.next = 13;
                        break;
                      }
                      return (
                        (e.next = 7),
                        Y.query({
                          query: Ne,
                          variables: { skip: n },
                          fetchPolicy: "cache-first",
                        })
                      );
                    case 7:
                      (c = e.sent),
                        (a = a.concat(
                          null === c || void 0 === c
                            ? void 0
                            : null === (r = c.data) || void 0 === r
                            ? void 0
                            : r.tokens
                        )),
                        ((null === c || void 0 === c
                          ? void 0
                          : null === (i = c.data) || void 0 === i
                          ? void 0
                          : null === (o = i.tokens) || void 0 === o
                          ? void 0
                          : o.length) < 500 ||
                          a.length > 500) &&
                          (t = !0),
                        (n = n += 500),
                        (e.next = 4);
                      break;
                    case 13:
                      return e.abrupt("return", a);
                    case 16:
                      (e.prev = 16), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 16]]
            );
          })
        )).apply(this, arguments);
      }
      function $n() {
        var e = zn(),
          t = Object(l.a)(e, 2),
          n = t[0],
          r = t[1],
          i = r.update,
          o = r.updateAllPairsInUniswap,
          c = r.updateAllTokensInUniswap,
          u = ea(),
          s = Object(l.a)(u, 2),
          d = s[0],
          m = s[1],
          p = null === n || void 0 === n ? void 0 : n.globalData;
        return (
          Object(a.useEffect)(
            function () {
              function e() {
                return (e = Object(B.a)(
                  H.a.mark(function e() {
                    var t, n, a;
                    return H.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Hn(d, m);
                          case 2:
                            return (t = e.sent) && i(t), (e.next = 6), Qn();
                          case 6:
                            return (n = e.sent), o(n), (e.next = 10), Jn();
                          case 10:
                            (a = e.sent), c(a);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              !p &&
                d &&
                m &&
                (function () {
                  e.apply(this, arguments);
                })();
            },
            [d, m, i, p, o, c]
          ),
          p || {}
        );
      }
      function Zn() {
        var e,
          t,
          n = zn(),
          r = Object(l.a)(n, 2),
          i = r[0],
          o = r[1].updateChart,
          c = Object(a.useState)(),
          u = Object(l.a)(c, 2),
          s = u[0],
          d = u[1],
          m = Dt(),
          p = Object(l.a)(m, 1)[0],
          f =
            null === i || void 0 === i
              ? void 0
              : null === (e = i.chartData) || void 0 === e
              ? void 0
              : e.daily,
          v =
            null === i || void 0 === i
              ? void 0
              : null === (t = i.chartData) || void 0 === t
              ? void 0
              : t.weekly;
        return (
          Object(a.useEffect)(
            function () {
              var e = Rt(p);
              ((p && e < s) || !s) && d(e);
            },
            [p, s]
          ),
          Object(a.useEffect)(
            function () {
              function e() {
                return (e = Object(B.a)(
                  H.a.mark(function e() {
                    var t, n, a, r;
                    return H.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Wn(s);
                          case 2:
                            (t = e.sent),
                              (n = Object(l.a)(t, 2)),
                              (a = n[0]),
                              (r = n[1]),
                              o(a, r);
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              !s ||
                (f && v) ||
                (function () {
                  e.apply(this, arguments);
                })();
            },
            [f, v, s, o]
          ),
          [f, v]
        );
      }
      function ea() {
        var e = zn(),
          t = Object(l.a)(e, 2),
          n = t[0],
          r = t[1].updateEthPrice,
          i = null === n || void 0 === n ? void 0 : n.ETH_PRICE_KEY,
          o = null === n || void 0 === n ? void 0 : n.oneDayPrice;
        return (
          Object(a.useEffect)(
            function () {
              function e() {
                return (e = Object(B.a)(
                  H.a.mark(function e() {
                    var t, n, a, o, c;
                    return H.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (i) {
                              e.next = 9;
                              break;
                            }
                            return (e.next = 3), Yn();
                          case 3:
                            (t = e.sent),
                              (n = Object(l.a)(t, 3)),
                              (a = n[0]),
                              (o = n[1]),
                              (c = n[2]),
                              r(a, o, c);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              !(function () {
                e.apply(this, arguments);
              })();
            },
            [i, r]
          ),
          [i, o]
        );
      }
      ct.a.extend(yt.a);
      var ta = Object(a.createContext)();
      function na() {
        return Object(a.useContext)(ta);
      }
      function aa(e, t) {
        var n = t.type,
          a = t.payload;
        switch (n) {
          case "UPDATE":
            var r = a.tokenAddress,
              i = a.data;
            return Object(m.a)(
              {},
              e,
              Object(d.a)(
                {},
                r,
                Object(m.a)(
                  {},
                  null === e || void 0 === e ? void 0 : e[r],
                  {},
                  i
                )
              )
            );
          case " UPDATE_TOP_TOKENS":
            var o = a.topTokens,
              c = {};
            return (
              o &&
                o.map(function (e) {
                  return (c[e.id] = e);
                }),
              Object(m.a)({}, e, {}, c)
            );
          case "UPDATE_TOKEN_TXNS":
            var l = a.address,
              u = a.transactions;
            return Object(m.a)(
              {},
              e,
              Object(d.a)(
                {},
                l,
                Object(m.a)({}, null === e || void 0 === e ? void 0 : e[l], {
                  txns: u,
                })
              )
            );
          case "UPDATE_CHART_DATA":
            var s = a.address,
              p = a.chartData;
            return Object(m.a)(
              {},
              e,
              Object(d.a)(
                {},
                s,
                Object(m.a)({}, null === e || void 0 === e ? void 0 : e[s], {
                  chartData: p,
                })
              )
            );
          case "UPDATE_PRICE_DATA":
            var f,
              v = a.address,
              b = a.data,
              y = a.timeWindow,
              h = a.interval;
            return Object(m.a)(
              {},
              e,
              Object(d.a)(
                {},
                v,
                Object(m.a)(
                  {},
                  null === e || void 0 === e ? void 0 : e[v],
                  Object(d.a)(
                    {},
                    y,
                    Object(m.a)(
                      {},
                      null === e || void 0 === e
                        ? void 0
                        : null === (f = e[v]) || void 0 === f
                        ? void 0
                        : f[y],
                      Object(d.a)({}, h, b)
                    )
                  )
                )
              )
            );
          case "UPDATE_ALL_PAIRS":
            var E = a.address,
              x = a.allPairs;
            return Object(m.a)(
              {},
              e,
              Object(d.a)(
                {},
                E,
                Object(m.a)(
                  {},
                  null === e || void 0 === e ? void 0 : e[E],
                  Object(d.a)({}, "TOKEN_PAIRS_KEY", x)
                )
              )
            );
          default:
            throw Error(
              "Unexpected action type in DataContext reducer: '".concat(n, "'.")
            );
        }
      }
      function ra(e) {
        var t = e.children,
          n = Object(a.useReducer)(aa, {}),
          i = Object(l.a)(n, 2),
          o = i[0],
          c = i[1],
          u = Object(a.useCallback)(function (e, t) {
            c({ type: "UPDATE", payload: { tokenAddress: e, data: t } });
          }, []),
          s = Object(a.useCallback)(function (e) {
            c({ type: " UPDATE_TOP_TOKENS", payload: { topTokens: e } });
          }, []),
          d = Object(a.useCallback)(function (e, t) {
            c({
              type: "UPDATE_TOKEN_TXNS",
              payload: { address: e, transactions: t },
            });
          }, []),
          m = Object(a.useCallback)(function (e, t) {
            c({
              type: "UPDATE_CHART_DATA",
              payload: { address: e, chartData: t },
            });
          }, []),
          p = Object(a.useCallback)(function (e, t) {
            c({
              type: "UPDATE_ALL_PAIRS",
              payload: { address: e, allPairs: t },
            });
          }, []),
          f = Object(a.useCallback)(function (e, t, n, a) {
            c({
              type: "UPDATE_PRICE_DATA",
              payload: { address: e, data: t, timeWindow: n, interval: a },
            });
          }, []);
        return r.a.createElement(
          ta.Provider,
          {
            value: Object(a.useMemo)(
              function () {
                return [
                  o,
                  {
                    update: u,
                    updateTokenTxns: d,
                    updateChartData: m,
                    updateTopTokens: s,
                    updateAllPairs: p,
                    updatePriceData: f,
                  },
                ];
              },
              [o, u, d, m, s, p, f]
            ),
          },
          t
        );
      }
      var ia = (function () {
          var e = Object(B.a)(
            H.a.mark(function e(t, n) {
              var a, r, i, o, c, u, s, p, f, v, b, y, h, E;
              return H.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = ct.a.unix(Z)),
                          (r = a.subtract(1, "day").unix()),
                          (i = a.subtract(2, "day").unix()),
                          (e.next = 5),
                          Yt(r)
                        );
                      case 5:
                        return (o = e.sent), (e.next = 8), Yt(i);
                      case 8:
                        return (
                          (c = e.sent),
                          (e.prev = 9),
                          (e.next = 12),
                          Y.query({ query: nt, fetchPolicy: "cache-first" })
                        );
                      case 12:
                        return (
                          (f = e.sent),
                          (e.next = 15),
                          Y.query({ query: at(o), fetchPolicy: "cache-first" })
                        );
                      case 15:
                        return (
                          (v = e.sent),
                          (e.next = 18),
                          Y.query({ query: at(c), fetchPolicy: "cache-first" })
                        );
                      case 18:
                        return (
                          (b = e.sent),
                          (y =
                            null === v || void 0 === v
                              ? void 0
                              : null === (u = v.data) || void 0 === u
                              ? void 0
                              : u.tokens.reduce(function (e, t, n) {
                                  return Object(m.a)(
                                    {},
                                    e,
                                    Object(d.a)({}, t.id, t)
                                  );
                                }, {})),
                          (h =
                            null === b || void 0 === b
                              ? void 0
                              : null === (s = b.data) || void 0 === s
                              ? void 0
                              : s.tokens.reduce(function (e, t, n) {
                                  return Object(m.a)(
                                    {},
                                    e,
                                    Object(d.a)({}, t.id, t)
                                  );
                                }, {})),
                          (e.next = 23),
                          Promise.all(
                            f &&
                              y &&
                              h &&
                              (null === f || void 0 === f
                                ? void 0
                                : null === (p = f.data) || void 0 === p
                                ? void 0
                                : p.tokens.map(
                                    (function () {
                                      var e = Object(B.a)(
                                        H.a.mark(function e(a) {
                                          var r,
                                            i,
                                            u,
                                            s,
                                            d,
                                            m,
                                            p,
                                            f,
                                            v,
                                            b,
                                            E,
                                            x,
                                            g,
                                            k,
                                            O,
                                            j,
                                            S,
                                            w,
                                            D,
                                            T,
                                            U,
                                            C,
                                            F,
                                            A,
                                            P,
                                            I,
                                            L,
                                            q,
                                            _,
                                            R;
                                          return H.a.wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  if (
                                                    ((g = a),
                                                    (k =
                                                      null === y || void 0 === y
                                                        ? void 0
                                                        : y[a.id]),
                                                    (O =
                                                      null === h || void 0 === h
                                                        ? void 0
                                                        : h[a.id]),
                                                    k)
                                                  ) {
                                                    e.next = 8;
                                                    break;
                                                  }
                                                  return (
                                                    (e.next = 6),
                                                    Y.query({
                                                      query: rt(a.id, o),
                                                      fetchPolicy:
                                                        "cache-first",
                                                    })
                                                  );
                                                case 6:
                                                  (j = e.sent),
                                                    (k = j.data.tokens[0]);
                                                case 8:
                                                  if (O) {
                                                    e.next = 13;
                                                    break;
                                                  }
                                                  return (
                                                    (e.next = 11),
                                                    Y.query({
                                                      query: rt(a.id, c),
                                                      fetchPolicy:
                                                        "cache-first",
                                                    })
                                                  );
                                                case 11:
                                                  (S = e.sent),
                                                    (O = S.data.tokens[0]);
                                                case 13:
                                                  if (
                                                    ((w = ln(
                                                      g.tradeVolumeUSD,
                                                      null !==
                                                        (r =
                                                          null === (i = k) ||
                                                          void 0 === i
                                                            ? void 0
                                                            : i.tradeVolumeUSD) &&
                                                        void 0 !== r
                                                        ? r
                                                        : 0,
                                                      null !==
                                                        (u =
                                                          null === (s = O) ||
                                                          void 0 === s
                                                            ? void 0
                                                            : s.tradeVolumeUSD) &&
                                                        void 0 !== u
                                                        ? u
                                                        : 0
                                                    )),
                                                    (D = Object(l.a)(w, 2)),
                                                    (T = D[0]),
                                                    (U = D[1]),
                                                    (C = ln(
                                                      g.txCount,
                                                      null !==
                                                        (d =
                                                          null === (m = k) ||
                                                          void 0 === m
                                                            ? void 0
                                                            : m.txCount) &&
                                                        void 0 !== d
                                                        ? d
                                                        : 0,
                                                      null !==
                                                        (p =
                                                          null === (f = O) ||
                                                          void 0 === f
                                                            ? void 0
                                                            : f.txCount) &&
                                                        void 0 !== p
                                                        ? p
                                                        : 0
                                                    )),
                                                    (F = Object(l.a)(C, 2)),
                                                    (A = F[0]),
                                                    (P = F[1]),
                                                    (I =
                                                      (null === g ||
                                                      void 0 === g
                                                        ? void 0
                                                        : g.totalLiquidity) *
                                                      t *
                                                      (null === g ||
                                                      void 0 === g
                                                        ? void 0
                                                        : g.derivedETH)),
                                                    (L =
                                                      (null === (v = k) ||
                                                      void 0 === v
                                                        ? void 0
                                                        : v.totalLiquidity) *
                                                      n *
                                                      (null === (b = k) ||
                                                      void 0 === b
                                                        ? void 0
                                                        : b.derivedETH)),
                                                    (q = un(
                                                      (null === g ||
                                                      void 0 === g
                                                        ? void 0
                                                        : g.derivedETH) * t,
                                                      (
                                                        null === (E = k) ||
                                                        void 0 === E
                                                          ? void 0
                                                          : E.derivedETH
                                                      )
                                                        ? (null === (x = k) ||
                                                          void 0 === x
                                                            ? void 0
                                                            : x.derivedETH) * n
                                                        : 0
                                                    )),
                                                    (g.priceUSD =
                                                      (null === g ||
                                                      void 0 === g
                                                        ? void 0
                                                        : g.derivedETH) * t),
                                                    (g.totalLiquidityUSD = I),
                                                    (g.oneDayVolumeUSD =
                                                      parseFloat(T)),
                                                    (g.volumeChangeUSD = U),
                                                    (g.priceChangeUSD = q),
                                                    (g.liquidityChangeUSD = un(
                                                      null !== I && void 0 !== I
                                                        ? I
                                                        : 0,
                                                      null !== L && void 0 !== L
                                                        ? L
                                                        : 0
                                                    )),
                                                    (g.oneDayTxns = A),
                                                    (g.txnChange = P),
                                                    !k &&
                                                      g &&
                                                      ((g.oneDayVolumeUSD =
                                                        g.tradeVolumeUSD),
                                                      (g.oneDayVolumeETH =
                                                        g.tradeVolume *
                                                        g.derivedETH),
                                                      (g.oneDayTxns =
                                                        g.txCount)),
                                                    pn({ token0: g }),
                                                    "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9" !==
                                                      g.id)
                                                  ) {
                                                    e.next = 36;
                                                    break;
                                                  }
                                                  return (
                                                    (e.next = 31),
                                                    Y.query({
                                                      query: Je(
                                                        "0xdfc14d2af169b0d36c4eff567ada9b2e0cae044f"
                                                      ),
                                                      fetchPolicy:
                                                        "cache-first",
                                                    })
                                                  );
                                                case 31:
                                                  (_ = e.sent),
                                                    (R = _.data.pairs[0]),
                                                    (g.totalLiquidityUSD =
                                                      parseFloat(R.reserveUSD) /
                                                      2),
                                                    (g.liquidityChangeUSD = 0),
                                                    (g.priceChangeUSD = 0);
                                                case 36:
                                                  return e.abrupt("return", g);
                                                case 37:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  ))
                          )
                        );
                      case 23:
                        return (E = e.sent), e.abrupt("return", E);
                      case 27:
                        (e.prev = 27), (e.t0 = e.catch(9)), console.log(e.t0);
                      case 30:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[9, 27]]
              );
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        oa = (function () {
          var e = Object(B.a)(
            H.a.mark(function e(t, n, a) {
              var r,
                i,
                o,
                c,
                u,
                s,
                d,
                m,
                p,
                f,
                v,
                b,
                y,
                h,
                E,
                x,
                g,
                k,
                O,
                j,
                S,
                w,
                D,
                T,
                U,
                C,
                F,
                A,
                P,
                I,
                L,
                q,
                _,
                R,
                z,
                M,
                V,
                B,
                N,
                W,
                K,
                Q,
                G,
                J,
                X,
                $,
                ee,
                te,
                ne,
                ae,
                re,
                ie,
                oe;
              return H.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = ct.a.unix(Z)),
                          (i = r.subtract(1, "day").startOf("minute").unix()),
                          (o = r.subtract(2, "day").startOf("minute").unix()),
                          (e.next = 5),
                          Yt(i)
                        );
                      case 5:
                        return (c = e.sent), (e.next = 8), Yt(o);
                      case 8:
                        return (
                          (u = e.sent),
                          (s = {}),
                          (d = {}),
                          (m = {}),
                          (e.prev = 12),
                          (e.next = 15),
                          Y.query({ query: rt(t), fetchPolicy: "cache-first" })
                        );
                      case 15:
                        return (
                          (L = e.sent),
                          (s =
                            null === L || void 0 === L
                              ? void 0
                              : null === (p = L.data) || void 0 === p
                              ? void 0
                              : null === (f = p.tokens) || void 0 === f
                              ? void 0
                              : f[0]),
                          (e.next = 19),
                          Y.query({
                            query: rt(t, c),
                            fetchPolicy: "cache-first",
                          })
                        );
                      case 19:
                        return (
                          (q = e.sent),
                          (d = q.data.tokens[0]),
                          (e.next = 23),
                          Y.query({
                            query: rt(t, u),
                            fetchPolicy: "cache-first",
                          })
                        );
                      case 23:
                        if (((_ = e.sent), (m = _.data.tokens[0]), d)) {
                          e.next = 30;
                          break;
                        }
                        return (
                          (e.next = 28),
                          Y.query({
                            query: rt(t, c),
                            fetchPolicy: "cache-first",
                          })
                        );
                      case 28:
                        (R = e.sent), (d = R.data.tokens[0]);
                      case 30:
                        if (m) {
                          e.next = 35;
                          break;
                        }
                        return (
                          (e.next = 33),
                          Y.query({
                            query: rt(t, u),
                            fetchPolicy: "cache-first",
                          })
                        );
                      case 33:
                        (z = e.sent), (m = z.data.tokens[0]);
                      case 35:
                        if (
                          ((M = ln(
                            s.tradeVolumeUSD,
                            null !==
                              (v =
                                null === (b = d) || void 0 === b
                                  ? void 0
                                  : b.tradeVolumeUSD) && void 0 !== v
                              ? v
                              : 0,
                            null !==
                              (y =
                                null === (h = m) || void 0 === h
                                  ? void 0
                                  : h.tradeVolumeUSD) && void 0 !== y
                              ? y
                              : 0
                          )),
                          (V = Object(l.a)(M, 2)),
                          (B = V[0]),
                          (N = V[1]),
                          (W = ln(
                            s.untrackedVolumeUSD,
                            null !==
                              (E =
                                null === (x = d) || void 0 === x
                                  ? void 0
                                  : x.untrackedVolumeUSD) && void 0 !== E
                              ? E
                              : 0,
                            null !==
                              (g =
                                null === (k = m) || void 0 === k
                                  ? void 0
                                  : k.untrackedVolumeUSD) && void 0 !== g
                              ? g
                              : 0
                          )),
                          (K = Object(l.a)(W, 2)),
                          (Q = K[0]),
                          (G = K[1]),
                          (J = ln(
                            s.txCount,
                            null !==
                              (O =
                                null === (j = d) || void 0 === j
                                  ? void 0
                                  : j.txCount) && void 0 !== O
                              ? O
                              : 0,
                            null !==
                              (S =
                                null === (w = m) || void 0 === w
                                  ? void 0
                                  : w.txCount) && void 0 !== S
                              ? S
                              : 0
                          )),
                          (X = Object(l.a)(J, 2)),
                          ($ = X[0]),
                          (ee = X[1]),
                          (te = un(
                            (null === (D = s) || void 0 === D
                              ? void 0
                              : D.derivedETH) * n,
                            parseFloat(
                              null !==
                                (T =
                                  null === (U = d) || void 0 === U
                                    ? void 0
                                    : U.derivedETH) && void 0 !== T
                                ? T
                                : 0
                            ) * a
                          )),
                          (ne =
                            (null === (C = s) || void 0 === C
                              ? void 0
                              : C.totalLiquidity) *
                            n *
                            (null === (F = s) || void 0 === F
                              ? void 0
                              : F.derivedETH)),
                          (ae =
                            (null === (A = d) || void 0 === A
                              ? void 0
                              : A.totalLiquidity) *
                            a *
                            (null === (P = d) || void 0 === P
                              ? void 0
                              : P.derivedETH)),
                          (s.priceUSD =
                            (null === (I = s) || void 0 === I
                              ? void 0
                              : I.derivedETH) * n),
                          (s.totalLiquidityUSD = ne),
                          (s.oneDayVolumeUSD = B),
                          (s.volumeChangeUSD = N),
                          (s.priceChangeUSD = te),
                          (s.oneDayVolumeUT = Q),
                          (s.volumeChangeUT = G),
                          (re = un(
                            null !== ne && void 0 !== ne ? ne : 0,
                            null !== ae && void 0 !== ae ? ae : 0
                          )),
                          (s.liquidityChangeUSD = re),
                          (s.oneDayTxns = $),
                          (s.txnChange = ee),
                          !d &&
                            s &&
                            ((s.oneDayVolumeUSD = s.tradeVolumeUSD),
                            (s.oneDayVolumeETH = s.tradeVolume * s.derivedETH),
                            (s.oneDayTxns = s.txCount)),
                          pn({ token0: s }),
                          "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9" !== s.id)
                        ) {
                          e.next = 62;
                          break;
                        }
                        return (
                          (e.next = 57),
                          Y.query({
                            query: Je(
                              "0xdfc14d2af169b0d36c4eff567ada9b2e0cae044f"
                            ),
                            fetchPolicy: "cache-first",
                          })
                        );
                      case 57:
                        (ie = e.sent),
                          (oe = ie.data.pairs[0]),
                          (s.totalLiquidityUSD = parseFloat(oe.reserveUSD) / 2),
                          (s.liquidityChangeUSD = 0),
                          (s.priceChangeUSD = 0);
                      case 62:
                        e.next = 67;
                        break;
                      case 64:
                        (e.prev = 64), (e.t0 = e.catch(12)), console.log(e.t0);
                      case 67:
                        return e.abrupt("return", s);
                      case 68:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[12, 64]]
              );
            })
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        ca = (function () {
          var e = Object(B.a)(
            H.a.mark(function e(t) {
              var n, a;
              return H.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = {}),
                          (e.prev = 1),
                          (e.next = 4),
                          Y.query({
                            query: it,
                            variables: { allPairs: t },
                            fetchPolicy: "cache-first",
                          })
                        );
                      case 4:
                        (a = e.sent),
                          (n.mints = a.data.mints),
                          (n.burns = a.data.burns),
                          (n.swaps = a.data.swaps),
                          (e.next = 13);
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(1)), console.log(e.t0);
                      case 13:
                        return e.abrupt("return", n);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 10]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        la = (function () {
          var e = Object(B.a)(
            H.a.mark(function e(t) {
              var n, a, r;
              return H.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Y.query({ query: rt(t), fetchPolicy: "cache-first" })
                        );
                      case 3:
                        return (
                          (r = e.sent),
                          e.abrupt(
                            "return",
                            null === (n = r.data) || void 0 === n
                              ? void 0
                              : n.pairs0.concat(
                                  null === (a = r.data) || void 0 === a
                                    ? void 0
                                    : a.pairs1
                                )
                          )
                        );
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(0)), console.log(e.t0);
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        ua = (function () {
          var e = Object(B.a)(
            H.a.mark(function e(t, n) {
              var a,
                r,
                i,
                o,
                c,
                l,
                u,
                s,
                d,
                m,
                p,
                f,
                v,
                b,
                y,
                h,
                E = arguments;
              return H.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (
                          a = E.length > 2 && void 0 !== E[2] ? E[2] : 3600,
                            r = E.length > 3 ? E[3] : void 0,
                            i = ct.a.utc(),
                            o = n,
                            c = [];
                          o < i.unix();

                        )
                          c.push(o), (o += a);
                        if (0 !== c.length) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return", []);
                      case 8:
                        return (e.prev = 8), (e.next = 11), Gt(c, 100);
                      case 11:
                        if ((l = e.sent) && 0 !== l.length) {
                          e.next = 14;
                          break;
                        }
                        return e.abrupt("return", []);
                      case 14:
                        return (
                          r &&
                            (l = l.filter(function (e) {
                              return parseFloat(e.number) <= parseFloat(r);
                            })),
                          (e.next = 17),
                          Wt(Ce, Y, [t], l, 50)
                        );
                      case 17:
                        for (d in ((u = e.sent), (s = []), u))
                          (p = d.split("t")[1]),
                            (f = parseFloat(
                              (null === (m = u[d]) || void 0 === m
                                ? void 0
                                : m.derivedETH) || 0
                            )),
                            p && s.push({ timestamp: p, derivedETH: f });
                        for (b in ((v = 0), u))
                          b.split("b")[1] &&
                            u[b] &&
                            u[b].ethPrice &&
                            ((s[v].priceUSD =
                              +u[b].ethPrice * +s[v].derivedETH),
                            (v += 1));
                        for (y = [], h = 0; h < s.length - 1; h++)
                          y.push({
                            timestamp: s[h].timestamp,
                            open: parseFloat(s[h].priceUSD),
                            close: parseFloat(s[h + 1].priceUSD),
                          });
                        return e.abrupt("return", y);
                      case 27:
                        return (
                          (e.prev = 27),
                          (e.t0 = e.catch(8)),
                          console.log(e.t0),
                          console.log("error fetching blocks"),
                          e.abrupt("return", [])
                        );
                      case 32:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[8, 27]]
              );
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        sa = (function () {
          var e = Object(B.a)(
            H.a.mark(function e(t) {
              var n, a, r, i, o, c, l, u, s, d, m, p, f, v, b, y;
              return H.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = []),
                          (a = ct.a.utc()),
                          (r = a.subtract(1, "year")),
                          (i = r.startOf("minute").unix() - 1),
                          (e.prev = 4),
                          (o = !1),
                          (c = 0);
                      case 7:
                        if (o) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (e.next = 10),
                          Y.query({
                            query: et,
                            variables: { tokenAddr: t, skip: c },
                            fetchPolicy: "cache-first",
                          })
                        );
                      case 10:
                        (l = e.sent).data.tokenDayDatas.length < 1e3 &&
                          (o = !0),
                          (c += 1e3),
                          (n = n.concat(l.data.tokenDayDatas)),
                          (e.next = 7);
                        break;
                      case 16:
                        for (
                          u = new Set(),
                            s = [],
                            86400,
                            n.forEach(function (e, t) {
                              u.add((n[t].date / 86400).toFixed(0)),
                                s.push(n[t]),
                                (e.dailyVolumeUSD = parseFloat(
                                  e.dailyVolumeUSD
                                ));
                            }),
                            d = n[0] && n[0].date ? n[0].date : i,
                            m = n[0] && n[0].totalLiquidityUSD,
                            p = n[0] && n[0].priceUSD,
                            f = n[0] && n[0].mostLiquidPairs,
                            v = 1;
                          d < a.startOf("minute").unix() - 86400;

                        )
                          (y = ((b = d + 86400) / 86400).toFixed(0)),
                            u.has(y)
                              ? ((m = s[v].totalLiquidityUSD),
                                (p = s[v].priceUSD),
                                (f = s[v].mostLiquidPairs),
                                (v += 1))
                              : n.push({
                                  date: b,
                                  dayString: b,
                                  dailyVolumeUSD: 0,
                                  priceUSD: p,
                                  totalLiquidityUSD: m,
                                  mostLiquidPairs: f,
                                }),
                            (d = b);
                        (n = n.sort(function (e, t) {
                          return parseInt(e.date) > parseInt(t.date) ? 1 : -1;
                        })),
                          (e.next = 32);
                        break;
                      case 29:
                        (e.prev = 29), (e.t0 = e.catch(4)), console.log(e.t0);
                      case 32:
                        return e.abrupt("return", n);
                      case 33:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 29]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      function da() {
        var e = na(),
          t = Object(l.a)(e, 2)[1].updateTopTokens,
          n = ea(),
          r = Object(l.a)(n, 2),
          i = r[0],
          o = r[1];
        return (
          Object(a.useEffect)(
            function () {
              function e() {
                return (e = Object(B.a)(
                  H.a.mark(function e() {
                    var n;
                    return H.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), ia(i, o);
                          case 2:
                            (n = e.sent) && t(n);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              i &&
                o &&
                (function () {
                  e.apply(this, arguments);
                })();
            },
            [i, o, t]
          ),
          null
        );
      }
      function ma(e) {
        var t = na(),
          n = Object(l.a)(t, 2),
          r = n[0],
          i = n[1].update,
          o = ea(),
          c = Object(l.a)(o, 2),
          u = c[0],
          s = c[1],
          d = null === r || void 0 === r ? void 0 : r[e];
        return (
          Object(a.useEffect)(
            function () {
              !d &&
                u &&
                s &&
                tn(e) &&
                oa(e, u, s).then(function (t) {
                  i(e, t);
                });
            },
            [u, s, e, d, i]
          ),
          d || {}
        );
      }
      function pa(e, t) {
        var n,
          r,
          i =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 3600,
          o = na(),
          c = Object(l.a)(o, 2),
          u = c[0],
          s = c[1].updatePriceData,
          d =
            null === u || void 0 === u
              ? void 0
              : null === (n = u[e]) || void 0 === n
              ? void 0
              : null === (r = n[t]) || void 0 === r
              ? void 0
              : r[i],
          m = wt(),
          p = Object(l.a)(m, 1),
          f = p[0];
        return (
          Object(a.useEffect)(
            function () {
              var n = ct.a.utc(),
                a = t === ee.MONTH ? "month" : "week",
                r =
                  t === ee.ALL_TIME
                    ? 1618905098
                    : n.subtract(1, a).startOf("hour").unix();
              function o() {
                return (o = Object(B.a)(
                  H.a.mark(function n() {
                    var a;
                    return H.a.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.next = 2), ua(e, r, i, f);
                          case 2:
                            (a = n.sent), s(e, a, t, i);
                          case 4:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )).apply(this, arguments);
              }
              d ||
                (function () {
                  o.apply(this, arguments);
                })();
            },
            [d, i, t, e, s, f]
          ),
          d
        );
      }
      function fa() {
        var e = na();
        return Object(l.a)(e, 1)[0];
      }
      var va = [
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0x6b175474e89094c44da98b954eedeac495271d0f",
      ];
      function ba(e) {
        var t, n, a, r;
        e.timestamp < 1589747086 &&
          (va.includes(
            null === e || void 0 === e
              ? void 0
              : null === (t = e.pair) || void 0 === t
              ? void 0
              : t.token0.id
          ) && (e.token0PriceUSD = 1),
          va.includes(
            null === e || void 0 === e
              ? void 0
              : null === (n = e.pair) || void 0 === n
              ? void 0
              : n.token1.id
          ) && (e.token1PriceUSD = 1),
          "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" ===
            (null === (a = e.pair) || void 0 === a ? void 0 : a.token0.id) &&
            (e.token0PriceUSD = 203),
          "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" ===
            (null === (r = e.pair) || void 0 === r ? void 0 : r.token1.id) &&
            (e.token1PriceUSD = 203));
        return e;
      }
      function ya(e, t) {
        return ha.apply(this, arguments);
      }
      function ha() {
        return (ha = Object(B.a)(
          H.a.mark(function e(t, n) {
            var a, r, i, o, c, l, u, s, d, m, p, f;
            return H.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = 0),
                      (r = 0),
                      (i = 0),
                      (e.next = 5),
                      Y.query({ query: Le, variables: { user: t, pair: n } })
                    );
                  case 5:
                    for (c in (o = e.sent).data.mints)
                      (l = o.data.mints[c]),
                        (u = l.pair.token0.id),
                        (s = l.pair.token1.id),
                        va.includes(u) && l.timestamp < 1589747086
                          ? (a += 2 * parseFloat(l.amount0))
                          : va.includes(s) && l.timestamp < 1589747086
                          ? (a += 2 * parseFloat(l.amount1))
                          : (a += parseFloat(l.amountUSD)),
                        (r += r + parseFloat(l.amount0)),
                        (i += i + parseFloat(l.amount1));
                    for (d in o.data.burns)
                      (m = o.data.burns[d]),
                        (p = m.pair.token0.id),
                        (f = m.pair.token1.id),
                        va.includes(p) && m.timestamp < 1589747086
                          ? (a += 2 * parseFloat(m.amount0))
                          : va.includes(f) && m.timestamp < 1589747086
                          ? (a += 2 * parseFloat(m.amount1))
                          : (a -= parseFloat(o.data.burns[d].amountUSD)),
                        (r -= parseFloat(o.data.burns[d].amount0)),
                        (i -= parseFloat(o.data.burns[d].amount1));
                    return e.abrupt("return", {
                      usd: a,
                      amount0: r,
                      amount1: i,
                    });
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Ea(e, t) {
        (e = ba(e)), (t = ba(t));
        var n = e.liquidityTokenBalance / e.liquidityTokenTotalSupply,
          a = e.liquidityTokenBalance / t.liquidityTokenTotalSupply,
          r = n * e.reserve0,
          i = n * e.reserve1,
          o = a * t.reserve0,
          c = a * t.reserve1,
          l = Math.sqrt(r * i),
          u = 0 != t.token0PriceUSD ? t.token1PriceUSD / t.token0PriceUSD : 0,
          s = t.token1PriceUSD && u ? l * Math.sqrt(u) : 0,
          d = Number(t.token1PriceUSD) && u ? l / Math.sqrt(u) : 0,
          m = s * t.token0PriceUSD + d * t.token1PriceUSD,
          p = c - d,
          f = (o - s) * t.token0PriceUSD + p * t.token1PriceUSD,
          v = r * e.token0PriceUSD + i * e.token1PriceUSD,
          b = r * t.token0PriceUSD + i * t.token1PriceUSD,
          y = m - b,
          h = f + y,
          E = n * e.reserveUSD;
        return {
          hodleReturn: b - v,
          netReturn: a * t.reserveUSD - E,
          uniswapReturn: h,
          impLoss: y,
          fees: f,
        };
      }
      function xa(e, t, n, a) {
        return ga.apply(this, arguments);
      }
      function ga() {
        return (ga = Object(B.a)(
          H.a.mark(function e(t, n, a, r) {
            var i, o, c, l, u, s, d, m, p, f, v;
            return H.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (n.createdAtTimestamp) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", []);
                  case 2:
                    for (
                      i = Math.round(t / 86400),
                        o = Math.round(ct.a.utc().unix() / 86400),
                        (c = a.sort(function (e, t) {
                          return parseInt(e.timestamp) > parseInt(t.timestamp)
                            ? 1
                            : -1;
                        }))[0].timestamp > t &&
                          (i = Math.round(c[0].timestamp / 86400)),
                        l = [];
                      i < o;

                    )
                      86400 * i >= parseInt(n.createdAtTimestamp) &&
                        l.push(86400 * i),
                        (i += 1);
                    return (e.next = 10), Xt(n.id, l);
                  case 10:
                    for (v in ((u = e.sent),
                    (s = {}),
                    null === u ||
                      void 0 === u ||
                      u.map(function (e) {
                        s[e.timestamp] = e;
                      }),
                    (d = a[0]),
                    (m = []),
                    (p = 0),
                    (f = function (e) {
                      for (
                        var t = l[e],
                          i = t + 86400,
                          o = a.filter(function (e) {
                            return e.timestamp < i && e.timestamp > t;
                          }),
                          c = 0;
                        c < o.length;
                        c++
                      ) {
                        var u = o[c],
                          f = Ea(d, u);
                        (p += f.fees), (d = u);
                      }
                      var v = s[t + 86400];
                      if (
                        (v ||
                          (v = {
                            pair: n.id,
                            liquidityTokenBalance: d.liquidityTokenBalance,
                            totalSupply: n.totalSupply,
                            reserve0: n.reserve0,
                            reserve1: n.reserve1,
                            reserveUSD: n.reserveUSD,
                            token0PriceUSD: n.token0.derivedETH * r,
                            token1PriceUSD: n.token1.derivedETH * r,
                          }),
                        v)
                      ) {
                        (v.liquidityTokenTotalSupply = v.totalSupply),
                          (v.liquidityTokenBalance = d.liquidityTokenBalance);
                        var b =
                            (parseFloat(v.liquidityTokenBalance) /
                              parseFloat(v.liquidityTokenTotalSupply)) *
                            parseFloat(v.reserveUSD),
                          y = Ea(d, v),
                          h = p + y.fees;
                        m.push({ date: t, usdValue: b, fees: h });
                      }
                    }),
                    l))
                      f(v);
                    return e.abrupt("return", m);
                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function ka(e, t, n, a) {
        return Oa.apply(this, arguments);
      }
      function Oa() {
        return (Oa = Object(B.a)(
          H.a.mark(function e(t, n, a, r) {
            var i, o, c, l, u, s, d, m, p, f;
            return H.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), ya(t, n.id);
                  case 2:
                    for (d in ((o = e.sent),
                    0,
                    (c = 0),
                    (l = 0),
                    (u = 0),
                    (r = r.filter(function (e) {
                      return e.pair.id === n.id;
                    })),
                    (s = {
                      pair: n,
                      liquidityTokenBalance:
                        null === (i = r[r.length - 1]) || void 0 === i
                          ? void 0
                          : i.liquidityTokenBalance,
                      liquidityTokenTotalSupply: n.totalSupply,
                      reserve0: n.reserve0,
                      reserve1: n.reserve1,
                      reserveUSD: n.reserveUSD,
                      token0PriceUSD: n.token0.derivedETH * a,
                      token1PriceUSD: n.token1.derivedETH * a,
                    }),
                    r))
                      (m = r[d]),
                        (p =
                          parseInt(d) === r.length - 1
                            ? s
                            : r[parseInt(d) + 1]),
                        (f = Ea(m, p)),
                        f.hodleReturn,
                        (c += f.netReturn),
                        (l += f.uniswapReturn),
                        (u += f.fees);
                    return e.abrupt("return", {
                      principal: o,
                      net: { return: c },
                      uniswap: { return: l },
                      fees: { sum: u },
                    });
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      ct.a.extend(yt.a);
      var ja = Object(a.createContext)();
      function Sa() {
        return Object(a.useContext)(ja);
      }
      function wa(e, t) {
        var n = t.type,
          a = t.payload;
        switch (n) {
          case "UPDATE_TRANSACTIONS":
            var r = a.account,
              i = a.transactions;
            return Object(m.a)(
              {},
              e,
              Object(d.a)(
                {},
                r,
                Object(m.a)(
                  {},
                  null === e || void 0 === e ? void 0 : e[r],
                  Object(d.a)({}, "TRANSACTIONS_KEY", i)
                )
              )
            );
          case "UPDATE_POSITIONS ":
            var o = a.account,
              c = a.positions;
            return Object(m.a)(
              {},
              e,
              Object(d.a)(
                {},
                o,
                Object(m.a)(
                  {},
                  null === e || void 0 === e ? void 0 : e[o],
                  Object(d.a)({}, "POSITIONS_KEY", c)
                )
              )
            );
          case "UPDATE_MINING_POSITIONS":
            var l = a.account,
              u = a.miningPositions;
            return Object(m.a)(
              {},
              e,
              Object(d.a)(
                {},
                l,
                Object(m.a)(
                  {},
                  null === e || void 0 === e ? void 0 : e[l],
                  Object(d.a)({}, "MINING_POSITIONS_KEY", u)
                )
              )
            );
          case "UPDATE_USER_POSITION_HISTORY":
            var s = a.account,
              p = a.historyData;
            return Object(m.a)(
              {},
              e,
              Object(d.a)(
                {},
                s,
                Object(m.a)(
                  {},
                  null === e || void 0 === e ? void 0 : e[s],
                  Object(d.a)({}, "USER_SNAPSHOTS", p)
                )
              )
            );
          case "UPDATE_USER_PAIR_RETURNS":
            var f,
              v = a.account,
              b = a.pairAddress,
              y = a.data;
            return Object(m.a)(
              {},
              e,
              Object(d.a)(
                {},
                v,
                Object(m.a)(
                  {},
                  null === e || void 0 === e ? void 0 : e[v],
                  Object(d.a)(
                    {},
                    "USER_PAIR_RETURNS_KEY",
                    Object(m.a)(
                      {},
                      null === e || void 0 === e
                        ? void 0
                        : null === (f = e[v]) || void 0 === f
                        ? void 0
                        : f.USER_PAIR_RETURNS_KEY,
                      Object(d.a)({}, b, y)
                    )
                  )
                )
              )
            );
          default:
            throw Error(
              "Unexpected action type in DataContext reducer: '".concat(n, "'.")
            );
        }
      }
      var Da = {};
      function Ta(e) {
        var t = e.children,
          n = Object(a.useReducer)(wa, Da),
          i = Object(l.a)(n, 2),
          o = i[0],
          c = i[1],
          u = Object(a.useCallback)(function (e, t) {
            c({
              type: "UPDATE_TRANSACTIONS",
              payload: { account: e, transactions: t },
            });
          }, []),
          s = Object(a.useCallback)(function (e, t) {
            c({
              type: "UPDATE_POSITIONS ",
              payload: { account: e, positions: t },
            });
          }, []),
          d = Object(a.useCallback)(function (e, t) {
            c({
              type: "UPDATE_MINING_POSITIONS",
              payload: { account: e, miningPositions: t },
            });
          }, []),
          m = Object(a.useCallback)(function (e, t) {
            c({
              type: "UPDATE_USER_POSITION_HISTORY",
              payload: { account: e, historyData: t },
            });
          }, []),
          p = Object(a.useCallback)(function (e, t, n) {
            c({
              type: "UPDATE_USER_PAIR_RETURNS",
              payload: { account: e, pairAddress: t, data: n },
            });
          }, []);
        return r.a.createElement(
          ja.Provider,
          {
            value: Object(a.useMemo)(
              function () {
                return [
                  o,
                  {
                    updateTransactions: u,
                    updatePositions: s,
                    updateMiningPositions: d,
                    updateUserSnapshots: m,
                    updateUserPairReturns: p,
                  },
                ];
              },
              [o, u, s, d, m, p]
            ),
          },
          t
        );
      }
      function Ua(e) {
        var t,
          n = Sa(),
          r = Object(l.a)(n, 2),
          i = r[0],
          o = r[1].updateUserSnapshots,
          c =
            null === i || void 0 === i
              ? void 0
              : null === (t = i[e]) || void 0 === t
              ? void 0
              : t.USER_SNAPSHOTS;
        return (
          Object(a.useEffect)(
            function () {
              function t() {
                return (t = Object(B.a)(
                  H.a.mark(function t() {
                    var n, a, r, i;
                    return H.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (t.prev = 0), (n = 0), (a = []), (r = !1);
                            case 4:
                              if (r) {
                                t.next = 12;
                                break;
                              }
                              return (
                                (t.next = 7),
                                Y.query({
                                  query: qe,
                                  variables: { skip: n, user: e },
                                  fetchPolicy: "cache-first",
                                })
                              );
                            case 7:
                              (i = t.sent),
                                (a = a.concat(
                                  i.data.liquidityPositionSnapshots
                                )),
                                i.data.liquidityPositionSnapshots.length < 1e3
                                  ? (r = !0)
                                  : (n += 1e3),
                                (t.next = 4);
                              break;
                            case 12:
                              a && o(e, a), (t.next = 18);
                              break;
                            case 15:
                              (t.prev = 15),
                                (t.t0 = t.catch(0)),
                                console.log(t.t0);
                            case 18:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 15]]
                    );
                  })
                )).apply(this, arguments);
              }
              !c &&
                e &&
                (function () {
                  t.apply(this, arguments);
                })();
            },
            [e, c, o]
          ),
          c
        );
      }
      function Ca(e, t) {
        var n,
          r,
          i,
          o =
            null === e || void 0 === e
              ? void 0
              : null === (n = e.pair) || void 0 === n
              ? void 0
              : n.id,
          c = Sa(),
          u = Object(l.a)(c, 2),
          s = u[0],
          d = u[1].updateUserPairReturns,
          m = (function () {
            var e = Dt(),
              t = Object(l.a)(e, 1)[0],
              n = Object(a.useState)(),
              r = Object(l.a)(n, 2),
              i = r[0],
              o = r[1];
            return (
              Object(a.useEffect)(
                function () {
                  var e =
                    ct.a
                      .utc()
                      .subtract(1, t === ee.week ? "week" : "year")
                      .startOf("day")
                      .unix() - 1;
                  o(e);
                },
                [t, i]
              ),
              i
            );
          })(),
          p = Ua(t),
          f =
            p &&
            e &&
            p.filter(function (t) {
              return t.pair.id === e.pair.id;
            }),
          v = Fn(o),
          b = ea(),
          y = Object(l.a)(b, 1)[0],
          h =
            null === s || void 0 === s
              ? void 0
              : null === (r = s[t]) || void 0 === r
              ? void 0
              : null === (i = r.USER_PAIR_RETURNS_KEY) || void 0 === i
              ? void 0
              : i[o];
        return (
          Object(a.useEffect)(
            function () {
              function e() {
                return (e = Object(B.a)(
                  H.a.mark(function e() {
                    var n;
                    return H.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), xa(m, v, f, y);
                          case 2:
                            (n = e.sent), d(t, o, n);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              t &&
                m &&
                f &&
                !h &&
                v &&
                Object.keys(v).length > 0 &&
                o &&
                y &&
                (function () {
                  e.apply(this, arguments);
                })();
            },
            [t, m, f, h, o, v, y, d, e.pair.id]
          ),
          h
        );
      }
      var Fa = n(1009),
        Aa = n(47),
        Pa = n(42),
        Ia = n(148);
      function La() {
        var e = Object(c.a)(["\n  width: fit-content;\n"]);
        return (
          (La = function () {
            return e;
          }),
          e
        );
      }
      function qa() {
        var e = Object(c.a)([
          "\n  flex-wrap: ",
          ";\n  margin: -",
          ";\n  & > * {\n    margin: ",
          " !important;\n  }\n",
        ]);
        return (
          (qa = function () {
            return e;
          }),
          e
        );
      }
      function _a() {
        var e = Object(c.a)(["\n  display: flex;\n  align-items: flex-end;\n"]);
        return (
          (_a = function () {
            return e;
          }),
          e
        );
      }
      function Ra() {
        var e = Object(c.a)(["\n  justify-content: space-between;\n"]);
        return (
          (Ra = function () {
            return e;
          }),
          e
        );
      }
      function za() {
        var e = Object(c.a)([
          "\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: center;\n  align-items: ",
          ";\n  padding: ",
          ";\n  border: ",
          ";\n  border-radius: ",
          ";\n  justify-content: ",
          ";\n",
        ]);
        return (
          (za = function () {
            return e;
          }),
          e
        );
      }
      var Ma = Object(u.default)(Ia.Box)(
          za(),
          function (e) {
            var t = e.align;
            return t && t;
          },
          function (e) {
            return e.padding;
          },
          function (e) {
            return e.border;
          },
          function (e) {
            return e.borderRadius;
          },
          function (e) {
            return e.justify;
          }
        ),
        Va = Object(u.default)(Ma)(Ra()),
        Ha =
          (u.default.div(_a()),
          Object(u.default)(Ma)(
            qa(),
            function (e) {
              var t = e.wrap;
              return null !== t && void 0 !== t ? t : "nowrap";
            },
            function (e) {
              return e.gap;
            },
            function (e) {
              return e.gap;
            }
          )),
        Ba = Object(u.default)(Ma)(La()),
        Na = Ma;
      function Wa() {
        var e = Object(c.a)([
          "\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",
          ";\n  justify-items: ",
          ";\n",
        ]);
        return (
          (Wa = function () {
            return e;
          }),
          e
        );
      }
      function Ka() {
        var e = Object(c.a)(["\n  width: 100%;\n  align-items: center;\n"]);
        return (
          (Ka = function () {
            return e;
          }),
          e
        );
      }
      function Ya() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n",
        ]);
        return (
          (Ya = function () {
            return e;
          }),
          e
        );
      }
      var Qa = u.default.div(Ya()),
        Ga =
          (Object(u.default)(Qa)(Ka()),
          u.default.div(
            Wa(),
            function (e) {
              var t = e.gap;
              return (
                ("sm" === t ? "8px" : "md" === t && "12px") ||
                ("lg" === t && "24px") ||
                t
              );
            },
            function (e) {
              var t = e.justify;
              return t && t;
            }
          )),
        Ja = Qa,
        Xa = n(1011);
      function $a() {
        var e = Object(c.a)([
          "\n  animation: ",
          " 800ms linear infinite;\n  & > * {\n    width: 72px;\n  }\n",
        ]);
        return (
          ($a = function () {
            return e;
          }),
          e
        );
      }
      function Za() {
        var e = Object(c.a)(["\n          height: 180px;\n        "]);
        return (
          (Za = function () {
            return e;
          }),
          e
        );
      }
      function er() {
        var e = Object(c.a)(["\n          height: 100vh;\n        "]);
        return (
          (er = function () {
            return e;
          }),
          e
        );
      }
      function tr() {
        var e = Object(c.a)([
          "\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n\n  ",
          "\n",
        ]);
        return (
          (tr = function () {
            return e;
          }),
          e
        );
      }
      function nr() {
        var e = Object(c.a)([
          "\n  0% { transform: scale(1); }\n  60% { transform: scale(1.1); }\n  100% { transform: scale(1); }\n",
        ]);
        return (
          (nr = function () {
            return e;
          }),
          e
        );
      }
      var ar = Object(u.keyframes)(nr()),
        rr = u.default.div(tr(), function (e) {
          return e.fill && !e.height
            ? Object(u.css)(er())
            : Object(u.css)(Za());
        }),
        ir = u.default.div($a(), ar),
        or = function (e) {
          var t = e.fill;
          return r.a.createElement(
            rr,
            { fill: t },
            r.a.createElement(
              ir,
              null,
              r.a.createElement("img", { src: n(252), alt: "loading-icon" })
            )
          );
        },
        cr = n(53),
        lr = n(29);
      function ur() {
        var e = Object(c.a)([
          "\n  text-decoration: none;\n  color: inherit;\n  &:hover {\n    cursor: pointer;\n    text-decoration: none;\n    underline: none;\n  }\n",
        ]);
        return (
          (ur = function () {
            return e;
          }),
          e
        );
      }
      function sr() {
        var e = Object(c.a)([
          "\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: ",
          ";\n\n  &:visited {\n    color: ",
          ";\n  }\n\n  &:hover {\n    cursor: pointer;\n    text-decoration: none;\n    underline: none;\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (sr = function () {
            return e;
          }),
          e
        );
      }
      function dr() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (dr = function () {
            return e;
          }),
          e
        );
      }
      var mr = Object(u.default)(function (e) {
          var t = e.external,
            n = e.children,
            a = Object(cr.a)(e, ["external", "children"]);
          return r.a.createElement(
            S.c,
            Object.assign(
              {
                target: t ? "_blank" : null,
                rel: t ? "noopener noreferrer" : null,
                color: "#2f80ed",
              },
              a
            ),
            n
          );
        })(dr(), function (e) {
          var t = e.color,
            n = e.theme;
          return t || n.link;
        }),
        pr = Object(u.default)(Aa.b)(
          sr(),
          function (e) {
            var t = e.color,
              n = e.theme;
            return t || n.link;
          },
          function (e) {
            var t = e.color,
              n = e.theme;
            return t ? Object(lr.b)(0.1, t) : Object(lr.b)(0.1, n.link);
          },
          function (e) {
            var t = e.color,
              n = e.theme;
            return t ? Object(lr.a)(0.1, t) : Object(lr.a)(0.1, n.link);
          }
        ),
        fr = Object(u.default)(Aa.b)(ur());
      function vr() {
        var e = Object(c.a)([
          "\n  z-index: 99;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1rem;\n  box-sizing: border-box;\n  margin-bottom: 2rem;\n  max-width: 100vw;\n\n  @media screen and (max-width: 800px) {\n    margin-bottom: 0;\n  }\n",
        ]);
        return (
          (vr = function () {
            return e;
          }),
          e
        );
      }
      function br() {
        var e = Object(c.a)([
          "\n  display: grid;\n  justify-content: start;\n  align-items: start;\n  grid-template-columns: 1fr;\n  grid-gap: 24px;\n  max-width: 1440px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 2rem;\n  box-sizing: border-box;\n\n  @media screen and (max-width: 1180px) {\n    grid-template-columns: 1fr;\n    padding: 0 1rem;\n  }\n",
        ]);
        return (
          (br = function () {
            return e;
          }),
          e
        );
      }
      function yr() {
        var e = Object(c.a)([
          "\n  display: grid;\n  justify-content: start;\n  align-items: start;\n  grid-template-columns: 1fr;\n  grid-gap: 24px;\n  padding: 0 2rem;\n  margin: 0 auto;\n  box-sizing: border-box;\n  max-width: 1440px;\n  width: 100%;\n\n  @media screen and (max-width: 1282px) {\n    grid-template-columns: 1fr;\n    padding: 0 1rem;\n  }\n",
        ]);
        return (
          (yr = function () {
            return e;
          }),
          e
        );
      }
      function hr() {
        var e = Object(c.a)([
          "\n  display: grid;\n  justify-content: start;\n  align-items: start;\n  grid-template-columns: 1fr;\n  grid-gap: 24px;\n  max-width: 1440px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 2rem;\n  box-sizing: border-box;\n  @media screen and (max-width: 1180px) {\n    grid-template-columns: 1fr;\n    padding: 0 1rem;\n  }\n",
        ]);
        return (
          (hr = function () {
            return e;
          }),
          e
        );
      }
      function Er() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex-direction: column;\n  padding-top: 36px;\n  padding-bottom: 80px;\n\n  @media screen and (max-width: 600px) {\n    & > * {\n      padding: 0 12px;\n    }\n  }\n",
        ]);
        return (
          (Er = function () {
            return e;
          }),
          e
        );
      }
      function xr() {
        var e = Object(c.a)([
          "\n  list-style: none;\n  display: flex;\n  padding-bottom: 0.5rem;\n  margin-right: 1rem;\n  font-weight: ",
          ";\n  border-bottom: 1px solid rgba(0, 0, 0, 0);\n\n  :hover {\n    cursor: pointer;\n    border-bottom: 1px solid ",
          ";\n  }\n",
        ]);
        return (
          (xr = function () {
            return e;
          }),
          e
        );
      }
      function gr() {
        var e = Object(c.a)([
          "\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 0;\n  margin-bottom: 2rem;\n",
        ]);
        return (
          (gr = function () {
            return e;
          }),
          e
        );
      }
      function kr() {
        var e = Object(c.a)([
          "\n  display: grid;\n  grid-gap: 24px;\n  position: sticky;\n  top: 4rem;\n",
        ]);
        return (
          (kr = function () {
            return e;
          }),
          e
        );
      }
      function Or() {
        var e = Object(c.a)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  border-radius: 20px;\n  color: ",
          ";\n  height: ",
          ";\n",
        ]);
        return (
          (Or = function () {
            return e;
          }),
          e
        );
      }
      function jr() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (jr = function () {
            return e;
          }),
          e
        );
      }
      function Sr() {
        var e = Object(c.a)([
          "\n  :hover {\n    cursor: pointer;\n    opacity: ",
          ";\n  }\n",
        ]);
        return (
          (Sr = function () {
            return e;
          }),
          e
        );
      }
      function wr() {
        var e = Object(c.a)([
          "\n  position: absolute;\n  right: 0;\n  border-radius: 3px;\n  height: 16px;\n  width: 16px;\n  padding: 0px;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
          ";\n\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n",
        ]);
        return (
          (wr = function () {
            return e;
          }),
          e
        );
      }
      function Dr() {
        var e = Object(c.a)(["\n  height: 1px;\n  background-color: ", ";\n"]);
        return (
          (Dr = function () {
            return e;
          }),
          e
        );
      }
      var Tr = Object(u.default)(S.a)(Dr(), function (e) {
          return e.theme.divider;
        }),
        Ur = u.default.div(wr(), function (e) {
          return e.theme.text1;
        }),
        Cr = u.default.div(Sr(), function (e) {
          return e.fade && "0.7";
        }),
        Fr = u.default.div(jr(), function (e) {
          return e.theme.text1;
        }),
        Ar = u.default.div(
          Or(),
          function (e) {
            return e.theme.text1;
          },
          function (e) {
            var t = e.height;
            return t && t;
          }
        ),
        Pr =
          (u.default.span(kr()),
          u.default.ul(gr()),
          u.default.li(
            xr(),
            function (e) {
              return e.isActive ? 600 : 500;
            },
            function (e) {
              return e.theme.bg3;
            }
          ),
          u.default.div(Er())),
        Ir = u.default.div(hr()),
        Lr = u.default.div(yr()),
        qr = u.default.div(br()),
        _r = (u.default.div(vr()), n(417)),
        Rr = n.n(_r),
        zr = n(418),
        Mr = n.n(zr);
      function Vr() {
        var e = Object(c.a)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > img {\n    width: ",
          ";\n    height: ",
          ";\n  }\n",
        ]);
        return (
          (Vr = function () {
            return e;
          }),
          e
        );
      }
      function Hr() {
        var e = Object(c.a)([
          "\n  width: ",
          ";\n  height: ",
          ";\n  background-color: white;\n  border-radius: 50%;\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n",
        ]);
        return (
          (Hr = function () {
            return e;
          }),
          e
        );
      }
      function Br() {
        var e = Object(c.a)([
          "\n  display: flex;\n  align-items: center;\n  align-self: center;\n",
        ]);
        return (
          (Br = function () {
            return e;
          }),
          e
        );
      }
      var Nr = {},
        Wr = u.default.div(Br()),
        Kr = u.default.img(
          Hr(),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          }
        ),
        Yr = u.default.div(
          Vr(),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          }
        );
      function Qr(e) {
        var t,
          n,
          i,
          o = e.address,
          c = (e.header, e.size),
          u = void 0 === c ? "24px" : c,
          s = Object(cr.a)(e, ["address", "header", "size"]),
          d = Object(a.useState)(!1),
          m = Object(l.a)(d, 2),
          p = m[0],
          f = m[1];
        if (
          (Object(a.useEffect)(
            function () {
              f(!1);
            },
            [o]
          ),
          p || Nr[o])
        )
          return r.a.createElement(
            Wr,
            null,
            r.a.createElement(
              Kr,
              Object.assign({}, s, { alt: "", src: Rr.a, size: u })
            )
          );
        if (
          ("0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb" ===
            (null === (t = o) || void 0 === t ? void 0 : t.toLowerCase()) &&
            (o = "0x42456d7084eacf4083f1140d3229471bba2949a8"),
          "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f" ===
            (null === (n = o) || void 0 === n ? void 0 : n.toLowerCase()) &&
            (o = "0xc011a72400e58ecd99ee497cf89e3775d4bd732f"),
          "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" ===
            (null === (i = o) || void 0 === i ? void 0 : i.toLowerCase()))
        )
          return r.a.createElement(
            Yr,
            Object.assign({ size: u }, s),
            r.a.createElement("img", {
              src: Mr.a,
              style: {
                boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.075)",
                borderRadius: "24px",
              },
              alt: "",
            })
          );
        var v =
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(
            tn(o),
            "/logo.png"
          );
        return r.a.createElement(
          Wr,
          null,
          r.a.createElement(
            Kr,
            Object.assign({}, s, {
              alt: "",
              src: v,
              size: u,
              onError: function (e) {
                (Nr[o] = !0), f(!0), e.preventDefault();
              },
            })
          )
        );
      }
      function Gr() {
        var e = Object(c.a)([
          "\n    position: absolute;\n    left: ",
          ";\n    background-color: white;\n    border-radius: 50%;\n  ",
        ]);
        return (
          (Gr = function () {
            return e;
          }),
          e
        );
      }
      function Jr() {
        var e = Object(c.a)([
          "\n    z-index: 2;\n    background-color: white;\n    border-radius: 50%;\n  ",
        ]);
        return (
          (Jr = function () {
            return e;
          }),
          e
        );
      }
      function Xr() {
        var e = Object(c.a)([
          "\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    margin-right: ",
          ";\n  ",
        ]);
        return (
          (Xr = function () {
            return e;
          }),
          e
        );
      }
      function $r(e) {
        var t = e.a0,
          n = e.a1,
          a = e.size,
          i = void 0 === a ? 24 : a,
          o = e.margin,
          c = void 0 !== o && o,
          l = u.default.div(Xr(), function (e) {
            var t = e.sizeraw;
            return e.margin && (t / 3 + 8).toString() + "px";
          }),
          s = Object(u.default)(Qr)(Jr()),
          d = Object(u.default)(Qr)(Gr(), function (e) {
            return (e.sizeraw / 2).toString() + "px";
          });
        return r.a.createElement(
          l,
          { sizeraw: i, margin: c },
          r.a.createElement(s, {
            address: t,
            size: i.toString() + "px",
            sizeraw: i,
          }),
          r.a.createElement(d, {
            address: n,
            size: i.toString() + "px",
            sizeraw: i,
          })
        );
      }
      var Zr = n(988),
        ei = n(1010),
        ti = n(430),
        ni = n(419),
        ai = n.n(ni),
        ri = n(261),
        ii = n(420),
        oi = n.n(ii);
      function ci(e, t) {
        var n = Object(a.useState)("#2172E5"),
          r = Object(l.a)(n, 2),
          i = r[0],
          o = r[1];
        if (e) {
          var c =
            "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(
              tn(e),
              "/logo.png"
            );
          c &&
            ai.a.from(c).getPalette(function (e, n) {
              if (n && n.Vibrant) {
                for (
                  var a = n.Vibrant.hex, r = Object(ri.a)(a, "#FFF");
                  r < 3;

                )
                  (a = Object(lr.c)(0.005, a)), (r = Object(ri.a)(a, "#FFF"));
                o("DAI" === t ? "#FAAB14" : a);
              }
            });
        }
        return i;
      }
      function li() {
        var e = Object(c.a)([
          "\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ",
          ";\n    transform: rotate(45deg);\n    background: ",
          ";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n",
        ]);
        return (
          (li = function () {
            return e;
          }),
          e
        );
      }
      function ui() {
        var e = Object(c.a)(["\n  display: inline-block;\n"]);
        return (
          (ui = function () {
            return e;
          }),
          e
        );
      }
      function si() {
        var e = Object(c.a)([
          "\n  z-index: 9999;\n\n  visibility: ",
          ";\n  opacity: ",
          ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ",
          ";\n  border: 1px solid ",
          ";\n  box-shadow: 0 4px 8px 0 ",
          ";\n  color: ",
          ";\n  border-radius: 8px;\n",
        ]);
        return (
          (si = function () {
            return e;
          }),
          e
        );
      }
      var di = u.default.div(
          si(),
          function (e) {
            return e.show ? "visible" : "hidden";
          },
          function (e) {
            return e.show ? 1 : 0;
          },
          function (e) {
            return e.theme.bg2;
          },
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            var t = e.theme;
            return Object(lr.d)(0.9, t.shadow1);
          },
          function (e) {
            return e.theme.text2;
          }
        ),
        mi = u.default.div(ui()),
        pi = u.default.div(
          li(),
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.theme.bg2;
          }
        );
      function fi(e) {
        var t,
          n,
          i = e.content,
          o = e.show,
          c = e.children,
          u = e.placement,
          s = void 0 === u ? "auto" : u,
          d = Object(a.useState)(null),
          m = Object(l.a)(d, 2),
          p = m[0],
          f = m[1],
          v = Object(a.useState)(null),
          b = Object(l.a)(v, 2),
          y = b[0],
          h = b[1],
          E = Object(a.useState)(null),
          x = Object(l.a)(E, 2),
          g = x[0],
          k = x[1],
          O = Object(ei.a)(p, y, {
            placement: s,
            strategy: "fixed",
            modifiers: [
              { name: "offset", options: { offset: [8, 8] } },
              { name: "arrow", options: { element: g } },
            ],
          }),
          j = O.styles,
          S = O.update,
          w = O.attributes;
        return (
          (function (e, t) {
            var n = Object(a.useRef)();
            Object(a.useEffect)(
              function () {
                n.current = e;
              },
              [e]
            ),
              Object(a.useEffect)(
                function () {
                  function e() {
                    var e = n.current;
                    e && e();
                  }
                  if (null !== t) {
                    e();
                    var a = setInterval(e, t);
                    return function () {
                      return clearInterval(a);
                    };
                  }
                },
                [t]
              );
          })(S, o ? 100 : null),
          r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(mi, { ref: f }, c),
            r.a.createElement(
              ti.a,
              null,
              r.a.createElement(
                di,
                Object.assign({ show: o, ref: h, style: j.popper }, w.popper),
                i,
                r.a.createElement(
                  pi,
                  Object.assign(
                    {
                      className: "arrow-".concat(
                        null !==
                          (t =
                            null === (n = w.popper) || void 0 === n
                              ? void 0
                              : n["data-popper-placement"]) && void 0 !== t
                          ? t
                          : ""
                      ),
                      ref: k,
                      style: j.arrow,
                    },
                    w.arrow
                  )
                )
              )
            )
          )
        );
      }
      function vi() {
        var e = Object(c.a)([
          "\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n",
        ]);
        return (
          (vi = function () {
            return e;
          }),
          e
        );
      }
      function bi() {
        var e = Object(c.a)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  background-color: ",
          ";\n  color: ",
          ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n",
        ]);
        return (
          (bi = function () {
            return e;
          }),
          e
        );
      }
      var yi = u.default.div(
          bi(),
          function (e) {
            return e.theme.bg2;
          },
          function (e) {
            return e.theme.text2;
          }
        ),
        hi = u.default.div(vi());
      function Ei(e) {
        var t = e.text,
          n = Object(cr.a)(e, ["text"]);
        return r.a.createElement(
          fi,
          Object.assign({ content: r.a.createElement(hi, null, t) }, n)
        );
      }
      function xi(e) {
        var t = e.text,
          n = e.disabled,
          i = Object(a.useState)(!1),
          o = Object(l.a)(i, 2),
          c = o[0],
          u = o[1],
          s = Object(a.useCallback)(
            function () {
              return u(!0);
            },
            [u]
          ),
          d = Object(a.useCallback)(
            function () {
              return u(!1);
            },
            [u]
          );
        return r.a.createElement(
          "span",
          { style: { marginLeft: 4 } },
          r.a.createElement(
            Ei,
            { text: t, show: c && !n },
            r.a.createElement(
              yi,
              { onClick: s, onMouseEnter: s, onMouseLeave: d },
              r.a.createElement(Zr.a, { size: 16 })
            )
          )
        );
      }
      function gi() {
        var e = Object(c.a)([
          "\n  position: relative;\n  margin-left: ",
          ";\n  color: ",
          ";\n  font-size: ",
          ";\n\n  :hover {\n    cursor: pointer;\n  }\n\n  @media screen and (max-width: 600px) {\n    font-size: ",
          ";\n  }\n",
        ]);
        return (
          (gi = function () {
            return e;
          }),
          e
        );
      }
      var ki,
        Oi = u.default.div(
          gi(),
          function (e) {
            return e.margin && "4px";
          },
          function (e) {
            var t = e.theme;
            return e.link ? t.blue : t.text1;
          },
          function (e) {
            var t = e.fontSize;
            return null !== t && void 0 !== t ? t : "inherit";
          },
          function (e) {
            return e.adjustSize && "12px";
          }
        ),
        ji = function (e) {
          var t = e.text,
            n = e.maxCharacters,
            i = e.margin,
            o = void 0 !== i && i,
            c = e.adjustSize,
            u = void 0 !== c && c,
            s = e.fontSize,
            d = e.link,
            m = Object(cr.a)(e, [
              "text",
              "maxCharacters",
              "margin",
              "adjustSize",
              "fontSize",
              "link",
            ]),
            p = Object(a.useState)(!1),
            f = Object(l.a)(p, 2),
            v = f[0],
            b = f[1];
          return t
            ? t.length > n
              ? r.a.createElement(
                  Ei,
                  { text: t, show: v },
                  r.a.createElement(
                    Oi,
                    Object.assign(
                      {
                        onMouseEnter: function () {
                          return b(!0);
                        },
                        onMouseLeave: function () {
                          return b(!1);
                        },
                        margin: o,
                        adjustSize: u,
                        link: d,
                        fontSize: s,
                      },
                      m
                    ),
                    " " + t.slice(0, n - 1) + "..."
                  )
                )
              : r.a.createElement(
                  Oi,
                  Object.assign(
                    { margin: o, adjustSize: u, link: d, fontSize: s },
                    m
                  ),
                  t
                )
            : "";
        };
      function Si() {
        var e = Object(c.a)([
          "\n  align-items: center;\n  text-align: center;\n  color: ",
          ";\n\n  & > * {\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: 600px) {\n    font-size: 12px;\n  }\n",
        ]);
        return (
          (Si = function () {
            return e;
          }),
          e
        );
      }
      function wi() {
        var e = Object(c.a)([
          "\n  color: ",
          ";\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n  text-align: end;\n  user-select: none;\n",
        ]);
        return (
          (wi = function () {
            return e;
          }),
          e
        );
      }
      function Di() {
        var e = Object(c.a)([""]);
        return (
          (Di = function () {
            return e;
          }),
          e
        );
      }
      function Ti() {
        var e = Object(c.a)([
          "\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: 100px 1fr 1fr;\n  grid-template-areas: 'name liq vol';\n  padding: 0 1.125rem;\n\n  > * {\n    justify-content: flex-end;\n\n    :first-child {\n      justify-content: flex-start;\n      text-align: left;\n      width: 20px;\n    }\n  }\n\n  @media screen and (min-width: 740px) {\n    padding: 0 1.125rem;\n    grid-template-columns: 1.5fr 1fr 1fr};\n    grid-template-areas: ' name liq vol pool ';\n  }\n\n  @media screen and (min-width: 1080px) {\n    padding: 0 1.125rem;\n    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-areas: ' name liq vol volWeek fees apy';\n  }\n\n  @media screen and (min-width: 1200px) {\n    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-areas: ' name liq vol volWeek fees apy';\n  }\n",
        ]);
        return (
          (Ti = function () {
            return e;
          }),
          e
        );
      }
      function Ui() {
        var e = Object(c.a)(["\n  -webkit-overflow-scrolling: touch;\n"]);
        return (
          (Ui = function () {
            return e;
          }),
          e
        );
      }
      function Ci() {
        var e = Object(c.a)([
          "\n  color: ",
          ";\n  opacity: ",
          ";\n  padding: 0 20px;\n  user-select: none;\n  :hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (Ci = function () {
            return e;
          }),
          e
        );
      }
      function Fi() {
        var e = Object(c.a)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 2em;\n  margin-bottom: 0.5em;\n",
        ]);
        return (
          (Fi = function () {
            return e;
          }),
          e
        );
      }
      ct.a.extend(yt.a);
      var Ai = u.default.div(Fi()),
        Pi = u.default.div(
          Ci(),
          function (e) {
            return e.theme.primary1;
          },
          function (e) {
            return e.faded ? 0.3 : 1;
          }
        ),
        Ii = Object(u.default)(S.a)(Ui()),
        Li = u.default.div(Ti()),
        qi = u.default.div(Di()),
        _i = Object(u.default)(S.d)(wi(), function (e) {
          return e.theme.text1;
        }),
        Ri = Object(u.default)(S.b)(Si(), function (e) {
          return e.theme.text1;
        }),
        zi = 0,
        Mi = 1,
        Vi = 3,
        Hi = 4,
        Bi = 5,
        Ni =
          ((ki = {}),
          Object(d.a)(ki, zi, "trackedReserveUSD"),
          Object(d.a)(ki, Mi, "oneDayVolumeUSD"),
          Object(d.a)(ki, Vi, "oneWeekVolumeUSD"),
          Object(d.a)(ki, Hi, "oneDayVolumeUSD"),
          ki);
      var Wi = Object(Pa.h)(function (e) {
        var t = e.pairs,
          n = e.color,
          i = e.disbaleLinks,
          o = e.maxItems,
          c = void 0 === o ? 10 : o,
          u = Object(Xa.a)("(max-width: 600px)"),
          s = Object(Xa.a)("(max-width: 740px)"),
          d = Object(Xa.a)("(max-width: 1080px)"),
          m = Object(a.useState)(1),
          p = Object(l.a)(m, 2),
          f = p[0],
          v = p[1],
          b = Object(a.useState)(1),
          y = Object(l.a)(b, 2),
          h = y[0],
          E = y[1],
          x = c,
          g = Object(a.useState)(!0),
          k = Object(l.a)(g, 2),
          O = k[0],
          j = k[1],
          w = Object(a.useState)(zi),
          D = Object(l.a)(w, 2),
          T = D[0],
          U = D[1];
        Object(a.useEffect)(
          function () {
            E(1), v(1);
          },
          [t]
        ),
          Object(a.useEffect)(
            function () {
              if (t) {
                var e = 1;
                Object.keys(t).length % x === 0 && (e = 0),
                  E(Math.floor(Object.keys(t).length / x) + e);
              }
            },
            [x, t]
          );
        var C = function (e) {
            var a = e.pairAddress,
              o = e.index,
              c = t[a];
            if (c && c.token0 && c.token1) {
              var l = on(c.trackedReserveUSD, !0),
                m = on(c.oneDayVolumeUSD, !0),
                p = cn(
                  (0.002 * c.oneDayVolumeUSD * 365 * 100) / c.trackedReserveUSD
                );
              return r.a.createElement(
                Li,
                { style: { height: "48px" }, disbaleLinks: i, focus: !0 },
                r.a.createElement(
                  Ri,
                  { area: "name", fontWeight: "500" },
                  !u &&
                    r.a.createElement(
                      "div",
                      { style: { marginRight: "20px", width: "10px" } },
                      o
                    ),
                  r.a.createElement($r, {
                    size: u ? 16 : 20,
                    a0: c.token0.id,
                    a1: c.token1.id,
                    margin: !s,
                  }),
                  r.a.createElement(
                    pr,
                    {
                      style: { marginLeft: "20px", whiteSpace: "nowrap" },
                      to: "/pair/" + a,
                      color: n,
                    },
                    r.a.createElement(ji, {
                      text: c.token0.symbol + "-" + c.token1.symbol,
                      maxCharacters: u ? 8 : 16,
                      adjustSize: !0,
                      link: !0,
                    })
                  )
                ),
                r.a.createElement(Ri, { area: "liq" }, l),
                r.a.createElement(Ri, { area: "vol" }, m),
                !d &&
                  r.a.createElement(
                    Ri,
                    { area: "volWeek" },
                    on(c.oneWeekVolumeUSD, !0)
                  ),
                !d &&
                  r.a.createElement(
                    Ri,
                    { area: "fees" },
                    on(0.002 * c.oneDayVolumeUSD, !0)
                  ),
                !d && r.a.createElement(Ri, { area: "apy" }, p)
              );
            }
            return "";
          },
          F =
            t &&
            Object.keys(t)
              .sort(function (e, n) {
                var a = t[e],
                  r = t[n];
                return T === Bi
                  ? parseFloat(0.002 * a.oneDayVolumeUSD * 356 * 100) /
                      parseFloat(a.reserveUSD) >
                    parseFloat(0.002 * r.oneDayVolumeUSD * 356 * 100) /
                      parseFloat(r.reserveUSD)
                    ? 1 * (O ? -1 : 1)
                    : -1 * (O ? -1 : 1)
                  : parseFloat(a[Ni[T]]) > parseFloat(r[Ni[T]])
                  ? 1 * (O ? -1 : 1)
                  : -1 * (O ? -1 : 1);
              })
              .slice(x * (f - 1), f * x)
              .map(function (e, t) {
                return (
                  e &&
                  r.a.createElement(
                    "div",
                    { key: t },
                    r.a.createElement(C, {
                      key: t,
                      index: (f - 1) * x + t + 1,
                      pairAddress: e,
                    }),
                    r.a.createElement(Tr, null)
                  )
                );
              });
        return r.a.createElement(
          qi,
          null,
          r.a.createElement(
            Li,
            {
              center: !0,
              disbaleLinks: i,
              style: {
                height: "fit-content",
                padding: "0 1.125rem 1rem 1.125rem",
              },
            },
            r.a.createElement(
              S.b,
              { alignItems: "center", justifyContent: "flexStart" },
              r.a.createElement(P, { area: "name" }, "Name")
            ),
            r.a.createElement(
              S.b,
              { alignItems: "center", justifyContent: "flexEnd" },
              r.a.createElement(
                _i,
                {
                  area: "liq",
                  onClick: function (e) {
                    U(zi), j(T !== zi || !O);
                  },
                },
                "Liquidity ",
                T === zi ? (O ? "\u2193" : "\u2191") : ""
              )
            ),
            r.a.createElement(
              S.b,
              { alignItems: "center" },
              r.a.createElement(
                _i,
                {
                  area: "vol",
                  onClick: function (e) {
                    U(Mi), j(T !== Mi || !O);
                  },
                },
                "Volume (24hrs)",
                T === Mi ? (O ? "\u2193" : "\u2191") : ""
              )
            ),
            !d &&
              r.a.createElement(
                S.b,
                { alignItems: "center", justifyContent: "flexEnd" },
                r.a.createElement(
                  _i,
                  {
                    area: "volWeek",
                    onClick: function (e) {
                      U(Vi), j(T !== Vi || !O);
                    },
                  },
                  "Volume (7d) ",
                  T === Vi ? (O ? "\u2193" : "\u2191") : ""
                )
              ),
            !d &&
              r.a.createElement(
                S.b,
                { alignItems: "center", justifyContent: "flexEnd" },
                r.a.createElement(
                  _i,
                  {
                    area: "fees",
                    onClick: function (e) {
                      U(Hi), j(T !== Hi || !O);
                    },
                  },
                  "Fees (24hr) ",
                  T === Hi ? (O ? "\u2193" : "\u2191") : ""
                )
              ),
            !d &&
              r.a.createElement(
                S.b,
                { alignItems: "center", justifyContent: "flexEnd" },
                r.a.createElement(
                  _i,
                  {
                    area: "apy",
                    onClick: function (e) {
                      U(Bi), j(T !== Bi || !O);
                    },
                  },
                  "1y Fees / Liquidity ",
                  T === Bi ? (O ? "\u2193" : "\u2191") : ""
                ),
                r.a.createElement(xi, {
                  text: "Based on 24hr volume annualized",
                })
              )
          ),
          r.a.createElement(Tr, null),
          r.a.createElement(Ii, { p: 0 }, F || r.a.createElement(or, null)),
          r.a.createElement(
            Ai,
            null,
            r.a.createElement(
              "div",
              {
                onClick: function (e) {
                  v(1 === f ? f : f - 1);
                },
              },
              r.a.createElement(Pi, { faded: 1 === f }, "\u2190")
            ),
            r.a.createElement(I, null, "Page " + f + " of " + h),
            r.a.createElement(
              "div",
              {
                onClick: function (e) {
                  v(f === h ? f : f + 1);
                },
              },
              r.a.createElement(Pi, { faded: f === h }, "\u2192")
            )
          )
        );
      });
      function Ki() {
        var e = Object(c.a)([
          "\n  align-items: center;\n  text-align: center;\n  color: ",
          ";\n\n  & > * {\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: 600px) {\n    font-size: 12px;\n  }\n",
        ]);
        return (
          (Ki = function () {
            return e;
          }),
          e
        );
      }
      function Yi() {
        var e = Object(c.a)([
          "\n  text-align: end;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n  user-select: none;\n  color: ",
          ";\n\n  @media screen and (max-width: 640px) {\n    font-size: 0.85rem;\n  }\n",
        ]);
        return (
          (Yi = function () {
            return e;
          }),
          e
        );
      }
      function Qi() {
        var e = Object(c.a)([""]);
        return (
          (Qi = function () {
            return e;
          }),
          e
        );
      }
      function Gi() {
        var e = Object(c.a)([
          "\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: 100px 1fr 1fr;\n  grid-template-areas: 'name liq vol';\n  padding: 0 1.125rem;\n\n  > * {\n    justify-content: flex-end;\n\n    &:first-child {\n      justify-content: flex-start;\n      text-align: left;\n      width: 100px;\n    }\n  }\n\n  @media screen and (min-width: 680px) {\n    display: grid;\n    grid-gap: 1em;\n    grid-template-columns: 180px 1fr 1fr 1fr;\n    grid-template-areas: 'name symbol liq vol ';\n\n    > * {\n      justify-content: flex-end;\n      width: 100%;\n\n      &:first-child {\n        justify-content: flex-start;\n      }\n    }\n  }\n\n  @media screen and (min-width: 1080px) {\n    display: grid;\n    grid-gap: 0.5em;\n    grid-template-columns: 1.5fr 0.6fr 1fr 1fr 1fr 1fr;\n    grid-template-areas: 'name symbol liq vol price change';\n  }\n",
        ]);
        return (
          (Gi = function () {
            return e;
          }),
          e
        );
      }
      function Ji() {
        var e = Object(c.a)(["\n  -webkit-overflow-scrolling: touch;\n"]);
        return (
          (Ji = function () {
            return e;
          }),
          e
        );
      }
      function Xi() {
        var e = Object(c.a)([
          "\n  color: ",
          ";\n  opacity: ",
          ";\n  padding: 0 20px;\n  user-select: none;\n  :hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (Xi = function () {
            return e;
          }),
          e
        );
      }
      function $i() {
        var e = Object(c.a)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 2em;\n  margin-bottom: 2em;\n",
        ]);
        return (
          ($i = function () {
            return e;
          }),
          e
        );
      }
      ct.a.extend(yt.a);
      var Zi = u.default.div($i()),
        eo = u.default.div(
          Xi(),
          function (e) {
            return e.theme.primary1;
          },
          function (e) {
            return e.faded ? 0.3 : 1;
          }
        ),
        to = Object(u.default)(S.a)(Ji()),
        no = u.default.div(Gi()),
        ao = u.default.div(Qi()),
        ro = Object(u.default)(S.d)(Yi(), function (e) {
          return e.theme.text1;
        }),
        io = Object(u.default)(S.b)(Ki(), function (e) {
          return e.theme.text1;
        }),
        oo = "totalLiquidityUSD",
        co = "oneDayVolumeUSD",
        lo = "symbol",
        uo = "name",
        so = "priceUSD",
        mo = "priceChangeUSD";
      var po = Object(Pa.h)(function (e) {
          var t = e.tokens,
            n = e.itemMax,
            i = void 0 === n ? 10 : n,
            o = Object(a.useState)(1),
            c = Object(l.a)(o, 2),
            u = c[0],
            s = c[1],
            d = Object(a.useState)(1),
            m = Object(l.a)(d, 2),
            p = m[0],
            f = m[1],
            v = Object(a.useState)(!0),
            b = Object(l.a)(v, 2),
            y = b[0],
            h = b[1],
            E = Object(a.useState)(oo),
            x = Object(l.a)(E, 2),
            g = x[0],
            k = x[1],
            O = Object(Xa.a)("(max-width: 1080px)"),
            j = Object(Xa.a)("(max-width: 680px)"),
            w = Object(Xa.a)("(max-width: 600px)");
          Object(a.useEffect)(
            function () {
              f(1), s(1);
            },
            [t]
          );
          var D = Object(a.useMemo)(
            function () {
              return (
                t &&
                Object.keys(t)
                  .filter(function (e) {
                    return !ne.includes(e);
                  })
                  .map(function (e) {
                    return t[e];
                  })
              );
            },
            [t]
          );
          Object(a.useEffect)(
            function () {
              if (t && D) {
                var e = 1;
                D.length % i === 0 && (e = 0), f(Math.floor(D.length / i) + e);
              }
            },
            [t, D, i]
          );
          var T = Object(a.useMemo)(
              function () {
                return (
                  D &&
                  D.sort(function (e, t) {
                    return g === lo || g === uo
                      ? e[g] > t[g]
                        ? 1 * (y ? -1 : 1)
                        : -1 * (y ? -1 : 1)
                      : parseFloat(e[g]) > parseFloat(t[g])
                      ? 1 * (y ? -1 : 1)
                      : -1 * (y ? -1 : 1);
                  }).slice(i * (u - 1), u * i)
                );
              },
              [D, i, u, y, g]
            ),
            U = function (e) {
              var t = e.item,
                n = e.index;
              return r.a.createElement(
                no,
                { style: { height: "48px" }, focus: !0 },
                r.a.createElement(
                  io,
                  { area: "name", fontWeight: "500" },
                  r.a.createElement(
                    Na,
                    null,
                    !j &&
                      r.a.createElement(
                        "div",
                        { style: { marginRight: "1rem", width: "10px" } },
                        n
                      ),
                    r.a.createElement(Qr, { address: t.id }),
                    r.a.createElement(
                      pr,
                      {
                        style: { marginLeft: "16px", whiteSpace: "nowrap" },
                        to: "/token/" + t.id,
                      },
                      r.a.createElement(ji, {
                        text: j ? t.symbol : t.name,
                        maxCharacters: w ? 8 : 16,
                        adjustSize: !0,
                        link: !0,
                      })
                    )
                  )
                ),
                !j &&
                  r.a.createElement(
                    io,
                    { area: "symbol", color: "text", fontWeight: "500" },
                    r.a.createElement(ji, {
                      text: t.symbol.toUpperCase(),
                      maxCharacters: 5,
                    })
                  ),
                r.a.createElement(
                  io,
                  { area: "liq" },
                  on(t.totalLiquidityUSD, !0)
                ),
                r.a.createElement(
                  io,
                  { area: "vol" },
                  on(t.oneDayVolumeUSD, !0)
                ),
                !O &&
                  r.a.createElement(
                    io,
                    { area: "price", color: "text", fontWeight: "500" },
                    on(t.priceUSD, !0)
                  ),
                !O &&
                  r.a.createElement(
                    io,
                    { area: "change" },
                    cn(t.priceChangeUSD)
                  )
              );
            };
          return r.a.createElement(
            ao,
            null,
            r.a.createElement(
              no,
              {
                center: !0,
                style: {
                  height: "fit-content",
                  padding: "0 1.125rem 1rem 1.125rem",
                },
              },
              r.a.createElement(
                S.b,
                { alignItems: "center", justifyContent: "flexStart" },
                r.a.createElement(
                  ro,
                  {
                    area: "name",
                    onClick: function (e) {
                      k(uo), h(g !== uo || !y);
                    },
                  },
                  j ? "Symbol" : "Name",
                  " ",
                  g === uo ? (y ? "\u2193" : "\u2191") : ""
                )
              ),
              !j &&
                r.a.createElement(
                  S.b,
                  { alignItems: "center" },
                  r.a.createElement(
                    ro,
                    {
                      area: "symbol",
                      onClick: function (e) {
                        k(lo), h(g !== lo || !y);
                      },
                    },
                    "Symbol ",
                    g === lo ? (y ? "\u2193" : "\u2191") : ""
                  )
                ),
              r.a.createElement(
                S.b,
                { alignItems: "center" },
                r.a.createElement(
                  ro,
                  {
                    area: "liq",
                    onClick: function (e) {
                      k(oo), h(g !== oo || !y);
                    },
                  },
                  "Liquidity ",
                  g === oo ? (y ? "\u2193" : "\u2191") : ""
                )
              ),
              r.a.createElement(
                S.b,
                { alignItems: "center" },
                r.a.createElement(
                  ro,
                  {
                    area: "vol",
                    onClick: function (e) {
                      k(co), h(g !== co || !y);
                    },
                  },
                  "Volume (24hrs)",
                  g === co ? (y ? "\u2193" : "\u2191") : ""
                )
              ),
              !O &&
                r.a.createElement(
                  S.b,
                  { alignItems: "center" },
                  r.a.createElement(
                    ro,
                    {
                      area: "price",
                      onClick: function (e) {
                        k(so), h(g !== so || !y);
                      },
                    },
                    "Price ",
                    g === so ? (y ? "\u2193" : "\u2191") : ""
                  )
                ),
              !O &&
                r.a.createElement(
                  S.b,
                  { alignItems: "center" },
                  r.a.createElement(
                    ro,
                    {
                      area: "change",
                      onClick: function (e) {
                        k(mo), h(g !== mo || !y);
                      },
                    },
                    "Price Change (24hrs)",
                    g === mo ? (y ? "\u2193" : "\u2191") : ""
                  )
                )
            ),
            r.a.createElement(Tr, null),
            r.a.createElement(
              to,
              { p: 0 },
              T &&
                T.map(function (e, t) {
                  return r.a.createElement(
                    "div",
                    { key: t },
                    r.a.createElement(U, {
                      key: t,
                      index: (u - 1) * i + t + 1,
                      item: e,
                    }),
                    r.a.createElement(Tr, null)
                  );
                })
            ),
            r.a.createElement(
              Zi,
              null,
              r.a.createElement(
                "div",
                {
                  onClick: function () {
                    return s(1 === u ? u : u - 1);
                  },
                },
                r.a.createElement(eo, { faded: 1 === u }, "\u2190")
              ),
              r.a.createElement(I, null, "Page " + u + " of " + p),
              r.a.createElement(
                "div",
                {
                  onClick: function () {
                    return s(u === p ? u : u + 1);
                  },
                },
                r.a.createElement(eo, { faded: u === p }, "\u2192")
              )
            )
          );
        }),
        fo = n(989);
      function vo() {
        var e = Object(c.a)([
          "\n  height: 20px;\n  width: 20px;\n  margin-left: 6px;\n",
        ]);
        return (
          (vo = function () {
            return e;
          }),
          e
        );
      }
      function bo() {
        var e = Object(c.a)([
          "\n  position: absolute;\n  top: 34px;\n  padding-top: 40px;\n  width: calc(100% - 40px);\n  background-color: ",
          ";\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  padding: 10px 10px;\n  border-radius: 8px;\n  width: calc(100% - 20px);\n  font-weight: 500;\n  font-size: 1rem;\n  color: black;\n  :hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (bo = function () {
            return e;
          }),
          e
        );
      }
      function yo() {
        var e = Object(c.a)([
          "\n  z-index: 20;\n  position: relative;\n  background-color: ",
          ";\n  border: 1px solid ",
          " \n  width: 100px;\n  padding: 4px 10px;\n  padding-right: 6px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  :hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (yo = function () {
            return e;
          }),
          e
        );
      }
      var ho = u.default.div(
          yo(),
          function (e) {
            return e.theme.panelColor;
          },
          function (e) {
            var t = e.open,
              n = e.color;
            return t ? n : "rgba(0, 0, 0, 0.15);";
          }
        ),
        Eo = u.default.div(bo(), function (e) {
          return e.theme.bg1;
        }),
        xo = Object(u.default)(fo.a)(vo()),
        go = function (e) {
          var t = e.options,
            n = e.active,
            i = e.setActive,
            o = e.color,
            c = Object(a.useState)(!1),
            u = Object(l.a)(c, 2),
            s = u[0],
            d = u[1];
          return r.a.createElement(
            ho,
            { open: s, color: o },
            r.a.createElement(
              Va,
              {
                onClick: function () {
                  return d(!s);
                },
                justify: "center",
              },
              r.a.createElement(P, null, n),
              r.a.createElement(Fr, null, r.a.createElement(xo, null))
            ),
            s &&
              r.a.createElement(
                Eo,
                null,
                r.a.createElement(
                  Ga,
                  { gap: "20px" },
                  Object.keys(t).map(function (e, a) {
                    var o = t[e];
                    return (
                      o !== n &&
                      r.a.createElement(
                        Na,
                        {
                          onClick: function () {
                            d(!s), i(o);
                          },
                          key: a,
                        },
                        r.a.createElement(I, { fontSize: 14 }, o)
                      )
                    );
                  })
                )
              )
          );
        };
      function ko() {
        var e = Object(c.a)([
          "\n  cursor: pointer;\n  font-weight: ",
          ";\n  margin-right: 0.75rem !important;\n  border: none;\n  background-color: transparent;\n  font-size: 1rem;\n  padding: 0px;\n  color: ",
          ";\n  outline: none;\n\n  @media screen and (max-width: 600px) {\n    font-size: 14px;\n  }\n",
        ]);
        return (
          (ko = function () {
            return e;
          }),
          e
        );
      }
      function Oo() {
        var e = Object(c.a)([
          "\n  align-items: center;\n  text-align: right;\n  color: ",
          ";\n\n  & > * {\n    font-size: 1em;\n  }\n\n  @media screen and (max-width: 40em) {\n    font-size: 0.85rem;\n  }\n",
        ]);
        return (
          (Oo = function () {
            return e;
          }),
          e
        );
      }
      function jo() {
        var e = Object(c.a)([
          "\n  color: ",
          ";\n  user-select: none;\n  text-align: end;\n\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n\n  @media screen and (max-width: 640px) {\n    font-size: 14px;\n  }\n",
        ]);
        return (
          (jo = function () {
            return e;
          }),
          e
        );
      }
      function So() {
        var e = Object(c.a)([
          "\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: 100px 1fr 1fr;\n  grid-template-areas: 'txn value time';\n\n  > * {\n    justify-content: flex-end;\n    width: 100%;\n\n    &:first-child {\n      justify-content: flex-start;\n      text-align: left;\n      width: 100px;\n    }\n  }\n\n  @media screen and (min-width: 500px) {\n    > * {\n      &:first-child {\n        width: 180px;\n      }\n    }\n  }\n\n  @media screen and (min-width: 780px) {\n    max-width: 1320px;\n    grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr;\n    grid-template-areas: 'txn value amountToken amountOther time';\n\n    > * {\n      &:first-child {\n        width: 180px;\n      }\n    }\n  }\n\n  @media screen and (min-width: 1080px) {\n    max-width: 1320px;\n    grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-areas: 'txn value amountToken amountOther account time';\n  }\n",
        ]);
        return (
          (So = function () {
            return e;
          }),
          e
        );
      }
      function wo() {
        var e = Object(c.a)(["\n  -webkit-overflow-scrolling: touch;\n"]);
        return (
          (wo = function () {
            return e;
          }),
          e
        );
      }
      function Do() {
        var e = Object(c.a)([
          "\n  color: #2f80ed;\n  opacity: ",
          ";\n  padding: 0 20px;\n  user-select: none;\n  :hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (Do = function () {
            return e;
          }),
          e
        );
      }
      function To() {
        var e = Object(c.a)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 2em;\n  margin-bottom: 0.5em;\n",
        ]);
        return (
          (To = function () {
            return e;
          }),
          e
        );
      }
      ct.a.extend(yt.a);
      var Uo = u.default.div(To()),
        Co = u.default.div(Do(), function (e) {
          return e.faded ? 0.3 : 1;
        }),
        Fo = Object(u.default)(S.a)(wo()),
        Ao = u.default.div(So()),
        Po = Object(u.default)(S.d)(jo(), function (e) {
          return e.theme.text1;
        }),
        Io = Object(u.default)(S.b)(Oo(), function (e) {
          return e.theme.text1;
        }),
        Lo = u.default.button(
          ko(),
          function (e) {
            var t = e.active;
            e.theme;
            return t ? 500 : 400;
          },
          function (e) {
            var t = e.active,
              n = e.theme;
            return t ? n.text1 : n.text3;
          }
        ),
        qo = "amountUSD",
        _o = "token0Amount",
        Ro = "token1Amount",
        zo = "timestamp",
        Mo = { ALL: "All", SWAP: "Swaps", ADD: "Adds", REMOVE: "Removes" };
      var Vo = function (e) {
          var t = e.transactions,
            n = e.symbol0Override,
            i = e.symbol1Override,
            o = e.color,
            c = Object(a.useState)(1),
            u = Object(l.a)(c, 2),
            s = u[0],
            d = u[1],
            m = Object(a.useState)(1),
            p = Object(l.a)(m, 2),
            f = p[0],
            v = p[1],
            b = Object(a.useState)(!0),
            y = Object(l.a)(b, 2),
            h = y[0],
            E = y[1],
            x = Object(a.useState)(zo),
            g = Object(l.a)(x, 2),
            k = g[0],
            O = g[1],
            j = Object(a.useState)(),
            w = Object(l.a)(j, 2),
            D = w[0],
            T = w[1],
            U = Object(a.useState)(Mo.ALL),
            C = Object(l.a)(U, 2),
            F = C[0],
            A = C[1],
            P = (function () {
              var e = kt(),
                t = Object(l.a)(e, 2),
                n = t[0],
                r = t[1].update,
                i = Object(a.useCallback)(
                  function () {
                    "ETH" === n.currency ? r("USD") : r("ETH");
                  },
                  [n, r]
                );
              return [n.CURRENCY, i];
            })(),
            L = Object(l.a)(P, 1)[0];
          Object(a.useEffect)(
            function () {
              v(1), d(1);
            },
            [t]
          ),
            Object(a.useEffect)(
              function () {
                if (t && t.mints && t.burns && t.swaps) {
                  var e = [];
                  t.mints.length > 0 &&
                    t.mints.map(function (t) {
                      var n = {};
                      return (
                        (n.hash = t.transaction.id),
                        (n.timestamp = t.transaction.timestamp),
                        (n.type = Mo.ADD),
                        (n.token0Amount = t.amount0),
                        (n.token1Amount = t.amount1),
                        (n.account = t.to),
                        (n.token0Symbol = pn(t.pair).token0.symbol),
                        (n.token1Symbol = pn(t.pair).token1.symbol),
                        (n.amountUSD = t.amountUSD),
                        e.push(n)
                      );
                    }),
                    t.burns.length > 0 &&
                      t.burns.map(function (t) {
                        var n = {};
                        return (
                          (n.hash = t.transaction.id),
                          (n.timestamp = t.transaction.timestamp),
                          (n.type = Mo.REMOVE),
                          (n.token0Amount = t.amount0),
                          (n.token1Amount = t.amount1),
                          (n.account = t.sender),
                          (n.token0Symbol = pn(t.pair).token0.symbol),
                          (n.token1Symbol = pn(t.pair).token1.symbol),
                          (n.amountUSD = t.amountUSD),
                          e.push(n)
                        );
                      }),
                    t.swaps.length > 0 &&
                      t.swaps.map(function (t) {
                        var n = t.amount0In - t.amount0Out,
                          a = t.amount1In - t.amount1Out,
                          r = {};
                        return (
                          n < 0
                            ? ((r.token0Symbol = pn(t.pair).token0.symbol),
                              (r.token1Symbol = pn(t.pair).token1.symbol),
                              (r.token0Amount = Math.abs(n)),
                              (r.token1Amount = Math.abs(a)))
                            : a < 0 &&
                              ((r.token0Symbol = pn(t.pair).token1.symbol),
                              (r.token1Symbol = pn(t.pair).token0.symbol),
                              (r.token0Amount = Math.abs(a)),
                              (r.token1Amount = Math.abs(n))),
                          (r.hash = t.transaction.id),
                          (r.timestamp = t.transaction.timestamp),
                          (r.type = Mo.SWAP),
                          (r.amountUSD = t.amountUSD),
                          (r.account = t.to),
                          e.push(r)
                        );
                      });
                  var n = e.filter(function (e) {
                    return F === Mo.ALL || e.type === F;
                  });
                  T(n);
                  var a = 1;
                  n.length % 10 === 0 && (a = 0),
                    0 === n.length ? v(1) : v(Math.floor(n.length / 10) + a);
                }
              },
              [t, F]
            ),
            Object(a.useEffect)(
              function () {
                d(1);
              },
              [F]
            );
          var q =
              D &&
              D.sort(function (e, t) {
                return parseFloat(e[k]) > parseFloat(t[k])
                  ? 1 * (h ? -1 : 1)
                  : -1 * (h ? -1 : 1);
              }).slice(10 * (s - 1), 10 * s),
            _ = Object(Xa.a)("(max-width: 1080px)"),
            R = Object(Xa.a)("(max-width: 780px)"),
            z = function (e) {
              var t = e.item;
              return r.a.createElement(
                Ao,
                { style: { height: "48px" } },
                r.a.createElement(
                  Io,
                  { area: "txn", fontWeight: "500" },
                  r.a.createElement(
                    mr,
                    { color: o, external: !0, href: an(t.hash) },
                    (function (e, t, n) {
                      var a =
                          (null === t || void 0 === t ? void 0 : t.length) > 8
                            ? t.slice(0, 7) + "..."
                            : t,
                        r =
                          (null === n || void 0 === n ? void 0 : n.length) > 8
                            ? n.slice(0, 7) + "..."
                            : n;
                      switch (e) {
                        case Mo.ADD:
                          return "Add " + a + " and " + r;
                        case Mo.REMOVE:
                          return "Remove " + a + " and " + r;
                        case Mo.SWAP:
                          return "Swap " + a + " for " + r;
                        default:
                          return "";
                      }
                    })(t.type, t.token1Symbol, t.token0Symbol)
                  )
                ),
                r.a.createElement(
                  Io,
                  { area: "value" },
                  "ETH" === L ? "\u039e " + on(t.valueETH) : on(t.amountUSD, !0)
                ),
                !R &&
                  r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      Io,
                      { area: "amountOther" },
                      on(t.token1Amount) + " ",
                      " ",
                      r.a.createElement(ji, {
                        text: t.token1Symbol,
                        maxCharacters: 5,
                        margin: !0,
                      })
                    ),
                    r.a.createElement(
                      Io,
                      { area: "amountToken" },
                      on(t.token0Amount) + " ",
                      " ",
                      r.a.createElement(ji, {
                        text: t.token0Symbol,
                        maxCharacters: 5,
                        margin: !0,
                      })
                    )
                  ),
                !_ &&
                  r.a.createElement(
                    Io,
                    { area: "account" },
                    r.a.createElement(
                      mr,
                      {
                        color: o,
                        external: !0,
                        href: "https://bscscan.com/address/" + t.account,
                      },
                      t.account &&
                        t.account.slice(0, 6) + "..." + t.account.slice(38, 42)
                    )
                  ),
                r.a.createElement(
                  Io,
                  { area: "time" },
                  (function (e) {
                    var t = ct.a.unix(Z),
                      n = ct.a.unix(e),
                      a = t.diff(n, "second"),
                      r = t.diff(n, "minute"),
                      i = t.diff(n, "hour"),
                      o = t.diff(n, "day");
                    return i >= 24
                      ? ""
                          .concat(o, " ")
                          .concat(1 === o ? "day" : "days", " ago")
                      : r >= 60
                      ? ""
                          .concat(i, " ")
                          .concat(1 === i ? "hour" : "hours", " ago")
                      : a >= 60
                      ? ""
                          .concat(r, " ")
                          .concat(1 === r ? "minute" : "minutes", " ago")
                      : ""
                          .concat(a, " ")
                          .concat(1 === a ? "second" : "seconds", " ago");
                  })(t.timestamp)
                )
              );
            };
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Ao,
              {
                center: !0,
                style: { height: "fit-content", padding: "0 0 1rem 0" },
              },
              R
                ? r.a.createElement(
                    Va,
                    { area: "txn" },
                    r.a.createElement(go, {
                      options: Mo,
                      active: F,
                      setActive: A,
                      color: o,
                    })
                  )
                : r.a.createElement(
                    Ba,
                    { area: "txn", gap: "10px", pl: 4 },
                    r.a.createElement(
                      Lo,
                      {
                        onClick: function () {
                          A(Mo.ALL);
                        },
                        active: F === Mo.ALL,
                      },
                      "All"
                    ),
                    r.a.createElement(
                      Lo,
                      {
                        onClick: function () {
                          A(Mo.SWAP);
                        },
                        active: F === Mo.SWAP,
                      },
                      "Swaps"
                    ),
                    r.a.createElement(
                      Lo,
                      {
                        onClick: function () {
                          A(Mo.ADD);
                        },
                        active: F === Mo.ADD,
                      },
                      "Adds"
                    ),
                    r.a.createElement(
                      Lo,
                      {
                        onClick: function () {
                          A(Mo.REMOVE);
                        },
                        active: F === Mo.REMOVE,
                      },
                      "Removes"
                    )
                  ),
              r.a.createElement(
                S.b,
                { alignItems: "center", justifyContent: "flexStart" },
                r.a.createElement(
                  Po,
                  {
                    color: "textDim",
                    area: "value",
                    onClick: function (e) {
                      O(qo), E(k !== qo || !h);
                    },
                  },
                  "Total Value ",
                  k === qo ? (h ? "\u2193" : "\u2191") : ""
                )
              ),
              !R &&
                r.a.createElement(
                  S.b,
                  { alignItems: "center" },
                  r.a.createElement(
                    Po,
                    {
                      area: "amountToken",
                      color: "textDim",
                      onClick: function () {
                        O(_o), E(k !== _o || !h);
                      },
                    },
                    n ? n + " Amount" : "Token Amount",
                    " ",
                    k === _o ? (h ? "\u2191" : "\u2193") : ""
                  )
                ),
              r.a.createElement(
                r.a.Fragment,
                null,
                !R &&
                  r.a.createElement(
                    S.b,
                    { alignItems: "center" },
                    r.a.createElement(
                      Po,
                      {
                        area: "amountOther",
                        color: "textDim",
                        onClick: function () {
                          O(Ro), E(k !== Ro || !h);
                        },
                      },
                      i ? i + " Amount" : "Token Amount",
                      " ",
                      k === Ro ? (h ? "\u2191" : "\u2193") : ""
                    )
                  ),
                !_ &&
                  r.a.createElement(
                    S.b,
                    { alignItems: "center" },
                    r.a.createElement(I, { area: "account" }, "Account")
                  ),
                r.a.createElement(
                  S.b,
                  { alignItems: "center" },
                  r.a.createElement(
                    Po,
                    {
                      area: "time",
                      color: "textDim",
                      onClick: function () {
                        O(zo), E(k !== zo || !h);
                      },
                    },
                    "Time ",
                    k === zo ? (h ? "\u2193" : "\u2191") : ""
                  )
                )
              )
            ),
            r.a.createElement(Tr, null),
            r.a.createElement(
              Fo,
              { p: 0 },
              q
                ? 0 === q.length
                  ? r.a.createElement(Ar, null, "No recent transactions found.")
                  : q.map(function (e, t) {
                      return r.a.createElement(
                        "div",
                        { key: t },
                        r.a.createElement(z, { key: t, index: t + 1, item: e }),
                        r.a.createElement(Tr, null)
                      );
                    })
                : r.a.createElement(or, null)
            ),
            r.a.createElement(
              Uo,
              null,
              r.a.createElement(
                "div",
                {
                  onClick: function (e) {
                    d(1 === s ? s : s - 1);
                  },
                },
                r.a.createElement(Co, { faded: 1 === s }, "\u2190")
              ),
              r.a.createElement(I, null, "Page " + s + " of " + f),
              r.a.createElement(
                "div",
                {
                  onClick: function (e) {
                    d(s === f ? s : s + 1);
                  },
                },
                r.a.createElement(Co, { faded: s === f }, "\u2192")
              )
            )
          );
        },
        Ho = n(21),
        Bo = n(149),
        No = n(990),
        Wo = n(991);
      function Ko() {
        var e = Object(c.a)(["\n  position: relative;\n"]);
        return (
          (Ko = function () {
            return e;
          }),
          e
        );
      }
      ct.a.extend(yt.a);
      var Yo = "BAR",
        Qo = "AREA",
        Go = u.default.div(Ko()),
        Jo = function (e) {
          var t = e.type,
            n = void 0 === t ? Yo : t,
            i = e.data,
            o = e.base,
            c = e.baseChange,
            u = e.field,
            s = e.title,
            d = e.width,
            m = e.useWeekly,
            p = void 0 !== m && m,
            f = Object(a.useRef)(),
            v = Object(a.useState)(!1),
            b = Object(l.a)(v, 2),
            y = b[0],
            h = b[1],
            E = Object(No.a)(i);
          Object(a.useEffect)(
            function () {
              if (i !== E && y && n === Yo) {
                var e = document.getElementById("tooltip-id" + n);
                document.getElementById("test-id" + n).removeChild(e),
                  y.resize(0, 0),
                  h();
              }
            },
            [y, i, E, n]
          );
          var g =
              null === i || void 0 === i
                ? void 0
                : i.map(function (e) {
                    return {
                      time: ct.a.unix(e.date).utc().format("YYYY-MM-DD"),
                      value: parseFloat(e[u]),
                    };
                  }),
            k = n === Qo ? 0.32 : 0.2,
            O = x(),
            j = Object(l.a)(O, 1)[0],
            S = j ? "white" : "black",
            w = Object(No.a)(j);
          return (
            Object(a.useEffect)(
              function () {
                if (y && w !== j) {
                  var e = document.getElementById("tooltip-id" + n);
                  document.getElementById("test-id" + n).removeChild(e),
                    y.resize(0, 0),
                    h();
                }
              },
              [y, j, w, n]
            ),
            Object(a.useEffect)(
              function () {
                if (!y && g) {
                  var e = function () {
                      r.innerHTML =
                        '<div style="font-size: 16px; margin: 4px 0px; color: '
                          .concat(S, ';">')
                          .concat(s, " ")
                          .concat(n !== Yo || p ? "" : "(24hr)", "</div>") +
                        '<div style="font-size: 22px; margin: 4px 0px; color:'.concat(
                          S,
                          '" >'
                        ) +
                        on(null !== o && void 0 !== o ? o : 0, !0) +
                        '<span style="margin-left: 10px; font-size: 16px; color: '
                          .concat(u, ';">')
                          .concat(l, "</span>") +
                        "</div>";
                    },
                    t = Object(Bo.b)(f.current, {
                      width: d,
                      height: 300,
                      layout: { backgroundColor: "transparent", textColor: S },
                      rightPriceScale: {
                        scaleMargins: { top: k, bottom: 0 },
                        borderVisible: !1,
                      },
                      timeScale: { borderVisible: !1 },
                      grid: {
                        horzLines: {
                          color: "rgba(79, 216, 222, 0.5)",
                          visible: !1,
                        },
                        vertLines: {
                          color: "rgba(79, 216, 222, 0.5)",
                          visible: !1,
                        },
                      },
                      crosshair: {
                        horzLine: { visible: !1, labelVisible: !1 },
                        vertLine: {
                          visible: !0,
                          style: 0,
                          width: 2,
                          color: "rgba(32, 38, 46, 0.1)",
                          labelVisible: !1,
                        },
                      },
                      localization: {
                        priceFormatter: function (e) {
                          return on(e, !0);
                        },
                      },
                    }),
                    a =
                      n === Yo
                        ? t.addHistogramSeries({
                            color: "#4FD8DE",
                            priceFormat: { type: "volume" },
                            scaleMargins: { top: 0.32, bottom: 0 },
                            lineColor: "#4FD8DE",
                            lineWidth: 3,
                          })
                        : t.addAreaSeries({
                            topColor: "#4FD8DE",
                            bottomColor: "rgba(79, 216, 222, 0)",
                            lineColor: "#4FD8DE",
                            lineWidth: 3,
                          });
                  a.setData(g);
                  var r = document.createElement("div");
                  r.setAttribute("id", "tooltip-id" + n),
                    (r.className = j
                      ? "three-line-legend-dark"
                      : "three-line-legend"),
                    f.current.appendChild(r),
                    (r.style.display = "block"),
                    (r.style.fontWeight = "500"),
                    (r.style.left = "-4px"),
                    (r.style.top = "-8px"),
                    (r.style.backgroundColor = "transparent");
                  var i = null === c || void 0 === c ? void 0 : c.toFixed(2),
                    l = (i > 0 ? "+" : "") + i + "%",
                    u = i >= 0 ? "green" : "red";
                  e(),
                    t.subscribeCrosshairMove(function (t) {
                      if (
                        void 0 === t ||
                        void 0 === t.time ||
                        t.point.x < 0 ||
                        t.point.x > d ||
                        t.point.y < 0 ||
                        t.point.y > 300
                      )
                        e();
                      else {
                        var n = p
                            ? ct()(
                                t.time.year +
                                  "-" +
                                  t.time.month +
                                  "-" +
                                  t.time.day
                              )
                                .startOf("week")
                                .format("MMMM D, YYYY") +
                              "-" +
                              ct()(
                                t.time.year +
                                  "-" +
                                  t.time.month +
                                  "-" +
                                  t.time.day
                              )
                                .endOf("week")
                                .format("MMMM D, YYYY")
                            : ct()(
                                t.time.year +
                                  "-" +
                                  t.time.month +
                                  "-" +
                                  t.time.day
                              ).format("MMMM D, YYYY"),
                          i = t.seriesPrices.get(a);
                        r.innerHTML =
                          '<div style="font-size: 16px; margin: 4px 0px; color: '
                            .concat(S, ';">')
                            .concat(s, "</div>") +
                          '<div style="font-size: 22px; margin: 4px 0px; color: '.concat(
                            S,
                            '">'
                          ) +
                          on(i, !0) +
                          "</div><div>" +
                          n +
                          "</div>";
                      }
                    }),
                    t.timeScale().fitContent(),
                    h(t);
                }
              },
              [o, c, y, j, i, g, S, s, k, n, p, d]
            ),
            Object(a.useEffect)(
              function () {
                d &&
                  (y && y.resize(d, 300),
                  y && y.timeScale().scrollToPosition(0));
              },
              [y, d]
            ),
            r.a.createElement(
              Go,
              null,
              r.a.createElement("div", { ref: f, id: "test-id" + n }),
              r.a.createElement(
                Ur,
                null,
                r.a.createElement(Wo.a, {
                  onClick: function () {
                    y && y.timeScale().fitContent();
                  },
                })
              )
            )
          );
        },
        Xo = n(992);
      n(993);
      function $o() {
        var e = Object(c.a)([
          "\n  font-weight: 500;\n  width: fit-content;\n  white-space: nowrap;\n  padding: 6px;\n  border-radius: 6px;\n  border: 1px solid ",
          ";\n  background-color: ",
          ";\n  color: ",
          ";\n\n  :hover {\n    cursor: ",
          ";\n  }\n",
        ]);
        return (
          ($o = function () {
            return e;
          }),
          e
        );
      }
      function Zo() {
        var e = Object(c.a)([
          "\n  background-color: ",
          ";\n  color: (255, 255, 255, 0.5);\n  white-space: nowrap;\n\n  :hover {\n    opacity: 0.5;\n  }\n",
        ]);
        return (
          (Zo = function () {
            return e;
          }),
          e
        );
      }
      function ec() {
        var e = Object(c.a)([
          "\n  background-color: ",
          ";\n  color: white;\n  width: fit-content;\n  border-radius: 12px;\n  white-space: nowrap;\n\n  :hover {\n    background-color: ",
          ";\n  }\n",
        ]);
        return (
          (ec = function () {
            return e;
          }),
          e
        );
      }
      function tc() {
        var e = Object(c.a)([
          "\n  background-color: ",
          ";\n  color: ",
          ";\n\n  min-width: fit-content;\n  border-radius: 12px;\n  white-space: nowrap;\n\n  a {\n    color: ",
          ";\n  }\n\n  :hover {\n    background-color: ",
          ";\n  }\n",
        ]);
        return (
          (tc = function () {
            return e;
          }),
          e
        );
      }
      function nc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n",
        ]);
        return (
          (nc = function () {
            return e;
          }),
          e
        );
      }
      function ac() {
        var e = Object(c.a)([
          "\n  background-color: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: black;\n  height: 100%;\n  font-weight: 400;\n  &:hover,\n  :focus {\n    background-color: rgba(255, 255, 255, 0.25);\n    border-color: rgba(255, 255, 255, 0.25);\n  }\n  &:focus {\n    box-shadow: 0 0 0 1pt rgba(255, 255, 255, 0.25);\n  }\n  &:active {\n    background-color: rgba(255, 255, 255, 0.25);\n    border-color: rgba(255, 255, 255, 0.25);\n  }\n",
        ]);
        return (
          (ac = function () {
            return e;
          }),
          e
        );
      }
      function rc() {
        var e = Object(c.a)([
          "\n  padding: 16px 12px;\n  font-size: 0.825rem;\n  font-weight: 400;\n  border-radius: 12px;\n  cursor: pointer;\n  outline: none;\n",
        ]);
        return (
          (rc = function () {
            return e;
          }),
          e
        );
      }
      function ic() {
        var e = Object(c.a)([
          "\n  padding: 8px 12px;\n  font-size: 0.825rem;\n  font-weight: 600;\n  border-radius: 12px;\n  cursor: pointer;\n  outline: none;\n  border: 1px solid transparent;\n  outline: none;\n  border-bottom-right-radius: ",
          ";\n  border-bottom-left-radius: ",
          ";\n",
        ]);
        return (
          (ic = function () {
            return e;
          }),
          e
        );
      }
      var oc = Object(u.default)(Ia.Button)(
        ic(),
        function (e) {
          return e.open && "0";
        },
        function (e) {
          return e.open && "0";
        }
      );
      Object(u.default)(Ia.Button)(rc()), Object(u.default)(oc)(ac());
      u.default.div(nc());
      var cc = Object(u.default)(oc)(
        tc(),
        function (e) {
          var t = e.color,
            n = e.theme;
          return t ? Object(lr.d)(0.9, t) : Object(lr.d)(0.9, n.primary1);
        },
        function (e) {
          var t = e.color,
            n = e.theme;
          return t ? Object(lr.a)(0.1, t) : n.primary1;
        },
        function (e) {
          var t = e.color,
            n = e.theme;
          return t ? Object(lr.a)(0.1, t) : n.primary1;
        },
        function (e) {
          var t = e.color,
            n = e.theme;
          return t ? Object(lr.d)(0.8, t) : Object(lr.d)(0.8, n.primary1);
        }
      );
      function lc(e) {
        var t = e.disabled,
          n = void 0 !== t && t,
          a = e.children,
          i = e.open,
          o = Object(cr.a)(e, ["disabled", "children", "open"]);
        return r.a.createElement(
          sc,
          Object.assign({}, o, { disabled: n, ope: i }),
          r.a.createElement(
            Va,
            null,
            r.a.createElement(
              "div",
              { style: { display: "flex", alignItems: "center" } },
              a
            ),
            i
              ? r.a.createElement(
                  Fr,
                  null,
                  r.a.createElement(Xo.a, { size: 24 })
                )
              : r.a.createElement(
                  Fr,
                  null,
                  r.a.createElement(fo.a, { size: 24 })
                )
          )
        );
      }
      var uc = Object(u.default)(oc)(
          ec(),
          function (e) {
            var t = e.color,
              n = e.theme;
            return t || n.primary1;
          },
          function (e) {
            var t = e.color,
              n = e.theme;
            return t ? Object(lr.a)(0.1, t) : Object(lr.a)(0.1, n.primary1);
          }
        ),
        sc = Object(u.default)(oc)(Zo(), function (e) {
          return e.theme.bg2;
        });
      var dc = u.default.div(
          $o(),
          function (e) {
            return e.theme.bg4;
          },
          function (e) {
            var t = e.active,
              n = e.theme;
            return t && n.bg3;
          },
          function (e) {
            return e.theme.text1;
          },
          function (e) {
            return !e.disabled && "pointer";
          }
        ),
        mc = { VOLUME: "Volume", LIQUIDITY: "Liquidity" },
        pc = "WEEKLY",
        fc = "DAYS",
        vc = function (e) {
          var t,
            n,
            i = e.display,
            o = Object(a.useState)("volume" === i ? mc.VOLUME : mc.LIQUIDITY),
            c = Object(l.a)(o, 2),
            u = c[0],
            s = c[1],
            d = ee.ALL_TIME,
            m = Object(a.useState)(fc),
            p = Object(l.a)(m, 2),
            f = p[0],
            v = p[1],
            b = Zn(),
            y = Object(l.a)(b, 2),
            h = y[0],
            E = y[1],
            x = $n(),
            g = x.totalLiquidityUSD,
            k = x.oneDayVolumeUSD,
            O = x.volumeChangeUSD,
            j = x.liquidityChangeUSD,
            S = x.oneWeekVolume,
            w = x.weeklyVolumeChange,
            D = Rt(d),
            T = Object(a.useMemo)(
              function () {
                var e,
                  t = f === fc ? h : E;
                return (
                  t &&
                  (null === (e = Object.keys(t)) || void 0 === e
                    ? void 0
                    : e
                        .map(function (e) {
                          var n = t[e];
                          return n.date > D ? n : void 0;
                        })
                        .filter(function (e) {
                          return !!e;
                        }))
                );
              },
              [h, D, f, E]
            ),
            U = Object(Xa.a)("(max-width: 800px)"),
            C = Object(a.useRef)(),
            F = "object" === typeof window,
            A = Object(a.useState)(
              null === C || void 0 === C
                ? void 0
                : null === (t = C.current) || void 0 === t
                ? void 0
                : null === (n = t.container) || void 0 === n
                ? void 0
                : n.clientWidth
            ),
            P = Object(l.a)(A, 2),
            L = P[0],
            q = P[1];
          return (
            Object(a.useEffect)(
              function () {
                if (!F) return !1;
                function e() {
                  var e, t, n;
                  q(
                    null !==
                      (e =
                        null === C || void 0 === C
                          ? void 0
                          : null === (t = C.current) || void 0 === t
                          ? void 0
                          : null === (n = t.container) || void 0 === n
                          ? void 0
                          : n.clientWidth) && void 0 !== e
                      ? e
                      : L
                  );
                }
                return (
                  window.addEventListener("resize", e),
                  function () {
                    return window.removeEventListener("resize", e);
                  }
                );
              },
              [F, L]
            ),
            T
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  U &&
                    r.a.createElement(go, {
                      options: mc,
                      active: u,
                      setActive: s,
                      color: "#4FD8DE",
                    }),
                  T &&
                    u === mc.LIQUIDITY &&
                    r.a.createElement(
                      Ho.h,
                      { aspect: 60 / 28, ref: C },
                      r.a.createElement(Jo, {
                        data: h,
                        base: g,
                        baseChange: j,
                        title: "Liquidity",
                        field: "totalLiquidityUSD",
                        width: L,
                        type: Qo,
                      })
                    ),
                  T &&
                    u === mc.VOLUME &&
                    r.a.createElement(
                      Ho.h,
                      { aspect: 60 / 28 },
                      r.a.createElement(Jo, {
                        data: T,
                        base: f === pc ? S : k,
                        baseChange: f === pc ? w : O,
                        title: f === pc ? "Volume (7d)" : "Volume",
                        field: f === pc ? "weeklyVolumeUSD" : "dailyVolumeUSD",
                        width: L,
                        type: Yo,
                        useWeekly: f === pc,
                      })
                    ),
                  "volume" === i &&
                    r.a.createElement(
                      Ba,
                      {
                        style: {
                          bottom: "70px",
                          position: "absolute",
                          left: "20px",
                          zIndex: 10,
                        },
                      },
                      r.a.createElement(
                        dc,
                        {
                          active: f === fc,
                          onClick: function () {
                            return v(fc);
                          },
                        },
                        r.a.createElement(I, null, "D")
                      ),
                      r.a.createElement(
                        dc,
                        {
                          style: { marginLeft: "4px" },
                          active: f === pc,
                          onClick: function () {
                            return v(pc);
                          },
                        },
                        r.a.createElement(I, null, "W")
                      )
                    )
                )
              : ""
          );
        },
        bc = n(994),
        yc = n(995);
      function hc() {
        var e = Object(c.a)([
          "\n  color: #2172e5;\n  :hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (hc = function () {
            return e;
          }),
          e
        );
      }
      function Ec() {
        var e = Object(c.a)(["\n  color: #888d9b;\n"]);
        return (
          (Ec = function () {
            return e;
          }),
          e
        );
      }
      function xc() {
        var e = Object(c.a)(["\n  padding: 1rem;\n  display: ", ";\n"]);
        return (
          (xc = function () {
            return e;
          }),
          e
        );
      }
      function gc() {
        var e = Object(c.a)([
          "\n  padding: 1rem;\n  font-size: 0.85rem;\n  & > * {\n    margin-right: 6px;\n  }\n  :hover {\n    cursor: pointer;\n    background-color: ",
          ";\n  }\n",
        ]);
        return (
          (gc = function () {
            return e;
          }),
          e
        );
      }
      function kc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex-direction: column;\n  z-index: 9999;\n  width: 100%;\n  top: 50px;\n  max-height: 540px;\n  overflow: auto;\n  left: 0;\n  padding-bottom: 20px;\n  background: ",
          ";\n  border-bottom-right-radius: 12px;\n  border-bottom-left-radius: 12px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.04);\n  display: ",
          ";\n",
        ]);
        return (
          (kc = function () {
            return e;
          }),
          e
        );
      }
      function Oc() {
        var e = Object(c.a)([
          "\n  height: 20px;\n  width: 20px;\n  margin-right: 0.5rem;\n  position: absolute;\n  right: 10px;\n  color: ",
          ";\n  :hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (Oc = function () {
            return e;
          }),
          e
        );
      }
      function jc() {
        var e = Object(c.a)([
          "\n  height: 20px;\n  width: 20px;\n  margin-right: 0.5rem;\n  position: absolute;\n  right: 10px;\n  pointer-events: none;\n  color: ",
          ";\n",
        ]);
        return (
          (jc = function () {
            return e;
          }),
          e
        );
      }
      function Sc() {
        var e = Object(c.a)([
          "\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  width: 100%;\n  color: ",
          ";\n  font-size: ",
          ";\n\n  ::placeholder {\n    color: ",
          ";\n    font-size: 16px;\n  }\n\n  @media screen and (max-width: 640px) {\n    ::placeholder {\n      font-size: 1rem;\n    }\n  }\n",
        ]);
        return (
          (Sc = function () {
            return e;
          }),
          e
        );
      }
      function wc() {
        var e = Object(c.a)([
          "\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: ",
          ";\n  border-bottom-right-radius: ",
          ";\n  border-bottom-left-radius: ",
          ";\n  z-index: 9999;\n  width: 100%;\n  min-width: 300px;\n  box-sizing: border-box;\n  box-shadow: ",
          ";\n  @media screen and (max-width: 500px) {\n    background: ",
          ";\n    box-shadow: ",
          ";\n  }\n",
        ]);
        return (
          (wc = function () {
            return e;
          }),
          e
        );
      }
      function Dc() {
        var e = Object(c.a)([
          "\n  height: 48px;\n  z-index: 30;\n  position: relative;\n\n  @media screen and (max-width: 600px) {\n    width: 100%;\n  }\n",
        ]);
        return (
          (Dc = function () {
            return e;
          }),
          e
        );
      }
      var Tc = u.default.div(Dc()),
        Uc = u.default.div(
          wc(),
          function (e) {
            var t = e.theme,
              n = e.small,
              a = e.open;
            return n
              ? a
                ? Object(lr.d)(0.4, t.bg1)
                : "none"
              : Object(lr.d)(0.4, t.bg6);
          },
          function (e) {
            return e.open ? "0px" : "12px";
          },
          function (e) {
            return e.open ? "0px" : "12px";
          },
          function (e) {
            var t = e.open,
              n = e.small;
            return t || n
              ? "none"
              : "0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04) ";
          },
          function (e) {
            var t = e.theme;
            return Object(lr.d)(0.4, t.bg1);
          },
          function (e) {
            return e.open
              ? "none"
              : "0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04) ";
          }
        ),
        Cc = u.default.input(
          Sc(),
          function (e) {
            return e.theme.text1;
          },
          function (e) {
            return e.large ? "20px" : "14px";
          },
          function (e) {
            return e.theme.text3;
          }
        ),
        Fc = Object(u.default)(bc.a)(jc(), function (e) {
          return e.theme.text3;
        }),
        Ac = Object(u.default)(yc.a)(Oc(), function (e) {
          return e.theme.text3;
        }),
        Pc = u.default.div(
          kc(),
          function (e) {
            return e.theme.bg6;
          },
          function (e) {
            return e.hide && "none";
          }
        ),
        Ic = Object(u.default)(Na)(gc(), function (e) {
          return e.theme.bg2;
        }),
        Lc = Object(u.default)(Na)(xc(), function (e) {
          var t = e.hide;
          return void 0 !== t && t && "none";
        }),
        qc = u.default.span(Ec()),
        _c = u.default.span(hc()),
        Rc = function (e) {
          var t = e.small,
            n = void 0 !== t && t,
            i = (function () {
              var e = zn(),
                t = Object(l.a)(e, 1)[0];
              return (null === t || void 0 === t ? void 0 : t.allTokens) || [];
            })(),
            o = fa(),
            c = (function () {
              var e = zn(),
                t = Object(l.a)(e, 1)[0];
              return (null === t || void 0 === t ? void 0 : t.allPairs) || [];
            })(),
            u = An(),
            s = Object(a.useState)(!1),
            d = Object(l.a)(s, 2),
            m = d[0],
            p = d[1],
            f = Object(a.useState)(""),
            v = Object(l.a)(f, 2),
            b = v[0],
            y = v[1],
            h = Object(a.useState)(!1),
            E = Object(l.a)(h, 2)[1],
            x = Object(a.useState)(!1),
            g = Object(l.a)(x, 2)[1];
          ma(b), Fn(b);
          var k = Object(Xa.a)("(max-width: 700px)"),
            O = Object(Xa.a)("(max-width: 470px)"),
            j = Object(Xa.a)("(max-width: 410px)");
          Object(a.useEffect)(
            function () {
              p("" !== b);
            },
            [b]
          );
          var S = Object(a.useState)([]),
            w = Object(l.a)(S, 2),
            D = w[0],
            T = w[1],
            U = Object(a.useState)([]),
            C = Object(l.a)(U, 2),
            F = C[0],
            A = C[1];
          function P(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          Object(a.useEffect)(
            function () {
              function e() {
                return (e = Object(B.a)(
                  H.a.mark(function e() {
                    var t, n, a, r;
                    return H.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((e.prev = 0),
                                !(
                                  (null === b || void 0 === b
                                    ? void 0
                                    : b.length) > 0
                                ))
                              ) {
                                e.next = 11;
                                break;
                              }
                              return (
                                (e.next = 4),
                                Y.query({
                                  query: We,
                                  variables: {
                                    value: b ? b.toUpperCase() : "",
                                    id: b,
                                  },
                                })
                              );
                            case 4:
                              return (
                                (n = e.sent),
                                (e.next = 7),
                                Y.query({
                                  query: Ke,
                                  variables: {
                                    tokens:
                                      null === (t = n.data.asSymbol) ||
                                      void 0 === t
                                        ? void 0
                                        : t.map(function (e) {
                                            return e.id;
                                          }),
                                    id: b,
                                  },
                                })
                              );
                            case 7:
                              (a = e.sent),
                                A(
                                  pn(a.data.as0)
                                    .concat(pn(a.data.as1))
                                    .concat(pn(a.data.asAddress))
                                ),
                                (r = n.data.asSymbol
                                  .concat(n.data.asAddress)
                                  .concat(n.data.asName)),
                                T(r);
                            case 11:
                              e.next = 16;
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(0)),
                                console.log(e.t0);
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 13]]
                    );
                  })
                )).apply(this, arguments);
              }
              !(function () {
                e.apply(this, arguments);
              })();
            },
            [b]
          ),
            (i = i.concat(
              D.filter(function (e) {
                var t = !1;
                return (
                  pn(),
                  i.map(function (n) {
                    return n.id === e.id && (t = !0), !0;
                  }),
                  !t
                );
              })
            ));
          var L = [],
            q = {};
          i &&
            i.map(function (e) {
              return q[e.id] || ((q[e.id] = !0), L.push(e)), !0;
            }),
            (c = c.concat(
              F.filter(function (e) {
                var t = !1;
                return (
                  c.map(function (n) {
                    return n.id === e.id && (t = !0), !0;
                  }),
                  !t
                );
              })
            ));
          var _ = [],
            R = {};
          c &&
            c.map(function (e) {
              return R[e.id] || ((R[e.id] = !0), _.push(e)), !0;
            });
          var z = Object(a.useMemo)(
              function () {
                return L
                  ? L.sort(function (e, t) {
                      if (ne.includes(e.id)) return 1;
                      if (ne.includes(t.id)) return -1;
                      var n = o[e.id],
                        a = o[t.id];
                      return (null === n || void 0 === n
                        ? void 0
                        : n.oneDayVolumeUSD) &&
                        (null === a || void 0 === a
                          ? void 0
                          : a.oneDayVolumeUSD)
                        ? n.oneDayVolumeUSD > a.oneDayVolumeUSD
                          ? -1
                          : 1
                        : (null === n || void 0 === n
                            ? void 0
                            : n.oneDayVolumeUSD) &&
                          !(null === a || void 0 === a
                            ? void 0
                            : a.oneDayVolumeUSD)
                        ? -1
                        : !(null === n || void 0 === n
                            ? void 0
                            : n.oneDayVolumeUSD) &&
                          (null === a || void 0 === a
                            ? void 0
                            : a.oneDayVolumeUSD) &&
                          (null === n || void 0 === n
                            ? void 0
                            : n.totalLiquidity) >
                            (null === a || void 0 === a
                              ? void 0
                              : a.totalLiquidity)
                        ? -1
                        : 1;
                    }).filter(function (e) {
                      return (
                        !ne.includes(e.id) &&
                        Object.keys(e)
                          .map(function (t) {
                            var n = "0x" === b.slice(0, 2);
                            return "id" === t && n
                              ? e[t].match(new RegExp(P(b), "i"))
                              : "symbol" !== t || n
                              ? "name" === t &&
                                !n &&
                                e[t].match(new RegExp(P(b), "i"))
                              : e[t].match(new RegExp(P(b), "i"));
                          })
                          .some(function (e) {
                            return e;
                          })
                      );
                    })
                  : [];
              },
              [o, L, b]
            ),
            M = Object(a.useMemo)(
              function () {
                return _
                  ? _.sort(function (e, t) {
                      var n = u[e.id],
                        a = u[t.id];
                      return (null === n || void 0 === n
                        ? void 0
                        : n.trackedReserveETH) &&
                        (null === a || void 0 === a
                          ? void 0
                          : a.trackedReserveETH)
                        ? parseFloat(n.trackedReserveETH) >
                          parseFloat(a.trackedReserveETH)
                          ? -1
                          : 1
                        : (null === n || void 0 === n
                            ? void 0
                            : n.trackedReserveETH) &&
                          !(null === a || void 0 === a
                            ? void 0
                            : a.trackedReserveETH)
                        ? -1
                        : !(null === n || void 0 === n
                            ? void 0
                            : n.trackedReserveETH) &&
                          (null === a || void 0 === a
                            ? void 0
                            : a.trackedReserveETH)
                        ? 1
                        : 0;
                    }).filter(function (e) {
                      if (ae.includes(e.id)) return !1;
                      if (b && b.includes(" ")) {
                        var t,
                          n,
                          a =
                            null === (t = b.split(" ")[0]) || void 0 === t
                              ? void 0
                              : t.toUpperCase(),
                          r =
                            null === (n = b.split(" ")[1]) || void 0 === n
                              ? void 0
                              : n.toUpperCase();
                        return (
                          (e.token0.symbol.includes(a) ||
                            e.token0.symbol.includes(r)) &&
                          (e.token1.symbol.includes(a) ||
                            e.token1.symbol.includes(r))
                        );
                      }
                      if (b && b.includes("-")) {
                        var i,
                          o,
                          c =
                            null === (i = b.split("-")[0]) || void 0 === i
                              ? void 0
                              : i.toUpperCase(),
                          l =
                            null === (o = b.split("-")[1]) || void 0 === o
                              ? void 0
                              : o.toUpperCase();
                        return (
                          (e.token0.symbol.includes(c) ||
                            e.token0.symbol.includes(l)) &&
                          (e.token1.symbol.includes(c) ||
                            e.token1.symbol.includes(l))
                        );
                      }
                      return Object.keys(e)
                        .map(function (t) {
                          var n = "0x" === b.slice(0, 2);
                          return "id" === t && n
                            ? e[t].match(new RegExp(P(b), "i"))
                            : "token0" === t
                            ? e[t].symbol.match(new RegExp(P(b), "i")) ||
                              e[t].name.match(new RegExp(P(b), "i"))
                            : "token1" === t &&
                              (e[t].symbol.match(new RegExp(P(b), "i")) ||
                                e[t].name.match(new RegExp(P(b), "i")));
                        })
                        .some(function (e) {
                          return e;
                        });
                    })
                  : [];
              },
              [u, _, b]
            );
          Object(a.useEffect)(
            function () {
              Object.keys(z).length > 2 ? E(!0) : E(!1);
            },
            [z]
          ),
            Object(a.useEffect)(
              function () {
                Object.keys(M).length > 2 ? g(!0) : g(!1);
              },
              [M]
            );
          var V = Object(a.useState)(3),
            N = Object(l.a)(V, 2),
            W = N[0],
            K = N[1],
            Q = Object(a.useState)(3),
            G = Object(l.a)(Q, 2),
            J = G[0],
            X = G[1];
          function $() {
            X(3), K(3), p(!1), y("");
          }
          var Z = Object(a.useRef)(),
            ee = Object(a.useRef)(),
            te = function (e) {
              (ee.current && ee.current.contains(e.target)) ||
                (Z.current && Z.current.contains(e.target)) ||
                (X(3), K(3), p(!1));
            };
          return (
            Object(a.useEffect)(function () {
              return (
                document.addEventListener("click", te),
                function () {
                  document.removeEventListener("click", te);
                }
              );
            }),
            r.a.createElement(
              Tc,
              { small: n },
              r.a.createElement(
                Uc,
                { open: m, shadow: !0, small: n },
                r.a.createElement(Cc, {
                  large: !n,
                  type: "text",
                  ref: Z,
                  placeholder: n
                    ? ""
                    : j
                    ? "Search..."
                    : O
                    ? "Search VeneraSwap..."
                    : k
                    ? "Search pairs and tokens..."
                    : "Search VeneraSwap pairs and tokens...",
                  value: b,
                  onChange: function (e) {
                    y(e.target.value);
                  },
                  onFocus: function () {
                    m || p(!0);
                  },
                }),
                m
                  ? r.a.createElement(Ac, {
                      onClick: function () {
                        return p(!1);
                      },
                    })
                  : r.a.createElement(Fc, null)
              ),
              r.a.createElement(
                Pc,
                { hide: !m, ref: ee },
                r.a.createElement(
                  Lc,
                  null,
                  r.a.createElement(qc, null, "Pairs")
                ),
                r.a.createElement(
                  "div",
                  null,
                  M &&
                    0 === Object.keys(M).length &&
                    r.a.createElement(
                      Ic,
                      null,
                      r.a.createElement(I, null, "No results")
                    ),
                  M &&
                    M.slice(0, J).map(function (e) {
                      var t, n;
                      return (
                        pn(e),
                        r.a.createElement(
                          fr,
                          { to: "/pair/" + e.id, key: e.id, onClick: $ },
                          r.a.createElement(
                            Ic,
                            null,
                            r.a.createElement($r, {
                              a0:
                                null === e || void 0 === e
                                  ? void 0
                                  : null === (t = e.token0) || void 0 === t
                                  ? void 0
                                  : t.id,
                              a1:
                                null === e || void 0 === e
                                  ? void 0
                                  : null === (n = e.token1) || void 0 === n
                                  ? void 0
                                  : n.id,
                              margin: !0,
                            }),
                            r.a.createElement(
                              I,
                              { style: { marginLeft: "10px" } },
                              e.token0.symbol + "-" + e.token1.symbol,
                              " Pair"
                            )
                          )
                        )
                      );
                    }),
                  r.a.createElement(
                    Lc,
                    {
                      hide: !(
                        Object.keys(M).length > 3 && Object.keys(M).length >= J
                      ),
                    },
                    r.a.createElement(
                      _c,
                      {
                        onClick: function () {
                          X(J + 5);
                        },
                      },
                      "See more..."
                    )
                  )
                ),
                r.a.createElement(
                  Lc,
                  null,
                  r.a.createElement(qc, null, "Tokens")
                ),
                r.a.createElement(
                  "div",
                  null,
                  0 === Object.keys(z).length &&
                    r.a.createElement(
                      Ic,
                      null,
                      r.a.createElement(I, null, "No results")
                    ),
                  z.slice(0, W).map(function (e) {
                    return (
                      pn({ token0: e }),
                      r.a.createElement(
                        fr,
                        { to: "/token/" + e.id, key: e.id, onClick: $ },
                        r.a.createElement(
                          Ic,
                          null,
                          r.a.createElement(
                            Ba,
                            null,
                            r.a.createElement(Qr, {
                              address: e.id,
                              style: { marginRight: "10px" },
                            }),
                            r.a.createElement(ji, {
                              text: e.name,
                              maxCharacters: 20,
                              style: { marginRight: "6px" },
                            }),
                            "(",
                            r.a.createElement(ji, {
                              text: e.symbol,
                              maxCharacters: 6,
                            }),
                            ")"
                          )
                        )
                      )
                    );
                  }),
                  r.a.createElement(
                    Lc,
                    {
                      hide: !(
                        Object.keys(z).length > 3 && Object.keys(z).length >= W
                      ),
                    },
                    r.a.createElement(
                      _c,
                      {
                        onClick: function () {
                          K(W + 5);
                        },
                      },
                      "See more..."
                    )
                  )
                )
              )
            )
          );
        };
      function zc() {
        var e = Object(c.a)(["\n  font-weight: 500;\n"]);
        return (
          (zc = function () {
            return e;
          }),
          e
        );
      }
      function Mc() {
        var e = Object(c.a)([
          "\n  width: 100%;\n  position: sticky;\n  top: 0;\n",
        ]);
        return (
          (Mc = function () {
            return e;
          }),
          e
        );
      }
      var Vc = u.default.div(Mc()),
        Hc = u.default.span(zc());
      function Bc() {
        var e = Object(Xa.a)("(max-width: 1295px)"),
          t = Object(Xa.a)("(max-width: 1180px)"),
          n = Object(Xa.a)("(max-width: 1024px)"),
          i = Object(Xa.a)("(max-width: 400px)"),
          o = Object(Xa.a)("(max-width: 816px)"),
          c = Object(a.useState)(!1),
          u = Object(l.a)(c, 2)[1],
          s = $n(),
          d = s.oneDayVolumeUSD,
          m = s.oneDayTxns,
          p = s.pairCount,
          f = ea(),
          v = Object(l.a)(f, 1)[0],
          b = v ? on(v, !0) : "-",
          y = d ? on(0.002 * d, !0) : "";
        return r.a.createElement(
          Vc,
          null,
          r.a.createElement(
            Va,
            { style: { padding: o ? "0.5rem" : ".5rem" } },
            r.a.createElement(
              Ba,
              null,
              !i &&
                r.a.createElement(
                  P,
                  {
                    mr: "1rem",
                    onMouseEnter: function () {
                      u(!0);
                    },
                    onMouseLeave: function () {
                      u(!1);
                    },
                    style: { position: "relative" },
                  },
                  "BNB Price: ",
                  r.a.createElement(Hc, null, b)
                ),
              !t &&
                r.a.createElement(
                  P,
                  { mr: "1rem" },
                  "Transactions (24H): ",
                  r.a.createElement(Hc, null, Ht(m))
                ),
              !n &&
                r.a.createElement(
                  P,
                  { mr: "1rem" },
                  "Pairs: ",
                  r.a.createElement(Hc, null, Ht(p))
                ),
              !e &&
                r.a.createElement(
                  P,
                  { mr: "1rem" },
                  "Fees (24H): ",
                  r.a.createElement(Hc, null, y),
                  "\xa0"
                )
            )
          )
        );
      }
      function Nc() {
        var e = Object(c.a)([
          "\n      border-radius: 8px;\n      @media only screen and (min-width: 40em) {\n        border-radius: 10px;\n      }\n    ",
        ]);
        return (
          (Nc = function () {
            return e;
          }),
          e
        );
      }
      function Wc() {
        var e = Object(c.a)([
          "\n      @media only screen and (min-width: 40em) {\n        &:first-of-type {\n          border-radius: 20px 20px 0 0;\n        }\n        &:last-of-type {\n          border-radius: 0 0 20px 20px;\n        }\n      }\n    ",
        ]);
        return (
          (Wc = function () {
            return e;
          }),
          e
        );
      }
      function Kc() {
        var e = Object(c.a)([
          "\n  position: relative;\n  background-color: ",
          ";\n  padding: 1.25rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  border-radius: 8px;\n  border: 1px solid ",
          ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05); /* box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.01), 0px 16px 24px rgba(0, 0, 0, 0.01), 0px 24px 32px rgba(0, 0, 0, 0.01); */\n  :hover {\n    cursor: ",
          ";\n    border: ",
          ";\n  }\n\n  ",
          "\n\n  ",
          "\n\n  ",
          "\n\n  ",
          ";\n\n  ",
          "\n",
        ]);
        return (
          (Kc = function () {
            return e;
          }),
          e
        );
      }
      function Yc() {
        var e = Object(c.a)([
          "\n  :after {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 10px;\n  }\n\n  @media only screen and (min-width: 40em) {\n    :after {\n      content: unset;\n    }\n  }\n",
        ]);
        return (
          (Yc = function () {
            return e;
          }),
          e
        );
      }
      var Qc = Object(u.css)(Yc()),
        Gc = Object(u.default)(S.a)(
          Kc(),
          function (e) {
            return e.theme.advancedBG;
          },
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.hover && "pointer";
          },
          function (e) {
            var t = e.hover,
              n = e.theme;
            return t && "1px solid" + n.bg5;
          },
          function (e) {
            return (
              e.background &&
              "background-color: ".concat(e.theme.advancedBG, ";")
            );
          },
          function (e) {
            return e.area ? "grid-area: ".concat(e.area, ";") : null;
          },
          function (e) {
            return e.grouped && Object(u.css)(Wc());
          },
          function (e) {
            return e.rounded && Object(u.css)(Nc());
          },
          function (e) {
            return !e.last && Qc;
          }
        );
      function Jc() {
        var e = Object(c.a)([
          "\n  display: grid;\n  width: 100%;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 6px;\n  align-items: start;\n  justify-content: space-between;\n",
        ]);
        return (
          (Jc = function () {
            return e;
          }),
          e
        );
      }
      function Xc() {
        var e = Object(c.a)([
          "\n  height: 40px;\n  width: 100%;\n  font-size: 1.25rem;\n  font-weight: 600;\n\n  @media screen and (max-width: 640px) {\n    font-size: 1rem;\n  }\n",
        ]);
        return (
          (Xc = function () {
            return e;
          }),
          e
        );
      }
      var $c = Object(u.default)(Ha)(Xc()),
        Zc = u.default.div(Jc());
      var el = Object(Pa.h)(function () {
        var e = An(),
          t = fa(),
          n = (function () {
            var e = zn(),
              t = Object(l.a)(e, 2),
              n = t[0],
              r = t[1].updateTransactions,
              i = null === n || void 0 === n ? void 0 : n.transactions;
            return (
              Object(a.useEffect)(
                function () {
                  function e() {
                    return (e = Object(B.a)(
                      H.a.mark(function e() {
                        var t;
                        return H.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (i) {
                                  e.next = 5;
                                  break;
                                }
                                return (e.next = 3), Kn();
                              case 3:
                                (t = e.sent), r(t);
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )).apply(this, arguments);
                  }
                  !(function () {
                    e.apply(this, arguments);
                  })();
                },
                [r, i]
              ),
              i
            );
          })(),
          i = $n(),
          o = i.totalLiquidityUSD,
          c = i.oneDayVolumeUSD,
          u = i.volumeChangeUSD,
          s = i.liquidityChangeUSD,
          d = Object(Xa.a)("(max-width: 800px)");
        return (
          Object(a.useEffect)(function () {
            document
              .querySelector("body")
              .scrollTo({ behavior: "smooth", top: 0 });
          }, []),
          r.a.createElement(
            Pr,
            null,
            r.a.createElement(z, {
              backgroundColor: Object(lr.d)(0.8, "#4FD8DE"),
            }),
            r.a.createElement(
              Ir,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  Ga,
                  { gap: "24px", style: { paddingBottom: d ? "0" : "24px" } },
                  r.a.createElement(
                    _,
                    null,
                    d ? "Analytics" : "VeneraSwap Analytics"
                  ),
                  r.a.createElement(Rc, null),
                  r.a.createElement(Bc, null)
                ),
                d &&
                  r.a.createElement(
                    S.a,
                    { mb: 20 },
                    r.a.createElement(
                      Gc,
                      null,
                      r.a.createElement(
                        S.a,
                        null,
                        r.a.createElement(
                          Ga,
                          { gap: "36px" },
                          r.a.createElement(
                            Ga,
                            { gap: "20px" },
                            r.a.createElement(
                              Va,
                              null,
                              r.a.createElement(P, null, "Volume (24hrs)"),
                              r.a.createElement("div", null)
                            ),
                            r.a.createElement(
                              Va,
                              { align: "flex-end" },
                              r.a.createElement(
                                P,
                                {
                                  fontSize: "1.5rem",
                                  lineHeight: 1,
                                  fontWeight: 600,
                                },
                                on(c, !0)
                              ),
                              r.a.createElement(P, { fontSize: 12 }, cn(u))
                            )
                          ),
                          r.a.createElement(
                            Ga,
                            { gap: "20px" },
                            r.a.createElement(
                              Va,
                              null,
                              r.a.createElement(P, null, "Total Liquidity"),
                              r.a.createElement("div", null)
                            ),
                            r.a.createElement(
                              Va,
                              { align: "flex-end" },
                              r.a.createElement(
                                P,
                                {
                                  fontSize: "1.5rem",
                                  lineHeight: 1,
                                  fontWeight: 600,
                                },
                                on(o, !0)
                              ),
                              r.a.createElement(P, { fontSize: 12 }, cn(s))
                            )
                          )
                        )
                      )
                    )
                  ),
                !d &&
                  r.a.createElement(
                    Zc,
                    null,
                    r.a.createElement(
                      Gc,
                      { style: { height: "100%", minHeight: "300px" } },
                      r.a.createElement(vc, { display: "liquidity" })
                    ),
                    r.a.createElement(
                      Gc,
                      { style: { height: "100%" } },
                      r.a.createElement(vc, { display: "volume" })
                    )
                  ),
                d &&
                  r.a.createElement(
                    Ga,
                    { style: { marginTop: "6px" }, gap: "24px" },
                    r.a.createElement(
                      Gc,
                      { style: { height: "100%", minHeight: "300px" } },
                      r.a.createElement(vc, { display: "liquidity" })
                    )
                  ),
                r.a.createElement(
                  $c,
                  {
                    gap: "10px",
                    style: { marginTop: "2rem", marginBottom: ".5rem" },
                  },
                  r.a.createElement(
                    Va,
                    null,
                    r.a.createElement(
                      P,
                      { fontSize: "1.125rem" },
                      "Top Tokens"
                    ),
                    r.a.createElement(pr, { to: "/tokens" }, "See All")
                  )
                ),
                r.a.createElement(
                  Gc,
                  { style: { marginTop: "6px", padding: "1.125rem 0 " } },
                  r.a.createElement(po, { tokens: t })
                ),
                r.a.createElement(
                  $c,
                  {
                    gap: "10px",
                    style: { marginTop: "2rem", marginBottom: ".5rem" },
                  },
                  r.a.createElement(
                    Va,
                    null,
                    r.a.createElement(P, { fontSize: "1rem" }, "Top Pairs"),
                    r.a.createElement(pr, { to: "/pairs" }, "See All")
                  )
                ),
                r.a.createElement(
                  Gc,
                  { style: { marginTop: "6px", padding: "1.125rem 0 " } },
                  r.a.createElement(Wi, { pairs: e })
                ),
                r.a.createElement(
                  "span",
                  null,
                  r.a.createElement(
                    P,
                    { fontSize: "1.125rem", style: { marginTop: "2rem" } },
                    "Transactions"
                  )
                ),
                r.a.createElement(
                  Gc,
                  { style: { margin: "1rem 0" } },
                  r.a.createElement(Vo, { transactions: n })
                )
              )
            )
          )
        );
      });
      n(107);
      function tl() {
        var e = Object(c.a)([
          "\n  position: absolute;\n  right: 10px;\n  color: ",
          "\n  border-radius: 3px;\n  height: 16px;\n  width: 16px;\n  padding: 0px;\n  bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n",
        ]);
        return (
          (tl = function () {
            return e;
          }),
          e
        );
      }
      var nl = u.default.div(tl(), function (e) {
          return e.theme.text1;
        }),
        al = function (e) {
          var t = e.data,
            n = e.width,
            i = e.height,
            o = void 0 === i ? 300 : i,
            c = e.base,
            u = e.margin,
            s = void 0 === u || u,
            d = e.valueFormatter,
            m =
              void 0 === d
                ? function (e) {
                    return on(e, !0);
                  }
                : d,
            p = Object(a.useRef)(),
            f =
              null === t || void 0 === t
                ? void 0
                : t.map(function (e) {
                    return {
                      time: parseFloat(e.timestamp),
                      open: parseFloat(e.open),
                      low: parseFloat(e.open),
                      close: parseFloat(e.close),
                      high: parseFloat(e.close),
                    };
                  });
          f &&
            f.length > 0 &&
            f.push({
              time: ct.a.unix(Z).unix(),
              open: parseFloat(f[f.length - 1].close),
              close: parseFloat(c),
              low: Math.min(parseFloat(c), parseFloat(f[f.length - 1].close)),
              high: Math.max(parseFloat(c), parseFloat(f[f.length - 1].close)),
            });
          var v = Object(a.useState)(!1),
            b = Object(l.a)(v, 2),
            y = b[0],
            h = b[1],
            E = Object(No.a)(t),
            g = x(),
            k = Object(l.a)(g, 1)[0],
            O = k ? "white" : "black",
            j = Object(No.a)(k);
          return (
            Object(a.useEffect)(
              function () {
                if (y && j !== k) {
                  var e = document.getElementById("tooltip-id");
                  document.getElementById("test-id").removeChild(e),
                    y.resize(0, 0),
                    h();
                }
              },
              [y, k, j]
            ),
            Object(a.useEffect)(
              function () {
                if (t !== E && y) {
                  var e = document.getElementById("tooltip-id");
                  document.getElementById("test-id").removeChild(e),
                    y.resize(0, 0),
                    h();
                }
              },
              [y, t, E]
            ),
            Object(a.useEffect)(
              function () {
                if (!y) {
                  var e = function () {
                      r.innerHTML = c
                        ? '<div style="font-size: 22px; margin: 4px 0px; color: '.concat(
                            O,
                            '">'
                          ) +
                          m(c) +
                          "</div>"
                        : "";
                    },
                    t = Object(Bo.b)(p.current, {
                      width: n,
                      height: o,
                      layout: { backgroundColor: "transparent", textColor: O },
                      grid: {
                        vertLines: { color: "rgba(197, 203, 206, 0.5)" },
                        horzLines: { color: "rgba(197, 203, 206, 0.5)" },
                      },
                      crosshair: { mode: Bo.a.Normal },
                      rightPriceScale: {
                        borderColor: "rgba(197, 203, 206, 0.8)",
                        visible: !0,
                      },
                      timeScale: { borderColor: "rgba(197, 203, 206, 0.8)" },
                      localization: {
                        priceFormatter: function (e) {
                          return on(e);
                        },
                      },
                    }),
                    a = t.addCandlestickSeries({
                      upColor: "green",
                      downColor: "red",
                      borderDownColor: "red",
                      borderUpColor: "green",
                      wickDownColor: "red",
                      wickUpColor: "green",
                    });
                  a.setData(f);
                  var r = document.createElement("div");
                  r.setAttribute("id", "tooltip-id"),
                    (r.className = "three-line-legend"),
                    p.current.appendChild(r),
                    (r.style.display = "block"),
                    (r.style.left = (s ? 116 : 10) + "px"),
                    (r.style.top = "50px"),
                    (r.style.backgroundColor = "transparent"),
                    e(),
                    t.subscribeCrosshairMove(function (t) {
                      if (
                        void 0 === t ||
                        void 0 === t.time ||
                        t.point.x < 0 ||
                        t.point.x > n ||
                        t.point.y < 0 ||
                        t.point.y > o
                      )
                        e();
                      else {
                        var i = t.seriesPrices.get(a).close,
                          c = ct.a.unix(t.time).format("MM/DD h:mm A");
                        r.innerHTML =
                          '<div style="font-size: 22px; margin: 4px 0px; color: '.concat(
                            O,
                            '">'
                          ) +
                          m(i) +
                          '<span style="font-size: 12px; margin: 4px 6px; color: '.concat(
                            O,
                            '">'
                          ) +
                          c +
                          " UTC</span></div>";
                      }
                    }),
                    t.timeScale().fitContent(),
                    h(t);
                }
              },
              [y, f, n, o, m, c, s, O]
            ),
            Object(a.useEffect)(
              function () {
                n &&
                  (y && y.resize(n, o), y && y.timeScale().scrollToPosition(0));
              },
              [y, o, n]
            ),
            r.a.createElement(
              "div",
              null,
              r.a.createElement("div", { ref: p, id: "test-id" }),
              r.a.createElement(
                nl,
                null,
                r.a.createElement(Wo.a, {
                  onClick: function () {
                    y && y.timeScale().fitContent();
                  },
                })
              )
            )
          );
        },
        rl = n(996);
      function il() {
        var e = Object(c.a)(["\n  border-radius: 2px;\n"]);
        return (
          (il = function () {
            return e;
          }),
          e
        );
      }
      function ol() {
        var e = Object(c.a)([
          "\n  height: 100%;\n  min-height: 300px;\n\n  @media screen and (max-width: 600px) {\n    min-height: 200px;\n  }\n",
        ]);
        return (
          (ol = function () {
            return e;
          }),
          e
        );
      }
      var cl = u.default.div(ol()),
        ll = Object(u.default)(dc)(il()),
        ul = {
          VOLUME: "Volume",
          LIQUIDITY: "Liquidity",
          PRICE: "Price",
          LINE_PRICE: "Price (Line)",
        },
        sl = "DAY",
        dl = "HOUR",
        ml = "LINE",
        pl = function (e) {
          var t,
            n,
            i,
            o = e.address,
            c = e.color,
            u = e.base,
            s = Object(a.useState)(ul.PRICE),
            d = Object(l.a)(s, 2),
            m = d[0],
            p = d[1],
            f = Object(a.useState)(dl),
            v = Object(l.a)(f, 2),
            b = v[0],
            y = v[1],
            h = x(),
            E = Object(l.a)(h, 1)[0] ? "white" : "black",
            g = Object(No.a)(o);
          Object(a.useEffect)(
            function () {
              o !== g && g && p(ul.LIQUIDITY);
            },
            [o, g]
          );
          var k = (function (e) {
              var t,
                n = na(),
                r = Object(l.a)(n, 2),
                i = r[0],
                o = r[1].updateChartData,
                c =
                  null === i || void 0 === i
                    ? void 0
                    : null === (t = i[e]) || void 0 === t
                    ? void 0
                    : t.chartData;
              return (
                Object(a.useEffect)(
                  function () {
                    function t() {
                      return (t = Object(B.a)(
                        H.a.mark(function t() {
                          var n;
                          return H.a.wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (c) {
                                    t.next = 5;
                                    break;
                                  }
                                  return (t.next = 3), sa(e);
                                case 3:
                                  (n = t.sent), o(e, n);
                                case 5:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      )).apply(this, arguments);
                    }
                    !(function () {
                      t.apply(this, arguments);
                    })();
                  },
                  [c, e, o]
                ),
                c
              );
            })(o),
            O = Object(a.useState)(ee.WEEK),
            j = Object(l.a)(O, 2),
            S = j[0],
            w = j[1],
            D = Object(No.a)(S),
            T = pa(o, ee.WEEK, 3600),
            U = pa(o, ee.MONTH, 3600),
            C = pa(o, ee.ALL_TIME, 3600),
            F = pa(o, ee.WEEK, 86400),
            A = pa(o, ee.MONTH, 86400),
            P = pa(o, ee.ALL_TIME, 86400),
            I =
              S === ee.MONTH
                ? b === sl
                  ? A
                  : U
                : S === ee.WEEK
                ? b === sl
                  ? F
                  : T
                : b === sl
                ? P
                : C;
          Object(a.useEffect)(
            function () {
              S === ee.WEEK && D && D !== ee.WEEK && y(dl);
            },
            [D, S]
          ),
            Object(a.useEffect)(
              function () {
                S === ee.MONTH && D && D !== ee.MONTH && y(sl),
                  S === ee.ALL_TIME && D && D !== ee.ALL_TIME && y(sl);
              },
              [D, S]
            );
          var L = Object(Xa.a)("(max-width: 1080px)"),
            q = Object(Xa.a)("(max-width: 600px)"),
            _ = Rt(S),
            R = [
              function (e) {
                return e > _ ? e : _;
              },
              "dataMax",
            ],
            z = L ? 1.875 : q ? 60 / 42 : 60 / 22;
          k =
            null === (t = k) || void 0 === t
              ? void 0
              : t.filter(function (e) {
                  return e.date >= _;
                });
          var M = Object(a.useRef)(),
            V = "object" === typeof window,
            N = Object(a.useState)(
              null === M || void 0 === M
                ? void 0
                : null === (n = M.current) || void 0 === n
                ? void 0
                : null === (i = n.container) || void 0 === i
                ? void 0
                : i.clientWidth
            ),
            W = Object(l.a)(N, 2),
            K = W[0],
            Y = W[1];
          return (
            Object(a.useEffect)(
              function () {
                if (!V) return !1;
                function e() {
                  var e, t, n;
                  Y(
                    null !==
                      (e =
                        null === M || void 0 === M
                          ? void 0
                          : null === (t = M.current) || void 0 === t
                          ? void 0
                          : null === (n = t.container) || void 0 === n
                          ? void 0
                          : n.clientWidth) && void 0 !== e
                      ? e
                      : K
                  );
                }
                return (
                  window.addEventListener("resize", e),
                  function () {
                    return window.removeEventListener("resize", e);
                  }
                );
              },
              [V, K]
            ),
            r.a.createElement(
              cl,
              null,
              q
                ? r.a.createElement(
                    Va,
                    { mb: 40 },
                    r.a.createElement(go, {
                      options: ul,
                      active: m,
                      setActive: p,
                      color: c,
                    }),
                    r.a.createElement(go, {
                      options: ee,
                      active: S,
                      setActive: w,
                      color: c,
                    })
                  )
                : r.a.createElement(
                    Va,
                    {
                      mb:
                        m === ul.LIQUIDITY ||
                        m === ul.VOLUME ||
                        (m === ul.PRICE && b === ml)
                          ? 40
                          : 0,
                      align: "flex-start",
                    },
                    r.a.createElement(
                      Ga,
                      { gap: "8px" },
                      r.a.createElement(
                        Ba,
                        null,
                        r.a.createElement(
                          dc,
                          {
                            active: m === ul.LIQUIDITY,
                            onClick: function () {
                              return p(ul.LIQUIDITY);
                            },
                            style: { marginRight: "6px" },
                          },
                          "Liquidity"
                        ),
                        r.a.createElement(
                          dc,
                          {
                            active: m === ul.VOLUME,
                            onClick: function () {
                              return p(ul.VOLUME);
                            },
                            style: { marginRight: "6px" },
                          },
                          "Volume"
                        ),
                        r.a.createElement(
                          dc,
                          {
                            active: m === ul.PRICE,
                            onClick: function () {
                              p(ul.PRICE);
                            },
                          },
                          "Price"
                        )
                      ),
                      m === ul.PRICE &&
                        r.a.createElement(
                          Ha,
                          { gap: "4px" },
                          r.a.createElement(
                            ll,
                            {
                              active: b === sl,
                              onClick: function () {
                                w(ee.MONTH), y(sl);
                              },
                            },
                            "D"
                          ),
                          r.a.createElement(
                            ll,
                            {
                              active: b === dl,
                              onClick: function () {
                                return y(dl);
                              },
                            },
                            "H"
                          ),
                          r.a.createElement(
                            ll,
                            {
                              active: b === ml,
                              onClick: function () {
                                return y(ml);
                              },
                            },
                            r.a.createElement(rl.a, { size: 14 })
                          )
                        )
                    ),
                    r.a.createElement(
                      Ha,
                      { justify: "flex-end", gap: "6px", align: "flex-start" },
                      r.a.createElement(
                        dc,
                        {
                          active: S === ee.WEEK,
                          onClick: function () {
                            return w(ee.WEEK);
                          },
                        },
                        "1W"
                      ),
                      r.a.createElement(
                        dc,
                        {
                          active: S === ee.MONTH,
                          onClick: function () {
                            return w(ee.MONTH);
                          },
                        },
                        "1M"
                      ),
                      r.a.createElement(
                        dc,
                        {
                          active: S === ee.ALL_TIME,
                          onClick: function () {
                            return w(ee.ALL_TIME);
                          },
                        },
                        "All"
                      )
                    )
                  ),
              m === ul.LIQUIDITY &&
                k &&
                r.a.createElement(
                  Ho.h,
                  { aspect: z },
                  r.a.createElement(
                    Ho.b,
                    {
                      margin: { top: 0, right: 10, bottom: 6, left: 0 },
                      barCategoryGap: 1,
                      data: k,
                    },
                    r.a.createElement(
                      "defs",
                      null,
                      r.a.createElement(
                        "linearGradient",
                        { id: "colorUv", x1: "0", y1: "0", x2: "0", y2: "1" },
                        r.a.createElement("stop", {
                          offset: "5%",
                          stopColor: c,
                          stopOpacity: 0.35,
                        }),
                        r.a.createElement("stop", {
                          offset: "95%",
                          stopColor: c,
                          stopOpacity: 0,
                        })
                      )
                    ),
                    r.a.createElement(Ho.j, {
                      tickLine: !1,
                      axisLine: !1,
                      interval: "preserveEnd",
                      tickMargin: 16,
                      minTickGap: 120,
                      tickFormatter: function (e) {
                        return Bt(e);
                      },
                      dataKey: "date",
                      tick: { fill: E },
                      type: "number",
                      domain: ["dataMin", "dataMax"],
                    }),
                    r.a.createElement(Ho.k, {
                      type: "number",
                      orientation: "right",
                      tickFormatter: function (e) {
                        return "$" + nn(e);
                      },
                      axisLine: !1,
                      tickLine: !1,
                      interval: "preserveEnd",
                      minTickGap: 80,
                      yAxisId: 0,
                      tick: { fill: E },
                    }),
                    r.a.createElement(Ho.i, {
                      cursor: !0,
                      formatter: function (e) {
                        return on(e, !0);
                      },
                      labelFormatter: function (e) {
                        return en(e);
                      },
                      labelStyle: { paddingTop: 4 },
                      contentStyle: {
                        padding: "10px 14px",
                        borderRadius: 10,
                        borderColor: c,
                        color: "black",
                      },
                      wrapperStyle: { top: -70, left: -10 },
                    }),
                    r.a.createElement(Ho.a, {
                      key: "other",
                      dataKey: "totalLiquidityUSD",
                      stackId: "2",
                      strokeWidth: 2,
                      dot: !1,
                      type: "monotone",
                      name: "Liquidity",
                      yAxisId: 0,
                      stroke: Object(lr.a)(0.12, c),
                      fill: "url(#colorUv)",
                    })
                  )
                ),
              m === ul.PRICE &&
                (b === ml
                  ? r.a.createElement(
                      Ho.h,
                      { aspect: L ? 1.875 : 3.75 },
                      r.a.createElement(
                        Ho.b,
                        {
                          margin: { top: 0, right: 10, bottom: 6, left: 0 },
                          barCategoryGap: 1,
                          data: k,
                        },
                        r.a.createElement(
                          "defs",
                          null,
                          r.a.createElement(
                            "linearGradient",
                            {
                              id: "colorUv",
                              x1: "0",
                              y1: "0",
                              x2: "0",
                              y2: "1",
                            },
                            r.a.createElement("stop", {
                              offset: "5%",
                              stopColor: c,
                              stopOpacity: 0.35,
                            }),
                            r.a.createElement("stop", {
                              offset: "95%",
                              stopColor: c,
                              stopOpacity: 0,
                            })
                          )
                        ),
                        r.a.createElement(Ho.j, {
                          tickLine: !1,
                          axisLine: !1,
                          interval: "preserveEnd",
                          tickMargin: 16,
                          minTickGap: 120,
                          tickFormatter: function (e) {
                            return Bt(e);
                          },
                          dataKey: "date",
                          tick: { fill: E },
                          type: "number",
                          domain: R,
                        }),
                        r.a.createElement(Ho.k, {
                          type: "number",
                          orientation: "right",
                          tickFormatter: function (e) {
                            return "$" + nn(e);
                          },
                          axisLine: !1,
                          tickLine: !1,
                          interval: "preserveEnd",
                          minTickGap: 80,
                          yAxisId: 0,
                          tick: { fill: E },
                        }),
                        r.a.createElement(Ho.i, {
                          cursor: !0,
                          formatter: function (e) {
                            return on(e, !0);
                          },
                          labelFormatter: function (e) {
                            return en(e);
                          },
                          labelStyle: { paddingTop: 4 },
                          contentStyle: {
                            padding: "10px 14px",
                            borderRadius: 10,
                            borderColor: c,
                            color: "black",
                          },
                          wrapperStyle: { top: -70, left: -10 },
                        }),
                        r.a.createElement(Ho.a, {
                          key: "other",
                          dataKey: "priceUSD",
                          stackId: "2",
                          strokeWidth: 2,
                          dot: !1,
                          type: "monotone",
                          name: "Price",
                          yAxisId: 0,
                          stroke: Object(lr.a)(0.12, c),
                          fill: "url(#colorUv)",
                        })
                      )
                    )
                  : I
                  ? r.a.createElement(
                      Ho.h,
                      { aspect: z, ref: M },
                      r.a.createElement(al, { data: I, width: K, base: u })
                    )
                  : r.a.createElement(or, null)),
              m === ul.VOLUME &&
                r.a.createElement(
                  Ho.h,
                  { aspect: z },
                  r.a.createElement(
                    Ho.d,
                    {
                      margin: { top: 0, right: 10, bottom: 6, left: 10 },
                      barCategoryGap: 1,
                      data: k,
                    },
                    r.a.createElement(Ho.j, {
                      tickLine: !1,
                      axisLine: !1,
                      interval: "preserveEnd",
                      minTickGap: 80,
                      tickMargin: 14,
                      tickFormatter: function (e) {
                        return Bt(e);
                      },
                      dataKey: "date",
                      tick: { fill: E },
                      type: "number",
                      domain: ["dataMin", "dataMax"],
                    }),
                    r.a.createElement(Ho.k, {
                      type: "number",
                      axisLine: !1,
                      tickMargin: 16,
                      tickFormatter: function (e) {
                        return "$" + nn(e);
                      },
                      tickLine: !1,
                      orientation: "right",
                      interval: "preserveEnd",
                      minTickGap: 80,
                      yAxisId: 0,
                      tick: { fill: E },
                    }),
                    r.a.createElement(Ho.i, {
                      cursor: { fill: c, opacity: 0.1 },
                      formatter: function (e) {
                        return on(e, !0);
                      },
                      labelFormatter: function (e) {
                        return en(e);
                      },
                      labelStyle: { paddingTop: 4 },
                      contentStyle: {
                        padding: "10px 14px",
                        borderRadius: 10,
                        borderColor: c,
                        color: "black",
                      },
                      wrapperStyle: { top: -70, left: -10 },
                    }),
                    r.a.createElement(Ho.c, {
                      type: "monotone",
                      name: "Volume",
                      dataKey: "dailyVolumeUSD",
                      fill: c,
                      opacity: "0.4",
                      yAxisId: 0,
                      stroke: c,
                    })
                  )
                )
            )
          );
        },
        fl = n(997),
        vl = n(998);
      function bl() {
        var e = Object(c.a)([
          "\n  margin-left: 0.25rem;\n  ",
          ";\n  align-items: center;\n  color: black;\n",
        ]);
        return (
          (bl = function () {
            return e;
          }),
          e
        );
      }
      function yl() {
        var e = Object(c.a)([
          "\n  color: #aeaeae;\n  flex-shrink: 0;\n  margin-right: 1rem;\n  margin-left: 0.5rem;\n  text-decoration: none;\n  :hover,\n  :active,\n  :focus {\n    text-decoration: none;\n    opacity: 0.8;\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (yl = function () {
            return e;
          }),
          e
        );
      }
      var hl = u.default.div(yl()),
        El = u.default.span(bl(), function (e) {
          return e.theme.flexRowNoWrap;
        });
      function xl(e) {
        var t = e.toCopy,
          n = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 500,
              t = Object(a.useState)(!1),
              n = Object(l.a)(t, 2),
              r = n[0],
              i = n[1],
              o = Object(a.useCallback)(function (e) {
                var t = oi()(e);
                i(t);
              }, []);
            return (
              Object(a.useEffect)(
                function () {
                  if (r) {
                    var t = setTimeout(function () {
                      i(!1);
                    }, e);
                    return function () {
                      clearTimeout(t);
                    };
                  }
                },
                [r, i, e]
              ),
              [r, o]
            );
          })(),
          i = Object(l.a)(n, 2),
          o = i[0],
          c = i[1];
        return r.a.createElement(
          hl,
          {
            onClick: function () {
              return c(t);
            },
          },
          o
            ? r.a.createElement(
                El,
                null,
                r.a.createElement(
                  Fr,
                  null,
                  r.a.createElement(fl.a, { size: "14" })
                )
              )
            : r.a.createElement(
                El,
                null,
                r.a.createElement(
                  Fr,
                  null,
                  r.a.createElement(vl.a, { size: "14" })
                )
              )
        );
      }
      var gl = n(999);
      function kl() {
        var e = Object(c.a)([
          "\n  min-height: 20px;\n  min-width: 20px;\n  stroke: red;\n",
        ]);
        return (
          (kl = function () {
            return e;
          }),
          e
        );
      }
      function Ol() {
        var e = Object(c.a)([
          "\n  border-radius: 20px;\n  border: 1px solid #f82d3a;\n  background: rgba(248, 45, 58, 0.05);\n  padding: 1rem;\n  color: #f82d3a;\n  display: ",
          ";\n  margin: 0 2rem 2rem 2rem;\n  position: relative;\n\n  @media screen and (max-width: 800px) {\n    width: 80% !important;\n    margin-left: 5%;\n  }\n",
        ]);
        return (
          (Ol = function () {
            return e;
          }),
          e
        );
      }
      var jl = u.default.div(Ol(), function (e) {
          return !e.show && "none";
        }),
        Sl = Object(u.default)(gl.a)(kl());
      function wl(e) {
        var t = e.type,
          n = e.show,
          a = e.setShow,
          i = e.address,
          o = Object(Xa.a)("(max-width: 800px)"),
          c = o
            ? r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  S.d,
                  { fontWeight: 500, lineHeight: "145.23%", mt: "10px" },
                  "Anyone can create and name any BEP20 token on BSC, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token."
                ),
                r.a.createElement(
                  S.d,
                  { fontWeight: 500, lineHeight: "145.23%", mt: "10px" },
                  "Similar to BscScan, this site automatically tracks analytics for all BEP20 tokens independent of token integrity. Please do your own research before interacting with any BEP20 token."
                )
              )
            : r.a.createElement(
                S.d,
                { fontWeight: 500, lineHeight: "145.23%", mt: "10px" },
                "Anyone can create and name any BEP20 token on BSC, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token. Similar to BscScan, this site automatically tracks analytics for all BEP20 tokens independent of token integrity. Please do your own research before interacting with any BEP20 token."
              );
        return r.a.createElement(
          jl,
          { show: n },
          r.a.createElement(
            Ga,
            { gap: "4px" },
            r.a.createElement(
              Ba,
              null,
              r.a.createElement(Sl, null),
              r.a.createElement(
                S.d,
                { fontWeight: 600, lineHeight: "145.23%", ml: "10px" },
                "Token Safety Alert"
              )
            ),
            c,
            o
              ? r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    Cr,
                    { style: { marginTop: "10px" } },
                    r.a.createElement(
                      mr,
                      {
                        fontWeight: 500,
                        lineHeight: "145.23%",
                        color: "#2172E5",
                        href: "https://bscscan.com/address/" + i,
                        target: "_blank",
                      },
                      "View ",
                      "token" === t ? "token" : "pair",
                      " contract on BscScan"
                    )
                  ),
                  r.a.createElement(
                    Va,
                    { style: { marginTop: "20px" } },
                    r.a.createElement("div", null),
                    r.a.createElement(
                      uc,
                      {
                        color: "#f82d3a",
                        style: { minWidth: "140px" },
                        onClick: function () {
                          return a(!1);
                        },
                      },
                      "I understand"
                    )
                  )
                )
              : r.a.createElement(
                  Va,
                  { style: { marginTop: "10px" } },
                  r.a.createElement(
                    Cr,
                    null,
                    r.a.createElement(
                      mr,
                      {
                        fontWeight: 500,
                        lineHeight: "145.23%",
                        color: "#2172E5",
                        href: "https://bscscan.com/address/" + i,
                        target: "_blank",
                      },
                      "View ",
                      "token" === t ? "token" : "pair",
                      " contract on BscScan"
                    )
                  ),
                  r.a.createElement(
                    uc,
                    {
                      color: "#f82d3a",
                      style: { minWidth: "140px" },
                      onClick: function () {
                        return a(!1);
                      },
                    },
                    "I understand"
                  )
                )
          )
        );
      }
      var Dl = n(1e3),
        Tl = n(1001);
      function Ul() {
        var e = Object(c.a)(["\n  opacity: ", ";\n  pointer-events: ", ";\n"]);
        return (
          (Ul = function () {
            return e;
          }),
          e
        );
      }
      function Cl() {
        var e = Object(c.a)([
          "\n  display: inline-grid;\n  width: 100%;\n  grid-template-columns: auto auto auto 1fr;\n  column-gap: 30px;\n  align-items: start;\n\n  &:last-child {\n    align-items: center;\n    justify-items: end;\n  }\n  @media screen and (max-width: 1024px) {\n    grid-template-columns: 1fr;\n    align-items: stretch;\n    > * {\n      grid-column: 1 / 4;\n      margin-bottom: 1rem;\n    }\n\n    &:last-child {\n      align-items: start;\n      justify-items: start;\n    }\n  }\n",
        ]);
        return (
          (Cl = function () {
            return e;
          }),
          e
        );
      }
      function Fl() {
        var e = Object(c.a)([
          "\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: max-content;\n  gap: 6px;\n  display: inline-grid;\n  width: 100%;\n  align-items: start;\n  @media screen and (max-width: 1024px) {\n    grid-template-columns: 1fr;\n    align-items: stretch;\n    > * {\n      grid-column: 1 / 4;\n    }\n\n    > * {\n      &:first-child {\n        width: 100%;\n      }\n    }\n  }\n",
        ]);
        return (
          (Fl = function () {
            return e;
          }),
          e
        );
      }
      function Al() {
        var e = Object(c.a)(["\n  width: 100%;\n"]);
        return (
          (Al = function () {
            return e;
          }),
          e
        );
      }
      var Pl = u.default.div(Al()),
        Il = u.default.div(Fl()),
        Ll = u.default.div(Cl()),
        ql = u.default.div(
          Ul(),
          function (e) {
            return e.disabled && "0.4";
          },
          function (e) {
            return e.disabled && "none";
          }
        );
      var _l = Object(Pa.h)(function (e) {
        var t = e.address,
          n = e.history,
          i = ma(t),
          o = i.id,
          c = i.name,
          u = i.symbol,
          s = i.priceUSD,
          p = i.oneDayVolumeUSD,
          f = i.totalLiquidityUSD,
          v = i.volumeChangeUSD,
          b = i.oneDayVolumeUT,
          y = i.volumeChangeUT,
          h = i.priceChangeUSD,
          E = i.liquidityChangeUSD,
          x = i.oneDayTxns,
          k = i.txnChange;
        Object(a.useEffect)(function () {
          document.querySelector("body").scrollTo(0, 0);
        }, []);
        var O = ci(o, u),
          w = (function (e) {
            var t = gn(),
              n = Object(l.a)(t, 1)[0],
              r = ea(),
              i = Object(l.a)(r, 1)[0],
              o = Object(a.useState)(!1),
              c = Object(l.a)(o, 2),
              u = c[0],
              s = c[1],
              p = Object(a.useState)([]),
              f = Object(l.a)(p, 2),
              v = f[0],
              b = f[1];
            return (
              Object(a.useEffect)(
                function () {
                  e && (s(!1), b());
                },
                [e]
              ),
              Object(a.useEffect)(
                function () {
                  function t() {
                    return (t = Object(B.a)(
                      H.a.mark(function t() {
                        var a, r, o;
                        return H.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (a = []),
                                  (r = []),
                                  e.map(
                                    (function () {
                                      var e = Object(B.a)(
                                        H.a.mark(function e(t) {
                                          var i;
                                          return H.a.wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  (i =
                                                    null === n || void 0 === n
                                                      ? void 0
                                                      : n[t.id])
                                                    ? a.push(i)
                                                    : r.push(t.id);
                                                case 2:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  ),
                                  (t.next = 5),
                                  jn(
                                    r.map(function (e) {
                                      return e;
                                    }),
                                    i
                                  )
                                );
                              case 5:
                                (o = t.sent), b(a.concat(o));
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    )).apply(this, arguments);
                  }
                  i &&
                    e &&
                    e.length > 0 &&
                    !v &&
                    !u &&
                    (s(!0),
                    (function () {
                      t.apply(this, arguments);
                    })());
                },
                [i, n, e, u, v]
              ),
              v &&
                v.reduce(function (e, t) {
                  return Object(m.a)(
                    {},
                    e,
                    Object(d.a)(
                      {},
                      null === t || void 0 === t ? void 0 : t.id,
                      t
                    )
                  );
                }, {})
            );
          })(
            (function (e) {
              var t,
                n = na(),
                r = Object(l.a)(n, 2),
                i = r[0],
                o = r[1].updateAllPairs,
                c =
                  null === i || void 0 === i
                    ? void 0
                    : null === (t = i[e]) || void 0 === t
                    ? void 0
                    : t.TOKEN_PAIRS_KEY;
              return (
                Object(a.useEffect)(
                  function () {
                    function t() {
                      return (t = Object(B.a)(
                        H.a.mark(function t() {
                          var n;
                          return H.a.wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), la(e);
                                case 2:
                                  (n = t.sent), o(e, n);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      )).apply(this, arguments);
                    }
                    !c &&
                      tn(e) &&
                      (function () {
                        t.apply(this, arguments);
                      })();
                  },
                  [e, c, o]
                ),
                c || []
              );
            })(t)
          ),
          D = (function (e) {
            var t,
              n = na(),
              r = Object(l.a)(n, 2),
              i = r[0],
              o = r[1].updateTokenTxns,
              c =
                null === i || void 0 === i
                  ? void 0
                  : null === (t = i[e]) || void 0 === t
                  ? void 0
                  : t.txns,
              u =
                i[e] &&
                i[e].TOKEN_PAIRS_KEY &&
                i[e].TOKEN_PAIRS_KEY.map(function (e) {
                  return e.id;
                });
            return (
              Object(a.useEffect)(
                function () {
                  function t() {
                    return (t = Object(B.a)(
                      H.a.mark(function t() {
                        var n;
                        return H.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (c || !u) {
                                  t.next = 5;
                                  break;
                                }
                                return (t.next = 3), ca(u);
                              case 3:
                                (n = t.sent), o(e, n);
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    )).apply(this, arguments);
                  }
                  !(function () {
                    t.apply(this, arguments);
                  })();
                },
                [c, e, o, u]
              ),
              c || []
            );
          })(t),
          T = s ? on(s, !0) : "",
          U = h ? cn(h) : "",
          C = p || 0 === p ? on(0 === p ? b : p, !0) : 0 === p ? "$0" : "-",
          F = Object(a.useState)(!1),
          A = Object(l.a)(F, 2),
          L = A[0],
          q = A[1];
        Object(a.useEffect)(
          function () {
            q(0 === p);
          },
          [p]
        );
        var _ = cn(L ? y : v),
          R = f ? on(f, !0) : 0 === f ? "$0" : "-",
          M = cn(E),
          V = cn(k),
          N = Object(Xa.a)("(max-width: 1080px)"),
          W = Object(Xa.a)("(max-width: 800px)"),
          K = Object(Xa.a)("(max-width: 600px)"),
          Y = Object(Xa.a)("(max-width: 500px)"),
          Q = N ? 10 : 16,
          G =
            (null === u || void 0 === u ? void 0 : u.length) > Q
              ? u.slice(0, Q) + "..."
              : u,
          J = g(n.location.pathname),
          X = Object(l.a)(J, 2),
          $ = X[0],
          Z = X[1],
          ee = j(),
          te = Object(l.a)(ee, 2),
          ne = te[0],
          ae = te[1],
          re = Tt();
        return (
          Object(a.useEffect)(function () {
            window.scrollTo({ behavior: "smooth", top: 0 });
          }, []),
          r.a.createElement(
            Pr,
            null,
            r.a.createElement(z, { backgroundColor: Object(lr.d)(0.6, O) }),
            r.a.createElement(wl, {
              type: "token",
              show: !$ && re && !re.includes(t),
              setShow: Z,
              address: t,
            }),
            r.a.createElement(
              Ir,
              null,
              r.a.createElement(
                Va,
                { style: { flexWrap: "wrap", alingItems: "start" } },
                r.a.createElement(
                  Ha,
                  { align: "flex-end", style: { width: "fit-content" } },
                  r.a.createElement(
                    I,
                    null,
                    r.a.createElement(fr, { to: "/tokens" }, "Tokens "),
                    "\u2192 ",
                    u,
                    "  "
                  ),
                  r.a.createElement(
                    mr,
                    {
                      style: { width: "fit-content" },
                      color: O,
                      external: !0,
                      href: "https://bscscan.com/address/" + t,
                    },
                    r.a.createElement(
                      S.d,
                      {
                        style: { marginLeft: ".15rem" },
                        fontSize: "14px",
                        fontWeight: 400,
                      },
                      "(",
                      t.slice(0, 8) + "..." + t.slice(36, 42),
                      ")"
                    )
                  )
                ),
                !K && r.a.createElement(Rc, { small: !0 })
              ),
              r.a.createElement(
                ql,
                { disabled: !$ && re && !re.includes(t) },
                r.a.createElement(
                  Pl,
                  { style: { marginTop: N ? "0" : "1rem" } },
                  r.a.createElement(
                    Va,
                    {
                      style: {
                        flexWrap: "wrap",
                        marginBottom: "2rem",
                        alignItems: "flex-start",
                      },
                    },
                    r.a.createElement(
                      Ba,
                      { style: { flexWrap: "wrap" } },
                      r.a.createElement(
                        Ba,
                        { style: { alignItems: "baseline" } },
                        r.a.createElement(Qr, {
                          address: t,
                          size: "32px",
                          style: { alignSelf: "center" },
                        }),
                        r.a.createElement(
                          P,
                          {
                            fontSize: N ? "1.5rem" : "2rem",
                            fontWeight: 500,
                            style: { margin: "0 1rem" },
                          },
                          r.a.createElement(
                            Ba,
                            { gap: "6px" },
                            r.a.createElement(ji, {
                              text: c ? c + " " : "",
                              maxCharacters: 16,
                              style: { marginRight: "6px" },
                            }),
                            " ",
                            G ? "(".concat(G, ")") : ""
                          )
                        ),
                        " ",
                        !N &&
                          r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              P,
                              {
                                fontSize: "1.5rem",
                                fontWeight: 500,
                                style: { marginRight: "1rem" },
                              },
                              T
                            ),
                            U
                          )
                      )
                    ),
                    r.a.createElement(
                      "span",
                      null,
                      r.a.createElement(
                        Ba,
                        { ml: Y ? "0" : "2.5rem", mt: Y ? "1rem" : "0" },
                        ne[t] || W
                          ? N
                            ? r.a.createElement(r.a.Fragment, null)
                            : r.a.createElement(
                                Fr,
                                null,
                                r.a.createElement(Tl.a, {
                                  style: {
                                    marginRight: "0.5rem",
                                    opacity: 0.4,
                                  },
                                })
                              )
                          : r.a.createElement(
                              Cr,
                              {
                                onClick: function () {
                                  return ae(t, u);
                                },
                              },
                              r.a.createElement(
                                Fr,
                                null,
                                r.a.createElement(Dl.a, {
                                  style: { marginRight: "0.5rem" },
                                })
                              )
                            ),
                        r.a.createElement(
                          mr,
                          { href: zt(t), target: "_blank" },
                          r.a.createElement(cc, { color: O }, "+ Add Liquidity")
                        ),
                        r.a.createElement(
                          mr,
                          { href: Mt(t), target: "_blank" },
                          r.a.createElement(
                            uc,
                            { ml: ".5rem", mr: N && ".5rem", color: O },
                            "Trade"
                          )
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      Il,
                      { style: { marginTop: N ? "0" : "1rem" } },
                      N &&
                        T &&
                        r.a.createElement(
                          Gc,
                          null,
                          r.a.createElement(
                            Ga,
                            { gap: "20px" },
                            r.a.createElement(
                              Va,
                              null,
                              r.a.createElement(P, null, "Price"),
                              r.a.createElement("div", null)
                            ),
                            r.a.createElement(
                              Va,
                              { align: "flex-end" },
                              " ",
                              r.a.createElement(
                                P,
                                {
                                  fontSize: "1.5rem",
                                  lineHeight: 1,
                                  fontWeight: 500,
                                },
                                T
                              ),
                              r.a.createElement(P, null, U)
                            )
                          )
                        ),
                      r.a.createElement(
                        Gc,
                        null,
                        r.a.createElement(
                          Ga,
                          { gap: "20px" },
                          r.a.createElement(
                            Va,
                            null,
                            r.a.createElement(P, null, "Total Liquidity"),
                            r.a.createElement("div", null)
                          ),
                          r.a.createElement(
                            Va,
                            { align: "flex-end" },
                            r.a.createElement(
                              P,
                              {
                                fontSize: "1.5rem",
                                lineHeight: 1,
                                fontWeight: 500,
                              },
                              R
                            ),
                            r.a.createElement(P, null, M)
                          )
                        )
                      ),
                      r.a.createElement(
                        Gc,
                        null,
                        r.a.createElement(
                          Ga,
                          { gap: "20px" },
                          r.a.createElement(
                            Va,
                            null,
                            r.a.createElement(
                              P,
                              null,
                              "Volume (24hrs) ",
                              L && "(Untracked)"
                            ),
                            r.a.createElement("div", null)
                          ),
                          r.a.createElement(
                            Va,
                            { align: "flex-end" },
                            r.a.createElement(
                              P,
                              {
                                fontSize: "1.5rem",
                                lineHeight: 1,
                                fontWeight: 500,
                              },
                              C
                            ),
                            r.a.createElement(P, null, _)
                          )
                        )
                      ),
                      r.a.createElement(
                        Gc,
                        null,
                        r.a.createElement(
                          Ga,
                          { gap: "20px" },
                          r.a.createElement(
                            Va,
                            null,
                            r.a.createElement(P, null, "Transactions (24hrs)"),
                            r.a.createElement("div", null)
                          ),
                          r.a.createElement(
                            Va,
                            { align: "flex-end" },
                            r.a.createElement(
                              P,
                              {
                                fontSize: "1.5rem",
                                lineHeight: 1,
                                fontWeight: 500,
                              },
                              x ? Ht(x) : 0 === x ? 0 : "-"
                            ),
                            r.a.createElement(P, null, V)
                          )
                        )
                      ),
                      r.a.createElement(
                        Gc,
                        {
                          style: {
                            gridColumn: N ? "1" : "2/4",
                            gridRow: N ? "" : "1/4",
                          },
                        },
                        r.a.createElement(pl, { address: t, color: O, base: s })
                      )
                    )
                  ),
                  r.a.createElement(
                    "span",
                    null,
                    r.a.createElement(
                      P,
                      { fontSize: "1.125rem", style: { marginTop: "3rem" } },
                      "Top Pairs"
                    )
                  ),
                  r.a.createElement(
                    Gc,
                    {
                      rounded: !0,
                      style: { marginTop: "1.5rem", padding: "1.125rem 0 " },
                    },
                    t && w
                      ? r.a.createElement(Wi, {
                          color: O,
                          address: t,
                          pairs: w,
                        })
                      : r.a.createElement(or, null)
                  ),
                  r.a.createElement(
                    Va,
                    { mt: 40, mb: "1rem" },
                    r.a.createElement(
                      P,
                      { fontSize: "1.125rem" },
                      "Transactions"
                    ),
                    " ",
                    r.a.createElement("div", null)
                  ),
                  r.a.createElement(
                    Gc,
                    { rounded: !0 },
                    D
                      ? r.a.createElement(Vo, { color: O, transactions: D })
                      : r.a.createElement(or, null)
                  ),
                  r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      Va,
                      { style: { marginTop: "3rem" } },
                      r.a.createElement(
                        P,
                        { fontSize: "1.125rem" },
                        "Token Information"
                      ),
                      " "
                    ),
                    r.a.createElement(
                      Gc,
                      { rounded: !0, style: { marginTop: "1.5rem" }, p: 20 },
                      r.a.createElement(
                        Ll,
                        null,
                        r.a.createElement(
                          Ja,
                          null,
                          r.a.createElement(P, null, "Symbol"),
                          r.a.createElement(
                            S.d,
                            {
                              style: { marginTop: ".5rem" },
                              fontSize: 24,
                              fontWeight: "500",
                            },
                            r.a.createElement(ji, {
                              text: u,
                              maxCharacters: 12,
                            })
                          )
                        ),
                        r.a.createElement(
                          Ja,
                          null,
                          r.a.createElement(P, null, "Name"),
                          r.a.createElement(
                            P,
                            {
                              style: { marginTop: ".5rem" },
                              fontSize: 24,
                              fontWeight: "500",
                            },
                            r.a.createElement(ji, {
                              text: c,
                              maxCharacters: 16,
                            })
                          )
                        ),
                        r.a.createElement(
                          Ja,
                          null,
                          r.a.createElement(P, null, "Address"),
                          r.a.createElement(
                            Ha,
                            { align: "flex-end" },
                            r.a.createElement(
                              P,
                              {
                                style: { marginTop: ".5rem" },
                                fontSize: 24,
                                fontWeight: "500",
                              },
                              t.slice(0, 8) + "..." + t.slice(36, 42)
                            ),
                            r.a.createElement(xl, { toCopy: t })
                          )
                        ),
                        r.a.createElement(
                          cc,
                          { color: O },
                          r.a.createElement(
                            mr,
                            {
                              color: O,
                              external: !0,
                              href: "https://bscscan.com/address/" + t,
                            },
                            "View on BscScan \u2197"
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      });
      function Rl() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-bottom: 40px;\n",
        ]);
        return (
          (Rl = function () {
            return e;
          }),
          e
        );
      }
      function zl() {
        var e = Object(c.a)([
          "\n  height: 100%;\n  max-height: 340px;\n\n  @media screen and (max-width: 600px) {\n    min-height: 200px;\n  }\n",
        ]);
        return (
          (zl = function () {
            return e;
          }),
          e
        );
      }
      var Ml = u.default.div(zl()),
        Vl = u.default.div(Rl()),
        Hl = {
          VOLUME: "Volume",
          LIQUIDITY: "Liquidity",
          RATE0: "Rate 0",
          RATE1: "Rate 1",
        },
        Bl = function (e) {
          var t,
            n,
            i,
            o,
            c,
            u,
            s,
            d,
            m,
            p,
            f,
            v = e.address,
            b = e.color,
            y = e.base0,
            h = e.base1,
            E = Object(a.useState)(Hl.LIQUIDITY),
            g = Object(l.a)(E, 2),
            k = g[0],
            O = g[1],
            j = Object(a.useState)(ee.MONTH),
            S = Object(l.a)(j, 2),
            w = S[0],
            D = S[1],
            T = x(),
            U = Object(l.a)(T, 1)[0] ? "white" : "black",
            C = Object(a.useRef)(),
            F = "object" === typeof window,
            A = Object(a.useState)(
              null === C || void 0 === C
                ? void 0
                : null === (t = C.current) || void 0 === t
                ? void 0
                : null === (n = t.container) || void 0 === n
                ? void 0
                : n.clientWidth
            ),
            P = Object(l.a)(A, 2),
            I = P[0],
            L = P[1],
            q = Object(a.useState)(
              null === C || void 0 === C
                ? void 0
                : null === (i = C.current) || void 0 === i
                ? void 0
                : null === (o = i.container) || void 0 === o
                ? void 0
                : o.clientHeight
            ),
            _ = Object(l.a)(q, 2),
            R = _[0],
            z = _[1];
          Object(a.useEffect)(
            function () {
              if (!F) return !1;
              function e() {
                var e, t, n, a, r, i;
                L(
                  null !==
                    (e =
                      null === C || void 0 === C
                        ? void 0
                        : null === (t = C.current) || void 0 === t
                        ? void 0
                        : null === (n = t.container) || void 0 === n
                        ? void 0
                        : n.clientWidth) && void 0 !== e
                    ? e
                    : I
                ),
                  z(
                    null !==
                      (a =
                        null === C || void 0 === C
                          ? void 0
                          : null === (r = C.current) || void 0 === r
                          ? void 0
                          : null === (i = r.container) || void 0 === i
                          ? void 0
                          : i.clientHeight) && void 0 !== a
                      ? a
                      : R
                  );
              }
              return (
                window.addEventListener("resize", e),
                function () {
                  return window.removeEventListener("resize", e);
                }
              );
            },
            [R, F, I]
          );
          var M = Fn(v),
            V = (function (e) {
              var t,
                n = gn(),
                r = Object(l.a)(n, 2),
                i = r[0],
                o = r[1].updateChartData,
                c =
                  null === i || void 0 === i
                    ? void 0
                    : null === (t = i[e]) || void 0 === t
                    ? void 0
                    : t.chartData;
              return (
                Object(a.useEffect)(
                  function () {
                    function t() {
                      return (t = Object(B.a)(
                        H.a.mark(function t() {
                          var n;
                          return H.a.wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (c) {
                                    t.next = 5;
                                    break;
                                  }
                                  return (t.next = 3), Tn(e);
                                case 3:
                                  (n = t.sent), o(e, n);
                                case 5:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      )).apply(this, arguments);
                    }
                    !(function () {
                      t.apply(this, arguments);
                    })();
                  },
                  [c, e, o]
                ),
                c
              );
            })(v),
            N = (function (e, t) {
              var n,
                r,
                i = gn(),
                o = Object(l.a)(i, 2),
                c = o[0],
                u = o[1].updateHourlyData,
                s =
                  null === c || void 0 === c
                    ? void 0
                    : null === (n = c[e]) || void 0 === n
                    ? void 0
                    : null === (r = n.hourlyData) || void 0 === r
                    ? void 0
                    : r[t],
                d = wt(),
                m = Object(l.a)(d, 1)[0];
              return (
                Object(a.useEffect)(
                  function () {
                    var n = ct.a.utc(),
                      a = t === ee.MONTH ? "month" : "week",
                      r =
                        t === ee.ALL_TIME
                          ? 158976e4
                          : n.subtract(1, a).startOf("hour").unix();
                    function i() {
                      return (i = Object(B.a)(
                        H.a.mark(function n() {
                          var a;
                          return H.a.wrap(function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (n.next = 2), Un(e, r, m);
                                case 2:
                                  (a = n.sent), u(e, a, t);
                                case 4:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                        })
                      )).apply(this, arguments);
                    }
                    s ||
                      (function () {
                        i.apply(this, arguments);
                      })();
                  },
                  [s, t, e, u, m]
                ),
                s
              );
            })(v, w),
            W = N && N[0],
            K = N && N[1],
            Y =
              (null === M || void 0 === M
                ? void 0
                : null === (c = M.token0) || void 0 === c
                ? void 0
                : c.symbol.length) > 6
                ? (null === M || void 0 === M
                    ? void 0
                    : null === (u = M.token0) || void 0 === u
                    ? void 0
                    : u.symbol.slice(0, 5)) + "..."
                : null === M || void 0 === M
                ? void 0
                : null === (s = M.token0) || void 0 === s
                ? void 0
                : s.symbol,
            Q =
              (null === M || void 0 === M
                ? void 0
                : null === (d = M.token1) || void 0 === d
                ? void 0
                : d.symbol.length) > 6
                ? (null === M || void 0 === M
                    ? void 0
                    : null === (m = M.token1) || void 0 === m
                    ? void 0
                    : m.symbol.slice(0, 5)) + "..."
                : null === M || void 0 === M
                ? void 0
                : null === (p = M.token1) || void 0 === p
                ? void 0
                : p.symbol,
            G = Object(Xa.a)("(max-width: 1600px)"),
            J = Object(Xa.a)("(max-width: 1080px)"),
            X = Object(Xa.a)("(max-width: 600px)"),
            $ = Rt(w);
          if (
            (V =
              null === (f = V) || void 0 === f
                ? void 0
                : f.filter(function (e) {
                    return e.date >= $;
                  })) &&
            0 === V.length
          )
            return r.a.createElement(
              Ml,
              null,
              r.a.createElement(
                Ar,
                { height: "300px" },
                "No historical data yet."
              ),
              " "
            );
          function Z(e) {
            return k === Hl.RATE0
              ? on(e) +
                  '<span style="font-size: 12px; margin-left: 4px;">'
                    .concat(Q, "/")
                    .concat(Y, "<span>")
              : k === Hl.RATE1
              ? on(e) +
                '<span style="font-size: 12px; margin-left: 4px;">'
                  .concat(Y, "/")
                  .concat(Q, "<span>")
              : void 0;
          }
          var te = J ? 3 : G ? 60 / 28 : 60 / 22;
          return r.a.createElement(
            Ml,
            null,
            X
              ? r.a.createElement(
                  Va,
                  { mb: 40 },
                  r.a.createElement(go, {
                    options: Hl,
                    active: k,
                    setActive: O,
                    color: b,
                  }),
                  r.a.createElement(go, {
                    options: ee,
                    active: w,
                    setActive: D,
                    color: b,
                  })
                )
              : r.a.createElement(
                  Vl,
                  null,
                  r.a.createElement(
                    Ha,
                    { gap: "6px", style: { flexWrap: "nowrap" } },
                    r.a.createElement(
                      dc,
                      {
                        active: k === Hl.LIQUIDITY,
                        onClick: function () {
                          D(ee.ALL_TIME), O(Hl.LIQUIDITY);
                        },
                      },
                      "Liquidity"
                    ),
                    r.a.createElement(
                      dc,
                      {
                        active: k === Hl.VOLUME,
                        onClick: function () {
                          D(ee.ALL_TIME), O(Hl.VOLUME);
                        },
                      },
                      "Volume"
                    ),
                    r.a.createElement(
                      dc,
                      {
                        active: k === Hl.RATE0,
                        onClick: function () {
                          D(ee.WEEK), O(Hl.RATE0);
                        },
                      },
                      M.token0 ? Q + "/" + Y : "-"
                    ),
                    r.a.createElement(
                      dc,
                      {
                        active: k === Hl.RATE1,
                        onClick: function () {
                          D(ee.WEEK), O(Hl.RATE1);
                        },
                      },
                      M.token0 ? Y + "/" + Q : "-"
                    )
                  ),
                  r.a.createElement(
                    Ha,
                    { justify: "flex-end", gap: "6px" },
                    r.a.createElement(
                      dc,
                      {
                        active: w === ee.WEEK,
                        onClick: function () {
                          return D(ee.WEEK);
                        },
                      },
                      "1W"
                    ),
                    r.a.createElement(
                      dc,
                      {
                        active: w === ee.MONTH,
                        onClick: function () {
                          return D(ee.MONTH);
                        },
                      },
                      "1M"
                    ),
                    r.a.createElement(
                      dc,
                      {
                        active: w === ee.ALL_TIME,
                        onClick: function () {
                          return D(ee.ALL_TIME);
                        },
                      },
                      "All"
                    )
                  )
                ),
            k === Hl.LIQUIDITY &&
              r.a.createElement(
                Ho.h,
                { aspect: te },
                r.a.createElement(
                  Ho.b,
                  {
                    margin: { top: 0, right: 10, bottom: 6, left: 0 },
                    barCategoryGap: 1,
                    data: V,
                  },
                  r.a.createElement(
                    "defs",
                    null,
                    r.a.createElement(
                      "linearGradient",
                      { id: "colorUv", x1: "0", y1: "0", x2: "0", y2: "1" },
                      r.a.createElement("stop", {
                        offset: "5%",
                        stopColor: b,
                        stopOpacity: 0.35,
                      }),
                      r.a.createElement("stop", {
                        offset: "95%",
                        stopColor: b,
                        stopOpacity: 0,
                      })
                    )
                  ),
                  r.a.createElement(Ho.j, {
                    tickLine: !1,
                    axisLine: !1,
                    interval: "preserveEnd",
                    tickMargin: 14,
                    minTickGap: 80,
                    tickFormatter: function (e) {
                      return Bt(e);
                    },
                    dataKey: "date",
                    tick: { fill: U },
                    type: "number",
                    domain: ["dataMin", "dataMax"],
                  }),
                  r.a.createElement(Ho.k, {
                    type: "number",
                    orientation: "right",
                    tickFormatter: function (e) {
                      return "$" + nn(e);
                    },
                    axisLine: !1,
                    tickLine: !1,
                    interval: "preserveEnd",
                    minTickGap: 80,
                    yAxisId: 0,
                    tickMargin: 16,
                    tick: { fill: U },
                  }),
                  r.a.createElement(Ho.i, {
                    cursor: !0,
                    formatter: function (e) {
                      return on(e, !0);
                    },
                    labelFormatter: function (e) {
                      return en(e);
                    },
                    labelStyle: { paddingTop: 4 },
                    contentStyle: {
                      padding: "10px 14px",
                      borderRadius: 10,
                      borderColor: b,
                      color: "black",
                    },
                    wrapperStyle: { top: -70, left: -10 },
                  }),
                  r.a.createElement(Ho.a, {
                    strokeWidth: 2,
                    dot: !1,
                    type: "monotone",
                    name: " (USD)",
                    dataKey: "reserveUSD",
                    yAxisId: 0,
                    stroke: Object(lr.a)(0.12, b),
                    fill: "url(#colorUv)",
                  })
                )
              ),
            k === Hl.RATE1 &&
              (K
                ? r.a.createElement(
                    Ho.h,
                    { aspect: te, ref: C },
                    r.a.createElement(al, {
                      data: K,
                      base: y,
                      margin: !1,
                      width: I,
                      valueFormatter: Z,
                    })
                  )
                : r.a.createElement(or, null)),
            k === Hl.RATE0 &&
              (W
                ? r.a.createElement(
                    Ho.h,
                    { aspect: te, ref: C },
                    r.a.createElement(al, {
                      data: W,
                      base: h,
                      margin: !1,
                      width: I,
                      valueFormatter: Z,
                    })
                  )
                : r.a.createElement(or, null)),
            k === Hl.VOLUME &&
              r.a.createElement(
                Ho.h,
                { aspect: te },
                r.a.createElement(
                  Ho.d,
                  {
                    margin: { top: 0, right: 0, bottom: 6, left: J ? 0 : 10 },
                    barCategoryGap: 1,
                    data: V,
                  },
                  r.a.createElement(Ho.j, {
                    tickLine: !1,
                    axisLine: !1,
                    interval: "preserveEnd",
                    minTickGap: 80,
                    tickMargin: 14,
                    tickFormatter: function (e) {
                      return Bt(e);
                    },
                    dataKey: "date",
                    tick: { fill: U },
                    type: "number",
                    domain: ["dataMin", "dataMax"],
                  }),
                  r.a.createElement(Ho.k, {
                    type: "number",
                    axisLine: !1,
                    tickMargin: 16,
                    tickFormatter: function (e) {
                      return "$" + nn(e);
                    },
                    tickLine: !1,
                    interval: "preserveEnd",
                    orientation: "right",
                    minTickGap: 80,
                    yAxisId: 0,
                    tick: { fill: U },
                  }),
                  r.a.createElement(Ho.i, {
                    cursor: { fill: b, opacity: 0.1 },
                    formatter: function (e) {
                      return on(e, !0);
                    },
                    labelFormatter: function (e) {
                      return en(e);
                    },
                    labelStyle: { paddingTop: 4 },
                    contentStyle: {
                      padding: "10px 14px",
                      borderRadius: 10,
                      borderColor: b,
                      color: "black",
                    },
                    wrapperStyle: { top: -70, left: -10 },
                  }),
                  r.a.createElement(Ho.c, {
                    type: "monotone",
                    name: "Volume",
                    dataKey: "dailyVolumeUSD",
                    fill: b,
                    opacity: "0.4",
                    yAxisId: 0,
                    stroke: b,
                  })
                )
              )
          );
        };
      function Nl() {
        var e = Object(c.a)(["\n  opacity: ", ";\n  pointer-events: ", ";\n"]);
        return (
          (Nl = function () {
            return e;
          }),
          e
        );
      }
      function Wl() {
        var e = Object(c.a)([
          "\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n",
        ]);
        return (
          (Wl = function () {
            return e;
          }),
          e
        );
      }
      function Kl() {
        var e = Object(c.a)([
          "\n  width: fit-content;\n  padding: 8px 12px;\n  border-radius: 10px;\n\n  :hover {\n    cursor: pointer;\n    background-color: ",
          ";\n  }\n",
        ]);
        return (
          (Kl = function () {
            return e;
          }),
          e
        );
      }
      function Yl() {
        var e = Object(c.a)([
          "\n  display: inline-grid;\n  width: 100%;\n  grid-template-columns: auto auto auto auto 1fr;\n  column-gap: 60px;\n  align-items: start;\n\n  &:last-child {\n    align-items: center;\n    justify-items: end;\n  }\n  @media screen and (max-width: 1024px) {\n    grid-template-columns: 1fr;\n    align-items: stretch;\n    > * {\n      grid-column: 1 / 4;\n      margin-bottom: 1rem;\n    }\n\n    &:last-child {\n      align-items: start;\n      justify-items: start;\n    }\n  }\n",
        ]);
        return (
          (Yl = function () {
            return e;
          }),
          e
        );
      }
      function Ql() {
        var e = Object(c.a)([
          "\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: max-content;\n  gap: 6px;\n  display: inline-grid;\n  width: 100%;\n  align-items: start;\n  @media screen and (max-width: 1024px) {\n    grid-template-columns: 1fr;\n    align-items: stretch;\n    > * {\n      grid-column: 1 / 4;\n    }\n\n    > * {\n      &:first-child {\n        width: 100%;\n      }\n    }\n  }\n",
        ]);
        return (
          (Ql = function () {
            return e;
          }),
          e
        );
      }
      function Gl() {
        var e = Object(c.a)(["\n  width: 100%;\n"]);
        return (
          (Gl = function () {
            return e;
          }),
          e
        );
      }
      var Jl = u.default.div(Gl()),
        Xl = u.default.div(Ql()),
        $l = u.default.div(Yl()),
        Zl = Object(u.default)(Gc)(Kl(), function (e) {
          return e.theme.bg2;
        }),
        eu = u.default.span(Wl()),
        tu = u.default.div(
          Nl(),
          function (e) {
            return e.disabled && "0.4";
          },
          function (e) {
            return e.disabled && "none";
          }
        );
      var nu = Object(Pa.h)(function (e) {
        var t,
          n,
          i,
          o,
          c,
          u,
          s = e.pairAddress,
          d = e.history,
          m = Fn(s),
          p = m.token0,
          f = m.token1,
          v = m.reserve0,
          b = m.reserve1,
          y = m.reserveUSD,
          h = m.trackedReserveUSD,
          E = m.oneDayVolumeUSD,
          x = m.volumeChangeUSD,
          k = m.oneDayVolumeUntracked,
          j = m.volumeChangeUntracked,
          S = m.liquidityChangeUSD;
        Object(a.useEffect)(function () {
          document.querySelector("body").scrollTo(0, 0);
        }, []);
        var w = (function (e) {
            var t,
              n = gn(),
              r = Object(l.a)(n, 2),
              i = r[0],
              o = r[1].updatePairTxns,
              c =
                null === i || void 0 === i
                  ? void 0
                  : null === (t = i[e]) || void 0 === t
                  ? void 0
                  : t.txns;
            return (
              Object(a.useEffect)(
                function () {
                  function t() {
                    return (t = Object(B.a)(
                      H.a.mark(function t() {
                        var n;
                        return H.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (c) {
                                  t.next = 5;
                                  break;
                                }
                                return (t.next = 3), Dn(e);
                              case 3:
                                (n = t.sent), o(e, n);
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    )).apply(this, arguments);
                  }
                  !(function () {
                    t.apply(this, arguments);
                  })();
                },
                [c, e, o]
              ),
              c
            );
          })(s),
          D = ci(s),
          T = h ? on(h, !0) : y ? on(y, !0) : "-",
          U = cn(S),
          C = Object(a.useState)(!0),
          F = Object(l.a)(C, 2),
          A = F[0],
          L = F[1];
        Object(a.useEffect)(
          function () {
            L(!!h);
          },
          [h]
        );
        var q = E || 0 === E ? on(0 === E ? k : E, !0) : 0 === E ? "$0" : "-",
          _ = Object(a.useState)(!1),
          R = Object(l.a)(_, 2),
          M = R[0],
          V = R[1];
        Object(a.useEffect)(
          function () {
            V(0 === E);
          },
          [E]
        );
        var N = cn(M ? j : x),
          W = E || 0 === E ? on(M ? 0.002 * k : 0.002 * E, !0) : "-",
          K = ea(),
          Y = Object(l.a)(K, 1)[0],
          Q =
            (null === p || void 0 === p ? void 0 : p.derivedETH) && Y
              ? on(parseFloat(p.derivedETH) * parseFloat(Y), !0)
              : "",
          G =
            (null === f || void 0 === f ? void 0 : f.derivedETH) && Y
              ? on(parseFloat(f.derivedETH) * parseFloat(Y), !0)
              : "",
          J = v && b ? on(b / v) : "-",
          X = v && b ? on(v / b) : "-",
          $ =
            (null === p || void 0 === p ? void 0 : p.symbol.length) > 6
              ? (null === p || void 0 === p ? void 0 : p.symbol.slice(0, 5)) +
                "..."
              : null === p || void 0 === p
              ? void 0
              : p.symbol,
          Z =
            (null === f || void 0 === f ? void 0 : f.symbol.length) > 6
              ? (null === f || void 0 === f ? void 0 : f.symbol.slice(0, 5)) +
                "..."
              : null === f || void 0 === f
              ? void 0
              : f.symbol,
          ee = Object(Xa.a)("(max-width: 1080px)"),
          te = Object(Xa.a)("(max-width: 900px)"),
          ne = Object(Xa.a)("(max-width: 600px)"),
          ae = g(d.location.pathname),
          re = Object(l.a)(ae, 2),
          ie = re[0],
          oe = re[1];
        Object(a.useEffect)(function () {
          window.scrollTo({ behavior: "smooth", top: 0 });
        }, []);
        var ce = O(),
          le = Object(l.a)(ce, 2),
          ue = le[0],
          se = le[1],
          de = Tt();
        return r.a.createElement(
          Pr,
          null,
          r.a.createElement(z, { backgroundColor: Object(lr.d)(0.6, D) }),
          r.a.createElement("span", null),
          r.a.createElement(wl, {
            type: "pair",
            show:
              !ie &&
              de &&
              !(
                de.includes(null === p || void 0 === p ? void 0 : p.id) &&
                de.includes(null === f || void 0 === f ? void 0 : f.id)
              ),
            setShow: oe,
            address: s,
          }),
          r.a.createElement(
            Lr,
            null,
            r.a.createElement(
              Va,
              null,
              r.a.createElement(
                I,
                null,
                r.a.createElement(fr, { to: "/pairs" }, "Pairs "),
                "\u2192 ",
                null === p || void 0 === p ? void 0 : p.symbol,
                "-",
                null === f || void 0 === f ? void 0 : f.symbol
              ),
              !ne && r.a.createElement(Rc, { small: !0 })
            ),
            r.a.createElement(
              tu,
              {
                disabled:
                  !ie &&
                  de &&
                  !(
                    de.includes(null === p || void 0 === p ? void 0 : p.id) &&
                    de.includes(null === f || void 0 === f ? void 0 : f.id)
                  ),
              },
              r.a.createElement(
                Jl,
                null,
                r.a.createElement(
                  Ga,
                  { gap: "40px", style: { marginBottom: "1.5rem" } },
                  r.a.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        width: "100%",
                      },
                    },
                    r.a.createElement(
                      Ba,
                      { style: { flexWrap: "wrap", minWidth: "100px" } },
                      r.a.createElement(
                        Ba,
                        null,
                        p &&
                          f &&
                          r.a.createElement($r, {
                            a0:
                              (null === p || void 0 === p ? void 0 : p.id) ||
                              "",
                            a1:
                              (null === f || void 0 === f ? void 0 : f.id) ||
                              "",
                            size: 32,
                            margin: !0,
                          }),
                        " ",
                        r.a.createElement(
                          P,
                          {
                            fontSize: ee ? "1.5rem" : "2rem",
                            style: { margin: "0 1rem" },
                          },
                          p && f
                            ? r.a.createElement(
                                r.a.Fragment,
                                null,
                                r.a.createElement(
                                  eu,
                                  {
                                    onClick: function () {
                                      return d.push(
                                        "/token/".concat(
                                          null === p || void 0 === p
                                            ? void 0
                                            : p.id
                                        )
                                      );
                                    },
                                  },
                                  p.symbol
                                ),
                                r.a.createElement("span", null, "-"),
                                r.a.createElement(
                                  eu,
                                  {
                                    onClick: function () {
                                      return d.push(
                                        "/token/".concat(
                                          null === f || void 0 === f
                                            ? void 0
                                            : f.id
                                        )
                                      );
                                    },
                                  },
                                  f.symbol
                                ),
                                " ",
                                "Pair"
                              )
                            : ""
                        )
                      )
                    ),
                    r.a.createElement(
                      Ba,
                      {
                        ml: te ? "0" : "2.5rem",
                        mt: ee && "1rem",
                        style: {
                          flexDirection: ee ? "row-reverse" : "initial",
                        },
                      },
                      ue[s] || ee
                        ? ee
                          ? r.a.createElement(r.a.Fragment, null)
                          : r.a.createElement(
                              Fr,
                              null,
                              r.a.createElement(Tl.a, {
                                style: { marginRight: "0.5rem", opacity: 0.4 },
                              })
                            )
                        : r.a.createElement(
                            Cr,
                            {
                              onClick: function () {
                                return se(s, p.id, f.id, p.symbol, f.symbol);
                              },
                            },
                            r.a.createElement(
                              Fr,
                              null,
                              r.a.createElement(Dl.a, {
                                style: { marginRight: "0.5rem" },
                              })
                            )
                          ),
                      r.a.createElement(
                        mr,
                        {
                          external: !0,
                          href: zt(
                            null === p || void 0 === p ? void 0 : p.id,
                            null === f || void 0 === f ? void 0 : f.id
                          ),
                        },
                        r.a.createElement(cc, { color: D }, "+ Add Liquidity")
                      ),
                      r.a.createElement(
                        mr,
                        {
                          external: !0,
                          href: Mt(
                            null === p || void 0 === p ? void 0 : p.id,
                            null === f || void 0 === f ? void 0 : f.id
                          ),
                        },
                        r.a.createElement(
                          uc,
                          { ml: !ee && ".5rem", mr: ee && ".5rem", color: D },
                          "Trade"
                        )
                      )
                    )
                  )
                ),
                r.a.createElement(
                  Ha,
                  {
                    gap: "6px",
                    style: {
                      width: "fit-content",
                      marginTop: te ? "1rem" : "0",
                      marginBottom: te ? "0" : "2rem",
                      flexWrap: "wrap",
                    },
                  },
                  r.a.createElement(
                    Zl,
                    {
                      onClick: function () {
                        return d.push(
                          "/token/".concat(
                            null === p || void 0 === p ? void 0 : p.id
                          )
                        );
                      },
                    },
                    r.a.createElement(
                      Ba,
                      null,
                      r.a.createElement(Qr, {
                        address: null === p || void 0 === p ? void 0 : p.id,
                        size: "16px",
                      }),
                      r.a.createElement(
                        P,
                        {
                          fontSize: "16px",
                          lineHeight: 1,
                          fontWeight: 500,
                          ml: "4px",
                        },
                        p && f
                          ? "1 "
                              .concat($, " = ")
                              .concat(J, " ")
                              .concat(Z, " ")
                              .concat(
                                parseFloat(
                                  null === p || void 0 === p
                                    ? void 0
                                    : p.derivedETH
                                )
                                  ? "(" + Q + ")"
                                  : ""
                              )
                          : "-"
                      )
                    )
                  ),
                  r.a.createElement(
                    Zl,
                    {
                      onClick: function () {
                        return d.push(
                          "/token/".concat(
                            null === f || void 0 === f ? void 0 : f.id
                          )
                        );
                      },
                    },
                    r.a.createElement(
                      Ba,
                      null,
                      r.a.createElement(Qr, {
                        address: null === f || void 0 === f ? void 0 : f.id,
                        size: "16px",
                      }),
                      r.a.createElement(
                        P,
                        {
                          fontSize: "16px",
                          lineHeight: 1,
                          fontWeight: 500,
                          ml: "4px",
                        },
                        p && f
                          ? "1 "
                              .concat(Z, " = ")
                              .concat(X, " ")
                              .concat($, "  ")
                              .concat(
                                parseFloat(
                                  null === f || void 0 === f
                                    ? void 0
                                    : f.derivedETH
                                )
                                  ? "(" + G + ")"
                                  : ""
                              )
                          : "-"
                      )
                    )
                  )
                ),
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  !ee &&
                    r.a.createElement(
                      P,
                      { fontSize: "1.125rem" },
                      "Pair Stats"
                    ),
                  r.a.createElement(
                    Xl,
                    { style: { marginTop: "1.5rem" } },
                    r.a.createElement(
                      Gc,
                      { style: { height: "100%" } },
                      r.a.createElement(
                        Ga,
                        { gap: "20px" },
                        r.a.createElement(
                          Va,
                          null,
                          r.a.createElement(
                            P,
                            null,
                            "Total Liquidity ",
                            A ? "" : "(Untracked)"
                          ),
                          r.a.createElement("div", null)
                        ),
                        r.a.createElement(
                          Va,
                          { align: "flex-end" },
                          r.a.createElement(
                            P,
                            {
                              fontSize: "1.5rem",
                              lineHeight: 1,
                              fontWeight: 500,
                            },
                            T
                          ),
                          r.a.createElement(P, null, U)
                        )
                      )
                    ),
                    r.a.createElement(
                      Gc,
                      { style: { height: "100%" } },
                      r.a.createElement(
                        Ga,
                        { gap: "20px" },
                        r.a.createElement(
                          Va,
                          null,
                          r.a.createElement(
                            P,
                            null,
                            "Volume (24hrs) ",
                            M && "(Untracked)"
                          ),
                          r.a.createElement("div", null)
                        ),
                        r.a.createElement(
                          Va,
                          { align: "flex-end" },
                          r.a.createElement(
                            P,
                            {
                              fontSize: "1.5rem",
                              lineHeight: 1,
                              fontWeight: 500,
                            },
                            q
                          ),
                          r.a.createElement(P, null, N)
                        )
                      )
                    ),
                    r.a.createElement(
                      Gc,
                      { style: { height: "100%" } },
                      r.a.createElement(
                        Ga,
                        { gap: "20px" },
                        r.a.createElement(
                          Va,
                          null,
                          r.a.createElement(P, null, "Fees (24hrs)"),
                          r.a.createElement("div", null)
                        ),
                        r.a.createElement(
                          Va,
                          { align: "flex-end" },
                          r.a.createElement(
                            P,
                            {
                              fontSize: "1.5rem",
                              lineHeight: 1,
                              fontWeight: 500,
                            },
                            W
                          ),
                          r.a.createElement(P, null, N)
                        )
                      )
                    ),
                    r.a.createElement(
                      Gc,
                      { style: { height: "100%" } },
                      r.a.createElement(
                        Ga,
                        { gap: "20px" },
                        r.a.createElement(
                          Va,
                          null,
                          r.a.createElement(P, null, "Pooled Tokens"),
                          r.a.createElement("div", null)
                        ),
                        r.a.createElement(
                          Cr,
                          {
                            onClick: function () {
                              return d.push(
                                "/token/".concat(
                                  null === p || void 0 === p ? void 0 : p.id
                                )
                              );
                            },
                            fade: !0,
                          },
                          r.a.createElement(
                            Ha,
                            { gap: "4px" },
                            r.a.createElement(Qr, {
                              address:
                                null === p || void 0 === p ? void 0 : p.id,
                            }),
                            r.a.createElement(
                              P,
                              { fontSize: 20, lineHeight: 1, fontWeight: 500 },
                              r.a.createElement(
                                Ba,
                                null,
                                v ? on(v) : "",
                                " ",
                                r.a.createElement(ji, {
                                  text:
                                    null !==
                                      (t =
                                        null === p || void 0 === p
                                          ? void 0
                                          : p.symbol) && void 0 !== t
                                      ? t
                                      : "",
                                  maxCharacters: 8,
                                  margin: !0,
                                })
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          Cr,
                          {
                            onClick: function () {
                              return d.push(
                                "/token/".concat(
                                  null === f || void 0 === f ? void 0 : f.id
                                )
                              );
                            },
                            fade: !0,
                          },
                          r.a.createElement(
                            Ha,
                            { gap: "4px" },
                            r.a.createElement(Qr, {
                              address:
                                null === f || void 0 === f ? void 0 : f.id,
                            }),
                            r.a.createElement(
                              P,
                              { fontSize: 20, lineHeight: 1, fontWeight: 500 },
                              r.a.createElement(
                                Ba,
                                null,
                                b ? on(b) : "",
                                " ",
                                r.a.createElement(ji, {
                                  text:
                                    null !==
                                      (n =
                                        null === f || void 0 === f
                                          ? void 0
                                          : f.symbol) && void 0 !== n
                                      ? n
                                      : "",
                                  maxCharacters: 8,
                                  margin: !0,
                                })
                              )
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      Gc,
                      {
                        style: {
                          gridColumn: ee ? "1" : "2/4",
                          gridRow: ee ? "" : "1/5",
                        },
                      },
                      r.a.createElement(Bl, {
                        address: s,
                        color: D,
                        base0: b / v,
                        base1: v / b,
                      })
                    )
                  ),
                  r.a.createElement(
                    P,
                    { fontSize: "1.125rem", style: { marginTop: "3rem" } },
                    "Transactions"
                  ),
                  " ",
                  r.a.createElement(
                    Gc,
                    { style: { marginTop: "1.5rem" } },
                    w
                      ? r.a.createElement(Vo, { transactions: w })
                      : r.a.createElement(or, null)
                  ),
                  r.a.createElement(
                    Va,
                    { style: { marginTop: "3rem" } },
                    r.a.createElement(
                      P,
                      { fontSize: "1.125rem" },
                      "Pair Information"
                    ),
                    " "
                  ),
                  r.a.createElement(
                    Gc,
                    { rounded: !0, style: { marginTop: "1.5rem" }, p: 20 },
                    r.a.createElement(
                      $l,
                      null,
                      r.a.createElement(
                        Ja,
                        null,
                        r.a.createElement(P, null, "Pair Name"),
                        r.a.createElement(
                          P,
                          { style: { marginTop: ".5rem" } },
                          r.a.createElement(
                            Ba,
                            null,
                            r.a.createElement(ji, {
                              text:
                                null !==
                                  (i =
                                    null === p || void 0 === p
                                      ? void 0
                                      : p.symbol) && void 0 !== i
                                  ? i
                                  : "",
                              maxCharacters: 8,
                            }),
                            "-",
                            r.a.createElement(ji, {
                              text:
                                null !==
                                  (o =
                                    null === f || void 0 === f
                                      ? void 0
                                      : f.symbol) && void 0 !== o
                                  ? o
                                  : "",
                              maxCharacters: 8,
                            })
                          )
                        )
                      ),
                      r.a.createElement(
                        Ja,
                        null,
                        r.a.createElement(P, null, "Pair Address"),
                        r.a.createElement(
                          Ha,
                          { align: "flex-end" },
                          r.a.createElement(
                            P,
                            { style: { marginTop: ".5rem" } },
                            s.slice(0, 6) + "..." + s.slice(38, 42)
                          ),
                          r.a.createElement(xl, { toCopy: s })
                        )
                      ),
                      r.a.createElement(
                        Ja,
                        null,
                        r.a.createElement(
                          P,
                          null,
                          r.a.createElement(
                            Ba,
                            null,
                            r.a.createElement(ji, {
                              text:
                                null !==
                                  (c =
                                    null === p || void 0 === p
                                      ? void 0
                                      : p.symbol) && void 0 !== c
                                  ? c
                                  : "",
                              maxCharacters: 8,
                            }),
                            " ",
                            r.a.createElement(
                              "span",
                              { style: { marginLeft: "4px" } },
                              "Address"
                            )
                          )
                        ),
                        r.a.createElement(
                          Ha,
                          { align: "flex-end" },
                          r.a.createElement(
                            P,
                            { style: { marginTop: ".5rem" } },
                            p && p.id.slice(0, 6) + "..." + p.id.slice(38, 42)
                          ),
                          r.a.createElement(xl, {
                            toCopy: null === p || void 0 === p ? void 0 : p.id,
                          })
                        )
                      ),
                      r.a.createElement(
                        Ja,
                        null,
                        r.a.createElement(
                          P,
                          null,
                          r.a.createElement(
                            Ba,
                            null,
                            r.a.createElement(ji, {
                              text:
                                null !==
                                  (u =
                                    null === f || void 0 === f
                                      ? void 0
                                      : f.symbol) && void 0 !== u
                                  ? u
                                  : "",
                              maxCharacters: 8,
                            }),
                            " ",
                            r.a.createElement(
                              "span",
                              { style: { marginLeft: "4px" } },
                              "Address"
                            )
                          )
                        ),
                        r.a.createElement(
                          Ha,
                          { align: "flex-end" },
                          r.a.createElement(
                            P,
                            { style: { marginTop: ".5rem" }, fontSize: 16 },
                            f && f.id.slice(0, 6) + "..." + f.id.slice(38, 42)
                          ),
                          r.a.createElement(xl, {
                            toCopy: null === f || void 0 === f ? void 0 : f.id,
                          })
                        )
                      ),
                      r.a.createElement(
                        cc,
                        { color: D },
                        r.a.createElement(
                          mr,
                          {
                            color: D,
                            external: !0,
                            href: "https://bscscan.com/address/" + s,
                          },
                          "View on BscScan \u2197"
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      });
      function au() {
        var e = Object(c.a)([
          "\n  height: 100%;\n  max-height: 390px;\n\n  @media screen and (max-width: 600px) {\n    min-height: 200px;\n  }\n",
        ]);
        return (
          (au = function () {
            return e;
          }),
          e
        );
      }
      var ru = u.default.div(au()),
        iu = function (e) {
          var t = (function (e) {
              var t = Ua(e),
                n = Object(a.useState)(),
                r = Object(l.a)(n, 2),
                i = r[0],
                o = r[1],
                c = Object(a.useState)(),
                u = Object(l.a)(c, 2),
                d = u[0],
                m = u[1],
                p = Dt(),
                f = Object(l.a)(p, 1)[0];
              return (
                Object(a.useEffect)(
                  function () {
                    var e,
                      t = ct.a.utc();
                    switch (f) {
                      case ee.WEEK:
                        e = t.subtract(1, "week").startOf("day");
                        break;
                      case ee.ALL_TIME:
                        e = t.subtract(1, "year");
                        break;
                      default:
                        e = t.subtract(1, "year").startOf("year");
                    }
                    var n = e.unix() - 1;
                    ((f && n < d) || !d) && m(n);
                  },
                  [f, d]
                ),
                Object(a.useEffect)(
                  function () {
                    function e() {
                      return (e = Object(B.a)(
                        H.a.mark(function e() {
                          var n, a, r, i, c, l, u, m, p, f, v;
                          return H.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    n = parseInt(d / 86400),
                                      a = parseInt(ct.a.utc().unix() / 86400),
                                      r = t.sort(function (e, t) {
                                        return parseInt(e.timestamp) >
                                          parseInt(t.timestamp)
                                          ? 1
                                          : -1;
                                      }),
                                      parseInt(r[0].timestamp) > n &&
                                        (n = parseInt(
                                          parseInt(r[0].timestamp) / 86400
                                        )),
                                      i = [];
                                    n < a;

                                  )
                                    i.push(86400 * parseInt(n)), (n += 1);
                                  return (
                                    (c = t.reduce(function (e, t) {
                                      return [].concat(Object(s.a)(e), [
                                        t.pair.id,
                                      ]);
                                    }, [])),
                                    (e.next = 9),
                                    Y.query({ query: Me(c, d) })
                                  );
                                case 9:
                                  for (v in ((l = e.sent),
                                  (u = l.data.pairDayDatas),
                                  (m = []),
                                  (p = {}),
                                  (f = function (e) {
                                    var n = i[e],
                                      a = n + 86400,
                                      r = t.filter(function (e) {
                                        return (
                                          e.timestamp < a && e.timestamp > n
                                        );
                                      });
                                    for (var o in r) {
                                      var c = r[o];
                                      p[c.pair.id] ||
                                        (p[c.pair.id] = {
                                          lpTokenBalance:
                                            c.liquidityTokenBalance,
                                          timestamp: c.timestamp,
                                        }),
                                        p[c.pair.id] &&
                                          p[c.pair.id].timestamp <
                                            c.timestamp &&
                                          (p[c.pair.id] = {
                                            lpTokenBalance:
                                              c.liquidityTokenBalance,
                                            timestamp: c.timestamp,
                                          });
                                    }
                                    var l = Object.keys(p)
                                      .map(function (e) {
                                        var t = u.filter(function (t) {
                                            return t.pairAddress === e;
                                          }),
                                          a = t[0];
                                        for (var r in t) {
                                          var i = t[r];
                                          i.date < n &&
                                            i.date > a.date &&
                                            (a = i);
                                        }
                                        return a;
                                      })
                                      .reduce(function (e, t) {
                                        return t
                                          ? e +
                                              (p[t.pairAddress]
                                                ? (parseFloat(
                                                    p[t.pairAddress]
                                                      .lpTokenBalance
                                                  ) /
                                                    parseFloat(t.totalSupply)) *
                                                  parseFloat(t.reserveUSD)
                                                : 0)
                                          : e;
                                      }, 0);
                                    m.push({ date: n, valueUSD: l });
                                  }),
                                  i))
                                    f(v);
                                  o(m);
                                case 16:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )).apply(this, arguments);
                    }
                    t &&
                      d &&
                      t.length > 0 &&
                      (function () {
                        e.apply(this, arguments);
                      })();
                  },
                  [t, d]
                ),
                i
              );
            })(e.account),
            n = Object(a.useState)(ee.ALL_TIME),
            i = Object(l.a)(n, 2),
            o = i[0],
            c = i[1],
            u = Rt(o),
            d = Object(Xa.a)("(max-width: 600px)"),
            m = [
              function (e) {
                return e > u ? e : u;
              },
              "dataMax",
            ],
            p = Object(Xa.a)("(min-width: 1600px)") ? 5 : d ? 60 / 42 : 3.75,
            f = x(),
            v = Object(l.a)(f, 1)[0] ? "white" : "black";
          return r.a.createElement(
            ru,
            null,
            d
              ? r.a.createElement(
                  Va,
                  { mb: 40 },
                  r.a.createElement("div", null),
                  r.a.createElement(go, {
                    options: ee,
                    active: o,
                    setActive: c,
                    color: "#4FD8DE",
                  })
                )
              : r.a.createElement(
                  Va,
                  { mb: 40 },
                  r.a.createElement(
                    Ha,
                    { gap: "10px" },
                    r.a.createElement(P, null, "Liquidity Value")
                  ),
                  r.a.createElement(
                    Ha,
                    { justify: "flex-end", gap: "4px" },
                    r.a.createElement(
                      dc,
                      {
                        active: o === ee.MONTH,
                        onClick: function () {
                          return c(ee.MONTH);
                        },
                      },
                      "1M"
                    ),
                    r.a.createElement(
                      dc,
                      {
                        active: o === ee.WEEK,
                        onClick: function () {
                          return c(ee.WEEK);
                        },
                      },
                      "1W"
                    ),
                    r.a.createElement(
                      dc,
                      {
                        active: o === ee.ALL_TIME,
                        onClick: function () {
                          return c(ee.ALL_TIME);
                        },
                      },
                      "All"
                    )
                  )
                ),
            t
              ? r.a.createElement(
                  Ho.h,
                  { aspect: p, style: { height: "inherit" } },
                  r.a.createElement(
                    Ho.b,
                    {
                      margin: { top: 0, right: 10, bottom: 6, left: 0 },
                      barCategoryGap: 1,
                      data: t,
                    },
                    r.a.createElement(
                      "defs",
                      null,
                      r.a.createElement(
                        "linearGradient",
                        { id: "colorUv", x1: "0", y1: "0", x2: "0", y2: "1" },
                        r.a.createElement("stop", {
                          offset: "5%",
                          stopColor: "#4FD8DE",
                          stopOpacity: 0.35,
                        }),
                        r.a.createElement("stop", {
                          offset: "95%",
                          stopColor: "#4FD8DE",
                          stopOpacity: 0,
                        })
                      )
                    ),
                    r.a.createElement(Ho.j, {
                      tickLine: !1,
                      axisLine: !1,
                      interval: "preserveEnd",
                      tickMargin: 16,
                      minTickGap: 0,
                      tickFormatter: function (e) {
                        return Bt(e);
                      },
                      dataKey: "date",
                      tick: { fill: v },
                      type: "number",
                      domain: m,
                    }),
                    r.a.createElement(Ho.k, {
                      type: "number",
                      orientation: "right",
                      tickFormatter: function (e) {
                        return "$" + nn(e);
                      },
                      axisLine: !1,
                      tickLine: !1,
                      interval: "preserveEnd",
                      minTickGap: 6,
                      yAxisId: 0,
                      tick: { fill: v },
                    }),
                    r.a.createElement(Ho.i, {
                      cursor: !0,
                      formatter: function (e) {
                        return on(e, !0);
                      },
                      labelFormatter: function (e) {
                        return en(e);
                      },
                      labelStyle: { paddingTop: 4 },
                      contentStyle: {
                        padding: "10px 14px",
                        borderRadius: 10,
                        borderColor: "#4FD8DE",
                        color: "black",
                      },
                      wrapperStyle: { top: -70, left: -10 },
                    }),
                    r.a.createElement(Ho.a, {
                      key: "other",
                      dataKey: "valueUSD",
                      stackId: "2",
                      strokeWidth: 2,
                      dot: !1,
                      type: "monotone",
                      name: "Liquidity",
                      yAxisId: 0,
                      stroke: Object(lr.a)(0.12, "#4FD8DE"),
                      fill: "url(#colorUv)",
                    })
                  )
                )
              : r.a.createElement(or, null)
          );
        };
      function ou() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-bottom: 40px;\n",
        ]);
        return (
          (ou = function () {
            return e;
          }),
          e
        );
      }
      function cu() {
        var e = Object(c.a)([
          "\n  max-height: 420px;\n\n  @media screen and (max-width: 600px) {\n    min-height: 200px;\n  }\n",
        ]);
        return (
          (cu = function () {
            return e;
          }),
          e
        );
      }
      var lu = u.default.div(cu()),
        uu = u.default.div(ou()),
        su = "Value",
        du = "Fees",
        mu = function (e) {
          var t,
            n = e.account,
            i = e.position,
            o = Ca(i, n),
            c = Dt(),
            u = Object(l.a)(c, 2),
            s = u[0],
            d = u[1],
            m = Object(Xa.a)("(max-width: 600px)"),
            p = ci(null === i || void 0 === i ? void 0 : i.pair.token0.id),
            f = Object(a.useState)(su),
            v = Object(l.a)(f, 2),
            b = v[0],
            y = v[1],
            h = Rt(s);
          o =
            null === (t = o) || void 0 === t
              ? void 0
              : t.filter(function (e) {
                  return e.date >= h;
                });
          var E = m ? 60 / 42 : 3.75,
            g = x(),
            k = Object(l.a)(g, 1)[0] ? "white" : "black";
          return r.a.createElement(
            lu,
            null,
            m
              ? r.a.createElement(
                  Va,
                  { mb: 40 },
                  r.a.createElement("div", null),
                  r.a.createElement(go, {
                    options: ee,
                    active: s,
                    setActive: d,
                  })
                )
              : r.a.createElement(
                  uu,
                  null,
                  r.a.createElement(
                    Ha,
                    { gap: "6px", style: { flexWrap: "nowrap" } },
                    r.a.createElement(
                      dc,
                      {
                        active: b === su,
                        onClick: function () {
                          return y(su);
                        },
                      },
                      "Liquidity"
                    ),
                    r.a.createElement(
                      dc,
                      {
                        active: b === du,
                        onClick: function () {
                          return y(du);
                        },
                      },
                      "Fees"
                    )
                  ),
                  r.a.createElement(
                    Ha,
                    { justify: "flex-end", gap: "6px" },
                    r.a.createElement(
                      dc,
                      {
                        active: s === ee.WEEK,
                        onClick: function () {
                          return d(ee.WEEK);
                        },
                      },
                      "1W"
                    ),
                    r.a.createElement(
                      dc,
                      {
                        active: s === ee.MONTH,
                        onClick: function () {
                          return d(ee.MONTH);
                        },
                      },
                      "1M"
                    ),
                    r.a.createElement(
                      dc,
                      {
                        active: s === ee.ALL_TIME,
                        onClick: function () {
                          return d(ee.ALL_TIME);
                        },
                      },
                      "All"
                    )
                  )
                ),
            r.a.createElement(
              Ho.h,
              { aspect: E },
              o
                ? r.a.createElement(
                    Ho.g,
                    {
                      margin: { top: 0, right: 0, bottom: 0, left: 0 },
                      barCategoryGap: 1,
                      data: o,
                    },
                    r.a.createElement(
                      "defs",
                      null,
                      r.a.createElement(
                        "linearGradient",
                        { id: "colorUv", x1: "0", y1: "0", x2: "0", y2: "1" },
                        r.a.createElement("stop", {
                          offset: "5%",
                          stopColor: p,
                          stopOpacity: 0.35,
                        }),
                        r.a.createElement("stop", {
                          offset: "95%",
                          stopColor: p,
                          stopOpacity: 0,
                        })
                      )
                    ),
                    r.a.createElement(Ho.e, { strokeDasharray: "3 3" }),
                    r.a.createElement(Ho.j, {
                      tickLine: !1,
                      axisLine: !1,
                      interval: "preserveEnd",
                      tickMargin: 14,
                      tickFormatter: function (e) {
                        return Bt(e);
                      },
                      dataKey: "date",
                      tick: { fill: k },
                      type: "number",
                      domain: ["dataMin", "dataMax"],
                    }),
                    r.a.createElement(Ho.k, {
                      type: "number",
                      orientation: "right",
                      tickFormatter: function (e) {
                        return "$" + nn(e);
                      },
                      axisLine: !1,
                      tickLine: !1,
                      interval: "preserveStartEnd",
                      minTickGap: 0,
                      yAxisId: 0,
                      tick: { fill: k },
                    }),
                    r.a.createElement(Ho.i, {
                      cursor: !0,
                      formatter: function (e) {
                        return on(e, !0);
                      },
                      labelFormatter: function (e) {
                        return en(e);
                      },
                      labelStyle: { paddingTop: 4 },
                      contentStyle: {
                        padding: "10px 14px",
                        borderRadius: 10,
                        borderColor: p,
                        color: "black",
                      },
                      wrapperStyle: { top: -70, left: -10 },
                    }),
                    r.a.createElement(Ho.f, {
                      type: "monotone",
                      dataKey: b === su ? "usdValue" : "fees",
                      stroke: p,
                      yAxisId: 0,
                      name: b === su ? "Liquidity" : "Fees Earned (Cumulative)",
                    })
                  )
                : r.a.createElement(or, null)
            )
          );
        };
      function pu() {
        var e = Object(c.a)([
          "\n  align-items: center;\n  text-align: center;\n  color: ",
          ";\n  & > * {\n    font-size: 1em;\n  }\n\n  @media screen and (max-width: 600px) {\n    font-size: 13px;\n  }\n",
        ]);
        return (
          (pu = function () {
            return e;
          }),
          e
        );
      }
      function fu() {
        var e = Object(c.a)([
          "\n  color: ",
          ";\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n\n  text-align: end;\n  user-select: none;\n",
        ]);
        return (
          (fu = function () {
            return e;
          }),
          e
        );
      }
      function vu() {
        var e = Object(c.a)([""]);
        return (
          (vu = function () {
            return e;
          }),
          e
        );
      }
      function bu() {
        var e = Object(c.a)([
          "\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: 5px 0.5fr 1fr 1fr;\n  grid-template-areas: 'number name veneraswap return';\n  align-items: flex-start;\n  padding: 20px 0;\n\n  > * {\n    justify-content: flex-end;\n    width: 100%;\n\n    :first-child {\n      justify-content: flex-start;\n      text-align: left;\n      width: 20px;\n    }\n  }\n\n  @media screen and (min-width: 1200px) {\n    grid-template-columns: 35px 2.5fr 1fr 1fr;\n    grid-template-areas: 'number name fastswap return';\n  }\n\n  @media screen and (max-width: 740px) {\n    grid-template-columns: 2.5fr 1fr 1fr;\n    grid-template-areas: 'name veneraswap return';\n  }\n\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 2.5fr 1fr;\n    grid-template-areas: 'name veneraswap';\n  }\n",
        ]);
        return (
          (bu = function () {
            return e;
          }),
          e
        );
      }
      function yu() {
        var e = Object(c.a)(["\n  -webkit-overflow-scrolling: touch;\n"]);
        return (
          (yu = function () {
            return e;
          }),
          e
        );
      }
      function hu() {
        var e = Object(c.a)([
          "\n  color: ",
          ";\n  opacity: ",
          ";\n  padding: 0 20px;\n  user-select: none;\n  :hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (hu = function () {
            return e;
          }),
          e
        );
      }
      function Eu() {
        var e = Object(c.a)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 2em;\n  margin-bottom: 0.5em;\n",
        ]);
        return (
          (Eu = function () {
            return e;
          }),
          e
        );
      }
      ct.a.extend(yt.a);
      var xu = u.default.div(Eu()),
        gu = u.default.div(
          hu(),
          function (e) {
            return e.theme.primary1;
          },
          function (e) {
            return e.faded ? 0.3 : 1;
          }
        ),
        ku = Object(u.default)(S.a)(yu()),
        Ou = u.default.div(bu()),
        ju = u.default.div(vu()),
        Su = Object(u.default)(S.d)(fu(), function (e) {
          return e.theme.text1;
        }),
        wu = Object(u.default)(S.b)(pu(), function (e) {
          return e.theme.text1;
        }),
        Du = { VALUE: "VALUE", pancakeswap_RETURN: "pancakeswap_RETURN" };
      var Tu = Object(Pa.h)(function (e) {
        var t = e.positions,
          n = Object(Xa.a)("(max-width: 500px)"),
          i = Object(Xa.a)("(max-width: 740px)"),
          o = Object(a.useState)(1),
          c = Object(l.a)(o, 2),
          u = c[0],
          s = c[1],
          d = Object(a.useState)(1),
          m = Object(l.a)(d, 2),
          p = m[0],
          f = m[1],
          v = Object(a.useState)(!0),
          b = Object(l.a)(v, 2),
          y = b[0],
          h = b[1],
          E = Object(a.useState)(Du.VALUE),
          x = Object(l.a)(E, 2),
          g = x[0],
          k = x[1];
        Object(a.useEffect)(
          function () {
            f(1), s(1);
          },
          [t]
        ),
          Object(a.useEffect)(
            function () {
              if (t) {
                var e = 1;
                t.length % 10 === 0 && (e = 0),
                  f(Math.floor(t.length / 10) + e || 1);
              }
            },
            [t]
          );
        var O = ea(),
          j = Object(l.a)(O, 1)[0],
          w = function (e) {
            var t = e.position,
              a = e.index,
              o = t.liquidityTokenBalance / t.pair.totalSupply,
              c = o * t.pair.reserveUSD;
            return r.a.createElement(
              Ou,
              { style: { opacity: o > 0 ? 1 : 0.6 }, focus: !0 },
              !i && r.a.createElement(wu, { area: "number" }, a),
              r.a.createElement(
                wu,
                {
                  area: "name",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                },
                r.a.createElement(
                  Ga,
                  { gap: "8px", justify: "flex-start", align: "flex-start" },
                  r.a.createElement($r, {
                    size: 16,
                    a0: t.pair.token0.id,
                    a1: t.pair.token1.id,
                    margin: !i,
                  })
                ),
                r.a.createElement(
                  Ga,
                  {
                    gap: "8px",
                    justify: "flex-start",
                    style: { marginLeft: "20px" },
                  },
                  r.a.createElement(
                    pr,
                    { to: "/pair/" + t.pair.id },
                    r.a.createElement(
                      P,
                      { style: { whiteSpace: "nowrap" }, to: "/pair/" },
                      r.a.createElement(ji, {
                        text: t.pair.token0.symbol + "-" + t.pair.token1.symbol,
                        maxCharacters: i ? 10 : 18,
                      })
                    )
                  ),
                  r.a.createElement(
                    Ba,
                    { gap: "8px", justify: "flex-start" },
                    r.a.createElement(
                      mr,
                      {
                        external: !0,
                        href: zt(t.pair.token0.id, t.pair.token1.id),
                        style: { marginRight: ".5rem" },
                      },
                      r.a.createElement(
                        cc,
                        { style: { padding: "4px 6px", borderRadius: "4px" } },
                        "Add"
                      )
                    ),
                    o > 0 &&
                      r.a.createElement(
                        mr,
                        {
                          external: !0,
                          href: zt(t.pair.token0.id, t.pair.token1.id, !0),
                        },
                        r.a.createElement(
                          cc,
                          {
                            style: { padding: "4px 6px", borderRadius: "4px" },
                          },
                          "Remove"
                        )
                      )
                  )
                )
              ),
              r.a.createElement(
                wu,
                { area: "Veneraswap" },
                r.a.createElement(
                  Ga,
                  { gap: "12px", justify: "flex-end" },
                  r.a.createElement(P, null, on(c, !0, !0)),
                  r.a.createElement(
                    Ga,
                    { gap: "4px", justify: "flex-end" },
                    r.a.createElement(
                      Ba,
                      null,
                      r.a.createElement(
                        L,
                        { fontWeight: 400 },
                        on(o * parseFloat(t.pair.reserve0)),
                        " "
                      ),
                      r.a.createElement(ji, {
                        text: t.pair.token0.symbol,
                        maxCharacters: i ? 10 : 18,
                        margin: !0,
                        fontSize: "11px",
                      })
                    ),
                    r.a.createElement(
                      Ba,
                      null,
                      r.a.createElement(
                        L,
                        { fontWeight: 400 },
                        on(o * parseFloat(t.pair.reserve1)),
                        " "
                      ),
                      r.a.createElement(ji, {
                        text: t.pair.token1.symbol,
                        maxCharacters: i ? 10 : 18,
                        margin: !0,
                        fontSize: "11px",
                      })
                    )
                  )
                )
              ),
              !n &&
                r.a.createElement(
                  wu,
                  { area: "return" },
                  r.a.createElement(
                    Ga,
                    { gap: "12px", justify: "flex-end" },
                    r.a.createElement(
                      P,
                      { color: "green" },
                      r.a.createElement(
                        Ba,
                        null,
                        on(
                          null === t || void 0 === t ? void 0 : t.fees.sum,
                          !0,
                          !0
                        )
                      )
                    ),
                    r.a.createElement(
                      Ga,
                      { gap: "4px", justify: "flex-end" },
                      r.a.createElement(
                        Ba,
                        null,
                        r.a.createElement(
                          L,
                          { fontWeight: 400 },
                          parseFloat(t.pair.token0.derivedETH)
                            ? on(
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.fees.sum) /
                                  (parseFloat(t.pair.token0.derivedETH) * j) /
                                  2,
                                !1,
                                !0
                              )
                            : 0,
                          " "
                        ),
                        r.a.createElement(ji, {
                          text: t.pair.token0.symbol,
                          maxCharacters: i ? 10 : 18,
                          margin: !0,
                          fontSize: "11px",
                        })
                      ),
                      r.a.createElement(
                        Ba,
                        null,
                        r.a.createElement(
                          L,
                          { fontWeight: 400 },
                          parseFloat(t.pair.token1.derivedETH)
                            ? on(
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.fees.sum) /
                                  (parseFloat(t.pair.token1.derivedETH) * j) /
                                  2,
                                !1,
                                !0
                              )
                            : 0,
                          " "
                        ),
                        r.a.createElement(ji, {
                          text: t.pair.token1.symbol,
                          maxCharacters: i ? 10 : 18,
                          margin: !0,
                          fontSize: "11px",
                        })
                      )
                    )
                  )
                )
            );
          },
          D =
            t &&
            t
              .sort(function (e, t) {
                var n, a, r, i, o, c;
                return g === Du.PRINCIPAL
                  ? (null === e || void 0 === e
                      ? void 0
                      : null === (n = e.principal) || void 0 === n
                      ? void 0
                      : n.usd) >
                    (null === t || void 0 === t
                      ? void 0
                      : null === (a = t.principal) || void 0 === a
                      ? void 0
                      : a.usd)
                    ? y
                      ? -1
                      : 1
                    : y
                    ? 1
                    : -1
                  : g === Du.HODL
                  ? (null === e || void 0 === e
                      ? void 0
                      : null === (r = e.hodl) || void 0 === r
                      ? void 0
                      : r.sum) >
                    (null === t || void 0 === t
                      ? void 0
                      : null === (i = t.hodl) || void 0 === i
                      ? void 0
                      : i.sum)
                    ? y
                      ? -1
                      : 1
                    : y
                    ? 1
                    : -1
                  : g === Du.pancakeswap_RETURN
                  ? (null === e || void 0 === e
                      ? void 0
                      : null === (o = e.pancakeswap) || void 0 === o
                      ? void 0
                      : o.return) >
                    (null === t || void 0 === t
                      ? void 0
                      : null === (c = t.pancakeswap) || void 0 === c
                      ? void 0
                      : c.return)
                    ? y
                      ? -1
                      : 1
                    : y
                    ? 1
                    : -1
                  : g === Du.VALUE
                  ? (e.liquidityTokenBalance / e.pair.totalSupply) *
                      e.pair.reserveUSD >
                    (t.liquidityTokenBalance / t.pair.totalSupply) *
                      t.pair.reserveUSD
                    ? y
                      ? -1
                      : 1
                    : y
                    ? 1
                    : -1
                  : 1;
              })
              .slice(10 * (u - 1), 10 * u)
              .map(function (e, t) {
                return r.a.createElement(
                  "div",
                  { key: t },
                  r.a.createElement(w, {
                    key: t,
                    index: 10 * (u - 1) + t + 1,
                    position: e,
                  }),
                  r.a.createElement(Tr, null)
                );
              });
        return r.a.createElement(
          ju,
          null,
          r.a.createElement(
            Ou,
            { center: !0, style: { height: "32px", padding: 0 } },
            !i &&
              r.a.createElement(
                S.b,
                { alignItems: "flex-start", justifyContent: "flexStart" },
                r.a.createElement(P, { area: "number" }, "#")
              ),
            r.a.createElement(
              S.b,
              { alignItems: "flex-start", justifyContent: "flex-start" },
              r.a.createElement(P, { area: "number" }, "Name")
            ),
            r.a.createElement(
              S.b,
              { alignItems: "center", justifyContent: "flexEnd" },
              r.a.createElement(
                Su,
                {
                  area: "Veneraswap",
                  onClick: function (e) {
                    k(Du.VALUE), h(g !== Du.VALUE || !y);
                  },
                },
                i ? "Value" : "Liquidity",
                " ",
                g === Du.VALUE ? (y ? "\u2193" : "\u2191") : ""
              )
            ),
            !n &&
              r.a.createElement(
                S.b,
                { alignItems: "center", justifyContent: "flexEnd" },
                r.a.createElement(
                  Su,
                  {
                    area: "return",
                    onClick: function () {
                      k(Du.pancakeswap_RETURN),
                        h(g !== Du.pancakeswap_RETURN || !y);
                    },
                  },
                  i ? "Fees" : "Total Fees Earned",
                  " ",
                  g === Du.pancakeswap_RETURN ? (y ? "\u2193" : "\u2191") : ""
                )
              )
          ),
          r.a.createElement(Tr, null),
          r.a.createElement(ku, { p: 0 }, D || r.a.createElement(or, null)),
          r.a.createElement(
            xu,
            null,
            r.a.createElement(
              "div",
              {
                onClick: function () {
                  return s(1 === u ? u : u - 1);
                },
              },
              r.a.createElement(gu, { faded: 1 === u }, "\u2190")
            ),
            r.a.createElement(I, null, "Page " + u + " of " + p),
            r.a.createElement(
              "div",
              {
                onClick: function () {
                  return s(u === p ? u : u + 1);
                },
              },
              r.a.createElement(gu, { faded: u === p }, "\u2192")
            )
          )
        );
      });
      function Uu() {
        var e = Object(c.a)([
          "\n  align-items: center;\n  text-align: center;\n  color: ",
          ";\n  & > * {\n    font-size: 1em;\n  }\n\n  @media screen and (max-width: 600px) {\n    font-size: 13px;\n  }\n",
        ]);
        return (
          (Uu = function () {
            return e;
          }),
          e
        );
      }
      function Cu() {
        var e = Object(c.a)([
          "\n  color: ",
          ";\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n\n  text-align: end;\n  user-select: none;\n",
        ]);
        return (
          (Cu = function () {
            return e;
          }),
          e
        );
      }
      function Fu() {
        var e = Object(c.a)([""]);
        return (
          (Fu = function () {
            return e;
          }),
          e
        );
      }
      function Au() {
        var e = Object(c.a)([
          "\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: 5px 0.5fr 1fr;\n  grid-template-areas: 'number name uniswap';\n  align-items: flex-start;\n  padding: 20px 0;\n\n  > * {\n    justify-content: flex-end;\n    width: 100%;\n\n    :first-child {\n      justify-content: flex-start;\n      text-align: left;\n      width: 20px;\n    }\n  }\n\n  @media screen and (min-width: 1200px) {\n    grid-template-columns: 35px 2.5fr 1fr;\n    grid-template-areas: 'number name uniswap';\n  }\n\n  @media screen and (max-width: 740px) {\n    grid-template-columns: 2.5fr 1fr;\n    grid-template-areas: 'name uniswap';\n  }\n\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 2.5fr 1fr;\n    grid-template-areas: 'name uniswap';\n  }\n",
        ]);
        return (
          (Au = function () {
            return e;
          }),
          e
        );
      }
      function Pu() {
        var e = Object(c.a)(["\n  -webkit-overflow-scrolling: touch;\n"]);
        return (
          (Pu = function () {
            return e;
          }),
          e
        );
      }
      function Iu() {
        var e = Object(c.a)([
          "\n  color: ",
          ";\n  opacity: ",
          ";\n  padding: 0 20px;\n  user-select: none;\n  :hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (Iu = function () {
            return e;
          }),
          e
        );
      }
      function Lu() {
        var e = Object(c.a)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 2em;\n  margin-bottom: 0.5em;\n",
        ]);
        return (
          (Lu = function () {
            return e;
          }),
          e
        );
      }
      ct.a.extend(yt.a);
      var qu = u.default.div(Lu()),
        _u = u.default.div(
          Iu(),
          function (e) {
            return e.theme.primary1;
          },
          function (e) {
            return e.faded ? 0.3 : 1;
          }
        ),
        Ru = Object(u.default)(S.a)(Pu()),
        zu = u.default.div(Au()),
        Mu = u.default.div(Fu()),
        Vu = Object(u.default)(S.d)(Cu(), function (e) {
          return e.theme.text1;
        }),
        Hu = Object(u.default)(S.b)(Uu(), function (e) {
          return e.theme.text1;
        }),
        Bu = "VALUE";
      var Nu = Object(Pa.h)(function (e) {
        var t = e.miningPositions,
          n = Object(Xa.a)("(max-width: 740px)"),
          i = Object(a.useState)(1),
          o = Object(l.a)(i, 2),
          c = o[0],
          u = o[1],
          s = Object(a.useState)(1),
          d = Object(l.a)(s, 2),
          m = d[0],
          p = d[1],
          f = Object(a.useState)(!0),
          v = Object(l.a)(f, 2),
          b = v[0],
          y = v[1],
          h = Object(a.useState)(Bu),
          E = Object(l.a)(h, 2),
          x = E[0],
          g = E[1];
        Object(a.useEffect)(
          function () {
            p(1), u(1);
          },
          [t]
        ),
          Object(a.useEffect)(
            function () {
              if (t) {
                var e = 1;
                t.length % 10 === 0 && (e = 0),
                  p(Math.floor(t.length / 10) + e || 1);
              }
            },
            [t]
          );
        var k = function (e) {
            var t = e.miningPosition,
              a = e.index,
              i = t.balance / t.pairData.totalSupply,
              o = t.pairData.reserveUSD,
              c = t.pairData.reserve0,
              l = t.pairData.reserve1,
              u = t.miningPool.pair.token0,
              s = t.miningPool.pair.token1,
              d = t.miningPool.pair.id,
              m = t.pairData.token0.id,
              p = t.pairData.token1.id;
            return r.a.createElement(
              zu,
              { style: { opacity: i > 0 ? 1 : 0.6 }, focus: !0 },
              !n && r.a.createElement(Hu, { area: "number" }, a),
              r.a.createElement(
                Hu,
                {
                  area: "name",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                },
                r.a.createElement(
                  Ga,
                  { gap: "8px", justify: "flex-start", align: "flex-start" },
                  r.a.createElement($r, { size: 16, a0: m, a1: p, margin: !n })
                ),
                r.a.createElement(
                  Ga,
                  {
                    gap: "8px",
                    justify: "flex-start",
                    style: { marginLeft: "20px" },
                  },
                  r.a.createElement(
                    pr,
                    { to: "/pair/" + d },
                    r.a.createElement(
                      P,
                      { style: { whiteSpace: "nowrap" }, to: "/pair/" },
                      r.a.createElement(ji, {
                        text: u + "-" + s,
                        maxCharacters: n ? 10 : 18,
                      })
                    )
                  ),
                  r.a.createElement(
                    Ba,
                    { gap: "8px", justify: "flex-start" },
                    r.a.createElement(
                      mr,
                      {
                        external: !0,
                        href: Vt(m),
                        style: { marginRight: ".5rem" },
                      },
                      r.a.createElement(
                        cc,
                        { style: { padding: "4px 6px", borderRadius: "4px" } },
                        "Stake More"
                      )
                    ),
                    i > 0 &&
                      r.a.createElement(
                        mr,
                        { external: !0, href: Vt(m) },
                        r.a.createElement(
                          cc,
                          {
                            style: { padding: "4px 6px", borderRadius: "4px" },
                          },
                          "Withdraw"
                        )
                      )
                  )
                )
              ),
              r.a.createElement(
                Hu,
                { area: "uniswap" },
                r.a.createElement(
                  Ga,
                  { gap: "12px", justify: "flex-end" },
                  r.a.createElement(P, null, on(i * o, !0, !0)),
                  r.a.createElement(
                    Ga,
                    { gap: "4px", justify: "flex-end" },
                    r.a.createElement(
                      Ba,
                      null,
                      r.a.createElement(
                        L,
                        { fontWeight: 400 },
                        on(i * parseFloat(c)),
                        " "
                      ),
                      r.a.createElement(ji, {
                        text: u,
                        maxCharacters: n ? 10 : 18,
                        margin: !0,
                        fontSize: "11px",
                      })
                    ),
                    r.a.createElement(
                      Ba,
                      null,
                      r.a.createElement(
                        L,
                        { fontWeight: 400 },
                        on(i * parseFloat(l)),
                        " "
                      ),
                      r.a.createElement(ji, {
                        text: s,
                        maxCharacters: n ? 10 : 18,
                        margin: !0,
                        fontSize: "11px",
                      })
                    )
                  )
                )
              )
            );
          },
          O =
            t &&
            t
              .sort(function (e, t) {
                var n, a, r, i;
                return x === Bu
                  ? (e.balance /
                      (null === (n = e.pairData) || void 0 === n
                        ? void 0
                        : n.totalSupply)) *
                      (null === (a = e.pairData) || void 0 === a
                        ? void 0
                        : a.reserveUSD) >
                    (e.balance /
                      (null === (r = e.pairData) || void 0 === r
                        ? void 0
                        : r.totalSupply)) *
                      (null === (i = t.pairData) || void 0 === i
                        ? void 0
                        : i.reserveUSD)
                    ? b
                      ? -1
                      : 1
                    : b
                    ? 1
                    : -1
                  : 1;
              })
              .slice(10 * (c - 1), 10 * c)
              .map(function (e, t) {
                return r.a.createElement(
                  "div",
                  { key: t },
                  r.a.createElement(k, {
                    key: t,
                    index: 10 * (c - 1) + t + 1,
                    miningPosition: e,
                  }),
                  r.a.createElement(Tr, null)
                );
              });
        return r.a.createElement(
          Mu,
          null,
          r.a.createElement(
            zu,
            { center: !0, style: { height: "32px", padding: 0 } },
            !n &&
              r.a.createElement(
                S.b,
                { alignItems: "flex-start", justifyContent: "flexStart" },
                r.a.createElement(P, { area: "number" }, "#")
              ),
            r.a.createElement(
              S.b,
              { alignItems: "flex-start", justifyContent: "flex-start" },
              r.a.createElement(P, { area: "number" }, "Name"),
              " "
            ),
            r.a.createElement(
              S.b,
              { alignItems: "center", justifyContent: "flexEnd" },
              r.a.createElement(
                Vu,
                {
                  area: "uniswap",
                  onClick: function (e) {
                    g(Bu), y(x !== Bu || !b);
                  },
                },
                n ? "Value" : "Liquidity",
                " ",
                x === Bu ? (b ? "\u2193" : "\u2191") : ""
              )
            )
          ),
          r.a.createElement(Tr, null),
          r.a.createElement(Ru, { p: 0 }, O || r.a.createElement(or, null)),
          r.a.createElement(
            qu,
            null,
            r.a.createElement(
              "div",
              {
                onClick: function () {
                  return u(1 === c ? c : c - 1);
                },
              },
              r.a.createElement(_u, { faded: 1 === c }, "\u2190")
            ),
            r.a.createElement(I, null, "Page " + c + " of " + m),
            r.a.createElement(
              "div",
              {
                onClick: function () {
                  return u(c === m ? c : c + 1);
                },
              },
              r.a.createElement(_u, { faded: c === m }, "\u2192")
            )
          )
        );
      });
      function Wu() {
        var e = Object(c.a)([
          "\n  background-color: ",
          ";\n  color: ",
          ";\n  padding: 1rem;\n  font-weight: 600;\n  border-radius: 10px;\n  margin-bottom: 1rem;\n  width: calc(100% - 2rem);\n",
        ]);
        return (
          (Wu = function () {
            return e;
          }),
          e
        );
      }
      function Ku() {
        var e = Object(c.a)([
          "\n  grid-template-columns: 1fr;\n  grid-template-rows: max-content;\n  gap: 6px;\n  display: inline-grid;\n  width: 100%;\n  align-items: start;\n",
        ]);
        return (
          (Ku = function () {
            return e;
          }),
          e
        );
      }
      function Yu() {
        var e = Object(c.a)([
          "\n  width: 100%;\n  padding: 12px 0;\n  padding-left: 12px;\n\n  :hover {\n    cursor: pointer;\n    background-color: ",
          ";\n  }\n",
        ]);
        return (
          (Yu = function () {
            return e;
          }),
          e
        );
      }
      function Qu() {
        var e = Object(c.a)([
          "\n  position: absolute;\n  top: 38px;\n  left: -1px;\n  width: 100%;\n  background-color: ",
          ";\n  z-index: 999;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  padding-top: 4px;\n  border: 1px solid #edeef2;\n  border-top: none;\n",
        ]);
        return (
          (Qu = function () {
            return e;
          }),
          e
        );
      }
      function Gu() {
        var e = Object(c.a)([
          "\n  position: relative;\n  margin-bottom: 1rem;\n  border: 1px solid #edeef2;\n  border-radius: 12px;\n",
        ]);
        return (
          (Gu = function () {
            return e;
          }),
          e
        );
      }
      function Ju() {
        var e = Object(c.a)(["\n  width: 100%;\n"]);
        return (
          (Ju = function () {
            return e;
          }),
          e
        );
      }
      function Xu() {
        var e = Object(c.a)([""]);
        return (
          (Xu = function () {
            return e;
          }),
          e
        );
      }
      function $u() {
        var e = Object(c.a)([
          "\n  background-color: rgba(255, 255, 255, 0.2);\n  padding: 6px 16px;\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          ($u = function () {
            return e;
          }),
          e
        );
      }
      var Zu = u.default.div($u()),
        es = u.default.div(Xu()),
        ts = u.default.div(Ju()),
        ns = u.default.div(Gu()),
        as = u.default.div(Qu(), function (e) {
          return e.theme.bg1;
        }),
        rs = Object(u.default)(Na)(Yu(), function (e) {
          return e.theme.bg2;
        }),
        is = u.default.div(Ku()),
        os = u.default.div(
          Wu(),
          function (e) {
            return e.theme.bg2;
          },
          function (e) {
            return e.theme.text1;
          }
        );
      var cs = function (e) {
        var t,
          n,
          i,
          o = e.account,
          c = (function (e) {
            var t,
              n = Sa(),
              r = Object(l.a)(n, 2),
              i = r[0],
              o = r[1].updateTransactions,
              c =
                null === i || void 0 === i
                  ? void 0
                  : null === (t = i[e]) || void 0 === t
                  ? void 0
                  : t.TRANSACTIONS_KEY;
            return (
              Object(a.useEffect)(
                function () {
                  function t() {
                    return (t = Object(B.a)(
                      H.a.mark(function e(t) {
                        var n;
                        return H.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    Y.query({
                                      query: Re,
                                      variables: { user: t },
                                      fetchPolicy: "no-cache",
                                    })
                                  );
                                case 3:
                                  (null === (n = e.sent) || void 0 === n
                                    ? void 0
                                    : n.data) &&
                                    o(
                                      t,
                                      null === n || void 0 === n
                                        ? void 0
                                        : n.data
                                    ),
                                    (e.next = 10);
                                  break;
                                case 7:
                                  (e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.log(e.t0);
                                case 10:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 7]]
                        );
                      })
                    )).apply(this, arguments);
                  }
                  !c &&
                    e &&
                    (function (e) {
                      t.apply(this, arguments);
                    })(e);
                },
                [e, c, o]
              ),
              c || {}
            );
          })(o),
          u = (function (e) {
            var t,
              n = Sa(),
              r = Object(l.a)(n, 2),
              i = r[0],
              o = r[1].updatePositions,
              c =
                null === i || void 0 === i
                  ? void 0
                  : null === (t = i[e]) || void 0 === t
                  ? void 0
                  : t.POSITIONS_KEY,
              u = Ua(e),
              s = ea(),
              d = Object(l.a)(s, 1)[0];
            return (
              Object(a.useEffect)(
                function () {
                  function t() {
                    return (t = Object(B.a)(
                      H.a.mark(function e(t) {
                        var n, a, r, i;
                        return H.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    Y.query({
                                      query: _e,
                                      variables: { user: t },
                                      fetchPolicy: "no-cache",
                                    })
                                  );
                                case 3:
                                  if (
                                    !(null === (a = e.sent) || void 0 === a
                                      ? void 0
                                      : null === (n = a.data) || void 0 === n
                                      ? void 0
                                      : n.liquidityPositions)
                                  ) {
                                    e.next = 9;
                                    break;
                                  }
                                  return (
                                    (e.next = 7),
                                    Promise.all(
                                      null === a || void 0 === a
                                        ? void 0
                                        : null === (r = a.data) || void 0 === r
                                        ? void 0
                                        : r.liquidityPositions.map(
                                            (function () {
                                              var e = Object(B.a)(
                                                H.a.mark(function e(n) {
                                                  var a;
                                                  return H.a.wrap(function (e) {
                                                    for (;;)
                                                      switch (
                                                        (e.prev = e.next)
                                                      ) {
                                                        case 0:
                                                          return (
                                                            (e.next = 2),
                                                            ka(t, n.pair, d, u)
                                                          );
                                                        case 2:
                                                          return (
                                                            (a = e.sent),
                                                            e.abrupt(
                                                              "return",
                                                              Object(m.a)(
                                                                {},
                                                                n,
                                                                {},
                                                                a
                                                              )
                                                            )
                                                          );
                                                        case 4:
                                                        case "end":
                                                          return e.stop();
                                                      }
                                                  }, e);
                                                })
                                              );
                                              return function (t) {
                                                return e.apply(this, arguments);
                                              };
                                            })()
                                          )
                                    )
                                  );
                                case 7:
                                  (i = e.sent), o(t, i);
                                case 9:
                                  e.next = 14;
                                  break;
                                case 11:
                                  (e.prev = 11),
                                    (e.t0 = e.catch(0)),
                                    console.log(e.t0);
                                case 14:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 11]]
                        );
                      })
                    )).apply(this, arguments);
                  }
                  !c &&
                    e &&
                    d &&
                    u &&
                    (function (e) {
                      t.apply(this, arguments);
                    })(e);
                },
                [e, c, o, d, u]
              ),
              c
            );
          })(o),
          s = (function (e) {
            var t,
              n = Sa(),
              r = Object(l.a)(n, 2),
              i = r[0],
              o = r[1].updateMiningPositions,
              c = An(),
              u =
                null === i || void 0 === i
                  ? void 0
                  : null === (t = i[e]) || void 0 === t
                  ? void 0
                  : t.MINING_POSITIONS_KEY,
              s = Ua(e);
            return (
              Object(a.useEffect)(
                function () {
                  function t() {
                    return (t = Object(B.a)(
                      H.a.mark(function e(t) {
                        var n, a, r, i, l, u, s, d, m, p, f;
                        return H.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (r = []),
                                    (e.next = 4),
                                    G.query({
                                      query: Xe(t),
                                      fetchPolicy: "no-cache",
                                    })
                                  );
                                case 4:
                                  if (
                                    null === (i = e.sent) || void 0 === i
                                      ? void 0
                                      : null === (n = i.data) || void 0 === n
                                      ? void 0
                                      : null === (a = n.user) || void 0 === a
                                      ? void 0
                                      : a.miningPosition
                                  ) {
                                    e.next = 7;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 7:
                                  for (
                                    r = i.data.user.miningPosition,
                                      l = !0,
                                      u = !1,
                                      s = void 0,
                                      e.prev = 11,
                                      d = r[Symbol.iterator]();
                                    !(l = (m = d.next()).done);
                                    l = !0
                                  )
                                    (p = m.value),
                                      (f = p.miningPool.pair.id),
                                      (p.pairData = c[f]);
                                  e.next = 19;
                                  break;
                                case 15:
                                  (e.prev = 15),
                                    (e.t0 = e.catch(11)),
                                    (u = !0),
                                    (s = e.t0);
                                case 19:
                                  (e.prev = 19),
                                    (e.prev = 20),
                                    l || null == d.return || d.return();
                                case 22:
                                  if (((e.prev = 22), !u)) {
                                    e.next = 25;
                                    break;
                                  }
                                  throw s;
                                case 25:
                                  return e.finish(22);
                                case 26:
                                  return e.finish(19);
                                case 27:
                                  o(t, r), (e.next = 33);
                                  break;
                                case 30:
                                  (e.prev = 30),
                                    (e.t1 = e.catch(0)),
                                    console.log(e.t1);
                                case 33:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [
                            [0, 30],
                            [11, 15, 19, 27],
                            [20, , 22, 26],
                          ]
                        );
                      })
                    )).apply(this, arguments);
                  }
                  !u &&
                    e &&
                    s &&
                    (function (e) {
                      t.apply(this, arguments);
                    })(e);
                },
                [e, u, o, s, c]
              ),
              u
            );
          })(o),
          d =
            (null === c || void 0 === c
              ? void 0
              : null === (t = c.swaps) || void 0 === t
              ? void 0
              : t.length) +
            (null === c || void 0 === c
              ? void 0
              : null === (n = c.burns) || void 0 === n
              ? void 0
              : n.length) +
            (null === c || void 0 === c
              ? void 0
              : null === (i = c.mints) || void 0 === i
              ? void 0
              : i.length),
          p = Object(a.useMemo)(
            function () {
              return (null === c || void 0 === c ? void 0 : c.swaps)
                ? null === c || void 0 === c
                  ? void 0
                  : c.swaps.reduce(function (e, t) {
                      return e + parseFloat(t.amountUSD);
                    }, 0)
                : 0;
            },
            [c]
          ),
          f = Object(a.useState)(!1),
          v = Object(l.a)(f, 2),
          b = v[0],
          y = v[1];
        Object(a.useEffect)(
          function () {
            if (u)
              for (var e = 0; e < u.length; e++)
                (re.includes(u[e].pair.token0.id) ||
                  re.includes(u[e].pair.token1.id)) &&
                  y(!0);
          },
          [u]
        );
        var h = u && 0 === u.length,
          E = Object(a.useState)(!1),
          x = Object(l.a)(E, 2),
          g = x[0],
          O = x[1],
          j = Object(a.useState)(),
          S = Object(l.a)(j, 2),
          w = S[0],
          D = S[1],
          T = w ? [w] : u,
          U =
            null === T || void 0 === T
              ? void 0
              : T.reduce(function (e, t) {
                  return e + t.fees.sum;
                }, 0),
          C = Object(a.useMemo)(
            function () {
              return T
                ? T.reduce(function (e, t) {
                    var n, a;
                    return (
                      e +
                      (parseFloat(
                        null === t || void 0 === t
                          ? void 0
                          : t.liquidityTokenBalance
                      ) /
                        parseFloat(
                          null === t || void 0 === t
                            ? void 0
                            : null === (n = t.pair) || void 0 === n
                            ? void 0
                            : n.totalSupply
                        )) *
                        (null === t || void 0 === t
                          ? void 0
                          : null === (a = t.pair) || void 0 === a
                          ? void 0
                          : a.reserveUSD)
                    );
                  }, 0)
                : null;
            },
            [T]
          );
        Object(a.useEffect)(function () {
          window.scrollTo({ behavior: "smooth", top: 0 });
        }, []);
        var F = Object(Xa.a)("(max-width: 600px)"),
          A = k(),
          L = Object(l.a)(A, 3),
          _ = L[0],
          R = L[1],
          z = L[2],
          M = _.includes(o),
          V = Object(a.useCallback)(
            function () {
              (M ? z : R)(o);
            },
            [o, M, R, z]
          );
        return r.a.createElement(
          Pr,
          null,
          r.a.createElement(
            Ir,
            null,
            r.a.createElement(
              Va,
              null,
              r.a.createElement(
                I,
                null,
                r.a.createElement(fr, { to: "/accounts" }, "Accounts "),
                "\u2192",
                " ",
                r.a.createElement(
                  mr,
                  {
                    lineHeight: "145.23%",
                    href: "https://bscscan.com/address/" + o,
                    target: "_blank",
                  },
                  " ",
                  null === o || void 0 === o ? void 0 : o.slice(0, 42),
                  " "
                )
              ),
              !F && r.a.createElement(Rc, { small: !0 })
            ),
            r.a.createElement(
              es,
              null,
              r.a.createElement(
                Va,
                null,
                r.a.createElement(
                  "span",
                  null,
                  r.a.createElement(
                    q,
                    { fontSize: 24 },
                    (null === o || void 0 === o ? void 0 : o.slice(0, 6)) +
                      "..." +
                      (null === o || void 0 === o ? void 0 : o.slice(38, 42))
                  ),
                  r.a.createElement(
                    mr,
                    {
                      lineHeight: "145.23%",
                      href: "https://bscscan.com/address/" + o,
                      target: "_blank",
                    },
                    r.a.createElement(P, { fontSize: 14 }, "View on BscScan")
                  )
                ),
                r.a.createElement(
                  Zu,
                  null,
                  r.a.createElement(
                    Fr,
                    null,
                    r.a.createElement(Tl.a, {
                      onClick: V,
                      style: { opacity: M ? 0.8 : 0.4, cursor: "pointer" },
                    })
                  )
                )
              )
            ),
            r.a.createElement(
              ts,
              null,
              b &&
                r.a.createElement(
                  os,
                  null,
                  "Fees cannot currently be calculated for pairs that include AMPL."
                ),
              !h &&
                r.a.createElement(
                  ns,
                  null,
                  r.a.createElement(
                    lc,
                    {
                      width: "100%",
                      onClick: function () {
                        return O(!g);
                      },
                      open: g,
                    },
                    !w &&
                      r.a.createElement(
                        Ba,
                        null,
                        r.a.createElement(
                          Fr,
                          null,
                          r.a.createElement(rl.a, { size: 16 })
                        ),
                        r.a.createElement(I, { ml: "10px" }, "All Positions")
                      ),
                    w &&
                      r.a.createElement(
                        Ba,
                        null,
                        r.a.createElement($r, {
                          a0: w.pair.token0.id,
                          a1: w.pair.token1.id,
                          size: 16,
                        }),
                        r.a.createElement(
                          I,
                          { ml: "16px" },
                          w.pair.token0.symbol,
                          "-",
                          w.pair.token1.symbol,
                          " Position"
                        )
                      )
                  ),
                  g &&
                    r.a.createElement(
                      as,
                      null,
                      r.a.createElement(
                        Ga,
                        { gap: "0px" },
                        null === u || void 0 === u
                          ? void 0
                          : u.map(function (e, t) {
                              return (
                                "WETH" === e.pair.token1.symbol &&
                                  (e.pair.token1.symbol = "ETH"),
                                "WETH" === e.pair.token0.symbol &&
                                  (e.pair.token0.symbol = "ETH"),
                                e.pair.id !==
                                  (null === w || void 0 === w
                                    ? void 0
                                    : w.pair.id) &&
                                  r.a.createElement(
                                    rs,
                                    {
                                      onClick: function () {
                                        D(e), O(!1);
                                      },
                                      key: t,
                                    },
                                    r.a.createElement($r, {
                                      a0: e.pair.token0.id,
                                      a1: e.pair.token1.id,
                                      size: 16,
                                    }),
                                    r.a.createElement(
                                      I,
                                      { ml: "16px" },
                                      e.pair.token0.symbol,
                                      "-",
                                      e.pair.token1.symbol,
                                      " Position"
                                    )
                                  )
                              );
                            }),
                        w &&
                          r.a.createElement(
                            rs,
                            {
                              onClick: function () {
                                D(), O(!1);
                              },
                            },
                            r.a.createElement(
                              Ba,
                              null,
                              r.a.createElement(
                                Fr,
                                null,
                                r.a.createElement(rl.a, { size: 16 })
                              ),
                              r.a.createElement(
                                I,
                                { ml: "10px" },
                                "All Positions"
                              )
                            )
                          )
                      )
                    )
                ),
              !h &&
                r.a.createElement(
                  Gc,
                  { style: { height: "100%", marginBottom: "1rem" } },
                  r.a.createElement(
                    Ha,
                    { gap: "20px" },
                    r.a.createElement(
                      Ga,
                      { gap: "10px" },
                      r.a.createElement(
                        Va,
                        null,
                        r.a.createElement(
                          I,
                          null,
                          "Liquidity (Including Fees)"
                        ),
                        r.a.createElement("div", null)
                      ),
                      r.a.createElement(
                        Ba,
                        { align: "flex-end" },
                        r.a.createElement(
                          q,
                          { fontSize: "24px", lineHeight: 1 },
                          C ? on(C, !0) : 0 === C ? on(0, !0) : "-"
                        )
                      )
                    ),
                    r.a.createElement(
                      Ga,
                      { gap: "10px" },
                      r.a.createElement(
                        Va,
                        null,
                        r.a.createElement(I, null, "Fees Earned (Cumulative)"),
                        r.a.createElement("div", null)
                      ),
                      r.a.createElement(
                        Ba,
                        { align: "flex-end" },
                        r.a.createElement(
                          q,
                          {
                            fontSize: "24px",
                            lineHeight: 1,
                            color: U && "green",
                          },
                          U ? on(U, !0, !0) : "-"
                        )
                      )
                    )
                  )
                ),
              !h &&
                r.a.createElement(
                  is,
                  null,
                  r.a.createElement(
                    Gc,
                    { style: { gridColumn: "1" } },
                    w
                      ? r.a.createElement(mu, { account: o, position: w })
                      : r.a.createElement(iu, { account: o, position: w })
                  )
                ),
              r.a.createElement(
                P,
                { fontSize: "1.125rem", style: { marginTop: "3rem" } },
                "Positions"
              ),
              " ",
              r.a.createElement(
                Gc,
                { style: { marginTop: "1.5rem" } },
                r.a.createElement(Tu, { positions: u })
              ),
              r.a.createElement(
                P,
                { fontSize: "1.125rem", style: { marginTop: "3rem" } },
                "Liquidity Mining Pools"
              ),
              r.a.createElement(
                Gc,
                { style: { marginTop: "1.5rem" } },
                s && r.a.createElement(Nu, { miningPositions: s }),
                !s &&
                  r.a.createElement(
                    Ga,
                    { gap: "8px", justify: "flex-start" },
                    r.a.createElement(P, null, "No Staked Liquidity."),
                    r.a.createElement(
                      Ha,
                      { gap: "8px", justify: "flex-start" },
                      r.a.createElement(
                        cc,
                        { style: { padding: "4px 6px", borderRadius: "4px" } },
                        "Learn More"
                      ),
                      " "
                    ),
                    " "
                  )
              ),
              r.a.createElement(
                P,
                { fontSize: "1.125rem", style: { marginTop: "3rem" } },
                "Transactions"
              ),
              " ",
              r.a.createElement(
                Gc,
                { style: { marginTop: "1.5rem" } },
                r.a.createElement(Vo, { transactions: c })
              ),
              r.a.createElement(
                P,
                { fontSize: "1.125rem", style: { marginTop: "3rem" } },
                "Wallet Stats"
              ),
              " ",
              r.a.createElement(
                Gc,
                { style: { marginTop: "1.5rem" } },
                r.a.createElement(
                  Ha,
                  { gap: "20px" },
                  r.a.createElement(
                    Ga,
                    { gap: "8px" },
                    r.a.createElement(q, { fontSize: 24 }, p ? on(p, !0) : "-"),
                    r.a.createElement(P, null, "Total Value Swapped")
                  ),
                  r.a.createElement(
                    Ga,
                    { gap: "8px" },
                    r.a.createElement(
                      q,
                      { fontSize: 24 },
                      p ? on(0.002 * p, !0) : "-"
                    ),
                    r.a.createElement(P, null, "Total Fees Paid")
                  ),
                  r.a.createElement(
                    Ga,
                    { gap: "8px" },
                    r.a.createElement(q, { fontSize: 24 }, d || "-"),
                    r.a.createElement(P, null, "Total Transactions")
                  )
                )
              )
            )
          )
        );
      };
      var ls = function () {
        var e = fa();
        Object(a.useEffect)(function () {
          window.scrollTo(0, 0);
        }, []);
        var t = Object(Xa.a)("(max-width: 800px)");
        return r.a.createElement(
          Pr,
          null,
          r.a.createElement(
            qr,
            null,
            r.a.createElement(
              Va,
              null,
              r.a.createElement(_, null, "Top Tokens"),
              !t && r.a.createElement(Rc, { small: !0 })
            ),
            r.a.createElement(
              Gc,
              { style: { marginTop: "6px", padding: t && "1rem 0 0 0 " } },
              r.a.createElement(po, { tokens: e, itemMax: 50 })
            )
          )
        );
      };
      var us = function () {
        var e = An();
        Object(a.useEffect)(function () {
          window.scrollTo(0, 0);
        }, []);
        var t = Object(Xa.a)("(max-width: 800px)");
        return r.a.createElement(
          Pr,
          null,
          r.a.createElement(
            qr,
            null,
            r.a.createElement(
              Va,
              null,
              r.a.createElement(_, null, "Top Pairs"),
              !t && r.a.createElement(Rc, { small: !0 })
            ),
            r.a.createElement(
              Gc,
              { style: { padding: t && "1rem 0 0 0 " } },
              r.a.createElement(Wi, {
                pairs: e,
                disbaleLinks: !0,
                maxItems: 50,
              })
            )
          )
        );
      };
      function ss() {
        var e = Object(c.a)([
          "\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: 1fr;\n  grid-template-areas: 'account';\n  padding: 0 4px;\n\n  > * {\n    justify-content: flex-end;\n  }\n",
        ]);
        return (
          (ss = function () {
            return e;
          }),
          e
        );
      }
      function ds() {
        var e = Object(c.a)([
          "\n  display: flex;\n  cursor: pointer;\n  color: ",
          ";\n  font-size: 14px;\n  font-weight: 500;\n",
        ]);
        return (
          (ds = function () {
            return e;
          }),
          e
        );
      }
      function ms() {
        var e = Object(c.a)([
          "\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  padding: 12px 16px;\n  border-radius: 12px;\n  color: ",
          ";\n  background-color: ",
          ";\n  font-size: 16px;\n  margin-right: 1rem;\n  border: 1px solid ",
          ";\n\n  ::placeholder {\n    color: ",
          ";\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: 640px) {\n    ::placeholder {\n      font-size: 1rem;\n    }\n  }\n",
        ]);
        return (
          (ms = function () {
            return e;
          }),
          e
        );
      }
      function ps() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  border-radius: 12px;\n",
        ]);
        return (
          (ps = function () {
            return e;
          }),
          e
        );
      }
      var fs = u.default.div(ps()),
        vs = u.default.input(
          ms(),
          function (e) {
            return e.theme.text1;
          },
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.theme.text3;
          }
        ),
        bs = u.default.span(ds(), function (e) {
          return e.theme.link;
        }),
        ys = u.default.div(ss());
      var hs = Object(Pa.h)(function (e) {
          var t = e.history,
            n = e.small,
            i = Object(a.useState)(),
            o = Object(l.a)(i, 2),
            c = o[0],
            u = o[1],
            s = k(),
            d = Object(l.a)(s, 3),
            m = d[0],
            p = d[1],
            f = d[2];
          return r.a.createElement(
            Ga,
            { gap: "1rem" },
            !n &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  Ha,
                  null,
                  r.a.createElement(
                    fs,
                    null,
                    r.a.createElement(vs, {
                      placeholder: "0x...",
                      onChange: function (e) {
                        u(e.target.value);
                      },
                    })
                  ),
                  r.a.createElement(
                    cc,
                    {
                      onClick: function () {
                        tn(c) &&
                          (t.push("/account/" + c), m.includes(c) || p(c));
                      },
                    },
                    "Load Account Details"
                  )
                )
              ),
            r.a.createElement(
              Ga,
              { gap: "12px" },
              !n &&
                r.a.createElement(
                  Gc,
                  null,
                  r.a.createElement(
                    ys,
                    {
                      center: !0,
                      style: { height: "fit-content", padding: "0 0 1rem 0" },
                    },
                    r.a.createElement(P, { area: "account" }, "Saved Accounts")
                  ),
                  r.a.createElement(Tr, null),
                  (null === m || void 0 === m ? void 0 : m.length) > 0
                    ? m.map(function (e) {
                        return r.a.createElement(
                          ys,
                          {
                            key: e,
                            center: !0,
                            style: {
                              height: "fit-content",
                              padding: "1rem 0 0 0",
                            },
                          },
                          r.a.createElement(
                            S.b,
                            {
                              area: "account",
                              justifyContent: "space-between",
                              onClick: function () {
                                return t.push("/account/" + e);
                              },
                            },
                            r.a.createElement(
                              bs,
                              null,
                              null === e || void 0 === e
                                ? void 0
                                : e.slice(0, 42)
                            ),
                            r.a.createElement(
                              Cr,
                              {
                                onClick: function (t) {
                                  t.stopPropagation(), f(e);
                                },
                              },
                              r.a.createElement(
                                Fr,
                                null,
                                r.a.createElement(yc.a, { size: 16 })
                              )
                            )
                          )
                        );
                      })
                    : r.a.createElement(
                        R,
                        { style: { marginTop: "1rem" } },
                        "No saved accounts"
                      )
                ),
              n &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(P, null, "Accounts"),
                  (null === m || void 0 === m ? void 0 : m.length) > 0
                    ? m.map(function (e) {
                        return r.a.createElement(
                          Va,
                          { key: e },
                          r.a.createElement(
                            sc,
                            {
                              onClick: function () {
                                return t.push("/account/" + e);
                              },
                            },
                            n
                              ? r.a.createElement(
                                  q,
                                  null,
                                  (null === e || void 0 === e
                                    ? void 0
                                    : e.slice(0, 6)) +
                                    "..." +
                                    (null === e || void 0 === e
                                      ? void 0
                                      : e.slice(38, 42))
                                )
                              : r.a.createElement(
                                  bs,
                                  null,
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.slice(0, 42)
                                )
                          ),
                          r.a.createElement(
                            Cr,
                            {
                              onClick: function () {
                                return f(e);
                              },
                            },
                            r.a.createElement(
                              Fr,
                              null,
                              r.a.createElement(yc.a, { size: 16 })
                            )
                          )
                        );
                      })
                    : r.a.createElement(R, null, "No pinned wallets")
                )
            )
          );
        }),
        Es = n(1002);
      function xs() {
        var e = Object(c.a)(["\n  color: ", ";\n"]);
        return (
          (xs = function () {
            return e;
          }),
          e
        );
      }
      function gs() {
        var e = Object(c.a)(["\n  overflow: auto;\n  padding-bottom: 60px;\n"]);
        return (
          (gs = function () {
            return e;
          }),
          e
        );
      }
      function ks() {
        var e = Object(c.a)([
          "\n  padding-bottom: ",
          ";\n  border-bottom: ",
          ";\n  margin-bottom: ",
          ";\n\n  :hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (ks = function () {
            return e;
          }),
          e
        );
      }
      function Os() {
        var e = Object(c.a)([
          "\n  position: fixed;\n  right: 0;\n  top: 0px;\n  height: 100vh;\n  width: ",
          ";\n  padding: 1.25rem;\n  border-left: ",
          ";\n  background-color: ",
          ";\n  z-index: 9999;\n  overflow: auto;\n  :hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (Os = function () {
            return e;
          }),
          e
        );
      }
      var js = u.default.div(
          Os(),
          function (e) {
            return e.open ? "160px" : "23px";
          },
          function (e) {
            var t = e.theme;
            e.open;
            return "1px solid" + t.bg3;
          },
          function (e) {
            return e.theme.bg1;
          }
        ),
        Ss = Object(u.default)(Va)(
          ks(),
          function (e) {
            return e.open && "20px";
          },
          function (e) {
            var t = e.theme;
            return e.open && "1px solid" + t.bg3;
          },
          function (e) {
            return e.open && "1.25rem";
          }
        ),
        ws = Object(u.default)(Ga)(gs()),
        Ds = u.default.div(xs(), function (e) {
          return e.theme.text2;
        });
      var Ts = Object(Pa.h)(function (e) {
          var t = e.history,
            n = e.open,
            a = e.setSavedOpen,
            i = O(),
            o = Object(l.a)(i, 3),
            c = o[0],
            u = o[2],
            s = j(),
            d = Object(l.a)(s, 3),
            m = d[0],
            p = d[2];
          return n
            ? r.a.createElement(
                js,
                { gap: "1rem", open: n },
                r.a.createElement(
                  Ss,
                  {
                    onClick: function () {
                      return a(!1);
                    },
                    open: n,
                  },
                  r.a.createElement(
                    Ba,
                    null,
                    r.a.createElement(
                      Ds,
                      null,
                      r.a.createElement(Tl.a, { size: 16 })
                    ),
                    r.a.createElement(P, { ml: "4px" }, "Saved")
                  ),
                  r.a.createElement(Ds, null, r.a.createElement(Es.a, null))
                ),
                r.a.createElement(hs, { small: !0 }),
                r.a.createElement(
                  Ga,
                  { gap: "40px", style: { marginTop: "2rem" } },
                  r.a.createElement(
                    Ga,
                    { gap: "12px" },
                    r.a.createElement(P, null, "Pinned Pairs"),
                    Object.keys(c).filter(function (e) {
                      return !!c[e];
                    }).length > 0
                      ? Object.keys(c)
                          .filter(function (e) {
                            return !!c[e];
                          })
                          .map(function (e) {
                            var n = c[e];
                            return r.a.createElement(
                              Va,
                              { key: n.address },
                              r.a.createElement(
                                sc,
                                {
                                  onClick: function () {
                                    return t.push("/pair/" + e);
                                  },
                                },
                                r.a.createElement(
                                  Ba,
                                  null,
                                  r.a.createElement(
                                    q,
                                    null,
                                    r.a.createElement(ji, {
                                      text:
                                        n.token0Symbol + "/" + n.token1Symbol,
                                      maxCharacters: 12,
                                      fontSize: "12px",
                                    })
                                  )
                                )
                              ),
                              r.a.createElement(
                                Cr,
                                {
                                  onClick: function () {
                                    return u(n.address);
                                  },
                                },
                                r.a.createElement(
                                  Ds,
                                  null,
                                  r.a.createElement(yc.a, { size: 16 })
                                )
                              )
                            );
                          })
                      : r.a.createElement(
                          R,
                          null,
                          "Pinned pairs will appear here."
                        )
                  ),
                  r.a.createElement(
                    ws,
                    { gap: "12px" },
                    r.a.createElement(P, null, "Pinned Tokens"),
                    Object.keys(m).filter(function (e) {
                      return !!m[e];
                    }).length > 0
                      ? Object.keys(m)
                          .filter(function (e) {
                            return !!m[e];
                          })
                          .map(function (e) {
                            var n = m[e];
                            return r.a.createElement(
                              Va,
                              { key: e },
                              r.a.createElement(
                                sc,
                                {
                                  onClick: function () {
                                    return t.push("/token/" + e);
                                  },
                                },
                                r.a.createElement(
                                  Ba,
                                  null,
                                  r.a.createElement(Qr, {
                                    address: e,
                                    size: "14px",
                                  }),
                                  r.a.createElement(
                                    q,
                                    { ml: "6px" },
                                    r.a.createElement(ji, {
                                      text: n.symbol,
                                      maxCharacters: 12,
                                      fontSize: "12px",
                                    })
                                  )
                                )
                              ),
                              r.a.createElement(
                                Cr,
                                {
                                  onClick: function () {
                                    return p(e);
                                  },
                                },
                                r.a.createElement(
                                  Ds,
                                  null,
                                  r.a.createElement(yc.a, { size: 16 })
                                )
                              )
                            );
                          })
                      : r.a.createElement(
                          R,
                          null,
                          "Pinned tokens will appear here."
                        )
                  )
                )
              )
            : r.a.createElement(
                js,
                {
                  open: n,
                  onClick: function () {
                    return a(!0);
                  },
                },
                r.a.createElement(
                  Ss,
                  { open: n },
                  r.a.createElement(
                    Ds,
                    null,
                    r.a.createElement(Tl.a, { size: 20 })
                  )
                )
              );
        }),
        Us = n(252),
        Cs = n.n(Us);
      function Fs() {
        var e = Object(c.a)([
          "\n  transition: transform 0.3s ease;\n  :hover {\n    transform: rotate(-5deg);\n  }\n",
        ]);
        return (
          (Fs = function () {
            return e;
          }),
          e
        );
      }
      function As() {
        var e = Object(c.a)([
          "\n  text-decoration: none;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  z-index: 10;\n",
        ]);
        return (
          (As = function () {
            return e;
          }),
          e
        );
      }
      var Ps = u.default.div(As()),
        Is = Object(u.default)(mr)(Fs());
      function Ls() {
        var e = Object(Pa.g)();
        return r.a.createElement(
          Ps,
          {
            onClick: function () {
              return e.push("/");
            },
          },
          r.a.createElement(
            S.b,
            { alignItems: "center" },
            r.a.createElement(
              Ba,
              null,
              r.a.createElement(
                Is,
                {
                  id: "link",
                  href: "https://app.veneraswap.com/",
                  rel: "noopener noreferrer",
                },
                r.a.createElement("img", {
                  width: "75px",
                  src: Cs.a,
                  alt: "logo",
                })
              )
            )
          )
        );
      }
      var qs = n(1005),
        _s = n(1006),
        Rs = n(1007),
        zs = n(1008),
        Ms = n(1003),
        Vs = n(1004);
      function Hs() {
        var e = Object(c.a)([
          "\n  display: flex;\n  width: fit-content;\n  cursor: pointer;\n  text-decoration: none;\n  margin-top: 1rem;\n  color: white;\n\n  :hover {\n    text-decoration: none;\n  }\n",
        ]);
        return (
          (Hs = function () {
            return e;
          }),
          e
        );
      }
      function Bs() {
        var e = Object(c.a)([
          "\n  opacity: ",
          ";\n\n  :hover {\n    opacity: 1;\n  }\n",
        ]);
        return (
          (Bs = function () {
            return e;
          }),
          e
        );
      }
      var Ns = u.default.div(Bs(), function (e) {
          return e.isActive ? 0.8 : 0.4;
        }),
        Ws = u.default.div(Hs());
      function Ks(e) {
        var t = e.isActive,
          n = e.toggle;
        return r.a.createElement(
          Ws,
          { onClick: n },
          r.a.createElement(
            "span",
            null,
            r.a.createElement(
              Ns,
              { isActive: !t },
              r.a.createElement(Ms.a, { size: 20 })
            )
          ),
          r.a.createElement("span", { style: { padding: "0 .5rem" } }, " / "),
          r.a.createElement(
            "span",
            null,
            r.a.createElement(
              Ns,
              { isActive: t },
              r.a.createElement(Vs.a, { size: 20 })
            )
          )
        );
      }
      function Ys() {
        var e = Object(c.a)([
          "\n  width: 8px;\n  height: 8px;\n  min-height: 8px;\n  min-width: 8px;\n  margin-right: 0.5rem;\n  margin-top: 3px;\n  border-radius: 50%;\n  background-color: ",
          ";\n",
        ]);
        return (
          (Ys = function () {
            return e;
          }),
          e
        );
      }
      function Qs() {
        var e = Object(c.a)([
          "\n  position: fixed;\n  display: flex;\n  left: 0;\n  bottom: 0;\n  padding: 1rem;\n  color: white;\n  opacity: 0.4;\n  transition: opacity 0.25s ease;\n  :hover {\n    opacity: 1;\n  }\n",
        ]);
        return (
          (Qs = function () {
            return e;
          }),
          e
        );
      }
      function Gs() {
        var e = Object(c.a)([
          "\n  margin-right: 0.75rem;\n  font-size: 0.825rem;\n  font-weight: 500;\n  display: inline-box;\n  display: -webkit-inline-box;\n  opacity: 0.8;\n  :hover {\n    opacity: 1;\n  }\n  a {\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (Gs = function () {
            return e;
          }),
          e
        );
      }
      function Js() {
        var e = Object(c.a)([
          "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n",
        ]);
        return (
          (Js = function () {
            return e;
          }),
          e
        );
      }
      function Xs() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n",
        ]);
        return (
          (Xs = function () {
            return e;
          }),
          e
        );
      }
      function $s() {
        var e = Object(c.a)([
          "\n  font-weight: 500;\n  font-size: 14px;\n  opacity: ",
          ";\n  color: ",
          ";\n  display: flex;\n  :hover {\n    opacity: 1;\n  }\n",
        ]);
        return (
          ($s = function () {
            return e;
          }),
          e
        );
      }
      function Zs() {
        var e = Object(c.a)([
          "\n  height: ",
          ";\n  background-color: ",
          ";\n  color: ",
          ";\n  padding: 0.5rem 0.5rem 0.5rem 0.75rem;\n  position: sticky;\n  top: 0px;\n  z-index: 9999;\n  box-sizing: border-box;\n  background: #133444;\n  color: ",
          ";\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr;\n    position: relative;\n  }\n\n  @media screen and (max-width: 600px) {\n    padding: 1rem;\n  }\n",
        ]);
        return (
          (Zs = function () {
            return e;
          }),
          e
        );
      }
      var ed = u.default.div(
          Zs(),
          function (e) {
            return e.isMobile ? "initial" : "100vh";
          },
          function (e) {
            var t = e.theme;
            return Object(lr.d)(0.4, t.bg1);
          },
          function (e) {
            return e.theme.text1;
          },
          function (e) {
            return e.theme.bg2;
          }
        ),
        td = u.default.div(
          $s(),
          function (e) {
            return e.activeText ? 1 : 0.6;
          },
          function (e) {
            return e.theme.white;
          }
        ),
        nd = u.default.div(Xs()),
        ad = u.default.div(Js()),
        rd = u.default.div(Gs(), function (e) {
          return e.theme.white;
        }),
        id = u.default.div(Qs()),
        od = u.default.div(Ys(), function (e) {
          return e.theme.green1;
        });
      var cd = Object(Pa.h)(function (e) {
        var t,
          n,
          i,
          o,
          c = e.history,
          u = Object(Xa.a)("(max-width: 1080px)"),
          s = Object(Xa.a)("(max-width: 1180px)"),
          d = (function () {
            var e = kt(),
              t = Object(l.a)(e, 2),
              n = t[0],
              r = t[1].updateSessionStart,
              i = null === n || void 0 === n ? void 0 : n.SESSION_START;
            Object(a.useEffect)(function () {
              i || r(Date.now());
            });
            var o = Object(a.useState)(0),
              c = Object(l.a)(o, 2),
              u = c[0],
              s = c[1];
            return (
              Object(a.useEffect)(
                function () {
                  var e;
                  return (
                    (e = setInterval(function () {
                      var e;
                      s(
                        null !== (e = Date.now() - i) && void 0 !== e
                          ? e
                          : Date.now()
                      );
                    }, 1e3)),
                    function () {
                      return clearInterval(e);
                    }
                  );
                },
                [u, i]
              ),
              parseInt(u / 1e3)
            );
          })(),
          m = x(),
          p = Object(l.a)(m, 2),
          f = p[0],
          v = p[1];
        return r.a.createElement(
          ed,
          { isMobile: u },
          u
            ? r.a.createElement(ad, null, r.a.createElement(Ls, null))
            : r.a.createElement(
                nd,
                null,
                r.a.createElement(
                  Ga,
                  {
                    gap: "1rem",
                    style: { marginLeft: ".75rem", marginTop: "1.5rem" },
                  },
                  r.a.createElement(Ls, null),
                  !u &&
                    r.a.createElement(
                      Ga,
                      { gap: "1.25rem", style: { marginTop: "1rem" } },
                      r.a.createElement(
                        fr,
                        { to: "/home" },
                        r.a.createElement(
                          td,
                          {
                            activeText:
                              null !== (t = "/home" === c.location.pathname) &&
                              void 0 !== t
                                ? t
                                : void 0,
                          },
                          r.a.createElement(qs.a, {
                            size: 20,
                            style: { marginRight: ".75rem" },
                          }),
                          "Overview"
                        )
                      ),
                      r.a.createElement(
                        fr,
                        { to: "/tokens" },
                        r.a.createElement(
                          td,
                          {
                            activeText:
                              null !==
                                (n =
                                  "tokens" ===
                                    c.location.pathname.split("/")[1] ||
                                  "token" ===
                                    c.location.pathname.split("/")[1]) &&
                              void 0 !== n
                                ? n
                                : void 0,
                          },
                          r.a.createElement(_s.a, {
                            size: 20,
                            style: { marginRight: ".75rem" },
                          }),
                          "Tokens"
                        )
                      ),
                      r.a.createElement(
                        fr,
                        { to: "/pairs" },
                        r.a.createElement(
                          td,
                          {
                            activeText:
                              null !==
                                (i =
                                  "pairs" ===
                                    c.location.pathname.split("/")[1] ||
                                  "pair" ===
                                    c.location.pathname.split("/")[1]) &&
                              void 0 !== i
                                ? i
                                : void 0,
                          },
                          r.a.createElement(Rs.a, {
                            size: 20,
                            style: { marginRight: ".75rem" },
                          }),
                          "Pairs"
                        )
                      ),
                      r.a.createElement(
                        fr,
                        { to: "/accounts" },
                        r.a.createElement(
                          td,
                          {
                            activeText:
                              null !==
                                (o =
                                  "accounts" ===
                                    c.location.pathname.split("/")[1] ||
                                  "account" ===
                                    c.location.pathname.split("/")[1]) &&
                              void 0 !== o
                                ? o
                                : void 0,
                          },
                          r.a.createElement(zs.a, {
                            size: 20,
                            style: { marginRight: ".75rem" },
                          }),
                          "Accounts"
                        )
                      )
                    )
                ),
                r.a.createElement(
                  Ga,
                  {
                    gap: "0.5rem",
                    style: { marginLeft: ".75rem", marginBottom: "4rem" },
                  },
                  r.a.createElement(
                    rd,
                    null,
                    r.a.createElement(
                      mr,
                      { href: "https://app.veneraswap.com/", target: "_blank" },
                      "Venera Swap"
                    )
                  ),
                  r.a.createElement(Ks, { isActive: f, toggle: v })
                ),
                !s &&
                  r.a.createElement(
                    id,
                    { style: { marginLeft: ".5rem" } },
                    r.a.createElement(od, null),
                    r.a.createElement(
                      "a",
                      { href: "/", style: { color: "white" } },
                      r.a.createElement(
                        L,
                        { color: "white" },
                        "Updated ",
                        d ? d + "s" : "-",
                        " ago ",
                        r.a.createElement("br", null)
                      )
                    )
                  )
              )
        );
      });
      function ld() {
        var e = Object(c.a)([
          "\n  align-items: center;\n  text-align: center;\n  color: ",
          ";\n  & > * {\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: 600px) {\n    font-size: 13px;\n  }\n",
        ]);
        return (
          (ld = function () {
            return e;
          }),
          e
        );
      }
      function ud() {
        var e = Object(c.a)([""]);
        return (
          (ud = function () {
            return e;
          }),
          e
        );
      }
      function sd() {
        var e = Object(c.a)([
          "\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: 10px 1.5fr 1fr 1fr;\n  grid-template-areas: 'number name pair value';\n  padding: 0 4px;\n\n  > * {\n    justify-content: flex-end;\n  }\n\n  @media screen and (max-width: 1080px) {\n    grid-template-columns: 10px 1.5fr 1fr 1fr;\n    grid-template-areas: 'number name pair value';\n  }\n\n  @media screen and (max-width: 600px) {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-areas: 'name pair value';\n  }\n",
        ]);
        return (
          (sd = function () {
            return e;
          }),
          e
        );
      }
      function dd() {
        var e = Object(c.a)(["\n  -webkit-overflow-scrolling: touch;\n"]);
        return (
          (dd = function () {
            return e;
          }),
          e
        );
      }
      function md() {
        var e = Object(c.a)([
          "\n  color: ",
          ";\n  opacity: ",
          ";\n  padding: 0 20px;\n  user-select: none;\n  :hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (md = function () {
            return e;
          }),
          e
        );
      }
      function pd() {
        var e = Object(c.a)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 2em;\n  margin-bottom: 0.5em;\n",
        ]);
        return (
          (pd = function () {
            return e;
          }),
          e
        );
      }
      ct.a.extend(yt.a);
      var fd = u.default.div(pd()),
        vd = u.default.div(
          md(),
          function (e) {
            return e.theme.primary1;
          },
          function (e) {
            return e.faded ? 0.3 : 1;
          }
        ),
        bd = Object(u.default)(S.a)(dd()),
        yd = u.default.div(sd()),
        hd = u.default.div(ud()),
        Ed = Object(u.default)(S.b)(ld(), function (e) {
          return e.theme.text1;
        });
      var xd = Object(Pa.h)(function (e) {
        var t = e.lps,
          n = e.disbaleLinks,
          i = e.maxItems,
          o = void 0 === i ? 10 : i,
          c = Object(Xa.a)("(max-width: 600px)"),
          u = Object(Xa.a)("(max-width: 800px)"),
          s = Object(a.useState)(1),
          d = Object(l.a)(s, 2),
          m = d[0],
          p = d[1],
          f = Object(a.useState)(1),
          v = Object(l.a)(f, 2),
          b = v[0],
          y = v[1],
          h = o;
        Object(a.useEffect)(
          function () {
            y(1), p(1);
          },
          [t]
        ),
          Object(a.useEffect)(
            function () {
              if (t) {
                var e = 1;
                Object.keys(t).length % h === 0 && (e = 0),
                  y(Math.floor(Object.keys(t).length / h) + e);
              }
            },
            [h, t]
          );
        var E = function (e) {
            var t = e.lp,
              a = e.index;
            return r.a.createElement(
              yd,
              { style: { height: "48px" }, disbaleLinks: n, focus: !0 },
              !c &&
                r.a.createElement(Ed, { area: "number", fontWeight: "500" }, a),
              r.a.createElement(
                Ed,
                {
                  area: "name",
                  fontWeight: "500",
                  justifyContent: "flex-start",
                },
                r.a.createElement(
                  pr,
                  {
                    style: { marginLeft: c ? 0 : "1rem", whiteSpace: "nowrap" },
                    to: "/account/" + t.user.id,
                  },
                  u
                    ? t.user.id.slice(0, 4) + "..." + t.user.id.slice(38, 42)
                    : t.user.id
                )
              ),
              r.a.createElement(
                Ed,
                null,
                r.a.createElement(
                  pr,
                  { area: "pair", to: "/pair/" + t.pairAddress },
                  r.a.createElement(
                    Ba,
                    null,
                    !c &&
                      r.a.createElement($r, {
                        a0: t.token0,
                        a1: t.token1,
                        size: 16,
                        margin: !0,
                      }),
                    t.pairName
                  )
                )
              ),
              r.a.createElement(Ed, { area: "value" }, on(t.usd, !0))
            );
          },
          x =
            t &&
            t.slice(h * (m - 1), m * h).map(function (e, t) {
              return r.a.createElement(
                "div",
                { key: t },
                r.a.createElement(E, {
                  key: t,
                  index: 10 * (m - 1) + t + 1,
                  lp: e,
                }),
                r.a.createElement(Tr, null)
              );
            });
        return r.a.createElement(
          hd,
          null,
          r.a.createElement(
            yd,
            {
              center: !0,
              disbaleLinks: n,
              style: { height: "fit-content", padding: " 0 0 1rem 0" },
            },
            !c &&
              r.a.createElement(
                S.b,
                { alignItems: "center", justifyContent: "flex-start" },
                r.a.createElement(P, { area: "number" }, "#")
              ),
            r.a.createElement(
              S.b,
              { alignItems: "center", justifyContent: "flex-start" },
              r.a.createElement(P, { area: "name" }, "Account")
            ),
            r.a.createElement(
              S.b,
              { alignItems: "center", justifyContent: "flexEnd" },
              r.a.createElement(P, { area: "pair" }, "Pair")
            ),
            r.a.createElement(
              S.b,
              { alignItems: "center", justifyContent: "flexEnd" },
              r.a.createElement(P, { area: "value" }, "Value")
            )
          ),
          r.a.createElement(Tr, null),
          r.a.createElement(bd, { p: 0 }, x || r.a.createElement(or, null)),
          r.a.createElement(
            fd,
            null,
            r.a.createElement(
              "div",
              {
                onClick: function () {
                  return p(1 === m ? m : m - 1);
                },
              },
              r.a.createElement(vd, { faded: 1 === m }, "\u2190")
            ),
            r.a.createElement(I, null, "Page " + m + " of " + b),
            r.a.createElement(
              "div",
              {
                onClick: function () {
                  return p(m === b ? m : m + 1);
                },
              },
              r.a.createElement(vd, { faded: m === b }, "\u2192")
            )
          )
        );
      });
      function gd() {
        var e = Object(c.a)([
          "\n  @media screen and (max-width: 600px) {\n    width: 100%;\n  }\n",
        ]);
        return (
          (gd = function () {
            return e;
          }),
          e
        );
      }
      var kd = u.default.div(gd());
      var Od = Object(Pa.h)(function () {
        Object(a.useEffect)(function () {
          window.scrollTo(0, 0);
        }, []);
        var e = (function () {
            var e = zn(),
              t = Object(l.a)(e, 2),
              n = t[0],
              r = t[1].updateTopLps,
              i = null === n || void 0 === n ? void 0 : n.topLps,
              o = An();
            return (
              Object(a.useEffect)(function () {
                function e() {
                  return (e = Object(B.a)(
                    H.a.mark(function e() {
                      var t, n, a, i, c, l, u;
                      return H.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a =
                                  null === (t = Object.keys(o)) || void 0 === t
                                    ? void 0
                                    : null ===
                                        (n = t.sort(function (e, t) {
                                          return parseFloat(
                                            o[e].reserveUSD > o[t].reserveUSD
                                              ? -1
                                              : 1
                                          );
                                        })) || void 0 === n
                                    ? void 0
                                    : n.slice(0, 99).map(function (e) {
                                        return e;
                                      })),
                                (e.next = 3),
                                Promise.all(
                                  a.map(
                                    (function () {
                                      var e = Object(B.a)(
                                        H.a.mark(function e(t) {
                                          var n, a;
                                          return H.a.wrap(
                                            function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.prev = 0),
                                                      (e.next = 3),
                                                      Y.query({
                                                        query: Fe,
                                                        variables: {
                                                          pair: t.toString(),
                                                        },
                                                        fetchPolicy:
                                                          "cache-first",
                                                      })
                                                    );
                                                  case 3:
                                                    if (
                                                      ((n = e.sent),
                                                      !(a = n.data))
                                                    ) {
                                                      e.next = 7;
                                                      break;
                                                    }
                                                    return e.abrupt(
                                                      "return",
                                                      a.liquidityPositions
                                                    );
                                                  case 7:
                                                    e.next = 11;
                                                    break;
                                                  case 9:
                                                    (e.prev = 9),
                                                      (e.t0 = e.catch(0));
                                                  case 11:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            e,
                                            null,
                                            [[0, 9]]
                                          );
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                )
                              );
                            case 3:
                              (i = e.sent),
                                (c = []),
                                i
                                  .filter(function (e) {
                                    return !!e;
                                  })
                                  .map(function (e) {
                                    return e.map(function (e) {
                                      var t = o[e.pair.id];
                                      return c.push({
                                        user: e.user,
                                        pairName:
                                          t.token0.symbol +
                                          "-" +
                                          t.token1.symbol,
                                        pairAddress: e.pair.id,
                                        token0: t.token0.id,
                                        token1: t.token1.id,
                                        usd:
                                          (parseFloat(e.liquidityTokenBalance) /
                                            parseFloat(t.totalSupply)) *
                                          parseFloat(t.reserveUSD),
                                      });
                                    });
                                  }),
                                (l = c.sort(function (e, t) {
                                  return e.usd > t.usd ? -1 : 1;
                                })),
                                (u = l.splice(0, 100)),
                                r(u);
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
                }
                !i &&
                  o &&
                  Object.keys(o).length > 0 &&
                  (function () {
                    e.apply(this, arguments);
                  })();
              }),
              i
            );
          })(),
          t = Object(Xa.a)("(max-width: 600px)");
        return r.a.createElement(
          Pr,
          null,
          r.a.createElement(
            qr,
            null,
            r.a.createElement(
              Va,
              null,
              r.a.createElement(_, null, "Wallet analytics"),
              !t && r.a.createElement(Rc, { small: !0 })
            ),
            r.a.createElement(kd, null, r.a.createElement(hs, null)),
            r.a.createElement(
              P,
              { fontSize: "1.125rem", style: { marginTop: "2rem" } },
              "Top Liquidity Positions"
            ),
            r.a.createElement(
              Gc,
              null,
              e && e.length > 0
                ? r.a.createElement(xd, { lps: e, maxItems: 200 })
                : r.a.createElement(or, null)
            )
          )
        );
      });
      function jd() {
        var e = Object(c.a)([
          "\n  background-color: ",
          ";\n  padding: 1.5rem;\n  color: white;\n  width: 100%;\n  text-align: center;\n  font-weight: 500;\n",
        ]);
        return (
          (jd = function () {
            return e;
          }),
          e
        );
      }
      function Sd() {
        var e = Object(c.a)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n",
        ]);
        return (
          (Sd = function () {
            return e;
          }),
          e
        );
      }
      function wd() {
        var e = Object(c.a)([
          "\n  height: 100%;\n  z-index: 9999;\n  transition: width 0.25s ease;\n  background-color: ",
          ";\n",
        ]);
        return (
          (wd = function () {
            return e;
          }),
          e
        );
      }
      function Dd() {
        var e = Object(c.a)([
          "\n  position: fixed;\n  right: 0;\n  bottom: 0rem;\n  z-index: 99;\n  width: ",
          ";\n  height: ",
          ";\n  overflow: auto;\n  background-color: ",
          ";\n  @media screen and (max-width: 1400px) {\n    display: none;\n  }\n",
        ]);
        return (
          (Dd = function () {
            return e;
          }),
          e
        );
      }
      function Td() {
        var e = Object(c.a)([
          "\n  display: grid;\n  grid-template-columns: ",
          ";\n\n  @media screen and (max-width: 1400px) {\n    grid-template-columns: 220px 1fr;\n  }\n\n  @media screen and (max-width: 1080px) {\n    grid-template-columns: 1fr;\n    max-width: 100vw;\n    overflow: hidden;\n    grid-gap: 0;\n  }\n",
        ]);
        return (
          (Td = function () {
            return e;
          }),
          e
        );
      }
      function Ud() {
        var e = Object(c.a)(["\n  position: relative;\n  width: 100%;\n"]);
        return (
          (Ud = function () {
            return e;
          }),
          e
        );
      }
      var Cd = u.default.div(Ud()),
        Fd = u.default.div(Td(), function (e) {
          return e.open ? "220px 1fr 200px" : "220px 1fr 64px";
        }),
        Ad = u.default.div(
          Dd(),
          function (e) {
            return e.open ? "220px" : "64px";
          },
          function (e) {
            return e.open ? "fit-content" : "64px";
          },
          function (e) {
            return e.theme.bg1;
          }
        ),
        Pd = u.default.div(wd(), function (e) {
          return e.theme.onlyLight;
        }),
        Id = u.default.div(Sd()),
        Ld = u.default.div(jd(), function (e) {
          return e.theme.bg1;
        }),
        qd = function (e) {
          var t = e.children,
            n = e.savedOpen,
            a = e.setSavedOpen;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Fd,
              { open: n },
              r.a.createElement(cd, null),
              r.a.createElement(Pd, { id: "center" }, t),
              r.a.createElement(
                Ad,
                { open: n },
                r.a.createElement(Ts, { open: n, setSavedOpen: a })
              )
            )
          );
        };
      var _d = function () {
        var e = Object(a.useState)(!1),
          t = Object(l.a)(e, 2),
          n = t[0],
          i = t[1],
          o = $n(),
          c = Zn(),
          u = wt(),
          s = Object(l.a)(u, 2),
          d = s[0],
          m = s[1],
          p = !(!m || !d) && m - d > 30;
        return r.a.createElement(
          Fa.a,
          { client: Y },
          r.a.createElement(
            Cd,
            null,
            p &&
              r.a.createElement(
                Id,
                null,
                r.a.createElement(
                  Ld,
                  null,
                  "The data on this site has only synced to Binance Smart Chain block "
                    .concat(d, " (out of ")
                    .concat(m, "). Please check back soon.")
                )
              ),
            o && Object.keys(o).length > 0 && c && Object.keys(c).length > 0
              ? r.a.createElement(
                  Aa.a,
                  null,
                  r.a.createElement(
                    Pa.d,
                    null,
                    r.a.createElement(Pa.b, {
                      exacts: !0,
                      strict: !0,
                      path: "/token/:tokenAddress",
                      render: function (e) {
                        var t = e.match;
                        return ne.includes(t.params.tokenAddress.toLowerCase())
                          ? r.a.createElement(Pa.a, { to: "/home" })
                          : tn(t.params.tokenAddress.toLowerCase())
                          ? r.a.createElement(
                              qd,
                              { savedOpen: n, setSavedOpen: i },
                              r.a.createElement(_l, {
                                address: t.params.tokenAddress.toLowerCase(),
                              })
                            )
                          : r.a.createElement(Pa.a, { to: "/home" });
                      },
                    }),
                    r.a.createElement(Pa.b, {
                      exacts: !0,
                      strict: !0,
                      path: "/pair/:pairAddress",
                      render: function (e) {
                        var t = e.match;
                        return ae.includes(t.params.pairAddress.toLowerCase())
                          ? r.a.createElement(Pa.a, { to: "/home" })
                          : tn(t.params.pairAddress.toLowerCase())
                          ? r.a.createElement(
                              qd,
                              { savedOpen: n, setSavedOpen: i },
                              r.a.createElement(nu, {
                                pairAddress: t.params.pairAddress.toLowerCase(),
                              })
                            )
                          : r.a.createElement(Pa.a, { to: "/home" });
                      },
                    }),
                    r.a.createElement(Pa.b, {
                      exacts: !0,
                      strict: !0,
                      path: "/account/:accountAddress",
                      render: function (e) {
                        var t = e.match;
                        return tn(t.params.accountAddress.toLowerCase())
                          ? r.a.createElement(
                              qd,
                              { savedOpen: n, setSavedOpen: i },
                              r.a.createElement(cs, {
                                account: t.params.accountAddress.toLowerCase(),
                              })
                            )
                          : r.a.createElement(Pa.a, { to: "/home" });
                      },
                    }),
                    r.a.createElement(
                      Pa.b,
                      { path: "/home" },
                      r.a.createElement(
                        qd,
                        { savedOpen: n, setSavedOpen: i },
                        r.a.createElement(el, null)
                      )
                    ),
                    r.a.createElement(
                      Pa.b,
                      { path: "/tokens" },
                      r.a.createElement(
                        qd,
                        { savedOpen: n, setSavedOpen: i },
                        r.a.createElement(ls, null)
                      )
                    ),
                    r.a.createElement(
                      Pa.b,
                      { path: "/pairs" },
                      r.a.createElement(
                        qd,
                        { savedOpen: n, setSavedOpen: i },
                        r.a.createElement(us, null)
                      )
                    ),
                    r.a.createElement(
                      Pa.b,
                      { path: "/accounts" },
                      r.a.createElement(
                        qd,
                        { savedOpen: n, setSavedOpen: i },
                        r.a.createElement(Od, null)
                      )
                    ),
                    r.a.createElement(Pa.a, { to: "/home" })
                  )
                )
              : r.a.createElement(or, { fill: "true" })
          )
        );
      };
      o.a.render(
        r.a.createElement(
          function (e) {
            var t = e.children;
            return r.a.createElement(
              h,
              null,
              r.a.createElement(
                St,
                null,
                r.a.createElement(
                  ra,
                  null,
                  r.a.createElement(
                    Vn,
                    null,
                    r.a.createElement(On, null, r.a.createElement(Ta, null, t))
                  )
                )
              )
            );
          },
          null,
          r.a.createElement(function () {
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(E, null),
              r.a.createElement(Cn, null),
              r.a.createElement(da, null)
            );
          }, null),
          r.a.createElement(
            function (e) {
              var t = e.children,
                n = x(),
                a = Object(l.a)(n, 1)[0];
              return r.a.createElement(u.ThemeProvider, { theme: F(a) }, t);
            },
            null,
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(M, null),
              r.a.createElement(_d, null)
            )
          )
        ),
        document.getElementById("root")
      );
    },
  },
  [[456, 1, 2]],
]);
//# sourceMappingURL=main.aadf458f.chunk.js.map
