"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { slides } from "@/app/Data/websites-data";

const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-[#101a54] dark:text-white mb-12">
        Our Portfolio
      </h1>

      {/* Carousel */}
      <div className="relative w-full h-auto mx-auto px-2">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide) => (
              <div
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
                key={slide.id}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <Image
                    src={slide.path}
                    alt={slide.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                      {slide.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {slide.description}
                    </p>
                    <div className="mt-4 flex justify-center">
                      <Link href={slide.link} target="_blank">
                        <button className="px-6 py-3 text-lg text-white bg-[#3b779c] rounded-lg hover:bg-pink-400 transition-colors duration-200">
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className={`absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gray-100 dark:bg-gray-700 p-2 rounded-full shadow-md ${!prevBtnEnabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200 dark:hover:bg-gray-600"}`}
        >
          <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-100" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className={`absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-100 dark:bg-gray-700 p-2 rounded-full shadow-md ${!nextBtnEnabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200 dark:hover:bg-gray-600"}`}
        >
          <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-100" />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
