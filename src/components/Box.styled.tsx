import styled from "styled-components";
import {Link} from "./Link.styled.tsx";
import {myTheme} from "../styles/theme/Theme.styled.tsx";

export const Box = styled.div`
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
  
  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`