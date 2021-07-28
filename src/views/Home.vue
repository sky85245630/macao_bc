<template>
    <div class="home" style="margin: 20px 0 ;">
        <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->

        <div class="block">
            <el-carousel height="423px">
                <el-carousel-item v-for="item in imgUrl" :key="item">
                    <img :src="item" alt="" style="width:100%" />
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="home_box" style="margin-bottom:30px">
            <div class="box_title amlhc">
                <span class="title">澳門六合彩</span>
                <span class="nextTime"
                    >第2021204期截止時間：2021-07-23 21:15:00</span
                >
            </div>
            <div style="padding:30px 20px">
                <el-row class="mt-5">
                    <el-col :span="15">
                        <span style="font-weight:bold"
                            >澳門六合彩 第<span
                                style="font-weight:200;color:red"
                            >
                                2021203 </span
                            >期</span
                        >

                        <div class="num">
                            <span>
                                <span
                                    class="ball"
                                    v-for="(e, index) in draw_num.split(',')"
                                    :key="index"
                                    :class="ball_color[index]"
                                >
                                    <span class="balls">{{ e }}</span>
                                    <span class="shengxiao">{{
                                        final_list[index]
                                    }}</span>
                                </span>
                            </span>
                        </div>
                    </el-col>
                    <el-col :span="9">
                        <FlipClock></FlipClock>
                        <div>
                            <el-button type="warning">開獎驗證</el-button>
                            <el-button type="danger">直播</el-button>
                        </div>
                        <br />
                        <span
                            style="font-size:18px;cursor:pointer"
                            @click="$router.push('/post')"
                            >開獎歷史查詢></span
                        >
                    </el-col>
                </el-row>
            </div>
        </div>

        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="issue" label="期號">
                <template slot-scope="e">
                    第<span style="color:red">{{ e.row.issue }}</span
                    >期
                </template>
            </el-table-column>
            <el-table-column prop="openTime" label="開獎時間">
            </el-table-column>
            <el-table-column prop="openCode" label="中獎號碼">
            </el-table-column>
            <el-table-column label="開獎回放">
                <template><el-button type="danger">直播</el-button> </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import FlipClock from "@/components/flipClock.vue";

export default {
    name: "Home",
    components: {
        FlipClock,
    },
    data() {
        return {
            imgUrl: [
                "https://mcjccdn-qq.goluosi.com/macaujc/pc/img/swiper1.jpg",
                "https://mcjccdn-qq.goluosi.com/macaujc/pc/img/swiper3.jpg",
                "https://mcjccdn-qq.goluosi.com/macaujc/pc/img/swiper4.jpg",
            ],
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
            data_list: [
                "鼠",
                "牛",
                "虎",
                "兔",
                "龙",
                "蛇",
                "马",
                "羊",
                "猴",
                "鸡",
                "狗",
                "猪",
            ],
            color_list: ["red", "red", "green", "green", "blue", "blue"],
            final_list: [],
            ball_color: [],
            draw_num: "43,41,33,42,05,13,21",
        };
    },
    methods: {
        initData() {
            // this.final_list = [
            //     {
            //         num: this.draw_num.split(","),
            //         color: [],
            //         animal: this.draw_num
            //             .split(",")
            //             .map((e) => this.data_list[e % 12]),
            //     },
            // ];
            //取得生肖
            this.final_list = this.draw_num
                .split(",")
                .map((e) => this.data_list[e % 12]);

            //取得顏色
            this.ball_color = this.color.red.split(",").find((e) => e == "02");
            this.ball_color = this.draw_num
                .split(",")
                .map((e) => this.color_list[e % 6]);
        },
    },
    created() {
        this.initData();
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

.num .red {
    background-image: url("../assets/ball.png");
}

.num .green {
    background-image: url("../assets/ball.png");
}

.el-table th {
    background-color: #eee;
    color: black;
}
</style>
