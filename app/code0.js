gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDOrangeBubbleButtonObjects1= [];
gdjs.menuCode.GDOrangeBubbleButtonObjects2= [];
gdjs.menuCode.GDburger_9595huntObjects1= [];
gdjs.menuCode.GDburger_9595huntObjects2= [];
gdjs.menuCode.GDDiegoObjects1= [];
gdjs.menuCode.GDDiegoObjects2= [];
gdjs.menuCode.GDBurgerObjects1= [];
gdjs.menuCode.GDBurgerObjects2= [];
gdjs.menuCode.GDNinjaFrogObjects1= [];
gdjs.menuCode.GDNinjaFrogObjects2= [];
gdjs.menuCode.GDHeart2Objects1= [];
gdjs.menuCode.GDHeart2Objects2= [];
gdjs.menuCode.GDChickenObjects1= [];
gdjs.menuCode.GDChickenObjects2= [];
gdjs.menuCode.GDAngryPigObjects1= [];
gdjs.menuCode.GDAngryPigObjects2= [];
gdjs.menuCode.GDChameleonObjects1= [];
gdjs.menuCode.GDChameleonObjects2= [];
gdjs.menuCode.GDCatObjects1= [];
gdjs.menuCode.GDCatObjects2= [];
gdjs.menuCode.GDDogObjects1= [];
gdjs.menuCode.GDDogObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OrangeBubbleButton"), gdjs.menuCode.GDOrangeBubbleButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDOrangeBubbleButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDOrangeBubbleButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDOrangeBubbleButtonObjects1[k] = gdjs.menuCode.GDOrangeBubbleButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDOrangeBubbleButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 01", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect5", false, 20, 1);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.menuCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.menuCode.GDburger_9595huntObjects1.length = 0;
gdjs.menuCode.GDburger_9595huntObjects2.length = 0;
gdjs.menuCode.GDDiegoObjects1.length = 0;
gdjs.menuCode.GDDiegoObjects2.length = 0;
gdjs.menuCode.GDBurgerObjects1.length = 0;
gdjs.menuCode.GDBurgerObjects2.length = 0;
gdjs.menuCode.GDNinjaFrogObjects1.length = 0;
gdjs.menuCode.GDNinjaFrogObjects2.length = 0;
gdjs.menuCode.GDHeart2Objects1.length = 0;
gdjs.menuCode.GDHeart2Objects2.length = 0;
gdjs.menuCode.GDChickenObjects1.length = 0;
gdjs.menuCode.GDChickenObjects2.length = 0;
gdjs.menuCode.GDAngryPigObjects1.length = 0;
gdjs.menuCode.GDAngryPigObjects2.length = 0;
gdjs.menuCode.GDChameleonObjects1.length = 0;
gdjs.menuCode.GDChameleonObjects2.length = 0;
gdjs.menuCode.GDCatObjects1.length = 0;
gdjs.menuCode.GDCatObjects2.length = 0;
gdjs.menuCode.GDDogObjects1.length = 0;
gdjs.menuCode.GDDogObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.menuCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.menuCode.GDburger_9595huntObjects1.length = 0;
gdjs.menuCode.GDburger_9595huntObjects2.length = 0;
gdjs.menuCode.GDDiegoObjects1.length = 0;
gdjs.menuCode.GDDiegoObjects2.length = 0;
gdjs.menuCode.GDBurgerObjects1.length = 0;
gdjs.menuCode.GDBurgerObjects2.length = 0;
gdjs.menuCode.GDNinjaFrogObjects1.length = 0;
gdjs.menuCode.GDNinjaFrogObjects2.length = 0;
gdjs.menuCode.GDHeart2Objects1.length = 0;
gdjs.menuCode.GDHeart2Objects2.length = 0;
gdjs.menuCode.GDChickenObjects1.length = 0;
gdjs.menuCode.GDChickenObjects2.length = 0;
gdjs.menuCode.GDAngryPigObjects1.length = 0;
gdjs.menuCode.GDAngryPigObjects2.length = 0;
gdjs.menuCode.GDChameleonObjects1.length = 0;
gdjs.menuCode.GDChameleonObjects2.length = 0;
gdjs.menuCode.GDCatObjects1.length = 0;
gdjs.menuCode.GDCatObjects2.length = 0;
gdjs.menuCode.GDDogObjects1.length = 0;
gdjs.menuCode.GDDogObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
