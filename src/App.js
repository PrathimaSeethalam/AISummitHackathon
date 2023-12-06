import React from 'react';
import { render } from 'react-dom';

import ChatBot from 'react-simple-chatbot';

const styles = {
  fontFamily: 'sans-serif',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    user: true,
    trigger: "2"
  },
  {
    id: "2",
    message: "What's up bro!!"
  }
];

const App = () => (
  <div style={styles}>
    <h1>Talk to me baby!!</h1>
    <ChatBot steps={steps}/>
  </div>
);

render(<App />, document.getElementById('root'));

export default App;