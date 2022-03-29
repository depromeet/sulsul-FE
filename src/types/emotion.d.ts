import '@emotion/react';

import { EmotionTheme } from '@/themes';

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {}
}
