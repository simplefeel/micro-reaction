<template>
    <div style="color:red">
        oh,{{ nickName.xing }} {{ nickName.name }},I'am fine,Thank you!
    </div>
</template>

<script>
import { nickName } from "../store";
export default {
    data() {
        return {
            nickName: {}
        };
    },
    created() {
        this.nickName = nickName;
    }
};
</script>

<style lang="scss" scoped>
</style>