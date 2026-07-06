/* @ds-bundle: {"format":3,"namespace":"VerivoxDesignSystem_4126a3","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Chip","sourcePath":"components/display/Chip.jsx"},{"name":"IconHeading","sourcePath":"components/display/IconHeading.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Drawer","sourcePath":"components/feedback/Drawer.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"ButtonGroup","sourcePath":"components/forms/ButtonGroup.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"YesNo","sourcePath":"components/forms/YesNo.jsx"},{"name":"Icon","sourcePath":"components/foundation/Icon.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"eb43fe01f93f","components/brand/Logo.jsx":"e32f9eb94a64","components/display/Badge.jsx":"0f7c52dc5389","components/display/Card.jsx":"039d0fafa517","components/display/Chip.jsx":"f341174e48d6","components/display/IconHeading.jsx":"fee5f7135072","components/feedback/Alert.jsx":"810ee85044a3","components/feedback/Drawer.jsx":"664c8a6560d2","components/feedback/Modal.jsx":"29be7216bff5","components/feedback/Tooltip.jsx":"a175f36e8661","components/forms/ButtonGroup.jsx":"4060a72fff07","components/forms/Checkbox.jsx":"eb84c375eaff","components/forms/Input.jsx":"1831a4c718e0","components/forms/Radio.jsx":"0bf7e8ed528d","components/forms/Select.jsx":"3ee8c0148fb1","components/forms/YesNo.jsx":"82734e5091c3","components/foundation/Icon.jsx":"5b41c79a27dd","components/navigation/Stepper.jsx":"203f5a7cd3c0","ui_kits/zahnzusatz/AppHeader.jsx":"9dea1837f45c","ui_kits/zahnzusatz/CalculatorScreen.jsx":"ce4da38ef8b3","ui_kits/zahnzusatz/ComparisonScreen.jsx":"26183b9b0a2d","ui_kits/zahnzusatz/OfferCard.jsx":"932cda75dac6","ui_kits/zahnzusatz/ResultsScreen.jsx":"a67e7c462bd8","ui_kits/zahnzusatz/data.js":"86956c74c611"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VerivoxDesignSystem_4126a3 = window.VerivoxDesignSystem_4126a3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — the Verivox wordmark lockup. The orange brand "V" is the real
 * `verivox-filled` glyph from the VerivoxIcons font and serves as the initial
 * letter; the remaining "erivox" is set in bold alongside it. `variant`
 * "inverted" renders white for use on the orange brand surface.
 */
function Logo({
  size = 28,
  variant = 'default',
  style = {},
  ...rest
}) {
  const markColor = variant === 'inverted' ? 'var(--ds-color-white)' : 'var(--ds-color-brand-regular)';
  const wordColor = variant === 'inverted' ? 'var(--ds-color-white)' : 'var(--ds-palette-grey70)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: `${size * 0.04}px`,
      lineHeight: 1,
      userSelect: 'none',
      ...style
    },
    role: "img",
    "aria-label": "Verivox"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "icn icn-verivox-filled",
    style: {
      fontSize: `${size * 1.28}px`,
      color: markColor,
      lineHeight: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: `${size}px`,
      fontWeight: 700,
      letterSpacing: `${size * -0.018}px`,
      color: wordColor
    }
  }, "erivox"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const TONES = {
  brand: {
    bg: 'var(--ds-background-brand-light)',
    fg: 'var(--ds-font-text-brand-regular)',
    bd: 'var(--ds-border-brand-regular)'
  },
  neutral: {
    bg: 'var(--ds-background-neutral-light)',
    fg: 'var(--ds-font-text-neutral-regular)',
    bd: 'var(--ds-border-neutral-regular, #cdcbca)'
  },
  success: {
    bg: 'var(--ds-background-success-light)',
    fg: 'var(--ds-font-text-success)',
    bd: 'var(--ds-border-success-regular)'
  },
  info: {
    bg: 'var(--ds-background-info-light)',
    fg: 'var(--ds-font-text-info)',
    bd: 'var(--ds-border-info)'
  }
};

/**
 * Badge — small status/label pill. Used for tariff highlights ("Empfehlung"),
 * counts, and the tariff-score chip on offer cards. `solid` fills with brand.
 */
