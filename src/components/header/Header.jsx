"use client"

import { useEffect, useState } from "react"

export default function Header() {
  const [lenguaje, setLenguaje] = useState(false)
  const [menu, setMenu] = useState(false)
  const [anchoPantalla, setAnchoPantalla] = useState(0)
  
  useEffect(() => {
    const manejarResize = () => {
      setAnchoPantalla(window.innerWidth);
    };
    manejarResize();
    window.addEventListener("resize", manejarResize);
    return () => {
      window.removeEventListener("resize", manejarResize);
    };
  }, [])

  return (
    <header className="w-full bg-[#00271C] flex justify-center items-center">
      {
        anchoPantalla < 1001 ?
        
        <div className="w-[95%] relative flex justify-between items-center py-2.5">
          <span className="text-[2vh] text-white">Inicio</span>
          <div className="flex items-center justify-center">
            <div className="relative">
              <button onClick={()=> setLenguaje(l => !l)} className="text-[2vh] font-semibold text-white mr-2.5 flex items-center justify-center">
                Esp
                <div className={`${lenguaje ? "rotate-180":""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="1em" fill="#88F456" className="ml-0.5 bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                  </svg>
                </div>
              </button>
              {lenguaje &&
                <div className="p-1 absolute top-3 bg-white text-[2vh]">
                  Eng
                </div>
              }
            </div>
            <span className="px-10 text-[2vh] rounded-2xl flex flex-col justify-center items-center bg-white text-[#00271c]"> <span>soporte</span><span>tecnico</span></span>
          </div>
          <button onClick={()=> setMenu(m => !m)} className={`relative w-8 h-6 flex flex-col justify-between items-center p-1 group transform transition duration-300 ${ menu ? "rotate-180" : ""}`}>           
            <span className={`block w-6 h-0.5 bg-white transform transition duration-300 ${ menu ? "rotate-45 translate-y-2.5" : ""}`}></span>
            
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menu ? "opacity-0" : "opacity-100"}`}></span>

            <span className={`block w-6 h-0.5 bg-white transform transition duration-300 ${menu ? "-rotate-45 -translate-y-1" : ""}`}></span>
          </button>
          {menu &&
            <div className="w-[100vw] absolute -left-[2.5%] top-12 bg-[#00271C] flex flex-col items-start p-2">
              <button onClick={() => document.getElementById('formulario').scrollIntoView({behavior: 'smooth'})} className="text-[2vh] text-white p-1 border-b-1 border-b-[#88F456]">Inicio</button>
              <button onClick={() => document.getElementById('formulario').scrollIntoView({behavior: 'smooth'})} className="text-[2vh] text-white p-1 ">Simulador</button>
              <button onClick={() => document.getElementById('formulario').scrollIntoView({behavior: 'smooth'})} className="text-[2vh] text-white p-1 ">Registro</button>
              <button onClick={() => document.getElementById('formulario').scrollIntoView({behavior: 'smooth'})} className="text-[2vh] text-white p-1 ">Solicitudes</button>
              <button onClick={() => document.getElementById('formulario').scrollIntoView({behavior: 'smooth'})} className="text-[2vh] text-white p-1 ">Preguntas Frecuentes</button>       
            </div>
          }
        </div>
        :
        <div className="w-full flex items-center">
            <div className="flex justify-center items-center w-[30%]">
              <img src="/assets/Logo.png" className="w-[12rem] pl-5 object-contain" alt="" />
            </div>
            <span className="ml-2 px-3 py-2.5 border-b-1 border-b-[#88F456] text-sm font-semibold text-white">Inicio</span>
            <button onClick={() => document.getElementById('formulario').scrollIntoView({behavior: 'smooth'})} className="px-3 py-2.5 text-sm font-semibold text-white">Simulador</button>
            <button onClick={() => document.getElementById('formulario').scrollIntoView({behavior: 'smooth'})} className="px-3 py-2.5 text-sm font-semibold text-white">Registro</button>
            <button onClick={() => document.getElementById('formulario').scrollIntoView({behavior: 'smooth'})} className="px-3 py-2.5 text-sm font-semibold text-white">Solicitudes</button>
            <button onClick={() => document.getElementById('formulario').scrollIntoView({behavior: 'smooth'})} className="px-3 py-2.5 text-sm font-semibold text-white">Preguntas frecuentes</button>
            <div className="relative px-3 py-2.5">
              <button onClick={()=> setLenguaje(l => !l)} className=" text-sm font-semibold text-white mr-2.5 flex items-center justify-center border-l-1 border-l-white pl-2">
                Esp
                <div className={`${lenguaje ? "rotate-180":""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="1em" fill="#88F456" className="ml-0.5 bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                  </svg>
                </div>
              </button>
              {lenguaje &&
                <div className="px-3 py-4 absolute top-8 right-6 rounded-lg bg-white text-sm ">
                  En
                </div>
              }
            </div>
            <span className="px-5 py-1 text-sm font-semibold rounded-full flex flex-col justify-center items-center bg-white text-[#00271c]">soporte tecnico</span>
        </div>
      }
    </header>
  )
}