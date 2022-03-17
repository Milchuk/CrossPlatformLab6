import React from "react"
import styled from "styled-components"

import colors from '../colors'
import typo from '../typo'
import Input from "./Input";


const Label = styled.div`
    ${typo.label1};
  margin-bottom: 9px;
  &:hover > div> div> div > svg >path{
    fill: ${colors.gray}
  }
`


const SvgFilter = styled.svg` 
  &:hover > path {
   fill:  ${colors.error}  !important;
};
  margin-left: 8px;
  margin-bottom: 7px;
`

const MainBox = styled.div`
    cursor: pointer;
  &:hover > div > svg >path{
    fill: ${colors.gray}
`

const CenteredBox = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`



const LabelTag = styled.div`
  ${typo.label1};
  color: ${colors.mainText};
  margin-bottom: 12px;
`

const InputTag = styled.input`
${typo.input};
width: 99%;
display: inline-block;
caret-color: ${colors.mainText};
padding: 16px 13px;
color: ${colors.mainText};
border-radius: 4px;
transition: all 0.2s ease-in-out;
outline: 0;
text-align: left;
margin-bottom: 4px;
border: 1px solid ${props => props.isError ? colors.error : colors.gray};

&::placeholder {
  color: ${colors.placeholderText};
  opacity: 1;
}

&:hover,
&:focus {
  border-color: ${props => props.isError ? colors.error : colors.brightPrimary};
}
`;

const Error = styled.div`
  font-size: 10px;
  color: ${colors.error};
  margin-top: 4px;
  margin-bottom: 8px;
`;

export default class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false
    };
  }

  render() {
    const { label, placeholder,  onChangeText, errorMessage, onChangeThrash, value, onChange } = this.props
    const info = this.state.isError ?  errorMessage: "" ;
    return (
      <Label>
        <LabelTag>{label}</LabelTag>
        <MainBox>
        <CenteredBox>
            <InputTag
              placeholder={placeholder}
              isError={this.state.isError}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onBlur={(e) => {
                this.setState({ isError: onChangeText(e.target.value) });
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === "NumpadEnter") {
                  this.setState({ isError: onChangeText(e.target.value) });
                }
              }}
            />
            <div onClick={()=>onChangeThrash()}>
              <SvgFilter width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C9.55229 0 10 0.447715 10 1V2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H12V9C12 10.6569 10.8807 12 9.5 12H4.5C3.11929 12 2 10.6569 2 9V4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H4V1C4 0.447715 4.44772 0 5 0H9ZM5 4C4.48716 4 4.06449 4.38604 4.00673 4.88338L4 5V9C4 9.55229 4.44772 10 5 10C5.51284 10 5.93551 9.61396 5.99327 9.11662L6 9V5C6 4.44772 5.55228 4 5 4ZM9 4C8.48716 4 8.06449 4.38604 8.00673 4.88338L8 5V9C8 9.55229 8.44771 10 9 10C9.51284 10 9.93551 9.61396 9.99327 9.11662L10 9V5C10 4.44772 9.55229 4 9 4Z" fill="#00000"/>
              </SvgFilter>
            </div>
          </CenteredBox>
        </MainBox>
        <Error>{info}</Error>
      </Label>
    );
  }
}

