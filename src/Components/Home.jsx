import styled from 'styled-components'
import profile from '../Assets/updated profile.jpg'

const Home = () => {
  const handleResume = async()=>{
    window.open('http://localhost:3500/resume','_blank')
  }
  return (
    <Container id='home'>
      <div className="text">
        <h1>Hi,</h1>
        <h1>I'm <span>Aalan</span></h1>
        <h1>MERN Stack Developer{'</>'}</h1><br />
        <div className="buttons">
          <button>Contact</button>
          <button onClick={handleResume}>Resume<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#19ae8c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></button>
        </div>
        
      </div>
      <div className="profile">
        <div class="pentagon">
          <div class="content">
            <img src={profile} alt="" />
          </div>
         </div>
      </div>
      <div className="links" id='about'>
        <a href="https://www.linkedin.com/in/aalan294aalan294/"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#19ae8c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
        <a href="https://www.instagram.com/aalan_29_4/"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#19ae8c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
        <a href="https://github.com/aalan294/"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#19ae8c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
      </div>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  height: 90vh;
  flex-wrap: wrap;
  width: 100%;
  overflow-x: hidden;
  overflow: hidden;
  background-color: #000f16;
  color: white;
  position: relative;
  .text{
    width: 40%;
    margin-top: 5rem;
    h1{
      font-size: 3rem;
      margin: 0.7rem;
      color: white;
      span{
        color: #19ae8c;
      }
      .type{
        color: white;
      }
    }
    .buttons{
      display: flex;
      gap: 1rem;
      button:nth-of-type(1){
      padding: 0.8rem 2rem;
      background-color: #19ae8c;
      color: white;
      border-radius: 1.2rem;
      font-weight: 700;
      font-size: 1rem;
      outline: none;
      border: none;
      &:hover{
        cursor: pointer;
        background-color: #117d64;
        box-shadow: 1px 1px 3px #117d64;
      }
    }
      button:nth-of-type(2){
        border: 1px solid #19ae8c;
      padding: 0.3rem 0.7rem;
      background-color: inherit;
      border-radius: 0.4rem;
      color: #19ae8c;
      display: flex;
      align-items: center;
      }
    }
    
  }
  .profile{
    width: 40%;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .pentagon {
      width: 400px;
      height: 400px; 
      position: relative;
      clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
      transform: rotate(7deg);
      .content {
        width:105%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          margin:10rem 0 0 1rem;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
          transform: rotate(-7deg);
        }
      }
    }
  }
  .links{
    position: absolute;
    bottom: 0;
    left: 0;
    padding-left: 5rem;
    svg{
      margin: 1rem;
    }
  }
  @media only screen and (max-width: 767px){
    margin-top: 3rem;
    padding-top: 0;
    height: 100vh;
    overflow-y:hidden;
    .text{
      width: 100%;
      margin-top: 0.5rem;
      h1{
        font-size: 2rem;
      }
    }
    .profile{
      width: 100%;
      justify-self: flex-end;
      margin-left: 6rem;
      margin-bottom: 5rem;
      .pentagon{
        margin-bottom: 4rem;
        width: 200px;
        height: 200px;
        .content{
          width:105%;
          img{
            margin-bottom: 4.7rem;
          }
        }
      }
    }
    .links{
      margin-top: 1rem;
      left: 0;
    }
  }
`
export default Home