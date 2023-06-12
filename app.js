let homeScore = 0;
let awayScore = 0;
let winningTeam = 'none'

// Need a funtion that adds points to the appropriate team with the onclick invoke

// Need a reset function to reset the scores to 0;

// Need a function that updates the appropriate teams score in HTML

// function addHomeScore() {
//   homeScore += 1;
//   showHomeScore();
// }

// function addAwayScore() {
//   awayScore += 1;
//   showAwayScore();
// }

// function showHomeScore() {
//   let shownHomeScore = document.getElementById('home-score');
//   shownHomeScore.innerText = homeScore;
// }

// function showAwayScore() {
//   let shownAwayScore = document.getElementById('away-Score');
//   shownAwayScore.innerText = awayScore;
// }



function resetScore() {
  homeScore = 0;
  awayScore = 0;
  let showAwayScore = document.getElementById('away-Score')
  let showHomeScore = document.getElementById('home-score')
  let teamWins = document.getElementById('announcer')
  showHomeScore.innerText = homeScore;
  showAwayScore.innerText = awayScore;
  teamWins.innerText = (`First to 20 Wins!`)
}

function addScore(team, value) {
  if (homeScore >= 20 || awayScore >= 20) {
    if (homeScore >= awayScore) {
      winningTeam = 'HOME'
    } else {
      winningTeam = 'AWAY'
    }
    showWinningTeam(winningTeam)
  }

  console.log('point')
  if (homeScore < 20 && awayScore < 20) {
    if (team == 'home') {
      homeScore += value;
      showScore(team);
      return
    } else {
      awayScore += value;
      showScore(team);
      return
    }
  }
}

function showWinningTeam(winningTeam) {
  let teamWins = document.getElementById('announcer')
  teamWins.innerText = (`${winningTeam} TEAM HAS WON!!!`)
}

function showScore(team) {
  if (team == 'home') {
    let shownScore = document.getElementById('home-score');
    shownScore.innerText = homeScore;
  } else {
    let shownScore = document.getElementById('away-Score');
    shownScore.innerText = awayScore;
  }
}

