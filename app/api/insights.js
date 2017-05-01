import api from './api';

const insights = {
  list() {
    return api.get('posts?per_page=100');
  },
};

export default insights;
