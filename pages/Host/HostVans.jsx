import React from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"

export default function HostVans() {
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error , setError] = React.useState(null)

    React.useEffect(() => {
        async function loadHostVans() {
            setLoading(true)
            try{
                const data = await getHostVans()
                setVans(data)
            } catch(error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        loadHostVans()
    }, [])

    const hostVansEls = vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))
    
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>an error occured {error.message}</h2>
    }
    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}