import { request } from "umi";

// 获取 Mock 数据
export function getMockMessage(data: any) {
  return request("/api/getMockMessage", {
    method: "GET",
    data,
  });
}
