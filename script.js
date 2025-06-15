const a5 = S;
(function (R, F) {
  const ae = {
      R: 0x145,
      F: 0x146,
    },
    a4 = S,
    J = R();
  while (!![]) {
    try {
      const L =
        parseInt(a4(0x140)) / (-0x1 * -0x152b + -0x9d * -0x5 + 0x183b * -0x1) +
        parseInt(a4(0x141)) / (-0x35 * -0xb3 + 0x2314 * 0x1 + -0x4821) +
        -parseInt(a4(0x142)) / (-0x290 + -0x1 * -0x74b + -0x4 * 0x12e) +
        parseInt(a4(0x143)) / (-0x26f1 + 0x18d * -0x13 + 0x446c) +
        parseInt(a4(0x144)) / (-0x149 * 0x18 + 0x1 * -0x2241 + -0xa * -0x683) +
        parseInt(a4(ae.R)) / (0x20eb * 0x1 + 0xede * -0x1 + -0x1207) +
        -parseInt(a4(ae.F)) / (0x13c4 + 0x65 * -0xa + -0xfcb);
      if (L === F) break;
      else J["push"](J["shift"]());
    } catch (M) {
      J["push"](J["shift"]());
    }
  }
})(a, 0x162 * -0x633 + 0xf * 0x9d85 + 0xb857f);
const O = {
  "instagram": {
    "base_url": "https://instagram.com/",
    "handles": {}
  },
  "twitter": {
    "base_url": "https://twitter.com/",
    "handles": {}
  },
  "telegram": {
    "base_url": "https://t.me/",
    "handles": {}
  },
  "minecraft": {
    "base_url": "https://namemc.com/",
    "handles": {}
  },
  "tiktok": {
    "base_url": "https://www.tiktok.com/@",
    "handles": {}
  },
  "steam": {
    "base_url": "https://steamcommunity.com/id/",
    "handles": {}
  },
  "soundcloud": {
    "base_url": "https://soundcloud.com/",
    "handles": {}
  },
  "epicgames": {
    "base_url": "https://fortnitetracker.com/profile/all/",
    "handles": {}
  },
  "twitch": {
    "base_url": "https://www.twitch.tv/",
    "handles": {}
  },
  "discord": {
    "base_url": "",
		"handles": {
		"eurocentrism": 5,
		"pressroom": 3,
		"kneejerk": 3,
		"reinscription": 3,
		"shirtdress": 5,
		"v8mpire + 2016": 30,
		"homeownership": 5,
		"corporatism": 5,
		"reorganisation": 5,
		"c_rrency": 3,
		"s_xuality": 3,
		"o_tlaw": 3,
		"a_xiety": 3,
		"h_liday": 3
    }
  },
  "snapchat": {
    "base_url": "https://snapchat.com/add/",
    "handles": {}
  },
  "kick": {
    "base_url": "https://kick.com/",
    "handles": {}
  }
},
I = {"telegram": {"username": "aberrating", "link": "https://t.me/aberrating"}, "portal (all channels/markets)": {"username": "neptunecheck", "link": "https://t.me/neptunecheck"}},
B = a5(0x147);


function f(R) {
  const a6 = a5,
    F = document["createElement"]("textarea");
  (F["value"] = R),
    document["body"][a6(0x148)](F),
    F["select"](),
    F[a6(0x149)](
      0x8 * 0x456 + 0x5f * -0x47 + -0x857,
      0x906c + 0x3 * -0x10133 + -0x1fce6 * -0x2
    ),
    document[a6(0x14a)](a6(0x14b)),
    document[a6(0x14c)][a6(0x14d)](F);
}

function s() {
  const aA = {
      R: 0x14e,
      F: 0x14f,
      J: 0x150,
      L: 0x154,
      M: 0x156,
      t: 0x158,
      P: 0x151,
      Z: 0x148,
      G: 0x148,
      h: 0x15a,
    },
    a7 = a5,
    R = document[a7(aA.R)](a7(aA.F));
  for (const [F, J] of Object[a7(aA.J)](I)) {
    const L = document[a7(0x151)]("div");
    L["id"] = a7(0x152) + F;
    const M = document[a7(0x151)]("a");
    (M["href"] = J[a7(0x153)]),
      (M[a7(aA.L)] = a7(0x155)),
      (M[a7(aA.M)] = a7(0x157)),
      (M[a7(aA.t)] = F + "\x20");
    const t = document[a7(aA.P)]("a");
    (t["className"] = "name"),
      (t["id"] = F + "_" + J[a7(0x159)]),
      (t["textContent"] = "@" + J[a7(0x159)]),
      L[a7(aA.Z)](M),
      L[a7(aA.G)](t),
      R[a7(0x148)](L),
      t[a7(aA.h)](a7(0x15b), (P) => {
        const a8 = a7;
        f(M[a8(0x15c)]);
      });
  }
}
let N = ![];

