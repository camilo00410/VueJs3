const app = Vue.createApp({
    data() {
        return{
            title: "Peticiones fetch",
        }   
    }, 
    created(){
        this.getPost();
    },
    methods: {
        async getPost(){
            const res = await fetch("https://jsonplaceholder.typicode.com/photos");

            const data = await res.json();

            console.log(data[10]);
        }
    }
})