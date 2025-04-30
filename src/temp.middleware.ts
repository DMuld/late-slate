import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

const protectedRoutes = ["/create-lobby", "/host-lobby", "/join-lobby"];

export default async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));

  if (isProtected && !session?.user) {
    return NextResponse.redirect(new URL("/user", request.url));
  }

  return NextResponse.next();
}
