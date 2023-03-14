<template>
    <div class="page1">
      <!-- 图片横幅 -->
      <div class="banner">
        <div class="banner-img">
          <el-image :src="url" lazy></el-image>
        </div>
        <div class="banner-title">
          <h1>{{ this.development.banner_title }}</h1>
          <p>--{{ this.development.banner_desc }}--</p>
        </div>
      </div>
      <!-- body -->
      <div class="body">
        <div class="content">
          <div class="content-header">
            <h2>{{ this.development.description_title }}</h2>
            <p>————</p>
            <p>{{ this.development.description_desc }}</p>
            <el-skeleton v-show="getTextFlag" :rows="5" animated/>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'indexDevelopment',
  components: {
  },
  data () {
    return {
      url: require('../../../assets/img/index/index_development.jpg'),
      // 发展历程文字
      development: '',
      // 获取文字失败标志位
      getTextFlag: false
    }
  },
  created () {
    this.getText()
  },
  methods: {
    // 获取文字
    async getText () {
      const { data: res } = await this.$http.get('/web/descriptions')
      if (res.status !== 200) {
        // 获取失败
        this.$message.error('获取失败')
      } else {
        // this.$message.success('获取首页文字成功')
        // index_development寻找对应文字
        for (var i = 0; i < res.data.list.length; i++) {
          if (res.data.list[i].description_name === 'index_development') {
            this.development = res.data.list[i]
            // console.log(this.development)
            break
          }
        }
      }
    }
  }
}
</script>
  <style lang="less" scoped>
  .banner {
    width: 100%;
    height: 400px;
    // height: 100%;
    // display: flex;
    position: relative;
    overflow: hidden;
    background-color: #fff;

    .el-image{
      filter:blur(2px);
      //position: absolute;
      width: 100%;
    }

    &-title {

      width: 100%;
      h1{
      position: absolute;
      color: #fff;
      font-size: 50px;
      font-weight: bold;
      //left: 30%;
      top: 30%;
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

  .body{
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
    position: relative;
    overflow: hidden;
  }
  .content{
    width: 1080px;
    margin: 0 auto;//上下外边距0 左右auto居中
    .content-header{
      margin: 50px 0;
      p{
        text-indent: 25px;
        line-height: 35px;
      }
    }
  }
  </style>
