gdjs.level_3203Code = {};
gdjs.level_3203Code.localVariables = [];
gdjs.level_3203Code.GDDiegoObjects1= [];
gdjs.level_3203Code.GDDiegoObjects2= [];
gdjs.level_3203Code.GDgramaObjects1= [];
gdjs.level_3203Code.GDgramaObjects2= [];
gdjs.level_3203Code.GDsoloObjects1= [];
gdjs.level_3203Code.GDsoloObjects2= [];
gdjs.level_3203Code.GDBurgersObjects1= [];
gdjs.level_3203Code.GDBurgersObjects2= [];
gdjs.level_3203Code.GDBurguer_9595ScoreObjects1= [];
gdjs.level_3203Code.GDBurguer_9595ScoreObjects2= [];
gdjs.level_3203Code.GDEmptyCloudBackgroundObjects1= [];
gdjs.level_3203Code.GDEmptyCloudBackgroundObjects2= [];
gdjs.level_3203Code.GDBigGreenTree7Objects1= [];
gdjs.level_3203Code.GDBigGreenTree7Objects2= [];
gdjs.level_3203Code.GDRedHouse1Objects1= [];
gdjs.level_3203Code.GDRedHouse1Objects2= [];
gdjs.level_3203Code.GDCornerPlatformObjects1= [];
gdjs.level_3203Code.GDCornerPlatformObjects2= [];
gdjs.level_3203Code.GDDoorObjects1= [];
gdjs.level_3203Code.GDDoorObjects2= [];
gdjs.level_3203Code.GDSunObjects1= [];
gdjs.level_3203Code.GDSunObjects2= [];
gdjs.level_3203Code.GDStoneTabletObjects1= [];
gdjs.level_3203Code.GDStoneTabletObjects2= [];
gdjs.level_3203Code.GDSkullObjects1= [];
gdjs.level_3203Code.GDSkullObjects2= [];
gdjs.level_3203Code.GDGoldKeyObjects1= [];
gdjs.level_3203Code.GDGoldKeyObjects2= [];
gdjs.level_3203Code.GDCastlesBackgroundObjects1= [];
gdjs.level_3203Code.GDCastlesBackgroundObjects2= [];
gdjs.level_3203Code.GDCloud7Objects1= [];
gdjs.level_3203Code.GDCloud7Objects2= [];
gdjs.level_3203Code.GDBigGreenTree1Objects1= [];
gdjs.level_3203Code.GDBigGreenTree1Objects2= [];
gdjs.level_3203Code.GDAlternativeTowerObjects1= [];
gdjs.level_3203Code.GDAlternativeTowerObjects2= [];
gdjs.level_3203Code.GDOrangeBubbleButtonObjects1= [];
gdjs.level_3203Code.GDOrangeBubbleButtonObjects2= [];
gdjs.level_3203Code.GDZombieBoyObjects1= [];
gdjs.level_3203Code.GDZombieBoyObjects2= [];
gdjs.level_3203Code.GDExitObjects1= [];
gdjs.level_3203Code.GDExitObjects2= [];


gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDDiegoObjects1Objects = Hashtable.newFrom({"Diego": gdjs.level_3203Code.GDDiegoObjects1});
gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDBurgersObjects1Objects = Hashtable.newFrom({"Burgers": gdjs.level_3203Code.GDBurgersObjects1});
gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDDiegoObjects1Objects = Hashtable.newFrom({"Diego": gdjs.level_3203Code.GDDiegoObjects1});
gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDGoldKeyObjects1Objects = Hashtable.newFrom({"GoldKey": gdjs.level_3203Code.GDGoldKeyObjects1});
gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDDiegoObjects1Objects = Hashtable.newFrom({"Diego": gdjs.level_3203Code.GDDiegoObjects1});
gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.level_3203Code.GDDoorObjects1});
gdjs.level_3203Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Diego"), gdjs.level_3203Code.GDDiegoObjects1);
/* Reuse gdjs.level_3203Code.GDDoorObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDDiegoObjects1Objects, gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 04", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect3", false, 20, 1);
}}

}


};gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDDiegoObjects1Objects = Hashtable.newFrom({"Diego": gdjs.level_3203Code.GDDiegoObjects1});
gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDZombieBoyObjects1Objects = Hashtable.newFrom({"ZombieBoy": gdjs.level_3203Code.GDZombieBoyObjects1});
gdjs.level_3203Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "346842__kozyie__hat-films-improv-remix.mp3", true, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Diego"), gdjs.level_3203Code.GDDiegoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_3203Code.GDDiegoObjects1.length;i<l;++i) {
    if ( gdjs.level_3203Code.GDDiegoObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.level_3203Code.GDDiegoObjects1[k] = gdjs.level_3203Code.GDDiegoObjects1[i];
        ++k;
    }
}
gdjs.level_3203Code.GDDiegoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level_3203Code.GDDiegoObjects1 */
{for(var i = 0, len = gdjs.level_3203Code.GDDiegoObjects1.length ;i < len;++i) {
    gdjs.level_3203Code.GDDiegoObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Diego"), gdjs.level_3203Code.GDDiegoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_3203Code.GDDiegoObjects1.length;i<l;++i) {
    if ( !(gdjs.level_3203Code.GDDiegoObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.level_3203Code.GDDiegoObjects1[k] = gdjs.level_3203Code.GDDiegoObjects1[i];
        ++k;
    }
}
gdjs.level_3203Code.GDDiegoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level_3203Code.GDDiegoObjects1 */
{for(var i = 0, len = gdjs.level_3203Code.GDDiegoObjects1.length ;i < len;++i) {
    gdjs.level_3203Code.GDDiegoObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Diego"), gdjs.level_3203Code.GDDiegoObjects1);
{for(var i = 0, len = gdjs.level_3203Code.GDDiegoObjects1.length ;i < len;++i) {
    gdjs.level_3203Code.GDDiegoObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Diego"), gdjs.level_3203Code.GDDiegoObjects1);
{for(var i = 0, len = gdjs.level_3203Code.GDDiegoObjects1.length ;i < len;++i) {
    gdjs.level_3203Code.GDDiegoObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Diego"), gdjs.level_3203Code.GDDiegoObjects1);
{for(var i = 0, len = gdjs.level_3203Code.GDDiegoObjects1.length ;i < len;++i) {
    gdjs.level_3203Code.GDDiegoObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Diego"), gdjs.level_3203Code.GDDiegoObjects1);
{for(var i = 0, len = gdjs.level_3203Code.GDDiegoObjects1.length ;i < len;++i) {
    gdjs.level_3203Code.GDDiegoObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Burgers"), gdjs.level_3203Code.GDBurgersObjects1);
gdjs.copyArray(runtimeScene.getObjects("Diego"), gdjs.level_3203Code.GDDiegoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDDiegoObjects1Objects, gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDBurgersObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level_3203Code.GDBurgersObjects1 */
{for(var i = 0, len = gdjs.level_3203Code.GDBurgersObjects1.length ;i < len;++i) {
    gdjs.level_3203Code.GDBurgersObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 2, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Burguer_Score"), gdjs.level_3203Code.GDBurguer_9595ScoreObjects1);
{for(var i = 0, len = gdjs.level_3203Code.GDBurguer_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.level_3203Code.GDBurguer_9595ScoreObjects1[i].getBehavior("Text").setText("Burgers:" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Diego"), gdjs.level_3203Code.GDDiegoObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoldKey"), gdjs.level_3203Code.GDGoldKeyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDDiegoObjects1Objects, gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDGoldKeyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level_3203Code.GDGoldKeyObjects1 */
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}{for(var i = 0, len = gdjs.level_3203Code.GDGoldKeyObjects1.length ;i < len;++i) {
    gdjs.level_3203Code.GDGoldKeyObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect4", false, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.level_3203Code.GDDoorObjects1);
{for(var i = 0, len = gdjs.level_3203Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.level_3203Code.GDDoorObjects1[i].getBehavior("Animation").setAnimationName("Aberta");
}
}
{ //Subevents
gdjs.level_3203Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Diego"), gdjs.level_3203Code.GDDiegoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZombieBoy"), gdjs.level_3203Code.GDZombieBoyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDDiegoObjects1Objects, gdjs.level_3203Code.mapOfGDgdjs_9546level_95953203Code_9546GDZombieBoyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 03", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect2", false, 20, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OrangeBubbleButton"), gdjs.level_3203Code.GDOrangeBubbleButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_3203Code.GDOrangeBubbleButtonObjects1.length;i<l;++i) {
    if ( gdjs.level_3203Code.GDOrangeBubbleButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_3203Code.GDOrangeBubbleButtonObjects1[k] = gdjs.level_3203Code.GDOrangeBubbleButtonObjects1[i];
        ++k;
    }
}
gdjs.level_3203Code.GDOrangeBubbleButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 03", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.level_3203Code.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_3203Code.GDExitObjects1.length;i<l;++i) {
    if ( gdjs.level_3203Code.GDExitObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level_3203Code.GDExitObjects1[k] = gdjs.level_3203Code.GDExitObjects1[i];
        ++k;
    }
}
gdjs.level_3203Code.GDExitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};

gdjs.level_3203Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level_3203Code.GDDiegoObjects1.length = 0;
gdjs.level_3203Code.GDDiegoObjects2.length = 0;
gdjs.level_3203Code.GDgramaObjects1.length = 0;
gdjs.level_3203Code.GDgramaObjects2.length = 0;
gdjs.level_3203Code.GDsoloObjects1.length = 0;
gdjs.level_3203Code.GDsoloObjects2.length = 0;
gdjs.level_3203Code.GDBurgersObjects1.length = 0;
gdjs.level_3203Code.GDBurgersObjects2.length = 0;
gdjs.level_3203Code.GDBurguer_9595ScoreObjects1.length = 0;
gdjs.level_3203Code.GDBurguer_9595ScoreObjects2.length = 0;
gdjs.level_3203Code.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs.level_3203Code.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs.level_3203Code.GDBigGreenTree7Objects1.length = 0;
gdjs.level_3203Code.GDBigGreenTree7Objects2.length = 0;
gdjs.level_3203Code.GDRedHouse1Objects1.length = 0;
gdjs.level_3203Code.GDRedHouse1Objects2.length = 0;
gdjs.level_3203Code.GDCornerPlatformObjects1.length = 0;
gdjs.level_3203Code.GDCornerPlatformObjects2.length = 0;
gdjs.level_3203Code.GDDoorObjects1.length = 0;
gdjs.level_3203Code.GDDoorObjects2.length = 0;
gdjs.level_3203Code.GDSunObjects1.length = 0;
gdjs.level_3203Code.GDSunObjects2.length = 0;
gdjs.level_3203Code.GDStoneTabletObjects1.length = 0;
gdjs.level_3203Code.GDStoneTabletObjects2.length = 0;
gdjs.level_3203Code.GDSkullObjects1.length = 0;
gdjs.level_3203Code.GDSkullObjects2.length = 0;
gdjs.level_3203Code.GDGoldKeyObjects1.length = 0;
gdjs.level_3203Code.GDGoldKeyObjects2.length = 0;
gdjs.level_3203Code.GDCastlesBackgroundObjects1.length = 0;
gdjs.level_3203Code.GDCastlesBackgroundObjects2.length = 0;
gdjs.level_3203Code.GDCloud7Objects1.length = 0;
gdjs.level_3203Code.GDCloud7Objects2.length = 0;
gdjs.level_3203Code.GDBigGreenTree1Objects1.length = 0;
gdjs.level_3203Code.GDBigGreenTree1Objects2.length = 0;
gdjs.level_3203Code.GDAlternativeTowerObjects1.length = 0;
gdjs.level_3203Code.GDAlternativeTowerObjects2.length = 0;
gdjs.level_3203Code.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.level_3203Code.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.level_3203Code.GDZombieBoyObjects1.length = 0;
gdjs.level_3203Code.GDZombieBoyObjects2.length = 0;
gdjs.level_3203Code.GDExitObjects1.length = 0;
gdjs.level_3203Code.GDExitObjects2.length = 0;

gdjs.level_3203Code.eventsList1(runtimeScene);
gdjs.level_3203Code.GDDiegoObjects1.length = 0;
gdjs.level_3203Code.GDDiegoObjects2.length = 0;
gdjs.level_3203Code.GDgramaObjects1.length = 0;
gdjs.level_3203Code.GDgramaObjects2.length = 0;
gdjs.level_3203Code.GDsoloObjects1.length = 0;
gdjs.level_3203Code.GDsoloObjects2.length = 0;
gdjs.level_3203Code.GDBurgersObjects1.length = 0;
gdjs.level_3203Code.GDBurgersObjects2.length = 0;
gdjs.level_3203Code.GDBurguer_9595ScoreObjects1.length = 0;
gdjs.level_3203Code.GDBurguer_9595ScoreObjects2.length = 0;
gdjs.level_3203Code.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs.level_3203Code.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs.level_3203Code.GDBigGreenTree7Objects1.length = 0;
gdjs.level_3203Code.GDBigGreenTree7Objects2.length = 0;
gdjs.level_3203Code.GDRedHouse1Objects1.length = 0;
gdjs.level_3203Code.GDRedHouse1Objects2.length = 0;
gdjs.level_3203Code.GDCornerPlatformObjects1.length = 0;
gdjs.level_3203Code.GDCornerPlatformObjects2.length = 0;
gdjs.level_3203Code.GDDoorObjects1.length = 0;
gdjs.level_3203Code.GDDoorObjects2.length = 0;
gdjs.level_3203Code.GDSunObjects1.length = 0;
gdjs.level_3203Code.GDSunObjects2.length = 0;
gdjs.level_3203Code.GDStoneTabletObjects1.length = 0;
gdjs.level_3203Code.GDStoneTabletObjects2.length = 0;
gdjs.level_3203Code.GDSkullObjects1.length = 0;
gdjs.level_3203Code.GDSkullObjects2.length = 0;
gdjs.level_3203Code.GDGoldKeyObjects1.length = 0;
gdjs.level_3203Code.GDGoldKeyObjects2.length = 0;
gdjs.level_3203Code.GDCastlesBackgroundObjects1.length = 0;
gdjs.level_3203Code.GDCastlesBackgroundObjects2.length = 0;
gdjs.level_3203Code.GDCloud7Objects1.length = 0;
gdjs.level_3203Code.GDCloud7Objects2.length = 0;
gdjs.level_3203Code.GDBigGreenTree1Objects1.length = 0;
gdjs.level_3203Code.GDBigGreenTree1Objects2.length = 0;
gdjs.level_3203Code.GDAlternativeTowerObjects1.length = 0;
gdjs.level_3203Code.GDAlternativeTowerObjects2.length = 0;
gdjs.level_3203Code.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.level_3203Code.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.level_3203Code.GDZombieBoyObjects1.length = 0;
gdjs.level_3203Code.GDZombieBoyObjects2.length = 0;
gdjs.level_3203Code.GDExitObjects1.length = 0;
gdjs.level_3203Code.GDExitObjects2.length = 0;


return;

}

gdjs['level_3203Code'] = gdjs.level_3203Code;
