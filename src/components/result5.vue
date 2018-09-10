<template>
  <div class="content">
    <div class="logo">
      <img class="logo1" src="../../UI/logo.png">
    </div>
    <div class="result">
      <div class="resultpage">
        <!-- <div class="schoollogo">
           <img class="logo2" src="../../UI/校徽.png">
         </div> -->
        <div class="text" id="text">
          <table>
            <thead>
            <tr>
              <th>姓名</th>
              <th>班级</th>
              <th>床号</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in roommates" >
              <td>{{ item.name }}</td>
              <td>{{ item.class }}</td>
              <td>{{ item.bed }}</td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
    <p class="cr">©浙江工业大学精弘网络</p>
    <!--<loading :loading="loading"></loading>-->
  </div>
</template>

<script>

  import Loading from './loading'

  export default {
    name: "result5",
    mounted: async function(){
      this.loading = true;
      await this.$http.post('https://query.zjutjh.com/api/main/dormitory/roommate', {id: this.$route.params.iid}).then(res => {
        if (res.body.code < 0) {
          alert(res.body.error)
          return;
        }
        this.roommates = res.body.data.roommates
      })
      this.loading = false;
    },
    components: {Loading},
    data() {
      return {
        data: {},
        loading: false,
        roommates: [
        ]
      }
    },
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
    width: 100%;
    min-height: 100%;
    /*padding: 0;*/
    /*margin: 0;*/
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
    position: relative;
    margin: 2rem auto;
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
    font-size: 1.4rem;
    line-height: 3rem;
    color: rgb(19,63,106);
  }
  table {
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
  }
  .cr{
    text-align: right;
    padding-bottom: 2rem;
    margin: 3rem 3rem 0;
    color: #6585be;
    font-size: 1.2rem;
  }
</style>
