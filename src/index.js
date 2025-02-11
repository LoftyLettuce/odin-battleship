import "./styles.css"
import { game } from "./game";
import { dom } from "./dom";
import { Human, Bot } from "./player";
function createHome(){
  const home = document.createElement('div');
  home.classList.add('home');
  const table = dom.createTable(7);
  home.appendChild(table);
  let player = new Human('Human');
  let bot = new Bot('Bot');
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
export function createCurtains(name){
  const announcement = document.createElement('div');
  announcement.classList.add('congrat');
  const h1 = document.createElement('h1');
  h1.textContent = name + ' WIN!!!';
  announcement.appendChild(h1);
  const btn = document.createElement('button');
  btn.textContent = 'Back to home';
  btn.addEventListener('click', ()=>{
    document.body.removeChild(document.body.querySelector('div'));
    document.body.appendChild(createHome());
  })
  announcement.appendChild(btn);
  return announcement;
}

window.addEventListener('load', ()=>{
  document.querySelector('body').appendChild(createHome());
})