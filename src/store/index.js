import { createStore, combineReducers } from 'redux'
import { cashReducer } from './cashReducer'

const rootReducer = combineReducers({
  cash: cashReducer
})

export const store = createStore(rootReducer)

// в самом компоненте
import { useDispatch, useSelector } from 'react-redux'
const dispatch = useDispatch()
const cash = useSelector((state) => state.cash.cash)

const addCash = (cash) => {
  dispatch({ type: 'ADD_CASH', payload: cash })
}
const getCash = (cash) => {
  dispatch({ type: 'GET_CASH', payload: cash })
}

// app надо обернуть в провайдер и передать в него стор
import { Provider } from 'react-redux'
import { store } from './store'

;<Provider store={store}>
  <Apps />
</Provider>
