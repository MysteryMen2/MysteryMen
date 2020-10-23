import { _decorator, Component, Node } from 'cc';
import { UI_SkyboxHUD } from './hud/UI_Skybox_HUD';
import { UIMgr, UILayer } from '../../qfw/base/UIMgr';
const { ccclass, property } = _decorator;

@ccclass('AppStart_Skybox')
export class AppStart_Skybox extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
        UIMgr.inst.setup(UILayer.NUM);
        UIMgr.inst.showUI(UI_SkyboxHUD);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
