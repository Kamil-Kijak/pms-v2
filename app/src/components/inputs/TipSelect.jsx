import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";

const TipSelect = ({placeholder = "", title = <></>, handleChange = (value) => {}, error = "", value, name="", options=[], count=40}) => {

    const [focus, setFocus] = useState(false);
    const [search, setSearch] = useState("");

    const filteredOptions = useMemo(() => {
        if(!search) {
            return options.filter((obj, index) => index <= count).sort((a, b) => a.key.localeCompare(b.key, "pl", { sensitivity: "base" }));
        }
        const regexp = new RegExp(search.replace("\\", ""), "i")
        return options.filter((obj, index) => regexp.test(obj.key)).filter((obj, index) => index <= 40).sort((a, b) => a.key.localeCompare(b.key, "pl", { sensitivity: "base" }));
    }, [search, options]);

    useEffect(() => {
        if(!search) {
            handleChange(null);
        }
    }, [search])

    useEffect(() => {
        if(!focus) {
            const obj = options.find((obj) => obj.value === value);
            if(!obj) {
                setSearch("")
            } else {
                setSearch(obj.key)
            }
        }
    }, [focus, value])

    return (
        <section className="w-full relative">
            <p className="font-bold mb-1 text-lg">{title}</p>
            <input
                placeholder={placeholder}
                autoComplete="off"
                className="p-2 border-2 border-black rounded-md inline-block w-full relative"
                onChange={(e) => setSearch(e.target.value)} value={search}
                name={name}
                onFocus={() => setFocus(true)}
                onBlur={() => setTimeout(() => setFocus(false), 100)}
            />
            {
                focus &&
                <section className="max-h-75 absolute z-10 bg-white text-xl w-full border-zinc-400 border-4 rounded-b-xl overflow-y-scroll overflow-x-hidden">
                    {
                        filteredOptions.map((obj, index) => <p key={index} title={obj.key} className="tipinput-option" onClick={(e) => handleChange(filteredOptions[index].value)}>{obj.key}</p>)
                    }
                </section>
            }
            {error && <p className="error-box"><FontAwesomeIcon icon={faWarning}/> {error}</p>}
        </section>
    )
}

export default TipSelect;