<template>
    <div id="ProductDetailPage">
        <HeaderComp/>
        <div class="container mt-5">
            <div class="row justify-content-start">
                <router-link to="/katalogpage" style="text-decoration: none;">
                    <h6 style="color:#000000;"><i style="color:#ff0000;" class="fa fa-arrow-circle-left" aria-hidden="true"></i><span class="ms-3">Detail Produk</span> </h6>
                </router-link>
            </div>
        </div>
        <ProductDetailComp/>
        <ProductComp :produk="produk"/>
        <FooterComp/>
    </div>
</template>


<script>
import HeaderComp from '@/components/HeaderComp.vue';
import ProductDetailComp from '@/components/ProductDetailComp.vue';
import ProductComp from '@/components/ProductComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import axios from 'axios';

export default{
    name :"ProductDetailPage",
    components:{
        HeaderComp, 
        ProductDetailComp,
        ProductComp,                
        FooterComp,
    },
    data(){
        return{
            produk: [],
            detailProduk:[],
        }
    },
    methods:{
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
        getProdukDet()
        {
            axios.get("http://127.0.0.1:8000/api/produk?q=4")
                .then((response) => {
                    this.detailProduk = response.data.data;
                    console.log(this.detailProduk);//debug
                })
                .catch((error) => {
                    alert('Mohon Periksa Koneksi Anda !' + error);
                    // console.log(error);//debug
                })
        },
    },
    mounted()
    {
        this.getProdukRec();
        this.getProdukDet();
    }
};
</script>


<style>
router-link{
    text-decoration:none;
}
</style>