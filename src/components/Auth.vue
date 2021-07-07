<template>
    <div>
        <b-form-row class="justify-content-center" v-if="!currentUser">
            <b-col col lg="5">
                <b-card>
                    <h3 class="text-center mb-3">Авторизация</h3>
                    <b-form @submit.prevent="handleSubmit">
                        <b-form-group label="Логин" label-for="email" :invalid-feedback="'Поле не должно быть пустым'">
                            <b-form-input id="email" placeholder="email пользователя" v-model.trim="email" />
                        </b-form-group>
    
                        <b-form-group label="Пароль" label-for="pass" :invalid-feedback="'Поле не должно быть пустым'">
                            <b-form-input id="date" v-model="pass" class="mb-2" />
                        </b-form-group>
    
                        <b-button class="mt-3" :disabled="$v.$invalid" type="submit" variant="primary">
                            Войти
                        </b-button>
                    </b-form>
                </b-card>
            </b-col>
        </b-form-row>
        <Registration v-else class="mb-3" />
    </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import Registration from "@/components/Registration.vue";
import { mapGetters, mapActions } from "vuex";
export default {
    name: "Auth",
    components: { Registration },
    data: () => ({
        email: "",
        pass: "",
        showProfile: false,
    }),
    validations: {
        email: { required },
        pass: { required },
    },
    computed: {
        ...mapGetters(["users", "currentUser"]),
    },
    mounted() {
        this.date = new Date().toJSON();
    },
    methods: {
        ...mapActions(["authUser"]),
        handleSubmit() {
            let user = this.users.find((item) => item.email == this.email);
            if (user.pass == this.pass) {
                this.showProfile = true;
                this.authUser(user);
            }
        },
    },
};
</script>
