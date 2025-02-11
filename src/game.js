import { createCurtains } from "./index";
import { dom } from "./dom";
export const game = function(){
  let player;
  let bot;
  let tables;
  function innit(plr1, plr2){
    const root = document.querySelector('body');
    const match = document.createElement('div');
    match.classList.add('game');
    player = plr1;
    bot = plr2;
    tables = [dom.createTable(7), dom.createTable(7)];
    let plrs = [bot, player];
    for (let i = 0; i < 2; i++){
      match.appendChild(tables[i]);
      dom.renderTable(plrs[i], tables[i]);
      dom.connectTable(tables[i]);
    }
    tables[0].className = "active";
    tables[0].classList.add("hide");
    root.appendChild(match);
  }
  function annouce(x){
    document.body.removeChild(document.body.querySelector('div'));
    document.body.appendChild(createCurtains(x.name));
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