const template = require('./template.html');

export const ThumbName = "thumb";
export const Thumb = () =>{
  return {
    template,
    scope: {
      post: '=post'
    },
  };
};