<template>
  <div class="video">
    <div class="video-title">
      <h3>{{ title }}</h3>
      <router-link to="/videoList">更多</router-link>
    </div>

    <!-- 视频列表 start -->
    <div class="item-list">
      <ul>
        <li v-for="(i,index) in List"  :key="index" @click="dialogShow(i)">
          <div class="mask"><i class="el-icon-video-play"></i></div>
          <el-image :src="i.cover_img" style="width: 100%; height: 150px"></el-image>
          <div class="desc">{{ i.video_title }}</div>
        </li>
      </ul>

    </div>
    <!-- 视频列表 end -->
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
  name: 'index2-video',
  props: {
    List: {
      // 对象或数组默认值必须从一个工厂函数获取 default: () => []
      type: Array,
      default: () => [1, 2, 3, 4, 5]
    },
    title: {
      type: String,
      default: '视频中心'
    },
    imgUrl: {
      type: String,
      default: ''
      // default: require('./banner1.jpg')
    }
  },
  data () {
    return {
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
      }
    }
  },
  methods: {
    // 点击视频触发播放弹窗
    dialogShow (item) {
      // console.log(item);
      this.playerOptions.sources[0].src = item.video_file
      this.playerOptions.poster = item.cover_img
      this.videoDialog = true
    }
  }
}
</script>

<style lang="less" scoped>

.video{
  width: 100%;
  .video-title{
    display: flex;
    justify-content: space-between;
  }
}
.item-list ul{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  li{
    position: relative;
    width: 220px;
    height: 150px;
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    .mask{
      position: absolute;
      width: 100%;
      height: 150px;
      text-align: center;
      line-height: 150px;
      font-weight: bold;
      font-size: 40px;
      color:#fff;
      background: rgba(0, 0, 0, .54) no-repeat center;
      z-index: 1;
      display: none;
    }
    .desc{
      position: absolute;
      bottom: 0;
      height: 30px;
      width: 100%;
      line-height: 30px;
      text-align: center;
      color:#fff;
      background: rgba(0, 0, 0, .54) no-repeat center;
    }
  }
  li:hover{
    transition: all ease-in-out .3s;
    .mask{
      display: block;
    }
  }
}
/* 解决超链接点击前后改变文字颜色的问题 */
a:visited,
a:link{
  color: #888;
}

</style>
<style lang="less" scoped>
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
