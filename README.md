# everlive-sdk with TypeScript definitions (Node.js sample)

## To compile the sample...
run `npm install`  
run `typings install` (requires installing the typings module globally)  
run `tsc` to compile

---

## Detailed instructions

Please note the settings in the "tsconfig.json" and the "definitions.d.ts" files.

#### Necessary TypeScript compiler settings
The "tsconfig.json" file excludes the entire everlive-sdk npm package folder.

#### Additional declarations inclusion
"definitions.d.ts" includes a reference to the definition files from "typings" and a comment. If you turn the comment into a triple slash reference (by adding one slash), the TypeScript compiler would throw duplicate definition errors, because the definitions for Underscore would be included twice.

If you remove the reference to the "typings/index.d.ts" file, the TS compiler would complain that definitions for classes declared in "Node.js", the "Promise" class and Underscore are missing. These are all present in the *everlive-sdk/dist/declarations/typings/global* folder.

So if you
- are already using underscore and have included its definitions - you needn't do anything more than install, in order to use everlive-sdk with TypeScript definitions
- are using underscore, but have not included its definitions OR are not using underscore at all - you need to include the definitions for underscore, in order to use everlive-sdk with TypeScript definitions

#### How to easily include or exclude definitions
You can include any definitions for any of these libraries you like - the ones we supply, or ones from third parties. Any definitions problems, for any platform we support, should be solvable by adding or excluding certain definitions from this folder - *everlive-sdk/dist/declarations*. Definitions are organized in its subfolders.

Easiest way to show the TS compiler a definition file would be with a triple slash reference to the respective definition file (like we do here with the definitions.d.ts file), which the compiler has access to.

Easiest way to exclude files or folders is through the "exclude" clause of the tsconfig.json file.

This goes for all of the other third party libraries we use, [mentioned in the docs here](http://docs.telerik.com/platform/backend-services/javascript/getting-started-javascript-sdk#using-typescript-definitions)
