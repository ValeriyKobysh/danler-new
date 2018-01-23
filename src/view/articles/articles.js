import './articles.sass'

import header from '../../components/header/header';
import Vue from '../../../node_modules/vue/dist/vue';
import Callback from '../../components/dialog/callback.vue';
import Social from '../../components/social/social';

let articles = new Vue({
    el: '#articles',
    data: {

    },
    components: {
        Social, Callback
    }
})