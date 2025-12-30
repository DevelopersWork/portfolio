import styled, { keyframes } from 'styled-components';

const ChaosTrigger = styled.button`
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(20, 184, 166, 0.1);
    color: var(--teal-glow);
    border: 2px solid var(--teal-glow);
    padding: 15px 40px;
    font-family: 'Orbitron', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 4px;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 0 15px rgba(0, 173, 181, 0.3);
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    
    &:hover {
        background: var(--teal-glow);
        color: #000;
        box-shadow: 0 0 40px rgba(0, 173, 181, 0.8);
        letter-spacing: 2px;
    }
`;

const FooterContainer = styled.footer`
    margin-top: 100px;
    padding: 80px 20px;
    background: linear-gradient(to top, #050a10, transparent);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    width: 100%;
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

const blinker = keyframes`
    50% { opacity: 0; }
`;

const ConnectConsole = styled.div`
    background: #000;
    border: 1px solid #333;
    display: inline-block;
    padding: 30px;
    border-radius: 8px;
    min-width: 300px;
    
    @media (max-width: 768px) {
        width: 100%;
        min-width: auto;
    }
`;

const BlinkText = styled.span`
    display: block;
    font-family: 'Courier New', monospace;
    color: #0f0;
    margin-bottom: 20px;
    animation: ${blinker} 1s linear infinite;
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
        color: var(--teal-glow);
    }
`;

const Copyright = styled.div`
    margin-top: 50px;
    font-size: 0.7rem;
    color: #444;
    font-family: 'Orbitron', sans-serif;
    line-height: 1.5;
`;

const Footer = ({ onChaos }) => {
    return (
        <>
            <ChaosTrigger onClick={onChaos}>
                ⚠️ INITIATE ZERO-G
            </ChaosTrigger>

            <FooterContainer>
                <div style={{ textAlign: 'center' }}>
                    <FooterTitle>MISSION COMPLETE?</FooterTitle>
                    <p style={{ color: '#888', marginBottom: '30px' }}>"Just a dev trying to make fun games"</p>

                    <ConnectConsole>
                        <BlinkText>&gt; WAITING FOR INPUT...</BlinkText>
                        <div className="footer-links">
                            <ConsoleBtn href="mailto:vijayagopinadhreddy.velagala@thedevelopers.work">
                                [ EMAIL ME ]
                            </ConsoleBtn>

                            <ConsoleBtn href="#">
                                [ LINKEDIN ]
                            </ConsoleBtn>
                        </div>
                    </ConnectConsole>

                    <Copyright>
                        &copy; 2025 VIJAYA GOPINADH REDDY VELAGALA <br />
                        LEVEL 3 SPECIALIST PROGRAMMER
                    </Copyright>
                </div>
            </FooterContainer>
        </>
    );
};

export default Footer;
