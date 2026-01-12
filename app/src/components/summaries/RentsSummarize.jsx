
import SummarizeLayout from "../../layouts/SummarizeLayout"

const RentsSummarize = ({onClose = () => {}, renters = []}) => {
    return (
        <SummarizeLayout onClose={onClose}>
            <section className="flex flex-col items-start">
                <h1 className="font-bold text-xl">Suma czynszu:</h1>
                <p className="text-xl">{renters.reduce((acc, value) => acc + value.rents.reduce((acc, obj) => acc + (obj.land.area * obj.rental), 0), 0)}zł</p>
            </section>
        </SummarizeLayout>
    )
}

export default RentsSummarize;