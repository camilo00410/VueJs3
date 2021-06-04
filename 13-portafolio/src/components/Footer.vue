<template>
  <div id="footer">
      <footer>
          <h3 class="txt-color-card text-xl text-bold py-2">
              &copy; Camilo Loaiza - {{year}}
          </h3>
      </footer>
  </div>
</template>

<script>
export default {
    computed: {
        year(){
            return new Date().getFullYear();
        },
    }

}
</script>

<style>

</style>