"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preTasksExecution = preTasksExecution;
exports.postTasksExecution = postTasksExecution;
const tslib_1 = require("tslib");
function preTasksExecution(options, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        console.log('----------------------------------- ### Pre tasks execution started ### -----------------------------------');
        console.log('context', context);
        console.log('options', options);
        console.log('----------------------------------- ### Pre tasks execution ended ### -----------------------------------');
    });
}
;
function postTasksExecution(options, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        console.log('----------------------------------- ### Post tasks execution started ### -----------------------------------');
        console.log('context', context);
        console.log('options', options);
        console.log('----------------------------------- ### Post tasks execution ended ### -----------------------------------');
    });
}
;
//# sourceMappingURL=index.js.map