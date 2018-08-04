<template>
  <div class="content">
    <div class="logo">
      <img class="logo1" src="../../UI/logo.png">
    </div>
    <div class="resultpage">
     <!-- <div class="schoollogo">
        <img class="logo2" src="../../UI/校徽.png">
      </div> -->
      <div class="text">

      </div>
    </div>
    <p class="cr">©浙江工业大学精弘网络</p>
  </div>
</template>

<script>
    export default {
        name: "result3"
    }
</script>

<style scoped>

  .content{
    width: 100%;
    height: 100%;
    /*padding: 0;*/
    /*margin: 0;*/
    /*height: 83.3125rem;*/
    /*width: 46.875rem;*/
    background-image: linear-gradient(120deg, #5694dc 0%, #c2e9fb 90%);
  }
  .logo1{
    position: relative;
    top: 9rem;
    width:24%;
    height:24%;
  }
  .resultpage{
    position: relative;
    top:15rem;
    margin-left: auto;
    margin-right: auto;
    height: 30%;
    width: 80%;
    background-color:rgba(255,255,255,0.5);
    border-radius:1.5rem;
    box-shadow: 0.25rem 0.25rem 1rem #888888;
  }
  /*.logo2{
    //margin-right: auto;
    margin-left: auto;
    height: 24rem;//
    height: 90%;
    overflow: auto;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.1;
  } */
  .text{
    position: relative;
    top: 0;
    left: 0;
    font-size:2.1rem;
    line-height: 3rem;
    color: rgb(19,63,106);
  }
  .cr{
    position: absolute;
    left: 23.4375rem;
    top: 77.375rem;
    bottom: 0;
    color: #6585be;
    font-size: 1.75rem;
  }
</style>
