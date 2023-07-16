import Api from "@/services/Api";

export default {
  getAll(data, params) {
    return Api().get(`api/videos/`, {
      params,
    });
  },
  getById(id) {
    return Api().get(`api/videos/${id}/`);
  },
  uploadVideo(data, optional) {
    return Api().post("api/videos/", data, optional);
  },
  updateVideo(id, data) {
    return Api().put(`videos/${id}/`, data);
  },
  // updateViews(id) {
  //   return Api().put(`videos/${id}/views`);
  // },
  // uploadThumbnail(id, data) {
  //   return Api().put(`videos/${id}/thumbnails`, data);
  // },
  deleteById(id) {
    return Api().delete(`api/videos/${id}`);
  },
};
