<template>
  <div id="header">
    <div class="w1200">
      <div class="head_top">
        <div class="logo">
          <img src="../../static/image/logo-0605.png" />
        </div>
        <div class="tel">
          全国报名热线
          <br />
          <span>400-616-6060</span>
        </div>
      </div>
      <div class="head_menu">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">首页</a>
          </li>
          <li>
            <a href="javascript:;">精彩活动</a>
          </li>
          <li>
            <a href="javascript:;">课程体系</a>
          </li>
          <li>
            <a href="javascript:;">教学师资</a>
          </li>
          <li>
            <a href="javascript:">品牌介绍</a>
          </li>
          <li>
            <a href="javascript:;">加盟合作</a>
          </li>
          <li>
            <a href="javascript:;">家长课堂</a>
          </li>
        </ul>

        <ul class="clearfix">
          <li>
            <img src="../../static/image/n3_01_17.png" alt />
            <a href="javascript:;">校区分布</a>
          </li>
          <li>
            <img src="../../static/image/n1_01_12.png" alt />
            <a href="javascript:;">在线复习</a>
          </li>
          <li>
            <img src="../../static/image/n2_01_15.png" alt />
            <a href="javascript:;">APP下载</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'

}
</script>

<style scoped>
#header {
  width: 100%;
  top: 0;
  z-index: 1001;
  background-color: #ffffff;
}
.w1200 {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.head_top {
  height: 99px;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.head_top .logo img {
  max-width: 100%;
  height: 100%;
}
.head_top .tel {
  text-align: right;
  font-size: 20px;
  color: #292929;
  position: absolute;
  right: 0;
  bottom: 0;
}
.head_top .tel span {
  font-size: 28px;
  color: #ef7b00;
  font-weight: bold;
}
.head_menu {
    display: flex;
    justify-content: space-between;
    height: 69px;
}
.head_menu ul li {float: left; display: block;text-align: center; padding: 30px 20px; position: relative}
.head_menu ul li img {max-width: 18px;}
.head_menu ul li a {font-size: 14px; padding: 5px}
.active {border-bottom: 5px solid #ffcc00}
</style>
