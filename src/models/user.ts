interface IState {
  name: string;
  department: string;
  avatar: string;
  userid: number | null;
}

export default {
  state: {
    name: 'default',
    department: '',
    avatar: '',
    userid: null,
  },

  effects: (dispatch) => ({
    async fetchUserProfile() {
      const res = await fetch('/api/profile');
      console.log('res', res);
    },
  }),

  reducers: {
    update(prevState: IState, payload: IState) {
      return { ...prevState, ...payload };
    },
  },
};
