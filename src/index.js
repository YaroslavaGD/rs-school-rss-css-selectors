import './index.html';
import './index.scss';
import sushi from './img/sushi-1.svg';
import { test, testsum } from './modules/calc';
const sushiWrap = document.querySelector('.sushi');
const img = new Image();
img.src = sushi;
sushiWrap.append(img);
console.log(test(2, 4));
console.log(testsum(2, 4));