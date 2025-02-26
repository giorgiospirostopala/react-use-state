import { useState } from 'react';
import languages from '../data/languages';

function Card() {
    const [linguaggioSelezionato, functLinguaggioSelezionato] = useState(languages);

    return (
        <div>
            <div>
                {languages.map(linguaggio => (
                    <button key={linguaggio.id} onClick={() => functLinguaggioSelezionato(linguaggio)}>
                        {linguaggio.title}
                    </button>
                ))}
            </div>
            <div>
                <h2>{linguaggioSelezionato.title}</h2>
                <p>{linguaggioSelezionato.description}</p>
            </div>
        </div>
    );
}

export default Card;