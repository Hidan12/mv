import axios from "axios";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const localidadesBogota = [
    "Usaquén",
    "Chapinero",
    "Santa Fe",
    "San Cristóbal",
    "Usme",
    "Tunjuelito",
    "Bosa",
    "Kennedy",
    "Fontibón",
    "Engativá",
    "Suba",
    "Barrios Unidos",
    "Teusaquillo",
    "Los Mártires",
    "Antonio Nariño",
    "Puente Aranda",
    "La Candelaria",
    "Rafael Uribe Uribe",
    "Ciudad Bolívar",
    "Sumapaz",
];

const Registro = ({ btnContinuar }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        primaryEmail: "",
        phone: "",
        location: "",
        address: "",
        ownedVehicles: "",
        travelReason: "",
    });
    const [errors, setErrors] = useState({});
    const [isValidated, setIsValidated] = useState(false);
    useEffect(() => {
        if (isValidated) {
            validateForm();
        }
    }, [formData, isValidated]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
    const validatePhone = (phone) => {
        // Solo números, entre 7 y 10 dígitos
        const re = /^[0-9]{7,10}$/;
        return re.test(phone);
    }

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "El primer nombre es obligatorio";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "El primer apellido es obligatorio";
        }

        if (!formData.primaryEmail.trim() && !validateEmail(formData.primaryEmail)) {
            newErrors.primaryEmail = "Correo electrónico no válido";
        }

        if (!formData.phone.trim() && !validatePhone(formData.phone)) {
            newErrors.phone = "número telefónico no válido";
        }

        if (!formData.location) {
            newErrors.location = "Debe seleccionar una localidad";
        }

        if (!formData.address.trim()) {
            newErrors.address = "La dirección es obligatoria";
        }

        if (!formData.ownedVehicles) {
            newErrors.ownedVehicles = "Debe indicar cuántos vehículos posee";
        }

        if (!formData.travelReason) {
            newErrors.travelReason = "Debe seleccionar un motivo de viaje";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNextClick = () => {
        if (validateForm()) {
            btnContinuar(formData);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <div className="w-[95%] xl:w-[80%] max-w-4xl flex flex-col justify-center items-center">
                <div className="w-full rounded-lg bg-white p-6 shadow-md">
                    <div className="w-full flex flex-col items-center justify-center border p-5 rounded-lg">
                        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6">
                            <div className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                                <label
                                    htmlFor="firstName"
                                    className="text-[#00271c] text-[0.9rem] font-semibold mb-1"
                                >
                                    Primer Nombre *
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className={`p-2 border rounded-md w-full ${errors.firstName ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="Ingrese su primer nombre"
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.firstName}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col w-full md:w-[48%]">
                                <label
                                    htmlFor="lastName"
                                    className="text-[#00271c] text-[0.9rem] font-semibold mb-1"
                                >
                                    Primer Apellido *
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className={`p-2 border rounded-md w-full ${errors.lastName ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="Ingrese su primer apellido"
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                                )}
                            </div>
                        </div>

                        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6">
                            <div className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                                <label
                                    htmlFor="primaryEmail"
                                    className="text-[#00271c] text-[0.9rem] font-semibold mb-1"
                                >
                                    Correo Electrónico Primario
                                </label>
                                <input
                                    type="email"
                                    id="primaryEmail"
                                    name="primaryEmail"
                                    value={formData.primaryEmail}
                                    onChange={handleInputChange}
                                    className={`p-2 border rounded-md w-full ${errors.primaryEmail ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="ejemplo@correo.com"
                                />
                                {errors.primaryEmail && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.primaryEmail}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col w-full md:w-[48%]">
                                <label
                                    htmlFor="secondaryEmail"
                                    className="text-[#00271c] text-[0.9rem] font-semibold mb-1"
                                >
                                    Número telefónico
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={`p-2 border rounded-md w-full ${errors.phone ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="3165415698"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6">
                            <div className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                                <label className="text-[#00271c] text-[0.9rem] font-semibold mb-1">
                                    Departamento de Residencia *
                                </label>
                                <select
                                    className="p-2 border border-gray-300 rounded-md w-full bg-gray-100 cursor-not-allowed"
                                    disabled
                                >
                                    <option value="Bogota">Bogotá, D.C.</option>
                                </select>
                            </div>

                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-[#00271c] text-[0.9rem] font-semibold mb-1">
                                    Municipio de Residencia *
                                </label>
                                <select
                                    className="p-2 border border-gray-300 rounded-md w-full bg-gray-100 cursor-not-allowed"
                                    disabled
                                >
                                    <option value="Bogota">Bogotá, D.C.</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6">
                            <div className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                                <label
                                    htmlFor="location"
                                    className="text-[#00271c] text-[0.9rem] font-semibold mb-1"
                                >
                                    Localidad de Residencia *
                                </label>
                                <select
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    className={`p-2 border rounded-md w-full ${errors.location ? "border-red-500" : "border-gray-300"
                                        }`}
                                >
                                    <option value="">---Seleccionar---</option>
                                    {localidadesBogota.map((l, k) => (
                                        <option value={l} key={k}>
                                            {l}
                                        </option>
                                    ))}
                                </select>
                                {errors.location && (
                                    <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                                )}
                            </div>

                            <div className="flex flex-col w-full md:w-[48%]">
                                <label
                                    htmlFor="address"
                                    className="text-[#00271c] text-[0.9rem] font-semibold mb-1"
                                >
                                    Dirección de Correspondencia *
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className={`p-2 border rounded-md w-full ${errors.address ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="Calle, número, barrio"
                                />
                                {errors.address && (
                                    <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                                )}
                            </div>
                        </div>

                        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-8">
                            <div className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                                <label
                                    htmlFor="ownedVehicles"
                                    className="text-[#00271c] text-[0.9rem] font-semibold mb-1"
                                >
                                    Soy propietario de *
                                </label>
                                <select
                                    id="ownedVehicles"
                                    name="ownedVehicles"
                                    value={formData.ownedVehicles}
                                    onChange={handleInputChange}
                                    className={`p-2 border rounded-md w-full ${errors.ownedVehicles ? "border-red-500" : "border-gray-300"
                                        }`}
                                >
                                    <option value="">---Seleccionar---</option>
                                    {[...Array(10)].map((_, i) => (
                                        <option value={i + 1} key={i}>
                                            {i + 1} vehículo{i > 0 ? "s" : ""}
                                        </option>
                                    ))}
                                </select>
                                {errors.ownedVehicles && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.ownedVehicles}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col w-full md:w-[48%]">
                                <label
                                    htmlFor="travelReason"
                                    className="text-[#00271c] text-[0.9rem] font-semibold mb-1"
                                >
                                    Motivo de viaje *
                                </label>
                                <select
                                    id="travelReason"
                                    name="travelReason"
                                    value={formData.travelReason}
                                    onChange={handleInputChange}
                                    className={`p-2 border rounded-md w-full ${errors.travelReason ? "border-red-500" : "border-gray-300"
                                        }`}
                                >
                                    <option value="">---Seleccionar---</option>
                                    <option value="Trabajo">Trabajo</option>
                                    <option value="Estudio">Estudio</option>
                                    <option value="Salud">Salud</option>
                                    <option value="Ocio">Ocio</option>
                                    <option value="Otros">Otros</option>
                                </select>
                                {errors.travelReason && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.travelReason}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleNextClick}
                    className="px-8 py-3 mt-5 text-[1rem] rounded-full bg-[#00271c] text-[#88F456] hover:bg-[#004232] transition-colors shadow-md"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

const obtenerPicoYPlaca = (placa) => {
    const ultimoDigito = parseInt(placa.slice(-1));
    const fechasPico = [];

    
    let fecha = new Date();
    fecha.setHours(0, 0, 0, 0);
    const fin = new Date(fecha);
    fin.setDate(fin.getDate() + 28);

    while (fecha <= fin) {
        const diaSemana = fecha.getDay();

        if (diaSemana >= 1 && diaSemana <= 5) {
            if (ultimoDigito % 2 === 0 && (diaSemana === 1 || diaSemana === 3 || diaSemana === 5)) {
                fechasPico.push(new Date(fecha));
            }
            if (ultimoDigito % 2 !== 0 && (diaSemana === 2 || diaSemana === 4)) {
                fechasPico.push(new Date(fecha));
            }
        }

        fecha.setDate(fecha.getDate() + 1);
    }

    return fechasPico;
};
const Calendario = ({placa, handler, value})=>{
    const [fechaPico, setFechaPico] = useState(obtenerPicoYPlaca(placa.placa))
    const [btnCalendario, setBtnCalendario] = useState(false)
    const marcarFecha = ({ date }) => {
        return fechaPico.some(f => f.toDateString() === date.toDateString())
            ? "fecha-pico"
            : null;
    }
    
    const formatoInput = (fecha) => {
        let fechaObj;

        if (!fecha) return "";

        if (fecha instanceof Date && !isNaN(fecha)) {
            fechaObj = fecha;
        }
        
        else if (typeof fecha === "string" && fecha.includes("-")) {
            const [anio, mes, dia] = fecha.split("-").map(Number);
            fechaObj = new Date(anio, mes - 1, dia);
        }
        
        else if (typeof fecha === "string" && fecha.includes("/")) {
            const [dia, mes, anio] = fecha.split("/").map(Number);
            fechaObj = new Date(anio, mes - 1, dia);
        }
        else {
            return "";
        }
        if (isNaN(fechaObj)) return "";

        const dia = String(fechaObj.getDate()).padStart(2, "0");
        const mes = String(fechaObj.getMonth() + 1).padStart(2, "0");
        const anio = fechaObj.getFullYear();

        const formato = `${dia}/${mes}/${anio}`;
        return formato;
    };
    const handlerSelectFecha = (date) => {
        const fechaObj = new Date(date);
        const dia = String(fechaObj.getDate()).padStart(2, "0");
        const mes = String(fechaObj.getMonth() + 1).padStart(2, "0");
        const anio = fechaObj.getFullYear();
        const formato = `${dia}/${mes}/${anio}`;

        setBtnCalendario((b) => !b);
        handler({ target: { value: formato } });
    };
    const convertirAFecha = (fechaString) => { 
        if (!fechaString) return null;
        if (fechaString instanceof Date) return fechaString;
        if (typeof fechaString === "string" && fechaString.includes("-")) {
            const [anio, mes, dia] = fechaString.split("-").map(Number);
            return new Date(anio, mes - 1, dia);
        }
        if (typeof fechaString === "string" && fechaString.includes("/")) {
            const [dia, mes, anio] = fechaString.split("/").map(Number);
            return new Date(anio, mes - 1, dia);
        }
        return null;
    };
    return(
        <div className="w-full flex items-center justify-center">
            <input type="text"  readOnly onClick={()=> setBtnCalendario(b => !b)} value={formatoInput(value)} className="w-[80%] border p-1 rounded-md border-gray-300"/>
            <button className="w-[20%] text--gray-300 ml-2" onClick={()=> setBtnCalendario(b => !b)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar-week" viewBox="0 0 16 16">
                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                </svg>
            </button>
            {
                btnCalendario &&
                <div className="fixed top-[50%] left-[5%] xl:left-[30%] z-50">
                    <Calendar
                    onChange={handlerSelectFecha}
                    value={convertirAFecha(value)}
                    tileClassName={marcarFecha}
                />
                </div>
            }
        </div>
    )
}

const Solicitud = ({btnContinuar}) => {
    const [formData, setFormData] = useState({
        placa: "",
        confirmacionPlaca: "",
    });
    
    const [placas, setPlacas] = useState([]);
    const [errors, setErrors] = useState({});
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    const handlerEnviar = ()=>{
        btnContinuar(placas)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        
        // Limpiar errores al escribir
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = {...prev};
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handlerAgregar = () => {
        const newErrors = {};
        
        // Validaciones
        if (!formData.placa.trim()) {
            newErrors.placa = "La placa es obligatoria";
        }
        
        if (!formData.confirmacionPlaca.trim()) {
            newErrors.confirmacionPlaca = "Debe confirmar la placa";
        }
        
        if (formData.placa && formData.confirmacionPlaca && 
            formData.placa !== formData.confirmacionPlaca) {
            newErrors.confirmacionPlaca = "Las placas no coinciden";
        }
        
        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            const nuevaPlaca = {
                id: Date.now(),
                placa: formData.placa.toUpperCase(),
                duracion: "diario",
                fechaInicio: new Date().toISOString().split('T')[0],
                fechaFin: calcularFechaFin("diario", new Date().toISOString().split('T')[0])
            };
            
            setPlacas([...placas, nuevaPlaca]);
            setFormData({ placa: "", confirmacionPlaca: "" });
        }
    };
    
    const calcularFechaFin = (duracion, fechaInicio) => {
        let fecha;
        if (typeof fechaInicio === "string" && fechaInicio.includes("/")) {
            const [dia, mes, anio] = fechaInicio.split("/");
            fecha = new Date(`${anio}-${mes}-${dia}`);
        } else {
            fecha = new Date(fechaInicio);
        }

        if (isNaN(fecha)) {
            console.error("Fecha inválida:", fechaInicio);
            return null;
        }

        switch (duracion) {
            case "diario":
                fecha.setDate(fecha.getDate());
                break;
            case "mensual":
                fecha.setMonth(fecha.getMonth());
                break;
            case "anual":
                fecha.setFullYear(fecha.getFullYear() + 1);
                break;
            default:
                fecha.setDate(fecha.getDate() + 1);
        }

        return fecha.toISOString().split('T')[0]; // formato yyyy-mm-dd
    };
    
    const handleDuracionChange = (id, value) => {
        const nuevasPlacas = placas.map(placa => {
            if (placa.id === id) {
                return {
                    ...placa,
                    duracion: value,
                    fechaFin: calcularFechaFin(value, placa.fechaInicio)
                };
            }
            return placa;
        });
        
        setPlacas(nuevasPlacas);
    };
    
    const handleFechaInicioChange = (id, value) => {
        const nuevasPlacas = placas.map(placa => {
            if (placa.id === id) {
                return {
                    ...placa,
                    fechaInicio: value,
                    fechaFin: calcularFechaFin(placa.duracion, value)
                };
            }
            return placa;
        });
        
        setPlacas(nuevasPlacas);
    };
    
    const handleFechaFinChange = (id, value) => {
        const nuevasPlacas = placas.map(placa => {
            if (placa.id === id) {
                return {
                    ...placa,
                    fechaFin: value
                };
            }
            return placa;
        });
        
        setPlacas(nuevasPlacas);
    };
    
    const eliminarPlaca = (id) => {
        setPlacas(placas.filter(placa => placa.id !== id));
    };
    

    const renderDesktopTable = () => (
        <table className="min-w-full divide-y divide-gray-200 hidden md:table">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Placa
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Duración
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha Inicio
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha Fin
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acción
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {placas.length > 0 ? (
                    placas.map((placa) => (
                        <tr key={placa.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{placa.placa}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <select
                                    value={placa.duracion}
                                    onChange={(e) => handleDuracionChange(placa.id, e.target.value)}
                                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#00271c] focus:border-[#00271c] sm:text-sm"
                                >
                                    <option value="diario">Diario</option>
                                    <option value="mensual">Mensual</option>
                                    <option value="anual">Anual</option>
                                </select>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                
                                <Calendario handler={(e) => handleFechaInicioChange(placa.id, e.target.value)} value={placa.fechaInicio} placa={placa}/>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Calendario handler={(e) => handleFechaFinChange(placa.id, e.target.value)} value={placa.fechaFin} placa={placa}/>

                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <button
                                    onClick={() => eliminarPlaca(placa.id)}
                                    className="text-red-600 hover:text-red-900 flex items-center justify-center w-full"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                            No hay vehículos registrados. Agrega uno usando el formulario superior.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );

    
    const renderMobileCards = () => (
        <div className="md:hidden space-y-4">
            {placas.length > 0 ? (
                placas.map((placa) => (
                    <div key={placa.id} className="w-full mt-5">
                        <div className="flex justify-between items-center mb-3">
                            <div className="font-bold text-lg text-[#00271c]">{placa.placa}</div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">Duración</label>
                                <select
                                    value={placa.duracion}
                                    onChange={(e) => handleDuracionChange(placa.id, e.target.value)}
                                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#00271c] focus:border-[#00271c] text-sm"
                                >
                                    <option value="diario">Diario</option>
                                    <option value="mensual">Mensual</option>
                                    <option value="anual">Anual</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">Acción</label>
                                <div className="h-10 flex items-center justify-center text-red-600">
                                    <button 
                                        onClick={() => eliminarPlaca(placa.id)}
                                        className="flex items-center"
                                    >
                                     Eliminar
                                    </button>
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">Fecha Inicio</label>
                                <Calendario handler={(e) => handleFechaInicioChange(placa.id, e.target.value)} value={placa.fechaInicio} placa={placa}/>

                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">Fecha Fin</label>
                                <Calendario handler={(e) => handleFechaFinChange(placa.id, e.target.value)} value={placa.fechaFin} placa={placa}/>

                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="bg-white p-6 rounded-lg shadow text-center">
                    <p className="text-gray-500">No hay vehículos registrados</p>
                    <p className="text-sm mt-2">Agrega uno usando el formulario superior</p>
                </div>
            )}
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <div className="w-[95%] xl:w-[80%] max-w-6xl flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-[#00271c] mb-6">Registro de Vehículos</h1>
                
                <div className="w-full rounded-lg bg-white p-6 shadow-md mb-8">
                    <div className="w-full flex flex-col items-center justify-center border p-5 rounded-lg">
                        <div className="w-full flex flex-col justify-between items-center mb-6">
                            <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                                <div className="flex flex-col w-full">
                                    <label
                                        htmlFor="placa"
                                        className="text-[#00271c] text-[0.9rem] font-semibold mb-1"
                                    >
                                        Placa *
                                    </label>
                                    <input
                                        type="text"
                                        id="placa"
                                        name="placa"
                                        value={formData.placa}
                                        onChange={handleInputChange}
                                        className={`p-2 border rounded-md w-full ${errors.placa ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Ej: ABC123"
                                    />
                                    {errors.placa && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.placa}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-col w-full">
                                    <label
                                        htmlFor="confirmacionPlaca"
                                        className="text-[#00271c] text-[0.9rem] font-semibold mb-1"
                                    >
                                        Confirmar placa *
                                    </label>
                                    <input
                                        type="text"
                                        id="confirmacionPlaca"
                                        name="confirmacionPlaca"
                                        value={formData.confirmacionPlaca}
                                        onChange={handleInputChange}
                                        className={`p-2 border rounded-md w-full ${errors.confirmacionPlaca ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Repita la placa"
                                    />
                                    {errors.confirmacionPlaca && (
                                        <p className="text-red-500 text-sm mt-1">{errors.confirmacionPlaca}</p>
                                    )}
                                </div>
                            </div>
                            
                            <button 
                                onClick={handlerAgregar}
                                className="px-8 py-3 mt-3 text-[1rem] rounded-full bg-[#00271c] text-[#88F456] hover:bg-[#004232] transition-colors shadow-md flex items-center"
                            >
                                Agregar placa
                            </button>
                            {placas.length > 0 &&
                                <div className="w-full rounded-lg bg-white p-2 mt- shadow-md">
                                    <div className="mb-4 flex flex-col md:flex-row justify-between items-center">
                                        <h2 className="text-xl font-bold text-[#00271c]">Vehículos Registrados</h2> 
                                    </div>
                                    
                                    {renderDesktopTable()}
                                    
                                    {renderMobileCards()}
                                    
                                    <div className="mt-6 flex flex-col md:flex-row items-center justify-center w-full">
                                        <button onClick={()=>handlerEnviar()} className="px-6 xl:px-8 py-3 bg-[#00271c] text-[#88F456] rounded-full hover:bg-[#004232] transition-colors">
                                            Enviar Solicitud
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

const Confirmacion = ({ btnContinuar, placas }) => {
    const [seleccionadas, setSeleccionadas] = useState({});
    const [seleccionarTodo, setSeleccionarTodo] = useState(false);
    const [aporteVoluntario, setAporteVoluntario] = useState(false);
    const [totalPagar, setTotalPagar] = useState(0);
    const [error, setError] = useState("Selecciona una placa")
    const precioPorPlaca = 80000; 

    useEffect(() => {
        const nuevasSelecciones = {};
        placas.forEach(p => {
            nuevasSelecciones[p.placa] = false;
        });
        setSeleccionadas(nuevasSelecciones);
        setSeleccionarTodo(false);
        setAporteVoluntario(null);
    }, [placas]);

    const handleSeleccionarTodo = () => {
        const nuevoEstado = !seleccionarTodo;
        setSeleccionarTodo(nuevoEstado);
        
        const nuevasSelecciones = {};
        placas.forEach(p => {
            nuevasSelecciones[p.placa] = nuevoEstado;
        });
        setSeleccionadas(nuevasSelecciones);
    };

    const handleSeleccionPlaca = (placa) => {
        setSeleccionadas(prev => ({
            ...prev,
            [placa]: !prev[placa]
        }));
    };


    useEffect(() => {
        const placasSeleccionadas = Object.values(seleccionadas).filter(val => val).length;
        
        const subtotalPlacas = placasSeleccionadas * precioPorPlaca;
        
        setTotalPagar(subtotalPlacas);
    }, [seleccionadas, aporteVoluntario]);

    const hayPlacasSeleccionadas = Object.values(seleccionadas).some(val => val);

    return (
        <div className="w-full flex flex-col mt-5 bg-white p-5 justify-center items-center max-w-4xl mx-auto">
            <div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-md mb-8">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 bg-gray-50">
                    <div className="p-3 flex items-center border-b border-r border-gray-200">
                        <input 
                            type="checkbox" 
                            name="selectAll" 
                            id="selectAll" 
                            checked={seleccionarTodo}
                            onChange={handleSeleccionarTodo}
                            className="h-4 w-4 text-[#00271c] focus:ring-[#00271c] border-gray-300 rounded mr-2"
                        />
                        <label htmlFor="selectAll" className="text-[#00271c] font-medium">Placa</label>
                    </div>
                    <div className="p-3 border-b border-r border-gray-200">
                        <span className="text-[#00271c] font-medium">Duración</span>
                    </div>
                    <div className="p-3 border-b border-gray-200">
                        <span className="text-[#00271c] font-medium">Valor</span>
                    </div>
                </div>
                
                {placas.map((p, k) => (
                    <div key={k} className="w-full grid grid-cols-1 md:grid-cols-3 bg-white hover:bg-gray-50">
                        <div className="p-3 flex items-center border-b border-r border-gray-200">
                            <input 
                                type="checkbox" 
                                name={p.placa} 
                                id={p.placa} 
                                checked={seleccionadas[p.placa] || false}
                                onChange={() => handleSeleccionPlaca(p.placa)}
                                className="h-4 w-4 text-[#00271c] focus:ring-[#00271c] border-gray-300 rounded mr-2"
                            />
                            <label htmlFor={p.placa} className="font-medium">{p.placa}</label>
                        </div>
                        <div className="p-3 flex items-center border-b border-r border-gray-200">
                            <span className="capitalize">{p.duracion}</span>
                        </div>
                        <div className="p-3 flex items-center border-b border-gray-200">
                            <span className="font-medium">${precioPorPlaca.toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
                <div className="text-center mb-4">
                    <span className="text-lg font-medium text-[#00271c]">
                        ¿Desea realizar el aporte de compensación social voluntaria? 
                    </span>
                </div>
                
                <div className="flex justify-center gap-4">
                    <button 
                        onClick={() => setAporteVoluntario(true)}
                        className={`px-6 py-2 rounded-full text-white transition-colors ${
                            aporteVoluntario 
                                ? 'bg-[#00271c] hover:bg-[#00271c]' 
                                : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
                        }`}
                    >
                        Sí
                    </button>
                    <button 
                        onClick={() => setAporteVoluntario(false)}
                        className={`px-6 py-2 rounded-full text-white transition-colors ${
                            !aporteVoluntario 
                                ? 'bg-[#00271c]' 
                                : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
                        }`}
                    >
                        No
                    </button>
                </div>
            </div>
            <div className="justify-center mt-5 mb-5 p-5 shadow items-center text-lg">
                Total a pagar: { aporteVoluntario ? totalPagar.toLocaleString("es-CO") : 0.0 }
            </div>
            {!seleccionadas  && (
                    <div className="text-red-500 text-center mb-4 p-2 bg-red-50 rounded-lg max-w-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {error}
                    </div>
                )}

            {hayPlacasSeleccionadas && aporteVoluntario && (
                <div className="w-full flex flex-col justify-center items-center mt-4">
                    <img onClick={() => {
                            const placasAPagar = placas.filter(p => seleccionadas[p.placa]);
                            btnContinuar(placasAPagar, totalPagar);
                        }} 
                        src="/assets/pse.png" className="w-32 object-contain mb-2.5" alt="" />
                    <button 
                        disabled = {!seleccionadas && !aporteVoluntario}
                        onClick={() => {
                            const placasAPagar = placas.filter(p => seleccionadas[p.placa]);
                            btnContinuar(placasAPagar, totalPagar);
                        }}
                        className="px-8 py-3 text-lg rounded-full bg-[#00271c] text-[#88F456] hover:bg-[#004232] transition-colors shadow-md"
                    >
                        Pagar ahora
                    </button>
                </div>
            )}
        </div>
    );
};




export default function Modal({ tipoDocumento, numeroDocumento, close}) {
    const [estado, setestado] = useState(1);
    const [datosRegistro, setDatosRegistro] = useState("");
    const [placas, setPlacas] = useState([])
    const [placaPagar, setPlacaPagar ] = useState([])
    const [total, setTotal] = useState(0)
    const [uniqId, setUniqId] = useState("")
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    
    const handlerRegistro = async (datos) => {
        setDatosRegistro((d) => (d = datos));
        setestado((e) => e + 1);
        try {
            const uniq = await axios.post("/api/uniqid", {
                nombre: `${datos.firstName} ${datos.lastName}`,
                cedula: numeroDocumento,
                email: datos.primaryEmail,
                celular: datos.phone,
                ciudad: "Bogota",
                direccion: datos.addres,
                user_domain: "tudominio.com",

            })
            
            setUniqId(uniq.data.uniqId)
        } catch (error) {
            console.log(error);
        }
    };
    const handlerSolicitud = (value)=>{
        setPlacas(value)
        setestado(e => e + 1)
    }
    const handlerConfirmacion =(placaPagar, total)=>{
        setPlacaPagar(placaPagar)
        setTotal(total)
        window.location.href = `https://www.google.com/${uniqId}` 
    }

    return (
        <div className="w-full fixed top-0 h-screen z-30 flex justify-center items-center">
            <div className="w-[90%] xl:w-[80%] h-[90%] overflow-y-auto overflow-x-hidden flex flex-col items-center">
                <div className="w-full bg-white pt-5 px-9 xl:px-15 pb-10 flex flex-col justify-center items-center">
                    <div className="w-full flex justify-end mb-9">
                        <button className="text-[#00271c]" onClick={()=> close(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </button>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div
                            className={`px-2 text-white rounded-full ${estado == 1 ? "bg-green-950" : "bg-gray-500"
                                }`}
                        >
                            1
                        </div>
                        <div className="w-[150px] xl:w-[20%] border-t-2 border-t-gray-300 flex justify-between">
                            <div className="w-[20%] border-b-4 border-b-gray-300"></div>
                            <div className="w-[20%] border-b-4 border-b-gray-300"></div>
                        </div>
                        <div
                            className={`px-2 text-white rounded-full ${estado == 2 ? "bg-green-950" : "bg-gray-500"
                                }`}
                        >
                            2
                        </div>
                        <div className="w-[150px] xl:w-[20%] border-t-2 border-t-gray-300 flex justify-between">
                            <div className="w-[20%] border-b-4 border-b-gray-300"></div>
                            <div className="w-[20%] border-b-4 border-b-gray-300"></div>
                        </div>
                        <div
                            className={`px-2 text-white rounded-full ${estado == 3 ? "bg-green-950" : "bg-gray-500"
                                }`}
                        >
                            3
                        </div>
                        <div className="w-[150px] xl:w-[20%] border-t-2 border-t-gray-300 flex justify-between">
                            <div className="w-[20%] border-b-4 border-b-gray-300"></div>
                            <div className="w-[20%] border-b-4 border-b-gray-300"></div>
                        </div>
                        <div
                            className={`px-2 text-white rounded-full ${estado == 4 ? "bg-green-950" : "bg-gray-500"
                                }`}
                        >
                            4
                        </div>
                        <div className="w-[150px] xl:w-[20%] border-t-2 border-t-gray-300 flex justify-between">
                            <div className="w-[20%] border-b-4 border-b-gray-300"></div>
                            <div className="w-[20%] border-b-4 border-b-gray-300"></div>
                        </div>
                        <div
                            className={`px-2 text-white rounded-full ${estado == 5 ? "bg-green-950" : "bg-gray-500"
                                }`}
                        >
                            5
                        </div>
                    </div>
                    <div className="w-full mt-4 flex justify-between items-center">
                        <span className="text-[9px] xl:text-[16px] xl:pl-3">Registro</span>
                        <span className="text-[9px] xl:text-[16px] xl:pl-1">Solicitud</span>
                        <span className="text-[9px] xl:text-[16px]">Confirmación</span>
                        <span className="text-[9px] xl:text-[16px]">Curso</span>
                        <span className="text-[9px] xl:text-[16px]">Aprobación</span>
                    </div>
                </div>
                <div className="w-full bg-[#EDEDED] flex justify-center items-center">
                    {estado == 1 && <Registro btnContinuar={handlerRegistro} />}
                    {estado == 2 && <Solicitud btnContinuar={handlerSolicitud}/>}
                    {estado == 3 && <Confirmacion  placas={placas} btnContinuar={handlerConfirmacion}/>}
                </div>
            </div>
        </div>
    );
}
