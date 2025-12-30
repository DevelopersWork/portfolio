import styled from 'styled-components';

const HudContainer = styled.div`
    position: fixed;
    top: 30px;
    right: 40px;
    text-align: right;
    border-right: 3px solid var(--teal-glow);
    padding-right: 15px;
    z-index: 100;
`;

const HudText = styled.div`
    font-family: 'Orbitron', sans-serif;
    color: var(--teal-glow);
    letter-spacing: 2px;
    font-size: 0.8rem;
    margin-bottom: 6px;
    text-shadow: 0 0 8px rgba(0, 173, 181, 0.4);
`;

const HudBar = styled.div`
    width: 150px;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    margin-left: auto;
    position: relative;
`;

const HudFill = styled.div`
    width: 85%;
    height: 100%;
    background: var(--teal-glow);
    box-shadow: 0 0 10px var(--teal-glow);
`;

const HUD = () => {
    return (
        <HudContainer>
            <HudText>LVL 03 :: SPECIALIST</HudText>
            <HudText>CLASS :: DATA ENGR</HudText>
            <HudBar>
                <HudFill />
            </HudBar>
            <div style={{ fontSize: '0.7rem', color: '#666', marginTop: '5px' }}>HP: 100%</div>
        </HudContainer>
    );
};

export default HUD;
