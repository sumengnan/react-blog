import React, { useEffect, useState } from 'react'
import { SIDEBAR } from '@/config'
import axios from '@/utils/axios'
import { useSelector } from 'react-redux'

// components
import { Link } from 'react-router-dom'
import Href from '@/components/Href'
import { Icon, Divider, Tag } from 'antd'

import { Alert } from 'antd'

import useFetchList from '@/hooks/useFetchList'

function SideBar(props) {
  const tagList = useSelector(state => state.article.tagList || [])

  return (
    <aside className='app-sidebar'>
      <img src={SIDEBAR.avatar} className='sider-avatar' alt='' />
      <h2 className='title'>{SIDEBAR.title}</h2>
      <h5 className='sub-title'>{SIDEBAR.subTitle}</h5>
      <ul className='home-pages'>
        {Object.entries(SIDEBAR.homepages).map(([linkName, item]) => (
          <li key={linkName}>
            {item.icon}
            <Href href={item.link}>{linkName}</Href>
          </li>
        ))}
      </ul>

      <Divider orientation='left'>文章标签</Divider>
      <div className='tag-list'>
        {tagList.map((tag, i) => (
          <Tag key={i} color={tag.color}>
            <Link to={`/tags/${tag.name}`}>{tag.name}</Link>
          </Tag>
        ))}
      </div>
    </aside>
  )
}

export default SideBar
