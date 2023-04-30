<template>
    <div id="wrapper" class="position-relative vh-100">
        <div id="main-container" class="position-absolute top-50 start-50 translate-middle">
            
            <div class="mb-3 text-center">
                <h1> Welcome! </h1>

                <p> In order to continue using this application, please answer the question below to confirm your identity. <br/>
                    You need 2 correct answers to proceed.
                </p>

                <span class="mt-2"> <font-awesome-icon icon="fa-solid fa-check" class="text-success" /> {{ correctAnswers }}/2 </span>
                <h3 id="question" class="mt-1">{{ question }}</h3>
            </div>

            <div class="row g-3">
                <div v-if="questionIsDate" class="col-md-6 text-center">
                    <input type="date" id="dateAnswer" class="form-control" v-model="userAnswer">
                </div>

                <div v-else class="col-md-6">
                    <input type="text" id="answer" class="form-control" v-model="userAnswer" placeholder="Type your answer here..." @keydown="answerIsWrong = false">
                </div>

                <div class="col-md-3">
                    <button type="button" class="form-control btn fw-bold submit-btn" @click="checkAnswer"> SUBMIT ANSWER </button>
                </div>

                <div class="col-md-3">
                    <button type="button" class="form-control btn fw-bold submit-btn" @click="reAskUser"> RETRY </button>
                </div>
            </div>    

            <div v-if="answerIsWrong" class="mt-3  text-center text-danger">
                <p> Your answer is incorrect. Please check your spelling or you may retry again with another question. </p>
            </div>
        </div>

    </div>
</template>

<script>

    const data = require('../assets/json/identity-data.json');

    export default{
        data(){
            return{
                dataIndex: null,
                questionIsDate: false,
                lastQuestionIndex: null,
                usedIndex: [],
                question: "",
                answer: "",
                userAnswer: "",
                answerIsWrong: null,
                correctAnswers: 0,
            }
        },

        methods:{
            askUser(){
                this.dataIndex = Math.floor(Math.random() * data["total_questions"] + 1).toString();

                // Generate new index if current index is the same with the previous OR if index was already used and answered by the user correctly
                while (this.dataIndex == this.lastQuestionIndex || this.usedIndex.includes(this.dataIndex)){
                    this.dataIndex = Math.floor(Math.random() * data["total_questions"] + 1).toString();
                }

                this.lastQuestionIndex = this.dataIndex;
                let questionData = data[this.dataIndex];
                questionData["answer_type"] == "Date" ? this.questionIsDate = true :  this.questionIsDate = false;
                this.question = questionData["question"];
                this.answer = questionData['answer'];
            },

            reAskUser(){
                if (this.correctAnswers < 2){
                    this.answerIsWrong = null;
                    this.userAnswer == ""
                    this.askUser();
                }
                else{
                    this.setCookie();
                    this.$router.push('/rhea/home')
                }
            },

            checkAnswer(){
                if (this.userAnswer.toLowerCase() == this.answer.toLowerCase()){
                    this.usedIndex.push(this.dataIndex);
                    this.correctAnswers++;
                    this.userAnswer = "";
                    this.reAskUser()
                }
                else{
                    this.answerIsWrong = true;
                }
            },

            setCookie(){
                const d = new Date();
                d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
                let expires = "expires="+d.toUTCString();
                document.cookie = "rhea-user" + "=" + "KJIJ" + ";" + expires + ";path=/";
            }
        },

        mounted(){
            this.askUser()
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

    h1{
        font-family: 'Dancing Script', cursive;
        font-size: 4.5rem;
    }

    input[type="text"]{
        border: 1px solid #865439;
    }

    #wrapper, input[type="text"]{
        color: #865439;
    }

    .submit-btn{
        background-image: linear-gradient(#865439,  #C68B59);
        color: #FDF6EC;
    }

    .submit-btn:hover{
        background-image: linear-gradient(#C68B59, #DAB88B);
    }

    @media only screen and (max-width: 600px){
        #main-container{
            width: 80%;
        }
    }
</style>