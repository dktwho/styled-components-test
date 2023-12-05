import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations.tsx";

export const StyledBtn = styled.button`
  border: none;
  // background-color: greenyellow;
  background-color: ${props => props.color ||  'greenyellow' };
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

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: green;
  &:hover {
    animation:  ${MyAnimation} 2s ease-in-out;
  }
  
`