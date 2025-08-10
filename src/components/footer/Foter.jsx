"use client"

import { useEffect, useState } from "react"


const Desktop = ()=>{
  return(
    <div className="w-full h-full relative flex justify-center items-center">
      <div className="w-full -z-10 absolute h-[50%] bg-[#EDEDED] top-0"></div>
      <div className="w-[70%] p-6 bg-white rounded-lg">
        <div className="w-full flex ">
          <div className="w-[50%] flex flex-col">
            <h2 className="text-[1.2rem] font-semibold text-[#00271c]">Secretaría distrital de movilidad</h2>
            <p className="text-[1rem] font-semibold text-[#00271c]">Nit. 899.999.061-9</p>
            <p className="text-[1rem] font-semibold text-[#00271c] mt-2">Sede principal</p>
            <p className="text-[1rem] text-[#00271c]"><span className="font-bold border-b-0"> Dirección: </span> <span className="border-b-1 border-b-[#88F456]"> Calle 13 # 37 - 35, Bogotá D.C</span></p>
            <p className="text-[1rem] text-[#00271c]"><span className="font-bold border-b-0"> Línea gratuita: </span><span className="border-b-1 border-b-[#88F456]">018000 127 425</span></p>
            <p className="text-[1rem] text-[#00271c]"><span className="font-bold border-b-0"> Centro de Contacto de Movilidad: </span><span className="border-b-1 border-b-[#88F456]">+57 (601) 364 9400 Opción 2</span></p>
            <p className="text-[1rem] text-[#00271c]"><span className="font-bold border-b-0"> Correo Institucional: </span><span className="border-b-1 border-b-[#88F456]">https://bogota.gov.co/sdqs/</span></p>
            <p className="text-[1rem] text-[#00271c]"><span className="font-bold border-b-0"> Radicación Ciudadanía: </span> <span className="border-b-1 border-b-[#88F456]">Formulario radicación de correspondencia </span></p>
            <p className="text-[1rem] text-[#00271c]"><span className="font-bold border-b-0"> E-mail exclusivo para notificaciones judiciales: </span> <span className="border-b-1 border-b-[#88F456]">judicial@movilidadbogota.gov.co</span></p>
            <p className="text-[1rem] text-[#00271c]"><span className="font-bold border-b-0"> Radicación exclusiva para entes de control y entidades públicas: </span> <span className="border-b-1 border-b-[#88F456]">radicacionentidades@movilidad.gov.co</span></p>
            <p className="text-[1rem] text-[#00271c]"><span className="font-bold"></span></p>
            <p className="text-[1rem] text-[#00271c]"><span className="font-bold"></span></p>
          </div>
          <div className="w-[50%]">
            <img src="/assets/footer.png" className="w-[80%] ml-8 object-contain" alt="" />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-between mt-5">
            <div className="flex justify-between items-center">
              <img src="/assets/iconoFacebook.svg" className="w-6 object-contain" alt="" />
              <span className="text-[1rem] text-[#00271c] border-b-1 border-b-[#88F456] ml-2">secretariamovilidadbogota</span>
            </div>
            <div className="flex justify-between items-center">
              <img src="/assets/iconoX.svg" className="w-6 object-contain" alt="" />
              <span className="text-[1rem] text-[#00271c] border-b-1 border-b-[#88F456] ml-2">@SectorMovilidad</span>
            </div>
            <div className="flex justify-between items-center">
              <img src="/assets/iconoYoutube.svg" className="w-6 object-contain" alt="" />
              <span className="text-[1rem] text-[#00271c] border-b-1 border-b-[#88F456] ml-2">secretariamovilidad</span>
            </div>
            <div className="flex justify-between items-center">
              <img src="/assets/iconoinstagram.svg" className="w-6 object-contain" alt="" />
              <span className="text-[1rem] text-[#00271c] border-b-1 border-b-[#88F456] ml-2">secretariamovilidad</span>
            </div>
          </div>
          <div className="w-full flex justify-between mt-5">
              <span className="text-[1rem] text-[#00271c] border-b-1 border-b-[#88F456]">Acerca de nosotros</span>
              <span className="text-[1rem] text-[#00271c] border-b-1 border-b-[#88F456]">Mapa del sitio</span>
              <span className="text-[1rem] text-[#00271c] border-b-1 border-b-[#88F456]">Aplicativo de la SDM</span>
              <span className="text-[1rem] text-[#00271c] border-b-1 border-b-[#88F456]">Denuncias por actos de corrupción</span>
          </div>
        </div>
      </div>
      <div className="w-full -z-10 absolute h-[50%] bg-[#00271c] bottom-0"></div>
    </div>
  )
}

