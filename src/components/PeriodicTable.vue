<template>
    <div id="wrapper" class="container-fluid">

        <header class="mt-2 text-center">
            <router-link to="/home" id="home-link">
                <font-awesome-icon icon="fa-solid fa-home" /> Back to Home
            </router-link>
            
            <h1 class="mt-1 text-center"> The Periodic Table of Elements </h1>
        </header>
    
        <!-- 1st row -->
        <div class="row">
            <TableElement symbol="H" name="Hydrogen" atomicNumber="1" chemicalGroup="Nonmetal" class="col" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="#" class="col hidden-container" />
            <TableElement symbol="He" name="Helium" atomicNumber="2" chemicalGroup="Noble Gas" class="col" />

        </div>

        <!-- 2nd row and Legends -->
        <div class="row">
            <TableElement symbol="Li" name="Lithium" atomicNumber="3" chemicalGroup="Alkali Metals" class="col" />
            <TableElement symbol="Be" name="Beryllium" atomicNumber="4" chemicalGroup="Alkaline Earth Metals" class="col" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="###" class="col hidden-container" />
            
            <div class="col-6">
                <small> Legend:</small>
                <div class="d-flex flex-wrap">
                    <div id="nonmetal" class="m-1 px-2 py-1 legend-item" 
                        @click="highlightChemicalGroup('nonmetal', 'Nonmetals')"> Nonmetals
                    </div>

                    <div id="alkali-metal" class="m-1 px-2 py-1 legend-item" 
                        @click="highlightChemicalGroup('alkali-metal', 'Alkali Metals')"> Alkali Metals 
                    </div>

                    <div id="alkaline-earth-metal" class="m-1 px-2 py-1 legend-item" 
                        @click="highlightChemicalGroup('alkaline-earth-metal', 'Alkaline Earth Metals')"> Alkaline Earth Metals 
                    </div>

                    <div id="transition-metal" class="m-1 px-2 py-1 legend-item" 
                        @click="highlightChemicalGroup('transition-metal', 'Transition Metals')"> Transition Metals
                     </div>
                     
                    <div id="post-trnstion-metal" class="m-1 px-2 py-1 legend-item" 
                        @click="highlightChemicalGroup('post-trnstion-metal', 'Post-Transition Metals')"> Transition Metals 
                    </div>

                    <div id="metalloid" class="m-1 px-2 py-1 legend-item" 
                        @click="highlightChemicalGroup('metalloid', 'Metalloids')"> Metalloids 
                    </div>

                    <div id="halogen" class="m-1 px-2 py-1 legend-item" 
                        @click="highlightChemicalGroup('halogen', 'Halogens')"> Halogens
                    </div>
                    
                    <div id="noble-gas" class="m-1 px-2 py-1 legend-item" 
                        @click="highlightChemicalGroup('noble-gas', 'Noble Gases')"> Noble Gases
                    </div>

                    <div id="lanthanide" class="m-1 px-2 py-1 legend-item" 
                        @click="highlightChemicalGroup('lanthanide', 'Lanthanides')"> Lanthanides 
                    </div>

                    <div id="actinide" class="m-1 px-2 py-1 legend-item" 
                        @click="highlightChemicalGroup('actinide', 'Actinides')"> Actinides 
                    </div>

                    <div id="all" class="m-1 px-2 py-1 legend-item" 
                        @click="highlightChemicalGroup('all', 'All Groups')"> All Groups 
                    </div>
                </div>
            </div>

            <TableElement symbol="B" name="Boron" atomicNumber="5" chemicalGroup="Metalloids" class="col"/>
            <TableElement symbol="C" name="Carbon" atomicNumber="6" chemicalGroup="Nonmetal" class="col" />
            <TableElement symbol="N" name="Nitrogen" atomicNumber="7" chemicalGroup="Nonmetal" class="col" />
            <TableElement symbol="O" name="Oxygen" atomicNumber="8" chemicalGroup="Nonmetal" class="col" />
            <TableElement symbol="F" name="Flourine" atomicNumber="9" chemicalGroup="Halogen" class="col" />
            <TableElement symbol="Ne" name="Neon" atomicNumber="10" chemicalGroup="Noble Gas" class="col" />
        </div>

        <!-- 3rd row and Currently Highlighted Group-->
        <div class="row">
            <TableElement symbol="Na" name="Sodium" atomicNumber="11" chemicalGroup="Alkali Metals" class="col" />
            <TableElement symbol="Mg" name="Magnesium" atomicNumber="12" chemicalGroup="Alkaline Earth Metals" class="col" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="###" class="col hidden-container" />

            <div class="col-6 text-center">
                <small> Currently highlighted group:</small>
                <h3 class="text-uppercase"><strong> {{ highlightedChemicalGroup }} </strong></h3>
            </div>

            <TableElement symbol="Al" name="Aluminum" atomicNumber="13" chemicalGroup="Post-Transition Metals" class="col" />
            <TableElement symbol="Si" name="Silicon" atomicNumber="14" chemicalGroup="Metalloids" class="col" />
            <TableElement symbol="P" name="Phosphorus" atomicNumber="15" chemicalGroup="Nonmetal" class="col" />
            <TableElement symbol="Si" name="Sulfur" atomicNumber="16" chemicalGroup="Nonmetal" class="col" />
            <TableElement symbol="Cl" name="Chlorine" atomicNumber="17" chemicalGroup="Halogen" class=col />
            <TableElement symbol="Ar" name="Argon" atomicNumber="18" chemicalGroup="Noble Gas" class="col" />
        </div>

        <!-- 4th row -->
        <div class="row">
            <TableElement symbol="K" name="Potassium" atomicNumber="19" chemicalGroup="Alkali Metals" class="col" />
            <TableElement symbol="Ca" name="Calcium" atomicNumber="20" chemicalGroup="Alkaline Earth Metals" class="col" />
            <TableElement symbol="Sc" name="Scandium" atomicNumber="21" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Ti" name="Titanium" atomicNumber="22" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="V" name="Vanadium" atomicNumber="23" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Cr" name="Chromium" atomicNumber="24" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Mn" name="Manganese" atomicNumber="25" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Fe" name="Iron" atomicNumber="26" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Co" name="Cobalt" atomicNumber="27" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Ni" name="Nickel" atomicNumber="28" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Cu" name="Copper" atomicNumber="29" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Zn" name="Zinc" atomicNumber="30" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Ga" name="Gallium" atomicNumber="31" chemicalGroup="Post-Transition Metals" class="col" />
            <TableElement symbol="Ge" name="Germanium" atomicNumber="32" chemicalGroup="Post-Transition Metals" class="col" />
            <TableElement symbol="As" name="Arsenic" atomicNumber="33" chemicalGroup="Post-Transition Metals" class="col" />
            <TableElement symbol="Se" name="Selenium" atomicNumber="34" chemicalGroup="Nonmetal" class="col" />
            <TableElement symbol="Br" name="Bromine" atomicNumber="35" chemicalGroup="Halogen" class="col" />
            <TableElement symbol="Kr" name="Krypton" atomicNumber="36" chemicalGroup="Noble Gas" class="col" />
        </div>

        <!-- 5th row -->
        <div class="row">
            <TableElement symbol="Rb" name="Rubidium" atomicNumber="37" chemicalGroup="Alkali Metals" class="col" />
            <TableElement symbol="Sr" name="Stronium" atomicNumber="38" chemicalGroup="Alkaline Earth Metals" class="col" />
            <TableElement symbol="Y" name="Yttrium" atomicNumber="39" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Zr" name="Zirconium" atomicNumber="40" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Nb" name="Niobium" atomicNumber="41" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Mo" name="Molybdenum" atomicNumber="42" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Tc" name="Technetium" atomicNumber="43" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Ru" name="Ruthenium" atomicNumber="44" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Rh" name="Rhodium" atomicNumber="45" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Pd" name="Palladium" atomicNumber="46" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Ag" name="Silver" atomicNumber="47" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Cd" name="Cadmium" atomicNumber="48" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="In" name="Indium" atomicNumber="49" chemicalGroup="Post-Transition Metals" class="col" />
            <TableElement symbol="Sn" name="Tin" atomicNumber="50" chemicalGroup="Post-Transition Metals" class="col" />
            <TableElement symbol="Sb" name="Antimony" atomicNumber="51" chemicalGroup="Metalloids" class="col" />
            <TableElement symbol="Te" name="Tellerium" atomicNumber="52" chemicalGroup="Metalloids" class="col" />
            <TableElement symbol="I" name="Iodine" atomicNumber="53" chemicalGroup="Halogen" class="col" />
            <TableElement symbol="Xe" name="Xenon" atomicNumber="54" chemicalGroup="Noble Gas" class="col" />
        </div>

        <!-- 6th row -->
        <div class="row">
            <TableElement symbol="Cs" name="Cesium" atomicNumber="55" chemicalGroup="Alkali Metals" class="col" />
            <TableElement symbol="Ba" name="Barium" atomicNumber="56" chemicalGroup="Alkaline Earth Metals" class="col" />
            <TableElement symbol="#" name="#" atomicNumber="0" chemicalGroup="###" class="col hidden-container" />
            <TableElement symbol="Hf" name="Hafnium" atomicNumber="72" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Ta" name="Tantalum" atomicNumber="73" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="W" name="Tungsten" atomicNumber="74" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Re" name="Rhenium" atomicNumber="75" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Os" name="Osmium" atomicNumber="76" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Ir" name="Iridium" atomicNumber="77" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Pt" name="Platinum" atomicNumber="78" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Au" name="Gold" atomicNumber="79" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Hg" name="Mercury" atomicNumber="80" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Tl" name="Thallium" atomicNumber="81" chemicalGroup="Post-Transition Metals" class="col" />
            <TableElement symbol="Pb" name="Lead" atomicNumber="82" chemicalGroup="Post-Transition Metals" class="col" />
            <TableElement symbol="Bi" name="Bismuth" atomicNumber="83" chemicalGroup="Post-Transition Metals" class="col" />
            <TableElement symbol="Po" name="Polonium" atomicNumber="84" chemicalGroup="Metalloids" class="col" />
            <TableElement symbol="At" name="Astatine" atomicNumber="85" chemicalGroup="Halogen" class="col" />
            <TableElement symbol="Rd" name="Radon" atomicNumber="86" chemicalGroup="Noble Gas" class="col" />
        </div>
        
        <!-- 7th row -->
        <div class="row">
            <TableElement symbol="Fr" name="Francium" atomicNumber="87" chemicalGroup="Alkali Metals" class="col" />
            <TableElement symbol="Ra" name="Radium" atomicNumber="88" chemicalGroup="Alkaline Earth Metals" class="col" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="###" class="col hidden-container" />
            <TableElement symbol="Rf" name="Rutherfordium" atomicNumber="104" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Db" name="Dubnium" atomicNumber="105" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Sg" name="Seaborgium" atomicNumber="106" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Bh" name="Bohrium" atomicNumber="107" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Hs" name="Hassium" atomicNumber="108" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Mt" name="Meitnerium" atomicNumber="109" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Ds" name="Darmstadium" atomicNumber="110" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Rg" name="Roentgenium" atomicNumber="111" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Cn" name="Copernicum" atomicNumber="112" chemicalGroup="Transition Metals" class="col" />
            <TableElement symbol="Nh" name="Nihonium" atomicNumber="113" chemicalGroup="Post-Transition Metals" class="col" />
            <TableElement symbol="Fl" name="Flevorium" atomicNumber="114" chemicalGroup="Post-Transition Metals" class="col" />
            <TableElement symbol="Mc" name="Moscovium" atomicNumber="115" chemicalGroup="Post-Transition Metals" class="col" />
            <TableElement symbol="Lv" name="Livermorium" atomicNumber="116" chemicalGroup="Post-Transition Metals" class="col" />
            <TableElement symbol="Ts" name="Tennessine" atomicNumber="117" chemicalGroup="Halogen" class="col" />
            <TableElement symbol="Og" name="Oganesson" atomicNumber="118" chemicalGroup="Noble Gas" class="col" />
        </div>

        <!-- Lanthanides -->
        <div class="row">
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="###" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="###" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="###" class="col hidden-container" />
            <TableElement symbol="La" name="Lanthanum" atomicNumber="57" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Ce" name="Cerium" atomicNumber="58" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Pr" name="Praseodymium" atomicNumber="59" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Nd" name="Neodymium" atomicNumber="60" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Pm" name="Propethium" atomicNumber="61" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Sm" name="Samarium" atomicNumber="62" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Eu" name="Europium" atomicNumber="63" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Gd" name="Gadolinium" atomicNumber="64" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Tb" name="Terbium" atomicNumber="65" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Dy" name="Dysprosium" atomicNumber="66" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Ho" name="Holmium" atomicNumber="67" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Er" name="Erbium" atomicNumber="68" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Tm" name="Thulium" atomicNumber="69" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Yb" name="Ytterbium" atomicNumber="70" chemicalGroup="Lanthanides" class="col" />
            <TableElement symbol="Lu" name="Lutetium" atomicNumber="71" chemicalGroup="Lanthanides" class="col" />
        </div>

        <!-- Actinides -->
        <div class="row">
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="###" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="###" class="col hidden-container" />
            <TableElement symbol="#" name="###" atomicNumber="0" chemicalGroup="###" class="col hidden-container" />
            <TableElement symbol="Ac" name="Actinium" atomicNumber="89" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="Th" name="Thorium" atomicNumber="90" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="Pa" name="Protactinium" atomicNumber="91" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="U" name="Uranium" atomicNumber="92" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="Np" name="Neptunium" atomicNumber="93" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="Pu" name="Plutonium" atomicNumber="94" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="Am" name="Americum" atomicNumber="95" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="Cm" name="Curium" atomicNumber="96" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="Bk" name="Berkelium" atomicNumber="97" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="Cf" name="Californium" atomicNumber="98" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="Es" name="Einsteinium" atomicNumber="99" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="Fm" name="Fermium" atomicNumber="100" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="Md" name="Mendelevium" atomicNumber="101" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="No" name="Nobelium" atomicNumber="102" chemicalGroup="Actinides" class="col" />
            <TableElement symbol="Lr" name="Lawrencium" atomicNumber="103" chemicalGroup="Actinides" class="col" />
        </div>
    </div>
