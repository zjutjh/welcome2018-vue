<template>
  <div class="content">
    <div class="logo">
      <img class="logo1" src="../../UI/logo.png">
    </div>
    <div class="form">
      <div class="info-item">
        <label class="label namelabel">姓名</label>
        <input type="text" name="name" id="name" placeholder="" v-model="name">
      </div>
      <div class="info-item">
        <label class="label passlabel">身份证号</label>
        <input type="text" name="pass" id="pass" placeholder="" v-model="name">
      </div>
      <p class="select">查</p>
      <button class="loginbutton" name="login" v-on:click="sendInfo" v-loading.fullscreen.lock="fullscreen">查询</button>
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
.info-item{
  position: absolute;
  top: 17rem;
  width: 15rem;

}
.label{
  position: absolute;
  color: white;

  left: 7rem;
}
.namelabel {
  left: 0;
  top: 2rem;
}
.passlabel {
  left: 0;
  top: 6rem;
}

#name{
  position: absolute;
  BACKGROUND-COLOR: transparent;
  border-left: 0 white solid;
  border-right: 0 white solid;
  border-top: 0 white solid;
  border-bottom: 0.1rem white solid;
  top: 2rem;
  width: 12rem;
}
#pass{
  position: absolute;
  BACKGROUND-COLOR: transparent;
  border-left: 0 white solid;
  border-right: 0 white solid;
  border-top: 0 white solid;
  border-bottom: 0.1rem white solid;
  top: 6rem;
  width: 12rem;
}
.select{
  top: 5rem;
}
.loginbutton{
  position: absolute;
  left: 15rem;
  top: 28rem;
  width: 6rem;
  height: 2rem;
  border: 0.1rem white solid;
  background: rgba(255, 255, 255, 0);
  color: white;
}
.cr{
  position: absolute;
  left: 1rem;
  bottom: 0;
  color: aliceblue;
}
</style>
