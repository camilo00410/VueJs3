<template>
   
        <a :class="setColor" :href="url" class="text-white text-center p-2 mt-2 b " target="_blank">
            <span class="animacion-card">
                <i v-if="title != 'Desplegar'" class="fab fa-github mr-2"></i>
                <i v-else class="fas fa-external-link-alt mr-1"></i>

            </span>
            {{title}}
        </a>

   
</template>

<script>
export default {
    props: {
        color: String,
        title: {
            type: String,
            default: "Github",
        },
        url: String,
    },
    computed: {
        setColor(){
            return this.color == 'red' ? "bg-desplegar" : "bg-github";
        }
    }

}
</script>

<style>
.bg-github{
    background-color: rgb(8, 15, 28);
}
.bg-github:hover{
    @apply transition duration-1000  transform translate-x-4 scale-110 ;
}

.bg-desplegar{
    @apply bg-red-700;
}

.bg-desplegar:hover{
    @apply transition duration-1000 transform -translate-x-4 scale-110;
}

.animacion-card{
    @apply duration-1000 animate-pulse ;
}
</style>