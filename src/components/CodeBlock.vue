<template>
  <div class="code">
    <pre>
      <code-highlight :language="language">
        {{code}}
      </code-highlight>
    </pre>
  </div>
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import 'prism-es6/components/prism-markup-templating';
import 'prism-es6/components/prism-c';
export default {
  name: "CodeBlock",
  components: {
    CodeHighlight,
  },
  props: {
    code: String,
    language: String,
  }
}
</script>
