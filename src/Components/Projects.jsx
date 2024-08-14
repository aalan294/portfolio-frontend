import React from 'react'
import styled from 'styled-components'
import project1 from '../Assets/project1.jpg'
import project2 from '../Assets/project2.png'
import project3 from '../Assets/project3.png'
import project4 from '../Assets/project4.png'
import project5 from '../Assets/project5.png'

const Projects = () => {
  return (
    <Container>
      <br />
      <h1>Projects</h1>
      <ul>
        <li>
          <img src={project1} alt="" />
          <div className="card">
            <h2>ZenChat - RealTime Chat Application</h2>
            <div className="color">
              <p>Built a MERN stack app with Socket.IO for real-time collaboration, featuring user authentication, data storage, and instant messaging.Empowered users with a responsive and engaging platform, enhancing teamwork and communication in a seamless, real-time environment.</p>
              <h6>React | Nodejs | Express | MongoDb | Mongoose | Socket.io</h6>
              <div className="link">
              <a href="https://github.com/aalan294/zenChat-backend"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
              <a href="https://zenchat-aalan.onrender.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <img src={project3} alt="" />
          <div className="card">
            <h2>Pizza Delivery Application</h2>
            <div className="color">
              <p> Developed a mobile-responsive web app forstreamlined pizza ordering, integrating React, Node.js, MongoDB, and secure payment solutions.</p>
              <h6>React | Nodejs | Express | MongoDb | Nodemailer | Razorpay Gateway</h6>
              <div className="link">
              <a href="https://github.com/aalan294/zenChat-backend"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
              <a href="https://zenchat-aalan.onrender.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <img src={project2} alt="" />
          <div className="card">
            <h2>Web3Chat - A Decentralized Messaging Application</h2>
            <div className="color">
              <p>Developed Web3-Chat, a
decentralized messaging platform utilizing Solidity smart contracts and React.js, enabling secure communication on the
Ethereum blockchain.</p>
              <h6>Solidity | Ethereum Blockchain | React.js | Truffle | Remix IDE | Web3.js</h6>
              <div className="link">
              <a href="https://github.com/aalan294/zenChat-backend"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
              <a href="https://zenchat-aalan.onrender.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <img src={project4} alt="" />
          <div className="card">
            <h2>Mental Support System</h2>
            <div className="color">
              <p>Created a MERN stack app with Socket.IO for real-time interactions, user authentication, and data management. Connects users with volunteers for mental health support, featuring profile management, a matching algorithm, and blockchain-based rewards.</p>
              <h6>React | Nodejs | Express | MongoDb | Mongoose | Socket.io | Solidity | Web3.js</h6>
              <div className="link">
              <a href="https://github.com/aalan294/zenChat-backend"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
              <a href="https://zenchat-aalan.onrender.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <img src={project5} alt="" />
          <div className="card">
            <h2>BioHeritage Activity Hub</h2>
            <div className="color">
              <p>Developed a decentralized application (DApp) on the Ethereum blockchain to support bioheritage conservation. Users can organize eco-friendly events, earn ERC20 tokens for participation, and use these tokens in a marketplace for local artisan products.</p>
              <h6>Ethereum | React | Smart Contracts | ERC20 Tokens</h6>
              <div className="link">
              <a href="https://github.com/aalan294/zenChat-backend"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
              <a href="https://zenchat-aalan.onrender.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div id='contactme'></div>
    </Container>
  )
}

const Container = styled.div`
  color: rgb(25, 174, 140);
  h1{
    text-align: center;
    border-bottom: 0.2rem solid rgb(25, 174, 140);
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 6rem;
  }
  ul{
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    li{
      width: 65vw;
      height: 400px;
      position: relative;
      text-align: right;
      margin-bottom: 2.5rem;
      img{
        border: 1px solid rgba(25, 174, 139, 0.449);
        position: absolute;
        top: 0;
        left: 0;
        width: 70%;
        z-index: 1;
      }
      .card{
        width: 40%;
        height: 40%;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 2;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        .color{
          background-color: rgb(0, 28, 41);
          border-radius: 1rem;
          padding: 0.6rem;
          padding-right: 1rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          p{
            text-align: right;
          }
        }
        h2{
          color: white;
          text-align: right;
        }
        h6{
          color: white;
          text-align: right;
          font-weight: 400;
        }
        .link{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 0.8rem;
          a{
            svg{
              width: 1.5rem;
              stroke: #19ae8c;
              &:hover{
                stroke: white;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 767px){
    margin-bottom: 3rem;
    ul{
      li{
        width: 100%;
        display: flex;
        flex-direction: column;
        height: fit-content;
        align-items: center;
        justify-content: center;
        img{
          width: 80%;
          position: unset;
        }
        .card{
          width: 90%;
          position: unset;
          .color{
            p{
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
`
export default Projects