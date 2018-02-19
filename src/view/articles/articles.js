import './articles.sass'

//region import modules
import Vue from '../../../node_modules/vue/dist/vue';
//endregion

//region import components
import header from '../../components/header/header';
import Callback from '../../components/dialog/callback.vue';
import Social from '../../components/social/social';
import Search from '../../components/search/search.vue';
//endregion

let articles = new Vue({
    el: '#articles',
    data: {

    },
    components: {
        Social, Callback, Search
    }
})