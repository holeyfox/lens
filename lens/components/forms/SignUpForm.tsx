import styles from '../../styles/Home.module.css';
import { SetStateAction, useState } from 'react';
import { createProfile } from '../../lensapi/profile/profile';
import { profileStatus } from '../../utils/status';
import toast, { Toaster } from 'react-hot-toast';
import { Renderable, ValueFunction, Toast } from 'react-hot-toast/dist/core/types';
import { useRouter } from 'next/router';


const SignUpForm = () => {
    const [handle, setHandle] = useState('');
    const router = useRouter();

    const handleChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
        e.preventDefault();
        setHandle(e.target.value);
    }

    const toastFail = (error: Renderable | ValueFunction<Renderable, Toast>) => {
        toast.error(error, {
            ariaProps: {
                role: 'status',
                'aria-live': 'polite',
            },
        });
    }

    const submitProfile = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(handle);
        let response  = await createProfile(handle);

        if (response.data.createProfile.reason === profileStatus.handletaken) {
            toastFail(`"${handle}" is taken. Try another handle.`);
        } else {
            router.push('/profile');
        }
    }
  return (
      <form className={styles.form}>
        <input className={styles.input} type="text" onChange={handleChange} name="handle" value={handle} placeholder="Choose a handle"/>
        {/* <input className={styles.input} type="file" name="avatar" placeholder="Choose a handle"/> */}
        <br/>
        <button onClick={submitProfile} className={styles.button}>create profile</button>
        <Toaster />
      </form>

  )
}

export default SignUpForm
