

export default {
  namespace: 'user',  
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
    
  }
};