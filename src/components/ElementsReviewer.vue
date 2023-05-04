<template>
    <div id="wrapper" class="container text-center">
        <header class="mt-2 mb-5">
            <router-link to="/rhea/home" id="home-link">
                <font-awesome-icon icon="fa-solid fa-house" /> Back to Home
            </router-link>

            <h1> Elements Reviewer </h1>
            <h6> Review the modules given by your review center </h6>
        </header>

        <div class="accordion mb-3">

            <!-- Module 1 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#module-1">
                        MODULE 1
                    </button>
                </h2>

                <div id="module-1" class="accordion-collapse collapse">
                    <div class="accordion-body">

                        <div v-for="(item, index) in module1Items" :key="index" class="d-flex m-2 rounded module-item">
                            <div class="d-flex justify-content-center align-items-center p-2 item-number">
                                {{ index + 1 }}
                            </div>

                            <div id="question-and-answer" class="text-start">
                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center q"> Q </strong>
                                        <p class="m-2" v-html="item['question']"></p>
                                    </div>
                                    
                                </div>

                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center a"> A </strong>
                                        <p class="m-2" v-html="item['correct_answer']"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Module 2 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#module-2">
                        MODULE 2
                    </button>
                </h2>

                <div id="module-2" class="accordion-collapse collapse">
                    <div class="accordion-body">

                        <div v-for="(item, index) in module2Items" :key="index" class="d-flex m-2 rounded module-item">
                            <div class="d-flex justify-content-center align-items-center p-2 item-number">
                                {{ index + 1 }}
                            </div>

                            <div id="question-and-answer" class="text-start">
                                <div id="question-and-answer" class="text-start">
                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center q"> Q </strong>
                                        <p class="m-2" v-html="item['question']"></p>
                                    </div>
                                    
                                </div>

                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center a"> A </strong>
                                        <p class="m-2" v-html="item['correct_answer']"></p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Module 3 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#module-3">
                        MODULE 3
                    </button>
                </h2>

                <div id="module-3" class="accordion-collapse collapse">
                    <div class="accordion-body">

                        <div v-for="(item, index) in module3Items" :key="index" class="d-flex m-2 rounded module-item">
                            <div class="d-flex justify-content-center align-items-center p-2 item-number">
                                {{ index + 1 }}
                            </div>

                            <div id="question-and-answer" class="text-start">
                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center q"> Q </strong>
                                        <p class="m-2" v-html="item['question']"></p>
                                    </div>
                                    
                                </div>

                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center a"> A </strong>
                                        <p class="m-2" v-html="item['correct_answer']"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Module 4 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#module-4">
                        MODULE 4
                    </button>
                </h2>

                <div id="module-4" class="accordion-collapse collapse">
                    <div class="accordion-body">

                        <div v-for="(item, index) in module4Items" :key="index" class="d-flex m-2 rounded module-item">
                            <div class="d-flex justify-content-center align-items-center p-2 item-number">
                                {{ index + 1 }}
                            </div>

                            <div id="question-and-answer" class="text-start">
                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center q"> Q </strong>
                                        <p class="m-2" v-html="item['question']"></p>
                                    </div>
                                    
                                </div>

                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center a"> A </strong>
                                        <p class="m-2" v-html="item['correct_answer']"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Module 5 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#module-5">
                        MODULE 5
                    </button>
                </h2>

                <div id="module-5" class="accordion-collapse collapse">
                    <div class="accordion-body">

                        <div v-for="(item, index) in module5Items" :key="index" class="d-flex m-2 rounded module-item">
                            <div class="d-flex justify-content-center align-items-center p-2 item-number">
                                {{ index + 1 }}
                            </div>

                            <div id="question-and-answer" class="text-start">
                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center q"> Q </strong>
                                        <p class="m-2" v-html="item['question']"></p>
                                    </div>
                                    
                                </div>

                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center a"> A </strong>
                                        <p class="m-2" v-html="item['correct_answer']"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Module 6 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#module-6">
                        MODULE 6
                    </button>
                </h2>

                <div id="module-6" class="accordion-collapse collapse">
                    <div class="accordion-body">

                        <div v-for="(item, index) in module6Items" :key="index" class="d-flex m-2 rounded module-item">
                            <div class="d-flex justify-content-center align-items-center p-2 item-number">
                                {{ index + 1 }}
                            </div>

                            <div id="question-and-answer" class="text-start">
                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center q"> Q </strong>
                                        <p class="m-2" v-html="item['question']"></p>
                                    </div>
                                    
                                </div>

                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center a"> A </strong>
                                        <p class="m-2" v-html="item['correct_answer']"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Module 7 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#module-7">
                        MODULE 7
                    </button>
                </h2>

                <div id="module-7" class="accordion-collapse collapse">
                    <div class="accordion-body">

                        <div v-for="(item, index) in module7Items" :key="index" class="d-flex m-2 rounded module-item">
                            <div class="d-flex justify-content-center align-items-center p-2 item-number">
                                {{ index + 1 }}
                            </div>

                            <div id="question-and-answer" class="text-start">
                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center q"> Q </strong>
                                        <p class="m-2" v-html="item['question']"></p>
                                    </div>
                                    
                                </div>

                                <div class="row">
                                    <div class="col d-flex text-start">
                                        <strong class="d-flex justify-content-center align-items-center a"> A </strong>
                                        <p class="m-2" v-html="item['correct_answer']"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <button type="button" role="button" id="back-to-top" class="px-3 py-1 fs-3 rounded-circle" @click="scrollToTop()">
            <font-awesome-icon icon="fa-solid fa-angles-up" />
        </button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                module1: require('../assets/json/elements-module-1.json'),
                module1Items: [],

                module2: require('../assets/json/elements-module-2.json'),
                module2Items: [],

                module3: require('../assets/json/elements-module-3.json'),
                module3Items: [],

                module4: require('../assets/json/elements-module-4.json'),
                module4Items: [],
                
                module5: require('../assets/json/elements-module-5.json'),
                module5Items: [],

                module6: require('../assets/json/elements-module-6.json'),
                module6Items: [],

                module7: require('../assets/json/elements-module-7.json'),
                module7Items: [],
            }
        },

        methods:{
            scrollToTop(){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        },

        mounted(){
            // Add module items/questions on their respective array
            for (let i=1; i<=this.module1['total_items']; i++){
                this.module1Items.push(this.module1[i]);
            }

            for (let i=1; i<=this.module2['total_items']; i++){
                this.module2Items.push(this.module2[i]);
            }

            for (let i=1; i<=this.module3['total_items']; i++){
                this.module3Items.push(this.module3[i]);
            }

            for (let i=1; i<=this.module4['total_items']; i++){
                this.module4Items.push(this.module4[i]);
            }

            for (let i=1; i<=this.module5['total_items']; i++){
                this.module5Items.push(this.module5[i]);
            }

            for (let i=1; i<=this.module6['total_items']; i++){
                this.module6Items.push(this.module6[i]);
            }

            for (let i=1; i<=this.module7['total_items']; i++){
                this.module7Items.push(this.module7[i]);
            }

            window.addEventListener('scroll', ()=>{
                const backToTopButton = document.getElementById('back-to-top');
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
                    backToTopButton.style.display = 'block';
                }
                else{
                    backToTopButton.style.display = 'none';
                }
            });

            this.scrollToTop();
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

    h1{
        font-family: 'Dancing Script', cursive;
        font-size: 4.5rem;
    }

    #wrapper{
        color: #865439;
    }

    #home-link{
        text-decoration: none;
        color: #865439;
    }

    #home-link:hover{
        text-decoration: underline
    }

    .accordion-button{
        background-color: #865439;
        color: #FDF6EC
    }

    .accordion-body{
        background-color: #FDF6EC
    }

    .module-item{
        border: 1px solid #865439;
    }

    .item-number{
        width: 4%;
        min-width: 4%;
        background-color: #865439;
        color: #FDF6EC;
    }

    #question-and-answer{
        flex: 1;
        color: #865439;      
    }

    #back-to-top{
        display: none;
        bottom: 50px;
        right: 45px;
        z-index: 99;
        position: fixed;
        border: 1px solid #C68B59;
        background-image: linear-gradient(#865439, #C68B59);
        color: #FDF6EC;
        cursor: pointer;
    }

    #back-to-top:hover{
        background-image: linear-gradient(#8FC1D4, #FDF6EC);
        color: #865439;
    }

    .accordion-body{
        border: 1px solid #865439;
    }

    .q, .a{
        min-width: 3%;
        background-color: #C68B59;
        font-family: 'Dancing Script', cursive;
        color: #FDF6EC;
    }
    
    @media only screen and (max-width: 600px){
        h1{
            font-size: 2.5rem;
        }

        #back-to-top{
            right: 20px;
            bottom: 20px;
        }

        .item-number, .q, .a{
            min-width: 10%;
        }

        .accordion-body{
            padding: 0;
        }
    }
</style>