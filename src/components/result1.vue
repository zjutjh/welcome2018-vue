<template>
  <div class="content">
    <div class="logo">
      <img class="logo1" src="../../UI/logo.png">
    </div>
    <div class="result">
      <div class="resultpage">
        <div class="schoollogo">
          <img class="logo-background" src="../../UI/校徽.png">
        </div>
        <div class="text">
          <p class="text-item"><span class="label-item">姓名：</span>{{ data.student.name}}</p>
          <p class="text-item"><span class="label-item">学号：</span>{{ data.student.student_id}}</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="tip">
        <Card :bordered="false">
          <p slot="title">小贴士</p>
          <p v-html="tip"></p>
        </Card>
      </div>
      <p class="cr">©浙江工业大学精弘网络</p>
    </div>
    <div class="footer">
      <p class="cr">©浙江工业大学精弘网络</p>
    </div>
    <loading :loading="loading"></loading>

  </div>

</template>

<script>
    import router from '../router/index.js'
    import Loading from './loading'

    export default {
      name: "result1",
      components: {Loading},
      created() {
        this.loading = true;
        let _this = this;
        this.$http.post('/api/main/tips').then(function(res) {
          _this.tip = res.body.data.tip.content;
        });
        this.data = this.$route.params.data.body.data;
        this.loading = false;
      },
      data() {
        return {
          data: {
            name:'',
            id_card: '',
            student: {}
          },
          loading: false,
          tip: ''
        }
      },
      methods:{
        inToresult3 () {
            this.loading = true;
            let _this = this;
            this.$http.post('/api/main/{id}/classmates',{id:data.student.id_card}
            ).then(function (res){
              router.push({
                name: 'result3',
                params: {
                  data: this.data.classmates
                }
              })
            },
              function(){
            });
        }

        }
      }
</script>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
  }
  .content{
    display: flex;
    flex-direction: column;
    /*position: absolute;*/
    padding: 1px;
    margin: 0;
    width: 100%;
    height: 100%;
    /*height: 83.3125rem;*/
    /*width: 46.875rem;*/
    background-image: linear-gradient(120deg, #5694dc 0%, #c2e9fb 90%);
  }
  .logo1{
    width: 6rem;
    height: 6rem;
  }
  .logo{
    margin-top: 6rem;
  }
  .result {
    flex: 1;
  }
  .resultpage{
    margin-top: 3rem;
    position: relative;
    /*top:15rem;*/
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    background-color:rgba(255,255,255,0.5);
    border-radius:1.5rem;
    /*box-shadow: 0.25rem 0.25rem 1rem #888888;*/
  }
  .logo-background{
    /*margin-right: auto;
    margin-left: auto;
    height: 24rem;*/
    height: 90%;
    overflow: auto;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.1;
  }
  .text{
    text-align: left;
    padding: 2rem 4rem;
    position: relative;
    font-size: 1.4rem;
    line-height: 3rem;
    color: rgb(19,63,106);
  }
  .text .label-item{
    display: inline-block;
    text-align: right;
  }
  .text-item{

  }
  .resultbutton{
    margin-top: 5rem;
    /*position: absolute;*/
    /*left: 29.375rem;*/
    /*top: 56rem;*/
    width: 11.75rem;
    height: 4.125rem;
    border: 0.125rem white solid;
    background: rgba(255, 255, 255, 0);
    color: white;
    font-size: 2rem;
    font-style: normal;
  }
  .resultbutton02{
    margin-top: 2rem;
    /*position: absolute;*/
    /*left: 29.375rem;*/
    /*top: 56rem;*/
    width: 11.75rem;
    height: 4.125rem;
    border: 0.125rem white solid;
    background: rgba(255, 255, 255, 0);
    color: white;
    font-size: 2rem;
    font-style: normal;
  }
  .footer{
    position: absolute;
    width: 100%;
    left: 0;
    /*left: 23.4375rem;*/
    bottom: 3rem;
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
</style>
