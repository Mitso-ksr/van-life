import React from 'react'
import { useParams } from 'react-router-dom'

function HostVanDetail() {
  const [hostVan , setHostVan] = React.useState(null)
  const param = useParams()
  React.useEffect(() => {
    fetch(`/api/host/vans/${param.id}`)
      .then(res => res.json())
      .then(data => setHostVan(data.vans[0]))
  } , [param.id])

  return (
    <div className='host-van-container-element'>
      <div className="host-van-info">
        <img src={hostVan?.imageUrl} />
        <div>
          <p className='host-van-type'>{hostVan?.type}</p>
          <h3>{hostVan?.name}</h3>
          <p><span>$</span>{hostVan?.price} <span>/day</span></p>
        </div>
      </div>

    </div>
  )
}

export default HostVanDetail
