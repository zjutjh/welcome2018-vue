<template>
  <div class="content">
    <div class="logo">
      <img class="logo1" src="../../UI/logo.png">
    </div>
    <div class="form">
      <div class="info-item item1">
        <!--<label class="label namelabel">姓名</label>-->
        <input class="inputtext" type="text" name="name" id="name" placeholder="姓名" v-model="name">
      </div>
      <div class="info-item item2">
        <!--<label class="label passlabel">身份证号</label>-->
        <input class="inputtext" type="text" name="pass" id="pass" placeholder="身份证号" v-model="pass">
      </div>
      <label class="select">
        <label>查</label>
        <input class="radio radio1" type="radio" checked="checked" name="choose" value="1" />
        <span class="radioInput"></span>
        <label>学号班级</label>
        <input class="radio radio2"type="radio" checked="checked" name="choose" value="2" />
        <span class="radioInput"></span>
        <label>寝室</label>
      </label>
      <button class="loginbutton" name="login" v-on:click="sendInfo" v-loading.fullscreen.lock="fullscreen">查询</button>
    </div>
    <p class="cr">©浙江工业大学精弘网络</p>
    <!--
    <div class="loading" v-if="loading">
      <div class="double">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
    -->
  </div>

</template>

<script>
  //!function(a,b,c){function q(){var d=Math.min((o?e[h]().width:f.innerWidth)/(a/b),c);d!=p&&(k.innerHTML="html{font-size:"+d+"px!important;"+n+"}",p=d)}function r(){clearTimeout(l),l=setTimeout(q,500)}var l,d=document,e=d.documentElement,f=window,g="addEventListener",h="getBoundingClientRect",i="pageshow",j=d.head||d.getElementsByTagName("HEAD")[0],k=d.createElement("STYLE"),m="text-size-adjust:100%;",n="-webkit-"+m+"-moz-"+m+"-ms-"+m+"-o-"+m+m,o=h in e,p=null;a=a||320,b=b||16,c=c||32,j.appendChild(k),d[g]("DOMContentLoaded",q,!1),"on"+i in f?f[g](i,function(a){a.persisted&&r()},!1):f[g]("load",r,!1),f[g]("resize",r,!1),q()}(320,10,100);

    import tips from '../components/tips.vue'
    import router from '../router/index.js'

    export default {
        name: "main",
        components: tips,
        data: function() {
          return {
            name: '',
            pass: '',
            choose: '',
            fullscreen: false,
            loading: false
          }
        },
        methods: {
          sendInfo() {
            this.loading = true;
            let _this = this;
            // let ad = random(1, 1000);
            let num = 1000;
            this.$http.post('http://localhost/new-stu/stu-api/test.php', {name: _this.name, pass: _this.pass, nu: num},
              {emulateJSON: true}
            ).then(
                function (res) {
                _this.loading = false;
                alert(res.body.name + ' ' + res.body.pass);
              },
                function () {
                _this.loading = false;
                alert('error');
                router.push('result1');
              }
            );
          }
        }
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
  padding-left: 1.125rem;
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
  margin:20px 20px 0 0;
  display:inline-block;

}
/*
.radio{display:none}
.radioInput{background-color:#fff;border:2px solid rgba(0,0,0,0.15);border-radius:100%;display:inline-block;height:36px;margin-right:10px;margin-top:-1px;vertical-align:middle;width:36px;line-height:1}
.radio:checked + .radioInput:after{background-color:#00A1E9;border-radius:100%;content:"";display:inline-block;height:26px;margin-left:5px;margin-top:5px;width:26px}
checkbox.radioInput,.radio:checked + checkbox.radioInput:after{border-radius:0}
.demo--radio:checked + .radioInput{border:2px solid #00A1E9;}
*/
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
/*
.loading {
  position: absolute;
  z-index: 1000;
  margin: 0;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, .9);
}
.double {
  height: 10%;
  width: 10%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #8cbbb1;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: bounce 2.0s infinite ease-in-out;
  animation: bounce 2.0s infinite ease-in-out;
}
.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
  */
</style>
