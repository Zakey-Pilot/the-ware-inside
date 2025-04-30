"use client";
import Link from "next/link"
import EmailForm from "./EmailForm"
import {useData} from "@/context/DataContext"

export default function Hero(){

    const { data } = useData();
    console.log("Data is "+data)


    return(
        <>
            <div className="w-full h-dvh flex flex-col items-center justify-center">
                <p 
                    className="text-center text-7xl font-bold mb-6"
                >
                  {
                    data.pageTitle
                  }  
                </p>
                <EmailForm />
                <Link href="https://thewareinside-tau.vercel.app">
                    <p className="mt-4 underline decoration-sky-500 hover:text-sky-500">Our Development Team</p>
                </Link>
            </div>
        </>
    )
}