<template lang='pug'>
    .dialog.phone-form
        .dialog__overlay.desktop(@click="closeDialog")
        .dialog__container.phone-form
            button.dialog__close(@click="closeDialog")

            .dialog__content(v-if="!ok")
                .dialog__title Оставьте свой номер телефона и представитель компании свяжется с Вами в ближайшее время

                .dialog__group
                    input.field.dialog__field(type="text" placeholder="Ваше имя" v-model="formFields.name")
                    span.error-msg(v-if="validation.hasError('formFields.name')") {{ validation.firstError('formFields.name') }}

                .dialog__group.dialog__group_last
                    input.field.dialog__field(type="tel" v-mask="'(###) ###-##-##'" placeholder="Ваш телефон" v-model="formFields.phone")
                    span.error-msg(v-if="validation.hasError('formFields.phone')") {{ validation.firstError('formFields.phone') }}

                button.dialog__btn.btn.btn_accent(type="button" @click="postRequest") Перезвонить

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
                    phone: ''
                }
            }
        },
        validators: {
            'formFields.name'(value){
                return Validator.value(value).required('Обязательное поле');
            },
            'formFields.phone'(value){
                return Validator.value(value).required('Обязательное поле');
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
