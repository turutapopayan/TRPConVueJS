<template>
  <div>
    <Menu/>





    
    <Carrusel/>
  </div>

</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Carrusel from '@/components/Carrusel.vue'

export default {
  name: 'Home',
  components: {
    Menu,
    Carrusel
  }
}
</script>