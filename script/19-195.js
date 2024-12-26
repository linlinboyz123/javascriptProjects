// 關於for迴圈的簡單介紹

// 從1開始跑到9
for (let i = 1; i < 10; i++) {
    console.log(i);
}

// 從100跑到0
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

// 19-197:注意你Loop的邏輯，不要出現無限迴圈的情況，你的電腦會吃不消

// 19-198:使用array的迴圈
let sugar = ["candy", "choclate", "food"];
// 從0開始打印到2，顯示索引值以及陣列中的值
for (let i = 0; i < sugar.length; i++) {
    console.log(i, sugar[i]);
}

// 19-199:內嵌式for Loop，迴圈裡面還有迴圈

// 9x9乘法表
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j} `)
    }
}

// 座位表
const seatingChart = [
    ['1', '2', '3'],
    ['4', '5', '6', '10'],
    ['7', '8', '9']
]

for (let i = 0; i < seatingChart.length; i++) {
    const save = seatingChart[i]
    for (let j = 0; j < save.length; j++) {
        console.log(save[j]);
    }
}

// 19-200:while Loop，主要用於沒辦法被計算的次數時，就會用While寫

const screct = "林孟軒";
let guess = prompt("請猜我的名字是甚麼");
while (guess !== screct) {
    guess = prompt("再猜一次");
}

// 19-201:break Keyword，主要用於中斷程式，當你想要強制中斷程式時可以使用
for (let i = 0; i < 1000; i++) {
    if (i === 100) {
        document.write("因為到100了所以我break");
        break;
    }
}