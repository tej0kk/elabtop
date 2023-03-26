<template>
    <div id="CheckoutPage">
        <HeaderComp/>
        <div class="container mt-5">
            <div class="row justify-content-start">
                <router-link to="/keranjangpage" style="text-decoration: none;">
                <h6 style="color:#000000;"><i style="color: #ff0000;" class="fa-solid fa-arrow-circle-left" aria-hidden="true"></i><span class="ms-3">Checkout</span></h6>
                </router-link>
            </div>
        </div>
        <CheckoutComp/>
        <RingkasanBelanjaComp/>
        <FooterComp/>
    </div>
</template>


<script>
import HeaderComp from '@/components/HeaderComp.vue';
import CheckoutComp from '@/components/CheckoutComp.vue';
import RingkasanBelanjaComp from '@/components/RingkasanBelanjaComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default{
    name :"CheckoutPage",
    components:{
        HeaderComp,
        CheckoutComp,
        RingkasanBelanjaComp,                
        FooterComp,
    },
};
</script>