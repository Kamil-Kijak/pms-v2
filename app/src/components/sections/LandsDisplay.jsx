import { useSearchParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import Title from "../nav/Title";
import ErrorBox from "../popups/ErrorBox";


const LandsDisplay = () => {
    const {get, deleteReq} = useApi();
    const [searchParams] = useSearchParams();

    const [formName, setFormName] = useState(null);
    
    const [lands, setLands] = useState([]);

    useEffect(() => {
        getOwners();
    }, [searchParams]);

    const getOwners = () => {
        get(`/api/lands/get?${searchParams.toString()}`, (res) => setLands(res.data.lands))
    }

    const handleDelete = (id) => {
        deleteReq("/api/lands/delete", {idLand:id}, (res) => setLands((prev) => [...prev.filter((obj) => obj.id != id)]))
    }

    return (
        <section className="flex justify-between h-full">
            <Title title={"PMS-v2 - Działki"}/>
            <section className="flex flex-col w-full p-5 overflow-y-auto">
                <section className="self-start mb-3">
                    <ErrorBox/>
                </section>
            </section>
        </section>
    )
}

export default LandsDisplay;