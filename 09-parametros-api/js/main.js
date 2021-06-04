const app = Vue.createApp({
    data() {
        return {
            title: "Peticiones con Parametros",
            post: 30,
            datos: [],
        }
    },
    created(){
        this.getPost();
    },
    methods: {
        async getPost(){
            const { data: dataPost } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.post}`);

            const { userId } = dataPost;

            const { data: dataUser } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

            this.datos = dataUser;
        }
    }
})