<template>
    <div id="wrapper" class="container-fluid position-relative">
        
        <!-- Game home page -->
        <div v-if="!playing" id="home-page" class="mt-2 text-center position-absolute top-0 start-50 translate-middle-x">
            <router-link  to="/rhea/home" id="home-link">
                <font-awesome-icon icon="fa-solid fa-home" /> Back to Home
            </router-link>              
            <h1 class="mt-1 text-center"> Elements Quiz </h1>

            <!-- Game results -->
            <div v-if="!playing && endOfQuiz" id="quiz-results" class="mt-5 text-center">
                <small> Your element quiz for <strong>SET {{ moduleNumber }}</strong> had just concluded. </small>
                <h3> You got <span class="fw-bold">{{ score }}</span> correct answers out of {{ totalItems }} questions. </h3>
                <small> Select a set to start another quiz. </small>
                <hr class="mt-5" />
            </div>

            <div class="mt-5 mb-5">
                <!-- Game instructions -->
                <div class="my-5 text-start">
                    <small class="fw-bold">Reminders:</small>
                    <ul id="game-reminders">
                        <li> You will be given <u>2 hours</u> for 120-item quiz and <u>3 hours and 15 minutes</u> for sets with more than 200 questions. </li>
                        <li> Choose your answer by clicking a radio (circle) button or clicking the sentence/expression next to it. </li>
                        <li> 
                            Correct answers will be highlighted with a <span class="bg-success text-white ps-1 pe-1">green background color</span> 
                            while the selected wrong answer will be highlighted with <span class="text-danger">red font color</span>. 
                        </li>
                        <li> 
                            Square root signs are shown like this: <span class="fs-3 fw-bold">&radic;</span>. 
                            All underlined expressions/terms next to it means that they part of the square root. 
                        </li>
                        <li> You may press the <strong>"ENTER"</strong> button as a keyboard shortcut to proceed after answering a question. </li>
                        <li> Don't worry about accidentally closing this tab, exiting your browser's window, clicking the "Back to Home", or clicking the "Reset Quiz" link. 
                            A prompt will be shown to confirm your action. However, confirming an exit/reset won't save your progress.
                        </li>
                    </ul>
                </div>

                <hr />

                <!-- Game settings -->
                <div class="my-2 text-start">
                    <small class="fw-bold"> Additional Quiz Settings </small>

                    <div class="mt-2 d-flex flex-wrap justify-content-evenly">
                        <div class="d-flex align-items-center">
                            <label class="switch">
                                <input type="checkbox" @click="changeQuestionOrder()"/>
                                <span class="slider"></span>
                            </label>
                            <label class="ms-2"> Random question order </label>
                        </div>

                        <div class="d-flex align-items-center">
                            <label class="switch">
                                <input type="checkbox" @click="changeTimeSetting()"/>
                                <span class="slider"></span>
                            </label>
                            <label class="ms-2"> No time limit </label>
                        </div>
                    </div>
                </div>
                
                <hr />

                <!-- Set selection -->
                <div class="my-5 text-center">
                    <p> Choose a set of questions you'd like to answer. Quiz will start once you choose a set. </p>

                    <div class="mt-2 fs-2 d-flex flex-wrap justify-content-center align-items-center text-center">
                        <div class="mx-2 my-2 text-center fw-bold module-option" @click="startQuiz(1)"> 1 </div>
                        <div class="mx-2 my-2 text-center fw-bold module-option" @click="startQuiz(2)"> 2 </div>
                        <div class="mx-2 my-2 text-center fw-bold module-option" @click="startQuiz(3)"> 3 </div>
                        <div class="mx-2 my-2 text-center fw-bold module-option" @click="startQuiz(4)"> 4 </div>
                        <div class="mx-2 my-2 text-center fw-bold module-option" @click="startQuiz(5)"> 5 </div>
                        <div class="mx-2 my-2 text-center fw-bold module-option" @click="startQuiz(6)"> 6 </div>
                        <div class="mx-2 my-2 text-center fw-bold module-option" @click="startQuiz(7)"> 7 </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <!-- Quiz container -->
        <div v-else id="quiz-container" class="mt-2 container" @keyup.enter="nextQuestion">
            <div class="mb-5 text-center">
                <p id="home-link" data-bs-toggle="modal" data-bs-target="#confirmDialog" @click="returningToHome = true">
                    <font-awesome-icon icon="fa-solid fa-home" /> Back to Home
                </p>
                <h1 class="mt-1"> Elements Quiz </h1>
            </div>
            
            <!-- Question number, Quiz Timer, Reset Quiz link -->
            <div class="d-flex justify-content-evenly">
                <h5> <font-awesome-icon icon="fa-solid fa-hashtag" /> M{{ moduleNumber }} - Q{{ questionNumber }} </h5>
                <h5 id="quiz-timer"> <font-awesome-icon icon="fa-solid fa-hourglass" /> 
                    <strong v-if="timedQuiz"> {{ fullRemainingTime }} </strong>
                    <strong v-else> No time limit </strong>
                </h5>
                <h5 id="reset-link" data-bs-toggle="modal" data-bs-target="#confirmDialog" @click="returningToHome = false"> 
                    <font-awesome-icon icon="fa-solid fa-rotate-left" /> Reset Quiz 
                </h5>
            </div>

            <!-- Quiz progress -->
            <div class="progress mb-1">
                <div class="progress-bar progress-bar-striped" :style="{ width: quizProgress + '%' }"> 
                    <strong>{{ usedIndex.length }}/{{ totalItems }} </strong>
                </div>
            </div>
            
            <!-- Question -->
            <h2 id="question" class="p-3 rounded" v-html="question"></h2>

            <!-- Choices -->
            <div id="choices-container" class="mt-3">
                <div v-for="(choice, index) in choices" :key="index" class="d-flex flex-wrap">
                    <div class="form-check">
                        <label :id="'choice-' + index" class="form-check-label" :data-answer="choice" > 
                            <input type="radio" :id="'radio-btn-' + index" class="form-check-input" name="choices" @click="checkAnswer(choice, 'choice-' + index)"   /> 
                            <span v-html="choice" class="ps-1 pe-1"></span>
                        </label>
                    </div>
                </div>
            </div>
        
            <div v-if="questionWasAnswered" id="next-question-link" class="mt-5">
                <span @click="nextQuestion">
                    <font-awesome-icon icon="fa-solid fa-arrow-right" /> Proceed
                </span>
            </div>
        </div>
        
        <!-- Confirm Exit Modal -->
        <div class="modal fade " id="confirmDialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title fw-bold">Confirm Exit</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        <p> Leaving this page will not save your progress. Are you sure you want to continue? </p>
                    </div>

                    <div class="modal-footer">
                        <button v-if="returningToHome" type="button" class="btn btn-danger" @click="this.$router.push('/rhea/home')" data-bs-dismiss="modal"> 
                            YES, leave this page and return to home. 
                        </button>
                        
                        <button v-else type="button" class="btn btn-danger" @click="resetQuiz" data-bs-dismiss="modal"> 
                            YES, reset this quiz. 
                        </button>

                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"> NO, I'll continue the quiz. </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sound effect audio resource -->
        <audio id="ping-sound-effect">
            <source src="../assets/audio/ping-sound-effect.mp3" type="audio/mpeg" />
        </audio>
    </div>
