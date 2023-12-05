import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations.tsx";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outline?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  // background-color: greenyellow;
  background-color: ${props => props.color || 'greenyellow'};
  padding: 10px 20px;
  color: snow;
  // font-size: 1.3rem;
  font-size: ${props => props.fontSize};
  font-weight: bold;

  &:hover {
    background-color: #6b9331;
  }

  &:last-child {
    background-color: #b0f696;
  }

  // primary
  background-color: ${props => props.color || 'greenyellow'};
  color: #560d34;

  // outline 
  border: 5px solid ${props => props.color || 'greenyellow'}
  color: ${props => props.color || 'greenyellow'}
  background-color: transparent
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: green;
  &:hover {
    animation:  ${MyAnimation} 2s ease-in-out;
  }
  
`