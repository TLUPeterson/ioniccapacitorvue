
# React vs Vue

  - JSX/HTML
  - easier learning curve

##
### Hello World!
- React.js
```react.js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```
###
- Vue.js
```vue.js
<div id="app">
  {{ message }}
</div>

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})
var
```
## Vue omapära
Vue atribuudid (reactive behaviour)
```vue.js
<div id="app">
   <span v-if="seen">Now you see me</span>
</div>  
```
```vue.js
var app = new Vue({
  el: '#app',
  data: {
    seen: true
  }
})

```
Loop
- Vue
```vue.js
<ul>
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
```
```vue.js
items: [
  { message: 'Foo' },
  { message: 'Bar' }
]

```
##
- React
```react.js
const items = [
        { message: 'Foo' },
        { message: 'Bar' }
];

function App() {
  return (
    <div>
      {items.map((message, index) => (
        <li key={index}>
          {message}
        </li>
      ))}
    </div>
  );
}
```





