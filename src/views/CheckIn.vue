<template>
  <div>
    <h1>{{ userInfo.name }}님 환영합니다.</h1>
    <button @click="$store.dispatch('logout')">로그아웃</button>
    <p>{{ getDateAndTime(createdAt) }}</p>
  </div>
</template>

<script>
import { mapState /*, mapActions*/ } from "vuex";
import { dateFormat } from "./../mixins/dateFormat";

export default {
  data: () => ({
    createdAt: null
  }),
  computed: {
    ...mapState(["userInfo"])
  },
  mixins: [dateFormat],
  created() {
    this.createdAt = new Date();
  }
  // methods: {
  //   ...mapActions(['logout'])
  // }
};
</script>
