import styled from "styled-components";


export const Container6 = styled.section`

.flex {
    display: flex;
    align-items: center;
    margin-left: 6rem;
  }
  
  .flex h1{
    font-family: 'Red Rose';
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 140%;
    letter-spacing: -0.02em;
    margin-top: 10rem;
    color: #434343;
    max-width: 646px;
  }
  
  .flex h1 span{
    color: #A02279;
  }
  
  .flex p{
    margin-top: 2.5rem;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    max-width: 636px;
    max-height: 102px;
    color: #434343;
  }
  
  /* Midsearch Styles */
  
  
  .searchlocation {
    display: flex;
    margin-top: 2rem;
    max-width: 618.71px;
  }
  
  input {
    position: relative;
    display: inline-block;
    font-size: 20px;
    box-sizing: border-box;
    transition: .5s;
    color: #A3A3A3;
  }
  
  .searchbox {
    background: rgba(247, 247, 247, 0.1);
    max-width: 618.71px;
    height: 54.08px;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    border-color: #B8B8B8;
    outline: none;
    padding: 0 15px;
    border: 1px solid #A3A3A3;
    border-radius: 8px 0px 0px 8px;
  }
  
  .searchbtn {
    position: relative;
    height: 40px;
    left: -5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    border-radius: 0 8px 8px 0;
    border: none;
    padding: 10px 50px;
    outline: none;
    cursor: pointer;
    background: #A02279;
    color: #fff;
    max-width: 388.71px;
    height: 54.08px;
  }
  
  .pix {
    display: flex;
    margin-top: 180px; 
  }
  
  .pix1{
    margin-top: 80px;
    margin-left: 75px;
  }
  .pix2 {
    margin-right: 50px;
  }


  
@media screen and ( max-width: 815px ) {
    display: flex;
    
   
.flex {
    display: flex;
    flex-direction: column-reverse;
   margin-right: 90px;
   width: 15%;
  }

  form {
    width: 50%;
  }
  
  .flex h1{
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 26px;
    
  }
  

  
  .searchlocation {
    
    margin-top: 20rem;
    width: 218.71px;
  }
  
  input {
  width: 200px;
    font-size: 20px;
   
  }
  
  
  .pix {
    display: flex;
    flex-direction: column;
  }
  
  .pix1{
    margin-left: 150px;
  }
  .pix2 {
    margin-left: 150px;
  }

  

`;
