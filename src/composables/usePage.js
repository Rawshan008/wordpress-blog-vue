import { ref } from 'vue';

export function usePage() {
  const page = ref([]);
  const pageLoading = ref(false);
  const pageError = ref(null);

  const fetchPage = async (pageSlug = null) => {
    pageLoading.value = true;
    pageError.value = null;

    const authToken = btoa(`${import.meta.env.VITE_API_USERNAME}:${import.meta.env.VITE_API_PASSWORD}`);

    let url = `${import.meta.env.VITE_API_BASE_URL}/page`;

    if (pageSlug !== null) {
      url += `?slug=${pageSlug}`;
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
      page.value = data;
    } catch (err) {
      pageError.value = 'Failed to fetch posts';
      console.error(err);
    } finally {
      pageLoading.value = false;
    }
  };

  return {
    page,
    pageLoading,
    pageError,
    fetchPage
  };
};
