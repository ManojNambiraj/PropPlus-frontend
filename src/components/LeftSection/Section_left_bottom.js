import React from 'react'
import achivement from '../../Assets/images/achivement.png'

const section_left_bottom = () => {
  return (
    <>
      <div className='bottom_section_headings'>
        New achivement
      </div>
      <div className='achivement_section'>
        <div className='achivement_img'>
            <img src={achivement} alt='achivement' />
            <div className='achivement_section'>

            </div>
        </div>
      </div>
    </>
  )
}

export default section_left_bottom
