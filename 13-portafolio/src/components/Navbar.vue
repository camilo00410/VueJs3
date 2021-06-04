<template>
  <div id="navbar" class="navbar">
      <ul class="navbar-styles txt-color-card">
          <li class="navs ">Contáctame</li>
          <li class="navs ">Sobre mí</li>
          <li class="navs text-red-500">Inicio</li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.navbar-styles{
    @apply h-96 w-24 mt-96  text-lg font-medium;
}

.navs{
    @apply transform -rotate-90 my-20;
}

</style>