<template>
  <div>
    <AwHeader class="customer_header" ref="customer_header"></AwHeader>
    <div class="box">
      <BannerTitle :imgUrl="url" :title="banner" description="DataCenter honor"></BannerTitle>
    </div>
    <!-- 主体内容 start -->
    <div class="w">
      <!-- 顶置 start  -->
      <div class="top">
        <router-link :to="`/honor/${videoList[0].news_path}`">
          <div class="top-left">
            <el-image :src="videoList[0].cover_img" style="width: 600px; height: 100%" lazy></el-image>
            <div class="info">
              <h2>{{ videoList[0].news_title }}</h2>
              <p>{{ videoList[0].news_desc }}</p>
              <p>{{ videoList[0].publish_time }}</p>
              <el-button type="primary">详细信息</el-button>
            </div>
          </div>
        </router-link>
        <div class="top-right">
          <el-timeline>
            <el-timeline-item v-for="(i, index) in videoList.slice(0,2)" :key="index" :timestamp="i.publish_time"
              placement="top">
              <el-card>
                <h4>{{i.news_title}}</h4>
                <p>{{i.publish_time}}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
      <!-- 顶置 end -->
      <!-- 视频列表 start -->
      <div class="list">
        <el-page-header @back="goBack" :content="banner" title="首页"></el-page-header>
        <ul>
          <li v-for="v in videoList.slice(1)" :key="v.title">
            <router-link :to="`/honor/${v.news_path}`">
              <el-image :src="v.cover_img" style="width: 100%; height: 190px"></el-image>
              <div class="desc">
                <h3>{{ v.news_title }}</h3>
                <span>
                  <p>{{ v.news_desc }}</p>
                </span>
                <span>{{ v.publish_time }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 视频列表 end -->
    </div>
    <!-- 主体内容 end -->
    <AwFooter></AwFooter>
  </div>
</template>

<script>
import AwHeader from '../../components/web/public/Header'
import AwFooter from '../../components/web/public/Footer'
import BannerTitle from '../../components/web/bannerTitle'
export default {
  name: 'honor',
  components: {
    AwFooter,
    AwHeader,
    BannerTitle
  },
  data () {
    return {
      banner: '中心荣誉',
      url: require('../../assets/img/honor_banner.png'),
      videoList: [
        {
          news_title: '暂无数据',
          news_desc: '暂无数据',
          author: '----/---',
          time: '2021-12-14'
        }
      ],
      setTop: {}, // 最新一条
      pageInfo: {
        activeName: '3',
        // 当前页码
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 10,
        selectDate: ''
      }
    }
  },
  methods: {
    async getNewsItems () {
      const { data: res } = await this.$http.get('/web/newslist', { params: this.pageInfo })
      if (res.status !== 200) {
        this.videoList = []
        this.$message.error('获取失败,请重试或检查网络连接！')
      } else {
        // this.$message.success('获取成功')
        this.setTop = res.data.list[0]
        this.videoList = res.data.list
        // if (this.newsItems.total <= this.newsItems.limit) {
        //   this.singlePage = true
        // }
      }
    },
    // 返回首页
    goBack () {
      this.$router.push('/')
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
    this.getNewsItems()
  }
  //   beforeRouteLeave (to, from, next) {
  //     // 导航离开该组件的对应路由时调用
  //     // 可以访问组件实例 `this`
  //     // if (from.name === 'happy') {
  //     //   this.$store.commit('setNavDarkActive', {
  //     //     navDarkActive: false
  //     //   })
  //     //   this.$store.commit('setHeaderLogo', {
  //     //     headerLogoShow: true
  //     //   })
  //     //   next()
  //     // }
  //   }
}
</script>

<style lang="less" scoped>
// 超链接样式修改
a:link,
a:visited {
  color: #000;
}

a:hover {
  color: #409eff;
}

a:active {
  color: #000;
}

p {
  margin-block-start: 0;
  margin-block-end: 0;
}

.customer_header {
  background-color: rgba(255, 255, 255, .7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eff0f1;
}

.box {
  padding-top: 60px;
}

// 版心
.w {
  width: 1400px;
  //background: #000;
  margin: 0 auto;

}

.top {
  display: flex;
  justify-content: space-between;
  height: 300px;
  padding: 20px;

  .top-left:hover {
    transition: all ease-in-out .2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .14), 0 0 6px rgba(0, 0, 0, .15);
    transform: translateY(-81px);
  }

  .top-left {
    display: flex;
    box-sizing: border-box;
    height: 400px;
    width: 950px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    transform: translateY(-80px);
    background: #fff;

    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 15px;

      h2 {
        margin-block-start: 0;
        margin-block-end: 0;
      }

      p:nth-of-type(2) {
        color: #999;
      }
    }
  }

  .top-right {
    width: 350px;
    height: 100%;
    padding: 0 15px;
    //background: #eff0f1;
  }
}

.list {
  width: 1200px;
  height: 100%;
  margin: 25px auto;

  // padding: 20px;
  ul {
    box-sizing: border-box;
    display: flex;
    flex-flow: wrap;
    margin: 30px 0;

    li {
      box-sizing: border-box;
      width: calc(33.33% - 20px);
      height: 310px;
      margin: 5px 0;
      border-radius: 5px;
      border: #e3e3e3 solid 1px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 0 6px rgba(0, 0, 0, .05);
      background: #fff;

      .desc {
        box-sizing: border-box;
        height: 104px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;

        h3 {
          margin-block-start: 0;
          margin-block-end: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        p {
          line-height: 16px;
          white-space: nowrap;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    li:hover {
      box-shadow: 0 2px 4px rgba(64, 160, 255, 0.815), 0 0 6px rgba(64, 160, 255, 0.815);
      transition: all ease-in-out .3s;
      transform: translateY(-2px);
    }

    li:nth-child(3n+2) {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>
