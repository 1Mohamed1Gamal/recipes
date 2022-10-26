let urlInput = document.querySelector("[name = 'url']");
let btnSupmit = document.querySelector("#label");
let result = document.querySelector(".result");
document.forms[0].onsubmit = function (e) {
  let addImage = urlInput.value;
  console.log(addImage);
  let img = document.createElement("img");
  img.classList = "box";
  img.setAttribute("src", addImage);
  e.preventDefault();
  result.appendChild(img);
  console.log(result);
  console.log(img);
  urlInput.value = "";
};

// console.log(result);