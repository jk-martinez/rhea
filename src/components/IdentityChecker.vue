<template>
    <div id="wrapper" class="position-relative vh-100">
        <div class="position-absolute top-50 start-50 translate-middle">
            
            <div class="mb-3 text-center">
                <p> In order to continue using this application, please answer the question below to confirm your identity. </p>

                <h3 id="question">{{ question }}</h3>
            </div>

            <div class="row g-3">
                <div v-if="questionIsDate" class="col-md-6 text-center">
                    <input type="date" id="dateAnswer" class="form-control" >
                </div>

                <div v-else class="col-md-6">
                    <input type="text" id="answer" class="form-control" placeholder="Type your answer here...">
                </div>

                <div class="col-md-3">
                    <button type="button" class="form-control btn submit-btn" @click="checkAnswer"> SUBMIT ANSWER </button>
                </div>

                <div class="col-md-3">
                    <button type="button" class="form-control btn submit-btn" @click="reAskUser"> RETRY </button>
                </div>
            </div>    

            <div v-if="answerIsWrong" class="mt-3  text-center text-danger">
                <p> Your answer is incorrect. Please check your spelling or you may retry again with another question. <br/>
                    If question isn't replaced, keep clicking the retry button.
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    const martinData = require('../assets/json/martin.json');

    export default{
        data(){
            return{
                questionIsDate: false,
                question: "",
                answer: "",
                answerIsWrong: null
            }
        },

        methods:{
            askUser(){
                let index = Math.floor(Math.random() * 3).toString();
                let questionData = martinData[index];
                
                questionData["answer_type"] == "Date" ? this.questionIsDate = true :  this.questionIsDate = false;
                this.question = questionData["question"];
                this.answer = questionData['answer'];
            },

            reAskUser(){
                this.answerIsWrong = null;
                this.askUser();
            },

            checkAnswer(){
                let answer = "";

                if (this.questionIsDate){
                    answer = document.getElementById('dateAnswer').value; 
                }
                else{
                    answer = document.getElementById('answer').value; 
                }

                if (answer.toLowerCase() == this.answer.toLowerCase()){
                    this.setCookie();
                    this.$router.push('/');
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

    #wrapper{
        color: #865439;
    }

    .submit-btn{
        background-image: linear-gradient(#865439,  #C68B59);
        color: #FDF6EC;
    }

    .submit-btn:hover{
        background-image: linear-gradient(#C68B59, #DAB88B);
    }
</style>