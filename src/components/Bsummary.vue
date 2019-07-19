<template>
    <div id="bsummary-box">
        <div class="bs-img">
            <img :src="v.src" alt="" v-for="v in arrImg" :key="v.id">
            <!-- <img src="./../img/heika_minisite.jpg" alt="">
            <img src="./../img/dsc_rx10m4_01.jpg" alt="">
            <img src="./../img/dsc_rx10m4_02.jpg" alt="">
            <img src="./../img/dsc_rx10m4_03.jpg" alt="">
            <img src="./../img/dsc_rx10m4_04.jpg" alt="">
            <img src="./../img/dsc_rx10m4_05.jpg" alt="">
            <img src="./../img/dsc_rx10m4_06.jpg" alt=""> -->
            
        </div>
    </div>
    
</template>

<script>
export default {
    name: "bsummary",
    data(){
        return {
            arrImg: [
                {
                    "src": './../img/heika_minisite.jpg',
                    "id": 1
                },
                {
                    "src": './../img/dsc_rx10m4_01.jpg',
                    "id": 2
                },
                {
                    "src": './../img/dsc_rx10m4_02.jpg',
                    "id": 3
                },
                {
                    "src": './../img/dsc_rx10m4_03.jpg',
                    "id": 4
                },
                {
                    "src": './../img/dsc_rx10m4_04.jpg',
                    "id": 5
                },
                {
                    "src": './../img/dsc_rx10m4_05.jpg',
                    "id": 6
                },
                {
                    "src": './../img/dsc_rx10m4_06.jpg',
                    "id": 7
                }

            ]
        }
    }
}
</script>

<style lang="less" scoped>
#bsummary-box{
    width: 100%;
    .bs-img{
        width: 100%;
        img{
        width: 100%;
        }
    }
}
</style>