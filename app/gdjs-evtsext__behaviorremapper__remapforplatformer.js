
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer = gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer || {};

/**
 * Behavior generated from Platformer keyboard mapper
 */
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer = class RemapForPlatformer extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Up = behaviorData.Up !== undefined ? behaviorData.Up : "";
    this._behaviorData.Left = behaviorData.Left !== undefined ? behaviorData.Left : "";
    this._behaviorData.Down = behaviorData.Down !== undefined ? behaviorData.Down : "";
    this._behaviorData.Right = behaviorData.Right !== undefined ? behaviorData.Right : "";
    this._behaviorData.Jump = behaviorData.Jump !== undefined ? behaviorData.Jump : "";
    this._behaviorData.Platformer = behaviorData.Platformer !== undefined ? behaviorData.Platformer : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Up !== newBehaviorData.Up)
      this._behaviorData.Up = newBehaviorData.Up;
    if (oldBehaviorData.Left !== newBehaviorData.Left)
      this._behaviorData.Left = newBehaviorData.Left;
    if (oldBehaviorData.Down !== newBehaviorData.Down)
      this._behaviorData.Down = newBehaviorData.Down;
    if (oldBehaviorData.Right !== newBehaviorData.Right)
      this._behaviorData.Right = newBehaviorData.Right;
    if (oldBehaviorData.Jump !== newBehaviorData.Jump)
      this._behaviorData.Jump = newBehaviorData.Jump;
    if (oldBehaviorData.Platformer !== newBehaviorData.Platformer)
      this._behaviorData.Platformer = newBehaviorData.Platformer;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Up: this._behaviorData.Up,
    Left: this._behaviorData.Left,
    Down: this._behaviorData.Down,
    Right: this._behaviorData.Right,
    Jump: this._behaviorData.Jump,
    Platformer: this._behaviorData.Platformer,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Up !== undefined)
      this._behaviorData.Up = networkSyncData.props.Up;
    if (networkSyncData.props.Left !== undefined)
      this._behaviorData.Left = networkSyncData.props.Left;
    if (networkSyncData.props.Down !== undefined)
      this._behaviorData.Down = networkSyncData.props.Down;
    if (networkSyncData.props.Right !== undefined)
      this._behaviorData.Right = networkSyncData.props.Right;
    if (networkSyncData.props.Jump !== undefined)
      this._behaviorData.Jump = networkSyncData.props.Jump;
    if (networkSyncData.props.Platformer !== undefined)
      this._behaviorData.Platformer = networkSyncData.props.Platformer;
  }

  // Properties:
  
  _getUp() {
    return this._behaviorData.Up !== undefined ? this._behaviorData.Up : "";
  }
  _setUp(newValue) {
    this._behaviorData.Up = newValue;
  }
  _getLeft() {
    return this._behaviorData.Left !== undefined ? this._behaviorData.Left : "";
  }
  _setLeft(newValue) {
    this._behaviorData.Left = newValue;
  }
  _getDown() {
    return this._behaviorData.Down !== undefined ? this._behaviorData.Down : "";
  }
  _setDown(newValue) {
    this._behaviorData.Down = newValue;
  }
  _getRight() {
    return this._behaviorData.Right !== undefined ? this._behaviorData.Right : "";
  }
  _setRight(newValue) {
    this._behaviorData.Right = newValue;
  }
  _getJump() {
    return this._behaviorData.Jump !== undefined ? this._behaviorData.Jump : "";
  }
  _setJump(newValue) {
    this._behaviorData.Jump = newValue;
  }
  _getPlatformer() {
    return this._behaviorData.Platformer !== undefined ? this._behaviorData.Platformer : "";
  }
  _setPlatformer(newValue) {
    this._behaviorData.Platformer = newValue;
  }
}

/**
 * Shared data generated from Platformer keyboard mapper
 */
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.SharedData = class RemapForPlatformerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._BehaviorRemapper_RemapForPlatformerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._BehaviorRemapper_RemapForPlatformerSharedData = new gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.SharedData(
      initialData
    );
  }
  return instanceContainer._BehaviorRemapper_RemapForPlatformerSharedData;
}

// Methods:
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUp());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Platformer")).simulateUpKey();
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Platformer")).simulateLadderKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Platformer")).simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRight());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Platformer")).simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDown());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Platformer")).simulateDownKey();
}
}{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Platformer")).simulateReleaseLadderKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJump());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Platformer")).simulateJumpKey();
}
}}

}


};

gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Platformer": this._getPlatformer()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BehaviorRemapper"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BehaviorRemapper"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetCustomContext = {};
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetCustomContext.GDObjectObjects1= [];
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetCustomContext.GDObjectObjects2= [];


gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetCustomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(32381796);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUp(eventsFunctionContext.getArgument("up"))
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeft(eventsFunctionContext.getArgument("left"))
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRight(eventsFunctionContext.getArgument("right"))
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDown(eventsFunctionContext.getArgument("down"))
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJump(eventsFunctionContext.getArgument("jump"))
}}

}


};

gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetCustom = function(up, left, down, right, jump, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Platformer": this._getPlatformer()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BehaviorRemapper"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BehaviorRemapper"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "up") return up;
if (argName === "left") return left;
if (argName === "down") return down;
if (argName === "right") return right;
if (argName === "jump") return jump;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetCustomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetCustomContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetCustomContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetCustomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetCustomContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetPresetContext = {};
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetPresetContext.GDObjectObjects1= [];
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetPresetContext.GDObjectObjects2= [];


gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetPresetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("options") == "WASD");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUp("w")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeft("a")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDown("s")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRight("d")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJump("Space")
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("options") == "ZQSD");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUp("z")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeft("q")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDown("s")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRight("d")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJump("Space")
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("options") == "Numpad");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUp("NumpadUp")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeft("NumpadLeft")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDown("NumpadDown")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRight("NumpadRight")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJump("NumpadReturn")
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("options") == "IJKL");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUp("i")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeft("j")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDown("k")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRight("l")
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJump("Return")
}}

}


};

gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetPreset = function(options, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Platformer": this._getPlatformer()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BehaviorRemapper"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BehaviorRemapper"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "options") return options;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetPresetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetPresetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetPresetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetPresetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer.prototype.SetPresetContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("BehaviorRemapper::RemapForPlatformer", gdjs.evtsExt__BehaviorRemapper__RemapForPlatformer.RemapForPlatformer);
