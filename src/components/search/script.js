export default {
    data() {
        return {
            action: true,
            drop: {
                activeItem: 0,
                search: {
                    show: false,
                    title: 'Поиск по моделям',
                },
                model: {
                    show: false,
                    title: 'Mercedes Sprinter',
                },
                array: [
                    {
                        title: 'Поиск по моделям',
                        checked: 'Поиск по моделям',
                        children: [
                            { title: 'Mercedes Sprinter', name: 'mercedes-sprinter', checked: true },
                            { title: 'Mercedes Vito', name: 'mercedes-vito', checked: false },
                            { title: 'Opel Vivaro', name: 'opel-vivaro', checked: false },
                            { title: 'Renault Trafic', name: 'renault-trafic', checked: false },
                            { title: 'Volkswagen LT', name: 'volkswagen-lt', checked: false },
                            { title: 'Volkswagen T4', name: 'volkswagen-t4', checked: false }
                        ]
                    },
                    {
                        title: 'Поиск по статьям',
                        checked: '',
                        children: []
                    }
                ]
            }

        }
    },
    methods: {
        dropDown(place){
            switch (place) {
                case 'search':
                    this.drop.search.show = !this.drop.search.show
                    break;
            
                case 'model':
                    this.drop.model.show = !this.drop.model.show
                    break;
            
                default:
                    break;
            }
        },
        activeItem(){
            this.drop.array.forEach((el, index) => {
                if(el.checked) this.drop.activeItem = index;
            });
        },
        check(index, place){
            const 
                array = this.drop.array,
                length = array.length;

            switch (place) {
                case 'search':
                    for (let i = 0; i < length; i++) {
                        if(i == index) {
                            array[i].checked = true
                            this.drop.search.title = array[index].title
                        } else {
                            array[i].checked = false
                        }
                    }

                case 'model':
                    for (let i = 0; i < array[0].children.length; i++) {
                        if(i == index) {
                            array[0].children[i].checked = true
                            this.drop.model.title = array[0].children[index].title
                        } else {
                            array[0].children[i].checked = false
                        }
                    }
                    break;
            
                default:
                    break;
            }
            this.activeItem();
            this.dropDown(place);
        }
    }
}