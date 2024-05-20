const result = document.getElementsByClassName('result')[0];
const getContainer = document.getElementsByClassName('container')[0];

const showCover = () => {
  result.innerHTML = "RANDOM <br> 2v2";
  result.setAttribute('class', 'result cover');
};

const createButton = (name) => {
  const button = document.createElement('button');
  button.innerHTML = (name).toLowerCase();
  getContainer.appendChild(button);
  button.setAttribute('class', `${name}Button`);
};

const randomTeamGenerator = () => {
  const players = ['Leo', 'Bruno', 'Raphael', 'Gabriel', 'Nicolas'];
  let teamA = [];
  let teamB = [];

  while(teamB.length < 2){
    const getRandomPlayer = players[Math.floor(Math.random() * players.length)];

    if(!teamA.includes(getRandomPlayer) && teamA.length < 2) {
      teamA.push(getRandomPlayer);
    }else if(!teamB.includes(getRandomPlayer) && !teamA.includes(getRandomPlayer)){     
      teamB.push(getRandomPlayer);
    }
  }
  return  {teamA, teamB};
};

const showNextMatch = (randomTeamsObject) => {
  result.setAttribute('class', 'result');
  const teams = randomTeamsObject();

  result.innerHTML = 
  `${teams.teamA[0]} e ${teams.teamA[1]} <br>
              VS <br>
  ${teams.teamB[0]} e ${teams.teamB[1]}`
};

const showRandomAnimation = () => {
  for(let i = 0; i < 250; i++) {
    setTimeout(() => {
      showNextMatch(randomTeamGenerator)
    }, i * 11);
  }
};

showCover();
createButton('random');
const randomButton = document.getElementsByClassName('randomButton')[0];

createButton('reset');
const resetButton = document.getElementsByClassName('resetButton')[0];

randomButton.addEventListener('click', () => showRandomAnimation());
result.addEventListener('click', () => showCover());
resetButton.addEventListener('click', () => showCover());