module.exports = {
  // 配置推荐接口
  recommendInterface: 'https://sz.meituan.com/ptapi/recommends',
  // 配置电影列表接口
  movieInterface: 'https://sz.meituan.com/ptapi/getComingFilms?ci=30&limit=10',
  // 配置民宿城市推荐
  cityListInterface: 'https://bj.meituan.com/ptapi/minsuCitys?fetchSize=10',
  // 配置民宿推荐接口
  minsuInterface: 'https://sz.meituan.com/ptapi/minsu',
  // 配置headers
  headers: {
    Cookie: '_lxsdk_s=171af7814eb-99f-56f-5a2%7C%7C6; __mta=247357371.1587736158006.1587787455214.1587788548093.4; ci=1; rvct=1; _lxsdk_cuid=171ac7245e7c8-0e92b0fac46a12-481d3201-fa000-171ac7245e7c8; t_lxid=171ac7245f8c8-0560b827682a97-481d3201-fa000-171ac7245f8c8-tid; uuid=843aa543c0f14f60b6e3.1587736099.1.0.0'
    // {
    //   _lxsdk_s: '171af7814eb-99f-56f-5a2%7C%7C4',
    //   __mta: '247357371.1587736158006.1587741334496.1587787455214.3',
    //   ci: 1,
    //   rvct: 1,
    //   _lxsdk_cuid: '171ac7245e7c8-0e92b0fac46a12-481d3201-fa000-171ac7245e7c8',
    //   t_lxid: '171ac7245f8c8-0560b827682a97-481d3201-fa000-171ac7245f8c8-tid',
    //   uuid: '843aa543c0f14f60b6e3.1587736099.1.0.0'
    // }
  }
}
