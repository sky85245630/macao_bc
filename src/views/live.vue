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
            <el-button type="danger" round>{{
                currentInfo.LotteryName
            }}</el-button>
        </div>

        <div class="mt30">
            <video
                id="my-video"
                class="video-js vjs-default-skin"
                controls
                muted
                preload="none"
            >
                <source
                    src="https://bbb.jutianx.com/kkk/bbb.m3u8"
                    type="application/x-mpegURL"
                />
            </video>

            <!-- <video
                ref="videoPlayer"
                class="video-js vjs-default-skin"
                style="width: 100%; height: 100%; object-fit: fill"
            ></video> -->
        </div>

        <div class="mt30">
            <el-row>
                <el-col :span="14" style="text-align:left"
                    >{{ currentInfo.LotteryName }} 開獎公告</el-col
                >
                <el-col :span="4"
                    ><el-button
                        round
                        :type="year == 0 ? 'danger' : ''"
                        @click="getHistoryOpenInfo(0)"
                        >今年</el-button
                    >

                    <el-button
                        :type="year == 1 ? 'danger' : ''"
                        round
                        @click="getHistoryOpenInfo(1)"
                        >去年</el-button
                    ></el-col
                >
                <el-col :span="6"
                    ><el-input
                        v-model="search"
                        placeholder="请输入期號"
                        class="search_box"
                    ></el-input
                    ><el-button type="primary" @click="toSearch"
                        >搜尋</el-button
                    >

                    <el-button type="warning" @click="reset"
                        >重置</el-button
                    ></el-col
                >
            </el-row>
            <el-row>
                <el-col
                    class="mt50"
                    :span="8"
                    v-for="(e, index) in historyOpenInfo"
                    :key="index"
                >
                    <img src="@/assets/logo.png" alt="" @click="toPlay(e)" />
                    <div class="mt20">
                        {{ currentInfo.LotteryName }} 第<span class="span_red">
                            {{ e.Issue }} </span
                        >期 開獎視頻
                    </div>
                </el-col>
            </el-row>
            <!-- <el-pagination
                class="mt50"
                background
                layout="prev, pager, next"
                :total="1000"
            >
            </el-pagination> -->
            <el-dialog
                :title="
                    currentInfo.LotteryName + ' 第' + toPlayData.Issue + '期'
                "
                :visible.sync="dialogVisible"
                width="70%"
                top="5vh"
                class="home_left"
            >
                <el-row style="text-align: center;">
                    <el-col :span="12">
                        <span class="fz16"
                            >開獎時間：{{ toPlayData.OpenTime }}</span
                        >
                    </el-col>
                    <el-col :span="12" style="padding: 0 50px;">
                        <span class="toPlay_kj fz16">開獎號碼：</span>
                        <div
                            class="num_sm"
                            style="position: absolute;top: -50%;right: 15%;"
                        >
                            <span>
                                <span
                                    class="ball"
                                    v-for="(q,
                                    index) in toPlayData.OpenCode.split(',')"
                                    :key="index"
                                    :class="
                                        q
                                            .split(',')
                                            .map((e) => color_list[e % 6])
                                    "
                                >
                                    <span class="balls">{{ q }}</span>
                                    <span class="shengxiao">{{
                                        data_list[q % 12]
                                    }}</span>
                                </span>
                            </span>
                        </div>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24" class="mt50">
                        <video
                            width="100%"
                            height="100%"
                            controls
                            :src="require('@/video/2021067.mp4')"
                        ></video>
                    </el-col>
                </el-row>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import videojs from "video.js";
import "videojs-contrib-hls";
// Vue.prototype.$video = Video;

