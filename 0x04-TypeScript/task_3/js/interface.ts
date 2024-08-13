// task_3/js/interface.ts

/**
 * Type alias for RowID.
 */
export type RowID = number;

/**
 * Interface representing a row element.
 */
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
