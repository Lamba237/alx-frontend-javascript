/// <reference path="./task_3/js/crud.d.ts" />

import { insertRow } from "./crud";
import { RowID, RowElement } from "./interface";
import * as CRUD from "./task_3/js/CRUD";

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
    ...row,
    age: 23
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
