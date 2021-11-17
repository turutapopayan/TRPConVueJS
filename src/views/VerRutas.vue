<template>
  <div>
    <Menu/>
    <h1 class="Titulo">RUTAS</h1>
    <body>
      
    </body>
  </div>

</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'Home',
  components: {
    Menu
  }
}
</script>

<style scoped>
*{
  margin: 40px;
  border: 5px solid blue;
}
.Titulo{
  border: 1px solid red;
  text-align: center;
}

</style>