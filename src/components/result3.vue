<template>
  <div class="content">
    <div class="logo">
      <img class="logo1" src="../../UI/logo.png">
    </div>
    <div class="resultpage">
     <!-- <div class="schoollogo">
        <img class="logo2" src="../../UI/校徽.png">
      </div> -->
      <div class="text" id="text">
        <table>
          <thead>
          <tr>
            <th>姓名</th>
            <th>省份</th>
            <th>班级</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in classmates" >
            <td>{{ item.name }}</td>
            <td>{{ item.hometown }}</td>
            <td>{{ item.class }}</td>
          </tr>
          </tbody>
        </table>

      </div>
    </div>
    <p class="cr">©浙江工业大学精弘网络</p>
    <loading :loading="loading"></loading>
  </div>
</template>

<script>
    import Loading from './loading'
    export default {
        name: "result3",
        mounted: async function(){
        this.loading = true;
        await this.$http.post('/api/main/detail/classmate', {id_card: this.$route.params.iid}).then(res => {
          if (res.body.code < 0) {
            alert(res.body.error)
            return
          }
          this.classmates = res.body.data.classmates
        })
        this.loading = false;
      },
      components: {Loading},
        data() {
        return {
          data: {},
          loading: false,
          classmates: [
          ]
        }
      },
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
    height: 50%;
    width: 80%;
    background-color:rgba(255,255,255,0.5);
    border-radius:1.5rem;
    box-shadow: 0.25rem 0.25rem 1rem #888888;
    overflow: auto;
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
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    font-size:2.1rem;
    line-height: 3rem;
    color: rgb(19,63,106);
  }
  table {
    width: 100%;
    height: 100%;
  }
  .cr{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    color: #6585be;
    font-size: 1.75rem;
  }
</style>
