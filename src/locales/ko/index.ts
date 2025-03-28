export const ko = {
    ...(await import('./main-menus.json')).default,
    ...(await import('./dashboard.json')).default,
    ...(await import('./task.json')).default,
};

