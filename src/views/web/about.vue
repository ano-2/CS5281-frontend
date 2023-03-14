<template>
  <div class="customer">
    <AwHeader
      ref="customer_header"
      class="header"
    />
    <!-- banner -->
    <div class="bannertop">
      <bannerTitle :imgUrl="url" title="关于我们" description="About us" />
    </div>
    <el-divider class="el-divider-active">
      <i class="el-icon-arrow-down el-icon-arrow-down-active" />
    </el-divider>
    <!-- div关于我们 -->
    <div class="about" id="intro" ref="intro">
      <div class="about-content">
        <div class="content1">
          <div class="title">
            <p class="title">
              {{ intro.description_title }}
            </p>
            <p class="eTitle">
              {{ intro.description_name }}
            </p>
          </div>
          <div class="content1-body">
            <div class="content1-left">
              <p class="des">
                {{ introPic.product_desc }}
              </p>
              <p class="des">
                {{ introPic.product_sub_desc }}
              </p>
              <p class="des">
                {{ introPic.product_link }}
              </p>
            </div>
            <div class="content1-right">
              <el-image
                :src="introPic.cover_img"
                lazy
                fit="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- div价值观 -->
    <div class="content2" id="opinin" ref="opinin">
      <!-- 标题 -->
      <div class="content2-header">
        <p class="title">{{ opinin.description_title }}</p>
        <p class="eTitle">{{ opinin.description_name }}</p>
        <p class="des">{{ opinin.description_desc }}</p>
      </div>
      <!-- body区 -->
      <div class="content2-body">
        <!-- 每个观念图标 -->
        <div v-for="(i, index) in iconList.slice(0, 3)" :key="index" class="olist">
          <div class="opinin-item">
            <div>
              <img :src="i.path" alt="" lazy>
            </div>
          </div>
          <h2>{{ i.opinin }}</h2>
          <p>{{ i.description }}</p>
        </div>
      </div>
      <div class="content2-body">
        <!-- 每个观念图标 -->
        <div v-for="(i, index) in iconList.slice(3, 6)" :key="index" class="olist">
          <div class="opinin-item">
            <div >
              <img :src="i.path" alt="" lazy>
            </div>
          </div>
          <h2>{{ i.opinin }}</h2>
          <p>{{ i.description }}</p>
        </div>
      </div>
    </div>
    <Org id="org" ref="org"></Org>
    <AwFooter />
  </div>
</template>

