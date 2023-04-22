<template>
    <div id="wrapper" class="vh-100">

        <!-- Game description -->
        <div v-if="!playing">    
            <div class="container-fluid text-center game">
                <h1> Ready to play Ms. Julio? </h1>
                <p class="mt-3"> The game is very simple. I will show you 4 different phrases with a number. <br/>
                    Then, you will be given 4 options. Just pick the number associated with the given question. <br/>
                </p>
                
                <p class="mt-5"> If you are ready, press the <strong> START </strong> button. <br/> <span id="message"> Good luck! </span></p>

                <div class=" d-flex justify-content-center align-items-center"> 
                    <strong id="start-btn" class="py-2" @click="updatePlayMode"> START </strong>
                </div>
            </div>
        </div>

        <!-- Game proper -->
        <div v-if="playing" class="text-center game">
            <div v-if="!showOptions">
                <transition-group name="fade" tag="ul">
                    <li v-for="(phrase, index) in phrases" :key="index">
                        {{ phrase  }}
                    </li>
                </transition-group>
            </div>

            <div v-if="showOptions">
                <h4> Pick the number associated with </h4>
                <h3><strong> {{ gameQuestion }} </strong></h3>

                <ul class="mt-3 pt-5">
                    <li v-for="(option, index) in options" :key="index" :id="'option-' + index" class="mx-2 px-3 text-center options" @click="checkAnswer(index)">
                        {{ option }}
                    </li>
                </ul>
            </div>

            <div class="mt-5 d-flex align-content-center text-center">
                <div id="restart-btn" class="game-buttons">
                    <font-awesome-icon icon="fa-solid fa-rotate-left" size="2x" />
                </div>
            </div>
        </div>

        
    </div>
    
</template>

<script>
    const gameData = require('../assets/json/games.json');
    const gamePhrases = gameData["phrases"];

    export default{
        name: 'FocusGame',
        data(){
            return {
                playing: false, 
                showOptions: false,
                phrases: [], // Array holding full phrases
                selectedPhrases: [], // Array holding phrases only
                options: [], // Array holding possible answers
                addPhraseInterval: null,
                showOptionsInterval: null,
                gameQuestion: "",
                correctAnswer: null,
                answerIsCorrect: null,
                duration: 0,
            }
        },

        methods:{
            updatePlayMode(){
                this.playing ? this.playing = false : this.playing = true;           
            },

            addInterval(){
                if (this.playing && this.phrases.length != 4){
                    let index = Math.floor(Math.random() * 20);
                    let randomNumber = Math.floor(Math.random() * 100);
                    let phrase = gamePhrases[index];
                    let correctAnswerChanceGenerator = Math.floor(Math.random() * 2);

                    if (!this.selectedPhrases.includes(phrase)){
                        this.selectedPhrases.push(phrase);
                        this.options.push(randomNumber);
                        this.phrases.push(randomNumber + " " + phrase);

                        if (correctAnswerChanceGenerator == 1 && this.correctAnswer == null){
                            this.gameQuestion = phrase;
                            this.correctAnswer = randomNumber;
                        }
                    }
                }

                this.duration++;

                if (this.duration == 6 && this.phrases.length == 4){
                    clearInterval(this.addPhraseInterval);
                    this.showOptions = true;
                }
            },

            checkAnswer(key){
                var clickedElement = document.getElementById("option-" + key);

                if (clickedElement.innerHTML == this.correctAnswer){
                    this.correctAnswer = true;
                }
                else{
                    this.correctAnswer = false;
                }


            }
        },

        updated(){
            this.addPhraseInterval = setInterval(this.addInterval, 1000);
            this.showOptionsInterval = setInterval(this.addInterval, 7500);
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    h1{
        font-family: 'Dancing Script', cursivee;
        font-size: 3.5rem;
    }

    ul{
        padding: 0;
    }

    ul > .options{
        display: inline-block;
        width: 20%;
        border: 1px solid #865439;
        border-radius: 10%;
    }

    li{
        font-size: 2.5rem;
        list-style-type: none;
    }

    #wrapper{
        color: #865439;
    }

    #message{
        font-family: 'Dancing Script', cursive;
        font-size: 2rem;
    }

    #start-btn{
        width: 15%;
        background-image: linear-gradient(#865439, #C68B59);
        border: 2px solid #865439;
		border-radius: 30px;
		font-family: 'Poppins', sans-serif;
		font-size: 2rem;
		color: #FDF6EC;
		text-decoration: none;
    }

    #start-btn:hover{
        background-image: linear-gradient(#C68B59, #DAB88B);
		color: #FDF6EC;
        cursor: pointer;
    }

    .game{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .options:hover{
        background-color: #865439;
        color: #FDF6EC;
    }

    .fade-move, .fade-enter-active{
        animation: fadeIn 1s forwards;
    }

    .fade-leave-active{
        animation: fadeIn 1s reverse;
    }

    @keyframes fadeIn{
        from { opacity: 0 }
        to { opacity: 1 }
    }

</style>