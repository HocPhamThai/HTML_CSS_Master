let elementID = document.getElementById("id-1");
console.log(elementID);

let elementClass = document.getElementsByClassName("group-class");
console.log(elementClass);
console.log(elementClass[0]);
elementClass[0].style.color = "orange";

let elementTag = document.getElementsByTagName("div");
console.log(elementTag);
console.log(elementTag[3]);
elementTag[3].style.color = "orangered";
