var rules = {
  "S": [
    ["NP", "VP"],
    ["Interj", "NP", "VP"]
  ],
  "NP": [
    ["Det", "N"],
    ["Det", "N", "that", "VP"],
    ["Det", "Adj", "N"]
  ],
  "VP": [
    ["Vtrans", "NP"],
    ["Vintr"]
  ],
  "Interj": [
    ["oh,"],
    ["my,"],
    ["wow,"],
    ["geez,"]
  ],
  "Det": [
    ["this"],
    ["that"],
    ["the"]
  ],
  "N": [
    ["amoeba"],
    ["dichotomy"],
    ["seagull"],
    ["trombone"],
    ["dog"],
    ["restaurant"],
    ["suburb"]
  ],
  "Adj": [
    ["bald"],
    ["smug"],
    ["important"],
    ["tame"],
    ["overstaffed"],
    ["luxurious"],
    ["blue"]
  ],
  "Vtrans": [
    ["computes"],
    ["examines"],
    ["foregrounds"],
    ["prefers"],
    ["interprets"],
    ["spins"]
  ],
  "Vintr": [
    ["coughs"],
    ["daydreams"],
    ["whines"],
    ["slobbers"],
    ["vocalizes"],
    ["sneezes"]
  ]
};

// var rules = {
//   "S": [
//     ["The", "N", "V"]
//   ],
//   "N": [
//     ["cat"],
//     ["dog"]
//   ],
//   "V": [
//     ["meows"],
//     ["barks"]
//   ]
// };

function expand(start, expansion) {
  if (rules[start]) {
    var pick = random(rules[start]);
    console.log(pick);
    for (var i = 0; i < pick.length; i++) {
      expand(pick[i], expansion);
    }
  } else {
    expansion.push(start);
  }
  return expansion.join(" ");
}

var button;
function setup() {
  noCanvas();
  button = createButton('generate');
  button.mousePressed(cfg);
}

function cfg() {

  var start = "S";
  var expansion = [];
  var result = expand(start, expansion);
  console.log(result);
  createP(result);
}
