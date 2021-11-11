<template>
  <div>
    <Menu/>
    <nav class="img">
    <img src="../assets/logo9.png" alt="">
    </nav>
    <nav class="nav">
      <section>
        <h2>BUSCAR</h2>
        <router-link to="/AdondeQuieresIr"><img src="../assets/buscarr.jpg" alt=""></router-link>
      </section>

      <section>
        <h2>VER RUTAS</h2>
        <router-link to="/VerRutas"><img src="../assets/Ver_rutas.jpg" alt=""></router-link>
      </section>
    </nav>
    <nav>
      <Footer/>
    </nav>

  </div>

</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Menu,
    Footer
  }
}
</script>
<style scoped>
.img{
  display: flex;
  justify-content: center;
}
img{
  width: 65%;
}
.nav{
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}

</style>
