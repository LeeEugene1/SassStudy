import React from 'react';
// import "./Button.scss"
// import Button from './Button';
// import "./App.scss"
// import CheckBox from './CheckBox';
import styled, {css} from 'styled-components';

const Circle = styled.div`
  width:5rem; 
  height:5rem; 
  // backgroud:black;
  background:${props => props.color};
  ${props => props.huge && 
  css`
    width:10rem;
    height:10rem;
  `
  }
`;

function App() {
  // const [checked, setCheck] = useState(false);
  // const onChange = (e) =>{
  //   setCheck(e.target.checked);
  // }
  return (
      /* 버튼 스타일링 */
    /*<div className="App">
      <Button size="large" color="grey" outline={true} className="costomized">
        버튼입니다
      </Button>
      <Button size="medium" outline fullwidth className="costomized" onClick={() => {console.log('클릭!')}}>
        버튼입니다
      </Button>
    </div>*/

    // 체크버튼
    // <div>      
    //   <CheckBox onChange={onChange} checked={checked}>다음 약관에 모두 동의</CheckBox>
    // </div>
    <>
    <Circle color='blue'/>
    <Circle color='pink' huge/>

    </>
  );
}

export default App;
