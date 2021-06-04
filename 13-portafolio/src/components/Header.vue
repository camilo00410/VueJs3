<template>
  <header class="pt-3">
      <a href="" class="border-2 font-semibold border-white px-5 py-2 rounded-md float-right  hover">{{title}}</a>
  </header>
</template>

<script>
export default {
    props: {
        title: String,
    }

}
</script>

<style scoped>

.hover:hover{
    @apply transition duration-1000  bg-white animate-bounce text-gray-900;
}
</style>