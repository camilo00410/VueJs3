const app = Vue.createApp({
    data() {
        return {
            title: "Movies",
            movieData: {},
            movieTitle: "Iron man",
        }
    }, 
    mounted(){
        this.getMovie();
    },

    methods: {
        async getMovie(){
            const search = this.movieTitle.toLowerCase().replace(/ /g, "+");
            console.log(search);

            const data  = await fetch(`https://www.omdbapi.com/?apikey=46b5d40c&t=${search}`);            
            const jsonData = await data.json();
            console.log(jsonData)
            this.movieData = jsonData;
        }
    }
})