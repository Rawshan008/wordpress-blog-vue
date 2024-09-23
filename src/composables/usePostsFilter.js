import { ref } from "vue";

export function usePostsFilter() {
  const authToken = btoa(`${import.meta.env.VITE_API_USERNAME}:${import.meta.env.VITE_API_PASSWORD}`);
  let postsUrl = `${import.meta.env.VITE_API_BASE_URL}/posts`;
  let catUrl = `${import.meta.env.VITE_API_BASE_URL}/categories`;

  const posts = ref([]);
  const categories = ref([]);
  const currentPage = ref(1);
  const perPage = ref(3);
  const totalPage = ref(0);

  const selectCategory = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchPosts = async (reset = false) => {
    isLoading.value = true;
    error.value = null;

    if (reset) {
      currentPage.value = 1;
      posts.value = [];
    }

    const params = new URLSearchParams({
      perPage: perPage.value,
      page: currentPage.value
    });

    if (selectCategory.value) {
      params.append('category', selectCategory.value);
    }

    try {
      const response = await fetch(`${postsUrl}?${params.toString()}`, {
        headers: {
          'Authorization': `Basic ${authToken}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();

      if (reset) {
        posts.value = data;
      } else {
        posts.value.push(...data);
      }
      totalPage.value = data.length

      if (data.length < perPage.value) {
        totalPosts.value = 0;
      }
    }
    catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  /**
   * Get Category values
   */

  const fetchCategory = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(catUrl, {
        headers: {
          'Authorization': `Basic ${authToken}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      categories.value = data;
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };


  return {
    posts,
    perPage,
    categories,
    currentPage,
    totalPage,
    selectCategory,
    isLoading,
    error,
    fetchPosts,
    fetchCategory,
  }
}