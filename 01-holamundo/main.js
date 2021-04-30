const app = Vue.createApp({
    data(){
        return {
           user: {
            title: "Hola mundo",
            name: "Camilo",
            age: 19,
            movies: ["batman", "spiderman", "superman"],
            url: "https://google.com",
            picture: 
            "https://cdn.pixabay.com/photo/2020/11/06/19/12/kid-5718703_640.jpg",
            classValue: "error",
           }
        };
    }
});
