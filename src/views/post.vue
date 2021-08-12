<template>
    <div class="home" style="margin: 20px 0 ;">
        <h1 style="text-align: left;">開獎公告</h1>
        <div style="text-align: left;">
            <el-button
                round
                :type="type == 0 ? 'danger' : ''"
                @click="type = 0"
                >{{ currentInfo.LotteryName }}</el-button
            >
            <el-button :type="type == 1 ? 'danger' : ''" round @click="type = 1"
                >接口調用</el-button
            >
        </div>

        <div v-show="type == 0">
            <div class="home_box post_box">
                <div class="" style="padding:30px 20px;">
                    <el-row class="mt-5">
                        <el-col :span="15">
                            <span style="font-weight:bold"
                                >{{ currentInfo.LotteryName }} 第<span
                                    style="font-weight:200;color:red"
                                >
                                    {{ currentInfo.LastIssue }} </span
                                >期</span
                            >

                            <div class="num">
                                <span>
                                    <span
                                        class="ball"
                                        v-for="(e, index) in draw_num"
                                        :key="index"
                                        :class="
                                            e
                                                .split(',')
                                                .map((e) => color_list[e % 6])
                                        "
                                    >
                                        <span class="balls">{{ e }}</span>
                                        <span class="shengxiao">{{
                                            data_list[e % 12]
                                        }}</span>
                                    </span>
                                </span>
                            </div>
                        </el-col>
                        <el-col :span="9">
                            第<span style="color:red;width:100%"
                                >{{ currentInfo.Issue
                                }}<span style="color:black">期截止時間：</span>
                                {{ currentInfo.EndTime }}</span
                            ><br /><br />
                            <flip-countdown
                                :deadline="flip_endTime"
                                :showDays="true"
                                @timeElapsed="timeElapsedHandler"
                            ></flip-countdown>
                        </el-col>
                    </el-row>
                </div>
            </div>
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

                    <el-button type="warning" @click="reset">重置</el-button>
                </el-col>
            </el-row>
            <el-table
                :data="historyOpenInfo"
                style="width: 100%"
                class="home_table"
            >
                <el-table-column prop="issue" label="期號">
                    <template slot-scope="e">
                        第<span style="color:red">{{ e.row.Issue }}</span
                        >期
                    </template>
                </el-table-column>
                <el-table-column prop="OpenTime" label="開獎時間">
                </el-table-column>
                <el-table-column label="中獎號碼">
                    <template slot-scope="e">
                        <div class="num_sm">
                            <span>
                                <span
                                    class="ball"
                                    v-for="(q, index) in e.row.OpenCode.split(
                                        ','
                                    )"
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
                    </template>
                </el-table-column>
                <el-table-column label="開獎回放">
                    <template slot-scope="e">
                        <el-button type="danger" @click="asd(e)"
                            >直播</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <div v-show="type == 1" style="text-align:left;padding: 30px 300px;">
            <br />
            本網站提供查詢接口，供查詢開獎數據。 <br />
            <br />
            地址:http://api.bjjfnet.com/data/opencode/:id<br />
            <br />
            方式: GET <br />
            <br />返回: JSON <br />
            <br />
            <br />調用示例 澳門六合彩:<br />
            <br />
            http://api.bjjfnet.com/data/opencode/2032 返回示例
            查詢澳門六合彩開獎數據 <br />
            <br />
            <br />{ "code": 0, "message": "Success", "data": [ { "issue":
            "2020070", "openCode": "19,16,06,49,21,07,11", "openTime":
            "2020-03-10 21:34:30" }, ... ] }<br /><br />
            <br />
            返回字段說明 <br />
            <br />
            1、code: 消息編碼, 0 代表成功； <br />
            <br />
            2、message: 消息描述； <br />
            <br />
            3、data：具體開獎數據；issue：期號；openCode：開獎號碼；openTime：開獎時間。
            <br />
            <br />
        </div>
    </div>
</template>

<script>
import FlipCountdown from "vue2-flip-countdown";
export default {
    name: "Post",
    components: { FlipCountdown },
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
            // 澳門六合彩與接口調用
            type: 0,
            //今年去年
            year: 0,
            //搜尋按鈕
            search: "",
            pagesize: 10, //设置每页显示条目个数为10
            currentPage: 1, //设置当前页默认为1
            filterAutomobileInfs: [], //分页前的数据
            // tableData: [
            //     {
            //         issue: "2021206",
            //         openTime: "2021-07-25 21:34:05",
            //         openCode: "43,41,33,42,05,13,21",
            //         videoUrl: "",
            //     },
            // ],
            flip_endTime: "2021-8-14 17:25:00",
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
            searchHistoryOpenInfo: [],
        };
    },
    methods: {
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
                this.total = this.historyOpenInfo.length;
            });
        },
        timeElapsedHandler() {},
        initData() {
            console.log("initData", this.issueOpenInfo);
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
    },
    mounted() {
        // this.initData();
        this.getCurrentInfo();
        // this.getIssueOpenInfo();
    },
};
</script>

<style>
.post_box {
    padding: 30px 20px 60px;
    margin-bottom: 30px;
}

.search_box {
    width: 120px;
    margin-right: 10px;
}
</style>
