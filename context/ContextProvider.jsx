
import { createContext, useContext, useEffect, useState } from "react"
import {signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { auth } from '@/pages/firebase';

export const contextGlobal = createContext();

export const UseContext = () => {
  const context = useContext(contextGlobal);

  return context;
}

const ContextProvider = ({children}) => {

  const [datos, setDatos] = useState({
    fecha: '',
    funcionario: '',
    solicitud: '',
    descripcion: '',
  });

  const [solicitudes, setSolicitudes] = useState([]);

  const [userAuth, setUserAuth] = useState(null);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUserAuth(currentUser);
    })
  }, [])

  const logout = () => {
    return signOut(auth);
  }

  const [filtros, setFiltros] = useState('');

  const [modal, setModal] = useState(false);

  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  const handleReset = () => {
    setDatos({
      fecha: '',
      funcionario: '',
      solicitud: "",
      descripcion: "",
    });
  };

  const [error, setError] = useState(false);

  return (
    <contextGlobal.Provider value={{datos, setDatos, error, setError, handleReset, solicitudes, setSolicitudes, filtros, setFiltros, setGastosFiltrados, gastosFiltrados, login, logout, userAuth, modal, setModal}}>
      {children}
    </contextGlobal.Provider>
  )
}

export default ContextProvider