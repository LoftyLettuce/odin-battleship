import { game } from './game'

export const dom = function(){
  function createInput(plr, table){
    const input = document.createElement('div');
    input.className = 'input';
    let dropDown = document.createElement('select');
    for (let i = 0; i < plr.board.battleships.length; i++){
      const option = document.createElement('option');
      option.textContent = `Number ${i}`;
      option.value = i;
      dropDown.appendChild(option);
    }
    let label = document.createElement('label');
    label.textContent = "Ship:";
    label.appendChild(dropDown);
    input.appendChild(label);
    for (let i = 0; i < 2; i++){
      const cordinate = document.createElement('input');
      cordinate.setAttribute('type', 'number');
      cordinate.setAttribute('min', '0');
      cordinate.setAttribute('max', '6');
      cordinate.required = true;
      label = document.createElement('label');
      label.textContent = (i == 0)?'Row: ':"Col: ";
      label.appendChild(cordinate);
      input.appendChild(label);
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
    label = document.createElement('label');
    label.textContent = 'Orientation: ';
    label.appendChild(dropDown);
    input.appendChild(label);
    const button = document.createElement('button');
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>ship-wheel</title><path d="M2,11L4.05,11.1C4.3,8.83 5.5,6.85 7.25,5.56L6.13,3.84C5.86,3.36 6,2.75 6.5,2.47C7,2.2 7.59,2.36 7.87,2.84L8.8,4.66C9.78,4.24 10.86,4 12,4C13.14,4 14.22,4.24 15.2,4.66L16.13,2.84C16.41,2.36 17,2.2 17.5,2.47C18,2.75 18.14,3.36 17.87,3.84L16.75,5.56C18.5,6.85 19.7,8.83 19.95,11.1L22,11A1,1 0 0,1 23,12A1,1 0 0,1 22,13L19.95,12.9C19.7,15.17 18.5,17.15 16.75,18.44L17.87,20.16C18.14,20.64 18,21.25 17.5,21.53C17,21.8 16.41,21.64 16.13,21.16L15.2,19.34C14.22,19.76 13.14,20 12,20C10.86,20 9.78,19.76 8.8,19.34L7.87,21.16C7.59,21.64 7,21.8 6.5,21.53C6,21.25 5.86,20.64 6.13,20.16L7.25,18.44C5.5,17.15 4.3,15.17 4.05,12.9L2,13A1,1 0 0,1 1,12A1,1 0 0,1 2,11M9.07,11.35C9.2,10.74 9.53,10.2 10,9.79L8.34,7.25C7.11,8.19 6.27,9.6 6.05,11.2L9.07,11.35M12,9C12.32,9 12.62,9.05 12.9,9.14L14.28,6.45C13.58,6.16 12.81,6 12,6C11.19,6 10.42,6.16 9.72,6.45L11.1,9.14C11.38,9.05 11.68,9 12,9M14.93,11.35L17.95,11.2C17.73,9.6 16.89,8.19 15.66,7.25L14,9.79C14.47,10.2 14.8,10.74 14.93,11.35M14.93,12.65C14.8,13.26 14.47,13.8 14,14.21L15.66,16.75C16.89,15.81 17.73,14.4 17.95,12.8L14.93,12.65M12,15C11.68,15 11.38,14.95 11.09,14.86L9.72,17.55C10.42,17.84 11.19,18 12,18C12.81,18 13.58,17.84 14.28,17.55L12.91,14.86C12.62,14.95 12.32,15 12,15M9.07,12.65L6.05,12.8C6.27,14.4 7.11,15.81 8.34,16.75L10,14.21C9.53,13.8 9.2,13.26 9.07,12.65Z" /></svg>'
    button.addEventListener('click', ()=>{
      const inputs = Array.from(input.querySelectorAll('input, select'));
      if (inputs.every((e)=>e.checkValidity())){
        plr.board.placeShip(plr.board.battleships[inputs[0].value], inputs[1].value, inputs[2].value, JSON.parse(inputs[3].value));
        renderTable(plr, table);
      }
    })
    input.appendChild(button);
    return input;
  }
  function createTable(n){
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