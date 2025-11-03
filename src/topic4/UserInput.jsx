// import { forwardRef } from "react";
//  react 19 k pahle e wala use hota tha

// const UserInput = (props, ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// };
// export default forwardRef(UserInput);
//  react 19 me ye tarika  use hota h 
const UserInput = (props) => {
  return (
    <div>
      <input type="text" name=""  ref= {props.ref} />
    </div>
  );
};
export default UserInput

