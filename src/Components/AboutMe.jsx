import React from 'react'
import styled from 'styled-components'
import aboutImg from '../Assets/about.jpg'

const AboutMe = () => {
  return (
    <Container>
        <h1>About Me</h1>
        <div className="about">
          <div className="image">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
              <p>Hello,<br/> I'm Aalan Sason Singarayan A, a second-year B.Tech student majoring in Computer Science and Engineering. Passionate about technology and innovation, I am actively honing my skills in web development, with a focus on the MERN stack. Aspiring to blend creativity with code, I'm excited to explore new possibilities and contribute to the world of digital experiences. Welcome to my portfolio, where I showcase my journey in the realm of web development.</p>
          </div>
        </div>
        <div id='skills'></div>
    </Container>
  )
}

const Container = styled.div`
  height: 90vh;
  width: 100%;
  color: rgb(25, 174, 140);
  background-color: #000f16;
  h1{
    text-align: center;
    width: fit-content;
    margin: 4rem auto;
    border-bottom: 0.3rem solid rgb(25, 174, 140);
  }
  .about{
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    flex-wrap: wrap;
    gap: 5rem;
    .image{
      width: 25%;
      overflow: hidden;
      border-radius: 1rem;
      img{
        margin-left: 2rem;
        width: 100%;
        object-fit: cover;
        border-radius: 1rem;
      }
    }
    .about-text{
      width: 40%;
      display: flex;
      align-items: center;
      p{
        font-size: 1.4rem;
      }
    }
  }
  @media only screen and (max-width: 767px){
    height: fit-content;
    .about{
      gap: 0;
      .image{
        width: 80%;
      }
      .about-text{
        width: 80%;
        p{
          font-size: 1.1rem;
        }
      }
    }
  }
`
export default AboutMe