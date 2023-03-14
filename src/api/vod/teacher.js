import request from '@/utils/request'
const url = '/admin/vod/teacher'
 export default{
    getList(page,limit,teacherQueryVo) {
        return request({
          url: `${url}/${page}/${limit}`,
          method: 'post',
          data: teacherQueryVo
        })
    },
    
    deleteteacher(id) {
        return request({               
        url: `${url}/${id}`,
        method: 'delete',    
        })
    },

    save(teacher) {
        return request({
          url: `${url}/save`,
          method: `post`,
          data: teacher
        })
      },

      update(teacher) {
        return request({
          url: `${url}/update`,
          method: `put`,
          data: teacher
        })
      },  


      getbyid(id) {
        return request({
          url: `${url}/get/${id}`,
          method: `get`
        })
      },
       
    
    
}
