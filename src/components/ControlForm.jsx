import { useState } from 'react'

function ControlForm() {
    const [texto, setTexto] = useState('');

    return (
        <>
            <input
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <p>Você digitou: {texto}</p>
        </>
    );
}

export default ControlForm;
