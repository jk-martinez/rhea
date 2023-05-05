<template>
    <div id="wrapper" class="vh-100 position-relative">
        
        <!-- Game instructions -->
        <div v-if="!playing" class="container-fluid position-absolute top-50 start-50 translate-middle text-center">
    
            <h1> Ready to play Ms. Julio? </h1>
            <p class="mt-3"> To play this game, memorize the position of the words in the given sequence.
                <br/>
                Then, select the word based on the given position. Be quick as you'll only be given 3 seconds to answer.
            </p>

            <p> If you are ready, press the <strong> START </strong> button.
                <br/>
                <span id="message"> Good luck! </span>
            </p>

            <div class="mb-3 d-flex justify-content-center align-items-center text-center">
                <strong id="start-btn" @click="updatePlayMode()"> START </strong>
            </div>
            
            <router-link to="/rhea/home" id="home-link"> 
                <font-awesome-icon icon="fa-solid fa-home" /> Back to Home
            </router-link>
            
        </div>

        <!-- Game proper -->
        <div v-else class="container-fluid position-absolute top-0 start-50 translate-middle-x text-center">
            <div class="p-5">
                <h4 id="score"> Your score: {{ score }} </h4> <br/>
                <font-awesome-icon icon="fa-solid fa-rotate-left" class="mx-1 p-1 game-btn" 
                    data-bs-toggle="tooltip" data-bs-placement="left" title="Restart Game"
                    @click="updatePlayMode()" 
                />
                <font-awesome-icon icon="fa-solid fa-house" class="mx-1 p-1 game-btn"
                    data-bs-toggle="tooltip" data-bs-placement="right" title="Go to Home"
                    @click="this.$router.push('/rhea/home')" 
                />
            </div>

            <!-- Question -->
            <div v-if="!showSequence || endOfQuestion">
                <p class="mb-5 text-center" id="question"> What word is in 
                    <strong> {{ getPosition }} </strong> position ?
                </p>
            </div>

            <!-- Word sequence -->
            <div class="d-flex justify-content-center">
                <!-- Sequence items -->
                <div>
                    <transition-group name="fade" tag="ul">
                        <li v-for="(word, index) in sequence" :key="index" class="my-2 py-1 px-4 question-item text-center"> 
                            <font-awesome-icon icon="fa-solid fa-check" :id="'check-mark-' + index" class="text-success invisible-check-mark" /> 
                            {{ showSequence ? word : '?' }} 
                        </li>
                    </transition-group>
                </div>
                
                <div v-if="sequence.length > 0 && (!showSequence || endOfQuestion)" class="vr mx-3"> </div>

                <!-- Answer options -->
                <div v-if="!showSequence || endOfQuestion" id="game-options-container">
                    <ul>
                        <li v-for="(word, index) in shuffledSequence" :key="index" :id="'game-option-' + index" class="my-2 py-1 px-4 answers-item" 
                            @click="checkAnswer(word, index)"> 
                            {{ word  }} 
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Answer evaluation messages -->
            <div v-if="timeIsUp" class="mt-5 mb-2 answer-evaluation text-danger">
                <p> Time is up! Let's try again. </p>
            </div>

            <div v-if="answerIsCorrect" class="mt-5 mb-2 answer-evaluation text-success">
                <p> {{ correctAnswerMessage }} </p>
            </div>

            <div v-if="answerIsWrong" class="my-5 mb-2 answer-evaluation text-danger">
                <p> {{ wrongAnswerMessage }} </p>
            </div>
            
        </div>

        <audio id="correct-answer-sound-effect">
            <source src="../assets/audio/ping-sound-effect.mp3" type="audio/mpeg" />
        </audio>

        <audio id="wrong-answer-sound-effect">
            <source src="../assets/audio/wrong-answer-sound-effect.mp3" type="audio/mpeg" />
        </audio>
    </div>
</template>

