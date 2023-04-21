<template>
    <div id="wrapper">

    <div id="banner" class="vh-100 py-4">
        <h1 id="greeting" class="text-center banner-text">{{ greeting }} Ms. Julio </h1>
        <h5 class="banner-text pt-1 text-center mb-5"> Meet <strong> RHEA </strong> - your Review Helper for Examination App </h5>

        <div class="d-flex justify-content-center pt-5">
            <a href="#get-started" id="home-cta" class="px-5 py-2 border"> GET STARTED </a>
        </div>
    </div>

    <div id="get-started" class="container-fluid my-5">
        <h2 class="text-center mb-5"> What do you need? </h2>

        <div class="row">
            
            <!-- Pomodoro Timer -->
            <div class="col-sm-4 col-md-4">
                <div class="card mx-2 my-2" @click="this.$router.push('/pomodoro-timer')">
                    <div class="card-img-top feature-img">
                        <img src="../assets/timer.jpg" class="w-100" />

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
            </div>
            
            <!-- Periodic Table of Elements -->
            <div class="col-sm-4 col-md-4">
                <div class="card mx-2 my-2" @click="this.$router.push('periodic-table')">
                    <div class="card-img-top feature-img">
                        <img src="../assets/periodic-table.jpg" class="w-100" />

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
            </div>

            <!-- Concepts and Formulas -->
            <div class="col-sm-4 col-md-4">
                <div class="card mx-2 my-2" @click="this.$router.push('/concepts-and-formulas')">
                    <div class="card-img-top feature-img">
                        <img src="../assets/formula.jpg" class="w-100"/>

                        <div class="card-img-overlay">
                            <p class="card-text feature-desc"> See a list of learning references related with Engineering and Mathematics. </p>
                        </div>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title"> Learning Engineering References </h4>
                    </div>
                </div>
            </div>

        </div>

        <div class="row">
            <!-- Units of Measurements -->
            <div class="col-sm-4 col-md-4" @click="this.$router.push('/units-of-measurements')">
                <div class="card mx-2 my-2">
                    <div class="card-img-top feature-img">
                        <img src="../assets/measurements.jpg" class="w-100"/>

                        <div class="card-img-overlay">
                            <p class="card-text feature-desc"> Review units of measurements. </p>
                        </div>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title"> Units of Measurements </h4>
                    </div>
                </div>
            </div>

            <!-- Focus games -->
            <div class="col-sm-4 col-md-4">
                <div class="card mx-2 my-2" @click="this.$router.push('/word-sequence')">
                    <div class="card-img-top feature-img">
                        <img src="../assets/games.jpg" class="w-100"/>

                        <div class="card-img-overlay">
                            <p class="card-text feature-desc"> Play a small game to prepare your mind before reviewing. </p>
                        </div>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title"> Focus Game - Word Sequence </h4>
                    </div>
                </div>
            </div>

            <!-- Conversation -->
            <div class="col-sm-4 col-md-4">
                <div class="card mx-2 my-2" @click="redirectToMessenger()">
                    <div class="card-img-top feature-img">
                        <img src="../assets/talk.jpg" class="w-100"/>

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
    </div>

    </div>
</template>

<script>
    export default{
        data(){
			return{
				greeting: ''
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
                this.$router.push('/identity-checker')
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
		}
    }
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
	

	h2{
		display: block;
		font-family: 'Dancing Script', cursive;
		font-size: 3rem;
		color: #865439;
	}

	#banner{
		background: url('../assets/coffee-bg.jpg');
		background-size: cover;
		background-repeat: no-repeat;
	}

	#greeting{
		font-family: 'Dancing Script', cursive;
		font-size: 4rem;
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

	.banner-text{
		color: #FDF6EC
	}

	.card:hover{
		border: 1px solid #865439;
		cursor: pointer;
	}
	
	.feature-desc{
		font-size: 1.5rem;
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

	@media only screen and (max-width: 600px){
		#banner{
			background-position: bottom;
		}

		#home-cta{
			font-size: 1.5rem;
		}

		.feature-desc{
			font-size: 1rem;
		}
	}
</style>
