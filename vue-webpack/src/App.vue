<template>
    <div id="app">
        <h2>Vue + Webpack</h2>
        <header>this is header</header>
        <div class="content">
            {{text}}
        </div>
        <footer>footer</footer>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                text: 'Hello, Vue & Webpack!'
            }
        },
        // render(){
        //     createElemet()
        // }
    }
</script>

<style>
    #app .content{
        color:red;
    }
</style>