//import {Link} from 'react-router-dom';

const PauseBtn = ({isPaused, setIsPaused, clickable, setClickable}) => {
    const pause = () =>{  
        setIsPaused(!isPaused);
        setClickable(!clickable);
    }
    return <button onClick={pause}>
        {isPaused ? 'Resume' : 'Pause'}
    </button>
}
export default PauseBtn;