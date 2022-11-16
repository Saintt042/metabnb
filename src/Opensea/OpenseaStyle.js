import styled from "styled-components";


export const Container1 = styled.div`

> * {
   background: #A02279;
   margin-top: 100px;
   margin-bottom: 20px;
   display: flex;
   justify-content: space-around;
}


@media screen and ( max-width: 815px ) {
   > * {
      display: flex;
      flex-direction: column;
      gap: 20px;
      
   }

   #jsd {
      width: 200px;
      margin-left: 80px;
   }
   





`;