function Badge({
  children,
  tone = 'brand',
  solid = false,
  style = {}
}) {
  const t = TONES[tone] || TONES.brand;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '2px 8px',
      borderRadius: '20px',
      fontSize: 'var(--ds-font-size-xs)',
      fontWeight: 'var(--ds-font-weight-l)',
      lineHeight: 1.5,
      background: solid ? 'var(--ds-background-brand-regular)' : t.bg,
      color: solid ? 'var(--ds-font-text-inverted)' : t.fg,
      border: solid ? '1px solid transparent' : `1px solid ${t.bd}`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base surface container used across the product (person info box,
 * filter panel, offer card shell). White background, 1px neutral border, 3px
 * radius. `interactive` adds a subtle hover lift.
 */
function Card({
  children,
  padding = 'var(--ds-spacing-s)',
  interactive = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--ds-background-white)',
      border: '1px solid var(--ds-border-neutral-regular, #cdcbca)',
      borderRadius: 'var(--ds-stroke-xl)',
      padding,
      transition: interactive ? 'box-shadow .15s ease, border-color .15s ease' : 'none',
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.boxShadow = 'var(--ds-box-shadow)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.boxShadow = 'none';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/ButtonGroup.jsx
try { (() => {
/**
 * ButtonGroup (lib-button-group-control) — large selectable option buttons used
 * throughout the calculator for single choices (e.g. reimbursement level). Each
 * option is a full bordered button; the selected one gets an orange border and
 * brand-light fill. `orientation` stacks (vertical) or rows (horizontal).
 */
function ButtonGroup({
  label,
  options = [],
  value,
  onChange,
  orientation = 'vertical',
  wide = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: 'none',
      margin: 0,
      padding: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("legend", {
    style: {
      fontWeight: 'var(--ds-font-weight-l)',
      fontSize: 'var(--ds-font-size-m)',
      marginBottom: 'var(--ds-spacing-xxs)',
      padding: 0
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      gap: 'var(--ds-spacing-xxs)'
    }
  }, options.map(o => {
    const val = o.value ?? o;
    const lbl = o.label ?? o;
    const sub = o.subLabel;
    const sel = value === val;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      onClick: () => onChange && onChange(val),
      style: {
        flex: wide ? '1 1 auto' : 'none',
        textAlign: 'left',
        font: 'inherit',
        fontSize: 'var(--ds-font-size-m)',
        fontWeight: sel ? 'var(--ds-font-weight-l)' : 'var(--ds-font-weight-m)',
        padding: 'var(--ds-spacing-xs)',
        cursor: 'pointer',
        borderRadius: 'var(--ds-radius-l)',
        border: `1px solid ${sel ? 'var(--ds-border-brand-regular)' : 'var(--ds-border-neutral-regular, #cdcbca)'}`,
        background: sel ? 'var(--ds-background-brand-light)' : 'var(--ds-background-white)',
        color: 'var(--ds-font-text-neutral-regular)',
        boxShadow: sel ? 'inset 0 0 0 1px var(--ds-border-brand-regular)' : 'none',
        transition: 'border-color .15s ease, background .15s ease'
      }
    }, lbl, sub && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 'var(--ds-font-size-s)',
        fontWeight: 400,
        color: 'var(--ds-font-neutral-disabled)'
      }
    }, sub));
  })));
}
Object.assign(__ds_scope, { ButtonGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ButtonGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/**
 * Input (lib-input-control) — single-line text field with optional bold label,
 * hint and validation message. Border goes orange on focus, red when invalid.
 */
function Input({
  label,
  hint,
  value,
  placeholder,
  type = 'text',
  invalid = false,
  validationMessage,
  disabled = false,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 'var(--ds-font-weight-l)',
      fontSize: 'var(--ds-font-size-m)',
      marginBottom: 'var(--ds-spacing-xxs)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    style: {
      width: '100%',
      height: '48px',
      padding: '0 var(--ds-spacing-xs)',
      fontFamily: 'inherit',
      fontSize: 'var(--ds-font-size-m)',
      color: 'var(--ds-font-text-neutral-regular)',
      background: disabled ? 'var(--ds-background-neutral-light)' : 'var(--ds-background-white)',
      border: `1px solid ${invalid ? 'var(--ds-border-danger)' : 'var(--ds-border-neutral-regular, #cdcbca)'}`,
      borderRadius: 'var(--ds-radius-l)',
      outline: 'none',
      boxSizing: 'border-box'
    },
    onFocus: e => {
      if (!invalid) e.target.style.borderColor = 'var(--ds-border-brand-regular)';
    },
    onBlur: e => {
      if (!invalid) e.target.style.borderColor = 'var(--ds-border-neutral-regular, #cdcbca)';
    }
  }), hint && !invalid && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--ds-font-size-s)',
      color: 'var(--ds-font-neutral-disabled)',
      marginTop: 'var(--ds-spacing-xxxs)'
    }
  }, hint), invalid && validationMessage && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--ds-font-size-s)',
      color: 'var(--ds-font-text-danger)',
      marginTop: 'var(--ds-spacing-xxxs)'
    }
  }, validationMessage));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * Radio (lib-radio-control) — a group of single-choice options. Each option
 * renders as a labelled radio dot; the selected dot fills orange. Supports a
 * `flexSize` row layout (used in the results filter sidebar).
 */
function Radio({
  name,
  options = [],
  value,
  onChange,
  flexSize = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: flexSize ? 'row' : 'column',
      gap: flexSize ? 'var(--ds-spacing-xxs)' : 'var(--ds-spacing-xs)',
      flexWrap: 'wrap',
      ...style
    }
  }, options.map(o => {
    const val = o.value ?? o;
    const lbl = o.label ?? o;
    const sel = value === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ds-spacing-xxs)',
        cursor: 'pointer',
        flex: flexSize ? '1 1 auto' : 'none',
        justifyContent: flexSize ? 'center' : 'flex-start',
        padding: flexSize ? 'var(--ds-spacing-xxs) var(--ds-spacing-xs)' : 0,
        border: flexSize ? `1px solid ${sel ? 'var(--ds-border-brand-regular)' : 'var(--ds-border-neutral-regular, #cdcbca)'}` : 'none',
        borderRadius: flexSize ? 'var(--ds-radius-l)' : 0,
        background: flexSize && sel ? 'var(--ds-background-brand-light)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: `2px solid ${sel ? 'var(--ds-border-brand-regular)' : 'var(--ds-border-neutral-regular, #cdcbca)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, sel && /*#__PURE__*/React.createElement("span", {
      style: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: 'var(--ds-background-brand-regular)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--ds-font-size-m)'
      },
      onClick: () => onChange && onChange(val)
    }, lbl), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: val,
      checked: sel,
      onChange: () => onChange && onChange(val),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/YesNo.jsx
