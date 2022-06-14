import React from "react";

const Forgot = () => {
    return (
            <div className="bg-indigo-100 relative overflow-hidden h-screen">
                <div className="border-2 border-blue-300 shadow-fuchsia-500 rounded-md p-4 max-w-sm w-full mx-auto">
  
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                    <div className="w-full font-mono flex flex-col items-center relative z-10">
                        <h1 className="font-extrabold text-5xl text-center text-indigo-500 leading-tight mt-4 animate__animated animate__jello animate__infinite">
                            This Page
                        </h1>
                        <div className="h-20"></div>
                        <div className="animate-pulse flex space-x-10">
                        <div className="rounded-full bg-cyan-500 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-sky-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-lime-600 rounded col-span-2"></div>
                            <div className="h-2 bg-amber-500 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-violet-300 rounded"></div>
                        </div>
                        </div>
                </div>
                </div>
                        <p className="font-extrabold text-8xl my-44 text-blue-400 animate__animated animate__flash animate__infinite">
                            404
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Forgot;