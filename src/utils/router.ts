import { useRouter } from 'vue-router';
import type { RouteLocationRaw } from 'vue-router';

/**
 * 路由跳转
 */
export default function useRouterPush() {
  const router = useRouter();
  /**
   * 路由跳转
   * @param to - 需要跳转的路由
   * @param newTab - 是否在新的浏览器Tab标签打开
   */
  function push(to: RouteLocationRaw, newTab = false) {
    if (newTab) {
      const routerData = router.resolve(to);
      window.open(routerData.href, '_blank');
    } else {
      router.push(to);
    }
  }

  /** 返回上一级路由 */
  function back() {
    router.go(-1);
  }

  /**
   * 跳转首页
   * @param newTab - 在新的浏览器标签打开
   */
  function toHome(newTab = false) {
    push({ name: 'root' }, newTab);
  }

  return {
    push,
    back,
    toHome
  };
}
