class lruCache{
    //delete key and set it again in the cache to make it most frequent used. it will set in the last item of the cache.
    // remove the first item of the store if the cache is full.
    constructor(capacity){
        // take process size
        // make cache to mimic ram
        this.capacity= capacity;
        this.cache = new Map();
    }

    get(key){
        // returns the upon caching the cache:
        /*
        - check whether the key is in the cache or not,
        - if not in the cache then return -1 meaning key doesn't exist.
        - if cache has it, then remove it and store it in a variable
        - then set it again.
        - return the variable.
        */
    }

    put(key, value){
        // delete the key to the cache if already in the cache and set it again and if the capacity size is equal to the size of the cache then delete it 
        /*
        - check the key is in the cache or not,
        - if is in the cache then delete it.
        - elseif, check if the cache size is equal to the capacity; if equal, remove the first key/index of the map
        - set the new key to the map.
        */
    }
}
