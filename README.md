## ES6 EventDispatcher

**Code Example**
```javascript
import EventDispatcher from "@zhishaofei3/eventdispatcher"

class MyClass extends EventDispatcher {
}

const myClass  = new MyClass()

function onEventHandler() {
}

// API
myClass.addEventListener('eventName', onEventHandler)
myClass.hasEventListener('eventName', onEventHandler) // true
myClass.dispatchEvent({type: 'eventName'})
myClass.dispatchEvent({type: 'eventName', moreData: {}})
myClass.removeEventListener('eventName', onEventHandler)
myClass.removeAllEventListener()
```
