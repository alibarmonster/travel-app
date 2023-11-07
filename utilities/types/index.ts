export type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant:
    | 'btn_dark_green'
    | 'btn_dark_blue'
    | 'btn_light_green'
    | 'btn_light_blue'
    | 'btn_white_text'
    | 'btn_green';
};
