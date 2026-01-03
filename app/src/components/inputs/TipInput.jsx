import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";

const TipInput = ({placeholder = "", title = <></>, handleChange = (value) => {}, error = "", value, name="", options=[]}) => {

    const [focus, setFocus] = useState(false);

    const filteredOptions = useMemo(() => {
        if(!value) {
            return options.filter((obj, index) => index <= 40).sort((a, b) => a.localeCompare(b, "pl", { sensitivity: "base" }));
        }
        const regexp = new RegExp(value.replace("\\", ""), "i")
        return options.filter((obj, index) => regexp.test(obj)).filter((obj, index) => index <= 40).sort((a, b) => a.localeCompare(b, "pl", { sensitivity: "base" }));
    }, [value, options]);

    return (
        <section className="w-full relative">
            <p className="font-bold mb-1 text-lg">{title}</p>
            <input
                placeholder={placeholder}
                autoComplete="off"
                className="p-2 border-2 border-black rounded-md inline-block w-full relative"
                onChange={(e) => handleChange(e.target.value)} value={(value ?? "")}
                name={name}
                onFocus={() => setFocus(true)}
                onBlur={() => setTimeout(() => setFocus(false), 100)}
            />
            {
                focus &&
                <section className="max-h-75 absolute z-10 bg-white text-xl w-full border-zinc-400 border-4 rounded-b-xl overflow-y-scroll overflow-x-hidden">
                    {
                        filteredOptions.map((obj, index) => <p key={index} title={obj} className="tipinput-option" data-value={obj} onClick={(e) => handleChange(e.target.dataset.value)}>{obj}</p>)
                    }
                </section>
            }
            {error && <p className="error-box"><FontAwesomeIcon icon={faWarning}/> {error}</p>}
        </section>
    )
}

export default TipInput;