import Vue from '../../../node_modules/vue/dist/vue';
import callbackComponent from '../dialog/callback/callback'
import VueResource from 'vue-resource'
import basket from '../basket/basket'
import sidebar from '../sidebar/sidedar';
import search from '../search/search.vue'
import mobileComponent from '../mobile/mobile'

Vue.use(VueResource)

let header = new Vue({
    el: '#header',
    data: {
        dialogs: {
            basket: false,
            phones: false,
            locations: false,
            search: false,
            mobile: false
        },
        callback: false,
        mobile: false,
        catalog: [],
        mobileMenu: [],
    },
    created(){

    },
    components: {
        basket, callbackComponent, mobileComponent, search
    },
    methods: {
        toggleShow(prop){
            for (const key in this.dialogs) {
                key !== prop ? this.dialogs[key] = false : this.dialogs[key] = !this.dialogs[key];
            }
        }
    },
    created(){
        // const nav = document.querySelector('.header__nav'),
        //     items = [].slice.call(nav.getElementsByClassName('menu__item'));
        
        //     items.forEach(element => {
        //         const target = element.firstElementChild
        //         this.mobileMenu.push({
        //             home: target.href,
        //             title: target.textContent
        //         })
        //     });

        // this.$http.post('/get_catalog', { func: 'catalog' }, { emulateJSON: true })
        //     .then(response => {
        //         console.log(response);
        //     }, error => {
        //         console.log(error);
        //     })
    },
    watch: {
        'dialogs.mobile'(val){
            sidebar.slideShow()
        }
    }
})


export default header;

