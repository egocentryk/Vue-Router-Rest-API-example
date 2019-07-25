import Home from '@/components/Home.vue'
import Countries from '@/components/Countries.vue'
import Country from '@/components/Country.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/countries', component: Countries },
    { path: '/country/:name', component: Country }
];

export default routes;