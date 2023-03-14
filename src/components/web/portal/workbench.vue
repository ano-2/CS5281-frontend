<template>
  <div class="link">
    <h3>{{ title }}</h3>
    <div class="link-list">
      <div class="item" v-for = "(item,index) in imgUrl" :key = "index">
        <el-link v-if="item.url" :href="item.url" :underline=false target="_blank">
          <el-image
            style="width: 100%;"
            :src="item.path"
            ></el-image>
            <p>{{ item.description }}</p>
        </el-link>
        <div v-else>
          <el-image
            style="width: 100%;"
            :src="item.path"
            ></el-image>
            <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workbench',
  props: {
    title: {
      type: String,
      default: '价值观'
    },
    imgUrl: {
      type: Array,
      default: () => [
        {
          description: '责任',
          path: require('../../../assets/img/index/zeren.png')
        },
        {
          description: '主动',
          path: require('../../../assets/img/index/zhudong.png')
        },
        {
          description: '稳健',
          path: require('../../../assets/img/index/wenjian.png')
        },
        {
          description: '高效',
          path: require('../../../assets/img/index/gaoxiao.png')
        },
        {
          description: '开放',
          path: require('../../../assets/img/index/kaifang.png')
        },
        {
          description: '创新',
          path: require('../../../assets/img/index/chuangxin.png')
        }
      ]
    }
  }
}
</script>

<style lang="less" >
h3{
  margin-block-start: 0em;
  margin-block-end: 0em;
}
.link {
  //height: 180px;
  padding: 15px;
  .link-list{
    height: 100%;
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content:space-between;
    .item{
      width: 70px;
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 14px;
      img{
        width: 50px;
        height: 50px;
      }

    }
  }
}
</style>
