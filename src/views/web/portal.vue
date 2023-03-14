<!-- eslint-disable quotes -->
<template>
  <div class="main">
    <AwHeader></AwHeader>
    <div class="body">
      <div class="content1">
        <div class="workbench"><Workbench title="常用链接" :imgUrl="this.links"></Workbench></div>
        <div class="banner"><Banner :List="this.bannerList" :description="this.bannerDecs"></Banner></div>
        <div class="right"><Right title="中心荣誉" :List="this.honors"></Right></div>
      </div>
      <div class="videolist">
        <Videolist title="视频中心" :List="this.videos"></Videolist>
      </div>
      <div class="content2">
        <div class="view-point"><Workbench></Workbench></div>
        <div class="news"><IndexNews title="新闻中心" :List="this.newsData"></IndexNews></div>
      </div>
    </div>
    <AwFooter></AwFooter>
  </div>
</template>

<script>
import AwHeader from '../../components/web/public/Header'
import AwFooter from '../../components/web/public/Footer'
import Workbench from '../../components/web/portal/workbench.vue'
import Banner from '../../components/web/portal/banner.vue'
import Right from '../../components/web/portal/right.vue'
import Videolist from '../../components/web/portal/index2-video.vue'
import IndexNews from '../../components/web/portal/index2-news.vue'

export default {
  name: 'index2',
  components: {
    AwFooter,
    AwHeader,
    Workbench,
    Banner,
    Right,
    Videolist,
    IndexNews
  },
  data () {
    return {
      bannerList: [],
      videos: [],
      honors: [],
      newsData: [],
      bannerDecs: 'xxxz中心创建于2202年(原名xx中心),下设:曹县、香港两地数据中心,隶属信息技术部，承担着全行的信息系统生产运行,系统网络管理，大中型主机及开放平台系统管理和设备管理等工作。',
      pageInfo: {
        activeName: '3', // 类型3 中心荣誉
        // 当前页码
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 3,
        selectDate: ''
      },
      pageNewsInfo: {
        activeName: '1', // 类型1 新闻
        // 当前页码
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 4,
        selectDate: ''
      },
      links: [
        {
          description: '码云',
          path: require('../../assets/img/index/mayun.png')
          // url:'http://luban-oa.paas.cmbchina.cn/'
        },
        {
          description: 'ACS',
          path: require('../../assets/img/index/media.webp')
          // url:'http://portalprod.acs.cmbchina.cn/tenant/index.html'
        },
        {
          description: '码云',
          path: require('../../assets/img/index/mayun.png')
          // url:'http://mayun.itc.cmbchina.cn/'
        },
        {
          description: 'mayun',
          path: require('../../assets/img/index/cloud.webp')
          // url:'https://sc.cmbchina.cn/'
        },
        {
          description: 'WPS',
          path: require('../../assets/img/index/wps.png')
          // url:'https://yun.wps.cmbchina.com/drive/'
        },
        {
          description: 'WIKI',
          path: require('../../assets/img/index/internet.webp')
          // url:'http://dwiki.cmbchina.cn/'
        },
        {
          description: 'mayun',
          path: require('../../assets/img/index/mayun.png')
          // url:'http://i.cmbchina.cn/nversion/#/home'
        }
      ]
    }
  },
  created () {
    this.setHeader()
    this.getProList()
    this.getVideo()
    this.getNewsItems()
    this.getNews()
  },
  methods: {
    // 获取banner图片
    async getProList () {
      const { data: res } = await this.$http.get('/web/products')
      console.log(res)
      if (res.status !== 200) {
        // 获取失败加载默认图片
        this.$message.error('获取banner图片失败')
      } else {
        this.bannerList = res.data.list
      }
    },
    // 获取视频
    async getVideo () {
      const { data: res } = await this.$http.get('/web/videos')
      if (res.status !== 200) {
        // 获取失败
        this.$message.error('获取失败')
      } else {
        console.log(res)
        this.videos = res.data.list.reverse().slice(0, 5)
        // console.log(this.videos);
      }
    },
    // 获取中心荣誉
    async getNewsItems () {
      const { data: res } = await this.$http.get('/web/newslist', { params: this.pageInfo })
      if (res.status !== 200) {
        this.honors = []
        this.$message.error('获取失败,请重试或检查网络连接！')
      } else {
        // this.$message.success('获取成功')
        this.honors = res.data.list.slice(0, 2)
      }
    },
    // 获取新闻
    async getNews () {
      const { data: res } = await this.$http.get('/web/newslist', { params: this.pageNewsInfo })
      if (res.status !== 200) {
        this.newsData = []
        this.$message.error('获取失败,请重试或检查网络连接！')
      } else {
        // this.$message.success('获取成功')
        this.newsData = res.data.list
        // console.log(this.newsData)
      }
    },
    setHeader () {
      this.$store.commit('setHeaderLogo', {
        headerLogoShow: false
      })
      this.$store.commit('setShadowActive', {
        headerShadowActive: true
      })
      this.$store.commit('setNavDarkActive', {
        navDarkActive: true
      })
    }
  }
}
</script>

<style lang = "less" scoped>

.body{
  width: 100%;
  height: 100%;
  padding:60px 0 30px 0;
  background: #f0f2f5;
  .content1,
  .content2{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 20px auto;
  }
  .content1{
    height: 450px;
    .workbench,
    .banner,
    .right{

      background: #fff;
      border-radius: 10px;
      overflow: hidden;
      box-sizing: border-box;
    }
    .workbench{
      width: 250px;
      height: 450px;
    }
    .banner{
      width: 650px;
      height: 450px;
    }
    .right{
      width: 270px;
      height: 400px;
      background: #fff;
    }
  }
  .videolist{
    /* display: flex;
    justify-content: space-between; */
    width: 1200px;
    height: 200px;
    margin: 30px auto 0 auto;
  }
  .content2{
    .view-point{
      width: 300px;
      height: 320px;
      padding: 10px;
      background: #fff;
      border-radius: 10px;
      box-sizing: border-box;
    }
    .news{
      width: 850px;
      height: 600px;
      padding: 10px;
      background: #fff;
      border-radius: 10px;
      box-sizing: border-box;
    }
  }
}
</style>