<script>
    const gameData = require('../assets/json/games.json');
    const randomWords = gameData['random_words'];

    export default {
        data(){
            return{
                playing: false,
                showSequence: false,
                endOfQuestion: false,
                sequence: [],
                shuffledSequence: [],
                position: null,
                correctAnswer: "",
                chosenAnswer: "",
                duration: 0,
                addTimer: null,
                score: 0,
                answerIsCorrect: false,
                answerIsWrong: false,
                timeIsUp: false,
            }
        },

        computed: {
            getPosition(){
                if (this.position + 1 == 1){ return "1st"; }
                else if (this.position + 1 == 2){ return "2nd"; }
                else if (this.position + 1 == 3){ return "3rd" }
                else { return (this.position + 1) + "th"; }
            },

            correctAnswerMessage(){
                const messages = [
                    "You're doing great!",
                    "Keep it up!",
                    "Awesome!",
                    "Good job!"
                ]

                return messages[Math.floor(Math.random() * messages.length)] + " Let's do that again!";
            },

            wrongAnswerMessage(){
                const messages = [
                    "Sorry, that's not what you're looking for.",
                    "Oops! That's not it."
                ]

                return messages[Math.floor(Math.random() * messages.length)] + " Let's try again.";
            },
        },

        methods:{
            updatePlayMode(){
                if (this.playing){
                    this.playing = false;
                    this.showSequence = false;
                    this.endOfQuestion = false;
                    this.resetGame();
                    this.position = null
                    this.score = 0;
                    
                    if (this.addTimer != null){
                        clearInterval(this.addTimer);
                    }
                    this.addTimer = null;
                }
                else{
                    this.playing = true;
                    this.showSequence = true;
                    this.addTimer = setInterval(this.addInterval, 1000);
                }
            },

            addInterval(){
                if (this.playing && this.sequence.length != 5){
                    let index = Math.floor(Math.random() * randomWords.length); // Generate a random number to use as an index in 52-word array of random words
                    let randomWord = randomWords[index];
                    let correctAnswerChanceGenerator = Math.floor(Math.random() * 2);

                    if (!this.sequence.includes(randomWord)){
                        this.sequence.push(randomWord);
                        this.shuffledSequence.push(randomWord);

                        // If correctAnswerChanceGenerator is == 1, then take current selected random word be the correct answer
                        if (correctAnswerChanceGenerator == 1 && this.correctAnswer == ""){
                            this.correctAnswer = randomWord;
                            this.position = this.sequence.length - 1;
                        }
                    }
                }

                this.duration++;

                if (this.duration == 7 && this.sequence.length == 5){
                    this.shuffledSequence.sort();
                    this.showSequence = false;
                }
                
                if (this.duration == 10 && this.chosenAnswer == ""){
                    document.getElementById('wrong-answer-sound-effect').play();
                    this.timeIsUp = true;
                    this.checkAnswer("");
                }

                // Reset the following game factors to create another question
                if (this.duration == 13){
                    this.showSequence = true;
                    this.endOfQuestion = false;
                    this.resetGame();
                }
            },

            checkAnswer(chosenAnswer, index = null){
                const clickedElement = document.getElementById('game-option-' + index);
                
                this.showSequence = true;
                this.endOfQuestion = true;
                this.chosenAnswer = chosenAnswer;
                
                document.getElementById('game-options-container').classList.add('disabled-game-container');
                document.getElementById('check-mark-' + this.position).classList.add('visible-check-mark');
                document.getElementById('check-mark-' + this.position).classList.remove('invisible-check-mark');

                
                if (chosenAnswer != ""){
                    clickedElement.classList.remove('answers-option');
                    clickedElement.classList.add('chosen-answer');
                    
                    if (chosenAnswer == this.correctAnswer){
                        document.getElementById('correct-answer-sound-effect').play();
                        this.score++;
                        this.answerIsCorrect = true;
                    }
                    else{
                        document.getElementById('wrong-answer-sound-effect').play();
                        this.answerIsWrong = true;
                    }
                }   
            },

            resetGame(){
                this.sequence = [];
                this.shuffledSequence = [];
                this.duration = 0;
                this.correctAnswer = "";
                this.chosenAnswer = "";
                this.answerIsCorrect = false;
                this.answerIsWrong = false;
                this.timeIsUp = false;
            },

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
            }
        },

        beforeMount(){
            if (this.getCookie('rhea-user') ==  ""){
                this.$router.push('/rhea/identity-checker')
            }
        },

        unmounted(){
            clearInterval(this.addTimer);
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

    h1{
        font-family: 'Dancing Script', cursive;
        font-size: 3.5rem;
    }

    ul{
        padding: 0;
    }

    #wrapper{
        color: #865439;
    }

    #message, #question{
        font-family: 'Dancing Script', cursive;
        font-size: 2.5rem;
    }

    #start-btn{
        width: 15%;
        background-image: linear-gradient(#865439, #C68B59);
        border: 2px solid #865439;
        border-radius: 50px;
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        color: #FDF6EC;
    }

    #start-btn:hover{
        background-image: linear-gradient(#C68B59, #DAB88B);
        border-color: #C68B59;
        cursor: pointer
    }

    #home-link{
        color: #865439;
        text-decoration: none;
    }

    #home-link:hover{
        text-decoration: underline;
    }

    .game-container{
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .disabled-game-container{
        pointer-events: none;
    }

    #score{
        font-family: 'Dancing Script', cursive;
        font-size: 2.5rem;
    }
    
    #question{
        animation: fadeInDown 1s forwards;
    }

    .question-item{
        list-style-type: none;
        font-size: 2rem;
    }

    .visible-check-mark{
        display: inline-block;
    }

    .invisible-check-mark{
        display: none
    }

    .answers-item{
        list-style-type: none;
        border: 2px solid #865439;
        border-radius: 50px;
        font-size: 2rem;
        animation: fadeIn 1s forwards;
    }

    .answers-item:hover, .chosen-answer{
        background-color: #865439;
        border: 2px solid #865439;
        color: #FDF6EC;
        cursor: pointer;
    }

    .game-btn{
        border: 1px solid #865439;
        border-radius: 50%;
    }

    .game-btn:hover{
        border: 1px solid #C68B59;
        border-radius: 50%;
        background-color: #865439;
        color: #FDF6EC;
        cursor: pointer;
    }

    .answer-evaluation{
        font-size: 1.5rem;
        animation: fadeInDown 0.5s forwards;
    }

    .fade-enter-active{
        animation: fadeIn 1s forwards;
    }

    @keyframes fadeIn{
        from { opacity: 0; transform: translateX(20px) }
        to { opacity: 1; transform: translateX(0) }
    }

    @keyframes fadeInDown{
        from{
            opacity: 0;
            transform: translateY(-20px);
        }
        to{
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media only screen and (max-width: 600px){
        #start-btn{
            width: 60%;
            font-size: 1.5rem;
        }

        #question{
            font-size: 1.5rem;
        }

        .question-item, .answers-item{
            font-size: 1.2rem;
        }
    }
</style>