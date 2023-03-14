<template>
    <div class = "wrap-block">
      <div class = "content-block service-block">
        <div class = "service-block">
          <div class = "block-line"></div>
          <p class = "service-info-title">{{ opinin.description_title }}</p>
          <p class = "service-info-subtitle">{{ opinin.description_desc }}</p>
          <div class = "service-list">
            <div class = "service-title" v-for = "(item,index) in serviceList" :key = "index">
              <div class = "is-hover-shadow">
                <div class = "service-title-shadow ">
                  <img :src = "item.path" alt = "">
                </div>
              </div>
              <p class = "service-name">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'indexOpinion',
  components: {
  },
  data () {
    return {
      serviceList: [
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
      ],
      // 价值观文字
      opinin: '',
      // 活动回顾文字
      activities: '',
      percentage: '50',
      loading1: true,
      loading2: true
    }
  },
  created () {
    this.getText()
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
          if (res.data.list[i].description_name === 'index_viewlife') {
            this.opinin = res.data.list[i]
            break
          }
        }
      }
    }
  }
}
</script>

  <style lang = "less" scoped>
  .wrap-block {
    position: relative;
    padding-top: 54px;

    .content-block {
      position: relative;
      // width: 100%;
      overflow: hidden;
    }
  }

  .service-block {
    max-width: 1440px;
    height: 500px;
    margin: 0 auto;
    text-align: center;
    overflow-x: hidden;

    .block-line {
      margin: 0 auto 12px;
      width: 24px;
      height: 4px;
      background-color: #3370ff;
      border-radius: 100px;
    }

    .service-info-title {
      font-weight: 700;
      font-size: 32px;
      position: relative;
      bottom: 2px;
      //padding-top: 60px;
    }

    .service-info-subtitle {
      font-size: 16px;
      line-height: 1.5;
      color: #646a73;
      margin-top: 30px;
    }

    .service-list {
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      //padding: 0 200px;
      margin: 70px auto 0 auto;
    }

    .service-title-shadow {
      width: 111px;
      height: 111px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: .4s ease-in-out;
    }

    .service-title-shadow:hover {
      width: 111px;
      height: 111px;
      border-radius: 50%;
      transform: scale(1.05) translateY(-1px);
      box-shadow: 0 6px 20px 0 rgba(0, 0, 0, .15);
    }

    .service-name {
      margin-top: 30px;
      font-weight: 600;
      font-size: 20px;
    }
  }

  /* 解决超链接点击前后改变文字颜色的问题 */
  a:visited,
  a:link{
    color: #111;
  }
  </style>
