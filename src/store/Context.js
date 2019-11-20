import * as React from 'react';
import { chattingListStore, addfileListStore } from './Store';

export const storeContext = React.createContext({
    chattingListStore,
    addfileListStore,
});

export const StoreProvider = ({ children }) => {
    return (
        <storeContext.Provider>
            {children}
        </storeContext.Provider>
    );
};

export default StoreProvider;
