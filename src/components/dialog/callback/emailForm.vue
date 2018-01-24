<template lang='pug'>
    .dialog.phone-form
        .dialog__overlay.desktop(@click="closeDialog")
        .dialog__container.phone-form
            button.dialog__close(@click="closeDialog")

            .dialog__content(v-if="!ok")
                .dialog__title Оставьте свой email и представитель компании свяжется с Вами в ближайшее время

                .dialog__group
                    input.field.dialog__field(type="text" placeholder="Ваше имя" v-model="formFields.name")
                    span.error-msg(v-if="validation.hasError('formFields.name')") {{ validation.firstError('formFields.name') }}

                .dialog__group
                    input.field.dialog__field(type="email" placeholder="Ваш email" v-model="formFields.email" pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/")
                    span.error-msg(v-if="validation.hasError('formFields.email')") {{ validation.firstError('formFields.email') }}

                .dialog__group
                    textarea.textarea.dialog__field(placeholder="Сообщение" v-model="formFields.message")

                button.dialog__btn.btn.btn_accent(type="button" @click="postRequest") Отправить

            .dialog__content(v-else)
</template>

<script>
    import Vue from '../../../../node_modules/vue/dist/vue';
    import VueResource from 'vue-resource';
    import VueMask from 'v-mask'
    import { VueMaskDirective } from 'v-mask'
    import SimpleVueValidation from 'simple-vue-validator';
    import { Validator } from 'simple-vue-validator';
    import mixin from '../../../mixins/mixins'

    Vue.use(VueResource)
    Vue.use(VueMask);
    Vue.directive('mask', VueMaskDirective);
    Vue.use(SimpleVueValidation);

    export default {
        mixins: [SimpleVueValidation.mixin, mixin],
        data(){
            return {
                ok: false,
                formFields: {
                    name: '',
                    email: '',
                    message: ''
                }
            }
        },
        validators: {
            'formFields.name'(value){
                return Validator.value(value).required('Обязательное поле');
            },
            'formFields.email'(value){
                return Validator.value(value).email('Введите корректный email');
            }
        },
        methods: {
            postRequest: function(){
                this.$validate()
                    .then(function (success) {
                        if (success) {
                            this.$http.post(
                                '/index.php?p1=/',
                                Object.assign(this.formFields, {func: 'getphone-form'}),
                                { emulateJSON: true } 
                            )
                            .then(function(success){
                
                                this.ok = true;
                                this.resetField(this.formFields)
                
                                setTimeout(() => {
                                    this.ok = false;
                                    this.show = '';
                                }, 1500);
                            }, function(error){
                                console.log(error);
                            })
                        }
                });
            }
        }
    }
</script>
