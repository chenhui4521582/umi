function _queryUser (params) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '搬家',
        age: 5000000
      })
    }, 5000)
  })
}

export default {
  namespace: 'user1',
  state: {    
    name: 'chenhui',
    age: 50           
  },            
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    * queryUser ({payload}, {call, put}) {
      const res = yield call(_queryUser, payload);
      yield put({
        type: 'save',
        payload: {...res}
      })
    }
  }
};

