<template>
  <div class="start-page">
    <headerBar></headerBar>
    <div class="start-page-wrapper">
      <div class="forum"></div>
      <div class="userInfo-card">1</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import headerBar from  '../../components/headerBar/index.vue'

</script>

<style lang="scss" scoped>
.start-page {
  background-color: #ccc;
  .start-page-wrapper {
    display: flex;
    justify-content: space-between;
    padding-top: 2.5311rem;
    margin: 0 auto;
    width: 80%;
    height: 1153.286rem;
    background-color: #fff;
    .forum {
      border: 1px solid #000;
      flex: 1;
      margin-right: 1.0657rem;
      height: 7.46rem;
    }
    .userInfo-card {
      
      border: 1px solid #000;
      width: 13.3215rem;
      height: 7.46rem;
    }
  }
}
</style>
