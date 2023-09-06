import {createIconsArray, duplicateArray, shuffle} from '../js/utils';
import GameCard from './GameCard';
import React, { useEffect, useState } from 'react';

const GameTable = ({currentLevel}) =>{
    
    const [duplicatedCardsIcons, setDuplicatedCardsIcons] = useState([]);

    useEffect(() => {
        const cardsIcons = createIconsArray(currentLevel);
        const duplicatedCards = duplicateArray(cardsIcons);
        const shuffledCards = shuffle(duplicatedCards);
        setDuplicatedCardsIcons(shuffledCards);
    }, [currentLevel]);

    return(
        <div className="game-table">
            <GameCard cardsIcons={duplicatedCardsIcons} />
        </div>
    )
}
export default GameTable