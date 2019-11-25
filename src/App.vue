<template>
    <div></div>
</template>

<script>
import { observable, observe } from "../micro-reaction/index";

const observableObj = observable({ num: 0 });
observe(() => {
    console.log(observableObj.num);
});
// output 0
// output 2
observableObj.num = 2;

export default {};
</script>

<style lang="scss" scoped>
</style>