<template>
    <a :class="setColor" target="_blank" :href="url">{{title}}</a>
</template>

<script>
export default {
    props: {
        color: String,
        url: String,
        title: {
            type: String,
            default: "Github",
            },
    },
    computed: {
        setColor(){
            return this.color == "red" ? "btn btn-danger" : "btn btn-dark";
        }
    }
}
</script>

<style>

</style>