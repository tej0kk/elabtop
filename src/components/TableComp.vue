<template>
    <div id="TableComp">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="table-responsive">
                        <table class="table">
                        <thead class="" style="font-weight:600;">
                            <tr>
                                <th class=" text-custom text-center">Produk</th>
                                <th class=" text-custom text-center">Nama</th>
                                <th class=" text-custom text-center">Jumlah</th>
                                <th class=" text-custom text-center">Harga</th>
                                <th class=" text-custom text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr v-for="item in keranjang" :key="item.id">
                                <td>
                                    <img class="img-table" :src="'http://127.0.0.1:8000/assets/images/produk/' + item.produk.foto" alt="">
                                </td>
                                <td class="py-5 text-center text-custom" style="font-weight:600;">{{ item.produk.nama }}</td>
                                <td class="py-5 text-center text-custom">
                                    <button class="btn main-btn" v-on:click=kurang(item)> <i class="fa fa-minus-circle"></i> </button>
                                    {{ item.banyak }}
                                    <button class="btn main-btn" v-on:click=tambah(item)> <i class="fa fa-plus-circle"></i>  </button>
                                </td>
                                <td class="py-5 text-center text-custom">Rp {{ item.produk.harga }}</td>
                                <td class="py-5 text-center">
                                    <button type="button" class="btn btn-danger" v-on:click="hapus(item.id)"><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-12 text-end"> 
                    <p style="font-weight:600;">
                        Total Harga:
                        <!-- <span class="ms-5">
                        </span> -->
                        <span class="mx-5">
                            Rp. 21.000.000
                        </span>
                    </p>
                    <router-link to="/checkoutpage" class="btn mt-5 me-5 btn-checkout-keranjang">Checkout <i class="fa fa-chevron-right" aria-hidden="true"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "TableComp",
    props: ["keranjang"],
    data() {
        return {
            awal: 0,
        }
    },
    methods: {
        tambah(item) {
            item.banyak += 1;
            if (item.banyak > item.produk.stok) {
                item.banyak = item.produk.stok;
            }
            // console.log(item.banyak) ;
        },
        kurang(item) {
            item.banyak -= 1;
            if (item.banyak < 1)
            {
                item.banyak = 1;
            }
            // console.log(item.banyak) ;
        },
        hapus(id) {
            axios.delete("http://127.0.0.1:8000/api/keranjang/" + id)
                .then((response) => {
                    alert(response);
                })
                .catch((error) => {
                    alert('gagal menghapus produk' + error);
                })
        }
    }, 
};
</script>
