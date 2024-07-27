function calculateRank(wins, losses) {
    let rankPoints = wins - losses;
    let rank;
  
    if (wins < 10) {
      rank = "Ferro";
    } else if (wins >= 11 && wins <= 20) {
      rank = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
      rank = "Prata";
    } else if (wins >= 51 && wins <= 80) {
      rank = "Ouro";
    } else if (wins >= 81 && wins <= 90) {
      rank = "Diamante";
    } else if (wins >= 91 && wins <= 100) {
      rank = "Lendário";
    } else if (wins >= 101) {
      rank = "Imortal";
    }
  
    return `O Herói tem de saldo de ${rankPoints} está no nível de ${rank}`;
  }
  
  // Example Usage
  let playerWins = 70;
  let playerLosses = 20;
  let playerRank = calculateRank(playerWins, playerLosses);
  console.log(playerRank);