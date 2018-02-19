import './article.sass'

//region import modules
import Vue from '../../../node_modules/vue/dist/vue';
//endregion

//region import components
import header from '../../components/header/header';
import callbackComponent from '../../components/dialog/callback/callback';
import Search from '../../components/search/search.vue';
//emdregion

import mixin from '../../mixins/mixins'

let article = new Vue({
    el: '#article',
    mixins: [mixin],
    data: {

    }, 
    methods: {
    },
    components: { Search }
})

export default article