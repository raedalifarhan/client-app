import { Pagination } from './pagination';
export class Result<T> {
    value: T[] = []
    pagination: Pagination = new Pagination()
}