<template>
    <div class="home" style="margin: 20px 0 ;">
        <h1 style="text-align: left;">開獎公告</h1>
        <div style="text-align: left;">
            <el-button round :type="type == 0 ? 'danger' : ''" @click="type = 0"
                >澳門六合彩</el-button
            >

            <el-button :type="type == 1 ? 'danger' : ''" round @click="type = 1"
                >接口調用</el-button
            >
        </div>

        <div v-show="type == 0">
            <div class="home_box" style="margin-bottom:30px">
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
                                        class="ball blue"
                                        v-for="e in draw_num.split(',')"
                                        :key="e"
                                    >
                                        <span class="balls">{{ e }}</span>
                                        <span class="shengxiao">虎</span>
                                    </span>
                                </span>
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <span style="color:red;width:100%"
                                >2021207<span style="color:black"
                                    >期截止時間：</span
                                >
                                2021-07-26 21:15:00</span
                            ><br />
                            <span style="font-size:80px">05:57:30</span>
                        </el-col>
                    </el-row>
                </div>
            </div>
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
            <el-table :data="tableData" style="width: 100%;margin:30px 0">
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
                    <template
                        ><el-button type="danger">直播</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
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
export default {
    name: "Post",
    components: {},
    data() {
        return {
            type: 0,
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
</style>
