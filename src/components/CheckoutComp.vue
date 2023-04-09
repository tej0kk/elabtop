<template>
    <div id="CheckoutComp">
        <div class="container mt-5">
            <h4 class="my-3" style="font-weight:600">Barang yang dibeli</h4>
            <div class="row" v-for="item in keranjang" :key="item.id">
                <div class="col">
                    <div class="card mb-3 border-0">
                        <div class="row g-0">
                            <div class="col-md-3 col-12 border rounded">
                                <img :src="'http://127.0.0.1:8000/assets/images/produk/' + item.produk.foto" class=" rounded-1 img-checkout"
                                    alt="">
                            </div>
                            <div class="col-md-9 col-12">
                                <div class="card-body">
                                    <h5 class="card-title" style="font-weight:600">{{ item.produk.nama }}</h5>
                                    <p class="card-text">Rp. {{ item.produk.harga }}</p>
                                    <p class="card-text">{{ item.banyak }} Barang</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form>
                <div class="row">
                    <h4 class="my-3" style="font-weight:600">Pengiriman dan Pembayaran</h4>
                    <h6 class="my-3" style="font-weight:600">Lengkapi detail Alamat</h6>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" style="font-weight:600">Nama Penerima</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Contoh ; John" v-model="pesanan.nama">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label" style="font-weight:600">Alamat Lengkap</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    placeholder="Contoh ; Jl.Rambutan,No.1" v-model="pesanan.alamat"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" style="font-weight:600">Nomor Telepon</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Contoh : 08xxxxxxxxxx" v-model="pesanan.no_telepon">
                            </div>
                        </div>
                </div>
                <div class="row mt-5">
                    <div class="col-sm-3 col">
                        <h6 style="font-weight:600">Pilih Pembayaran</h6>
                        <div class="dropdown my-3">
                            <select class="form-select" id="bank" v-model="pesanan.bank" @change="infoBank($event)">
                                <option value="">--Pilih Satu--</option>
                                <div v-for="item in bank" :key="item.id">
                                    <option value="{{ item.id }}">{{ item.nama_bank }}</option>
                                </div>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-3 col">
                        <h6><b>Pilih Pengiriman</b></h6>
                        <div class="dropdown my-3"> 
                            <select class="form-select" id="pengiriman" v-model="pesanan.pengiriman">
                                <option value="">--Pilih Satu--</option>
                                <option v-for="item in pengiriman" :key="item.id" value="{{ item.id }}">{{ item.nama }}</option>
                            </select>
                        </div>
                        <p style="font-weight:600">Rp.20.000</p>
                    </div> 
                </div>
                <div class="row">
                    <div class="col justify-content-start">
                        <div class="card mb-3" style="border:none">
                            <div class="row g-0">
                                <div class="col-lg-2 col-3">
                                    <img class="mandiri-icon" src="../assets/mandiri_icon.png" alt="">
                                </div>
                                <div class="col-lg-10 col-9">
                                    <div class="card-body text-custom">
                                        <div class="card-text">Mandiri Virtual Account</div>
                                        <div class="card-text"><b>90089181873817</b></div>
                                        <div class="card-text" style="font-weight:600">a.n Syntop Laptopindo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "CheckoutComp",
    props: ["keranjang"],
    data(){
        return{
            "pesanan": [],
            "pengiriman": [],
            "bank": [],
        }
    },
    methods: {
        getPengiriman(){
            axios.get('http://127.0.0.1:8000/api/pengiriman')
                .then((response) => {
                    this.pengiriman = response.data.data;
                })
                .catch((error) => {
                    this.$toast.error(error, {
                        type: "error",
                        position: "top",
                        duration: 2000,
                    });
                })
        },
        getBank(){
            axios.get('http://127.0.0.1:8000/api/bank')
                .then((response) => {
                    this.bank = response.data.data;
                })
                .catch((error) => {
                    this.$toast.error(error, {
                        type: "error",
                        position: "top",
                        duration: 2000,
                    });
                })
        },
        infoBank(params) {
            console.log(params.target.value);
        }
    },
    mounted() {
        this.getPengiriman();
        this.getBank();
    }
};
</script>