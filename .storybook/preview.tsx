import { withInfo } from "@storybook/addon-info";

const wrapperStyle: React.CSSProperties = {
  padding: "20px 40px",
};

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  info: {
    inline: true,
    header: false,
  },
  layout: "centered",
};

export const decorators = [storyWrapper, withInfo];
