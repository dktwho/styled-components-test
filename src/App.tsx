import './App.css'
import styled from "styled-components";

function App() {
    return (
        <>
            <Box>
                <StyledBtn>Styled BTN</StyledBtn>
                <StyledBtn as ='a' href={'#'}>Link Styled BTN</StyledBtn>
                <SuperButton>SuperButton</SuperButton>
            </Box>
        </>
    )
}

export default App


const StyledBtn = styled.button`
  border: none;
  background-color: greenyellow;
  padding: 10px 20px;
  color: snow;
  font-size: 1.3rem;
  font-weight: bold;
`

const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: green;
`

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`