function H() {
  const ab = {
      R: 0x15b,
      F: 0x14e,
      J: 0x160,
      L: 0x161,
      M: 0x163,
      t: 0x164,
    },
    a9 = a5,
    R = {
      KyIiN: a9(0x15d),
      WKmZa: a9(0x15e),
      zMdfU: "container",
    };
  !N &&
    (document[a9(0x14e)]("overlay")["addEventListener"](a9(ab.R), D),
    (N = !![]));
  var F = document[a9(ab.F)]("popup");
  (F["style"][a9(0x15f)] = R[a9(ab.J)]),
    (F["style"][a9(ab.L)] = R[a9(0x162)]),
    (document["getElementById"](R[a9(ab.M)])[a9(ab.t)][a9(0x165)] = a9(0x166)),
    (document[a9(0x14e)](a9(0x167))[a9(0x164)][a9(0x168)] = "block");
}

function a() {
  const S2 = [
    "opacity",
    "cinna",
    "music",
    "QDrHw",
    "paused",
    "ended",
    "play",
    "WRpiV",
    "yIrNQ",
    "floor",
    "hLYQp",
    "509952GdiYpN",
    "1926222tiMIPS",
    "115083imihVl",
    "5641772dePqKV",
    "280780ROBaAj",
    "5628972TlZQOA",
    "21289205YkZriX",
    ["song.mp3", "song.mp3:Zone.Identifier"],
    "appendChild",
    "setSelectionRange",
    "execCommand",
    "copy",
    "body",
    "removeChild",
    "getElementById",
    "links",
    "entries",
    "createElement",
    "social_",
    "link",
    "className",
    "social",
    "target",
    "_blank",
    "textContent",
    "username",
    "addEventListener",
    "click",
    "href",
    "50%",
    "translate(-50%,\x20-50%)",
    "top",
    "KyIiN",
    "transform",
    "WKmZa",
    "zMdfU",
    "style",
    "filter",
    "blur(1rem)",
    "overlay",
    "display",
    "popup",
    "200vh",
    "container",
    "blur(0rem)",
    "none",
    "headertext",
    "innerHTML",
    "\x20list",
    "base_url",
    "handles",
    "twitch",
    "last.fm",
    "minecraft",
    "xbox",
    "email",
    "sort",
    "map",
    "asc",
    "name",
    "localeCompare",
    "desc",
    "price-asc",
    "price",
    "price-desc",
    "reverse",
    "length",
    "</span>",
    "<a\x20class=\x22username\x22><span\x20class=\x22highlighted\x22>",
    "</a>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22price\x22><span\x20class=\x22highlighted\x22>$</span>",
    "</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "keydown",
    "WMtJl",
    "two",
    "category",
    "key",
    "IvNwq",
    "change",
    "ctrlKey",
    "metaKey",
    "altKey",
    "shiftKey",
    "F12",
    "preventDefault",
    "stopPropagation",
    "userAgent",
    "Mobile",
    "zoom",
    "200%",
    "indexOf",
    "Chrome",
    "height",
    "50vh",
    "classList",
    "hover",
    "location",
    "split",
    "trim",
    "toLowerCase",
    "platform_",
    "img",
    "src",
    "cinna.webp",
    "falling-leaf",
    "FCzFj",
    "random",
    "innerWidth",
    "left",
    "scale(",
    ")\x20rotate(",
    "transitionend",
    "\x20translateY(",
    "deg)\x20translateX(",
    "DOMContentLoaded",
    "ZaKjt",
  ];
  a = function () {
    return S2;
  };
  return a();
}

function D() {
  const aT = {
      R: 0x16b,
      F: 0x16c,
      J: 0x16d,
    },
    aa = a5;
  var R = document[aa(0x14e)](aa(0x169));
  (R["style"]["top"] = aa(0x16a)),
    (document[aa(0x14e)](aa(aT.R))["style"]["filter"] = aa(aT.F)),
    (document[aa(0x14e)]("overlay")["style"][aa(0x168)] = aa(aT.J));
}
let Q = "";

