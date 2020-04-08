import defaultSettings from '@/settings';

const title = defaultSettings.title || '3keji.com';

export default function getPageTitle (pageTitle: string) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
