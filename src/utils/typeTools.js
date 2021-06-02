// # 类型判断一系列工具

const toString = Object.prototype.toString
/**
 * 获取一个值的type
 * 返回Object.prototype.toString.call(val) 的type部分
 * @param {*} val 
 * @returns type eg: Undefined、Null、String、Number、Object、Array、RegExp、Date等
 */
export const getType = val => toString.call(val).slice(8,-1)

export const isString = val => typeof val === 'string'

export const isNumber = val => Number.isFinite(val) && getType(val) === 'Number'

export const isUndefined = val => val === undefined

export const isNull = val => val === null

export const isObject = val => getType(val) === 'Object'

export const isArray = val => Array.isArray(val)

export const isDate = val => getType(val) === 'Date'

export const isRegExp = val => getType(val) === 'RegExp'




console.log('isDate', isDate(new Date));