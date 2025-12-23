
const User = ({data}) => {
    return (
        <section className="flex flex-col justify-center p-4 m-2">
            <section className="">
                <h2 className="font-bold text-2xl">{data.name} {data.surname}</h2>
                <p className="text-xl">{data.role}</p>
            </section>
        </section>
    )
}

export default User;