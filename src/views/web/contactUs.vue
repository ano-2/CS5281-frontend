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
              联系我们
            </p>
            <p class="eTitle">
              Contact Us
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
              <div class="name">
                <el-card class="box-card">
                  <el-form label-position="top" :model="contact" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="your email" prop="pass">
                      <el-input v-model="contact.name"  autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="message" prop="checkPass">
                      <el-input
                        type="textarea"
                        :rows="8"
                        placeholder="Say something......"
                        v-model="contact.msg">
                      </el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" >submit</el-button>
                      <el-button >reset</el-button>
                    </el-form-item>
                  </el-form>
                </el-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AwFooter />
  </div>
</template>

<script>
import AwHeader from '../../components/web/public/Header'
import AwFooter from '../../components/web/public/Footer'
import bannerTitle from '../../components/web/bannerTitle'
export default {
  name: 'About',
  components: {
    AwFooter,
    AwHeader,
    bannerTitle

  },
  data () {
    return {
      contact: {
        msg: '',
        name: ''
      },
      url: require('../../assets/img/about_banner.png'),
      urlContent1: require('../../assets/img/banner3.jpg'),
      intro: ' ',
      introPic: {
        cover_img: require('../../assets/img/banner2.jpg'),
        product_sub_desc: 'Please leave your email and message',
        product_desc: 'To save your valuable time and improve the efficiency of our services.Please leave your email and message'
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
  },
  methods: {

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
              input{
                border: 2px solid #14679f;
              }

            }
        }
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
