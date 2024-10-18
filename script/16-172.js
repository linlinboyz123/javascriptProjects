const password = prompt("請輸入6個字以上且不能有空格的密碼");
// 這邊的邏輯是先判斷密碼長度有沒有6個字以上，如果有再去判斷有沒有空格，如果都有符合則顯示做的好，如果有六個字以上但是有空格，則顯示不能有空格
if (password.length > 6) {
    if (password.indexOf(' ') == -1) {
        document.write("有效的密碼做的好");
    } else {
        document.write("不能有空格聽不懂中文嗎");
    }
} else {
    document.write("請輸入六個字以上的密碼");
}