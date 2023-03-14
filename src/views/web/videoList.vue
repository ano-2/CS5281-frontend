<template>
  <div>
    <AwHeader class = "customer_header" ref = "customer_header"></AwHeader>
    <div class="box">
      <BannerTitle :imgUrl="url" :title="banner" description="Video Center"></BannerTitle>
    </div>
    <!-- 主体内容 start -->
    <div class="w">
      <el-page-header @back="goBack" :content="banner" title="首页"></el-page-header>

      <!-- 视频列表 start -->

      <div class="list" v-loading="loading">
        <ul>
          <li v-for="v in videoList" :key="v.title" @click="dialogShow(v)">
            <div class="mask"><i class="el-icon-video-play"></i></div>
            <el-image :src="v.cover_img" style="width: 100%; height: 160px"></el-image>
            <div class="desc">
              <h3>{{ v.video_title }}</h3>
              <span><p>{{ v.news_desc }}</p></span>
              <span><p><i class="el-icon-time"></i>{{ v.create_time }}</p></span>
            </div>
          </li>
        </ul>
      </div>

      <!-- 分页 start -->
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="pageInfo.pagecur"
        :page-size="this.pageInfo.pageSize"
        :pager-count="5"
        layout="total, prev, pager, next"
        :total="this.pageInfo.total"
        >
      </el-pagination>
      <!-- 分页 end -->

      <!-- 视频弹窗 start -->
      <el-dialog
        class="video-dialog"
        :visible.sync="videoDialog"
        width="1000px"
        top="20vh"
        destroy-on-close
      >
      <!-- :before-close="handleClose()" -->
        <video-player
          class="vjs-default-skin vjs-big-play-centered"
          :options="playerOptions"
        />
      </el-dialog>
      <!-- 视频弹窗 end -->

      <!-- 视频列表 end -->
    </div>
    <!-- 主体内容 end -->
    <AwFooter></AwFooter>
  </div>
</template>

<script>
import AwHeader from '../../components/web/public/Header'
import AwFooter from '../../components/web/public/Footer'
import BannerTitle from '../../components/web/bannerTitle.vue'
export default {
  name: 'videoList',
  components: {
    AwFooter,
    AwHeader,
    BannerTitle
  },
  data () {
    return {
      banner: '活动视频',
      loading: true,
      url: require('../../assets/img/video_banner.png'),
      videoList: [
        {
          video_title: '暂无数据',
          video_desc: '暂无数据',
          author: '----/---',
          create_time: '2021-12-14',
          cover_img: ''
        }
      ],
      setTop: {}, // 最新一条
      pageInfo: {
        // 当前页码
        pagecur: 1,
        // 总多少条数据
        total: 0,
        pageSize: 8
      },
      videoDialog: false, // dialog flag
      // 播放视频参数
      playerOptions: {
        height: '530',
        width: '770',
        fluid: true,
        language: 'zh-CN',
        // aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小
        sources: [{
          type: 'video/mp4',
          src: ' '
        }],
        autoplay: false,
        controls: true,
        poster: ' ',
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    }
  },
  methods: {
    // 获取视频信息
    async getVideos () {
      const { data: res } = await this.$http.get('/web/videos')
      if (res.status !== 200) {
        this.$message.error('获取失败,请重试或检查网络连接！')
      } else {
        this.pageInfo.total = res.data.list.length
        this.videoList = res.data.list.reverse().slice(this.pageInfo.pageSize * (this.pageInfo.pagecur - 1), this.pageInfo.pageSize * this.pageInfo.pagecur)
        // this.videoList = res.data.list
        this.loading = false
        // this.videoList = this.videoList.concat(this.videoList)
        // console.log(res.data.list)
        // console.log(this.videoList);
      }
    },
    // 点击视频触发播放弹窗
    dialogShow (item) {
      // console.log(item);
      this.playerOptions.sources[0].src = item.video_file
      this.playerOptions.poster = item.cover_img
      this.videoDialog = true
    },
    // 返回首页
    goBack () {
      this.$router.push('/')
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
      this.pageInfo.pagecur = val
      this.getVideos()
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
    // this.getNewsItems()
    this.getVideos()
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
<style lang="less">
// dialog样式
.video-dialog {
  .el-dialog__header{
    background-color: #000;
    padding: 0;
  }
  .el-dialog__body{
    background-color: #000;
    padding: 0;
  }
}
</style>

<style lang="less" scoped>
// 超链接样式修改
a:link,
a:visited{
  color: #000;
}
a:hover{
  color: #409eff ;
}
a:active{
  color: #000;
}
p{
  margin-block-start: 0;
  margin-block-end: 0;
}
.customer_header{
  background-color: rgba(255, 255, 255, .7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eff0f1;
}
.box {
  padding-top: 60px;
}
// 版心
.w{
  width: 1440px;
  //background: #000;
  margin:50px auto 20px auto ;

}

.list{
  width: 1400px;
  height: 100%;
  margin:30px auto;
  // padding: 20px;
  ul{
    box-sizing: border-box;
    display: flex;
    flex-flow: wrap;
    margin:0px 0;
    li{
    position: relative;
    box-sizing: border-box;
    width: calc(25% - 20px);
    height: 100%;
    margin:30px 10px;
    border-radius: 5px;
    overflow: hidden;
    // border: #e3e3e3 solid 1px;
    // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 0 6px rgba(0, 0, 0, .05);
    background: #fff;
    .mask{
      position: absolute;
      width: 100%;
      height: 160px;
      text-align: center;
      line-height: 160px;
      font-weight: bold;
      font-size: 40px;
      color:#fff;
      background: rgba(0, 0, 0, .54) no-repeat center;
      z-index: 1;
      display: none;
    }
    .desc{
      box-sizing: border-box;
      height: 65px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;
      h3{
        margin-block-start: 0;
        margin-block-end: 0;
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        }
      p{
        line-height: 16px;
        white-space:nowrap;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        }
      }
    }
    li:hover{
      box-shadow: 0 2px 4px rgba(64, 160, 255, 0.815), 0 0 6px rgba(64, 160, 255, 0.815);
      transition: all ease-in-out .3s;
      // transform: scale(1.1) ;
      // scale(1.1) translateY(-2px)
      .mask{
        display: block;
      }
      h3{
        color: rgba(64, 160, 255, 0.815);
      }
    }
    li:nth-child(3n+2){
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}

</style>
