
<template>
  <div class="news-center">
    <div class="news-title">
      <h3>{{ title }}</h3>
      <router-link to="/news">更多</router-link>
    </div>
    <div class="news-list">
      <div class="item" v-for = "(item) in List" :key = "item.id">
        <router-link :to = "`/news/${item.news_path}`">
        <div class="pic">
          <el-image
          style="height: 100%;"
          :src="item.cover_img"
        ></el-image>
        </div>
        </router-link>
        <router-link :to = "`/news/${item.news_path}`">
        <div class="info">
          <h4>{{ item.news_title }}</h4>
          <p>{{ item.news_desc }}</p>
          <p><i class="el-icon-time"></i>{{ item.publish_time }}</p>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index2-news',
  props: {
    title: {
      type: String,
      default: '新闻'
    },
    List: {
      type: Array,
      default: () => [1, 2, 3, 4]
    }
  }
}
</script>

<style lang="less" scoped>

h3{
  margin-block-start: 0em;
  margin-block-end: 0em;
}
h4{
  margin-block-start: .5em;
}
.news-center {
  height: 100%;
  padding: 15px 10px;
  box-sizing: border-box;
  overflow: hidden;
  .news-title{
    display: flex;
    justify-content: space-between;
  }
  .news-list{
    height: 100%;
    //padding: 25px 0;
    box-sizing: border-box;
    display: flex;
    //flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    .item{
      width: 810px;
      height: 120px;
      padding: 5px;
      display: flex;
      justify-content: space-between;
      // text-align: center;
      font-size: 14px;
      border: 2px solid #fff;
      border-radius: 5px;
      box-sizing: border-box;
      .pic{
        width: 160px;
        height: 106px;
      }
      .info{
        width: 600px;
        p{
          color: #888;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .item:hover{
      border: 2px solid #99a9bf;
      transition: all ease-in-out .3s;
      h4{
        color: #409eff;
      }
    }
  }
}
/* 解决超链接点击前后改变文字颜色的问题 */
a:visited,
a:link{
  color: #333;
}
</style>
