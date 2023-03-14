<template>
  <div class="banner" >
    <div class="banner-bg" :style="{ background:`url('${imgUrl}')  no-repeat` }">
    </div>
    <div class="banner-title">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bannerTitle',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
      // default: require('./banner1.jpg')
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 420px;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  background-size: cover;
  .banner-bg{
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(2px);
  }
  &-title {
    width: 100%;
    h1{
    position: absolute;
    color: #fff;
    font-size: 50px;
    font-weight: bold;
    top: 40%;
    text-align: center;
    width: 100%;
    }
    p{
      position: absolute;
      color: #fff;
      font-size: 20px;
      font-weight: 300;
      top: 60%;
      text-align: center;
      width: 100%;
    }
  }
}
</style>
