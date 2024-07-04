<template>
<FirstScreen/>
<SecondScreen/>
<ThirdScreen/>
</template>

<script>
import FirstScreen from '../components/FirstScreen.vue';
import SecondScreen from '@/components/SecondScreen.vue';
import ThirdScreen from '@/components/ThirdScreen.vue';

export default {
    components: {
        FirstScreen,
        SecondScreen,
        ThirdScreen,
    }
}
</script>