import { renderToString } from 'react-dom/server';
import { StartServer } from '@tanstack/react-start/server';
import { getRouter } from './router';

export default async function render(req: Request) {
  const router = getRouter();
  const html = await renderToString(
    <StartServer router={router} />
  );

  return new Response(`<!DOCTYPE html><html><body><div id="app">${html}</div></body></html>`, {
    headers: { 'Content-Type': 'text/html' },
  });
}
