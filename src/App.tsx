import './App.css'
import styled from "styled-components";

function App() {
    return (
        <>
            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn>button</StyledBtn>
                <StyledBtn as ='a' href={'#'}>link</StyledBtn>
                <StyledBtn as ={Link} href={'#'}>Link Component</StyledBtn>
                <SuperButton>SuperButton</SuperButton>
            </Box>
        </>
    )
}

export default App

const Menu = styled.nav`
ul {
  list-style: none;
  padding: 0;
  display: flex;
  
  li > a {
    color: green;
  }
  li + li {
    margin-left: 10px;
  }
}
`

const StyledBtn = styled.button`
  border: none;
  background-color: greenyellow;
  padding: 10px 20px;
  color: snow;
  font-size: 1.3rem;
  font-weight: bold;

  &:hover {
    background-color: #6b9331;
  }

  &:last-child {
    background-color: #b0f696;
  }
`

const Link = styled.a`
  color: #3955cb;
  font-size: 1.3rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
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
  gap: 20px;
  button {
    cursor: pointer
  }

${Link} {
  cursor: zoom-in;
}
`