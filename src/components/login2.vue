<template>
  <div class="content">
    <div class="logo">
      <img class="logo1" src="../../UI/logo.png">
    </div>
    <div class="form">
      <!--<div class="info-item item1">-->
        <!--<input class="inputtext" type="text" name="name" id="name" placeholder="姓名" v-model="name">-->
      <!--</div>-->
      <div class="info-item item2">
        <input class="inputtext" type="text" name="id" id="id" placeholder="学号" v-model="id">
      </div>

      <button class="loginbutton" name="login" v-on:click="sendInfo" v-loading.fullscreen.lock="fullscreen">查询</button>
    </div>
    <div class="footer">
      <div class="tip">
        <Card :bordered="false">
          <p class="title" slot="title">小贴士</p>
          <p class="content" v-html="tip"></p>
          <p><a style="color: #fff;" target="_blank" href="https://jq.qq.com/?_wv=1027&k=5gH4P6Q">可以来精弘群咨询</a></p>
        </Card>
      </div>
      <p class="cr">©浙江工业大学精弘网络</p>
    </div>

    <!--<div class="loading" v-if="loading">-->
    <!--<Spin fix></Spin>-->

    <loading :loading="loading"></loading>
  </div>

</template>

<script>
  //!function(a,b,c){function q(){var d=Math.min((o?e[h]().width:f.innerWidth)/(a/b),c);d!=p&&(k.innerHTML="html{font-size:"+d+"px!important;"+n+"}",p=d)}function r(){clearTimeout(l),l=setTimeout(q,500)}var l,d=document,e=d.documentElement,f=window,g="addEventListener",h="getBoundingClientRect",i="pageshow",j=d.head||d.getElementsByTagName("HEAD")[0],k=d.createElement("STYLE"),m="text-size-adjust:100%;",n="-webkit-"+m+"-moz-"+m+"-ms-"+m+"-o-"+m+m,o=h in e,p=null;a=a||320,b=b||16,c=c||32,j.appendChild(k),d[g]("DOMContentLoaded",q,!1),"on"+i in f?f[g](i,function(a){a.persisted&&r()},!1):f[g]("load",r,!1),f[g]("resize",r,!1),q()}(320,10,100);

  import Loading from './loading'

  export default {
    name: "login2",
    components: {Loading},
    mounted(){
      let _this = this;
      this.$http.post('http://dorm.jh.zjutjh.com/api/main/tips').then(function(res) {
        _this.tip = res.body.data.tip.content;
      });
    },
    data: function() {
      return {
        id: '',
        tip: '',
        loading: false
      }
    },
    methods: {
      sendInfo () {
        this.loading = true;
        if( this.id == '' ) {
          this.loading = false;
          alert('输入错误，重新输入。');
          return;
        }
        let _this = this;
        this.$http.post('http://dorm.jh.zjutjh.com/api/main/dormitory',{ id: _this.id }
        ).then(function (res){
          if(res.body.code < 0){
            alert(res.body.error);
            _this.loading = false;
            return;
          }
          this.$router.push({
            name: 'result4',
            params: {
              data: res
            }
          })
        }, function(){
          _this.loading = false;
          alert('请求错误，请重新尝试。');
          _this.id = '';
          return;
        });
      },
      // isId(){
      //   let reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/;
      //   return reg.test(this.id);
      // }
    }
  }

</script>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
  }
  #app>.content{
    display: flex;
    flex-direction: column;
    padding: 1px;
    margin: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(120deg, #5694dc 0%, #c2e9fb 90%);
  }
  .logo1{
    width: 6rem;
    height: 6rem;
  }
  .logo{
    margin-top: 6rem;
  }
  .info-item input{
    line-height: 1; box-sizing: border-box;
    width: 100%;
    background-color: transparent;
    border: 0;
    border-bottom: 1px #ececec solid;
    transition: .25s ease border;
  }
  .info-item input:focus-within{
    border-bottom: 2px white solid;
  }
  .info-item input::-webkit-input-placeholder{
    color: #ececec;
    font-size: 1.4rem;
  }
  .inputtext{
    color: white;
    font-size: 1.4rem;
    outline:none;
    padding:0 0 .7rem .8rem;
  }
  .info-item+.info-item{

    margin-top: 2.5rem;
  }
  .form{
    flex: 1;
    margin-top: 8rem;
    box-sizing:border-box;
    width: 100%;
    padding: 0 5rem;
  }
  .select{
    position: absolute;
    left: 7rem;
    top: 50.5625rem;
    color: white;
    font-size: 1.2rem;
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 40%;
    padding: 0.5rem ;
    /*height: 5rem;*/
    margin-top: 5rem;
    /*float: right;*/
    height: 3rem;
    border: 1px white solid;
    background: rgba(255, 255, 255, 0);
    color: white;
    font-size: 1.4rem;
  }
  .footer{
    width: 100%;
  }
  .tip{
    text-align: left;
    font-size: 1.2rem;
    color: #6585be;
    margin: 0 4rem;
    padding: 1rem;
  }
  .tip p {
    margin: 0;
  }

  .tip .title {
    margin-bottom: .4rem;
  }
  .tip .content {
    text-indent: 1.2em;
  }
  .cr{
    text-align: right;
    padding-bottom: 2rem;
    margin: 3rem 3rem 0;
    color: #6585be;
    font-size: 1.2rem;
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
