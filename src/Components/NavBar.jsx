// NavBar.jsx
import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleResume = async () => {
    window.open('https://portfolio-backend-jsog.onrender.com/resume', '_blank');
  };

  return (
    <Container>
      <div className="logo">
        <h1>{`</>`}</h1>
      </div>
      <ul>
        <li><a onClick={() => handleScrollToSection('home')}>Home</a></li>
        <li><a onClick={() => handleScrollToSection('about')}>About Me</a></li>
        <li><a onClick={() => handleScrollToSection('skills')}>Skills</a></li>
        <li><a onClick={() => handleScrollToSection('projects')}>Projects</a></li>
        <li><a onClick={() => handleScrollToSection('contactme')}>Contact Me</a></li>
        <li><button onClick={handleResume}>Resume<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#19ae8c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></button></li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
  padding: 0rem 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  color: #19ae8c;
  background-color: rgb(0, 28, 41);

  .logo {
    display: flex;
    align-items: center;
    margin-left: 10rem;

    h1 {
      color: #19ae8c;
      padding: 0;
      margin: 0;
    }
  }

  ul {
    padding-right: 2rem;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;

    li {
      margin: 0 1rem;
      padding-bottom: 10px;

      a {
        text-decoration: none;
        color: inherit;
        font-weight: 400;
        font-size: large;
        cursor: pointer;

        &:active {
          padding-bottom: 0.4rem;
          border-bottom: 3px solid #19ae8c;
        }

        &:hover {
          padding-bottom: 0.4rem;
          border-bottom: 3px solid #19ae8c;
        }
      }

      button {
        border: 1px solid #19ae8c;
        padding: 0.3rem 0.7rem;
        background-color: inherit;
        border-radius: 0.4rem;
        color: #19ae8c;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export default NavBar;
