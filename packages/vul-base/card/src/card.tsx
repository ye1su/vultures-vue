/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 18:07:28
 * @FilePath: /iuUI/packages/card/src/card.tsx
 * @Description: update here
 */
import { defineComponent, PropType } from 'vue';
import './card.scss';

const cardProps = {
  align: {
    type: String as PropType<'start' | 'end' | 'spaceBetween'>,
    default: 'start'
  },
  src: {
    type: String,
    default: ''
  }
} as const;

export default defineComponent({
  name: 'VulCard',
  props: cardProps,

  render () {
    const {
      align,
      src
    } = this;
    const alignCls = {
      'd-card-actions':true,
      'devui-card-actions': true,
      [`devui-card-actions-align-${align}`]: align !== 'start',
    };
    return (
      <div class="card-container devui-card">
        {this.$slots.default?.()}
        <div class="devui-card-header">
        { this.$slots.cardAvatar?.()?<div class="devui-card-avatar">
           {this.$slots.cardAvatar?.()}
        </div>:'' }
          <div class="devui-card-header-title-area">
            <div class="devui-card-title">
              {this.$slots.cardTitle?.()}
            </div>
            <div class="devui-card-subtitle">
              {this.$slots.cardSubtitle?.()}
            </div>
          </div>
        </div>
        {src!==''?<img src={src} alt="" class="devui-card-meta"/>:''}
        <div class="devui-card-content" >
          {this.$slots.cardContent?.()}
        </div>
        <div class={alignCls}>
          {this.$slots.cardActions?this.$slots.cardActions?.():''}
        </div>
      </div>
    );
  }
});