import { SliceName } from '../../contexts';
import { RadiiSlice, Detail as RadiusDetail } from './Radii';
import { Colors, Detail as ColorDetail } from './Colors';
import { Gradients, Detail as GradientDetail } from './Gradients';
import { Components, Detail as ComponentDetail } from './Components';
import { BordersSlice, Detail as BorderDetail } from './Borders';
import { GeneralFontsSlice, Detail as FontDetail } from './Fonts';
import { SizesSlice, Detail as SizeDetail } from './Sizes';
import { SpacingsSlice, Detail as SpacingDetail } from './Spacings';
import { ShadowsSlice, Detail as ShadowDetail } from './Shadows';
import { OpacitiesSlice, Detail as OpacityDetail } from './Opacities';

export type SliceConfig = {
  render: React.FC;
  displayName: string;
  renderDetail: React.FC;
};

export const slices: Record<SliceName, SliceConfig> = {
  [SliceName.COLORS]: {
    render: () => <Colors />,
    renderDetail: () => <ColorDetail />,
    displayName: 'colors',
  },
  [SliceName.COMPONENTS]: {
    render: () => <Components />,
    renderDetail: () => <ComponentDetail />,
    displayName: 'components',
  },
  [SliceName.RADII]: {
    render: () => <RadiiSlice />,
    renderDetail: () => <RadiusDetail />,
    displayName: 'radii',
  },
  [SliceName.SIZES]: {
    render: () => <SizesSlice />,
    renderDetail: () => <SizeDetail />,
    displayName: 'sizes',
  },
  [SliceName.FONTS]: {
    render: () => <GeneralFontsSlice property="fontFamily" />,
    renderDetail: () => <FontDetail main="fonts" />,
    displayName: 'fonts',
  },
  [SliceName.SHADOWS]: {
    render: () => <ShadowsSlice />,
    renderDetail: () => <ShadowDetail />,
    displayName: 'shadows',
  },
  [SliceName.BORDERS]: {
    render: () => <BordersSlice mainSlice="borders" />,
    renderDetail: () => <BorderDetail mainSlice="borders" />,
    displayName: 'borders',
  },
  [SliceName.SPACINGS]: {
    render: () => <SpacingsSlice />,
    renderDetail: () => <SpacingDetail />,
    displayName: 'spacings',
  },
  [SliceName.Z_INDICES]: {
    render: () => <></>,
    renderDetail: () => <></>,
    displayName: 'zIndices',
  },
  [SliceName.FONT_SIZES]: {
    render: () => <GeneralFontsSlice property="fontSize" />,
    renderDetail: () => <FontDetail main="fontSizes" />,
    displayName: 'fontSizes',
  },
  [SliceName.GRADIENTS]: {
    render: () => <Gradients />,
    renderDetail: () => <GradientDetail />,
    displayName: 'gradients',
  },
  [SliceName.OPACITIES]: {
    render: () => <OpacitiesSlice />,
    renderDetail: () => <OpacityDetail />,
    displayName: 'opacities',
  },
  [SliceName.FONT_WEIGHTS]: {
    render: () => <GeneralFontsSlice property="fontWeight" />,
    renderDetail: () => <FontDetail main="fontWeights" />,
    displayName: 'fontWeights',
  },
  [SliceName.LINE_HEIGHTS]: {
    render: () => <GeneralFontsSlice property="lineHeight" />,
    renderDetail: () => <FontDetail main="lineHeights" />,
    displayName: 'lineHeights',
  },
  [SliceName.BREAKPOINTS]: {
    render: () => <></>,
    renderDetail: () => <></>,
    displayName: 'breakpoints',
  },
  [SliceName.TRANSITIONS]: {
    render: () => <></>,
    renderDetail: () => <></>,
    displayName: 'transitions',
  },
  [SliceName.BORDER_WIDTHS]: {
    render: () => <BordersSlice mainSlice="borderWidths" />,
    renderDetail: () => <BorderDetail mainSlice="borderWidths" />,
    displayName: 'borderWidths',
  },
  [SliceName.MEDIA_QUERIES]: {
    render: () => <></>,
    renderDetail: () => <></>,
    displayName: 'mediaQueries',
  },
  [SliceName.BORDER_STYLES]: {
    render: () => <BordersSlice mainSlice="borderStyles" />,
    renderDetail: () => <BorderDetail mainSlice="borderStyles" />,
    displayName: 'borderStyles',
  },
  [SliceName.LETTER_SPACINGS]: {
    render: () => <GeneralFontsSlice property="letterSpacing" />,
    renderDetail: () => <FontDetail main="letterSpacings" />,
    displayName: 'letterSpacings',
  },
};
