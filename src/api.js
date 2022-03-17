import {getStoredStateOrDefault} from './localstore'

const BASE_URI = "http://206.81.21.110/api/v1"

function getPolls() {
  const  token  = "50e00914-7179-42f8-8c73-24c297efc205" //getStoredStateOrDefault()
  const params = {  
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  return fetch(`${BASE_URI}/polls`, params)  
    .then(function(res) {
      return res.json();
    })
    
}

function createPoll(poll) {
  const {token} = getStoredStateOrDefault();
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(poll)
  };

  return fetch(`${BASE_URI}/polls`, options).then((res) => res.json());
}


function getItem(id) {
  const {token} = getStoredStateOrDefault();
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  console.log("fetchid "+id)
  return fetch(`${BASE_URI}/poll/${id}`, options)
      .then(function (res) { return  res.json()});
}

function voteForPoll(id, selectedOption) {
  const {token} = getStoredStateOrDefault();
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(selectedOption)
  };
  return fetch(`${BASE_URI}/poll/${id}/vote`, options).then((res) => res.json());
}

function deletePoll(id) {
  const {token} = getStoredStateOrDefault();
  const options = {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };
  console.log("fetchDelId "+id)
  return fetch(`${BASE_URI}/poll/${id}`, options).then((res) => res.json());
}

export default {
  getPolls,
  getItem,
  voteForPoll,
  deletePoll,
  createPoll
}