function j(R) {
  const ar = {
      R: 0x16e,
      F: 0x170,
      J: 0x175,
      L: 0x14e,
      M: 0x178,
      t: 0x17a,
      P: 0x17d,
      Z: 0x178,
      G: 0x184,
      h: 0x186,
      q: 0x16f,
    },
    ad = {
      R: 0x17f,
    },
    ao = {
      R: 0x17f,
    },
    aS = a5;
  (Q = R), (document["getElementById"](aS(ar.R))[aS(0x16f)] = R + aS(ar.F));
  const F = O[R][aS(0x171)],
    J = O[R][aS(0x172)];
  let L =
      R === "steam"
        ? "id/"
        : R === "soundcloud" || R === aS(0x173) || R === aS(0x174)
        ? "/"
        : R === aS(ar.J) || R === aS(0x176) || R === aS(0x177)
        ? ""
        : "@",
    M = document[aS(ar.L)](aS(ar.M))["value"];
  const t = Object[aS(0x150)](J)[aS(0x179)](([h, q]) => ({
    name: h,
    price: q,
  }));
  switch (M) {
    case aS(ar.t):
      t[aS(0x178)]((h, q) => h[aS(0x17b)][aS(0x17c)](q[aS(0x17b)]));
      break;
    case aS(ar.P):
      t[aS(ar.Z)]((h, q) => q[aS(0x17b)]["localeCompare"](h[aS(0x17b)]));
      break;
    case aS(0x17e):
      t[aS(0x178)]((h, q) => {
        const aR = aS;
        if (h["price"] === null && q["price"] === null)
          return 0x1068 + 0x1 * 0x214f + -0x31b7;
        if (h[aR(0x17f)] === null) return 0x84 * 0x2b + -0x8d3 + -0xd58;
        if (q["price"] === null) return -(0x1b54 + 0x2685 + 0x41d8 * -0x1);
        return h[aR(0x17f)] - q[aR(ao.R)];
      });
      break;
    case aS(0x180):
      t["sort"]((h, q) => {
        const aF = aS;
        if (h[aF(0x17f)] === null && q[aF(ad.R)] === null)
          return 0x23f5 + -0x20ab + -0x34a * 0x1;
        if (h["price"] === null) return -0x12f5 * 0x1 + 0x28f + 0x11 * 0xf7;
        if (q["price"] === null) return -(0x1506 + -0x18b9 + -0x9e * -0x6);
        return q["price"] - h[aF(0x17f)];
      });
      break;
    case "recent":
      t[aS(0x181)]();
      break;
    case aS(0x182):
      t[aS(0x178)]((h, q) => h[aS(0x17b)][aS(0x182)] - q[aS(0x17b)]["length"]);
      break;
  }
  const P = {};
  for (const h of t) {
    P[h[aS(0x17b)]] = h[aS(0x17f)];
  }
  let Z = "";
  for (const [q, v] of Object["entries"](P)) {
    var G = v === null ? "?" : v;
    Z +=
      "<div\x20class=\x22handle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
      (F !== ""
        ? "<a\x20class=\x22username\x22\x20target=\x22_blank\x22\x20href=\x22" +
          F +
          q +
          "\x22><span\x20class=\x22highlighted\x22>" +
          L +
          aS(0x183) +
          q +
          "</a>"
        : aS(ar.G) + L + "</span>" + q + aS(0x185)) +
      aS(ar.h) +
      G +
      aS(0x187);
  }
  document["getElementById"](aS(0x172))[aS(ar.q)] = Z;
}

function i() {
  const az = {
      R: 0x178,
      F: 0x150,
      J: 0x151,
      L: 0x18a,
      M: 0x154,
      t: 0x18b,
      P: 0x158,
      Z: 0x14e,
      G: 0x14e,
      h: 0x15a,
      q: 0x18e,
    },
    aJ = a5,
    R = {
      WMtJl: function (L, M) {
        return L % M;
      },
      LPVTG: aJ(0x188),
      IvNwq: aJ(az.R),
    },
    F = document[aJ(0x14e)]("categories");
  let J;
  for (const [L, [M, t]] of Object[aJ(az.F)](Object["entries"](O))) {
    (R[aJ(0x189)](L, -0xc76 + 0x11bf + 0x547 * -0x1) ===
      0x2b9 + -0x59 * -0x56 + -0x209f ||
      L === 0x546 + 0x25 * -0x7 + -0x443) &&
      ((J = document[aJ(az.J)]("div")),
      (J["className"] = aJ(az.L)),
      F[aJ(0x148)](J));
    const P = document[aJ(0x151)]("a");
    (P[aJ(az.M)] = aJ(az.t)),
      (P["id"] = "platform_" + M),
      (P[aJ(az.P)] = M),
      J[aJ(0x148)](P),
      P[aJ(0x15a)](aJ(0x15b), (Z) => {
        j(M), H();
      });
  }
  document[aJ(az.Z)]("close")["addEventListener"]("click", D),
    document["addEventListener"](R["LPVTG"], (Z) => {
      const aL = aJ;
      if (Z[aL(0x18c)] === "Escape") D();
    }),
    document[aJ(az.G)](R[aJ(0x18d)])[aJ(az.h)](aJ(az.q), (Z) => {
      j(Q);
    });
}

