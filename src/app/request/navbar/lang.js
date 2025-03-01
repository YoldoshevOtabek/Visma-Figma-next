import React, {useState} from "react";

function Language() {
    const [lang, setLang] = useState('')
    const options = [
        {value: 'Russion', label: 'Ru'},
        {value: 'English', label: 'Eng'},
        {value: 'Uzbek', label: 'Uz'}
    ];

    return(
        <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
               </option> 
            )) }

        </select>
    );
};

export default Language;