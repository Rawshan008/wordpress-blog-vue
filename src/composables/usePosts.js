import { ref } from 'vue';

export function usePosts() {
  const posts = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchPosts = async (postId = null, perPage = null) => {
    loading.value = true;
    error.value = null;

    const authToken = btoa(`root:ZG3HOEx56JTDCVdjv5vT3MPg`);

    let url = `https://wpapi.test/wp-json/mca/v1/posts`;

    if (perPage !== null && !isNaN(perPage)) {
      url += `?perPage=${perPage}`;
    }

    if (postId !== null && !isNaN(postId)) {
      url += (perPage !== null ? `&` : `?`) + `postId=${postId}`;
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
