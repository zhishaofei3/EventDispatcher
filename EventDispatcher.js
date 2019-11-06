/**
 * 事件分发类，基于three.js Core/EventDispatcher.js
 */
export default class EventDispatcher {
  constructor() {
  }

  addEventListener(type, listener) {
    if (this._listeners === undefined) this._listeners = {}
    let listeners = this._listeners
    if (listeners[type] === undefined) {
      listeners[type] = []
    }
    if (listeners[type].indexOf(listener) === -1) {
      listeners[type].push(listener)
    }
  }

  hasEventListener(type, listener) {
    if (this._listeners === undefined) return false
    let listeners = this._listeners
    if (listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1) {
      return true
    }
    return false
  }

  removeEventListener(type, listener) {
    if (this._listeners === undefined) return
    let listeners = this._listeners
    let listenerArray = listeners[type]
    if (listenerArray !== undefined) {
      let index = listenerArray.indexOf(listener)
      if (index !== -1) {
        listenerArray.splice(index, 1)
      }
    }
  }

  dispatchEvent(event) {
    if (this._listeners === undefined) return
    let listeners = this._listeners
    let listenerArray = listeners[event.type]
    if (listenerArray !== undefined) {
      event.target = this
      let array = []
      let length = listenerArray.length
      for (let i = 0; i < length; i++) {
        array[i] = listenerArray[i]
      }
      for (let i = 0; i < length; i++) {
        array[i].call(this, event)
      }
    }
  }
}