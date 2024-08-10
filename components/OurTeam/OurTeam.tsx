import React from "react";

const OurTeam = () => {
    return (
        <>
          <section className="px-4 pt-20 pb-48 bg-black">
            <div className="container mx-auto">
              <div className="mx-auto w-full px-4 text-center lg:w-6/12">
                <h1 className="block antialiased font-sans text-xl leading-relaxed text-gray-300 font-semibold">
                  Our Team
                </h1>
                <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 my-3">
                  Here are our heroes
                </h2>
                <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-blue-gray-500">
                where diverse talents converge, creativity flourishes, and collaboration fuels our drive for innovation
                </p>
              </div>
              <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
                  <img
                    src="/assets/ali.jpg"
                    alt="Ali Hassan"
                    className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25"
                  ></img>
                  <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">
                    Ali Hassan
                  </h5>
                  <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">
                    Team Lead
                  </p>
                  <div className="mx-auto mt-5">
                    <div className="flex items-center gap-2">
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-light-blue-500 hover:bg-light-blue-500/10 active:bg-light-blue-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <i className="fa-brands text-xl fa-twitter"></i>
                        </span>
                      </button>
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-500 hover:bg-blue-500/10 active:bg-blue-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <i className="fa-brands text-xl fa-linkedin"></i>
                        </span>
                      </button>
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-pink-500 hover:bg-pink-500/10 active:bg-pink-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <i className="fa-brands text-xl fa-dribbble"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
                  <img
                    src="/assets/ifra.jpg"
                    alt="Ifra"
                    className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25"
                  ></img>
                  <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">
                    Ifra Ejaz
                  </h5>
                  <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">
                    Front-End Developer
                  </p>
                  <div className="mx-auto mt-5">
                    <div className="flex items-center gap-2">
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-light-blue-500 hover:bg-light-blue-500/10 active:bg-light-blue-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <i className="fa-brands text-xl fa-twitter"></i>
                        </span>
                      </button>
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-500 hover:bg-blue-500/10 active:bg-blue-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <i className="fa-brands text-xl fa-linkedin"></i>
                        </span>
                      </button>
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-pink-500 hover:bg-pink-500/10 active:bg-pink-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <i className="fa-brands text-xl fa-dribbble"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
                  <img
                    src="/assets/saba.jpg"
                    alt="saba"
                    className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25"
                  ></img>
                  <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">
                    Saba Saleem
                  </h5>
                  <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">
                    UI/UX Designer
                  </p>
                  <div className="mx-auto mt-5">
                    <div className="flex items-center gap-2">
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-light-blue-500 hover:bg-light-blue-500/10 active:bg-light-blue-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <i className="fa-brands text-xl fa-twitter"></i>
                        </span>
                      </button>
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-500 hover:bg-blue-500/10 active:bg-blue-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <i className="fa-brands text-xl fa-linkedin"></i>
                        </span>
                      </button>
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-pink-500 hover:bg-pink-500/10 active:bg-pink-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <i className="fa-brands text-xl fa-dribbble"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
                  <img
                    src="/assets/hassan.jpg"
                    alt="Jenna Kardi"
                    className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25"
                  ></img>
                  <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">
                    Hassan Ameen
                  </h5>
                  <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">
                    Employee
                  </p>
                  <div className="mx-auto mt-5">
                    <div className="flex items-center gap-2">
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-light-blue-500 hover:bg-light-blue-500/10 active:bg-light-blue-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <i className="fa-brands text-xl fa-twitter"></i>
                        </span>
                      </button>
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-500 hover:bg-blue-500/10 active:bg-blue-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <i className="fa-brands text-xl fa-facebook"></i>
                        </span>
                      </button>
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-pink-500 hover:bg-pink-500/10 active:bg-pink-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <i className="fa-brands text-xl fa-dribbble"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
  }
  
  export default OurTeam