
export  async function getVans() {

    const response = await fetch('/api/vans')
    if (!response.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json()
    return data.vans
}

// fetch(`/api/vans/${params.id}`)
// .then(res => res.json())
// .then(data => setVan(data.vans))
export async function getVan(id) {
    const response = await fetch(`/api/vans/${id}`)
    if (!response.ok) {
        throw {
            message:"Failed to fetch the van",
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json()
    return data

}


// React.useEffect(() => {
//     fetch("/api/host/vans")
//         .then(res => res.json())
//         .then(data => setVans(data.vans))
// }, [])
export async function getHostVans() {
    const response = await fetch('/api/host/vans')
    if (!response.ok){
        throw {
            message: "Failed to fetch host vans",
            StatusText: response.statusText,
            status: response.status
        }
    }

    const data = await response.json();
    return data.vans
}

// React.useEffect(() => {
//     fetch(`/api/host/vans/${id}`)
//         .then(res => res.json())
//         .then(data => setCurrentVan(data.vans))
// }, [])

export async function getHostVan(id) {
    const response = await fetch(`/api/host/vans/${id}`)
    if (!response.ok) {
        throw {
            message: "failed to fetch host van item",
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json()
    return data.vans
}