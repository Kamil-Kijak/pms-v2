import { useMemo } from "react";

const Area = ({data, number, taxDistrict, forestTax, agriculturalTax}) => {

    const colorsMap = {
        "lesny":"border-green-700",
        "rolny":"border-yellow-500",
        "brak":"border-red-500"
    }

    const converter = useMemo(() => {
        if(taxDistrict && data.groundClass.tax == "rolny")
            return data.groundClass.converters.find((obj) => obj.taxDistrict == taxDistrict).converter;
        else
            return null;
    }, [data, taxDistrict])

    return (
        <section className={`flex p-5 border-5 gap-x-5 items-center w-full ${colorsMap[data.groundClass.tax]}`}>
            <h1 className="font-bold text-2xl">#{number}</h1>
            <p className="text-2xl font-bold">{data.groundClass.class}</p>
            <p className="text-2xl font-bold">{data.area}ha</p>
            <p className="text-2xl font-bold">{data.groundClass.released && "Podatek zwolniony"}</p>
            {
                data.groundClass.tax == "rolny" &&<>
                    <p className="text-2xl font-bold">Rolny</p>
                    <p className="text-2xl font-bold">Przelicznik:
                        {
                            taxDistrict ?
                            data.groundClass.converters.find((obj) => obj.taxDistrict == taxDistrict).converter
                            :
                            <span className="text-red-800">Nie można stwierdzić</span>
                        }
                    </p>
                    {
                        taxDistrict && <>
                            <p className="text-2xl font-bold">ha. przel:{(converter * data.area).toFixed(4)}</p>
                            
                            {
                                !data.groundClass.released && (
                                (agriculturalTax) ? <p className="text-2xl font-bold">Podatek:{(agriculturalTax * converter * data.area).toFixed(4)}zł</p>
                                :
                                <p className="text-2xl font-bold text-red-800">Brak stawk. podatku roln.</p>
                                )
                            }
                        </>
                    }
                </>
            }
            {
                data.groundClass.tax == "lesny" &&<>
                    <p className="text-2xl font-bold">Leśny</p>
                    {
                        forestTax ? <p className="text-2xl font-bold">Podatek:{(forestTax * data.area).toFixed(4)}zł</p>
                        :
                        <p className="text-2xl font-bold text-red-800">Brak stawk. podatku leśn.</p>
                    }
                </>
            }
        </section>
    )
}

export default Area;