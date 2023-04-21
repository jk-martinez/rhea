<template>
    <div id="wrapper" class="container">
        <header class="mt-2 text-center">
            <router-link to="/" id="home-link">
                <font-awesome-icon icon="f-solid fa-home"/> Back to Home
            </router-link>
            <h1 class="mt-2"> Units of Measurements </h1>
        </header>

        <div class="accordion mt-5" id="parent-container">
            
            <!-- The 7 SI Base Units -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#base-si-units">
                        The 7 SI Base Units
                    </button>
                </h2>

                <div id="base-si-units" class="accordion-collapse collapse" data-bs-parent="#parent-container">
                    <div class="accordion-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th> Category </th>
                                    <th> Unit of Measurement </th>
                                </tr>
                            </thead>

                            <tbody class="table-group-divider">
                                <tr>
                                    <td> Length </td>
                                    <td> Meter (m)</td>
                                </tr>

                                <tr>
                                    <td> Time </td>
                                    <td> Seconds (s) </td>
                                </tr>

                                <tr>
                                    <td> Amount of Substance </td>
                                    <td> Mole (1 mole = 6.022140776 x 10<sup>23</sup> elementary entities)  </td>
                                </tr>

                                <tr>
                                    <td> Electric current </td>
                                    <td> Ampere (A) </td>
                                </tr>

                                <tr>
                                    <td> Temperature </td>
                                    <td> Kelvin (K) </td>
                                </tr>

                                <tr>
                                    <td> Luminous intensity </td>
                                    <td> Candela (cd) </td>
                                </tr>

                                <tr>
                                    <td> Mass:</td>
                                    <td> Kilogram (kg) </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Units of Measurement for Length -->
            <div class="accordion-item">
                <h2 class="accordion-header"> 
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#length-units">
                        Units of Measurement for Length
                    </button>
                </h2>

                <div id="length-units" class="accordion-collapse collapse" data-bs-parent="#parent-container">
                    <div class="accordion-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th> System </th>
                                    <th> Unit of Measurement </th>
                                    <th colspan="4"> Conversion </th>
                                </tr>
                            </thead>

                            <tbody class="table-group-divider">
                                <tr>
                                    <td rowspan="4"> Metric Units </td>
                                    <td> Millimeter (mm) </td>
                                    <td colspan="3"> 1 mm = 0.01 cm </td>
                                </tr>

                                <tr>
                                    <td> Centimeter (cm) </td>
                                    <td colspan="3"> 1 cm = 10 mm </td>
                                </tr>

                                <tr>
                                    <td> Meter (m) </td>
                                    <td colspan="3"> 1 m = 100 cm </td>
                                </tr>

                                <tr>
                                    <td> Kilometer (km) </td>
                                    <td colspan="3"> 1 km = 100 m</td>
                                </tr>

                                <tr>
                                    <td rowspan="6"> Imperial Units </td>
                                    <td> Inch (in) </td>
                                    <td colspan="3"> 1 in = 0.83333 ft </td>
                                </tr>

                                <tr>
                                    <td> Foot (ft) </td>
                                    <td colspan="3"> 1 ft = 12 in </td>
                                </tr>

                                <tr>
                                    <td> Mile </td>
                                    <td colspan="3"> 1 mile = 5280 ft </td>
                                </tr>

                                <tr>
                                    <td> Yard </td>
                                    <td colspan="3"> 1 yard = 36 in </td>
                                </tr>

                                <tr>
                                    <td> Chain </td>
                                    <td> 1 chain = 66 ft </td>
                                    <td> 1 chain = 22 yards </td>
                                    <td> 1 chain = 20.1168 m </td>
                                </tr>

                                <tr>
                                    <td> Nautical Mile </td>
                                    <td colspan="3"> 1, 852 m </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Units of Measurement for Area -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#area-units">
                        Units of Measurement for Area
                    </button>
                </h2>

                <div id="area-units" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <table class="table">
                            <thead>
                                <th> System </th>
                                <th> Unit of Measurement </th>
                                <th colspan="3"> Conversion </th>
                            </thead>

                            <tbody class="table-group-divider">
                                <tr>
                                    <td rowspan="3"> Metric Units </td>
                                    <td> * Square meter (sqm or m<sup>2</sup>) </td>
                                    <td> 1 sqm = 10,000 cm<sup>2</sup> </td>
                                    <td>1 sqm = 1,000,000 mm<sup>2</sup> </td>
                                </tr>

                                <tr>
                                    <td> * Are (a or ares) </td>
                                    <td> 1 are = 100 m<sup>2</sup> </td>
                                    <td> 1 are = 0.0247 acre </td>
                                    <td> 100 ares = 1 hectare </td>
                                </tr>

                                <tr>
                                    <td> Hectare </td>
                                    <td> 1 ha = 100 ares </td>
                                    <td> 1 ha = 10,000 m<sup>2</sup> </td>
                                    <td> 1 ha = 2.47 acres </td>
                                </tr>

                                <tr>
                                    <td rowspan="4"> Imperial Units </td>
                                    <td> Square inch (in<sup>2</sup>) </td>
                                    <td colspan="3"> 1 in<sup>2</sup> = 6.4516 cm<sup>2</sup> </td>
                                </tr>

                                <tr>
                                    <td> Square feet (ft<sup>2</sup>) </td>
                                    <td> 1 ft<sup>2</sup> = 144 in<sup>2</sup> </td>
                                    <td colspan="2"> 1 ft<sup>2</sup> = 0.093 m<sup>2</sup> </td>
                                </tr>

                                <tr>
                                    <td> Square yard (yd<sup>2</sup>) </td>
                                    <td> 1 yd<sup>2</sup> = 9 ft<sup>2</sup> </td>
                                    <td colspan="2"> 1 yd<sup>2</sup> = 0.836 ft<sup>2</sup> </td>
                                </tr>

                                <tr>
                                    <td> Acre </td>
                                    <td> 1 acre = 43,650 ft<sup>2</sup> </td>
                                    <td colspan="2"> 1 acre = 4,046.873 m<sup>2</sup> </td>
                                </tr>
                            </tbody>
                        </table>

                        <small class="text-muted"><em> Units marked with * means they are derived. </em></small>
                    </div>
                </div>
            </div>

            <!-- Units of Measurement for Mass -->
            <div class="accordion-item">
                <h2 class="accordion-header"> 
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#mass-units">
                        Units of Measurement for Mass
                    </button>
                </h2>

                <div id="mass-units" class="accordion-collapse collapse" data-bs-parent="#parent-container">
                    <div class="accordion-body">
                        <table class="table w-50">
                            <thead>
                                <tr>
                                    <th> System </th>
                                    <th> Unit of Measurement </th>
                                    <th> Conversion </th>
                                </tr>
                            </thead>

                            <tbody class="table-group-divider">
                                <tr>
                                    <td rowspan="3"> Metric Units </td>
                                    <td> Milligram (mg) </td>
                                    <td> 1 mg = 0.001 g </td>
                                </tr>

                                <tr>
                                    <td> Gram (g) </td>
                                    <td> 1 g = 1000 mg </td>
                                </tr>

                                <tr>
                                    <td> Kilogram (kg) </td>
                                    <td> 1 kg = 1000 g </td>
                                </tr>

                                <tr>
                                    <td rowspan="3"> Imperial Units </td>
                                    <td> Ounce (oz) </td>
                                    <td> 1 oz = 0.0625 lb </td>
                                </tr>

                                <tr>
                                    <td> Pound (lb) </td>
                                    <td> 1 lb = 16 oz </td>
                                </tr>

                                <tr>
                                    <td> Ton </td>
                                    <td> 1 ton = 2000 lbs </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Units of Measurement for Volume -->
            <div class="accordion-item">
                <h2 class="accordion-header"> 
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#volume-units">
                        Units of Measurement for Volume
                    </button>
                </h2>

                <div  id="volume-units" class="accordion-collapse collapse" data-bs-parent="#parent-container">
                    <div class="accordion-body">
                        <table class="table w-50">
                            <thead>
                                <tr>
                                    <th> System </th>
                                    <th> Unit of Measurement </th>
                                    <th> Conversion </th>
                                </tr>
                            </thead>

                            <tbody class="table-group-divider">
                                <tr>
                                    <td rowspan="4"> Metric Units </td>
                                    <td> Mililiter (ml) </td>
                                    <td> 1 ml = 0.001 l </td>
                                </tr>

                                <tr>
                                    <td> Liter (l) </td>
                                    <td> 1 l = 1000 ml </td>
                                </tr>

                                <tr>
                                    <td> Kiloliter (kl) </td>
                                    <td> 1 kl = 1000 l </td>
                                </tr>

                                <tr>
                                    <td> Cubic centimeter(cm <sup>3</sup>) </td>
                                    <td> 1 l = 1000 cm<sup>3</sup> </td>
                                </tr>

                                <tr>
                                    <td rowspan="3"> Imperial Units </td>
                                    <td> Fluid ounce (fl. oz.) </td>
                                    <td> 1 fl. oz. = 1/20 pt </td>
                                </tr>

                                <tr>
                                    <td> Gallon (gal) </td>
                                    <td> 1 gal = 128 fl. oz. </td>
                                </tr>

                                <tr>
                                    <td> Pint (pt) </td>
                                    <td> 1 pt = 16 fl. oz. </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Units of Measurement for Temperature -->
            <div class="accordion-item">
                <h2 class="accordion-header"> 
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#temperature-units">
                        Units of Measurement for Temperature
                    </button>
                </h2>

                <div id="temperature-units" class="accordion-collapse collapse" data-bs-parent="#parent-container">
                    <div class="accordion-body">
                        <table class="table w-50">
                            <thead>
                                <tr>
                                    <th> Unit of Measurement </th>
                                    <th  colspan="2"> Conversion </th>
                                </tr>
                            </thead>

                            <tbody class="table-group-divider">
                                <tr>
                                    <td> Celcius (C) </td>
                                    <td> 0&deg;C = 273.15 K </td>
                                    <td> 0&deg;C = 32&deg;F </td>
                                </tr>

                                <tr>
                                    <td> Fahrenheit (F) </td>
                                    <td> 0&deg;F = -17.778&deg;C  </td>
                                    <td> 0&deg;F = 255.372 K </td>
                                </tr>

                                <tr>
                                    <td> Kelvin (K) </td>
                                    <td> 0 K = -273.15&deg;C = -459.57&deg;F </td>
                                    <td> 0 K = -459.57&deg;F </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Units of Measurement for Time -->
            <div class="accordion-item">
                <h2 class="accordion-header"> 
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#time-units">
                        Units of Measurement for Time
                    </button>
                </h2>

                <div id="time-units" class="accordion-collapse collapse" data-bs-parent="#parent-container">
                    <div class="accordion-body">
                        <table class="table w-50">
                            <thead>
                                <tr>
                                    <th> Unit of Measurement </th>
                                    <th> Conversion </th>
                                </tr>
                            </thead>

                            <tbody class="table-group-divider">
                                <tr>
                                    <td> Second (s) </td>
                                    <td> 1 s = 1/60 min </td>
                                </tr>

                                <tr>
                                    <td> Minute (min) </td>
                                    <td> 1 min = 60 s </td>
                                </tr>

                                <tr>
                                    <td> Hour (h) </td>
                                    <td> 1 hr = 60 min </td>
                                </tr>

                                <tr>
                                    <td> Day </td>
                                    <td> 1 day = 24 hr </td>
                                </tr>

                                <tr>
                                    <td> Week </td>
                                    <td> 1 week = 7 days </td>
                                </tr>

                                <tr>
                                    <td> Month </td>
                                    <td> 1 month = 4 weeks </td>
                                </tr>

                                <tr>
                                    <td> Year </td>
                                    <td> 1 year = 12 months </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer mt-4">
            <strong> References </strong>
            <ul>
                <li> <a href="https://www.cuemath.com/measurement/units-of-measurement/" class="reference-item"> CueMath </a> </li>
                <li> <a href="https://www.adducation.info/how-to-improve-your-knowledge/units-of-measurement/" class="reference-item"> ADDucation.info </a></li>
                <li> <a href="https://www.nist.gov/pml/owm/metric-si/si-units" class="reference-item"> National Institute of Standards and Technology </a> </li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

    h1{
        font-family: 'Dancing Script', cursive;
        font-size: 4rem;
    }

    tbody>tr:hover{
        background-color: #C68B59;
        color: #FDF6EC;
    }


    #wrapper{
        color: #865439;
    }

    .accordion-button{
        background-color: #865439;
        color: #FDF6EC;
    }

    .accordion-body, table{
        background-color: #FDF6EC;
        color: #865439;
    }

    #home-link, .reference-item{
        text-decoration: none;
        color: #865439;
    }

    #home-link:hover, .reference-item:hover{
        text-decoration: underline;
    }

    @media only screen and (max-width: 600px){
        h1{
            font-size: 2.5rem;
        }
    }
</style>