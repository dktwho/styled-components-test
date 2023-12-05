import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations.tsx";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: "primary" | 'outline'

}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: #494747;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;

  &:hover {
    background-color: #6b9331;
  }

  &:last-child {
    background-color: #b0f696;
  }

  // outline 
  ${props => props.btnType === 'outline' && css<StyledBtnPropsType>`
    border: 5px solid ${props => props.color || 'greenyellow'}
    color: ${props => props.color || 'greenyellow'}
    background-color: transparent;

    &:hover {
      border-color: #1b45c4;
      border: 2px solid #1b45c4;
      color: #1b45c4;
      background-color: transparent;
    }
  `} 
          
          // primary       
  ${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
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