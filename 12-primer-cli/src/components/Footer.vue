<template>
<div id="footer" >
    <footer>
        <h3 class="p-4">
            &copy; Camilo Loaiza - {{ year }}
        </h3>
    </footer>
</div>
</template>

<script>
export default {
    computed: {
        year() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style scoped>
h3{
    background-color: #333;
    padding: 1rem;
    text-align: center;
    color:snow;
}
</style>
