import './GitHubButton.css'
import GitHub_logo from "../Images/GitHub_logo.png"
const GitHubButton = (props) => {
    return ( 
        <a href="https://github.com/h-latta/"><img className='link' src={GitHub_logo} alt="GitHub"/></a>
     );
}
 
export default GitHubButton;