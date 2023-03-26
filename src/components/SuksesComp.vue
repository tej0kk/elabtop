<template>
    <div id="SuksesComp">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-12">
                    <h2 class="my-5">Pesananmu Berhasil Dibuat!</h2>
                    <div>*Silahkan selesaikan pembayaran sebelum pukul 23.59</div>
                    <div class="mt-5" style="font-weight:600;">Transfer Bank</div>
                    <div class="card mb-3 border-0">
                        <div class="row g-0">
                            <div class="col-lg-4 col-4">
                                <img src="../assets/mandiri_icon.png" class="img-fluid rounded-start" alt="">
                            </div>
                            <div class="col-lg-8 col-8">
                                <div class="card-body">
                                    <p class="card-text">Mandiri Virtual Account</p>
                                    <p class="card-text" style="font-weight:600;"><b>90089181873817</b></p>
                                    <p class="card-text" style="font-weight:600;">a.n Syntop Laptopindo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <router-link to="/" class="btn btn-sm btn-kembali">Kembali ke Beranda</router-link>
                </div>
                <div class="col-lg-7 col-12 justify-content-end">
                    <img class="img-sukses" src="../assets/img-sukses.png" alt="Img-Sukses">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SuksesComp",
};
</script>