class AviasalesService {
  getSearchID = async () => {
    const { searchId } = await this.getResource(`search`)
    return searchId
  }

  getPartTickets = async (searchID: string) => {
    return await this.getResource(`tickets?searchId=${searchID}`)
  }

  private getResource = async (
    urlEnding: string,
    requestNumber: number = 2
  ): Promise<any> => {
    const apiBase = 'https://aviasales-test-api.kata.academy/'
    const url = `${apiBase}${urlEnding}`

    try {
      const res = await fetch(url)

      if (res.status) {
        return await res.json()
      }

      throw new Error(`Ошибка при загрузке данных`)
    } catch (error) {
      console.error(
        `Попытка № ${3 - requestNumber}. Ошибка при получении данных.`,
        error
      )
      if (requestNumber) {
        return this.getResource(urlEnding, requestNumber - 1)
      } else {
        throw error
      }
    }
  }
}

export const aviasalesService = new AviasalesService()
