import styled from "styled-components";


export const Container = styled.footer`
color: white;
padding: 60px 9%;
background-color: #1D1D1E;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
> * {
    width: 17.5%;
}
.logo {
    width: clamp(10rem, 20vw, 14.375rem);
    margin-bottom: 4rem;

    img{
        width: 100%;
        height: 100%;
        left: 20px;
    }
}

.socials > * {
    margin-right: 10%;
}

.copyright {
    font-size: clamp( 0.9rem, 1.5vw, 1.1rem );
    margin-top: 2.5rem;
}

.avails {
    width: 20%;
}

.community,
.places,
.about {
    h2{
        font-size: clamp( 1rem, 1.5vw, 1.2rem );
        margin-bottom: 1rem;
        margin-left: 78px;
    }
    ul ul{
        letter-spacing: 1px;
        margin-bottom: 10px;
        font-size: clamp( 0.8rem, 1vw, 1rem );
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
