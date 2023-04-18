import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.includes("about"))
    return NextResponse.next({ status: 403 });
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
