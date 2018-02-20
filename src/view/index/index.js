import './index.sass';

import Vue from '../../../node_modules/vue/dist/vue';
import header from '../../components/header/header';
import sidebar from '../../components/sidebar/sidedar';
import Basket from '../../components/basket/basket';
import socialComponent from '../../components/social/social'
import Search from '../../components/search/search.vue';
import Callback from '../../components/dialog/callback.vue'
import Flickity from 'vue-flickity';
import { VueTyper } from 'vue-typer';

let index = new Vue({
    el: '#index',
    data: {
        lastProducts: {
            tabs: []
        },
        flickityOptions: {
            initialIndex: 0,
            accessibility: true,
            prevNextButtons: true,
            pageDots: true,
            wrapAround: true,
            autoPlay: 5500
        },
        typeds: [],
        tabs: [],
        trustOptions: {
            initialIndex: 0,
            accessibility: true,
            pageDots: true,
            prevNextButtons: false,
            autoPlay: 5000
        },
        reviewtOptions: {
            initialIndex: 0,
            accessibility: false,
            pageDots: true,
            prevNextButtons: false,
            adaptiveHeight: true,
            autoPlay: 3000
        },
    },
    methods: {
        onTyped(index){
            this.$set(this.typeds, index, true)
        },
        toggleTabs(index){
            this.lastProducts.tabs.forEach((element, i) => {
                index == i ? this.$set(this.lastProducts.tabs, i, true) : this.$set(this.lastProducts.tabs, i, false);
            });
        },
        toggleItem(event){
            let windowWidth = window.innerWidth,
                items = document.getElementsByClassName(event.target.classList),
                count  = items.length
            
            if(windowWidth <= 575){
                for (let index = 0; index < count; index++) {
                    const element = items[index].nextElementSibling;

                    if(element == event.target.nextElementSibling){
                        element.classList.toggle('active')
                    } else {
                        element.classList.remove('active')
                    }
                
                }
                
            }
        },
        toggleVideo(){
            this.video = !this.video;
        },
        toggleControls(index){
            this.tabs.forEach((element, i) => {
                index == i ? this.$set(this.tabs, i, true) : this.$set(this.tabs, i, false);
            });
        },
    },
    components: {
        Flickity, VueTyper, socialComponent, Callback, Search
    },
    created(){
        // const tabs = document.querySelector('.last-products__content-list').children.length

        // for (let i = 0; i < tabs; i++) {
        //     i == 0 ? this.$set(this.lastProducts.tabs, i, true) : this.$set(this.lastProducts.tabs, i, false);
        // }

        const sliders = document.querySelector('.index__slider').children.length

        for (let i = 0; i < sliders; i++) { this.$set(this.typeds, i, false); }

    }
})
