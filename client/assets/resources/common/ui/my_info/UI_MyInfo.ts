import { MyInfoMgr, MyInfoEvent } from "./MyInfoMgr";
import { LabelComponent } from "cc";
import { UIController } from "../../../qfw/base/UIController";
import { UILayer } from "../../../qfw/base/UIMgr";


export class UI_MyInfo extends UIController {
    constructor() {
        super('common/ui/my_info/ui_my_info', UILayer.HUD);
    }

    onCreated() {
        this.onButtonEvent('btn_close', () => {
            this.hide();
        });

        //响应数据变化
        this.on(MyInfoEvent.INTRODUCE_CHANGED,()=>{
            this.refreshIntroduce();
        });

        //初次加载显示
        this.refreshIntroduce();
    }

    refreshIntroduce(){
        this.node.getChildByName('introduce').getComponent(LabelComponent).string = MyInfoMgr.inst.introduce;
    }
}