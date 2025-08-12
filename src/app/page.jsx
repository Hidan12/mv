"use client"
import { useEffect, useState } from "react";
import "./globals.css"
import Modal from "@/components/modal/Modal";

export default function Home() {
  const [verMas, setVerMas] = useState(false)
  const [verAuto, setVerAuto] = useState(false)
  const [modal, setModal] = useState(false)
  const [tipoDocumento, setTipoDocumento] = useState("")
  const [numeroDocumento, setNumeroDocumento] = useState("")
  const btnComenzar = ()=>{
    if (tipoDocumento && numeroDocumento.trim() != "" ) {
      setModal(true)
    }
  }
  return (
    <div className="w-full flex flex-col justify-center items-center">

      {modal && <Modal close={setModal} tipoDocumento={tipoDocumento} numeroDocumento={numeroDocumento}/>}

      <div className="banner w-full h-[40vh] mt-15 xl:mt-0 mb-8 xl:h-screen flex justify-center items-center">
        <div className="w-[60%] flex flex-col items-start">
          <span className="pl-2 xl:pl-4 mb-1 pr-4 xl:pr-8 bg-[#00271C] text-[12px] xl:text-[2.8rem] font-bold text-white">Movilízate con </span>
          <span className="pl-2 xl:pl-4 mb-1 pr-5 xl:pr-13 bg-[#00271C] text-[12px] xl:text-[2.8rem] font-bold text-white">el permiso de</span>
          <span className="pl-2 xl:pl-4 mb-1 pr-12 xl:w-[50%] text-[#00271C] bg-[#88F456] text-[12px] xl:text-[2.8rem] font-bold">PICO Y PLACA </span>
          <span className="pl-2 xl:pl-4 mb-1 pr-16.5 xl:w-[50%] text-[#00271C] bg-[#88F456] text-[12px] xl:text-[2.8rem] font-bold">SOLIDARIO </span>
          <button onClick={() => document.getElementById('formulario').scrollIntoView({behavior: 'smooth'})} className="w-[30%] xl:w-[35%] px-0.5 text-center xl:pl-4 xl:mt-4 xl:pr-10 text-[#00271C] bg-[#88F456] text-[11px] xl:text-[1.8rem] font-bold rounded-full border-2">
            Inicia tu solicitud
          </button>
        </div>
      </div>
      <div className="w-[90%] xl:w-[80%] flex flex-col xl:flex-row mb-4 xl:mb-8 justify-center items-center">
        <div className="w-[65%] xl:w-[50%] flex xl:flex-col flex-row items-center justify-center xl:border-r-2 xl:border-r-[#88F456]">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="w-[20vw]" viewBox="0 0 205.000000 175.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,175.000000) scale(0.100000,-0.100000)" fill="#00271C" stroke="none">
              <path d="M830 1476 c-6 -6 -10 -15 -10 -21 0 -8 -39 -10 -135 -7 -147 5 -189 -4 -199 -41 -3 -12 -6 -273 -6 -580 l0 -558 25 -24 24 -25 433 5 c238 3 447 8 463 11 105 22 193 119 211 232 9 60 -21 154 -67 206 l-39 44 0 346 c0 427 19 389 -187 384 -137 -3 -143 -2 -158 19 -15 21 -22 22 -180 20 -94 -1 -169 -5 -175 -11z m326 -93 l1 -63 -153 0 -153 0 3 63 c2 34 4 63 5 65 0 1 67 1 149 0 l147 -3 1 -62z m-336 2 c0 -14 -6 -25 -12 -26 -7 0 -56 0 -108 1 -53 1 -103 -2 -113 -6 -16 -6 -17 -43 -17 -513 0 -381 3 -510 12 -519 9 -9 90 -12 302 -12 290 -1 326 -5 326 -36 0 -9 -652 -8 -677 1 -10 3 -13 125 -13 563 0 307 3 562 7 565 3 4 71 7 150 7 l143 0 0 -25z m665 15 c11 -18 7 -655 -4 -654 -43 4 -41 -12 -41 303 0 273 -1 299 -17 305 -10 4 -60 7 -113 6 -52 -1 -101 -1 -107 -1 -7 1 -13 12 -13 26 l0 25 144 0 c86 0 147 -4 151 -10z m-657 -100 c11 -19 23 -20 181 -20 161 0 170 1 176 20 6 18 15 20 116 20 l109 0 0 -275 0 -275 -47 0 c-195 -1 -332 -212 -245 -378 l22 -42 -270 0 -270 0 0 485 0 485 108 0 c96 0 108 -2 120 -20z m665 -609 c69 -47 99 -104 99 -191 0 -58 -5 -78 -26 -114 -48 -81 -112 -116 -215 -116 -61 0 -70 3 -116 38 -65 49 -105 120 -105 187 0 85 56 179 125 210 54 24 59 25 126 21 55 -3 74 -9 112 -35z"></path>
              <path d="M854 1163 c-13 -16 -39 -48 -57 -73 -27 -36 -39 -45 -64 -45 -50 -1 -63 -19 -63 -87 0 -78 11 -98 55 -98 25 0 35 -5 40 -20 7 -21 53 -50 79 -50 9 0 31 16 50 35 35 35 36 35 121 35 67 0 85 -3 85 -14 0 -19 52 -56 79 -56 11 0 35 16 54 35 22 22 43 35 60 35 35 0 47 25 47 99 0 71 -17 96 -62 87 -26 -5 -33 1 -78 63 -28 38 -57 72 -66 75 -9 3 -70 6 -136 6 -119 0 -121 0 -144 -27z m131 -63 l0 -54 -82 -2 c-46 0 -83 3 -83 8 0 4 14 27 31 51 25 35 37 43 72 48 23 3 47 5 52 4 6 -1 10 -26 10 -55z m108 49 c26 0 38 -9 65 -45 17 -24 32 -48 32 -52 0 -4 -37 -7 -82 -7 l-83 2 -3 42 c-4 54 3 75 24 67 9 -3 30 -6 47 -7z m209 -185 c2 -26 -2 -53 -8 -62 -15 -20 -42 -9 -53 21 -18 46 -105 45 -133 -1 -16 -26 -19 -26 -100 -23 -76 2 -85 5 -104 29 -17 21 -30 27 -64 27 -35 0 -46 -6 -69 -33 -39 -48 -61 -36 -61 34 l0 54 294 0 294 0 4 -46z m-434 -56 c32 -32 0 -83 -45 -72 -25 7 -36 40 -22 66 11 20 49 24 67 6z m342 -3 c30 -36 -18 -87 -62 -64 -20 11 -24 49 -6 67 17 17 53 15 68 -3z"></path>
              <path d="M673 675 c-3 -9 -3 -18 0 -21 3 -3 82 -6 176 -7 135 -2 172 1 176 11 3 8 3 18 -1 23 -3 5 -82 9 -175 9 -144 0 -171 -2 -176 -15z"></path><path _ngcontent-ng-c3830733382="" d="M673 573 c-3 -7 -2 -16 1 -22 8 -12 343 -14 350 -2 3 5 4 15 1 23 -7 18 -345 19 -352 1z"></path><path _ngcontent-ng-c3830733382="" d="M674 471 c-2 -2 -4 -10 -4 -18 0 -10 37 -13 181 -13 164 0 180 2 177 17 -3 15 -22 17 -176 17 -96 1 -176 -1 -178 -3z"></path>
              <path d="M1423 540 c-32 -49 -62 -90 -66 -90 -5 0 -28 16 -51 35 -48 39 -66 44 -66 17 0 -15 63 -71 117 -105 8 -5 27 15 57 60 25 38 57 85 72 105 25 35 27 68 5 68 -6 0 -36 -40 -68 -90z" fill="#88F456"></path>
            </g>
          </svg>
          <h2 className="text-[#00271C] text-[17px] xl:text-[2.8rem] font-bold">¿ Qué es el <br/><span>Pico y Placa </span> <br/>Solidario?</h2>
        </div>
        <div className="w-full xl:w-[50%] pl-5 flex flex-col items-center justify-center">
          <div className="w-full relative">
            <div className={`w-full text-[10px] xl:text-[15px] p-1 transition-all duration-200 overflow-hidden ${verMas ? "max-h-[2000px]" : "max-h-[150px] xl:max-h-[160px]"}`}>
              El Pico y Placa Solidario permite adquirir voluntariamente un permiso diario,
              mensual o semestral para circular en Bogotá sin la restricción del pico y placa.
              El 100% de este recaudo está destinado a la financiación, el fortalecimiento y
              el mejoramiento de la calidad del Sistema Integrado de Transporte Público de la
              ciudad. Adicionalmente, el Pico y Placa Solidario busca promover la conciencia de
              los propietarios de vehículos particulares sobre los impactos negativos que
              podrían generar su uso i
              {
                verMas ? 
                "neficiente en el medio ambiente, la seguridad vial y la movilidad. El precio de cada permiso es diferencial y se calcula a partir de cuatro factores: a) El precio base, de acuerdo con la duración del permiso, b) Un factor ambiental, el cual depende del tipo de combustible, el modelo del auto y su cilindraje, c) El avalúo comercial del vehículo, y d) Un factor por municipio de registro del vehículo, donde los automotores matriculados en Bogotá tienen el factor más bajo."
                : 
                "..."
              }
            </div>
            
          </div>
        <button className="text-[12px] xl:text-[18px] rounded-full px-1.5 font-medium border mt-2.5 xl:mt-10" onClick={() => setVerMas((v) => !v)}>Conocer más</button>
      </div>

      </div>
      <div className="w-full flex flex-col gap xl:gap-x-10  bg-[#EDEDED] pb-5 xl:pb-10 xl:flex-row justify-center items-center px-4 xl:px-8">
        <div className="w-[70%] xl:w-[30%] h-[15%] mt-5 xl:mt-10 flex flex-col justify-center items-center bg-white rounded-xl p-2 xl:p-4">
            <div className="w-full flex justify-center h-[40%] bg-[#00271C] rounded-t-xl">
              <img src="/assets/pasoNatural.svg" className="w-[50%] h-[70px] xl:h-[100px] mt-4 object-contain" alt="" />
            </div>
            <div className="w-full flex flex-col justify-center pb-4 items-center">
              <span className="text-[14px] xl:text-[25px] font-bold">Paso a paso</span>
              <span className="text-[13px] xl:text-[20px]">Inscripción personas</span>
              <span className="text-[13px] xl:text-[20px]">naturales</span>
              <span className="text-[14px] xl:text-[25px] mt-2 xl:mt-8 px-1 border rounded-full ">comenzar</span>
            </div>
        </div>
        <div className="w-[70%] xl:w-[30%] h-[15%] mt-5 xl:mt-10 flex flex-col justify-center items-center bg-white rounded-xl p-2 xl:p-4">
            <div className="w-full flex justify-center h-[40%] bg-[#00271C] rounded-t-xl">
              <img src="/assets/pasoJuridico.svg" className="w-[50%] h-[70px] xl:h-[100px] mt-4 object-contain" alt="" />
            </div>
            <div className="w-full flex flex-col justify-center pb-4 items-center">
              <span className="text-[14px] xl:text-[25px] font-bold">Paso a paso</span>
              <span className="text-[13px] xl:text-[20px]">Inscripción personas</span>
              <span className="text-[13px] xl:text-[20px]">juridicas</span>
              <span className="text-[14px] xl:text-[25px] mt-2 xl:mt-8 px-1 border rounded-full ">comenzar</span>
            </div>
        </div>
      </div>
      <div id="formulario" className="banerFormulario w-full h-[80vh] xl:h-[150vh]">
          <div className="w-full min-h-[70%] bg-[#00271C]/95 flex flex-col items-center">
              <p className="pt-1.5 xl:pt-16 text-[25px] px-2.5 text-white xl:border-b-2 xl:border-b-[#88F456] ">Iniciar <span className="font-bold"> Solicitud </span></p>
              <p className="text-[14px] mt-2 xl:mt-5 text-white">Inicia tu registro para obtener el permiso o </p>
              <p className="text-[14px] text-white mb-2 xl:mb-5"> consulta el estado de tus solicitudes en trámite </p>
              <div className="w-[80%] xl:w-[70%] xl:p-10 bg-white flex flex-col justify-center mb-4 items-center px-4 py-1 rounded-sm">
                <div className="w-full">
                  <span className="text-[14px] font-semibold">Tipo de Documento: </span>
                  <select name="" id="" value={tipoDocumento} onChange={(e)=> setTipoDocumento(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#88F456]">
                    <option value="">---Seleccionar---</option>
                    <option value="Cédula de Ciudadania">Cédula de Ciudadania</option>
                    <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                    <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Carnet Diplomático">Carnet Diplomático</option>
                    <option value="Registro Civil">Registro Civil</option>
                    <option value="Permiso por ProtecciÓn temporal">Permiso por ProtecciÓn temporal</option>
                    <option value="NIT">NIT</option>
                  </select>

                  <span className="text-[14px] font-semibold">Número de Documento  </span>
                  <input type="text" value={numeroDocumento} onChange={(e)=> setNumeroDocumento(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#88F456]" />
                </div>

                <button onClick={()=> btnComenzar()} className={`px-4 py-2 xl:px-6 xl:py-2 rounded-full border mt-7 xl:mt-14 mb-2 text-[14px] font-semibold ${(tipoDocumento && numeroDocumento.trim() != "") ? "bg-[#00271c] text-[#88F456]":""}`}>Comenzar registro</button>
                
              </div>
          </div>
      </div>
      <div className="w-[90%] xl:w-[80%] xl:py-10 flex flex-col xl:flex-row mb-4 xl:mb-8 justify-center items-center">
        <div className="w-[70%] xl:w-[50%] flex flex-col items-center justify-center xl:border-r-2 xl:border-r-[#88F456]">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 879 800" className="w-20 xl:w-40 xl:mr-24">
              <g id="d3uKcC.tif">
                <g> 
                  <path d="M837.2,686.1c-4.7,7.5-11.6,9.6-20,9.3c-11.5-0.4-23-0.1-34.8-0.1c-3.2,17-9.2,32.1-19.8,45.2
                    c-15,18.4-34.2,29.7-57.5,34c-1.7,0.3-3.4,1-5.1,1.5c-6.8,0-13.7,0-20.5,0c-13-4.7-26.8-7.8-38.8-14.4
                    c-23.3-12.7-37.2-33.5-43-59.3c-1.1-4.7-2.3-7.2-7.9-7.1c-78.1,0.2-156.2,0.1-234.3,0.2c-1,0-2.1,0.2-3.5,0.3
                    c-2,6.7-3.4,13.7-6,20.1c-13.5,32.6-37.7,52.3-72.4,58.9c-1.5,0.3-2.9,1-4.3,1.4c-6.8,0-13.7,0-20.5,0c-0.7-0.3-1.4-0.8-2.2-0.9
                    c-42.9-7.8-70.1-32.2-80.5-75c-0.5-2-4.1-4.5-6.4-4.6c-10.5-0.5-21-0.2-31.5-0.2c-13.2-0.1-18.1-4.9-18.1-18.2
                    c-0.1-18.9-0.3-37.9,0.1-56.8c0.2-6.9-1.9-11.4-7.1-16.1C41.9,549.8,18,481.9,34.5,402C48.9,332.9,90.6,284.1,155,254.9
                    c28.3-12.8,58.1-17.5,89-17.5c104.7,0.1,209.3,0,314,0c3.4,0,6.8,0,10.3,0c0.7-2.1,1.5-3.8,1.9-5.6c10.5-45.1,46-74.2,92.7-75.3
                    c25.5-0.6,51-0.2,76.5-0.1c12.2,0.1,17.1,5.2,17.2,17.4c0.1,7.5,0,15,0,23c27.6,0,54.1,0,80.7,0c0,8.9,0,17.9,0,26.8
                    c-26.5,0-53,0-80.1,0c0,18,0,35.4,0,53.6c26.7,0,53.4,0,80.1,0c0,8.9,0,17.9,0,26.8c-26.7,0-53.4,0-80.7,0c0,9.3,0.2,17.2,0,25
                    c-0.3,10.5-5.3,15.7-15.6,15.8c-27.6,0.2-55.2,0.7-82.8-0.2c-42-1.4-78.7-32.5-87.6-73.5c-1.2-5.4-3.1-7.1-8.7-7.1
                    c-107.3,0.2-214.5,0.2-321.8,0.1c-33,0-64.2,7.2-92.6,24.2C68.1,335.8,36.6,425.7,69,512.2c8.6,23,21.9,43.3,40.4,61.4
                    c0.3-2.1,0.7-3.1,0.5-3.9c-4.2-21.7,5.5-37.4,22-50c0.2-0.2,0.4-0.4,0.6-0.6C238.4,416.5,364,379.6,508.2,409
                    c68.2,13.9,128,46.3,180.3,92.3c4.7,4.2,10.8,7.4,16.8,9.3c20.7,6.7,41.7,12.7,62.5,19c25,7.5,45,21.9,57.1,45.2
                    c5.7,11,8.3,23.6,12.3,35.4C837.2,635.6,837.2,660.8,837.2,686.1z M810.5,668c-1.8-24.4,3.9-48.7-5.1-72.1
                    c-8.1-21.1-24-34-45.3-40.5c-22.8-7-45.7-13.8-68.6-20.5c-3-0.9-6.2-1.4-9.3-1.4c-85.4-0.1-170.9-0.1-256.3,0
                    c-1.6,0-3.1,0.2-5.4,0.4c0,44.6,0,89.1,0,134c58.3,0,116.2,0,174.5,0c13.6-51.1,44.8-81.4,99.8-79.7c44.2,1.4,72.7,28.3,88.4,79.8
                    C791.9,668,800.7,668,810.5,668z M164.3,667.9c18.2-54.8,50.5-81.5,95.4-80.5c35.6,0.8,80.4,23.1,92.3,80.5c13.2,0,26.5,0,40.2,0
                    c0-44.8,0-89.1,0-134.5c-3.1,0-5.9,0-8.7,0c-35,0-70,0.3-104.9-0.2c-6.7-0.1-14-2.2-19.9-5.4c-17.2-9.5-34-20-50.7-30.3
                    c-3.7-2.3-6.3-2.5-9.7,0.5c-19.2,17.1-38.6,34-57.8,51.2c-1.9,1.7-3.5,4.8-3.5,7.3c-0.2,36.8-0.2,73.6-0.2,111.4
                    C146.7,667.9,155.5,667.9,164.3,667.9z M729.3,184.6c-1.2-0.4-2.4-1-3.6-1c-23.1,0.2-46.2-0.5-69.3,0.8
                    c-34.5,2-60.7,30.9-61.4,65.9c-0.7,33.8,25.2,63.7,59.6,66.7c21.9,1.9,44,1,66.1,1.3c2.6,0,5.2,0,8.6,0
                    C729.3,273,729.3,229,729.3,184.6z M420.2,506c76.7,0,153,0,231.3,0c-69.1-52.9-145.4-78.8-231.3-80.1
                    C420.2,453.1,420.2,479.3,420.2,506z M689,749c36.6,0.1,67.3-30.5,67.5-67.2c0.2-36.6-30.3-67.1-67.2-67.2
                    c-36.9-0.1-67.1,29.9-67.3,67C621.8,718.2,652.3,748.9,689,749z M191,681.4c-0.4,36.4,30.2,67.3,66.9,67.6
                    c36.4,0.3,67.2-30.1,67.7-67c0.5-36.5-30-67.1-67.1-67.4C221.8,614.2,191.4,644.2,191,681.4z M273,505c1.7,1,4,1.4,6,1.4
                    c36.8,0.1,73.6,0,110.3,0c0.8,0,1.5-0.3,2.8-0.5c0-25.8,0-51.7,0-78.7c-58.5,4-112.6,21.1-164.1,51
                    C243.7,487.6,258.3,496.4,273,505z"></path>
                    <path _ngcontent-ng-c3830733382="" d="M783.4,102.6c5.3,0,8.9,0.8,11.9-0.2c4.6-1.6,9.9-3.6,12.9-7.1c4-4.6,2-10.5-1.5-15.2
                    c-8.4-11.4-17-22.7-25.5-34c-3.9-5.2-7.8-10.5-11.8-15.7c-6.7-8.7-13.9-10.6-20.8-5.7c-7,5-7.2,13-0.5,22.1
                    c6.8,9.2,13.7,18.3,21.6,28.9c-5.3,0-8.9-0.2-12.4,0c-12.4,0.9-18.5,11.7-11.4,21.7c12.9,18.2,26.5,35.9,40.1,53.5
                    c4.9,6.3,13.3,7,19,2.5c5.6-4.4,6.9-11.8,2.3-18.3C800.1,124.7,792.3,114.5,783.4,102.6z" className="st1"></path><path _ngcontent-ng-c3830733382="" d="M487.7,587.3c8.1,0,16.2,0.2,24.4-0.1c9.5-0.3,15.3-5.5,15.3-13.3c0-7.5-5.5-13.2-14.4-13.4
                    c-17.3-0.4-34.6-0.4-51.9,0c-9,0.2-14.2,5.9-14,13.7s5.4,12.4,14.7,13c0.5,0,1,0,1.6,0C471.4,587.4,479.6,587.4,487.7,587.3z" className="st0"></path><path _ngcontent-ng-c3830733382="" d="M689.4,645.2c21.7-0.1,39.1,17.3,39,38.9c-0.1,21.5-17.2,38.8-38.4,38.7c-21.9-0.1-39.1-17.1-39.1-38.8
                    C651,662.8,668.3,645.3,689.4,645.2z M690.2,695.7c6.4-0.3,11.4-5.5,11.3-11.8c-0.1-6.5-5.9-12.1-12.3-11.8
                    c-6.2,0.3-11.4,5.9-11.3,12C678,690.8,683.5,696,690.2,695.7z" className="st0"></path><path _ngcontent-ng-c3830733382="" d="M258.8,645.2c21.6,0,39,17.5,38.8,39.1c-0.1,21.4-17.5,38.6-38.6,38.5c-21.9-0.2-38.9-17.3-38.9-39
                    C220.2,662.6,237.6,645.2,258.8,645.2z M270.7,684c0-6.4-5.7-12-12-12c-6,0.1-11.4,5.4-11.6,11.5c-0.2,6.6,4.9,12.1,11.5,12.1
                    C265.2,695.8,270.7,690.5,270.7,684z" className="st0"></path></g></g>
          </svg>
          <h2 className="text-[#00271C] text-[25px] xl:text-[2.8rem]"> Vehículos <br/><span className="font-bold"> Eléctricos  </span> <br/><span className="font-bold">o Híbridos</span></h2>
        </div>
        <div className="w-full xl:w-[50%] pl-5 flex flex-col items-center justify-center">
          <div className="w-full relative">
            <div className={`w-full text-[10px] xl:text-[15px] p-1 transition-all duration-200 overflow-hidden ${verAuto ? "max-h-[2000px]" : "max-h-[150px] xl:max-h-[160px]"}`}>
              {
                verAuto ? 
                " Otra forma de contribuir a la calidad del aire y el medio ambiente de Bogotá es movilizarse en un vehículo eléctrico o híbrido. Para la circulación de estos vehículos no se requieren contribuciones económicas por Pico y Placa Solidario, ya que no tienen restricción de circulación después de realizado el trámite de excepción. Si posees un vehículo híbrido, estás contribuyendo a la meta de bajas emisiones fijada por la ciudad para el 2040, donde cada vehículo nuevo matriculado en Bogotá debe ser 100% eléctrico. Según información del Registro Distrital Automotor en abril de 2024 se encontraban registrados en la ciudad 2.587.109 vehículos, de los cuales el 0,03% eran vehículos eléctricos y el 1,33% son vehículos híbridos. "
                : 
                "Otra forma de contribuir a la calidad del aire y el medio ambiente de Bogotá es movilizarse en un vehículo eléctrico o híbrido. Para la circulación de estos vehículos no se requieren contribuciones económicas por Pico y Placa Solidario, ya que no tienen restricción de circulación después de realizado el trámite de excepción. Si posees un vehículo híbrido, estás contribuyendo a la meta de bajas emisiones fijada por la ciudad para el 2040, donde cada vehículo nuevo matriculado en Bogotá debe ser ..."
              }
            </div>
            
          </div>
        <button className="text-[12px] xl:text-[18px] rounded-full px-1.5 xl:px-3.5 font-medium border mt-2.5 xl:mt-10" onClick={() => setVerAuto((v) => !v)}>Ver Exceptuados</button>
      </div>

      </div>
    </div>
  );
}
