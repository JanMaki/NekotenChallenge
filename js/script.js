/**
 * ボタンの挙動
 */
$("button.button").on("click", function () {
    //天使生成
    let angels = []
    for (let i = 0; i < 5 ; i++){
        angels.push(generateAngel())
        console.log(angels)
    }

    //テキストを作成してツイート
    let text = "猫耳天使チャレンジ！\n\n"
        + angels.join("\n") +
        "\n\n#猫耳天使チャレンジ"
    twitterShare(text)
})


//動物一覧
const animals = [
    ["猫","ねこ"],
    ["犬","いぬ"],
    ["牛","うし"],
    ["馬","うま"],
    ["蟹","かに"],
    ["亀","かめ"],
    ["熊","くま"],
    ["猿","さる"],
    ["鹿","しか"],
    ["鯱","しゃち"],
    ["象","ぞう"],
    ["虎","とら"],
    ["豹","ひょう"],
    ["豚","ぶた"],
    ["蛇","へび"],
    ["鰐","わに"]
]
//部位一覧
const parts = [
    ["耳","みみ"],
    ["足","あし"],
    ["頭","あたま"],
    ["腕","うで"],
    ["口","ぐち"],
    ["唇","くちびる"],
    ["舌","した"],
    ["尻","しり"],
    ["爪","つめ"],
    ["指","ゆび"],
    ["眼","め"],
    ["胸","むね"],
]

/**
 * ○○天使を作成する
 *
 * @returns {string} "〇〇天使（よみかた）"の形で出力される
 */
function generateAngel(){
    //動物と部位をランダムで抽出
    let animalIndex = Math.floor(Math.random() * animals.length);
    let animal = animals[animalIndex];
    let partIndex = Math.floor(Math.random() * parts.length);
    const part = parts[partIndex];

    //テキストを作成
    let text = animal[0]+part[0]+"天使（"+animal[1]+part[1]+"てんし）"
    //猫耳天使かを確認
    if (animalIndex === 0 && partIndex === 0){
        text += "　にゃーん"
    }

    return text
}

/**
 * ツイートをする画面に遷移する
 * 改行とかはいい感じに処理する
 *
 * @param text ツイートする内容
 */
function twitterShare(text) {
    window.location = "https://twitter.com/share?text=" + text
        .replaceAll("#", "%23")
        .replaceAll(" ", "%20")
        .replaceAll("\n", "%0a")
}
