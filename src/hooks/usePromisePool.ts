type Task = () => Promise<any>;
type TaskResult = { state: 'fulfilled'; data: any } | { state: 'rejected'; error: any };
type PoolState = {
  max: number;             // 最大并发数
  num: number;             // 当前并发数
  index: number;           // 用于保证结果顺序
  result: TaskResult[];    // 保存任务结果
  taskList: Task[];        // 任务队列
  promise: Promise<TaskResult[]> | null; // 保存Promise，确保多次调用返回相同的Promise
};

// 创建一个新的请求池
const createPool = (max: number): PoolState => ({
  max,
  num: 0,
  index: 0,
  result: [],
  taskList: [],
  promise: null
});

// 添加任务到池中
const addTask = (pool: PoolState, item: Task | Task[]): PoolState => {
  const tasks = Array.isArray(item) ? item : [item];
  return {
    ...pool,
    taskList: [...pool.taskList, ...tasks]
  };
};

// 执行任务
const executeTask = (task: Task, index: number, pool: PoolState) => {
  return task().then(
    data => ({ state: 'fulfilled', data }),
    error => ({ state: 'rejected', error })
  ).finally(() => {
    // 更新池状态
    pool.result[index] = pool.result[index] || { state: 'fulfilled', data: undefined };
    pool.num--;
  });
};

// 执行请求池中的任务
const startPool = (pool: PoolState): Promise<TaskResult[]> => {
  // 如果任务池已经开始，直接返回当前的Promise
  if (pool.promise) return pool.promise;

  const start = () => {
    return new Promise<TaskResult[]>((resolve) => {
      // 开始执行任务：限制最大并发数
      const nextTask = () => {
        // 如果当前有任务并且并发数小于最大并发数，则继续执行
        if (pool.taskList.length && pool.num < pool.max) {
          const task = pool.taskList.shift()!;
          pool.num++;
          executeTask(task, pool.index, pool).then(() => {
            // 更新池的索引
            pool.index++;
            // 任务完成后，继续执行剩余任务
            nextTask();
          });
          // 任务完成后，继续执行剩余任务
          nextTask();

        }

        // 如果所有任务都完成，则resolve结果
        if (pool.num === 0 && pool.taskList.length === 0) {
          resolve(pool.result);
        }
      };

      nextTask();
    });
  };

  // 设置池的Promise，确保多次调用`start`会返回相同的Promise
  return pool.promise = start();
};

// `usePromisePool` 示例：可以在多个任务集之间重用池
export const usePromisePool = (maxConcurrency: number=5) => {
  // 创建请求池
  let pool = createPool(maxConcurrency);

  // 添加任务
  const addTaskToPool = (task: Task | Task[]): void => {
    pool = addTask(pool, task);
  };

  // 开始池并执行任务
  const start = (): Promise<TaskResult[]> => {
    return startPool(pool);
  };

  // 重置池
  const reset = (): void => {
    pool = createPool(maxConcurrency);
  };

  return {
    addTaskToPool,
    start,
    reset,
  };
};