try { (() => {
/**
 * YesNo (lib-yes-no-control) — a two-option horizontal ButtonGroup for the
 * many Ja/Nein questions in the dental-condition step.
 */
function YesNo({
  label,
  hint,
  value,
  onChange,
  yesLabel = 'Ja',
  noLabel = 'Nein',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement(__ds_scope.ButtonGroup, {
    label: label,
    orientation: "horizontal",
    wide: true,
    value: value,
    onChange: onChange,
    options: [{
      label: yesLabel,
      value: 'yes'
    }, {
      label: noLabel,
      value: 'no'
    }]
  }), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--ds-font-size-s)',
      color: 'var(--ds-font-neutral-disabled)',
      marginTop: 'var(--ds-spacing-xxxs)'
    }
  }, hint));
}
Object.assign(__ds_scope, { YesNo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/YesNo.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — renders a glyph from the VerivoxIcons brand font (404 glyphs).
 * Pass the icon `name` exactly as used in the product, e.g. "tooth-outlined",
 * "user-outlined", "angle-right-filled". Outlined icons are the UI default;
 * "-filled" variants are used for emphasis/active states.
 */
function Icon({
  name,
  size = '24px',
  color,
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `icn icn-${name} ${className}`,
    "aria-hidden": "true",
    style: {
      fontSize: size,
      color: color || 'inherit',
      lineHeight: 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action control. Mirrors the production ds-button:
 * appearances primary / secondary / tertiary / text, optional left/right icons,
 * full-width, and disabled. Radius is the tight 3px brand radius; labels are bold.
 */
function Button({
  children,
  text,
  appearance = 'primary',
  size = 'medium',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const label = text != null ? text : children;
  const height = size === 'small' ? 40 : 48;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: `${height}px`,
    padding: '0 24px',
    borderRadius: 'var(--ds-stroke-xl)',
    font: 'inherit',
    fontSize: 'var(--ds-font-size-m)',
    fontWeight: 'var(--ds-font-weight-l)',
    lineHeight: 1,
    letterSpacing: 'var(--ds-letter-spacing-s)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto',
    border: '1px solid transparent',
    transition: 'background-color .15s ease, color .15s ease, border-color .15s ease',
    opacity: disabled ? 0.45 : 1,
    boxSizing: 'border-box',
    whiteSpace: 'nowrap'
  };
  const skins = {
    primary: {
      background: 'var(--ds-background-brand-regular)',
      color: 'var(--ds-font-text-inverted)',
      borderColor: 'var(--ds-background-brand-regular)'
    },
    secondary: {
      background: 'var(--ds-background-white)',
      color: 'var(--ds-font-text-brand-regular)',
      borderColor: 'var(--ds-border-brand-regular)'
    },
    tertiary: {
      background: 'var(--ds-background-white)',
      color: 'var(--ds-font-text-neutral-regular)',
      borderColor: 'var(--ds-border-neutral-regular, #cdcbca)'
    },
    text: {
      background: 'transparent',
      color: 'var(--ds-font-text-brand-regular)',
      borderColor: 'transparent',
      padding: '0 8px'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...skins[appearance],
      ...style
    },
    "data-appearance": appearance
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: "20px"
  }), label && /*#__PURE__*/React.createElement("span", null, label), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: "20px"
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Chip.jsx
try { (() => {
/**
 * Chip — compact, optionally selectable token. Used for the filter tags on the
 * results page and the category chips in the comparison view. When `selected`,
 * it adopts the brand-light surface with an orange border.
 */
function Chip({
  children,
  icon,
  selected = false,
  onClick,
  removable = false,
  onRemove,
  style = {}
}) {
  const clickable = !!onClick || removable;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--ds-spacing-xxs)',
      padding: 'var(--ds-spacing-xxxs) var(--ds-spacing-xs)',
      borderRadius: '20px',
      fontSize: 'var(--ds-font-size-s)',
      fontWeight: 'var(--ds-font-weight-m)',
      lineHeight: 1.5,
      cursor: clickable ? 'pointer' : 'default',
      background: selected ? 'var(--ds-background-brand-light)' : 'var(--ds-background-white)',
      color: 'var(--ds-font-text-neutral-regular)',
      border: `1px solid ${selected ? 'var(--ds-border-brand-regular)' : 'var(--ds-border-neutral-regular, #cdcbca)'}`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: "18px",
    color: selected ? 'var(--ds-icon-brand-regular)' : 'var(--ds-icon-neutral-muted)'
  }), children, removable && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close-outlined",
    size: "14px",
    color: "var(--ds-icon-neutral-muted)",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      cursor: 'pointer'
    }
  }));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/display/IconHeading.jsx
try { (() => {
/**
 * IconHeading (app-icon-heading) — a section heading with the icon set inside a
 * round neutral-light chip in brand orange. Used to title each block of the
 * calculator (insured person, condition, needs...).
 */
function IconHeading({
  icon,
  text,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ds-spacing-xxs)',
      fontSize: 'var(--ds-font-size-l)',
      fontWeight: 'var(--ds-font-weight-l)',
      color: 'var(--ds-font-headline-neutral-regular)',
      margin: 'var(--ds-spacing-s) 0 var(--ds-spacing-xs)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'var(--ds-background-neutral-light)',
      color: 'var(--ds-icon-brand-regular)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: "24px"
  })), /*#__PURE__*/React.createElement("span", null, text));
}
Object.assign(__ds_scope, { IconHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/IconHeading.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const SEVERITIES = {
  success: {
    icon: 'check-circle-filled',
    bg: 'var(--ds-background-success-light)',
    border: 'var(--ds-border-success-regular)',
    iconColor: 'var(--ds-icon-success-regular)',
    text: 'var(--ds-font-text-success)'
  },
  info: {
    icon: 'info-filled',
    bg: 'var(--ds-background-info-light)',
    border: 'var(--ds-border-info)',
    iconColor: 'var(--ds-icon-info-regular)',
    text: 'var(--ds-font-text-info)'
  },
  warning: {
    icon: 'warning-filled',
    bg: 'var(--ds-background-warning)',
    border: 'var(--ds-border-warning)',
    iconColor: 'var(--ds-color-warning-dark)',
    text: 'var(--ds-font-text-warning)'
  },
  danger: {
    icon: 'error-filled',
    bg: 'var(--ds-background-danger)',
    border: 'var(--ds-border-danger)',
    iconColor: 'var(--ds-icon-danger-regular)',
    text: 'var(--ds-font-text-danger)'
  }
};

/**
 * Alert (ds-alert) — inline status message with a leading severity icon on a
 * tinted surface. Four severities: success / info / warning / danger.
 */
function Alert({
  severity = 'info',
  children,
  showCloseAction = false,
  onClose,
  style = {}
}) {
  const s = SEVERITIES[severity] || SEVERITIES.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--ds-spacing-xxs)',
      alignItems: 'flex-start',
      padding: 'var(--ds-spacing-xs)',
      background: s.bg,
      border: `1px solid ${s.border}`,
      borderRadius: 'var(--ds-radius-l)',
      color: 'var(--ds-font-text-neutral-regular)',
      fontSize: 'var(--ds-font-size-s)',
      lineHeight: 'var(--ds-line-height-s)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: "20px",
    color: s.iconColor,
    style: {
      flex: 'none',
      marginTop: '1px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children), showCloseAction && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close-outlined",
    size: "18px",
    color: "var(--ds-icon-neutral-muted)",
    onClick: onClose,
    style: {
      cursor: 'pointer',
      flex: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Drawer.jsx
try { (() => {
/**
 * Drawer (ds-drawer) — slides in from the right (used for offer details on
 * the results page). Has a scrollable content slot and a fixed footer slot.
 */
function Drawer({
  isOpen = true,
  children,
  footer,
  onClose,
  title,
  width = 480
}) {
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--ds-zindex-modal)',
      background: 'rgba(12,12,12,0.5)',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--ds-background-white)',
      width: '100%',
      maxWidth: `${width}px`,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--ds-box-shadow)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--ds-spacing-xs) var(--ds-spacing-s)',
      borderBottom: '1px solid var(--ds-border-neutral-regular, #cdcbca)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--ds-font-size-l)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close-outlined",
    size: "22px",
    onClick: onClose,
    style: {
      cursor: 'pointer'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 'var(--ds-spacing-s)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--ds-spacing-xs) var(--ds-spacing-s)',
      borderTop: '1px solid var(--ds-border-neutral-regular, #cdcbca)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/**
 * Modal (ds-modal) — centered dialog over a dimmed backdrop. Optional title,
 * body content, and footer. Closes on backdrop click or the x button.
 */
function Modal({
  isOpen = true,
  title,
  children,
  footer,
  onClose,
  width = 560
}) {
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--ds-zindex-modal)',
      background: 'rgba(12,12,12,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--ds-spacing-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--ds-background-white)',
      borderRadius: 'var(--ds-radius-xl)',
      width: '100%',
      maxWidth: `${width}px`,
      maxHeight: '88vh',
      overflow: 'auto',
      boxShadow: 'var(--ds-box-shadow)'
    }
  }, (title || onClose) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--ds-spacing-xs)',
      padding: 'var(--ds-spacing-xs) var(--ds-spacing-s)',
      borderBottom: '1px solid var(--ds-border-neutral-regular, #cdcbca)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--ds-font-size-l)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close-outlined",
    size: "22px",
    color: "var(--ds-icon-neutral-regular)",
    onClick: onClose,
    style: {
      cursor: 'pointer'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--ds-spacing-s)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--ds-spacing-xs) var(--ds-spacing-s)',
      borderTop: '1px solid var(--ds-border-neutral-regular, #cdcbca)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Tooltip (ds-tooltip) — a small info "?" trigger that reveals helper content on
 * hover/focus. In the product these sit beside filter labels and form fields.
 */
function Tooltip({
  children,
  content,
  placement = 'bottom',
  triggerIcon = 'info-outlined'
}) {
  const [open, setOpen] = useState(false);
  const pos = {
    bottom: {
      top: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    top: {
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    right: {
      left: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    left: {
      right: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
    tabIndex: 0
  }, children || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: triggerIcon,
    size: "20px",
    color: "var(--ds-icon-neutral-muted)",
    style: {
      cursor: 'help'
    }
  }), open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 'var(--ds-zindex-tooltip)',
      width: 'max-content',
      maxWidth: '280px',
      padding: 'var(--ds-spacing-xxs) var(--ds-spacing-xs)',
      background: 'var(--ds-background-neutral-dark)',
      color: 'var(--ds-font-text-inverted)',
      borderRadius: 'var(--ds-radius-l)',
      fontSize: 'var(--ds-font-size-s)',
      lineHeight: 'var(--ds-line-height-s)',
      boxShadow: 'var(--ds-box-shadow)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox (lib-checkbox-control) — square check with label and optional
 * sub-label. The box fills orange when checked.
 */
function Checkbox({
  label,
  subLabel,
  checked = false,
  disabled = false,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--ds-spacing-xxs)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      flex: 'none',
      width: '22px',
      height: '22px',
      borderRadius: 'var(--ds-radius-m)',
      border: `2px solid ${checked ? 'var(--ds-border-brand-regular)' : 'var(--ds-border-neutral-regular, #cdcbca)'}`,
      background: checked ? 'var(--ds-background-brand-regular)' : 'var(--ds-background-white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '1px'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check-outlined",
    size: "16px",
    color: "var(--ds-font-text-inverted)"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ds-font-size-m)',
      color: 'var(--ds-font-text-neutral-regular)'
    }
  }, label), subLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--ds-font-size-s)',
      color: 'var(--ds-font-neutral-disabled)'
    }
  }, subLabel)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Select (lib-select-control) — native dropdown styled to match the field set,
 * with a trailing chevron. Supports label, placeholder and validation.
 */
