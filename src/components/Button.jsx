import React from 'react'
import styled from 'styled-components'

import colors from '../colors'
import typo from '../typo'
import Spinner from "./Spinner";


const ButtonTag = styled.button`
  ${typo.button};
  margin-top: 8px;
  width: 100%;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  transition: all .2s ease-in-out;
  display: inline-block;
  text-align: center;   
  padding: 14px 13px;
  background: ${props=>props.disabled ? colors.grayButton : colors.brightPrimary};
  color: ${colors.white};
  border: 1px solid transparent;

  &:hover {
    background: ${props=>props.disabled ? colors.grayButton : colors.brightPrimary};
  }
`

const CenterSpinner = styled.div`
  display: flex;
  justify-content: center;
  `

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    const {children, onClick, loading, disabled} = this.props;
  
    let text = loading? <CenterSpinner><Spinner/></CenterSpinner> : children

  return (
    <ButtonTag onClick={onClick} disabled={disabled}> {text} </ButtonTag>
  )}
}