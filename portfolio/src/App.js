import './App.css';
import GitHubButton from './GitHubButton/GitHubButton';
import LinkedInButton from './LinkedInButton/LinkedInButton'

function App() {
  return (
    <body className='App'>
    <div>
      <h1 className='heading-top'>Hi, my name is Harrison Latta.</h1>
      <h1 className='heading-bottom'>Welcome to my portfolio.</h1>
    </div>
    <div>
      <h2 className='link-style'>Important Links</h2>
    <GitHubButton />
    <LinkedInButton />
    </div>
    <div>
    </div>
    </body>
  );
}

export default App;
