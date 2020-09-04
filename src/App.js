import React from 'react';
import "./Button.scss"
import Button from './Button';
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Button size="large" color="grey" outline={true} className="costomized">
        버튼입니다
      </Button>
      <Button size="medium" outline fullwidth className="costomized" onClick={() => {console.log('클릭!')}}>
        버튼입니다
      </Button>
    </div>
  );
}

export default App;
