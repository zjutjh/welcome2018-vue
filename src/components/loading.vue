<template>
    <div class="modal" v-if="loading">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "loading",
      props: ['loading']

    }
</script>

<style scoped>
  .modal {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    z-index: 5000;
  }

  .spinner {
    width: 40px;
    height: 40px;

    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate( -50%, -50%);
    -moz-transform: translate( -50%, -50%);
    -ms-transform: translate( -50%, -50%);
    -o-transform: translate( -50%, -50%);
    transform: translate( -50%, -50%);
  }

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ffffff;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
    animation: sk-bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes sk-bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
  }

</style>
