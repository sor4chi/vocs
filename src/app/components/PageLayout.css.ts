import { createVar, style } from '@vanilla-extract/css'
import {
  contentVars,
  primitiveColorVars,
  sidebarVars,
  spaceVars,
  topNavVars,
  viewportVars,
  zIndexVars,
} from '../styles/vars.css.js'

const leftGutterWidthVar = createVar('leftGutterWidth')

export const root = style({
  vars: {
    [leftGutterWidthVar]: `max(calc((100vw - ${contentVars.width}) / 2), ${sidebarVars.width})`,
  },
})

export const content = style(
  {
    marginLeft: leftGutterWidthVar,
    maxWidth: contentVars.width,
    minHeight: `calc(100vh - (${topNavVars.lowerHeight} + ${topNavVars.upperHeight}))`,
    '@media': {
      [viewportVars['max-1080px']]: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  },
  'content',
)

export const gutterLeft = style(
  {
    backgroundColor: primitiveColorVars.backgroundDark,
    justifyContent: 'flex-end',
    display: 'flex',
    height: '100vh',
    position: 'fixed',
    width: leftGutterWidthVar,
    zIndex: zIndexVars.gutterLeft,
    '@media': {
      [viewportVars['max-1080px']]: {
        display: 'none',
      },
    },
  },
  'gutterLeft',
)

export const gutterTopLower = style(
  {
    alignItems: 'center',
    display: 'none',
    position: 'sticky',
    top: 0,
    height: topNavVars.lowerHeight,
    width: '100vw',
    zIndex: zIndexVars.gutterTop,
    '@media': {
      [viewportVars['max-1080px']]: {
        display: 'flex',
      },
    },
  },
  'gutterTopLower',
)

export const gutterTopUpper = style(
  {
    alignItems: 'center',
    display: 'none',
    height: topNavVars.upperHeight,
    width: '100vw',
    zIndex: zIndexVars.gutterTop,
    '@media': {
      [viewportVars['max-1080px']]: {
        display: 'flex',
      },
    },
  },
  'gutterTopUpper',
)

export const gutterRight = style(
  {
    display: 'flex',
    height: '100vh',
    overflow: 'scroll',
    padding: `${contentVars.verticalPadding} ${spaceVars['24']} 0 0`,
    position: 'fixed',
    top: '0',
    right: '0',
    width: `calc(100vw - ${contentVars.width} - ${leftGutterWidthVar})`,
    zIndex: zIndexVars.gutterRight,
    '@media': {
      [viewportVars['max-1280px']]: {
        display: 'none',
      },
    },
  },
  'gutterRight',
)

export const outlinePopover = style(
  {
    display: 'none',
    '@media': {
      [viewportVars['max-1080px']]: {
        display: 'block',
      },
    },
  },
  'outlinePopover',
)

export const sidebarDrawer = style(
  {
    display: 'none',
    '@media': {
      [viewportVars['max-1080px']]: {
        display: 'block',
      },
    },
  },
  'sidebarDrawer',
)
