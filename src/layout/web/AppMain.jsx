import React from 'react'
import { Alert } from 'antd'
import { useMediaQuery } from 'react-responsive'

function AppMain(props) {
  const iphoneScreen = useMediaQuery({
    query: '(max-width: 576px)'
  })

  const ipadScreen = useMediaQuery({
    query: '(min-width: 576px) and (max-width: 992px)'
  })

  return (
    <div>
      <div className='app-main'>
        {props.children}
      </div>
      <div style= {{textAlign: 'center'}}>
        <a target={'_blank'} href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802040438' style={{display: 'inline-block', textDecoration: 'none', height: '20px', lineHeight: '20px'}}>
          <img alt='' src={require('@/assets/icons/beian.png')} style={{float: 'left'}}/>
          <p style={{float: 'left', height: '20px', lineHeight: '20px', margin: '0px 15px 0px 5px', color: '#939393'}}>京公网安备11010802040438号</p>
        </a>
        <a target={'_blank'} href='https://beian.miit.gov.cn/' style={{display: 'inline-block', color: '#939393'}} >
          <p style={{float: 'left', height: '20px', lineHeight: '20px', margin: '0px 0px 0px 5px', color: '#939393'}}>京ICP备2022013095号-1</p>
        </a>
      </div>
    </div>
  )
}

export default AppMain
