// Promise 應用
// promise 物件建立
// promise function 回傳 promise 物件
// then 用法串接 (只要回傳結果為promise物件即可用)
// Promise.all (避免使用，一次性發過多AJAX)
// 一次送出去，需等全部回來才動作，無法控制順序
// Promise.race 只看首個完成的 (較少用)

const p1 = new Promise((resolve, reject) => {
  // 條件: 完成 setTimeout 或 API 取得資料
  if (true) { resolve('OK') }
  else { reject(new Error('ERROR')) }
})

const promiseFunc = function (url) {
  return new Promise((resolve, reject) => {
    // 條件: 完成 setTimeout 或 API 取得資料
    if (true) { resolve('OK') }
    else { reject(new Error('ERROR')) }
  })
}
promise.then((result) => {
  console.log(result)
  return someFunc()
}).catch((err) => { console.error(err) })

Promise.all([funcA(), funcB()])
  .then((result) => {
    console.log(result)
  }).catch((err) => { console.error(err) })

// xhr + promise
// 宣告成 promise 物件
// 將 response 轉成物件後，resolve 傳至 result
const test = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest()
  const url = 'https://jsonplaceholder.typicode.com/users'
  xhr.open('GET', url, true)
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      console.table(JSON.parse(xhr.response))
      resolve(JSON.parse(xhr.response))
    } else {
      reject(new Error(`連結失敗${xhr.status}`))
    }
  }
  xhr.send(null)
})

test.then((result) => {
  console.table(result)
}).catch((err) => { console.error(err) })


///rxjs 用在 promise
import { from } from 'rxjs';

// Create an Observable out of a promise
const data = from(fetch('/api/endpoint'));
// Subscribe to begin listening for async result
data.subscribe({
  next(response) { console.log(response); },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('Completed'); }
});