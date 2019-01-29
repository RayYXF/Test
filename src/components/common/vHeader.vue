<template>
  <!--头部-->
  <div class="header-wrap">
    <div class="header">
      <div class="system-name">智慧管控平台</div>
      <ul class="menu">
        <li>实时监测</li>
        <li>车源分布</li>
        <li>统计分析</li>
      </ul>
      <div class="admin-info">
        <span class="returnHome">返回引导页</span>
        <span class="setting-btn"><a href="#" target="_blank"><i class="iconfont icon-android-settings"></i></a></span>
        <span class="setting-btn"><a href="#" target="_blank"><i class="iconfont icon-tuichudenglu"></i></a></span>
        <span class="setting-btn"><a href="#" target="_blank"><i class="iconfont icon-icon-system-fi-user"></i></a></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vHeader"
  }
</script>

<style scoped>
  .header {
    color: #fff;
    width: 100%;
    height: 0.7rem;
    background: #293038;
    background-color: #293038;
    padding: 0 0.2rem;
    border: 1px solid transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 0.7rem;
    font-size: 0.15rem;
    font-weight: normal;
    letter-spacing: 5px;
  }
  .header .system-name{
    display: inline-block;
    font-size: 0.2rem;
    float: left;
  }
  .menu {
    height: 100%;
    line-height: 100%;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.08);
    padding-left: 0.5rem;
    display: inline-block;
  }

  .menu li:hover, .menu li.current {
    color: #fff;
  }
  .menu li {
    display: inline-block;
    float: left;
    height: 100%;
    color: rgba(255,255,255,0.45);
    position: relative;
    text-align: center;
    cursor: pointer;
    font-size: 0.16rem;
    padding: 0 0.2rem;
    line-height: 0.7rem;
    list-style-type: none;
  }
  .menu li.current:after, .menu li:hover:after {
    /* display: inline-block; */
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  .menu li:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    /* display: none; */
    width: 100%;
    height: 0.04rem;
    background: #fff;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -ms-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
    -webkit-transition: transform 0.5s;
    -moz-transition: transform 0.5s;
    -ms-transition: transform 0.5s;
    -o-transition: transform 0.5s;
    transition: transform 0.5s;
    opacity: 0;
  }
  .admin-info{
    height: 0.7rem;
    line-height: 0.7rem;
    float: right;
  }
  .header .returnHome {
    background: #474E5C;
    border-radius: 4px;
    font-size: 0.14rem;
    color: rgba(255,255,255,0.45);
    padding: 0.09rem 0.25rem;
    position: relative;
    top: -0.03rem;
    cursor: pointer;
  }

a{
  color: #fff;
  text-decoration: none;
  font-size: 0.2rem;
}
  .iconfont{
    font-size: 0.25rem;
  }

</style>
