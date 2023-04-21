<template>
    <div id="wrapper" class="container">
        <header class="mt-2 text-center">
            <router-link to="/" id="home-link">
                <font-awesome-icon icon="fa-solid fa-home" /> Back to Home
            </router-link>

            <h1 class="mt-1"> Learning Engineering References </h1>
        </header>
        
        <!-- Online links -->
        <div class="mt-5">
            <p><strong> Online links: </strong></p>
            <ul class="ps-5">
                <li> 
                    <a href="https://www.indeed.com/career-advice/career-development/engineering-formulas" class="reference-item" target="_blank"> 
                        <font-awesome-icon icon="fa-solid fa-blog" /> 11 Types of Engineering Formulas to Master for Your Career 
                    </a> 
                </li>

                <li> 
                    <a href="https://www.aboutmech.com/p/mechanical-engineering-formulas.html" class="reference-item" target="_blank"> 
                        <font-awesome-icon icon="fa-solid fa-blog" /> List of Common Mechanical Engineering Formulas and Equations 
                    </a> 
                </li>

                <li> 
                    <a href="https://www.aboutmech.com/p/basics-of-mechanical-engineering.html" class="reference-item" target="_blank"> 
                        <font-awesome-icon icon="fa-solid fa-blog" /> (Another) List of Mechanical Engineering Basics References 
                    </a> 
                </li>
                
                <li> 
                    <a href="https://www.youtube.com/playlist?list=PLH2l6uzC4UEVUmJdTMStYXad_sI73_T0x" class="reference-item" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-youtube" /> Crash Course: Engineering
                    </a> 
                </li>

                <li> 
                    <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV" class="reference-item" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-youtube" /> Crash Course: Physics
                    </a> 
                </li>

                <li> 
                    <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" class="reference-item" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-youtube" /> Crash Course: Statistics
                    </a> 
                </li>

                <li> 
                    <a href="https://www.youtube.com/playlist?list=PLqxP5EuGxPncOPqsWj1t7l7BDTLOXNsG8" class="reference-item" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-youtube" /> The GSCE Maths Tutor: Geometry
                    </a> 
                </li>
            </ul>
        </div>

        <!-- YouTube videos -->
        <div class="mt-5">
            <p><strong> Some of notable YouTube videos from the playlists above: </strong></p>

            <div class="clearfix mb-3 yt-video">
                <div class="col-md-6 float-md-start">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/A1V-QQ5wFU4" class="pe-md-3"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                
                <h4> Mechanical Engineering: Crash Course Engineering #3 </h4>
                <small> CrashCourse </small>
            </div>

            <div class="clearfix mb-3 yt-video">
                <div class="col-md-6 float-md-start">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/VxCORJ8dN3Y" class="pe-md-3"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                
                <h4> The Law of Conservation: Crash Course Engineering #7 </h4>
                <small> CrashCourse </small>
            </div>

            <div class="clearfix mb-3 yt-video">
                <div class="col-md-6 float-md-start">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/fSEFfWf2au0" class="pe-md-3"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                
                <h4> The First & Zeroth Laws of Thermodynamics #9 </h4>
                <small> CrashCourse </small>
            </div>

            <div class="clearfix mb-3 yt-video">
                <div class="col-md-6 float-md-start">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ouTJkNLepF0" class="pe-md-3"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                
                <h4> Stress, Strain & Quicksand: Crash Course Engineering #12 </h4>
                <small> CrashCourse </small>
            </div>

            <div class="clearfix mb-3 yt-video">
                <div class="col-md-6 float-md-start">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/YK7G6l_K6sA" class="pe-md-3"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                
                <h4> Heat Transfer: Crash Course Engineering #14 </h4>
                <small> CrashCourse </small>
            </div>

            <div class="clearfix mb-3 yt-video">
                <div class="col-md-6 float-md-start">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/-YTC3A6dEGM" class="pe-md-3"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                
                <h4> Drugs, Dyes, & Mass Transfer: Crash Course Engineering #16 </h4>
                <small> CrashCourse </small>
            </div>

            <div class="clearfix mb-3 yt-video">
                <div class="col-md-6 float-md-start">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NOK1nMiiTWU" class="pe-md-3"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                
                <h4> Metals & Ceramics: Crash Course Engineering #19 </h4>
                <small> CrashCourse </small>
            </div>

            <div class="clearfix mb-3 yt-video">
                <div class="col-md-6 float-md-start">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/BT_JUbpZ1lQ" class="pe-md-3"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                
                <h4> Cheese, Catastrophes, & Process Control: Crash Course Engineering #25 </h4>
                <small> CrashCourse </small>
            </div>

            <div class="clearfix mb-3 yt-video">
                <div class="col-md-6 float-md-start">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/5KZx81crb48" class="pe-md-3"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                
                <h4> Engineering Ethics: Crash Course Engineering #27 </h4>
                <small> CrashCourse </small>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default{
        methods:{
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
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

    h1{
        font-family: 'Dancing Script', cursive;
        font-size: 4.5rem;
    }

    ul{
        list-style-type: square;
        padding: 0;
    }


    #wrapper{
        color: #865439;
    }

    #home-link{
        text-decoration: none;
        color: #865439;
    }


    .reference-item{
        text-decoration: none;
        color: #865439;
    }

    .reference-item:hover{
        text-decoration: underline;
    }

    .yt-video:hover {
        border-bottom: 2px solid #865439;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px){
        h1{
            font-size: 2.5rem;
        }

        iframe{
            height: 215px;
        }
    }

</style>