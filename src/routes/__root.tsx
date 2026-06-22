/// <reference types="vite/client" />

import interWoff2 from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url"
import { TanStackDevtools } from "@tanstack/react-devtools"
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { ThemeProvider } from "tanstack-router-theme-provider"

import appCss from "@/styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DoLater" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: interWoff2,
        crossOrigin: "anonymous",
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <Outlet />
          <Scripts />
          <TanStackDevtools
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
