/*
The never type represents something that never happens. It's used in situations where a value cannot exist, such as functions that:

Don't return any value because they throw an error or loop forever.

Help enforce strict checks in your code by flagging impossible scenarios.

Think of never as saying: "Nothing will come out of this code, ever."
Why Use never?
Error Checking: Ensures unreachable or unintended code paths are not ignored.

Clarity: Signals to developers that certain parts of the code are impossible to execute.

Type Safety: Helps in maintaining strict control over union types and logic flow.
*/

import React from 'react'
/*
Why Use never Instead of Optional Properties?
Using never is stricter than simply omitting a property or making it optional (?). For example:

type creditCardProps = { cardNum: string; payPalEmail?: string }; // Optional property.

With the above, someone could still add a payPalEmail (e.g., payPalEmail: "user@example.com") to creditCardProps, even though it doesn't make sense. The never type ensures that adding any value to the property is a compile-time error.

it Prevents Invalid Properties: Setting a property to never ensures it cannot have any value. For example:
In creditCardProps, payPalEmail cannot exist because its type is never.
In payPalProps, cardNum cannot exist for the same reason
*/
type creditCardProps ={cardNum: string; payPalEmail: never}
type payPalProps= {payPalEmail: string; cardNum: never}
export const paymentMethod = (props: creditCardProps | payPalProps) => {
/*
paymentMethod function checks for "cardNum" in props, TypeScript narrows down the type of props:
If "cardNum" is present, props must be of type creditCardProps.
Otherwise, props must be of type payPalProps.
The never type ensures no unexpected or invalid property creeps into the type narrowing process.
    */
    if ("cardNum" in props) {
      // TypeScript knows props is creditCardProps here.
      return <div>Credit card</div>;
    }
    // TypeScript knows props is payPalProps here.
    return <div>PayPal</div>;
  };
  
