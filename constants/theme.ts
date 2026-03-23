import { Platform } from 'react-native';

const tintColorLight = '#0a84ff';
const tintColorDark = '#0a84ff';

export const Colors = {
  light: {
    text: '#0B0B0F',
    mutedText: '#6B7280',
    background: '#FFFFFF',
    card: '#F3F4F6',
    tint: tintColorLight,
    tintText: '#FFFFFF',
    border: '#E5E7EB',
    danger: '#E11D48',
    storyRing: '#F43F5E',
    icon: '#6B7280',
    tabIconDefault: '#6B7280',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#F9FAFB',
    mutedText: '#9CA3AF',
    background: '#000000',
    card: '#111827',
    tint: tintColorDark,
    tintText: '#FFFFFF',
    border: '#1F2937',
    danger: '#FB7185',
    storyRing: '#FB7185',
    icon: '#9CA3AF',
    tabIconDefault: '#9CA3AF',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
