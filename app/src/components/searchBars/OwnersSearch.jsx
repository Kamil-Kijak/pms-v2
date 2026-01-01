
import SearchBarLayout from "../../layouts/SearchBarLayout"
import Input from "../inputs/Input"
import useFormFields from "../../hooks/useFormFields";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";


const OwnersSearch = ({ onClose = () => {}}) => {

    const [searchParams] = useSearchParams();

    const [setFieldData, fieldData, errors, setErrors, isValidated] = useFormFields([
        {
            name:"nameFilter",
            allowNull:true,
        },
        {
            name:"limit",
            allowNull:true,
            regexp:/^[0-9]+$/,
            errorText:"Nie poprawny"
        },
    ]);

    useEffect(() => {
        if(Object.keys(Object.fromEntries(searchParams.entries())).length != 0) {
            setFieldData(Object.fromEntries(searchParams.entries()))
        }
    }, [])

    return (
        <SearchBarLayout onClose={onClose} isValidated={isValidated} onClear={() => setFieldData({})}>
            <Input
                placeholder="Podaj imie/nazwisko"
                title="Imie/nazwisko"
                error={errors.nameFilter}
                handleChange={(e) => setFieldData((prev) => ({...prev, nameFilter:e.target.value}))}
                value={fieldData.nameFilter}
                name="nameFilter"
            />
            <Input
                type="number"
                placeholder="Podaj limit wyników"
                title="Limit wyników"
                error={errors.limit}
                handleChange={(e) => setFieldData((prev) => ({...prev, limit:e.target.value}))}
                value={fieldData.limit}
                name="limit"
            />
        </SearchBarLayout>
    )
}

export default OwnersSearch;