<template>
    <div id="LogoComp">
        <div class="container mb-5">
            <div class="row">
                <div class="col-lg-3 col-3" v-for="item in merek" :key="item.id">
                    <img class="img-brand" :src=" 'http://127.0.0.1:8000/assets/images/merek/' + item.logo "  alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"LogoComp",
    props: ["merek"],
};
</script>