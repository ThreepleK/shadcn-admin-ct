export const en = {
    ...(await import('./main-menus.json')).default,
    ...(await import('./dashboard.json')).default,
};