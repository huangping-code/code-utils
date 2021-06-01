// # 防抖和节流函数

/**
 * 防抖 延迟指定时间time后执行函数fn，如果指定时间time内再次触发函数fn，则重新计算时间,即高频触发fn时只执行最后一次
 * @param {Function} fn 要触发的函数
 * @param {Number} time 指定时间
 * @returns {Function}
 */
export const debounce = (fn, time = 300) => {
    let timer = null
    return function (...args) {
        timer !== null && clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            fn.call(this, ...args)
        }, time)
    }
}

/**
 * 节流 高频触发函数fn，在指定时间time内只执行一次
 * @param {Function} fn 触发的函数
 * @param {Number} time 指定时间
 * @returns {Function}
 */
export const throttle = (fn, time = 300) => {
    let isRuning = false
    return function(...args){
        if(isRuning){
            return
        }
        isRuning = true
        fn.call(this, ...args)
        setTimeout(() => {
            isRuning = false
        }, time)
    }
}
