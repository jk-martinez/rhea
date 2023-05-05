<template>
    <div id="wrapper">
        <div id="banner" class="vh-100">

            <div id="app-name">
                <h1> Meet </h1>
                <p><span class="title-first-letter">R</span><span class="full-word">eview</span></p>
                <p><span class="title-first-letter">H</span><span class="full-word">elper&nbsp;for</span></p>
                <p><span class="title-first-letter">E</span><span class="full-word">xamination</span></p>
                <p><span class="title-first-letter">A</span><span class="full-word">pp</span></p>
            </div>

            <div id="greeting-cta" class="text-center">
                <h1 id="greeting" class="mb-3"> {{ greeting }} Ms. Julio! </h1>

                <a href="#get-started" id="home-cta" class="p-1 px-4 fw-bold"> Get Started </a>

                <div class="mt-5">
                    <h5> 
                        This app is actively maintained. <br/>
                        <span class="fw-bold"><a href="#bug-fixes"> See critical bug fixes. </a></span>
                    </h5>
                </div>
            </div>

        </div>
        
        <div id="get-started" class="my-5">
            <h1 class="text-center mb-5"> What do you need? </h1>

            <div class="d-flex flex-wrap justify-content-center align-items-stretch">
                
                <!-- Pomodoro Timer -->
                <div class="card m-2" @click="this.$router.push('/rhea/pomodoro-timer')">
                    <div class="card-img-top feature-img">
                        <img src="../assets/images/timer.jpg" class="w-100" />

                        <div class="card-img-overlay">
                            <p class="card-text feature-desc"> Pomodoro Technique is a time management method based on 25-minute stretches of
                                focused work broken by 5-minute breaks. Longer breaks are taken after 4 consecutive work intervals.
                            </p>

                            <p class="card-text feature-desc">
                                Use this timer while reviewing.
                            </p>
                        </div>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title"> Pomodoro Timer </h4>
                    </div>
                </div>

                <!-- Elements Reviewer -->
                <div class="card m-2" @click="this.$router.push('/rhea/elements-reviewer')">
                    <div class="card-img-top feature-img">
                        <img src="../assets/images/review.jpg" class="w-100"/>

                        <div class="card-img-overlay">
                            <p class="card-text feature-desc"> Review the modules given by your review center. </p>
                        </div>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title"> Elements Reviewer </h4>
                    </div>
                </div>

                <!-- Elements Quiz -->
                <div class="card m-2" @click="this.$router.push('/rhea/elements-quiz')">
                    <div class="card-img-top feature-img">
                        <img src="../assets/images/quiz.jpg" class="w-100"/>

                        <div class="card-img-overlay">
                            <p class="card-text feature-desc"> Take a quiz from your review center's reviewer. </p>
                        </div>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title"> Elements Quiz </h4>
                    </div>
                </div>

                <!-- Periodic Table of Elements -->
                <div class="card m-2" @click="this.$router.push('/rhea/periodic-table')">
                    <div class="card-img-top feature-img">
                        <img src="../assets/images/periodic-table.jpg" class="w-100" />

                        <div class="card-img-overlay">
                            <p class="card-text feature-desc">
                                Familiarize yourself with the Periodic Table of Elements.
                            </p>
                        </div>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title"> Periodic Table of Elements </h4>
                    </div>
                </div>

                <!-- Units of Measurements -->
                <div class="card m-2" @click="this.$router.push('/rhea/units-of-measurements')">
                    <div class="card-img-top feature-img">
                        <img src="../assets/images/measurements.jpg" class="w-100"/>

                        <div class="card-img-overlay">
                            <p class="card-text feature-desc"> Review units of measurements. </p>
                        </div>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title"> Units of Measurements </h4>
                    </div>
                </div>

                <!-- Learning Engineering References -->
                <div class="card m-2" @click="this.$router.push('/rhea/learning-references')">
                    <div class="card-img-top feature-img">
                        <img src="../assets/images/formula.jpg" class="w-100"/>

                        <div class="card-img-overlay">
                            <p class="card-text feature-desc"> See a list of learning references related with Engineering and Mathematics. </p>
                        </div>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title"> Learning Engineering References </h4>
                    </div>
                </div>

                <!-- Focus game -->
                <div class="card m-2" @click="this.$router.push('/rhea/word-sequence')">
                    <div class="card-img-top feature-img">
                        <img src="../assets/images/games.jpg" class="w-100"/>

                        <div class="card-img-overlay">
                            <p class="card-text feature-desc"> Play a small game to prepare your mind before reviewing. </p>
                        </div>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title"> Focus Game - Word Sequence </h4>
                    </div>
                </div>
    
                <!-- Conversation w/ Martin (Link to Messenger)-->
                <div class="card m-2" @click="redirectToMessenger()">
                    <div class="card-img-top feature-img">
                        <img src="../assets/images/talk.jpg" class="w-100"/>

                        <div class="card-img-overlay">
                            <p class="card-text feature-desc"> Have a conversation with Martin. You may report a bug, request a feature, or talk about something else. </p>
                            <p class="card-text feature-desc"> More content might come soon :) </p>
                        </div>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title"> Talk with Martin </h4>
                    </div>
                </div>

            </div>
        </div>

        <div id="bug-fixes" class="container mb-5">
            <h1 class="text-center"> Bug Fixes </h1>
            
            <ul class="mt-3">
                <!-- Module 1 -->
                <li v-for="(bugFix, index) in module1BugFixes" :key="index">
                    <span class="fw-bold">[Module 1]</span> {{ bugFix }}
                </li>

                <!-- Module 2 -->
                <li v-for="(bugFix, index) in module2BugFixes" :key="index">
                    <span class="fw-bold">[Module 2]</span> {{ bugFix }}
                </li>

                <!-- Module 3 -->
                <li v-for="(bugFix, index) in module3BugFixes" :key="index">
                    <span class="fw-bold">[Module 2]</span> {{ bugFix }}
                </li>

                <!-- Module 4 -->
                <li v-for="(bugFix, index) in module4BugFixes" :key="index">
                    <span class="fw-bold">[Module 2]</span> {{ bugFix }}
                </li>

                <!-- Module 5 -->
                <li v-for="(bugFix, index) in module5BugFixes" :key="index">
                    <span class="fw-bold">[Module 2]</span> {{ bugFix }}
                </li>

                <!-- Module 6 -->
                <li v-for="(bugFix, index) in module6BugFixes" :key="index">
                    <span class="fw-bold">[Module 2]</span> {{ bugFix }}
                </li>

                <!-- Module 7 -->
                <li v-for="(bugFix, index) in module7BugFixes" :key="index">
                    <span class="fw-bold">[Module 2]</span> {{ bugFix }}
                </li>
            </ul>
        </div>

        <div id="back-to-top" class="px-3 py-1 fs-3 d-none rounded-circle">
            <font-awesome-icon icon="fa-solid fa-angles-up" />
        </div>

    </div>
