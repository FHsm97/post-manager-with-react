import { useState } from "react"
import useFormInput from "../hooks/useFormInput"
import SuccessAlert from "./shared/SuccessAlert"



export default function CreatePostForm() {

    const titleInputProps = useFormInput('')
    const categoryInputProps = useFormInput('')
    const bodyInputProps = useFormInput('')
    const [showMessageSuccessfully, setShowMessageSuccessfully] = useState(false)



    // console.log(titleInputProps,categoryInputProps,bodyInputProps);

    const formSubmitHandler = async (event) => {


        event.preventDefault();//باعث میشه وقتی روی دکمه ایجاد زدیم صفحه رفرش نشه


        let data = {
            title: titleInputProps?.inputProps.value,
            category: categoryInputProps?.inputProps.value,
            body: bodyInputProps?.inputProps.value
        }

        // console.log('the form submited');
        // console.log(data);

        try {
            let res = await fetch("https://68a198366f8c17b8f5da3e00.mockapi.io/posts", {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })

            res = await res.json();

            titleInputProps?.resetValue(),
            categoryInputProps?.resetValue(),
            bodyInputProps?.resetValue()

            setShowMessageSuccessfully(true)

            setTimeout(() => {
                setShowMessageSuccessfully(false)
            }, 5000)


        } catch (error) {
            //error handling
            console.log(error);

        }

        // console.log(res);



    }





    return (
        <>
            {showMessageSuccessfully && <SuccessAlert message={'post successfully created!'} closeHandler={() => setShowMessageSuccessfully(false)} />}

            <form onSubmit={formSubmitHandler} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl w-full">
                <div className="px-4 py-6 sm:p-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 text-left">Title</label>
                            <div className="mt-2">
                                <input id="title" name="title" type="text" autoComplete="title" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...titleInputProps.inputProps} />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900 text-left">Category</label>
                            <div className="mt-2">
                                <input id="category" name="category" type="text" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...categoryInputProps.inputProps} />
                            </div>
                        </div>


                        <div className="col-span-full">
                            <label htmlFor="body" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                                Body
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="body"
                                    name="body"
                                    rows={3}
                                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    {...bodyInputProps.inputProps}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">

                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create
                    </button>
                </div>
            </form>
        </>
    )
}