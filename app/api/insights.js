import api from './api';

const insights = {
  listPosts() {
    return api.get('posts?per_page=100');
  },
  listAuthors() {
    return api.get('users?roles=author&per_page=100&orderby=id');
  },
  listTags() {
    return api.get('tags?per_page=500');
  },
};

export default insights;
