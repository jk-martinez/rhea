<template>
    <div>
        <!-- Media sources -->
        <video autoplay muted loop>
            <source src="../assets/videos/rain.mp4" type="video/mp4" />
        </video>

        <audio loop id="ambient-audio">
            <source src="../assets/audio/light-rain-ambient.mp3" type="audio/mpeg" />
        </audio>

        <audio id="ping-sound-effect">
            <source src="../assets/audio/ping-sound-effect.mp3" type="audio/mpeg" />
        </audio>

        <!-- Timer -->
        <div id="timer-container">
            <div>
                <h3 class="text-uppercase"> {{ mode }} timer </h3>
                <div id="timer">
                    <p>{{ fullRemainingMinutes }}:{{ fullRemainingSeconds }} </p>
                </div>

                <div class="w-100 d-flex align-content-center justify-content-around">
                    <font-awesome-icon icon="fa-solid fa-home" size="2x" class="m-1 p-3 timer-btn flex-even" @click="this.$router.push('/rhea/home')" />
                    <font-awesome-icon :icon="startPauseIcon" size="2x" class="m-1 p-3 timer-btn flex-even" @click="startPauseTimer" />
                    <font-awesome-icon icon="fa-solid fa-stop" size="2x" class="m-1 p-3 timer-btn flex-even" @click="stopTimer" />
                    <font-awesome-icon :icon="musicIcon" size="2x" class="m-1 p-3 timer-btn flex-even" @click="playUnplayAmbient"/>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                startPauseIcon: 'fa-solid fa-play',
                musicIcon: 'fa-solid fa-music',
                mode: 'Focus',
                completedPomodoro: 0,
                ticking: false,
                paused: true,
                timer: null,
                timeToReach: null,
                remainingMinutes: 25,
                remainingSeconds: 0,
                ambientMuted: true,
            }
        },

        computed:{
            fullRemainingMinutes(){
                return this.remainingMinutes.toLocaleString('en-US',{
                    minimumIntegerDigits: 2,
                });
            },

            fullRemainingSeconds(){
                return this.remainingSeconds.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                });
            }
        },

        methods:{
            startPauseTimer(){
                // Start timer
                if (!this.ticking){
                    this.startPauseIcon = 'fa-solid fa-pause'
                    this.ticking = true;
                    this.timeToReach = new Date();
                    this.timeToReach.setMinutes(this.timeToReach.getMinutes() + this.remainingMinutes);
                    this.timeToReach.setSeconds(this.timeToReach.getSeconds() + this.remainingSeconds);
                    this.timer = setInterval(this.tickTimer, 1000);
                }

                // Pause timer
                else{
                    this.startPauseIcon = 'fa-solid fa-play';
                    this.ticking = false;
                    clearInterval(this.timer);
                    this.timeToReach = null;
                    this.timer = null;
                }
            },

            tickTimer(){
                let now = new Date().getTime();
                let distance = this.timeToReach - now;
                this.remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.remainingSeconds = Math.floor(((distance % (1000 * 60)) / 1000));

                if (distance < 0){
                    document.getElementById('ping-sound-effect').play();
                    clearInterval(this.timer);
                    
                    if (this.mode == "Focus"){
                        this.completedPomodoro++;
                    }

                    if (this.mode == "Focus" && this.completedPomodoro % 4 == 0){
                        this.remainingMinutes = 15;
                        this.mode = "Longer break"
                    }
                    else if (this.mode == "Focus"){
                        this.remainingMinutes = 5;
                        this.mode = "Break"
                    }
                    else{
                        this.remainingMinutes = 25;
                        this.mode = "Focus";
                    }

                    this.remainingSeconds = 0;
                    this.startPauseIcon = 'fa-solid fa-play';
                }
            },

            stopTimer(){
                this.ticking = false;
                this.startPauseIcon = 'fa-solid fa-play';
                clearInterval(this.timer);
                this.remainingMinutes = 25;
                this.remainingSeconds = 0;
                this.timeToReach = null;
                this.timer = null;
            },

            playUnplayAmbient(){
                if (this.ambientMuted){
                    this.ambientMuted = false;
                    document.getElementById('ambient-audio').play();
                    this.musicIcon = 'fa-solid fa-volume-xmark';
                }
                else{
                    this.ambientMuted = true;
                    document.getElementById('ambient-audio').pause();
                    this.musicIcon = 'fa-solid fa-music';
                }
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
            },
        },

        beforeMount(){
            if (this.getCookie('rhea-user') ==  ""){
                this.$router.push('/rhea/identity-checker')
            }
        },
        
        beforeUnmount(){
            this.stopTimer();
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Chivo+Mono&display=swap');

    video{
        position: fixed;
        right: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
    }

    #timer-container{
        position: absolute;
        margin-left: 5%;
        bottom: 10%;
        color: #FDF6EC;
    }

    #timer{
        font-family: 'Chivo Mono', monospace;
        font-size: 12rem;
    }

    .timer-btn{
        border: 1px solid #FDF6EC;
        border-radius: 5px;
        flex: 1;
    }

    .timer-btn:hover{
        background-image: linear-gradient(#865439, #C68B59);
        cursor: pointer;
    }

    @media only screen and (max-width: 768px){
        h3{
            text-align: center;
        }

        #timer-container{
            width: 100%;
            margin-left: 0;
            padding: 10px;
        }

        #timer{
            text-align: center;
            font-size: 5rem;
        }
    }
</style>