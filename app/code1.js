gdjs.endCode = {};
gdjs.endCode.localVariables = [];
gdjs.endCode.GDOrangeBubbleButtonObjects1= [];
gdjs.endCode.GDOrangeBubbleButtonObjects2= [];
gdjs.endCode.GDburger_9595huntObjects1= [];
gdjs.endCode.GDburger_9595huntObjects2= [];
gdjs.endCode.GDDiegoObjects1= [];
gdjs.endCode.GDDiegoObjects2= [];
gdjs.endCode.GDBurgerObjects1= [];
gdjs.endCode.GDBurgerObjects2= [];
gdjs.endCode.GDNinjaFrogObjects1= [];
gdjs.endCode.GDNinjaFrogObjects2= [];
gdjs.endCode.GDHeart2Objects1= [];
gdjs.endCode.GDHeart2Objects2= [];
gdjs.endCode.GDChickenObjects1= [];
gdjs.endCode.GDChickenObjects2= [];
gdjs.endCode.GDAngryPigObjects1= [];
gdjs.endCode.GDAngryPigObjects2= [];
gdjs.endCode.GDChameleonObjects1= [];
gdjs.endCode.GDChameleonObjects2= [];
gdjs.endCode.GDCatObjects1= [];
gdjs.endCode.GDCatObjects2= [];
gdjs.endCode.GDDogObjects1= [];
gdjs.endCode.GDDogObjects2= [];


gdjs.endCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OrangeBubbleButton"), gdjs.endCode.GDOrangeBubbleButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.endCode.GDOrangeBubbleButtonObjects1.length;i<l;++i) {
    if ( gdjs.endCode.GDOrangeBubbleButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.endCode.GDOrangeBubbleButtonObjects1[k] = gdjs.endCode.GDOrangeBubbleButtonObjects1[i];
        ++k;
    }
}
gdjs.endCode.GDOrangeBubbleButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 01", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect5", false, 20, 1);
}}

}


};

gdjs.endCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.endCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.endCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.endCode.GDburger_9595huntObjects1.length = 0;
gdjs.endCode.GDburger_9595huntObjects2.length = 0;
gdjs.endCode.GDDiegoObjects1.length = 0;
gdjs.endCode.GDDiegoObjects2.length = 0;
gdjs.endCode.GDBurgerObjects1.length = 0;
gdjs.endCode.GDBurgerObjects2.length = 0;
gdjs.endCode.GDNinjaFrogObjects1.length = 0;
gdjs.endCode.GDNinjaFrogObjects2.length = 0;
gdjs.endCode.GDHeart2Objects1.length = 0;
gdjs.endCode.GDHeart2Objects2.length = 0;
gdjs.endCode.GDChickenObjects1.length = 0;
gdjs.endCode.GDChickenObjects2.length = 0;
gdjs.endCode.GDAngryPigObjects1.length = 0;
gdjs.endCode.GDAngryPigObjects2.length = 0;
gdjs.endCode.GDChameleonObjects1.length = 0;
gdjs.endCode.GDChameleonObjects2.length = 0;
gdjs.endCode.GDCatObjects1.length = 0;
gdjs.endCode.GDCatObjects2.length = 0;
gdjs.endCode.GDDogObjects1.length = 0;
gdjs.endCode.GDDogObjects2.length = 0;

gdjs.endCode.eventsList0(runtimeScene);
gdjs.endCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.endCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.endCode.GDburger_9595huntObjects1.length = 0;
gdjs.endCode.GDburger_9595huntObjects2.length = 0;
gdjs.endCode.GDDiegoObjects1.length = 0;
gdjs.endCode.GDDiegoObjects2.length = 0;
gdjs.endCode.GDBurgerObjects1.length = 0;
gdjs.endCode.GDBurgerObjects2.length = 0;
gdjs.endCode.GDNinjaFrogObjects1.length = 0;
gdjs.endCode.GDNinjaFrogObjects2.length = 0;
gdjs.endCode.GDHeart2Objects1.length = 0;
gdjs.endCode.GDHeart2Objects2.length = 0;
gdjs.endCode.GDChickenObjects1.length = 0;
gdjs.endCode.GDChickenObjects2.length = 0;
gdjs.endCode.GDAngryPigObjects1.length = 0;
gdjs.endCode.GDAngryPigObjects2.length = 0;
gdjs.endCode.GDChameleonObjects1.length = 0;
gdjs.endCode.GDChameleonObjects2.length = 0;
gdjs.endCode.GDCatObjects1.length = 0;
gdjs.endCode.GDCatObjects2.length = 0;
gdjs.endCode.GDDogObjects1.length = 0;
gdjs.endCode.GDDogObjects2.length = 0;


return;

}

gdjs['endCode'] = gdjs.endCode;
