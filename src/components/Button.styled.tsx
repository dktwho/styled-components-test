import styled, {css} from "styled-components";
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
  color: #494747;
  // font-size: 1.3rem;
  font-size: ${props => props.fontSize};
  font-weight: bold;

  &:hover {
    background-color: #6b9331;
  }

  &:last-child {
    background-color: #b0f696;
  }

  // outline 
  ${props => props.outline && css<StyledBtnPropsType>`
    border: 5px solid ${props => props.color || 'greenyellow'}
    color: ${props => props.color || 'greenyellow'}
    background-color: transparent
  `} // primary       
  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: ${props => props.color || 'greenyellow'};
    color: #f54376;
  `}
  
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: green;
  &:hover {
    animation:  ${MyAnimation} 2s ease-in-out;
  }
  
`