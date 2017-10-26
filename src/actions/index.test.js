import actionTypes from './actionTypes'
import {
  currenciesFetch,
  currenciesReceive,
  currenciesRequest,
  uiSelectTab
} from './index.js'

describe('Actions MUST create actions properly', ()=> {
  it('currenciesFetch()', () => {
    expect( currenciesFetch() ).toBeInstanceOf(Function)
  })

  it('currenciesReceive()', () => {
    const action = currenciesReceive({'1': {}})
    
    expect( action )
    .toMatchObject({
      type: actionTypes.CURRENCIES_RECEIVE,
      payload: {
        currencies: expect.any(Object),
        lastUpdated: expect.any(Number)
      }
    })

    expect( action.payload.lastUpdated ).not.toBe(0)
  })

  it('currenciesRequest()', () => {
    expect( currenciesRequest() )
    .toEqual({
      type: actionTypes.CURRENCIES_REQUEST
    })
  })

  it('uiSelectTab()', () => {
    expect( uiSelectTab('rates') )
    .toEqual({
      type: actionTypes.UI_SELECT_TAB,
      payload: 'rates'
    })
  })
})