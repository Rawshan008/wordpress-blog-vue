import { ref } from 'vue';

export function useHomePosts(url) {
  const posts = ref([]);
  const error = ref(null);

  const fetchHomePosts = async () => {
    error.value = null;

    const authToken = btoa(`${import.meta.env.VITE_API_USERNAME}:${import.meta.env.VITE_API_PASSWORD}`);

    try {
      const response = await fetch(url, {
        method: 'GET',
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
    }
  };

  return {
    posts,
    error,
    fetchHomePosts
  };
};
