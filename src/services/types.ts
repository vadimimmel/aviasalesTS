export interface IAviasalesService {
  getSearchID(): Promise<any>
  getPartTickets(request: string): Promise<any>
}
