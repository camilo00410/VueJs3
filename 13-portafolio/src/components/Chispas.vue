<template>
<div class="">
  <div class="animacion traslacion left-24 bottom-6"></div>
  <div class="animacion traslacion2 right-3 bottom-7"></div>
  <div class="animacion traslacion right-11 bottom-8"></div>
  <div class="animacion traslacion2 right-20 bottom-9"></div>
  <div class="animacion traslacion left-40 bottom-10"></div>
  <div class="animacion traslacion3 bottom-20 right-5"></div>
  <div class="animacion traslacion bottom-24 right-6"></div>
  <div class="animacion traslacion2 bottom-28 right-7"></div>
  <div class="animacion traslacion left-28  bottom-12"></div>
  <div class="animacion traslacion3 right-32 bottom-14"></div>
  <div class="animacion traslacion right-80 bottom-16 "></div>
  <div class="animacion traslacion2 right-2 bottom-6"></div>
  <div class="animacion traslacion left-40 bottom-3"></div>
  <div class="animacion traslacion3 bottom-30 right-5"></div>
  <div class="animacion traslacion3 bottom-24 right-5"></div>
  <div class="animacion traslacion2 bottom-28 right-5"></div>
  <div class="animacion traslacion3 left-20  bottom-6"></div>
  <div class="animacion traslacion3 right-60 bottom-5"></div>
  <div class="animacion traslacion right-32 bottom-7"></div>
  <div class="animacion traslacion2 right-20 bottom-9"></div>
  <div class="animacion traslacion left-20 bottom-10"></div>
  <div class="animacion traslacion2 bottom-10 right-11"></div>
  <div class="animacion traslacion3 bottom-14 right-10"> </div>
  <div class="animacion traslacion2 bottom-18 right-9"></div>


  <div class="animacion traslacion3 left-40 bottom-3 -top-32"></div>
  <div class="animacion traslacion3 bottom-30 right-5 -top-32"></div>
  <div class="animacion traslacion bottom-24 right-5 -top-32"></div>
  <div class="animacion traslacion3 bottom-28 right-5 -top-32"></div>
  <div class="animacion traslacion left-20  bottom-6 -top-32"></div>
  <div class="animacion traslacion2 right-60 bottom-5 -top-32"></div>
  <div class="animacion traslacion3 right-32 bottom-7 -top-32"></div>
  <div class="animacion traslacion3 right-20 bottom-9 -top-32"></div>
  <div class="animacion traslacion left-20 bottom-10 -top-32"></div>
  <div class="animacion traslacion2 bottom-10 right-11 -top-32"></div>
  <div class="animacion traslacion bottom-14 right-10 -top-32"> </div>
  <div class="animacion traslacion3 bottom-18 right-9 -top-32"></div>

   <div class="animacion traslacion left-40 bottom-3 -top-60"></div>
  <div class="animacion traslacion2 bottom-30 right-5 -top-60"></div>
  <div class="animacion traslacion3 bottom-24 right-5 -top-60"></div>
  <div class="animacion traslacion2 bottom-28 right-5 -top-60"></div>
  <div class="animacion traslacion3 left-20  bottom-6 -top-60"></div>
  <div class="animacion traslacion3 right-60 bottom-5 -top-60"></div>
  <div class="animacion traslacion right-32 bottom-7 -top-60"></div>
  <div class="animacion traslacion2 right-20 bottom-9 -top-60"></div>
  <div class="animacion traslacion3 left-20 bottom-10 -top-60"></div>
  <div class="animacion traslacion2 bottom-10 right-11 -top-60"></div>
  <div class="animacion traslacion bottom-14 right-10 -top-60"> </div>
  <div class="animacion traslacion3 bottom-18 right-9 -top-60"></div>

  
   <div class="animacion traslacion left-40 bottom-3 -top-96"></div>
  <div class="animacion traslacion2 bottom-30 right-5 -top-96"></div>
  <div class="animacion traslacion3 bottom-24 right-5 -top-96"></div>
  <div class="animacion traslacion2 bottom-28 right-5 -top-96"></div>
  <div class="animacion traslacion3 left-20  bottom-6 -top-96"></div>
  <div class="animacion traslacion3 right-60 bottom-5 -top-96"></div>
  <div class="animacion traslacion right-32 bottom-7 -top-96"></div>
  <div class="animacion traslacion2 right-20 bottom-9 -top-96"></div>
  <div class="animacion traslacion3 left-20 bottom-10 -top-96"></div>
  <div class="animacion traslacion2 bottom-10 right-11 -top-96"></div>
  <div class="animacion traslacion bottom-14 right-10 -top-96"> </div>
  <div class="animacion traslacion3 bottom-18 right-9 -top-96"></div>

</div>
</template>

<script>
export default {

}
</script>

<style>

.animacion{
  @apply w-1 h-1 bg-red-600 absolute  ;
}

.traslacion{
  @apply duration-1000 animate-ping transform translate-x-96 translate-y-56;
}

.traslacion2{
  @apply duration-500 animate-spin transform translate-x-96 translate-y-28;
}


.traslacion3{
  @apply duration-700 animate-ping transform translate-x-96 translate-y-28;
}
</style>