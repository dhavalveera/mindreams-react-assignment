import { call, put, takeEvery } from 'redux-saga/effects'

import { sagaActions } from '../actions'

import { fetchData } from '../reducer/slice/mf_etf_slice'

import { getMfEtfData } from '../../api'
import { MFETFType } from '../../data'

function* workerGetDataFetch() {
  const data: MFETFType[] = yield call(getMfEtfData)

  yield put(fetchData(data))
}

function* mySaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, workerGetDataFetch)
}

export default mySaga
