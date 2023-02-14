/**
 *
 * @param {string} tag
 * @param {object} options
 * @param {[string]} options.classNames[]
 * @param {object} options.attributes  {'src':path, 'alt':name}
 * @param {object} options.styles {styleName:styleValue}
 * @param {object} options.listeners
 * @returns
 */
function createElement(
    tag = "div",
    { classNames, attributes, styles, listeners } = {},
    ...children
  ) {
    const elem = document.createElement(tag);
    if (classNames) {
      elem.classList.add(...classNames);
    }
    if (attributes) {
      for (const [nameAttr, valueAttr] of Object.entries(attributes)) {
        elem.setAttribute(nameAttr, valueAttr);
      }
    }
    if (styles) {
      for (const [nameStyle, valueStyle] of Object.entries(styles)) {
        elem.style[nameStyle] = valueStyle;
      }
    }
    if (listeners) {
      for (const [eventType, eventHandler] of Object.entries(listeners)) {
        elem.addEventListener(eventType, eventHandler);
      }
    }
    elem.append(...children);
    return elem;
  }