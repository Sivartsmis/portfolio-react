import { FaLinkedIn, FaGithub } from "react-icons/fa";
import Avatar from '../assets/Software.png';

const Body = () => {

    return(
        <div id="body" className="body">
            <div className="body-container"> 
                <div className="body-profile">
                    <img className="body-img" alt='profile image' src={Avatar} />
                    <div className="body-content">
                        <div className="body-headline">Travis Sims</div>
                        <div className="body-details">Fullstack Developer</div>
                    </div>
                    <div className="body-icons">
                        <a href="https://github.com/Sivartsmis" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://www.linkedin.com/in/travis-sims-0a681094/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedIn /></i> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;