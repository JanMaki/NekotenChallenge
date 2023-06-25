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
    let data = getData()
    if (data === "") {
        //天使生成
        let angels = []
        for (let i = 0; i < 5; i++) {
            angels.push(generateAngel())
        }
        data = angels.join("\n")
    }

    //データを保存
    saveData(data)

    //テキストを作成してツイート
    let text = "猫耳天使チャレンジ！\n\n"
        + data +
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
    ["鰐", "わに"],
    ["鴨", "かも"],
    ["鷹", "たか"],
    ["鳩", "はと"],
    ["蝉", "せみ"],
    ["鮭", "しゃけ"],
]
//部位一覧
const parts = [
    ["耳", "みみ"],
    ["足", "あし"],
    ["頭", "あたま"],
    ["腕", "うで"],
    ["口", "ぐち"],
    ["唇", "くちびる"],
    ["舌", "じた"],
    ["尻", "じり"],
    ["爪", "づめ"],
    ["指", "ゆび"],
    ["眼", "め"],
    ["胸", "むね"]
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

    //猫耳天使か
    let isNekoten = animalIndex === 0 && partIndex === 0

    //星の数
    let starAmount = angelTypeIndex + 1
    if (isNekoten) starAmount += 3

    //テキストを作成
    let text = animal[0] + part[0] + angelType[1] + "（" + animal[1] + part[1] + angelType[2] + "） "
    //天使の種類に応じて星を与える
    text += "★".repeat(starAmount)
    //猫耳天使かを確認
    if (isNekoten) text += "にゃーん"

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

/**
 * Cookieにデータを保存する
 *
 * @param data データの内容
 */
function saveData(data) {
    document.cookie = "data=" + data.replaceAll("\n", "%") + "; max-age=3600";
}

/**
 * Cookieからデータを取得する
 *
 * @returns {string} データ
 */
function getData() {
    if (document.cookie === "") return ""
    return document.cookie.split("=")[1].replaceAll("%", "\n")
}

