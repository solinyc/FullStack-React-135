import React, { useState } from 'react'


const initInputs = {
  issueScript: "",
  imgUrl: ""
}

export default function IssueForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { addIssue } = props
  
  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  const { issueScript, imgUrl } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="issueScript" 
        value={issueScript} 
        onChange={handleChange} 
        placeholder="issueScript"/>

      <input 
        type="text" 
        name="imgUrl" 
        value={imgUrl} 
        onChange={handleChange} 
        placeholder="Image URL"/>
      
      <button>Add Issue</button>
    </form>
  )
}