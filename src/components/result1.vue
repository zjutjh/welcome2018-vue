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
        <p class="text-item"><span class="label-item">学号：</span>{{ data.student.id_card}}</p>
        <p class="text-item"><span class="label-item">班级：</span>{{ data.student.class}}</p>
        <p class="text-item"><span class="label-item">班主任：</span>{{ data.student.head_class}}</p>
        <p class="text-item"><span class="label-item">家乡群：</span>{{ data.qq_groups.qq_group}}</p>
      </div>
    </div>
    <button class="resultbutton" name="result1" v-on:click="inToresult2" v-loading.fullscreen.lock="fullscreen">寝室信息</button>
    <div class="footer">
      <p class="cr">©浙江工业大学精弘网络</p>
    </div>

  </div>

</template>

<script>
    import router from '../router/index.js'

    export default {
      name: "result1",
      created() {
        this.loading = true;
        this.data = this.$route.params.data.body.data;
        console.log(this.data);
        this.loading = false;
      },
      data() {
        return {
          data: {name:'test'},
          loading: false
        }
      },
      methods:{
        inToresult2()
        {
          alert("未到查询时间！")
          /*
          this.loading = true;
          let _this = this;
          this.$http.post('http://localhost/new-stu/stu-api/test.php',{name: _this.name, pass: _this.pass},
          {emulateJSON: true}
          ).then(function (res){
            router.push({
              name: 'result2',
              params: {
                data: res
              }
            })
          */
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
    margin-top: 10rem;
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
    padding: 2rem 0;
    position: relative;
    font-size:2.1rem;
    line-height: 3rem;
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
  .footer{
    position: absolute;
    width: 100%;
    left: 0;
    /*left: 23.4375rem;*/
    bottom: 3rem;
  }
  .tip{
    font-size: 2rem;
  }
  .cr{
    text-align: right;
    padding-right: 3rem;
    color: #6585be;
    font-size: 1.75rem;
    margin: 0;
  }
</style>
