interface IconParkIconElement extends HTMLElement {
  // 包含打包的图标id
  'icon-id'?: '57' | '58' | '59' | '61' | '62' | '63';
  // 包含打包的图标标识
  'name'?: 'back' | 'icon-name2' | 'icon-name3' | 'icon-name4';
  'size'?: string;
  'width'?: string;
  'height'?: string;
  'color'?: string;
  'stroke'?: string;
  'fill'?: string;
  'rtl'?: string;
  'spin'?: string;
  'class'?: string;
}

declare global {
  interface HTMLElementTagNameMap {
    'iconpark-icon': IconParkIconElement;
  }
}
