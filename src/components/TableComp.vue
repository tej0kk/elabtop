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
                            <tr>
                                <td>
                                    <img class="img-table" src="../assets/t480s.png" alt="">
                                </td>
                                <td class="py-5 text-center text-custom" style="font-weight:600;">Lenovo Thinkpad T480s</td>
                                <td class="py-5 text-center text-custom">1</td>
                                <td class="py-5 text-center text-custom">21.000.000</td>
                                <td class="py-5 text-center">
                                    <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash" aria-hidden="true"></i> Hapus</button>
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
export default {
    name: "TableComp",
};
</script>
