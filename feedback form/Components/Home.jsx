import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';


export default function Home() {
  return (
    <Section>
      <Navbar/>
      <div className="ellipse"></div>
      <div className="container">
        <div className="content">
          <br></br>
        <h1>Explore Our Feedback Feature</h1>
            
      </div>
      
       <div className="image">
        <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/logo_1200x768.jpeg'alt="here"/>
      </div>
      </div>
     
    </Section>
  );
}

const Section=styled.section`
  margin: 0.5rem;
  background-color: #232835;
  border-radius: 1rem;
  position:relative;
  overflow:hidden;
  margin-bottom:5rem; 
  .container{
    padding:2rem;
    margin:0 2rem;
    display:flex;
    .content{
        z-index:10;
        display:flex;
        flex-direction:column;
        gap:2rem;
        padding-right:2rem;
        margin-top:5rem;
        h1{
            color:white;
            font-size:5rem;
        }
        p{
            color:#a6a6a6;
        }
        
        .data{
            display:flex;
            gap:5rem;
            .dataTab{
                display:flex;
                flex-direction:column;
                gap:1rem;
            }
            h2{
                color:white;
                font-size:2rem;
            }
            h5{
                text-align:center;
                color:#a6a6a6;
            }
        }
    }
  }
.image{
    img{
      margin-top:8rem;
      margin-right:4rem;
        height:22rem;
        width:28rem;
        border-radius:2rem; 
    }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    border-radius: 0;
    .container {
      flex-direction: column;
      margin: 0;
      padding: 2rem;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      .content {
        padding-right: 0;
        h1 {
          font-size: 3rem;
          span {
            img {
              height: 2rem;
            }
          }
        }
        .buttons {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .data {
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }
      }
      .image {
        img {
          height: 15rem;
        }
      }
    }
  }
`;