function Select({
  label,
  options = [],
  value,
  placeholder,
  invalid = false,
  validationMessage,
  disabled = false,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 'var(--ds-font-weight-l)',
      fontSize: 'var(--ds-font-size-m)',
      marginBottom: 'var(--ds-spacing-xxs)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    disabled: disabled,
    onChange: onChange,
    style: {
      width: '100%',
      height: '48px',
      padding: '0 40px 0 var(--ds-spacing-xs)',
      fontFamily: 'inherit',
      fontSize: 'var(--ds-font-size-m)',
      color: value ? 'var(--ds-font-text-neutral-regular)' : 'var(--ds-font-neutral-disabled)',
      background: disabled ? 'var(--ds-background-neutral-light)' : 'var(--ds-background-white)',
      border: `1px solid ${invalid ? 'var(--ds-border-danger)' : 'var(--ds-border-neutral-regular, #cdcbca)'}`,
      borderRadius: 'var(--ds-radius-l)',
      appearance: 'none',
      outline: 'none',
      boxSizing: 'border-box',
      cursor: 'pointer'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "angle-down-outlined",
    size: "20px",
    color: "var(--ds-icon-neutral-muted)",
    style: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  })), invalid && validationMessage && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--ds-font-size-s)',
      color: 'var(--ds-font-text-danger)',
      marginTop: 'var(--ds-spacing-xxxs)'
    }
  }, validationMessage));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
/**
 * Stepper — the calculator's horizontal progress header. Shows numbered steps;
 * completed steps get a check, the current step is filled orange, future steps
 * are muted. Completed/visited steps are clickable.
 */
function Stepper({
  steps = [],
  currentStep = 0,
  completedSteps = 0,
  onStepSelect,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ds-spacing-xxs)',
      ...style
    }
  }, steps.map((label, i) => {
    const done = i < completedSteps && i !== currentStep;
    const active = i === currentStep;
    const reachable = i <= completedSteps;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => reachable && onStepSelect && onStepSelect(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ds-spacing-xxs)',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: reachable ? 'pointer' : 'default',
        font: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--ds-font-size-s)',
        fontWeight: 'var(--ds-font-weight-l)',
        background: active || done ? 'var(--ds-background-brand-regular)' : 'var(--ds-background-white)',
        color: active || done ? 'var(--ds-font-text-inverted)' : 'var(--ds-font-neutral-disabled)',
        border: `2px solid ${active || done ? 'var(--ds-border-brand-regular)' : 'var(--ds-border-neutral-regular, #cdcbca)'}`
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check-outlined",
      size: "16px"
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--ds-font-size-m)',
        fontWeight: active ? 'var(--ds-font-weight-l)' : 'var(--ds-font-weight-m)',
        color: active ? 'var(--ds-font-text-neutral-regular)' : 'var(--ds-font-neutral-disabled)'
      }
    }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '1 1 auto',
        height: '2px',
        minWidth: '16px',
        background: i < completedSteps ? 'var(--ds-border-brand-regular)' : 'var(--ds-border-neutral-regular, #cdcbca)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zahnzusatz/AppHeader.jsx
try { (() => {
// AppHeader — the Verivox top bar: orange "V" mark + wordmark, product title.
(function () {
  const {
    Icon,
    Logo
  } = window.VerivoxDesignSystem_4126a3;
  function AppHeader({
    title
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        borderBottom: '1px solid var(--ds-border-neutral-regular, #cdcbca)',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '1180px',
        margin: '0 auto',
        padding: 'var(--ds-spacing-xs) var(--ds-spacing-s)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ds-spacing-s)'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 26
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: '1px',
        height: '24px',
        background: 'var(--ds-border-neutral-regular, #cdcbca)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--ds-font-size-m)',
        color: 'var(--ds-palette-grey70)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ds-spacing-xs)',
        color: 'var(--ds-palette-grey60)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone-outlined",
      size: "20px"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--ds-font-size-s)'
      }
    }, "06221 777 00 52"))));
  }
  window.AppHeader = AppHeader;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zahnzusatz/AppHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zahnzusatz/CalculatorScreen.jsx