const Mobil = ()=>{
  return(
    <div className="w-full h-full relative flex justify-center items-center">
      <div className="w-full -z-10 absolute h-[50%] bg-[#EDEDED] top-0"></div>
      <div className="w-full p-6 bg-white rounded-lg">
        <div className="w-full flex ">
          <div className="w-[50%] flex flex-col">
            <h2 className="text-[12px] font-semibold text-[#00271c]">Secretaría distrital de movilidad</h2>
            <p className="text-[11px] font-semibold text-[#00271c]">Nit. 899.999.061-9</p>
            <p className="text-[11px] font-semibold text-[#00271c] mt-2">Sede principal</p>
            <p className="text-[11px] text-[#00271c]"><span className="font-bold border-b-0"> Dirección: </span> <span className="border-b-1 border-b-[#88F456]"> Calle 13 # 37 - 35, Bogotá D.C</span></p>
            <p className="text-[11px] text-[#00271c]"><span className="font-bold border-b-0"> Línea gratuita: </span><span className="border-b-1 border-b-[#88F456]">018000 127 425</span></p>
            <p className="text-[11px] text-[#00271c]"><span className="font-bold border-b-0"> Centro de Contacto de Movilidad: </span><span className="border-b-1 border-b-[#88F456]">+57 (601) 364 9400 Opción 2</span></p>
            <p className="text-[11px] text-[#00271c]"><span className="font-bold border-b-0"> Correo Institucional: </span><span className="border-b-1 border-b-[#88F456]">https://bogota.gov.co/sdqs/</span></p>
            <p className="text-[11px] text-[#00271c]"><span className="font-bold border-b-0"> Radicación Ciudadanía: </span> <span className="border-b-1 border-b-[#88F456]">Formulario radicación de correspondencia </span></p>
            <p className="text-[11px] text-[#00271c]"><span className="font-bold border-b-0"> E-mail exclusivo para notificaciones judiciales: </span> <span className="border-b-1 border-b-[#88F456]">judicial@movilidadbogota.gov.co</span></p>
            <p className="text-[11px] text-[#00271c]"><span className="font-bold border-b-0"> Radicación exclusiva para entes de control y entidades públicas: </span> <span className="border-b-1 border-b-[#88F456]">radicacionentidades@movilidad.gov.co</span></p>
            <p className="text-[11px] text-[#00271c]"><span className="font-bold"></span></p>
            <p className="text-[11px] text-[#00271c]"><span className="font-bold"></span></p>
          </div>
          <div className="w-[50%]">
            <img src="/assets/footer.png" className="w-[80%] ml-8 object-contain" alt="" />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full grid grid-cols-2 mt-5 gap gap-y-2">
            <div className="flex items-center">
              <img src="/assets/iconoFacebook.svg" className="w-4 object-contain" alt="" />
              <span className="text-[9px] text-[#00271c] border-b-1 border-b-[#88F456] ml-2">secretariamovilidadbogota</span>
            </div>
            <div className="flex items-center">
              <img src="/assets/iconoX.svg" className="w-4 object-contain" alt="" />
              <span className="text-[9px] text-[#00271c] border-b-1 border-b-[#88F456] ml-2">@SectorMovilidad</span>
            </div>
            <div className="flex items-center">
              <img src="/assets/iconoYoutube.svg" className="w-4 object-contain" alt="" />
              <span className="text-[9px] text-[#00271c] border-b-1 border-b-[#88F456] ml-2">secretariamovilidad</span>
            </div>
            <div className="flex items-center">
              <img src="/assets/iconoinstagram.svg" className="w-4 object-contain" alt="" />
              <span className="text-[9px] text-[#00271c] border-b-1 border-b-[#88F456] ml-2">secretariamovilidad</span>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 mt-5">
              <span className="text-[11px] text-[#00271c] border-b-1 border-b-[#88F456]">Acerca de nosotros</span>
              <span className="text-[11px] text-[#00271c] border-b-1 border-b-[#88F456]">Mapa del sitio</span>
              <span className="text-[11px] text-[#00271c] border-b-1 border-b-[#88F456]">Aplicativo de la SDM</span>
              <span className="text-[11px] text-[#00271c] border-b-1 border-b-[#88F456]">Denuncias por actos de corrupción</span>
          </div>
        </div>
      </div>
      <div className="w-full -z-10 absolute h-[50%] bg-[#00271c] bottom-0"></div>
    </div>
  )
}

export default function Footer() {
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
    <footer className="w-full h-screen">
      {
        anchoPantalla > 1000 ? 
        <Desktop/>
        :
        <Mobil/>
      }     
    </footer>
  )
}