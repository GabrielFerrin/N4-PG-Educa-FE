import React from 'react'
import { Link } from 'react-router-dom';
import RecordView from '../../Hooks/RecordVideo.jsx';



function Examen() {
    
    return (
        <div>
            <h1>Página de Examenes</h1>
            <RecordView/>
            
            <Link to="/">
                <button>Ir a Home</button>
            </Link>
        </div>
    );
};

export default Examen