</template>

<script>

    export default{
        data(){
            return {
                randomQuestionOrder: false,
                timedQuiz: true,
                moduleNumber: 0,
                questionModule: null,
                totalItems: null,
                playing: false,
                questionNumber: 0,
                question: "",
                choices: [],
                correctAnswer: "",
                usedIndex: [],
                questionWasAnswered: false,
                score: 0,
                endOfQuiz: false,
                returningToHome: false,
                
                quizTimer: null,
                timeToReach: null,
                remainingHour: 2,
                remainingMinutes: 0,
                remainingSeconds: 0
            }
        },

        computed:{
            fullRemainingTime(){
                let hours = this.remainingHour.toLocaleString('en-US', {
                    minimumIntegerDigits: 2
                });

                let minutes = this.remainingMinutes.toLocaleString('en-US', {
                    minimumIntegerDigits: 2
                });

                let seconds = this.remainingSeconds.toLocaleString('en-US', {
                    minimumIntegerDigits: 2
                })

                return hours + ":" + minutes + ":" + seconds
            },

            quizProgress(){
                return ((this.usedIndex.length/this.totalItems) * 100).toString();
            }
        },

        methods:{
            changeQuestionOrder(){
                this.randomQuestionOrder ? this.randomQuestionOrder = false : this.randomQuestionOrder = true;
            },

            changeTimeSetting(){
                this.timedQuiz ? this.timedQuiz = false : this.timedQuiz = true;
            },
            
            // Method to start the quiz and set timer settings
            startQuiz(selectedModule = null){
                this.score = 0;
                this.moduleNumber = selectedModule;
                this.questionModule = require('../assets/json/elements-module-' + this.moduleNumber + '.json');
                this.totalItems = this.questionModule['total_items'];

                if (this.timedQuiz){
                    if (this.totalItems > 200){
                        this.remainingHour = 3;
                        this.remainingMinutes = 15;
                        this.remainingSeconds = 0
                    }

                    this.timeToReach = new Date()
                    this.timeToReach.setHours(this.timeToReach.getHours() + this.remainingHour);
                    this.timeToReach.setMinutes(this.timeToReach.getMinutes() + this.remainingMinutes);
                    this.timeToReach.setSeconds(this.timeToReach.getSeconds() + this.remainingSeconds);
                    this.quizTimer = setInterval(this.tickTimer, 1000);
                }
                
                this.playing = true;
                this.askQuestion();
            },

            // Method to set the question and display it on the page
            askQuestion(){
                if (this.usedIndex.length != this.totalItems){
                    if (this.randomQuestionOrder){
                        this.questionNumber = Math.floor(Math.random() * this.totalItems) + 1;

                        while (this.usedIndex.includes(this.questionNumber.toString())){
                            this.questionNumber = Math.floor(Math.random() * this.totalItems) + 1;
                        }
                    }
                    else{
                        this.questionNumber++
                    }

                    for (let choice of this.questionModule[this.questionNumber]['choices']){
                        this.choices.push(choice)
                    }

                    this.usedIndex.push(this.questionNumber.toString());
                    this.question = this.questionModule[this.questionNumber]['question'];
                    this.correctAnswer = this.questionModule[this.questionNumber]['correct_answer'];
                    this.showQuestion = true;
                }

                else{
                    clearInterval(this.quizTimer);
                    this.resetQuiz()
                    document.getElementById('ping-sound-effect').play();
                    this.endOfQuiz = true;
                }
            },

            // Method to check answer of user
            checkAnswer(selectedAnswer, selectedElementID){
                this.questionWasAnswered = true;

                let selectedElement = document.getElementById(selectedElementID);
                document.getElementById('choices-container').classList.add('pe-none');
                
                if (this.correctAnswer == selectedAnswer){
                    ++this.score;
                    this.showCorrectAnswer(selectedElement);
                }
                else{
                    selectedElement.classList.add('text-danger'); // Add indication on selected wrong answer
                    
                    for (let i=0; i <= (this.choices.length - 1); i++){
                        let elementToCheck = document.getElementById('choice-' + i)
                        
                        if (elementToCheck.getAttribute('data-answer') == this.correctAnswer){
                            this.showCorrectAnswer(elementToCheck);
                        }
                    }
                }
            },
            
            // Method to highlight correct answer
            showCorrectAnswer(correctElement){
                correctElement.classList.add('bg-success');
                correctElement.classList.add('text-white');
            },

            // Method to update UI elements and show next question
            nextQuestion(){
                if (this.questionWasAnswered){
                    this.questionWasAnswered = false;
                    this.showQuestion = false;
                    this.resetQuestion()
                    this.askQuestion();
                    document.getElementById('choices-container').classList.remove('pe-none');

                    for (let i=0; i<= (this.choices.length - 1); i++){
                        document.getElementById('choice-' + i).classList.remove('bg-success');
                        document.getElementById('choice-' + i).classList.remove('text-white');
                        document.getElementById('choice-' + i).classList.remove('text-danger');
                        document.getElementById('radio-btn-' + i).checked = false;
                    }
                }
            },

            // Function for timer interval
            tickTimer(){
                let now = new Date().getTime();
                let distance = this.timeToReach - now;

                this.remainingHour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.remainingSeconds = Math.floor((distance % (1000 * 60) / 1000));
                
                // Notify user when it is last 15 minutes before time is up
                if (this.remainingHour == 0 && this.remainingMinutes == 15 && this.remainingSeconds == 0){
                    document.getElementById('ping-sound-effect').play();
                }
                
                // Reset Quiz when time is up
                if (distance < 0){
                    document.getElementById('ping-sound-effect').play();
                    this.resetQuiz()
                    this.endOfQuiz = true;
                }
            },

            // Method to reset question, choices, and answer to default values
            resetQuestion(){
                this.question = "";
                this.choices = [];
                this.correctAnswer = "";
            },
            
            // Method to reset quiz settings to its default values
            resetQuiz(){
                clearInterval(this.quizTimer);
                this.resetQuestion();
                this.questionModule = null;
                this.questionNumber = 0;
                this.usedIndex = [];
                this.remainingHour = 2;
                this.remainingMinutes = 0;
                this.remainingSeconds = 0;
                this.playing = false;
                this.endOfQuiz = false;
                this.randomQuestionOrder = false;
                this.timedQuiz = true;
            },

            // Method to check if 'rhea-user' cookie exist
            getCookie(cookieName) {
                let name = cookieName + "=";
                let ca = document.cookie.split(';');

                for(let i = 0; i < ca.length; i++) {
                    let c = ca[i];

                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }

                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            },
        },

        // beforeMount lifecycle function
        beforeMount(){
            if (this.getCookie('rhea-user') == ""){
                this.$router.push('/rhea/identity-checker')
            }
        },

        /* 
        |   mounted lifecycle function
        |   Add beforeUnload event listener to window to prevent user accidentally stopping the quiz
        */ 
        mounted(){
            window.addEventListener('beforeunload', (event)=>{
                event.preventDefault();
                event.returnValue = ''
            });
        },

        // beforeUnmount lifecycle function
        beforeUnmount(){
            clearInterval(this.quizTimer)
            this.quizTimer = null;
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Chivo+Mono&display=swap');

    h1{
        font-family: 'Dancing Script', cursive;
        font-size: 4.5rem;
    }

    input[type="radio"], .form-check-label{
        font-size: 1.5rem;
    }

    input[type="radio"]{
        border-color: #865439;
    }

    input[type="radio"]:checked{
        background-color: #C68B59;
    }

    #wrapper{
        color: #865439;   
    }

    #home-link, #reset-link{
        color: #865439;
        text-decoration: none;
    }

    #home-link:hover, #reset-link:hover{
        text-decoration: underline;
        cursor: pointer
    }

    #home-page, #quiz-container, #quiz-results{
        animation: fadeIn 1s forwards;
    }

    #game-reminders{
        list-style-type: square;
    }

    #game-reminders>li{
        margin-bottom: 5px;
    }

    #quiz-timer{
        font-family: 'Chivo Mono', monospace;
    }

    #question{
        background-image: linear-gradient(to bottom right, #865439, #C68B59);
        color: #FDF6EC;
        text-align: justify;
    }    
    
    #choices-container{
        margin-left: 30px;
    }

    #next-question-link:hover{
        text-decoration: underline;
        cursor: pointer;
    }

    #next-question-link{
        animation: fadeIn 0.5s forwards;
    }

    .switch{
        position: relative;
        display: inline-block;
        width: 50px;
        height: 30px;
    }

    .switch input{
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider{
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 34px;
        background-color: #C68B59;
        transition: .5s;
        -webkit-transition: .5s;
    }

    .slider:before{
        position: absolute;
        width: 22px;
        height: 22px;
        left: 4px;
        bottom: 4px;
        border: 1px solid #865439;
        border-radius: 50%;
        background-color: #FDF6EC;
        content: "";
        transition: .5s;
        -webkit-transition: .5s;
    }

    input:checked + .slider{
        background-color: #8FC1D4
    }

    input:checked + .slider:before{
        transform: translateX(20px);
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
    }

    .module-option{
        width: 7%;
        border: 2px solid #865439;
        border-radius: 5px;
        cursor: pointer
    }

    .module-option:hover{
        background-image: linear-gradient(#865439, #C68B59);
        color: #FDF6EC
    }

    .progress{
        background-color: #8FC1D4;
    }

    .progress-bar{
        background-color: #C68B59;
        color: #FDF6EC
    }

    @media only screen and (max-width: 600px){
        h1{
            font-size: 2.5rem;
        }

        h2{
            font-size: 1.2rem;
        }

        h5{
            font-size: 1rem;
        }

        input[type="radio"], .form-check-label{
            font-size: 1rem;
        }

        #home-page{
            width: 100%;
            padding: 20px;
        }

        #question{
            text-align: start
        }

        .module-option{
            width: 25%;
        }

        .form-check{
            padding: 0;
        }
    }

    @keyframes fadeIn{
        from{
            opacity: 0;
            transform: translateY(-20px)
        }

        to{
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>