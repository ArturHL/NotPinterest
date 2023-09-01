import React from 'react'
import { BsQuestionLg } from 'react-icons/bs'
import './index.css'
import DDmenu from '../../ddMenu'

function More({active ,showmenu}) {
  return (
    <div className='more-button principalMenuContainer'>
      <BsQuestionLg onClick={showmenu}/>
      <DDmenu type={'more'} active={active}/>
    </div>
  )
}

export default More