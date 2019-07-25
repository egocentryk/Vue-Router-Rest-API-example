<template>
    <div>
        <h1>{{country.name}}</h1>

        <img :src=country.flag :alt=country.name />

        <h2><span>Population</span> {{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</h2>

        <p><a href="#" @click.prevent="back">Go back</a></p>
    </div>
</template>

<script>
    export default {
        
        data() {
            return {
                country: []
            }
        },

        mounted() {
            this.getCountry()
        },

        methods: {
            async getCountry() {
                // eslint-disable-next-line
                console.log(this.$route.params.name);

                try {
                    const response = await fetch('https://restcountries.eu/rest/v2/name/' + this.$route.params.name + '?fullText=true')
                    const data = await response.json()
                    this.country = data[0]
                } catch (error) {
                    // eslint-disable-next-line
                    console.error(error)
                }
            },

            back() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    img {
        max-width: 100px;
        border: 1px solid #e3e3e3;
        padding: 5px;
    }

    h2 span {
        font-size: 11px;
        text-transform: uppercase;
        display: block;
    }
</style>


