/** 
 * Collection actions.
 * Here we define actions for a user's collection. Adding removing items (cards) from the users collection,
 * creating sub collections, etc.
 */


export const COLLECTION_ADD_ITEM = 'COLLECTION_ADD_ITEM';
export const COLLECTION_REMOVE_ITEM = 'COLLECTION_REMOVE_ITEM';

export const COLLECTION_STAR_ITEM = 'COLLECTION_STAR_ITEM';
export const COLLECTION_UNSTAR_ITEM = 'COLLECTION_UNSTAR_ITEM';

export const COLLECTION_ADD_SUBCOLLECTION = 'COLLECTION_ADD_SUBCOLLECTION';
export const COLLECTION_REMOVE_SUBCOLLECTION = 'COLLECTION_REMOVE_SUBCOLLECTION';


/**
 * Add item to collection
 *
 * @param {Integer} id
 * @returns { {type: String, id: Integer} }
 */
export function collectionAddItem(id) {
    
    return {
        type: COLLECTION_ADD_ITEM,
        id: id
    }

}

/**
 * Remove item from collection
 *
 * @param {Integer} id
 * @returns { {type: String, id: Integer} }
 */
export function collectionRemoveItem(id) {
    
    return {
        type: COLLECTION_REMOVE_ITEM,
        id: id
    }

}

/**
 * Star item in your collection collection
 *
 * @param {Integer} id
 * @returns { {type: String, id: Integer} }
 */
export function collectionStarItem(id) {
    
    return {
        type: COLLECTION_STAR_ITEM,
        id: id
    }

}

/**
 * Unstar item in your collection collection
 *
 * @param {Integer} id
 * @returns { {type: String, id: Integer} }
 */
export function collectionUnstarItem(id) {
    
    return {
        type: COLLECTION_UNSTAR_ITEM,
        id: id
    }

}
