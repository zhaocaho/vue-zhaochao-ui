<template>
  <!-- <section>
    <panel :class="$style.panel" :title="title" :titleShow="titleShow"> -->
  <section :class="$style.sec">
    <!-- 图片区域 -->
    <ul>
      <li v-for="(item, i) in Data" :key="i" :style="{ width: picWidth }">
        <section>
          <!-- 图片 -->
          <img :src="item.src" alt="#" />
          <!-- VIP/自制LOGO -->
          <i v-show="item.logo == '独播'"></i>
          <i v-show="item.logo == 'VIP'"></i>
          <i v-show="item.logo == '自制'"></i>
          <i v-show="item.logo == '专题'"></i>
          <i v-show="item.logo == '付费'"></i>
          <i v-show="item.logo == '超前点映'"></i>
          <i v-show="item.logo == ''"></i>
          <!-- 集数 -->
          <span v-if="item.numOfEpisode">{{ item.numOfEpisode }}</span>
        </section>
        <div>
          <!-- title -->
          <a href="#" v-if="item.title">{{ item.title }}</a>
          <!-- 简介 -->
          <em v-if="item.description">{{ item.description }}</em>
        </div>
      </li>
    </ul>
  </section>
  <!-- </panel>
  </section> -->
</template>

<script>
// import panel from '@/components/core/panel.vue'
export default {
  name: 'picLayout',
  components: {
    // panel
  },
  data() {
    return {}
  },
  computed: {
    // 一排放图片个数
    picWidth() {
      if (this.picNum) {
        return 100 / this.picNum + '%'
      } else {
        return '50%'
      }
    }
  },
  props: {
    Data: {
      type: Array,
      default() {
        // 推荐视频数据
        return [
          {
            src:
              '//m.iqiyipic.com/common/lego/20200511/716b2f36fb794fc1abd2760ab8cd8507.jpg',
            numOfEpisode: '更新至32集',
            title: '天醒之路',
            description: '放大招！天醒小队终级逆袭',
            logo: '独播'
          },
          {
            src:
              '//m.iqiyipic.com/common/lego/20200511/716b2f36fb794fc1abd2760ab8cd8507.jpg',
            numOfEpisode: '更新至32集',
            title: '天醒之路',
            description: '放大招！天醒小队终级逆袭',
            logo: 'VIP'
          },
          {
            src:
              '//m.iqiyipic.com/common/lego/20200511/716b2f36fb794fc1abd2760ab8cd8507.jpg',
            numOfEpisode: '更新至32集',
            title: '天醒之路',
            description: '放大招！天醒小队终级逆袭',
            logo: '专题'
          },
          {
            src:
              '//m.iqiyipic.com/common/lego/20200511/716b2f36fb794fc1abd2760ab8cd8507.jpg',
            numOfEpisode: '更新至32集',
            title: '天醒之路',
            description: '放大招！天醒小队终级逆袭',
            logo: '超前点映'
          }
        ]
      }
    },
    // 一排放图片个数
    picNum: {
      type: Number,
      default: 2
    }
    // 图片标题
    // title: {
    //   type: String,
    //   default: ''
    // },
    // // 是否有标题
    // titleShow: {
    //   type: Boolean,
    //   default: true
    // }
  }
}
</script>
<style lang="scss" module>
@import './css/element.scss';
// .panel {
//   @include panel;
.sec {
  padding: 0 10px;
  margin-left: -5px;
  // box-sizing: border-box;
  ul {
    @include list(row);
    flex-wrap: wrap;
    li {
      @include list;
      // box-sizing: border-box;
      padding-left: 5px;
      box-sizing: border-box;
      width: 50%;
      section {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        img {
          width: 100%;
        }
        i:nth-of-type(1) {
          position: absolute;
          top: 0;
          right: 0;
          background: url('http://www.iqiyipic.com/common/fix/h5-aura/c-superscript-20200325.png')
            no-repeat -2px 1px;
          width: 40px;
          height: 20px;
          background-size: 168px;
        }
        i:nth-of-type(2) {
          position: absolute;
          top: 0;
          right: 0;
          background: url('http://www.iqiyipic.com/common/fix/h5-aura/c-superscript-20200325.png')
            no-repeat -42px 1px;
          width: 40px;
          height: 20px;
          background-size: 168px;
        }
        i:nth-of-type(3) {
          position: absolute;
          top: 0;
          right: 0;
          background: url('http://www.iqiyipic.com/common/fix/h5-aura/c-superscript-20200325.png')
            no-repeat -82px 1px;
          width: 40px;
          height: 20px;
          background-size: 168px;
        }
        i:nth-of-type(4) {
          position: absolute;
          top: 0;
          right: 0;
          background: url('http://www.iqiyipic.com/common/fix/h5-aura/c-superscript-20200325.png')
            no-repeat -2px -19px;
          width: 40px;
          height: 20px;
          background-size: 168px;
        }
        i:nth-of-type(5) {
          position: absolute;
          top: 0;
          right: 0;
          background: url('http://www.iqiyipic.com/common/fix/h5-aura/c-superscript-20200325.png')
            no-repeat -82px -19px;
          width: 40px;
          height: 20px;
          background-size: 168px;
        }
        i:nth-of-type(6) {
          position: absolute;
          top: 0;
          right: 0;
          background: url('http://www.iqiyipic.com/common/fix/h5-aura/c-superscript-20200325.png')
            no-repeat 5px -159px;
          width: 60px;
          height: 20px;
          background-size: 168px;
        }
        span {
          color: #fff;
          position: absolute;
          right: 0;
          bottom: 0;
          width: 76px;
          height: 23px;
          text-align: center;
          line-height: 23px;
          font-weight: bold;
        }
      }
      div {
        @include list;
        padding: 5px 8px 17px 2px;
        align-items: start;
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
        a {
          font-size: 15px;
          padding: 2px 0;
          // height: 20px;
          max-height: 44px;
          box-sizing: border-box;
          line-height: 20px;
          width: 100%;
          color: black;
          // text-overflow: ellipsis;
          // white-space: nowrap;
          // overflow: hidden;
        }
        em {
          margin: 2px 0 1px 0;
          color: #999;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 13px;
          overflow: hidden;
          width: 100%;
          height: 16px;
          line-height: 16px;
        }
      }
    }
  }
}
</style>
