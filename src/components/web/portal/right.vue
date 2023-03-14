<template>
  <div class="right-box">
      <h3>{{ title }}</h3>
      <el-timeline>
        <el-timeline-item v-for="(i, index) in List"
        :key="index"
        :timestamp="i.publish_time"
        placement="top">
          <router-link :to = "`/honor/${i.news_path}`">
            <h4>{{i.news_title}}</h4>
            <div class="desc">
            <p>{{i.news_desc}}</p>
          </div>
          </router-link>
        </el-timeline-item>
      </el-timeline>
  </div>
</template>

<script>
export default {
  name: 'right',
  props: {
    title: {
      type: String,
      default: 'right'
    },
    List: {
      // 对象或数组默认值必须从一个工厂函数获取 default: () => []
      type: Array,
      default: () => [1, 2, 3]
    },
    imgUrl: {
      type: String,
      default: ''
      // default: require('./banner1.jpg')
    }
  }
}
</script>

<style lang="less" scoped>
a:link,
a:visited{
  color: #000;
}
a:hover{
  color: #409eff;
}
a:active{
  color: #000;
}
h3{
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: 20px;
}
h4{
  margin-block-end: 0em;
}
.right-box{
  padding: 15px;
  .desc{
    p{
      color: #999;
    }
    overflow: hidden;
    word-spacing: no-wrap;
    text-overflow: ellipsis;
  }
}
</style>
