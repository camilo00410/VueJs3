<template>
    <div id="app" class="bg-dark">

      <!-- NAVBAR -->
      <div class="w-1/12 ">
        <Navbar class="fixed"/>
      </div>


      <div class="container mx-auto w-11/12 text-white grid border-l-2 pl-7 ">

          <!-- HEADER -->
          <Header 
            title="CONTÁCTAME"
            class="py-4 text-lg  "  
          />

          <!-- CONTAINER -->
          <Container/>         
       
            <!-- ABOUT -->
          <About class="py-24"/>

            <!-- CARDS -->
          <Cards class="py-0"/>  

          <!-- CONTACT -->
          <Contact class="py-16"/>

          <!-- FOOTER -->
          <Footer 
            class="text-center "
          />
        </div>
      
      
        <div class="">
          <Redes class="fixed"/>
        </div>
        
    </div>
</template>

<script>
import Container from './components/Container.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Cards from './components/Cards.vue'
import Redes from './components/Redes.vue'
import Contact from './components/Contact.vue'


export default {
  components: { 
    Header, 
    Footer, 
    Container, 
    Navbar, 
    About, 
    Cards, 
    Redes,
    Contact
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap');

*{
  /* font-family: 'Montserrat', sans-serif; */
  font-family: 'Nunito', sans-serif;
}

.bg-card{
    background-color: #deeeea;
}
.txt-color-card{
  color: #deeeea;
}

.bg-dark{
    background-color: rgb(8, 15, 28);
}
</style>