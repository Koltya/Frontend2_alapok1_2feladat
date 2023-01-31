const players = ["Peter", "Kate", "John"];

// i változó deklarálása után, while ciklussal iterálunk végig a tömb elemein
let i = 0;

while (i < players.length) {
  i++;
  console.log(i + ". " + players[i - 1]);
}
