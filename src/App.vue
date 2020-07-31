<template>
  <div id="app">
    <router-view />
    <spinner :loading="LoadingStatus"></spinner>
  </div>

</template>

<script>
  import Spinner from './components/spinner/Spinner.vue'
  import bus from './utils/bus.js';

  export default {
    components: {
      Spinner
    },
    data(){
      return {
        LoadingStatus : false,
      }
    },
    methods:{
      startSpinner(){
        this.LoadingStatus = true;
      },
      endSpinner(){
        this.LoadingStatus = false;
      }
    },
    created(){
      bus.$on('start:spinner', this.startSpinner);
      bus.$on('end:spinner', this.endSpinner);
    },
    beforeDestroy(){
      bus.$off('start:spinner');
      bus.$off('end:spinner');
    },
  }
</script>
<style>
@import "./assets/css/jquery.mCustomScrollbar.css";
@import "./assets/scss/import.css";
</style>
