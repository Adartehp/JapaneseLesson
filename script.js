const container = document.getElementById("card-container");

const page = document.body.dataset.page;

const data = {
  
  hiragana : [
  ["あ","a"],["い","i"],["う","u"],["え","e"],["お","o"],
  ["か","ka"],["き","ki"],["く","ku"],["け","ke"],["こ","ko"],
  ["さ","sa"],["し","shi"],["す","su"],["せ","se"],["そ","so"],
  ["た","ta"],["ち","chi"],["つ","tsu"],["て","te"],["と","to"],
  ["な","na"],["に","ni"],["ぬ","nu"],["ね","ne"],["の","no"],
  ["は","ha"],["ひ","hi"],["ふ","fu"],["へ","he"],["ほ","ho"],
  ["ま","ma"],["み","mi"],["む","mu"],["め","me"],["も","mo"],
  ["や","ya"],["ゆ","yu"],["よ","yo"],
  ["ら","ra"],["り","ri"],["る","ru"],["れ","re"],["ろ","ro"],
  ["わ","wa"],["を","wo"],["ん","n"]
], katakana : [
  ["ア","a"], ["イ","i"], ["ウ","u"], ["エ","e"], ["オ","o"],

  ["カ","ka"], ["キ","ki"], ["ク","ku"], ["ケ","ke"], ["コ","ko"],

  ["サ","sa"], ["シ","shi"], ["ス","su"], ["セ","se"], ["ソ","so"],

  ["タ","ta"], ["チ","chi"], ["ツ","tsu"], ["テ","te"], ["ト","to"],

  ["ナ","na"], ["ニ","ni"], ["ヌ","nu"], ["ネ","ne"], ["ノ","no"],

  ["ハ","ha"], ["ヒ","hi"], ["フ","fu"], ["ヘ","he"], ["ホ","ho"],

  ["マ","ma"], ["ミ","mi"], ["ム","mu"], ["メ","me"], ["モ","mo"],

  ["ヤ","ya"], ["ユ","yu"], ["ヨ","yo"],

  ["ラ","ra"], ["リ","ri"], ["ル","ru"], ["レ","re"], ["ロ","ro"],

  ["ワ","wa"], ["ヲ","wo"], ["ン","n"]
]
}


let openedCard = null;

data[page].forEach(([front, back]) => {

  const card = document.createElement("div");
  card.className = "flashcard";

  card.innerHTML = `
    <div class="inner">
      <div class="front">${front}</div>
      <div class="back">${back}</div>
    </div>
  `;

  card.addEventListener("click", () => {

    // 🔥 ปิดใบเก่าก่อน
    if (openedCard && openedCard !== card) {
      openedCard.classList.remove("flipped");
    }

    // 🔁 toggle ใบที่กด
    card.classList.toggle("flipped");

    openedCard = card.classList.contains("flipped")
      ? card
      : null;

  });

  container.appendChild(card);
});