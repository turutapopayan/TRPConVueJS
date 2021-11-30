<template>
<div>
    <footer class="contenedor">
           <div class="contenedor logo-contenedor">
            <nav class="nav">
        
             <ul>
                <li><router-link to="/Home"><img class="logo" src="../assets/img1.png" alt=""></router-link></li>
                <li><router-link to="/RutasFavoritas"><img class="logo" src="../assets/img2.png" alt=""></router-link></li>
                <li><router-link to="/Nosotros"><img class="logo" src="../assets/img3.png" alt=""></router-link></li>
                
                <router-link to="/IniciarSesion"><img class="logo2" src="../assets/img7.png" alt=""></router-link></li>
                <!-- <li><router-link to="/Turismo">TURISMO</router-link></li>
                <li><router-link to="/NuestraCultura">NUESTRA CULTURA</router-link></li>
                <li><router-link to="/Registrarme">REGISTRARME</router-link></li>
                <li><router-link to="/IniciarSesion">INICIAR SESIÓN</router-link></li> -->
             </ul>
            
            </nav>
        

        </div>
    </footer>
</div>    
</template>
<script>
export default {
  name: 'Footer',
}
</script>
<style scoped>
.footer{
    /* background: rgba(255, 174, 0, 0.863);
    color: black; */
    background: #a587bf;
    color: black;
    padding: 0.5rem 0;
    position:fixed;
    left: 0;
    top: 0;
    width: 100%;
    text-decoration: none;
}

 nav{
    background: #a587bf;
    /* text-align: center; */
    width: 100%;
    
    }

 .contenedor{
    width: 90%;
    margin: 0 auto;
    /* align:center; */
  }
  img{
    width: 5;
  }
  .logo-contenedor{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.logo{
    width: 50%;

}
.logo2{
    width: 25%;
    align: right;
}
.nav ul{
    margin: 0;
    padding: 0;
    list-style: none;
}
.nav ul li{
    display: inline-block;
}
.nav ul li a{
    display: block;
    padding: 0.5rem 1rem ;
    transition: all 0.4s linear ;
    border-radius: 5px;
}
.nav ul li a:hover {
    background: #fccc8b;
}

</style>