<template>
    <div id="KeranjangPage">
        <HeaderComp/>
        <div class="container my-5">
            <div class="row">
                <div class="col">
                    <router-link to="/productdetailpage" style="text-decoration: none;">
                    <h6 style="color:#000000;"><i style="color:#ff0000;" class="fa fa-arrow-circle-left" aria-hidden="true"></i> Keranjang</h6>
                    </router-link>
                </div>
            </div>
        </div>
        <TableComp/>
        
    </div>
</template>

<script>

import HeaderComp from '@/components/HeaderComp.vue';
import TableComp from '@/components/TableComp.vue';

export default{
    name :"KeranjangPage",
    components:{
        HeaderComp, 
        TableComp,
    },
};
</script>