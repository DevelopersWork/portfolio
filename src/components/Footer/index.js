import styled, { keyframes } from 'styled-components';
import { Bio } from '../../data/constants';

const FooterContainer = styled.footer`
    margin-top: 100px;
    padding: 80px 20px;
    background: linear-gradient(to top, #0f172a, transparent);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
`;

const FooterTitle = styled.div`
    font-family: 'Orbitron', sans-serif;
    font-size: 3rem;
    color: #fff;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const FooterQuote = styled.p`
    color: #888;
    margin-bottom: 30px;
    font-family: 'Poppins', sans-serif;
`;

const ConnectConsole = styled.div`
    background: #000;
    border: 1px solid #333;
    display: inline-block;
    padding: 30px;
    border-radius: 8px;
    min-width: 300px;
`;

const blinker = keyframes`
    50% { opacity: 0; }
`;

const BlinkText = styled.span`
    display: block;
    font-family: 'Courier New', monospace;
    color: #0f0;
    margin-bottom: 20px;
    animation: ${blinker} 1s linear infinite;
`;

const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`;

const ConsoleBtn = styled.a`
    display: inline-block;
    text-decoration: none;
    color: #fff;
    font-family: 'Rajdhani', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0 10px;
    transition: color 0.2s;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

const Copyright = styled.div`
    margin-top: 50px;
    font-size: 0.7rem;
    color: #444;
    font-family: 'Orbitron', sans-serif;
    line-height: 1.5;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTitle>MISSION COMPLETE?</FooterTitle>
      <FooterQuote>"Just a dev trying to make fun games"</FooterQuote>

      <ConnectConsole>
        <BlinkText>&gt; WAITING FOR INPUT...</BlinkText>
        <FooterLinks>
          <ConsoleBtn href={`mailto:${Bio.email}`}>
            [ EMAIL ME ]
          </ConsoleBtn>
          <ConsoleBtn href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            [ LINKEDIN ]
          </ConsoleBtn>
        </FooterLinks>
      </ConnectConsole>

      <Copyright>
        &copy; 2025 VIJAYA GOPINADH REDDY VELAGALA <br />
        LEVEL 3 SPECIALIST PROGRAMMER
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;