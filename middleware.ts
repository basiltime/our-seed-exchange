import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from "./services/jwt_sign_verify";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  // if (new RegExp(/^.*(fonts|_next|vk.com|favicon).*$/).test(request.url)) {
  //   return NextResponse.next()
  // }
  // Need to authorize the user. Get the token from the cookie and check with the jwt method for 
  // seeing if it's expiredor whatever. 

  const secret = process.env.SUPER_SECRET;
  const jwt = request.cookies.get('auth')?.value 
  if (jwt === undefined) return NextResponse.next();

  try {
    await verify(jwt, secret);
    return NextResponse.next();
  } catch (error) {
    request.nextUrl.pathname = '/login'
    return NextResponse.redirect(request.nextUrl)
  }
}

export const config = {
  matcher: '/trades/:path*',
}