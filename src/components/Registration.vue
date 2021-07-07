<template>
  <b-form-row class="justify-content-center">
    <b-col lg="8">
      <b-card>
        <h3 class="text-center mb-5">
          <span v-if="this.currentUser">Редактирование профиля</span>
          <span v-else>Регистрация нового участника</span>
        </h3>
        <b-form @submit.prevent="handleSubmit">
          <b-row>
            <b-col sm="12" md="6">
              <b-form-group
                label="ФИО"
                label-for="name"
                :invalid-feedback="'Введите свое имя'"
                :state="$v.name.$dirty ? $v.name.required : null"
              >
                <b-form-input
                  id="name"
                  v-model.lazy="name"
                  @blur="$v.name.$touch"
                  :state="$v.name.$dirty ? $v.name.required : null"
                />
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6">
              <b-form-group
                label="Дата рождения"
                label-for="date"
                :invalid-feedback="
                  $v.age.$dirty && !$v.age.minValue
                    ? 'Зарегистрироваться можно с 14 полных лет'
                    : 'Выберите дату своего рождения'
                "
                :state="$v.age.$dirty ? $v.age.required : null"
              >
                <b-form-datepicker
                  id="date"
                  v-model="date"
                  :max="max"
                  @input="$v.age.$touch"
                  placeholder="Выберите дату рождения"
                  class="mb-2"
                  :state="$v.age.$dirty ? $v.age.required && $v.age.minValue : null"
                />
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6">
              <b-form-group
                label="Email"
                label-for="email"
                :invalid-feedback="
                  $v.email.$dirty && !$v.email.required
                    ? 'Введите свой Email'
                    : 'Некорректный Email'
                "
                :state="$v.email.$dirty ? $v.email.required && $v.email.email : null"
              >
                <b-form-input
                  id="email"
                  v-model.trim="email"
                  @blur="$v.email.$touch"
                  :state="$v.email.$dirty ? $v.email.required && $v.email.email : null"
                />
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6">
              <b-form-group
                label="Телефон"
                label-for="phone"
                :invalid-feedback="
                  $v.phone.$dirty && !$v.phone.required
                    ? 'Введите свой номер телефона'
                    : 'Некорректный номер телефона'
                "
                :state="$v.phone.$dirty ? $v.phone.required : null"
              >
                <b-form-input
                  id="phone"
                  v-mask="'+7 (###) ###-##-##'"
                  v-model.trim="phone"
                  @blur="$v.phone.$touch"
                  :state="
                    $v.phone.$dirty
                      ? $v.phone.required && $v.phone.minLength && $v.phone.maxLength
                      : null
                  "
                />
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6">
              <b-form-group
                label="Дистанция"
                label-for="distance"
                :invalid-feedback="'Не выбрана дистанция'"
                :state="$v.distance.$dirty ? $v.distance.required : null"
              >
                <b-form-select
                  id="distance"
                  v-model.trim="distance"
                  @change="$v.distance.$touch"
                  :state="$v.distance.$dirty ? $v.distance.required : null"
                >
                  <b-form-select-option value="3">3 км</b-form-select-option>
                  <b-form-select-option value="5">5 км</b-form-select-option>
                  <b-form-select-option value="10">10 км</b-form-select-option>
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6">
              <b-form-group
                label="Сумма взноса (₽)"
                label-for="payment"
                :invalid-feedback="'Cумма взноса должна быть от 100 до 10 000'"
                :state="$v.payment.$dirty ? $v.payment.required : null"
              >
                <b-form-input
                  id="payment"
                  type="number"
                  v-model.trim="payment"
                  @blur="$v.payment.$touch"
                  :state="
                    $v.payment.$dirty
                      ? $v.payment.required && $v.payment.minValue && $v.payment.maxValue
                      : null
                  "
                />
              </b-form-group>
            </b-col>

            <b-col v-if="!this.currentUser" sm="12" class="my-3">
              <b-form-checkbox
                checked="false"
                id="add-profile"
                v-model="addProfile"
                name="add-profile"
              >
                Создать профиль
              </b-form-checkbox>
            </b-col>
            <b-col v-if="addProfile || this.currentUser">
              <b-row>
                <b-col sm="12" md="6">
                  <b-form-group label="Логин" label-for="email">
                    <b-form-input v-model.trim="email" readonly placeholder="Ваш Email" />
                  </b-form-group>
                </b-col>
                <b-col sm="12" md="6">
                  <b-form-group
                    label="Пароль"
                    label-for="pass"
                    :invalid-feedback="
                      $v.pass.$dirty && !$v.pass.required
                        ? 'Поле не должно быть пустым'
                        : 'Пароль должен состоять из любых символов от 3 до 10 знаков включительно'
                    "
                    :state="$v.pass.$dirty ? $v.pass.required : null"
                  >
                    <b-form-input
                      id="pass"
                      @blur="$v.pass.$touch"
                      :state="
                        $v.pass.$dirty
                          ? $v.pass.required && $v.pass.minLength && $v.pass.maxLength
                          : null
                      "
                      v-model="pass"
                      class="mb-2"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
            </b-col>
            <b-col sm="12" class="mt-3 text-center">
              <b-button :disabled="$v.$invalid" type="submit" variant="primary">
                <span v-if="this.currentUser">Сохранить</span
                ><span v-else>Зарегистрироваться</span>
              </b-button>
            </b-col>
          </b-row>
        </b-form>
        <b-modal ref="added-modal" centered hide-header hide-footer>
          <h4 class="text-center mb-4">
            Спасибо<br />
            Вы успешно зарегистрированы!
          </h4>
          <div class="text-center">
            <router-link class="btn btn-primary" to="/participants"
              >Перейти к списку участников</router-link
            >
          </div>
        </b-modal>
        <b-modal ref="updated-modal" centered hide-header hide-footer>
          <h4 class="text-center mb-4">Данные изменены!</h4>
          <div class="text-center">
            <router-link class="btn btn-primary" to="/participants"
              >Перейти к списку участников</router-link
            >
          </div>
        </b-modal>
      </b-card>
    </b-col>
  </b-form-row>
