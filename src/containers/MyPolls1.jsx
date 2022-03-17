import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Button from "../components/Button";
import Spinner from "../components/Spinner"
import PollListItem from "../components/PollListItem"
import { Link } from "wouter"


import MyPolls from "../containers/MyPolls"

import api from '../api'
import colors from '../colors'
import typo from '../typo'

// export default class MyPolls1 extends React.Component{
//     constructor(props) {
//       super(props);
//       this.state={
//         data: null
//       }  
//     } 
    
//     componentDidMount(){
//         api.getPolls().then((data) => this.setState(data.polls))
//     }

//   render(){
//     if (!data) return <div></div>
//     console.log(data.length)
//     // return <div></div>
//     return <MyPolls polls={data}/> 
//   }
// }

export default function MyPolls1() {
  const [polls, setPolls] = useState(null)
    useEffect(() => {api.getPolls().then((data) => setPolls(data.polls)).then(console.log("-"))
  }, [])

  if (!polls) return <div></div>
  console.log(polls.length)
  // return <div></div>
  return <MyPolls polls={polls}/> 
}