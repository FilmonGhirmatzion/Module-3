import axios from 'axios';

const http = axios.create({
  baseURL: "http://localhost:3000"
});

export default {

  list() {

    return http.get('/topics');
  },

  get(id) {
    return http.get(`/topics/${id}`);
  },
  postTopics(topic) {
    return http.post(`/topics`,topic);
  },
  updateTopics(id, topic) {
    return http.put(`/topics/${id}`,topic);
  },
  deleteTopic(id) {
    return http.delete(`/topics/${id}`)
  }

}
