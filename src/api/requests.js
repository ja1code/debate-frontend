import axios from "axios"
const baseUrl = "https://api.altiorem.dev"
//const baseUrl = "http://192.168.15.9:8888"

export function fetchInitialData() {
  return axios.get(baseUrl+'/feed')
} 

export function login(user) {
  return axios.post(baseUrl+'/login', user)
}

export function post(post) {
  return axios.post(baseUrl+'/post', post)
}