<script>
import AwHeader from '../../components/web/public/Header'
import AwFooter from '../../components/web/public/Footer'
// import Brief from '../../../components/web/about/page1'
import Org from '../../components/web/aboutOrg'
import bannerTitle from '../../components/web/bannerTitle'
// import bannerTitle from './bannerTitle'
export default {
  name: 'About',
  components: {
    AwFooter,
    AwHeader,
    bannerTitle,
    // Brief,
    Org
  },
  data () {
    return {
      url: require('../../assets/img/about_banner.png'),
      urlContent1: require('../../assets/img/banner3.jpg'),
      iconList: [
        {
          opinin: '责任',
          description: '主人翁精神，最高标准',
          path: require('../../assets/img/index/zeren.png')
        },
        {
          opinin: '主动',
          description: '好奇求知，刨根问底',
          path: require('../../assets/img/index/zhudong.png')
        },
        {
          opinin: '稳健',
          description: '决策正确，敢于谏言，服从大局',
          path: require('../../assets/img/index/wenjian.png')
        },
        {
          opinin: '高效',
          description: '崇尚行动，控制成本',
          path: require('../../assets/img/index/gaoxiao.png')
        },
        {
          opinin: '开放',
          description: '选贤育能，赢得信任',
          path: require('../../assets/img/index/kaifang.png')
        },
        {
          opinin: '创新',
          description: '创新简化，远见卓识',
          path: require('../../assets/img/index/chuangxin.png')
        }
      ],
      intro: ' ',
      introPic: {
        cover_img: require('../../assets/img/banner2.jpg'),
        product_sub_desc: '本含义组织架构(Organizational Structure)是指',
        product_desc: '本含义组织架构(Organizational Structure)是指，一个组织整体的结构。是在企业管理要求、管控定位、管理模式及业务特征等多因素影响下，在企业内部组织资源、搭建流程、开展业务、落实管理的基本要素'
      }, // 介绍右侧的图片
      opinin: {
        description_title: '核心价值观',
        description_name: 'Opinin',
        description_desc: '一直以来，秉承着“责任、主动、稳健、高效、开放、创新”的核心价值观'
      }
    }
  },
  mounted () {
    this.$store.commit('setHeaderLogo', {
      headerLogoShow: false
    })
    this.$store.commit('setShadowActive', {
      headerShadowActive: false
    })
    this.$store.commit('setNavDarkActive', {
      navDarkActive: true
    })
    this.$store.commit('setHeaderShow', {
      headerShow: false
    })
  },
  created () {
    this.getText()
    // this.getPicture()
  },
  methods: {
    // 获取文字
    async getText () {
      const { data: res } = await this.$http.get('/web/descriptions')
      if (res.status !== 200) {
        // 获取失败
        this.$message.error('获取失败')
      } else {
        console.log(res.data.list)
        // this.$message.success('获取首页文字成功')
        // index_development寻找对应文字
        for (let i = res.data.list.length - 1; i >= 0; i--) {
          if (res.data.list[i].description_name === 'Introduction') {
            this.intro = res.data.list[i]
            console.log(this.intro)
            break
          }
        }
        for (let i = res.data.list.length - 1; i >= 0; i--) {
          if (res.data.list[i].description_name === 'Opinin') {
            this.opinin = res.data.list[i]
            console.log(this.opinin)
            break
          }
        }
      }
    },
    // 获取图片列表
    async getPicture () {
      const { data: res } = await this.$http.get('/web/pictures')
      if (res.status !== 200) {
        // 获取失败
        this.$message.error('获取失败')
        // this.imgList1 = this.imgList
      } else {
        // this.$message.success('获取pictures成功')
        for (var i = res.data.list.length - 1; i >= 0; i--) {
          if (res.data.list[i].id === '12') {
            this.introPic = res.data.list[i]
            break
          }
        }

      // console.log(this.introPic);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  background-color: rgba(255, 255, 255, .7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eff0f1;
}
.bannertop{
  padding-top: 60px;
}
.about {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  .about-content{
    width: 1440px;
    margin: 0 auto;//上下外边距0 左右auto居中
    background-color: #fff;
    .content1{
        padding: 50px 0;
        justify-content: space-around;

        .content1-body{
            margin-top: 80px;
            display: flex;
            justify-content: space-around;
            .content1-left {
            width: 650px;
              .des {
                  color: #000000;
                  font-size: 17px;
                  text-indent: 25px;
                  line-height: 35px;
                }
            }

            .content1-right{
                width: 580px;
                height: 100%;
                border: 2px solid #14679f;
                border-radius: 10px;
                .el-image {
                    margin: 10px;
                }
            }
        }
    }
  }
}
.content2{
    padding: 70px 0;
    justify-content: space-around;
    text-align: center;
    background-color: #F5F5F5;
    .content2-header{
      width: 630px;
      margin: 0px auto 0 auto;
      //margin: 0 auto;
    }
    .des{
        margin-top: 30px;
        margin-bottom: 70px;
        font-size: 17px;
        color: #646a73;
        font-weight: 500;
    }
    //content2 body 区
    .content2-body{
        width: 1440px;
        //margin: 0 auto;//上下外边距0 左右auto居中
        margin: 90px auto 0 auto;// 上70 下外边距0 左右auto居中
        display: flex;
        justify-content: space-around;
        text-align: center;
        // 每个观念图标
        .olist{
          width: 250px;
          .opinin-item{
            width: 112px;
            border-radius: 50%;
            left: 50%;
            position: relative;
            transform: translateX(-50%);
            transition: .4s ease-in-out;
          }
          .opinin-item:hover{
            transform: scale(1.1) translateY(-2px);
            box-shadow: 0 6px 20px 0 rgba(0, 0, 0, .15);
            left: 50%;
            position: relative;
            transform: translateX(-50%);
          }
          p{
            font-size: 17px;
            color: #646a73;
            font-weight: 500;
          }
            //justify-content: space-around;
            //border-radius: 50%;
            //margin-bottom: 40px;
            //display: flex;
            //align-items: center;
            //transition: .3s;
        }
    }
}
//公共CSS
.title{
  font-size: 35px;
  color: #14679f;
  text-align: center;
  font-weight: bold;
}
.eTitle {
  font-size: 17px;
  color: #14679f;
  //padding: 10px 0;
  text-align: center;
}
</style>
