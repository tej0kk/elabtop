<template>
    <div id="KatalogPage">
        <HeaderComp/>
        <BreadcrumbComp/>
        <SearchComp/>
        <ProductComp/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <img class="promo2" src="../assets/promo2.png" alt="Promotion Lenovo">
                </div>
            </div>
        </div>
        <ProductComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BreadcrumbComp from '@/components/BreadcrumbComp.vue';
import SearchComp from '@/components/SearchComp.vue';
import ProductComp from '@/components/ProductComp.vue'; 
import FooterComp from '@/components/FooterComp.vue';

export default{
    name :"KatalogPage",
    components:{
        HeaderComp, 
        BreadcrumbComp,
        SearchComp,
        ProductComp,
        FooterComp,
    },
};
</script>