</template>

<script>
import {
  email,
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
} from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Registration",

  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth());
    maxDate.setDate(maxDate.getDate() + 5);
    return {
      id: 0,
      name: "",
      date: "",
      age: 0,
      email: "",
      phone: "",
      distance: "",
      payment: "",
      pass: "",
      addProfile: false,
      max: maxDate,
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
    profileValidate() {
      if (this.addProfile || this.currentUser) {
        return { required, minLength: minLength(3), maxLength: maxLength(10) };
      } else {
        return {};
      }
    },
  },
  validations() {
    {
      return {
        name: { required },
        age: { required, minValue: minValue(14) },
        email: { required, email },
        phone: { required, minLength: minLength(18), maxLength: maxLength(18) },
        distance: { required },
        payment: { required, minValue: minValue(100), maxValue: maxValue(10000) },
        pass: this.profileValidate,
      };
    }
  },
  watch: {
    date(date) {
      let currentDate = new Date();
      this.age = currentDate.getFullYear() - date.substring(4, -4);
      if (currentDate.getMonth() < date.substring(5, 7)) {
        this.age--;
      }
      return this.age;
    },
  },

  methods: {
    ...mapActions(["addUser", "updateUser"]),
    handleSubmit() {
      if (!this.$v.$invalid) {
        let user = {
          id: this.id,
          name: this.name,
          date: this.date,
          email: this.email,
          phone: this.phone.replace(/[^+,0-9]/g, ""),
          distance: this.distance,
          payment: this.payment,
          pass: this.pass,
          created_at: new Date().toJSON(),
        };
        if (this.currentUser) {
          this.updateUser(user);
          this.$refs["updated-modal"].show();
        } else {
          this.addUser(user);
          this.reset();
          this.$refs["added-modal"].show();
        }
      }
    },
    reset() {
      this.name = "";
      this.date = new Date().toJSON();
      this.email = "";
      this.phone = "";
      this.distance = 0;
      this.payment = 0;
      this.addProfile = false;
      this.pass = "";
      this.$v.$reset();
    },
  },
  mounted() {
    this.date = new Date().toJSON();
    if (this.currentUser) {
      this.id = this.currentUser.id;
      this.name = this.currentUser.name;
      this.date = this.currentUser.date;
      this.email = this.currentUser.email;
      this.phone = this.currentUser.phone;
      this.distance = this.currentUser.distance;
      this.payment = this.currentUser.payment;
      this.pass = this.currentUser.pass;
    }
  },
};
</script>
