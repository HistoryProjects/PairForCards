import '../App.css'
import {Link} from 'react-router-dom';


const Start = ({setSecund , setCurrentLevel}) =>{

    function start(){
        setSecund(30);
        setCurrentLevel(1);
    }
    return(
        <div className='menu'>
            <header className="header">
                <h1 className="header__title">Pair of monsters</h1>
                

                <Link to="/Game">
                    <button className="start-btn" onClick={start}>Start</button>
                </Link>
            </header>
        </div>
    )
}
export default Start;