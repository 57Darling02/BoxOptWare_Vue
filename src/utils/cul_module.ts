import {  type FormData, type finalResult } from '@/type'
import type { module_container } from './show3d';


export const modulecenter = (module_containers:module_container[]):[x: number, y: number, z: number] => {
    let sumX = 0;
    let sumY = 0;
    let sumZ = 0;
    const allObjects = [
      ...module_containers,
    ];
  
    if (allObjects.length === 0) {
      return [0, 0, 0]; // 如果没有物体，返回 [0, 0, 0]
    }
  
    for (const obj of allObjects) {
      const [X, Y, Z] = obj.centerPosition;
      sumX += X;
      sumY += Y;
      sumZ += Z;
    }
  
    const count = allObjects.length;
    const centerX = sumX / count;
    const centerY = sumY / count;
    const centerZ = sumZ / count;
    return [centerX, centerY, centerZ];

  };

export const MainCalculate = (input: FormData): Promise<finalResult> => {
    return new Promise((resolve, reject) => {
      // 创建Worker实例 
      const worker = new Worker(
        new URL('@/workers/block.worker.ts',  import.meta.url),
        { type: 'module' }
      )
      // 设置消息监听 
      worker.onmessage  = (e: MessageEvent<{
        type: 'SUCCESS' | 'ERROR',
        data?: finalResult,
        error?: string 
      }>) => {
        if (e.data.type  === 'SUCCESS') {
          resolve(e.data.data!) 
          worker.terminate() 
        } else {
          reject(new Error(e.data.error)) 
          worker.terminate() 
        }
      }
      // 发送计算请求 
      worker.postMessage({  
        type: 'CALCULATE',
        data: JSON.parse(JSON.stringify(input))
      })
    })
  }