</template>

<script>
    import TableElement from './TableElement.vue'
    
    export default{
        data(){
            return {
                highlightedChemicalGroup: 'All Groups'
            }
        },

        components:{
            TableElement
        },

        methods:{
            highlightChemicalGroup(chemicalGroup, chemicalGroupFullName){
                const elements = document.getElementsByClassName('card');
                this.highlightedChemicalGroup = chemicalGroupFullName
                
                if (chemicalGroup != "all"){
                    for (let i=0; i<= elements.length; i++){
                        try{
                            let classes = elements[i].classList;
                            if (classes.value.includes(chemicalGroup)){
                                elements[i].style.opacity = 1
                            }
                            else{
                                elements[i].style.opacity = 0.2
                            }
                        }catch(error){
                            // no catch statement
                        }
                    }
                }
                else{
                    for (let i=0; i<= elements.length; i++){
                        try{
                            elements[i].style.opacity = 1;
                        }catch(error){ 
                            // no catch statement
                        }
                    }
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
            }
        },

        beforeMount(){
            if (this.getCookie('rhea-user') ==  ""){
                this.$router.push('/identity-checker')
            }

        },
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

    h1{
        font-family: 'Dancing Script', cursive;
        font-size: 4rem;
    }

    #wrapper{
        color: #865439;
    }

    #home-link{
        color: #865439;
        text-decoration: none;
    }

    #home-link:hover{
        text-decoration: underline;
    }

    #nonmetal{
        background-image: linear-gradient(to bottom right, #323200,#3E3E00, #4a4a00);
    }

    #alkali-metal{
        background-image: linear-gradient(to bottom right, #310000, #390000, #3F0000);
    }

    #alkaline-earth-metal{
        background-image: linear-gradient(to bottom right, #0D0D32, #0F0F39, #10103F);
    }

    #transition-metal{
        background-image: linear-gradient(to bottom right, #001A34, #002141, #00264C);
    }

    #post-trnstion-metal{
        background-image: linear-gradient(to bottom right, #003200, #003D00, #2A592C);
    }
    
    #metalloid{
        background-image: linear-gradient(to bottom right, #444E2C, #222E00, #293800);
    }

    #halogen{
        background-image: linear-gradient(to bottom right, #323200, #3C3C00, #4B4B00);
    }

    #noble-gas{
        background-image: linear-gradient(to bottom right, #614C2C, #3C2400, #4B2D00);
    }

    #lanthanide{
        background-image: linear-gradient(to bottom right,#003F3F, #004B4B, #2A6465);
    }

    #actinide{
        background-image: linear-gradient(to bottom right, #3B6D5E, #134B39, #165742);
    }

    #all{
        border: 1px solid #865439;
        color: #865439;
    }

    .legend-item{
        border-radius: 5px;
        color: #FDF6EC;
        font-size: 0.8rem;
        cursor: pointer;
    }

    .row{
        margin: 0 2px 0 2px;
    }

    .hidden-container{
        visibility: hidden;
    }
</style>