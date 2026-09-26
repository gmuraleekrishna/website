/**
 * Applies the saved theme before first paint so the page never flashes the
 * wrong colour scheme. Inlined in <head> and intentionally not React-rendered.
 */
export function ThemeScript() {
  const script = `try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
