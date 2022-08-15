import { request } from '@umijs/max';

// 获取 Mock 数据
export function getMockMessage(params: any) {
  return request("/api/getMockMessage", {
    method: "GET",
    params,
  });
}
