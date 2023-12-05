import './App.css'
import {StyledBtn, SuperButton} from "./components/Button.styled.tsx";
import {Menu} from "./components/Menu.styled.tsx";
import {Link} from "./components/Link.styled.tsx";
import {Box} from "./components/Box.styled.tsx";
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
                <StyledBtn color={'red'} fontSize={'26px'}>button</StyledBtn>
                <StyledBtn color={'blue'}>button</StyledBtn>
                <br/>
                <StyledBtn as='a' href={'#'}>link</StyledBtn>
                <StyledBtn as={Link} href={'#'}>Link Component</StyledBtn>
                <SuperButton>SuperButton</SuperButton>
            </Box>
        </>
    )
}

export default App







