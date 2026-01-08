import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorBox from "../../popups/ErrorBox";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useUpdateDataStore } from "../../../hooks/stores";
import useFormFields from "../../../hooks/useFormFields";

const InsertRent = ({onClose = () => {}, reload = () => {}}) => {

    const landData = useUpdateDataStore((state) => state.data);

    const [setFieldData, fieldData, errors, setErrors, isValidated] = useFormFields([
        {
            name:"idRenter",
            allowNull:false,
            regexp:/^.{21}$/,
            errorText:"Nie poprawny"
        },
        {
            name:"startDate",
            allowNull:false,
        },
        {
            name:"endDate",
            allowNull:false,
        },
        {
            name:"rental",
            allowNull:false,
            regexp:/^\d{0,7}$/,
            errorText:"Nie poprawny lub za duży"
        },
        {
            name:"issueRentalFactureDate",
            allowNull:false,
        },
    ]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValidated()) {
            post("/api/rents/insert", {...fieldData, idLand:landData.id}, (res) => {
                onClose()
                reload()
            });
        }
    }

    return (
        <section className="w-full flex justify-center items-start">
            <form onSubmit={handleSubmit} className="min-w-[43%] p-5 flex flex-col items-center justify-center scroll-auto">
                <ErrorBox/>
                <button className="error-btn m-2" onClick={onClose}><FontAwesomeIcon icon={faXmark}/> Zamknij</button>
                <h1 className="text-2xl font-bold">Dodaj dzierżawe do działki nr {landData.number}</h1>
                <section className="my-4 gap-y-2 flex flex-col w-full">

                </section>
             </form>
             
        </section>
    )
}

export default InsertRent;