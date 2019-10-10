<template>
  <div id="app">
    <myHeader></myHeader>

    <!-- main start -->
    <main>

        <!-- banner start -->
        <div class="bn_container">
            <div class="swiper-container swiper_banner">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><div class="img"><img src="../static/image/banner06.jpg" alt=""></div></div>
                    <div class="swiper-slide"><div class="img"><img src="../static/image/banner05.jpg" alt=""></div></div>
                </div>
            </div>
            <!-- 显示分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 提交表单 start -->
            <div class="w1200">
                <div class="banner_form">
                    <subForm></subForm>
                </div>
            </div>
            <!-- 提交表单 end -->
        </div>
        <!-- banner end -->

    </main>
    <!-- main end -->

    <my-footer></my-footer>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'app',
  mounted () {
  /* eslint-disable */ 
    var mySwiper = new Swiper('.swiper_banner', {
      loop: true,
      // 分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style>

</style>
