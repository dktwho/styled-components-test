import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {GlobalStyles} from "./styles/GlobalStyles.tsx";
import {ThemeProvider} from "styled-components";
import {myTheme} from "./styles/theme/Theme.styled.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={myTheme}>
        <App/>
        <GlobalStyles/>
    </ThemeProvider>
)