function Y() {
  const ak = {
      R: 0x190,
      F: 0x191,
      J: 0x192,
      L: 0x18c,
      M: 0x194,
    },
    aM = a5;
  window[aM(0x15a)]("keydown", function (R) {
    const at = aM;
    (((R[at(0x18f)] ||
      (R[at(ak.R)] && R[at(ak.F)]) ||
      (R[at(0x18f)] && R[at(ak.J)])) &&
      (R["key"] === "U" ||
        R[at(0x18c)] === "I" ||
        R["key"] === "J" ||
        R[at(ak.L)] === "C")) ||
      R["key"] === at(0x193)) &&
      (R[at(ak.M)](), R[at(0x195)]());
  }),
    window[aM(0x15a)]("contextmenu", function (R) {
      R["preventDefault"]();
    });
}

function W() {
  const aO = {
      R: 0x196,
      F: 0x197,
      J: 0x14c,
      L: 0x19a,
      M: 0x19b,
      t: 0x19c,
      P: 0x14e,
    },
    aU = {
      R: 0x19e,
    },
    aP = a5;
  if (
    typeof window["orientation"] !== "undefined" ||
    navigator[aP(aO.R)]["indexOf"](aP(aO.F)) !==
      -(-0x1778 + 0x1c9d + -0x292 * 0x2)
  ) {
    document[aP(aO.J)][aP(0x164)][aP(0x198)] = aP(0x199);
    navigator[aP(aO.R)][aP(aO.L)](aP(aO.M)) !==
      -(-0x1 * -0xc4b + 0x215a + 0xfe * -0x2e) &&
      (document[aP(0x14c)][aP(0x164)][aP(aO.t)] = aP(0x19d));
    var R = document[aP(aO.P)]("top");
    setTimeout(function () {
      const aZ = aP;
      R[aZ(aU.R)]["add"](aZ(0x19f));
    }, -0xff5 * 0x1 + 0x19f6 * 0x1 + -0x619);
  }
}

function a0() {
  const aI = {
      R: 0x1a0,
      F: 0x1a2,
      J: 0x1a3,
      L: 0x1a4,
    },
    aG = a5;
  var R = window[aG(aI.R)]["href"]
      [aG(0x1a1)]("/")
      [-0x1 * 0x72d + 0x1 * 0x23c1 + -0x67 * 0x47][aG(aI.F)]()
      [aG(aI.J)](),
    F = document[aG(0x14e)](aG(aI.L) + R);
  F && F["click"]();
}

function a1() {
  const aN = {
      R: 0x151,
      F: 0x1a6,
      J: 0x1a8,
      L: 0x1a9,
      M: 0x1aa,
      t: 0x1aa,
      P: 0x164,
      Z: 0x1ae,
    },
    as = {
      R: 0x161,
    },
    ah = a5,
    R = {
      xrYtl: ah(0x1a5),
      FCzFj: function (q, v) {
        return q * v;
      },
    },
    F = document[ah(aN.R)](R["xrYtl"]);
  (F[ah(aN.F)] = ah(0x1a7)), (F[ah(0x154)] = ah(aN.J));
  const J =
      R[ah(aN.L)](Math[ah(aN.M)](), window[ah(0x1ab)]) -
      (0x1c76 + 0x1be3 * 0x1 + -0x37f5),
    L = -(-0x1042 + 0x1a44 + -0x99e),
    M = R[ah(0x1a9)](
      Math["random"](),
      0x14c5 * -0x1 + -0xd * 0x1e2 + -0x1 * -0x2d99
    ),
    t =
      Math["random"]() * (-0x1481 + -0x1 * -0x1a45 + -0x5c4 + 0.5) +
      (-0x9d8 + 0x1e27 + -0x144f + 0.3),
    P =
      Math["random"]() * (0x1 * -0x819 + 0x2 * -0x79c + -0x1819 * -0x1) -
      (0x123 * -0x1 + 0x1 * 0xc09 + -0xa82),
    Z =
      Math[ah(aN.t)]() > 0x1 * -0x2207 + 0xef2 * -0x2 + 0x3feb + 0.5
        ? -0x1e0e + -0x174d + 0x355c
        : -(0x1ebc + 0x13b8 * -0x1 + -0xb03),
    G = Math[ah(aN.M)]() * (-0xa * 0x221 + -0x1 * -0x220e + -0xb5c),
    h =
      Math[ah(0x1aa)]() * (0x2 * 0x539 + 0xd5d + -0x17c5) -
      (0x12d8 + 0x2341 + 0x1 * -0x3614);
  (F[ah(0x164)][ah(0x1ac)] = J + "px"),
    (F["style"][ah(0x15f)] = L + "px"),
    (F[ah(aN.P)]["transform"] =
      ah(0x1ad) + t + ah(aN.Z) + M + "deg)\x20translateX(" + P + "px)"),
    F[ah(0x15a)](ah(0x1af), () => {
      const aq = ah;
      document["contains"](F) && document[aq(0x14c)][aq(0x14d)](F);
    }),
    setTimeout(() => {
      const av = ah;
      (F[av(0x164)][av(as.R)] +=
        av(0x1b0) +
        (window["innerHeight"] + (-0x1f30 + -0xfa9 + 0x2f0b)) +
        "px)\x20rotate(" +
        (M + (0x284 + -0xce2 + 0x2 * 0x697) * Z + G) +
        av(0x1b1) +
        h +
        "px)"),
        (F[av(0x164)]["opacity"] = "0");
    }, 0x235 * -0x6 + 0xf7c + -0xc * 0x2f),
    document["body"]["appendChild"](F);
}

