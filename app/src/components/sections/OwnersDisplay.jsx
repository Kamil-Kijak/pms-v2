import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../nav/Title";
import { useEffect, useState } from "react";
import { faMagnifyingGlass, faRefresh } from "@fortawesome/free-solid-svg-icons";
import useApi from "../../hooks/useApi";
import OwnersSearch from "../searchBars/OwnersSearch"
import { useSearchParams } from "react-router-dom";
import Owner from "../models/Owner";
import UpdateOwner from "../forms/owner/UpdateOwner";
import ErrorBox from "../popups/ErrorBox";


const OwnersDisplay = () => {

    const {get, deleteReq} = useApi();
    const [searchParams] = useSearchParams();

    const [formName, setFormName] = useState(null);

    const [owners, setOwners] = useState([]);

    useEffect(() => {
        getOwners();
    }, [searchParams])

    const getOwners = () => {
        get(`/api/owners/get?${searchParams.toString()}`, (res) => setOwners(res.data.owners))
    }

    const handleDelete = (id) => {
        deleteReq("/api/owners/delete", {idOwner:id}, (res) => setOwners((prev) => [...prev.filter((obj) => obj.id != id)]))
    }

    return (
        <section className="flex justify-between h-full">
            <Title title={"PMS-v2 - Właściciele"}/>
            <section className="flex flex-col w-full p-5 overflow-y-auto">
                <section className="self-start mb-3">
                    <ErrorBox/>
                </section>
                <section className="flex justify-between">
                    <section className="flex items-center gap-x-5">
                        <h1 className="text-4xl font-bold">Właściciele</h1>
                        <button className="primary-btn" onClick={() => setFormName("search")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/> Opcje szukania
                        </button>
                    </section>
                    <button className="edit-btn" onClick={getOwners}>
                        <FontAwesomeIcon icon={faRefresh}/> Odśwież
                    </button>
                </section>
                <h2 className="text-3xl font-bold ml-5 mt-2">Znaleziono: {owners.length}</h2>
                <section className="my-5">
                    {
                        owners.map((obj, index) => <Owner
                                                        data={obj}
                                                        key={obj.id}
                                                        number={index + 1}
                                                        onDelete={handleDelete}
                                                        onUpdate={() => setFormName("update")}
                                                    />)
                    }
                </section>
            </section>
            {
                formName == "search" && <OwnersSearch
                                            onClose={() => setFormName(null)}
                                        />
            }
            {
                formName == "update"&& <UpdateOwner onClose={() => setFormName(null)} reload={getOwners}/>
            }
        </section>
    )
}

export default OwnersDisplay;