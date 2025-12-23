import axios from "axios";
import { useEffect, useState } from "react";

import Select from "../../inputs/Select"
import Input from "../../inputs/Input"
import {useErrorStore} from "../../../hooks/stores"
import useFormFields from "../../../hooks/useFormFields"
import ErrorBox from "../../popups/ErrorBox";


const LoginUser = () => {

    const updateError = useErrorStore((state) => state.update);

    const [setFieldData, fieldData, errors, isValidated] = useFormFields([
        {
            name:"idUser",
            allowNull:false
        },
        {
            name:"password",
            allowNull:false
        }
    ])
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/api/users/get-all").then(res => setUsers(res.data.users)).catch(err => updateError(null));
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValidated()) {
            // login
            alert("WORK")
        }
        
    }
    return (
        <form method="POST" onSubmit={handleSubmit} className="flex justify-center flex-col items-center border-3 xl:w-[40%] lg:w-[60%] w-[90%] p-2 rounded-xl">
            <h1 className="font-bold text-3xl text-center mt-10">Logowanie jako</h1>
            <ErrorBox/>
            <section className="py-5 w-[50%] flex flex-col gap-y-5">
                <Select
                    defaultOption="Wybierz użytkownika"
                    title={<>Użytkownik</>}
                    error={errors.idUser}
                    options={users.map(obj => <option key={obj.id} value={obj.id}>{obj.name} {obj.surname} {obj.role}</option>)}
                    handleChange={(e) => setFieldData((prev) => ({...prev, idUser:e.target.value}))}
                    value={fieldData.idUser}
                />
                {
                    fieldData.idUser &&
                    <Input
                        type="password"
                        placeholder="Podaj hasło"
                        title={<>Hasło</>}
                        error={errors.password}
                        handleChange={(e) => setFieldData((prev) => ({...prev, password:e.target.value}))}
                        value={fieldData.password}
                    />
                }
            </section>
            <section className="my-4">
                <button type="submit" className="primary-btn text-2xl">
                    Zaloguj się
                </button>
            </section>
        </form>
    )
}

export default LoginUser;