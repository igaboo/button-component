# button-component

A simple button component built for Next.js using React and Sass. It uses FontAwesome icons.

Clone both `Buttons.js` and `Buttons.module.scss` into your project, and import the Button component `import { Button } from "./Buttons";`.

Make sure you've included the FontAwesome package in your `package.json`.

# Examples

**A button with an icon**

`<Button
  text="I'm a button!"
  func={() => console.log("hello world!")}
  icons={[
    { icon: faChevronRight },
  ]}
/>`

**A button with extra icons**

`<Button
  text="I'm the primary button, with a few extras!"
  func={() => console.log("hello world!")}
  icons={[
    { icon: faChevronRight },
    { icon: faExclamationCircle },
    { icon: faGear },
    { icon: faXmark },
  ]}
/>`

**A button with the icon on the left**

`<Button
  text="Caution, it's too easy!"
  func={() => console.log("hello world!")}
  icons={[
    { icon: faExclamationCircle },
  ]}
  reverse
/>`

**A text-only button**

`<Button
  text="Nothing going on here."
  func={() => console.log("hello world!")}
/>`

**An icon-only button**

`<Button
  func={() => console.log("hello world!")}
  icons={[
    { icon: faMedal },
  ]}
/>`
