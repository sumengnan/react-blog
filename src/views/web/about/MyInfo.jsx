import React from 'react'

// components
import { Divider, Rate, Icon, Avatar } from 'antd'
import Href from '@/components/Href'
import SvgIcon from '@/components/SvgIcon'

const skills = [
  {
    label: 'java基础扎实。包括数据结构、集合、io、锁、反射、网络编程、并发编程等。',
    rate: 4
  },
  {
    label: '熟悉java分布式开发，熟悉常用设计模式，熟悉函数式编程。',
    rate: 4
  },
  {
    label: '掌握SpringBoot、Spring、SpringMVC、Mybatis、dubbo，深度阅读过各框架源码。',
    rate: 4
  },
  {
    label: '熟练使用Spring Data JPA、netty、elastic-job（分布式定时任务）框架。',
    rate: 3
  },
  {
    label: '熟悉jvm原理及调优，内存溢出分析实战，擅长使用arthas工具。',
    rate: 3
  },
  {
    label: '熟悉mysql数据库以及sql优化，索引原理，了解分库分表。具有备份+binlog数据恢复实战。',
    rate: 3
  },
  {
    label: '熟悉redis缓存中间件原理机制，并能熟练搭建哨兵模式集群。',
    rate: 3
  },
  {
    label: '熟练使用zookeeper中间件，并了解其原理机制。',
    rate: 3
  },
  {
    label: '熟练使用ActiveMQ、RocketMQ等消息中间件。',
    rate: 3
  },
  {
    label: '熟悉ElasticSearch全文检索，能够配合logstash、kibana、filebeat，搭建ELK日志收集',
    rate: 3
  },
  {
    label: '自动化部署：gitlab、jenkins 搭建及熟练使用',
    rate: 3
  },
  {
    label: '容器化部署：docker、kubernetes集群搭建及熟练使用，了解istio服务网格',
    rate: 3
  },
  {
    label: '熟练vue、react、antDesign、jquery、js等前端开发技术',
    rate: 3
  },
  {
    label: '阅读过openJDK8的c/c++源码，编译过JDK源码，了解jni编程',
    rate: 2
  },
  {
    label: '会一些其他语言，如：c/c++',
    rate: 2
  }
]

const MyInfo = () => {
  return (
    <>
      <Divider orientation='left'>博客简述</Divider>
      <ul style={{marginBottom: '5px'}}>
        <li style={{fontWeight: 'bold'}}>本博客使用的技术:</li>
        <li style={{paddingLeft: '22px'}}>
          <ul className='about-list'>
            <li>前端：使用 React Hooks + Antd + Webpack</li>
            <li>后端：使用 Springboot + Spring + SpringMVC + Mybatis框架</li>
            <li>数据库：使用 Mysql + Redis(缓存) + <a href='https://elasticsearch.sumengnan.com' target='_blank' rel='noopener noreferrer'>Elasticsearch</a>(全文检索) </li>
            {/* <li>配置中心：使用 apollo 阿波罗配置中心 </li> */}
            <li>日志：使用
              <a href='https://elasticsearch.sumengnan.com' target='_blank' rel='noopener noreferrer'>Elasticsearch</a>
              +Logstash+
              <a href='https://kibana.sumengnan.com' target='_blank' rel='noopener noreferrer'>Kibana</a>
              +Filebeat进行日志收集、展示</li>
            <li>部署：<a href='https://gitlab.sumengnan.com' target='_blank' rel='noopener noreferrer'>Gitlab</a>
              提交自动触发
              <a href='https://jenkins.sumengnan.com' target='_blank' rel='noopener noreferrer'>Jenkins</a>
              构建Docker镜像上传到
              <a href='https://harbor.sumengnan.com' target='_blank' rel='noopener noreferrer'>Harbor</a>
              中，使用
              <a href='https://kubernetes.sumengnan.com' target='_blank' rel='noopener noreferrer'>Kubernetes</a>
              多节点部署</li>
            <li>监控：使用Prometheus+<a href='https://grafana.sumengnan.com' target='_blank' rel='noopener noreferrer'>Grafana</a>实现</li>
          </ul>
        </li>
      </ul>

      <Divider orientation='left'>关于我</Divider>

      <ul className='about-list'>
        <li>姓名：苏梦楠（男）</li>
        <li>出生年月：1995.10</li>
        <li>学历专业：专科 软件工程</li>
        <li>
          联系方式：
          <SvgIcon type='iconemail' style={{ marginRight: 5, transform: 'translateY(2px)' }} />
          <a href='mailto:2499165351@qq.com'>2499165351@qq.com</a>
        </li>
        <li>坐标：北京市</li>
        <li>
          其他博客地址：
          <Href href='https://blog.csdn.net/sumengnan'>csdn</Href>
          <Divider type='vertical' />
          <Href href='https://github.com/sumengnan'>github</Href>
        </li>
        <li>
          技能
          <ul>
            {skills.map((item, i) => (
              <li key={i}>
                {item.label}
                <Rate defaultValue={item.rate} disabled />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  )
}

export default MyInfo
