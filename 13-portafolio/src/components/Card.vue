<template>
  
        <div class="card  bg-gray-900 text-gray-100  rounded-xl m-5 ">
                <h4 class="text-lg font-medium uppercase rounded-t-xl p-3 bg-red-700 text-center border-b-2 border-gray-200 pb-2" >{{name}}</h4>
                
                <br>
                <p v-if="description == null " class="font-light text-lg h-32 overflow-hidden m-2"> N/A</p>
                <p v-else class="font-light text-lg h-32 overflow-hidden m-2">{{description}} </p>

                <p class="pt-4 bac pl-2"><strong>Usuario: </strong>{{author}}</p>

                <div class="btn-card  mt-5 pt-2 ">
                    <div class="buttons grid grid-cols-2">
                    <button-url 
                        :url="url" 
                        class="col-span-1  rounded-bl-xl"
                    />

                    <button-url 
                        :url="homepage" 
                        v-if="homepage != null" 
                        color="red"  
                        title="Desplegar"
                        class="col-span-1  rounded-br-xl"
                    />
                </div>
                </div>
                

        </div>
</template>

<script>
import ButtonUrl from './ButtonUrl.vue'
export default {
  components: { ButtonUrl },
    props: {
        name: String,
        description: String,
        author: String,
        url: String,
        homepage: String,
    }
}
</script>

<style scoped>

.card{
    box-shadow: 0px 0px 10px 2px white;
}



</style>