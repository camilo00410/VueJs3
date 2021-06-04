<template>
  <div id="container" class="container mx-auto sticky top-10  bg-dark">
      <div class="grid grid-cols-12 mx-auto mt-20 pt-20 h-96 py-5">
        <img 
            src="https://avatars.githubusercontent.com/u/63594429?v=4" 
            alt="Avatar de camilo00410" 
            width="220" 
            loading="lazy" 
            class="rounded-full mx-auto my-3 col-span-4"
        >
        <div class="col-span-8 pb-56   ">
            <p class="text-4xl txt-color-card ">Soy</p>
            <h2 class="text-9xl font-medium  grid grid-cols-6 lg:grid-cols-12 uppercase">
                
                <div class="col-span-1 animate-name">C</div>
                <div class="col-span-1 animate-name2text-red-800 lg:-ml-3 mt-5">a</div>
                <div class="col-span-1 animate-name lg:-ml-7 -mt-3">m</div>
                <div class="col-span-1 animate-name2 text-red-400 lg:ml-2 mt-7 ">i</div>
                <div class="col-span-1 animate-name lg:-ml-7">l</div>
                <div class="col-span-1 animate-name2 lg:-ml-10 mt-7">o</div>

                <div class="col-span-1 animate-name ml-6">L</div>
                <div class="col-span-1 animate-name2 text-red-800  mt-5">o</div>
                <div class="col-span-1 animate-name  -mt-3">a</div>
                <div class="col-span-1 animate-name2 text-red-400 ml-2 mt-7 ">i</div>
                <div class="col-span-1 animate-name -ml-7">z</div>
                <div class="col-span-1 animate-name2 -ml-10 mt-7">a</div>
               
            </h2>
            <p class="text-4xl txt-color-card border-b-4 txt-color-card font-bold w-80 pb-3">Web Development</p>
        </div>
      </div>
    
  </div>


  <div class="chispas fixed right-52 ">
      <chispas class="absolute"/>
  </div>
</template>

<script>
import Chispas from './Chispas.vue';
export default {
    
    components: { Chispas },
   
}
</script>

<style scoped>




@import url('https://fonts.googleapis.com/css2?family=Changa:wght@200;300;400;500;700&family=Limelight&family=Roboto&display=swap');

.animate-name{
    font-family: 'Limelight', cursive;
    animation: pulse 9s infinite;
}

@keyframes pulse{
    0% {
        color: #deeeea;
    }
    100%{
       /* color: #FF4136 */
       color:#DC2626;
    }
}



.animate-name2{
    font-family: 'Limelight', cursive;
    animation: pulser 4s infinite;
}


@keyframes pulser{
    0% {
        color: #deeeea;
    }
    100%{
       /* color: #FF4136 */
       color:#DC2626;
    }
}

.chispas{
    top: 600px;
}

</style>