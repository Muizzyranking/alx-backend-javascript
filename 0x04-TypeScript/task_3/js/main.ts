// task_3/js/main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

/**
 * Create an object called row with the type RowElement.
 */
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};
// const obj = {firstName: "Guillaume", lastName: "Salva"};

/**
 * Insert the row and get the new row ID.
 */
const newRowID: RowID = CRUD.insertRow(row);
// CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

/**
 * Update the row with an additional age field.
 */
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
// CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

/**
 * Delete the row.
 */
CRUD.deleteRow(newRowID);
// CRUD.deleteRow(125);
// // Delete row id 125
