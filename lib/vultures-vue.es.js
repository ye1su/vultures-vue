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
var card = "";
const cardProps = {
  align: {
    type: String,
    default: "start"
  },
  src: {
    type: String,
    default: ""
  }
};
var Card = defineComponent({
  name: "VulCard",
  props: cardProps,
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    const {
      align,
      src
    } = this;
    const alignCls = {
      "d-card-actions": true,
      "devui-card-actions": true,
      [`devui-card-actions-align-${align}`]: align !== "start"
    };
    return createVNode("div", {
      "class": "card-container devui-card"
    }, [(_b = (_a = this.$slots).default) == null ? void 0 : _b.call(_a), createVNode("div", {
      "class": "devui-card-header"
    }, [((_d = (_c = this.$slots).cardAvatar) == null ? void 0 : _d.call(_c)) ? createVNode("div", {
      "class": "devui-card-avatar"
    }, [(_f = (_e = this.$slots).cardAvatar) == null ? void 0 : _f.call(_e)]) : "", createVNode("div", {
      "class": "devui-card-header-title-area"
    }, [createVNode("div", {
      "class": "devui-card-title"
    }, [(_h = (_g = this.$slots).cardTitle) == null ? void 0 : _h.call(_g)]), createVNode("div", {
      "class": "devui-card-subtitle"
    }, [(_j = (_i = this.$slots).cardSubtitle) == null ? void 0 : _j.call(_i)])])]), src !== "" ? createVNode("img", {
      "src": src,
      "alt": "",
      "class": "devui-card-meta"
    }, null) : "", createVNode("div", {
      "class": "devui-card-content"
    }, [(_l = (_k = this.$slots).cardContent) == null ? void 0 : _l.call(_k)]), createVNode("div", {
      "class": alignCls
    }, [this.$slots.cardActions ? (_n = (_m = this.$slots).cardActions) == null ? void 0 : _n.call(_m) : ""])]);
  }
});
Card.install = function(app) {
  app.component(Card.name, Card);
};
var CardPlugin = {
  title: "Card \u5361\u7247",
  install(app) {
    app.use(Card);
  }
};
const loadInstallPlugin = (app) => {
  var _a, _b;
  (_a = ButtonPlugin.install) == null ? void 0 : _a.call(ButtonPlugin, app);
  (_b = CardPlugin.install) == null ? void 0 : _b.call(CardPlugin, app);
};
const VulPlugin = {
  install(app) {
    loadInstallPlugin(app);
  }
};
export { Button, VulPlugin as default };
