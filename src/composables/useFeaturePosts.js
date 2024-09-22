import { ref } from 'vue';

export function useFeaturePosts() {
  const fposts = ref([]);
  const floading = ref(false);
  const ferror = ref(null);

  const fetchFeaturePosts = async (perPage = null) => {
    floading.value = true;
    ferror.value = null;

    const authToken = btoa(`${import.meta.env.VITE_API_USERNAME}:${import.meta.env.VITE_API_PASSWORD}`);

    let url = `${import.meta.env.VITE_API_BASE_URL}/featureposts`;

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
      fposts.value = data;
    } catch (err) {
      ferror.value = 'Failed to fetch posts';
      console.error(err);
    } finally {
      floading.value = false;
    }
  };

  return {
    fposts,
    floading,
    ferror,
    fetchFeaturePosts
  };
};
