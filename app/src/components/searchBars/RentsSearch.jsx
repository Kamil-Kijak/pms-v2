import SearchBarLayout from "../../layouts/SearchBarLayout"
import Input from "../inputs/Input"
import useFormFields from "../../hooks/useFormFields";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Select from "../inputs/Select";

const RentsSearch = ({ onClose = () => {}}) => {

    const [searchParams] = useSearchParams();

    const [setFieldData, fieldData, errors, setErrors, isValidated] = useFormFields([
        {
            name:"monthFilter",
            allowNull:true,
            regexp:/^\d+$/,
            error:"Musi być liczbą"
        },
        {
            name:"nameFilter",
            allowNull:true,
        },
        {
            name:"endYearFilter",
            allowNull:true,
            regexp:/^\d+$/,
            error:"Musi być liczbą"
        },
        {
            name:"ownerNameFilter",
            allowNull:true,
        },
        {
            name:"showExpired",
            allowNull:true,
            regexp:/^(true|false)$/,
            errorText:"true lub false",
            defaultValue:"false"
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
            <Select
                title="Miesiąc wystanienia faktury czynszowej"
                error={errors.monthFilter}
                options={<>
                    <option value="1">Styczeń</option>
                    <option value="2">Luty</option>
                    <option value="3">Marzec</option>
                    <option value="4">Kwiecień</option>
                    <option value="5">Maj</option>
                    <option value="6">Czerwiec</option>
                    <option value="7">Lipiec</option>
                    <option value="8">Sierpień</option>
                    <option value="9">Wrzesień</option>
                    <option value="10">Październik</option>
                    <option value="11">Listopad</option>
                    <option value="12">Grudzień</option>
                </>}
                defaultOption="Nie wybrano"
                defaultOptionHidden={false}
                handleChange={(e) => setFieldData((prev) => ({...prev, monthFilter:e.target.value}))}
                value={fieldData.monthFilter}
                name="monthFilter"
            />
            <Input
                type="number"
                min={0}
                placeholder="Podaj rok końca umowy"
                title="Rok końca umowy"
                error={errors.endYearFilter}
                handleChange={(e) => setFieldData((prev) => ({...prev, endYearFilter:e.target.value}))}
                value={fieldData.endYearFilter}
                name="endYearFilter"
            />
            <Input
                placeholder="Podaj imie/nazwisko dzierżawcy"
                title="Imie/nazwisko dzierżawcy"
                error={errors.nameFilter}
                handleChange={(e) => setFieldData((prev) => ({...prev, nameFilter:e.target.value}))}
                value={fieldData.nameFilter}
                name="nameFilter"
            />
            <Input
                placeholder="Podaj imie/nazwisko właściciela"
                title="Imie/nazwisko właściciela"
                error={errors.ownerNameFilter}
                handleChange={(e) => setFieldData((prev) => ({...prev, ownerNameFilter:e.target.value}))}
                value={fieldData.ownerNameFilter}
                name="ownerNameFilter"
            />
            <Select
                title="Pokaż przedawnione"
                error={errors.showExpired}
                options={<>
                    <option value="false">Nie</option>
                    <option value="true">Tak</option>
                </>}
                handleChange={(e) => setFieldData((prev) => ({...prev, showExpired:e.target.value}))}
                value={fieldData.showExpired}
                defaultOption="Nie"
                name="showExpired"
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

export default RentsSearch;