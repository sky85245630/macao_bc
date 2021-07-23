<template>
    <div class="home" style="margin-top: 20px;">
        <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->

        <div class="block">
            <el-carousel height="423px">
                <el-carousel-item v-for="item in imgUrl" :key="item">
                    <img :src="item" alt="" style="width:100%" />
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="home_box">
            <div class="box_title amlhc">
                <span class="title">澳門六合彩</span>
                <span class="nextTime"
                    >第2021204期截止時間：2021-07-23 21:15:00</span
                >
            </div>
            <div>
                <el-row>
                    <el-col :span="15">123123</el-col>
                    <el-col :span="9">412</el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {},
    data() {
        return {
            imgUrl: [
                "https://mcjccdn-qq.goluosi.com/macaujc/pc/img/swiper1.jpg",
                "https://mcjccdn-qq.goluosi.com/macaujc/pc/img/swiper3.jpg",
                "https://mcjccdn-qq.goluosi.com/macaujc/pc/img/swiper4.jpg",
            ],
        };
    },
};
</script>

<style>
.home_box {
    margin-top: 20px;
    box-shadow: 0 1px 4px #c8c8c8;
    border: 1px solid #dadada;
    border-radius: 4px;
    background-color: #fff;
}

.box_title .nextTime {
    font-size: 14px;
    float: right;
}

.box_title .title {
    font-size: 20px;
    float: left;
}
.box_title {
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
}
.amlhc {
    background-color: #ffc9c9;
    border: 1px solid #d80011;
    color: #d80011;
}
</style>
