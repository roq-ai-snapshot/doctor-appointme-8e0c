const mapping: Record<string, string> = {
  clinics: 'clinic',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
