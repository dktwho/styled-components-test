import './App.css'
import styled from "styled-components";


function App() {
    return (
        <>
            <StyledBtn>Styled BTN</StyledBtn>
        </>
    )
}

export default App


const StyledBtn = styled.button`
  border: none;
  background-color: greenyellow;
  padding: 10px 20px;
  border-radius: 5px;
  color: snow;
  font-size: 1.3rem;
  font-weight: bold;
`