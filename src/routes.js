import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './components/MainPage.vue';
import NumberAssociation from './components/NumberAssociation.vue';
import PomodoroTimer from './components/PomodoroTimer.vue';
import PeriodicTable from './components/PeriodicTable.vue';
import LearningReferences from './components/LearningReferences.vue';
import UnitsOfMeasurement from './components/UnitsOfMeasurement.vue';
import WordSequence from './components/WordSequence.vue';
import IdentityChecker from './components/IdentityChecker.vue'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/focus-game-one',
        component: NumberAssociation
    },
    {
        path: '/pomodoro-timer',
        component: PomodoroTimer
    },
    {
        path: '/periodic-table',
        component: PeriodicTable
    },
    {
        path: '/concepts-and-formulas',
        component: LearningReferences
    },
    {
        path: '/units-of-measurements',
        component: UnitsOfMeasurement
    },
    {
        path: '/word-sequence',
        component: WordSequence
    },
    {
        path: '/identity-checker',
        component: IdentityChecker
    }
];

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
});

export default router;