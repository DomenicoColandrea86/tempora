import api from './api';

const insights = {
  listInsights() {
    return api.get('posts?per_page=100');
  },
  listAuthors() {
    return api.get('users/?roles=author&per_page=100&orderby=id');
  },
};

export default insights;
