import styled from "styled-components";


export const Container = styled.footer`
color: white;
padding: 40px 7%;
background-color: #1D1D1E;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
> * {
    width: 15%;
}
.logo {
    width: clamp(10rem, 20vw, 14.375rem);
    margin-bottom: 4rem;

    img{
        width: 100%;
        height: 100%;
    }
}

.socials > * {
    margin-right: 15%;
}

.copyright {
    font-size: clamp( 0.9rem, 1.5vw, 1.1rem );
    margin-top: 2.5rem;
    color: white;
}

.avails {
    width: 30%;
}

.community,
.places,
.about {
    h2{
        font-size: clamp( 1rem, 1.5vw, 1.2rem );
        margin-bottom: 1rem;
        color: white;
        margin-left: 35px;
    }
    ul li{
        letter-spacing: 1px;
        margin-bottom: 10px;
        font-size: clamp( 0.8rem, 1vw, 1rem );
        color: white;
    }
}

@media screen and ( max-width: 815px ) {
    > *,
    .avails {
        width: 40%;
    }
    .avails,
    .community {
        margin-bottom: 1.5rem;
    }
}


}`;
