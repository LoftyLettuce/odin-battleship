import "./styles.css"
import { game } from "./game";
import { dom } from "./dom";
import { Human, Bot } from "./player";
function createHome(){
  const home = document.createElement('div');
  home.classList.add('home');
  const h1 = document.createElement('h1');
  h1.textContent = "BATTLESHIP";
  home.appendChild(h1);
  const table = dom.createTable(7);
  home.appendChild(table);
  let player = new Human('Human');
  let bot = new Bot('Bot');
  dom.renderTable(player, table);
  home.appendChild(dom.createInput(player, table));
  const startBtn = document.createElement('button');
  startBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>play</title><path d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>';
  startBtn.addEventListener('click', ()=>{
    document.body.replaceChildren();
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
  btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home-circle-outline</title><path d="M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14" /></svg>';
  btn.addEventListener('click', ()=>{
    document.body.replaceChildren();
    document.body.appendChild(createHome());
  })
  announcement.appendChild(btn);
  return announcement;
}

window.addEventListener('load', ()=>{
  document.querySelector('body').appendChild(createHome());
})