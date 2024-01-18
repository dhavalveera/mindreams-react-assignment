import { call, put, takeEvery } from 'redux-saga/effects'

import { sagaActions } from '../actions'

import { fetchData } from '../reducer/slice/mf_etf_slice'
import { fetchChartData } from '../reducer/slice/chart_slice'

import { getChartValueData, getMfEtfData } from '../../api'

import { ChartValueType, MFETFType } from '../../data'

function* workerGetDataFetch() {
  const data: MFETFType[] = yield call(getMfEtfData)

  yield put(fetchData(data))
}

function* workerGetChartDataFetch() {
  const chartData: ChartValueType[] = yield call(getChartValueData)

  yield put(fetchChartData(chartData))
}

function* mySaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, workerGetDataFetch)
  yield takeEvery(sagaActions.FETCH_CHART_DATA_SAGA, workerGetChartDataFetch)
}

export default mySaga
