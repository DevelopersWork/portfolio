import { createSlice } from '@reduxjs/toolkit';
import links from '../constants/links.json';
import content from '../constants/content.json';
import missions from '../constants/missions.json';
import skills from '../constants/skills.json';

const initialState = {
    chaosMode: false,
    stats: {
        level: 3,
        class: 'DATA ENGR',
        specialist: 'SPECIALIST',
        hp: 100,
        exp: 85
    },
    links: links,
    content: content,
    missions: missions,
    skills: skills
};

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        toggleChaos: (state) => {
            state.chaosMode = !state.chaosMode;
        },
        updateHp: (state, action) => {
            state.stats.hp = action.payload;
        },
        updateExp: (state, action) => {
            state.stats.exp = action.payload;
        }
    },
});

export const { toggleChaos, updateHp, updateExp } = portfolioSlice.actions;
export default portfolioSlice.reducer;
