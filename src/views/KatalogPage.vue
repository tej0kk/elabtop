<template>
    <div id="KatalogPage">
        <HeaderComp/>
        <BreadcrumbComp/>
        <SearchComp/>
        <ProductComp :produk="rekomendasiProduk" :title="'Rekomendasi Untukmu'"/>
        <div class="container">
            <div class="row mt-5">
                <div class="col">
                    <img class="promo2" src="../assets/promo2.png" alt="Promotion Lenovo">
                </div>
            </div>
        </div>
        <ProductComp :produk="produk" :title="'Terbaik Untukmu'"/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BreadcrumbComp from '@/components/BreadcrumbComp.vue';
import SearchComp from '@/components/SearchComp.vue';
import ProductComp from '@/components/ProductComp.vue'; 
import FooterComp from '@/components/FooterComp.vue';
import axios from 'axios';

export default{
    name :"KatalogPage",
    components:{
        HeaderComp, 
        BreadcrumbComp,
        SearchComp,
        ProductComp,
        FooterComp,
    },
    data() {
        return {
            produk: [],
            rekomendasiProduk: [],
        }
    },
    methods: {
        getProduk(){
            axios.get("http://127.0.0.1:8000/api/produk")
            .then((response) => {
                    this.produk = response.data.data;
                    // console.log(this.produk);//debug
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
                    this.rekomendasiProduk = response.data.data;
                    // console.log(this.produk);//debug
                })
                .catch((error) => {
                    alert('Mohon Periksa Koneksi Anda !' + error);
                    // console.log(error);//debug
                })
        },
    },
    mounted(){
        this.getProduk();
        this.getProdukRec();
    }

};
</script>