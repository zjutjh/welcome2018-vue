<template>
  <div class="content">
    <div class="logo">
      <img class="logo1" src="../../UI/logo.png">
    </div>
    <div>wywwywwyw</div>
  </div>
</template>

<script>
    import tips from '../components/tips.vue'
    import router from '../router/index.js'

    export default {
        name: "result1",
        components: tips,
    }
</script>

<style scoped>
  html{
    font-size:16px;
    font-family: 等线;
  }
  .content{
    position: absolute;
    padding: 0;
    margin: 0;
    height: 83.3125rem;
    width: 46.875rem;
    background-image: linear-gradient(120deg, #5694dc 0%, #c2e9fb 90%);
  }
  .logo1{
    position: relative;
    top: 9rem;
    width:24%;
    height:24%;
  }
</style>
