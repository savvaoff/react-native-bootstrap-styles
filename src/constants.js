// TODO: rename the file to "variables", keeping backward compatibility
import { StyleSheet, Dimensions } from 'react-native';
import Color from 'color';

export default function getConstants(constants) {
  const _ = (name, value) => constants[name] == undefined ? value : constants[name];

  const {

    // Options

    ENABLE_ROUNDED = _('ENABLE_ROUNDED', true),
    ENABLE_SHADOWS = _('ENABLE_SHADOWS', true),
    ENABLE_GRADIENTS = _('ENABLE_GRADIENTS', true), // todo: "activate"
    // $enable-transitions:        true,
    ENABLE_GRID_CLASSES = _('ENABLE_GRID_CLASSES', true),

    REM = _('REM', 14),

    // Colors

    WHITE = _('WHITE', '#fff'),
    GRAY_100 = _('GRAY_100', '#f8f9fa'),
    GRAY_200 = _('GRAY_200', '#e9ecef'),
    GRAY_300 = _('GRAY_300', '#dee2e6'),
    GRAY_400 = _('GRAY_400', '#ced4da'),
    GRAY_500 = _('GRAY_500', '#adb5bd'),
    GRAY_600 = _('GRAY_600', '#6c757d'),
    GRAY_700 = _('GRAY_700', '#495057'),
    GRAY_800 = _('GRAY_800', '#343a40'),
    GRAY_900 = _('GRAY_900', '#212529'),
    BLACK = _('BLACK', '#000'),

    GRAYS = {
      '100': GRAY_100,
      '200': GRAY_200,
      '300': GRAY_300,
      '400': GRAY_400,
      '500': GRAY_500,
      '600': GRAY_600,
      '700': GRAY_700,
      '800': GRAY_800,
      '900': GRAY_900,
    },

    BLUE = _('BLUE', '#007bff'),
    CYAN = _('CYAN', '#17a2b8'),
    RED = _('RED', '#dc3545'),
    YELLOW = _('YELLOW', '#ffc107'),
    GREEN = _('GREEN', '#28a745'),
    INDIGO = _('INDIGO', '#6610f2'),
    PYRPLE = _('PYRPLE', '#6f42c1'),
    PINK = _('PINK', '#e83e8c'),
    ORANGE = _('ORANGE', '#fd7e14'),
    TEAL = _('TEAL', '#20c997'),

    PRIMARY = _('PRIMARY', BLUE),
    SECONDARY = _('SECONDARY', GRAY_600),
    SUCCESS = _('SUCCESS', GREEN),
    INFO = _('INFO', CYAN),
    WARNING = _('WARNING', YELLOW),
    DANGER = _('DANGER', RED),
    LIGHT = _('LIGHT', GRAY_200), // originally: GRAY_100
    DARK = _('DARK', GRAY_800),

    THEME_COLORS = {
      PRIMARY: PRIMARY,
      SECONDARY: SECONDARY,
      SUCCESS: SUCCESS,
      INFO: INFO,
      WARNING: WARNING,
      DANGER: DANGER,
      LIGHT: LIGHT,
      DARK: DARK,
    },

    THEME_COLOR_INTERVAL = 0.08, // 8%

    YIG_CONTRASTED_THRESHOLD = 150,
    YIG_TEXT_DARK = GRAY_900,
    YIG_TEXT_LIGHT = WHITE,

    // Spacing

    SPACER = _('SPACER', REM),
    SPACERS = _('SPACERS', {
      0: 0,
      1: (SPACER * 0.25),
      2: (SPACER * 0.5),
      3: (SPACER * 1),
      4: (SPACER * 1.5),
      5: (SPACER * 3),
    }),

    SIZES =_('SIZES', {
      5: '5%',
      10: '20%',
      15: '15%',
      20: '20%',
      25: '25%',
      30: '30%',
      35: '35%',
      40: '40%',
      45: '45%',
      50: '50%',
      55: '55%',
      60: '60%',
      65: '65%',
      70: '70%',
      75: '75%',
      80: '80%',
      85: '85%',
      90: '90%',
      95: '95%',
      100: '100%',
      Auto: 'auto', // what??
    }),

    GRID_BREAKPOINTS_HORIZONTAL = _('GRID_BREAKPOINTS_HORIZONTAL', {
      Xs: 0, // should start at zero / watchs and other micro gadgets
      Sm: 480, // small phones
      Md: 768, // medium phones
      Lg: 1024, // large phones and small tablets
      Xl: 1536, // tablets and other gadgets
    }),

    // experimental
    GRID_BREAKPOINTS_VERTICAL = _('GRID_BREAKPOINTS_VERTICAL', {
      Xs: 0, // should start at zero
      Sm: 640,
      Md: 1024,
      Lg: 1536,
      Xl: 2048,
    }),

    GRID_BREAKPOINTS = GRID_BREAKPOINTS_HORIZONTAL,

    // GRID_BREAKPOINTS_HORIZONTAL * 0.9375
    CONTAINER_MAX_WIDTHS = _('CONTAINER_MAX_WIDTHS', {
      Sm: 450,
      Md: 720,
      Lg: 960,
      Xl: 1440,
    }),

    // Body

    BODY_BG = _('BODY_BG', WHITE),
    BODY_COLOR = _('BODY_COLOR', GRAY_900),

    // Links

    LINK_COLOR = _('LINK_COLOR', INFO),
    LINK_DECORATION = 'none',
    LINK_DECORATION_LINE = LINK_DECORATION,
    LINK_DECORATION_COLOR = LINK_COLOR,
    LINK_DECORATION_STYLE = 'solid',

    // why hover?
    // https://blog.expo.io/css-pseudo-class-effects-in-expo-for-web-56649f88eb6b
    LINK_HOVER_COLOR = Color(LINK_COLOR).darken(0.15).rgb().string(),
    LINK_HOVER_DECORATION = 'underline',
    LINK_HOVER_DECORATION_LINE = LINK_HOVER_DECORATION,
    LINK_HOVER_DECORATION_COLOR = LINK_HOVER_COLOR,
    LINK_HOVER_DECORATION_STYLE = 'solid',
    // // Darken percentage for links with `.text-*` class (e.g. `.text-success`)
    // $emphasized-link-hover-darken-percentage: 15% !default;

    // Grid

    GRID_COLUMNS = 12,
    GRID_GUTTER_WIDTH = _('GRID_GUTTER_WIDTH', SPACER * 1.5),
    GRID_ROW_COLUMNS = 6,

    // Components

    LINE_HEIGHT_LG = 1.5 * REM,
    LINE_HEIGHT_SM = 1.5 * REM,

    BORDER_WIDTH = _('BORDER_WIDTH', StyleSheet.hairlineWidth), // 1
    BORDER_COLOR = _('BORDER_COLOR', GRAY_300),

    BORDER_RADIUS = _('BORDER_RADIUS', 0.25 * REM),
    BORDER_RADIUS_LG = _('BORDER_RADIUS_LG', 0.3 * REM),
    BORDER_RADIUS_SM = _('BORDER_RADIUS_SM', 0.2 * REM),

    ROUNDED_PILL = 50 * REM,

    SHADOW_COLOR_SM = BLACK,
    SHADOW_OPACITY_SM = 0.075,
    SHADOW_OFFSET_SM = {width: 0, height: 0.125 * REM},
    SHADOW_RADIUS_SM = 0.25 * REM,

    SHADOW_COLOR = _('SHADOW_COLOR', BLACK),
    SHADOW_OPACITY = _('SHADOW_OPACITY', 0.15),
    SHADOW_OFFSET = _('SHADOW_OFFSET', {width: 0, height: 0.5 * REM}),
    SHADOW_RADIUS = _('SHADOW_RADIUS', 1 * REM),

    SHADOW_COLOR_LG = BLACK,
    SHADOW_OPACITY_LG = 0.175,
    SHADOW_OFFSET_LG = {width: 0, height: 1 * REM},
    SHADOW_RADIUS_LG = 3 * REM,

    COMPONENT_ACTIVE_COLOR =_('COMPONENT_ACTIVE_COLOR', WHITE),
    COMPONENT_ACTIVE_BG = _('COMPONENT_ACTIVE_BG', PRIMARY),

    // Fonts

    FONT_FAMILY_SANS_SERIF = _('FONT_FAMILY_SANS_SERIF', 'System'), // iOS: 'San Francisco'
    FONT_FAMILY_MONOSPACE = _('FONT_FAMILY_MONOSPACE', 'Courier New'), // iOS: 'Courier New',
    FONT_FAMILY_BASE = _('FONT_FAMILY_BASE', FONT_FAMILY_SANS_SERIF),
    FONT_FAMILY_BASE_LIGHT = _('FONT_FAMILY_BASE_LIGHT', FONT_FAMILY_SANS_SERIF),
    FONT_FAMILY_BASE_BOLD = _('FONT_FAMILY_BASE_BOLD', FONT_FAMILY_SANS_SERIF),

    FONT_SIZE_BASE = _('FONT_SIZE_BASE', REM),
    FONT_SIZE_SM = _('FONT_SIZE_SM', 0.875 * REM),
    FONT_SIZE_LG = _('FONT_SIZE_LG', 1.25 * REM),

    FONT_WEIGHT_LIGHT = _('FONT_WEIGHT_LIGHT', '300'),
    FONT_WEIGHT_NORMAL = _('FONT_WEIGHT_NORMAL', '400'),
    FONT_WEIGHT_BOLD = _('FONT_WEIGHT_BOLD', '700'),

    FONT_WEIGHT_BASE = _('FONT_WEIGHT_BASE', FONT_WEIGHT_NORMAL),
    LINE_HEIGHT_BASE = _('LINE_HEIGHT_BASE', 1.5 * REM), // ???

    H1_FONT_SIZE = 2.5 * REM,
    H2_FONT_SIZE = 2 * REM,
    H3_FONT_SIZE = 1.75 * REM,
    H4_FONT_SIZE = 1.5 * REM,
    H5_FONT_SIZE = 1.25 * REM,
    H6_FONT_SIZE = 1 * REM,

    HEADINGS_MARGIN_BOTTOM = SPACER / 2,
    HEADINGS_FONT_FAMILY = FONT_FAMILY_BASE,
    HEADINGS_FONT_WEIGHT = FONT_WEIGHT_BASE,
    HEADINGS_COLOR = BODY_COLOR,

    LEAD_FONT_SIZE = FONT_SIZE_BASE * 1.25,
    LEAD_FONT_WEIGHT = 300,

    // $small-font-size = _('LINE_HEIGHT_BASE', 0.8);

    TEXT_MUTED = _('TEXT_MUTED', GRAY_600),

    // BLOCKQUOTE_SMALL_COLOR = GRAY_600,
    // BLOCKQUOTE_SMALL_FONT_SIZE = SMALL_FONT_SIZE,
    BLOCKQUOTE_FONT_SIZE = FONT_SIZE_BASE * 1.25 * REM,

    HR_BORDER_COLOR =  Color(BLACK).alpha(0.1).rgb().string(),
    HR_BORDER_WIDTH =  BORDER_WIDTH,

    MARK_PADDING = 0.2 * REM,

    // $dt-font-weight:              $font-weight-bold !default;

    // $kbd-box-shadow:              inset 0 -.1rem 0 rgba($black, .25) !default;
    // $nested-kbd-font-weight:      $font-weight-bold !default;

    LIST_INLINE_PADDING = 0.5 * REM,
    MARK_BG = '#fcf8e3',
    HR_MARGIN_Y = SPACER,

    // Tables

    TABLE_CELL_PADDING = .75 * REM,
    TABLE_CELL_PADDING_SM = 0.3 * REM,

    TABLE_COLOR = _('TABLE_COLOR', BODY_COLOR), // aka text color
    TABLE_BG = null,
    TABLE_ACCENT_BG = Color(BLACK).alpha(0.05).rgb().string(),
    TABLE_HOVER_COLOR = TABLE_COLOR, // not in use
    TABLE_HOVER_BG = Color(BLACK).alpha(0.075).rgb().string(), // not in use
    TABLE_ACTIVE_BG = TABLE_HOVER_BG,

    TABLE_BORDER_WIDTH = BORDER_WIDTH,
    TABLE_BORDER_COLOR = BORDER_COLOR,

    TABLE_HEAD_BG = GRAY_200,
    TABLE_HEAD_COLOR = GRAY_700,

    TABLE_DARK_COLOR = _('TABLE_DARK_COLOR', WHITE),
    TABLE_DARK_BG = _('TABLE_DARK_BG', GRAY_800),
    TABLE_DARK_ACCENT_BG = Color(WHITE).alpha(0.05).rgb().string(),
    TABLE_DARK_HOVER_COLOR = TABLE_DARK_COLOR, // not in use
    TABLE_DARK_HOVER_BG = Color(WHITE).alpha(0.075).rgb().string(), // not in use
    TABLE_DARK_BORDER_COLOR = Color(TABLE_DARK_BG).lighten(0.075).rgb().string(),

    // TABLE_STRIPED_ORDER = 'odd',

    TABLE_CAPTION_COLOR = TEXT_MUTED,
    TABLE_BG_LEVEL = -9,
    TABLE_BORDER_LEVEL = -6,

    // Forms

    INPUT_BTN_PADDING_Y = _('INPUT_BTN_PADDING_Y', 0.375 * REM),
    INPUT_BTN_PADDING_X = _('INPUT_BTN_PADDING_X', 0.75 * REM),
    INPUT_BTN_FONT_FAMILY = _('INPUT_BTN_FONT_FAMILY', FONT_FAMILY_BASE),
    INPUT_BTN_FONT_SIZE = _('INPUT_BTN_FONT_SIZE', FONT_SIZE_BASE),
    INPUT_BTN_LINE_HEIGHT = _('INPUT_BTN_LINE_HEIGHT', LINE_HEIGHT_BASE),

    INPUT_BTN_FOCUS_WIDTH = _('INPUT_BTN_FOCUS_WIDTH', .2 * REM),
    INPUT_BTN_FOCUS_COLOR = _('INPUT_BTN_FOCUS_COLOR', Color(COMPONENT_ACTIVE_BG).alpha(0.25).rgb().string()),
    INPUT_BTN_FOCUS_BOX_SHADOW_COLOR = _('INPUT_BTN_FOCUS_BOX_SHADOW_COLOR', INPUT_BTN_FOCUS_COLOR),
    INPUT_BTN_FOCUS_BOX_SHADOW_OPACITY = _('INPUT_BTN_FOCUS_BOX_SHADOW_OPACITY', SHADOW_OPACITY),
    INPUT_BTN_FOCUS_BOX_SHADOW_OFFSET = _('INPUT_BTN_FOCUS_BOX_SHADOW_OFFSET', {width: 0, height: 0}),
    INPUT_BTN_FOCUS_BOX_SHADOW_RADIUS = _('INPUT_BTN_FOCUS_BOX_SHADOW_RADIUS', INPUT_BTN_FOCUS_WIDTH),

    INPUT_BTN_PADDING_Y_SM = _('INPUT_BTN_PADDING_Y_SM', 0.25 *  REM),
    INPUT_BTN_PADDING_X_SM = _('INPUT_BTN_PADDING_X_SM', 0.5 *  REM),
    INPUT_BTN_FONT_SIZE_SM = _('INPUT_BTN_FONT_SIZE_SM', FONT_SIZE_SM),
    INPUT_BTN_LINE_HEIGHT_SM = _('INPUT_BTN_LINE_HEIGHT_SM', LINE_HEIGHT_SM),

    INPUT_BTN_PADDING_Y_LG = _('INPUT_BTN_PADDING_Y_LG', 0.5 *  REM),
    INPUT_BTN_PADDING_X_LG = _('INPUT_BTN_PADDING_X_LG', 1 *  REM),
    INPUT_BTN_FONT_SIZE_LG = _('INPUT_BTN_FONT_SIZE_LG', FONT_SIZE_LG),
    INPUT_BTN_LINE_HEIGHT_LG = _('INPUT_BTN_LINE_HEIGHT_LG', LINE_HEIGHT_LG),

    INPUT_BTN_BORDER_WIDTH = _('INPUT_BTN_BORDER_WIDTH', BORDER_WIDTH),

    // Buttons

    BTN_PADDING_Y = INPUT_BTN_PADDING_Y,
    BTN_PADDING_X = INPUT_BTN_PADDING_X,
    BTN_FONT_FAMILY = INPUT_BTN_FONT_FAMILY,
    BTN_FONT_SIZE = INPUT_BTN_FONT_SIZE,
    BTN_LINE_HEIGHT = INPUT_BTN_LINE_HEIGHT,
    // BTN_WHITE_SPACE = 'null' / reserved

    BTN_PADDING_Y_SM = INPUT_BTN_PADDING_Y_SM,
    BTN_PADDING_X_SM = INPUT_BTN_PADDING_X_SM,
    BTN_FONT_SIZE_SM = INPUT_BTN_FONT_SIZE_SM,
    BTN_LINE_HEIGHT_SM = INPUT_BTN_LINE_HEIGHT_SM,

    BTN_PADDING_Y_LG = INPUT_BTN_PADDING_Y_LG,
    BTN_PADDING_X_LG = INPUT_BTN_PADDING_X_LG,
    BTN_FONT_SIZE_LG = INPUT_BTN_FONT_SIZE_LG,
    BTN_LINE_HEIGHT_LG = INPUT_BTN_LINE_HEIGHT_LG,

    BTN_BORDER_WIDTH = INPUT_BTN_BORDER_WIDTH,

    BTN_FONT_WEIGHT = FONT_WEIGHT_NORMAL,
    // btn-box-shadow: inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;
    // BTN_BOX_SHADOW_COLOR = ...,
    // BTN_BOX_SHADOW_OPACITY = ...,
    // BTN_BOX_SHADOW_OFFSET = ...,
    // BTN_BOX_SHADOW_RADIUS = ...,
    BTN_FOCUS_WIDTH = INPUT_BTN_FOCUS_WIDTH,
    // BTN_FOCUS_BOX_SHADOW_COLOR = INPUT_BTN_FOCUS_BOX_SHADOW_COLOR,
    // BTN_FOCUS_BOX_SHADOW_OPACITY = INPUT_BTN_FOCUS_BOX_SHADOW_OPACITY,
    // BTN_FOCUS_BOX_SHADOW_OFFSET = INPUT_BTN_FOCUS_BOX_SHADOW_OFFSET,
    // BTN_FOCUS_BOX_SHADOW_RADIUS = INPUT_BTN_FOCUS_BOX_SHADOW_RADIUS,
    BTN_DISABLED_OPACITY = .65,
    // BTN_active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;
    // BTN_ACTIVE_BOX_SHADOW_COLOR = ...,
    // BTN_ACTIVE_BOX_SHADOW_OPACITY = ...,
    // BTN_ACTIVE_BOX_SHADOW_OFFSET = ...,
    // BTN_ACTIVE_BOX_SHADOW_RADIUS = ...,

    BTN_LINK_DISABLED_COLOR = GRAY_600,

    BTN_BLOCK_SPACING_Y = 0.5 * REM,

    BTN_BORDER_RADIUS = BORDER_RADIUS,
    BTN_BORDER_RADIUS_LG = BORDER_RADIUS_LG,
    BTN_BORDER_RADIUS_SM = BORDER_RADIUS_SM,

    BTN_OUTLINE_BACKGROUND_COLOR = BODY_BG, // origin: 'transparent'

    // Forms

    LABEL_MARGIN_BOTTOM = 0.5 * REM,

    INPUT_PADDING_Y = _('INPUT_PADDING_Y', INPUT_BTN_PADDING_Y),
    INPUT_PADDING_X = _('INPUT_PADDING_X', INPUT_BTN_PADDING_X),
    INPUT_FONT_FAMILY = _('INPUT_FONT_FAMILY', INPUT_BTN_FONT_FAMILY),
    INPUT_FONT_SIZE = _('INPUT_FONT_SIZE', INPUT_BTN_FONT_SIZE),
    INPUT_FONT_WEIGHT = _('INPUT_FONT_WEIGHT', FONT_WEIGHT_BASE),
    INPUT_LINE_HEIGHT = _('INPUT_LINE_HEIGHT', INPUT_BTN_LINE_HEIGHT),

    INPUT_PADDING_Y_SM = _('INPUT_PADDING_Y_SM', INPUT_BTN_PADDING_Y_SM),
    INPUT_PADDING_X_SM = _('INPUT_PADDING_X_SM', INPUT_BTN_PADDING_X_SM),
    INPUT_FONT_SIZE_SM = _('INPUT_FONT_SIZE_SM', INPUT_BTN_FONT_SIZE_SM),
    INPUT_LINE_HEIGHT_SM = _('INPUT_LINE_HEIGHT_SM', INPUT_BTN_LINE_HEIGHT_SM),

    INPUT_PADDING_Y_LG = _('INPUT_PADDING_Y_LG', INPUT_BTN_PADDING_Y_LG),
    INPUT_PADDING_X_LG = _('INPUT_PADDING_X_LG', INPUT_BTN_PADDING_X_LG),
    INPUT_FONT_SIZE_LG = _('INPUT_FONT_SIZE_LG', INPUT_BTN_FONT_SIZE_LG),
    INPUT_LINE_HEIGHT_LG = _('INPUT_LINE_HEIGHT_LG', INPUT_BTN_LINE_HEIGHT_LG),

    INPUT_BG = WHITE,
    INPUT_DISABLED_BG = GRAY_200,

    INPUT_COLOR = GRAY_700,
    INPUT_BORDER_COLOR = GRAY_400,
    INPUT_BORDER_WIDTH = INPUT_BTN_BORDER_WIDTH,
    INPUT_SHADOW_COLOR = _('INPUT_SHADOW_COLOR', BLACK), // origin input-box-shadow
    INPUT_SHADOW_OPACITY = _('INPUT_SHADOW_OPACITY', 0.075), // origin input-box-shadow
    INPUT_SHADOW_OFFSET = _('INPUT_SHADOW_OFFSET', {width: 0, height: 1}), // origin input-box-shadow
    INPUT_SHADOW_RADIUS = _('INPUT_SHADOW_RADIUS', 1), // origin input-box-shadow

    INPUT_BORDER_RADIUS = BORDER_RADIUS,
    INPUT_BORDER_RADIUS_LG = BORDER_RADIUS_LG,
    INPUT_BORDER_RADIUS_SM = BORDER_RADIUS_SM,

    INPUT_FOCUS_BG = INPUT_BG,
    INPUT_FOCUS_BORDER_COLOR = Color(COMPONENT_ACTIVE_BG).lighten(0.25).rgb().string(),
    INPUT_FOCUS_COLOR = INPUT_COLOR,
    INPUT_FOCUS_WIDTH = INPUT_BTN_FOCUS_WIDTH,
    INPUT_FOCUS_BOX_SHADOW_RADIUS = INPUT_BTN_FOCUS_BOX_SHADOW_RADIUS,
    INPUT_FOCUS_BOX_SHADOW_OFFSET = INPUT_BTN_FOCUS_BOX_SHADOW_OFFSET,
    INPUT_FOCUS_BOX_SHADOW_COLOR = INPUT_BTN_FOCUS_BOX_SHADOW_COLOR,
    INPUT_FOCUS_BOX_SHADOW_OPACITY = INPUT_BTN_FOCUS_BOX_SHADOW_OPACITY,

    INPUT_PLACEHOLDER_COLOR = GRAY_600,
    INPUT_PLAINTEXT_COLOR = BODY_COLOR,

    INPUT_HEIGHT_BORDER = INPUT_BORDER_WIDTH * 2,

    INPUT_HEIGHT_INNER = INPUT_LINE_HEIGHT + INPUT_PADDING_Y * 2,
    INPUT_HEIGHT = INPUT_HEIGHT_INNER + INPUT_HEIGHT_BORDER,

    // $input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;
    // $input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;
    // $input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y / 2) !default;

    // $input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;
    // $input-height-sm:                       add($input-line-height-sm * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;
    // $input-height-lg:                       add($input-line-height-lg * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;

    // $input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

    FORM_TEXT_MARGIN_TOP = 0.25 * REM,

    FORM_CHECK_INPUT_GUTTER = 1.25 * REM,
    FORM_CHECK_INPUT_MARGIN_Y = 0.3 * REM,
    FORM_CHECK_INPUT_MARGIN_X = 0.25 * REM,

    FORM_CHECK_INLINE_MARGIN_X = 0.75 * REM,
    FORM_CHECK_INLINE_INPUT_MARGIN_X = 0.3125 * REM,

    FORM_GRID_GUTTER_WIDTH = 10,
    FORM_GROUP_MARGIN_BOTTOM = 1 * REM,

    // INPUT_COLOR_ADDON_COLOR = INPUT_COLOR,
    // INPUT_COLOR_ADDON_BG = _('INPUT_COLOR_ADDON_BG', GRAY_200),
    // INPUT_COLOR_ADDON_BORDER_COLOR = INPUT_BORDER_COLOR,

    // Pagination

    PAGINATION_PADDING_Y =.5 * REM,
    PAGINATION_PADDING_X =.75 * REM,
    PAGINATION_PADDING_Y_SM = .25 * REM,
    PAGINATION_PADDING_X_SM = .5 * REM,
    PAGINATION_PADDING_Y_LG = .75 * REM,
    PAGINATION_PADDING_X_LG = 1.5 * REM,
    PAGINATION_LINE_HEIGHT = 1.25,

    PAGINATION_COLOR = LINK_COLOR,
    PAGINATION_BG = WHITE,
    PAGINATION_BORDER_WIDTH = BORDER_WIDTH,
    PAGINATION_BORDER_COLOR = GRAY_300,

    PAGINATION_FOCUS_BOX_SHADOW_COLOR = INPUT_BTN_FOCUS_BOX_SHADOW_COLOR,
    PAGINATION_FOCUS_BOX_SHADOW_OPACITY = INPUT_BTN_FOCUS_BOX_SHADOW_OPACITY,
    PAGINATION_FOCUS_BOX_SHADOW_OFFSET = INPUT_BTN_FOCUS_BOX_SHADOW_OFFSET,
    PAGINATION_FOCUS_BOX_SHADOW_RADIUS = INPUT_BTN_FOCUS_BOX_SHADOW_RADIUS,
    PAGINATION_FOCUS_OUTLINE = 0,

    // not applicable
    // $pagination-hover-color:            $link-hover-color !default;
    // $pagination-hover-bg:               $gray-200 !default;
    // $pagination-hover-border-color:     $gray-300 !default;

    PAGINATION_ACTIVE_COLOR = COMPONENT_ACTIVE_COLOR,
    PAGINATION_ACTIVE_BG = _('PAGINATION_ACTIVE_BG', COMPONENT_ACTIVE_BG),
    PAGINATION_ACTIVE_BORDER_COLOR = PAGINATION_ACTIVE_BG,

    PAGINATION_DISABLED_COLOR = GRAY_600,
    PAGINATION_DISABLED_BG = WHITE,
    PAGINATION_DISABLED_BORDER_COLOR = GRAY_300,

    // Cards

    CARD_SPACER_Y = _('CARD_SPACER_Y', 0.75 * SPACER),
    CARD_SPACER_X = _('CARD_SPACER_X', 1.25 * SPACER),
    CARD_BORDER_WIDTH = _('CARD_BORDER_WIDTH', BORDER_WIDTH),
    CARD_BORDER_RADIUS = _('CARD_BORDER_RADIUS', BORDER_RADIUS),
    CARD_BORDER_COLOR = BORDER_COLOR, // rgba($black, .125)
    CARD_INNER_BORDER_RADIUS = CARD_BORDER_RADIUS - CARD_BORDER_WIDTH,
    CARD_CAP_BG = Color(BLACK).alpha(0.03).rgb().string(),
    CARD_CAP_COLOR = null, // what?
    CARD_HEIGHT = null, // what?
    CARD_COLOR = null, // what?
    CARD_BG = WHITE,

    // OBSOLETED / CARD_SHADOW_COLOR = SHADOW_COLOR,
    // OBSOLETED / CARD_SHADOW_OPACITY = SHADOW_OPACITY,
    // OBSOLETED / CARD_SHADOW_OFFSET = SHADOW_OFFSET,
    // OBSOLETED / CARD_SHADOW_RADIUS = CARD_BORDER_RADIUS,

    CARD_IMG_OVERLAY_PADDING = 1.25 * REM,

    CARD_GROUP_MARGIN = _('CARD_GROUP_MARGIN', GRID_GUTTER_WIDTH / 2),
    CARD_DECK_MARGIN = CARD_GROUP_MARGIN,

    CARD_COLUMNS_COUNT = 3,
    CARD_COLUMNS_GAP = 1.25 * REM,
    CARD_COLUMNS_MARGIN = CARD_SPACER_Y,

    // Toasts

    TOAST_MAX_WIDTH = 350, // 350px,
    TOAST_PADDING_X = .75 * REM,
    TOAST_PADDING_Y = .25 * REM,
    TOAST_FONT_SIZE = .875 * REM,
    TOAST_COLOR = null,
    TOAST_BACKGROUND_COLOR = Color(BLACK).alpha(0.85).rgb().string(),
    TOAST_BORDER_WIDTH = 1, // px,
    TOAST_BORDER_COLOR = Color(BLACK).alpha(0.1).rgb().string(),
    TOAST_BORDER_RADIUS = .25 * REM,
    TOAST_BOX_SHADOW_COLOR = BLACK, // SHADOW_COLOR,
    TOAST_BOX_SHADOW_OPACITY = .1, // SHADOW_OPACITY,
    TOAST_BOX_SHADOW_OFFSET = {width: 0, height: .25 * REM}, // 0SHADOW_OFFSET
    TOAST_BOX_SHADOW_RADIUS = .75 * REM,
    TOAST_HEADER_COLOR = GRAY_600,
    TOAST_HEADER_BACKGROUND_COLOR = Color(BLACK).alpha(0.85).rgb().string(),
    TOAST_HEADER_BORDER_COLOR = Color(BLACK).alpha(0.05).rgb().string(),

    // Modals

    MODAL_INNER_PADDING = 1 * SPACER,
    MODAL_DIALOG_MARGIN = 1 * SPACER,
    // $modal-dialog-margin-y-sm-up: 30px,
    MODAL_TITLE_LINE_HEIGHT = LINE_HEIGHT_BASE,
    MODAL_CONTENT_BG = WHITE,
    MODAL_CONTENT_BORDER_COLOR = Color(BLACK).alpha(0.2).rgb().string(),
    MODAL_CONTENT_BORDER_WIDTH = _('MODAL_CONTENT_BORDER_WIDTH', BORDER_WIDTH),
    MODAL_CONTENT_BORDER_RADIUS = BORDER_RADIUS * 3, // BORDER_RADIUS_LG,

    MODAL_CONTENT_SHADOW_COLOR = SHADOW_COLOR,
    MODAL_CONTENT_SHADOW_OPACITY = SHADOW_OPACITY,
    MODAL_CONTENT_SHADOW_OFFSET = {width: SHADOW_OFFSET.width * 2, height: SHADOW_OFFSET.height * 2},
    MODAL_CONTENT_SHADOW_RADIUS = MODAL_CONTENT_BORDER_RADIUS,
    // $modal-content-box-shadow-xs:       0 .25rem .5rem rgba($black, .5),
    // $modal-content-box-shadow-sm-up:    0 .5rem 1rem rgba($black, .5),

    MODAL_BACKDROP_BG = BLACK,
    MODAL_BACKDROP_OPACITY = 0.5, // for compatibilty
    MODAL_HEADER_BORDER_COLOR = _('MODAL_HEADER_BORDER_COLOR', GRAY_200),
    MODAL_FOOTER_BORDER_COLOR = MODAL_HEADER_BORDER_COLOR,
    MODAL_HEADER_BORDER_WIDTH = _('MODAL_HEADER_BORDER_WIDTH', MODAL_CONTENT_BORDER_WIDTH),
    MODAL_FOOTER_BORDER_WIDTH = MODAL_HEADER_BORDER_WIDTH,
    MODAL_HEADER_PADDING_X = 1 * REM,
    MODAL_HEADER_PADDING_Y = 1 * REM,
    // DROPPED / MODAL_HEADER_PADDING

    // $modal-lg:                    800px,
    // $modal-md:                    500px,
    // $modal-sm:                    300px,

    // $modal-transition:            transform .3s ease-out,

    // Alert

    ALERT_PADDING_Y = .75 * REM,
    ALERT_PADDING_X = 1.25 * REM,
    ALERT_MARGIN_BOTTOM = 1 * REM,
    ALERT_BORDER_RADIUS = BORDER_RADIUS,
    ALERT_LINK_FONT_WEIGHT = FONT_WEIGHT_BOLD,
    ALERT_BORDER_WIDTH = BORDER_WIDTH,
    ALERT_BG_LEVEL = -10,
    ALERT_BORDER_LEVEL = -9,
    ALERT_COLOR_LEVEL = 6,

    // Progress bars

    PROGRESS_HEIGHT = 1 * REM,
    PROGRESS_FONT_SIZE = 0.75 * FONT_SIZE_BASE,
    PROGRESS_BG = GRAY_200,
    PROGRESS_BORDER_RADIUS = BORDER_RADIUS,
    PROGRESS_BOX_SHADOW_COLOR = SHADOW_COLOR,
    PROGRESS_BOX_SHADOW_OFFSET = SHADOW_OFFSET,
    PROGRESS_BOX_SHADOW_OPACITY = 0.5 * SHADOW_OPACITY, // 0.1
    PROGRESS_BOX_SHADOW_RADIUS = _('PROGRESS_BOX_SHADOW_RADIUS', PROGRESS_BORDER_RADIUS),
    PROGRESS_BAR_COLOR = WHITE,
    PROGRESS_BAR_BG = PRIMARY,
    PROGRESS_BAR_ANIMATION_TIMING = 'placeholder', // 1s linear infinite,
    PROGRESS_BAR_TRANSITION = 'placeholder', // width .6s ease,

    // List group

    LIST_GROUP_COLOR = null,
    LIST_GROUP_BG = _('LIST_GROUP_BG', WHITE),
    LIST_GROUP_BORDER_COLOR = Color(BLACK).alpha(0.125).rgb().string(),
    LIST_GROUP_BORDER_WIDTH = BORDER_WIDTH,
    LIST_GROUP_BORDER_RADIUS = BORDER_RADIUS,

    LIST_GROUP_ITEM_PADDING_Y = 0.75 * REM,
    LIST_GROUP_ITEM_PADDING_X = 1.25 * REM,

    // RESERVED / LIST_GROUP_HOVER_BG = GRAY_100,
    LIST_GROUP_ACTIVE_COLOR = COMPONENT_ACTIVE_COLOR,
    LIST_GROUP_ACTIVE_BG = _('LIST_GROUP_ACTIVE_BG', COMPONENT_ACTIVE_BG),
    LIST_GROUP_ACTIVE_BORDER_COLOR = LIST_GROUP_ACTIVE_BG,

    LIST_GROUP_DISABLED_COLOR = GRAY_600,
    LIST_GROUP_DISABLED_BG = LIST_GROUP_BG,

    LIST_GROUP_ACTION_COLOR = _('LIST_GROUP_ACTION_COLOR', GRAY_700),
    LIST_GROUP_ACTION_HOVER_COLOR = LIST_GROUP_ACTION_COLOR,

    LIST_GROUP_ACTION_ACTIVE_COLOR = BODY_COLOR,
    LIST_GROUP_ACTION_ACTIVE_BG = GRAY_200,

    // Image thumbnails

    THUMBNAIL_PADDING = 0.25 * REM,
    THUMBNAIL_BG = BODY_BG,
    THUMBNAIL_BORDER_WIDTH = BORDER_WIDTH,
    THUMBNAIL_BORDER_COLOR = GRAY_300,
    THUMBNAIL_BORDER_RADIUS = BORDER_RADIUS,
    THUMBNAIL_BOX_SHADOW_COLOR = BLACK,
    THUMBNAIL_BOX_SHADOW_OPACITY = 0.075,
    THUMBNAIL_BOX_SHADOW_OFFSET = {width: 0, height: 1},
    THUMBNAIL_BOX_SHADOW_RADIUS = 2,

    // Carousel

    CAROUSEL_CONTROL_COLOR = _('CAROUSEL_CONTROL_COLOR', WHITE),
    CAROUSEL_CONTROL_WIDTH = '15%',
    CAROUSEL_CONTROL_OPACITY = .5,
    CAROUSEL_CONTROL_HOVER_OPACITY = .9,
    // CAROUSEL_CONTROL_TRANSITION = opacity .15s ease !default;

    CAROUSEL_INDICATOR_WIDTH = 30, // px
    CAROUSEL_INDICATOR_HEIGHT = 3, // px
    CAROUSEL_INDICATOR_HIT_AREA_HEIGHT = 10, // px
    CAROUSEL_INDICATOR_SPACER = 3, // px
    CAROUSEL_INDICATOR_ACTIVE_BG = WHITE,
    // CAROUSEL_INDICATOR_TRANSITION = opacity .6s ease !default;

    CAROUSEL_CAPTION_WIDTH = '70%',
    CAROUSEL_CAPTION_COLOR = WHITE,

    CAROUSEL_CONTROL_ICON_WIDTH = 20, // px

    // CAROUSEL_CONTROL_PREV_ICON_BG = url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='#{CAROUSEL_CONTROL_color}' width='8' height='8' viewBox='0 0 8 8'><path d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/></svg>") !default;
    // CAROUSEL_CONTROL_NEXT-ICON_BG = url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='#{CAROUSEL_CONTROL_color}' width='8' height='8' viewBox='0 0 8 8'><path d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/></svg>") !default;

    // CAROUSEL_TRANSITION_DURATION = _('CAROUSEL_CONTROL_COLOR', '6s'),
    // CAROUSEL_TRANSITION = transform CAROUSEL_TRANSITION_DURATION ease-in-out,

    // Close

    CLOSE_FONT_SIZE = FONT_SIZE_BASE * 1.5,
    CLOSE_FONT_WEIGHT = FONT_WEIGHT_BOLD,
    CLOSE_COLOR = BLACK,
    // CLOSE_TEXT_SHADOW = 0 1px 0 $white,

    // Code

    CODE_FONT_SIZE = _('CODE_FONT_SIZE', FONT_SIZE_BASE * 0.875),
    CODE_COLOR = PINK,

    KBD_PADDING_Y = 0.2 * REM,
    KBD_PADDING_X = 0.4 * REM,
    KBD_FONT_SIZE = CODE_FONT_SIZE,
    KBD_COLOR = WHITE,
    // $kbd-bg:                            $gray-900 !default;

    // $pre-color:                         $gray-900 !default;
    // $pre-scrollable-max-height:         340px !default;

    DISPLAYS = ['none', 'flex'],
    OVERFLOWS = ['visible', 'hidden'],
    POSITIONS = ['absolute', 'relative'],
    // non-applicable / $user-selects: all, auto, none !default;

    // $print-page-size:                   a3 !default;
    // $print-body-min-width:              map-get($grid-breakpoints, "lg") !default;

  } = constants || {};

  return {
    ENABLE_ROUNDED, ENABLE_SHADOWS, ENABLE_GRID_CLASSES,

    REM,
    SPACER, SPACERS, SIZES,
    GRID_BREAKPOINTS, GRID_BREAKPOINTS_HORIZONTAL, GRID_BREAKPOINTS_VERTICAL,
    CONTAINER_MAX_WIDTHS,

    WHITE, BLACK,
    BLUE, CYAN, RED, YELLOW, GREEN,
    GRAY_900, GRAY_800, GRAY_700, GRAY_600, GRAY_500, GRAY_400, GRAY_300, GRAY_200, GRAY_100,
    PRIMARY, SECONDARY, SUCCESS, INFO, WARNING, DANGER, LIGHT, DARK,
    THEME_COLORS, THEME_COLOR_INTERVAL,
    BODY_BG, BODY_COLOR, LINK_COLOR, LINK_DECORATION,
    LINK_DECORATION_LINE, LINK_DECORATION_COLOR, LINK_DECORATION_STYLE,
    LINK_HOVER_COLOR, LINK_HOVER_DECORATION_LINE, LINK_HOVER_DECORATION_COLOR, LINK_HOVER_DECORATION_STYLE,
    YIG_CONTRASTED_THRESHOLD, YIG_TEXT_DARK, YIG_TEXT_LIGHT,

    GRID_COLUMNS, GRID_GUTTER_WIDTH, GRID_ROW_COLUMNS,
    LINE_HEIGHT_LG, LINE_HEIGHT_SM,
    BORDER_WIDTH, BORDER_COLOR, BORDER_RADIUS, BORDER_RADIUS_LG, BORDER_RADIUS_SM,
    ROUNDED_PILL,
    SHADOW_COLOR, SHADOW_OPACITY, SHADOW_OFFSET, SHADOW_RADIUS,
    SHADOW_COLOR_SM, SHADOW_OPACITY_SM, SHADOW_OFFSET_SM, SHADOW_RADIUS_SM,
    SHADOW_COLOR_LG, SHADOW_OPACITY_LG, SHADOW_OFFSET_LG, SHADOW_RADIUS_LG,

    COMPONENT_ACTIVE_COLOR, COMPONENT_ACTIVE_BG,

    FONT_FAMILY_SANS_SERIF, FONT_FAMILY_MONOSPACE,
    FONT_FAMILY_BASE, FONT_FAMILY_BASE_LIGHT, FONT_FAMILY_BASE_BOLD,
    FONT_SIZE_BASE, FONT_SIZE_SM, FONT_SIZE_LG,
    FONT_WEIGHT_LIGHT, FONT_WEIGHT_NORMAL, FONT_WEIGHT_BOLD,
    FONT_WEIGHT_BASE, LINE_HEIGHT_BASE,
    H1_FONT_SIZE, H2_FONT_SIZE, H3_FONT_SIZE, H4_FONT_SIZE, H5_FONT_SIZE, H6_FONT_SIZE,
    HEADINGS_MARGIN_BOTTOM, HEADINGS_FONT_FAMILY, HEADINGS_FONT_WEIGHT, HEADINGS_COLOR,
    LEAD_FONT_SIZE, LEAD_FONT_WEIGHT,

    TEXT_MUTED,
    BLOCKQUOTE_FONT_SIZE,
    HR_BORDER_COLOR, HR_BORDER_WIDTH,
    MARK_PADDING, LIST_INLINE_PADDING, MARK_BG,
    HR_MARGIN_Y,

    TABLE_CELL_PADDING, TABLE_CELL_PADDING_SM,
    TABLE_COLOR, TABLE_BG, TABLE_ACCENT_BG, TABLE_HOVER_COLOR,
    TABLE_HOVER_BG, TABLE_ACTIVE_BG,
    TABLE_BORDER_WIDTH, TABLE_BORDER_COLOR,
    TABLE_HEAD_BG, TABLE_HEAD_COLOR,
    TABLE_DARK_COLOR, TABLE_DARK_BG,
    TABLE_DARK_ACCENT_BG, TABLE_DARK_HOVER_COLOR,
    TABLE_DARK_HOVER_BG, TABLE_DARK_BORDER_COLOR,
    TABLE_CAPTION_COLOR,
    TABLE_BG_LEVEL, TABLE_BORDER_LEVEL,

    INPUT_BTN_PADDING_Y, INPUT_BTN_PADDING_X,
    INPUT_BTN_FONT_FAMILY, INPUT_BTN_FONT_SIZE, INPUT_BTN_LINE_HEIGHT,
    INPUT_BTN_PADDING_Y_SM, INPUT_BTN_PADDING_X_SM, INPUT_BTN_FONT_SIZE_SM, INPUT_BTN_LINE_HEIGHT_SM,
    INPUT_BTN_PADDING_Y_LG, INPUT_BTN_PADDING_X_LG, INPUT_BTN_FONT_SIZE_LG, INPUT_BTN_LINE_HEIGHT_LG,
    INPUT_BTN_BORDER_WIDTH,

    BTN_PADDING_Y, BTN_PADDING_X,
    BTN_FONT_FAMILY, BTN_FONT_SIZE, BTN_LINE_HEIGHT,
    BTN_PADDING_Y_SM, BTN_PADDING_X_SM, BTN_FONT_SIZE_SM, BTN_LINE_HEIGHT_SM,
    BTN_PADDING_Y_LG, BTN_PADDING_X_LG, BTN_FONT_SIZE_LG,BTN_LINE_HEIGHT_LG,
    BTN_BORDER_WIDTH,
    BTN_FONT_WEIGHT,
    BTN_DISABLED_OPACITY, BTN_LINK_DISABLED_COLOR, BTN_BLOCK_SPACING_Y,
    BTN_BORDER_RADIUS, BTN_BORDER_RADIUS_LG, BTN_BORDER_RADIUS_SM,

    LABEL_MARGIN_BOTTOM, INPUT_PADDING_Y, INPUT_PADDING_X, INPUT_LINE_HEIGHT,
    INPUT_FONT_FAMILY, INPUT_FONT_SIZE, INPUT_FONT_WEIGHT,
    INPUT_PADDING_Y_SM, INPUT_PADDING_X_SM, INPUT_FONT_SIZE_SM, INPUT_LINE_HEIGHT_SM,
    INPUT_PADDING_Y_LG, INPUT_PADDING_X_LG, INPUT_FONT_SIZE_LG, INPUT_LINE_HEIGHT_LG,

    INPUT_BG, INPUT_DISABLED_BG, INPUT_COLOR,
    INPUT_HEIGHT,
    INPUT_BORDER_COLOR, INPUT_BORDER_WIDTH,
    INPUT_BORDER_RADIUS, INPUT_BORDER_RADIUS_LG, INPUT_BORDER_RADIUS_SM,
    INPUT_PLACEHOLDER_COLOR, INPUT_PLAINTEXT_COLOR, INPUT_HEIGHT_BORDER,
    INPUT_SHADOW_COLOR, INPUT_SHADOW_OPACITY, INPUT_SHADOW_OFFSET, INPUT_SHADOW_RADIUS,
    INPUT_FOCUS_BG, INPUT_FOCUS_BORDER_COLOR, INPUT_FOCUS_COLOR, INPUT_FOCUS_WIDTH,
    INPUT_FOCUS_BOX_SHADOW_RADIUS, INPUT_FOCUS_BOX_SHADOW_OFFSET,
    INPUT_FOCUS_BOX_SHADOW_COLOR, INPUT_FOCUS_BOX_SHADOW_OPACITY,

    FORM_TEXT_MARGIN_TOP, FORM_CHECK_INPUT_GUTTER, FORM_CHECK_INPUT_MARGIN_Y, FORM_CHECK_INPUT_MARGIN_X,
    FORM_CHECK_INLINE_MARGIN_X, FORM_CHECK_INLINE_INPUT_MARGIN_X, FORM_GRID_GUTTER_WIDTH, FORM_GROUP_MARGIN_BOTTOM,

    PAGINATION_PADDING_Y, PAGINATION_PADDING_X,
    PAGINATION_PADDING_Y_SM, PAGINATION_PADDING_X_SM,
    PAGINATION_PADDING_Y_LG, PAGINATION_PADDING_X_LG,
    PAGINATION_LINE_HEIGHT,
    PAGINATION_COLOR, PAGINATION_BG,
    PAGINATION_BORDER_WIDTH, PAGINATION_BORDER_COLOR,
    PAGINATION_FOCUS_BOX_SHADOW_COLOR, PAGINATION_FOCUS_BOX_SHADOW_OPACITY,
    PAGINATION_FOCUS_BOX_SHADOW_OFFSET, PAGINATION_FOCUS_BOX_SHADOW_RADIUS,
    PAGINATION_FOCUS_OUTLINE,
    PAGINATION_ACTIVE_COLOR, PAGINATION_ACTIVE_BG, PAGINATION_ACTIVE_BORDER_COLOR,
    PAGINATION_DISABLED_COLOR, PAGINATION_DISABLED_BG, PAGINATION_DISABLED_BORDER_COLOR,

    CARD_SPACER_Y, CARD_SPACER_X,
    CARD_BORDER_WIDTH, CARD_BORDER_RADIUS, CARD_BORDER_COLOR,
    CARD_INNER_BORDER_RADIUS, CARD_CAP_BG, CARD_BG,
    // OBSOLETED / CARD_SHADOW_COLOR, CARD_SHADOW_OPACITY, CARD_SHADOW_OFFSET, CARD_SHADOW_RADIUS,
    CARD_IMG_OVERLAY_PADDING,
    CARD_GROUP_MARGIN,CARD_DECK_MARGIN,
    CARD_COLUMNS_COUNT, CARD_COLUMNS_GAP, CARD_COLUMNS_MARGIN,

    TOAST_MAX_WIDTH, TOAST_PADDING_X, TOAST_PADDING_Y,
    TOAST_FONT_SIZE, TOAST_COLOR, TOAST_BACKGROUND_COLOR,
    TOAST_BORDER_WIDTH, TOAST_BORDER_COLOR, TOAST_BORDER_RADIUS,
    TOAST_BOX_SHADOW_COLOR, TOAST_BOX_SHADOW_OPACITY,
    TOAST_BOX_SHADOW_OFFSET, TOAST_BOX_SHADOW_RADIUS,
    TOAST_HEADER_COLOR, TOAST_HEADER_BACKGROUND_COLOR, TOAST_HEADER_BORDER_COLOR,

    MODAL_INNER_PADDING, MODAL_DIALOG_MARGIN,
    MODAL_TITLE_LINE_HEIGHT,
    MODAL_CONTENT_BG, MODAL_CONTENT_BORDER_COLOR,
    MODAL_CONTENT_BORDER_WIDTH, MODAL_CONTENT_BORDER_RADIUS,
    MODAL_CONTENT_SHADOW_COLOR, MODAL_CONTENT_SHADOW_OPACITY,
    MODAL_CONTENT_SHADOW_OFFSET, MODAL_CONTENT_SHADOW_RADIUS,
    MODAL_BACKDROP_BG, MODAL_BACKDROP_OPACITY,
    MODAL_HEADER_BORDER_COLOR, MODAL_FOOTER_BORDER_COLOR,
    MODAL_HEADER_BORDER_WIDTH, MODAL_FOOTER_BORDER_WIDTH,
    MODAL_HEADER_PADDING_X, MODAL_HEADER_PADDING_Y,

    ALERT_PADDING_Y, ALERT_PADDING_X, ALERT_MARGIN_BOTTOM,
    ALERT_BORDER_RADIUS, ALERT_LINK_FONT_WEIGHT, ALERT_BORDER_WIDTH,
    ALERT_BG_LEVEL, ALERT_BORDER_LEVEL, ALERT_COLOR_LEVEL,

    PROGRESS_HEIGHT, PROGRESS_FONT_SIZE, PROGRESS_BG, PROGRESS_BORDER_RADIUS,
    PROGRESS_BOX_SHADOW_COLOR, PROGRESS_BOX_SHADOW_OFFSET,
    PROGRESS_BOX_SHADOW_OPACITY, PROGRESS_BOX_SHADOW_RADIUS,
    PROGRESS_BAR_COLOR, PROGRESS_BAR_BG,
    PROGRESS_BAR_ANIMATION_TIMING, PROGRESS_BAR_TRANSITION,

    LIST_GROUP_COLOR,LIST_GROUP_BG,
    LIST_GROUP_BORDER_COLOR, LIST_GROUP_BORDER_WIDTH, LIST_GROUP_BORDER_RADIUS,
    LIST_GROUP_ITEM_PADDING_Y, LIST_GROUP_ITEM_PADDING_X,
    LIST_GROUP_ACTIVE_COLOR, LIST_GROUP_ACTIVE_BG, LIST_GROUP_ACTIVE_BORDER_COLOR,
    LIST_GROUP_DISABLED_COLOR, LIST_GROUP_DISABLED_BG,
    LIST_GROUP_ACTION_COLOR, LIST_GROUP_ACTION_HOVER_COLOR,
    LIST_GROUP_ACTION_ACTIVE_COLOR, LIST_GROUP_ACTION_ACTIVE_BG,

    THUMBNAIL_PADDING, THUMBNAIL_BG, THUMBNAIL_BORDER_WIDTH,
    THUMBNAIL_BORDER_COLOR, THUMBNAIL_BORDER_RADIUS,
    THUMBNAIL_BOX_SHADOW_COLOR, THUMBNAIL_BOX_SHADOW_OPACITY, THUMBNAIL_BOX_SHADOW_OFFSET, THUMBNAIL_BOX_SHADOW_RADIUS,

    CAROUSEL_CONTROL_COLOR, CAROUSEL_CONTROL_WIDTH,
    CAROUSEL_CONTROL_OPACITY, CAROUSEL_CONTROL_HOVER_OPACITY,
    CAROUSEL_INDICATOR_WIDTH, CAROUSEL_INDICATOR_HEIGHT, CAROUSEL_INDICATOR_HIT_AREA_HEIGHT,
    CAROUSEL_INDICATOR_SPACER, CAROUSEL_INDICATOR_ACTIVE_BG,
    CAROUSEL_CAPTION_WIDTH, CAROUSEL_CAPTION_COLOR, CAROUSEL_CONTROL_ICON_WIDTH,

    CLOSE_FONT_SIZE, CLOSE_FONT_WEIGHT, CLOSE_COLOR,
    // CLOSE_TEXT_SHADOW = 0 1px 0 $white,

    DISPLAYS, OVERFLOWS, POSITIONS,
  };
};
