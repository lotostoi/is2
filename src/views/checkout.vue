<template>
  <div>
    <header-secondery></header-secondery>
    <main>
      <div class="shipping_adress">
        <h2 class="shiping_">01. Shipping Adress</h2>
        <div class="check_register">
          <check>
          </check>
          <registed>
          </registed>
        </div>
      </div>
      <div class="paragraph1_6">
        <h2 class="paragraph">02. BILLING INFORMATION</h2>
      </div>
      <div class="paragraph1_6">
        <h2 class="paragraph">03. SHIPPING INFORMATION</h2>
      </div>
      <div class="paragraph1_6">
        <h2 class="paragraph">04. SHIPPING METHOD</h2>
      </div>
      <div class="paragraph1_6">
        <h2 class="paragraph">05. PAYMENT METHOD</h2>
      </div>
      <div class="paragraph1_6">
        <h2 class="paragraph">06. ORDER REVIEW</h2>
      </div>
    </main>
  </div>
</template>

<script>
import Check from "@/components/check";
import Registed from "@/components/registed";
import HeaderSecondery from "@/components/header-secondery";
import { email, required, minLength } from "vuelidate/lib/validators";
export default {

  data: () => ({
    email: "",
    password: "",
  }),
  components:{ HeaderSecondery, Registed, Check },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(12) },
  },

  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData);
      this.$router.push("/");
    },
  },
};

</script>

<style scoped>
.validate_form_invalid {
  font-size: small;
  color: red;
}
</style>