<template>
    <div id="sobre-mi" class="mt-24 py-6 sticky sticky-altura bg-dark">
        <div class="grid grid-cols-5">
            <div class="animacion-imagenes img mb-10 rounded-full col-span-2 border-2 border-red-700 w-96 ">
                <img src="./../assets/undraw_Profile_re_4a55.svg" class="w-98 py-24 px-7" alt="">
            </div>
            <div class="col-span-1">
                <h2 class="text-5xl font-bold text-red-500">Sobre mí</h2>
                <p>
                    Soy un <strong class="text-red-500 font-normal">desarrollador</strong>  que desea romper con la cadena que guia hacia el pensamiento convencional.
                </p>
                <p>
                    Me gusta crear paginas web que brinden <strong class="text-red-500 font-normal">una mejor percepcion de su marca</strong>  
                    y <strong class="text-red-500 font-normal">experiencias tanto visuales como de usabilidad</strong> a su audiencia.
                </p>            
            </div>
            <div class="col-span-2"></div>
        </div>

        <div class="grid grid-cols-5 mt-20">
            <div class="col-span-3  ml-40">
                <h2 class="text-5xl font-bold text-red-500 -ml-16">Experiencia en</h2>
                <ul class="grid grid-cols-5">
                    <li class="col-span-1 mb-3 text-center mt-3">
                        <p class="mb-2 ">PHP</p> 
                        <span class="text-5xl  px-1 rounded-md text-blue-800">
                            <i class="fab fa-php "></i>
                        </span>
                    </li>
                    <li class="col-span-1 mb-3 text-center mt-3">
                        <p class="mb-2 ">LARAVEL</p> 
                        <span class="text-5xl  px-1 text-red-800 rounded-md">
                            <i class="fab fa-laravel"></i>
                        </span>
                    </li>
                    <li class="col-span-1 mb-3 text-center mt-3">
                        <p class="mb-2 ">HTML5</p> 
                        <span class="text-5xl text-yellow-500 px-1 rounded-md">
                            <i class="fab fa-html5"></i>
                        </span>
                    </li>
                    <li class="col-span-1 mb-3 text-center mt-3">
                        <p class="mb-2 ">CSS3</p> 
                        <span class="text-5xl text-blue-500 px-1 rounded-md">
                            <i class="fab fa-css3"></i>
                        </span>
                    </li>
                    <li class="col-span-1 mb-3 text-center mt-3">
                        <p class="mb-2 ">BOOTSTRAP</p> 
                        <span class="text-5xl text-purple-700 px-1 rounded-md">
                            <i class="fab fa-bootstrap"></i>
                        </span>
                    </li>
                    <li class="col-span-1 mb-3 text-center mt-3">
                        <p class="mb-2 ">TAILWIND</p> 
                        <div class=" rounded-md w-20 ml-5  -mt-5">
                            <img src="./../assets/tailwindcss.svg" class="w-10  mx-auto my-5 py-5" alt="">                        

                        </div>
                    </li>
                    <li class="col-span-1 mb-3 text-center mt-3">
                        <p class="mb-2 ">JAVASCRIPT</p> 
                        <span class="text-5xl text-yellow-400 px-1 rounded-md">
                            <i class="fab fa-js-square"></i>
                        </span>
                    </li>
                    <li class="col-span-1 mb-3 text-center mt-3">
                        <p class="mb-2 ">VUE 3</p> 
                        <span class="text-5xl text-green-600 px-1 rounded-md">
                            <i class="fab fa-vuejs"></i>
                        </span>
                    </li>
                    <li class="col-span-1 mb-3 text-center mt-3">
                        <p class="mb-2 ">DOCKER</p> 
                        <span class="text-5xl text-blue-500 px-1 rounded-md">
                            <i class="fab fa-docker"></i>
                        </span>
                    </li>
                    <li class="col-span-1 mb-3 text-center mt-3">
                        <p class="mb-2 ">GITHUB</p> 
                        <span class="text-5xl text-gray-700 px-1 rounded-md">
                            <i class="fab fa-github"></i>
                        </span>
                    </li>
                    <li class="col-span-1 mb-3 text-center mt-3">
                        <p class="mb-2 ">ADOBE XD</p> 
                        <div class="  rounded-md w-20 ml-5  -mt-5">
                            <img src="./../assets/experience.svg" class="w-10  mx-auto my-5 py-5" alt="">                        

                        </div>
                    </li>

                    
                    
                </ul>
            </div>
            <div class="animacion-imagenes col-span-2 img mb-10 rounded-full border-2 border-red-700 w-96 -mt-56 ml-16 mb-64">
                <img src="./../assets/undraw_laravel_and_vue_59tp.svg"  alt="">
            </div>
        </div>
        
                
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.sticky-altura{
    top: -350px;
}

.img{
    box-shadow: 3px 3px 40px 10px rgba(185, 28, 28, var(--tw-border-opacity));
}

.animacion-imagenes{
    @apply  duration-1000 animate-pulse  ;
}


</style>