<template>
    <div id="SearchComp">
        <div class="container">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Cari laptop apa?" aria-label="Username" aria-describedby="basic-addon1">
                    <span style="background-color: #ffffff;;" class="input-group-text" id="basic-addon1">
                    <router-link to="/katalogpage">
                        <i class="fa-solid fas fa-search" style="color:#000000;"></i>
                    </router-link>
                    </span>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchComp",
};
</script>