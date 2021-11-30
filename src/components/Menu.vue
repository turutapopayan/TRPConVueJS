<template>
<div>
    <header class="header">
        <div class="contenedor logo-contenedor">
            <img class="logo" src="../assets/logo9.png" alt="">
            <nav class="nav">
        
             <ul>
                <li><router-link to="/Home">Inicio</router-link></li>
                <li><router-link to="/RutasFavoritas">Rutas Favoritas</router-link></li>
                <li><router-link to="/Nosotros">Nosotros</router-link></li>
                <li><router-link to="/Turismo">Turismo</router-link></li>
                <li><router-link to="/NuestraCultura">Nuestra Cultura</router-link></li>
                <li><router-link to="/Registrarme">Registrarse</router-link></li>
                <li><router-link to="/IniciarSesion">Iniciar Sesión</router-link></li>
             </ul>
        
            </nav>
        </div>
    </header>
</div>
    

   
</template>

<script>
export default {
  name: 'Menu',
}
</script>
<style scoped>


.contenedor{
    width: 90%;
    margin: 0 auto;

    
}

.header{
    /* background: rgba(255, 174, 0, 0.863);
    color: black; */
    background: #a587bf;
    color: black;
    padding: 0.5rem 0;
    position:fixed;
    left: 0;
    top: 0;
    width: 100%;
}
.header a{
    color: black;
    text-decoration: none;
    
}
.logo-contenedor{
    display: flex;
    justify-content: space-between; 
    
    align-items: center;
}
.logo{
    width: 7%;
    
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
    /* background: rgb(245, 221, 4); */
    background: #fccc8b;
}

.main{
    padding: 12rem 0rem;
    /* background-color: #abd49a; */
}

h1{
    text-align: center;
}

.img1{
    
    width: 40%;
    
}
.imag01{
    display: flex;
    justify-content: center;
}



</style>