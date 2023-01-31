// constants/code.ts

// 枚举状态码 根据自己需要定义
enum Code {
    success = 1,
    denied = 0,
    error = 2
}

enum CodeMessage {
    success = '请求成功',
    denied = '无权限',
    error = '系统异常'
}

// 状态类型 只能是Code中所枚举的状态
type codeType = keyof typeof Code

export { Code, codeType, CodeMessage }