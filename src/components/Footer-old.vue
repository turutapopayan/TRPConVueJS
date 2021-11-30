<template>
<div>
    <footer class="contenedor">
        <nav>
            <img src="../assets/footer.png" alt="footer">
        </nav>
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
}

 nav{
    background: #a587bf;
    text-align: center;
    width: 100%;
    }

 .contenedor{
    width: 90%;
    margin: 0 auto;
  }
  img{
    width: 100%;
  }
</style>