try { (() => {
// CalculatorScreen — the 2-step entry flow ("Ihre Zähne" → "Ihr Bedarf").
(function () {
  const {
    Stepper,
    IconHeading,
    ButtonGroup,
    YesNo,
    Input,
    Select,
    Alert,
    Button,
    Tooltip
  } = window.VerivoxDesignSystem_4126a3;
  const {
    useState
  } = React;
  function CalculatorScreen({
    onComplete
  }) {
    const [step, setStep] = useState(0);
    const [f, setF] = useState({
      insuranceType: 'gkv',
      dob: '12.04.1989',
      missingTeeth: 'no',
      replacementDone: 'no',
      perio: 'no',
      currentTreatment: 'no',
      needReplacement: '90',
      needTreatment: '90',
      needCleaning: '100'
    });
    const set = k => v => setF(s => ({
      ...s,
      [k]: v
    }));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '640px',
        margin: '0 auto',
        padding: 'var(--ds-spacing-s) var(--ds-spacing-xs)'
      }
    }, /*#__PURE__*/React.createElement(Stepper, {
      steps: ["Ihre Zähne", "Ihr Bedarf"],
      currentStep: step,
      completedSteps: step + 1,
      onStepSelect: setStep,
      style: {
        marginBottom: 'var(--ds-spacing-l)'
      }
    }), step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IconHeading, {
      icon: "user-outlined",
      text: "Versicherte Person"
    }), /*#__PURE__*/React.createElement(ButtonGroup, {
      label: "Wie sind Sie aktuell versichert?",
      orientation: "vertical",
      value: f.insuranceType,
      onChange: set('insuranceType'),
      options: [{
        label: 'Gesetzlich versichert',
        value: 'gkv'
      }, {
        label: 'Privat versichert',
        value: 'pkv'
      }, {
        label: 'Beihilfeberechtigt',
        value: 'beihilfe'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 'var(--ds-spacing-s)'
      }
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Geburtsdatum",
      value: f.dob,
      onChange: e => set('dob')(e.target.value),
      hint: "TT.MM.JJJJ"
    }), /*#__PURE__*/React.createElement(IconHeading, {
      icon: "dental-cleaning-outlined",
      text: "Zustand Ihrer Z\xE4hne"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ds-spacing-s)'
      }
    }, /*#__PURE__*/React.createElement(YesNo, {
      label: "Fehlen Ihnen aktuell Z\xE4hne?",
      hint: "Auch ersetzte Z\xE4hne z\xE4hlen dazu.",
      value: f.missingTeeth,
      onChange: set('missingTeeth')
    }), /*#__PURE__*/React.createElement(YesNo, {
      label: "Haben Sie bereits Zahnersatz (Kronen, Br\xFCcken, Implantate)?",
      value: f.replacementDone,
      onChange: set('replacementDone')
    }), /*#__PURE__*/React.createElement(YesNo, {
      label: "Wurde bei Ihnen eine Parodontitis behandelt?",
      value: f.perio,
      onChange: set('perio')
    }), /*#__PURE__*/React.createElement(YesNo, {
      label: "Ist aktuell eine Zahnbehandlung angeraten oder geplant?",
      value: f.currentTreatment,
      onChange: set('currentTreatment')
    }), f.currentTreatment === 'yes' && /*#__PURE__*/React.createElement(Alert, {
      severity: "warning"
    }, "Laufende oder angeratene Behandlungen sind in der Regel nicht versicherbar."))), step === 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ds-spacing-xs)'
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      severity: "success"
    }, "Super \u2013 auf Basis Ihrer Angaben finden wir passende Tarife ohne Gesundheitsausschluss."), /*#__PURE__*/React.createElement(IconHeading, {
      icon: "dental-replacement-outlined",
      text: "Zahnersatz"
    }), /*#__PURE__*/React.createElement(ButtonGroup, {
      label: "Welchen Erstattungssatz w\xFCnschen Sie f\xFCr Zahnersatz?",
      value: f.needReplacement,
      onChange: set('needReplacement'),
      options: [{
        label: '70 %',
        value: '70',
        subLabel: 'Günstiger Beitrag'
      }, {
        label: '80 %',
        value: '80',
        subLabel: 'Ausgewogen'
      }, {
        label: '90 % und mehr',
        value: '90',
        subLabel: 'Bester Schutz'
      }]
    }), /*#__PURE__*/React.createElement(IconHeading, {
      icon: "dental-treatment-outlined",
      text: "Zahnbehandlung"
    }), /*#__PURE__*/React.createElement(ButtonGroup, {
      label: "Erstattung f\xFCr Zahnbehandlung",
      value: f.needTreatment,
      onChange: set('needTreatment'),
      options: [{
        label: '80 %',
        value: '80'
      }, {
        label: '90 %',
        value: '90'
      }, {
        label: '100 %',
        value: '100'
      }],
      orientation: "horizontal"
    }), /*#__PURE__*/React.createElement(IconHeading, {
      icon: "dental-cleaning-outlined",
      text: "Professionelle Zahnreinigung"
    }), /*#__PURE__*/React.createElement(ButtonGroup, {
      label: "J\xE4hrlicher Zuschuss zur Zahnreinigung",
      value: f.needCleaning,
      onChange: set('needCleaning'),
      options: [{
        label: 'bis 100 €',
        value: '100'
      }, {
        label: 'bis 150 €',
        value: '150'
      }, {
        label: 'unbegrenzt',
        value: 'unlimited'
      }],
      orientation: "horizontal"
    }), /*#__PURE__*/React.createElement(Alert, {
      severity: "info"
    }, "Eine professionelle Zahnreinigung kostet je nach Praxis 80\u2013150 \u20AC pro Sitzung.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 'var(--ds-spacing-l)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      text: "Zur\xFCck",
      appearance: "text",
      disabled: step === 0,
      onClick: () => setStep(0)
    }), step === 0 ? /*#__PURE__*/React.createElement(Button, {
      text: "Weiter",
      iconRight: "angle-right-filled",
      onClick: () => setStep(1)
    }) : /*#__PURE__*/React.createElement(Button, {
      text: "Tarife anzeigen",
      iconRight: "angle-right-filled",
      onClick: onComplete
    })));
  }
  window.CalculatorScreen = CalculatorScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zahnzusatz/CalculatorScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zahnzusatz/ComparisonScreen.jsx
