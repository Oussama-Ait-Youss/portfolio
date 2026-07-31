export const getAssetPath = (path) => {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('/portfolio')) {
    return path;
  }
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
};
