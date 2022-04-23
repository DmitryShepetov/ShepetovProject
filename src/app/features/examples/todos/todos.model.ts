export interface Todo {
  id: string;
  name: string;
  done: boolean;
}
export interface TodoView{
  id: string;
  name: string;
}
export type TodosFilter = 'ALL' | 'DONE' | 'ACTIVE';

export interface TodosState {
  items: Todo[];
  filter: TodosFilter;
}
