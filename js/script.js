/**
 *                                                                                                                              
 *  ■ ■■  ■  ■   ■■■■■■■■■■■   ■■■■■■■■■■    ■    ■          ■           ■           ■     ■          ■          ■            ■ 
 *  ■■■  ■■ ■■   ■■■■■■■■■■■  ■■■■■■■■■■■    ■■■■■■■■■   ■■■■■■■■     ■■■■■■■■■      ■     ■     ■    ■          ■            ■■
 *   ■■ ■■■■■■■    ■     ■■        ■        ■    ■■      ■■■■■■■■■    ■■■■■■■■■      ■    ■      ■ ■■■■          ■■           ■■
 *  ■■■   ■  ■     ■■■■■■■■        ■        ■  ■■■■■■■     ■             ■        ■■■■■■■ ■■     ■■■ ■■■■        ■■■■■        ■ 
 *    ■            ■     ■■    ■■■■■■■■■■  ■■ ■■ ■■  ■    ■■■■          ■■■■■■      ■   ■  ■    ■■■  ■  ■■       ■            ■ 
 *   ■■ ■■■■■■■    ■     ■■    ■■■■■■■■■■  ■■ ■   ■  ■   ■■■  ■■■■■   ■■■■  ■■■     ■   ■■ ■■  ■■ ■  ■   ■       ■            ■ 
 *   ■■ ■  ■  ■    ■■■■■■■■       ■■■       ■ ■■■■■■■■   ■   ■■■      ■  ■ ■■  ■    ■   ■■ ■■  ■  ■ ■■   ■       ■            ■ 
 *  ■ ■ ■  ■  ■    ■     ■■       ■ ■       ■  ■ ■■        ■■ ■      ■■  ■ ■   ■   ■    ■   ■  ■   ■■    ■   ■■■■■■■          ■ 
 *    ■ ■■■■■■■    ■     ■■■■    ■■  ■      ■  ■■■        ■■  ■      ■   ■■    ■   ■    ■   ■  ■   ■    ■■  ■■   ■■■■■        ■ 
 *    ■ ■  ■  ■  ■■■■■■■■■■     ■■    ■■    ■   ■■        ■■          ■■■■    ■■  ■■    ■       ■■■    ■■   ■■   ■   ■■         
 *    ■ ■■ ■■ ■          ■■   ■■■      ■■   ■  ■■■■■■     ■■■■■■■■    ■■    ■■■   ■  ■■■■            ■■■     ■■■■■            ■■
 *  ■■   ■■■■■■          ■■   ■         ■■  ■ ■■    ■■■     ■■■■■          ■■         ■■             ■        ■■                
 *                                                                                                                              
 *
 *
 *                                                     
 *      ■                              ■          ■    
 * ■    ■■                 ■        ■■■■■■■    ■■■■■■■ 
 * ■                      ■            ■          ■■   
 * ■           ■  ■       ■            ■       ■■■■■■■ 
 * ■           ■■■■■     ■ ■■       ■■■■■■■         ■  
 * ■          ■■■   ■    ■■■■   ■      ■        ■■■■■■ 
 * ■     ■      ■   ■    ■  ■   ■   ■■■■■      ■     ■ 
 * ■    ■■      ■ ■■    ■   ■  ■■  ■   ■ ■■    ■       
 *  ■■■■■       ■       ■    ■■■    ■■■■       ■■■■■■  
 *                                                     
 *                                                     
 */

//うるせえええ！！
for (let i = 0; i < 10; i++) {
    console.log("%cここに何も張らないでください！！" + (" ".repeat(i)), "color: red font-size: 50px")
}

/**
 * ボタンの挙動
 */
$("#do").on("click", function () {
    //天使生成
    let angels = []
    for (let i = 0; i < 5; i++) {
        angels.push(generateAngel())
    }

    //テキストを作成してツイート
    let text = "猫耳天使チャレンジ！\n\n"
        + angels.join("\n") +
        "\n\n#猫耳天使チャレンジ" +
        "\nhttps://nekotenchallenge.pages.dev/"
    twitterShare(text)
})
$("#github").on("click", function () {
    window.location = "https://github.com/JanMaki/NekotenChallenge"
})

//動物一覧
const animals = [
    ["猫", "ねこ"],
    ["犬", "いぬ"],
    ["牛", "うし"],
    ["馬", "うま"],
    ["蟹", "かに"],
    ["亀", "かめ"],
    ["熊", "くま"],
    ["猿", "さる"],
    ["鹿", "しか"],
    ["鯱", "しゃち"],
    ["象", "ぞう"],
    ["虎", "とら"],
    ["豹", "ひょう"],
    ["豚", "ぶた"],
    ["蛇", "へび"],
    ["鰐", "わに"]
]
//部位一覧
const parts = [
    ["耳", "みみ"],
    ["足", "あし"],
    ["頭", "あたま"],
    ["腕", "うで"],
    ["口", "ぐち"],
    ["唇", "くちびる"],
    ["舌", "した"],
    ["尻", "しり"],
    ["爪", "つめ"],
    ["指", "ゆび"],
    ["眼", "め"],
    ["胸", "むね"],
]
//天使の種類
const angelTypes = [
    [90, "天使", "てんし"],
    [5, "大天使", "だいてんし"],
    [3, "座天使", "ざてんし"],
    [2, "智天使", "ちてんし"],
    [1, "熾天使", "してんし"]
]

/**
 * ○○天使を作成する
 *
 * @returns {string} "〇〇天使（よみかた）"の形で出力される
 */
function generateAngel() {
    //動物と部位をランダムで抽出
    let animalIndex = Math.floor(Math.random() * animals.length)
    let animal = animals[animalIndex]
    let partIndex = Math.floor(Math.random() * parts.length)
    const part = parts[partIndex]

    //天使の種類を抽選
    let randomNumber = Math.floor(Math.random() * 100) + 1
    let angelType
    let total = 0
    let angelTypeIndex = 0
    for (; angelTypeIndex < angelTypes.length; angelTypeIndex++) {
        angelType = angelTypes[angelTypeIndex]
        //確率を確認
        total += angelType[0]
        if (randomNumber <= total) {
            break
        }
    }

    //テキストを作成
    let text = animal[0] + part[0] + angelType[1] + "（" + animal[1] + part[1] + angelType[2] + "） "
    //天使の種類に応じて星を与える
    text += "☆".repeat(angelTypeIndex + 1)
    //猫耳天使かを確認
    if (animalIndex === 0 && partIndex === 0) {
        text += "☆☆☆ にゃーん"
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
