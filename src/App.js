import logo from './logo.svg';
import './App.css';
import Header from './MyComponests/Header';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <Header/>
    <div>
        <div className="content">
          <h1>Number to Words</h1>
          <p className="para">Convert Number into English words.
          </p><div className="input-text">
            <label htmlFor="fname">Enter a number</label>
          </div>  
          <input type="text" className="input-form" name="firstname" placeholder="Enter here.." />
          <div className="mb-2">
            <Button variant="primary" size="lg">
              Generate
            </Button>{' '}
          </div>
        </div>
        
      </div>
      </>
  );
}

export default App;
