<template>
<div class="cards sticky -top-full bg-dark">
    <h2 class="text-center text-xl font-medium my-5 txt-color-card">Proyectos</h2>

  <div class="card grid grid-cols-4 mb-36 ">
        <div class="cards col-span-1 ml-4  " v-for="project in projects" :key="project.id">
            <Card 
                :name="project.name"
                :description="project.description"
                :author="project.owner.login"
                :url="project.html_url"
                :homepage="project.homepage"
            />           
            
            
        </div>
    </div>
</div>
    
</template>

<script>

import Card from './Card.vue'
export default {
    data: () => ({
        projects: null,
        load: false,
    }),
    components: { Card},
    mounted(){
        this.getProjects();
    },
    methods: {
        async getProjects(){
            const res = await fetch("https://api.github.com/users/camilo00410/repos");
            const data = await res.json();

            this.projects = data;
            console.log(data);
        }
    },
}
</script>

<style>

</style>