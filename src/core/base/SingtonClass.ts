/**
 * Created by yangsong on 14/12/18.
 * 基类
 */
class SingtonClass<T> {
    public constructor() {

    }

    private static _instance: any = null;
    public static getSingtonInstance<T>(c: { new(...param): T }, ...param: any[]): T {
        if (this._instance == null) {
            this._instance = new c(...param);
        }
        return this._instance;
    }
}