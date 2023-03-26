<template>
    <div id="ProductDetailComp">
        <div class="container mb-5">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <!-- Carousel -->
                    <div id="product" class="carousel slide" data-bs-ride="carousel">
                        <!-- Indicators/dots -->
                        <div class="carousel-indicators mt-5">
                            <button type="button" data-bs-target="#product" data-bs-slide-to="0" class="active"></button>
                            <button type="button" data-bs-target="#product" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#product" data-bs-slide-to="2"></button>
                            <button type="button" data-bs-target="#product" data-bs-slide-to="3"></button>
                        </div>
                        <!-- The slideshow/carousel -->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../assets/t480s.png" alt="Lenovo T480S" class="d-block caraousel-img" style="width:100%">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/t490s.png" alt="Lenovo T490S" class="d-block caraousel-img" style="width:100%">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/legion.png" alt="Lenovo Legion" class="d-block caraousel-img" style="width:100%">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/rogstrix.png" alt="Lenovo Rogstrix" class="d-block caraousel-img" style="width:100%">
                            </div>
                        </div>

                        <!-- Left and right controls/icons -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#product" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" style="color:#ff0000;"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#product" data-bs-slide="next">
                            <span class="carousel-control-next-icon" style="color:#ff0000;"></span>
                        </button>
                    </div>
                </div>
                <div class="col-lg-6 col-12 mt-4">
                    <h2 style="font-weight:600;">Lenovo Thinkpad T480S</h2>
                    <p>Harga:<span style="color:#ff0000;"> 21.000.000</span></p>
                    <div class="border rounded-3 px-3 pt-3">
                        <h6 class="mb-2">Spesifikasi</h6>
                        <p>
                            Processor Up to 8th Gen Intel® Core™ i5/i7 vPro™ <br>
                            Operating System Windows 10 Pro<br>
                            14" Antiglare Display FHD IPS (1920 x 1080, 250 nit)<br>
                            FHD IPS touchscreen (1920 x 1080, 300 nit)<br>
                            FHD IPS low power (1920 x 1080, 400 nit)<br>
                            FHD IPS Privacy Guard (1920 x 1080, 400 nit)<br>
                            Memory Up to 32GB<br>
                            Battery Up to 20 hours* 57Wh,<br>
                            Rapid Charge technology available with 65W AC<br>
                        </p>
                    </div>
                    <div class="row my-3">
                        <div class="col-lg-3 col-2">
                            <input class="text-center total-item" type="number" value="1" min="0" max="9">
                        </div>
                        <div class="col-lg-9 col-10 text-end">
                            <router-link to="/keranjangpage" class="btn btn-sm" style="border-color:#ff0000; color: #ff0000;">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                Keranjang
                            </router-link>
                            <router-link to="/checkoutpage" class="btn btn-sm ms-2 main-btn">
                                Pesan Sekarang
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
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
    name: "ProductDetailComp",
};
</script>