/**
 * Created by yangsong on 2014/11/22.
 */
class App {
    /**
     * 请求服务器使用的用户标识
     * @type {string}
     */
    public static ProxyUserFlag: string = "";
    /**
     * 全局配置数据
     * @type {null}
     */
    public static GlobalData: any = null;
    /**
     * ProtoConfig
     * @type {null}
     */
    public static ProtoConfig: any = null;

    /**
     * Http请求
     * @type {Http}
     */
    public static get Http(): Http {
        return Http.getSingtonInstance(Http);
    }

    /**
     * Socket请求
     * @type {null}
     */
    public static get Socket(): Socket {
        return Socket.getSingtonInstance(Socket);
    }

    /**
     * 模块管理类
     * @type {ControllerManager}
     */
    public static get ControllerManager(): ControllerManager {
        return ControllerManager.getSingtonInstance(ControllerManager);
    }

    /**
     * View管理类
     * @type {ViewManager}
     */
    public static get ViewManager(): ViewManager {
        return ViewManager.getSingtonInstance(ViewManager);
    }

    /**
     * 场景管理类
     * @type {SceneManager}
     */
    public static get SceneManager(): SceneManager {
        return SceneManager.getSingtonInstance(SceneManager);
    }

    /**
     * 调试工具
     * @type {DebugUtils}
     */
    public static get DebugUtils(): DebugUtils {
        return DebugUtils.getSingtonInstance(DebugUtils);
    }

    /**
     * 服务器返回的消息处理中心
     * @type {MessageCenter}
     */
    public static get MessageCenter(): MessageCenter {
        return MessageCenter.getSingtonInstance(MessageCenter,0);
    }

    /**
     * 统一的计时器和帧刷管理类
     * @type {TimerManager}
     */
    public static get TimerManager(): TimerManager {
        return TimerManager.getSingtonInstance(TimerManager);
    }

    /**
     * 日期工具类
     * @type {DateUtils}
     */
    public static get DateUtils(): DateUtils {
        return DateUtils.getSingtonInstance(DateUtils);
    }

    /**
     * 数学计算工具类
     * @type {MathUtils}
     */
    public static get MathUtils(): MathUtils {
        return MathUtils.getSingtonInstance(MathUtils);
    }

    /**
     * 随机数工具类
     * @type {RandomUtils}
     */
    public static get RandomUtils(): RandomUtils {
        return RandomUtils.getSingtonInstance(RandomUtils);
    }

    /**
     * 显示对象工具类
     * @type {DisplayUtils}
     */
    public static get DisplayUtils(): DisplayUtils {
        return DisplayUtils.getSingtonInstance(DisplayUtils);
    }

    /*
     * 图片合成数字工具类
     * */
    public static get BitmapNumber(): BitmapNumber {
        return BitmapNumber.getSingtonInstance(BitmapNumber);
    }

    /**
     * 引导工具类
     */
    public static get GuideUtils(): GuideUtils {
        return GuideUtils.getSingtonInstance(GuideUtils);
    }

    /**
     * Stage操作相关工具类
     */
    public static get StageUtils(): StageUtils {
        return StageUtils.getSingtonInstance(StageUtils);
    }

    /**
     * Effect工具类
     */
    public static get EffectUtils(): EffectUtils {
        return EffectUtils.getSingtonInstance(EffectUtils);
    }

    /**
     * 字符串工具类
     */
    public static get StringUtils(): StringUtils {
        return StringUtils.getSingtonInstance(StringUtils);
    }

    /**
     * 通过工具类
     */
    public static get CommonUtils(): CommonUtils {
        return CommonUtils.getSingtonInstance(CommonUtils);
    }

    /**
     * 音乐管理类
     */
    public static get SoundManager(): SoundManager {
        return SoundManager.getSingtonInstance(SoundManager);
    }

    /**
     * 设备工具类
     */
    public static get DeviceUtils(): DeviceUtils {
        return DeviceUtils.getSingtonInstance(DeviceUtils);
    }

    /**
     * 引擎扩展类
     */
    public static get EgretExpandUtils(): EgretExpandUtils {
        return EgretExpandUtils.getSingtonInstance(EgretExpandUtils);
    }

