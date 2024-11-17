export interface AdditionalInfo {
  image?: string; // 可选的图片链接
  link?: string; // 可选的外部链接
  techList?: string[]; // 技术栈列表
}

export interface CardProps {
  title: string;
  content: string;
  text: string;
  disabled?: boolean;
  additionalInfo?: AdditionalInfo; // 新增的扩展信息
}
