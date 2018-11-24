import fetch from 'node-fetch';

const baseUrl = "http://localhost:5000/api/v1/";

export function  getPosts() {
  return fetch(baseUrl+'posts').then(res => res.json());
}
export function updatePosts(posts) {
  return fetch(baseUrl+'posts', { 
    method: 'post', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(posts)
  }).then(res => res.json());
}
