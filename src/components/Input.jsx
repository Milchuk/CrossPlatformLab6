

import colors from '../colors'
import typo from '../typo'

import React from "react";

import styled from "styled-components";


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

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false
    };
  }

  render() {
    const { label, placeholder,  onChange, errorMessage  } = this.props
    const info = this.state.isError ?  errorMessage: "" ;
    return (
      <>
        <LabelTag>{label}</LabelTag>
        <InputTag
          placeholder={placeholder}
          isError={this.state.isError}
          // value={value}
          onBlur={(e) => {
            this.setState({ isError: onChange(e.target.value) });
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === "NumpadEnter") {
              this.setState({ isError: onChange(e.target.value) });
            }
          }}
        />
        <Error>{info}</Error>
      </>
    );
  }
}

