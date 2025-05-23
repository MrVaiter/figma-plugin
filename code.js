"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const local_vars = figma.variables.getLocalVariables();
    const local_collections = figma.variables.getLocalVariableCollections();
    let vars = [];
    for (let collection of local_collections) {
        let modeID = collection.defaultModeId;
        let collectionID = collection.id;
        for (let local of local_vars) {
            if (local.variableCollectionId == collectionID) {
                vars.push({ name: local.name, value: local.valuesByMode[modeID] });
            }
        }
    }
    console.log(vars);
    figma.closePlugin();
});
