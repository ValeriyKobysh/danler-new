<template>
    <form :action="[ action ? '/search' : '/articles' ]" class="search" method="get" name="search-from">
        <!-- <span class="search__heading">Поиск</span> -->

        <ul class="search__list list">
            <li class="search__item search__item_drop search__field field" :class="{ active: drop.search.show }">
                <span class="search__title" @click="dropDown('search')">{{drop.search.title}}
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 238.003 238.003" xml:space="preserve">
                        <path d="M181.776,107.719L78.705,4.648c-6.198-6.198-16.273-6.198-22.47,0s-6.198,16.273,0,22.47 l91.883,91.883l-91.883,91.883c-6.198,6.198-6.198,16.273,0,22.47s16.273,6.198,22.47,0l103.071-103.039 c3.146-3.146,4.672-7.246,4.64-11.283C186.416,114.902,184.89,110.833,181.776,107.719z"/>
                    </svg>
                </span>

                <ul class="search__drop-list list" v-if="drop.search.show">
                    <li v-for="(menu, index) in drop.array" class="search__drop-item" :key="index">
                        <label class="search__select select" :class="{ checked : menu.checked }">
                            <input type="radio" :checked="menu.checked" :value="menu.title" @click="check(index, 'search')" form="search-form" name="search">
                            {{menu.title}}
                        </label>
                    </li>
                </ul>
            </li>

            <li class="search__item search__item_drop search__field field" :class="{ active: drop.model.show }" v-if="drop.array[drop.activeItem].children.length > 0">
                <span class="search__title" @click="dropDown('model')">{{drop.model.title}}
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 238.003 238.003" xml:space="preserve">
                        <path d="M181.776,107.719L78.705,4.648c-6.198-6.198-16.273-6.198-22.47,0s-6.198,16.273,0,22.47 l91.883,91.883l-91.883,91.883c-6.198,6.198-6.198,16.273,0,22.47s16.273,6.198,22.47,0l103.071-103.039 c3.146-3.146,4.672-7.246,4.64-11.283C186.416,114.902,184.89,110.833,181.776,107.719z"/>
                    </svg>
                </span>

                <ul class="search__drop-list list" v-if="drop.model.show">
                    <li v-for="(menu, index) in drop.array[drop.activeItem].children" class="search__drop-item" :key="index">
                        <label class="search__select select" :class="{ checked : menu.checked }">
                            <input type="radio" :checked="menu.checked" :value="menu.name" @click="check(index, 'model')" form="search-form" name="model">
                            {{menu.title}}
                        </label>
                    </li>
                </ul>
            </li>

            <li class="search__item search__item_flex">
                <input type="text" class="search__field search__field_text field" placeholder="Введите название">
            </li>
            
            <li class="search__item">
                <button class="btn btn_accent search__btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="22px" viewBox="0 0 446.25 446.25" xml:space="preserve">
                        <path d="M318.75,280.5h-20.4l-7.649-7.65c25.5-28.05,40.8-66.3,40.8-107.1C331.5,73.95,257.55,0,165.75,0S0,73.95,0,165.75 S73.95,331.5,165.75,331.5c40.8,0,79.05-15.3,107.1-40.8l7.65,7.649v20.4L408,446.25L446.25,408L318.75,280.5z M165.75,280.5 C102,280.5,51,229.5,51,165.75S102,51,165.75,51S280.5,102,280.5,165.75S229.5,280.5,165.75,280.5z"/>
                    </svg>
                </button>
            </li>
        </ul>

    </form>
</template>

<script src='./script.js'></script>
