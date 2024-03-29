import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import SslFinals from './sslFinals';

const SslFinalsPage = async () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ['ssl-finals-details'],
    queryFn: async () => {
      const axios = (await import('@/libs/axios')).getAxiosInstance();
      const { data } = await axios.get('/api/ssl-finals-details');
      return data;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SslFinals />
    </HydrationBoundary>
  );
};

export default SslFinalsPage;
