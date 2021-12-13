import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = false;
  // pathname.includes("/api/auth");
  if (token) return NextResponse.next();
  else NextResponse.redirect("/");
  // Avoid infinite loop by only redirecting if the query
  // params were changed
}
