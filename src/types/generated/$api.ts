import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_18qsrps } from './health';
import type { Methods as Methods_1wwv73r } from './v1/news';
import type { Methods as Methods_11wh1gq } from './v1/news/_heading@string';
import type { Methods as Methods_drzskq } from './v1/news/_heading@string/all';
import type { Methods as Methods_1qdrn70 } from './v1/news/create';
import type { Methods as Methods_khrb0z } from './v1/news/delete';
import type { Methods as Methods_1a2gpby } from './v1/news/delete/_heading@string';
import type { Methods as Methods_1ylm884 } from './v1/news/update/_heading@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '/' : baseURL).replace(/\/$/, '');
  const PATH0 = '/health';
  const PATH1 = '/v1/news';
  const PATH2 = '/all';
  const PATH3 = '/v1/news/create';
  const PATH4 = '/v1/news/delete';
  const PATH5 = '/v1/news/update';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';
  const PATCH = 'PATCH';

  return {
    health: {
      /**
       * @returns Ok
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_18qsrps['get']['resBody'], BasicHeaders, Methods_18qsrps['get']['status']>(prefix, PATH0, GET, option).text(),
      /**
       * @returns Ok
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_18qsrps['get']['resBody'], BasicHeaders, Methods_18qsrps['get']['status']>(prefix, PATH0, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    v1: {
      news: {
        _heading: (val2: string) => {
          const prefix2 = `${PATH1}/${val2}`;

          return {
            all: {
              /**
               * @returns Ok
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_drzskq['get']['resBody'], BasicHeaders, Methods_drzskq['get']['status']>(prefix, `${prefix2}${PATH2}`, GET, option).json(),
              /**
               * @returns Ok
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_drzskq['get']['resBody'], BasicHeaders, Methods_drzskq['get']['status']>(prefix, `${prefix2}${PATH2}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH2}`,
            },
            /**
             * @returns Ok
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_11wh1gq['get']['resBody'], BasicHeaders, Methods_11wh1gq['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * @returns Ok
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_11wh1gq['get']['resBody'], BasicHeaders, Methods_11wh1gq['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        create: {
          /**
           * @returns Created
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1qdrn70['post']['resBody'], BasicHeaders, Methods_1qdrn70['post']['status']>(prefix, PATH3, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1qdrn70['post']['resBody'], BasicHeaders, Methods_1qdrn70['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH3}`,
        },
        delete: {
          _heading: (val3: string) => {
            const prefix3 = `${PATH4}/${val3}`;

            return {
              /**
               * @returns Deleted
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1a2gpby['delete']['resBody'], BasicHeaders, Methods_1a2gpby['delete']['status']>(prefix, prefix3, DELETE, option).json(),
              /**
               * @returns Deleted
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1a2gpby['delete']['resBody'], BasicHeaders, Methods_1a2gpby['delete']['status']>(prefix, prefix3, DELETE, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          /**
           * @returns Deleted
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_khrb0z['delete']['resBody'], BasicHeaders, Methods_khrb0z['delete']['status']>(prefix, PATH4, DELETE, option).json(),
          /**
           * @returns Deleted
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_khrb0z['delete']['resBody'], BasicHeaders, Methods_khrb0z['delete']['status']>(prefix, PATH4, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH4}`,
        },
        update: {
          _heading: (val3: string) => {
            const prefix3 = `${PATH5}/${val3}`;

            return {
              /**
               * @returns Updated
               */
              patch: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1ylm884['patch']['resBody'], BasicHeaders, Methods_1ylm884['patch']['status']>(prefix, prefix3, PATCH, option).json(),
              /**
               * @returns Updated
               */
              $patch: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1ylm884['patch']['resBody'], BasicHeaders, Methods_1ylm884['patch']['status']>(prefix, prefix3, PATCH, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
        },
        /**
         * @returns Ok
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1wwv73r['get']['resBody'], BasicHeaders, Methods_1wwv73r['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * @returns Ok
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1wwv73r['get']['resBody'], BasicHeaders, Methods_1wwv73r['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
