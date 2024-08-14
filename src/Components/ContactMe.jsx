import React, { useState } from 'react'
import styled from 'styled-components'
import api from '../Utils/api'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactMe = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message, setMessage] = useState('')
  const toastOption = {
    position:'bottom-right',
    autoClose: 8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
}
  const handleSendMessage=async(e)=>{
    try {
      e.preventDefault()
      const mail = {name,email,message}
      setName("")
      setEmail("")
      setMessage("")
      const response = await api.post('/mail',mail)
      console.log(response)
      toast.success(response.data.message,toastOption)
    } catch (error) {
      toast.error(error.message,toastOption)
    }
    
  }
  return (
    <>
    <Container>
      <h1>Contact Me</h1>
      <form onSubmit={handleSendMessage}>
        <label htmlFor="name">Full Name</label>
        <input required placeholder='Your Name' type="text" id='name' value={name} onChange={(e)=>setName(e.target.value)} />
        <label htmlFor="email">Email Address</label>
        <input required placeholder='Your Email' type="email" id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="message">Your Message</label>
        <textarea required placeholder='Type Your Message here' value={message} onChange={(e)=>setMessage(e.target.value)} name="" id="message" cols="30" rows="10"></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </Container>
    <ToastContainer/>
    </>
  )
}

const Container = styled.div`
  height: 65vh;
  color: rgb(25, 174, 140);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  margin-bottom:  5rem;
  h1{
    margin-top: 5rem;
    justify-self: flex-start;
    border-bottom: 0.2rem solid rgb(25, 174, 140);
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 350px;
    input{
      padding: 0.7rem 0.5rem;
      outline: none;
      border: none;
      border-radius: 0.3rem;
    }
    input,textarea{
      margin-bottom: 10px;
      font-size: 0.8rem;
    }
    button{
      background-color: rgb(25, 174, 140);
      width:max-content;
      padding: 0.4rem 0.8rem;
      border: none;
      outline: none;
      border-radius: 0.4rem;
      align-self: center;
      cursor: pointer;
      margin-top: 1rem;
      color: white;
      font-weight: 700;
      font-size: 1rem;
      &:hover{
        cursor: pointer;
        background-color: #117d64;
        box-shadow: 1px 1px 3px #117d64;
      }
    }
  }
  @media only screen and (max-width: 767px){
    form{
      width: 280px;
    }
  }
`
export default ContactMe