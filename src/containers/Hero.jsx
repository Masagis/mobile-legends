import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import {
  fetchDataHero,
  fetchDataHeroDetail,
} from '../store/actions/mlbb.action'

function Hero() {
  const router = useRouter()
  const dispatch = useDispatch()

  const heroData = useSelector((state) => state.hero.heroList)

  useEffect(() => {
    dispatch(fetchDataHero({ language: 'id' }))
  }, [])

  const handleDetail = (val) => {
    dispatch(fetchDataHeroDetail({ id: val, language: 'id' })).then(() =>
      router.push(`/detail/${val}`),
    )
  }

  return (
    <div className="mt-5">
      <h1 className="mb-5">Daftar Hero mobile legend: Bang Bang</h1>
      <div className="row">
        {heroData &&
          heroData.map((item, idx) => (
            <div className="col-md-2 mr-2 mb-2" key={idx}>
              <div
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => handleDetail(item?.heroid)}
              >
                <img
                  src={`${item?.key}`}
                  alt="images"
                  className="rounded img-fluid"
                />
                <h4 className="text-center">{item?.name}</h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Hero
