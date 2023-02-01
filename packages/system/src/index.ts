import colors from './tokens/colors'
import { radii, typography,shadows } from './tokens'
import { default as styles } from './styles/global'
export * from './tokens'

export const foundations = {
  styles,
  colors,
  radii,
  shadows,
  ...typography,
}
