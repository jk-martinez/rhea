import { createRouter, createWebHistory } from 'vue-router';

import App from './components/App.vue';
import MainPage from './components/MainPage.vue';
import NumberAssociation from './components/NumberAssociation.vue';
import PomodoroTimer from './components/PomodoroTimer.vue';
import PeriodicTable from './components/PeriodicTable.vue';
import LearningReferences from './components/LearningReferences.vue';
import UnitsOfMeasurement from './components/UnitsOfMeasurement.vue';
import WordSequence from './components/WordSequence.vue';
import ElementsQuiz from './components/ElementsQuiz.vue';
import IdentityChecker from './components/IdentityChecker.vue'

const routes = [
    {
        path: '/rhea',
        component: App
    },
    {
        path: '/rhea/home',
        component: MainPage
    },
    {
        path: '/rhea/focus-game-one',
        component: NumberAssociation
    },
    {
        path: '/rhea/pomodoro-timer',
        component: PomodoroTimer
    },
    {
        path: '/rhea/periodic-table',
        component: PeriodicTable
    },
    {
        path: '/rhea/learning-references',
        component: LearningReferences
    },
    {
        path: '/rhea/units-of-measurements',
        component: UnitsOfMeasurement
    },
    {
        path: '/rhea/word-sequence',
        component: WordSequence
    },
    {
        path: '/rhea/elements-quiz',
        component: ElementsQuiz
    },
    {
        path: '/rhea/identity-checker',
        component: IdentityChecker
    }
];

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
});

export default router;