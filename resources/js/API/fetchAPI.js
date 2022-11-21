import AxiosClient from './Axios'

export const AmbilDataGempa = () => AxiosClient.get('/api/gempa/terkini')