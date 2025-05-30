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
        check whether the key is in the cache or not,
        - if not in the cache then return -1 meaning key doesn't exist.
        - if cache has it, then remove it and store it in a variable
        - then set it again.
        - return the variable.
        */

        if(!this.cache.has(key)) return -1;
        const value = this.cache.get(key);

        this.cache.delete(key)
        this.cache.set(key, value)

        return value;
    }

    put(key, value){
        // delete the key to the cache if already in the cache and set it again and if the capacity size is equal to the size of the cache then delete it 
        /*
        - check the key is in the cache or not,
        - if is in the cache then delete it.
        - elseif, check if the cache size is equal to the capacity; if equal, remove the first key/index of the map
        - set the new key to the map.
        */

        if(this.cache.has(key)) this.cache.delete(key);
        else if(this.cache.size === this.capacity) this.cache.delete([...this.cache.keys()][0]);
        this.cache.set(key, value);
    }
}

// creating an object of the class and setting its size
const cache = new lruCache(3)

// putting value to the store
cache.put(1, 'a');
cache.put(2, 'b');
cache.put(3, 'c');

// making the key frequently accessed key by getting it
cache.get(1);

// putting new key,value in a full cache store
cache.put(4, 'd'); // 2 was removed as it is the first element of the cache.

// getting all the keys of the cache to see the active processes in the cache after putting key-val to oversized cache.
console.log([...cache.cache.keys()])