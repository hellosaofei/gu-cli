import request from "@utils/request";
import { templateFileUrl, headers } from "@config/index";

export function getTemplateInfo() {
  return request({
    url: templateFileUrl,
    method: "get",
    headers,
  });
}
