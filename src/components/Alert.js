import React, {useContext} from 'react';
import AlertContext from '../context/alert/alertContext';

const Alert = () => {
    const context = useContext(AlertContext);
    const { alert } = context;

    if (!alert || !alert.msg) return null;

    const capitalize = (word) => {
        if(word === "danger") {
            word = "error";
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div className={`alert alert-${alert.type}`} role="alert">
            <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        </div>
    )
}

export default Alert
