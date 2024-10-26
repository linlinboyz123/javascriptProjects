// javascript的物件可以創建不同類型的資料
const person = {
    hair: "黑色",
    eye: "big",
    Live: true,
    likeFood: ["apple", "pork"]
}

// 18-191:怎麼呼叫Object(物件)，javascript的物件會把key自動轉成字串
// 第一種呼叫物件
document.write(person["hair"]);
// 第二種呼叫物件
document.write(person.eye);

// 18-192:新增或修改物件裡的KeyValue
// 新增color:白這個keyValue
person["color"] = "白";
// 新增body:高的這個keyValue
person.body = "高的";
// 修改hair的內容
person.hair = "gold";

// 18-193:把array跟Object混合搭配是非常常見的一種方式
const room = [
    { name: "林孟軒", age: 21, height: 175 },
    { name: "文童", age: 21, height: 174 }
];
// 呼叫文童
document.write(room[1].name);