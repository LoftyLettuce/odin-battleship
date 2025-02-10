import "./styles.css"
import { game } from "./game";
import { dom } from "./dom";
import { Human, Bot } from "./player";
function createHome(){
  const home = document.createElement('div');
  home.classList.add('home');
  const table = dom.createTable(7);
  home.appendChild(table);
  let player = new Human();
  let bot = new Bot();
  dom.renderTable(player, table);
  home.appendChild(dom.createInput(player, table));
  const startBtn = document.createElement('button');
  startBtn.textContent = 'Start Game';
  startBtn.addEventListener('click', ()=>{
    document.body.removeChild(home);
    game.innit(player, bot);
  })
  home.appendChild(startBtn);
  return home;
}


window.addEventListener('load', ()=>{
  document.querySelector('body').appendChild(createHome());
})