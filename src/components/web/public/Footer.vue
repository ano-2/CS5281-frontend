<template>
  <div class = "footer_container" :style="footerHeight + 'px'">
    <div class = "footer_content">
      <div class = "footer_logo footer-content-column">
        <div class = "logo-container">
          <img :src = "logo_url" alt = "">
          <!-- <div class="logo-text">
            <p class="text1">招商银行</p>
            <p class="text2">数据中心-企业文化</p>
          </div> -->
        </div>
        <h2>© 2022 cityU</h2>
      </div>
      <div class = "about_us footer-content-column">
        <h2>常用链接</h2>
        <ul class = "about_list">
          <li>
            <el-link href = "" target="_blank">中心门户</el-link>
          </li>
          <li>
            <el-link href = " " target="_blank">事件及应急平台</el-link>
          </li>
          <li>
            <el-link href = "" target="_blank">值班管理系统</el-link>
          </li>
        </ul>
      </div>
      <div class = "contact_us footer-content-column">
        <h2>产品列表</h2>
        <ul class = "contact_list">
          <li v-for = "(item,index) in proList" :key = "index">
            <el-link :href="item.path" >{{ item.name }}</el-link>
          </li>
        </ul>
      </div>
      <div class = "contact_us footer-content-column">
        <h2>产品列表</h2>
        <ul class = "contact_list">
          <li v-for = "(item,index) in proList1" :key = "index">
            <el-link :href="item.path" target="_blank">{{ item.name }}</el-link>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class = "focus_us footer-content-column">
        <h2>活动咨询与使用故障</h2>
        <div class = "media">
          <div class = "item.name">
            <el-popover
              placement = "top"
              trigger = "hover">
              <div class = "qr_popover">
                <!-- <img :src = "logo_url" alt = ""> -->
                <h4>活动咨询</h4>
                <p>000000/ano</p>
                <br>
                <h4>技术支持</h4>
                <p>000000/ano</p>
                <p>000000/ano</p>
              </div>
              <img :src = "zhaohu_url" alt = "" slot = "reference">
            </el-popover>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footerHeight: '',
      curWidth: '',
      logo_url: require('../../../assets/img/index/cityU_Logo_White.png'),
      zhaohu_url: require('../../../assets/img/focus/weixin.svg'),
      proList: [
        {
          name: '云管（办公网）',
          path: 'http://baidu.com'
        },
        {
          name: '应用管理平台',
          path: 'http://baidu.com'
        },
        {
          name: 'xx运维平台',
          path: 'http://baidu.com'
        }
      ],
      proList1: [
        {
          name: '流程服务系统',
          path: 'http://baidu.com'
        },
        {
          name: '智能网络平台',
          path: 'http://baidu.com'
        },
        {
          name: 'xxxx',
          path: 'http://baidu.com'
        }
      ]
    }
  },
  methods: {
    // setFooterHeight () {
    //   this.curWidth = window.innerWidth
    //   if (this.curWidth <= 991) {
    //     this.footerHeight = 570 + 'px'
    //   } else {
    //     this.footerHeight = 280 + 'px'
    //   }
    // }
  },
  created () {
    // 页面创建时执行一次getHeight进行赋值，顺道绑定resize事件
    // window.addEventListener('resize', this.setFooterHeight)
    // this.setFooterHeight()
  }
}
</script>

<style lang = "less" scoped>
*{
  margin: 0;
  padding: 0;
}
h2{
  font-size: 100%;
  font-weight: 400;
  font-variant: normal;
}
.footer_container {
  width: 100%;
  background: #1f2329;
  padding-bottom: 30px;
}

.footer_content {
  max-width: 1440px;
  color: #fff;
  margin: 0 auto;
  padding: 50px 0 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  h2 {
    font-size: 14px;
    line-height: 22px;
    margin: 4px 0;
    color: #7b7e81;
  }

  .line{
    width: 1px;
    height: 130px;
    background-color: #fff;
  }

  .footer-content-column {
    flex: 1 1;
    color: #d2d3d4;
    position: relative;
    text-align: center;

    h2 {
      margin-bottom: 18px;
      font-size: 16px;
      font-weight: bold;
    }

    .about_list, .contact_list {
      text-align: center;
      font-size: 14px;
      line-height: 22px;

      li {
        margin-bottom: 15px;
      }

      a {
        color: #d2d3d4;
      }
    }
  }

  .about_us, .contact_us {
    max-width: 202px;
  }

  .focus_us {
    text-align: left;
    padding-left: 73px;

    .media {
      margin-top: 18px;
      display: flex;
    }

    span {
      margin-right: 18px;
      flex: 0 0 auto;
    }

    img {
      width: 32px;
    }

    .weixin img {
      width: 38px;
      position: relative;
      top: -2px;
    }

    h2 {
      text-align: left;
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 4px;
    }
  }

  .footer_logo {
    margin-left: 96px;
    height: 55px;
    text-align: left;
    max-width: 382px;
    min-width: 350px;

    h2 {
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 4px;
    }

    .logo-container {
      display: flex;
      margin-bottom: 9px;
      img {
        height: 50px;
      }
      .logo-text{
        margin-left: 15px;
        position: relative;
        bottom: -6px;
      }
      .text1{
        font-size: 21px;
        font-weight: bold;
        margin: 0;
      }
      .text2{
        font-size: 12px;
        margin: 0;
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .footer_content {
    flex-direction: column;

    .footer-content-column {
      text-align: center;
      margin: 0 auto 0;

      h2 {
        text-align: center;
      }
      padding-left: 0;
    }
    .focus_us div:last-of-type > span{
      margin-right: 0;
    }
    .media{
      justify-content: center;
    }
    .logo-container{
      justify-content: center;
      text-align: left;
    }
  }
}

.qr_popover {
  width: 100%;
  text-align: center;

  img {
    width: 130px;
    height: 130px;
    margin-bottom: 10px;
  }
}
</style>
