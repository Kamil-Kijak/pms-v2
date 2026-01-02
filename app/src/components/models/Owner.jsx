import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDeleteConfirmStore, useUpdateDataStore } from "../../hooks/stores";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import RoleRequired from "../nav/RoleRequired";

const Owner = ({data, number, onDelete, onUpdate}) => {

    const updateDeleteConfirm = useDeleteConfirmStore((state) => state.update);
    const updateUpdateData = useUpdateDataStore((state) => state.update);

    return (
        <section className="flex flex-col justify-start border-3">
            <section className="flex justify-between p-5 m-1 items-center">
                <section className="flex justify-start">
                    { number && <h1 className="mr-4 font-bold text-2xl">{number}#</h1>}
                    <p className="text-2xl font-bold">{data.name}</p>
                    <p className="text-2xl ml-5">{data.phone.match(/.{1,3}/g).join(" ")}</p>
                    <p className="text-2xl ml-5 text-zinc-700 font-bold">{data.lands.length != 0 ? <>Posidane działki {data.lands.length}</> : <>Brak posiadanych działek</>}</p>
                </section>
                <section className="flex justify-around items-center gap-x-3">
                    <button className="edit-btn" onClick={() => {
                            updateUpdateData({...data, number})
                            onUpdate()
                        }}>
                        <FontAwesomeIcon icon={faPen}/> Edytuj
                    </button>
                    <RoleRequired roles={["ADMIN"]}>
                        <button className="error-btn" onClick={() => updateDeleteConfirm(true, () => onDelete(data.id))}>
                            <FontAwesomeIcon icon={faTrashCan}/> Usuń
                        </button>
                    </RoleRequired>
                </section>
            </section>
            {
                data.lands.length != 0 &&
                <section className="mt-4">
                    {
                        data.lands.map((obj, index) => <section key={obj.id}>{obj.id}</section>)
                    }
                </section>
            }
        </section>
    )
}

export default Owner;