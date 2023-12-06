figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  const local_vars = figma.variables.getLocalVariables();
  const local_collections = figma.variables.getLocalVariableCollections();

  let vars = [];

  for(let collection of local_collections){
    let modeID = collection.defaultModeId
    let collectionID = collection.id

    for (let local of local_vars) {

      if(local.variableCollectionId == collectionID) {
        vars.push({name: local.name, value: local.valuesByMode[modeID]})
      }

    }
  }

  console.log(vars);

  figma.closePlugin();
};
