import _ from 'lodash';

import './style.scss'

async function onClickHandler(){
	console.log('clicked!');
  const math = await import('./math.js');
  console.log('Math module loaded!');
  console.log('2 + 3 =', math.add(2, 3));
  console.log('4 * 5 =', math.multiply(4, 5));
}

console.log(_.join(['Hello', 'Vite.'], ' '));

const btn = document.getElementById("MeBtn");
btn.onclick = onClickHandler;
