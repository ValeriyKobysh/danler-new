export default{
    data(){
        return {
            activeControls: false
        }
    },
    methods: {
        toggleControls(){
            this.activeControls = !this.activeControls;
        }
    }
}