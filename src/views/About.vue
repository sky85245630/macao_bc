<template>
    <div class="home" style="margin: 20px 0 ;">
        <img
            src="https://mjcdn-ali.lyaichuangrobot.com/macaujc/pc/img/about.png"
            alt=""
            style="width:100%"
        />
        <div class="mt30" style="text-align: left;">
            <el-button round :type="type == 0 ? 'danger' : ''" @click="type = 0"
                >關於我們</el-button
            >

            <el-button :type="type == 1 ? 'danger' : ''" round @click="type = 1"
                >遊戲規範</el-button
            >
            <el-button :type="type == 2 ? 'danger' : ''" round @click="type = 2"
                >獎券規則</el-button
            >
        </div>

        <div v-show="type == 0" style="text-align:left;padding: 30px 300px;">
            <h1 style="text-align: center;">關於我們</h1>
            <br />
            澳門六合彩是從1至49個號碼中選出六個為中獎號碼的獎券，由「賽馬會獎券奧門分公司」經辦。<br /><br />

            澳門六合彩每晚攪珠一次，並於網絡現場直播。
            <br /><br /><br /><br />

            <h1 style="text-align: center;">玩法規則</h1>
        </div>

        <div v-show="type == 0" class="ruleQQ">
            <img
                src="https://mjcdn-ali.lyaichuangrobot.com/macaujc/pc/img/logo_lg.png"
                alt=""
                style="padding:20px 0"
            />

            <table class="tableStyleQ">
                <tr>
                    <th colspan="3">
                        澳門六合彩注項單位為每注10澳門幣。選擇複式或膽拖注項時，可以每注澳門幣$5「部份注項單位」投注。有關之獎金則根據每注「部份注項單位」佔注項單位的份數計算。每期六合彩攪珠均從49個號碼中攪出七個號碼。首六個號碼稱為「攪出號碼」，而第七個號碼稱為「特別號碼」。
                        獎項詳情如下：
                    </th>
                </tr>
                <tr>
                    <td>頭獎</td>
                    <td>選中6個「攪出號碼」</td>
                    <td>
                        獎金會因應該期獲中頭獎注數而有所不同，每期頭獎獎金基金訂為不少於澳門幣800萬元
                    </td>
                </tr>

                <tr>
                    <td>二獎</td>
                    <td>選中5個「攪出號碼」+「特別號碼」</td>
                    <td>獎金會因應該期獲中二獎注數而有所不同</td>
                </tr>

                <tr>
                    <td>三獎</td>
                    <td>選中5個「攪出號碼」</td>
                    <td>獎金會因應該期獲中三獎注數而有所不同</td>
                </tr>

                <tr>
                    <td>四獎</td>
                    <td>選中4個「攪出號碼」+「特別號碼」</td>
                    <td>固定獎金澳門幣9,600元</td>
                </tr>

                <tr>
                    <td>五獎</td>
                    <td>選中4個「攪出號碼」</td>
                    <td>固定獎金澳門幣640元</td>
                </tr>

                <tr>
                    <td>六獎</td>
                    <td>選中3個「攪出號碼」+「特別號碼」</td>
                    <td>固定獎金澳門幣320元</td>
                </tr>

                <tr>
                    <td>七獎</td>
                    <td>選中3個「攪出號碼」</td>
                    <td>固定獎金澳門幣40元</td>
                </tr>
            </table>
        </div>

        <div v-show="type == 1" style="text-align:left;padding: 30px 300px;">
            <h1 style="text-align: center;">遊戲規範</h1>
            <br />
        </div>

        <div v-show="type == 1" class="ruleQQ">
            <img
                src="https://mjcdn-ali.lyaichuangrobot.com/macaujc/pc/img/logo_lg.png"
                alt=""
                style="padding:20px 0"
            />

            <table class="tableStyleQ">
                <tr>
                    <th colspan="2">
                        獎金的分配須受賽馬會獎券奧門分公司的獎券規例所約制。<br />
                        獎金大致分配如下：
                    </th>
                </tr>
                <tr>
                    <td>各組獎金</td>
                    <td>獎金分配（每澳門幣$10一注）</td>
                </tr>

                <tr>
                    <td>第一組獎金</td>
                    <td>
                        45% x ﹝獎金基金減去第四、五、六及七組的總獎金﹞÷
                        中獎單位每期頭獎獎金基金訂為不少於澳門幣800萬元。
                    </td>
                </tr>

                <tr>
                    <td>第二組獎金</td>
                    <td>
                        15% x ﹝獎金基金減去第四、五、六及七組的總獎金﹞÷
                        中獎單位
                    </td>
                </tr>

                <tr>
                    <td>第三組獎金</td>
                    <td>
                        40% x ﹝獎金基金減去第四、五、六及七組的總獎金﹞÷
                        中獎單位
                    </td>
                </tr>

                <tr>
                    <td>第四組獎金</td>
                    <td>每注澳門幣9,600元</td>
                </tr>

                <tr>
                    <td>第五組獎金</td>
                    <td>每注澳門幣640元</td>
                </tr>

                <tr>
                    <td>第六組獎金</td>
                    <td>每注澳門幣320元</td>
                </tr>

                <tr>
                    <td>第七組獎金</td>
                    <td>每注澳門幣40元</td>
                </tr>
            </table>
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
    name: "About",
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

.mt30 {
    margin-top: 30px;
}

.ruleQQ {
    background-color: #fff;
    border: 1px solid #dadada;
    border-top: 4px solid #d80011;
}

table {
    border: 1px solid #000;
    font-family: 微軟正黑體;
    font-size: 16px;
    width: 200px;
    border: 1px solid #000;
    border-collapse: collapse;
}
th {
    padding: 10px;
    border: 1px solid #000;
    color: #000;
    text-align: left;
    font-weight: normal;
}
td {
    border: 1px solid #000;
    padding: 5px;
    text-align: left;
}

.tableStyleQ {
    padding: 20px 50px;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 50px;
}
</style>
