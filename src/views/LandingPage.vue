<template>
    <div id="LandingPage">
        <HeaderComp/>
        <BannerComp/>
        <LogoComp :merek='merek' />
        <ProductComp :produk='produk'/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <img class="promo1" src="../assets/promo1.png" alt="">
                </div>
            </div>
        </div>
        <AccessoriesComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BannerComp from '@/components/BannerComp.vue';
import LogoComp from '@/components/LogoComp.vue';
import ProductComp from '@/components/ProductComp.vue';
import AccessoriesComp from '@/components/AccessoriesComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import axios from 'axios';

export default{
    name :"LandingPage",
    components:{
        HeaderComp, 
        BannerComp, 
        LogoComp,
        ProductComp,
        AccessoriesComp,
        FooterComp,
    },
    data(){
        return {
            merek: [],
            produk: []
        }
    },
    methods:
    {
        getMerek()
        {
            axios.get("http://127.0.0.1:8000/api/merek")
                .then((response) => {
                    this.merek = response.data.data;
                    // console.log(this.merek);//debug
                })
                .catch((error) => {
                    alert('Mohon Periksa Koneksi Anda !' + error);
                    // console.log(error);//debug
                })
        },
        getProdukRec()
        {
            axios.get("http://127.0.0.1:8000/api/produk?rekomendasi=recommended")
                .then((response) => {
                    this.produk = response.data.data;
                    // console.log(this.produk);//debug
                })
                .catch((error) => {
                    alert('Mohon Periksa Koneksi Anda !' + error);
                    // console.log(error);//debug
                })
        },
    },
    mounted()
    {
        this.getMerek();
        this.getProdukRec();
    }
};
</script>