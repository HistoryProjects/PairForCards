

/*const GameCard = ({cardsIcons}) => {
    let test = [
        'C:/Users/pilya/Desktop/web-projects/pair-of-monsters/src/assets/monsters/m1.png',
        'C:/Users/pilya/Desktop/web-projects/pair-of-monsters/src/assets/monsters/m2.png' 
    ];


    return(
        <div className="game-card">
            {
                test.map((img, index) =>{
                    <img src={img} alt="" />
                    //console.log(img)
                    
                  
                })
            }
            
        </div>
    )
}
export default GameCard;*/

import React from 'react';
//import m1 from '../assets/monsters/m1.png';
//import m2 from '../assets/monsters/m2.png';

const GameCard = ({ cardsIcons }) => {
  //let test = [m1, m2];

  return (
    <div className="">
      {cardsIcons.map((img, index) => (
        <img key={index} src={img} alt="" width={64} height={64} className="game-card"/>
      ))}
    </div>
  );
};

export default GameCard;


