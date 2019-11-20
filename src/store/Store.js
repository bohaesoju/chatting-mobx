const { observable } = require('mobx');
import axios from 'axios';

const chattingListStore = observable({
    isFetchChattingList: false,
    data: [],
    fetchAPI(){
        this.isFetchChattingList = true;
        return axios.get('http://localhost:3000/friendslist')
    }
    // logIn(data) {
    //     this.isLoggingIn = true;
    //     setTimeout(() => {
    //         this.data = data;
    //         this.isLoggingIn = false;
    //         postStore.data.push(1);
    //     }, 2000);
    // },
    // logOut() {
    //     this.data = null;
    // },
});

const addfileListStore = observable({
    data: [],
    isFetchAddfileList: false,
    id: '',
    textImage: [],
    // addPost(data) {
    //     this.data.push(data);
    // },
});

export { chattingListStore, addfileListStore };
