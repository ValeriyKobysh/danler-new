import phoneComponent from './callback/phoneForm.vue';
import emailComponent from './callback/emailForm.vue';

export default{
    data(){
        return {
            activeControls: false,
            phone: false,
            email: false
        }
    },
    methods: {
        toggleControls(){
            this.activeControls = !this.activeControls;
        },
        showPhoneForm(){
            this.phone = !this.phone;
            this.activeControls = false;
        },
        showEmailForm(){
            this.email = !this.email;
            this.activeControls = false;
        }
    },
    components: {
        phoneComponent, emailComponent
    }
}