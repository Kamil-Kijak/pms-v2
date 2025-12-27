
const User = ({data, number}) => {
    return (
        <section className="flex justify-between p-5 border-3 m-1 items-center">
            <section className="flex justify-start">
                { number && <h1 className="mr-4 font-bold text-2xl">{number}#</h1>}
                <h2 className="text-2xl">{data.name} {data.surname}</h2>
                <p className="text-2xl ml-10 font-bold">{data.role}</p>
            </section>
            <section>
                Hello world
            </section>
        </section>
    )
}

export default User;