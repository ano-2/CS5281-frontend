<template>
    <div
      class="accordian"
      :style="{'--width':width}"
    >
      <ul>
        <li
          v-for="(i,index) in imgList"
          :key="index"
          :style="{'--liWidth':width}"
        >
          <div class="img">
            <div class="img-title">
              <h3>{{ i.product_title }}</h3>
              <p>{{ i.product_desc }}</p>
            </div>
          </div>
          <el-image
            :src="i.cover_img"
            lazy
            fit="cover"
            style="height: 100%"
          />
        </li>
      </ul>
    </div>
  </template>

<script>
export default {
  name: 'Accordion',
  props: {
    imgList: {
      // 对象或数组默认值必须从一个工厂函数获取 default: () => []
      type: Array,
      default: () => [
        {
          product_title: 'title0',
          product_desc: 'this is the description of image',
          cover_img: require('../../../assets/img/banner1.jpg')
        },
        {
          product_title: 'title2',
          product_desc: 'this is the description of image',
          cover_img: require('../../../assets/img/banner2.jpg')
        },
        {
          product_title: 'title2',
          product_desc: 'this is the description of image',
          cover_img: require('../../../assets/img/banner3.jpg')
        },
        {
          product_title: 'title3',
          product_desc: 'this is the description of image',
          cover_img: require('../../../assets/img/banner4.jpg')
        }
      ]
    }
  },
  data () {
    return {
      // 整个手风琴的宽度
      width: '1080px',
      // 每个格子的宽度=整个宽度/图片数量
      liWidth: 1080 / this.imgList.length + 'px',
      picList: '',
      loading: true
    }
  },
  created () {
    // this.getPicture()
  },
  methods: {
    // 获取图片
    async getPicture () {
      const { data: res } = await this.$http.get('/web/pictures')
      if (res.status !== 200) {
        // 获取失败
        this.$message.error('获取失败')
      } else {
        // this.$message.success('获取首页文字成功')
        this.loading = false
        this.picList = res.data.list.slice(6, 10)
        // console.log(this.picList)
      }
    }
  }
}
</script>

  <style lang="less" >

  .accordian{
    width: var(--width);// 整个手风琴的宽度
    margin: 70px auto;// 上下70px 左右居中
    ul{
      display: flex;
    }
    ul li{
      overflow: hidden;//超出边框后隐藏
      width: var(--liWidth);// 每个格子的宽度=整个宽度/图片数量
      height: 500px;
      transition:all 1s;
      position:relative;
      border-left:0.5px solid rgba(255, 255, 255, 0.1);
    }
  }
  // hover ul后 所有li宽度变小 加个灰度变色
  .accordian ul:hover li{
    width: 40%;
    -webkit-filter:grayscale(.8);
    filter:grayscale(.8);
  }
  // hover某个li 该li宽度变大 灰度变色小时
  .accordian ul li:hover{
    width: 200%;
    -webkit-filter:grayscale(0) ;
    filter:grayscale(0);
  }

  .accordian li .img{
    position:absolute;
    text-align: center;
    color:#fff;;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.2);
    bottom:-90%;
    z-index: 1;
    p{
      width: 440px;;
      margin: 0 auto;
      height: 100%;
      word-break: break-all;// 单词断点：任意位置换行
      word-wrap: break-word;// 在长单词任意处换行
    }
  }
  .accordian li:hover{
    .img{
      line-height:50px ;
      animation:slide-top 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) both;
      .img-title{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
  }
  //动画
  @keyframes slide-top{
    0%{
      -webkit-transform:translateY(0);
      transform:translateY(0);
    }
    100%{
      -webkit-transform:translateY(-90%);
      transform:translateY(-90%);
    }
  }
  </style>
