<template>
  <button @click="activeTab='tabA'">TabA</button>
  <button @click="activeTab='tabB'">TabB</button>
  <button @click="activeTab='tabC'">TabC</button>

    <!--component loaded based on conditions-->
    <TabA v-if="activeTab==='tabA'"/>
    <TabB v-if="activeTab==='tabB'"/>
    <TabC v-if="activeTab==='tabC'"/>

    <!--dynamically loaded component-->
    <!-- <component :is="activeTab"/> -->
</template>


<script>
import TabA from '@/components/dynamic-component/tab1.vue'
import TabB from '@/components/dynamic-component/tab2.vue'
import TabC from '@/components/dynamic-component/tab3.vue'


export default {
    name:'tabs',
    components:{
        TabA,
        TabB,
        TabC
    },
    data(){
        return{
            activeTab:""
        }
    }
}
</script>

<style>

</style>