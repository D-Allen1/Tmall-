<template>
    <div class="home">
      <!-- 头部 -->
      <div class="myheader">
          <div class="left">
              <img src="@/assets/images/logo.png" class="logo">
              <span class="title">Hxx-Luxury Store</span>
          </div>
          <div class="right" >
              <span class="iconfont">&#xe62f;</span>
          </div>
      </div>
      <carousel :swiperData='swiperData'></carousel>
      <!-- 首页分类运营模块 -->
      <div class="classification">
          <div class="class_top">
             <div class="item" v-for="(item,index) in classifiData.up" :key="index">
          <img :src="item.img" @click="gotoClassify(item.id)">
        </div>
          </div>
          <div class="class_bottom">
              <div class="item" v-for="(item,index) in classifiData.down" :key="index">
          <img :src="item.img" @click="gotoClassify(item.id)">
        </div>
          </div>
      </div>
      <!-- 推荐 -->
      <div class="recommend">
          <div class="tittle">今日推荐</div>
          <div class="content">
              <div class="item" v-for="(item,index) in recommendData" :key="index">
          <img :src="item.imgurl" alt="">
          <div class="item_text">
            <span>{{item.title}}</span>
            <span>剩 {{item.endtime}} 天</span>
          </div>
        </div>
          </div>
      </div>
    </div>
</template>

<script>
import Carousel from "@/components/carousel";
import axios from "axios";
export default {
    name:"home",
    components:{
        Carousel
    },
    data(){
        return{
            //轮播图
            swiperData: [],
            //分类
            classifiData:{},
            //推荐
            recommendData:[]

        };
    },
    mounted() {
        this.getIndexData();
    },
    methods:{
        getIndexData(){
            axios.get("/api/index.json")
            .then(res =>{
                this.swiperData = res.data.data.swiper;
                this.classifiData = res.data.data.classifiData;
                this.recommendData = res.data.data.recommendData;
                console.log(res.data.data.swiper)
            })
            .catch(function(error){
                console.log(error);
            });
        },
        gotoClassify(id){
            this.$router.push(
                {
                    path:"/classify",
                    query: {
                        id: id
                    }
                }
            )
        }
    }
}
</script>
<style lang="less" scoped>
@import "~@/assets/styles/variables.less";
  .home{
      background-color:#f3f4f5;
      .myheader{
          display: flex;
          flex-direction:  row;
          justify-content: space-between;
          align-items: center;
          height: 1.066667rem;
          padding: 0 0.13333333rem;
          background:#fff;
          .left {
              display:flex;
              flex-direction: row;
              align-items: center;
             .logo{
                  width: 0.8rem;
                  height:0.8rem;
              }
              .title{
                  padding-left:0.1333333rem;
                  font-size:0.4rem;
                  color: #8e8e8e;
              }

          }
          .right{
              span{
                  font-size: 0.5rem;
              }
          }
      }
      //分类
        .classification{
            .class_top,
            .class_bottom{
                display: flex;
                flex-direction:row;
                justify-content: space-around;
                .item{
                    img{
                        display:block;
                        width: 2rem;
                        height: 2.346667rem;
                    }
                }
            }

      }
      //推荐
      .recommend{
          .tittle{
              text-align:center;
              font-size:0.3733333rem;
              padding:0.26666667rem;
              background:#fff;
              margin:0.133333rem 0;

          }
          .content{
              .item{
                  background:#fff;
                  margin-bottom:.133333rem;
                  img{
                      width:100%;
                      height:4.8rem;
                      display:block;
                  }
                  .item_text{
                      box-sizing:border-box;
                      display:flex;
                      flex-direction: row;
                      justify-content: space-between;
                      padding:0.1333333rem;
                      font-size:0.32;

                  }
              }
          }
      }
  }
</style>



