// 這是一個array也就是陣列，他可以放很多的值以及屬性，相當於集合在一個盒子裡面，就不用散落在各個角落了
let box = [123, "你好嗎", "好羨慕那些天生麗質的人", "世界真不公平"];

let colors = ["red", "blae", "green", "orange"];
// 可以更改陣列的單一索引值，這在字串中是無法做到的
colors[1] = "blue";
// 或者你也可以記住索引值，新增元素進到你的陣列當中
colors[4] = "yellow";
document.write(colors);

// 練習pop(刪除陣列最後一個元素)push(新增陣列最後一個元素)shift(刪除陣列第一個元素)以及Unshift(新增陣列第一個元素)
let name = ["sam", "Lin", "Leoon", "Wetong"];
let delet = name.pop();
let add = name.push("Jim");
document.write(delet);
document.write(add);

