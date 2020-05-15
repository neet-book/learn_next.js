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
    Cookie: '_lxsdk_cuid=17180e4f267c8-0a9d3d04cf7947-5313f6f-1fa400-17180e4f267c8; t_lxid=17180e4f303c8-0ad07736a4d526-5313f6f-1fa400-17180e4f303c8-tid; iuuid=3F24AEDDBB644B62DF09D17C5FF909729F1B1E6084FDF6F4F49A82E2C56354BC; _lxsdk=3F24AEDDBB644B62DF09D17C5FF909729F1B1E6084FDF6F4F49A82E2C56354BC; _ga=GA1.2.915729371.1587544457; _hc.v=bad92f08-d79e-5489-949c-d45949e1257f.1587544679; cityname=%E6%B7%B1%E5%9C%B3; Hm_lvt_f66b37722f586a240d4621318a5a6ebe=1588231365; __utma=211559370.915729371.1587544457.1588231365.1588231365.1; __utmz=211559370.1588231365.1.1.utmcsr=baidu|utmccn=baidu|utmcmd=organic|utmcct=zt_search; ci=30; rvct=30%2C719%2C715%2C10; _lx_utm=utm_source%3Dbaidu%26utm_campaign%3Dbaidu%26utm_medium%3Dorganic%26utm_content%3Dzt_search; uuid=7e9651a574d348a29837.1589360596.1.0.0; mtcdn=K; lsu=; __mta=45461915.1587010164279.1589518865949.1589536485565.47; _lxsdk_s=17217c1ea8f-39a-578-2b%7C%7C2'
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
