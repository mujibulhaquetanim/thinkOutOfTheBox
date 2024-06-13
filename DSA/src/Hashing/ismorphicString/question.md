# Question & conditions

Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while reserving the order of characters. No two characters may map to the same character, but a character may map to itself. s and t consist of any valid ascii character:

## examples

s = "asts"
t = "rata"
here, s->a mapped for the both s, but, other characters aren't mapped to the same. so, true.

s= "rata"
t="datd"
here, d is mapped to two characters, which can't be replaced. so, false.

s="abc"
t="qa"
length are not same, so false.

s="abc"
t="sku"
no match, so false.
