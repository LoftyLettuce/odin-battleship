import { game } from './game'

export const dom = function(){
  function createInput(plr, table){
    const input = document.createElement('div');
    input.className = 'input';
    let dropDown = document.createElement('select');
    for (let i = 0; i < plr.board.battleships.length; i++){
      const option = document.createElement('option');
      option.textContent = `ship ${i}`;
      option.value = i;
      dropDown.appendChild(option);
    }
    input.appendChild(dropDown);
    for (let i = 0; i < 2; i++){
      const cordinate = document.createElement('input');
      cordinate.setAttribute('type', 'number');
      cordinate.setAttribute('min', '0');
      cordinate.setAttribute('max', '6');
      cordinate.required = true;
      input.appendChild(cordinate);
    }
    dropDown = document.createElement('select');
    for (let i = 0; i <  2; i++){
      const option = document.createElement('option');
      dropDown.appendChild(option);
    }
    dropDown.children[0].textContent = 'Horizontal';
    dropDown.children[0].value = false;
    dropDown.children[1].textContent = 'Vertical';
    dropDown.children[1].value = true;
    input.appendChild(dropDown);
    const button = document.createElement('button');
    button.addEventListener('click', ()=>{
      const inputs = Array.from(input.children);
      if (inputs.every((e)=>e.checkValidity())){
        plr.board.placeShip(plr.board.battleships[inputs[0].value], inputs[1].value, inputs[2].value, JSON.parse(inputs[3].value));
        renderTable(plr, table);
      }
    })
    input.appendChild(button);
    return input;
  }
  function createTable(n){
    const root = document.querySelector('body');
    const board = document.createElement('table');
    for (let i = 0; i < n; i++){
      const row = document.createElement('tr');
      for (let j = 0; j < n; j++){
        const btn = document.createElement('button');
        btn.setAttribute('row', i);
        btn.setAttribute('col', j);
        row.appendChild(btn);
      }
      board.appendChild(row);
    }
    return board;
  }
  function renderTable(plr, table){
    const n = 7;
    const row = table.querySelectorAll('tr');
    for (let i = 0; i < n; i++){
      const btn = row[i].querySelectorAll('button');
      for (let j = 0; j < n; j++){
        if (plr.board.board[i][j] == false){
          btn[j].className = '';
        }
        else{
          if (plr.board.board[i][j] == true){
            btn[j].classList.add('checked');
            continue;
          }
          btn[j].className = 'ship';
        }
      }
    }
  }
  function connectTable(table){
    const n = 7;
    for (let i = 0; i < n; i++){
      const row = table.querySelectorAll('tr');
      for (let j = 0; j < n; j++){
        const btn = row[i].querySelectorAll('button');
        btn[j].addEventListener("click", ()=>{
          if (table.classList.contains('active')){
            game.playGround(btn[j].getAttribute('row'), btn[j].getAttribute('col'));
          }
        })
      }
    }
  }
  return {createTable, renderTable, connectTable, createInput};
}();