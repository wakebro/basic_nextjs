// import { useFormState } from "react-dom";
// import { createUser } from "../doc__action";

// const initialState = {
//   message: '',
// }

// export default function Signup() {
//   const [state, formAction] = useFormState(createUser, initialState)

//   return(
//     <form action={formAction}>
//       <label htmlFor="email">Email</label>
//       <input type="text" id="email" name="email" required/>
//       {/* ... */}
//       <p aria-live="polite">{state?.message}</p>
//       <button>Sign up</button>
//     </form>
//   )
// }