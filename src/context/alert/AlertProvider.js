import {useState} from 'react';
import AlertContext from "./alertContext";

const AlertProvider = (props) => {
    const [alert, setAlert] = useState({msg:"", type:""});

    // Show an alert
    const showAlert = (message, type) => {
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert({msg:"", type:""});
        }, 2000);
    }

    return (
        <AlertContext.Provider value={{alert, showAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertProvider
