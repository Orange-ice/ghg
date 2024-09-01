/**
 * 心跳基类
 */
export type Callback = (e: Event) => void;
export default class Heart {
  heartTimeOut!: number; // 心跳计时器

  ServerHeartTimeOut!: number; //

  timeout = 5000;

  // 重置
  reset(): void {
    clearTimeout(this.heartTimeOut);
    clearTimeout(this.ServerHeartTimeOut);
  }

  /**
   * 启动心跳
   * @param {Function} cb 回调函数
   */
  start(cb: Callback): void {
    this.heartTimeOut = setTimeout((e: Event) => {
      cb(e);
      this.ServerHeartTimeOut = setTimeout((e2: Event) => {
        cb(e2);
        // 重新开始检测
        this.reset();
        this.start(cb);
      }, this.timeout);
    }, this.timeout);
  }
}
