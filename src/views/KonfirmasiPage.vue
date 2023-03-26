<template>
    <div id="KonfirmasiPage">
        <HeaderComp />
        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <router-link to="/checkoutpage" style="text-decoration: none;">
                    <h6 class="mb-5" style="color:#000000;"><i style="color: #ff0000;" class="fa fa-arrow-circle-left" aria-hidden="true"></i> <span
                            class="ms-3">Konfirmasi</span>
                    </h6>
                    </router-link>
                    <p style="font-weight:400;">*Ini halaman terakhir dari proses belanjamu. Pastikan semua sudah benar
                        ya :)</p>
                </div>
            </div>
        </div>
        <KonfirmasiComp />
        <RingkasanBelanjaComp />
    </div>
</template>

<script>

import HeaderComp from '@/components/HeaderComp.vue';
import KonfirmasiComp from '@/components/KonfirmasiComp';
import RingkasanBelanjaComp from '@/components/RingkasanBelanjaComp.vue';

export default {
    name: "KonfirmasiPage",
    components: {
        HeaderComp,
        KonfirmasiComp,
        RingkasanBelanjaComp,
    }
};
</script>