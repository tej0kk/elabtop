<template>
    <div id="CheckoutComp">
        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <h4 class="my-3" style="font-weight:600">Barang yang dibeli</h4>
                    <div class="card mb-3 border-0">
                        <div class="row g-0">
                            <div class="col-md-3 col-12 border rounded">
                                <img src="../assets/t480s.png" class=" rounded-1 img-checkout"
                                    alt="">
                            </div>
                            <div class="col-md-9 col-12">
                                <div class="card-body">
                                    <h5 class="card-title" style="font-weight:600">Lenovo ThinkPad T480s</h5>
                                    <p class="card-text">Rp. 21.000.00</p>
                                    <input class="text-center total-item" type="number" value="1" min="0" max="9">
                                    <!--  -->
                                    <textarea class="form-control mt-2" style="width:300px"
                                        placeholder="Tulis catatan untuk barang ini" aria-label=""></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <h4 class="my-3" style="font-weight:600">Pengiriman dan Pembayaran</h4>
                <h6 class="my-3" style="font-weight:600">Lengkapi detail Alamat</h6>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label" style="font-weight:600">Nama Penerima</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="Contoh ; John">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label" style="font-weight:600">Alamat Lengkap</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                            placeholder="Contoh ; Jl.Rambutan,No.1"></textarea>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label" style="font-weight:600">Nomor Telepon</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="Contoh : 08xxxxxxxxxx">
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-5 col">
                    <h6 style="font-weight:600">Pilih Pembayaran</h6>
                    <div class="dropdown my-3">
                        <button class="btn dropdown-toggle btn-outline-secondary " type="button"
                            id="dropdownMetodeBayar" data-bs-toggle="dropdown" aria-expanded="false" style="font-weight:600">
                            Transfer Bank
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMetodeBayar">
                            <li><a class="dropdown-item" href="#" style="font-weight:600">Transfer Bank</a></li>
                            <li><a class="dropdown-item" href="#" style="font-weight:600">Indomaret</a></li>
                            <li><a class="dropdown-item" href="#" style="font-weight:600">Elabtop Payment</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-7 col">
                    <h6><b>Pilih Pengiriman</b></h6>
                    <div class="dropdown my-3">         
                        <button class="btn dropdown-toggle btn-outline-secondary" type="button" id="dropdownMetodeKirim"
                            data-bs-toggle="dropdown" aria-expanded="false" style="font-weight:600">
                            Reguler
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMetodeKirim">
                            <li><a class="dropdown-item" href="#" style="font-weight:600">Reguler</a></li>
                            <li><a class="dropdown-item" href="#" style="font-weight:600">Express</a></li>
                            <li><a class="dropdown-item" href="#" style="font-weight:600"> One Week</a></li>
                        </ul>
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
        </div>
    </div>
</template>

<script>
export default {
    name: "CheckoutComp",
};
</script>