let random = Math.floor(Math.random() * 10) + 1
if (random < 5) {
    document.write("你的數字小於五");
    document.write(random);
}

const age = prompt("請輸入您的年齡");
if (age < 0) {
    document.write("你是授精軟是嘛");
} else if (age <= 5) {
    document.write("你是個baby，你可以免費入場");
} else if (age <= 10) {
    document.write("你是個兒童，請付10塊美金");
} else if (age <= 65) {
    document.write("你是個成人，請付20塊美金");
} else if (age <= 110) {
    document.write("你是個老人，請免費入場");
} else if (age >= 111) {
    document.write("千年老妖，我們不歡迎你");
}
