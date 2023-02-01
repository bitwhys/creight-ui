import colors from './tokens/colors'
import { radii, typography } from './tokens'
import { default as styles } from './styles/global'
export * from './tokens'

export const foundations = {
  styles,
  colors,
  radii,
  ...typography,
}
