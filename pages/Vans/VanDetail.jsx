import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import { getVan } from "../../api";

export default function VanDetail() {
    const params = useParams()
    const location = useLocation();
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadVan() {
            setLoading(true)
            try {
                const data = await getVan(params.id)
                setVan(data)
            } catch (error) {
                setError(error)
            } finally{
                setLoading(false)
            }
        }

        loadVan()
    }, [params.id])

    const search = location.state?.search || ""
    const type = location.state?.type || "all"


    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error){
        return <h2>An error occured: {error.message}</h2>
    }
    return (
        <div className="van-detail-container">
              <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}