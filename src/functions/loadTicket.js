const SIZES = ['Big', 'Mega', 'Super', 'Giant', 'Ultra', 'XXL'];
const RICHES = ['Riches', 'Winnings', 'Money', 'Gold', 'Treasure', 'Loot']; 


export default function loadTicket(winners, slots, accuracy) {


  let winningNumbers = [];
  let slotNumbers = [];
  let totalValue = 0;
  let individuals = [];

  const multiplier = (1 / accuracy);
  const range = slots * multiplier;

  for (let i=0; i<winners; i++) {
    let roll = Math.floor(Math.random() * slots * multiplier);
    while (winningNumbers.includes(roll)) {
      roll = Math.floor(Math.random() * slots * multiplier);
    };
    winningNumbers.push({
      number: roll,
      viewed: false,
    });
  };

  for (let i=0; i<slots; i++) {

    let slotRoll = Math.floor(Math.random() * range);
    slotNumbers.push({
      number: slotRoll,
      viewed: false,
    });

    if (winningNumbers.some(num => num.number === slotRoll)) {
      if (individuals.includes(slotRoll)) {
        totalValue += 5;
      } else {
        individuals.push(slotRoll);
        totalValue += 10;
      };
    };
  };

  const ticket = {
    ticketName: SIZES[Math.floor(Math.random() * SIZES.length)] + ' ' + RICHES[Math.floor(Math.random() * RICHES.length)],
    winningNumbers: winningNumbers.sort((a, b) => a.number - b.number),
    slots: slotNumbers,
    price: (winners - 2) * 5,
    serialNo: Math.floor(Math.random() * 20000),
    claimed: false,
    winnings: 0,
    totalValue: totalValue,
  };

  return ticket;
} 