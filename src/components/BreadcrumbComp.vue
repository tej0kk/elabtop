<template>
    <div id="BreadcrumbComp">
        <div class="container my-5">
                <ol class="breadcrumb text-start">
                    <li><router-link to="/" ><i style="color:#ff0000;" class="fa fa-home me-2" aria-hidden="true"></i></router-link></li>
                    <li class="breadcrumb-item"><router-link to="/" style="color:#000000; text-decoration: none;">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Katalog Laptop</li>
                </ol> 
        </div>
    </div>
</template>

<script>
export default{
    name:"BreadcrumbComp",
};
</script>