let user = prompt("請輸入你的姓名");
// &&代表的意思為並且，左右兩邊都須符合才會執行，||則是左右兩邊只需一邊符合就好了
if (user.length >= 3 && user.indexOf(' ') === -1) {
    document.write(`恭喜你輸入正確的姓名，你叫${user}`)
} else {
    document.write("請輸入正確的名稱");
}

//門票0~5以及65以上免費
//5-10 $10
//10-65 $20
const age = -66;
if (age > 0 && age <= 5 || age > 65) {
    document.write("你免費")
} else if (age >= 5 && age <= 10) {
    document.write("你$10塊")
} else if (age >= 10 && age <= 65) {
    document.write("你$20塊")
} else {
    document.write("無效的年齡，你個婊子")
}

//NOt邏輯運算子
let firstName = prompt("enter your first name")
if (!firstName) {  //如果他是false的話，重打一次
    document.write("重打一次!!");
}

// switch語法
const day = 1;
// 他會執行與case相等的值的程式碼，記得要加break不然他會一直執行下去
switch (day) {
    case 1:
        document.write("今天是星期一晚上，燈燈燈燈燈燈燈燈燈")
        break;
    case 2:
        document.write("今天是星期二晚上，燈燈燈燈燈燈燈燈燈")
        break;
    case 3:
        document.write("今天是星期三晚上，燈燈燈燈燈燈燈燈燈")
        break;
    case 4:
        document.write("今天是星期四晚上，燈燈燈燈燈燈燈燈燈")
        break;
    case 5:
        document.write("今天是星期五晚上，燈燈燈燈燈燈燈燈燈")
        break;
    default:
        document.write("今天是星期六或日晚上，燈燈燈燈燈燈燈燈燈")
        break;
}