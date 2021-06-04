<template>
  <div class="contact sticky top-0 bg-dark">

      <div class="grid grid-cols-5 ">
            <div class="col-span-2 pl-36 mt-28">
                <div class="animacion-imagenes img mb-10 rounded-full col-span-2 border-2 border-red-700 w-96 h-96">
                    <img src="./../assets/undraw_data_processing_yrrv.svg" class="w-96 mt-12" alt="">
                </div>
            </div>
              
            <div class="col-span-3">
                
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                   
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div class="shadow  sm:overflow-hidden">
                            <div class="px-4 py-5 bg-gray-900 rounded-t-xl space-y-6 sm:p-6">
                                <div class="grid grid-cols-3 py-5 ">
                                    <div class="col-span-3 ">
                                        <label for="name" class=" text-lg font-medium ">
                                            Nombre completo
                                        </label>
                                        <div class="mt-3 flex border-input ">                               
                                            <input type="text" name="name" id="name" class="form-input form-input-shadow p-3 bg-transparent flex-1 border-b-2 border-red-800  w-full  " placeholder="Escribe tu nombre">
                                        </div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-3 ">
                                    <div class="col-span-3 py-5 ">
                                        <label for="email" class="block text-lg font-medium ">
                                            Correo electronico
                                        </label>
                                        <div class="mt-3 flex   shadow-sm text-gray-900">     
                                            <input type="email" name="cemail" id="email" class="form-input form-input-shadow text-white p-3 bg-transparent flex-1 border-b-2 border-red-800 block w-full text-base " placeholder="Escribe tu dirección de correo electrónico">

                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label for="about" class="block text-lg font-medium text-white">
                                        Envía un mensaje
                                    </label>
                                    <div class="mt-3 text-gray-900 ">
                                        <textarea id="about" name="about" rows="6" class="form-input form-input-shadow-t text-white p-3 bg-transparent flex-1 border-b-2 border-red-800 block w-full text-base " placeholder="Escribe tu mensaje aquí..."></textarea>
                                    </div>
                                
                                </div>
                                
                            </div>
                            <div class="px-4 py-3 bg-gray-900 text-right sm:px-6 mb-3 rounded-b-xl pb-5">
                                <button type="submit" 
                                    class="btn inline-flex px-6 border border-transparent rounded-full text-btn">
                                    <p class="" style="margin-top: 6px">Enviar</p>
                                    <span class="icon-btn ml-2 pl-2 text-3xl -mr-5 rounded-full text-red-900 mb-1">
                                        <i class="fas fa-arrow-circle-right z-0"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
         
      </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>



.form-input-shadow{
    box-shadow: 2px 13px 20px -10px rgba(153, 27, 27, var(--tw-border-opacity));
}

.form-input-shadow-t{
    box-shadow: 2px 1px 20px 0px rgba(153, 27, 27, var(--tw-border-opacity));
}

.form-input:focus{
    border: 0px;
    box-shadow: 2px 1px 10px 0px #DEEEEA;

}

.border-input:focus{
    border:0px;
}

.form-input:hover{
    border-top: 0px
}


.bg-dark{
    background-color: rgb(8, 15, 28);
}

.btn{
    box-shadow: 0px 0px 8px 0px #e43838;
    padding-left:70px;
}

.btn:hover .icon-btn{
    @apply transition duration-1000 text-white;
}

.btn:hover{

    box-shadow: 0px 0px 8px 0px white;


    @apply 
    transition 
    duration-1000
    transform
    translate-y-1 
    scale-110;

}


.text-btn p{
    
    @apply  absolute right-20;

}

.text-btn:hover p{
    @apply right-14;
    position: absolute;
    animation-name: identifier;
    animation-duration: 1s; 
    animation-iteration-count: inherit;
}

@keyframes identifier {
from{    
    top: 4rem;
    
  }
  to {
    
    top: 0;
  }
 
}


.img{
    box-shadow: 3px 3px 40px 10px white;
}

.animacion-imagenes{
    @apply  duration-1000 animate-pulse  ;
}


</style>