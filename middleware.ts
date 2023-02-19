import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from "./services/jwt_sign_verify";

export async function middleware(request: NextRequest) {
  // Authorize the User

  // Check cookies for token
  const secret = process.env.SUPER_SECRET;
  const jwt = request.cookies.get('auth')?.value

  // If none, redirect to login
  if (jwt === undefined) {
    request.nextUrl.pathname = '/login'
    return NextResponse.redirect(request.nextUrl)
  }

  // Verify the token
  try {
    await verify(jwt, secret);
    return NextResponse.next();
  } catch (error) {
    request.nextUrl.pathname = '/login'
    return NextResponse.redirect(request.nextUrl)
  }
}

// Paths to use middlware on
export const config = {
  matcher: '/trades/:path*',
}