figma.showUI(__html__);

figma.ui.onmessage = async  msg => {

  const local_vars = figma.variables.getLocalVariables()
  const modeID = figma.variables.getLocalVariableCollections()[0].defaultModeId

  let vars = []
  for(let local of local_vars) {
    vars.push({name: local.name, value: local.valuesByMode[modeID]})
  }

  console.log(vars);

  figma.closePlugin();
};
