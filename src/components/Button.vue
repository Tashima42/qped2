<template>
  <div class="button">
    <button class="button" :style="style">
      <inline-svg class="icon" :src="this.hasIcon" width="30" height="30">
      </inline-svg>
      <p class="text">
        {{ text }}
      </p>
    </button>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";
export default {
  name: "Button",
  components: {
    InlineSvg,
  },
  props: {
    icon: String,
    variant: {
      type: String,
      deafult: "filled",
    },
    color: {
      type: String,
      default: "grey",
    },
    text: String,
  },
  data() {
    return {
      blue: "#007BFF",
      grey: "#6C757D",
      darkGrey: "#343A40",
      light: "white",
    };
  },
  computed: {
    hasIcon() {
      if (typeof this.icon === "string") {
        return require(`../assets/icons/${this.icon}.svg`);
      }
      return ""
    },
    style() {
      let background = this.grey;
      let color = this.light;
      let outline = background;

      if (this.color === "dark-grey") {
        background = this.darkGrey;
      } else if (this.color === "blue") {
        background = this.blue;
      } else if (this.color === "grey") {
        background = this.grey;
      }

      if (this.variant === "outline") {
        outline = background;
        color = background;
        background = this.light;
      }

      return `
        background: ${background};
        color: ${color};
        border-color: ${outline};
        border-style: solid;
        border-width: large;
        border-radius: 4px;
        width: 97px;
        height: 36px;
        display: flex;
      `;
    },
  },
};
</script>

<style lang="css" scoped>
.button:active {
  transform: translate(1px, 1px);
}
</style>
