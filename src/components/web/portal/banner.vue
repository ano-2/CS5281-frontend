<template>
  <div>
    <div class="slide">
      <el-carousel trigger="click" height="300px">
        <el-carousel-item v-for="(item,index) in List" :key="index" autoplay = "true">
          <div class="title">
            <h3>{{ item.product_title }}</h3>
          </div>
          <img class = "element_img" alt = "" :src = "item.cover_img">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="value">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    List: {
      // 对象或数组默认值必须从一个工厂函数获取 default: () => []
      type: Array,
      default: () => [1, 2, 3, 4]
    },
    description: {
      type: String,
      default: '招商银行云数据中心创建于2005年(原名信息技术部运行中心),下设:深圳、上海两地数据中心,隶属招商银行总行信息技术部，承担着全行的信息系统生产运行,系统网络管理，大中型主机及开放平台系统管理和设备管理等工作。'
    }
  }
}
</script>

<style lang="less">

.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}
.slide{
  position: relative;
  .title{
    position: absolute;
    //bottom: 5%;
    width: 100%;
    height: 100%;
    line-height: 35px;
    color: #fff;
    background: rgba(0, 0, 0, .15) no-repeat center;
    text-align: center;
  }
  // h3{
  //   position: absolute;
  //   top: 50%;
  //   left:50%;
  //   transform: translate(-50%,-50%);
  //   color: #fff;
  //   font-size: 20px;
  //   //opacity: 0.75;
  //   line-height: 250px;
  //   text-align: center;
  // }
  .element_img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.value{
  display: flex;
  padding: 10px;
  text-indent: 2em;
  line-height: 2em;
}
</style>
