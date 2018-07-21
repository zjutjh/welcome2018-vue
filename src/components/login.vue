<template>
  <div class="content">
    <div class="logo">
      <img class="logo1" src="../../UI/logo.png">
    </div>
    <p class="cr">©浙江工业大学精弘网络</p>
  </div>

</template>

<script>
    import tips from '@/components/tips.vue'
    export default {
        name: "main",
        components: tips,
    }

</script>

<style scoped>
.content{
  position: absolute;
  padding: 0rem;
  margin: 0rem;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.logo1{
  position: relative;
  top: 4rem;
  width:24%;
  height:24%;
}

.cr{
  position: absolute;
  bottom: 0;
  color: aliceblue;
}
</style>
