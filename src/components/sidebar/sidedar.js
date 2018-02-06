import Vue from '../../../node_modules/vue/dist/vue';
import Flickity from 'vue-flickity';

let sidebar = new Vue({
    el: '#sidebar',
    data: {
        catalogDrop: true,
        mobileShow: false,
        flickityOptions: {
            initialIndex: 0,
            accessibility: true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: false,
            autoPlay: 3000
        },
    },
    methods: {
        dropDown(){
            this.catalogDrop = !this.catalogDrop;
        },
        toggleMenu(event){
            const target = event.target

            const items = document.querySelectorAll('.sidebar__item');

            if(target.classList.contains('active')){
                target.classList.remove('active')
            } else {
                for (let i = 0; i < items.length; i++) {
                    if(items[i] == target){
                        items[i].classList.add('active')
                    } else {
                        items[i].classList.remove('active')
                    }
                }
            }
        },
        slideShow(){
            this.mobileShow = !this.mobileShow
        },
        hover(event, index){
            this.category = !this.category
            let submenuList = document.querySelectorAll('.submenu');
                // chevronList = document.querySelectorAll('.sidebar__catalog-chevron')

            submenuList[index].classList.toggle('active')
            // submenuList.forEach((el, i) => {
            //     i == index ? el.classList.toggle('active') : el.classList.remove('active');
            // });

            // chevronList.forEach((el, i) => {
            //     i == index ? el.classList.toggle('active') : el.classList.remove('active');
            // })
        },
        click(){
            this.category = !this.category
            let submenuList = document.querySelectorAll('.submenu'),
                chevronList = document.querySelectorAll('.sidebar__catalog-chevron')

            submenuList.forEach((el, i) => {
                i == index ? el.classList.toggle('active') : el.classList.remove('active');
            });

            chevronList.forEach((el, i) => {
                i == index ? el.classList.toggle('active') : el.classList.remove('active');
            })
        }
    },
    components: {
        Flickity
    },
    created(){

    }
})

export default sidebar;