/* eslint-disable */
export type Methods = {
  get: {
    status: 200

    /** Ok */
    resBody: {
      description: string
      heading: string
      id: number
    }[] | {
      message: string
    }
  }
}
