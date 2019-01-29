<template>
  <div class="wrapper">
    <!--头部-->
    <v-head id="v-header"></v-head>
    <!--头部结束-->
    <div class="combination-marketing-wrap">
      <div class="layer">
        <!--swiper-->
        <div class="swiper-container-wrap">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index)  in gallery" :key="index">
              <div class="slide-content">
                <div class="slide-img" @click="setActiveSlide(index)"><img :src="item.src" alt=""></div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!--swiper结束-->
        <div class="discribe-wrap">
          <div class="group-name">{{ productInfo.name}}</div>
          <div class="group-item">
            <span>{{productInfo.hotelName}}</span>
            <span>{{productInfo.ticketName}}</span>
          </div>
          <div class="product-price">
            价格:<span>¥<mark>{{productInfo.productPrice}}</mark><i>元</i></span>
          </div>
          <div class="gallery-wrap">
            <div class="img-wrap" v-for="item in productInfo.pictureDisplay"><img :src="item.imgUrl" alt=""></div>
          </div>
          <!--选择按钮组-->
          <div class="btn-groups">
            <button>查看更多</button>
            <button>促销活动</button>
            <button>编辑删除</button>
          </div>
        </div>
        <!--商品描述结束-->
        <div class="option" @click="added"><img src="../../static/images/plus.png" alt=""></div>
      </div>
    </div>
  </div>
</template>
<script>
  import head from './common/vHeader'
  export default {
    name: 'combinationMarketing',
    data() {
      return {
        gallery: [],
        productInfoArray: [],
        productInfo: {},
        //swiper配置
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 30,
          initialSlide: 0,
        }
      }
    },
    components: {
      'v-head': head
    },
    created() {
      this.axios.get('../../static/simulatedData/data.json')
        .then((res) => {
          var resultData = res.data;
          this.gallery = resultData.gallery;
          this.productInfo = resultData.productInfo[0];
          this.productInfoArray = resultData.productInfo
        })
        .catch(err => {
          console.log(err)
        })
    },
    methods: {
      setActiveSlide(index) {
        this.$refs.mySwiper.swiper.slideTo(index, 1500, true);//切换到第一个slide，速度为1秒
        this.productInfo = this.productInfoArray[index];
      },
      added: function () {
        console.log('点击了添加按钮')
      }
    },

  }
</script>
<style scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .combination-marketing-wrap {
    width: 100%;
    height: calc(100% - 0.7rem);;
    background: url("../../static/images/ab1.jpg") center no-repeat;
    color: #fff;
  }

  .layer {
    background: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;
    padding: 0.15rem;
    border: 1px solid transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .swiper-container-wrap {
    width: 100%;
    height: 3.5rem;
    margin-bottom: 0.3rem;
  }

  .swiper-container {
    width: 100%;
    height: 3.5rem;
    padding-bottom: 0.1rem;
    border: 1px solid transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }

  .slide-content {
    width: 100%;
    height: 100%;
    -moz-box-shadow: 0px 0px 10px #999;
    -webkit-box-shadow: 0px 0px 10px #999;
    box-shadow: 0px 0px 10px #999;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.2);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .swiper-slide .slide-img {
    width: 95%;
    height: 96.5%;
    bottom: 0;
    margin: 2.5%;
    position: relative;
  }

  .swiper-slide .slide-img:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 0 0.25rem 0.15rem rgba(184, 217, 248, 0.5) inset;
  }

  .swiper-slide .slide-img img {
    width: 100%;
    height: 100%;

  }

  .discribe-wrap {
    width: 85%;
    height: 3rem;
    background: rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.1rem;
    border: 1px solid transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.1);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -moz-box-shadow: 0px 0px 10px #999;
    -webkit-box-shadow: 0px 0px 10px #999;
    box-shadow: 0px 0px 10px #999;
    margin-bottom: 0.1rem;
    position: relative;
  }

  .discribe-wrap .group-name {
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.18rem;
    font-weight: bold;
  }

  .group-item {
    font-size: 0.18rem;
    height: 0.25rem;
    line-height: 0.25rem;
  }

  .group-item span {
    margin-right: 20px;
  }

  .gallery-wrap {
    height: calc(100% - 1.1rem);
    width: 100%;
    margin-top: 0.1rem;
    overflow: auto;

  }

  .gallery-wrap::-webkit-scrollbar {
    display: none;
  }

  .product-price {
    font-size: 0.18rem;
  }

  .gallery-wrap .img-wrap {
    height: 100%;
    width: 1.7rem;
    display: inline-block;
    margin-right: 15px;
    border: 1px solid #afacac;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    overflow: hidden;
    -moz-box-shadow: 0px 0px 5px #999;
    -webkit-box-shadow: 0px 0px 5px #999;
    box-shadow: 0px 0px 5px #999;
    position: relative;
  }

  .gallery-wrap .img-wrap:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 0 0.08rem 0.03rem rgba(184, 217, 248, 0.5) inset;
  }

  .gallery-wrap .img-wrap img {
    width: 100%;
    height: 100%;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .btn-groups{
    position: absolute;
    right: 0.3rem;
    top: 0.5rem;
    padding: 0.1rem ;
  }
  .btn-groups button{
    display: block;
    outline: none;
    border: none;
    padding: 0.05rem 0.2rem ;
    -webkit-border-radius: 0.04rem;
    -moz-border-radius: 0.04rem;
    border-radius: 0.04rem;
    margin-bottom: 0.1rem;
    cursor: pointer;
  }
  .option {
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    right: 5%;
    bottom: 8%;
  }
  .option img{
    width: 100%;
    height: 100%;
  }

  .product-price span {
    font-size: 0.25rem;
    color: #fb5f31;
  }

  .product-price mark {
    background: transparent;
    color: #ff4528;
    font-size: 0.3rem;
  }

  .product-price i {
    font-style: normal;
    font-size: 0.2rem;
  }
</style>
