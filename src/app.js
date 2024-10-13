window.onload = generador();
function generador() {
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class ",
    "when I was sleeping ",
    "while I was exercising ",
    "during my lunch ",
    "while I was praying "
  ];

  let al1 = Math.floor(Math.random() * who.length);
  let al2 = Math.floor(Math.random() * action.length);
  let al3 = Math.floor(Math.random() * what.length);
  let al4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excusas").innerHTML =
    who[al1] + action[al2] + what[al3] + when[al4];
}
