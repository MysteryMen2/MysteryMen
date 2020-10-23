import { _decorator, Component, Node, game } from 'cc';

export class MyInfoEvent{
    public static INTRODUCE_CHANGED:string = 'MyInfoEvent.INTRODUCE_CHANGED';
}

export class MyInfoMgr {
    //单件类
    public static _inst: MyInfoMgr = null;
    public static get inst(): MyInfoMgr {
        if (!this._inst) {
            this._inst = new MyInfoMgr();
        }
        return this._inst;
    }

    private _introduce:string = '作者:麒麟子 VX&QQ:738337822\n分享Cocos学习和游戏开发经验，期待和大家成为朋友';

    //数据接口演示
    public get introduce(): string {
        return this._introduce;
    }

    public changeIntroduce(){
        this._introduce = '作者:麒麟子 VX&QQ:738337822\n分享Cocos学习和游戏开发经验，期待和大家成为朋友' + (new Date());
        game.emit(MyInfoEvent.INTRODUCE_CHANGED);
    }
}
