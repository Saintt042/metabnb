import styled from "styled-components";


export const Container2 = styled.div`
    background: #fffff;
   
    margin-left: 50px;
> * {
    margin: 20px;
}


.inspiration {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    height: 60px;
    font-size: 48px;
    font-weight: 700px;
    color: #000;
}


.firstrow {
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin-bottom: 24px;
}


.secondrow {
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin-bottom: 24px;
}



@media screen and ( max-width: 815px ) {
    width: 815px;
    margin: 0 auto;
    display: flex;

    .inspiration {
        text-align: center;
        height: 60px;
        font-size: 28px;
        width: 50%;
        margin-right: 90px;
        
    }
    
    
    .firstrow {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-bottom: 24px;
        // align-items: center;
    }
    
    
    .secondrow {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-bottom: 24px;
    }
    




































































`;