    /**
     * 键盘操作工具类
     */
    public static get KeyboardUtils(): KeyboardUtils {
        return KeyboardUtils.getSingtonInstance(KeyboardUtils);
    }

    /**
     * 摇杆操作工具类
     */
    public static get RockerUtils(): RockerUtils {
        return RockerUtils.getSingtonInstance(RockerUtils);
    }

    /**
     * 震动类
     */
    public static get ShockUtils(): ShockUtils {
        return ShockUtils.getSingtonInstance(ShockUtils);
    }

    /**
     * 资源加载工具类
     */
    public static get ResourceUtils(): ResourceUtils {
        return ResourceUtils.getSingtonInstance(ResourceUtils);
    }

    /**
     * RenderTextureManager
     */
    public static get RenderTextureManager(): RenderTextureManager {
        return RenderTextureManager.getSingtonInstance(RenderTextureManager);
    }

    /**
     * TextFlow
     */
    public static get TextFlowMaker(): TextFlowMaker {
        return TextFlowMaker.getSingtonInstance(TextFlowMaker);
    }

    /**
     * 消息通知中心
     */
    private static _notificationCenter: MessageCenter;

    public static get NotificationCenter(): MessageCenter {
        if (App._notificationCenter == null) {
            App._notificationCenter = new MessageCenter(1);
        }
        return App._notificationCenter;
    }


    /**
     * 分帧处理类
     * @returns {any}
     * @constructor
     */
    public static get DelayOptManager(): DelayOptManager {
        return DelayOptManager.getSingtonInstance(DelayOptManager);
    }

    /**
     * 数组工具类
     * @returns {any}
     * @constructor
     */
    public static get ArrayUtils(): ArrayUtils {
        return ArrayUtils.getSingtonInstance(ArrayUtils);
    }

    /**
     * 通用Loading动画
     * @returns {any}
     * @constructor
     */
    public static get EasyLoading(): EasyLoading {
        return EasyLoading.getSingtonInstance(EasyLoading);
    }

    /**
     * DragonBones工厂类
     * @returns {any}
     * @constructor
     */
    public static get DragonBonesFactory(): DragonBonesFactory {
        return DragonBonesFactory.getSingtonInstance(DragonBonesFactory);
    }

    /**
     * StarlingSwf工厂类
     * @returns {StarlingSwfFactory}
     * @constructor
     */
    public static get StarlingSwfFactory(): StarlingSwfFactory {
        return StarlingSwfFactory.getSingtonInstance(StarlingSwfFactory);
    }

    /**
     * AnchorUtils工具类
     */
    public static get AnchorUtils(): AnchorUtils {
        return AnchorUtils.getSingtonInstance(AnchorUtils);
    }

    /**
     * hack引擎的Touch事件
     */
    public static get TouchEventHook(): TouchEventHook {
        return TouchEventHook.getSingtonInstance(TouchEventHook);
    }

    /**
     * H5地址栏参数操作工作类
     */
    public static get LocationPropertyUtils(): LocationPropertyUtils {
        return LocationPropertyUtils.getSingtonInstance(LocationPropertyUtils);
    }

    /**
     * Tween工具类
     */
    public static get TweenUtils(): TweenUtils {
        return TweenUtils.getSingtonInstance(TweenUtils);
    }

    /**
     * 初始化函数
     * @constructor
     */
    public static Init(): void {
        console.log("当前引擎版本: ", egret.Capabilities.engineVersion);
        //全局配置数据
        App.GlobalData = RES.getRes("global");
        //开启调试
        App.DebugUtils.isOpen(App.GlobalData.IsDebug);
        App.DebugUtils.setThreshold(5);
        //扩展功能初始化
        App.EgretExpandUtils.init();
        //实例化Http请求
        App.Http.initServer(App.GlobalData.HttpSerever);
        //实例化ProtoBuf和Socket请求
        App.ProtoConfig = RES.getRes(App.GlobalData.ProtoConfig);
        App.Socket.initServer(App.GlobalData.SocketServer, App.GlobalData.SocketPort, new ByteArrayMsgByProtobuf());
    }
}
