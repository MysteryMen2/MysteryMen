import { _decorator, Component, Node, LabelComponent, loader, Prefab, instantiate, Vec3, v3, find } from 'cc';
import { UIMgr, UILayer } from '../qfw/UIMgr';
import { FollowCamera } from './FollowCamera';
const { ccclass, property } = _decorator;

@ccclass('TitleBar')
export class TitleBar extends Component {

    private _titleBar: Node = null;
    private _hpBar: Node = null;
    private _mpBar: Node = null;
    private _nameTxt: LabelComponent = null;

    private _hpPercent: number = 1;
    private _mpPercent: number = 1;
    private _nameStr: string = '不要太酷哦';

    private _targetPos = v3();
    private _offsetY: number = 1;

    private _lastUpdateTime = Date.now();
    private _titleBarPoint:Node = null;
    start() {
        this._titleBarPoint = this.node.getChildByName('title_bar_point') || this.node;
        this.loadTitleBar();
    }

    loadTitleBar() {
        loader.loadRes('title_bar', Prefab, (err, asset: Prefab) => {
            if (!this.isValid || !this.node.isValid) {
                return;
            }
            let titleBar = instantiate(asset);
            let root = find('Canvas'); //UIMgr.inst.getLayerNode(UILayer.GAME);
            root.addChild(titleBar);
            this._titleBar = titleBar;
            this._hpBar = titleBar.getChildByName('hp_bar');
            this._mpBar = titleBar.getChildByName('mp_bar');
            this._nameTxt = titleBar.getChildByName('name').getComponent(LabelComponent);

            this.setHPPercent(this._hpPercent);
            this.setMPPercent(this._mpPercent);
            this.setName(this._nameStr);
        });
    }

    onDestroy() {
        if (this._titleBar) {
            this._titleBar.removeFromParent();
        }
        this._titleBar = null;
    }

    //slow-update. fps = 10
    update(deltaTime: number) {
        if (!this._titleBar) {
            return;
        }

        let now = Date.now();
        if (now - this._lastUpdateTime < 100) {
            return;
        }

        this._titleBarPoint.getWorldPosition(this._targetPos);
        //this._targetPos.y += this._offsetY;
        FollowCamera.inst.camera.convertToUINode(this._targetPos, this._titleBar.parent,this._targetPos);
        this._titleBar.position = this._targetPos;
    }

    setHPPercent(percent: number) {
        this._hpPercent = percent;
        if (this._hpBar) {
            this._hpBar.setScale(percent, 1, 1);
        }
    }

    setMPPercent(percent: number) {
        this._mpPercent = percent;
        if (this._mpBar) {
            this._mpBar.setScale(percent, 1, 1);
        }
    }

    setName(name: string) {
        this._nameStr = name;
        if (this._nameTxt) {
            this._nameTxt.string = this._nameStr;
        }
    }
}
