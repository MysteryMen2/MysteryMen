import { _decorator, Component, Node } from 'cc';
import { UIMgr, UILayer } from '../../qfw/base/UIMgr';
import { UI_MainMenu_HUD } from './hud/UI_MainMenu_HUD';
import { UI_Common_HUD } from './hud/UI_Common_HUD';
const { ccclass, property } = _decorator;

@ccclass('AppStart')
export class AppStart extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
        UIMgr.inst.setup(UILayer.NUM);
        UIMgr.inst.showUI(UI_Common_HUD);
        UIMgr.inst.showUI(UI_MainMenu_HUD);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}