<template>
    <div id="ProductComp">
        <div class="container mt-5">
            <div class="row ">
                <div class="col-lg-6 col-6">
                    <h6 class="text-start" style="font-weight: 600;">Rekomendasi Untukmu</h6>
                </div>
                <div class="col-lg-6 col-6">
                    <router-link to="/katalogpage" style="text-decoration: none;">
                        <div class="text-end" style="color:#000000;"><i style="color:#ff0000;" class="fa fa-eye" aria-hidden="true"></i> Lihat Semua</div>
                    </router-link>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-6" v-for="item in produk" :key="item.id" >
                    <div class="card">
                        <img :src=" 'http://127.0.0.1:8000/assets/images/produk/' + item.foto  " class="card-img-top img-product" alt="t490s">
                        <div class="card-body text-center">
                            <h6 class="card-title" style="font-weight: 600;">{{ item.nama }}</h6>
                            <p class="card-text" style="color:#b0b0b0;">Rp {{ item.harga }}</p>
                            <router-link to="/productdetailpage" class="btn btn-sm btn-buy-product">Beli Sekarang
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductComp",
    props: ["produk"],
};
</script>