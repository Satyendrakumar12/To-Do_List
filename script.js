let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  let text = input.value.trim();
  let li = document.createElement("li");
  li.style.backgroundColor = "cyan";
  li.style.padding = "4px";
  li.style.listStyle = "none"

  if (text === "") {
    alert("Please enter task");
    return;
  }
  ul.append(li);
  li.textContent = text;`

  input.value = "";
});
