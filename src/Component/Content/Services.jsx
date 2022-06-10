import React from "react";

const Services = () => {
    return (
        
<div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
    <div class="container mx-auto px-6 flex relative py-16 animate__animated animate__fadeInUp">
        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-4">
            </span>
            <h1 class="font-bebas-neue uppercase text-4xl sm:text-7xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Perbaikan
                <span class="text-5xl sm:text-4 xl">
                    Komputer / Laptop
                </span>
            </h1>
            <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                Disini kami menerima jasa perbaikan komputer / laptop anda, seperti cek harddisk, memori, hingga install sistem operasi windows.
            </p>
            <div class="flex mt-8">
                <a href="./#" class="py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                    Rp.100.000,00
                </a>
            </div>
        </div>
        <div class="snap-x flex snap-mandatory h-screen w-screen mx-auto overflow-scroll animate__animated animate__fadeInRightBig animate__slow">
            <div class="snap-start w-96 flex-shrink-0 h-screen flex items-center justify-center text-8xl object-fill hover:scale-150 duration-150">
                <img src="data:image/jpeg;base64,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" alt="e"/>
            </div>
            <div class="snap-start w-80 flex-shrink-0 h-screen flex items-center justify-center text-8xl object-scale-down hover:scale-110 duration-150">
                <img src="https://wallpapercave.com/wp/Vuaizo2.jpg" alt="e"/>
            </div>
            <div class="snap-start w-96 flex-shrink-0 h-screen flex items-center justify-center text-8xl hover:scale-75 duration-150">
                <img src="https://www.kindpng.com/picc/m/224-2249544_pinguino-linux-hd-png-download.png" alt="e"/>
            </div>
            <div class="snap-start w-96 flex-shrink-0 h-screen flex items-center justify-center text-8xl hover:scale-75 duration-150">
                <img src="https://awsimages.detik.net.id/community/media/visual/2021/08/02/ilustrasi-pembersihan-pc.jpeg?w=1200" alt="e"/>
            </div>
        </div>
        <div class="h-96"></div>
        
    </div>
    
</div>


    )
}

export default Services;