</template>

<script>
    const bugFixesData = require('../assets/json/bug-fixes.json');

    export default{
        data(){
			return{
				greeting: '',
                module1BugFixes: [],
                module2BugFixes: [],
                module3BugFixes: [],
                module4BugFixes: [],
                module5BugFixes: [],
                module6BugFixes: [],
                module7BugFixes: [],
			}
		},

        methods:{
            redirectToMessenger(){
                window.location.href = "https://m.me/johnkmartinz";
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

		mounted(){
			// Determine greeting based on time
			let today = new Date();

			if (today.getHours() >=0 && today.getHours() <= 12){
				this.greeting = "Good morning";
			}
			else if (today.getHours() >=13 && today.getHours() <= 17){
				this.greeting = "Good afternoon";
			}
			else{
				this.greeting = "Good evening"
			}

            this.module1BugFixes = bugFixesData["module1"];
            this.module2BugFixes = bugFixesData["module2"];
            this.module3BugFixes = bugFixesData["module3"];
            this.module4BugFixes = bugFixesData["module4"];
            this.module5BugFixes = bugFixesData["module5"];
            this.module6BugFixes = bugFixesData["module6"];
            this.module7BugFixes = bugFixesData["module7"];
		},
    }
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
	
	h1{
		font-family: 'Dancing Script', cursive;
		font-size: 3rem;
    }

    #wrapper{
        color: #865439;
    }

	#banner{
        position: relative;
        display: flex;
        flex-direction: row;
		background: url('../assets/images/coffee-bg.jpg');
		background-size: cover;
		background-repeat: no-repeat;
	}

    #greeting-cta{
        width: 50%;
        color: #FDF6EC;
        margin-top: 10%;
    }

    #greeting-cta h5, a{
        color: #8FC1D4;
    }

    #app-name{
        width: 50%;
        margin: auto;
        padding-left: 3%;
        color: #FDF6EC;
    }

	#home-cta{
		background-image: linear-gradient(#865439, #C68B59);
		border-radius: 30px;
		font-family: 'Poppins', sans-serif;
		font-size: 2rem;
		color: #FDF6EC;
		text-decoration: none;
	}

	#home-cta:hover{
		background-image: linear-gradient(#C68B59, #DAB88B);
		color: #FDF6EC;
	}

    #bug-fixes ul{
        list-style-type: square;
    }

    .title-first-letter{
        font-size: 6rem;
        font-weight: bolder;
        color: #8FC1D4;

        background-image: linear-gradient(360deg,#EEE3CB,#B7C4CF, #8FC1D4, #8FC1D4);
        background-size: 100%;
        background-repeat: repeat;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .full-word{
        display: inline-block;
        max-width: 0;
        opacity: 0;
        font-size: 6rem;

        background-image: linear-gradient(360deg,#EEE3CB,#B7C4CF, #8FC1D4, #8FC1D4);
        background-size: 100%;
        background-repeat: repeat;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation-name: spreader;
        animation-direction: both;
        animation-duration: 6s;
        animation-delay: 1s;
        animation-iteration-count: infinite;
    }

    .card{
        width: 20%;
    }

	.card:hover{
		border: 1px solid #865439;
		cursor: pointer;
	}
	
	.feature-desc{
		font-size: 1.1rem;
		color: #000;
		visibility: hidden;
		opacity: 0;
		transition: opacity 0.2s, visibility 0.2s;
	}

	.feature-img:hover .feature-desc{
		visibility: visible;
		opacity: 1;
	}

	.feature-img:hover img{
		opacity: 0.3
	}

    @keyframes spreader{
        0%{
            max-width: 0;
            opacity: 0
        }

        10%{
            max-width: 0;
            opacity: 0;
        }

        50%{
            max-width: 100%;
            opacity: 1;
        }

        100%{
            max-width: 0%;
            opacity: 0.5;
        }
    }

	@media only screen and (max-width: 600px){
        h1{
            font-size: 2.5rem;
        }

		#banner{
			background-position: bottom;
            flex-direction: column-reverse;
		}

        #greeting-cta{
            width: 100%;
            padding-top: 5%;
        }

        #app-name{
            width: 100%;
            padding-left: 10%;
        }

        .full-word, .title-first-letter{
            font-size: 3rem;
        }

		#home-cta{
			font-size: 1.5rem;
		}

        .card{
            width: 100%;
        }

		.feature-desc{
			font-size: 1rem;
		}
	}

    @media only screen and (min-width: 600px) and (max-width: 992px){
        #banner{
			background-position: bottom;
            flex-direction: column-reverse;
		}

        #greeting-cta{
            width: 100%;
            padding-top: 1.5%;
        }

        #app-name{
            width: 100%;
            padding-left: 15%;
        }

        .full-word, .title-first-letter{
            font-size: 4rem;
        }
    }
</style>
