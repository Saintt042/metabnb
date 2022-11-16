import styled from "styled-components";

export const Container3 = styled.div`
max-width: 1220px;
margin-left: 6rem;
margin-top: 40px;


.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
}



.links a {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #434343;
    flex: none;
    text-decoration: none;
    margin: 0px 15px 0px 15px;
}

.links a:hover{
    text-decoration: underline;
}


.btnconnect {
    background: #A02279;
    text-decoration: none;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    border-radius: 10px;
    border: none;
    line-height: 19.98px;
    padding: 15px;
    margin: 1px;
    color: white;
    cursor: pointer;
}


@media screen and ( max-width: 815px ) {
    
.navbar{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}


.links a {

    display: flex;
    height: 40px;
    
}




`;
