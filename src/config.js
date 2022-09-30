import React from 'react'
import { Icon } from 'antd'
import SvgIcon from '@/components/SvgIcon'

import Href from '@/components/Href'
import MyInfo from '@/views/web/about/MyInfo'

// API_BASE_URL
// export const API_BASE_URL = 'https://sumengnan.com/api'
export const API_BASE_URL = 'http://localhost:6060'

// project config
export const HEADER_BLOG_NAME = '程序员的技术日记' // header title 显示的名字

// === sidebar
export const SIDEBAR = {
  avatar: require('@/assets/images/avatar.jpeg'), // 侧边栏头像
  title: '苏梦楠', // 标题
  subTitle: '一个喜爱java的开发者', // 子标题
  // 个人主页
  homepages: {
    csdn: {
      link: 'https://blog.csdn.net/sumengnan',
      icon: <SvgIcon type='csdn.ico' className='homepage-icon' style={{backgroundImage: 'url(icon/csdn.ico)', backgroundSize: 'contain'}} />,
    },
    github: {
      link: 'https://github.com/sumengnan',
      icon: <Icon type='github' theme='filled' className='homepage-icon' />
    }
  }
}

// === discuss avatar
export const DISCUSS_AVATAR = SIDEBAR.avatar // 评论框博主头像

export const ABOUT = {
  avatar: SIDEBAR.avatar,
  describe: SIDEBAR.subTitle,
  discuss: true, // 关于页面是否开启讨论
  renderMyInfo: <MyInfo /> // 我的介绍 自定义组件 => src/views/web/about/MyInfo.jsx
}

