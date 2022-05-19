import './App.css';
import GitHubButton from './GitHubButton/GitHubButton';
import LinkedInButton from './LinkedInButton/LinkedInButton'
import SelfImage from './Images/IMG_6592.JPG'

function App() {
  return (
    <body className='App'>
    <div>
      <h1 className='heading-top'>Hi, my name is Harrison Latta.</h1>
      <h1 className='heading-bottom'>Welcome to my portfolio.</h1>
    </div>
    <div>
      <h2 className='link-style'>Important Links</h2>
    </div>
    <div className='icons'>
    <GitHubButton />
    <LinkedInButton />
    </div>
    <div>
      <h2 className='heading-top'>About Me</h2>
      <img className='selfie' src={SelfImage}/>
      <p className='paragraph'>I am a Full-Stack Developer, recently graduated from devCodeCamp. My strong suit
        is anything involving Backend Operations, but I also enjoy working on Frontend projects.
        My goal in life is to go above and beyond to make my work beneficial for all.
      </p>
    </div>
    </body>
  );
}

export default App;