function a2() {
  const aQ = {
      R: 0x1b3,
    },
    aD = {
      R: 0x14e,
    },
    ac = a5,
    R = {
      ZaKjt: ac(0x1b2),
    };
  document[ac(0x15a)](R[ac(aQ.R)], function () {
    const aX = ac;
    var F = document[aX(aD.R)](aX(0x167));
    (F[aX(0x164)][aX(0x1b4)] = "0"),
      setTimeout(function () {
        const aw = aX;
        F["style"][aw(0x168)] = "none";
      }, 0x4 * -0x7eb + 0xb47 + 0x17e9);
  });
}

function S(R, F) {
  const J = a();
  return (
    (S = function (L, M) {
      L = L - (-0x2399 + -0x3 * -0x33b + 0x13c * 0x16);
      let t = J[L];
      return t;
    }),
    S(R, F)
  );
}

function a3() {
  const S1 = {
      R: 0x14e,
      F: 0x15a,
      J: 0x14e,
      L: 0x1b6,
    },
    S0 = {
      R: 0x1b7,
      F: 0x1ba,
      J: 0x15a,
      L: 0x1b9,
      M: 0x14e,
      t: 0x169,
      P: 0x164,
      Z: 0x16b,
      G: 0x164,
      h: 0x164,
    },
    aW = {
      R: 0x1bd,
      F: 0x1be,
      J: 0x1aa,
    },
    ag = a5;
  setTimeout(function () {
    a0();
  }, -0x251d + 0x4f4 + 0x2480 * 0x1),
    document[ag(S1.R)](ag(0x1b5))[ag(S1.F)](ag(0x15b), () => {
      const au = ag;
      for (
        let F = 0x10f * -0xd + 0x170e + 0x1 * -0x94b;
        F < window[au(0x1ab)] / (-0x3 * 0x165 + -0xfe7 * -0x2 + -0x1 * 0x1b9b);
        F++
      ) {
        a1();
      }
    });
  var R = document[ag(S1.J)](ag(S1.L));
  (R["volume"] = -0xf7b + 0x1f48 * -0x1 + 0x2ec3 * 0x1 + 0.1),
    document[ag(0x15a)]("click", function () {
      const an = ag,
        F = {
          hLYQp: function (J, L) {
            return J * L;
          },
        };
      if ("QDrHw" === an(S0.R))
        (R[an(0x1b8)] || R[an(0x1b9)]) &&
          (R[an(S0.F)](),
          R[an(S0.J)](an(S0.L), function () {
            const aV = an;
            aV(0x1bb) === aV(0x1bc)
              ? F["click"]()
              : ((R[aV(0x1a6)] =
                  B[
                    Math[aV(aW.R)](F[aV(aW.F)](Math[aV(aW.J)](), B[aV(0x182)]))
                  ]),
                R["play"]());
          }));
      else {
        var L = L[an(S0.M)](an(S0.t));
        (L[an(S0.P)]["top"] = "200vh"),
          (M[an(S0.M)](an(S0.Z))[an(S0.G)][an(0x165)] = "blur(0rem)"),
          (t["getElementById"]("overlay")[an(S0.h)]["display"] = an(0x16d));
      }
    });
}
a2(), W(), Y(), s(), i(), a3();
