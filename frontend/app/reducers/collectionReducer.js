import CollectionData from '../data/collection.js';

/** 
 * Default collection state, holding the default skeleton.
 */
const collectionState = CollectionData;

/**
 * Collection reducer handling the state of the user's collection.
 *
 * @param {Object} state
 * @param {Object} action
 */
export default function collectionReducer(state = collectionState, action) {

    switch (action.type) {
        case 'COLLECTION_ADD_ITEM':

            return state;
    
        case 'COLLECTION_REMOVE_ITEM':

            return state;
    
        default:
            return state;
    }

}
