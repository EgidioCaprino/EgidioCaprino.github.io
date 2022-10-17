---
layout: post
title:  "LRU cache in Go"
---
I recently received an interesting coding challenge from [Daily Coding Problem](https://www.dailycodingproblem.com/)
asking to implement an LRU cache with constant time complexity for both the _get_ and _set_ operations.

An LRU cache is cache structure with a maximum capacity. When adding a new element, if the maximum capacity is exceeded, the last recently used item will be removed from the cache.

To access elements in constant time we need a map. We also need to keep track of the order in which we set and get elements so we can remove the last recently used element when the maximum capacity is exceeded. Maps are not sorted. For achieving that we need another data structure: a list. So we are going to use:

- a map for accessing elements in constant time given the key,
- a list for keeping track of the order in which elements are accessed.

An hash map has constant time for both the _get_ and _set_ operations and that is all we need from it.
What about the list? What kind of operations we need to perform on it?

- When a new item is added, we need to **add** it to the top of the list.
- When an item is updated, we need to **move** it to the top of the list.
- When the maximum capacity is exceeded we need to remove the last element from the list.

We cannot do that in constant time with an array-based list. Adding or moving an element to the top of the list will
require to shift all the existing element. For achieving that we are going to use a linked list, specifically a doubly
linked list.

<img src="/articles/4/doubly-linked-list.jpeg" class="img-fluid mb-3" alt="Doubly Linked List">

In this particular list we have pointers to both the front and the bottom of the list. Furthermore, **given an element**,
moving it to the front or the bottom of the list has constant time complexity. We need to already have the element,
otherwise we would need to scan the list to find it. For this reason we are going to store list's elements in the hash
map. So the algorithm is the following.

Setting an item:

- if the item is new, create a new element at the front of the linked list and store it in the hash map;
- if the item already exists, find the linked list value in the hash map, update its value and move it to the front of
the list.

Accessing an item:

- find the linked list item in the hash map, move it to the front of the list and return the value to the caller.

You can find my implementation and related unit tests in Go (Golang)
[here](https://github.com/EgidioCaprino/al-go-rithms/tree/master/lru).
