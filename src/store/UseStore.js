import * as React from 'react';
import { storeContext } from './Context';
import { chattingListStore, addfileListStore } from './Store';

function useStore() {
    // const store = React.useContext(storeContext);
    // if (!store) {
    //   // this is especially useful in TypeScript so you don't need to be checking for null all the time
    //   throw new Error('useStore must be used within a StoreProvider.');
    // }
    return { chattingListStore, addfileListStore };
}

export default useStore;
