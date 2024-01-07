/* eslint-disable */
export type Methods = {
  get: {
    status: 200

    /** Ok */
    resBody: {
      message: string
    } | {
      newsDetail: {
        newsId: number
        favorite: boolean
        published: boolean
        quote: string
        url: string
        title: string
        id: number
      }[]
      description: string
      heading: string
    }
  }
}
