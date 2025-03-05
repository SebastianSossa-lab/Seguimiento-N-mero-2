let cartas = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let carta1 = cartas[Math.floor(Math.random() * cartas.length)];

let carta2 = cartas[Math.floor(Math.random() * cartas.length)];

let total = (['J', 'Q', 'K'].includes(carta1) ? 10 : carta1 === 'A' ? 11 : parseInt(carta1)) +
            (['J', 'Q', 'K'].includes(carta2) ? 10 : carta2 === 'A' ? 11 : parseInt(carta2));
if (total > 21 && (carta1 === 'A' || carta2 === 'A')) total -= 10;


console.log(`Tu mano: ${carta1}, ${carta2} (Total: ${total})`);

if (total < 21) console.log("¡Todavía estás en el juego!");

else if (total === 21) console.log("¡Blackjack!");

else console.log("Te pasaste. ¡Pierdes!");
