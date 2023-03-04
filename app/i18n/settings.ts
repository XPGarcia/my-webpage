export const fallbackLng = 'en';
export const languages = [fallbackLng, 'es'];

export const defaultNS = 'common';
export const namespaces = [defaultNS];

export function getOptions(lng = fallbackLng, ns?: string[]) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns: ns && ns.length > 0 ? [...namespaces, ...ns] : namespaces
  };
}
