import './App.css';
import Header from './MyComponests/Header';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  const getInputValue = (event) => {
    // console.log("Event", event.target.value);
    setState({value: event.target.value});
    // console.log("State", state);
  }

  //let output = "";
  const convertor = () => {
    var num = state.value;
    console.log("State", num);
        
    //===
    var val0 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var val1 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var val2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var val4 = ['', 'thousand', 'million', 'billion', 'trillion'];
    var s = num.toString();
    s = s.replace(/[\, ]/g, '');
    if (s != parseFloat(s))
        return 'not a number ';
    var x_val = s.indexOf('.');
    if (x_val == -1)
        x_val = s.length;
    if (x_val > 15)
        return 'too big';
    var n_val = s.split('');
    var str_val = '';
    var sk_val = 0;
    for (var i = 0; i < x_val; i++) {
        if ((x_val - i) % 3 == 2) {
            if (n_val[i] == '1') {
                str_val += val1[Number(n_val[i + 1])] + ' ';
                i++;
                sk_val = 1;
            } else if (n_val[i] != 0) {
                str_val += val2[n_val[i] - 2] + ' ';
                sk_val = 1;
            }
        } else if (n_val[i] != 0) {
            str_val += val0[n_val[i]] + ' ';
            if ((x_val - i) % 3 == 0)
                str_val += 'hundred and';
            sk_val = 1;
        }
        if ((x_val - i) % 3 == 1) {
            if (sk_val)
                str_val += val4[(x_val - i - 1) / 3] + ' ';
            sk_val = 0;
        }
    }
    if (x_val != s.length) {
        var y_val = s.length;
        str_val += 'point ';
        for (var ii = x_val + 1; ii < y_val; ii++)
            str_val += val0[n_val[ii]] + ' ';
    }
    console.log("Output:", str_val.replace(/\s+/g, ' '));
    //==

    
  }

  return (
    <>
    <Header title="Number to words."/>
    <div>
        <div className="content">
          {/* <h1>Number to Words</h1> */}
          <p className="para">Convert Number into English words.
          </p><div className="input-text">
            <label htmlFor="fname">Enter a number</label>
          </div>  
          <input type="text" className="input-form" name="firstname" placeholder="Enter here.." onChange={getInputValue}/>
          <div className="mb-2">
            <Button variant="primary" size="lg" onClick={convertor}>
              Generate
            </Button>{' '}
          </div>
          <div>
          <h1 id="output-value">{}</h1>
          </div>
        </div>
        
      </div>
      </>
  );
}

export default App;
