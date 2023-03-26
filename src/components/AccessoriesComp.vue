<template>
    <div id="AccessoriesComp">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-6">
                    <h6 class="text-start" style="font-weight:600;">Aksesoris</h6>
                </div>
                <div class="col-lg-6 col-md-6 col-6">
                    <router-link to="/productdetailpage" style="text-decoration: none;">
                        <div class="text-end" style="color:#000000;">
                            <i style="color:#ff0000;" class="fa-solid fa-eye" aria-hidden="true"></i> Lihat Semua
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-12">
                    <div class="card my-3 border-0">
                        <div class="row g-0">
                            <div class="col-lg-3 col-3">
                                <img src="../assets/ic-ssd.png" class="img-accessories" alt="ic-ssd">
                            </div>
                            <div class="col-lg-9 col-9">
                                <div class="card-body ms-3 pe-3">
                                    <h6 class="card-title" style="font-weight: 600;">Bikin Laptopmu Tambah Kencang!</h6>
                                    <p class="card-text" style="color:#b0b0b0">SSD 200rb+ Produk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="card my-3 border-0">
                        <div class="row g-0">
                            <div class="col-lg-3 col-3">
                                <img src="../assets/ic-ram.png" class="img-accessories" alt="ic-ram">
                            </div>
                            <div class="col-lg-9 col-9">
                                <div class="card-body ms-3 pe-3">
                                    <h6 class="card-title" style="font-weight: 600;">Multitasking lebih lancar!</h6>
                                    <p class="card-text" style="color:#b0b0b0">RAM 150rb+ Produk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="card my-3 border-0">
                        <div class="row g-0">
                            <div class="col-lg-3 col-3">
                                <img src="../assets/ic-game.png" class="img-accessories" alt="ic-game">
                            </div>
                            <div class="col-lg-9 col-9">
                                <div class="card-body ms-3 pe-3">
                                    <h6 class="card-title" style="font-weight: 600;">Jadi Pro Player Handal & Kece!</h6>
                                    <p class="card-text" style="color:#b0b0b0">Gaming 50rb+ Produk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AccessoriesComp",
};
</script>