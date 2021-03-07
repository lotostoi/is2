<template>
  <div class="check">
    <p class="guest">Check as a guest or register</p>
    <p class="sub_guest">Register with us for future convenience</p>
    <form
        method="post"
        name="log_in"
        action=""
        @submit.prevent="$parent.submitHandler"
    >
      <div class="radio">
        <div>
          <input type="radio" id="gast_radio" name="a" />
          <label for="gast_radio" class="label_radio"
          >checkout as guest</label
          >
        </div>
        <div>
          <input type="radio" id="register_radio" name="a" checked />
          <label for="register_radio" class="label_radio"
          >register</label>
        </div>
      </div>
      <p class="save_tame">register and save time!</p>
      <p class="sub_guest">Register with us for future convenience</p>
      <p class="sub_guest" style="padding-top: 15px">
        <i class="fa-angle-double-right" aria-hidden="true"></i> Fast
        and easy checkout
      </p>
      <p class="sub_guest" style="padding-bottom: 38px">
        <i class="fa-angle-double-right" aria-hidden="true"></i> Easy
        access to your order history and status
      </p>
      <button type="submit" class="continue">Continue</button>
    </form>
  </div>
</template>

<script>

export default {
name: "check"
}
</script>

<style scoped>

</style>