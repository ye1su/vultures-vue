import { defineComponent, createVNode, toRefs, ref, withDirectives, createTextVNode, vShow, computed } from "vue";
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
const cardProps$1 = {
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
  props: cardProps$1,
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
var input = "";
const inputProps = {
  placeholder: {
    type: String,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: false
  },
  modlueValue: {
    type: String,
    default: ""
  },
  onHandleChange: {
    type: Function,
    default: void 0
  },
  "update:modlueValue": {
    type: Function,
    default: void 0
  }
};
var Input = defineComponent({
  name: "VulInput",
  props: inputProps,
  emits: ["onHandleChange", "update:modlueValue"],
  setup(props, ctx) {
    const {
      disabled
    } = toRefs(props);
    const classList = ref(["inp"]);
    disabled.value && classList.value.push("dis");
    const getInfo = ($event) => {
      ctx.emit("update:modlueValue", $event.target.value);
      ctx.emit("onHandleChange", $event.target.value);
    };
    return () => {
      return createVNode("div", null, [createVNode("input", {
        "type": "text",
        "class": classList.value,
        "disabled": disabled.value,
        "placeholder": props.placeholder,
        "onInput": getInfo,
        "value": props.modlueValue
      }, null)]);
    };
  }
});
Input.install = function(app) {
  app.component(Input.name, Input);
};
var InputPlugin = {
  title: "Input \u8F93\u5165\u6846",
  category: "\u6570\u636E\u5C55\u793A",
  install(app) {
    app.use(Input);
  }
};
const modalProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  "update:modelValue": {
    type: Function,
    default: void 0
  },
  onSure: {
    type: Function
  }
};
function useModal(ctx) {
  const sendModuleValue = (tag) => {
    ctx.emit("update:modelValue", tag);
  };
  const cancelBubol = (e) => {
    e.stopPropagation();
  };
  return {
    cancelBubol,
    sendModuleValue
  };
}
var modal = "";
var Modal = defineComponent({
  name: "VulModal",
  props: modalProps,
  emits: ["update:modelValue", "onSure"],
  setup(props, ctx) {
    const {
      cancelBubol,
      sendModuleValue
    } = useModal(ctx);
    const closeWindwo = (e) => {
      cancelBubol(e);
      sendModuleValue(false);
    };
    const clickContent = (e) => {
      cancelBubol(e);
      sendModuleValue(true);
    };
    const getSure = (e) => {
      ctx.emit("onSure");
      closeWindwo(e);
    };
    return () => {
      var _a, _b, _c, _d;
      return withDirectives(createVNode("div", {
        "class": "modal",
        "onClick": closeWindwo
      }, [createVNode("div", {
        "class": "base-model__content",
        "onClick": clickContent
      }, [createVNode("div", {
        "class": "base-model__title"
      }, [(_b = (_a = ctx.slots).title) == null ? void 0 : _b.call(_a)]), (_d = (_c = ctx.slots).default) == null ? void 0 : _d.call(_c), createVNode("div", {
        "class": "base-model__control"
      }, [createVNode("span", {
        "onClick": getSure
      }, [createTextVNode("\u786E\u5B9A")]), createVNode("span", {
        "onClick": closeWindwo
      }, [createTextVNode("\u5173\u95ED")])])])]), [[vShow, props.modelValue]]);
    };
  }
});
Modal.install = function(app) {
  app.component(Modal.name, Modal);
};
var ModalPlugin = {
  title: "Modal \u6811",
  category: "\u6570\u636E\u5C55\u793A",
  install(app) {
    app.use(Modal);
  }
};
const DEFAULT_PLUGIN_OPTIONS = {
  directive: "ripple",
  color: "currentColor",
  initialOpacity: 0.2,
  finalOpacity: 0.1,
  duration: 0.8,
  easing: "ease-out",
  delayTime: 75,
  disabled: false
};
const createContainer = ({
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius
}) => {
  const rippleContainer = document.createElement("div");
  rippleContainer.style.top = "0";
  rippleContainer.style.left = "0";
  rippleContainer.style.width = "100%";
  rippleContainer.style.height = "100%";
  rippleContainer.style.position = "absolute";
  rippleContainer.style.borderRadius = `${borderTopLeftRadius} ${borderTopRightRadius} ${borderBottomRightRadius} ${borderBottomLeftRadius}`;
  rippleContainer.style.overflow = "hidden";
  rippleContainer.style.pointerEvents = "none";
  rippleContainer.style.webkitMaskImage = "-webkit-radial-gradient(white, black)";
  return rippleContainer;
};
const createrippleElement = (x, y, size, options) => {
  const rippleElement = document.createElement("div");
  rippleElement.style.position = "absolute";
  rippleElement.style.width = `${size}px`;
  rippleElement.style.height = `${size}px`;
  rippleElement.style.top = `${y}px`;
  rippleElement.style.left = `${x}px`;
  rippleElement.style.background = options.color;
  rippleElement.style.borderRadius = "50%";
  rippleElement.style.opacity = `${options.initialOpacity}`;
  rippleElement.style.transform = `translate(-50%,-50%) scale(0)`;
  rippleElement.style.transition = `transform ${options.duration}s ${options.easing}, opacity ${options.duration}s ${options.easing}`;
  return rippleElement;
};
function magnitude(x1, y1, x2, y2) {
  const deltaX = x1 - x2;
  const deltaY = y1 - y2;
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}
function getDistanceToFurthestCorner(x, y, { width, height }) {
  const topLeft = magnitude(x, y, 0, 0);
  const topRight = magnitude(x, y, width, 0);
  const bottomLeft = magnitude(x, y, 0, height);
  const bottomRight = magnitude(x, y, width, height);
  return Math.max(topLeft, topRight, bottomLeft, bottomRight);
}
const getRelativePointer = ({ x, y }, { top, left }) => ({
  x: x - left,
  y: y - top
});
const RIPPLE_COUNT = "vRippleCountInternal";
function incrementRippleCount(el) {
  const count = getRippleCount(el);
  setRippleCount(el, count + 1);
}
function decrementRippleCount(el) {
  const count = getRippleCount(el);
  setRippleCount(el, count - 1);
}
function setRippleCount(el, count) {
  el.dataset[RIPPLE_COUNT] = count.toString();
}
function getRippleCount(el) {
  var _a;
  return parseInt((_a = el.dataset[RIPPLE_COUNT]) != null ? _a : "0", 10);
}
function deleteRippleCount(el) {
  delete el.dataset[RIPPLE_COUNT];
}
const MULTIPLE_NUMBER = 2.05;
const ripple = (event, el, options) => {
  const rect = el.getBoundingClientRect();
  const computedStyles = window.getComputedStyle(el);
  const { x, y } = getRelativePointer(event, rect);
  const size = MULTIPLE_NUMBER * getDistanceToFurthestCorner(x, y, rect);
  const rippleContainer = createContainer(computedStyles);
  const rippleEl = createrippleElement(x, y, size, options);
  incrementRippleCount(el);
  let originalPositionValue = "";
  if (computedStyles.position === "static") {
    if (el.style.position)
      originalPositionValue = el.style.position;
    el.style.position = "relative";
  }
  rippleContainer.appendChild(rippleEl);
  el.appendChild(rippleContainer);
  let shouldDissolveripple = false;
  const releaseripple = (e) => {
    if (typeof e !== "undefined") {
      document.removeEventListener("pointerup", releaseripple);
      document.removeEventListener("pointercancel", releaseripple);
    }
    if (shouldDissolveripple)
      dissolveripple();
    else
      shouldDissolveripple = true;
  };
  const dissolveripple = () => {
    rippleEl.style.transition = "opacity 150ms linear";
    rippleEl.style.opacity = "0";
    setTimeout(() => {
      rippleContainer.remove();
      decrementRippleCount(el);
      if (getRippleCount(el) === 0) {
        deleteRippleCount(el);
        el.style.position = originalPositionValue;
      }
    }, 150);
  };
  document.addEventListener("pointerup", releaseripple);
  document.addEventListener("pointercancel", releaseripple);
  const token = setTimeout(() => {
    document.removeEventListener("pointercancel", cancelripple);
    requestAnimationFrame(() => {
      rippleEl.style.transform = `translate(-50%,-50%) scale(1)`;
      rippleEl.style.opacity = `${options.finalOpacity}`;
      setTimeout(() => releaseripple(), options.duration * 1e3);
    });
  }, options.delayTime);
  const cancelripple = () => {
    clearTimeout(token);
    rippleContainer.remove();
    document.removeEventListener("pointerup", releaseripple);
    document.removeEventListener("pointercancel", releaseripple);
    document.removeEventListener("pointercancel", cancelripple);
  };
  document.addEventListener("pointercancel", cancelripple);
};
const optionMap = /* @__PURE__ */ new WeakMap();
const globalOptions = { ...DEFAULT_PLUGIN_OPTIONS };
var RippleDirective = {
  mounted(el, binding) {
    var _a;
    optionMap.set(el, (_a = binding.value) != null ? _a : {});
    el.addEventListener("pointerdown", (event) => {
      const options = optionMap.get(el);
      if (binding.value && binding.value.disabled)
        return;
      if (options === false)
        return;
      ripple(event, el, {
        ...globalOptions,
        ...options
      });
    });
  },
  updated(el, binding) {
    var _a;
    optionMap.set(el, (_a = binding.value) != null ? _a : {});
  }
};
var RipplePlugin = {
  title: "Ripple \u6C34\u6CE2\u7EB9",
  category: "\u901A\u7528",
  install(app) {
    app.directive("Ripple", RippleDirective);
  }
};
const IconSearch = () => {
  return createVNode("svg", {
    "class": "icon",
    "viewBox": "0 0 1025 1024",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg",
    "p-id": "2015",
    "width": "20px",
    "height": "20px"
  }, [createVNode("path", {
    "d": "M401.271618 64.685719a335.31276 335.31276 0 1 1-126.692351 24.641081A335.55533 335.55533 0 0 1 401.271618 64.685719m0-64.685365a399.967803 399.967803 0 0 0-283.736289 117.535329c-156.659868 156.659868-156.659868 410.772281 0 567.472577a401.251404 401.251404 0 0 0 567.472577 0c156.659868-156.659868 156.659868-410.772281 0-567.472577A399.988018 399.988018 0 0 0 401.271618 0.000354z",
    "fill": "#40AE7C",
    "p-id": "2016"
  }, null), createVNode("path", {
    "d": "M625.598272 670.114812m7.14679-7.14679l31.445879-31.445879q7.146791-7.146791 14.293581 0l343.789217 343.789217q7.146791 7.146791 0 14.293581l-31.445878 31.445879q-7.146791 7.146791-14.293582 0l-343.789217-343.789217q-7.146791-7.146791 0-14.293581Z",
    "fill": "#40AE7C",
    "p-id": "2017"
  }, null)]);
};
const searchProps = {
  onSearch: {
    type: Function,
    default: void 0
  }
};
var search = "";
var Search = defineComponent({
  name: "VulSearch",
  props: searchProps,
  emits: ["onSearch"],
  setup(prop, ctx) {
    const alue = ref("");
    const haveInfo = ($evnet) => {
      console.log(alue.value);
      ctx.emit("onSearch", alue.value);
    };
    return () => {
      return createVNode("div", {
        "class": "isearch"
      }, [createVNode(Input, {
        "modlueValue": alue.value,
        "onUpdate:modlueValue": ($event) => alue.value = $event,
        "placeholder": "Happy to use iuUI"
      }, null), createVNode("div", {
        "class": "iconSearch",
        "onClick": haveInfo
      }, [createVNode(IconSearch, null, null)])]);
    };
  }
});
Search.install = function(app) {
  app.component(Search.name, Search);
};
var SearchPlugin = {
  title: "Search \u641C\u7D22\u6846",
  category: "\u6570\u636E\u5C55\u793A",
  install(app) {
    app.use(Search);
  }
};
const skeletonProps = {
  length: {
    type: Number,
    default: 300
  },
  num: {
    type: Number,
    default: 4
  }
};
var SkeletonItem = defineComponent({
  props: skeletonProps,
  setup(props, ctx) {
    const {
      length,
      num
    } = toRefs(props);
    console.log(num.value, length.value);
    return () => {
      return createVNode("div", null, [createVNode("div", {
        "class": "skeItem",
        "style": {
          width: length.value + "px"
        }
      }, null)]);
    };
  }
});
var skeleton = "";
var Skeleton = defineComponent({
  name: "VulSkeleton",
  props: skeletonProps,
  setup(props, ctx) {
    const {
      length,
      num
    } = toRefs(props);
    console.log(length.value);
    const list = (n) => {
      if (n == 1) {
        return createVNode(SkeletonItem, {
          "length": length.value
        }, null);
      }
      const res = [];
      for (let i = 0; i < n; i++) {
        if (i == 0) {
          res.push(createVNode(SkeletonItem, {
            "length": length.value * 0.3
          }, null));
        } else {
          res.push(createVNode(SkeletonItem, {
            "length": length.value
          }, null));
        }
      }
      return res;
    };
    return () => {
      return createVNode("div", null, [list(num.value)]);
    };
  }
});
Skeleton.install = function(app) {
  app.component(Skeleton.name, Skeleton);
};
var SkeletonPlugin = {
  title: "Skeleton \u9AA8\u67B6\u5C4F",
  install(app) {
    app.use(Skeleton);
  }
};
const switchProps = {
  color: {
    type: String,
    default: "#40ae7c"
  },
  change: {
    type: Function,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  "update:modelValue": {
    type: Function,
    default: void 0
  }
};
var _switch = "";
var Switch = defineComponent({
  name: "VulSwitch",
  props: switchProps,
  emits: ["update:modelValue", "change"],
  setup(props, ctx) {
    let tagSwitch = ref(false);
    let colorSwitch = ref("#e3e3e3");
    const isDisable = ref(["switch-box"]);
    const inp = ref(null);
    props.modelValue && (tagSwitch.value = true);
    props.disabled ? isDisable.value.push("disSwitchBox") : "";
    const toggole = () => {
      tagSwitch.value = !tagSwitch.value;
      ctx.emit("update:modelValue", tagSwitch.value);
      ctx.emit("change", tagSwitch.value);
    };
    const sClass = computed(() => {
      if (tagSwitch.value) {
        colorSwitch.value = props.color;
        return "switch-label-active";
      } else {
        colorSwitch.value = "#e3e3e3";
        return "switch-label";
      }
    });
    return {
      tagSwitch,
      toggole,
      sClass,
      inp,
      colorSwitch,
      isDisable
    };
  },
  render() {
    return createVNode("div", {
      "class": this.isDisable,
      "onChange": this.toggole
    }, [createVNode("label", {
      "class": this.sClass,
      "for": "switch-input",
      "style": {
        "background-color": this.colorSwitch
      }
    }, null), createVNode("input", {
      "class": "switch-input",
      "type": "checkbox",
      "id": "switch-input",
      "ref": "inp",
      "checked": this.tagSwitch,
      "disabled": this.disabled,
      "style": this.disabled ? {
        "cursor": "not-allowed"
      } : ""
    }, null)]);
  }
});
Switch.install = function(app) {
  app.component(Switch.name, Switch);
};
var SwitchPlugin = {
  title: "Switch \u5F00\u5173",
  install(app) {
    app.use(Switch);
  }
};
var tooltip = "";
const cardProps = {
  position: {
    type: String,
    default: "top"
  },
  tooltip: {
    type: String,
    default: "hello iuUI"
  }
};
var Tooltip = defineComponent({
  name: "VulTooltip",
  props: cardProps,
  setup(props, ctx) {
  },
  render() {
    var _a, _b;
    const {
      tooltip: tooltip2,
      position
    } = this;
    return createVNode("div", {
      "data-tooltip": tooltip2,
      "data-position": position
    }, [(_b = (_a = this.$slots).default) == null ? void 0 : _b.call(_a)]);
  }
});
Tooltip.install = function(app) {
  app.component(Tooltip.name, Tooltip);
};
var TooltipPlugin = {
  title: "Tooltip \u63D0\u793A",
  category: "\u6570\u636E\u5C55\u793A",
  install(app) {
    app.use(Tooltip);
  }
};
const treeProps = {
  data: {
    type: Array,
    default: () => []
  }
};
const IconOpen = (props) => {
  return createVNode("svg", {
    "width": "16px",
    "height": "16px",
    "viewBox": "0 0 16 16",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg",
    "class": ["svg-icon svg-icon-close", props.class]
  }, [createVNode("g", {
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("rect", {
    "x": "0.5",
    "y": "0.5",
    "width": "15",
    "height": "15",
    "rx": "2",
    "stroke": "#40AE7C"
  }, null), createVNode("rect", {
    "x": "4",
    "y": "7",
    "width": "8",
    "height": "2",
    "fill": "#40AE7C"
  }, null)])]);
};
const IconClose = (props) => {
  return createVNode("svg", {
    "width": "16px",
    "height": "16px",
    "viewBox": "0 0 16 16",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg",
    "class": ["svg-icon", props.class]
  }, [createVNode("g", {
    "stroke": "none",
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("rect", {
    "x": "0.5",
    "y": "0.5",
    "width": "15",
    "height": "15",
    "rx": "2",
    "stroke": "#252b3a"
  }, null), createVNode("path", {
    "fill": "#252b3a",
    "d": "M8.75,4 L8.75,7.25 L12,7.25 L12,8.75 L8.749,8.75 L8.75,12 L7.25,12 L7.249,8.75 L4,8.75 L4,7.25 L7.25,7.25 L7.25,4 L8.75,4 Z"
  }, null)])]);
};
function useToggle(data) {
  const openedTree = (tree2) => {
    return tree2.reduce((acc, item) => item.open ? acc.concat(item, openedTree(item.children)) : acc.concat(item), []);
  };
  const openedData = ref(openedTree(data));
  const toggle = (item) => {
    if (!item.children)
      return;
    item.open = !item.open;
    openedData.value = openedTree(data);
  };
  return {
    openedData,
    toggle
  };
}
var tree = "";
var Tree = defineComponent({
  name: "VulTree",
  props: treeProps,
  emits: [],
  setup(props, ctx) {
    const {
      data
    } = toRefs(props);
    const {
      openedData,
      toggle
    } = useToggle(data.value);
    const Indent = () => {
      return createVNode("span", {
        "style": "display: inline-block; width: 16px; height: 16px;"
      }, null);
    };
    const renderNode = (item) => {
      return createVNode("div", {
        "style": {
          paddingLeft: `${24 * (item.level - 1)}px`
        }
      }, [createVNode("div", null, [item.children ? item.open ? createVNode(IconOpen, {
        "onClick": () => toggle(item)
      }, null) : createVNode(IconClose, {
        "onClick": () => toggle(item)
      }, null) : createVNode(Indent, null, null), createVNode("span", null, [item.label])])]);
    };
    return () => {
      return createVNode("div", null, [openedData.value.map((item) => renderNode(item))]);
    };
  }
});
Tree.install = function(app) {
  app.component(Tree.name, Tree);
};
var TreePlugin = {
  title: "Tree \u6811",
  category: "\u6570\u636E\u5C55\u793A",
  install(app) {
    app.use(Tree);
  }
};
const loadInstallPlugin = (app) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  (_a = ButtonPlugin.install) == null ? void 0 : _a.call(ButtonPlugin, app);
  (_b = CardPlugin.install) == null ? void 0 : _b.call(CardPlugin, app);
  (_c = InputPlugin.install) == null ? void 0 : _c.call(InputPlugin, app);
  (_d = ModalPlugin.install) == null ? void 0 : _d.call(ModalPlugin, app);
  (_e = RipplePlugin.install) == null ? void 0 : _e.call(RipplePlugin, app);
  (_f = SearchPlugin.install) == null ? void 0 : _f.call(SearchPlugin, app);
  (_g = SkeletonPlugin.install) == null ? void 0 : _g.call(SkeletonPlugin, app);
  (_h = SwitchPlugin.install) == null ? void 0 : _h.call(SwitchPlugin, app);
  (_i = TooltipPlugin.install) == null ? void 0 : _i.call(TooltipPlugin, app);
  (_j = TreePlugin.install) == null ? void 0 : _j.call(TreePlugin, app);
};
const VulPlugin = {
  install(app) {
    loadInstallPlugin(app);
  }
};
export { Button, VulPlugin as default };
