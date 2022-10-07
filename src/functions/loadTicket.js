const SIZES = ['Big', 'Mega', 'Super', 'Giant', 'Ultra', 'XXL'];
const RICHES = ['Riches', 'Winnings', 'Money', 'Gold', 'Treasure', 'Loot']; 


export default function loadTicket(winners, slots, accuracy) {


  let winningNumbers = [];
  let slotNumbers = [];
  const multiplier = (1 / accuracy);
  const range = slots * multiplier;

  for (let i=0; i<winners; i++) {
    let roll = Math.floor(Math.random() * slots * multiplier);
    while (winningNumbers.includes(roll)) {
      roll = Math.floor(Math.random() * slots * multiplier);
    };
    winningNumbers.push(roll);
  };

  for (let i=0; i<slots; i++) {
    slotNumbers.push({
      number: Math.floor(Math.random() * range),
      viewed: false,
    });
  } 

  const ticket = {
    ticketName: SIZES[Math.floor(Math.random() * SIZES.length)] + ' ' + RICHES[Math.floor(Math.random() * RICHES.length)],
    winningNumbers: winningNumbers.sort((a, b) => a - b),
    slots: slotNumbers,
    price: (winners - 2) * 5,
    serialNo: Math.floor(Math.random() * 20000),
    claimed: false,
    winnings: 0,
  };

  return ticket;
} 