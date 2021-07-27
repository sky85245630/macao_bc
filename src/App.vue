<template>
    <div id="app">
        <el-col :span="20" :offset="2">
            <div id="nav">
                <el-row>
                    <el-col :span="12">
                        <div style="float: left;">
                            <img alt="Vue logo" src="@/assets/logo.png" />
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="date">
                            2021-07-23 15:05 星期五
                        </div>
                    </el-col>
                </el-row>
            </div>

            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                style="margin-bottom: 20px;"
            >
                <el-row>
                    <el-col :span="4">
                        <el-menu-item index="1" @click="$router.push('/')">
                            首頁
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item index="2" @click="$router.push('/post')">
                            開獎公告
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item index="3" @click="$router.push('/live')">
                            開獎視頻
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item index="4" @click="$router.push('/faq')">
                            FAQ
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item index="5" @click="$router.push('/about')">
                            關於我們
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item
                            index="6"
                            @click="$router.push('/contact')"
                        >
                            聯繫我們
                        </el-menu-item>
                    </el-col>
                </el-row>
            </el-menu>

            <router-view />
            <footer>
                <span>版權所有 不得轉載 © 2020 澳門六合彩</span>
            </footer>
        </el-col>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "1",
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
    width: 100%;
    min-width: 1170px;
    height: 140px;
}

.date {
    float: right;
    line-height: 110px;
    font-size: 18px;
    color: #a4a4a4;
}

#nav {
    padding: 30px;
    border-bottom: 1px solid #dadada;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

footer {
    width: 100%;
    border-top: 5px solid #eee222;
    padding: 20px 0;
}

.el-menu-item.is-active {
    color: #409eff !important;
}
</style>
