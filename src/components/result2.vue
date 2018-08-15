<template>
  <div class="content">
    <div class="logo">
      <img class="logo1" src="../../UI/logo.png">
    </div>
    <div class="resultpage">
      <div class="schoollogo">
        <img class="logo-background" src="../../UI/校徽.png">
      </div>
      <div class="text">
        <p class="text-item"><span class="label-item">姓名：</span>{{ data.student.name}}</p>
        <p class="text-item"><span class="label-item">学号：</span>{{ data.student.student_id}}</p>
        <p class="text-item"><span class="label-item">班级：</span>{{data.student.class}}</p>
        <p class="text-item"><span class="label-item">班主任：</span>{{data.student.head_teacher}}</p>
        <p class="text-item" v-if="data.qq_groups.length > 0"><span class="label-item">家乡群：</span>{{data.qq_groups.qq_group}}</p>
      </div>
    </div>
    <button class="resultbutton02" name="result102" v-on:click="inToresult3" >班级信息</button>
    <div class="footer">
      <div class="tip">
          <p slot="title">小贴士</p>
          <p v-html="tip"></p>

      </div>
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
    mounted: async function () {
      var _this = this
      this.loading = true
      const code = this.$route.query.stdcode
      await this.$http.post('/api/main/detail', {stdcode: code}).then(res => {
        if (res.body.code < 0) {
          alert(res.body.error)
          return
        }
        this.data = res.body.data
      })
      await this.$http.post('/api/main/tips').then(function(res) {
        _this.tip = res.body.data.tip.content;
      });
      this.loading = false;
    },
    data() {
      return {
        data: {
          student: {
            name: "",
            id_card: "",
            hometown: "",
            student_id: "",
            class: "",
            head_teacher: ""
          },
          qq_groups: []
        },
        loading: true,
        tip: '',
        code: ''
      }
    },
    methods:{
      inToresult3 () {
        this.loading = true;
        this.$router.push({
          name: 'result3',
          params: {
            iid: this.data.student.id_card
          }
        })
      },
      getData: async (stdcode) => {
        await this.$http.post('/api/main/detail', {stdcode: stdcode}).then(res => {
          if (res.body.code < 0) {
            alert(res.body.error)
            return
          }
          this.data = res.body.data
        })
      }
    }
  }
</script>

<style scoped>
  .content{
    /*position: absolute;*/
    box-sizing: border-box;
    padding: 1px;
    margin: 0;
    width: 100%;
    height: 100%;
    /*height: 83.3125rem;*/
    /*width: 46.875rem;*/
    background-image: linear-gradient(120deg, #5694dc 0%, #c2e9fb 90%);
  }
  .logo{
    margin-top: 9rem;
  }
  .logo1{
    /*position: relative;*/
    /*top: 9rem;*/
    width:24%;
    height:24%;
  }
  .resultpage{
    margin-top: 3rem;
    position: relative;
    /*top:15rem;*/
    margin-left: auto;
    margin-right: auto;
    height: 30%;
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
    position: relative;
    font-size:2.1rem;
    line-height: 2rem;
    color: rgb(19,63,106);
  }
  .text .label-item{
    display: inline-block;
    width: 12rem;
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

    width: 100%;

  }
  .tip{
    font-size: 2rem;
    border-radius: 1rem;
    background: rgba(255,255,255,.6);
    margin: 0 5rem;
  }
  .cr{
    text-align: center;
    color: #6585be;
    font-size: 1.75rem;
  }
</style>
