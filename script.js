let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let h2 = document.querySelector("h2");

btn.addEventListener("click", () => {
  let text = input.value.trim();
  if (text === "") {
    h2.style.color = "red";
    return;
  } else {
    h2.style.color = "black";
  }

  let li = document.createElement("li");
  let delbtn = document.createElement("p");

  li.textContent = text;

  delbtn.textContent = "❌";
  delbtn.style.fontSize = "10px";
  delbtn.style.cursor = "pointer";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.alignItems = "center";

  li.style.backgroundColor = "dodgerblue";
  li.style.color = "white";
  li.style.padding = "4px";
  li.style.listStyle = "none";

  li.append(delbtn);
  ul.append(li);

  delbtn.addEventListener("click", () => {
    li.remove();
  });


  input.value = "";
});
