<template>
    <div id="HeaderComp">
        <nav class="navbar navbar-expand-sm m-0">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img class="logo-elabtop" src="../assets/logo-elabtop.png" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item mx-2">
                            <router-link to="/" class="nav-link " style="color:#000000;">Home</router-link>
                        </li>
                        <li class="nav-item mx-2">
                            <router-link to="/katalogpage" class="nav-link " style="color:#000000;">Katalog Laptop</router-link>
                        </li>

                    </ul>
                    <router-link to="/keranjangpage" class="btn btn-sm btn-keranjang">
                        <i class="fa fa-cart-plus" aria-hidden="true"></i> Keranjang
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "HeaderComp",
};
</script>