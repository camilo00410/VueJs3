const app = Vue.createApp({
    data() {
        return{ 
            title: "Peticion Axios",
            datos: [],
        }
    },
    created(){
        this.getPost();
    },
    methods: {
        async getPost(){
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

            this.datos = data;
            
            console.log(data);
        }
    }
})