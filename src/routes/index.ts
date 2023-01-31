import { Express, Request, Response, Router } from 'express'
import commonRes from '../utils/commenRes';
import silentHandle from '../utils/silentHandle'

// 路由配置接口
interface RouterConf {
    path: string,
    router: Router,
    meta?: unknown;
}

// 路由配置
const routerConf: Array<RouterConf> = []

const getInfo = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > .5 ? resolve('info...') : reject('error...')
        }, 500)
    })
}


function routes(app: Express) {
    // 根目录
    app.get('/', async (req: Request, res: Response) => {
        const [e, result] = await silentHandle(getInfo)
        e ? commonRes.error(res, null) : commonRes(res, { result })
    })


    routerConf.forEach((conf) => app.use(conf.path, conf.router))
}

export default routes
