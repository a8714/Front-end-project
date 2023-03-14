import request from '@/utils/request'
const url = '/admin/vod/teacher'
 export default{
    getList(page,limit,teacherQueryVo) {
        return request({
          url: `${url}/${page}/${limit}`,
          method: 'post',
          data: teacherQueryVo
        })
}}
