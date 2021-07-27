<template>
    <div class="home" style="margin: 20px 0 ;">
        <h1 style="text-align: left;">開獎公告</h1>
        <div style="text-align: left;">
            <el-button round :type="type == 0 ? 'danger' : ''" @click="type = 0"
                >FAQ</el-button
            >

            <el-button :type="type == 1 ? 'danger' : ''" round @click="type = 1"
                >技術支持</el-button
            >
            <el-button :type="type == 2 ? 'danger' : ''" round @click="type = 2"
                >公告列表</el-button
            >
        </div>

        <div v-show="type == 0" style="text-align:left;padding: 30px 300px;">
            <h1 style="text-align: center;">澳門六合彩FAQ</h1>
            <br />
            1、澳門六合彩在什麼時間段可以購買？<br />
            答：澳門六合彩票為區域性彩種，請根據站點的具體營運時間購買。<br /><br /><br />
            2、需要多少錢才可以購買？
            <br />答：澳門六合彩注項單位為每注10澳門幣。<br /><br /><br />
            3、單張彩票可以購買多少金額？<br />
            答：購買者可對其選定的投注號碼進行單倍或多倍投注，投注倍數範圍為1-100倍。單張彩票的投注金額最高不得超過1000澳門幣。<br /><br /><br />
            4、我應如何確認是否中獎？<br />
            答：您可在澳門六合彩的銷售站點查詢確認、或在澳門六合彩官網的「開獎公告」處查詢核對中獎號碼。<br /><br /><br />
            5、如何能進一步確認開獎結果的正確性？<br />
            答：您可在澳門六合彩官網查看即時開獎公告與開獎視頻，或查看歷史開獎期號的視頻回放。<br /><br /><br />
            6、購買彩券後可以退款不買嗎？<br />
            答：抱歉，根據《奖券规例》規定獎券彩票一經發出給參加者或經參加者確認，參加者不得以任何理由更換、取消或撤回。<br /><br /><br />
            7、中獎之後領獎的步驟是什麼樣的？<br />
            答：所有獲中彩票，必須於有關攪珠的日期後起計60天內領取<br />
            (例子：於3月1日所舉行的攪珠的獲中彩票，可於3月1日當天至4月30日內任何一天領取)。逾期未兌獎視為棄獎，棄獎獎金納入彩票公益金。<br /><br /><br />
            8、如果我的彩券受到污染或損壞是否可以兌獎？<br />
            答：根據《奖券规例》規定任何獎券彩票（包括損毀彩票）不會獲得派發獎金或發還退款，除非該彩票可憑其獨有的序列號碼辨證。<br /><br />
        </div>

        <div v-show="type == 1" style="text-align:left;padding: 30px 300px;">
            <h1 style="text-align: center;">技術支持</h1>
            <br />
            最低硬件系統要求：<br /><br />
            1、可以接上互聯網的計算機；<br /><br />

            2、區域寬帶；<br /><br />

            3、Windows , Mac OS X , Linux , Android操作系統其中之一；<br /><br />

            4、Internet Explorer瀏覽器v10.0 或以上，Mozilla Firefox (瀏覽器v3.0
            或以上)，Opera (瀏覽器v8.0 或以上)，Chrome(瀏覽器v6.0
            或以上)，Safari (瀏覽器v4.0 或以上)。<br /><br /><br />
        </div>

        <div v-show="type == 2" style="text-align:left;padding: 30px 300px;">
            <h1 style="text-align: center;">公告列表</h1>
            <br />
            <br /><br /><br />
        </div>
    </div>
</template>

<script>
export default {
    name: "FAQ",
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