try { (() => {
// ComparisonScreen — side-by-side tariff comparison across coverage categories.
(function () {
  const {
    Button,
    Icon,
    Badge
  } = window.VerivoxDesignSystem_4126a3;
  function ComparisonScreen({
    comparedIds,
    onBack
  }) {
    const offers = window.VXData.offers.filter(o => comparedIds.includes(o.id)).slice(0, 3);
    const idx = offers.map(o => window.VXData.offers.indexOf(o));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '1180px',
        margin: '0 auto',
        padding: 'var(--ds-spacing-s) var(--ds-spacing-xs)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 'var(--ds-spacing-s)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      text: "Zur\xFCck zur Liste",
      appearance: "text",
      iconLeft: "angle-left-outlined",
      onClick: onBack
    }), /*#__PURE__*/React.createElement(Button, {
      text: "Drucken",
      appearance: "tertiary",
      iconLeft: "printer-outlined"
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--ds-font-size-xl)',
        marginBottom: 'var(--ds-spacing-s)'
      }
    }, "Tarifvergleich"), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid var(--ds-border-neutral-regular, #cdcbca)',
        borderRadius: 'var(--ds-radius-l)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `260px repeat(${offers.length}, 1fr)`,
        borderBottom: '1px solid var(--ds-border-neutral-regular, #cdcbca)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--ds-spacing-s)',
        background: 'var(--ds-background-neutral-light)'
      }
    }), offers.map(o => /*#__PURE__*/React.createElement("div", {
      key: o.id,
      style: {
        padding: 'var(--ds-spacing-s)',
        borderLeft: '1px solid var(--ds-palette-grey10)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '96px',
        height: '38px',
        margin: '0 auto var(--ds-spacing-xxs)',
        borderRadius: 'var(--ds-radius-m)',
        background: o.logoBg,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700
      }
    }, o.short), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 'var(--ds-font-size-s)'
      }
    }, o.provider), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--ds-font-size-xs)',
        color: 'var(--ds-palette-grey60)',
        minHeight: '28px'
      }
    }, o.tariff), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        gap: '3px',
        marginTop: '4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--ds-font-size-xl)',
        fontWeight: 700,
        color: 'var(--ds-font-text-brand-regular)'
      }
    }, o.price), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--ds-font-text-brand-regular)'
      }
    }, "\u20AC"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--ds-font-size-xs)',
        color: 'var(--ds-palette-grey60)'
      }
    }, "/ Monat")), /*#__PURE__*/React.createElement(Button, {
      text: "Abschlie\xDFen",
      fullWidth: true,
      iconRight: "angle-right-filled",
      style: {
        marginTop: 'var(--ds-spacing-xxs)'
      }
    })))), window.VXData.comparison.map(cat => /*#__PURE__*/React.createElement(React.Fragment, {
      key: cat.label
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `260px repeat(${offers.length}, 1fr)`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: '1 / -1',
        padding: 'var(--ds-spacing-xxs) var(--ds-spacing-s)',
        background: 'var(--ds-background-brand-light)',
        color: 'var(--ds-font-text-brand-regular)',
        fontWeight: 700,
        fontSize: 'var(--ds-font-size-s)'
      }
    }, cat.label)), cat.items.map((it, ri) => /*#__PURE__*/React.createElement("div", {
      key: it.name,
      style: {
        display: 'grid',
        gridTemplateColumns: `260px repeat(${offers.length}, 1fr)`,
        background: ri % 2 ? 'var(--ds-palette-grey5)' : '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--ds-spacing-xs) var(--ds-spacing-s)',
        fontSize: 'var(--ds-font-size-s)',
        color: 'var(--ds-palette-grey70)'
      }
    }, it.name), idx.map((origIndex, ci) => {
      const val = it.values[origIndex] ?? it.values[ci] ?? '–';
      const isNo = val === 'nein';
      return /*#__PURE__*/React.createElement("div", {
        key: ci,
        style: {
          padding: 'var(--ds-spacing-xs) var(--ds-spacing-s)',
          borderLeft: '1px solid var(--ds-palette-grey10)',
          textAlign: 'center',
          fontWeight: 700,
          fontSize: 'var(--ds-font-size-s)',
          color: isNo ? 'var(--ds-palette-grey40)' : 'var(--ds-font-text-neutral-regular)'
        }
      }, val === 'ja' ? /*#__PURE__*/React.createElement(Icon, {
        name: "check-small-outlined",
        size: "20px",
        color: "var(--ds-icon-success-regular)"
      }) : isNo ? /*#__PURE__*/React.createElement(Icon, {
        name: "close-outlined",
        size: "18px",
        color: "var(--ds-icon-neutral-muted)"
      }) : val);
    })))))));
  }
  window.ComparisonScreen = ComparisonScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zahnzusatz/ComparisonScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zahnzusatz/OfferCard.jsx
try { (() => {
// OfferCard — one result row on the results page. Mirrors the Verivox offer
// card: provider logo + tariff, tariff-score seal, the three dental coverage
// figures, monthly price, a primary checkout CTA, and a compare checkbox.
(function () {
  const {
    Button,
    Badge,
    Card,
    Icon,
    Checkbox
  } = window.VerivoxDesignSystem_4126a3;
  function OfferCard({
    offer,
    onDetails,
    onCheckout,
    compared,
    onCompare
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      padding: "0",
      style: {
        overflow: 'hidden',
        position: 'relative'
      }
    }, offer.badge && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        background: 'var(--ds-background-brand-regular)',
        color: '#fff',
        fontSize: 'var(--ds-font-size-xs)',
        fontWeight: 700,
        padding: '4px 12px',
        borderRadius: '0 0 var(--ds-radius-l) 0'
      }
    }, offer.badge)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '200px 1fr 220px',
        gap: 'var(--ds-spacing-s)',
        padding: 'var(--ds-spacing-s)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '120px',
        height: '44px',
        borderRadius: 'var(--ds-radius-m)',
        background: offer.logoBg,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: '18px',
        letterSpacing: '.5px',
        marginBottom: 'var(--ds-spacing-xxs)'
      }
    }, offer.short), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 'var(--ds-font-size-m)'
      }
    }, offer.provider), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--ds-font-size-s)',
        color: 'var(--ds-palette-grey60)'
      }
    }, offer.tariff), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        marginTop: 'var(--ds-spacing-xxs)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--ds-background-brand-regular)',
        color: '#fff',
        fontWeight: 700,
        fontSize: 'var(--ds-font-size-s)',
        borderRadius: 'var(--ds-radius-m)',
        padding: '1px 7px'
      }
    }, offer.score), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--ds-font-size-s)',
        color: 'var(--ds-palette-grey60)'
      }
    }, "VERIVOX-Note \xB7 ", offer.scoreLabel))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ds-spacing-xs)'
      }
    }, [['dental-replacement-outlined', 'Zahnersatz', offer.coverage.replacement], ['dental-treatment-outlined', 'Zahnbehandlung', offer.coverage.treatment], ['dental-cleaning-outlined', 'Zahnreinigung', offer.coverage.cleaning]].map(([icon, label, val]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ds-spacing-xxs)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: "22px",
      color: "var(--ds-icon-brand-regular)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 'var(--ds-font-size-s)',
        color: 'var(--ds-palette-grey70)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 'var(--ds-font-size-m)'
      }
    }, val)))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--ds-font-size-xs)',
        color: 'var(--ds-palette-grey60)'
      }
    }, "monatlich ab"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        gap: '4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--ds-font-size-xxl)',
        fontWeight: 700,
        color: 'var(--ds-font-text-brand-regular)'
      }
    }, offer.price), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--ds-font-size-l)',
        fontWeight: 700,
        color: 'var(--ds-font-text-brand-regular)'
      }
    }, "\u20AC")), /*#__PURE__*/React.createElement(Button, {
      text: "Zum Angebot",
      fullWidth: true,
      iconRight: "angle-right-filled",
      onClick: () => onCheckout(offer),
      style: {
        marginTop: 'var(--ds-spacing-xxs)'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => onDetails(offer),
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--ds-font-text-brand-regular)',
        fontSize: 'var(--ds-font-size-s)',
        cursor: 'pointer',
        marginTop: 'var(--ds-spacing-xxs)'
      }
    }, "Details & Leistungen"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--ds-spacing-xxs)',
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Vergleichen",
      checked: compared,
      onChange: () => onCompare(offer)
    })))));
  }
  window.OfferCard = OfferCard;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zahnzusatz/OfferCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zahnzusatz/ResultsScreen.jsx
