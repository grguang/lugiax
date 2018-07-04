/**
 * Created by liguoxin on 2017/3/14.
 * @flow
 */

declare module '@lugia/lugiax' {
  declare type Handler = {
    dispatch(action: Action, param: ?Object): Promise<any>,
    action: RegisterResult
  };
  declare type ActionParam = {
    [key: string]: (
      data: Object,
      param: Object,
      handle: Handler
    ) => Promise<any>
  };
  declare type Action = { name: string };
  declare type RegisterResult = {
    [key: string]: Function
  };

  declare type RegisterParam = {
    model: string,
    state: Object,
    verify?: Function,
    action?: ActionParam
  };
  declare type Option = {
    force: boolean // 是否强制注册 默认为false
  };

  declare interface Lugiax {
    register(param: RegisterParam, option?: Option): RegisterResult;

    getState(): Object;

    /**
     * 根据model名称订阅相关模型数据变化消息
     * @param modelName
     * @param () => any
     */
    subscribe(modelName: string, () => any): void;

    clear(): void;

    subscribeAll(() => any): void;
  }

  declare module.exports: Lugiax;
}
