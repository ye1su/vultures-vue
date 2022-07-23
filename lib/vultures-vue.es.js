import { defineComponent, createVNode } from "vue";
var buttonComponents = "";
const buttonProps = {
  type: {
    type: String,
    default: "default"
  },
  content: {
    type: String,
    default: "BUTTON"
  }
};
var BounceBtn = defineComponent({
  props: buttonProps,
  setup(props) {
    return () => {
      return createVNode("div", null, [createVNode("div", {
        "class": "button1"
      }, [createVNode("span", null, [props.content])])]);
    };
  }
});
var GradualBtn = defineComponent({
  props: buttonProps,
  setup(props) {
    return () => {
      return createVNode("div", null, [createVNode("div", {
        "class": "button2"
      }, [createVNode("span", null, [props.content])])]);
    };
  }
});
var NeonBtn = defineComponent({
  props: buttonProps,
  setup(props) {
    return () => {
      return createVNode("div", null, [createVNode("div", {
        "class": "button3"
      }, [createVNode("span", null, [props.content])])]);
    };
  }
});
var StreamerBtn = defineComponent({
  props: buttonProps,
  setup(props) {
    return () => {
      return createVNode("div", {
        "class": "btn4"
      }, [createVNode("div", {
        "class": "button4"
      }, [createVNode("span", null, [props.content])])]);
    };
  }
});
var DefaultBtn = defineComponent({
  props: buttonProps,
  setup(props) {
    return () => {
      return createVNode("div", null, [createVNode("div", {
        "class": "button5"
      }, [createVNode("span", null, [props.content])])]);
    };
  }
});
var Button = defineComponent({
  name: "VulButton",
  props: buttonProps,
  setup(props) {
    const getBtn = () => {
      switch (props.type) {
        case "default":
          return createVNode(DefaultBtn, {
            "content": props.content
          }, null);
        case "bounce":
          return createVNode(BounceBtn, {
            "content": props.content
          }, null);
        case "neno":
          return createVNode(NeonBtn, {
            "content": props.content
          }, null);
        case "fradual":
          return createVNode(GradualBtn, {
            "content": props.content
          }, null);
        case "streamer":
          return createVNode(StreamerBtn, {
            "content": props.content
          }, null);
        default:
          return createVNode(DefaultBtn, {
            "content": props.content
          }, null);
      }
    };
    return () => {
      return createVNode("div", null, [getBtn()]);
    };
  }
});
Button.install = function(app) {
  app.component(Button.name, Button);
};
var ButtonPlugin = {
  title: "Button \u6309\u94AE",
  install(app) {
    app.use(Button);
  }
};
const loadInstallPlugin = (app) => {
  var _a;
  (_a = ButtonPlugin.install) == null ? void 0 : _a.call(ButtonPlugin, app);
};
const VulPlugin = {
  install(app) {
    loadInstallPlugin(app);
  }
};
export { Button, VulPlugin as default };
