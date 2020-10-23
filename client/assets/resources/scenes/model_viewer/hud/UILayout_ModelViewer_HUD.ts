import { _decorator, Component, Node, ToggleComponent, ButtonComponent, LabelComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UILayout_ModelViewer_HUD')
export class UILayout_ModelViewer_HUD extends Component {
    
    @property({type:ToggleComponent})
    animLoop:ToggleComponent = null;

    @property({type:ButtonComponent})
    btnPrev:ButtonComponent = null;

    @property({type:ButtonComponent})
    btnNext:ButtonComponent = null;

    @property({type:LabelComponent})
    txtCurAnim:LabelComponent = null;
}
