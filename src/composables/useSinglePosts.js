import { ref } from 'vue';

export function useSinglePosts() {
  const post = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchSinglePosts = async (postId) => {
    loading.value = true;
    error.value = null;

    const authToken = btoa(`${import.meta.env.VITE_API_USERNAME}:${import.meta.env.VITE_API_PASSWORD}`);

    let url = `${import.meta.env.VITE_API_BASE_URL}/posts`;

    if (postId !== null && !isNaN(postId)) {
      url += `?postId=${postId}`;
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
      post.value = data;
    } catch (err) {
      error.value = 'Failed to fetch posts';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    post,
    loading,
    error,
    fetchSinglePosts
  };
};
