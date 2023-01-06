export const customStyle = (StoryFn, context) => {
  // context contain args, argTypes, we can do more custom style
  console.log(context)

  return (
    <div
      style={{ margin: "20px", background: "#ffe", border: "2px solid #ff2" }}
    >
      <StoryFn />
    </div>
  )
}

// Apply from inner most
// export const globalDecorators = [
//   (StoryFn) => (
//     <div>
//       Hello <StoryFn />
//     </div>
//   ),
//   customStyle,
// ]