try { (() => {
// ResultsScreen — offer list with the filter sidebar, person-info box, the
// sticky comparison bar, and an offer-details drawer.
(function () {
  const {
    Card,
    Icon,
    Checkbox,
    Radio,
    Button,
    Badge,
    Drawer,
    Chip
  } = window.VerivoxDesignSystem_4126a3;
  const {
    useState
  } = React;
  function PersonInfoBox() {
    const p = window.VXData.person;
    return /*#__PURE__*/React.createElement(Card, {
      padding: "var(--ds-spacing-xs)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ds-spacing-xxs)',
        fontWeight: 700,
        marginBottom: 'var(--ds-spacing-xxs)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "tooth-outlined",
      size: "22px",
      color: "var(--ds-icon-brand-regular)"
    }), " Ihre Angaben"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '4px 12px',
        fontSize: 'var(--ds-font-size-s)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ds-palette-grey60)'
      }
    }, "Versicherung"), /*#__PURE__*/React.createElement("span", null, p.insuranceType), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ds-palette-grey60)'
      }
    }, "Geburtsdatum"), /*#__PURE__*/React.createElement("span", null, p.dateOfBirth), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ds-palette-grey60)'
      }
    }, "Alter"), /*#__PURE__*/React.createElement("span", null, p.age, " Jahre")), /*#__PURE__*/React.createElement("button", {
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--ds-font-text-brand-regular)',
        fontSize: 'var(--ds-font-size-s)',
        cursor: 'pointer',
        marginTop: 'var(--ds-spacing-xxs)',
        padding: 0
      }
    }, "Angaben \xE4ndern"));
  }
  function FilterSidebar() {
    const fd = window.VXData.filters;
    const [services, setServices] = useState({});
    return /*#__PURE__*/React.createElement(Card, {
      padding: "var(--ds-spacing-xs)",
      style: {
        background: 'var(--ds-background-neutral-light)'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 var(--ds-spacing-xs)',
        fontSize: 'var(--ds-font-size-l)'
      }
    }, "Erstattung"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ds-spacing-s)'
      }
    }, fd.levels.map(l => /*#__PURE__*/React.createElement("div", {
      key: l.label
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ds-spacing-xxs)',
        marginBottom: 'var(--ds-spacing-xxs)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: l.icon,
      size: "22px",
      color: "var(--ds-icon-brand-regular)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 'var(--ds-font-size-s)'
      }
    }, l.label)), /*#__PURE__*/React.createElement(Radio, {
      flexSize: true,
      value: l.value,
      onChange: () => {},
      options: l.label === 'Zahnreinigung' ? ['80 €', '100 €', '150 €'] : ['70 %', '80 %', '90 %']
    })))), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 'var(--ds-spacing-s) 0 var(--ds-spacing-xs)',
        fontSize: 'var(--ds-font-size-l)'
      }
    }, "Zusatzleistungen"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ds-spacing-xs)'
      }
    }, fd.services.map(s => /*#__PURE__*/React.createElement(Checkbox, {
      key: s,
      label: s,
      checked: !!services[s],
      onChange: c => setServices(p => ({
        ...p,
        [s]: c
      }))
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--ds-spacing-s)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      text: "Filter anwenden",
      fullWidth: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 'var(--ds-spacing-xxs)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      text: "Zur\xFCcksetzen",
      appearance: "text"
    }))));
  }
  function ResultsScreen({
    onCompare,
    comparedIds,
    onOpenComparison
  }) {
    const offers = window.VXData.offers;
    const [detail, setDetail] = useState(null);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '1180px',
        margin: '0 auto',
        padding: 'var(--ds-spacing-s) var(--ds-spacing-xs)',
        paddingBottom: '96px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginBottom: 'var(--ds-spacing-s)',
        flexWrap: 'wrap',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 'var(--ds-font-size-xl)'
      }
    }, offers.length, " Tarife f\xFCr Sie gefunden"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ds-spacing-xxs)',
        color: 'var(--ds-palette-grey60)',
        fontSize: 'var(--ds-font-size-s)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "exchange-outlined",
      size: "18px"
    }), " Sortiert nach: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--ds-palette-grey80)'
      }
    }, "VERIVOX-Note"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '302px 1fr',
        gap: 'var(--ds-spacing-s)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ds-spacing-s)'
      }
    }, /*#__PURE__*/React.createElement(PersonInfoBox, null), /*#__PURE__*/React.createElement(FilterSidebar, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ds-spacing-s)'
      }
    }, offers.map(o => /*#__PURE__*/React.createElement(OfferCard, {
      key: o.id,
      offer: o,
      compared: comparedIds.includes(o.id),
      onCompare: onCompare,
      onDetails: setDetail,
      onCheckout: () => {}
    })))), comparedIds.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#fff',
        borderTop: '1px solid var(--ds-border-neutral-regular, #cdcbca)',
        boxShadow: '0 -4px 12px rgba(0,0,0,.08)',
        zIndex: 'var(--ds-zindex-sticky)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '1180px',
        margin: '0 auto',
        padding: 'var(--ds-spacing-xs) var(--ds-spacing-s)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--ds-spacing-s)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ds-spacing-xs)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "exchange-outlined",
      size: "24px",
      color: "var(--ds-icon-brand-regular)"
    }), /*#__PURE__*/React.createElement("strong", null, comparedIds.length, " Tarife"), " zum Vergleich ausgew\xE4hlt"), /*#__PURE__*/React.createElement(Button, {
      text: "Jetzt vergleichen",
      iconRight: "angle-right-filled",
      disabled: comparedIds.length < 2,
      onClick: onOpenComparison
    }))), /*#__PURE__*/React.createElement(Drawer, {
      isOpen: !!detail,
      title: detail ? detail.provider : '',
      onClose: () => setDetail(null),
      footer: /*#__PURE__*/React.createElement(Button, {
        text: "Online abschlie\xDFen",
        fullWidth: true,
        iconRight: "angle-right-filled"
      })
    }, detail && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--ds-font-size-s)',
        color: 'var(--ds-palette-grey60)',
        marginBottom: 'var(--ds-spacing-s)'
      }
    }, detail.tariff), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '6px',
        flexWrap: 'wrap',
        marginBottom: 'var(--ds-spacing-s)'
      }
    }, detail.highlights.map(h => /*#__PURE__*/React.createElement(Chip, {
      key: h,
      icon: "check-small-outlined",
      selected: true
    }, h))), window.VXData.comparison.map(cat => /*#__PURE__*/React.createElement("div", {
      key: cat.label,
      style: {
        marginBottom: 'var(--ds-spacing-s)'
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: '0 0 var(--ds-spacing-xxs)',
        color: 'var(--ds-font-text-brand-regular)'
      }
    }, cat.label), cat.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: it.name,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '6px 0',
        borderBottom: '1px solid var(--ds-palette-grey5)',
        fontSize: 'var(--ds-font-size-s)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ds-palette-grey70)'
      }
    }, it.name), /*#__PURE__*/React.createElement("strong", null, it.values[0]))))))));
  }
  window.ResultsScreen = ResultsScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zahnzusatz/ResultsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zahnzusatz/data.js
