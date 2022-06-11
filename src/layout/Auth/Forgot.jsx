import React from "react";

const Forgot = () => {
    return (
            <div class="bg-indigo-100 relative overflow-hidden h-screen">
                <div class="border-2 border-blue-300 shadow-fuchsia-500 rounded-md p-4 max-w-sm w-full mx-auto">
  
                <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                    <div class="w-full font-mono flex flex-col items-center relative z-10">
                        <h1 class="font-extrabold text-5xl text-center text-indigo-500 leading-tight mt-4 animate__animated animate__jello animate__infinite">
                            This Page
                        </h1>
                        <div class="h-20"></div>
                        <div class="animate-pulse flex space-x-10">
                        <div class="rounded-full bg-cyan-500 h-10 w-10"></div>
                        <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-sky-700 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-lime-600 rounded col-span-2"></div>
                            <div class="h-2 bg-amber-500 rounded col-span-1"></div>
                            </div>
                            <div class="h-2 bg-violet-300 rounded"></div>
                        </div>
                        </div>
                </div>
                </div>
                        <p class="font-extrabold text-8xl my-44 text-blue-400 animate__animated animate__flash animate__infinite">
                            404
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Forgot;