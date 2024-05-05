import { Card, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './card.css'

const JDCard = () => {
  const [jdData, setJDData] = useState([]);

  useEffect(() => {
    const apiURL = "https://api.weekday.technology/adhoc/getSampleJdJSON";
    axios.post(apiURL)
      .then(response => {
        setJDData(response.data.jdList)
      })
      .catch(error => {
        console.log(error)
      })

  }, [])

  return (
    <>
    
      {
        jdData && (
          <>
            <div className='alljobs'>
              {jdData.map((jditem) => (<>
                <Card key={jditem.jdUid} className='cards'>
                  <div className='heading'>
                    <img src={jditem.logoUrl} />
                    <div className='text'>
                      <span>
                        {jditem.companyName}
                      </span>
                      <span>
                        {jditem.jobRole}
                      </span>
                      <span>
                        {jditem.location}
                      </span>
                    </div>
                  </div>

                  <div className='salary'>
                    Estimated salary: {jditem.minJdSalary ? ((jditem.minJdSalary) + "- ") : ''}  {jditem.maxJdSalary ? (jditem.maxJdSalary) : " "} LPA
                  </div>
                  <div className='about'>
                    About Company:{jditem.jobDetailsFromCompany}
                  </div>
                  <div className='experience'>
                    <span> Minimum Experience  </span>
                    <span> {jditem.minExp} </span>
                  </div>
                  <div>
                    <Button variant="contained" className='applyButton'>Easy Apply</Button>
                  </div>
                </Card>


              </>))}

            </div>
          </>
        )
      }
    </>
  )
}

export default JDCard
