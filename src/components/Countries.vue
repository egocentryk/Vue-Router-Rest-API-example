<template>
    <div>
        <ul id="countries">
            <li v-for="country in countries" :key="country.name"><router-link :to="'/country/'+ country.name">{{country.name}}</router-link></li>
        </ul>
            
    </div>
</template>

<script>
    export default {
        
        data() {
            return {
                countries: []
            }
        },

        mounted() {
            this.getCountries()
        },

        methods: {
            async getCountries() {
                try {
                    const response = await fetch('https://restcountries.eu/rest/v2/all')
                    const data = await response.json()
                    this.countries = data
                } catch (error) {
                    // eslint-disable-next-line
                    console.error(error)
                }
            }
        }
    }
</script>

<style scoped>
    ul#countries {
        list-style: none;
        display: block;
    }

        ul#countries li {
            display: inline-block;
            background: #34495e;
            color: #fff;
            border-radius: 17px;
            margin: 7px 15px;
        }

            ul#countries li:hover {
                background: #41b883;
            }

        ul#countries li a {
            padding: 5px 22px;
            
            display: inline-block;
            color: #fff;
            text-decoration: none;
        }
</style>


