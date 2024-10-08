import { ref } from 'vue';

export function usePosts() {
  const posts = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchPosts = async (perPage = null) => {
    loading.value = true;
    error.value = null;

    const authToken = btoa(`${import.meta.env.VITE_API_USERNAME}:${import.meta.env.VITE_API_PASSWORD}`);

    let url = `${import.meta.env.VITE_API_BASE_URL}/posts`;

    if (perPage !== null && !isNaN(perPage)) {
      url += `?perPage=${perPage}`;
    }

    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Basic ${authToken}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();
      posts.value = data;
    } catch (err) {
      error.value = 'Failed to fetch posts';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    posts,
    loading,
    error,
    fetchPosts
  };
};
