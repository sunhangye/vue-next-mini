/**
 * 判断是否是一个数组
 */
export let IsArray: (arg: any) => arg is any[]
IsArray = Array.isArray