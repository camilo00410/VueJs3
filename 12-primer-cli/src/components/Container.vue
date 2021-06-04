<template>
  <div id="container" class="container">
      <img 
        src="https://avatars.githubusercontent.com/u/63594429?v=4" 
        alt="Avatar de camilo00410" 
        width="50" 
        loading="lazy" 
        class="image"
    >
    <hr>
    <loading v-if="load" />
      <h2>Proyectos</h2>
      <div class="cards" v-for="project in projects" :key="project.id">
        <Card 
            :name="project.name" 
            :description="project.description" 
            :author="project.owner.login" 
            :url="project.html_url" 
            :homepage="project.homepage"
            />
        
      </div>
  </div>
</template>

<script>
import Card from "./Card";
import Loading from './Loading.vue';

export default {
    data: () => ({
        projects: null,
        load: false,
    }),
    components: {
        Card,
        Loading,
    },
    mounted() {
        this.getProjects();
    },
    methods: {
        async getProjects(){
            this.load = true;
            const res = await fetch("https://api.github.com/users/camilo00410/repos");
            const data = await res.json();

            this.load = false;
    
            this.projects = data;
            console.log(data[0]);
        }
    }
}
</script>

<style scoped>

.cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.container{
    overflow:hidden;
    box-shadow: 1px 1px 4px #333;
    border: solid 1px #eee;
    text-align: center
}

.image{
    border-radius: 50%;
}
</style>