// Caminhos principais de agrupamento
export const rootPaths = {
  root: '/',
  pages: 'pages',
  auth: 'auth',
  error: 'error',
};

// Caminhos completos para cada página
const paths = {
  // Dashboard
  dashboard: rootPaths.root,

  // Páginas principais
  analytics: `/${rootPaths.pages}/analytics`,
  invoice: `/${rootPaths.pages}/invoice`,
  schedule: `/${rootPaths.pages}/schedule`,
  calendar: `/${rootPaths.pages}/calendar`,
  messages: `/${rootPaths.pages}/messages`,
  notification: `/${rootPaths.pages}/notification`,
  settings: `/${rootPaths.pages}/settings`,

  // Autenticação
  signin: `/${rootPaths.auth}/signin`,
  signup: `/${rootPaths.auth}/signup`,
  resetPassword: `/${rootPaths.auth}/reset-password`,

  // Erros
  error404: `/${rootPaths.error}/404`,
};

export default paths;
