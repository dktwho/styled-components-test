import './App.css'
import styled from "styled-components";

function App() {
    return (
        <>
            <Box>
                <StyledBtn>Styled BTN</StyledBtn>
            </Box>

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

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

`