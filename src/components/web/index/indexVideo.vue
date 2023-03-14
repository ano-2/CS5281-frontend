<template>
    <div class = "wrap-block">
      <div class = "content-block service-case">
        <div class = "service-case">
          <div class = "block-line"></div>
          <p class = "case-title">{{ videoCenter.description_title }}</p>
          <p class = "case-subtitle">{{ videoCenter.description_desc }}</p>
          <div class="flexr"><router-link to="/videoList">更多精彩...</router-link></div>
          <div class = "case-list">
            <div class = "case-info" v-for = "(item,index) in videoList" :key = "index">
              <el-card :body-style = "{ padding: '0px' }">
                <div class="case-item-hover" @click="dialogShow(item)">
                  <p><i class="el-icon-video-camera-solid"></i>播放视频</p>
                  <!-- <el-button icon="el-icon-caret-right" circle></el-button> -->
                </div>
                <el-image :src="item.cover_img" fit="cover" lazy v-loading="loading"></el-image>
              </el-card>
              <el-progress :percentage = "70" :show-text = "false"></el-progress>
              <p class = "case-desc">{{ item.video_title }}</p>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  </template>

<script>

export default {
  name: 'VideoCenter',
  components: {

  },
  data () {
    return {
      // 文字
      videoCenter: '',
      videoList: [],
      videoDialog: false,
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
      },
      // 加载遮罩
      loading: true
    }
  },
  created () {
    this.getText()
    this.getVideo()
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
        // index_viewlife寻找价值观对应文字
        for (var i = 0; i < res.data.list.length; i++) {
          if (res.data.list[i].description_name === 'index_video') {
            this.videoCenter = res.data.list[i]
            break
          }
        }
      }
    },
    // 获取视频
    async getVideo () {
      const { data: res } = await this.$http.get('/web/videos')
      if (res.status !== 200) {
        // 获取失败
        this.$message.error('获取失败')
      } else {
        // this.$message.success('获取视频成功')

        // this.videoList = res.data.list
        for (var i = 0; i < res.data.list.length; i++) {
          if (res.data.list[i].state) {
            this.videoList.push(res.data.list[i])
          }
        }
        // console.log(this.videoList)
        this.loading = false
      }
    },
    dialogShow (item) {
      // console.log(item)
      this.playerOptions.sources[0].src = item.video_file
      this.playerOptions.poster = item.cover_img
      // console.log(this.playerOptions['sources'][0]['src'] )
      this.videoDialog = true
    }
  }
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
  <style lang = "less" scoped>
  .wrap-block {
    position: relative;

    .content-block {
      position: relative;
      // width: 100%;
      overflow: hidden;
    }
  }

  .content-block.service-case {
    background-color: #FFFFFF;
    width: 100%;

    .service-case {
      max-width: 1240px;
      //height: 700px;
      overflow: hidden;
      margin: 0 auto;
      text-align: center;
      // padding-top: 50px;
      padding: 0px 0 80px 0;

      .block-line {
        margin: 0 auto 12px;
        width: 24px;
        height: 4px;
        background-color: #3370ff;
        border-radius: 100px;
      }

      .case-title {
        font-weight: 700;
        font-size: 32px;

        bottom: 2px;
        //padding-top: 60px;
      }

      .case-subtitle {
        font-size: 16px;
        line-height: 1.5;
        color: #646a73;
        margin-top: 10px;
      }
      .flexr{
        display: flex;
        flex-direction: row-reverse;
        a:hover{
          color: #3370ff;
        }
      }
      .case-list {
        display: flex;
        justify-content: space-evenly;
        .case-info{
          .el-card {
            width: 380px;
            height: 210px;
            margin-top: 10px;

            .case-item-hover{
              opacity: 0;
              z-index: 0;
              /* width: 100%;
              height: 100%; */
              width: 380px;
              height: 210px;
              position: absolute;
              /* top: 0;
              left: 0; */
              overflow: hidden;
              background-color: rgba(0, 0, 0, 0.3);
              p{
                text-align: center;
                line-height: 190px;
                font-weight: bold;
                font-size: 20px;
                color:#fff;
              }
              .el-button ::v-deep {
                top: 30%;
                border: 2px solid #fff;
                background-color: Transparent;
                color:#fff;
                font-weight: bold;
              }
              .el-button:hover ::v-deep {

                border: none;
                background-color: #fff;
                color:inherit;
                font-weight: bold;
              }
            }
          }
        }

      }

      .case-info:hover ::v-deep {
        .el-image {
          transform: scale(1.15) ;
          transition: transform .3s ease-in-out;
        }
        p{
          color: #3370ff;
          font-weight: bold;
        }
        .el-card{
          .case-item-hover {
          opacity: 1;
          z-index: 1;
          transition: all 0.2s ease-in-out;
        }
        }

      }
      /* .el-card {
        width: 380px;
        height: 210px;
        margin-top: 10px;
      } */

      .el-progress {
        margin-top: 10px;
      }

      /deep/ .el-progress-bar__outer {
        height: 2px !important;
      }

      .case-desc {
        margin-top: 20px;
        margin-bottom: 30px;
        font-weight: 500;
        font-size: 14px;
      }
    }
  }
  /* 解决超链接点击前后改变文字颜色的问题 */
  a:visited,
  a:link{
    color: #111;
  }
  </style>
