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
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
    </Container>
  )
}

const Container = styled.div`
  scroll-behavior: smooth;
  overflow-x: hidden;
`
export default Main