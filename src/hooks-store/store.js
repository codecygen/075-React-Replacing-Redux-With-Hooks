import { useState, useEffect } from 'react';

// this stores all global values
let globalState = {};
let listeners = [];
// This stores functions
let actions = {};

export const useStore = () => {
    const setState = useState(globalState)[1];

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload);
        globalState = {...globalState, ...newState};

        for (const listener of listeners) {
           listener(globalState);
        };
    };

    useEffect(() => {
        listeners.push(setState);

        return () => {
            listeners = listeners.filter(li => li !== setState);
        };
    }, []);

    return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = {...globalState, initialState};
    }

    actions = {...actions, ...userActions};
};