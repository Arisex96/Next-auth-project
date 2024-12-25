"use client"

import { SessionProvider } from "next-auth/react"
import Appbar from "./components/Appbar"

export function Providers({children}:any){

    return (
        <SessionProvider>
            <Appbar/>
            {children}
        </SessionProvider>
    )

}