export default {
    name: "Live",
    components: {},
    watch: {
        "$store.state.kj_day": function(e) {
            // plan1.0
            // console.log("statttt", e);
            if (e) {
                console.log("监听到kj_day");
                this.getCurrentInfo();
            } else {
                this.msg = "监听不到";
            }
        },
    },
    data() {
        return {
            search: "",
            year: 0,
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
            draw_num: "",
            currentInfo: {},
            issueOpenInfo: {},
            historyOpenInfo: [],
            dialogVisible: false,
            toPlayData: {
                Issue: "2021067",
                LotteryId: 2032,
                OpenCode: "44,13,26,34,35,14,12",
                OpenTime: "2021-08-07 21:30:00",
                Pet: "牛",
                VideoUrl: "/video/2021067.mp4",
            },
        };
    },
    methods: {
        initVideo() {
            videojs(
                "my-video",
                {
                    bigPlayButton: false,
                    textTrackDisplay: false,
                    posterImage: true,
                    errorDisplay: false,
                    controlBar: true,
                    hls: {
                        withCredentials: true,
                    },
                },
                function() {
                    this.play();
                }
            );
        },
        destroyVideo() {
            videojs(
                "my-video",
                {
                    bigPlayButton: false,
                    textTrackDisplay: false,
                    posterImage: true,
                    errorDisplay: false,
                    controlBar: true,
                    hls: {
                        withCredentials: true,
                    },
                },
                function() {
                    this.dispose();
                }
            );
        },
        getCurrentInfo() {
            // console.log("env", process.env.VUE_APP_BASE_DOMAIN);
            let url = `${process.env.VUE_APP_BASE_DOMAIN}/api/CurrentInfo`;
            // var url = "http://localhost:81/api/CurrentInfo";
            // var url = "http://localhost:81/api/is_kj_day";
            //一開始沒有抓到state資料會預設no
            let data = { is_hk: this.$store.state.kj_day };
            // if(!this.$store.state.kj_day){
            // console.log(typeof this.$store.state.kj_day);
            // }
            // console.log("store", this.$store.state.kj_day);
            this.axios.post(url, data).then((res) => {
                let { data } = res.data;
                this.currentInfo = data;
            });
            // console.log("this.$store.state.kj_day", this.$store.state.kj_day);
            this.getIssueOpenInfo();
            this.getHistoryOpenInfo();
        },
        getIssueOpenInfo() {
            let url = `${process.env.VUE_APP_BASE_DOMAIN}/api/IssueOpenInfo`;
            let data = {
                lottery: this.currentInfo.LotteryId,
                is_hk: this.$store.state.kj_day,
            };
            // console.log("getIssueOpenInfo", data);
            this.axios.post(url, data).then((res) => {
                let { data } = res.data;
                this.issueOpenInfo = data;
                this.initData();
            });
        },
        getHistoryOpenInfo(e) {
            let today = new Date();
            // 今年
            if (e == 0) {
                this.year = 0;
                today = today.toISOString().substring(0, 10);
            }
            //去年
            if (e == 1) {
                this.year = 1;
                today = today.toISOString().substring(0, 4) - 1 + "-12-31";
            }
            let url = `${process.env.VUE_APP_BASE_DOMAIN}/api/HistoryOpenInfoList`;
            let data = {
                lottery: this.currentInfo.LotteryId,
                issueNum: today,
                is_hk: this.$store.state.kj_day,
            };
            // console.log("getHistoryOpenInfo", data);
            this.axios.post(url, data).then((res) => {
                let { data } = res.data;
                this.historyOpenInfo = data;
                this.searchHistoryOpenInfo = data;
            });
        },
        timeElapsedHandler() {},
        initData() {
            // console.log("initData", this.issueOpenInfo);
            this.draw_num = this.issueOpenInfo.OpenCode.split(",");
        },
        toSearch() {
            // this.getHistoryOpenInfo();
            this.historyOpenInfo = this.searchHistoryOpenInfo.filter((e) => {
                return e.Issue.includes(this.search);
            });
            // console.log("search", this.historyOpenInfo.search(this.search));
        },
        reset() {
            this.historyOpenInfo = this.searchHistoryOpenInfo;
        },
        toPlay(e) {
            console.log("e", e);
            this.dialogVisible = true;
            this.toPlayData = e;
            // this.video = "@" + e.row.VideoUrl;

            // :src="require(`@${toPlayData.VideoUrl}`)"

            // :src="require('@/video/2021067.mp4')"
        },
    },
    mounted() {
        this.getCurrentInfo();
        this.initVideo();
    },
    beforeDestroy() {
        this.destroyVideo();
    },
};
</script>

<style scoped>
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

.num_sm > span {
    height: 40px;
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

.num_sm .balls {
    display: inline-block;
    height: 35px;
    width: 35px;
    text-align: center;
    line-height: 35px;
    background-size: 30px;
    background-repeat: no-repeat;
    font-size: 12px;
    font-weight: 600;
    color: #000;
}

.num .ball {
    margin-right: 30px;
    position: relative;
    text-align: center;
    display: inline-block;
    height: 60px;
    width: 60px;
}

.num_sm .ball {
    display: inline-block;
    width: 35px;
    height: 35px;
    position: relative;
}

.num .ball .shengxiao {
    color: #515151;
    font-size: 15px;
    position: absolute;
    top: 70px;
    left: 23px;
}

.num_sm .ball .shengxiao {
    background-color: transparent;
    color: #414141;
    position: relative;
    left: 1px;
    top: 0px;
    font-size: 14px;
}
.num .blue {
    background-image: url("../assets/blue.png");
    background-size: contain;
    background-repeat: no-repeat;
}

.num .red {
    background-image: url("../assets/red.png");
    background-size: contain;
    background-repeat: no-repeat;
}

.num .green {
    background-image: url("../assets/green.png");
    background-size: contain;
    background-repeat: no-repeat;
}

.num_sm .blue {
    background-image: url("../assets/blue_sm.png");
    background-size: contain;
    background-repeat: no-repeat;
}

.num_sm .red {
    background-image: url("../assets/red_sm.png");
    background-size: contain;
    background-repeat: no-repeat;
}

.num_sm .green {
    background-image: url("../assets/green_sm.png");
    background-size: contain;
    background-repeat: no-repeat;
}

.el-table th {
    background-color: #eee;
    color: black;
}

.span_red {
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

<style>
.video-js[tabindex="-1"] {
    outline: none;
    width: 100%;
}
</style>
