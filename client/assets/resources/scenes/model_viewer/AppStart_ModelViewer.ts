import { _decorator, Component, Node } from 'cc';
import { UIMgr, UILayer } from '../../qfw/base/UIMgr';
import { UI_ModelViewer_HUD } from './hud/UI_ModelViewer_HUD';
const { ccclass, property } = _decorator;

@ccclass('AppStart_ModelViewer')
export class AppStart_ModelViewer extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
        UIMgr.inst.setup(UILayer.NUM);
        UIMgr.inst.showUI(UI_ModelViewer_HUD);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
