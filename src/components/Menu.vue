<template>
<div>
    <header class="header">
        <div class="contenedor logo-contenedor">
            <img class="logo" src="../assets/tur.png" alt="">
            <nav class="nav">
        
             <ul>
                <li><router-link to="/Home">INICIO</router-link></li>
                <li><router-link to="/RutasFavoritas">RUTAS FAVORITAS</router-link></li>
                <li><router-link to="/Nosotros">NOSOTROS</router-link></li>
                <li><router-link to="/Turismo">TURISMO</router-link></li>
                <li><router-link to="/NuestraCultura">NUESTRA CULTURA</router-link></li>
                <li><router-link to="/Registrarme">REGISTRARME</router-link></li>
                <li><router-link to="/IniciarSesion">INICIAR SESIÓN</router-link></li>
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
    background: rgba(255, 174, 0, 0.863);
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
    width: 15%;
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
    background: rgb(245, 221, 4);
}

.main{
    padding: 12rem 0rem;
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