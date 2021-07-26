<template>
    <div class="home" style="margin: 20px 0 ;">
        <el-row>
            <el-col :span="5"
                ><h1 style="text-align: left;">開獎視頻</h1></el-col
            >
            <el-col :span="19"
                ><h4 style="text-align: left;line-height: 50px;">
                    <span style="color: #a68452;">即時開獎驗證：</span>
                    開獎現場直播，同步播報中央電視臺1套視頻，開獎過程100%公開公正！
                </h4></el-col
            >
        </el-row>

        <div style="text-align: left;">
            <el-button type="danger" round>澳門六合彩</el-button>
        </div>

        <div class="mt30">
            <el-carousel height="423px">
                <el-carousel-item v-for="item in imgUrl" :key="item">
                    <img :src="item" alt="" style="width:100%" />
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="mt30">
            <el-row>
                <el-col :span="16" style="text-align:left"
                    >澳門六合彩 開獎公告</el-col
                >
                <el-col :span="4"
                    ><el-button
                        round
                        :type="year == 0 ? 'danger' : ''"
                        @click="year = 0"
                        >今年</el-button
                    >

                    <el-button
                        :type="year == 1 ? 'danger' : ''"
                        round
                        @click="year = 1"
                        >去年</el-button
                    ></el-col
                >
                <el-col :span="4"
                    ><el-input
                        v-model="input"
                        placeholder="请输入期號"
                        style="width: 120px;margin-right:10px"
                    ></el-input
                    ><el-button type="primary">搜尋</el-button></el-col
                >
            </el-row>
            <el-row>
                <el-col class="mt50" :span="8" v-for="e in 8" :key="e">
                    <img src="@/assets/logo.png" alt="" />
                    <div class="mt20">
                        澳門六合彩 第<span class="red"> 2021206 </span>期
                        開獎視頻
                    </div>
                </el-col>
            </el-row>
            <el-pagination
                class="mt50"
                background
                layout="prev, pager, next"
                :total="1000"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: "Post",
    components: {},
    data() {
        return {
            imgUrl: [
                "https://mcjccdn-qq.goluosi.com/macaujc/pc/img/swiper1.jpg",
            ],
            year: 0,
            tableData: [
                {
                    issue: "2021206",
                    openTime: "2021-07-25 21:34:05",
                    openCode: "43,41,33,42,05,13,21",
                    videoUrl: "",
                },
            ],
            color: {
                red: "01,02,07,08,12,13,18,19,23,24,29,30,34,35,40,45,46",
                green: "05,06,11,16,17,21,22,27,28,32,33,38,39,43,44,49",
                blue: "03,04,09,10,14,15,20,25,26,31,36,37,41,42,47,48",
            },
            animal: [
                { mouse: "02,14,26,38" },
                { ox: "01,13,25,37,49" },
                { tiger: "12,24,36,48" },
                { rabbit: "11,23,35,47" },
                { dragon: "10,22,34,46" },
                { snake: "09,21,33,45" },
                { house: "08,20,32,44" },
                { sheep: "07,19,31,43" },
                { monkey: "06,18,30,42" },
                { chicken: "05,17,29,41" },
                { dog: "04,16,28,40" },
                { pig: "03,15,27,39" },
            ],
            draw_num: "43,41,33,42,05,13,21",
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

.num {
    height: 60px;
    padding-left: 20px;
    margin-top: 40px;
}

.num > span {
    height: 60px;
    width: 100%;
    display: inline-block;
}

.num .balls {
    display: inline-block;
    height: 60px;
    width: 60px;
    text-align: center;
    line-height: 56px;
    background-position: -6px -5px;
    background-size: 70px;
    background-repeat: no-repeat;
    font-size: 24px;
    font-weight: 600;
}

.num .ball {
    margin-right: 30px;
    position: relative;
    text-align: center;
    display: inline-block;
    height: 60px;
    width: 60px;
}

.num .ball .shengxiao {
    color: #515151;
    font-size: 15px;
    position: absolute;
    top: 70px;
    left: 23px;
}

.num .blue {
    background-image: url("../assets/ball.png");
}

.el-table th {
    background-color: #eee;
    color: black;
}

.red {
    color: red;
}
.mt20 {
    margin-top: 20px;
}

.mt30 {
    margin-top: 30px;
}

.mt50 {
    margin-top: 50px;
}
</style>
