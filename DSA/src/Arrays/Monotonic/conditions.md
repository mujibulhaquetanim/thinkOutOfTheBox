# Question

**Given an integer array return true if the given array is monotonic, otherwise return false.**

## Rules
>
>1. [1,_,_,_,7] if middle values are decreasing then it will return **false**; i.e. decreasing = false
>2. [3,_,_,_,3] if all values in the middle aren't 3, then it will return **false**; i.e. !== 3 = false
>3. [5,_,_,_,-5] if middle values are not decreasing then it will return **false**; i.e. increasing = false

### Clarifying Questions

> is empty array monotonic -> **yes**
> is an array with one integer monotonic -> **yes**
