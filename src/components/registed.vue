<template>
  <div class="registed">
    <p class="guest">Already registed?</p>
    <p class="sub_guest">Please log in below</p>
    <form
        method="post"
        name="log_in"
        action=""
        @submit.prevent="submitHandler"
    >
      <div class="text_login">
        <lable for="gast_email" class="email_password"
        >EMAIL ADDRESS <span class="zvezda">*</span>
        </lable>
        <input
            type="text"
            id="gast_email"
            v-model.trim="email"
            :class="{
                    invalid:
                      ($v.email.$dirty && !$v.email.required) ||
                      ($v.email.$dirty && !$v.email.email),
                  }"
            placeholder=""
            autofocus
            pattern="^([A-Za-z0-9\.-]+)(@)([a-z0-9-]+)(\.)([a-z0-9]{2,})$"
        />
        <small
            v-if="$v.email.$dirty && !$v.email.required"
            class="validate_form_invalid"
        >Введите email</small
        >
        <small
            v-else-if="$v.email.$dirty && !$v.email.email"
            class="validate_form_invalid"
        >Введите корректный email</small
        >

        <lable for="gast_password" class="email_password"
        >PASSWORD <span class="zvezda">*</span></lable
        >
        <input
            type="text"
            id="gast_password"
            v-model.trim="password"
            :class="{
                    invalid:
                      ($v.password.$dirty && !$v.password.required) ||
                      ($v.password.$dirty && !$v.password.minLength),
                  }"
            placeholder=""
        />
        <small
            v-if="$v.password.$dirty && !$v.password.required"
            class="validate_form_invalid"
        >Введите пароль</small
        >
        <small
            v-else-if="$v.password.$dirty && !$v.password.minLength"
            class="validate_form_invalid"
        >Пароль не должен быть меньше
          {{ $v.password.$params.minLength.min }} символов</small
        >
      </div>
      <p class="required_fileds" style="padding-bottom: 22px">
        *Required Fileds
      </p>
      <button type="submit" class="continue">Log in</button>
      <a href="" class="forgot">Forgot Password ?</a>
    </form>
  </div>
</template>

<script>
export default {
  name: "registed"
}
</script>

<style scoped>

</style>