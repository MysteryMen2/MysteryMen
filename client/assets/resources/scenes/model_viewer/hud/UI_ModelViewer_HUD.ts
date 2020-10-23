import { _decorator, Component, Node, Vec3, v3, EventTouch, ButtonComponent, director, view, loader, TextureCube, ToggleComponent, find, Terrain, instantiate, geometry, PhysicsSystem } from 'cc';
import { UIController } from '../../../qfw/base/UIController';
import { UILayer, UIMgr } from '../../../qfw/base/UIMgr';
import { PlayerCtrl } from '../../../qfw/components/PlayerCtrl';
import { UILayout_ModelViewer_HUD } from './UILayout_ModelViewer_HUD';


export class UI_ModelViewer_HUD extends UIController {

    constructor() {
        super('scenes/model_viewer/hud/ui_hud_panel', UILayer.HUD);
    }

    private get layout(): UILayout_ModelViewer_HUD {
        return this.node.getComponent(UILayout_ModelViewer_HUD);
    }

    protected onCreated() {
        this.onButtonEvent(this.layout.btnPrev, () => {
            PlayerCtrl.inst.playPrev();
            this.layout.txtCurAnim.string = PlayerCtrl.inst.curAnimName;
        });

        this.onButtonEvent(this.layout.btnNext, () => {
            PlayerCtrl.inst.playNext();
            this.layout.txtCurAnim.string = PlayerCtrl.inst.curAnimName;
        });

        this.onToggleEvent(this.layout.animLoop, (toggle: ToggleComponent) => {
            PlayerCtrl.inst.isLoop = toggle.isChecked;
        });
        
        this.layout.animLoop.isChecked = PlayerCtrl.inst.isLoop;
    }
}