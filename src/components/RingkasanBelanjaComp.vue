<template>
    <div id="RingkasanBelanjaComp">
        <div class="container mb-5">
            <div class="row mt-5">
                <h4 style="font-weight:600">Ringkasan Belanja</h4>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <p class="pe-5 text-custom">Total Harga ({{ totalBarang }} Barang)<span class="ps-5 ms-3">Rp {{ Number(totalHarga).toLocaleString('ID') }}</span></p>
                    <p class="pe-5 text-custom">Total Ongkos Kirim<span class="ps-5 ms-5 ">Rp {{ Number(this.ongkos).toLocaleString('ID') }}</span></p>
                    <p class="me-5 text-custom mt-5" style="font-weight:600;">Total Tagihan<span class="ps-5 ms-4"
                            style="color:#ff0000">Rp {{ totalTagihan }}</span></p>
                    <router-link to="/konfirmasipage" class="btn mt-3 me-5 btn-byr-sekarang text-custom">Bayar Sekarang
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </router-link>
                    <!-- <button type="button" class="btn mt-3 me-5 btn-byr-sekarang">Checkout <i class="fa fa-chevron-right"
                            aria-hidden="true"></i> </button> -->

                    <!-- Button trigger modal -->
                    <button type="button" class="btn mt-3 btn-btl-konfirmasi text-custom" data-bs-toggle="modal"
                        data-bs-target="#BatalkanPesanan">
                        Batalkan Pesanan
                    </button>

                    <!-- Modal -->
                    <div class="modal" id="BatalkanPesanan" tabindex="-1" aria-labelledby="BatalkanPesananLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    Apakah anda yakin ingin membatalkan pesanan?
                                </div>
                                <div class="modal-footer">
                                    <router-link to="/productdetailpage" class="btn btn-success">Iya</router-link>
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Tidak</button>
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
    name: "RingkasanBelanjaComp",
    props: ["keranjang", "ongkos"],
    computed: {
        totalHarga() {
            return this.keranjang.reduce(function (item, data) {
                return item + data.produk.harga * data.banyak;
            }, 0);
        },
        totalBarang() {
            return this.keranjang.reduce(function (item, data) {
                return item + data.banyak;
            }, 0)
        },
        totalTagihan() {
            return totalHarga + this.ongkir;
        }
    },
};
</script>