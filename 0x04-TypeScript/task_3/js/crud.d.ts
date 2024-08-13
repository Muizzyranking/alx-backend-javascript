// task_3/js/crud.d.ts

/// <reference path="./interface.ts" />

import { RowID, RowElement } from './interface';

/**
 * Function to insert a row.
 * @param row - The row to insert.
 * @returns The generated row ID.
 */
export declare function insertRow(row: RowElement): RowID;

/**
 * Function to delete a row by its ID.
 * @param rowId - The ID of the row to delete.
 */
export declare function deleteRow(rowId: RowID): void;

/**
 * Function to update a row by its ID.
 * @param rowId - The ID of the row to update.
 * @param row - The new row data.
 * @returns The row ID.
 */
export declare function updateRow(rowId: RowID, row: RowElement): RowID;
