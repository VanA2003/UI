// // function createStorages(key) {
// //     const store = JSON.parse(localStorage.getItem(key)) ?? {}
// //     const save = () => {
// //         localStorage.setItem(key,JSON.stringify(store))
// //     }
// //     const storage = {
// //         get(key) {
// //             return store[key]
// //         },
// //         set(key,value) {
// //             store[key] = value
// //             save()
// //         },
// //         remove(key) {
// //             delete store[key]
// //             save()
// //         }
// //     }
   
// //     return storage
// // }

// // const profileSetting = createStorages('Profile')
// // profileSetting.set('age',20)
// // profileSetting.set('name','A')
// // profileSetting.set('address','BD')
// // profileSetting.set('email','abc@')
// // profileSetting.get('age')
// // profileSetting.get('name')
// // profileSetting.get('address')
// // profileSetting.get('email')

// function createApp() {
//     const cars = []
//     return {
//         add(car) {
//             cars.push(car)
//         },
//         show() {
//             console.log(cars)
//         }
//     }
// }
// const app = createApp()
// app.add('BMW')
// app.add('BMW')
// app.add('BMW')
// app.add('BMW')
// app.show()

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')
const tabActive = $('.tab-item.active')
const line = $('.tabs .line')
    line.style.left = tabActive.offsetLeft + 'px'
    line.style.width = tabActive.offsetWidth + 'px'
tabs.forEach((tab,index) => {
    const pane = panes[index]
    tab.onclick = function() {
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        this.classList.add('active')
        pane.classList.add('active')

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

    }
});