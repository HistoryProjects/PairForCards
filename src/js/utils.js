import m1 from '../assets/monsters/m1.png'; import m10 from '../assets/monsters/m10.png';
import m2 from '../assets/monsters/m2.png'; import m11 from '../assets/monsters/m11.png';
import m3 from '../assets/monsters/m3.png'; import m12 from '../assets/monsters/m12.png';
import m4 from '../assets/monsters/m4.png'; import m13 from '../assets/monsters/m13.png';
import m5 from '../assets/monsters/m5.png'; import m14 from '../assets/monsters/m14.png';
import m6 from '../assets/monsters/m6.png'; import m15 from '../assets/monsters/m15.png';
import m7 from '../assets/monsters/m7.png'; import m16 from '../assets/monsters/m16.png';
import m8 from '../assets/monsters/m8.png';
import m9 from '../assets/monsters/m9.png';



export const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export const duplicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);

export const createIconsArray = (initialCount) => {
    const cardsIcons = [
        m1, m2, m3, m4, m5, m6, m7, m8, m9,
        m6, m7, m8, m9, m10, m11, m12, m13,
        m14, m15, m16
    ];

    //Уровни и количество пар карт на них
    switch (initialCount) {
        case 1:
            return cardsIcons.slice(0, 2);
        case 2:
            return cardsIcons.slice(0, 4);
        case 3:
            return cardsIcons.slice(0, 8);
        case 4:
            return cardsIcons.slice(0, 16);
        case 5:
            return cardsIcons;
           // return cardsIcons.slice(0, 32);
        default:
            break;
    }
}