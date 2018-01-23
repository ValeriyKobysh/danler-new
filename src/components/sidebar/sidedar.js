import Vue from '../../../node_modules/vue/dist/vue';

let sidebar = new Vue({
    el: '#sidebar',
    data: {
        catalogDrop: true,
        mobileShow: false
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
            console.log(this.mobileShow);
            this.mobileShow = !this.mobileShow
        }
    },
    created(){

    }
})

export default sidebar;