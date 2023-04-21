<template>
    <div class="card" :id="name">
        <small> {{ atomicNumber }} </small>

        <div class="card-body text-center">
            <h3><strong>{{ symbol }}</strong></h3>
            <p class="card-title">{{ name }}</p>
        </div>
    </div>

    

</template>

<script>
    export default{
        props:[
            'atomicNumber',
            'symbol',
            'name',
            'chemicalGroup',
        ],

        mounted(){
            let elementContainer = document.getElementById(this.name);

            switch (this.chemicalGroup){
                case "Nonmetal": elementContainer.classList.add('nonmetal'); 
                    break;
                case "Alkali Metals": elementContainer.classList.add('alkali-metal');
                    break;
                case "Alkaline Earth Metals": elementContainer.classList.add('alkaline-earth-metal');
                    break;
                case "Transition Metals": elementContainer.classList.add('transition-metal');
                    break;
                case "Metalloids":  elementContainer.classList.add('metalloid');
                    break;
                case "Post-Transition Metals": elementContainer.classList.add('post-trnstion-metal');
                    break;
                case "Halogen": elementContainer.classList.add('halogen');
                    break;
                case "Noble Gas": elementContainer.classList.add('noble-gas');
                    break;
                case "Lanthanides": elementContainer.classList.add('lanthanide');
                    break;
                case "Actinides": elementContainer.classList.add('actinide')
                    break;
                default: elementContainer.classList.add('default-bg');
                    break;
            }
        }
    }
</script>

<style scoped>
    small{
        padding: 5px 0 0 5px;
        font-size: 0.6rem;
    }

    .card{
        margin: 2px;
        padding: 0;
        color: #FDF6EC;
    }


    .card-body{
        padding: 5px 0 0 0;
    }

    .card-title{
        font-size: 0.7rem;
    }

    .nonmetal{
        background-image: linear-gradient(to bottom right, #323200,#3E3E00, #4a4a00);
    }

    .alkali-metal{
        background-image: linear-gradient(to bottom right, #310000, #390000, #3F0000);
    }

    .alkaline-earth-metal{
        background-image: linear-gradient(to bottom right, #0D0D32, #0F0F39, #10103F);
    }

    .transition-metal{
        background-image: linear-gradient(to bottom right, #001A34, #002141, #00264C);
    }

    .metalloid{
        background-image: linear-gradient(to bottom right, #444E2C, #222E00, #293800);
    }

    .post-trnstion-metal{
        background-image: linear-gradient(to bottom right, #003200, #003D00, #2A592C);
    }

    .halogen{
        background-image: linear-gradient(to bottom right, #323200, #3C3C00, #4B4B00);
    }

    .noble-gas{
        background-image: linear-gradient(to bottom right, #614C2C, #3C2400, #4B2D00);
    }

    .lanthanide{
        background-image: linear-gradient(to bottom right,#003F3F, #004B4B, #2A6465);
    }

    .actinide{
        background-image: linear-gradient(to bottom right, #3B6D5E, #134B39, #165742);
    }

    .default-bg{
        background-color: #FDF6EC;
        color: #865439;
    }
</style>