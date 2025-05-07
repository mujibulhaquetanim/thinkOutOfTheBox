class lruCache{
    constructor(capacity){
        // take process size
        // make cache to mimic ram
        this.capacity= capacity;
        this.cache = new Map();
    }

    get(key){
        // check whether the key is in the cache or not, if cache has it, then remove it and then set it again.
        // if no in cache then set it.
        // return the key.
    }

    put(key, value){
        // check the key is in the cache or not,
        // if is in the cache then delete it.
        // elseif, check if the cache size is equal to the capacity; if equal, remove the first key/index of the map
        // set the new key to the map.
    }
}

const cache = lruCache(capacity)