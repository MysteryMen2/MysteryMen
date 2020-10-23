import { _decorator, director, instantiate, LabelComponent, ToggleComponent } from 'cc';
import { UIController } from '../../../qfw/base/UIController';
import { UILayer, UIMgr } from '../../../qfw/base/UIMgr';
import { UI_SkyboxSetting } from '../../../common/skybox/UI_SkyboxSetting';
import { UILayout_CommonHUD } from './UILayout_Common_HUD';
import { UI_MyInfo } from '../../../common/ui/my_info/UI_MyInfo';
import { DemoMgr } from '../DemoMgr';

export class UI_Common_HUD extends UIController {

    constructor() {
        super('scenes/start/hud/ui_hud_common', UILayer.HUD);
    }

    private get layout(): UILayout_CommonHUD {
        return this.node.getComponent(UILayout_CommonHUD);
    }

    protected onCreated() {
        this.onButtonEvent(this.layout.btnInfo, () => {
            UIMgr.inst.showUI(UI_MyInfo);
        });

        this.onButtonEvent(this.layout.btnSkyboxSetting, () => {
            UIMgr.inst.showUI(UI_SkyboxSetting);
        });

        this.onButtonEvent(this.layout.btnHome, () => {
            DemoMgr.inst.goto(0);
        });

        this.onToggleEvent(this.layout.useSkybox, (toggle: ToggleComponent) => {
            director.getScene().globals.skybox.enabled = toggle.isChecked;
        });

        this.onToggleEvent(this.layout.useIBL, (toggle: ToggleComponent) => {
            director.getScene().globals.skybox.useIBL = toggle.isChecked;
        });

        this.layout.useIBL.isChecked = director.getScene().globals.skybox.useIBL;
        this.layout.useSkybox.isChecked = director.getScene().globals.skybox.enabled;
        this.layout.title.string = DemoMgr.inst.current.title;
    }
}