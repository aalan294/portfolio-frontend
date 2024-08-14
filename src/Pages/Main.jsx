import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'
import Home from '../Components/Home'
import AboutMe from '../Components/AboutMe'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import ContactMe from '../Components/ContactMe'

const Main = () => {
  return (
    <Container>
        <NavBar />
        <Home />
        <hr />
        <AboutMe />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <hr />
        <ContactMe />
    </Container>
  )
}

const Container = styled.div`
  scroll-behavior: smooth;
  overflow-x: hidden;

  hr {
    width: 80%;
    height: 1px;
    border: none;
    background-color: #999797; 
    margin: 20px auto;
  }
`

export default Main