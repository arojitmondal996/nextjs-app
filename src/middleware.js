// import { NextResponse } from 'next/server'

import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {

//     const currentCookie = request.cookies.get('nextjs-token')
//     // console.log(currentCookie)
//     const dummyUserData = {
//         role: "user",
//         email: "test@admin.com"
//     }

//     let isServicesPage = request.nextUrl.pathname.startsWith("/services")
//     let isAdmin = dummyUserData.role == "admin"

//     if (isServicesPage && !isAdmin)
//         return NextResponse.redirect(new URL('/login', request.url))
//     return NextResponse.next()
// }


export const middleware = async (req) => {
    const token = await getToken({ req });
    // if (token) console.log("FROM MIDDLEWARE", token)
    const isTokenOk = Boolean(token)
    const isAdminUser = token?.role == 'admin'
    const isAdminSpecificRoute = req.nextUrl.pathname.startsWith("/dashboard");

    if(isAdminSpecificRoute && !isAdminUser){
        const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
        return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url))
    }

    return NextResponse.next()
}