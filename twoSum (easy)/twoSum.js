/* First attempt - solve the problem
i and j iterators that spin through indices, add the numbers together and check for a match.

Very quick and easy solution - unfortunately when you get a big dataset it fails due to time restraints.
*/

/* Second attempt - refine
used const hash = new Map() to create a map.
Comparing target - n to find a complement within the map.

Good solution, passes all tests, but could be better.
*/

/* Final attempt - solve

As above, creating a hash table, except instead of using a Map object we create a raw object and construct it manually.
Much faster but is less type safe.

*/