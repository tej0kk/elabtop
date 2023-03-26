<template>
    <div id='BannerComp'>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-12 justify-content-start mt-5">
                    <h2 class="mb-2" style="font-weight:600;">Laptop yang dibuat untuk Bisnis</h2>
                    <p style="color:#b0b0b0;">
                        Light and thin, the ThinkPad T470s is designed to 
                        boost productivity, wherever your business
                        takes you.
                    </p>
                    <router-link to="/katalogpage" class="btn btn-sm btn-buy-now">
                        Beli Sekarang
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </router-link>
                </div>
                <div class="col-lg-8 col-12 justify-content-end">
                    <img class="img-banner" src="../assets/img-banner.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BannerComp",
};
</script>