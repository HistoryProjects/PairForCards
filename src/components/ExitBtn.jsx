import {Link} from 'react-router-dom';

const ExitBtn = ({setTotalCount, timerInterval}) => {
    const exit = () =>{  
        clearInterval(timerInterval);
        setTotalCount(0); //count
    }
    return <Link to="/">
            <button onClick={exit}>Exit</button>
    </Link>
   

}
export default ExitBtn;