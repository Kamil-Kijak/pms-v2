
import RoleRequired from "../nav/RoleRequired"
import Title from "../nav/Title";

const FormsDisplay = () => {
    return (
        <RoleRequired roles={["TEREN"]}>
            <section className="flex justify-between h-full">
                <Title title={"PMS-v2 - formularze"}/>
                <section className="flex flex-col w-full p-5 overflow-y-auto">
                    <section className="flex items-center gap-x-5">
                        <h1 className="text-4xl font-bold">Formularze</h1>
                    </section>
                    <section className="my-5">
                        <button className="primary-btn text-xl">Formularz działki</button>
                    </section>
                </section>
            </section>
        </RoleRequired>
    )
}

export default FormsDisplay;