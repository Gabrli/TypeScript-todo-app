import { Category } from "../categories/categories";

export interface Task {
  title: string;
  done: boolean;
  id: number;
  category?: Category;
}
