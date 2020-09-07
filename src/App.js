import React from 'react';
// import "./Button.scss"
// import Button from './Button';
// import "./App.scss"
// import CheckBox from './CheckBox';
// import styled, {css} from 'styled-components';

// styled-components btn
import StyledBtn from './StyledBtn';
import styled, {ThemeProvider} from 'styled-components'

// const Circle = styled.div`
//   width:5rem; 
//   height:5rem; 
//   // backgroud:black;
//   background:${props => props.color};
//   ${props => props.huge && 
//   css`
//     width:10rem;
//     height:10rem;
//   `
//   }
// `;

const Border = styled.div`
  width:512px;
  margin: 0 auto;
  border:1px solid black;
  padding:1rem;
  margin-top:4rem;
`;

const palette ={
  blue:"#228be6",
  gray:"#496057",
  pink:"#f06595"
}

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

    //컬러 원
    // <>
    // <Circle color='blue'/>
    // <Circle color='pink' huge/>
    // </>
    <ThemeProvider theme={{palette}}>
      <Border>
        <StyledBtn>BUTTON</StyledBtn>
        <StyledBtn color="pink">BUTTON</StyledBtn>
        <StyledBtn color="gray">BUTTON</StyledBtn>
      </Border>
    </ThemeProvider>
  );
}

export default App;
