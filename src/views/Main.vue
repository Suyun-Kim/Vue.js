<template>
  <div class="smart-wrap">
    <left-layout></left-layout>
    <middle-layout></middle-layout>
    <right-layout></right-layout>


  </div>
</template>

<script>
import LeftLayout from "../components/layout/LeftLayout";
import MiddleLayout from "../components/layout/MiddleLayout";
import RightLayout from "../components/layout/RightLayout";
import ListMixins from "../mixins/ListMixins";

export default {
  name: "main",
  components: {
    LeftLayout,
    MiddleLayout,
    RightLayout
  },
  mixins:[ListMixins],
};
</script>

<style scoped></style>
