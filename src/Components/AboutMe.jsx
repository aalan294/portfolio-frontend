import React from 'react'
import styled from 'styled-components'
import aboutImg from '../Assets/profile.jpg'

const AboutMe = () => {
  return (
    <Container>
        <h1>About Me</h1>
        <div className="about">
          <div className="image">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
          <p>Hello,<br/> I'm Aalan Sason Singarayan A, a B.Tech pre-final year Computer Science and Engineering student. I specialize in web development and blockchain technology, focusing on the MERN stack and decentralized apps. I'm passionate about blending creativity with code to contribute to digital experiences and blockchain innovations. Welcome to my portfolio, showcasing my journey in these fields.</p>
          </div>
          </div>
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
    h1{
      margin-top: 0;
    }
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