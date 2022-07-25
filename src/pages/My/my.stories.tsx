import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Charts from "./Components/charts";

interface BaseButtonProps {
  className?: string;
  /**设置Button 的禁用 */
  disabled?: boolean;
  size?: "lg" | "sm";
  type?: "primary" | "default" | "danger" | "link";
  children?: React.ReactNode;
  href?: string;
}
type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> & {
  [P in keyof Pick<T, K>]: U;
};
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
type ButtonPropsOrigin = Partial<NativeButtonProps & AnchorButtonProps>;
export type ButtonProps = OverrideProperty<
  ButtonPropsOrigin,
  "type",
  "primary" | "default" | "danger" | "link"
>;

/**
 * button测试注释功能
 * ## Button header
 * ```js
 *  cosnt button = this.button
 * ```
 * @param {boolean} props 参数
 * @returns
 */
export const Button: FC<ButtonProps> = (props) => {
  const { children } = props;
  return <button>{children}</button>;
};
Button.defaultProps = {
  disabled: false,
};

export const defaultButton = () => (
  <Button onClick={action("clicked")}> default button </Button>
);

export const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
);

const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com">
      {" "}
      link button{" "}
    </Button>
  </>
);

export const Test = () => <Charts />;

storiesOf("Button Component", module)
  .addParameters({
    info: {
      text: "这是特使想",
      inline: true,
    },
    layout: "padded",
  })
  .add("测试button", defaultButton)
  .add("不同尺寸的 Button", buttonWithSize)
  .add("不同类型的 Button", buttonWithType)
  .add("我的charts", Test);
