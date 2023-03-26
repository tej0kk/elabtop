<template>
    <div id="SuksesPage">
        <HeaderComp/>
        <SuksesComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import SuksesComp from '@/components/SuksesComp.vue';

export default{
    name :"SuksesPage",
    components:{
        HeaderComp,
        SuksesComp,
    }
};
</script>