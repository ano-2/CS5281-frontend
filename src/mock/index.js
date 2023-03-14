import Mock from 'mockjs'

function videoData () {
  const res = Mock.mock({
    status: 200,
    msg: '获取成功',
    data: {
      'list|3': [
        {
          'id|+1': 1,
          cover_img: require('../assets/img/cityU1.jpg'),
          video_title: Mock.Random.ctitle(),
          video_file: '',
          state: true
        },
        {
          'id|+1': 4,
          cover_img: Mock.Random.dataImage('380x210'),
          video_title: Mock.Random.ctitle(),
          video_file: '',
          state: false
        }
      ]
    }

  })
  return res
}

function newsData () {
  const res = Mock.mock({
    status: 200,
    msg: '获取成功',
    data: {
      'list|4': [
        {
          'id|+1': 1,
          cover_img: Mock.Random.dataImage('200x100'),
          news_title: Mock.Random.title(),
          news_desc: Mock.Random.paragraph(1),
          publish_time: Mock.Random.date('yyyy-MM-dd')
        }]
    }

  })
  return res
}

function descData () {
  const res = Mock.mock({
    status: 200,
    msg: '获取成功',
    data: {
      list: [
        {
          id: 1,
          description_name: 'Introduction',
          description_title: '介绍',
          description_desc: Mock.Random.paragraph(1)
        },
        {
          id: 2,
          description_name: 'Opinin',
          description_title: '核心价值观',
          description_desc: '秉承着“责任、主动、稳健、高效、开放、创新”的核心价值观'
        },
        {
          id: 3,
          description_name: 'Organization',
          description_title: '组织架构',
          description_desc: '中心创建于2022年(原名xx部xx中心),下设:香港、九龙两地数据中心,隶属xxx'
        },
        {
          id: 3,
          description_name: 'index_video',
          description_title: '视频中心',
          description_desc: '首页视频汇聚'
        },
        {
          id: 4,
          description_name: 'index_viewlife',
          description_title: '核心价值观',
          description_desc: '秉承着“责任、主动、稳健、高效、开放、创新”的核心价值观'
        },
        {
          id: 5,
          description_name: 'index_development',
          banner_title: 'development',
          banner_desc: 'development of china',
          description_title: '发展历程',
          description_desc: '中国共产党领导中国人民进行了反对帝国主义、封建主义和官僚资本主义的新民主主义革命（1919—1949），分为大革命（1924—1927）、土地革命战争（1927—1937）、抗日战争（1931—1945）和解放战争（1946—1949）四个时期'
        }
      ]
    }

  })
  return res
}
Mock.mock(/web\/videos/, 'get', videoData)

Mock.mock(/web\/newslist/, 'get', newsData)

Mock.mock(/web\/descriptions/, 'get', descData)
