<template>
  <div class = "header" :class = "{header_show: headerShow, shadow: headerShadowActive }">
    <div class = "header_container">
      <div class = "header_content">
        <div class = "logo">
          <router-link to = "/login">
            <img :src = "logo_img[0].path" alt = "logo" v-if = "headerLogoShow===true"/>
            <img :src = "logo_img[1].path" alt = "logo" v-else/>
          </router-link>
        </div>
        <div class = "menu-wrapper">
          <div class = "menu-item" v-for = "(item,index) in navList" :key = "index">
            <el-dropdown v-if="item.child">
              <h2 class = "menu-item-link">
               <span :class="{a_text_dark: navDarkActive}">{{ item.title }}<i class="el-icon-arrow-down el-icon--right"></i></span>
              </h2>
              <el-dropdown-menu slot="dropdown">
                <router-link v-for = "(i,index) in item.child" :key = "index" :to = "i.path" ><el-dropdown-item><span :class="{a_text_dark: navDarkActive}">{{ i.title }}</span></el-dropdown-item></router-link>
                <!-- <el-dropdown-item v-for = "i in item.child" :key = "i"><router-link :to = "i.path" ><span :class="{a_text_dark: navDarkActive}">{{ i.title }}</span></router-link></el-dropdown-item> -->
              </el-dropdown-menu>
            </el-dropdown>
            <!-- 无child -->
            <h2 v-else class = "menu-item-link">
              <router-link :to = "item.path" ><span :class="{a_text_dark: navDarkActive}">{{ item.title }}</span>
              </router-link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      navList: [
        {
          title: '首页',
          path: '/index'
        },
        // {
        //   title: '门户',
        //   path: '/portal'
        // },
        // {
        //   title: '新闻中心',
        //   path: '/news'
        // },
        // {
        //   title: '活动视频',
        //   path: '/videoList'
        // },
        // {
        //   title: '中心荣誉',
        //   path: '/honor'
        // },
        // {
        //   title: '组织文化',
        //   // path: '/activities',
        //   child: [
        //     {
        //       title: '活动回顾',
        //       path: '/activities'
        //     }
        //     // {
        //     //   title: '宣传产品库',
        //     //   path: '/product'
        //     // }
        //   ]
        // },
        {
          title: '关于我们',
          path: '/about',
          child: [
            {
              title: '简介',
              path: '/about#intro'
            },
            {
              title: '组织架构',
              path: '/about#org'
            },
            {
              title: '核心价值观',
              path: '/about#opinin'
            }
          ]
        },
        {
          title: '联系我们',
          path: '/contactUs'
        }
        // {
        //   title: '人才招聘',
        //   path: '/job'
        // },
        // {
        //   title: '客户服务',
        //   path: '/customer'
        // },
      ],
      logo_img: [
        {
          path: require('../../../assets/img/index/cityU_Logo_White.png')
        },
        {
          path: require('../../../assets/img/index/CityU_Logo.png')
        }
      ]
    }
  },
  computed: mapState(['headerShadowActive', 'headerShow', 'headerLogoShow', 'navDarkActive']),
  mounted () {
  },
  methods: {
  }

}
</script>

<style lang = "less" scoped>
@nav_active_color: #3370ff;
h2{
  margin: 0;
}
.header_show {
  transform: translateY(-62px);
}
.a_text_dark{
  color: rgba(0, 0, 0, .8);
}
.header {
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  //backdrop-filter: blur(0);
  box-shadow: none;

  position: fixed;
  z-index: 999;
  transition: transform .2s ease;
  //color: rgba(255, 255, 255, 1) !important;
  transition: all 0.3s ease;
  .header_container {
    height: 100%;
  }
}

.shadow {
  background-color: rgba(255, 255, 255, .7);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
}

.header_content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
  align-items: center;
  padding: 0 96px;
  margin: 0 auto;

  .logo {
    flex: 0 0 auto;

    img {
      height: 35px;
    }
  }
}

.menu-wrapper {
  display: flex;
  flex-direction: row;
  list-style: none;
  -ms-flex-align: center;
  align-items: center;
  padding: 0;
  margin: 0 0 0 20px;
  position: relative;

  .menu-item {
    flex-shrink: 0;
  }

  // .menu-item:last-child:before {
  //   content: "";
  //   display: block;
  //   height: 12px;
  //   border-right: 1px solid #bbbfc4;
  //   //border-right: 1px solid #fff;
  //   position: absolute;
  //   bottom: 24px;
  //   right: 48px;
  // }

  > .menu-item + .menu-item {
    margin-left: 40px;
  }

  .menu-item-link {
    //color: #646a73;
    font-weight: 400;
    font-size: 16px;
    line-height: 60px;
    cursor: pointer;
    color: white;
    position: relative;
    a {
      display: inline-block;
      color: rgba(255, 255, 255, 1);
      transition: color .3s;

      :hover {
        color: @nav_active_color;
      }
    }

    .router-link-exact-active {
      color: @nav_active_color;
      font-weight: 600;

      span:after {
        content: "";
        display: block;
        height: 2px;
        position: absolute;
        width: 26px;
        left: calc(50% - 13px);
        bottom: 14px;
        background-color: @nav_active_color;
      }
    }
  }
}

.nav_text_white {
  color: rgba(255, 255, 255, 1);
}

.nav_text_dark {
  color: rgba(0, 0, 0, .8);
}

@media only screen and (max-width: 991px) {
  .header_content {
    padding: 0 32px;
  }
}

</style>
