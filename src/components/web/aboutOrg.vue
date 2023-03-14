<template>
  <div id="homePage-2">
    <div class="part-title">
      <h3>{{ organization.description_title }}</h3>
      <h4>{{ organization.description_name }}</h4>
      <p>{{ organization.description_desc }}</p>
    </div>
    <div class="part-content">
      <div class="part-swiper">
        <div class="swiper-left">
          <h3>{{ picList.product_title }}</h3>
          <span class="Grader"></span>
          <p>{{ picList.product_desc }}</p>
          <p>{{ picList.product_sub_desc }}</p>
        </div>
        <div class="swiper-right">
          <!-- <img src="../../../assets/img/index/framework1.jpg" >  -->
          <el-image :src="picList.cover_img" lazy></el-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mock from 'mockjs'
export default {
  name: 'org',
  data () {
    return {
      organization: {
        description_name: 'Organization',
        description_title: '组织架构',
        description_desc: '中心创建于2022年(原名xx部xx中心),下设:香港、九龙两地数据中心,隶属xxx'
      },
      picList: {
        cover_img: Mock.Random.dataImage('800x400'),
        product_title: '科室分布',
        product_desc: '',
        product_sub_desc: ''
      }
    }
  },
  created () {
    this.getText()
    this.getPicture()
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
        // 寻找对应文字
        // console.log(res.data.list)
        for (var i = res.data.list.length - 1; i >= 0; i--) {
          if (res.data.list[i].description_name === 'Organization') {
            this.organization = res.data.list[i]
            break
          }
        }
      }
    },
    // 获取图片
    async getPicture () {
      const { data: res } = await this.$http.get('/web/pictures')
      if (res.status !== 200) {
        // 获取失败
        this.$message.error('获取失败')
      } else {
        // this.$message.success('获取首页文字成功')
        // 寻找活动对应文字
        for (var i = 0; i < res.data.list.length; i++) {
          if (res.data.list[i].id === '13') {
            this.picList = res.data.list[i]
            // console.log(this.picList)
            break
          }
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.customer_header{
  background-color: rgba(255, 255, 255, .7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eff0f1;
}
.box {
  padding-top: 60px;
}
#homePage-2 {
  width: 100%;
  height: 100%;
  padding: 100px 0 100px 0;
  // padding-top: 120px;
  // padding-bottom: 120px;
  // background: url("../../../assets/img/index/bg_diandian.png") center no-repeat,
  //             linear-gradient(to right,#fff 0,#f1f2f6 100%);
  background-size: cover;

  // margin-bottom: 120px;
}
.part-title {
  position: relative;
  width: 100%;
  margin-bottom: 65px;
  -webkit-transition: all 1s;
  transition: all 1s;
  text-align: center;
  h3 {
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 700;
    color: #14679f;
    //color: #072c69;
  }
  h4 {
    color: #14679f;
  }
  p {
    font-size: 16px;
    color: #acadb3;
    text-indent: 16px;
    line-height: 17px;
  }
}
.part-content {
  position: relative;
  padding-bottom: 60px;
  .part-swiper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 35px
  }
  .swiper-left {
    margin: auto;
    text-align: left;
    h3 {
      font-size: 20px;
      font-weight: 700;
      color: #072c69;
    }
    .Grader {
      display: inline-block;
      min-width: 83px;
      height: 2px;
      margin: 10px 0;
      margin-top: 15px;
      margin-bottom: 30px;
      background: linear-gradient(to right,#2c74d5 0,#75daef 100%);
      background-size: cover;
    }
    p {
      font-size: 14px;
      line-height: 25px;
      max-width: 410px;
      text-indent: 25px;
      // text-align: left;
      color: #95969d;
    }
  }
  .swiper-right {
    margin: auto;
    box-shadow: -20px 20px 40px #ccc;
    width: 800px;
  }
}
</style>
