export function formatUrl(url: string): string {
  url = url.toLowerCase();
  url = url.replace(/\%20.*?|[ ]/gm, " ");
  url = url.replace(/\b(\w)/g, c => c.toUpperCase());
  return url;
}
