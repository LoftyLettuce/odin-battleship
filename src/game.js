import { Human, Bot } from "./player";
import { dom } from "./dom";
export const game = function(){
  const root = document.querySelector('body');
  let player = new Human("steve");
  let bot = new Bot("bot");
  let tables;
  function innit(){
    dom.createTable(7);
    dom.createTable(7);
    tables = root.querySelectorAll('table');
    let plrs = [bot, player];
    for (let i = 0; i < 2; i++){
      dom.renderTable(plrs[i], tables[i]);
      dom.connectTable(tables[i]);
    }
    tables[0].className = "active";
    tables[0].classList.add("hide");
    dom.createInput(plrs[1], tables[1]);
  }
  function annouce(x){
    alert(x.name + 'win');
  }
  function botPlay(){
    bot.play(player.board);
    dom.renderTable(player, tables[1]);
    if (player.board.allShipSunk()){
      annouce(bot);
    }
  }
  function playGround(x, y){
    if (player.play(bot.board, x, y)){
      tables[0].classList.remove('active');
      dom.renderTable(bot, tables[0])
      if (bot.board.allShipSunk()){
        annouce(player);
      }
      botPlay();
      tables[0].classList.add('active');
    };
  }
  return {innit, playGround}
}();