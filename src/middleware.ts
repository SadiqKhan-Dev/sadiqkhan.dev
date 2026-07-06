import { NextRequest, NextResponse } from "next/server";

const MAINTENANCE_PATH = "/maintenance";

const ALLOWED_PATHS = new Set([
  MAINTENANCE_PATH,
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
]);

function isStaticAsset(pathname: string): boolean {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/file.") ||
    pathname.startsWith("/globe.") ||
    pathname.startsWith("/next.") ||
    pathname.startsWith("/vercel.") ||
    pathname.startsWith("/window.") ||
    pathname.startsWith("/team/") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".gif") ||
    pathname.endsWith(".webp") ||
    pathname.endsWith(".avif") ||
    pathname.endsWith(".woff") ||
    pathname.endsWith(".woff2") ||
    pathname.endsWith(".ttf") ||
    pathname.endsWith(".eot") ||
    pathname.endsWith(".css") ||
    pathname.endsWith(".js") ||
    pathname.endsWith(".map")
  );
}

function isMaintenanceModeEnabled(): boolean {
  return process.env.MAINTENANCE_MODE === "true";
}

function isProduction(): boolean {
  return (
    process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production"
  );
}

export function middleware(request: NextRequest): NextResponse | undefined {
  if (!isMaintenanceModeEnabled() || !isProduction()) {
    return undefined;
  }

  const { pathname } = request.nextUrl;

  if (ALLOWED_PATHS.has(pathname) || isStaticAsset(pathname)) {
    return undefined;
  }

  const maintenanceUrl = request.nextUrl.clone();
  maintenanceUrl.pathname = MAINTENANCE_PATH;

  return NextResponse.rewrite(maintenanceUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)",
  ],
};
