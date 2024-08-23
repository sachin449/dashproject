import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export function middleware(req) {
  const token = req.cookies.get('token');
  
  if (!token) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  try {
    const user = verifyToken(token.value);
    req.user = user;
  } catch (error) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  return NextResponse.next();
}
