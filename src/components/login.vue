<template>
  <div class="content">
    <div class="logo">
      <img class="logo1" src="../../UI/logo.png">
    </div>
    <div class="form">
      <div class="info-item item1">
        <!--<label class="label namelabel">姓名</label>-->
        <input class="inputtext" type="text" name="name" id="name" placeholder="  姓名" v-model="name">
      </div>
      <div class="info-item item2">
        <!--<label class="label passlabel">身份证号</label>-->
        <input class="inputtext" type="text" name="pass" id="pass" placeholder="  身份证号" v-model="name">
      </div>
      <label class="select">
        <label>查</label>
        <input type="radio" checked="checked" name="choose" value="num" style="border:none;"/>
        <label>学号班级</label>
        <input type="radio" checked="checked" name="choose" value="room" />
        <label>寝室</label>
      </label>
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
.info-item{
  position: absolute;
  top: 15rem;
  /*width: 20rem;*/
  left: 5.75rem;
}

/*.label{
  position: absolute;
  color: white;

  left: 7rem;
}
.namelabel {
  top: 1rem;
}
.passlabel {
  top: 5rem;
}*/

.inputtext{
  color: white;
  height: 5.375rem;
  font-size: 2.25rem;
  outline:none;
  /*caret-color: rgba(255, 255, 255, 100);*/
}
.item1{
  top: 30.625rem;
}
.item2{
  top: 40rem;
}
#name{
  position: absolute;
  BACKGROUND-COLOR: transparent;
  border-left: 0 white solid;
  border-right: 0 white solid;
  border-top: 0 white solid;
  border-bottom: 0.125rem white solid;
  width: 35.375rem;
}
#name::-webkit-input-placeholder{
  color: white;
  font-size: 2.25rem;
}
#pass{
  position: absolute;
  BACKGROUND-COLOR: transparent;
  border-left: 0 white solid;
  border-right: 0 white solid;
  border-top: 0 white solid;
  border-bottom: 0.125rem white solid;
  width: 35.375rem;
}
#pass::-webkit-input-placeholder{
  color: white;
  font-size: 2.25rem;
}
.select{
  position: absolute;
  left: 7rem;
  top: 50.5625rem;
  color: white;
  font-size: 1.875rem;
}
.loginbutton{
  position: absolute;
  left: 29.375rem;
  top: 54.25rem;
  width: 11.75rem;
  height: 4.125rem;
  border: 0.125rem white solid;
  background: rgba(255, 255, 255, 0);
  color: white;
  font-size: 2rem;
  font-style: normal;
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
