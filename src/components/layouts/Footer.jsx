import React from 'react';
import logo from '../../resources/lastsect/Vector.png';
import styled from 'styled-components';

const Container = styled.footer`
	width: 1000px;
	max-width: 95%;
	border-top: 1px solid #f4f5f7;
	padding: 1.875rem 0.9375rem;
	margin: 2rem auto 1rem auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media ${({ theme }) => theme.mediaQueries['below630']} {
		flex-direction: column;
		& > * {
			margin-bottom: 1.5rem;
		}
	}
`;

const Footer = () => {
	return (
        <Container>
        <img src={logo} alt="logo" />
        <div class="flex align-start">
          <ul>
            <li>Phone: +2348181183423</li>
            <li>saintmichaell42@gmail.com</li>
          </ul>
    
          <ul>
            <li>Community</li>
            <li>Places</li>
            <li>About Us</li>
          </ul>
          <ul class="social-media">
            <li>
              <a className="circle" href="https://github.com/Saintt042/" target="_blank" rel='noopener noreferrer'>
                <i class="fab fa-facebook"></i>
                </a>
            </li>
            <li>
              <a className="circle" href="https://twitter.com/SaintMichaell" target="_blank" rel='noopener noreferrer'>
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a className="circle" href="https://www.instagram.com/saintt042/" target="_blank" rel='noopener noreferrer'>
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </Container>
	);
};

export default Footer;