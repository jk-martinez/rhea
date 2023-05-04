<template>
    <div id="wrapper">
        <header class="mt-2 text-center">
            <router-link to="/rhea/home" id="home-link">
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
        <div class="mt-5 mb-5">
            <p><strong> Some of notable YouTube videos from the playlists above: </strong></p>

            <div class="mt-2 d-flex flex-wrap justify-content-evenly align-items-stretch">
                <div class="card">
                    <div class="card-img-top">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/A1V-QQ5wFU4"
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div class="card-body">
                        <h5 class="cad-title"> Mechanical Engineering: Crash Course Engineering #3 </h5>
                        <small class="card-subtitle text-muted"> CrashCourse </small>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-top">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/VxCORJ8dN3Y"
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div class="card-body">
                        <h5 class="cad-title"> The Law of Conservation: Crash Course Engineering #7 </h5>
                        <small class="card-subtitle text-muted"> CrashCourse </small>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-top">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/fSEFfWf2au0"
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div class="card-body">
                        <h5 class="cad-title"> The First & Zeroth Laws of Thermodynamics #9 </h5>
                        <small class="card-subtitle text-muted"> CrashCourse</small>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-top">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/ouTJkNLepF0"
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div class="card-body">
                        <h5 class="cad-title"> Stress, Strain & Quicksand: Crash Course Engineering #12 </h5>
                        <small class="card-subtitle text-muted"> CrashCourse </small>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-top">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/YK7G6l_K6sA"
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div class="card-body">
                        <h5 class="cad-title"> Heat Transfer: Crash Course Engineering #14 </h5>
                        <small class="card-subtitle text-muted"> CrashCourse </small>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-top">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/-YTC3A6dEGM"
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div class="card-body">
                        <h5 class="cad-title"> Drugs, Dyes, & Mass Transfer: Crash Course Engineering #16 </h5>
                        <small class="card-subtitle text-muted"> CrashCourse </small>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-top">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/NOK1nMiiTWU"
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div class="card-body">
                        <h5 class="cad-title"> Metals & Ceramics: Crash Course Engineering #19 </h5>
                        <small class="card-subtitle text-muted"> CrashCourse </small>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-top">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/BT_JUbpZ1lQ"
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div class="card-body">
                        <h5 class="cad-title"> Cheese, Catastrophes, & Process Control: Crash Course Engineering #25 </h5>
                        <small class="card-subtitle text-muted"> CrashCourse </small>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-top">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/5KZx81crb48"
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>  
                    </div>

                    <div class="card-body">
                        <h5 class="cad-title"> Engineering Ethics: Crash Course Engineering #27 </h5>
                        <small class="card-subtitle text-muted"> CrashCourse </small>
                    </div>
                </div>


            </div>
        </div>

        <div id="back-to-top" class="px-3 py-1 fs-3 rounded-circle" @click="scrollToTop()">
            <font-awesome-icon icon="fa-solid fa-angles-up" />
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
            },

            scrollToTop(){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        },

        beforeMount(){
            if (this.getCookie('rhea-user') ==  ""){
                this.$router.push('/rhea/identity-checker')
            }
        },

        mounted(){
            window.addEventListener('scroll', ()=>{
                const backToTopButton = document.getElementById('back-to-top');
                if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
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

    ul{
        list-style-type: square;
        padding: 0;
    }


    #wrapper{
        color: #865439;
        margin: 0 30px 0 30px;
    }

    #home-link{
        text-decoration: none;
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

    .reference-item{
        text-decoration: none;
        color: #865439;
    }

    .reference-item:hover{
        text-decoration: underline;
    }

    .card{
        width: 30%;
        margin-bottom: 10px;
    }

    .card:hover{
        border: 1px solid #865439;
    }

    @media only screen and (max-width: 600px){
        h1{
            font-size: 2.5rem;
        }

        iframe{
            height: 215px;
        }

        #wrapper{
            margin: 10px;
        }

        #back-to-top{
            right: 20px;
            bottom: 20px;
        }

        .card{
            width: 100%
        }
    }

    @media only screen and (min-width: 600px) and (max-width: 768px){
        .card{
            width: 100%;
            margin-bottom: 10px;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 992px){
        .card{
            width: 60%;
            margin: 10px;
        }
    }
</style>