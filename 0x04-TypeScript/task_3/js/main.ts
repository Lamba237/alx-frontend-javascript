/// <amd-dependency path="crud.d.ts"/>
import { RowID, RowElement } from "./interface";
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };

// call updateRow function
CRUD.updateRow(newRowID, updatedRow);

// call deleteRow function
CRUD.deleteRow(newRowID);