try { (() => {
// Mock data for the Zahnzusatzversicherung UI kit.
// Insurer names are realistic German dental insurers; figures are illustrative.
window.VXData = {
  person: {
    insuranceType: 'Gesetzlich versichert',
    dateOfBirth: '12.04.1989',
    age: 36,
    need: {
      replacement: '90 %',
      treatment: '90 %',
      cleaning: '100 €'
    }
  },
  offers: [{
    id: 1,
    provider: 'HanseMerkur',
    tariff: 'EZ + EZT + ZPRO',
    short: 'HM',
    price: '24,80',
    score: '1,1',
    scoreLabel: 'sehr gut',
    badge: 'Empfehlung',
    logoBg: '#003781',
    coverage: {
      replacement: '90 %',
      treatment: '100 %',
      cleaning: '100 %'
    },
    highlights: ['Ohne Wartezeit', 'Sofortschutz', 'Auch im Ausland']
  }, {
    id: 2,
    provider: 'DKV',
    tariff: 'KombiMed KDTP100',
    short: 'DKV',
    price: '27,40',
    score: '1,2',
    scoreLabel: 'sehr gut',
    badge: 'Top-Preis',
    logoBg: '#1d6b3b',
    coverage: {
      replacement: '100 %',
      treatment: '100 %',
      cleaning: '100 %'
    },
    highlights: ['100% Zahnersatz', 'PZR ohne Limit']
  }, {
    id: 3,
    provider: 'Barmenia',
    tariff: 'Mehr Zahn 100 + Mehr Zahnvorsorge',
    short: 'BAR',
    price: '29,10',
    score: '1,3',
    scoreLabel: 'sehr gut',
    badge: null,
    logoBg: '#5b2d8c',
    coverage: {
      replacement: '100 %',
      treatment: '100 %',
      cleaning: '90 %'
    },
    highlights: ['Stabiler Beitrag im Alter', 'Kieferorthopädie']
  }, {
    id: 4,
    provider: 'Württembergische',
    tariff: 'ZE90 + ZBE',
    short: 'WÜ',
    price: '21,95',
    score: '1,6',
    scoreLabel: 'gut',
    badge: null,
    logoBg: '#0a7d36',
    coverage: {
      replacement: '90 %',
      treatment: '90 %',
      cleaning: '80 %'
    },
    highlights: ['Günstiger Einstieg', 'Vorversicherung anrechenbar']
  }, {
    id: 5,
    provider: 'Continentale',
    tariff: 'CEZP + CEZE',
    short: 'CON',
    price: '19,40',
    score: '1,8',
    scoreLabel: 'gut',
    badge: null,
    logoBg: '#003a70',
    coverage: {
      replacement: '80 %',
      treatment: '90 %',
      cleaning: '70 %'
    },
    highlights: ['Solider Basisschutz']
  }],
  // Comparison categories — sourced from the product's chips-details
  comparison: [{
    label: 'Zahnersatz',
    items: [{
      name: 'Implantate',
      values: ['90 %', '100 %', '100 %']
    }, {
      name: 'Kronen, Brücken und Prothesen',
      values: ['90 %', '100 %', '100 %']
    }, {
      name: 'Wartezeit Zahnersatz',
      values: ['keine', 'keine', '3 Monate']
    }]
  }, {
    label: 'Zahnbehandlung',
    items: [{
      name: 'Hochwertige Kunststofffüllungen',
      values: ['100 %', '100 %', '100 %']
    }, {
      name: 'Wurzelbehandlung (ohne GKV)',
      values: ['100 %', '100 %', '90 %']
    }, {
      name: 'Parodontalbehandlung',
      values: ['90 %', '100 %', '100 %']
    }]
  }, {
    label: 'Prophylaxe',
    items: [{
      name: 'Professionelle Zahnreinigung',
      values: ['100 € / Jahr', 'unbegrenzt', '150 € / Jahr']
    }]
  }, {
    label: 'Allgemein',
    items: [{
      name: 'Stabiler Beitrag im Alter',
      values: ['nein', 'nein', 'ja']
    }, {
      name: 'Kieferorthopädie für Kinder',
      values: ['nein', 'ja', 'ja']
    }]
  }],
  filters: {
    levels: [{
      icon: 'dental-replacement-outlined',
      label: 'Zahnersatz',
      value: '90 %'
    }, {
      icon: 'dental-treatment-outlined',
      label: 'Zahnbehandlung',
      value: '90 %'
    }, {
      icon: 'dental-cleaning-outlined',
      label: 'Zahnreinigung',
      value: '100 €'
    }],
    services: ['Beitragsstabilität im Alter', 'Kieferorthopädie für Kinder', 'Ohne Wartezeit', 'Vorversicherung anrechenbar', 'Bleaching']
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zahnzusatz/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconHeading = __ds_scope.IconHeading;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.ButtonGroup = __ds_scope.ButtonGroup;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.YesNo = __ds_scope.YesNo;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Stepper = __ds_scope.Stepper;

})();
