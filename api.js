
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

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}