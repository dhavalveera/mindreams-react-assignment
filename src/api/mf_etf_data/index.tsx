import { MFETFData, MFETFType } from '../../data'

export const getMfEtfData = (): Promise<MFETFType[]> => {
  const promise = new Promise<MFETFType[]>(resolve => {
    resolve(MFETFData)
  })

  return promise
}
