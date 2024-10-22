// task/task.model.ts
export interface Task {
    id: number;
    title: string;
    status: 'pending' | 'complete';
    type: 'work' | 'personal' | 'shopping'; // Different types of tasks
  }
  