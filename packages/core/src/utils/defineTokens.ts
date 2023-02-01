interface SemanticColorToken {
  default: string
  _dark: string
}
export interface DefineTokensOptions {
  primary: string
  accent: string
  [p: string]: any
}
export const defineTokens = ({}: DefineTokensOptions) => ({})
